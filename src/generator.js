var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('body')[0].appendChild(jq);
var modules = {};
let dts = ''

function undeclared() {
  return '\n' + [
    'cc.TableViewDataSource', 'cc.TableViewDelegate', 'cc.BlendFunc', 'cc.kmMat4',
    'cc.CanvasContextWrapper', 'ccs.Shape', 'ccs.DisplayManager', 'ccs.TweenType',
    'ccs.DataInfo', 'cc.DirectorDelegate', 'cc.ColliderFilter', 'cc.IMEKeyboardNotificationInfo',
    'cc.ScrollViewDelegate', 'cc.ActionFrame', 'ccs.TInfo'
  ].map(c => {
    c = c.split('.')
    return `declare namespace ${c[0]} { interface ${c[1]} { } }`
  }).join('\n\n')
}

String.prototype.trim = function () {
  return this.replace(/^\s*|\s*$/gm, '').replace(/[\r \t]+/gm, ' ')
}

function type(t) {
  t = t.trim()
  if (t.indexOf('|') >= 0) {
    return t.split('|').map(type).join(' | ')
  }
  if (t.indexOf(':') >= 0) {
    return t.split(':')[1].trim()
  }
  switch (t.toLowerCase()) {
    case 'number':
    case 'int':
    case 'long':
    case 'float':
      return 'number'
    case 'null':
      return 'null'
    case 'boolean':
    case 'bool':
      return 'boolean'
    case 'string':
      return 'string';
    case 'object':
    case 'map_object':
      return 'object'
    case 'function':
      return 'Function'
    case 'array':
      return 'any[]'
    case '*':
    case 'enum':
      return 'any'
    case 'onstart':
      return 'Function'

    // bugs
    case '...cc.MenuItem'.toLowerCase():
      return 'cc.MenuItem[]'
    case 'Scale9Sprite'.toLowerCase():
    case 'cc.Scale9Sprite'.toLowerCase():
      return 'ccui.Scale9Sprite'
    case 'cc.rect':
      return 'cc.Rect'
    case 'spine.atlas':
      return 'spine.TextureAtlas'
    case 'cc.AssetsManager'.toLowerCase():
      return 'jsb.AssetsManager'
    case 'cc.EventAssetsManager'.toLowerCase():
      return 'jsb.EventAssetsManager'
    case 'cc.EventListenerAssetsManager'.toLowerCase():
      return 'jsb.EventListenerAssetsManager'
    case 'ccs.Bone._blendDirty'.toLowerCase():
      return 'any'
    case 'TEXT_ALIGNMENT_LEFT'.toLowerCase():
      return 'cc.TEXT_ALIGNMENT_LEFT'
    case 'TEXT_ALIGNMENT_CENTER'.toLowerCase():
      return 'cc.TEXT_ALIGNMENT_CENTER'
    case 'TEXT_ALIGNMENT_RIGHT'.toLowerCase():
      return 'cc.TEXT_ALIGNMENT_RIGHT'

    case 'VERTICAL_TEXT_ALIGNMENT_TOP'.toLowerCase():
      return 'cc.VERTICAL_TEXT_ALIGNMENT_TOP'
    case 'VERTICAL_TEXT_ALIGNMENT_CENTER'.toLowerCase():
      return 'cc.VERTICAL_TEXT_ALIGNMENT_CENTER'
    case 'VERTICAL_TEXT_ALIGNMENT_BOTTOM'.toLowerCase():
      return 'cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM'

    case 'cc.TableViewDataSource'.toLowerCase():
    case 'cc.TableViewDelegate'.toLowerCase():
    case 'image':
      return 'object'
    default:
      // unavailable
      if ([
        'Image', 'ccui.WebView.EventType', 'ccui.VideoPlayer.EventType', 'cc.$', 'cc.Node.RenderCmd'
      ].indexOf(t) >= 0) {
        return 'any'
      }
      t = t.replace(/^\?/g, '')
      return t || 'any'
  }
}

function name(n) {
  n = n.replace(/^\*/, '')
  return n
}

function paramsToDts(params) {
  return params.map(p => {
    if (!p.name) return ''
    return name(p.name) + ': ' + type(p.type)
  }).join(', ')
}

function fieldsToDts(fields, joiner, isModule = false) {
  return fields.map(f => {
    let isConstant = f.extras.indexOf('constant') >= 0
    let declarator = isConstant ? 'const ' : 'let '
    return comment(f.comment, joiner) + joiner + (isModule ? declarator : '') + f.name + ': ' + type(f.type)
  }).join(joiner)
}

function methodsToDts(methods, joiner, isModule = false) {
  return methods.map(m => {
    return comment(m.comment, joiner, m) + joiner + (isModule ? 'function ' : '') + m.name + '(' + paramsToDts(m.params) + '): ' + type(m.returns.type)
  }).join(joiner)
}

function enumToDts(fields, joiner, isModule = false) {
  return fields.map(f => {
    return comment(f.comment, joiner) + joiner + 'enum ' + f.name + ' { }'
  }).join(joiner)
}

function comment(c, joiner, method) {
  if (!comment) return ''
  if (method && method.params.length) {
    c += '\n\n' + method.params.map(p => `@param {${p.type}} ${p.name} ${p.comment}`).join('\n')
  }
  if (method && method.returns && method.returns.type) {
    c += `\n\n@returns ${method.returns.comment}`
  }
  return joiner + '/**' + c.split('\n').map((c, i, a) => {
    return joiner + ' * ' + c.trim()
  }).join('') + joiner + ' */'
}

