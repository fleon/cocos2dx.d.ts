var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('body')[0].appendChild(jq);
var modules = {};
let dts = ''

var declareAsClass = [
  'cc.kmMat4', 'cc.CanvasContextWrapper', 'cc.ScrollViewDelegate',
  'cc.IMEKeyboardNotificationInfo', 'ccs.Shape', 'cc.ColliderFilter', 'ccs.DisplayManager',
  'ccs.TweenType', 'ccs.DataInfo', 'ccs.TInfo', 'cc.DirectorDelegate',
  'cc.TableViewDelegate', 'cc.TableViewDataSource', 'cc.IMEKeyboardNotificationInfo'
]

function undeclared() {
  return '\n' + declareAsClass.map(c => {
    c = c.split('.')
    return `declare namespace ${c[0]} { class ${c[1]} { } }`
  }).join('\n')
}

String.prototype.trim = function () {
  return this.replace(/^\s*|\s*$/gm, '').replace(/[\r \t]+/gm, ' ')
}

function type(t) {
  if (t === 'ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE' ||
    t === 'ccui.LoadingBar.TYPE_LEFT | ccui.LoadingBar.TYPE_RIGHT' ||
    t === 'ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH' ||
    t === 'ccui.ListView.MAGNETIC_NONE|ccui.ListView.MAGNETIC_CENTER|ccui.ListView.MAGNETIC_BOTH_END|ccui.ListView.MAGNETIC_LEFT|ccui.ListView.MAGNETIC_RIGHT|ccui.ListView.MAGNETIC_TOP|ccui.ListView.MAGNETIC_BOTTOM' ||
    t === 'ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE' ||
    t === 'ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR' ||
    t === 'ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT' ||
    t === 'ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE' ||
    t === 'ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER' ||
    t === 'ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE' ||
    t === 'ccui.ListView.GRAVITY_LEFT|ccui.ListView.GRAVITY_RIGHT|ccui.ListView.GRAVITY_CENTER_HORIZONTAL|ccui.ListView.GRAVITY_BOTTOM|ccui.ListView.GRAVITY_CENTER_VERTICAL' ||
    t === 'cc.ProgressTimer.TYPE_RADIAL|cc.ProgressTimer.TYPE_BAR' ||
    t === 'ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT' ||
    t === 'ccui.linearVerticalLayoutManager|ccui.linearHorizontalLayoutManager|ccui.relativeLayoutManager|null') {
    return 'any'
  }
  let s = t.split('.')
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
    case 'cc.ActionFrame'.toLowerCase():
      return 'ccs.ActionFrame'
    case 'cc.rect':
      return 'cc.Rect'
    case 'cc.blendfunc':
      return 'Function'
    case 'cc.saxparser':
      return 'cc.saxParser'
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

    case 'image':
      return 'object'
    case 'cc.view':
      return 'any'
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

function fieldsToDts(fields, joiner, isModule = false, isStatic = false, isConstant = false) {
  return fields.map(f => {
    let t = type(f.type)
    if (f.name === 'create') {
      f.name = 'create()'
      return ''
    }

    let k = declareAsClass.map(d => d.split('.')[1]).indexOf(f.name)
    if (k >= 0) {
      declareAsClass.splice(k, 1)
      return comment(f.comment, joiner) + joiner + 'class ' + f.name + ' { }'
    }

    let isConstant = f.extras.indexOf('constant') >= 0
    let declarator = isConstant ? 'const ' : 'let '
    let s = comment(f.comment, joiner) + joiner + (isModule ? declarator : '') + (isStatic ? 'static ' : '') + f.name + ': ' + t
    if (isConstant && isModule) {
      s += joiner + 'type ' + f.name + ' = ' + t
    }
    return s
  }).join(joiner)
}

function isOverridden(method, _super) {
  if (!_super) return false
  return _super.methods.map(m => m.name).indexOf(method.name) >= 0 ||
    _super.interface.methods.map(m => m.name).indexOf(method.name) >= 0 ||
    _super.fields.map(m => m.name).indexOf(method.name) >= 0 ||
    _super.interface.fields.map(m => m.name).indexOf(method.name) >= 0 ||
    isOverridden(method, modules[_super.interface && _super.interface.extends])
}

function methodsToDts(methods, joiner, isModule = false, isStatic = false, _super = '') {
  return methods.map(m => {
    let t = type(m.returns.type)

    if (isOverridden(m, _super)) {
      return ''
    }

    var idx = declareAsClass.map(d => d.split('.')[1]).indexOf(m.name)
    if (idx >= 0) {
      declareAsClass.splice(idx, 1)
      return comment(m.comment, joiner) + joiner + 'class ' + m.name + ' { constructor(' + paramsToDts(m.params) + ') }'
    }

    return comment(m.comment, joiner, m) + joiner +
      (isModule ? 'function ' : '') + (isStatic ? 'static ' : '') + m.name +
      '(' + paramsToDts(m.params) + '): ' + t
  }).filter(m => m).join(joiner)
}

function initsToDts(methods, joiner, isStatic = false, _super = '', comments = true, set = new Set()) {
  let c = comment
  if (!comments) {
    //comment = () => ''
  }

  let a = methods.map(m => {
    let t = type(m.returns.type)
    if (isOverridden(m, _super)) {
      set.add(m.name)
      return comment(m.comment, joiner, m) + joiner + (isStatic ? 'static ' : '') + m.name + '(' + paramsToDts(m.params) + '): ' + t
    }
  }).filter(m => m).join(joiner)

  comment = c
  return a
}

function comment(c, joiner, method) {
  if (!comment) return ''
  if (method && method.params.length) {
    c += '\n\n' + method.params.map(p => `@param {${p.type || "any"}} ${p.name} ${p.comment}`).join('\n')
  }
  if (method && method.returns && method.returns.type) {
    c += `\n\n@returns ${method.returns.comment}`
  }
  return joiner + '/**' + c.split('\n').map((c, i, a) => {
    return joiner + ' * ' + c.trim()
  }).join('') + joiner + ' */'
}

function superMethods(s, joiner, set = new Set()) {
  if (!s) return ''
  let methods = s.interface.methods.filter(m => {
    return true
  })
  let fields = s.interface.fields.filter(f => {
    let v = !set.has(f.name)
    set.add(f.name)
    return v
  })
  if (s && s.interface) {
    let c = comment
    //comment = () => ''
    let a = `
${fieldsToDts(fields, joiner)}
${methodsToDts(methods, joiner, false, false, modules[s.interface.extends])}
${superMethods(modules[s.interface.extends], joiner, set)}
`
    comment = c
    return a
  }
  return ''
}

function moduleToDts(module) {
  let data = ''
  if (module.type === 'class') {
    let ex;
    if (module.interface.extends) {
      ex = module.interface.extends
      ex = ex.split('.')
      ex[1] = 'I' + ex[1]
      ex = ex.join('.')
    }
    let set = new Set()
    // todo: doesn't probably have all items now
    // add only overridden elements separately
    let _super = modules[module.interface.extends]
    data += `
declare namespace ${module.namespace} {
  interface I${module.name} ${ex ? 'extends ' + ex : ''} {
    ${fieldsToDts(module.interface.fields, '\n    ')}
    ${methodsToDts(module.interface.methods, '\n    ', false, false, _super)}
  }

  interface I${module.name}Overrides {
    ${initsToDts(module.interface.methods, '\n    ', false, _super)}
  }

  class ${module.name} implements I${module.name}, I${module.name}Overrides {
    ${comment(module.interface.constructor.comment, '\n    ', module.interface.constructor)}
    constructor(${paramsToDts(module.interface.constructor.params)})

    ${fieldsToDts(module.fields, '\n    ', false, true)}
    ${fieldsToDts(module.enum.fields, '\n    ', false, true)}
    ${methodsToDts(module.methods, '\n    ', false, true)}

    ${initsToDts(module.interface.methods, '\n    ', false, _super, false, set)}
    ${superMethods(module, '\n    ', set) }
  }
}
`



  } else {
    data += `
declare namespace ${module.namespace ? module.namespace + '.' + module.name : module.name} {
  ${fieldsToDts(module.fields, '\n  ', true)}
  ${fieldsToDts(module.enum.fields, '\n  ', true, false, true)}
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
    if (intf.extends.toLowerCase() === 'cc.saxparser') {
      intf.extends = 'cc.saxParser'
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

    if (module.name.charAt(0).toLowerCase() === module.name.charAt() && !/saxParser/.test(module.name)) {
      module.type = 'namespace'
    }

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
      } else if (module.type === 'namespace' || field.extras.indexOf('static') >= 0) {
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
        intf.constructor = method //todo: this doesn't seem right
        return
      }

      if (module.type === 'namespace' || method.extras.indexOf('static') >= 0) {
        module.methods.push(method)
      } else {
        intf.methods.push(method)
      }
    });

    modules[module.namespace + '.' + module.name] = module
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