function moduleToDts(module) {
  let data = ''
  if (module.type === 'class') {
    data += `
declare namespace ${module.namespace} {
  interface ${module.name} ${module.extends ? 'extends ' + module.extends : ''} {
    ${comment(module.interface.constructor.comment, '\n    ', module.interface.constructor)}
    constructor(${paramsToDts(module.interface.constructor.params)})
    ${fieldsToDts(module.interface.fields, '\n    ')}
    ${methodsToDts(module.interface.methods, '\n    ')}
  }
}
`
    if (module.fields.length || module.enum.fields.length || module.methods.length) {
      data += `
declare namespace ${module.namespace} {
  namespace ${module.name} {
    ${fieldsToDts(module.fields, '\n    ', true)}
    ${enumToDts(module.enum.fields, '\n    ', true)}
    ${methodsToDts(module.methods, '\n    ', true)}
  }
}
`
    }
  } else {
    data += `
declare namespace ${module.namespace ? module.namespace + '.' + module.name : module.name} {
  ${fieldsToDts(module.fields, '\n  ', true)}
  ${enumToDts(module.enum.fields, '\n  ', true)}
  ${methodsToDts(module.methods, '\n  ', true)}
}
`
  }

  return data
}

setTimeout(function () {
  function processFile(filepath, body) {
    var module = {}
    var intf = {
      extends: $('ul.summary:contains("Extends") .fixedFont', body).text().trim()
    }
    module.interface = intf;
    module.enum = {}
    module.name = $('.classTitle span', body).text().trim();
    let name = module.name.split('.')
    module.name = name.pop()
    if (module.name.toLowerCase() === 'loader' || module.name === '_global_') {
      return // ignore loader module
    }
    module.namespace = name.join('.')

    module.type = $('.classTitle', body).html().replace(/<span.*<\/span>/, '').trim().toLowerCase();

    var classDetail = $('h2:contains(\'Class Detail\')', body).parent();
    intf.constructor = {
      code: classDetail.find('.fixedFont').first().text().trim(),
      comment: (classDetail.find('.description').text() || '').trim(),
      params: classDetail.find('dl:contains(\'Parameters:\') dt:not(.heading)').toArray().map(function (item) {
        return {
          code: $(item).text().trim(),
          type: $('.fixedFont', item).text().trim().replace(/\{|\}/g, ''),
          name: $('b', item).text().trim(),
          extras: $('i', item).text().trim(),
          comment: ($(item).next('dd').text() || '').trim()
        }
      })
    }

    var fieldDetail = $('div.innerProps:contains(\'Field Detail\') .fixedFont', body);
    intf.fields = []
    module.enum.fields = []
    module.fields = []
    fieldDetail.each(function () {
      let field = {
        code: $(this).text().trim(),
        name: $('b', this).first().text().trim(),
        extras: $('.lighter', this).first().text().trim(),
        type: $('.light:contains(\'{\')', this).first().text().trim().replace(/\{|\}/g, ''),
        comment: ($(this).next('.description').text() || '').trim()
      };
      if ((field.extras.indexOf('static') >= 0 && field.extras.indexOf('constant') >= 0) ||
        field.name === field.name.toUpperCase()) {
        module.enum.fields.push(field)
      } else if (field.extras.indexOf('static') >= 0) {
        module.fields.push(field)
      } else {
        intf.fields.push(field)
      }
    });

    var methodDetail = $('div.innerProps:contains(\'Method Detail\') li', body);
    intf.methods = []
    module.methods = []
    methodDetail.each(function () {
      var method = {
        code: $(this).find('.fixedFont').first().text().trim(),
        name: $('b', this).first().text().trim(),
        extras: $('.lighter', this).text().trim(),
        comment: ($(this).find('.description').text() || '').trim(),
        params: $(this).find('dl:contains(\'Parameters:\') dt:not(.heading)').toArray().map(function (item) {
          return {
            code: $(item).text().trim(),
            type: $('.fixedFont', item).text().trim().replace(/\{|\}/g, ''),
            name: $('b', item).first().text().trim(),
            extras: $('i', item).text().trim(),
            comment: ($(item).next('dd').text() || '').trim()
          }
        }),
        returns: {
          type: $(this).find('dl:contains(\'Returns:\') dd .fixedFont').text().trim().replace(/\{|\}/g, ''),
          comment: ($(this).find('dl:contains(\'Returns:\') dd').text() || '').replace(/\r|\n/g, '').replace(/<.*>/g, '').trim()
        }
      }
      if (method.name === 'ctor') {
        intf.constructor = method
        return
      }

      if (method.extras.indexOf('static') >= 0) {
        module.methods.push(method)
      } else {
        intf.methods.push(method)
      }
    });

    modules[module.name] = module
    dts += moduleToDts(module)
  }

  function init() {
    var i = 0;
    var allAnchors = $('.classList a');
    $('iframe').load(function (e) {
      processFile(rightFrame.location, rightFrame.document.body.cloneNode(true))
      $('#generator-progress').text('Generating: ' + Math.floor(i / allAnchors.length * 100) + '%')
      if (allAnchors.length === i) {
        dts += undeclared()
        document.write('<pre>' + dts +'</pre>')
      } else {
        allAnchors.get(i++).click();
      }
    });

    $(`<div style="width:100%;height:100%;background:rgba(255,255,255,0.9);position:absolute;z-index:999;text-align:center">
      <div style="margin-top:200px;font-size:24px" id="generator-progress"></div>
    </div>`).appendTo('body')

    allAnchors.get(0).click();
  }

  init();

  var jq = document.createElement('script');
  jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
  document.getElementsByTagName('body')[0].appendChild(jq);
}, 1000);
