declare namespace cc {

  /**
   * Encapsulate DOM and webAudio
   * Defined in: CCAudio.js.
   */
  let Audio: any

  /**
   * The element contains the game canvas
   */
  let container: any

  /**
   * returns a new clone of the controlPoints
   * Defined in: CCActionCatmullRom.js.
   */
  let copyControlPoints: any[]

  /**
   * Default fps is 60
   * Defined in: CCDirector.js.
   */
  let defaultFPS: any

  /**
   * ************************************************
   * implementation of DisplayLinkDirector
   * ************************************************
   * Defined in: CCDirector.js.
   */
  let DisplayLinkDirector: any

  /**
   * *************************************************************************
   * Copyright (c) 2008-2010 Ricardo Quesada
   * Copyright (c) 2011-2012 cocos2d-x.org
   * Copyright (c) 2013-2014 Chukong Technologies Inc.http://www.cocos2d-x.orgPermission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * **************************************************************************
   * Defined in: CCDirector.js.
   */
  let g_NumberOfDraws: any

  /**
   * Hash Element used for "selectors with interval"
   * Defined in: CCScheduler.js.
   */
  let HashTimerEntry: any

  /**
   * A update entry list
   * Defined in: CCScheduler.js.
   */
  let HashUpdateEntry: any

  /**
   * A list double-linked list used for "updates with priority"
   * Defined in: CCScheduler.js.
   */
  let ListEntry: any

  /**
   * NodeGrid class is a class serves as a decorator of cc.Node,
   * Grid node can run grid actions over all its children (WebGL only)
   * Defined in: CCNodeGrid.js.
   */
  let NodeGrid: any

  /**
   * XXX: Yes, nodes might have a sort problem once every 15 days if the game runs at 60 FPS and each frame sprites are reordered.
   * Defined in: CCNode.js.
   */
  let s_globalOrderOfArrival: any

  /**
   * the value of stencil bits.
   * Defined in: CCClippingNode.js.
   */
  let stencilBits: number

  /**
   * Data source that governs table backend data.
   * Defined in: CCTableView.js.
   */
  let TableViewDataSource: any

  /**
   * Sole purpose of this delegate is to single touch event in this version.
   * Defined in: CCTableView.js.
   */
  let TableViewDelegate: any

  /**
   * Default Action tag
   * Defined in: CCAction.js.
   */
  enum ACTION_TAG_INVALID { }

  /**
   * The adjust factor is needed to prevent issue #442
   * One solution is to use DONT_RENDER_IN_SUBPIXELS images, but NO
   * The other issue is that in some transitions (and I don't know why)
   * the order should be reversed (In in top of Out or vice-versa).
   * Defined in: CCTransition.js.
   */
  enum ADJUST_FACTOR { }

  /**
   * Horizontal center and vertical bottom.
   * Defined in: CCTexture2D.js.
   */
  enum ALIGN_BOTTOM { }

  /**
   * Horizontal left and vertical bottom.
   * Defined in: CCTexture2D.js.
   */
  enum ALIGN_BOTTOM_LEFT { }

  /**
   * Horizontal right and vertical bottom.
   * Defined in: CCTexture2D.js.
   */
  enum ALIGN_BOTTOM_RIGHT { }

  /**
   * Horizontal center and vertical center.
   * Defined in: CCTexture2D.js.
   */
  enum ALIGN_CENTER { }

  /**
   * Horizontal left and vertical center.
   * Defined in: CCTexture2D.js.
   */
  enum ALIGN_LEFT { }

  /**
   * Horizontal right and vertical center.
   * Defined in: CCTexture2D.js.
   */
  enum ALIGN_RIGHT { }

  /**
   * Horizontal center and vertical top.
   * Defined in: CCTexture2D.js.
   */
  enum ALIGN_TOP { }

  /**
   * Horizontal left and vertical top.
   * Defined in: CCTexture2D.js.
   */
  enum ALIGN_TOP_LEFT { }

  /**
   * Horizontal right and vertical top.
   * Defined in: CCTexture2D.js.
   */
  enum ALIGN_TOP_RIGHT { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ATTRIBUTE_NAME_COLOR { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ATTRIBUTE_NAME_MVMAT { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ATTRIBUTE_NAME_POSITION { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ATTRIBUTE_NAME_TEX_COORD { }

  /**
   * default gl blend dst function. Compatible with premultiplied alpha images.
   * Defined in: CCMacro.js.
   */
  enum BLEND_DST { }

  /**
   * default gl blend src function. Compatible with premultiplied alpha images.
   * Defined in: CCMacro.js.
   */
  enum BLEND_SRC { }

  /**
   * the constant variable equals gl.CLAMP_TO_EDGE for texture
   * Defined in: CCMacro.js.
   */
  enum CLAMP_TO_EDGE { }

  /**
   * If enabled, the cc.Node objects (cc.Sprite, cc.Label,etc) will be able to render in subpixels.
   * If disabled, integer pixels will be used.
   * To enable set it to 1. Enabled by default.
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum COCOSNODE_RENDER_SUBPIXEL { }

  /**
   * Number of kinds of control event.
   * Defined in: CCControl.js.
   */
  enum CONTROL_EVENT_TOTAL_NUMBER { }

  /**
   * Kinds of possible events for the control objects.
   * Defined in: CCControl.js.
   */
  enum CONTROL_EVENT_TOUCH_DOWN { }

  /**
   * The possible state for a control.
   * Defined in: CCControl.js.
   */
  enum CONTROL_STATE_NORMAL { }

  /**
   * default tag for current item
   * Defined in: CCMacro.js.
   */
  enum CURRENT_ITEM { }

  /**
   * Default engine
   * Defined in: CCConfig.js.
   */
  enum DEFAULT_ENGINE { }

  /**
   * Defined in: CCMenu.js.
   */
  enum DEFAULT_PADDING { }

  /**
   * Defined in: CCMacro.js.
   */
  enum DEG { }

  /**
   * Seconds between FPS updates.
   * 0.5 seconds, means that the FPS number will be updated every 0.5 seconds.
   * Having a bigger number means a more reliable FPS
   * Default value: 0.1f
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum DIRECTOR_FPS_INTERVAL { }

  /**
   * Position of the FPS (Default: 0,0 (bottom-left corner))
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum DIRECTOR_STATS_POSITION { }

  /**
   * default disabled tag
   * Defined in: CCMacro.js.
   */
  enum DISABLE_TAG { }

  /**
   * Defined in: CCMacro.js.
   */
  enum DST_ALPHA { }

  /**
   * Defined in: CCMacro.js.
   */
  enum DST_COLOR { }

  /**
   * Capitalize all characters automatically.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_FLAG_INITIAL_CAPS_ALL_CHARACTERS { }

  /**
   * This flag is a hint to the implementation that during text editing,
   * the initial letter of each sentence should be capitalized.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_FLAG_INITIAL_CAPS_SENTENCE { }

  /**
   * This flag is a hint to the implementation that during text editing,
   * the initial letter of each word should be capitalized.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_FLAG_INITIAL_CAPS_WORD { }

  /**
   * Indicates that the text entered is confidential data that should be
   * obscured whenever possible. This implies EDIT_BOX_INPUT_FLAG_SENSITIVE.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_FLAG_PASSWORD { }

  /**
   * Indicates that the text entered is sensitive data that the
   * implementation must never store into a dictionary or table for use
   * in predictive, auto-completing, or other accelerated input schemes.
   * A credit card number is an example of sensitive data.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_FLAG_SENSITIVE { }

  /**
   * The EditBoxInputMode defines the type of text that the user is allowed * to enter.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_MODE_ANY { }

  /**
   * The user is allowed to enter a real number value.
   * This extends kEditBoxInputModeNumeric by allowing a decimal point.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_MODE_DECIMAL { }

  /**
   * The user is allowed to enter an e-mail address.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_MODE_EMAILADDR { }

  /**
   * The user is allowed to enter an integer value.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_MODE_NUMERIC { }

  /**
   * The user is allowed to enter a phone number.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_MODE_PHONENUMBER { }

  /**
   * The user is allowed to enter any text, except for line breaks.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_MODE_SINGLELINE { }

  /**
   * The user is allowed to enter a URL.
   * Defined in: CCEditBox.js.
   */
  enum EDITBOX_INPUT_MODE_URL { }

  /**
   * If enabled, cocos2d will maintain an OpenGL state cache internally to avoid unnecessary switches.
   * In order to use them, you have to use the following functions, instead of the the GL ones:
   * - ccGLUseProgram() instead of glUseProgram()
   * - ccGLDeleteProgram() instead of glDeleteProgram()
   * - ccGLBlendFunc() instead of glBlendFunc()
   * If this functionality is disabled, then ccGLUseProgram(), ccGLDeleteProgram(), ccGLBlendFunc() will call the GL ones, without using the cache.
   * It is recommend to enable whenever possible to improve speed.
   * If you are migrating your code from GL ES 1.1, then keep it disabled. Once all your code works as expected, turn it on.
   * Defined in: CCConfig.js.
   */
  enum ENABLE_GL_STATE_CACHE { }

  /**
   * If enabled, actions that alter the position property (eg: CCMoveBy, CCJumpBy, CCBezierBy, etc..) will be stacked.
   * If you run 2 or more 'position' actions at the same time on a node, then end position will be the sum of all the positions.
   * If disabled, only the last run action will take effect.
   * Defined in: CCConfig.js.
   */
  enum ENABLE_STACKABLE_ACTIONS { }

  /**
   * The current version of Cocos2d-JS being used.
   * Please DO NOT remove this String, it is an important flag for bug tracking.
   * If you post a bug to forum, please attach this flag.
   * Defined in: CCConfig.js.
   */
  enum ENGINE_VERSION { }

  /**
   * If enabled, the texture coordinates will be calculated by using this formula:
   * - texCoord.left = (rect.x*2+1) / (texture.wide*2);
   * - texCoord.right = texCoord.left + (rect.width*2-2)/(texture.wide*2);
   * The same for bottom and top.
   * This formula prevents artifacts by using 99% of the texture.
   * The "correct" way to prevent artifacts is by using the spritesheet-artifact-fixer.py or a similar tool.
   * Affected nodes:
   * - cc.Sprite / cc.SpriteBatchNode and subclasses: cc.LabelBMFont, cc.TMXTiledMap
   * - cc.LabelAtlas
   * - cc.QuadParticleSystem
   * - cc.TileMap
   * To enabled set it to 1. Disabled by default.
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum FIX_ARTIFACTS_BY_STRECHING_TEXEL { }

  /**
   * Defined in: CCMacro.js.
   */
  enum FLT_EPSILON { }

  /**
   * Defined in: CCMacro.js.
   */
  enum FLT_MAX { }

  /**
   * Defined in: CCMacro.js.
   */
  enum FLT_MIN { }

  /**
   * Image Format:JPG
   * Defined in: CCCommon.js.
   */
  enum FMT_JPG { }

  /**
   * Image Format:PNG
   * Defined in: CCCommon.js.
   */
  enum FMT_PNG { }

  /**
   * Image Format:RAWDATA
   * Defined in: CCCommon.js.
   */
  enum FMT_RAWDATA { }

  /**
   * Image Format:TIFF
   * Defined in: CCCommon.js.
   */
  enum FMT_TIFF { }

  /**
   * Image Format:UNKNOWN
   * Defined in: CCCommon.js.
   */
  enum FMT_UNKNOWN { }

  /**
   * Image Format:WEBP
   * Defined in: CCCommon.js.
   */
  enum FMT_WEBP { }

  /**
   * GL server side states
   * Defined in: CCMacro.js.
   */
  enum GL_ALL { }

  /**
   * enum for jpg
   * Defined in: CCRenderTexture.js.
   */
  enum IMAGE_FORMAT_JPEG { }

  /**
   * enum for png
   * Defined in: CCRenderTexture.js.
   */
  enum IMAGE_FORMAT_PNG { }

  /**
   * enum for raw
   * Defined in: CCRenderTexture.js.
   */
  enum IMAGE_FORMAT_RAWDATA { }

  /**
   * Defined in: CCMacro.js.
   */
  enum INVALID_INDEX { }

  /**
   * Whether or not support retina display
   * Defined in: CCConfig.js.
   */
  enum IS_RETINA_DISPLAY_SUPPORTED { }

  /**
   * default size for font size
   * Defined in: CCMacro.js.
   */
  enum ITEM_SIZE { }

  /**
   * Key map for keyboard event
   * Defined in: CCCommon.js.
   */
  enum KEY { }

  /**
   * Defined in: CCEditBox.js.
   */
  enum KEYBOARD_RETURNTYPE_DEFAULT { }

  /**
   * Defined in: CCEditBox.js.
   */
  enum KEYBOARD_RETURNTYPE_DONE { }

  /**
   * Defined in: CCEditBox.js.
   */
  enum KEYBOARD_RETURNTYPE_GO { }

  /**
   * Defined in: CCEditBox.js.
   */
  enum KEYBOARD_RETURNTYPE_SEARCH { }

  /**
   * Defined in: CCEditBox.js.
   */
  enum KEYBOARD_RETURNTYPE_SEND { }

  /**
   * If enabled, all subclasses of cc.LabelAtlas will draw a bounding box
   * Useful for debugging purposes only. It is recommend to leave it disabled.
   * To enable set it to a value different than 0. Disabled by default.
   * Defined in: CCConfig.js.
   */
  enum LABELATLAS_DEBUG_DRAW { }

  /**
   * If enabled, all subclasses of cc.LabelBMFont will draw a bounding box
   * Useful for debugging purposes only. It is recommend to leave it disabled.
   * To enable set it to a value different than 0. Disabled by default.
   * Defined in: CCConfig.js.
   */
  enum LABELBMFONT_DEBUG_DRAW { }

  /**
   * the constant variable equals gl.LINEAR for texture
   * Defined in: CCMacro.js.
   */
  enum LINEAR { }

  /**
   * Defined in: CCMenu.js.
   */
  enum MENU_HANDLER_PRIORITY { }

  /**
   * Defined in: CCMenu.js.
   */
  enum MENU_STATE_TRACKING_TOUCH { }

  /**
   * Defined in: CCMenu.js.
   */
  enum MENU_STATE_WAITING { }

  /**
   * the constant variable equals gl.MIRRORED_REPEAT for texture
   * Defined in: CCMacro.js.
   */
  enum MIRRORED_REPEAT { }

  /**
   * Default Node tag
   * Defined in: CCNode.js.
   */
  enum NODE_TAG_INVALID { }

  /**
   * default tag for normal
   * Defined in: CCMacro.js.
   */
  enum NORMAL_TAG { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ONE { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ONE_MINUS_CONSTANT_ALPHA { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ONE_MINUS_CONSTANT_COLOR { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ONE_MINUS_DST_ALPHA { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ONE_MINUS_DST_COLOR { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ONE_MINUS_SRC_ALPHA { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ONE_MINUS_SRC_COLOR { }

  /**
   * If most of your images have pre-multiplied alpha, set it to 1 (if you are going to use .PNG/.JPG file images).
   * Only set to 0 if ALL your images by-pass Apple UIImage loading system (eg: if you use libpng or PVR images)
   * To enable set it to a value different than 0. Enabled by default.
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA { }

  /**
   * Device oriented vertically, home button on the top (UIDeviceOrientationPortraitUpsideDown)
   * Defined in: CCMacro.js.
   */
  enum ORIENTATION_AUTO { }

  /**
   * Device oriented horizontally, home button on the right (UIDeviceOrientationLandscapeLeft)
   * Defined in: CCMacro.js.
   */
  enum ORIENTATION_LANDSCAPE { }

  /**
   * Device oriented horizontally, home button on the right
   */
  enum ORIENTATION_LANDSCAPE_LEFT { }

  /**
   * Device oriented horizontally, home button on the left
   */
  enum ORIENTATION_LANDSCAPE_RIGHT { }

  /**
   * Device oriented vertically, home button on the bottom
   */
  enum ORIENTATION_PORTRAIT { }

  /**
   * Device oriented vertically, home button on the top
   */
  enum ORIENTATION_PORTRAIT_UPSIDE_DOWN { }

  /**
   * paticle default capacity
   * Defined in: CCParticleBatchNode.js.
   */
  enum PARTICLE_DEFAULT_CAPACITY { }

  /**
   * PI is the ratio of a circle's circumference to its diameter.
   * Defined in: CCMacro.js.
   */
  enum PI { }

  /**
   * Defined in: CCDrawingPrimitivesCanvas.js.
   */
  enum PI2 { }

  /**
   * smallest such that 1.0+FLT_EPSILON != 1.0
   * Defined in: CCPointExtension.js.
   */
  enum POINT_EPSILON { }

  /**
   * Minimum priority level for user scheduling.
   * Defined in: CCScheduler.js.
   */
  enum PRIORITY_NON_SYSTEM { }

  /**
   * Defined in: CCMacro.js.
   */
  enum RAD { }

  /**
   * the constant variable equals gl.REPEAT for texture
   * Defined in: CCMacro.js.
   */
  enum REPEAT { }

  /**
   * Defined in: CCMacro.js.
   */
  enum REPEAT_FOREVER { }

  /**
   * It's the suffix that will be appended to the files in order to load "retina display" images.
   * On an iPhone4 with Retina Display support enabled, the file @"sprite-hd.png" will be loaded instead of @"sprite.png".
   * If the file doesn't exist it will use the non-retina display image.
   * Platforms: Only used on Retina Display devices like iPhone 4.
   * Defined in: CCConfig.js.
   */
  enum RETINA_DISPLAY_FILENAME_SUFFIX { }

  /**
   * If enabled, cocos2d supports retina display.
   * For performance reasons, it's recommended disable it in games without retina display support, like iPad only games.
   * To enable set it to 1. Use 0 to disable it. Enabled by default.
   * This value governs only the PNG, GIF, BMP, images.
   * This value DOES NOT govern the PVR (PVR.GZ, PVR.CCZ) files. If NPOT PVR is loaded, then it will create an NPOT texture ignoring this value.
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum RETINA_DISPLAY_SUPPORT { }

  /**
   * A tag constant for identifying fade scenes
   * Defined in: CCTransition.js.
   */
  enum SCENE_FADE { }

  /**
   * tag for scene redial
   * Defined in: CCTransitionProgress.js.
   */
  enum SCENE_RADIAL { }

  /**
   * default selected tag
   * Defined in: CCMacro.js.
   */
  enum SELECTED_TAG { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_POSITION_COLOR { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_COLOR_FRAG { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_COLOR_VERT { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_POSITION_LENGTHTEXTURECOLOR { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_POSITION_TEXTURE { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_TEXTURE_A8COLOR_FRAG { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_TEXTURE_A8COLOR_VERT { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_TEXTURE_COLOR_FRAG { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_TEXTURE_COLOR_VERT { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_TEXTURE_FRAG { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_POSITION_TEXTURE_UCOLOR { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_TEXTURE_UCOLOR_FRAG { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_TEXTURE_UCOLOR_VERT { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_TEXTURE_VERT { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_POSITION_TEXTUREA8COLOR { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_POSITION_TEXTURECOLOR { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_POSITION_TEXTURECOLORALPHATEST { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_POSITION_UCOLOR { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_UCOLOR_FRAG { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_POSITION_UCOLOR_VERT { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_SPRITE_POSITION_COLOR { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADER_SPRITE_POSITION_TEXTURE_COLOR_VERT { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_SPRITE_POSITION_TEXTURECOLOR { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SHADER_SPRITE_POSITION_TEXTURECOLORALPHATEST { }

  /**
   * Defined in: CCShaders.js.
   */
  enum SHADEREX_SWITCHMASK_FRAG { }

  /**
   * If enabled, all subclasses of cc.Sprite will draw a bounding box
   * Useful for debugging purposes only. It is recommend to leave it disabled.
   * To enable set it to a value different than 0. Disabled by default:
   * 0 -- disabled
   * 1 -- draw bounding box
   * 2 -- draw texture box
   * Defined in: CCConfig.js.
   */
  enum SPRITE_DEBUG_DRAW { }

  /**
   * If enabled, all subclasses of cc.Sprite that are rendered using an cc.SpriteBatchNode draw a bounding box.
   * Useful for debugging purposes only. It is recommend to leave it disabled.
   * To enable set it to a value different than 0. Disabled by default.
   * Defined in: CCConfig.js.
   */
  enum SPRITEBATCHNODE_DEBUG_DRAW { }

  /**
   * If enabled, the cc.Sprite objects rendered with cc.SpriteBatchNode will be able to render in subpixels.
   * If disabled, integer pixels will be used.
   * To enable set it to 1. Enabled by default.
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum SPRITEBATCHNODE_RENDER_SUBPIXEL { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SRC_ALPHA { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SRC_ALPHA_SATURATE { }

  /**
   * Defined in: CCMacro.js.
   */
  enum SRC_COLOR { }

  /**
   * The constant value of the fill style from bottom to top for cc.TableView
   * Defined in: CCTableView.js.
   */
  enum TABLEVIEW_FILL_BOTTOMUP { }

  /**
   * The constant value of the fill style from top to bottom for cc.TableView
   * Defined in: CCTableView.js.
   */
  enum TABLEVIEW_FILL_TOPDOWN { }

  /**
   * text alignment : center
   * Defined in: CCTypes.js.
   */
  enum TEXT_ALIGNMENT_CENTER { }

  /**
   * text alignment : left
   * Defined in: CCTypes.js.
   */
  enum TEXT_ALIGNMENT_LEFT { }

  /**
   * text alignment : right
   * Defined in: CCTypes.js.
   */
  enum TEXT_ALIGNMENT_RIGHT { }

  /**
   * Use GL_TRIANGLE_STRIP instead of GL_TRIANGLES when rendering the texture atlas.
   * It seems it is the recommend way, but it is much slower, so, enable it at your own risk
   * To enable set it to a value different than 0. Disabled by default.
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum TEXTURE_ATLAS_USE_TRIANGLE_STRIP { }

  /**
   * By default, cc.TextureAtlas (used by many cocos2d classes) will use VAO (Vertex Array Objects).
   * Apple recommends its usage but they might consume a lot of memory, specially if you use many of them.
   * So for certain cases, where you might need hundreds of VAO objects, it might be a good idea to disable it.
   * To disable it set it to 0. disable by default.(Not Supported on WebGL)
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum TEXTURE_ATLAS_USE_VAO { }

  /**
   * If enabled, NPOT textures will be used where available. Only 3rd gen (and newer) devices support NPOT textures.
   * NPOT textures have the following limitations:
   * - They can't have mipmaps
   * - They only accept GL_CLAMP_TO_EDGE in GL_TEXTURE_WRAP_{S,T}
   * To enable set it to a value different than 0. Disabled by default.
   * This value governs only the PNG, GIF, BMP, images.
   * This value DOES NOT govern the PVR (PVR.GZ, PVR.CCZ) files. If NPOT PVR is loaded, then it will create an NPOT texture ignoring this value.
   * To modify it, in Web engine please refer to CCConfig.js, in JSB please refer to CCConfig.h
   * Defined in: CCConfig.js.
   */
  enum TEXTURE_NPOT_SUPPORT { }

  /**
   * Defined in: CCTGAlib.js.
   */
  enum TGA_ERROR_COMPRESSED_FILE { }

  /**
   * Defined in: CCTGAlib.js.
   */
  enum TGA_ERROR_FILE_OPEN { }

  /**
   * Defined in: CCTGAlib.js.
   */
  enum TGA_ERROR_INDEXED_COLOR { }

  /**
   * Defined in: CCTGAlib.js.
   */
  enum TGA_ERROR_MEMORY { }

  /**
   * Defined in: CCTGAlib.js.
   */
  enum TGA_ERROR_READING_FILE { }

  /**
   * Defined in: CCTGAlib.js.
   */
  enum TGA_OK { }

  /**
   * Hexagonal orientation
   * Defined in: CCTMXTiledMap.js.
   */
  enum TMX_ORIENTATION_HEX { }

  /**
   * Isometric orientation
   * Defined in: CCTMXTiledMap.js.
   */
  enum TMX_ORIENTATION_ISO { }

  /**
   * Orthogonal orientation
   * Defined in: CCTMXTiledMap.js.
   */
  enum TMX_ORIENTATION_ORTHO { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_PROPERTY_LAYER { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_PROPERTY_MAP { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_PROPERTY_NONE { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_PROPERTY_OBJECT { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_PROPERTY_OBJECTGROUP { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_PROPERTY_TILE { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_TILE_DIAGONAL_FLAG { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_TILE_FLIPPED_ALL { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_TILE_FLIPPED_MASK { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_TILE_HORIZONTAL_FLAG { }

  /**
   * Defined in: CCTMXXMLParser.js.
   */
  enum TMX_TILE_VERTICAL_FLAG { }

  /**
   * vertical orientation type where the Bottom is nearer
   * Defined in: CCTransition.js.
   */
  enum TRANSITION_ORIENTATION_DOWN_OVER { }

  /**
   * horizontal orientation Type where the Left is nearer
   * Defined in: CCTransition.js.
   */
  enum TRANSITION_ORIENTATION_LEFT_OVER { }

  /**
   * horizontal orientation type where the Right is nearer
   * Defined in: CCTransition.js.
   */
  enum TRANSITION_ORIENTATION_RIGHT_OVER { }

  /**
   * vertical orientation type where the Up is nearer
   * Defined in: CCTransition.js.
   */
  enum TRANSITION_ORIENTATION_UP_OVER { }

  /**
   * Defined in: CCInputManager.js.
   */
  enum UIInterfaceOrientationLandscapeLeft { }

  /**
   * Defined in: CCInputManager.js.
   */
  enum UIInterfaceOrientationLandscapeRight { }

  /**
   * Defined in: CCInputManager.js.
   */
  enum UIInterfaceOrientationPortrait { }

  /**
   * Defined in: CCInputManager.js.
   */
  enum UIInterfaceOrientationPortraitUpsideDown { }

  /**
   * maximum unsigned int value
   * Defined in: CCMacro.js.
   */
  enum UINT_MAX { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_ALPHA_TEST_VALUE_S { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_COSTIME { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_COSTIME_S { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_MAX { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_MVMATRIX { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_MVMATRIX_S { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_MVPMATRIX { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_MVPMATRIX_S { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_PMATRIX { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_PMATRIX_S { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_RANDOM01 { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_RANDOM01_S { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_SAMPLER { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_SAMPLER_S { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_SINTIME { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_SINTIME_S { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_TIME { }

  /**
   * Defined in: CCMacro.js.
   */
  enum UNIFORM_TIME_S { }

  /**
   * If enabled, it will use LA88 (Luminance Alpha 16-bit textures) for CCLabelTTF objects.
   * If it is disabled, it will use A8 (Alpha 8-bit textures).
   * LA88 textures are 6% faster than A8 textures, but they will consume 2x memory.
   * This feature is enabled by default.
   * Defined in: CCConfig.js.
   */
  enum USE_LA88_LABELS { }

  /**
   * Defined in: CCMacro.js.
   */
  enum VERTEX_ATTRIB_COLOR { }

  /**
   * Defined in: CCMacro.js.
   */
  enum VERTEX_ATTRIB_FLAG_COLOR { }

  /**
   * Defined in: CCMacro.js.
   */
  enum VERTEX_ATTRIB_FLAG_NONE { }

  /**
   * Defined in: CCMacro.js.
   */
  enum VERTEX_ATTRIB_FLAG_POS_COLOR_TEX { }

  /**
   * Defined in: CCMacro.js.
   */
  enum VERTEX_ATTRIB_FLAG_POSITION { }

  /**
   * Defined in: CCMacro.js.
   */
  enum VERTEX_ATTRIB_FLAG_TEX_COORDS { }

  /**
   * Defined in: CCMacro.js.
   */
  enum VERTEX_ATTRIB_MAX { }

  /**
   * Defined in: CCMacro.js.
   */
  enum VERTEX_ATTRIB_POSITION { }

  /**
   * Defined in: CCMacro.js.
   */
  enum VERTEX_ATTRIB_TEX_COORDS { }

  /**
   * text alignment : bottom
   * Defined in: CCTypes.js.
   */
  enum VERTICAL_TEXT_ALIGNMENT_BOTTOM { }

  /**
   * text alignment : center
   * Defined in: CCTypes.js.
   */
  enum VERTICAL_TEXT_ALIGNMENT_CENTER { }

  /**
   * text alignment : top
   * Defined in: CCTypes.js.
   */
  enum VERTICAL_TEXT_ALIGNMENT_TOP { }

  /**
   * Defined in: CCMacro.js.
   */
  enum ZERO { }

  /**
   * default tag for zoom action tag
   * Defined in: CCMacro.js.
   */
  enum ZOOM_ACTION_TAG { }

  /**
   * the dollar sign, classic like jquery, this selector add extra methods to HTMLElement without touching its prototype
   * it is also chainable like jquery
   * Defined in: miniFramework.js.
   *
   * @param {HTMLElement|String} x pass in a css selector in string or the whole HTMLElement
   *
   * @returns {cc.$}
   */
  function $(x: HTMLElement | string): any

  /**
   * Creates a new element, and adds cc.$ methods
   * Defined in: miniFramework.js.
   *
   * @param {String} x name of the element tag to create
   *
   * @returns {cc.$}
   */
  function $new(x: string): any

  /**
   * Allocates and initializes the action.
   * Defined in: CCAction.js.
   *
   * @returns {cc.Action}
   */
  function action(): cc.Action

  /**
   * creates the action of ActionEase
   * Defined in: CCActionEase.js.
   *
   * @param {cc.ActionInterval} action
   *
   * @returns {cc.ActionEase}
   */
  function actionEase(action: cc.ActionInterval): cc.ActionEase

  /**
   * An interval action is an action that takes place within a certain period of time.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} d duration in seconds
   *
   * @returns {cc.ActionInterval}
   */
  function actionInterval(d: number): cc.ActionInterval

  /**
   * Creates an initializes the action with the property name (key), and the from and to parameters.
   * Defined in: CCActionTween.js.
   *
   * @param {Number} duration
   * @param {String} key
   * @param {Number} from
   * @param {Number} to
   *
   * @returns {cc.ActionTween}
   */
  function actionTween(duration: number, key: string, from: number, to: number): cc.ActionTween

  /**
   * Concatenate a transform matrix to another and return the result:
   * t' = t1 * t2
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.AffineTransform} t1 The first transform object
   * @param {cc.AffineTransform} t2 The transform object to concatenate
   *
   * @returns {cc.AffineTransform} The result of concatenation
   */
  function affineTransformConcat(t1: cc.AffineTransform, t2: cc.AffineTransform): cc.AffineTransform

  /**
   * Concatenate a transform matrix to another
   * The results are reflected in the first matrix.
   * t' = t1 * t2
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.AffineTransform} t1 The first transform object
   * @param {cc.AffineTransform} t2 The transform object to concatenate
   *
   * @returns {cc.AffineTransform} The result of concatenation
   */
  function affineTransformConcatIn(t1: cc.AffineTransform, t2: cc.AffineTransform): cc.AffineTransform

  /**
   * Return true if an affine transform equals to another, false otherwise.
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.AffineTransform} t1
   * @param {cc.AffineTransform} t2
   *
   * @returns {Boolean}
   */
  function affineTransformEqualToTransform(t1: cc.AffineTransform, t2: cc.AffineTransform): boolean

  /**
   * Create a identity transformation matrix:
   * [ 1, 0, 0,
   * 0, 1, 0 ]
   * Defined in: CCAffineTransform.js.
   *
   * @returns {cc.AffineTransform} cc.affineTransformMakeIdentity
   */
  function affineTransformIdentity(): cc.AffineTransform

  /**
   * Get the invert transform of an AffineTransform object
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.AffineTransform} t
   *
   * @returns {cc.AffineTransform} The inverted transform object
   */
  function affineTransformInvert(t: cc.AffineTransform): cc.AffineTransform

  /**
   * Create a cc.AffineTransform object with all contents in the matrix
   * Defined in: CCAffineTransform.js.
   *
   * @param {Number} a
   * @param {Number} b
   * @param {Number} c
   * @param {Number} d
   * @param {Number} tx
   * @param {Number} ty
   *
   * @returns {cc.AffineTransform}
   */
  function affineTransformMake(a: number, b: number, c: number, d: number, tx: number, ty: number): cc.AffineTransform

  /**
   * Create a identity transformation matrix:
   * [ 1, 0, 0,
   * 0, 1, 0 ]
   * Defined in: CCAffineTransform.js.
   *
   * @returns {cc.AffineTransform}
   */
  function affineTransformMakeIdentity(): cc.AffineTransform

  /**
   * Create a new affine transformation with a base transformation matrix and a rotation based on it.
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.AffineTransform} aTransform The base affine transform object
   * @param {Number} anAngle The angle to rotate
   *
   * @returns {cc.AffineTransform}
   */
  function affineTransformRotate(aTransform: cc.AffineTransform, anAngle: number): cc.AffineTransform

  /**
   * Create a new affine transformation with a base transformation matrix and a scale based on it.
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.AffineTransform} t The base affine transform object
   * @param {Number} sx The scale on x axis
   * @param {Number} sy The scale on y axis
   *
   * @returns {cc.AffineTransform}
   */
  function affineTransformScale(t: cc.AffineTransform, sx: number, sy: number): cc.AffineTransform

  /**
   * Create a new affine transformation with a base transformation matrix and a translation based on it.
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.AffineTransform} t The base affine transform object
   * @param {Number} tx The translation on x axis
   * @param {Number} ty The translation on y axis
   *
   * @returns {cc.AffineTransform}
   */
  function affineTransformTranslate(t: cc.AffineTransform, tx: number, ty: number): cc.AffineTransform

  /**
   * create the animate with animation
   * Defined in: CCActionInterval.js.
   *
   * @param {cc.Animation} animation
   *
   * @returns {cc.Animate}
   */
  function animate(animation: cc.Animation): cc.Animate

  /**
   * Inserts some objects at index
   * Defined in: CCMacro.js.
   *
   * @param {Array} arr
   * @param {Array} addObjs
   * @param {Number} index
   *
   * @returns {Array}
   */
  function arrayAppendObjectsToIndex(arr: any[], addObjs: any[], index: number): any[]

  /**
   * Removes from arr all values in minusArr. For each Value in minusArr, the first matching instance in arr will be removed.
   * Defined in: CCMacro.js.
   *
   * @param {Array} arr Source Array
   * @param {Array} minusArr minus Array
   */
  function arrayRemoveArray(arr: any[], minusArr: any[]): any

  /**
   * Searches for the first occurrence of object and removes it. If object is not found the function has no effect.
   * Defined in: CCMacro.js.
   *
   * @param {Array} arr Source Array
   * @param {*} delObj remove object
   */
  function arrayRemoveObject(arr: any[], delObj: any): any

  /**
   * Verify Array's Type
   * Defined in: CCMacro.js.
   *
   * @param {Array} arr
   * @param {function} type
   *
   * @returns {Boolean}
   */
  function arrayVerifyType(arr: any[], type: Function): boolean

  /**
   * Function added for JS bindings compatibility. Not needed in cocos2d-html5.
   * Defined in: CCCommon.js.
   *
   * @param {object} jsObj subclass
   * @param {object} superclass
   */
  function associateWithNative(jsObj: object, superclass: object): any

  /**
   * Defined in: CCCommon.js.
   *
   * @param {} me
   * @param {} opt_methodName
   * @param {} var_args
   */
  function base(me: any, opt_methodName: any, var_args: any): any

  /**
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} a
   * @param {Number} b
   * @param {Number} c
   * @param {Number} d
   * @param {Number} t
   *
   * @returns {Number}
   */
  function bezierAt(a: number, b: number, c: number, d: number, t: number): number

  /**
   * An action that moves the target with a cubic Bezier curve by a certain distance.
   * Relative to its movement.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} t time in seconds
   * @param {Array} c Array of points
   *
   * @returns {cc.BezierBy}
   */
  function bezierBy(t: number, c: any[]): cc.BezierBy

  /**
   * An action that moves the target with a cubic Bezier curve to a destination point.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} t
   * @param {Array} c array of points
   *
   * @returns {cc.BezierTo}
   */
  function bezierTo(t: number, c: any[]): cc.BezierTo

  /**
   * Blend Function used for textures
   * Defined in: CCTypes.js.
   *
   * @param {Number} src1 source blend function
   * @param {Number} dst1 destination blend function
   */
  function BlendFunc(src1: number, dst1: number): any

  /**
   * Defined in: CCTypes.js.
   *
   * @returns {cc.BlendFunc}
   */
  function blendFuncDisable(): cc.BlendFunc

  /**
   * Blinks a cc.Node object by modifying it's visible attribute.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration duration in seconds
   * @param {} blinks blinks in times
   *
   * @returns {cc.Blink}
   */
  function blink(duration: number, blinks: any): cc.Blink

  /**
   * Creates the action with the callback
   * Defined in: CCActionInstant.js.
   *
   * @param {function} selector
   * @param {object|null} selectorTarget
   * @param {*|null} data data for function, it accepts all data types.
   *
   * @returns {cc.CallFunc}
   */
  function callFunc(selector: Function, selectorTarget: object | null, data: any | null): cc.CallFunc

  /**
   * Returns the Cardinal Spline position for a given set of control points, tension and time.
   * CatmullRom Spline formula.
   * s(-ttt + 2tt - t)P1 + s(-ttt + tt)P2 + (2ttt - 3tt + 1)P2 + s(ttt - 2tt + t)P3 + (-2ttt + 3tt)P3 + s(ttt - tt)P4
   * Defined in: CCActionCatmullRom.js.
   *
   * @param {cc.Point} p0
   * @param {cc.Point} p1
   * @param {cc.Point} p2
   * @param {cc.Point} p3
   * @param {Number} tension
   * @param {Number} t
   *
   * @returns {cc.Point}
   */
  function cardinalSplineAt(p0: cc.Point, p1: cc.Point, p2: cc.Point, p3: cc.Point, tension: number, t: number): cc.Point

  /**
   * creates an action with a Cardinal Spline array of points and tension.
   * Defined in: CCActionCatmullRom.js.
   *
   * @param {Number} duration
   * @param {Array} points
   * @param {Number} tension
   *
   * @returns {cc.CardinalSplineBy}
   */
  function cardinalSplineBy(duration: number, points: any[], tension: number): cc.CardinalSplineBy

  /**
   * creates an action with a Cardinal Spline array of points and tension.
   * Defined in: CCActionCatmullRom.js.
   *
   * @param {Number} duration
   * @param {Array} points array of control points
   * @param {Number} tension
   *
   * @returns {cc.CardinalSplineTo}
   */
  function cardinalSplineTo(duration: number, points: any[], tension: number): cc.CardinalSplineTo

  /**
   * Creates an action with a Cardinal Spline array of points and tension
   * Defined in: CCActionCatmullRom.js.
   *
   * @param {Number} dt
   * @param {Array} points
   *
   * @returns {cc.CatmullRomBy}
   */
  function catmullRomBy(dt: number, points: any[]): cc.CatmullRomBy

  /**
   * creates an action with a Cardinal Spline array of points and tension.
   * Defined in: CCActionCatmullRom.js.
   *
   * @param {Number} dt
   * @param {Array} points
   *
   * @returns {cc.CatmullRomTo}
   */
  function catmullRomTo(dt: number, points: any[]): cc.CatmullRomTo

  /**
   * convert an affine transform object to a kmMat4 object
   * Defined in: TransformUtils.js.
   *
   * @param {cc.AffineTransform} trans
   * @param {cc.kmMat4} mat
   */
  function CGAffineToGL(trans: cc.AffineTransform, mat: cc.kmMat4): any

  /**
   * Check webgl error.Error will be shown in console if exists.
   * Defined in: CCMacro.js.
   */
  function checkGLErrorDebug(): any

  /**
   * Clamp a value between from and to.
   * Defined in: CCPointExtension.js.
   *
   * @param {Number} value
   * @param {Number} min_inclusive
   * @param {Number} max_inclusive
   *
   * @returns {Number}
   */
  function clampf(value: number, min_inclusive: number, max_inclusive: number): number

  /**
   * Create a new object and copy all properties in an exist object to the new object
   * Defined in: CCClass.js.
   *
   * @param {object|Array} obj The source object
   *
   * @returns {Array|object} The created object
   */
  function clone(obj: object | any[]): any[] | object

  /**
   * returns a new clone of the controlPoints
   * Defined in: CCActionCatmullRom.js.
   *
   * @param {} controlPoints
   *
   * @returns {Array}
   */
  function cloneControlPoints(controlPoints: any): any[]

  /**
   * Generate a color object based on multiple forms of parameters
   * Defined in: CCTypes.js.
   *
   * @param {Number|String|cc.Color} r
   * @param {Number} g
   * @param {Number} b
   * @param {Number} a
   *
   * @returns {cc.Color}
   */
  function color(r: number | string | cc.Color, g: number, b: number, a: number): cc.Color

  /**
   * returns true if both ccColor3B are equal. Otherwise it returns false.
   * Defined in: CCTypes.js.
   *
   * @param {cc.Color} color1
   * @param {cc.Color} color2
   *
   * @returns {Boolean} true if both ccColor3B are equal. Otherwise it returns false.
   */
  function colorEqual(color1: cc.Color, color2: cc.Color): boolean

  /**
   * convert Color to a string of color for style.
   * e.g. cc.color(255,6,255) to : "#ff06ff"
   * Defined in: CCTypes.js.
   *
   * @param {cc.Color} color
   *
   * @returns {String}
   */
  function colorToHex(color: cc.Color): string

  /**
   * On Mac it returns 1;
   * On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
   * Defined in: CCMacro.js.
   *
   * @returns {Number}
   */
  function contentScaleFactor(): number

  /**
   * Copy an array's item to a new array (its performance is better than Array.slice)
   * Defined in: CCMacro.js.
   *
   * @param {Array} arr
   *
   * @returns {Array}
   */
  function copyArray(arr: any[]): any[]

  /**
   * Common getter setter configuration function
   * Defined in: CCClass.js.
   *
   * @param {Object} proto A class prototype or an object to config
   * @param {String} prop Property name
   * @param {function} getter Getter function for the property
   * @param {function} setter Setter function for the property
   * @param {String} getterName Name of getter function for the property
   * @param {String} setterName Name of setter function for the property
   */
  function defineGetterSetter(proto: object, prop: string, getter: Function, setter: Function, getterName: string, setterName: string): any

  /**
   * converts degrees to radians
   * Defined in: CCMacro.js.
   *
   * @param {Number} angle
   *
   * @returns {Number}
   */
  function degreesToRadians(angle: number): number

  /**
   * Delays the action a certain amount of seconds
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} d duration in seconds
   *
   * @returns {cc.DelayTime}
   */
  function delayTime(d: number): cc.DelayTime

  /**
   * Disable default GL states:
   * - GL_TEXTURE_2D
   * - GL_TEXTURE_COORD_ARRAY
   * - GL_COLOR_ARRAY
   * Defined in: CCMacro.js.
   */
  function disableDefaultGLStates(): any

  /**
   * Iterate over an object or an array, executing a function for each matched element.
   *
   * @param {object|array} obj
   * @param {function} iterator
   * @param {object} context
   */
  function each(obj: object | any[], iterator: Function, context: object): any

  /**
   * Creates the action easing object.
   * In the opposite direction to move slowly, and then accelerated to the right direction.
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeBackIn(): object

  /**
   * Creates the action easing object.
   * Beginning of cc.EaseBackIn. Ending of cc.EaseBackOut.
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeBackInOut(): object

  /**
   * Creates the action easing object.
   * Fast moving more than the finish, and then slowly back to the finish.
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeBackOut(): object

  /**
   * Creates the action easing object.
   * Into the 4 reference point.
   * To calculate the motion curve.
   * Defined in: CCActionEase.js.
   *
   * @param {Number} p0 The first bezier parameter
   * @param {Number} p1 The second bezier parameter
   * @param {Number} p2 The third bezier parameter
   * @param {Number} p3 The fourth bezier parameter
   *
   * @returns {Object}
   */
  function easeBezierAction(p0: number, p1: number, p2: number, p3: number): object

  /**
   * Creates the action easing object.
   * Eased bounce effect at the beginning.
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeBounceIn(): object

  /**
   * Creates the action easing object.
   * Eased bounce effect at the beginning and ending.
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeBounceInOut(): object

  /**
   * Creates the action easing object.
   * Eased bounce effect at the ending.
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeBounceOut(): object

  /**
   * Creates the action easing object.
   * Reference easeInCirc:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeCircleActionIn(): object

  /**
   * Creates the action easing object.
   * Reference easeInOutCirc:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeCircleActionInOut(): object

  /**
   * Creates the action easing object.
   * Reference easeOutCirc:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeCircleActionOut(): object

  /**
   * Creates the action easing object.
   * Reference easeInCubic:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeCubicActionIn(): object

  /**
   * Creates the action easing object.
   * Reference easeInOutCubic:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeCubicActionInOut(): object

  /**
   * Creates the action easing object.
   * Reference easeOutCubic:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeCubicActionOut(): object

  /**
   * Creates the action easing obejct with the period in radians (default is 0.3).
   * Reference easeInElastic:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @param {Number} period
   *
   * @returns {Object}
   */
  function easeElasticIn(period: number): object

  /**
   * Creates the action easing object with the period in radians (default is 0.3).
   * Reference easeInOutElastic:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @param {Number} period
   *
   * @returns {Object}
   */
  function easeElasticInOut(period: number): object

  /**
   * Creates the action easing object with the period in radians (default is 0.3).
   * Reference easeOutElastic:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @param {Number} period
   *
   * @returns {Object}
   */
  function easeElasticOut(period: number): object

  /**
   * Creates the action easing object with the rate parameter.
   * Reference easeInExpo:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeExponentialIn(): object

  /**
   * creates an EaseExponentialInOut action easing object.
   * Reference easeInOutExpo:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeExponentialInOut(): object

  /**
   * creates the action easing object.
   * Reference easeOutExpo:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeExponentialOut(): object

  /**
   * Creates the action easing object with the rate parameter.
   * From slow to fast.
   * Defined in: CCActionEase.js.
   *
   * @param {Number} rate
   *
   * @returns {Object}
   */
  function easeIn(rate: number): object

  /**
   * Creates the action easing object with the rate parameter.
   * Slow to fast then to slow.
   * Defined in: CCActionEase.js.
   *
   * @param {Number} rate
   *
   * @returns {Object}
   */
  function easeInOut(rate: number): object

  /**
   * Creates the action easing object with the rate parameter.
   * From fast to slow.
   * Defined in: CCActionEase.js.
   *
   * @param {Number} rate
   *
   * @returns {Object}
   */
  function easeOut(rate: number): object

  /**
   * Creates the action easing object.
   * Reference easeInQuad:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeQuadraticActionIn(): object

  /**
   * Creates the action easing object.
   * Reference easeInOutQuad:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeQuadraticActionInOut(): object

  /**
   * Creates the action easing object.
   * Reference easeOutQuad:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeQuadraticActionOut(): object

  /**
   * Creates the action easing object.
   * Reference easeIntQuart:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeQuarticActionIn(): object

  /**
   * Creates the action easing object.
   * Reference easeInOutQuart:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeQuarticActionInOut(): object

  /**
   * Creates the action easing object.
   * Reference easeOutQuart:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeQuarticActionOut(): object

  /**
   * Creates the action easing object.
   * Reference easeInQuint:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeQuinticActionIn(): object

  /**
   * Creates the action easing object.
   * Reference easeInOutQuint:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeQuinticActionInOut(): object

  /**
   * Creates the action easing object.
   * Reference easeOutQuint:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeQuinticActionOut(): object

  /**
   * Creates the action with the inner action and the rate parameter.
   * Defined in: CCActionEase.js.
   *
   * @param {cc.ActionInterval} action
   * @param {Number} rate
   *
   * @returns {cc.EaseRateAction}
   */
  function easeRateAction(action: cc.ActionInterval, rate: number): cc.EaseRateAction

  /**
   * creates an EaseSineIn action.
   * Reference easeInSine:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeSineIn(): object

  /**
   * creates the action easing object.
   * Reference easeInOutSine:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeSineInOut(): object

  /**
   * Creates an EaseSineOut action easing object.
   * Reference easeOutSine:
   * http://www.zhihu.com/question/21981571/answer/19925418
   * Defined in: CCActionEase.js.
   *
   * @returns {Object}
   */
  function easeSineOut(): object

  /**
   * GL states that are enabled:
   * - GL_TEXTURE_2D
   * - GL_VERTEX_ARRAY
   * - GL_TEXTURE_COORD_ARRAY
   * - GL_COLOR_ARRAY
   * Defined in: CCMacro.js.
   */
  function enableDefaultGLStates(): any

  /**
   * Copy all of the properties in source objects to target object and return the target object.
   *
   * @param {object} target
   * @param {object} *sources
   *
   * @returns {object}
   */
  function extend(target: object, sources: object): object

  /**
   * Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration duration in seconds
   *
   * @returns {cc.FadeIn}
   */
  function fadeIn(duration: number): cc.FadeIn

  /**
   * Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} d duration in seconds
   *
   * @returns {cc.FadeOut}
   */
  function fadeOut(d: number): cc.FadeOut

  /**
   * Creates the action with the grid size and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {} duration
   * @param {} gridSize
   *
   * @returns {cc.FadeOutBLTiles}
   */
  function fadeOutBLTiles(duration: any, gridSize: any): cc.FadeOutBLTiles

  /**
   * Creates the action with the grid size and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   *
   * @returns {cc.FadeOutDownTiles}
   */
  function fadeOutDownTiles(duration: number, gridSize: cc.Size): cc.FadeOutDownTiles

  /**
   * Creates the action with the grid size and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {} duration
   * @param {} gridSize
   *
   * @returns {cc.FadeOutTRTiles}
   */
  function fadeOutTRTiles(duration: any, gridSize: any): cc.FadeOutTRTiles

  /**
   * Creates the action with the grid size and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   *
   * @returns {cc.FadeOutUpTiles}
   */
  function fadeOutUpTiles(duration: number, gridSize: cc.Size): cc.FadeOutUpTiles

  /**
   * Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration
   * @param {Number} opacity 0-255, 0 is transparent
   *
   * @returns {cc.FadeTo}
   */
  function fadeTo(duration: number, opacity: number): cc.FadeTo

  /**
   * Create a FlipX action to flip or unflip the target.
   * Defined in: CCActionInstant.js.
   *
   * @param {Boolean} flip Indicate whether the target should be flipped or not
   *
   * @returns {cc.FlipX}
   */
  function flipX(flip: boolean): cc.FlipX

  /**
   * Create a Flip X 3D action with duration.
   * Flip around.
   * Defined in: CCActionGrid3D.js.
   *
   * @param {Number} duration
   *
   * @returns {cc.FlipX3D}
   */
  function flipX3D(duration: number): cc.FlipX3D

  /**
   * Create a FlipY action to flip or unflip the target.
   * Defined in: CCActionInstant.js.
   *
   * @param {Boolean} flip
   *
   * @returns {cc.FlipY}
   */
  function flipY(flip: boolean): cc.FlipY

  /**
   * Create a flip Y 3d action with duration.
   * Upside down.
   * Defined in: CCActionGrid3D.js.
   *
   * @param {Number} duration
   *
   * @returns {cc.FlipY3D}
   */
  function flipY3D(duration: number): cc.FlipY3D

  /**
   * creates the action with a set boundary.
   * creates the action with no boundary set.
   * Defined in: CCAction.js.
   *
   * @param {cc.Node} followedNode
   * @param {cc.Rect} rect
   *
   * @returns {cc.Follow|Null} returns the cc.Follow object on success
   */
  function follow(followedNode: cc.Node, rect: cc.Rect): cc.Follow | null

  /**
   * A string tool to construct a string with format string.
   * for example:
   * cc.formatStr("a: %d, b: %b", a, b);
   * cc.formatStr(a, b, c);
   *
   * @returns {String}
   */
  function formatStr(): string

  /**
   * returns a point from the array
   * Defined in: CCActionCatmullRom.js.
   *
   * @param {Array} controlPoints
   * @param {Number} pos
   *
   * @returns {Array}
   */
  function getControlPointAt(controlPoints: any[], pos: number): any[]

  /**
   * get image format by image data
   * Defined in: CCCommon.js.
   *
   * @param {Array} imgData
   *
   * @returns {Number}
   */
  function getImageFormatByData(imgData: any[]): number

  /**
   * If the texture is not already bound, it binds it.
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will call glBindTexture() directly.
   * Defined in: CCGLStateCache.js.
   *
   * @param {cc.Texture2D} textureId
   */
  function glBindTexture2D(textureId: cc.Texture2D): any

  /**
   * If the texture is not already bound to a given unit, it binds it.
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will call glBindTexture() directly.
   * Defined in: CCGLStateCache.js.
   *
   * @param {Number} textureUnit
   * @param {cc.Texture2D} textureId
   */
  function glBindTexture2DN(textureUnit: number, textureId: cc.Texture2D): any

  /**
   * If the vertex array is not already bound, it binds it.
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will call glBindVertexArray() directly.
   * Defined in: CCGLStateCache.js.
   *
   * @param {Number} vaoId
   */
  function glBindVAO(vaoId: number): any

  /**
   * Uses a blending function in case it not already used.
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will the glBlendFunc() directly.
   * Defined in: CCGLStateCache.js.
   *
   * @param {Number} sfactor
   * @param {Number} dfactor
   */
  function glBlendFunc(sfactor: number, dfactor: number): any

  /**
   * Defined in: CCGLStateCache.js.
   *
   * @param {Number} sfactor
   * @param {Number} dfactor
   */
  function glBlendFuncForParticle(sfactor: number, dfactor: number): any

  /**
   * Resets the blending mode back to the cached state in case you used glBlendFuncSeparate() or glBlendEquation().
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will just set the default blending mode using GL_FUNC_ADD.
   * Defined in: CCGLStateCache.js.
   */
  function glBlendResetToCache(): any

  /**
   * Deletes the GL program. If it is the one that is being used, it invalidates it.
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will the glDeleteProgram() directly.
   * Defined in: CCGLStateCache.js.
   *
   * @param {WebGLProgram} program
   */
  function glDeleteProgram(program: WebGLProgram): any

  /**
   * It will delete a given texture. If the texture was bound, it will invalidate the cached.
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will call glDeleteTextures() directly.
   * Defined in: CCGLStateCache.js.
   *
   * @param {WebGLTexture} textureId
   */
  function glDeleteTexture(textureId: WebGLTexture): any

  /**
   * It will delete a given texture. If the texture was bound, it will invalidate the cached for the given texture unit.
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will call glDeleteTextures() directly.
   * Defined in: CCGLStateCache.js.
   *
   * @param {Number} textureUnit
   * @param {WebGLTexture} textureId
   */
  function glDeleteTextureN(textureUnit: number, textureId: WebGLTexture): any

  /**
   * It will enable / disable the server side GL states.
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will call glEnable() directly.
   * Defined in: CCGLStateCache.js.
   *
   * @param {Number} flags
   */
  function glEnable(flags: number): any

  /**
   * Invalidates the GL state cache.
   * If CC_ENABLE_GL_STATE_CACHE it will reset the GL state cache.
   * Defined in: CCGLStateCache.js.
   */
  function glInvalidateStateCache(): any

  /**
   * Convert a kmMat4 object to an affine transform object
   * Defined in: TransformUtils.js.
   *
   * @param {cc.kmMat4} mat
   * @param {cc.AffineTransform} trans
   */
  function GLToCGAffine(mat: cc.kmMat4, trans: cc.AffineTransform): any

  /**
   * Uses the GL program in case program is different than the current one.
   * If CC_ENABLE_GL_STATE_CACHE is disabled, it will the glUseProgram() directly.
   * Defined in: CCGLStateCache.js.
   *
   * @param {WebGLProgram} program
   */
  function glUseProgram(program: WebGLProgram): any

  /**
   * creates the action with size and duration
   * Defined in: CCActionGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   *
   * @returns {cc.Grid3DAction}
   */
  function grid3DAction(duration: number, gridSize: cc.Size): cc.Grid3DAction

  /**
   * creates the action with size and duration
   * Defined in: CCActionGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   *
   * @returns {cc.GridAction}
   */
  function gridAction(duration: number, gridSize: cc.Size): cc.GridAction

  /**
   * convert a string of color for style to Color.
   * e.g. "#ff06ff" to : cc.color(255,6,255)
   * Defined in: CCTypes.js.
   *
   * @param {String} hex
   *
   * @returns {cc.Color}
   */
  function hexToColor(hex: string): cc.Color

  /**
   * Hide the node.
   * Defined in: CCActionInstant.js.
   *
   * @returns {cc.Hide}
   */
  function hide(): cc.Hide

  /**
   * IME Keyboard Notification Info structure
   * Defined in: CCIMEDispatcher.js.
   *
   * @param {cc.Rect} begin the soft keyboard rectangle when animatin begin
   * @param {cc.Rect} end the soft keyboard rectangle when animatin end
   * @param {Number} duration the soft keyboard animation duration
   */
  function IMEKeyboardNotificationInfo(begin: cc.Rect, end: cc.Rect, duration: number): any

  /**
   * Increments the GL Draws counts by one.
   * The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.
   * Defined in: CCMacro.js.
   *
   * @param {Number} addNumber
   */
  function incrementGLDraws(addNumber: number): any

  /**
   * Another way to subclass: Using Google Closure.
   * The following code was copied + pasted from goog.base / goog.inherits
   * Defined in: CCCommon.js.
   *
   * @param {Function} childCtor
   * @param {Function} parentCtor
   */
  function inherits(childCtor: Function, parentCtor: Function): any

  /**
   * Check the obj whether is array or not
   *
   * @param {*} obj
   *
   * @returns {boolean}
   */
  function isArray(obj: any): boolean

  /**
   * Check the url whether cross origin
   *
   * @param {String} url
   *
   * @returns {boolean}
   */
  function isCrossOrigin(url: string): boolean

  /**
   * Check the obj whether is function or not
   *
   * @param {*} obj
   *
   * @returns {boolean}
   */
  function isFunction(obj: any): boolean

  /**
   * Check the obj whether is number or not
   *
   * @param {*} obj
   *
   * @returns {boolean}
   */
  function isNumber(obj: any): boolean

  /**
   * Check the obj whether is object or not
   *
   * @param {*} obj
   *
   * @returns {boolean}
   */
  function isObject(obj: any): boolean

  /**
   * Check the obj whether is string or not
   *
   * @param {*} obj
   *
   * @returns {boolean}
   */
  function isString(obj: any): boolean

  /**
   * Check the obj whether is undefined or not
   *
   * @param {*} obj
   *
   * @returns {boolean}
   */
  function isUndefined(obj: any): boolean

  /**
   * Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
   * Relative to its movement.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration
   * @param {cc.Point|Number} position
   * @param {Number} y
   * @param {Number} height
   * @param {Number} jumps
   *
   * @returns {cc.JumpBy}
   */
  function jumpBy(duration: number, position: cc.Point | number, y: number, height: number, jumps: number): cc.JumpBy

  /**
   * creates the action with the number of jumps, the sin amplitude, the grid size and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number} numberOfJumps
   * @param {Number} amplitude
   *
   * @returns {cc.JumpTiles3D}
   */
  function jumpTiles3D(duration: number, gridSize: cc.Size, numberOfJumps: number, amplitude: number): cc.JumpTiles3D

  /**
   * Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute.
   * Jump to the specified location.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration
   * @param {cc.Point|Number} position
   * @param {Number} y
   * @param {Number} height
   * @param {Number} jumps
   *
   * @returns {cc.JumpTo}
   */
  function jumpTo(duration: number, position: cc.Point | number, y: number, height: number, jumps: number): cc.JumpTo

  /**
   * creates a lens 3d action with center position, radius
   * Defined in: CCActionGrid3D.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {cc.Point} position
   * @param {Number} radius
   *
   * @returns {cc.Lens3D}
   */
  function lens3D(duration: number, gridSize: cc.Size, position: cc.Point, radius: number): cc.Lens3D

  /**
   * Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
   * Defined in: CCMacro.js.
   *
   * @param {Number} a number A
   * @param {Number} b number B
   * @param {Number} r ratio between 0 and 1
   */
  function lerp(a: number, b: number, r: number): any

  /**
   * creates the action with amplitude, a grid and duration
   * Defined in: CCActionGrid3D.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number} waves
   * @param {Number} amplitude
   *
   * @returns {cc.Liquid}
   */
  function liquid(duration: number, gridSize: cc.Size, waves: number, amplitude: number): cc.Liquid

  /**
   * Create the action.
   * Relative to its coordinate moves a certain distance.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration duration in seconds
   * @param {cc.Point|Number} deltaPos
   * @param {Number} deltaY
   *
   * @returns {cc.MoveBy}
   */
  function moveBy(duration: number, deltaPos: cc.Point | number, deltaY: number): cc.MoveBy

  /**
   * Create new action.
   * Moving to the specified coordinates.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration duration in seconds
   * @param {cc.Point} position
   * @param {Number} y
   *
   * @returns {cc.MoveBy}
   */
  function moveTo(duration: number, position: cc.Point, y: number): cc.MoveBy

  /**
   * Defined in: CCRenderTexture.js.
   *
   * @param {Number} x
   *
   * @returns {Number} Constructor
   */
  function NextPOT(x: number): number

  /**
   * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix
   * Defined in: CCMacro.js.
   *
   * @param {cc.Node} node setup node
   */
  function nodeDrawSetup(node: cc.Node): any

  /**
   * Helper function that creates a cc.Point.
   * Defined in: CCGeometry.js.
   *
   * @param {Number|cc.Point} x a Number or a size object
   * @param {Number} y
   *
   * @returns {cc.Point}
   */
  function p(x: number | cc.Point, y: number): cc.Point

  /**
   * Calculates sum of two points.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   *
   * @returns {cc.Point}
   */
  function pAdd(v1: cc.Point, v2: cc.Point): cc.Point

  /**
   * adds one point to another (inplace)
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   */
  function pAddIn(v1: cc.Point, v2: cc.Point): any

  /**
   * create PageTurn3D action
   * Defined in: CCActionPageTurn3D.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   *
   * @returns {cc.PageTurn3D}
   */
  function pageTurn3D(duration: number, gridSize: cc.Size): cc.PageTurn3D

  /**
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} a
   * @param {cc.Point} b
   *
   * @returns {Number} the angle in radians between two vector directions
   */
  function pAngle(a: cc.Point, b: cc.Point): number

  /**
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} a
   * @param {cc.Point} b
   *
   * @returns {Number} the signed angle in radians between two vector directions
   */
  function pAngleSigned(a: cc.Point, b: cc.Point): number

  /**
   * Clamp a point between from and to.
   * Defined in: CCPointExtension.js.
   *
   * @param {Point} p
   * @param {Number} min_inclusive
   * @param {Number} max_inclusive
   *
   * @returns {cc.Point}
   */
  function pClamp(p: Point, min_inclusive: number, max_inclusive: number): cc.Point

  /**
   * Multiplies a nd b components, a.x*b.x, a.y*b.y
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} a
   * @param {cc.Point} b
   *
   * @returns {cc.Point}
   */
  function pCompMult(a: cc.Point, b: cc.Point): cc.Point

  /**
   * Run a math operation function on each point component
   * Math.abs, Math.fllor, Math.ceil, Math.round.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} p
   * @param {Function} opFunc
   *
   * @returns {cc.Point}
   */
  function pCompOp(p: cc.Point, opFunc: Function): cc.Point

  /**
   * Calculates cross product of two points.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   *
   * @returns {Number}
   */
  function pCross(v1: cc.Point, v2: cc.Point): number

  /**
   * Calculates the distance between two points
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   *
   * @returns {Number}
   */
  function pDistance(v1: cc.Point, v2: cc.Point): number

  /**
   * Calculates the square distance between two points (not calling sqrt() )
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} point1
   * @param {cc.Point} point2
   *
   * @returns {Number}
   */
  function pDistanceSQ(point1: cc.Point, point2: cc.Point): number

  /**
   * Calculates dot product of two points.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   *
   * @returns {Number}
   */
  function pDot(v1: cc.Point, v2: cc.Point): number

  /**
   * Converts radians to a normalized vector.
   * Defined in: CCPointExtension.js.
   *
   * @param {Number} a
   *
   * @returns {cc.Point}
   */
  function pForAngle(a: number): cc.Point

  /**
   * Quickly convert cc.Size to a cc.Point
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Size} s
   *
   * @returns {cc.Point}
   */
  function pFromSize(s: cc.Size): cc.Point

  /**
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} a
   * @param {cc.Point} b
   * @param {Number} variance
   *
   * @returns {Boolean} if points have fuzzy equality which means equal with some degree of variance.
   */
  function pFuzzyEqual(a: cc.Point, b: cc.Point, variance: number): boolean

  /**
   * copies the position of one point to another
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   */
  function pIn(v1: cc.Point, v2: cc.Point): any

  /**
   * ccpIntersectPoint return the intersection point of line A-B, C-D
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} A
   * @param {cc.Point} B
   * @param {cc.Point} C
   * @param {cc.Point} D
   *
   * @returns {cc.Point}
   */
  function pIntersectPoint(A: cc.Point, B: cc.Point, C: cc.Point, D: cc.Point): cc.Point

  /**
   * Creates a Place action with a position.
   * Defined in: CCActionInstant.js.
   *
   * @param {cc.Point|Number} pos
   * @param {Number} y
   *
   * @returns {cc.Place}
   */
  function place(pos: cc.Point | number, y: number): cc.Place

  /**
   * Calculates distance between point an origin
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v
   *
   * @returns {Number}
   */
  function pLength(v: cc.Point): number

  /**
   * Calculates the square length of a cc.Point (not calling sqrt() )
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v
   *
   * @returns {Number}
   */
  function pLengthSQ(v: cc.Point): number

  /**
   * Linear Interpolation between two points a and b
   * alpha == 0 ? a
   * alpha == 1 ? b
   * otherwise a value between a..b
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} a
   * @param {cc.Point} b
   * @param {Number} alpha
   *
   * @returns {cc.Point}
   */
  function pLerp(a: cc.Point, b: cc.Point, alpha: number): cc.Point

  /**
   * A general line-line intersection test
   * indicating successful intersection of a line
   * note that to truly test intersection for segments we have to make
   * sure that s & t lie within [0..1] and for rays, make sure s & t > 0
   * the hit point is p3 + t * (p4 - p3);
   * the hit point also is p1 + s * (p2 - p1);
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} A A is the startpoint for the first line P1 = (p1 - p2).
   * @param {cc.Point} B B is the endpoint for the first line P1 = (p1 - p2).
   * @param {cc.Point} C C is the startpoint for the second line P2 = (p3 - p4).
   * @param {cc.Point} D D is the endpoint for the second line P2 = (p3 - p4).
   * @param {cc.Point} retP retP.x is the range for a hitpoint in P1 (pa = p1 + s*(p2 - p1)),
   * retP.y is the range for a hitpoint in P3 (pa = p2 + t*(p4 - p3)).
   *
   * @returns {Boolean}
   */
  function pLineIntersect(A: cc.Point, B: cc.Point, C: cc.Point, D: cc.Point, retP: cc.Point): boolean

  /**
   * Calculates midpoint between two points.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   *
   * @returns {cc.Point}
   */
  function pMidpoint(v1: cc.Point, v2: cc.Point): cc.Point

  /**
   * Returns point multiplied by given factor.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} point
   * @param {Number} floatVar
   *
   * @returns {cc.Point}
   */
  function pMult(point: cc.Point, floatVar: number): cc.Point

  /**
   * multiplies the point with the given factor (inplace)
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} point
   * @param {Number} floatVar
   */
  function pMultIn(point: cc.Point, floatVar: number): any

  /**
   * Returns opposite of point.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} point
   *
   * @returns {cc.Point}
   */
  function pNeg(point: cc.Point): cc.Point

  /**
   * Returns point multiplied to a length of 1.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v
   *
   * @returns {cc.Point}
   */
  function pNormalize(v: cc.Point): cc.Point

  /**
   * normalizes the point (inplace)
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v
   */
  function pNormalizeIn(v: cc.Point): any

  /**
   * Apply the affine transformation on a point.
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.Point|Number} point or x
   * @param {cc.AffineTransform|Number} transOrY transform matrix or y
   * @param {cc.AffineTransform} t transform matrix or y
   *
   * @returns {cc.Point}
   */
  function pointApplyAffineTransform(point: cc.Point | number, transOrY: cc.AffineTransform | number, t: cc.AffineTransform): cc.Point

  /**
   * Check whether a point's value equals to another
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Point} point1
   * @param {cc.Point} point2
   *
   * @returns {Boolean}
   */
  function pointEqualToPoint(point1: cc.Point, point2: cc.Point): boolean

  /**
   * Converts a Point in pixels to points
   * Defined in: CCMacro.js.
   *
   * @param {cc.Rect} pixels
   *
   * @returns {cc.Point}
   */
  function pointPixelsToPoints(pixels: cc.Rect): cc.Point

  /**
   * Converts a Point in points to pixels
   * Defined in: CCMacro.js.
   *
   * @param {cc.Point} points
   *
   * @returns {cc.Point}
   */
  function pointPointsToPixels(points: cc.Point): cc.Point

  /**
   * Calculates perpendicular of v, rotated 90 degrees counter-clockwise -- cross(v, perp(v)) >= 0
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} point
   *
   * @returns {cc.Point}
   */
  function pPerp(point: cc.Point): cc.Point

  /**
   * Calculates the projection of v1 over v2.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   *
   * @returns {cc.Point}
   */
  function pProject(v1: cc.Point, v2: cc.Point): cc.Point

  /**
   * Creates and initializes the action with a duration, a "from" percentage and a "to" percentage
   * Defined in: CCActionProgressTimer.js.
   *
   * @param {Number} duration duration in seconds
   * @param {Number} fromPercentage
   * @param {Number} toPercentage
   *
   * @returns {cc.ProgressFromTo}
   */
  function progressFromTo(duration: number, fromPercentage: number, toPercentage: number): cc.ProgressFromTo

  /**
   * Creates and initializes with a duration and a percent
   * Defined in: CCActionProgressTimer.js.
   *
   * @param {Number} duration duration in seconds
   * @param {Number} percent
   *
   * @returns {cc.ProgressTo}
   */
  function progressTo(duration: number, percent: number): cc.ProgressTo

  /**
   * Rotates two points.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   *
   * @returns {cc.Point}
   */
  function pRotate(v1: cc.Point, v2: cc.Point): cc.Point

  /**
   * Rotates a point counter clockwise by the angle around a pivot
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v v is the point to rotate
   * @param {cc.Point} pivot pivot is the pivot, naturally
   * @param {Number} angle angle is the angle of rotation cw in radians
   *
   * @returns {cc.Point} the rotated point
   */
  function pRotateByAngle(v: cc.Point, pivot: cc.Point, angle: number): cc.Point

  /**
   * Calculates perpendicular of v, rotated 90 degrees clockwise -- cross(v, rperp(v)) <= 0
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} point
   *
   * @returns {cc.Point}
   */
  function pRPerp(point: cc.Point): cc.Point

  /**
   * check to see if both points are equal
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} A A ccp a
   * @param {cc.Point} B B ccp b to be compared
   *
   * @returns {Boolean} the true if both ccp are same
   */
  function pSameAs(A: cc.Point, B: cc.Point): boolean

  /**
   * ccpSegmentIntersect return YES if Segment A-B intersects with segment C-D.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} A
   * @param {cc.Point} B
   * @param {cc.Point} C
   * @param {cc.Point} D
   *
   * @returns {Boolean}
   */
  function pSegmentIntersect(A: cc.Point, B: cc.Point, C: cc.Point, D: cc.Point): boolean

  /**
   * Calculates difference of two points.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   *
   * @returns {cc.Point}
   */
  function pSub(v1: cc.Point, v2: cc.Point): cc.Point

  /**
   * subtracts one point from another (inplace)
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   */
  function pSubIn(v1: cc.Point, v2: cc.Point): any

  /**
   * Converts a vector to radians.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v
   *
   * @returns {Number}
   */
  function pToAngle(v: cc.Point): number

  /**
   * Unrotates two points.
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v1
   * @param {cc.Point} v2
   *
   * @returns {cc.Point}
   */
  function pUnrotate(v1: cc.Point, v2: cc.Point): cc.Point

  /**
   * sets the position of the point to 0
   * Defined in: CCPointExtension.js.
   *
   * @param {cc.Point} v
   */
  function pZeroIn(v: cc.Point): any

  /**
   * converts radians to degrees
   * Defined in: CCMacro.js.
   *
   * @param {Number} angle
   *
   * @returns {Number}
   */
  function radiansToDegrees(angle: number): number

  /**
   * converts radians to degrees
   * Defined in: CCMacro.js.
   *
   * @param {Number} angle
   *
   * @returns {Number}
   */
  function radiansToDegress(angle: number): number

  /**
   * get a random number from 0 to 0xffffff
   * Defined in: CCMacro.js.
   *
   * @returns {number}
   */
  function rand(): number

  /**
   * returns a random float between 0 and 1
   * Defined in: CCMacro.js.
   *
   * @returns {Number}
   */
  function random0To1(): number

  /**
   * returns a random float between -1 and 1
   * Defined in: CCMacro.js.
   *
   * @returns {Number}
   */
  function randomMinus1To1(): number

  /**
   * Helper function that creates a cc.Rect.
   * Defined in: CCGeometry.js.
   *
   * @param {Number|cc.Rect} x a number or a rect object
   * @param {Number} y
   * @param {Number} w
   * @param {Number} h
   *
   * @returns {cc.Rect}
   */
  function rect(x: number | cc.Rect, y: number, w: number, h: number): cc.Rect

  /**
   * Apply the affine transformation on a rect.
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.Rect} rect
   * @param {cc.AffineTransform} anAffineTransform
   *
   * @returns {cc.Rect}
   */
  function rectApplyAffineTransform(rect: cc.Rect, anAffineTransform: cc.AffineTransform): cc.Rect

  /**
   * Check whether a rect contains a point
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rect
   * @param {cc.Point} point
   *
   * @returns {Boolean}
   */
  function rectContainsPoint(rect: cc.Rect, point: cc.Point): boolean

  /**
   * Check whether the rect1 contains rect2
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rect1
   * @param {cc.Rect} rect2
   *
   * @returns {Boolean}
   */
  function rectContainsRect(rect1: cc.Rect, rect2: cc.Rect): boolean

  /**
   * Check whether a rect's value equals to another
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rect1
   * @param {cc.Rect} rect2
   *
   * @returns {Boolean}
   */
  function rectEqualToRect(rect1: cc.Rect, rect2: cc.Rect): boolean

  /**
   * Returns the rightmost x-value of a rect
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rect
   *
   * @returns {Number} The rightmost x value
   */
  function rectGetMaxX(rect: cc.Rect): number

  /**
   * Return the topmost y-value of a rect
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rect
   *
   * @returns {Number} The topmost y value
   */
  function rectGetMaxY(rect: cc.Rect): number

  /**
   * Return the midpoint x-value of a rect
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rect
   *
   * @returns {Number} The midpoint x value
   */
  function rectGetMidX(rect: cc.Rect): number

  /**
   * Return the midpoint y-value of `rect'
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rect
   *
   * @returns {Number} The midpoint y value
   */
  function rectGetMidY(rect: cc.Rect): number

  /**
   * Returns the leftmost x-value of a rect
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rect
   *
   * @returns {Number} The leftmost x value
   */
  function rectGetMinX(rect: cc.Rect): number

  /**
   * Return the bottommost y-value of a rect
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rect
   *
   * @returns {Number} The bottommost y value
   */
  function rectGetMinY(rect: cc.Rect): number

  /**
   * Returns the overlapping portion of 2 rectangles
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rectA
   * @param {cc.Rect} rectB
   *
   * @returns {cc.Rect}
   */
  function rectIntersection(rectA: cc.Rect, rectB: cc.Rect): cc.Rect

  /**
   * Check whether a rect intersect with another
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rectA
   * @param {cc.Rect} rectB
   *
   * @returns {Boolean}
   */
  function rectIntersectsRect(rectA: cc.Rect, rectB: cc.Rect): boolean

  /**
   * Check whether a rect overlaps another
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rectA
   * @param {cc.Rect} rectB
   *
   * @returns {Boolean}
   */
  function rectOverlapsRect(rectA: cc.Rect, rectB: cc.Rect): boolean

  /**
   * Converts a rect in pixels to points
   * Defined in: CCMacro.js.
   *
   * @param {cc.Rect} pixel
   *
   * @returns {cc.Rect}
   */
  function rectPixelsToPoints(pixel: cc.Rect): cc.Rect

  /**
   * Converts a rect in points to pixels
   * Defined in: CCMacro.js.
   *
   * @param {cc.Rect} point
   *
   * @returns {cc.Rect}
   */
  function rectPointsToPixels(point: cc.Rect): cc.Rect

  /**
   * Returns the smallest rectangle that contains the two source rectangles.
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Rect} rectA
   * @param {cc.Rect} rectB
   *
   * @returns {cc.Rect}
   */
  function rectUnion(rectA: cc.Rect, rectB: cc.Rect): cc.Rect

  /**
   * Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
   * Defined in: CCActionInstant.js.
   *
   * @param {Boolean} isNeedCleanUp
   *
   * @returns {cc.RemoveSelf}
   */
  function removeSelf(isNeedCleanUp: boolean): cc.RemoveSelf

  /**
   * Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
   * Defined in: CCActionInterval.js.
   *
   * @param {cc.FiniteTimeAction} action
   * @param {Number} times
   *
   * @returns {cc.Repeat}
   */
  function repeat(action: cc.FiniteTimeAction, times: number): cc.Repeat

  /**
   * Create a acton which repeat forever
   * Defined in: CCActionInterval.js.
   *
   * @param {cc.FiniteTimeAction} action
   *
   * @returns {cc.RepeatForever}
   */
  function repeatForever(action: cc.FiniteTimeAction): cc.RepeatForever

  /**
   * creates an action with the number of times that the current grid will be reused
   * Defined in: CCActionGrid.js.
   *
   * @param {Number} times
   *
   * @returns {cc.ReuseGrid}
   */
  function reuseGrid(times: number): cc.ReuseGrid

  /**
   * returns a new copy of the array reversed.
   * Defined in: CCActionCatmullRom.js.
   *
   * @param {} controlPoints
   *
   * @returns {Array}
   */
  function reverseControlPoints(controlPoints: any): any[]

  /**
   * reverse the current control point array inline, without generating a new one
   * Defined in: CCActionCatmullRom.js.
   *
   * @param {} controlPoints
   */
  function reverseControlPointsInline(controlPoints: any): any

  /**
   * Executes an action in reverse order, from time=duration to time=0.
   * Defined in: CCActionInterval.js.
   *
   * @param {cc.FiniteTimeAction} action
   *
   * @returns {cc.ReverseTime}
   */
  function reverseTime(action: cc.FiniteTimeAction): cc.ReverseTime

  /**
   * creates a ripple 3d action with radius, number of waves, amplitude
   * Defined in: CCActionGrid3D.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {cc.Point} position
   * @param {Number} radius
   * @param {Number} waves
   * @param {Number} amplitude
   *
   * @returns {cc.Ripple3D}
   */
  function ripple3D(duration: number, gridSize: cc.Size, position: cc.Point, radius: number, waves: number, amplitude: number): cc.Ripple3D

  /**
   * Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
   * Relative to its properties to modify.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration duration in seconds
   * @param {Number} deltaAngleX deltaAngleX in degrees
   * @param {Number} deltaAngleY deltaAngleY in degrees
   *
   * @returns {cc.RotateBy}
   */
  function rotateBy(duration: number, deltaAngleX: number, deltaAngleY: number): cc.RotateBy

  /**
   * Creates a RotateTo action with separate rotation angles.
   * To specify the angle of rotation.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration duration in seconds
   * @param {Number} deltaAngleX deltaAngleX in degrees.
   * @param {Number} deltaAngleY deltaAngleY in degrees.
   *
   * @returns {cc.RotateTo}
   */
  function rotateTo(duration: number, deltaAngleX: number, deltaAngleY: number): cc.RotateTo

  /**
   * Scales a cc.Node object a zoom factor by modifying it's scale attribute.
   * Relative to its changes.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration duration in seconds
   * @param {Number} sx sx scale parameter in X
   * @param {Number|Null} sy sy scale parameter in Y, if Null equal to sx
   *
   * @returns {cc.ScaleBy}
   */
  function scaleBy(duration: number, sx: number, sy: number | null): cc.ScaleBy

  /**
   * Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration
   * @param {Number} sx scale parameter in X
   * @param {Number} sy scale parameter in Y, if Null equal to sx
   *
   * @returns {cc.ScaleTo}
   */
  function scaleTo(duration: number, sx: number, sy: number): cc.ScaleTo

  /**
   * helper constructor to create an array of sequenceable actions
   * Defined in: CCActionInterval.js.
   *
   * @param {Array|cc.FiniteTimeAction} tempArray
   *
   * @returns {cc.Sequence}
   */
  function sequence(tempArray: any[] | cc.FiniteTimeAction): cc.Sequence

  /**
   * Defined in: CCGLStateCache.js.
   *
   * @param {Number} sfactor
   * @param {Number} dfactor
   */
  function setBlending(sfactor: number, dfactor: number): any

  /**
   * Sets the shader program for this nodeSince v2.0, each rendering node must set its shader program.
   * It should be set in initialize phase.
   * Defined in: CCGLProgram.js.
   *
   * @param {cc.Node} node
   * @param {cc.GLProgram} program The shader program which fetches from CCShaderCache.
   */
  function setProgram(node: cc.Node, program: cc.GLProgram): any

  /**
   * sets the projection matrix as dirty
   * Defined in: CCGLStateCache.js.
   */
  function setProjectionMatrixDirty(): any

  /**
   * creates the action with a range, shake Z vertices, a grid and duration
   * Defined in: CCActionGrid3D.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number} range
   * @param {Boolean} shakeZ
   *
   * @returns {cc.Shaky3D}
   */
  function shaky3D(duration: number, gridSize: cc.Size, range: number, shakeZ: boolean): cc.Shaky3D

  /**
   * Creates the action with a range, whether or not to shake Z vertices, a grid size, and duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number} range
   * @param {Boolean} shakeZ
   *
   * @returns {cc.ShakyTiles3D}
   */
  function shakyTiles3D(duration: number, gridSize: cc.Size, range: number, shakeZ: boolean): cc.ShakyTiles3D

  /**
   * Creates the action with a range, whether of not to shatter Z vertices, a grid size and duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number} range
   * @param {Boolean} shatterZ
   *
   * @returns {cc.ShatteredTiles3D}
   */
  function shatteredTiles3D(duration: number, gridSize: cc.Size, range: number, shatterZ: boolean): cc.ShatteredTiles3D

  /**
   * Show the Node.
   * Defined in: CCActionInstant.js.
   *
   * @returns {cc.Show}
   */
  function show(): cc.Show

  /**
   * Creates the action with a random seed, the grid size and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number} seed
   *
   * @returns {cc.ShuffleTiles}
   */
  function shuffleTiles(duration: number, gridSize: cc.Size, seed: number): cc.ShuffleTiles

  /**
   * Helper function that creates a cc.Size.
   * Defined in: CCGeometry.js.
   *
   * @param {Number|cc.Size} w width or a size object
   * @param {Number} h height
   *
   * @returns {cc.Size}
   */
  function size(w: number | cc.Size, h: number): cc.Size

  /**
   * Apply the affine transformation on a size.
   * Defined in: CCAffineTransform.js.
   *
   * @param {cc.Size} size
   * @param {cc.AffineTransform} t
   *
   * @returns {cc.Size}
   */
  function sizeApplyAffineTransform(size: cc.Size, t: cc.AffineTransform): cc.Size

  /**
   * Check whether a point's value equals to another
   * Defined in: CCGeometry.js.
   *
   * @param {cc.Size} size1
   * @param {cc.Size} size2
   *
   * @returns {Boolean}
   */
  function sizeEqualToSize(size1: cc.Size, size2: cc.Size): boolean

  /**
   * Converts a size in pixels to points
   * Defined in: CCMacro.js.
   *
   * @param {cc.Size} sizeInPixels
   *
   * @returns {cc.Size}
   */
  function sizePixelsToPoints(sizeInPixels: cc.Size): cc.Size

  /**
   * Converts a Size in points to pixels
   * Defined in: CCMacro.js.
   *
   * @param {cc.Size} sizeInPoints
   *
   * @returns {cc.Size}
   */
  function sizePointsToPixels(sizeInPoints: cc.Size): cc.Size

  /**
   * Skews a cc.Node object by skewX and skewY degrees.
   * Relative to its attribute modification.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} t time in seconds
   * @param {Number} sx sx skew in degrees for X axis
   * @param {Number} sy sy skew in degrees for Y axis
   *
   * @returns {cc.SkewBy}
   */
  function skewBy(t: number, sx: number, sy: number): cc.SkewBy

  /**
   * Create new action.
   * Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes.
   * Changes to the specified value.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} t time in seconds
   * @param {Number} sx
   * @param {Number} sy
   *
   * @returns {cc.SkewTo}
   */
  function skewTo(t: number, sx: number, sy: number): cc.SkewTo

  /**
   * Create a spawn action which runs several actions in parallel.
   * Defined in: CCActionInterval.js.
   *
   * @param {Array|cc.FiniteTimeAction} tempArray
   *
   * @returns {cc.FiniteTimeAction}
   */
  function spawn(tempArray: any[] | cc.FiniteTimeAction): cc.FiniteTimeAction

  /**
   * creates the speed action.
   * Defined in: CCAction.js.
   *
   * @param {cc.ActionInterval} action
   * @param {Number} speed
   *
   * @returns {cc.Speed}
   */
  function speed(action: cc.ActionInterval, speed: number): cc.Speed

  /**
   * creates the action with the number of columns to split and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {Number} cols
   *
   * @returns {cc.SplitCols}
   */
  function splitCols(duration: number, cols: number): cc.SplitCols

  /**
   * creates the action with the number of rows to split and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {Number} rows
   *
   * @returns {cc.SplitRows}
   */
  function splitRows(duration: number, rows: number): cc.SplitRows

  /**
   * Allocates and initializes the action
   * Defined in: CCActionGrid.js.
   *
   * @returns {cc.StopGrid}
   */
  function stopGrid(): cc.StopGrid

  /**
   * simple macro that swaps 2 variables
   * modified from c++ macro, you need to pass in the x and y variables names in string,
   * and then a reference to the whole object as third variable
   * Defined in: CCMacro.js.
   *
   * @param {String} x
   * @param {String} y
   * @param {Object} ref
   */
  function swap(x: string, y: string, ref: object): any

  /**
   * Create an action with the specified action and forced target
   * Defined in: CCActionInterval.js.
   *
   * @param {cc.Node} target
   * @param {cc.FiniteTimeAction} action
   *
   * @returns {cc.TargetedAction}
   */
  function targetedAction(target: cc.Node, action: cc.FiniteTimeAction): cc.TargetedAction

  /**
   * Helper macro that creates an Tex2F type: A texcoord composed of 2 floats: u, y
   * Defined in: CCTypes.js.
   *
   * @param {Number} u
   * @param {Number} v
   *
   * @returns {cc.Tex2F}
   */
  function tex2(u: number, v: number): cc.Tex2F

  /**
   * releases the memory used for the image
   * Defined in: CCTGAlib.js.
   *
   * @param {cc.ImageTGA} psInfo
   */
  function tgaDestroy(psInfo: cc.ImageTGA): any

  /**
   * ImageTGA Flip
   * Defined in: CCTGAlib.js.
   *
   * @param {cc.ImageTGA} psInfo
   */
  function tgaFlipImage(psInfo: cc.ImageTGA): any

  /**
   * load the image header field from stream. We only keep those that matter!
   * Defined in: CCTGAlib.js.
   *
   * @param {Array} buffer
   * @param {Number} bufSize
   * @param {cc.ImageTGA} psInfo
   *
   * @returns {Boolean}
   */
  function tgaLoadHeader(buffer: any[], bufSize: number, psInfo: cc.ImageTGA): boolean

  /**
   * loads the image pixels. You shouldn't call this function directly.
   * Defined in: CCTGAlib.js.
   *
   * @param {Array} buffer
   * @param {Number} bufSize
   * @param {cc.ImageTGA} psInfo
   *
   * @returns {Boolean}
   */
  function tgaLoadImageData(buffer: any[], bufSize: number, psInfo: cc.ImageTGA): boolean

  /**
   * Load RLE image data
   * Defined in: CCTGAlib.js.
   *
   * @param {} buffer
   * @param {} bufSize
   * @param {} psInfo
   *
   * @returns {boolean}
   */
  function tgaLoadRLEImageData(buffer: any, bufSize: any, psInfo: any): boolean

  /**
   * converts RGB to grayscale
   * Defined in: CCTGAlib.js.
   *
   * @param {cc.ImageTGA} psInfo
   */
  function tgaRGBtogreyscale(psInfo: cc.ImageTGA): any

  /**
   * Creates the action with duration and grid size
   * Defined in: CCActionGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   *
   * @returns {cc.TiledGrid3DAction}
   */
  function tiledGrid3DAction(duration: number, gridSize: cc.Size): cc.TiledGrid3DAction

  /**
   * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
   * Relative to their own color change.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration duration in seconds
   * @param {Number} deltaRed
   * @param {Number} deltaGreen
   * @param {Number} deltaBlue
   *
   * @returns {cc.TintBy}
   */
  function tintBy(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number): cc.TintBy

  /**
   * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
   * Defined in: CCActionInterval.js.
   *
   * @param {Number} duration
   * @param {Number} red 0-255
   * @param {Number} green 0-255
   * @param {Number} blue 0-255
   *
   * @returns {cc.TintTo}
   */
  function tintTo(duration: number, red: number, green: number, blue: number): cc.TintTo

  /**
   * Toggles the visibility of a node.
   * Defined in: CCActionInstant.js.
   *
   * @returns {cc.ToggleVisibility}
   */
  function toggleVisibility(): cc.ToggleVisibility

  /**
   * Creates the action with a random seed, the grid size and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number|Null} seed
   *
   * @returns {cc.TurnOffTiles}
   */
  function turnOffTiles(duration: number, gridSize: cc.Size, seed: number | null): cc.TurnOffTiles

  /**
   * creates the action with center position, number of twirls, amplitude, a grid size and duration
   * Defined in: CCActionGrid3D.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {cc.Point} position
   * @param {Number} twirls
   * @param {Number} amplitude
   *
   * @returns {cc.Twirl}
   */
  function twirl(duration: number, gridSize: cc.Size, position: cc.Point, twirls: number, amplitude: number): cc.Twirl

  /**
   * Code copied & pasted from SpacePatrol game https://github.com/slembcke/SpacePatrolRenamed and added some changes for cocos2d
   * Defined in: CCDrawNode.js.
   */
  function v2fzero(): any

  /**
   * Defined in: CCTypes.js.
   *
   * @param {cc.V3F_C4B_T2F_Quad} sourceQuad
   *
   * @returns {cc.V3F_C4B_T2F_Quad}
   */
  function V3F_C4B_T2F_QuadCopy(sourceQuad: cc.V3F_C4B_T2F_Quad): cc.V3F_C4B_T2F_Quad

  /**
   * Defined in: CCTypes.js.
   *
   * @param {Array} sourceQuads
   *
   * @returns {Array}
   */
  function V3F_C4B_T2F_QuadsCopy(sourceQuads: any[]): any[]

  /**
   * Defined in: CCTypes.js.
   *
   * @returns {cc.V3F_C4B_T2F_Quad}
   */
  function V3F_C4B_T2F_QuadZero(): cc.V3F_C4B_T2F_Quad

  /**
   * Helper macro that creates an Vertex2F type composed of 2 floats: x, y
   * Defined in: CCTypes.js.
   *
   * @param {Number} x
   * @param {Number} y
   *
   * @returns {cc.Vertex2F}
   */
  function vertex2(x: number, y: number): cc.Vertex2F

  /**
   * Helper macro that creates an Vertex3F type composed of 3 floats: x, y, z
   * Defined in: CCTypes.js.
   *
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   *
   * @returns {cc.Vertex3F}
   */
  function vertex3(x: number, y: number, z: number): cc.Vertex3F

  /**
   * returns whether or not the line intersects
   * Defined in: CCVertex.js.
   *
   * @param {Number} Ax
   * @param {Number} Ay
   * @param {Number} Bx
   * @param {Number} By
   * @param {Number} Cx
   * @param {Number} Cy
   * @param {Number} Dx
   * @param {Number} Dy
   *
   * @returns {Object}
   */
  function vertexLineIntersect(Ax: number, Ay: number, Bx: number, By: number, Cx: number, Cy: number, Dx: number, Dy: number): object

  /**
   * converts a line to a polygon
   * Defined in: CCVertex.js.
   *
   * @param {Float32Array} points
   * @param {Number} stroke
   * @param {Float32Array} vertices
   * @param {Number} offset
   * @param {Number} nuPoints
   */
  function vertexLineToPolygon(points: Float32Array, stroke: number, vertices: Float32Array, offset: number, nuPoints: number): any

  /**
   * returns wheter or not polygon defined by vertex list is clockwise
   * Defined in: CCVertex.js.
   *
   * @param {Array} verts
   *
   * @returns {Boolean}
   */
  function vertexListIsClockwise(verts: any[]): boolean

  /**
   * initializes the action with amplitude, horizontal sin, vertical sin, a grid and duration
   * Defined in: CCActionGrid3D.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number} waves
   * @param {Number} amplitude
   * @param {Boolean} horizontal
   * @param {Boolean} vertical
   *
   * @returns {cc.Waves}
   */
  function waves(duration: number, gridSize: cc.Size, waves: number, amplitude: number, horizontal: boolean, vertical: boolean): cc.Waves

  /**
   * Create a wave 3d action with duration, grid size, waves and amplitude.
   * Defined in: CCActionGrid3D.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number} waves
   * @param {Number} amplitude
   */
  function waves3D(duration: number, gridSize: cc.Size, waves: number, amplitude: number): any

  /**
   * creates the action with a number of waves, the waves amplitude, the grid size and the duration.
   * Reference the test cases (Effects Test)
   * Defined in: CCActionTiledGrid.js.
   *
   * @param {Number} duration
   * @param {cc.Size} gridSize
   * @param {Number} waves
   * @param {Number} amplitude
   *
   * @returns {cc.WavesTiles3D}
   */
  function wavesTiles3D(duration: number, gridSize: cc.Size, waves: number, amplitude: number): cc.WavesTiles3D
}

declare namespace cc {
  interface Acceleration  {

    /**
     * the device accelerometer reports values for each axis in units of g-force
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @param {Number} timestamp
     */
    constructor(x: number, y: number, z: number, timestamp: number)


  }
}

declare namespace cc {
  interface AffineTransform  {

    /**
     * cc.AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.
     * Please do not use its constructor directly, use cc.affineTransformMake alias function instead.
     *
     * @param {Number} a
     * @param {Number} b
     * @param {Number} c
     * @param {Number} d
     * @param {Number} tx
     * @param {Number} ty
     */
    constructor(a: number, b: number, c: number, d: number, tx: number, ty: number)


  }
}

declare namespace cc {
  interface animationCache  {

    /**
     * cc.animationCache is a singleton object that manages the Animations.
     * It saves in a cache the animations. You should use this class if you want to save your animations in a cache.example
     * cc.animationCache.addAnimation(animation,"animation1");
     */
    constructor()


    /**
     * Adds a cc.Animation with a name.
     *
     * @param {cc.Animation} animation
     * @param {String} name
     */
    addAnimation(animation: cc.Animation, name: string): any

    /**
     * Adds an animations from a plist file.
     * Make sure that the frames were previously loaded in the cc.SpriteFrameCache.
     *
     * @param {String} plist
     */
    addAnimations(plist: string): any

    /**
     * Returns a cc.Animation that was previously added.
     * If the name is not found it will return nil.
     * You should retain the returned copy if you are going to use it.
     *
     * @param {String} name
     *
     * @returns {cc.Animation}
     */
    getAnimation(name: string): cc.Animation

    /**
     * Deletes a cc.Animation from the cache.
     *
     * @param {String} name
     */
    removeAnimation(name: string): any
  }
}

declare namespace cc {
  interface ArrayForObjectSorting  {

    /**
     * Array for object sorting utils
     */
    constructor()


    /**
     * Inserts a given object into array.Inserts a given object into array with key and value that are used in
     * sorting. "value" must respond to message, compare:, which returns
     * (NSComparisonResult). If it does not respond to the message, it is appended.
     * If the compare message does not result NSComparisonResult, sorting behavior
     * is not defined. It ignores duplicate entries and inserts next to it.
     *
     * @param {Object} addObject Object to insert
     */
    insertSortedObject(addObject: object): any
  }
}

declare namespace cc {
  interface async  {

    /**
     *
     */
    constructor()


    /**
     * Do tasks by iterator.
     *
     * @param {Array|Object} tasks
     * @param {function|Object} iterator
     * @param {function} callback
     * @param {Object} target
     *
     * @returns {cc.AsyncPool}
     */
    map(tasks: any[] | object, iterator: Function | object, callback: Function, target: object): cc.AsyncPool

    /**
     * Do tasks by iterator limit.
     *
     * @param {Array|Object} tasks
     * @param {Number} limit
     * @param {function} iterator
     * @param {function} cb callback
     * @param {Object} target
     */
    mapLimit(tasks: any[] | object, limit: number, iterator: Function, cb: Function, target: object): any

    /**
     * Do tasks parallel.
     *
     * @param {Array|Object} tasks
     * @param {function} cb callback
     * @param {Object} target
     *
     * @returns {cc.AsyncPool}
     */
    parallel(tasks: any[] | object, cb: Function, target: object): cc.AsyncPool

    /**
     * Do tasks series.
     *
     * @param {Array|Object} tasks
     * @param {function} cb callback
     * @param {Object} target
     *
     * @returns {cc.AsyncPool}
     */
    series(tasks: any[] | object, cb: Function, target: object): cc.AsyncPool

    /**
     * Do tasks waterfall.
     *
     * @param {Array|Object} tasks
     * @param {function} cb callback
     * @param {Object} target
     *
     * @returns {cc.AsyncPool}
     */
    waterfall(tasks: any[] | object, cb: Function, target: object): cc.AsyncPool
  }
}

declare namespace cc {
  interface AsyncPool  {

    /**
     * Async Pool class, a helper of cc.async
     *
     * @param {Object|Array} srcObj
     * @param {Number} limit the limit of parallel number
     * @param {function} iterator
     * @param {function} onEnd
     * @param {object} target
     */
    constructor(srcObj: object | any[], limit: number, iterator: Function, onEnd: Function, target: object)


  }
}

declare namespace cc.audioEngine {



  /**
   * End music and effects.
   */
  function end(): any

  /**
   * The volume of the effects max value is 1.0,the min value is 0.0 .
   *
   * @returns {Number}
   */
  function getEffectsVolume(): number

  /**
   * The volume of the music max value is 1.0,the min value is 0.0 .
   *
   * @returns {Number}
   */
  function getMusicVolume(): number

  /**
   * Whether the music is playing.
   *
   * @returns {Boolean} If is playing return true,or return false.
   */
  function isMusicPlaying(): boolean

  /**
   * Pause all playing sound effect.
   */
  function pauseAllEffects(): any

  /**
   * Pause playing sound effect.
   *
   * @param {Number} audio The return value of function playEffect.
   */
  function pauseEffect(audio: number): any

  /**
   * Pause playing music.
   */
  function pauseMusic(): any

  /**
   * Play sound effect.
   *
   * @param {String} url The path of the sound effect with filename extension.
   * @param {Boolean} loop Whether to loop the effect playing, default value is false
   *
   * @returns {Number|null} the audio id
   */
  function playEffect(url: string, loop: boolean): number | null

  /**
   * Play music.
   *
   * @param {String} url The path of the music file without filename extension.
   * @param {Boolean} loop Whether the music loop or not.
   */
  function playMusic(url: string, loop: boolean): any

  /**
   * Resume all playing sound effect
   */
  function resumeAllEffects(): any

  /**
   * Resume playing sound effect.
   *
   * @param {Number} audio The return value of function playEffect.
   */
  function resumeEffect(audio: number): any

  /**
   * Resume playing music.
   */
  function resumeMusic(): any

  /**
   * Rewind playing music.
   */
  function rewindMusic(): any

  /**
   * Set the volume of sound effects.
   *
   * @param {Number} volume Volume must be in 0.0~1.0 .
   */
  function setEffectsVolume(volume: number): any

  /**
   * Set the volume of music.
   *
   * @param {Number} volume Volume must be in 0.0~1.0 .
   */
  function setMusicVolume(volume: number): any

  /**
   * Stop all playing sound effects.
   */
  function stopAllEffects(): any

  /**
   * Stop playing sound effect.
   *
   * @param {Number} audio The return value of function playEffect.
   */
  function stopEffect(audio: number): any

  /**
   * Stop playing music.
   *
   * @param {Boolean} releaseData If release the music data or not.As default value is false.
   */
  function stopMusic(releaseData: boolean): any

  /**
   * Unload the preloaded effect from internal buffer
   *
   * @param {String} url
   */
  function unloadEffect(url: string): any

  /**
   * Indicates whether any background music can be played or not.
   *
   * @returns {boolean} true if the background music is playing, otherwise false
   */
  function willPlayMusic(): boolean
}

declare namespace cc {
  interface BinaryStreamReader  {

    /**
     * Binary Stream Reader
     *
     * @param {} binaryData
     */
    constructor(binaryData: any)


  }
}

declare namespace cc {
  interface Class  {

    /**
     * The base Class implementation (does nothing)
     */
    constructor()


  }
}

declare namespace cc {
  namespace Class {



    /**
     * Create a new Class that inherits from this Class
     *
     * @param {object} props
     *
     * @returns {function}
     */
    function extend(props: object): Function
  }
}

declare namespace cc {
  interface Action  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()

    /**
     * - The original target of the action.
     */
    originalTarget: cc.Node

    /**
     * - The tag of the action, can be used to find the action.
     */
    tag: number

    /**
     * - The target will be set with the 'startWithTarget' method. When the 'stop' method is called, target will be set to nil.
     */
    target: cc.Node

    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.Action}
     */
    clone(): cc.Action

    /**
     * to copy object with deep copy.
     *
     * @returns {cc.Action}
     */
    copy(): cc.Action

    /**
     * get the original target.
     *
     * @returns {cc.Node}
     */
    getOriginalTarget(): cc.Node

    /**
     * get tag number.
     *
     * @returns {Number}
     */
    getTag(): number

    /**
     * get the target.
     *
     * @returns {cc.Node}
     */
    getTarget(): cc.Node

    /**
     * return true if the action has finished.
     *
     * @returns {Boolean}
     */
    isDone(): boolean

    /**
     * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
     * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
     * This is a hack, and should be removed once JSB fixes the retain/release bug.
     */
    release(): any

    /**
     * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
     * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
     * This is a hack, and should be removed once JSB fixes the retain/release bug.
     */
    retain(): any

    /**
     * Set the original target, since target can be nil.
     * Is the target that were used to run the action.
     * Unless you are doing something complex, like cc.ActionManager, you should NOT call this method.
     * The target is 'assigned', it is not 'retained'.
     *
     * @param {cc.Node} originalTarget
     */
    setOriginalTarget(originalTarget: cc.Node): any

    /**
     * set tag number.
     *
     * @param {Number} tag
     */
    setTag(tag: number): any

    /**
     * The action will modify the target properties.
     *
     * @param {cc.Node} target
     */
    setTarget(target: cc.Node): any

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * called every frame with it's delta time.
     * DON'T override unless you know what you are doing.
     *
     * @param {Number} dt
     */
    step(dt: number): any

    /**
     * called after the action has finished. It will set the 'target' to nil.
     * IMPORTANT: You should never call "action stop" manually. Instead, use: "target.stopAction(action);"
     */
    stop(): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Action {

    /**
     * Please use cc.action instead.
     * Allocates and initializes the action.
     */
    let create: cc.Action


  }
}

declare namespace cc {
  interface FiniteTimeAction  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.FiniteTimeAction}
     */
    clone(): cc.FiniteTimeAction

    /**
     * get duration of the action. (seconds)
     *
     * @returns {Number}
     */
    getDuration(): number

    /**
     * Returns a reversed action.
     * For example:
     * - The action will be x coordinates of 0 move to 100.
     * - The reversed action will be x of 100 move to 0.
     * - Will be rewritten
     *
     * @returns {?cc.Action}
     */
    reverse(): cc.Action

    /**
     * set duration of the action. (seconds)
     *
     * @param {Number} duration
     */
    setDuration(duration: number): any
  }
}

declare namespace cc {
  interface ActionInstant  {

    /**
     * Instant actions are immediate actions. They don't have a duration like.
     * the CCIntervalAction actions.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.FiniteTimeAction}
     */
    clone(): cc.FiniteTimeAction

    /**
     * return true if the action has finished.
     *
     * @returns {Boolean}
     */
    isDone(): boolean

    /**
     * returns a reversed action.
     * For example:
     * - The action will be x coordinates of 0 move to 100.
     * - The reversed action will be x of 100 move to 0.
     * - Will be rewritten
     *
     * @returns {cc.Action}
     */
    reverse(): cc.Action

    /**
     * called every frame with it's delta time.
     * DON'T override unless you know what you are doing.
     *
     * @param {Number} dt
     */
    step(dt: number): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  interface CallFunc  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates a CallFunc action with the callback.
     *
     * @param {function} selector
     * @param {object|null} selectorTarget
     * @param {*|null} data data for function, it accepts all data types.
     */
    constructor(selector: Function, selectorTarget: object | null, data: any | null)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.CallFunc}
     */
    clone(): cc.CallFunc

    /**
     * execute the function.
     */
    execute(): any

    /**
     * Get selectorTarget.
     *
     * @returns {object}
     */
    getTargetCallback(): object

    /**
     * Initializes the action with a function or function and its target
     *
     * @param {function} selector
     * @param {object|Null} selectorTarget
     * @param {*|Null} data data for function, it accepts all data types.
     *
     * @returns {Boolean}
     */
    initWithFunction(selector: Function, selectorTarget: object | null, data: any | null): boolean

    /**
     * Set selectorTarget.
     *
     * @param {object} sel
     */
    setTargetCallback(sel: object): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace CallFunc {

    /**
     * Please use cc.callFunc instead.
     * Creates the action with the callback.
     */
    let create: cc.CallFunc


  }
}

declare namespace cc {
  interface FlipX  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a FlipX action to flip or unflip the target.
     *
     * @param {Boolean} flip Indicate whether the target should be flipped or not
     */
    constructor(flip: boolean)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.FiniteTimeAction}
     */
    clone(): cc.FiniteTimeAction

    /**
     * initializes the action with a set flipX.
     *
     * @param {Boolean} flip
     *
     * @returns {Boolean}
     */
    initWithFlipX(flip: boolean): boolean

    /**
     * returns a reversed action.
     *
     * @returns {cc.FlipX}
     */
    reverse(): cc.FlipX

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace FlipX {

    /**
     * Plese use cc.flipX instead.
     * Create a FlipX action to flip or unflip the target
     */
    let create: cc.FlipX


  }
}

declare namespace cc {
  interface FlipY  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a FlipY action to flip or unflip the target.
     *
     * @param {Boolean} flip
     */
    constructor(flip: boolean)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.FlipY}
     */
    clone(): cc.FlipY

    /**
     * initializes the action with a set flipY.
     *
     * @param {Boolean} flip
     *
     * @returns {Boolean}
     */
    initWithFlipY(flip: boolean): boolean

    /**
     * returns a reversed action.
     *
     * @returns {cc.FlipY}
     */
    reverse(): cc.FlipY

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace FlipY {

    /**
     * Please use cc.flipY instead
     * Create a FlipY action to flip or unflip the target
     */
    let create: cc.FlipY


  }
}

declare namespace cc {
  interface Hide  {

    /**
     * Hide the node.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.Hide}
     */
    clone(): cc.Hide

    /**
     * returns a reversed action.
     * For example:
     * - The action will be x coordinates of 0 move to 100.
     * - The reversed action will be x of 100 move to 0.
     * - Will be rewritten
     *
     * @returns {cc.Show}
     */
    reverse(): cc.Show

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Hide {

    /**
     * Hide the node. Please use cc.hide instead.
     */
    let create: cc.Hide


  }
}

declare namespace cc {
  interface Place  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates a Place action with a position.
     *
     * @param {cc.Point|Number} pos
     * @param {Number} y
     */
    constructor(pos: cc.Point | number, y: number)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.Place}
     */
    clone(): cc.Place

    /**
     * Initializes a Place action with a position
     *
     * @param {number} x
     * @param {number} y
     *
     * @returns {Boolean}
     */
    initWithPosition(x: number, y: number): boolean

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Place {

    /**
     * Please use cc.place instead.
     * Creates a Place action with a position.
     */
    let create: cc.Place


  }
}

declare namespace cc {
  interface RemoveSelf  {

    /**
     * Delete self in the next frame.
     *
     * @param {Boolean} isNeedCleanUp
     */
    constructor(isNeedCleanUp: boolean)


  }
}

declare namespace cc {
  namespace RemoveSelf {

    /**
     * Please use cc.removeSelf instead.
     * Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
     */
    let create: cc.RemoveSelf


  }
}

declare namespace cc {
  interface ReuseGrid  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} times
     */
    constructor(times: number)


    /**
     * initializes an action with the number of times that the current grid will be reused
     *
     * @param {Number} times
     *
     * @returns {Boolean}
     */
    initWithTimes(times: number): boolean

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any
  }
}

declare namespace cc {
  namespace ReuseGrid {

    /**
     * Please use cc.reuseGrid instead
     * creates an action with the number of times that the current grid will be reused
     */
    let create: cc.ReuseGrid


  }
}

declare namespace cc {
  interface Show  {

    /**
     * Show the node.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.FiniteTimeAction}
     */
    clone(): cc.FiniteTimeAction

    /**
     * returns a reversed action.
     * For example:
     * - The action will be x coordinates of 0 move to 100.
     * - The reversed action will be x of 100 move to 0.
     * - Will be rewritten
     *
     * @returns {cc.Hide}
     */
    reverse(): cc.Hide

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Show {

    /**
     * Show the Node. Please use cc.show instead.
     */
    let create: cc.Show


  }
}

declare namespace cc {
  interface StopGrid  {

    /**
     * cc.StopGrid action.
     */
    constructor()


    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any
  }
}

declare namespace cc {
  namespace StopGrid {

    /**
     * Please use cc.stopGrid instead
     * Allocates and initializes the action
     */
    let create: cc.StopGrid


  }
}

declare namespace cc {
  interface ToggleVisibility  {

    /**
     * Toggles the visibility of a node.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.ToggleVisibility}
     */
    clone(): cc.ToggleVisibility

    /**
     * returns a reversed action.
     *
     * @returns {cc.ToggleVisibility}
     */
    reverse(): cc.ToggleVisibility

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace ToggleVisibility {

    /**
     * Toggles the visibility of a node. Please use cc.toggleVisibility instead.
     */
    let create: cc.ToggleVisibility


  }
}

declare namespace cc {
  interface ActionInterval  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} d duration in seconds
     */
    constructor(d: number)


    /**
     * Returns a new clone of the action.
     *
     * @returns {cc.ActionInterval}
     */
    clone(): cc.ActionInterval

    /**
     * Implementation of ease motion.
     *
     * @param {Object} easeObj
     *
     * @returns {cc.ActionInterval}
     */
    easing(easeObj: object): cc.ActionInterval

    /**
     * Get amplitude rate.
     *
     * @returns {Number} 0
     */
    getAmplitudeRate(): number

    /**
     * How many seconds had elapsed since the actions started to run.
     *
     * @returns {Number}
     */
    getElapsed(): number

    /**
     * Get this action speed.
     *
     * @returns {Number}
     */
    getSpeed(): number

    /**
     * Initializes the action.
     *
     * @param {Number} d duration in seconds
     *
     * @returns {Boolean}
     */
    initWithDuration(d: number): boolean

    /**
     * Returns true if the action has finished.
     *
     * @returns {Boolean}
     */
    isDone(): boolean

    /**
     * Repeats an action a number of times.
     * To repeat an action forever use the CCRepeatForever action.
     *
     * @param {} times
     *
     * @returns {cc.ActionInterval}
     */
    repeat(times: any): cc.ActionInterval

    /**
     * Repeats an action for ever.
     * To repeat the an action for a limited number of times use the Repeat action.
     *
     * @returns {cc.ActionInterval}
     */
    repeatForever(): cc.ActionInterval

    /**
     * returns a reversed action.
     * Will be overwrite.
     *
     * @returns {?cc.Action}
     */
    reverse(): cc.Action

    /**
     * Set amplitude rate.
     *
     * @param {Number} amp
     */
    setAmplitudeRate(amp: number): any

    /**
     * Set this action speed.
     *
     * @param {Number} speed
     *
     * @returns {cc.ActionInterval}
     */
    setSpeed(speed: number): cc.ActionInterval

    /**
     * Changes the speed of an action, making it take longer (speed>1)
     * or less (speed<1) time.
     * Useful to simulate 'slow motion' or 'fast forward' effect.
     *
     * @param {} speed
     *
     * @returns {cc.Action}
     */
    speed(speed: any): cc.Action

    /**
     * Start this action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * called every frame with it's delta time.
     * DON'T override unless you know what you are doing.
     *
     * @param {Number} dt
     */
    step(dt: number): any
  }
}

declare namespace cc {
  namespace ActionInterval {

    /**
     * Please use cc.actionInterval instead.
     * An interval action is an action that takes place within a certain period of time.
     */
    let create: cc.ActionInterval


  }
}

declare namespace cc {
  interface ActionEase  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates the action of ActionEase.
     *
     * @param {cc.ActionInterval} action
     */
    constructor(action: cc.ActionInterval)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.ActionEase}
     */
    clone(): cc.ActionEase

    /**
     * Get inner Action.
     *
     * @returns {cc.ActionInterval}
     */
    getInnerAction(): cc.ActionInterval

    /**
     * initializes the action
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {Boolean}
     */
    initWithAction(action: cc.ActionInterval): boolean

    /**
     * Create new action to original operation effect opposite.
     * For example:
     * - The action will be x coordinates of 0 move to 100.
     * - The reversed action will be x of 100 move to 0.
     * - Will be rewritten
     *
     * @returns {cc.ActionEase}
     */
    reverse(): cc.ActionEase

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Stop the action.
     */
    stop(): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace ActionEase {

    /**
     * Please use cc.actionEase instead
     * creates the action of ActionEase
     */
    let create: cc.ActionEase


  }
}

declare namespace cc {
  interface EaseBackIn  {

    /**
     * cc.EaseBackIn action.
     * In the opposite direction to move slowly, and then accelerated to the right direction.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseBackIn}
     */
    clone(): cc.EaseBackIn

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseBackOut}
     */
    reverse(): cc.EaseBackOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseBackIn {



    /**
     * Creates the cc.EaseBackIn.
     * In the opposite direction to move slowly, and then accelerated to the right direction.
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseBackIn}
     */
    function create(action: cc.ActionInterval): cc.EaseBackIn
  }
}

declare namespace cc {
  interface EaseBackInOut  {

    /**
     * cc.EaseBackInOut action.
     * Beginning of cc.EaseBackIn. Ending of cc.EaseBackOut.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseBackInOut}
     */
    clone(): cc.EaseBackInOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseBackInOut}
     */
    reverse(): cc.EaseBackInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseBackInOut {



    /**
     * Creates the action.
     * Beginning of cc.EaseBackIn. Ending of cc.EaseBackOut.
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseBackInOut}
     */
    function create(action: cc.ActionInterval): cc.EaseBackInOut
  }
}

declare namespace cc {
  interface EaseBackOut  {

    /**
     * cc.EaseBackOut action.
     * Fast moving more than the finish, and then slowly back to the finish.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseBackOut}
     */
    clone(): cc.EaseBackOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseBackIn}
     */
    reverse(): cc.EaseBackIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseBackOut {



    /**
     * Creates the action.
     * Fast moving more than the finish, and then slowly back to the finish.
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseBackOut}
     */
    function create(action: cc.ActionInterval): cc.EaseBackOut
  }
}

declare namespace cc {
  interface EaseBezierAction  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Initialization requires the application of Bessel curve of action.
     *
     * @param {cc.Action} action
     */
    constructor(action: cc.Action)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseBezierAction}
     */
    clone(): cc.EaseBezierAction

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseBezierAction}
     */
    reverse(): cc.EaseBezierAction

    /**
     * Set of 4 reference point
     *
     * @param {} p0
     * @param {} p1
     * @param {} p2
     * @param {} p3
     */
    setBezierParamer(p0: any, p1: any, p2: any, p3: any): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseBezierAction {



    /**
     * Creates the action.
     * After creating the cc.EaseBezierAction, also need to manually call setBezierParamer.
     * According to the set point, calculate the trajectory.
     *
     * @param {} action
     *
     * @returns {cc.EaseBezierAction}
     */
    function create(action: any): cc.EaseBezierAction
  }
}

declare namespace cc {
  interface EaseBounce  {

    /**
     * cc.EaseBounce abstract class.
     */
    constructor()


    /**
     *
     *
     * @param {Number} time1
     *
     * @returns {Number}
     */
    bounceTime(time1: number): number

    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseBounce}
     */
    clone(): cc.EaseBounce

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseBounce}
     */
    reverse(): cc.EaseBounce
  }
}

declare namespace cc {
  namespace EaseBounce {



    /**
     * Creates an ease bounce action.
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseBounce}
     */
    function create(action: cc.ActionInterval): cc.EaseBounce
  }
}

declare namespace cc {
  interface EaseBounceIn  {

    /**
     * cc.EaseBounceIn action.
     * Eased bounce effect at the beginning.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseBounceIn}
     */
    clone(): cc.EaseBounceIn

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseBounceOut}
     */
    reverse(): cc.EaseBounceOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseBounceIn {



    /**
     * Creates the action.
     * Eased bounce effect at the beginning.
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseBounceIn}
     */
    function create(action: cc.ActionInterval): cc.EaseBounceIn
  }
}

declare namespace cc {
  interface EaseBounceInOut  {

    /**
     * cc.EaseBounceInOut action.
     * Eased bounce effect at the beginning and ending.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseBounceInOut}
     */
    clone(): cc.EaseBounceInOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseBounceInOut}
     */
    reverse(): cc.EaseBounceInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseBounceInOut {



    /**
     * Creates the action.
     * Eased bounce effect at the beginning and ending.
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseBounceInOut}
     */
    function create(action: cc.ActionInterval): cc.EaseBounceInOut
  }
}

declare namespace cc {
  interface EaseBounceOut  {

    /**
     * cc.EaseBounceOut action.
     * Eased bounce effect at the ending.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseBounceOut}
     */
    clone(): cc.EaseBounceOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseBounceIn}
     */
    reverse(): cc.EaseBounceIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseBounceOut {



    /**
     * Creates the action.
     * Eased bounce effect at the ending.
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseBounceOut}
     */
    function create(action: cc.ActionInterval): cc.EaseBounceOut
  }
}

declare namespace cc {
  interface EaseCircleActionIn  {

    /**
     * cc.EaseCircleActionIn action.
     * Reference easeInCirc:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseCircleActionIn}
     */
    clone(): cc.EaseCircleActionIn

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseCircleActionIn}
     */
    reverse(): cc.EaseCircleActionIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseCircleActionIn {



    /**
     * Creates the action.
     * Reference easeInCirc:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseCircleActionIn}
     */
    function create(action: any): cc.EaseCircleActionIn
  }
}

declare namespace cc {
  interface EaseCircleActionInOut  {

    /**
     * cc.EaseCircleActionInOut action.
     * Reference easeInOutCirc:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseCircleActionInOut}
     */
    clone(): cc.EaseCircleActionInOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseCircleActionInOut}
     */
    reverse(): cc.EaseCircleActionInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseCircleActionInOut {



    /**
     * Creates the action.
     * Reference easeInOutCirc:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseCircleActionInOut}
     */
    function create(action: any): cc.EaseCircleActionInOut
  }
}

declare namespace cc {
  interface EaseCircleActionOut  {

    /**
     * cc.EaseCircleActionOut action.
     * Reference easeOutCirc:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseCircleActionOut}
     */
    clone(): cc.EaseCircleActionOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseCircleActionOut}
     */
    reverse(): cc.EaseCircleActionOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseCircleActionOut {



    /**
     * Creates the action.
     * Reference easeOutCirc:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseCircleActionOut}
     */
    function create(action: any): cc.EaseCircleActionOut
  }
}

declare namespace cc {
  interface EaseCubicActionIn  {

    /**
     * cc.EaseCubicActionIn action.
     * Reference easeInCubic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseCubicActionIn}
     */
    clone(): cc.EaseCubicActionIn

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseCubicActionIn}
     */
    reverse(): cc.EaseCubicActionIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseCubicActionIn {



    /**
     * Creates the action.
     * Reference easeInCubic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseCubicActionIn}
     */
    function create(action: any): cc.EaseCubicActionIn
  }
}

declare namespace cc {
  interface EaseCubicActionInOut  {

    /**
     * cc.EaseCubicActionInOut action.
     * Reference easeInOutCubic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseCubicActionInOut}
     */
    clone(): cc.EaseCubicActionInOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseCubicActionInOut}
     */
    reverse(): cc.EaseCubicActionInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseCubicActionInOut {



    /**
     * Creates the action.
     * Reference easeInOutCubic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseCubicActionInOut}
     */
    function create(action: any): cc.EaseCubicActionInOut
  }
}

declare namespace cc {
  interface EaseCubicActionOut  {

    /**
     * cc.EaseCubicActionOut action.
     * Reference easeOutCubic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseCubicActionOut}
     */
    clone(): cc.EaseCubicActionOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseCubicActionOut}
     */
    reverse(): cc.EaseCubicActionOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseCubicActionOut {



    /**
     * Creates the action.
     * Reference easeOutCubic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseCubicActionOut}
     */
    function create(action: any): cc.EaseCubicActionOut
  }
}

declare namespace cc {
  interface EaseElastic  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates the action with the inner action and the period in radians (default is 0.3).
     *
     * @param {cc.ActionInterval} action
     * @param {Number} period
     */
    constructor(action: cc.ActionInterval, period: number)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseElastic}
     */
    clone(): cc.EaseElastic

    /**
     * get period of the wave in radians. default is 0.3
     *
     * @returns {Number}
     */
    getPeriod(): number

    /**
     * Initializes the action with the inner action and the period in radians (default is 0.3)
     *
     * @param {cc.ActionInterval} action
     * @param {Number} period
     *
     * @returns {Boolean}
     */
    initWithAction(action: cc.ActionInterval, period: number): boolean

    /**
     * Create a action. Opposite with the original motion trajectory.
     * Will be overwrite.
     *
     * @returns {?cc.Action}
     */
    reverse(): cc.Action

    /**
     * set period of the wave in radians.
     *
     * @param {Number} period
     */
    setPeriod(period: number): any
  }
}

declare namespace cc {
  namespace EaseElastic {



    /**
     * Creates the action with the inner action and the period in radians (default is 0.3).
     *
     * @param {cc.ActionInterval} action
     * @param {Number} period
     *
     * @returns {cc.EaseElastic}
     */
    function create(action: cc.ActionInterval, period: number): cc.EaseElastic
  }
}

declare namespace cc {
  interface EaseElasticIn  {

    /**
     * Ease Elastic In action.
     * Reference easeInElastic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseElasticIn}
     */
    clone(): cc.EaseElasticIn

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseElasticOut}
     */
    reverse(): cc.EaseElasticOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseElasticIn {



    /**
     * Creates the action with the inner action and the period in radians (default is 0.3).
     * Reference easeInElastic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {cc.ActionInterval} action
     * @param {Number} period
     *
     * @returns {cc.EaseElasticIn}
     */
    function create(action: cc.ActionInterval, period: number): cc.EaseElasticIn
  }
}

declare namespace cc {
  interface EaseElasticInOut  {

    /**
     * Ease Elastic InOut action.
     * Reference easeInOutElastic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseElasticInOut}
     */
    clone(): cc.EaseElasticInOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseElasticInOut}
     */
    reverse(): cc.EaseElasticInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseElasticInOut {



    /**
     * Creates the action with the inner action and the period in radians (default is 0.3).
     * Reference easeInOutElastic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {cc.ActionInterval} action
     * @param {Number} period
     *
     * @returns {cc.EaseElasticInOut}
     */
    function create(action: cc.ActionInterval, period: number): cc.EaseElasticInOut
  }
}

declare namespace cc {
  interface EaseElasticOut  {

    /**
     * Ease Elastic Out action.
     * Reference easeOutElastic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseElasticOut}
     */
    clone(): cc.EaseElasticOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseElasticIn}
     */
    reverse(): cc.EaseElasticIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseElasticOut {



    /**
     * Creates the action with the inner action and the period in radians (default is 0.3).
     * Reference easeOutElastic:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {cc.ActionInterval} action
     * @param {Number} period
     *
     * @returns {cc.EaseElasticOut}
     */
    function create(action: cc.ActionInterval, period: number): cc.EaseElasticOut
  }
}

declare namespace cc {
  interface EaseExponentialIn  {

    /**
     * cc.Ease Exponential In. Slow to Fast.
     * Reference easeInExpo:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseExponentialIn}
     */
    clone(): cc.EaseExponentialIn

    /**
     * Create a cc.EaseExponentialOut action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseExponentialOut}
     */
    reverse(): cc.EaseExponentialOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseExponentialIn {



    /**
     * Creates the action easing object with the rate parameter.
     * Reference easeInExpo:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseExponentialIn}
     */
    function create(action: cc.ActionInterval): cc.EaseExponentialIn
  }
}

declare namespace cc {
  interface EaseExponentialInOut  {

    /**
     * Ease Exponential InOut.
     * Reference easeInOutExpo:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseExponentialInOut}
     */
    clone(): cc.EaseExponentialInOut

    /**
     * Create a cc.EaseExponentialInOut action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseExponentialInOut}
     */
    reverse(): cc.EaseExponentialInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseExponentialInOut {



    /**
     * creates an EaseExponentialInOut action.
     * Reference easeInOutExpo:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseExponentialInOut}
     */
    function create(action: cc.ActionInterval): cc.EaseExponentialInOut
  }
}

declare namespace cc {
  interface EaseExponentialOut  {

    /**
     * Ease Exponential Out.
     * Reference easeOutExpo:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseExponentialOut}
     */
    clone(): cc.EaseExponentialOut

    /**
     * Create a cc.EaseExponentialIn action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseExponentialIn}
     */
    reverse(): cc.EaseExponentialIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseExponentialOut {



    /**
     * Creates the action easing object with the rate parameter.
     * Reference easeOutExpo:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {Object}
     */
    function create(action: cc.ActionInterval): object
  }
}

declare namespace cc {
  interface EaseQuadraticActionIn  {

    /**
     * cc.EaseQuadraticActionIn action.
     * Reference easeInQuad:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseQuadraticActionIn}
     */
    clone(): cc.EaseQuadraticActionIn

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseQuadraticActionIn}
     */
    reverse(): cc.EaseQuadraticActionIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseQuadraticActionIn {



    /**
     * Creates the cc.EaseQuadRaticActionIn.
     * Reference easeInQuad:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseQuadraticActionIn}
     */
    function create(action: any): cc.EaseQuadraticActionIn
  }
}

declare namespace cc {
  interface EaseQuadraticActionInOut  {

    /**
     * cc.EaseQuadraticActionInOut action.
     * Reference easeInOutQuad:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseQuadraticActionInOut}
     */
    clone(): cc.EaseQuadraticActionInOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseQuadraticActionInOut}
     */
    reverse(): cc.EaseQuadraticActionInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseQuadraticActionInOut {



    /**
     * Creates the action.
     * Reference easeInOutQuad:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseQuadraticActionInOut}
     */
    function create(action: any): cc.EaseQuadraticActionInOut
  }
}

declare namespace cc {
  interface EaseQuadraticActionOut  {

    /**
     * cc.EaseQuadraticActionIn action.
     * Reference easeOutQuad:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseQuadraticActionOut}
     */
    clone(): cc.EaseQuadraticActionOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseQuadraticActionOut}
     */
    reverse(): cc.EaseQuadraticActionOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseQuadraticActionOut {



    /**
     * Creates the action.
     * Reference easeOutQuad:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseQuadraticActionOut}
     */
    function create(action: any): cc.EaseQuadraticActionOut
  }
}

declare namespace cc {
  interface EaseQuarticActionIn  {

    /**
     * cc.EaseQuarticActionIn action.
     * Reference easeInQuart:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseQuarticActionIn}
     */
    clone(): cc.EaseQuarticActionIn

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseQuarticActionIn}
     */
    reverse(): cc.EaseQuarticActionIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseQuarticActionIn {



    /**
     * Creates the action.
     * Reference easeInQuart:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseQuarticActionIn}
     */
    function create(action: any): cc.EaseQuarticActionIn
  }
}

declare namespace cc {
  interface EaseQuarticActionInOut  {

    /**
     * cc.EaseQuarticActionInOut action.
     * Reference easeInOutQuart:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseQuarticActionInOut}
     */
    clone(): cc.EaseQuarticActionInOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseQuarticActionInOut}
     */
    reverse(): cc.EaseQuarticActionInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseQuarticActionInOut {



    /**
     * Creates the action.
     * Reference easeInOutQuart:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseQuarticActionInOut}
     */
    function create(action: any): cc.EaseQuarticActionInOut
  }
}

declare namespace cc {
  interface EaseQuarticActionOut  {

    /**
     * cc.EaseQuarticActionOut action.
     * Reference easeOutQuart:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseQuarticActionOut}
     */
    clone(): cc.EaseQuarticActionOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseQuarticActionOut}
     */
    reverse(): cc.EaseQuarticActionOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseQuarticActionOut {



    /**
     * Creates the action.
     * Reference easeOutQuart:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseQuarticActionOut}
     */
    function create(action: any): cc.EaseQuarticActionOut
  }
}

declare namespace cc {
  interface EaseQuinticActionIn  {

    /**
     * cc.EaseQuinticActionIn action.
     * Reference easeInQuint:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseQuinticActionIn}
     */
    clone(): cc.EaseQuinticActionIn

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseQuinticActionIn}
     */
    reverse(): cc.EaseQuinticActionIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseQuinticActionIn {



    /**
     * Creates the action.
     * Reference easeInQuint:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseQuinticActionIn}
     */
    function create(action: any): cc.EaseQuinticActionIn
  }
}

declare namespace cc {
  interface EaseQuinticActionInOut  {

    /**
     * cc.EaseQuinticActionInOut action.
     * Reference easeInOutQuint:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseQuinticActionInOut}
     */
    clone(): cc.EaseQuinticActionInOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseQuinticActionInOut}
     */
    reverse(): cc.EaseQuinticActionInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseQuinticActionInOut {



    /**
     * Creates the action.
     * Reference easeInOutQuint:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseQuinticActionInOut}
     */
    function create(action: any): cc.EaseQuinticActionInOut
  }
}

declare namespace cc {
  interface EaseQuinticActionOut  {

    /**
     * cc.EaseQuinticActionOut action.
     * Reference easeQuint:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseQuinticActionOut}
     */
    clone(): cc.EaseQuinticActionOut

    /**
     * Create a action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseQuinticActionOut}
     */
    reverse(): cc.EaseQuinticActionOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseQuinticActionOut {



    /**
     * Creates the action.
     * Reference easeOutQuint:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {} action
     *
     * @returns {cc.EaseQuinticActionOut}
     */
    function create(action: any): cc.EaseQuinticActionOut
  }
}

declare namespace cc {
  interface EaseRateAction  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates the action with the inner action and the rate parameter.
     *
     * @param {cc.ActionInterval} action
     * @param {Number} rate
     */
    constructor(action: cc.ActionInterval, rate: number)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseRateAction}
     */
    clone(): cc.EaseRateAction

    /**
     * get rate value for the actions
     *
     * @returns {Number}
     */
    getRate(): number

    /**
     * Initializes the action with the inner action and the rate parameter
     *
     * @param {cc.ActionInterval} action
     * @param {Number} rate
     *
     * @returns {Boolean}
     */
    initWithAction(action: cc.ActionInterval, rate: number): boolean

    /**
     * Create new action to original operation effect opposite.
     * For example:
     * - The action will be x coordinates of 0 move to 100.
     * - The reversed action will be x of 100 move to 0.
     * - Will be rewritten
     *
     * @returns {cc.EaseRateAction}
     */
    reverse(): cc.EaseRateAction

    /**
     * set rate value for the actions
     *
     * @param {Number} rate
     */
    setRate(rate: number): any
  }
}

declare namespace cc {
  namespace EaseRateAction {

    /**
     * Please use cc.easeRateAction instead.
     * Creates the action with the inner action and the rate parameter.
     */
    let create: cc.EaseRateAction


  }
}

declare namespace cc {
  interface EaseIn  {

    /**
     * cc.EaseIn action with a rate. From slow to fast.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseIn}
     */
    clone(): cc.EaseIn

    /**
     * Create a cc.easeIn action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseIn}
     */
    reverse(): cc.EaseIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseIn {



    /**
     * Creates the action with the inner action and the rate parameter.
     * From slow to fast.
     *
     * @param {cc.ActionInterval} action
     * @param {Number} rate
     *
     * @returns {cc.EaseIn}
     */
    function create(action: cc.ActionInterval, rate: number): cc.EaseIn
  }
}

declare namespace cc {
  interface EaseInOut  {

    /**
     * cc.EaseInOut action with a rate.
     * Slow to fast then to slow.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseInOut}
     */
    clone(): cc.EaseInOut

    /**
     * Create a cc.EaseInOut action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseInOut}
     */
    reverse(): cc.EaseInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseInOut {



    /**
     * Creates the action with the inner action and the rate parameter.
     * Slow to fast then to slow.
     *
     * @param {cc.ActionInterval} action
     * @param {Number} rate
     *
     * @returns {cc.EaseInOut}
     */
    function create(action: cc.ActionInterval, rate: number): cc.EaseInOut
  }
}

declare namespace cc {
  interface EaseOut  {

    /**
     * cc.EaseOut action with a rate. From fast to slow.
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseOut}
     */
    clone(): cc.EaseOut

    /**
     * Create a cc.easeIn action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseOut}
     */
    reverse(): cc.EaseOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseOut {



    /**
     * Creates the action with the inner action and the rate parameter.
     * From fast to slow.
     *
     * @param {cc.ActionInterval} action
     * @param {Number} rate
     *
     * @returns {cc.EaseOut}
     */
    function create(action: cc.ActionInterval, rate: number): cc.EaseOut
  }
}

declare namespace cc {
  interface EaseSineIn  {

    /**
     * Ease Sine In.
     * Reference easeInSine:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseSineIn}
     */
    clone(): cc.EaseSineIn

    /**
     * Create a cc.EaseSineOut action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseSineOut}
     */
    reverse(): cc.EaseSineOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseSineIn {



    /**
     * creates an EaseSineIn action.
     * Reference easeInSine:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseSineIn}
     */
    function create(action: cc.ActionInterval): cc.EaseSineIn
  }
}

declare namespace cc {
  interface EaseSineInOut  {

    /**
     * Ease Sine InOut.
     * Reference easeInOutSine:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseSineInOut}
     */
    clone(): cc.EaseSineInOut

    /**
     * Create a cc.EaseSineInOut action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseSineInOut}
     */
    reverse(): cc.EaseSineInOut

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseSineInOut {



    /**
     * Creates the action.
     * Reference easeInOutSine:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseSineInOut}
     */
    function create(action: cc.ActionInterval): cc.EaseSineInOut
  }
}

declare namespace cc {
  interface EaseSineOut  {

    /**
     * Ease Sine Out.
     * Reference easeOutSine:
     * http://www.zhihu.com/question/21981571/answer/19925418
     */
    constructor()


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.EaseSineOut}
     */
    clone(): cc.EaseSineOut

    /**
     * Create a cc.EaseSineIn action. Opposite with the original motion trajectory.
     *
     * @returns {cc.EaseSineIn}
     */
    reverse(): cc.EaseSineIn

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace EaseSineOut {



    /**
     * Creates an EaseSineOut action.
     * Reference easeOutSine:
     * http://www.zhihu.com/question/21981571/answer/19925418
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseSineOut}
     */
    function create(action: cc.ActionInterval): cc.EaseSineOut
  }
}

declare namespace cc {
  interface ActionTween  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates an initializes the action with the property name (key), and the from and to parameters.
     *
     * @param {Number} duration
     * @param {String} key
     * @param {Number} from
     * @param {Number} to
     */
    constructor(duration: number, key: string, from: number, to: number)


  }
}

declare namespace cc {
  namespace ActionTween {

    /**
     * Please use cc.actionTween instead.
     * Creates an initializes the action with the property name (key), and the from and to parameters.
     */
    let create: cc.ActionTween


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.ActionTween}
     */
    function clone(): cc.ActionTween

    /**
     * initializes the action with the property name (key), and the from and to parameters.
     *
     * @param {Number} duration
     * @param {String} key
     * @param {Number} from
     * @param {Number} to
     *
     * @returns {Boolean}
     */
    function initWithDuration(duration: number, key: string, from: number, to: number): boolean

    /**
     * returns a reversed action.
     *
     * @returns {cc.ActionTween}
     */
    function reverse(): cc.ActionTween

    /**
     * Start this tween with target.
     *
     * @param {cc.ActionTweenDelegate} target
     */
    function startWithTarget(target: cc.ActionTweenDelegate): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    function update(dt: number): any
  }
}

declare namespace cc {
  interface Animate  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * create the animate with animation.
     *
     * @param {cc.Animation} animation
     */
    constructor(animation: cc.Animation)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.Animate}
     */
    clone(): cc.Animate

    /**
     *
     *
     * @returns {cc.Animation}
     */
    getAnimation(): cc.Animation

    /**
     * Gets the index of sprite frame currently displayed.
     *
     * @returns {Number}
     */
    getCurrentFrameIndex(): number

    /**
     *
     *
     * @param {cc.Animation} animation
     *
     * @returns {Boolean}
     */
    initWithAnimation(animation: cc.Animation): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.Animate}
     */
    reverse(): cc.Animate

    /**
     *
     *
     * @param {cc.Animation} animation
     */
    setAnimation(animation: cc.Animation): any

    /**
     * Start the action with target.
     *
     * @param {cc.Sprite} target
     */
    startWithTarget(target: cc.Sprite): any

    /**
     * stop the action
     */
    stop(): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Animate {

    /**
     * Please use cc.animate instead
     * create the animate with animation
     */
    let create: cc.Animate


  }
}

declare namespace cc {
  interface BezierBy  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} t time in seconds
     * @param {Array} c Array of points
     */
    constructor(t: number, c: any[])


    /**
     * returns a new clone of the action
     *
     * @returns {cc.BezierBy}
     */
    clone(): cc.BezierBy

    /**
     * Initializes the action.
     *
     * @param {Number} t time in seconds
     * @param {Array} c Array of points
     *
     * @returns {Boolean}
     */
    initWithDuration(t: number, c: any[]): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.BezierBy}
     */
    reverse(): cc.BezierBy

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace BezierBy {

    /**
     * Please use cc.bezierBy instead.
     * An action that moves the target with a cubic Bezier curve by a certain distance.
     * Relative to its movement.
     */
    let create: cc.BezierBy


  }
}

declare namespace cc {
  interface BezierTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} t
     * @param {Array} c array of points
     * var bezierTo = new cc.BezierTo(2, bezier);
     */
    constructor(t: number, c: any[])


    /**
     * returns a new clone of the action
     *
     * @returns {cc.BezierTo}
     */
    clone(): cc.BezierTo

    /**
     * Initializes the action.
     *
     * @param {Number} t time in seconds
     * @param {Array} c Array of points
     *
     * @returns {Boolean}
     */
    initWithDuration(t: number, c: any[]): boolean

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any
  }
}

declare namespace cc {
  namespace BezierTo {

    /**
     * Please use cc.bezierTo instead
     */
    let create: cc.BezierTo


  }
}

declare namespace cc {
  interface Blink  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration duration in seconds
     * @param {Number} blinks blinks in times
     */
    constructor(duration: number, blinks: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.Blink}
     */
    clone(): cc.Blink

    /**
     * Initializes the action.
     *
     * @param {Number} duration duration in seconds
     * @param {Number} blinks blinks in times
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, blinks: number): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.Blink}
     */
    reverse(): cc.Blink

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * stop the action
     */
    stop(): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt time in seconds
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Blink {

    /**
     * Please use cc.blink instead.
     * Blinks a cc.Node object by modifying it's visible attribute.
     */
    let create: cc.Blink


  }
}

declare namespace cc {
  interface CardinalSplineTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates an action with a Cardinal Spline array of points and tension.
     *
     * @param {Number} duration
     * @param {Array} points array of control points
     * @param {Number} tension
     */
    constructor(duration: number, points: any[], tension: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.CardinalSplineTo}
     */
    clone(): cc.CardinalSplineTo

    /**
     * Points getter
     *
     * @returns {Array}
     */
    getPoints(): any[]

    /**
     * initializes the action with a duration and an array of points
     *
     * @param {Number} duration
     * @param {Array} points array of control points
     * @param {Number} tension
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, points: any[], tension: number): boolean

    /**
     * reverse a new cc.CardinalSplineTo.
     * Along the track of movement in the opposite.
     *
     * @returns {cc.CardinalSplineTo}
     */
    reverse(): cc.CardinalSplineTo

    /**
     * Points setter
     *
     * @param {Array} points
     */
    setPoints(points: any[]): any

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any

    /**
     * update position of target
     *
     * @param {cc.Point} newPos
     */
    updatePosition(newPos: cc.Point): any
  }
}

declare namespace cc {
  namespace CardinalSplineTo {



    /**
     * Please use cc.cardinalSplineTo instead.
     * creates an action with a Cardinal Spline array of points and tension
     *
     * @param {Number} duration
     * @param {Array} points array of control points
     * @param {Number} tension
     *
     * @returns {cc.CardinalSplineTo}
     */
    function create(duration: number, points: any[], tension: number): cc.CardinalSplineTo
  }
}

declare namespace cc {
  interface CardinalSplineBy  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates an action with a Cardinal Spline array of points and tension.
     *
     * @param {Number} duration
     * @param {Array} points
     * @param {Number} tension
     */
    constructor(duration: number, points: any[], tension: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.CardinalSplineBy}
     */
    clone(): cc.CardinalSplineBy

    /**
     * reverse a new cc.CardinalSplineBy
     *
     * @returns {cc.CardinalSplineBy}
     */
    reverse(): cc.CardinalSplineBy

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * update position of target
     *
     * @param {cc.Point} newPos
     */
    updatePosition(newPos: cc.Point): any
  }
}

declare namespace cc {
  namespace CardinalSplineBy {



    /**
     * Please use cc.cardinalSplineBy instead.
     * creates an action with a Cardinal Spline array of points and tension.
     *
     * @param {Number} duration
     * @param {Array} points
     * @param {Number} tension
     *
     * @returns {cc.CardinalSplineBy}
     */
    function create(duration: number, points: any[], tension: number): cc.CardinalSplineBy
  }
}

declare namespace cc {
  interface CatmullRomBy  {

    /**
     * An action that moves the target with a CatmullRom curve by a certain distance.
     * A Catmull Rom is a Cardinal Spline with a tension of 0.5.
     * http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline
     * Relative coordinates.
     *
     * @param {Number} dt
     * @param {Array} points
     */
    constructor(dt: number, points: any[])


  }
}

declare namespace cc {
  namespace CatmullRomBy {

    /**
     * Please use cc.catmullRomBy instead
     * Creates an action with a Cardinal Spline array of points and tension
     */
    let create: any


  }
}

declare namespace cc {
  interface CatmullRomTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates an action with a Cardinal Spline array of points and tension.
     *
     * @param {Number} dt
     * @param {Array} points
     */
    constructor(dt: number, points: any[])


    /**
     * returns a new clone of the action
     *
     * @returns {cc.CatmullRomTo}
     */
    clone(): cc.CatmullRomTo

    /**
     * Initializes the action with a duration and an array of points
     *
     * @param {Number} dt
     * @param {Array} points
     */
    initWithDuration(dt: number, points: any[]): any
  }
}

declare namespace cc {
  namespace CatmullRomTo {

    /**
     * Please use cc.catmullRomTo instead.
     * creates an action with a Cardinal Spline array of points and tension.
     */
    let create: cc.CatmullRomTo


  }
}

declare namespace cc {
  interface DelayTime  {

    /**
     * Delays the action a certain amount of seconds
     */
    constructor()


    /**
     * returns a new clone of the action
     *
     * @returns {cc.DelayTime}
     */
    clone(): cc.DelayTime

    /**
     * Returns a reversed action.
     *
     * @returns {cc.DelayTime}
     */
    reverse(): cc.DelayTime

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     * Will be overwrite.
     *
     * @param {Number} dt time in seconds
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace DelayTime {

    /**
     * Please use cc.delayTime instead.
     * Delays the action a certain amount of seconds
     */
    let create: cc.DelayTime


  }
}

declare namespace cc {
  interface FadeTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration
     * @param {Number} opacity 0-255, 0 is transparent
     */
    constructor(duration: number, opacity: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.FadeTo}
     */
    clone(): cc.FadeTo

    /**
     * Initializes the action.
     *
     * @param {Number} duration duration in seconds
     * @param {Number} opacity
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, opacity: number): boolean

    /**
     * Start this action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} time time in seconds
     */
    update(time: number): any
  }
}

declare namespace cc {
  namespace FadeTo {

    /**
     * Please use cc.fadeTo instead.
     * Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
     */
    let create: cc.FadeTo


  }
}

declare namespace cc {
  interface FadeIn  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration duration in seconds
     */
    constructor(duration: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.FadeIn}
     */
    clone(): cc.FadeIn

    /**
     * Returns a reversed action.
     *
     * @returns {cc.FadeOut}
     */
    reverse(): cc.FadeOut

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any
  }
}

declare namespace cc {
  namespace FadeIn {

    /**
     * Please use cc.fadeIn instead.
     * Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.
     */
    let create: cc.FadeIn


  }
}

declare namespace cc {
  interface FadeOut  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration duration in seconds
     */
    constructor(duration: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.FadeOut}
     */
    clone(): cc.FadeOut

    /**
     * Returns a reversed action.
     *
     * @returns {cc.FadeIn}
     */
    reverse(): cc.FadeIn
  }
}

declare namespace cc {
  namespace FadeOut {

    /**
     * Please use cc.fadeOut instead.
     * Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
     */
    let create: cc.FadeOut


  }
}

declare namespace cc {
  interface GridAction  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     */
    constructor(duration: number, gridSize: cc.Size)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.ActionInterval}
     */
    clone(): cc.ActionInterval

    /**
     * Returns the grid.
     *
     * @returns {cc.GridBase}
     */
    getGrid(): cc.GridBase

    /**
     * Initializes the action with size and duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size): boolean

    /**
     * Create a cc.ReverseTime action. Opposite with the original motion trajectory.
     *
     * @returns {cc.ReverseTime}
     */
    reverse(): cc.ReverseTime

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any
  }
}

declare namespace cc {
  namespace GridAction {

    /**
     * Please use cc.gridAction instead.
     * Creates the action with size and duration.
     */
    let create: cc.GridAction


  }
}

declare namespace cc {
  interface Grid3DAction  {

    /**
     * Base class for cc.Grid3D actions.
     * Grid3D actions can modify a non-tiled grid.
     */
    constructor()


    /**
     * returns the grid
     *
     * @returns {cc.Grid3D}
     */
    getGrid(): cc.Grid3D

    /**
     * get rect of the grid
     *
     * @returns {cc.Rect} rect
     */
    getGridRect(): cc.Rect

    /**
     * returns the non-transformed vertex that belongs to certain position in the grid
     *
     * @param {cc.Point} position
     *
     * @returns {cc.Vertex3F}
     */
    getOriginalVertex(position: cc.Point): cc.Vertex3F

    /**
     * returns the vertex than belongs to certain position in the grid
     *
     * @param {cc.Point} position
     *
     * @returns {cc.Vertex3F}
     */
    getVertex(position: cc.Point): cc.Vertex3F

    /**
     * returns the non-transformed vertex than belongs to certain position in the grid
     * It will be deprecated in future, please use getVertex instead.
     *
     * @param {cc.Point} position
     *
     * @returns {cc.Vertex3F}
     */
    originalVertex(position: cc.Point): cc.Vertex3F

    /**
     * sets a new vertex to a certain position of the grid
     *
     * @param {cc.Point} position
     * @param {cc.Vertex3F} vertex
     */
    setVertex(position: cc.Point, vertex: cc.Vertex3F): any

    /**
     * returns the vertex than belongs to certain position in the grid.
     * It will be deprecated in future, please use getVertex instead.
     *
     * @param {cc.Point} position
     *
     * @returns {cc.Vertex3F}
     */
    vertex(position: cc.Point): cc.Vertex3F
  }
}

declare namespace cc {
  namespace Grid3DAction {

    /**
     * Please use cc.grid3DAction instead.
     * creates the action with size and duration.
     */
    let create: cc.Grid3DAction


  }
}

declare namespace cc {
  interface FlipX3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a Flip X 3D action with duration.
     *
     * @param {Number} duration
     */
    constructor(duration: number)


    /**
     * initializes the action with duration
     *
     * @param {Number} duration
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number): boolean

    /**
     * initializes the action with gridSize and duration
     *
     * @param {cc.Size} gridSize
     * @param {Number} duration
     *
     * @returns {Boolean}
     */
    initWithSize(gridSize: cc.Size, duration: number): boolean

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace FlipX3D {

    /**
     * Please use cc.flipX3D instead.
     * Create a Flip X 3D action with duration.
     * Flip around.
     */
    let create: cc.FlipX3D


  }
}

declare namespace cc {
  interface FlipY3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a flip Y 3d action with duration.
     *
     * @param {Number} duration
     */
    constructor(duration: number)


    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace FlipY3D {

    /**
     * Please use cc.flipY3D instead.
     * Create a flip Y 3d action with duration.
     */
    let create: cc.FlipY3D


  }
}

declare namespace cc {
  interface Lens3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates a lens 3d action with center position, radius.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Point} position
     * @param {Number} radius
     */
    constructor(duration: number, gridSize: cc.Size, position: cc.Point, radius: number)


    /**
     * Get lens center position
     *
     * @returns {Number}
     */
    getLensEffect(): number

    /**
     * get Position
     *
     * @returns {cc.Point}
     */
    getPosition(): cc.Point

    /**
     * initializes the action with center position, radius, a grid size and duration
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Point} position
     * @param {Number} radius
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, position: cc.Point, radius: number): boolean

    /**
     * Set whether lens is concave
     *
     * @param {Boolean} concave
     */
    setConcave(concave: boolean): any

    /**
     * Set lens center position
     *
     * @param {Number} lensEffect
     */
    setLensEffect(lensEffect: number): any

    /**
     * set Position
     *
     * @param {cc.Point} position
     */
    setPosition(position: cc.Point): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Lens3D {

    /**
     * Please use cc.lens3D instead
     * creates a lens 3d action with center position, radius
     */
    let create: cc.Lens3D


  }
}

declare namespace cc {
  interface Liquid  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a liquid action with amplitude, a grid and duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     */
    constructor(duration: number, gridSize: cc.Size, waves: number, amplitude: number)


    /**
     * get amplitude
     *
     * @returns {Number}
     */
    getAmplitude(): number

    /**
     * get amplitude rate
     *
     * @returns {Number}
     */
    getAmplitudeRate(): number

    /**
     * initializes the action with amplitude, a grid and duration
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, waves: number, amplitude: number): boolean

    /**
     * set amplitude
     *
     * @param {Number} amplitude
     */
    setAmplitude(amplitude: number): any

    /**
     * set amplitude rate
     *
     * @param {Number} amplitudeRate
     */
    setAmplitudeRate(amplitudeRate: number): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Liquid {

    /**
     * Please use cc.liquid instead
     * creates the action with amplitude, a grid and duration
     */
    let create: cc.Liquid


  }
}

declare namespace cc {
  interface PageTurn3D  {

    /**
     * This action simulates a page turn from the bottom right hand corner of the screen.
     * It's not much use by itself but is used by the PageTurnTransition.
     * Based on an original paper by L Hong et al.
     * http://www.parc.com/publication/1638/turning-pages-of-3d-electronic-books.html
     */
    constructor()


    /**
     * Update each tick
     * Time is the percentage of the way through the duration
     *
     * @param {} time
     */
    update(time: any): any
  }
}

declare namespace cc {
  namespace PageTurn3D {

    /**
     * Please use cc.pageTurn3D instead
     * create PageTurn3D action
     */
    let create: cc.PageTurn3D


  }
}

declare namespace cc {
  interface Ripple3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates a ripple 3d action with radius, number of waves, amplitude.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Point} position
     * @param {Number} radius
     * @param {Number} waves
     * @param {Number} amplitude
     */
    constructor(duration: number, gridSize: cc.Size, position: cc.Point, radius: number, waves: number, amplitude: number)


    /**
     * get Amplitude
     *
     * @returns {Number}
     */
    getAmplitude(): number

    /**
     * get Amplitude rate
     *
     * @returns {*}
     */
    getAmplitudeRate(): any

    /**
     * get center position
     *
     * @returns {cc.Point}
     */
    getPosition(): cc.Point

    /**
     * initializes the action with radius, number of waves, amplitude, a grid size and duration
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Point} position
     * @param {Number} radius
     * @param {Number} waves
     * @param {Number} amplitude
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, position: cc.Point, radius: number, waves: number, amplitude: number): boolean

    /**
     * set Amplitude
     *
     * @param {Number} amplitude
     */
    setAmplitude(amplitude: number): any

    /**
     * get amplitude rate
     *
     * @param {Number} amplitudeRate
     */
    setAmplitudeRate(amplitudeRate: number): any

    /**
     * set center position
     *
     * @param {cc.Point} position
     */
    setPosition(position: cc.Point): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Ripple3D {

    /**
     * Please use cc.ripple3D instead
     * creates a ripple 3d action with radius, number of waves, amplitude
     */
    let create: cc.Ripple3D


  }
}

declare namespace cc {
  interface Shaky3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a shaky3d action with a range, shake Z vertices.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shakeZ
     */
    constructor(duration: number, gridSize: cc.Size, range: number, shakeZ: boolean)


    /**
     * initializes the action with a range, shake Z vertices, a grid and duration
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shakeZ
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, range: number, shakeZ: boolean): boolean

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Shaky3D {

    /**
     * Please use cc.shaky3D instead
     * creates the action with a range, shake Z vertices, a grid and duration
     */
    let create: cc.Shaky3D


  }
}

declare namespace cc {
  interface Twirl  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a grid 3d action with center position, number of twirls, amplitude, a grid size and duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Point} position
     * @param {Number} twirls
     * @param {Number} amplitude
     */
    constructor(duration: number, gridSize: cc.Size, position: cc.Point, twirls: number, amplitude: number)


    /**
     * get amplitude
     *
     * @returns {Number}
     */
    getAmplitude(): number

    /**
     * get amplitude rate
     *
     * @returns {Number}
     */
    getAmplitudeRate(): number

    /**
     * get twirl center
     *
     * @returns {cc.Point}
     */
    getPosition(): cc.Point

    /**
     * initializes the action with center position, number of twirls, amplitude, a grid size and duration
     *
     * @param {} duration
     * @param {} gridSize
     * @param {} position
     * @param {} twirls
     * @param {} amplitude
     */
    initWithDuration(duration: any, gridSize: any, position: any, twirls: any, amplitude: any): any

    /**
     * set amplitude
     *
     * @param {Number} amplitude
     */
    setAmplitude(amplitude: number): any

    /**
     * set amplitude rate
     *
     * @param {Number} amplitudeRate
     */
    setAmplitudeRate(amplitudeRate: number): any

    /**
     * set twirl center
     *
     * @param {cc.Point} position
     */
    setPosition(position: cc.Point): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Twirl {

    /**
     * Please use cc.twirl instead
     * creates the action with center position, number of twirls, amplitude, a grid size and duration
     */
    let create: cc.Twirl


  }
}

declare namespace cc {
  interface Waves  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a wave action with amplitude, horizontal sin, vertical sin, a grid and duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     * @param {Boolean} horizontal
     * @param {Boolean} vertical
     */
    constructor(duration: number, gridSize: cc.Size, waves: number, amplitude: number, horizontal: boolean, vertical: boolean)


    /**
     * get amplitude
     *
     * @returns {Number}
     */
    getAmplitude(): number

    /**
     * get amplitude rate
     *
     * @returns {Number}
     */
    getAmplitudeRate(): number

    /**
     * initializes the action with amplitude, horizontal sin, vertical sin, a grid and duration
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     * @param {Boolean} horizontal
     * @param {Boolean} vertical
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, waves: number, amplitude: number, horizontal: boolean, vertical: boolean): boolean

    /**
     * set amplitude
     *
     * @param {Number} amplitude
     */
    setAmplitude(amplitude: number): any

    /**
     * set amplitude rate
     *
     * @param {Number} amplitudeRate
     */
    setAmplitudeRate(amplitudeRate: number): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Waves {

    /**
     * Please use cc.waves instead
     * initializes the action with amplitude, horizontal sin, vertical sin, a grid and duration
     */
    let create: cc.Waves


  }
}

declare namespace cc {
  interface Waves3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a wave 3d action with duration, grid size, waves and amplitude.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     */
    constructor(duration: number, gridSize: cc.Size, waves: number, amplitude: number)


    /**
     * get Amplitude
     *
     * @returns {Number}
     */
    getAmplitude(): number

    /**
     * get Amplitude Rate
     *
     * @returns {Number}
     */
    getAmplitudeRate(): number

    /**
     * initializes an action with duration, grid size, waves and amplitude
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, waves: number, amplitude: number): boolean

    /**
     * set Amplitude
     *
     * @param {Number} amplitude
     */
    setAmplitude(amplitude: number): any

    /**
     * set Amplitude Rate
     *
     * @param {Number} amplitudeRate
     */
    setAmplitudeRate(amplitudeRate: number): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Waves3D {

    /**
     * Please use cc.waves3D instead.
     * Create a wave 3d action with duration, grid size, waves and amplitude.
     */
    let create: any


  }
}

declare namespace cc {
  interface TiledGrid3DAction  {

    /**
     * Base class for cc.TiledGrid3D actions.
     */
    constructor()


    /**
     * returns the grid
     *
     * @returns {cc.TiledGrid3D}
     */
    getGrid(): cc.TiledGrid3D

    /**
     * returns the non-transformed tile that belongs to a certain position of the grid
     *
     * @param {cc.Point} position
     *
     * @returns {cc.Quad3}
     */
    getOriginalTile(position: cc.Point): cc.Quad3

    /**
     * returns the tile that belongs to a certain position of the grid
     *
     * @param {cc.Point} position
     *
     * @returns {cc.Quad3}
     */
    getTile(position: cc.Point): cc.Quad3

    /**
     * returns the non-transformed tile that belongs to a certain position of the grid
     * It will be deprecated in future, please use getOriginalTile instead.
     *
     * @param {cc.Point} position
     *
     * @returns {cc.Quad3}
     */
    originalTile(position: cc.Point): cc.Quad3

    /**
     * sets a new tile to a certain position of the grid
     *
     * @param {cc.Point} position
     * @param {cc.Quad3} coords
     */
    setTile(position: cc.Point, coords: cc.Quad3): any

    /**
     * returns the tile that belongs to a certain position of the grid
     * It will be deprecated in future, please use getTile instead.
     *
     * @param {cc.Point} position
     *
     * @returns {cc.Quad3}
     */
    tile(position: cc.Point): cc.Quad3
  }
}

declare namespace cc {
  namespace TiledGrid3DAction {

    /**
     * Please use cc.tiledGrid3DAction instead
     * Creates the action with duration and grid size
     */
    let create: cc.TiledGrid3DAction


  }
}

declare namespace cc {
  interface FadeOutTRTiles  {

    /**
     * cc.FadeOutTRTiles action. Fades out the tiles in a Top-Right direction.
     * Reference the test cases (Effects Test)
     */
    constructor()


    /**
     * Test function
     *
     * @param {cc.Point} pos
     * @param {Number} time
     */
    testFunc(pos: cc.Point, time: number): any

    /**
     * Transform tile
     *
     * @param {cc.Point} pos
     * @param {Number} distance
     */
    transformTile(pos: cc.Point, distance: number): any

    /**
     * Turn Off Tile
     *
     * @param {cc.Point} pos
     */
    turnOffTile(pos: cc.Point): any

    /**
     * Turn on Tile
     *
     * @param {cc.Point} pos
     */
    turnOnTile(pos: cc.Point): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace FadeOutTRTiles {

    /**
     * Please use cc.fadeOutTRTiles instead.
     * Creates the action with the grid size and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.FadeOutTRTiles


  }
}

declare namespace cc {
  interface FadeOutBLTiles  {

    /**
     * cc.FadeOutBLTiles action. Fades out the tiles in a Bottom-Left direction.
     * Reference the test cases (Effects Test)
     */
    constructor()


    /**
     * Test function
     *
     * @param {cc.Point} pos
     * @param {Number} time
     */
    testFunc(pos: cc.Point, time: number): any
  }
}

declare namespace cc {
  namespace FadeOutBLTiles {

    /**
     * Please use cc.fadeOutBLTiles instead.
     * Creates the action with the grid size and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.FadeOutBLTiles


  }
}

declare namespace cc {
  interface FadeOutUpTiles  {

    /**
     * cc.FadeOutUpTiles action. Fades out the tiles in upwards direction.
     * Reference the test cases (Effects Test)
     */
    constructor()


    /**
     * Test function
     *
     * @param {cc.Point} pos
     * @param {Number} time
     */
    testFunc(pos: cc.Point, time: number): any
  }
}

declare namespace cc {
  namespace FadeOutUpTiles {

    /**
     * Please use cc.fadeOutUpTiles instead.
     * Creates the action with the grid size and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.FadeOutUpTiles


  }
}

declare namespace cc {
  interface FadeOutDownTiles  {

    /**
     * cc.FadeOutDownTiles action. Fades out the tiles in downwards direction.
     * Reference the test cases (Effects Test)
     */
    constructor()


    /**
     * Test function
     *
     * @param {cc.Point} pos
     * @param {Number} time
     */
    testFunc(pos: cc.Point, time: number): any
  }
}

declare namespace cc {
  namespace FadeOutDownTiles {

    /**
     * Please use cc.fadeOutDownTiles instead.
     * Creates the action with the grid size and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.FadeOutDownTiles


  }
}

declare namespace cc {
  interface JumpTiles3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates the action with the number of jumps, the sin amplitude, the grid size and the duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} numberOfJumps
     * @param {Number} amplitude
     */
    constructor(duration: number, gridSize: cc.Size, numberOfJumps: number, amplitude: number)


    /**
     * get amplitude of the sin
     *
     * @returns {Number}
     */
    getAmplitude(): number

    /**
     * get amplitude rate
     *
     * @returns {Number}
     */
    getAmplitudeRate(): number

    /**
     * initializes the action with the number of jumps, the sin amplitude, the grid size and the duration
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} numberOfJumps
     * @param {Number} amplitude
     */
    initWithDuration(duration: number, gridSize: cc.Size, numberOfJumps: number, amplitude: number): any

    /**
     * set amplitude of the sin
     *
     * @param {Number} amplitude
     */
    setAmplitude(amplitude: number): any

    /**
     * set amplitude rate
     *
     * @param {} amplitudeRate
     */
    setAmplitudeRate(amplitudeRate: any): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace JumpTiles3D {

    /**
     * Please use cc.jumpTiles3D instead
     * creates the action with the number of jumps, the sin amplitude, the grid size and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.JumpTiles3D


  }
}

declare namespace cc {
  interface ShakyTiles3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates the action with a range, whether or not to shake Z vertices, a grid size, and duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shakeZ
     */
    constructor(duration: number, gridSize: cc.Size, range: number, shakeZ: boolean)


    /**
     * Initializes the action with a range, whether or not to shake Z vertices, a grid size, and duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shakeZ
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, range: number, shakeZ: boolean): boolean

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace ShakyTiles3D {

    /**
     * Please use cc.shakyTiles3D instead.
     * creates the action with a range, whether or not to shake Z vertices, a grid size, and duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.ShakyTiles3D


  }
}

declare namespace cc {
  interface ShatteredTiles3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates the action with a range, whether of not to shatter Z vertices, a grid size and duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shatterZ
     */
    constructor(duration: number, gridSize: cc.Size, range: number, shatterZ: boolean)


    /**
     * Initializes the action with a range, whether or not to shatter Z vertices, a grid size and duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shatterZ
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, range: number, shatterZ: boolean): boolean

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace ShatteredTiles3D {

    /**
     * Please use cc.shatteredTiles3D instead.
     * Creates the action with a range, whether of not to shatter Z vertices, a grid size and duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.ShatteredTiles3D


  }
}

declare namespace cc {
  interface ShuffleTiles  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates the action with a random seed, the grid size and the duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} seed
     */
    constructor(duration: number, gridSize: cc.Size, seed: number)


    /**
     * Get Delta
     *
     * @param {cc.Size} pos
     */
    getDelta(pos: cc.Size): any

    /**
     * Initializes the action with a random seed, the grid size and the duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} seed
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, seed: number): boolean

    /**
     * Place Tile
     *
     * @param {cc.Point} pos
     * @param {cc.Tile} tile
     */
    placeTile(pos: cc.Point, tile: cc.Tile): any

    /**
     * Shuffle
     *
     * @param {Array} array
     * @param {Number} len
     */
    shuffle(array: any[], len: number): any

    /**
     * Start with target
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace ShuffleTiles {

    /**
     * Please use cc.shuffleTiles instead.
     * Creates the action with a random seed, the grid size and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.ShuffleTiles


  }
}

declare namespace cc {
  interface SplitCols  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates the action with the number of columns to split and the duration.
     *
     * @param {Number} duration
     * @param {Number} cols
     */
    constructor(duration: number, cols: number)


    /**
     * initializes the action with the number of columns to split and the duration
     *
     * @param {Number} duration
     * @param {Number} cols
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, cols: number): boolean

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace SplitCols {

    /**
     * Please use cc.splitCols instead.
     * creates the action with the number of columns to split and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.SplitCols


  }
}

declare namespace cc {
  interface SplitRows  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates the action with the number of rows to split and the duration.
     *
     * @param {Number} duration
     * @param {Number} rows
     */
    constructor(duration: number, rows: number)


    /**
     * initializes the action with the number of rows to split and the duration
     *
     * @param {Number} duration
     * @param {Number} rows
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, rows: number): boolean

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace SplitRows {

    /**
     * Please use cc.splitRows instead
     * creates the action with the number of rows to split and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.SplitRows


  }
}

declare namespace cc {
  interface TurnOffTiles  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates the action with a random seed, the grid size and the duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number|Null} seed
     */
    constructor(duration: number, gridSize: cc.Size, seed: number | null)


    /**
     * Initializes the action with a random seed, the grid size and the duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number|Null} seed
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, seed: number | null): boolean

    /**
     * Shuffle
     *
     * @param {Array} array
     * @param {Number} len
     */
    shuffle(array: any[], len: number): any

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Turn off title.
     *
     * @param {cc.Point} pos
     */
    turnOffTile(pos: cc.Point): any

    /**
     * Turn on tile.
     *
     * @param {cc.Point} pos
     */
    turnOnTile(pos: cc.Point): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace TurnOffTiles {

    /**
     * Please use cc.turnOffTiles instead.
     * Creates the action with a random seed, the grid size and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.TurnOffTiles


  }
}

declare namespace cc {
  interface WavesTiles3D  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates the action with a number of waves, the waves amplitude, the grid size and the duration.
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     */
    constructor(duration: number, gridSize: cc.Size, waves: number, amplitude: number)


    /**
     * get amplitude of waves
     *
     * @returns {Number}
     */
    getAmplitude(): number

    /**
     * get amplitude rate of waves
     *
     * @returns {Number}
     */
    getAmplitudeRate(): number

    /**
     * initializes the action with a number of waves, the waves amplitude, the grid size and the duration
     *
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, gridSize: cc.Size, waves: number, amplitude: number): boolean

    /**
     * set amplitude of waves
     *
     * @param {Number} amplitude
     */
    setAmplitude(amplitude: number): any

    /**
     * set amplitude rate of waves
     *
     * @param {Number} amplitudeRate
     */
    setAmplitudeRate(amplitudeRate: number): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace WavesTiles3D {

    /**
     * Please use cc.wavesTiles3D instead
     * creates the action with a number of waves, the waves amplitude, the grid size and the duration.
     * Reference the test cases (Effects Test)
     */
    let create: cc.WavesTiles3D


  }
}

declare namespace cc {
  interface JumpBy  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration
     * @param {cc.Point|Number} position
     * @param {Number} y
     * @param {Number} height
     * @param {Number} jumps
     */
    constructor(duration: number, position: cc.Point | number, y: number, height: number, jumps: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.JumpBy}
     */
    clone(): cc.JumpBy

    /**
     * Initializes the action.
     *
     * @param {Number} duration
     * @param {cc.Point|Number} position
     * @param {Number} y
     * @param {Number} height
     * @param {Number} jumps
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, position: cc.Point | number, y: number, height: number, jumps: number): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.JumpBy}
     */
    reverse(): cc.JumpBy

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace JumpBy {

    /**
     * Please use cc.jumpBy instead.
     * Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
     * Relative to its movement.
     */
    let create: cc.JumpBy


  }
}

declare namespace cc {
  interface JumpTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration
     * @param {cc.Point|Number} position
     * @param {Number} y
     * @param {Number} height
     * @param {Number} jumps
     */
    constructor(duration: number, position: cc.Point | number, y: number, height: number, jumps: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.JumpTo}
     */
    clone(): cc.JumpTo

    /**
     * Initializes the action.
     *
     * @param {Number} duration
     * @param {cc.Point|Number} position
     * @param {Number} y
     * @param {Number} height
     * @param {Number} jumps
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, position: cc.Point | number, y: number, height: number, jumps: number): boolean

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any
  }
}

declare namespace cc {
  namespace JumpTo {

    /**
     * Please use cc.jumpTo instead.
     * Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute.
     * Jump to the specified location.
     */
    let create: cc.JumpTo


  }
}

declare namespace cc {
  interface MoveBy  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration duration in seconds
     * @param {cc.Point|Number} deltaPos
     * @param {Number} deltaY
     */
    constructor(duration: number, deltaPos: cc.Point | number, deltaY: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.MoveBy}
     */
    clone(): cc.MoveBy

    /**
     * Initializes the action.
     *
     * @param {Number} duration duration in seconds
     * @param {cc.Point} position
     * @param {Number} y
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, position: cc.Point, y: number): boolean

    /**
     * MoveTo reverse is not implemented
     *
     * @returns {cc.MoveBy}
     */
    reverse(): cc.MoveBy

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace MoveBy {

    /**
     * Please use cc.moveBy instead.
     * Relative to its coordinate moves a certain distance.
     */
    let create: cc.MoveBy


  }
}

declare namespace cc {
  interface MoveTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration duration in seconds
     * @param {cc.Point|Number} position
     * @param {Number} y
     */
    constructor(duration: number, position: cc.Point | number, y: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.MoveTo}
     */
    clone(): cc.MoveTo

    /**
     * Initializes the action.
     *
     * @param {Number} duration duration in seconds
     * @param {cc.Point} position
     * @param {Number} y
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, position: cc.Point, y: number): boolean

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any
  }
}

declare namespace cc {
  namespace MoveTo {

    /**
     * Please use cc.moveTo instead.
     * Moving to the specified coordinates.
     */
    let create: cc.MoveBy


  }
}

declare namespace cc {
  interface ProgressFromTo  {

    /**
     * Creates and initializes the action with a duration, a "from" percentage and a "to" percentage
     * Constructor of cc.ProgressFromTo
     *
     * @param {Number} duration duration in seconds
     * @param {Number} fromPercentage
     * @param {Number} toPercentage
     */
    constructor(duration: number, fromPercentage: number, toPercentage: number)


    /**
     * return a new cc.ProgressTo, all the configuration is the same as the original
     *
     * @returns {cc.ProgressFromTo}
     */
    clone(): cc.ProgressFromTo

    /**
     * Initializes the action with a duration, a "from" percentage and a "to" percentage
     *
     * @param {Number} duration duration in seconds
     * @param {Number} fromPercentage
     * @param {Number} toPercentage
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, fromPercentage: number, toPercentage: number): boolean

    /**
     *
     *
     * @returns {cc.ActionInterval}
     */
    reverse(): cc.ActionInterval

    /**
     * start with a target
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     *
     *
     * @param {Number} time time in seconds
     */
    update(time: number): any
  }
}

declare namespace cc {
  namespace ProgressFromTo {

    /**
     * Creates and initializes the action with a duration, a "from" percentage and a "to" percentage
     */
    let create: cc.ProgressFromTo


  }
}

declare namespace cc {
  interface ProgressTo  {

    /**
     * Creates a ProgressTo action with a duration and a percent
     * Constructor of cc.ProgressTo
     *
     * @param {Number} duration duration in seconds
     * @param {Number} percent
     */
    constructor(duration: number, percent: number)


    /**
     * return a new cc.ProgressTo, all the configuration is the same as the original
     *
     * @returns {cc.ProgressTo}
     */
    clone(): cc.ProgressTo

    /**
     * Initializes with a duration and a percent
     *
     * @param {Number} duration duration in seconds
     * @param {Number} percent
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, percent: number): boolean

    /**
     * reverse hasn't been supported
     *
     * @returns {null}
     */
    reverse(): null

    /**
     * start with a target
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * custom update
     *
     * @param {Number} time time in seconds
     */
    update(time: number): any
  }
}

declare namespace cc {
  namespace ProgressTo {

    /**
     * Please use cc.progressTo instead
     * Creates and initializes with a duration and a percent
     */
    let create: cc.ProgressTo


  }
}

declare namespace cc {
  interface Repeat  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30).
     *
     * @param {cc.FiniteTimeAction} action
     * @param {Number} times
     */
    constructor(action: cc.FiniteTimeAction, times: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.Repeat}
     */
    clone(): cc.Repeat

    /**
     * Get inner Action.
     *
     * @returns {cc.FiniteTimeAction}
     */
    getInnerAction(): cc.FiniteTimeAction

    /**
     *
     *
     * @param {cc.FiniteTimeAction} action
     * @param {Number} times
     *
     * @returns {Boolean}
     */
    initWithAction(action: cc.FiniteTimeAction, times: number): boolean

    /**
     * Return true if the action has finished.
     *
     * @returns {Boolean}
     */
    isDone(): boolean

    /**
     * returns a reversed action.
     *
     * @returns {cc.Repeat}
     */
    reverse(): cc.Repeat

    /**
     * Set inner Action.
     *
     * @param {cc.FiniteTimeAction} action
     */
    setInnerAction(action: cc.FiniteTimeAction): any

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * stop the action
     */
    stop(): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Repeat {

    /**
     * Please use cc.repeat instead
     * Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
     */
    let create: cc.Repeat


  }
}

declare namespace cc {
  interface RepeatForever  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a acton which repeat forever.
     *
     * @param {cc.FiniteTimeAction} action
     */
    constructor(action: cc.FiniteTimeAction)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.RepeatForever}
     */
    clone(): cc.RepeatForever

    /**
     * Get inner action.
     *
     * @returns {cc.ActionInterval}
     */
    getInnerAction(): cc.ActionInterval

    /**
     *
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {Boolean}
     */
    initWithAction(action: cc.ActionInterval): boolean

    /**
     * Return true if the action has finished.
     *
     * @returns {Boolean}
     */
    isDone(): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.RepeatForever}
     */
    reverse(): cc.RepeatForever

    /**
     * Set inner action.
     *
     * @param {cc.ActionInterval} action
     */
    setInnerAction(action: cc.ActionInterval): any

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * called every frame with it's delta time.
     * DON'T override unless you know what you are doing.
     *
     * @param {} dt delta time in seconds
     */
    step(dt: any): any
  }
}

declare namespace cc {
  namespace RepeatForever {

    /**
     * Please use cc.repeatForever instead
     * Create a acton which repeat forever
     */
    let create: cc.RepeatForever


  }
}

declare namespace cc {
  interface ReverseTime  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {cc.FiniteTimeAction} action
     */
    constructor(action: cc.FiniteTimeAction)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.ReverseTime}
     */
    clone(): cc.ReverseTime

    /**
     *
     *
     * @param {cc.FiniteTimeAction} action
     *
     * @returns {Boolean}
     */
    initWithAction(action: cc.FiniteTimeAction): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.ActionInterval}
     */
    reverse(): cc.ActionInterval

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Stop the action
     */
    stop(): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt time in seconds
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace ReverseTime {

    /**
     * Please use cc.reverseTime instead.
     * Executes an action in reverse order, from time=duration to time=0.
     */
    let create: cc.ReverseTime


  }
}

declare namespace cc {
  interface RotateBy  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration duration in seconds
     * @param {Number} deltaAngleX deltaAngleX in degrees
     * @param {Number} deltaAngleY deltaAngleY in degrees
     */
    constructor(duration: number, deltaAngleX: number, deltaAngleY: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.RotateBy}
     */
    clone(): cc.RotateBy

    /**
     * Initializes the action.
     *
     * @param {Number} duration duration in seconds
     * @param {Number} deltaAngleX deltaAngleX in degrees
     * @param {Number} deltaAngleY deltaAngleY in degrees
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, deltaAngleX: number, deltaAngleY: number): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.RotateBy}
     */
    reverse(): cc.RotateBy

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace RotateBy {

    /**
     * Please use cc.rotateBy instead.
     * Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
     * Relative to its properties to modify.
     */
    let create: cc.RotateBy


  }
}

declare namespace cc {
  interface RotateTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Creates a RotateTo action with x and y rotation angles.
     *
     * @param {Number} duration duration in seconds
     * @param {Number} deltaAngleX deltaAngleX in degrees.
     * @param {Number} deltaAngleY deltaAngleY in degrees.
     */
    constructor(duration: number, deltaAngleX: number, deltaAngleY: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.RotateTo}
     */
    clone(): cc.RotateTo

    /**
     * Initializes the action.
     *
     * @param {Number} duration
     * @param {Number} deltaAngleX
     * @param {Number} deltaAngleY
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, deltaAngleX: number, deltaAngleY: number): boolean

    /**
     * RotateTo reverse not implemented.
     * Will be overridden.
     *
     * @returns {cc.Action}
     */
    reverse(): cc.Action

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace RotateTo {

    /**
     * Please use cc.rotateTo instead
     * Creates a RotateTo action with separate rotation angles.
     * To specify the angle of rotation.
     */
    let create: cc.RotateTo


  }
}

declare namespace cc {
  interface ScaleTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration
     * @param {Number} sx scale parameter in X
     * @param {Number} sy scale parameter in Y, if Null equal to sx
     */
    constructor(duration: number, sx: number, sy: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.ScaleTo}
     */
    clone(): cc.ScaleTo

    /**
     * Initializes the action.
     *
     * @param {Number} duration
     * @param {Number} sx
     * @param {Number} sy
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, sx: number, sy: number): boolean

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace ScaleTo {

    /**
     * Please use cc.scaleTo instead.
     * Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
     */
    let create: cc.ScaleTo


  }
}

declare namespace cc {
  interface ScaleBy  {

    /**
     * Scales a cc.Node object a zoom factor by modifying it's scale attribute.
     * Relative to its changes.
     */
    constructor()


    /**
     * returns a new clone of the action
     *
     * @returns {cc.ScaleBy}
     */
    clone(): cc.ScaleBy

    /**
     * Returns a reversed action.
     *
     * @returns {cc.ScaleBy}
     */
    reverse(): cc.ScaleBy

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any
  }
}

declare namespace cc {
  namespace ScaleBy {

    /**
     * Please use cc.scaleBy instead.
     * Scales a cc.Node object a zoom factor by modifying it's scale attribute.
     * Relative to its changes.
     */
    let create: cc.ScaleBy


  }
}

declare namespace cc {
  interface Sequence  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create an array of sequenceable actions.
     *
     * @param {Array|cc.FiniteTimeAction} tempArray
     */
    constructor(tempArray: any[] | cc.FiniteTimeAction)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.Sequence}
     */
    clone(): cc.Sequence

    /**
     * Initializes the action
     *
     * @param {cc.FiniteTimeAction} actionOne
     * @param {cc.FiniteTimeAction} actionTwo
     *
     * @returns {Boolean}
     */
    initWithTwoActions(actionOne: cc.FiniteTimeAction, actionTwo: cc.FiniteTimeAction): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.Sequence}
     */
    reverse(): cc.Sequence

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * stop the action.
     */
    stop(): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Sequence {

    /**
     * Please use cc.sequence instead.
     * helper constructor to create an array of sequenceable actions
     */
    let create: cc.Sequence


  }
}

declare namespace cc {
  interface SkewTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} t time in seconds
     * @param {Number} sx
     * @param {Number} sy
     */
    constructor(t: number, sx: number, sy: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.SkewTo}
     */
    clone(): cc.SkewTo

    /**
     * Initializes the action.
     *
     * @param {Number} t time in seconds
     * @param {Number} sx
     * @param {Number} sy
     *
     * @returns {Boolean}
     */
    initWithDuration(t: number, sx: number, sy: number): boolean

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace SkewTo {

    /**
     * Please use cc.skewTo instead.
     * Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes。
     * Changes to the specified value.
     */
    let create: cc.SkewTo


  }
}

declare namespace cc {
  interface SkewBy  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} t time in seconds
     * @param {Number} sx skew in degrees for X axis
     * @param {Number} sy skew in degrees for Y axis
     */
    constructor(t: number, sx: number, sy: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.SkewBy}
     */
    clone(): cc.SkewBy

    /**
     * Initializes the action.
     *
     * @param {Number} t time in seconds
     * @param {Number} deltaSkewX skew in degrees for X axis
     * @param {Number} deltaSkewY skew in degrees for Y axis
     *
     * @returns {Boolean}
     */
    initWithDuration(t: number, deltaSkewX: number, deltaSkewY: number): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.SkewBy}
     */
    reverse(): cc.SkewBy

    /**
     * Start the action width target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any
  }
}

declare namespace cc {
  namespace SkewBy {

    /**
     * Please use cc.skewBy instead.
     * Skews a cc.Node object by skewX and skewY degrees.
     * Relative to its attribute modification.
     */
    let create: cc.SkewBy


  }
}

declare namespace cc {
  interface Spawn  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Array|cc.FiniteTimeAction} tempArray
     */
    constructor(tempArray: any[] | cc.FiniteTimeAction)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.Spawn}
     */
    clone(): cc.Spawn

    /**
     * initializes the Spawn action with the 2 actions to spawn
     *
     * @param {cc.FiniteTimeAction} action1
     * @param {cc.FiniteTimeAction} action2
     *
     * @returns {Boolean}
     */
    initWithTwoActions(action1: cc.FiniteTimeAction, action2: cc.FiniteTimeAction): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.Spawn}
     */
    reverse(): cc.Spawn

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Stop the action
     */
    stop(): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Spawn {

    /**
     * Please use cc.spawn instead.
     * Create a spawn action which runs several actions in parallel.
     */
    let create: cc.FiniteTimeAction


  }
}

declare namespace cc {
  interface TargetedAction  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create an action with the specified action and forced target.
     *
     * @param {cc.Node} target
     * @param {cc.FiniteTimeAction} action
     */
    constructor(target: cc.Node, action: cc.FiniteTimeAction)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.TargetedAction}
     */
    clone(): cc.TargetedAction

    /**
     * return the target that the action will be forced to run with
     *
     * @returns {cc.Node}
     */
    getForcedTarget(): cc.Node

    /**
     * Init an action with the specified action and forced target
     *
     * @param {cc.Node} target
     * @param {cc.FiniteTimeAction} action
     *
     * @returns {Boolean}
     */
    initWithTarget(target: cc.Node, action: cc.FiniteTimeAction): boolean

    /**
     * set the target that the action will be forced to run with
     *
     * @param {cc.Node} forcedTarget
     */
    setForcedTarget(forcedTarget: cc.Node): any

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * stop the action
     */
    stop(): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace TargetedAction {

    /**
     * Please use cc.targetedAction instead
     * Create an action with the specified action and forced target
     */
    let create: cc.TargetedAction


  }
}

declare namespace cc {
  interface TintBy  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration duration in seconds
     * @param {Number} deltaRed
     * @param {Number} deltaGreen
     * @param {Number} deltaBlue
     */
    constructor(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.TintBy}
     */
    clone(): cc.TintBy

    /**
     * Initializes the action.
     *
     * @param {Number} duration
     * @param {Number} deltaRed 0-255
     * @param {Number} deltaGreen 0-255
     * @param {Number} deltaBlue 0-255
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number): boolean

    /**
     * Returns a reversed action.
     *
     * @returns {cc.TintBy}
     */
    reverse(): cc.TintBy

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt time in seconds
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace TintBy {

    /**
     * Please use cc.tintBy instead.
     * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * Relative to their own color change.
     */
    let create: cc.TintBy


  }
}

declare namespace cc {
  interface TintTo  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} duration
     * @param {Number} red 0-255
     * @param {Number} green 0-255
     * @param {Number} blue 0-255
     */
    constructor(duration: number, red: number, green: number, blue: number)


    /**
     * returns a new clone of the action
     *
     * @returns {cc.TintTo}
     */
    clone(): cc.TintTo

    /**
     * Initializes the action.
     *
     * @param {Number} duration
     * @param {Number} red 0-255
     * @param {Number} green 0-255
     * @param {Number} blue 0-255
     *
     * @returns {Boolean}
     */
    initWithDuration(duration: number, red: number, green: number, blue: number): boolean

    /**
     * Start the action with target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * Called once per frame. Time is the number of seconds of a frame interval.
     *
     * @param {Number} dt time in seconds
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace TintTo {

    /**
     * Please use cc.tintTo instead.
     * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     */
    let create: cc.TintTo


  }
}

declare namespace cc {
  interface Follow  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates the action with a set boundary.
     * creates the action with no boundary set.
     *
     * @param {cc.Node} followedNode
     * @param {cc.Rect} rect
     */
    constructor(followedNode: cc.Node, rect: cc.Rect)

    /**
     * - world bottomBoundary.
     */
    bottomBoundary: number

    /**
     * - world leftBoundary.
     */
    leftBoundary: number

    /**
     * - world rightBoundary.
     */
    rightBoundary: number

    /**
     * - world topBoundary.
     */
    topBoundary: number

    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.Follow}
     */
    clone(): cc.Follow

    /**
     * initializes the action with a set boundary.
     *
     * @param {cc.Node} followedNode
     * @param {cc.Rect} rect
     *
     * @returns {Boolean}
     */
    initWithTarget(followedNode: cc.Node, rect: cc.Rect): boolean

    /**
     * Get whether camera should be limited to certain area.
     *
     * @returns {Boolean}
     */
    isBoundarySet(): boolean

    /**
     * Return true if the action has finished.
     *
     * @returns {Boolean}
     */
    isDone(): boolean

    /**
     * alter behavior - turn on/off boundary.
     *
     * @param {Boolean} value
     */
    setBoudarySet(value: boolean): any

    /**
     * called every frame with it's delta time.
     * DON'T override unless you know what you are doing.
     *
     * @param {Number} dt
     */
    step(dt: number): any

    /**
     * Stop the action.
     */
    stop(): any
  }
}

declare namespace cc {
  namespace Follow {

    /**
     * Please use cc.follow instead.
     * creates the action with a set boundary.
     * creates the action with no boundary set.
     */
    let create: cc.Follow | null


  }
}

declare namespace cc {
  interface Speed  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {cc.ActionInterval} action
     * @param {Number} speed
     */
    constructor(action: cc.ActionInterval, speed: number)


    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.Speed}
     */
    clone(): cc.Speed

    /**
     * Get inner Action.
     *
     * @returns {cc.ActionInterval}
     */
    getInnerAction(): cc.ActionInterval

    /**
     * Gets the current running speed.
     * Will get a percentage number, compared to the original speed.
     *
     * @returns {Number}
     */
    getSpeed(): number

    /**
     * initializes the action.
     *
     * @param {cc.ActionInterval} action
     * @param {Number} speed
     *
     * @returns {Boolean}
     */
    initWithAction(action: cc.ActionInterval, speed: number): boolean

    /**
     * return true if the action has finished.
     *
     * @returns {Boolean}
     */
    isDone(): boolean

    /**
     * returns a reversed action.
     * For example:
     * - The action will be x coordinates of 0 move to 100.
     * - The reversed action will be x of 100 move to 0.
     * - Will be rewritten
     *
     * @returns {cc.Speed}
     */
    reverse(): cc.Speed

    /**
     * Set inner Action.
     *
     * @param {cc.ActionInterval} action
     */
    setInnerAction(action: cc.ActionInterval): any

    /**
     * alter the speed of the inner function in runtime.
     *
     * @param {Number} speed
     */
    setSpeed(speed: number): any

    /**
     * called before the action start. It will also set the target.
     *
     * @param {cc.Node} target
     */
    startWithTarget(target: cc.Node): any

    /**
     * called every frame with it's delta time.
     * DON'T override unless you know what you are doing.
     *
     * @param {Number} dt
     */
    step(dt: number): any

    /**
     * Stop the action.
     */
    stop(): any
  }
}

declare namespace cc {
  namespace Speed {

    /**
     * Please use cc.speed instead.
     * creates the action.
     */
    let create: cc.Speed


  }
}

declare namespace cc {
  interface ActionManager  {

    /**
     * cc.ActionManager is a class that can manage actions.
     * Normally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,
     * which uses this class's singleton object.
     * But there are some cases where you might need to use this class.
     * Examples:
     * - When you want to run an action where the target is different from a CCNode.
     * - When you want to pause / resume the actions
     */
    constructor()


    /**
     * Adds an action with a target.
     * If the target is already present, then the action will be added to the existing target.
     * If the target is not present, a new instance of this target will be created either paused or not, and the action will be added to the newly created target.
     * When the target is paused, the queued actions won't be 'ticked'.
     *
     * @param {cc.Action} action
     * @param {cc.Node} target
     * @param {Boolean} paused
     */
    addAction(action: cc.Action, target: cc.Node, paused: boolean): any

    /**
     * Gets an action given its tag an a target
     *
     * @param {Number} tag
     * @param {object} target
     *
     * @returns {cc.Action|Null} return the Action with the given tag on success
     */
    getActionByTag(tag: number, target: object): cc.Action | null

    /**
     * Returns the numbers of actions that are running in a certain target.
     * Composable actions are counted as 1 action.
     * Example:
     * - If you are running 1 Sequence of 7 actions, it will return 1.
     * - If you are running 7 Sequences of 2 actions, it will return 7.
     *
     * @param {object} target
     *
     * @returns {Number}
     */
    numberOfRunningActionsInTarget(target: object): number

    /**
     * Pauses all running actions, returning a list of targets whose actions were paused.
     *
     * @returns {Array} a list of targets whose actions were paused.
     */
    pauseAllRunningActions(): any[]

    /**
     * Pauses the target: all running actions and newly added actions will be paused.
     *
     * @param {object} target
     */
    pauseTarget(target: object): any

    /**
     * purges the shared action manager. It releases the retained instance.
     * because it uses this, so it can not be static
     */
    purgeSharedManager(): any

    /**
     * Removes an action given an action reference.
     *
     * @param {cc.Action} action
     */
    removeAction(action: cc.Action): any

    /**
     * Removes an action given its tag and the target
     *
     * @param {Number} tag
     * @param {object} target
     */
    removeActionByTag(tag: number, target: object): any

    /**
     * Removes all actions from all the targets.
     */
    removeAllActions(): any

    /**
     * Removes all actions from a certain target.
     * All the actions that belongs to the target will be removed.
     *
     * @param {object} target
     * @param {boolean} forceDelete
     */
    removeAllActionsFromTarget(target: object, forceDelete: boolean): any

    /**
     * Resumes the target. All queued actions will be resumed.
     *
     * @param {object} target
     */
    resumeTarget(target: object): any

    /**
     * Resume a set of targets (convenience function to reverse a pauseAllRunningActions call)
     *
     * @param {Array} targetsToResume
     */
    resumeTargets(targetsToResume: any[]): any

    /**
     *
     *
     * @param {Number} dt delta time in seconds
     */
    update(dt: number): any
  }
}

declare namespace cc {
  interface ActionTweenDelegate  {

    /**
     *
     */
    constructor()


  }
}

declare namespace cc {
  namespace ActionTweenDelegate {



    /**
     * Update Tween Action.
     *
     * @param {} value
     * @param {} key
     */
    function updateTweenAction(value: any, key: any): any
  }
}

declare namespace cc {
  interface Animation  {

    /**
     * A cc.Animation object is used to perform animations on the cc.Sprite objects.
     * The cc.Animation object contains cc.SpriteFrame objects, and a possible delay between the frames.
     * You can animate a cc.Animation object by using the cc.Animate action.
     *
     * @param {Array} frames
     * @param {Number} delay
     * @param {Number} loops
     */
    constructor(frames: any[], delay: number, loops: number)


    /**
     * Adds a frame to a cc.Animation, the frame will be added with one "delay unit".
     *
     * @param {cc.SpriteFrame} frame
     */
    addSpriteFrame(frame: cc.SpriteFrame): any

    /**
     * Adds a frame with an image filename. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit".
     *
     * @param {String} fileName
     */
    addSpriteFrameWithFile(fileName: string): any

    /**
     * Adds a frame with a texture and a rect. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit".
     *
     * @param {cc.Texture2D} texture
     * @param {cc.Rect} rect
     */
    addSpriteFrameWithTexture(texture: cc.Texture2D, rect: cc.Rect): any

    /**
     * Clone the current animation
     *
     * @returns {cc.Animation}
     */
    clone(): cc.Animation

    /**
     * Clone the current animation
     *
     * @param {} pZone
     *
     * @returns {cc.Animation}
     */
    copy(pZone: any): cc.Animation

    /**
     * Clone the current animation
     *
     * @param {} pZone
     *
     * @returns {cc.Animation}
     */
    copyWithZone(pZone: any): cc.Animation

    /**
     * Returns delay in seconds of the "delay unit"
     *
     * @returns {Number}
     */
    getDelayPerUnit(): number

    /**
     * Returns duration in seconds of the whole animation. It is the result of totalDelayUnits * delayPerUnit
     *
     * @returns {Number}
     */
    getDuration(): number

    /**
     * Returns the array of animation frames
     *
     * @returns {Array}
     */
    getFrames(): any[]

    /**
     * Returns how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ...
     *
     * @returns {Number}
     */
    getLoops(): number

    /**
     * Returns whether or not it shall restore the original frame when the animation finishes
     *
     * @returns {Boolean}
     */
    getRestoreOriginalFrame(): boolean

    /**
     * Returns total delay units of the cc.Animation.
     *
     * @returns {Number}
     */
    getTotalDelayUnits(): number

    /**
     * Initializes a cc.Animation with cc.AnimationFrame, do not call this method yourself, please pass parameters to constructor to initialize.
     *
     * @param {Array} arrayOfAnimationFrames
     * @param {Number} delayPerUnit
     * @param {Number} loops
     */
    initWithAnimationFrames(arrayOfAnimationFrames: any[], delayPerUnit: number, loops: number): any

    /**
     * Initializes a cc.Animation with frames and a delay between frames, do not call this method yourself, please pass parameters to constructor to initialize.
     *
     * @param {Array} frames
     * @param {Number} delay
     * @param {Number} loops
     */
    initWithSpriteFrames(frames: any[], delay: number, loops: number): any

    /**
     * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
     * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
     * This is a hack, and should be removed once JSB fixes the retain/release bug
     * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
     * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
     * when you want to use it later, a "Invalid Native Object" error will be raised.
     * The retain function can increase a reference count for the native object to avoid it being released,
     * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
     * retain and release function call should be paired in developer's game code.
     */
    release(): any

    /**
     * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
     * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
     * This is a hack, and should be removed once JSB fixes the retain/release bug
     * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
     * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
     * when you want to use it later, a "Invalid Native Object" error will be raised.
     * The retain function can increase a reference count for the native object to avoid it being released,
     * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
     * retain and release function call should be paired in developer's game code.
     */
    retain(): any

    /**
     * Sets delay in seconds of the "delay unit"
     *
     * @param {Number} delayPerUnit
     */
    setDelayPerUnit(delayPerUnit: number): any

    /**
     * Sets array of animation frames
     *
     * @param {Array} frames
     */
    setFrames(frames: any[]): any

    /**
     * Sets how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ...
     *
     * @param {Number} value
     */
    setLoops(value: number): any

    /**
     * Sets whether or not it shall restore the original frame when the animation finishes
     *
     * @param {Boolean} restOrigFrame
     */
    setRestoreOriginalFrame(restOrigFrame: boolean): any
  }
}

declare namespace cc {
  namespace Animation {

    /**
     *
     */
    let createWithAnimationFrames: any


    /**
     * Creates an animation.
     *
     * @param {Array} frames
     * @param {Number} delay
     * @param {Number} loops
     *
     * @returns {cc.Animation} cc.Animation
     */
    function create(frames: any[], delay: number, loops: number): cc.Animation
  }
}

declare namespace cc {
  interface AnimationFrame  {

    /**
     * cc.AnimationFrame
     * A frame of the animation. It contains information like:
     * - sprite frame name
     * - # of delay units.
     * - offset
     *
     * @param {} spriteFrame
     * @param {} delayUnits
     * @param {} userInfo
     */
    constructor(spriteFrame: any, delayUnits: any, userInfo: any)


    /**
     * Create a new animation frame and copy all contents into it
     *
     * @returns {AnimationFrame}
     */
    clone(): AnimationFrame

    /**
     * Create a new animation frame and copy all contents into it
     *
     * @param {} pZone
     *
     * @returns {AnimationFrame}
     */
    copy(pZone: any): AnimationFrame

    /**
     * Create a new animation frame and copy all contents into it
     *
     * @param {} pZone
     *
     * @returns {AnimationFrame}
     */
    copyWithZone(pZone: any): AnimationFrame

    /**
     * Returns how many units of time the frame takes getter
     *
     * @returns {Number}
     */
    getDelayUnits(): number

    /**
     * Returns sprite frame to be used
     *
     * @returns {cc.SpriteFrame}
     */
    getSpriteFrame(): cc.SpriteFrame

    /**
     * Returns the user custom information
     *
     * @returns {object}
     */
    getUserInfo(): object

    /**
     * initializes the animation frame with a spriteframe, number of delay units and a notification user info
     *
     * @param {cc.SpriteFrame} spriteFrame
     * @param {Number} delayUnits
     * @param {object} userInfo
     */
    initWithSpriteFrame(spriteFrame: cc.SpriteFrame, delayUnits: number, userInfo: object): any

    /**
     * Sets how many units of time the frame takes setter
     *
     * @param {} delayUnits
     */
    setDelayUnits(delayUnits: any): any

    /**
     * Sets sprite frame to be used
     *
     * @param {cc.SpriteFrame} spriteFrame
     */
    setSpriteFrame(spriteFrame: cc.SpriteFrame): any

    /**
     * Sets the user custom information
     *
     * @param {object} userInfo
     */
    setUserInfo(userInfo: object): any
  }
}

declare namespace cc {
  namespace AnimationFrame {



    /**
     * Creates an animation frame.
     *
     * @param {cc.SpriteFrame} spriteFrame
     * @param {Number} delayUnits
     * @param {object} userInfo
     */
    function create(spriteFrame: cc.SpriteFrame, delayUnits: number, userInfo: object): any
  }
}

declare namespace cc {
  interface Component  {

    /**
     * Construction of cc.Component
     */
    constructor()


    /**
     * Returns the name of cc.Component.
     *
     * @returns {string}
     */
    getName(): string

    /**
     * Returns the owner of cc.Component.
     *
     * @returns {*}
     */
    getOwner(): any

    /**
     * Initializes a cc.Component.
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Returns component whether is enabled.
     *
     * @returns {boolean}
     */
    isEnabled(): boolean

    /**
     * The callback when a component enter stage.
     */
    onEnter(): any

    /**
     * The callback when a component exit stage.
     */
    onExit(): any

    /**
     * Serialize a component object.
     *
     * @param {} reader
     */
    serialize(reader: any): any

    /**
     * Sets component whether is enabled.
     *
     * @param {} enable
     */
    setEnabled(enable: any): any

    /**
     * Sets the name to cc.Component.
     *
     * @param {String} name
     */
    setName(name: string): any

    /**
     * Sets the owner to cc.Component.
     *
     * @param {} owner
     */
    setOwner(owner: any): any

    /**
     * The callback per every frame if it schedules update.
     *
     * @param {} delta
     */
    update(delta: any): any
  }
}

declare namespace cc {
  namespace Component {



    /**
     * Allocates and initializes a component.
     *
     * @returns {cc.Component}
     */
    function create(): cc.Component
  }
}

declare namespace cc {
  interface ComponentContainer  {

    /**
     * Construction of cc.ComponentContainer
     *
     * @param {} node
     */
    constructor(node: any)


    /**
     * Adds a component to container
     *
     * @param {cc.Component} component
     *
     * @returns {boolean}
     */
    add(component: cc.Component): boolean

    /**
     * Gets component by name.
     *
     * @param {} name
     *
     * @returns {*}
     */
    getComponent(name: any): any

    /**
     * Returns the container whether is empty.
     *
     * @returns {boolean}
     */
    isEmpty(): boolean

    /**
     * Removes component from container by name or component object.
     *
     * @param {String|cc.Component} name component name or component object.
     *
     * @returns {boolean}
     */
    remove(name: string | cc.Component): boolean

    /**
     * Removes all components of container.
     */
    removeAll(): any

    /**
     * Visit callback by director. it calls every frame.
     *
     * @param {Number} delta
     */
    visit(delta: number): any
  }
}

declare namespace cc {
  interface ContainerStrategy  {

    /**
     * cc.ContainerStrategy class is the root strategy class of container's scale strategy,
     * it controls the behavior of how to scale the cc.container and cc._canvas object
     */
    constructor()


    /**
     * Function to apply this strategy
     *
     * @param {cc.view} view
     * @param {cc.Size} designedResolution
     */
    apply(view: cc.view, designedResolution: cc.Size): any

    /**
     * Manipulation after applying the strategy
     *
     * @param {cc.view} view The target view
     */
    postApply(view: cc.view): any

    /**
     * Manipulation before appling the strategy
     *
     * @param {cc.view} The target view
     */
    preApply(The: cc.view): any
  }
}

declare namespace cc {
  interface ContentStrategy  {

    /**
     * cc.ContentStrategy class is the root strategy class of content's scale strategy,
     * it controls the behavior of how to scale the scene and setup the viewport for the game
     */
    constructor()


    /**
     * Function to apply this strategy
     * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
     * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
     *
     * @param {cc.view} view
     * @param {cc.Size} designedResolution
     *
     * @returns {object} scaleAndViewportRect
     */
    apply(view: cc.view, designedResolution: cc.Size): object

    /**
     * Manipulation after applying the strategy
     *
     * @param {cc.view} view The target view
     */
    postApply(view: cc.view): any

    /**
     * Manipulation before applying the strategy
     *
     * @param {cc.view} view The target view
     */
    preApply(view: cc.view): any
  }
}

declare namespace cc {
  interface DrawingPrimitiveCanvas  {

    /**
     * Constructor of cc.DrawingPrimitiveCanvas
     *
     * @param {cc.CanvasContextWrapper} renderContext
     */
    constructor(renderContext: cc.CanvasContextWrapper)


    /**
     * draw a cardinal spline path
     *
     * @param {Array} config
     * @param {Number} tension
     * @param {Number} segments
     */
    drawCardinalSpline(config: any[], tension: number, segments: number): any

    /**
     * draw a CatmullRom curve
     *
     * @param {Array} points
     * @param {Number} segments
     */
    drawCatmullRom(points: any[], segments: number): any

    /**
     * draws a circle given the center, radius and number of segments.
     *
     * @param {cc.Point} center center of circle
     * @param {Number} radius
     * @param {Number} angle angle in radians
     * @param {Number} segments
     * @param {Boolean} drawLineToCenter
     */
    drawCircle(center: cc.Point, radius: number, angle: number, segments: number, drawLineToCenter: boolean): any

    /**
     * draw a color ball
     *
     * @param {cc.CanvasContextWrapper} ctx canvas context
     * @param {Number} radius
     * @param {cc.Color} color
     */
    drawColorBall(ctx: cc.CanvasContextWrapper, radius: number, color: cc.Color): any

    /**
     * draws a cubic bezier path
     *
     * @param {cc.Point} origin
     * @param {cc.Point} control1
     * @param {cc.Point} control2
     * @param {cc.Point} destination
     * @param {Number} segments
     */
    drawCubicBezier(origin: cc.Point, control1: cc.Point, control2: cc.Point, destination: cc.Point, segments: number): any

    /**
     * draw an image
     *
     * @param {HTMLImageElement|HTMLCanvasElement} image
     * @param {cc.Point} sourcePoint
     * @param {cc.Size} sourceSize
     * @param {cc.Point} destPoint
     * @param {cc.Size} destSize
     */
    drawImage(image: HTMLImageElement | HTMLCanvasElement, sourcePoint: cc.Point, sourceSize: cc.Size, destPoint: cc.Point, destSize: cc.Size): any

    /**
     * draws a line given the origin and destination point measured in points
     *
     * @param {cc.Point} origin
     * @param {cc.Point} destination
     */
    drawLine(origin: cc.Point, destination: cc.Point): any

    /**
     * draws a point given x and y coordinate measured in points
     *
     * @param {cc.Point} point
     * @param {Number} size
     */
    drawPoint(point: cc.Point, size: number): any

    /**
     * draws an array of points.
     *
     * @param {Array} points point of array
     * @param {Number} numberOfPoints
     * @param {Number} size
     */
    drawPoints(points: any[], numberOfPoints: number, size: number): any

    /**
     * draws a polygon given a pointer to cc.Point coordinates and the number of vertices measured in points.
     *
     * @param {Array} vertices a pointer to cc.Point coordinates
     * @param {Number} numOfVertices the number of vertices measured in points
     * @param {Boolean} closePolygon The polygon can be closed or open
     * @param {Boolean} fill The polygon can be closed or open and optionally filled with current color
     */
    drawPoly(vertices: any[], numOfVertices: number, closePolygon: boolean, fill: boolean): any

    /**
     * draws a quad bezier path
     *
     * @param {cc.Point} origin
     * @param {cc.Point} control
     * @param {cc.Point} destination
     * @param {Number} segments
     */
    drawQuadBezier(origin: cc.Point, control: cc.Point, destination: cc.Point, segments: number): any

    /**
     * draws a rectangle given the origin and destination point measured in points.
     *
     * @param {cc.Point} origin
     * @param {cc.Point} destination
     */
    drawRect(origin: cc.Point, destination: cc.Point): any

    /**
     * draws a solid polygon given a pointer to CGPoint coordinates, the number of vertices measured in points, and a color.
     *
     * @param {Array} polygons
     * @param {Number} numberOfPoints
     * @param {cc.Color} color
     */
    drawSolidPoly(polygons: any[], numberOfPoints: number, color: cc.Color): any

    /**
     * draws a solid rectangle given the origin and destination point measured in points.
     *
     * @param {cc.Point} origin
     * @param {cc.Point} destination
     * @param {cc.Color} color
     */
    drawSolidRect(origin: cc.Point, destination: cc.Point, color: cc.Color): any

    /**
     * draw a star
     *
     * @param {cc.CanvasContextWrapper} ctx canvas context
     * @param {Number} radius
     * @param {cc.Color} color
     */
    drawStar(ctx: cc.CanvasContextWrapper, radius: number, color: cc.Color): any

    /**
     * fill text
     *
     * @param {String} strText
     * @param {Number} x
     * @param {Number} y
     */
    fillText(strText: string, x: number, y: number): any

    /**
     * set the drawing color with 4 unsigned bytes
     *
     * @param {Number} r red value (0 to 255)
     * @param {Number} g green value (0 to 255)
     * @param {Number} b blue value (0 to 255)
     * @param {Number} a Alpha value (0 to 255)
     */
    setDrawColor(r: number, g: number, b: number, a: number): any

    /**
     * set the line width. Default 1.
     *
     * @param {Number} width
     */
    setLineWidth(width: number): any

    /**
     * set the point size in points. Default 1.
     *
     * @param {Number} pointSize
     */
    setPointSize(pointSize: number): any
  }
}

declare namespace cc {
  interface EditBoxDelegate  {

    /**
     *
     */
    constructor()


  }
}

declare namespace cc {
  interface Event  {

    /**
     * Base class of all kinds of events.
     */
    constructor()


    /**
     * Gets current target of the event
     * note: It only be available when the event listener is associated with node.
     * It returns 0 when the listener is associated with fixed priority.
     *
     * @returns {cc.Node} The target with which the event associates.
     */
    getCurrentTarget(): cc.Node

    /**
     * Gets the event type
     *
     * @returns {Number}
     */
    getType(): number

    /**
     * Checks whether the event has been stopped
     *
     * @returns {boolean}
     */
    isStopped(): boolean

    /**
     * Stops propagation for current event
     */
    stopPropagation(): any
  }
}

declare namespace cc {
  namespace Event {


    /**
     * The type code of Acceleration event.
     */
    enum ACCELERATION { }

    /**
     * The type code of Custom event.
     */
    enum CUSTOM { }

    /**
     * The type code of UI focus event.
     */
    enum FOCUS { }

    /**
     * The type code of Keyboard event.
     */
    enum KEYBOARD { }

    /**
     * The type code of Mouse event.
     */
    enum MOUSE { }

    /**
     * The type code of Touch event.
     */
    enum TOUCH { }

  }
}

declare namespace cc {
  interface EventAcceleration  {

    /**
     * The acceleration event
     */
    constructor()


  }
}

declare namespace cc {
  interface EventCustom  {

    /**
     * The Custom event
     */
    constructor()


    /**
     * Gets event name
     *
     * @returns {String}
     */
    getEventName(): string

    /**
     * Gets user data
     *
     * @returns {*}
     */
    getUserData(): any

    /**
     * Sets user data
     *
     * @param {*} data
     */
    setUserData(data: any): any
  }
}

declare namespace cc {
  interface EventFocus  {

    /**
     * Focus change event for UI widget
     */
    constructor()


  }
}

declare namespace cc {
  interface EventKeyboard  {

    /**
     * The keyboard event
     */
    constructor()


  }
}

declare namespace cc {
  interface EventMouse  {

    /**
     * The mouse event
     */
    constructor()


    /**
     * Returns mouse button
     *
     * @returns {number}
     */
    getButton(): number

    /**
     * Returns the delta distance from the previous location to current location
     *
     * @returns {cc.Point}
     */
    getDelta(): cc.Point

    /**
     * Returns the X axis delta distance from the previous location to current location
     *
     * @returns {Number}
     */
    getDeltaX(): number

    /**
     * Returns the Y axis delta distance from the previous location to current location
     *
     * @returns {Number}
     */
    getDeltaY(): number

    /**
     * Returns cursor location
     *
     * @returns {cc.Point} location
     */
    getLocation(): cc.Point

    /**
     * Returns the current cursor location in screen coordinates
     *
     * @returns {cc.Point}
     */
    getLocationInView(): cc.Point

    /**
     * Returns location X axis data
     *
     * @returns {number}
     */
    getLocationX(): number

    /**
     * Returns location Y axis data
     *
     * @returns {number}
     */
    getLocationY(): number

    /**
     * Returns the x axis scroll value
     *
     * @returns {number}
     */
    getScrollX(): number

    /**
     * Returns the y axis scroll value
     *
     * @returns {number}
     */
    getScrollY(): number

    /**
     * Sets mouse button
     *
     * @param {number} button
     */
    setButton(button: number): any

    /**
     * Sets cursor location
     *
     * @param {number} x
     * @param {number} y
     */
    setLocation(x: number, y: number): any

    /**
     * Sets scroll data
     *
     * @param {number} scrollX
     * @param {number} scrollY
     */
    setScrollData(scrollX: number, scrollY: number): any
  }
}

declare namespace cc {
  namespace EventMouse {


    /**
     * The tag of Mouse button 4
     */
    enum BUTTON_4 { }

    /**
     * The tag of Mouse button 5
     */
    enum BUTTON_5 { }

    /**
     * The tag of Mouse button 6
     */
    enum BUTTON_6 { }

    /**
     * The tag of Mouse button 7
     */
    enum BUTTON_7 { }

    /**
     * The tag of Mouse button 8
     */
    enum BUTTON_8 { }

    /**
     * The tag of Mouse left button
     */
    enum BUTTON_LEFT { }

    /**
     * The tag of Mouse middle button (The right button number is 1 on browser)
     */
    enum BUTTON_MIDDLE { }

    /**
     * The tag of Mouse right button (The right button number is 2 on browser)
     */
    enum BUTTON_RIGHT { }

    /**
     * The event type code of mouse down event.
     */
    enum DOWN { }

    /**
     * The event type code of mouse move event.
     */
    enum MOVE { }

    /**
     * The none event code of mouse event.
     */
    enum NONE { }

    /**
     * The event type code of mouse scroll event.
     */
    enum SCROLL { }

    /**
     * The event type code of mouse up event.
     */
    enum UP { }

  }
}

declare namespace cc {
  interface EventTouch  {

    /**
     *
     *
     * @param {} arr
     */
    constructor(arr: any)


    /**
     * Returns event code
     *
     * @returns {number}
     */
    getEventCode(): number

    /**
     * Returns touches of event
     *
     * @returns {Array}
     */
    getTouches(): any[]
  }
}

declare namespace cc {
  namespace EventTouch {


    /**
     * The maximum touch numbers
     */
    enum MAX_TOUCHES { }

  }
}

declare namespace cc {
  interface EventListener  {

    /**
     * Initializes event with type and callback function
     *
     * @param {number} type
     * @param {string} listenerID
     * @param {function} callback
     */
    constructor(type: number, listenerID: string, callback: Function)


    /**
     * Checks whether the listener is available.
     *
     * @returns {boolean}
     */
    checkAvailable(): boolean

    /**
     * Clones the listener, its subclasses have to override this method.
     *
     * @returns {cc.EventListener}
     */
    clone(): cc.EventListener

    /**
     * Checks whether the listener is enabled
     *
     * @returns {boolean}
     */
    isEnabled(): boolean

    /**
     * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
     * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
     * This is a hack, and should be removed once JSB fixes the retain/release bug
     * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.
     * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
     * when you want to use it later, a "Invalid Native Object" error will be raised.
     * The retain function can increase a reference count for the native object to avoid it being released,
     * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
     * retain and release function call should be paired in developer's game code.
     */
    release(): any

    /**
     * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
     * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
     * This is a hack, and should be removed once JSB fixes the retain/release bug
     * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.
     * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
     * when you want to use it later, a "Invalid Native Object" error will be raised.
     * The retain function can increase a reference count for the native object to avoid it being released,
     * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
     * retain and release function call should be paired in developer's game code.
     */
    retain(): any

    /**
     * Enables or disables the listener
     *
     * @param {boolean} enabled
     */
    setEnabled(enabled: boolean): any
  }
}

declare namespace cc {
  namespace EventListener {


    /**
     * The type code of acceleration event listener.
     */
    enum ACCELERATION { }

    /**
     * The type code of custom event listener.
     */
    enum CUSTOM { }

    /**
     * The type code of Focus change event listener.
     */
    enum FOCUS { }

    /**
     * The type code of keyboard event listener.
     */
    enum KEYBOARD { }

    /**
     * The type code of mouse event listener.
     */
    enum MOUSE { }

    /**
     * The type code of all at once touch event listener.
     */
    enum TOUCH_ALL_AT_ONCE { }

    /**
     * The type code of one by one touch event listener.
     */
    enum TOUCH_ONE_BY_ONE { }

    /**
     * The type code of unknown event listener.
     */
    enum UNKNOWN { }

    /**
     * Create a EventListener object by json object
     *
     * @param {object} argObj a json object
     *
     * @returns {cc.EventListener} todo: It should be the direct use new
     */
    function create(argObj: object): cc.EventListener
  }
}

declare namespace cc {
  interface GLProgram  {

    /**
     * Create a cc.GLProgram object
     *
     * @param {String} vShaderFileName
     * @param {String} fShaderFileName
     * @param {} glContext
     *
     * @returns {cc.GLProgram}
     */
    constructor(vShaderFileName: string, fShaderFileName: string, glContext: any)


    /**
     * It will add a new attribute to the shader
     *
     * @param {String} attributeName
     * @param {Number} index
     */
    addAttribute(attributeName: string, index: number): any

    /**
     * destroy program
     */
    destroyProgram(): any

    /**
     * returns the fragmentShader error log
     *
     * @returns {String}
     */
    fragmentShaderLog(): string

    /**
     * returns the fragmentShader error log
     *
     * @returns {String}
     */
    getFragmentShaderLog(): string

    /**
     * get WebGLProgram object
     *
     * @returns {WebGLProgram}
     */
    getProgram(): WebGLProgram

    /**
     * returns the program error log
     *
     * @returns {String}
     */
    getProgramLog(): string

    /**
     * calls retrieves the named uniform location for this shader program.
     *
     * @param {String} name
     *
     * @returns {Number}
     */
    getUniformLocationForName(name: string): number

    /**
     * get uniform MVP matrix
     *
     * @returns {WebGLUniformLocation}
     */
    getUniformMVPMatrix(): WebGLUniformLocation

    /**
     * get uniform sampler
     *
     * @returns {WebGLUniformLocation}
     */
    getUniformSampler(): WebGLUniformLocation

    /**
     * returns the vertexShader error log
     *
     * @returns {String}
     */
    getVertexShaderLog(): string

    /**
     * Initializes the CCGLProgram with a vertex and fragment with contents of filenames
     *
     * @param {String} vShaderFilename
     * @param {String} fShaderFileName
     *
     * @returns {Boolean}
     */
    init(vShaderFilename: string, fShaderFileName: string): boolean

    /**
     * Initializes the cc.GLProgram with a vertex and fragment with string
     *
     * @param {String} vertShaderStr
     * @param {String} fragShaderStr
     *
     * @returns {Boolean}
     */
    initWithString(vertShaderStr: string, fragShaderStr: string): boolean

    /**
     * Initializes the cc.GLProgram with a vertex and fragment with string
     *
     * @param {String} vertShaderStr
     * @param {String} fragShaderStr
     *
     * @returns {Boolean}
     */
    initWithVertexShaderByteArray(vertShaderStr: string, fragShaderStr: string): boolean

    /**
     * Initializes the CCGLProgram with a vertex and fragment with contents of filenames
     *
     * @param {String} vShaderFilename
     * @param {String} fShaderFileName
     *
     * @returns {Boolean}
     */
    initWithVertexShaderFilename(vShaderFilename: string, fShaderFileName: string): boolean

    /**
     * links the glProgram
     *
     * @returns {Boolean}
     */
    link(): boolean

    /**
     * returns the program error log
     *
     * @returns {String}
     */
    programLog(): string

    /**
     * reload all shaders, this function is designed for android
     * when opengl context lost, so don't call it.
     */
    reset(): any

    /**
     * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
     * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
     * This is a hack, and should be removed once JSB fixes the retain/release bug
     */
    retain(): any

    /**
     * will update the MVP matrix on the MVP uniform if it is different than the previous call for this same shader program.
     */
    setUniformForModelViewProjectionMatrix(): any

    /**
     * calls glUniform1i only if the values are different than the previous call for this same shader program.
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Number} i1
     */
    setUniformLocationI32(location: WebGLUniformLocation | string, i1: number): any

    /**
     * calls glUniform1f only if the values are different than the previous call for this same shader program.
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Number} f1
     */
    setUniformLocationWith1f(location: WebGLUniformLocation | string, f1: number): any

    /**
     * calls glUniform1i only if the values are different than the previous call for this same shader program.
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Number} i1
     */
    setUniformLocationWith1i(location: WebGLUniformLocation | string, i1: number): any

    /**
     * calls glUniform2f only if the values are different than the previous call for this same shader program.
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Number} f1
     * @param {Number} f2
     */
    setUniformLocationWith2f(location: WebGLUniformLocation | string, f1: number, f2: number): any

    /**
     * calls glUniform2fv
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Float32Array} floatArray
     */
    setUniformLocationWith2fv(location: WebGLUniformLocation | string, floatArray: Float32Array): any

    /**
     * calls glUniform2i only if the values are different than the previous call for this same shader program.
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Number} i1
     * @param {Number} i2
     */
    setUniformLocationWith2i(location: WebGLUniformLocation | string, i1: number, i2: number): any

    /**
     * calls glUniform2iv
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Int32Array} intArray
     * @param {Number} numberOfArrays
     */
    setUniformLocationWith2iv(location: WebGLUniformLocation | string, intArray: Int32Array, numberOfArrays: number): any

    /**
     * calls glUniform3f only if the values are different than the previous call for this same shader program.
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Number} f1
     * @param {Number} f2
     * @param {Number} f3
     */
    setUniformLocationWith3f(location: WebGLUniformLocation | string, f1: number, f2: number, f3: number): any

    /**
     * calls glUniform3fv
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Float32Array} floatArray
     */
    setUniformLocationWith3fv(location: WebGLUniformLocation | string, floatArray: Float32Array): any

    /**
     * calls glUniform3i only if the values are different than the previous call for this same shader program.
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Number} i1
     * @param {Number} i2
     * @param {Number} i3
     */
    setUniformLocationWith3i(location: WebGLUniformLocation | string, i1: number, i2: number, i3: number): any

    /**
     * calls glUniform3iv
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Int32Array} intArray
     */
    setUniformLocationWith3iv(location: WebGLUniformLocation | string, intArray: Int32Array): any

    /**
     * calls glUniform4f only if the values are different than the previous call for this same shader program.
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Number} f1
     * @param {Number} f2
     * @param {Number} f3
     * @param {Number} f4
     */
    setUniformLocationWith4f(location: WebGLUniformLocation | string, f1: number, f2: number, f3: number, f4: number): any

    /**
     * calls glUniform4fv
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Float32Array} floatArray
     */
    setUniformLocationWith4fv(location: WebGLUniformLocation | string, floatArray: Float32Array): any

    /**
     * calls glUniform4i only if the values are different than the previous call for this same shader program.
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Number} i1
     * @param {Number} i2
     * @param {Number} i3
     * @param {Number} i4
     */
    setUniformLocationWith4i(location: WebGLUniformLocation | string, i1: number, i2: number, i3: number, i4: number): any

    /**
     * calls glUniform4iv
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Int32Array} intArray
     */
    setUniformLocationWith4iv(location: WebGLUniformLocation | string, intArray: Int32Array): any

    /**
     * calls glUniformMatrix4fv
     *
     * @param {WebGLUniformLocation|String} location
     * @param {Float32Array} matrixArray
     */
    setUniformLocationWithMatrix4fv(location: WebGLUniformLocation | string, matrixArray: Float32Array): any

    /**
     * will update the builtin uniforms if they are different than the previous call for this same shader program.
     */
    setUniformsForBuiltins(): any

    /**
     * It will create 4 uniforms:
     * cc.UNIFORM_PMATRIX
     * cc.UNIFORM_MVMATRIX
     * cc.UNIFORM_MVPMATRIX
     * cc.UNIFORM_SAMPLER
     */
    updateUniforms(): any

    /**
     * it will call glUseProgram()
     */
    use(): any

    /**
     * returns the vertexShader error log
     *
     * @returns {String}
     */
    vertexShaderLog(): string
  }
}

declare namespace cc {
  namespace GLProgram {



    /**
     * Create a cc.GLProgram object
     *
     * @param {String} vShaderFileName
     * @param {String} fShaderFileName
     *
     * @returns {cc.GLProgram}
     */
    function create(vShaderFileName: string, fShaderFileName: string): cc.GLProgram
  }
}

declare namespace cc {
  interface Grabber  {

    /**
     * FBO class that grabs the the contents of the screen
     */
    constructor()


  }
}

declare namespace cc {
  interface GridBase  {

    /**
     * create one cc.GridBase Object
     * Constructor of cc.GridBase
     *
     * @param {cc.Size} gridSize
     * @param {cc.Texture2D} texture
     * @param {Boolean} flipped
     * @param {cc.Rect} rect
     */
    constructor(gridSize: cc.Size, texture: cc.Texture2D, flipped: boolean, rect: cc.Rect)


    /**
     * get rect of the grid
     *
     * @returns {cc.Rect} rect
     */
    getGridRect(): cc.Rect

    /**
     * get size of the grid
     *
     * @returns {cc.Size}
     */
    getGridSize(): cc.Size

    /**
     * get number of times that the grid will be reused
     *
     * @returns {Number}
     */
    getReuseGrid(): number

    /**
     * get pixels between the grids
     *
     * @returns {cc.Point}
     */
    getStep(): cc.Point

    /**
     *
     *
     * @param {cc.Size} gridSize
     * @param {cc.Texture2D} texture
     * @param {Boolean} flipped
     * @param {cc.Rect} rect
     *
     * @returns {boolean}
     */
    initWithSize(gridSize: cc.Size, texture: cc.Texture2D, flipped: boolean, rect: cc.Rect): boolean

    /**
     * whether or not the grid is active
     *
     * @returns {Boolean}
     */
    isActive(): boolean

    /**
     * get whether or not the texture is flipped
     *
     * @returns {Boolean}
     */
    isTextureFlipped(): boolean

    /**
     * whether or not the grid is active
     *
     * @param {Number} active
     */
    setActive(active: number): any

    /**
     * set rect of the grid
     *
     * @param {cc.Rect} rect
     */
    setGridRect(rect: cc.Rect): any

    /**
     * set size of the grid
     *
     * @param {cc.Size} gridSize
     */
    setGridSize(gridSize: cc.Size): any

    /**
     * set number of times that the grid will be reused
     *
     * @param {} reuseGrid
     */
    setReuseGrid(reuseGrid: any): any

    /**
     * set pixels between the grids
     *
     * @param {cc.Point} step
     */
    setStep(step: cc.Point): any

    /**
     * set whether or not the texture is flipped
     *
     * @param {Boolean} flipped
     */
    setTextureFlipped(flipped: boolean): any
  }
}

declare namespace cc {
  namespace GridBase {



    /**
     * create one cc.GridBase Object
     *
     * @param {cc.Size} gridSize
     * @param {cc.Texture2D} texture
     * @param {Boolean} flipped
     * @param {cc.Rect} rect
     *
     * @returns {cc.GridBase}
     */
    function create(gridSize: cc.Size, texture: cc.Texture2D, flipped: boolean, rect: cc.Rect): cc.GridBase
  }
}

declare namespace cc {
  interface Grid3D  {

    /**
     * create one Grid3D object
     * Constructor of cc.Grid3D
     *
     * @param {cc.Size} gridSize
     * @param {cc.Texture2D} texture
     * @param {Boolean} flipped
     * @param {cc.Rect} rect
     */
    constructor(gridSize: cc.Size, texture: cc.Texture2D, flipped: boolean, rect: cc.Rect)


    /**
     * returns the original (non-transformed) vertex at a given position
     *
     * @param {cc.Point} pos
     *
     * @returns {cc.Vertex3F}
     */
    getOriginalVertex(pos: cc.Point): cc.Vertex3F

    /**
     * returns the vertex at a given position
     *
     * @param {cc.Point} pos
     *
     * @returns {cc.Vertex3F}
     */
    getVertex(pos: cc.Point): cc.Vertex3F

    /**
     * returns the original (non-transformed) vertex at a given position
     * It will be deprecated in future, please use getOriginalVertex instead.
     *
     * @param {cc.Point} pos
     *
     * @returns {cc.Vertex3F}
     */
    originalVertex(pos: cc.Point): cc.Vertex3F

    /**
     * sets a new vertex at a given position
     *
     * @param {cc.Point} pos
     * @param {cc.Vertex3F} vertex
     */
    setVertex(pos: cc.Point, vertex: cc.Vertex3F): any

    /**
     * returns the vertex at a given position
     * It will be deprecated in future, please use getVertex instead.
     *
     * @param {cc.Point} pos
     *
     * @returns {cc.Vertex3F}
     */
    vertex(pos: cc.Point): cc.Vertex3F
  }
}

declare namespace cc {
  namespace Grid3D {



    /**
     * create one Grid3D object
     *
     * @param {cc.Size} gridSize
     * @param {cc.Texture2D} texture
     * @param {Boolean} flipped
     *
     * @returns {cc.Grid3D}
     */
    function create(gridSize: cc.Size, texture: cc.Texture2D, flipped: boolean): cc.Grid3D
  }
}

declare namespace cc {
  interface TiledGrid3D  {

    /**
     * create one TiledGrid3D object
     * Constructor of cc.TiledGrid3D
     *
     * @param {cc.Size} gridSize
     * @param {cc.Texture2D} texture
     * @param {Boolean} flipped
     * @param {} rect
     */
    constructor(gridSize: cc.Size, texture: cc.Texture2D, flipped: boolean, rect: any)


    /**
     * returns the original tile (untransformed) at the given position
     *
     * @param {cc.Point} pos
     *
     * @returns {cc.Quad3}
     */
    getOriginalTile(pos: cc.Point): cc.Quad3

    /**
     * returns the tile at the given position
     *
     * @param {cc.Point} pos
     *
     * @returns {cc.Quad3}
     */
    getTile(pos: cc.Point): cc.Quad3

    /**
     * returns the original tile (untransformed) at the given position.
     * It will be deprecated in future, please use getOriginalTile instead.
     *
     * @param {cc.Point} pos
     *
     * @returns {cc.Quad3}
     */
    originalTile(pos: cc.Point): cc.Quad3

    /**
     * sets a new tile
     *
     * @param {cc.Point} pos
     * @param {cc.Quad3} coords
     */
    setTile(pos: cc.Point, coords: cc.Quad3): any

    /**
     * returns the tile at the given position
     * It will be deprecated in future, please use getTile instead.
     *
     * @param {cc.Point} pos
     *
     * @returns {cc.Quad3}
     */
    tile(pos: cc.Point): cc.Quad3
  }
}

declare namespace cc {
  namespace TiledGrid3D {



    /**
     * create one TiledGrid3D object
     *
     * @param {cc.Size} gridSize
     * @param {cc.Texture2D} texture
     * @param {Boolean} flipped
     *
     * @returns {cc.TiledGrid3D}
     */
    function create(gridSize: cc.Size, texture: cc.Texture2D, flipped: boolean): cc.TiledGrid3D
  }
}

declare namespace cc {
  interface HashElement  {

    /**
     * Constructor
     */
    constructor()


  }
}

declare namespace cc {
  interface IMEDelegate  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * Remove delegate
     *
     * @returns {Boolean}
     */
    attachWithIME(): boolean

    /**
     * Decide the delegate instance is ready for receive ime message or not.
     * Called by CCIMEDispatcher.
     *
     * @returns {Boolean}
     */
    canAttachWithIME(): boolean

    /**
     * Decide the delegate instance can stop receive ime message or not.
     *
     * @returns {Boolean}
     */
    canDetachWithIME(): boolean

    /**
     * Called by CCIMEDispatcher when user clicked the backward key.
     */
    deleteBackward(): any

    /**
     * Detach with IME
     *
     * @returns {Boolean}
     */
    detachWithIME(): boolean

    /**
     * When the delegate detach with IME, this method call by CCIMEDispatcher.
     */
    didAttachWithIME(): any

    /**
     * When the delegate detach with IME, this method call by CCIMEDispatcher.
     */
    didDetachWithIME(): any

    /**
     * Called by CCIMEDispatcher for get text which delegate already has.
     *
     * @returns {String}
     */
    getContentText(): string

    /**
     * Called by CCIMEDispatcher when some text input from IME.
     *
     * @param {} text
     * @param {} len
     */
    insertText(text: any, len: any): any

    /**
     * Remove delegate
     */
    removeDelegate(): any
  }
}

declare namespace cc.IMEDispatcher {
  interface Impl  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * Find delegate
     *
     * @param {cc.IMEDelegate} delegate
     *
     * @returns {Number|Null}
     */
    findDelegate(delegate: cc.IMEDelegate): number | null
  }
}

declare namespace cc {
  interface Invocation  {

    /**
     * An Invocation class
     */
    constructor()


  }
}

declare namespace cc {
  interface Node  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()

    /**
     * - The CCActionManager object that is used by all actions.
     */
    actionManager: cc.ActionManager

    /**
     * - Anchor point's position on x axis
     */
    anchorX: number

    /**
     * - Anchor point's position on y axis
     */
    anchorY: number

    /**
     * - The arrival order, indicates which children is added previously
     */
    arrivalOrder: number

    /**
     * - Indicate whether node's color value affect its child nodes, default value is false
     */
    cascadeColor: boolean

    /**
     * - Indicate whether node's opacity value affect its child nodes, default value is false
     */
    cascadeOpacity: boolean

    /**
     * - <@readonly> All children nodes
     */
    children: any[]

    /**
     * - <@readonly> Number of children
     */
    childrenCount: number

    /**
     * - Color of node, default value is white: (255, 255, 255)
     */
    color: cc.Color

    /**
     * - The state of OpenGL server side
     */
    glServerState: number

    /**
     * - grid object that is used when applying effects
     */
    grid: cc.GridBase

    /**
     * - Height of node
     */
    height: number

    /**
     * - Indicate whether ignore the anchor point property for positioning
     */
    ignoreAnchor: boolean

    /**
     * - Opacity of node, default value is 255
     */
    opacity: number

    /**
     * - Indicate whether opacity affect the color value, default value is false
     */
    opacityModifyRGB: boolean

    /**
     * - Parent node
     */
    parent: cc.Node

    /**
     * - Rotation of node
     */
    rotation: number

    /**
     * - Rotation on x axis
     */
    rotationX: number

    /**
     * - Rotation on y axis
     */
    rotationY: number

    /**
     * - <@readonly> Indicate whether node is running or not
     */
    running: boolean

    /**
     * - Scale of node
     */
    scale: number

    /**
     * - Scale on x axis
     */
    scaleX: number

    /**
     * - Scale on y axis
     */
    scaleY: number

    /**
     * - cc.Scheduler used to schedule all "updates" and timers.
     */
    scheduler: cc.Scheduler

    /**
     * - The shader program currently used for this node
     */
    shaderProgram: cc.GLProgram

    /**
     * - Skew x
     */
    skewX: number

    /**
     * - Skew y
     */
    skewY: number

    /**
     * - Tag of node
     */
    tag: number

    /**
     * - Custom user data
     */
    userData: object

    /**
     * - User assigned CCObject, similar to userData, but instead of holding a void* it holds an id
     */
    userObject: object

    /**
     * - WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex
     */
    vertexZ: number

    /**
     * - Indicate whether node is visible or not
     */
    visible: boolean

    /**
     * - Width of node
     */
    width: number

    /**
     * - x axis position of node
     */
    x: number

    /**
     * - y axis position of node
     */
    y: number

    /**
     * - Z order in depth which stands for the drawing order
     */
    zIndex: number

    /**
     * "add" logic MUST only be in this methodIf the child is added to a 'running' node, then 'onEnter' and 'onEnterTransitionDidFinish' will be called immediately.
     *
     * @param {cc.Node} child A child node
     * @param {Number} localZOrder Z order for drawing priority. Please refer to setZOrder(int)
     * @param {Number|String} tag An integer or a name to identify the node easily. Please refer to setTag(int) and setName(string)
     */
    addChild(child: cc.Node, localZOrder: number, tag: number | string): any

    /**
     * Adds a component to the node's component container.
     *
     * @param {cc.Component} component
     */
    addComponent(component: cc.Component): any

    /**
     * Properties configuration function
     * All properties in attrs will be set to the node,
     * when the setter of the node is available,
     * the property will be set via setter function.
     *
     * @param {Object} attrs Properties to be set to node
     */
    attr(attrs: object): any

    /**
     * Returns a "local" axis aligned bounding box of the node.
     *
     * @returns {cc.Rect}
     */
    boundingBox(): cc.Rect

    /**
     * Stops all running actions and schedulers
     */
    cleanup(): any

    /**
     * Converts a Point to node (local) space coordinates. The result is in Points.
     *
     * @param {cc.Point} worldPoint
     *
     * @returns {cc.Point}
     */
    convertToNodeSpace(worldPoint: cc.Point): cc.Point

    /**
     * Converts a Point to node (local) space coordinates. The result is in Points.
     * treating the returned/received node point as anchor relative.
     *
     * @param {cc.Point} worldPoint
     *
     * @returns {cc.Point}
     */
    convertToNodeSpaceAR(worldPoint: cc.Point): cc.Point

    /**
     * convenience methods which take a cc.Touch instead of cc.Point
     *
     * @param {cc.Touch} touch The touch object
     *
     * @returns {cc.Point}
     */
    convertTouchToNodeSpace(touch: cc.Touch): cc.Point

    /**
     * converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative).
     *
     * @param {cc.Touch} touch The touch object
     *
     * @returns {cc.Point}
     */
    convertTouchToNodeSpaceAR(touch: cc.Touch): cc.Point

    /**
     * Converts a Point to world space coordinates. The result is in Points.
     *
     * @param {cc.Point} nodePoint
     *
     * @returns {cc.Point}
     */
    convertToWorldSpace(nodePoint: cc.Point): cc.Point

    /**
     * Converts a local Point to world space coordinates.The result is in Points.
     * treating the returned/received node point as anchor relative.
     *
     * @param {cc.Point} nodePoint
     *
     * @returns {cc.Point}
     */
    convertToWorldSpaceAR(nodePoint: cc.Point): cc.Point

    /**
     * Render function using the canvas 2d context or WebGL context, internal usage only, please do not call this function
     *
     * @param {CanvasRenderingContext2D | WebGLRenderingContext} ctx The render context
     */
    draw(ctx: CanvasRenderingContext2D | WebGLRenderingContext): any

    /**
     * Search the children of the receiving node to perform processing for nodes which share a name.
     *
     * @param {} name The name to search for, supports c++11 regular expression.
     * Search syntax options:
     * `//`: Can only be placed at the begin of the search string. This indicates that it will search recursively.
     * `..`: The search should move up to the node's parent. Can only be placed at the end of string.
     * `/` : When placed anywhere but the start of the search string, this indicates that the search should move to the node's children.
     * @param {} callback A callback function to execute on nodes that match the `name` parameter. The function takes the following arguments:
     * `node`
     * A node that matches the name
     * And returns a boolean result. Your callback can return `true` to terminate the enumeration.
     */
    enumerateChildren(name: any, callback: any): any

    /**
     * Returns an action from the running action list by its tag.
     *
     * @param {Number} tag
     *
     * @returns {cc.Action} The action object with the given tag.cc.Node#getTag and cc.Node#setTag
     */
    getActionByTag(tag: number): cc.Action

    /**
     * Returns the CCActionManager object that is used by all actions.
     * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)
     *
     * @returns {cc.ActionManager} A CCActionManager object.cc.Node#setActionManager
     */
    getActionManager(): cc.ActionManager

    /**
     * Returns a copy of the anchor point.
     * Anchor point is the point around which all transformations and positioning manipulations take place.
     * It's like a pin in the node where it is "attached" to its parent.
     * The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.
     * But you can use values higher than (1,1) and lower than (0,0) too.
     * The default anchor point is (0.5,0.5), so it starts at the center of the node.
     *
     * @returns {cc.Point} The anchor point of node.
     */
    getAnchorPoint(): cc.Point

    /**
     * Returns a copy of the anchor point in absolute pixels.
     * you can only read it. If you wish to modify it, use setAnchorPoint
     *
     * @returns {cc.Point} The anchor point in absolute pixels.cc.Node#getAnchorPoint
     */
    getAnchorPointInPoints(): cc.Point

    /**
     * Returns a "local" axis aligned bounding box of the node.
     * The returned box is relative only to its parent.
     *
     * @returns {cc.Rect} The calculated bounding box of the node
     */
    getBoundingBox(): cc.Rect

    /**
     * Returns a "world" axis aligned bounding box of the node.
     *
     * @returns {cc.Rect}
     */
    getBoundingBoxToWorld(): cc.Rect

    /**
     * Returns null
     *
     * @returns {null}
     */
    getCamera(): null

    /**
     * Returns a child from the container given its name
     *
     * @param {String} name A name to find the child node.
     *
     * @returns {cc.Node} a CCNode object whose name equals to the input parameter
     */
    getChildByName(name: string): cc.Node

    /**
     * Returns a child from the container given its tag
     *
     * @param {Number} aTag An identifier to find the child node.
     *
     * @returns {cc.Node} a CCNode object whose tag equals to the input parameter
     */
    getChildByTag(aTag: number): cc.Node

    /**
     * Returns an array of all children
     * Composing a "tree" structure is a very important feature of CCNode
     *
     * @returns {Array} An array of children
     */
    getChildren(): any[]

    /**
     * Returns the amount of children.
     *
     * @returns {Number} The amount of children.
     */
    getChildrenCount(): number

    /**
     * Returns the color of Node
     *
     * @returns {cc.Color}
     */
    getColor(): cc.Color

    /**
     * Returns a component identified by the name given.
     *
     * @param {String} name The name to search for
     *
     * @returns {cc.Component} The component found
     */
    getComponent(name: string): cc.Component

    /**
     * Returns a copy the untransformed size of the node.
     * The contentSize remains the same no matter the node is scaled or rotated.
     * All nodes has a size. Layer and Scene has the same size of the screen by default.
     *
     * @returns {cc.Size} The untransformed size of the node.
     */
    getContentSize(): cc.Size

    /**
     * Returns the displayed color of Node,
     * the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled.
     *
     * @returns {cc.Color}
     */
    getDisplayedColor(): cc.Color

    /**
     * Returns the displayed opacity of Node,
     * the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled.
     *
     * @returns {number} displayed opacity
     */
    getDisplayedOpacity(): number

    /**
     * Return the Node's Global Z Order.
     *
     * @returns {number} The node's global Z order
     */
    getGlobalZOrder(): number

    /**
     * Returns the state of OpenGL server side.
     *
     * @returns {Number} The state of OpenGL server side.
     */
    getGLServerState(): number

    /**
     * Returns a grid object that is used when applying effects.
     * This function have been deprecated, please use cc.NodeGrid to run grid actions
     *
     * @returns {cc.GridBase} A CCGrid object that is used when applying effects
     */
    getGrid(): cc.GridBase

    /**
     * Returns the local Z order of this node.
     *
     * @returns {Number} The local (relative to its siblings) Z order.
     */
    getLocalZOrder(): number

    /**
     * Returns a string that is used to identify the node.
     *
     * @returns {string} A string that identifies the node.
     */
    getName(): string

    /**
     * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.
     * The matrix is in Pixels.
     *
     * @param {} ancestor
     *
     * @returns {cc.AffineTransform} The affine transform object
     */
    getNodeToParentTransform(ancestor: any): cc.AffineTransform

    /**
     * Returns the world affine transform matrix. The matrix is in Pixels.
     *
     * @returns {cc.AffineTransform}
     */
    getNodeToWorldTransform(): cc.AffineTransform

    /**
     * returns the normalized position
     *
     * @returns {cc.Point}
     */
    getNormalizedPosition(): cc.Point

    /**
     * Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).
     * Composable actions are counted as 1 action. Example:
     * If you are running 1 Sequence of 7 actions, it will return 1.
     * If you are running 7 Sequences of 2 actions, it will return 7.
     *
     * @returns {Number} The number of actions that are running plus the ones that are schedule to run
     */
    getNumberOfRunningActions(): number

    /**
     * Returns the opacity of Node
     *
     * @returns {number} opacity
     */
    getOpacity(): number

    /**
     * Returns the arrival order, indicates which children should be added previously.
     *
     * @returns {Number} The arrival order.
     */
    getOrderOfArrival(): number

    /**
     * Returns a reference to the parent node
     *
     * @returns {cc.Node} A reference to the parent node
     */
    getParent(): cc.Node

    /**
     * Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.
     * The matrix is in Pixels.
     *
     * @returns {cc.AffineTransform}
     */
    getParentToNodeTransform(): cc.AffineTransform

    /**
     * Returns a copy of the position (x,y) of the node in cocos2d coordinates. (0,0) is the left-bottom corner.
     *
     * @returns {cc.Point} The position (x,y) of the node in OpenGL coordinates
     */
    getPosition(): cc.Point

    /**
     * Returns the x axis position of the node in cocos2d coordinates.
     *
     * @returns {Number}
     */
    getPositionX(): number

    /**
     * Returns the y axis position of the node in cocos2d coordinates.
     *
     * @returns {Number}
     */
    getPositionY(): number

    /**
     * Returns the rotation (angle) of the node in degrees. 0 is the default rotation angle. Positive values rotate node clockwise.
     *
     * @returns {Number} The rotation of the node in degrees.
     */
    getRotation(): number

    /**
     * Returns the X axis rotation (angle) which represent a horizontal rotational skew of the node in degrees.
     * 0 is the default rotation angle. Positive values rotate node clockwise
     * (support only in WebGL rendering mode)
     *
     * @returns {Number} The X rotation in degrees.
     */
    getRotationX(): number

    /**
     * Returns the Y axis rotation (angle) which represent a vertical rotational skew of the node in degrees.
     * 0 is the default rotation angle. Positive values rotate node clockwise
     * (support only in WebGL rendering mode)
     *
     * @returns {Number} The Y rotation in degrees.
     */
    getRotationY(): number

    /**
     * Returns the scale factor of the node.
     *
     * @returns {Number} The scale factor
     */
    getScale(): number

    /**
     * Returns the scale factor on X axis of this node
     *
     * @returns {Number} The scale factor on X axis.
     */
    getScaleX(): number

    /**
     * Returns the scale factor on Y axis of this node
     *
     * @returns {Number} The scale factor on Y axis.
     */
    getScaleY(): number

    /**
     * Returns the cc.Scheduler object used to schedule all "updates" and timers.
     *
     * @returns {cc.Scheduler} A CCScheduler object.
     */
    getScheduler(): cc.Scheduler

    /**
     * Return the shader program currently used for this node
     *
     * @returns {cc.GLProgram} The shader program currently used for this node
     */
    getShaderProgram(): cc.GLProgram

    /**
     * Returns the skew degrees in X
     * The X skew angle of the node in degrees.
     * This angle describes the shear distortion in the X direction.
     * Thus, it is the angle between the Y axis and the left edge of the shape
     * The default skewX angle is 0. Positive values distort the node in a CW direction.
     *
     * @returns {Number} The X skew angle of the node in degrees.
     */
    getSkewX(): number

    /**
     * Returns the skew degrees in Y
     * The Y skew angle of the node in degrees.
     * This angle describes the shear distortion in the Y direction.
     * Thus, it is the angle between the X axis and the bottom edge of the shape
     * The default skewY angle is 0. Positive values distort the node in a CCW direction.
     *
     * @returns {Number} The Y skew angle of the node in degrees.
     */
    getSkewY(): number

    /**
     * Returns a tag that is used to identify the node easily.
     *
     * @returns {Number} An integer that identifies the node.
     */
    getTag(): number

    /**
     * Returns a custom user data pointer
     * You can set everything in UserData pointer, a data block, a structure or an object.
     *
     * @returns {object} A custom user data pointer
     */
    getUserData(): object

    /**
     * Returns a user assigned cocos2d object.
     * Similar to userData, but instead of holding all kinds of data it can only hold a cocos2d object
     *
     * @returns {object} A user assigned CCObject
     */
    getUserObject(): object

    /**
     * Returns WebGL Z vertex of this node.
     *
     * @returns {Number} WebGL Z vertex of this node
     */
    getVertexZ(): number

    /**
     * Returns the inverse world affine transform matrix. The matrix is in Pixels.
     *
     * @returns {cc.AffineTransform}
     */
    getWorldToNodeTransform(): cc.AffineTransform

    /**
     * Returns z order of this node
     *
     * @returns {Number}
     */
    getZOrder(): number

    /**
     * Sets whether the anchor point will be ignored when you position this node.
     * When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.
     * This is an internal method, only used by CCLayer and CCScene. Don't call it outside framework.
     * The default value is false, while in CCLayer and CCScene are true
     *
     * @param {Boolean} newValue true if anchor point will be ignored when you position this node
     */
    ignoreAnchorPointForPosition(newValue: boolean): any

    /**
     * Initializes the instance of cc.Node
     *
     * @returns {boolean} Whether the initialization was successful.
     */
    init(): boolean

    /**
     * Returns whether node's color value affect its child nodes.
     *
     * @returns {boolean}
     */
    isCascadeColorEnabled(): boolean

    /**
     * Returns whether node's opacity value affect its child nodes.
     *
     * @returns {boolean}
     */
    isCascadeOpacityEnabled(): boolean

    /**
     * Returns whether the anchor point will be ignored when you position this node.
     * When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.
     *
     * @returns {Boolean} true if the anchor point will be ignored when you position this node.cc.Node#ignoreAnchorPointForPosition
     */
    isIgnoreAnchorPointForPosition(): boolean

    /**
     * Get whether color should be changed with the opacity value
     *
     * @returns {Boolean}
     */
    isOpacityModifyRGB(): boolean

    /**
     * Returns whether or not the node accepts event callbacks.
     * Running means the node accept event callbacks like onEnter(), onExit(), update()
     *
     * @returns {Boolean} Whether or not the node is running.
     */
    isRunning(): boolean

    /**
     * Returns if the node is visible
     *
     * @returns {Boolean} true if the node is visible, false if the node is hidden.cc.Node#setVisible
     */
    isVisible(): boolean

    /**
     * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.
     * The matrix is in Pixels.
     *
     * @returns {cc.AffineTransform}
     */
    nodeToParentTransform(): cc.AffineTransform

    /**
     *
     */
    nodeToWorldTransform(): any

    /**
     * Event callback that is invoked every time when CCNode enters the 'stage'.
     * If the CCNode enters the 'stage' with a transition, this event is called when the transition starts.
     * During onEnter you can't access a "sister/brother" node.
     * If you override onEnter, you must call its parent's onEnter function with this._super().
     */
    onEnter(): any

    /**
     * Event callback that is invoked when the CCNode enters in the 'stage'.
     * If the CCNode enters the 'stage' with a transition, this event is called when the transition finishes.
     * If you override onEnterTransitionDidFinish, you shall call its parent's onEnterTransitionDidFinish with this._super()
     */
    onEnterTransitionDidFinish(): any

    /**
     * callback that is called every time the cc.Node leaves the 'stage'.
     * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition finishes.
     * During onExit you can't access a sibling node.
     * If you override onExit, you shall call its parent's onExit with this._super().
     */
    onExit(): any

    /**
     * callback that is called every time the cc.Node leaves the 'stage'.
     * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition starts.
     * If you override onExitTransitionDidStart, you shall call its parent's onExitTransitionDidStart with this._super()
     */
    onExitTransitionDidStart(): any

    /**
     *
     */
    parentToNodeTransform(): any

    /**
     * Pauses all scheduled selectors and actions.
     * This method is called internally by onExit
     */
    pause(): any

    /**
     * Pauses all scheduled selectors and actions.
     * This method is called internally by onExit
     */
    pauseSchedulerAndActions(): any

    /**
     * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
     * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
     * This is a hack, and should be removed once JSB fixes the retain/release bug
     * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
     * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
     * when you want to use it later, a "Invalid Native Object" error will be raised.
     * The retain function can increase a reference count for the native object to avoid it being released,
     * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
     * retain and release function call should be paired in developer's game code.
     */
    release(): any

    /**
     * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
     * If the cleanup parameter is not passed, it will force a cleanup.
     *
     * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
     */
    removeAllChildren(cleanup: boolean): any

    /**
     * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
     *
     * @param {Boolean} cleanup
     */
    removeAllChildrenWithCleanup(cleanup: boolean): any

    /**
     * Removes all components of cc.Node, it called when cc.Node is exiting from stage.
     */
    removeAllComponents(): any

    /**
     * Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter.
     * If the cleanup parameter is not passed, it will force a cleanup.
     * "remove" logic MUST only be on this method
     * If a class wants to extend the 'removeChild' behavior it only needs
     * to override this method
     *
     * @param {cc.Node} child The child node which will be removed.
     * @param {Boolean} cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise.
     */
    removeChild(child: cc.Node, cleanup: boolean): any

    /**
     * Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
     * If the cleanup parameter is not passed, it will force a cleanup.
     *
     * @param {Number} tag An integer number that identifies a child node
     * @param {Boolean} cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise.
     */
    removeChildByTag(tag: number, cleanup: boolean): any

    /**
     * Removes a component identified by the given name or removes the component object given
     *
     * @param {String|cc.Component} component
     */
    removeComponent(component: string | cc.Component): any

    /**
     * Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks.
     * If the cleanup parameter is not passed, it will force a cleanup.
     * If the node orphan, then nothing happens.
     *
     * @param {Boolean} cleanup true if all actions and callbacks on this node should be removed, false otherwise.
     */
    removeFromParent(cleanup: boolean): any

    /**
     * Removes this node itself from its parent node.
     * If the node orphan, then nothing happens.
     *
     * @param {Boolean} cleanup true if all actions and callbacks on this node should be removed, false otherwise.
     */
    removeFromParentAndCleanup(cleanup: boolean): any

    /**
     * Reorders a child according to a new z value.
     * The child MUST be already added.
     *
     * @param {cc.Node} child An already added child node. It MUST be already added.
     * @param {Number} zOrder Z order for drawing priority. Please refer to setZOrder(int)
     */
    reorderChild(child: cc.Node, zOrder: number): any

    /**
     * Resumes all scheduled selectors and actions.
     * This method is called internally by onEnter
     */
    resume(): any

    /**
     * Resumes all scheduled selectors and actions.
     * This method is called internally by onEnter
     */
    resumeSchedulerAndActions(): any

    /**
     * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
     * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
     * This is a hack, and should be removed once JSB fixes the retain/release bug
     * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
     * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
     * when you want to use it later, a "Invalid Native Object" error will be raised.
     * The retain function can increase a reference count for the native object to avoid it being released,
     * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
     * retain and release function call should be paired in developer's game code.
     */
    retain(): any

    /**
     * Executes an action, and returns the action that is executed.
     * The node becomes the action's target. Refer to cc.Action's getTarget()
     *
     * @param {cc.Action} action
     *
     * @returns {cc.Action} An Action pointer
     */
    runAction(action: cc.Action): cc.Action

    /**
     * Schedules a custom selector.
     * If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.
     *
     * @param {function} callback A function wrapped as a selector
     * @param {Number} interval Tick interval in seconds. 0 means tick every frame. If interval = 0, it's recommended to use scheduleUpdate() instead.
     * @param {Number} repeat The selector will be executed (repeat + 1) times, you can use kCCRepeatForever for tick infinitely.
     * @param {Number} delay The amount of time that the first tick will wait before execution.
     * @param {String} key The only string identifying the callback
     */
    schedule(callback: Function, interval: number, repeat: number, delay: number, key: string): any

    /**
     * Schedules a callback function that runs only once, with a delay of 0 or larger
     *
     * @param {function} callback A function wrapped as a selector
     * @param {Number} delay The amount of time that the first tick will wait before execution.
     * @param {String} key The only string identifying the callback
     */
    scheduleOnce(callback: Function, delay: number, key: string): any

    /**
     * schedules the "update" method.
     * It will use the order number 0. This method will be called every frame.
     * Scheduled methods with a lower order value will be called before the ones that have a higher order value.
     * Only one "update" method could be scheduled per node.
     */
    scheduleUpdate(): any

    /**
     * schedules the "update" callback function with a custom priority.
     * This callback function will be called every frame.
     * Scheduled callback functions with a lower priority will be called before the ones that have a higher value.
     * Only one "update" callback function could be scheduled per node (You can't have 2 'update' callback functions).
     *
     * @param {Number} priority
     */
    scheduleUpdateWithPriority(priority: number): any

    /**
     * Sets the cc.ActionManager object that is used by all actions.
     *
     * @param {cc.ActionManager} actionManager A CCActionManager object that is used by all actions.
     */
    setActionManager(actionManager: cc.ActionManager): any

    /**
     * Sets the additional transform.
     * The additional transform will be concatenated at the end of getNodeToParentTransform.
     * It could be used to simulate `parent-child` relationship between two nodes (e.g. one is in BatchNode, another isn't).
     *
     * @param {cc.AffineTransform} additionalTransform The additional transform
     */
    setAdditionalTransform(additionalTransform: cc.AffineTransform): any

    /**
     * Sets the anchor point in percent.
     * anchor point is the point around which all transformations and positioning manipulations take place.
     * It's like a pin in the node where it is "attached" to its parent.
     * The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.
     * But you can use values higher than (1,1) and lower than (0,0) too.
     * The default anchor point is (0.5,0.5), so it starts at the center of the node.
     *
     * @param {cc.Point|Number} point The anchor point of node or The x axis anchor of node.
     * @param {Number} y The y axis anchor of node.
     */
    setAnchorPoint(point: cc.Point | number, y: number): any

    /**
     * Enable or disable cascade color, if cascade enabled, child nodes' opacity will be the cascade value of parent color and its own color.
     *
     * @param {boolean} cascadeColorEnabled
     */
    setCascadeColorEnabled(cascadeColorEnabled: boolean): any

    /**
     * Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity.
     *
     * @param {boolean} cascadeOpacityEnabled
     */
    setCascadeOpacityEnabled(cascadeOpacityEnabled: boolean): any

    /**
     * Sets the color of Node.
     * When color doesn't include opacity value like cc.color(128,128,128), this function only change the color.
     * When color include opacity like cc.color(128,128,128,100), then this function will change the color and the opacity.
     *
     * @param {cc.Color} color The new color given
     */
    setColor(color: cc.Color): any

    /**
     * Sets the untransformed size of the node.
     * The contentSize remains the same no matter the node is scaled or rotated.
     * All nodes has a size. Layer and Scene has the same size of the screen.
     *
     * @param {cc.Size|Number} size The untransformed size of the node or The untransformed size's width of the node.
     * @param {Number} height The untransformed size's height of the node.
     */
    setContentSize(size: cc.Size | number, height: number): any

    /**
     * Defines the oder in which the nodes are renderer.
     * Nodes that have a Global Z Order lower, are renderer first.
     * In case two or more nodes have the same Global Z Order, the oder is not guaranteed.
     * The only exception if the Nodes have a Global Z Order == 0. In that case, the Scene Graph order is used.
     * By default, all nodes have a Global Z Order = 0. That means that by default, the Scene Graph order is used to render the nodes.
     * Global Z Order is useful when you need to render nodes in an order different than the Scene Graph order.
     * Limitations: Global Z Order can't be used used by Nodes that have SpriteBatchNode as one of their ancestors.
     * And if ClippingNode is one of the ancestors, then "global Z order" will be relative to the ClippingNode.
     *
     * @param {Number} globalZOrder
     */
    setGlobalZOrder(globalZOrder: number): any

    /**
     * Sets the state of OpenGL server side.
     *
     * @param {Number} state The state of OpenGL server side.
     */
    setGLServerState(state: number): any

    /**
     * Changes a grid object that is used when applying effects
     * This function have been deprecated, please use cc.NodeGrid to run grid actions
     *
     * @param {cc.GridBase} grid A CCGrid object that is used when applying effects
     */
    setGrid(grid: cc.GridBase): any

    /**
     * LocalZOrder is the 'key' used to sort the node relative to its siblings.
     * The Node's parent will sort all its children based ont the LocalZOrder value.
     * If two nodes have the same LocalZOrder, then the node that was added first to the children's array
     * will be in front of the other node in the array.Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order )And Nodes that have LocalZOder values < 0 are the "left" subtree
     * While Nodes with LocalZOder >=0 are the "right" subtree.
     *
     * @param {Number} localZOrder
     */
    setLocalZOrder(localZOrder: number): any

    /**
     * Changes the name that is used to identify the node easily.
     *
     * @param {String} name
     */
    setName(name: string): any

    /**
     * Sets the position (x,y) using values between 0 and 1.
     * The positions in pixels is calculated like the following:
     * _position = _normalizedPosition * parent.getContentSize()
     *
     * @param {cc.Point|Number} posOrX
     * @param {Number} y
     */
    setNormalizedPosition(posOrX: cc.Point | number, y: number): any

    /**
     * Sets the opacity of Node
     *
     * @param {Number} opacity
     */
    setOpacity(opacity: number): any

    /**
     * Set whether color should be changed with the opacity value,
     * useless in cc.Node, but this function is override in some class to have such behavior.
     *
     * @param {Boolean} opacityValue
     */
    setOpacityModifyRGB(opacityValue: boolean): any

    /**
     * Sets the arrival order when this node has a same ZOrder with other children.
     * A node which called addChild subsequently will take a larger arrival order,
     * If two children have the same Z order, the child with larger arrival order will be drawn later.
     *
     * @param {Number} Var The arrival order.
     */
    setOrderOfArrival(Var: number): any

    /**
     * Sets the parent node
     *
     * @param {cc.Node} parent A reference to the parent node
     */
    setParent(parent: cc.Node): any

    /**
     * Changes the position (x,y) of the node in cocos2d coordinates.
     * The original point (0,0) is at the left-bottom corner of screen.
     * Usually we use cc.p(x,y) to compose CCPoint object.
     * and Passing two numbers (x,y) is more efficient than passing CCPoint object.
     *
     * @param {cc.Point|Number} newPosOrxValue The position (x,y) of the node in coordinates or the X coordinate for position
     * @param {Number} yValue Y coordinate for position
     */
    setPosition(newPosOrxValue: cc.Point | number, yValue: number): any

    /**
     * Sets the x axis position of the node in cocos2d coordinates.
     *
     * @param {Number} x The new position in x axis
     */
    setPositionX(x: number): any

    /**
     * Sets the y axis position of the node in cocos2d coordinates.
     *
     * @param {Number} y The new position in y axis
     */
    setPositionY(y: number): any

    /**
     * Sets the rotation (angle) of the node in degrees.
     * 0 is the default rotation angle.
     * Positive values rotate node clockwise, and negative values for anti-clockwise.
     *
     * @param {Number} newRotation The rotation of the node in degrees.
     */
    setRotation(newRotation: number): any

    /**
     * Sets the X rotation (angle) of the node in degrees which performs a horizontal rotational skew.
     * (support only in WebGL rendering mode)
     * 0 is the default rotation angle.
     * Positive values rotate node clockwise, and negative values for anti-clockwise.
     *
     * @param {Number} rotationX The X rotation in degrees which performs a horizontal rotational skew.
     */
    setRotationX(rotationX: number): any

    /**
     * Sets the Y rotation (angle) of the node in degrees which performs a vertical rotational skew.
     * (support only in WebGL rendering mode)
     * 0 is the default rotation angle.
     * Positive values rotate node clockwise, and negative values for anti-clockwise.
     *
     * @param {} rotationY The Y rotation in degrees.
     */
    setRotationY(rotationY: any): any

    /**
     * Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.
     *
     * @param {Number} scale or scaleX value
     * @param {Number} scaleY
     */
    setScale(scale: number, scaleY: number): any

    /**
     * Changes the scale factor on X axis of this node
     * The default value is 1.0 if you haven't changed it before
     *
     * @param {Number} newScaleX The scale factor on X axis.
     */
    setScaleX(newScaleX: number): any

    /**
     * Changes the scale factor on Y axis of this node
     * The Default value is 1.0 if you haven't changed it before.
     *
     * @param {Number} newScaleY The scale factor on Y axis.
     */
    setScaleY(newScaleY: number): any

    /**
     * Sets a CCScheduler object that is used to schedule all "updates" and timers.
     * IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
     *
     * @param {} scheduler A cc.Scheduler object that is used to schedule all "update" and timers.
     */
    setScheduler(scheduler: any): any

    /**
     * Sets the shader program for this nodeSince v2.0, each rendering node must set its shader program.
     * It should be set in initialize phase.
     *
     * @param {cc.GLProgram} newShaderProgram The shader program which fetches from CCShaderCache.
     */
    setShaderProgram(newShaderProgram: cc.GLProgram): any

    /**
     * Changes the X skew angle of the node in degrees.This angle describes the shear distortion in the X direction.
     * Thus, it is the angle between the Y axis and the left edge of the shape
     * The default skewX angle is 0. Positive values distort the node in a CW direction.
     *
     * @param {Number} newSkewX The X skew angle of the node in degrees.
     */
    setSkewX(newSkewX: number): any

    /**
     * Changes the Y skew angle of the node in degrees.
     * This angle describes the shear distortion in the Y direction.
     * Thus, it is the angle between the X axis and the bottom edge of the shape
     * The default skewY angle is 0. Positive values distort the node in a CCW direction.
     *
     * @param {Number} newSkewY The Y skew angle of the node in degrees.
     */
    setSkewY(newSkewY: number): any

    /**
     * Changes the tag that is used to identify the node easily.
     * Please refer to getTag for the sample code.
     *
     * @param {Number} tag A integer that identifies the node.
     */
    setTag(tag: number): any

    /**
     * Sets a custom user data reference
     * You can set everything in UserData reference, a data block, a structure or an object, etc.
     *
     * @param {object} Var A custom user data
     */
    setUserData(Var: object): any

    /**
     * Sets a user assigned cocos2d object
     * Similar to UserData, but instead of holding all kinds of data it can only hold a cocos2d object
     * In JSB, the UserObject will be retained once in this method, and the previous UserObject (if existed) will be release.
     * The UserObject will be released in CCNode's destruction.
     *
     * @param {object} newValue A user cocos2d object
     */
    setUserObject(newValue: object): any

    /**
     * Sets the real WebGL Z vertex.
     * Differences between openGL Z vertex and cocos2d Z order:
     * - WebGL Z modifies the Z vertex, and not the Z order in the relation between parent-children
     * - WebGL Z might require to set 2D projection
     * - cocos2d Z order works OK if all the nodes uses the same WebGL Z vertex. eg: vertexZ = 0
     *
     * @param {Number} Var
     */
    setVertexZ(Var: number): any

    /**
     * Sets whether the node is visible
     * The default value is true
     *
     * @param {Boolean} visible Pass true to make the node visible, false to hide the node.
     */
    setVisible(visible: boolean): any

    /**
     * Sets the Z order which stands for the drawing order, and reorder this node in its parent's children array.
     * The Z order of node is relative to its "brothers": children of the same parent.
     * It's nothing to do with OpenGL's z vertex. This one only affects the draw order of nodes in cocos2d.
     * The larger number it is, the later this node will be drawn in each message loop.
     * Please refer to setVertexZ(float) for the difference.
     *
     * @param {Number} z Z order of this node.
     */
    setZOrder(z: number): any

    /**
     * Sorts the children array once before drawing, instead of every time when a child is added or reordered.
     * This approach can improves the performance massively.
     */
    sortAllChildren(): any

    /**
     * Stops and removes an action from the running action list.
     *
     * @param {cc.Action} action An action object to be removed.
     */
    stopAction(action: cc.Action): any

    /**
     * Removes an action from the running action list by its tag.
     *
     * @param {Number} tag A tag that indicates the action to be removed.
     */
    stopActionByTag(tag: number): any

    /**
     * Stops and removes all actions from the running action list .
     */
    stopAllActions(): any

    /**
     * Performs view-matrix transformation based on position, scale, rotation and other attributes.
     *
     * @param {cc.Node.RenderCmd} parentCmd parent's render command
     * @param {boolean} recursive whether call its children's transform
     */
    transform(parentCmd: any, recursive: boolean): any

    /**
     * unschedules a custom callback function.
     *
     * @param {function} callback_fn A function wrapped as a selector
     */
    unschedule(callback_fn: Function): any

    /**
     * unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.
     * Actions are not affected by this method.
     */
    unscheduleAllCallbacks(): any

    /**
     * Unschedules the "update" method.
     */
    unscheduleUpdate(): any

    /**
     * Update will be called automatically every frame if "scheduleUpdate" is called when the node is "live".
     * The default behavior is to invoke the visit function of node's componentContainer.
     * Override me to implement your own update logic.
     *
     * @param {Number} dt Delta time since last update
     */
    update(dt: number): any

    /**
     * Update the displayed color of Node
     *
     * @param {cc.Color} parentColor
     */
    updateDisplayedColor(parentColor: cc.Color): any

    /**
     * Update displayed opacity
     *
     * @param {Number} parentOpacity
     */
    updateDisplayedOpacity(parentOpacity: number): any

    /**
     * Calls children's updateTransform() method recursively.
     * This method is moved from CCSprite, so it's no longer specific to CCSprite.
     * As the result, you apply CCSpriteBatchNode's optimization on your customed CCNode.
     * e.g., batchNode->addChild(myCustomNode), while you can only addChild(sprite) before.
     */
    updateTransform(): any

    /**
     * Recursive method that visit its children and draw them
     *
     * @param {cc.Node.RenderCmd} parentCmd
     */
    visit(parentCmd: any): any

    /**
     *
     */
    worldToNodeTransform(): any
  }
}

declare namespace cc {
  namespace Node {



    /**
     * Allocates and initializes a node.
     *
     * @returns {cc.Node} cc.Node
     */
    function create(): cc.Node
  }
}

declare namespace cc {
  interface AtlasNode  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {String} tile
     * @param {Number} tileWidth
     * @param {Number} tileHeight
     * @param {Number} itemsToRender
     */
    constructor(tile: string, tileWidth: number, tileHeight: number, itemsToRender: number)

    /**
     * - Number of quads to draw
     */
    quadsToDraw: number

    /**
     * - Current used texture
     */
    texture: cc.Texture2D

    /**
     * - Texture atlas for cc.AtlasNode
     */
    textureAtlas: cc.TextureAtlas

    /**
     * Get node's blend function
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * Get color value of the atlas node
     *
     * @returns {cc.Color}
     */
    getColor(): cc.Color

    /**
     * Get the number of quads to be rendered
     *
     * @returns {Number}
     */
    getQuadsToDraw(): number

    /**
     * Get the current texture
     *
     * @returns {cc.Texture2D}
     */
    getTexture(): cc.Texture2D

    /**
     * Get the atlas texture
     *
     * @returns {cc.TextureAtlas}
     */
    getTextureAtlas(): cc.TextureAtlas

    /**
     * Initializes an CCAtlasNode with an atlas texture, the width, the height of each tile and the quantity of tiles to render
     *
     * @param {cc.Texture2D} texture The atlas texture
     * @param {Number} tileWidth The width of each tile
     * @param {Number} tileHeight The height of each tile
     * @param {Number} itemsToRender The quantity of tiles to be rendered
     *
     * @returns {Boolean}
     */
    initWithTexture(texture: cc.Texture2D, tileWidth: number, tileHeight: number, itemsToRender: number): boolean

    /**
     * Initializes an cc.AtlasNode object with an atlas texture file name, the width, the height of each tile and the quantity of tiles to render
     *
     * @param {String} tile The atlas texture file name
     * @param {Number} tileWidth The width of each tile
     * @param {Number} tileHeight The height of each tile
     * @param {Number} itemsToRender The quantity of tiles to be rendered
     *
     * @returns {Boolean}
     */
    initWithTileFile(tile: string, tileWidth: number, tileHeight: number, itemsToRender: number): boolean

    /**
     * Get whether color should be changed with the opacity value
     *
     * @returns {Boolean}
     */
    isOpacityModifyRGB(): boolean

    /**
     * Set node's blend function
     * This function accept either cc.BlendFunc object or source value and destination value
     *
     * @param {Number | cc.BlendFunc} src
     * @param {Number} dst
     */
    setBlendFunc(src: number | cc.BlendFunc, dst: number): any

    /**
     * Set node's color
     *
     * @param {cc.Color} color Color object created with cc.color(r, g, b).
     */
    setColor(color: cc.Color): any

    /**
     * Set node's opacity
     *
     * @param {Number} opacity The opacity value
     */
    setOpacity(opacity: number): any

    /**
     * Set whether color should be changed with the opacity value,
     * if true, node color will change while opacity changes.
     *
     * @param {Boolean} value
     */
    setOpacityModifyRGB(value: boolean): any

    /**
     * Set the number of quads to be rendered
     *
     * @param {Number} quadsToDraw
     */
    setQuadsToDraw(quadsToDraw: number): any

    /**
     * Replace the current texture with a new one
     *
     * @param {cc.Texture2D} texture The new texture
     */
    setTexture(texture: cc.Texture2D): any

    /**
     * Set the atlas texture
     *
     * @param {cc.TextureAtlas} value The texture
     */
    setTextureAtlas(value: cc.TextureAtlas): any

    /**
     * Updates the Atlas (indexed vertex array).
     * Empty implementation, shall be overridden in subclasses
     */
    updateAtlasValues(): any
  }
}

declare namespace cc {
  namespace AtlasNode {



    /**
     * Creates a cc.AtlasNode with an Atlas file the width and height of each item and the quantity of items to render
     *
     * @param {String} tile
     * @param {Number} tileWidth
     * @param {Number} tileHeight
     * @param {Number} itemsToRender
     *
     * @returns {cc.AtlasNode}
     */
    function create(tile: string, tileWidth: number, tileHeight: number, itemsToRender: number): cc.AtlasNode
  }
}

declare namespace cc {
  interface LabelAtlas  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * Create a label atlas.
     * It accepts two groups of parameters:
     * a) string, fntFile
     * b) label, textureFilename, width, height, startChar
     *
     * @param {String} strText
     * @param {String} charMapFile charMapFile or fntFile
     * @param {Number} itemWidth
     * @param {Number} itemHeight
     * @param {Number} startCharMap
     */
    constructor(strText: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: number)

    /**
     * - Content string of label
     */
    string: string

    /**
     * Add texture loaded event listener.
     *
     * @param {Function} callback
     * @param {cc.Node} target
     */
    addLoadedEventListener(callback: Function, target: cc.Node): any

    /**
     * return the text of this label
     *
     * @returns {String}
     */
    getString(): string

    /**
     * initializes the cc.LabelAtlas with a string, a char map file(the atlas),
     * the width and height of each element and the starting char of the atlas
     * It accepts two groups of parameters:
     * a) string, fntFile
     * b) label, textureFilename, width, height, startChar
     *
     * @param {String} strText
     * @param {String|cc.Texture2D} charMapFile charMapFile or fntFile or texture file
     * @param {Number} itemWidth
     * @param {Number} itemHeight
     * @param {Number} startCharMap
     *
     * @returns {Boolean} returns true on success
     */
    initWithString(strText: string, charMapFile: string | cc.Texture2D, itemWidth: number, itemHeight: number, startCharMap: number): boolean

    /**
     * Set the color.
     *
     * @param {cc.Color} color3
     */
    setColor(color3: cc.Color): any

    /**
     * set the display string
     *
     * @param {String} label
     */
    setString(label: string): any

    /**
     * Return texture is loaded.
     *
     * @returns {boolean}
     */
    textureLoaded(): boolean

    /**
     * Atlas generation
     */
    updateAtlasValues(): any
  }
}

declare namespace cc {
  namespace LabelAtlas {



    /**
     * Please use new cc.LabelAtlas instead.
     * Create a label atlas.
     * It accepts two groups of parameters:
     * a) string, fntFile
     * b) label, textureFilename, width, height, startChar
     *
     * @param {String} strText
     * @param {String} charMapFile charMapFile or fntFile
     * @param {Number} itemWidth
     * @param {Number} itemHeight
     * @param {Number} startCharMap
     *
     * @returns {cc.LabelAtlas} returns the LabelAtlas object on success
     */
    function create(strText: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: number): cc.LabelAtlas
  }
}

declare namespace cc {
  interface ClippingNode  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {cc.Node} stencil
     */
    constructor(stencil: cc.Node)

    /**
     * - Threshold for alpha value.
     */
    alphaThreshold: number

    /**
     * - Indicate whether in inverted mode.
     */
    inverted: boolean

    /**
     * - he cc.Node to use as a stencil to do the clipping.
     */
    stencil: cc.Node

    /**
     * The alpha threshold.
     * The content is drawn only where the stencil have pixel with alpha greater than the alphaThreshold.
     * Should be a float between 0 and 1.
     * This default to 1 (so alpha test is disabled).
     *
     * @returns {Number}
     */
    getAlphaThreshold(): number

    /**
     * The cc.Node to use as a stencil to do the clipping.
     * The stencil node will be retained. This default to nil.
     *
     * @returns {cc.Node}
     */
    getStencil(): cc.Node

    /**
     * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
     *
     * @param {cc.Node} stencil
     */
    init(stencil: cc.Node): any

    /**
     * Inverted. If this is set to YES,
     * the stencil is inverted, so the content is drawn where the stencil is NOT drawn.
     * This default to NO.
     *
     * @returns {Boolean}
     */
    isInverted(): boolean

    /**
     * Event callback that is invoked every time when node enters the 'stage'.
     * If the CCNode enters the 'stage' with a transition, this event is called when the transition starts.
     * During onEnter you can't access a "sister/brother" node.
     * If you override onEnter, you must call its parent's onEnter function with this._super().
     */
    onEnter(): any

    /**
     * Event callback that is invoked when the node enters in the 'stage'.
     * If the node enters the 'stage' with a transition, this event is called when the transition finishes.
     * If you override onEnterTransitionDidFinish, you shall call its parent's onEnterTransitionDidFinish with this._super()
     */
    onEnterTransitionDidFinish(): any

    /**
     * callback that is called every time the node leaves the 'stage'.
     * If the node leaves the 'stage' with a transition, this callback is called when the transition finishes.
     * During onExit you can't access a sibling node.
     * If you override onExit, you shall call its parent's onExit with this._super().
     */
    onExit(): any

    /**
     * callback that is called every time the node leaves the 'stage'.
     * If the node leaves the 'stage' with a transition, this callback is called when the transition starts.
     * If you override onExitTransitionDidStart, you shall call its parent's onExitTransitionDidStart with this._super()
     */
    onExitTransitionDidStart(): any

    /**
     * set alpha threshold.
     *
     * @param {Number} alphaThreshold
     */
    setAlphaThreshold(alphaThreshold: number): any

    /**
     * set whether or not invert of stencil
     *
     * @param {Boolean} inverted
     */
    setInverted(inverted: boolean): any

    /**
     * Set stencil.
     *
     * @param {cc.Node} stencil
     */
    setStencil(stencil: cc.Node): any
  }
}

declare namespace cc {
  namespace ClippingNode {



    /**
     * Creates and initializes a clipping node with an other node as its stencil.
     * The stencil node will be retained.
     *
     * @param {cc.Node} stencil
     *
     * @returns {cc.ClippingNode}
     */
    function create(stencil: cc.Node): cc.ClippingNode
  }
}

declare namespace cc {
  interface DrawNode  {

    /**
     * The cc.DrawNodeCanvas's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.DrawNodeCanvas()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * Clear the geometry in the node's buffer.
     */
    clear(): any

    /**
     * draw a cardinal spline path
     *
     * @param {Array} config
     * @param {Number} tension
     * @param {Number} segments
     * @param {Number} lineWidth
     * @param {cc.Color} color
     */
    drawCardinalSpline(config: any[], tension: number, segments: number, lineWidth: number, color: cc.Color): any

    /**
     * draw a CatmullRom curve
     *
     * @param {Array} points
     * @param {Number} segments
     * @param {Number} lineWidth
     * @param {cc.Color} color
     */
    drawCatmullRom(points: any[], segments: number, lineWidth: number, color: cc.Color): any

    /**
     * draws a circle given the center, radius and number of segments.
     *
     * @param {cc.Point} center center of circle
     * @param {Number} radius
     * @param {Number} angle angle in radians
     * @param {Number} segments
     * @param {Boolean} drawLineToCenter
     * @param {Number} lineWidth
     * @param {cc.Color} color
     */
    drawCircle(center: cc.Point, radius: number, angle: number, segments: number, drawLineToCenter: boolean, lineWidth: number, color: cc.Color): any

    /**
     * draws a cubic bezier path
     *
     * @param {cc.Point} origin
     * @param {cc.Point} control1
     * @param {cc.Point} control2
     * @param {cc.Point} destination
     * @param {Number} segments
     * @param {Number} lineWidth
     * @param {cc.Color} color
     */
    drawCubicBezier(origin: cc.Point, control1: cc.Point, control2: cc.Point, destination: cc.Point, segments: number, lineWidth: number, color: cc.Color): any

    /**
     * draw a dot at a position, with a given radius and color
     *
     * @param {cc.Point} pos
     * @param {Number} radius
     * @param {cc.Color} color
     */
    drawDot(pos: cc.Point, radius: number, color: cc.Color): any

    /**
     * draws an array of points.
     *
     * @param {Array} points point of array
     * @param {Number} radius
     * @param {cc.Color} color
     */
    drawDots(points: any[], radius: number, color: cc.Color): any

    /**
     * draw a polygon with a fill color and line color, copying the vertex list
     *
     * @param {Array} verts
     * @param {cc.Color|null} fillColor Fill color or `null` for a hollow polygon.
     * @param {Number} lineWidth
     * @param {cc.Color} lineColor
     */
    drawPoly(verts: any[], fillColor: cc.Color | null, lineWidth: number, lineColor: cc.Color): any

    /**
     * draw a polygon with a fill color and line color without copying the vertex list
     *
     * @param {Array} verts
     * @param {cc.Color|null} fillColor Fill color or `null` for a hollow polygon.
     * @param {Number} lineWidth
     * @param {cc.Color} color
     */
    drawPoly_(verts: any[], fillColor: cc.Color | null, lineWidth: number, color: cc.Color): any

    /**
     * draws a quad bezier path
     *
     * @param {cc.Point} origin
     * @param {cc.Point} control
     * @param {cc.Point} destination
     * @param {Number} segments
     * @param {Number} lineWidth
     * @param {cc.Color} color
     */
    drawQuadBezier(origin: cc.Point, control: cc.Point, destination: cc.Point, segments: number, lineWidth: number, color: cc.Color): any

    /**
     * draws a rectangle given the origin and destination point measured in points.
     *
     * @param {cc.Point} origin
     * @param {cc.Point} destination
     * @param {cc.Color} fillColor
     * @param {Number} lineWidth
     * @param {cc.Color} lineColor
     */
    drawRect(origin: cc.Point, destination: cc.Point, fillColor: cc.Color, lineWidth: number, lineColor: cc.Color): any

    /**
     * draw a segment with a radius and color
     *
     * @param {cc.Point} from
     * @param {cc.Point} to
     * @param {Number} lineWidth
     * @param {cc.Color} color
     */
    drawSegment(from: cc.Point, to: cc.Point, lineWidth: number, color: cc.Color): any

    /**
     * Gets the blend func
     *
     * @returns {Object}
     */
    getBlendFunc(): object

    /**
     * draw color getter
     *
     * @returns {cc.Color}
     */
    getDrawColor(): cc.Color

    /**
     * line width getter
     *
     * @returns {Number}
     */
    getLineWidth(): number

    /**
     * Set the blend func
     *
     * @param {} blendFunc
     * @param {} dst
     */
    setBlendFunc(blendFunc: any, dst: any): any

    /**
     * draw color setter
     *
     * @param {cc.Color} color
     */
    setDrawColor(color: cc.Color): any

    /**
     * line width setter
     *
     * @param {Number} width
     */
    setLineWidth(width: number): any
  }
}

declare namespace cc {
  namespace DrawNode {



    /**
     * Creates a DrawNode
     *
     * @returns {cc.DrawNode}
     */
    function create(): cc.DrawNode
  }
}

declare namespace cc {
  interface Layer  {

    /**
     * Constructor of cc.Layer, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * Sets the layer to cache all of children to a bake sprite, and draw itself by bake sprite. recommend using it in UI.
     * This is useful only in html5 engine
     */
    bake(): any

    /**
     * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
     */
    init(): any

    /**
     * Determines if the layer is baked.
     *
     * @returns {boolean} cc.Layer#bake and cc.Layer#unbake
     */
    isBaked(): boolean

    /**
     * Cancel the layer to cache all of children to a bake sprite.
     * This is useful only in html5 engine
     */
    unbake(): any
  }
}

declare namespace cc {
  namespace Layer {



    /**
     * Creates a layer
     *
     * @returns {cc.Layer|Null} cc.Layer
     */
    function create(): cc.Layer | null
  }
}

declare namespace cc {
  interface Control  {

    /**
     * CCControl is inspired by the UIControl API class from the UIKit library of
     * CocoaTouch. It provides a base class for control CCSprites such as CCButton
     * or CCSlider that convey user intent to the application.
     * The goal of CCControl is to define an interface and base implementation for
     * preparing action messages and initially dispatching them to their targets when
     * certain events occur.
     * To use the CCControl you have to subclass it.
     */
    constructor()

    /**
     * - Indicate whether the control node is enbaled
     */
    enabled: boolean

    /**
     * - Indicate whether the control node is highlighted
     */
    highlighted: boolean

    /**
     * - Indicate whether the control node is selected
     */
    selected: boolean

    /**
     * - <@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL
     */
    state: number

    /**
     * Adds a target and action for a particular event (or events) to an internal
     * dispatch table.
     * The action message may optionally include the sender and the event as
     * parameters, in that order.
     * When you call this method, target is not retained.
     *
     * @param {Object} target The target object that is, the object to which the action message is sent. It cannot be nil. The target is not retained.
     * @param {function} action A selector identifying an action message. It cannot be NULL.
     * @param {Number} controlEvents A bitmask specifying the control events for which the action message is sent. See "CCControlEvent" for bitmask constants.
     */
    addTargetWithActionForControlEvents(target: object, action: Function, controlEvents: number): any

    /**
     * Returns a point corresponding to the touh location converted into the
     * control space coordinates.
     *
     * @param {cc.Touch} touch A CCTouch object that represents a touch.
     */
    getTouchLocation(touch: cc.Touch): any

    /**
     * Returns a boolean value that indicates whether a touch is inside the bounds of the receiver. The given touch must be relative to the world.
     *
     * @param {cc.Touch} touch A cc.Touch object that represents a touch.
     *
     * @returns {Boolean} YES whether a touch is inside the receiver's rect.
     */
    isTouchInside(touch: cc.Touch): boolean

    /**
     * Updates the control layout using its current internal state.
     */
    needsLayout(): any

    /**
     * Removes a target and action for a particular event (or events) from an internal dispatch table.
     *
     * @param {Object} target The target object that is, the object to which the action message is sent. Pass nil to remove all targets paired with action and the specified control events.
     * @param {function} action A selector identifying an action message. Pass NULL to remove all action messages paired with target.
     * @param {Number} controlEvents A bitmask specifying the control events associated with target and action. See "CCControlEvent" for bitmask constants.
     */
    removeTargetWithActionForControlEvents(target: object, action: Function, controlEvents: number): any

    /**
     * Sends action messages for the given control events.
     * which action messages are sent. See "CCControlEvent" for bitmask constants.
     *
     * @param {Number} controlEvents A bitmask whose set flags specify the control events for
     */
    sendActionsForControlEvents(controlEvents: number): any

    /**
     * Tells whether the control is enabled
     *
     * @param {Boolean} enabled
     */
    setEnabled(enabled: boolean): any

    /**
     * A Boolean value that determines whether the control is highlighted.
     *
     * @param {Boolean} highlighted
     */
    setHighlighted(highlighted: boolean): any

    /**
     * A Boolean value that determines the control selected state.
     *
     * @param {Boolean} selected
     */
    setSelected(selected: boolean): any
  }
}

declare namespace cc {
  interface ControlButton  {

    /**
     * CCControlButton: Button control for Cocos2D.
     */
    constructor()

    /**
     * - Indicate whether the background image will be adjusted
     */
    adjustBackgroundImage: boolean

    /**
     * - The anchor point for the label of the control button
     */
    labelAnchor: boolean

    /**
     * - The preferred size of the control button
     */
    preferredSize: cc.Size

    /**
     * - Indicate whether the button will be zoomed while touch down
     */
    zoomOnTouchDown: boolean

    /**
     * Adjust the background image. YES by default. If the property is set to NO, the background will use the preferred size of the background image.
     *
     * @returns {Boolean}
     */
    doesAdjustBackgroundImage(): boolean

    /**
     * Returns the background sprite used for a state.
     *
     * @param {Number} state The state that uses the background sprite. Possible values are described in "CCControlState".
     */
    getBackgroundSpriteForState(state: number): any

    /**
     * The preferred size of the button, if label is larger it will be expanded.
     */
    getPreferredSize(): any

    /**
     * Returns the title color used for a state.
     *
     * @param {Number} state The state that uses the specified color. The values are described in "CCControlState".
     *
     * @returns {cc.Color} The color of the title for the specified state.
     */
    getTitleColorForState(state: number): cc.Color

    /**
     * Returns the title used for a state.
     *
     * @param {Number} state The state that uses the title. Possible values are described in "CCControlState".
     *
     * @returns {string} The title for the specified state.
     */
    getTitleForState(state: number): string

    /**
     * Returns the title label used for a state.
     *
     * @param {} state The state that uses the title label. Possible values are described in "CCControlState".
     *
     * @returns {cc.Node} the title label used for a state.
     */
    getTitleLabelForState(state: any): cc.Node

    /**
     * return the title TTF filename to use for the specified state.
     *
     * @param {Number} state
     *
     * @returns {string}
     */
    getTitleTTFForState(state: number): string

    /**
     * return the font size of LabelTTF to use for the specified state
     *
     * @param {Number} state
     *
     * @returns {Number}
     */
    getTitleTTFSizeForState(state: number): number

    /**
     * Adjust the button zooming on touchdown. Default value is YES.
     */
    getZoomOnTouchDown(): any

    /**
     * Flag to know if the button is currently pushed.
     */
    isPushed(): any

    /**
     * Sets the background sprite to use for the specified button state.
     *
     * @param {Scale9Sprite} sprite The background sprite to use for the specified state.
     * @param {Number} state The state that uses the specified image. The values are described in "CCControlState".
     */
    setBackgroundSpriteForState(sprite: ccui.Scale9Sprite, state: number): any

    /**
     * Sets the background spriteFrame to use for the specified button state.
     *
     * @param {SpriteFrame} spriteFrame The background spriteFrame to use for the specified state.
     * @param {Number} state The state that uses the specified image. The values are described in "CCControlState".
     */
    setBackgroundSpriteFrameForState(spriteFrame: SpriteFrame, state: number): any

    /**
     * set the margins at once (so we only have to do one call of needsLayout)
     *
     * @param {Number} marginH
     * @param {Number} marginV
     */
    setMargins(marginH: number, marginV: number): any

    /**
     * Sets the font of the label, changes the label to a CCLabelBMFont if necessary.
     *
     * @param {string} fntFile The name of the font to change to
     * @param {Number} state The state that uses the specified fntFile. The values are described in "CCControlState".
     */
    setTitleBMFontForState(fntFile: string, state: number): any

    /**
     * Sets the color of the title to use for the specified state.
     *
     * @param {cc.Color} color The color of the title to use for the specified state.
     * @param {Number} state The state that uses the specified color. The values are described in "CCControlState".
     */
    setTitleColorForState(color: cc.Color, state: number): any

    /**
     * Sets the title string to use for the specified state.
     * If a property is not specified for a state, the default is to use the CCButtonStateNormal value.
     *
     * @param {string} title The title string to use for the specified state.
     * @param {Number} state The state that uses the specified title. The values are described in "CCControlState".
     */
    setTitleForState(title: string, state: number): any

    /**
     * Sets the title label to use for the specified state.
     * If a property is not specified for a state, the default is to use the CCButtonStateNormal value.
     *
     * @param {cc.Node} titleLabel The title label to use for the specified state.
     * @param {Number} state The state that uses the specified title. The values are described in "CCControlState".
     */
    setTitleLabelForState(titleLabel: cc.Node, state: number): any

    /**
     * Sets the title TTF filename to use for the specified state.
     *
     * @param {string} fntFile
     * @param {Number} state
     */
    setTitleTTFForState(fntFile: string, state: number): any

    /**
     *
     *
     * @param {Number} size
     * @param {Number} state
     */
    setTitleTTFSizeForState(size: number, state: number): any
  }
}

declare namespace cc {
  namespace ControlButton {



    /**
     *
     *
     * @param {} label
     * @param {} backgroundSprite
     * @param {} fontSize
     *
     * @returns {ControlButton}
     */
    function create(label: any, backgroundSprite: any, fontSize: any): ControlButton
  }
}

declare namespace cc {
  interface EditBox  {

    /**
     * cc.EditBox is a brief Class for edit box.
     * You can use this widget to gather small amounts of text from the user.
     */
    constructor()

    /**
     * - <@writeonly> Delegate of edit box
     */
    delegate: object

    /**
     * - <@writeonly> Config font of edit box
     */
    font: string

    /**
     * - <@writeonly> Config font color of edit box
     */
    fontColor: cc.Color

    /**
     * - <@writeonly> Config font name of edit box
     */
    fontName: string

    /**
     * - <@writeonly> Config font size of edit box
     */
    fontSize: number

    /**
     * - <@writeonly> Input flag of edit box, one of the EditBoxInputFlag constants. e.g.cc.EDITBOX_INPUT_FLAG_PASSWORD
     */
    inputFlag: number

    /**
     * - <@writeonly> Input mode of the edit box. Value should be one of the EditBoxInputMode constants.
     */
    inputMode: number

    /**
     * - Max length of the content string
     */
    maxLength: string

    /**
     * - Place holder of edit box
     */
    placeHolder: string

    /**
     * - <@writeonly> Config font of place holder
     */
    placeHolderFont: string

    /**
     * - <@writeonly> Config font color of place holder
     */
    placeHolderFontColor: cc.Color

    /**
     * - <@writeonly> Config font name of place holder
     */
    placeHolderFontName: string

    /**
     * - <@writeonly> Config font size of place holder
     */
    placeHolderFontSize: number

    /**
     * - <@writeonly> Return type of edit box, value should be one of the KeyboardReturnType constants.
     */
    returnType: number

    /**
     * - Content string of edit box
     */
    string: string

  }
}

declare namespace cc {
  namespace EditBox {



    /**
     * create a edit box with size and background-color or
     *
     * @param {cc.Size} size
     * @param {cc.Scale9Sprite} normal9SpriteBg
     * @param {cc.Scale9Sprite} press9SpriteBg
     * @param {cc.Scale9Sprite} disabled9SpriteBg
     *
     * @returns {cc.EditBox}
     */
    function create(size: cc.Size, normal9SpriteBg: ccui.Scale9Sprite, press9SpriteBg: ccui.Scale9Sprite, disabled9SpriteBg: ccui.Scale9Sprite): cc.EditBox

    /**
     * get the rect of a node in world coordinate frame
     *
     * @param {cc.Node} node
     *
     * @returns {cc.Rect}
     */
    function getRect(node: cc.Node): cc.Rect
  }
}

declare namespace cc {
  interface ControlColourPicker  {

    /**
     * ControlColourPicker: color picker ui component.
     */
    constructor()

    /**
     * - <@readonly> The background sprite
     */
    background: cc.Sprite

  }
}

declare namespace cc {
  namespace ControlColourPicker {



    /**
     *
     *
     * @returns {ControlColourPicker}
     */
    function create(): ControlColourPicker
  }
}

declare namespace cc {
  interface ControlHuePicker  {

    /**
     * The constructor of cc.ControlHuePicker
     *
     * @param {cc.Node} target
     * @param {cc.Point} pos position
     */
    constructor(target: cc.Node, pos: cc.Point)

    /**
     * - <@readonly> The background sprite
     */
    background: cc.Sprite

    /**
     * - The hue value
     */
    hue: number

    /**
     * - The hue value in percentage
     */
    huePercent: number

    /**
     * - <@readonly> The slider sprite
     */
    slider: cc.Sprite

    /**
     * - <@readonly> The start position of the picker
     */
    startPos: cc.Point

  }
}

declare namespace cc {
  namespace ControlHuePicker {



    /**
     *
     *
     * @param {} target
     * @param {} pos
     *
     * @returns {ControlHuePicker}
     */
    function create(target: any, pos: any): ControlHuePicker
  }
}

declare namespace cc {
  interface ControlPotentiometer  {

    /**
     * CCControlPotentiometer: Potentiometer control for Cocos2D.
     */
    constructor()

    /**
     * - The maximum value of the potentionmeter
     */
    maxValue: number

    /**
     * - The minimum value of the potentionmeter
     */
    minValue: number

    /**
     * - The previous location of the potentionmeter
     */
    prevLocation: cc.Point

    /**
     * - The progress timer of the potentionmeter
     */
    progressTimer: cc.ProgressTimer

    /**
     * - The thumb sprite of the potentionmeter
     */
    thumbSprite: cc.Sprite

    /**
     * - The current value of the potentionmeter
     */
    value: number

    /**
     * the angle in degree between line1 and line2.
     *
     * @param {cc.Point} beginLineA
     * @param {cc.Point} endLineA
     * @param {cc.Point} beginLineB
     * @param {cc.Point} endLineB
     *
     * @returns {Number}
     */
    angleInDegreesBetweenLineFromPoint_toPoint_toLineFromPoint_toPoint(beginLineA: cc.Point, endLineA: cc.Point, beginLineB: cc.Point, endLineB: cc.Point): number

    /**
     * the distance between the point1 and point2
     *
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     *
     * @returns {Number}
     */
    distanceBetweenPointAndPoint(point1: cc.Point, point2: cc.Point): number

    /**
     *
     *
     * @param {cc.Sprite} trackSprite
     * @param {cc.ProgressTimer} progressTimer
     * @param {cc.Sprite} thumbSprite
     *
     * @returns {Boolean}
     */
    initWithTrackSprite_ProgressTimer_ThumbSprite(trackSprite: cc.Sprite, progressTimer: cc.ProgressTimer, thumbSprite: cc.Sprite): boolean
  }
}

declare namespace cc {
  namespace ControlPotentiometer {



    /**
     *
     *
     * @param {} backgroundFile
     * @param {} progressFile
     * @param {} thumbFile
     *
     * @returns {ControlPotentiometer}
     */
    function create(backgroundFile: any, progressFile: any, thumbFile: any): ControlPotentiometer
  }
}

declare namespace cc {
  interface ControlSaturationBrightnessPicker  {

    /**
     * The constructor of cc.ControlSaturationBrightnessPicker
     *
     * @param {cc.Node} target
     * @param {cc.Point} pos position
     */
    constructor(target: cc.Node, pos: cc.Point)

    /**
     * - <@readonly> The background sprite
     */
    background: cc.Sprite

    /**
     * - <@readonly> Brightness value of the picker
     */
    brightness: number

    /**
     * - <@readonly> The overlay sprite
     */
    overlay: cc.Sprite

    /**
     * - <@readonly> Saturation value of the picker
     */
    saturation: number

    /**
     * - <@readonly> The shadow sprite
     */
    shadow: cc.Sprite

    /**
     * - <@readonly> The slider sprite
     */
    slider: cc.Sprite

    /**
     * - <@readonly> The start position of the picker
     */
    startPos: cc.Point

  }
}

declare namespace cc {
  namespace ControlSaturationBrightnessPicker {



    /**
     * Creates a cc.ControlSaturationBrightnessPicker
     *
     * @param {cc.Node} target
     * @param {cc.Point} pos position
     *
     * @returns {ControlSaturationBrightnessPicker}
     */
    function create(target: cc.Node, pos: cc.Point): ControlSaturationBrightnessPicker
  }
}

declare namespace cc {
  interface ControlSlider  {

    /**
     * ControlSlider: Slider ui component.
     */
    constructor()

    /**
     * - <@readonly> The overlay sprite
     */
    backgroundSprite: cc.Sprite

    /**
     * - The maximum allowed value of the slider
     */
    maxAllowedValue: number

    /**
     * - The maximum value of the slider
     */
    maxValue: number

    /**
     * - The minimum allowed value of the slider
     */
    minAllowedValue: number

    /**
     * - The minimum value of the slider
     */
    minValue: number

    /**
     * - <@readonly> The background sprite
     */
    progressSprite: cc.Sprite

    /**
     * - <@readonly> Brightness value of the picker
     */
    thumbSprite: number

    /**
     * - The value of the slider
     */
    value: number

    /**
     * Initializes a slider with a background sprite, a progress bar and a thumb
     * item.
     *
     * @param {cc.Sprite} backgroundSprite CCSprite, that is used as a background.
     * @param {cc.Sprite} progressSprite CCSprite, that is used as a progress bar.
     * @param {cc.Sprite} thumbSprite CCMenuItem, that is used as a thumb.
     */
    initWithSprites(backgroundSprite: cc.Sprite, progressSprite: cc.Sprite, thumbSprite: cc.Sprite): any

    /**
     * Returns the value for the given location.
     *
     * @param {} location
     */
    valueForLocation(location: any): any
  }
}

declare namespace cc {
  namespace ControlSlider {



    /**
     * Creates a slider with a given background sprite and a progress bar and a
     * thumb item.
     *
     * @param {} bgFile
     * @param {} progressFile
     * @param {} thumbFile
     */
    function create(bgFile: any, progressFile: any, thumbFile: any): any
  }
}

declare namespace cc {
  interface ControlStepper  {

    /**
     * ControlStepper: Stepper ui component.
     */
    constructor()

    /**
     * - <@readonly> Indicate whether the stepper value is continuous
     */
    continuous: boolean

    /**
     * - The maximum value of the stepper control
     */
    maxValue: number

    /**
     * - The label for minus button of the stepper control
     */
    minusLabel: cc.LabelTTF

    /**
     * - The sprite for minus button of the stepper control
     */
    minusSprite: cc.Sprite

    /**
     * - The minimum value of the stepper control
     */
    minValue: number

    /**
     * - The label for plus button of the stepper control
     */
    plusSLabel: cc.LabelTTF

    /**
     * - The sprite for plus button of the stepper control
     */
    plusSprite: cc.Sprite

    /**
     * - The interval value for each step of the stepper control
     */
    stepValue: number

    /**
     * - The value of the stepper control
     */
    value: number

    /**
     * - Indicate whether the stepper wraps
     */
    wraps: boolean

    /**
     * Stop the autorepeat.
     */
    stopAutorepeat(): any
  }
}

declare namespace cc {
  namespace ControlStepper {



    /**
     * Creates a cc.ControlStepper
     *
     * @param {cc.Sprite} minusSprite
     * @param {cc.Sprite} plusSprite
     *
     * @returns {ControlStepper}
     */
    function create(minusSprite: cc.Sprite, plusSprite: cc.Sprite): ControlStepper
  }
}

declare namespace cc {
  interface ControlSwitch  {

    /**
     * CCControlSwitch: Switch control ui component
     */
    constructor()


    /**
     * Creates a switch with a mask sprite, on/off sprites for on/off states, a thumb sprite and an on/off labels.
     *
     * @param {} maskSprite
     * @param {} onSprite
     * @param {} offSprite
     * @param {} thumbSprite
     * @param {} onLabel
     * @param {} offLabel
     */
    initWithMaskSprite(maskSprite: any, onSprite: any, offSprite: any, thumbSprite: any, onLabel: any, offLabel: any): any
  }
}

declare namespace cc {
  namespace ControlSwitch {



    /**
     * Creates a switch with a mask sprite, on/off sprites for on/off states and a thumb sprite.
     *
     * @param {} maskSprite
     * @param {} onSprite
     * @param {} offSprite
     * @param {} thumbSprite
     * @param {} onLabel
     * @param {} offLabel
     */
    function create(maskSprite: any, onSprite: any, offSprite: any, thumbSprite: any, onLabel: any, offLabel: any): any
  }
}

declare namespace cc {
  interface LayerColor  {

    /**
     * Constructor of cc.LayerColor
     *
     * @param {cc.Color} color
     * @param {Number} width
     * @param {Number} height
     */
    constructor(color: cc.Color, width: number, height: number)


    /**
     * change height in Points
     *
     * @param {Number} h height
     */
    changeHeight(h: number): any

    /**
     * Changes width in Points
     *
     * @param {Number} w width
     */
    changeWidth(w: number): any

    /**
     * Changes width and height
     *
     * @param {Number} w width
     * @param {Number} h height
     */
    changeWidthAndHeight(w: number, h: number): any

    /**
     * Returns the blend function
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
     *
     * @param {cc.Color} color
     * @param {Number} width
     * @param {Number} height
     *
     * @returns {Boolean}
     */
    init(color: cc.Color, width: number, height: number): boolean

    /**
     * Sets the blend func, you can pass either a cc.BlendFunc object or source and destination value separately
     *
     * @param {Number|cc.BlendFunc} src
     * @param {Number} dst
     */
    setBlendFunc(src: number | cc.BlendFunc, dst: number): any
  }
}

declare namespace cc {
  namespace LayerColor {



    /**
     * Creates a cc.Layer with color, width and height in Points
     *
     * @param {cc.Color} color
     * @param {Number|Null} width
     * @param {Number|Null} height
     *
     * @returns {cc.LayerColor} cc.LayerColor
     */
    function create(color: cc.Color, width: number | null, height: number | null): cc.LayerColor
  }
}

declare namespace cc {
  interface LayerGradient  {

    /**
     * Constructor of cc.LayerGradient
     *
     * @param {cc.Color} start
     * @param {cc.Color} end
     * @param {cc.Point} v
     * @param {Array|Null} stops
     */
    constructor(start: cc.Color, end: cc.Color, v: cc.Point, stops: any[] | null)

    /**
     * - Indicate whether or not the interpolation will be compressed
     */
    compressedInterpolation: number

    /**
     * - End color of the color gradient
     */
    endColor: cc.Color

    /**
     * - End opacity of the color gradient
     */
    endOpacity: number

    /**
     * - Start color of the color gradient
     */
    startColor: cc.Color

    /**
     * - Start opacity of the color gradient
     */
    startOpacity: number

    /**
     * - Direction vector of the color gradient
     */
    vector: number

    /**
     * Return an array of Object representing a colorStop for the gradient, if no stops was specified
     * start & endColor will be provided as default values
     *
     * @returns {Array}
     */
    getColorStops(): any[]

    /**
     * Returns the end color
     *
     * @returns {cc.Color}
     */
    getEndColor(): cc.Color

    /**
     * Returns the end gradient opacity
     *
     * @returns {Number}
     */
    getEndOpacity(): number

    /**
     * Returns the starting color
     *
     * @returns {cc.Color}
     */
    getStartColor(): cc.Color

    /**
     * Returns the starting gradient opacity
     *
     * @returns {Number}
     */
    getStartOpacity(): number

    /**
     * Returns the direction vector of the gradient
     *
     * @returns {cc.Point}
     */
    getVector(): cc.Point

    /**
     * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
     *
     * @param {cc.Color} start starting color
     * @param {cc.Color} end
     * @param {cc.Point|Null} v
     * @param {Array|Null} stops
     *
     * @returns {Boolean}
     */
    init(start: cc.Color, end: cc.Color, v: cc.Point | null, stops: any[] | null): boolean

    /**
     * Returns whether compressed interpolation is enabled
     *
     * @returns {Boolean}
     */
    isCompressedInterpolation(): boolean

    /**
     * Set the colorStops to create the gradient using multiple point & color
     *
     * @param {} colorStops
     */
    setColorStops(colorStops: any): any

    /**
     * Sets whether compressed interpolation is enabled
     *
     * @param {Boolean} compress
     */
    setCompressedInterpolation(compress: boolean): any

    /**
     * Sets the untransformed size of the LayerGradient.
     *
     * @param {cc.Size|Number} size The untransformed size of the LayerGradient or The untransformed size's width of the LayerGradient.
     * @param {Number} height The untransformed size's height of the LayerGradient.
     */
    setContentSize(size: cc.Size | number, height: number): any

    /**
     * Sets the end gradient color
     *
     * @param {cc.Color} color
     */
    setEndColor(color: cc.Color): any

    /**
     * Sets the end gradient opacity
     *
     * @param {Number} o
     */
    setEndOpacity(o: number): any

    /**
     * Sets the starting color
     *
     * @param {cc.Color} color
     */
    setStartColor(color: cc.Color): any

    /**
     * Sets starting gradient opacity
     *
     * @param {Number} o from 0 to 255, 0 is transparent
     */
    setStartOpacity(o: number): any

    /**
     * Sets the direction vector of the gradient
     *
     * @param {cc.Point} Var
     */
    setVector(Var: cc.Point): any
  }
}

declare namespace cc {
  namespace LayerGradient {



    /**
     * Creates a gradient layer
     *
     * @param {cc.Color} start starting color
     * @param {cc.Color} end ending color
     * @param {cc.Point|Null} v
     * @param {Array|NULL} stops
     *
     * @returns {cc.LayerGradient} cc.layerGradient
     */
    function create(start: cc.Color, end: cc.Color, v: cc.Point | null, stops: any[] | null): cc.LayerGradient
  }
}

declare namespace cc {
  interface LayerMultiplex  {

    /**
     * Constructor of cc.LayerMultiplex
     *
     * @param {Array} layers an array of cc.Layer
     */
    constructor(layers: any[])


    /**
     * Add a layer to the multiplex layers list
     *
     * @param {cc.Layer} layer
     */
    addLayer(layer: cc.Layer): any

    /**
     * Initialization of the layer multiplex, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer multiplex
     *
     * @param {Array} layers an array of cc.Layer
     *
     * @returns {Boolean}
     */
    initWithLayers(layers: any[]): boolean

    /**
     * Switches to a certain layer indexed by n.
     * The current (old) layer will be removed from it's parent with 'cleanup:YES'.
     *
     * @param {Number} n the layer index to switch to
     */
    switchTo(n: number): any

    /**
     * Release the current layer and switches to another layer indexed by n.
     * The current (old) layer will be removed from it's parent with 'cleanup:YES'.
     *
     * @param {Number} n the layer index to switch to
     */
    switchToAndReleaseMe(n: number): any
  }
}

declare namespace cc {
  namespace LayerMultiplex {



    /**
     * Creates a cc.LayerMultiplex with one or more layers using a variable argument list.
     *
     * @returns {cc.LayerMultiplex|Null} cc.LayerMultiplex
     */
    function create(): cc.LayerMultiplex | null
  }
}

declare namespace cc {
  interface Menu  {

    /**
     * Constructor of cc.Menu override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {...cc.MenuItem|null} menuItems
     */
    constructor(menuItems: cc.MenuItem[] | null)


    /**
     * add a child for cc.Menu
     *
     * @param {cc.Node} child
     * @param {Number|Null} zOrder zOrder for the child
     * @param {Number|Null} tag tag for the child
     */
    addChild(child: cc.Node, zOrder: number | null, tag: number | null): any

    /**
     * align items horizontally with default padding
     */
    alignItemsHorizontally(): any

    /**
     * align items horizontally with specified padding
     *
     * @param {Number} padding
     */
    alignItemsHorizontallyWithPadding(padding: number): any

    /**
     * align items in columns
     */
    alignItemsInColumns(): any

    /**
     * align menu items in rows
     *
     * @param {Number}
     */
    alignItemsInRows(): any

    /**
     * align items vertically with default padding
     */
    alignItemsVertically(): any

    /**
     * align items vertically with specified padding
     *
     * @param {Number} padding
     */
    alignItemsVerticallyWithPadding(padding: number): any

    /**
     * initializes a cc.Menu with a Array of cc.MenuItem objects
     *
     * @param {Array} arrayOfItems array Of cc.MenuItem Items
     *
     * @returns {Boolean}
     */
    initWithArray(arrayOfItems: any[]): boolean

    /**
     * initializes a cc.Menu with it's items
     *
     * @param {Array} args
     *
     * @returns {Boolean}
     */
    initWithItems(args: any[]): boolean

    /**
     * return whether or not the menu will receive events
     *
     * @returns {Boolean}
     */
    isEnabled(): boolean

    /**
     * only use for jsbinding
     *
     * @returns {boolean}
     */
    isOpacityModifyRGB(): boolean

    /**
     * Event callback that is invoked every time when CCMenu enters the 'stage'.
     * If the CCMenu enters the 'stage' with a transition, this event is called when the transition starts.
     * During onEnter you can't access a "sister/brother" node.
     * If you override onEnter, you must call its parent's onEnter function with this._super().
     */
    onEnter(): any

    /**
     * callback that is called every time the cc.Menu leaves the 'stage'.
     * If the cc.Menu leaves the 'stage' with a transition, this callback is called when the transition finishes.
     * During onExit you can't access a sibling node.
     * If you override onExit, you shall call its parent's onExit with this._super().
     */
    onExit(): any

    /**
     * remove a child from cc.Menu
     *
     * @param {cc.Node} child the child you want to remove
     * @param {boolean} cleanup whether to cleanup
     */
    removeChild(child: cc.Node, cleanup: boolean): any

    /**
     * set whether or not the menu will receive events
     *
     * @param {Boolean} enabled
     */
    setEnabled(enabled: boolean): any

    /**
     * only use for jsbinding
     *
     * @param {} value
     */
    setOpacityModifyRGB(value: any): any
  }
}

declare namespace cc {
  namespace Menu {



    /**
     * create a new menu
     *
     * @param {...cc.MenuItem|null} menuItems todo: need to use new
     *
     * @returns {cc.Menu}
     */
    function create(menuItems: cc.MenuItem[] | null): cc.Menu
  }
}

declare namespace cc {
  interface MenuPassive  {

    /**
     * MenuPassive: The menu passive ui component
     */
    constructor()


    /**
     * align items horizontally
     */
    alignItemsHorizontally(): any

    /**
     * align items horizontally with padding
     *
     * @param {} padding
     */
    alignItemsHorizontallyWithPadding(padding: any): any

    /**
     * align items in rows of columns
     *
     * @param {} columns
     */
    alignItemsInColumns(columns: any): any

    /**
     * align items in columns of rows
     *
     * @param {} rows
     */
    alignItemsInRows(rows: any): any

    /**
     * align items vertically
     */
    alignItemsVertically(): any

    /**
     * align items vertically with padding
     *
     * @param {} padding
     */
    alignItemsVerticallyWithPadding(padding: any): any

    /**
     * Color: conforms with CCRGBAProtocol protocol
     */
    getColor(): any

    /**
     * Opacity: conforms with CCRGBAProtocol protocol
     */
    getOpacity(): any

    /**
     * initializes a CCMenu with it's items
     *
     * @param {} item
     * @param {} args
     */
    initWithItems(item: any, args: any): any
  }
}

declare namespace cc {
  namespace MenuPassive {



    /**
     * creates an empty CCMenu
     *
     * @param {} item
     */
    function create(item: any): any

    /**
     * creates a CCMenu with it's item, then use addChild() to add
     * other items. It is used for script, it can't init with undetermined
     * number of variables.
     *
     * @param {} item
     */
    function createWithItem(item: any): any
  }
}

declare namespace cc {
  interface ScrollView  {

    /**
     *
     *
     * @param {} size
     * @param {} container
     *
     * @returns {ScrollView}
     */
    constructor(size: any, container: any)

    /**
     * - Indicate whether the scroll view is bounceable
     */
    bounceable: boolean

    /**
     * - Indicate whether the scroll view clips its children
     */
    clippingToBounds: boolean

    /**
     * - The inside container of the scroll view
     */
    container: cc.Layer

    /**
     * - The inside container of the scroll view
     */
    delegate: cc.ScrollViewDelegate

    /**
     * - The direction allowed to scroll: cc.SCROLLVIEW_DIRECTION_BOTH by default, or cc.SCROLLVIEW_DIRECTION_NONE | cc.SCROLLVIEW_DIRECTION_HORIZONTAL | cc.SCROLLVIEW_DIRECTION_VERTICAL
     */
    direction: number

    /**
     * - <@readonly> The current container's maximum offset
     */
    maxOffset: cc.Point

    /**
     * - <@readonly> The current container's minimum offset
     */
    minOffset: cc.Point

    /**
     * - The size of the scroll view
     */
    viewSize: cc.Size

    /**
     * direction allowed to scroll. CCScrollViewDirectionBoth by default.
     */
    getDirection(): any

    /**
     * size to clip. CCNode boundingBox uses contentSize directly.
     * It's semantically different what it actually means to common scroll views.
     * Hence, this scroll view will use a separate size property.
     */
    getViewSize(): any

    /**
     * initialized whether success or fail
     *
     * @param {cc.Size} size
     * @param {cc.Node} container
     *
     * @returns {Boolean}
     */
    initWithViewSize(size: cc.Size, container: cc.Node): boolean

    /**
     * Determines whether it clips its children or not.
     */
    isClippingToBounds(): any

    /**
     * Determines if a given node's bounding box is in visible bounds
     *
     * @param {cc.Node} node
     *
     * @returns {Boolean} YES if it is in visible bounds
     */
    isNodeVisible(node: cc.Node): boolean

    /**
     * Returns the current container's maximum offset. You may want this while you animate scrolling by yourself
     *
     * @returns {cc.Point} Returns the current container's maximum offset.
     */
    maxContainerOffset(): cc.Point

    /**
     * Returns the current container's minimum offset. You may want this while you animate scrolling by yourself
     *
     * @returns {cc.Point} Returns the current container's minimum offset.
     */
    minContainerOffset(): cc.Point

    /**
     * override functions
     *
     * @param {} touch
     * @param {} event
     */
    onTouchBegan(touch: any, event: any): any

    /**
     * Provided to make scroll view compatible with SWLayer's pause method
     *
     * @param {} sender
     */
    pause(sender: any): any

    /**
     * Provided to make scroll view compatible with SWLayer's resume method
     *
     * @param {} sender
     */
    resume(sender: any): any

    /**
     * Sets a new content offset. It ignores max/min offset. It just sets what's given. (just like UIKit's UIScrollView)
     *
     * @param {cc.Point} offset new offset
     * @param {Number} animated If true, the view will scroll to the new offset
     */
    setContentOffset(offset: cc.Point, animated: number): any

    /**
     * Sets a new content offset. It ignores max/min offset. It just sets what's given. (just like UIKit's UIScrollView)
     * You can override the animation duration with this method.
     *
     * @param {cc.Point} offset new offset
     * @param {Number} dt animation duration
     */
    setContentOffsetInDuration(offset: cc.Point, dt: number): any

    /**
     * Sets a new scale and does that for a predefined duration.
     *
     * @param {Number} scale a new scale vale
     * @param {Boolean} animated if YES, scaling is animated
     */
    setZoomScale(scale: number, animated: boolean): any

    /**
     * Sets a new scale for container in a given duration.
     *
     * @param {Number} s a new scale value
     * @param {Number} dt animation duration
     */
    setZoomScaleInDuration(s: number, dt: number): any
  }
}

declare namespace cc {
  namespace ScrollView {



    /**
     * Returns an autoreleased scroll view object.
     *
     * @param {cc.Size} size view size
     * @param {cc.Node} container parent object
     *
     * @returns {cc.ScrollView} scroll view object
     */
    function create(size: cc.Size, container: cc.Node): cc.ScrollView
  }
}

declare namespace cc {
  interface TableView  {

    /**
     * The
     *
     * @param {} dataSource
     * @param {} size
     * @param {} container
     */
    constructor(dataSource: any, size: any, container: any)

    /**
     * - The data source of the table view
     */
    dataSource: object

    /**
     * - The event delegate of the table view
     */
    delegate: object

    /**
     * - The index to determine how cell is ordered and filled in the view
     */
    verticalFillOrder: number

    /**
     * Returns an existing cell at a given index. Returns nil if a cell is nonexistent at the moment of query.
     *
     * @param {} idx index
     *
     * @returns {cc.TableViewCell} a cell at a given index
     */
    cellAtIndex(idx: any): cc.TableViewCell

    /**
     * Dequeues a free cell if available. nil if not.
     *
     * @returns {TableViewCell} free cell
     */
    dequeueCell(): TableViewCell

    /**
     * data source
     */
    getDataSource(): any

    /**
     * delegate
     */
    getDelegate(): any

    /**
     * Inserts a new cell at a given index
     *
     * @param {} idx location to insert
     */
    insertCellAtIndex(idx: any): any

    /**
     * reloads data from data source. the view will be refreshed.
     */
    reloadData(): any

    /**
     * Removes a cell at a given index
     *
     * @param {} idx index to find a cell
     */
    removeCellAtIndex(idx: any): any

    /**
     * determines how cell is ordered and filled in the view.
     *
     * @param {} fillOrder
     */
    setVerticalFillOrder(fillOrder: any): any

    /**
     * Updates the content of the cell at a given index.
     *
     * @param {} idx index to find a cell
     */
    updateCellAtIndex(idx: any): any
  }
}

declare namespace cc {
  namespace TableView {



    /**
     * An initialized table view object
     *
     * @param {cc.TableViewDataSource} dataSource data source;
     * @param {cc.Size} size view size
     * @param {cc.Node} container parent object for cells
     *
     * @returns {cc.TableView} table view
     */
    function create(dataSource: object, size: cc.Size, container: cc.Node): cc.TableView
  }
}

declare namespace cc {
  interface Spacer  {

    /**
     * The Spacer class
     */
    constructor()


  }
}

declare namespace cc {
  interface MenuItem  {

    /**
     * Constructor of cc.MenuItem
     *
     * @param {function|String} callback
     * @param {cc.Node} target
     */
    constructor(callback: Function | string, target: cc.Node)


    /**
     * call the selector with target
     */
    activate(): any

    /**
     * initializes a cc.MenuItem with callback
     *
     * @param {function|String} callback
     * @param {cc.Node} target
     *
     * @returns {Boolean}
     */
    initWithCallback(callback: Function | string, target: cc.Node): boolean

    /**
     * return whether MenuItem is Enabled
     *
     * @returns {Boolean}
     */
    isEnabled(): boolean

    /**
     * only use for jsbinding
     *
     * @returns {boolean}
     */
    isOpacityModifyRGB(): boolean

    /**
     * return whether MenuItem is selected
     *
     * @returns {Boolean}
     */
    isSelected(): boolean

    /**
     * return rect value of cc.MenuItem
     *
     * @returns {cc.Rect}
     */
    rect(): cc.Rect

    /**
     * set the cc.MenuItem selected same as setIsSelected(true)
     */
    selected(): any

    /**
     * set the callback to the menu item
     *
     * @param {function|String} callback
     * @param {cc.Node} target
     */
    setCallback(callback: Function | string, target: cc.Node): any

    /**
     * set enable value of MenuItem
     *
     * @param {Boolean} enable
     */
    setEnabled(enable: boolean): any

    /**
     * only use for jsbinding
     *
     * @param {} value
     */
    setOpacityModifyRGB(value: any): any

    /**
     * set the target/selector of the menu item
     *
     * @param {function|String} selector
     * @param {cc.Node} rec
     */
    setTarget(selector: Function | string, rec: cc.Node): any

    /**
     * set the cc.MenuItem unselected same as setIsSelected(false)
     */
    unselected(): any
  }
}

declare namespace cc {
  namespace MenuItem {



    /**
     * creates an empty menu item with target and callback
     * Not recommended to use the base class, should use more defined menu item classes
     *
     * @param {function|String} callback callback
     * @param {cc.Node} target
     *
     * @returns {cc.MenuItem}
     */
    function create(callback: Function | string, target: cc.Node): cc.MenuItem
  }
}

declare namespace cc {
  interface MenuItemLabel  {

    /**
     * Constructor of cc.MenuItemLabel
     *
     * @param {cc.Node} label
     * @param {function|String} selector
     * @param {cc.Node} target
     */
    constructor(label: cc.Node, selector: Function | string, target: cc.Node)

    /**
     * - Color of label when it's disabled
     */
    disabledColor: cc.Color

    /**
     * - Label of label item
     */
    label: cc.Node

    /**
     * - Content string of label item
     */
    string: string

    /**
     * activate the menu item
     */
    activate(): any

    /**
     * return the disable color for this cc.MenuItemLabel
     *
     * @returns {cc.Color}
     */
    getDisabledColor(): cc.Color

    /**
     * return label of cc.MenuItemLabel
     *
     * @returns {cc.Node}
     */
    getLabel(): cc.Node

    /**
     * return the string of cc.MenuItemLabel
     *
     * @returns {String}
     */
    getString(): string

    /**
     * initializes a cc.MenuItemLabel with a label
     *
     * @param {cc.Node} label
     * @param {function|String} selector
     * @param {cc.Node} target
     *
     * @returns {Boolean}
     */
    initWithLabel(label: cc.Node, selector: Function | string, target: cc.Node): boolean

    /**
     * menu item is selected (runs callback)
     */
    selected(): any

    /**
     * set the disable color for this cc.MenuItemLabel
     *
     * @param {cc.Color} color
     */
    setDisabledColor(color: cc.Color): any

    /**
     * set enable value to cc.MenuItemLabel
     *
     * @param {Boolean} enabled
     */
    setEnabled(enabled: boolean): any

    /**
     * set a label for cc.MenuItemLabel
     *
     * @param {cc.Node} label
     */
    setLabel(label: cc.Node): any

    /**
     * set the string for cc.MenuItemLabel
     *
     * @param {String} label
     */
    setString(label: string): any

    /**
     * menu item goes back to unselected state
     */
    unselected(): any
  }
}

declare namespace cc {
  namespace MenuItemLabel {



    /**
     *
     *
     * @param {cc.Node} label
     * @param {function|String|Null} selector
     * @param {cc.Node|Null} target
     *
     * @returns {cc.MenuItemLabel}
     */
    function create(label: cc.Node, selector: Function | string | null, target: cc.Node | null): cc.MenuItemLabel
  }
}

declare namespace cc {
  interface MenuItemAtlasFont  {

    /**
     * the contructor of cc.MenuItemAtlasFont
     *
     * @param {String} value
     * @param {String} charMapFile
     * @param {Number} itemWidth
     * @param {Number} itemHeight
     * @param {String} startCharMap a single character
     * @param {function|String|Null} callback
     * @param {cc.Node|Null} target
     */
    constructor(value: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string, callback: Function | string | null, target: cc.Node | null)


    /**
     * initializes a cc.MenuItemAtlasFont with string
     *
     * @param {String} value
     * @param {String} charMapFile
     * @param {Number} itemWidth
     * @param {Number} itemHeight
     * @param {String} startCharMap a single character
     * @param {function|String|Null} callback
     * @param {cc.Node|Null} target
     *
     * @returns {Boolean}
     */
    initWithString(value: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string, callback: Function | string | null, target: cc.Node | null): boolean
  }
}

declare namespace cc {
  namespace MenuItemAtlasFont {



    /**
     * create menu item from string with font
     *
     * @param {String} value the text to display
     * @param {String} charMapFile the character map file
     * @param {Number} itemWidth
     * @param {Number} itemHeight
     * @param {String} startCharMap a single character
     * @param {function|String|Null} callback
     * @param {cc.Node|Null} target
     *
     * @returns {cc.MenuItemAtlasFont}
     */
    function create(value: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string, callback: Function | string | null, target: cc.Node | null): cc.MenuItemAtlasFont
  }
}

declare namespace cc {
  interface MenuItemFont  {

    /**
     * Constructor of cc.MenuItemFont
     *
     * @param {String} value text for the menu item
     * @param {function|String} callback
     * @param {cc.Node} target
     */
    constructor(value: string, callback: Function | string, target: cc.Node)

    /**
     * - Font name of font item
     */
    fontName: string

    /**
     * - Font size of font item
     */
    fontSize: number

    /**
     * return the font name for cc.MenuItemFont
     *
     * @returns {String}
     */
    getFontName(): string

    /**
     * return the font size of cc.MenuItemFont
     *
     * @returns {Number}
     */
    getFontSize(): number

    /**
     * initializes cc.MenuItemFont with string
     *
     * @param {String} value text for the menu item
     * @param {function|String} callback
     * @param {cc.Node} target
     *
     * @returns {Boolean}
     */
    initWithString(value: string, callback: Function | string, target: cc.Node): boolean

    /**
     * set the font name for cc.MenuItemFont
     *
     * @param {String} name
     */
    setFontName(name: string): any

    /**
     * set the font size for cc.MenuItemFont
     *
     * @param {Number} s
     */
    setFontSize(s: number): any
  }
}

declare namespace cc {
  namespace MenuItemFont {



    /**
     * create a menu item from string
     *
     * @param {String} value the text to display
     * @param {String|function|Null} callback the callback to run, either in function name or pass in the actual function
     * @param {cc.Node|Null} target the target to run callback
     *
     * @returns {cc.MenuItemFont}
     */
    function create(value: string, callback: string | Function | null, target: cc.Node | null): cc.MenuItemFont

    /**
     * a shared function to get the font name for menuitem font
     *
     * @returns {String}
     */
    function fontName(): string

    /**
     * a shared function to get the font size for menuitem font
     *
     * @returns {Number}
     */
    function fontSize(): number

    /**
     * a shared function to set the fontsize for menuitem font
     *
     * @param {} name
     */
    function setFontName(name: any): any

    /**
     * a shared function to set the fontSize for menuitem font
     *
     * @param {Number} fontSize
     */
    function setFontSize(fontSize: number): any
  }
}

declare namespace cc {
  interface MenuItemSprite  {

    /**
     * Constructor of cc.MenuItemSprite
     *
     * @param {Image|Null} normalSprite normal state image
     * @param {Image|Null} selectedSprite selected state image
     * @param {Image|cc.Node|Null} three disabled state image OR target node
     * @param {String|function|cc.Node|Null} four callback function name in string or actual function, OR target Node
     * @param {String|function|Null} five callback function name in string or actual function
     */
    constructor(normalSprite: object | null, selectedSprite: object | null, three: object | cc.Node | null, four: string | Function | cc.Node | null, five: string | Function | null)

    /**
     * - Sprite in disabled state
     */
    disabledImage: cc.Sprite

    /**
     * - Sprite in normal state
     */
    normalImage: cc.Sprite

    /**
     * - Sprite in selected state
     */
    selectedImage: cc.Sprite

    /**
     * return the disabled status of cc.MenuItemSprite
     *
     * @returns {cc.Sprite}
     */
    getDisabledImage(): cc.Sprite

    /**
     * return the normal status image(cc.Sprite)
     *
     * @returns {cc.Sprite}
     */
    getNormalImage(): cc.Sprite

    /**
     * return the selected status image(cc.Sprite) of cc.MenuItemSprite
     *
     * @returns {cc.Sprite}
     */
    getSelectedImage(): cc.Sprite

    /**
     * initializes cc.MenuItemSprite with a cc.Sprite
     *
     * @param {cc.Node} normalSprite
     * @param {cc.Node} selectedSprite
     * @param {cc.Node} disabledSprite
     * @param {function|String} callback
     * @param {cc.Node} target
     *
     * @returns {Boolean}
     */
    initWithNormalSprite(normalSprite: cc.Node, selectedSprite: cc.Node, disabledSprite: cc.Node, callback: Function | string, target: cc.Node): boolean

    /**
     * menu item is selected (runs callback)
     */
    selected(): any

    /**
     * set the disabled status image(cc.Sprite)
     *
     * @param {cc.Sprite} disabledImage
     */
    setDisabledImage(disabledImage: cc.Sprite): any

    /**
     * set cc.MenuItemSprite enable to receive the touch event
     *
     * @param {Boolean} bEnabled
     */
    setEnabled(bEnabled: boolean): any

    /**
     * set the normal status image(cc.Sprite)
     *
     * @param {cc.Sprite} normalImage
     */
    setNormalImage(normalImage: cc.Sprite): any

    /**
     * set the selected status image(cc.Sprite)
     *
     * @param {cc.Sprite} selectedImage
     */
    setSelectedImage(selectedImage: cc.Sprite): any

    /**
     * menu item goes back to unselected state
     */
    unselected(): any
  }
}

declare namespace cc {
  namespace MenuItemSprite {



    /**
     * create a menu item from sprite
     *
     * @param {Image} normalSprite normal state image
     * @param {Image|Null} selectedSprite selected state image
     * @param {Image|cc.Node|Null} three disabled state image OR target node
     * @param {String|function|cc.Node|Null} four callback function name in string or actual function, OR target Node
     * @param {String|function|Null} five callback function name in string or actual function
     *
     * @returns {cc.MenuItemSprite}
     */
    function create(normalSprite: object, selectedSprite: object | null, three: object | cc.Node | null, four: string | Function | cc.Node | null, five: string | Function | null): cc.MenuItemSprite
  }
}

declare namespace cc {
  interface MenuItemImage  {

    /**
     * Constructor of cc.MenuItemImage
     *
     * @param {string|null} normalImage
     * @param {string|null} selectedImage
     * @param {string|null} disabledImage
     * @param {function|string|null} callback
     * @param {cc.Node|null} target
     */
    constructor(normalImage: string | null, selectedImage: string | null, disabledImage: string | null, callback: Function | string | null, target: cc.Node | null)


    /**
     * initializes a cc.MenuItemImage
     *
     * @param {string|null} normalImage
     * @param {string|null} selectedImage
     * @param {string|null} disabledImage
     * @param {function|string|null} callback
     * @param {cc.Node|null} target
     *
     * @returns {boolean}
     */
    initWithNormalImage(normalImage: string | null, selectedImage: string | null, disabledImage: string | null, callback: Function | string | null, target: cc.Node | null): boolean

    /**
     * sets the sprite frame for the disabled image
     *
     * @param {cc.SpriteFrame} frame
     */
    setDisabledSpriteFrame(frame: cc.SpriteFrame): any

    /**
     * sets the sprite frame for the normal image
     *
     * @param {cc.SpriteFrame} frame
     */
    setNormalSpriteFrame(frame: cc.SpriteFrame): any

    /**
     * sets the sprite frame for the selected image
     *
     * @param {cc.SpriteFrame} frame
     */
    setSelectedSpriteFrame(frame: cc.SpriteFrame): any
  }
}

declare namespace cc {
  namespace MenuItemImage {



    /**
     * creates a new menu item image
     *
     * @param {String} normalImage file name for normal state
     * @param {String} selectedImage image for selected state
     * @param {String|cc.Node} three Disabled image OR callback function
     * @param {String|function|Null} four callback function, either name in string or pass the whole function OR the target
     * @param {cc.Node|String|function|Null} five cc.Node target to run callback when clicked
     *
     * @returns {cc.MenuItemImage}
     */
    function create(normalImage: string, selectedImage: string, three: string | cc.Node, four: string | Function | null, five: cc.Node | string | Function | null): cc.MenuItemImage
  }
}

declare namespace cc {
  interface MenuItemToggle  {

    /**
     * Constructor of cc.MenuItemToggle
     */
    constructor()

    /**
     * - Index of selected sub item
     */
    selectedIndex: number

    /**
     * - Sub items
     */
    subItems: any[]

    /**
     * activate the menu item
     */
    activate(): any

    /**
     * add the subitem for cc.MenuItemToggle
     *
     * @param {cc.MenuItem} item
     */
    addSubItem(item: cc.MenuItem): any

    /**
     * return the color of cc.MenuItemToggle
     *
     * @returns {cc.Color}
     */
    getColor(): cc.Color

    /**
     * return the opacity of cc.MenuItemToggle
     *
     * @returns {Number}
     */
    getOpacity(): number

    /**
     * return the index of selected
     *
     * @returns {Number}
     */
    getSelectedIndex(): number

    /**
     * returns the selected item.
     *
     * @returns {cc.MenuItem}
     */
    getSelectedItem(): cc.MenuItem

    /**
     * similar to get children,return the sumItem array.
     *
     * @returns {Array}
     */
    getSubItems(): any[]

    /**
     * initializes a cc.MenuItemToggle with items
     *
     * @param {...cc.MenuItem} array the rest in the array are cc.MenuItems
     * @param {function|String} secondTolast the second item in the args array is the callback
     * @param {cc.Node} last the first item in the args array is a target
     *
     * @returns {Boolean}
     */
    initWithItems(array: cc.MenuItem[], secondTolast: Function | string, last: cc.Node): boolean

    /**
     * *
     * Event callback that is invoked every time when cc.MenuItemToggle enters the 'stage'.
     * If the cc.MenuItemToggle enters the 'stage' with a transition, this event is called when the transition starts.
     * During onEnter you can't access a "sister/brother" node.
     * If you override onEnter, you must call its parent's onEnter function with this._super().
     */
    onEnter(): any

    /**
     * menu item is selected (runs callback)
     */
    selected(): any

    /**
     * returns the selected item (deprecated in -x, please use getSelectedItem instead.)
     *
     * @returns {cc.MenuItem}
     */
    selectedItem(): cc.MenuItem

    /**
     * set the color for cc.MenuItemToggle
     *
     * @param {cc.Color} Color
     */
    setColor(Color: cc.Color): any

    /**
     * set the enable status for cc.MenuItemToggle
     *
     * @param {Boolean} enabled
     */
    setEnabled(enabled: boolean): any

    /**
     * set the opacity for cc.MenuItemToggle
     *
     * @param {Number} opacity
     */
    setOpacity(opacity: number): any

    /**
     * set the seleceted index for cc.MenuItemToggle
     *
     * @param {Number} SelectedIndex
     */
    setSelectedIndex(SelectedIndex: number): any

    /**
     * set the subitem for cc.MenuItemToggle
     *
     * @param {cc.MenuItem} subItems
     */
    setSubItems(subItems: cc.MenuItem): any

    /**
     * menu item goes back to unselected state
     */
    unselected(): any
  }
}

declare namespace cc {
  namespace MenuItemToggle {



    /**
     * create a simple container class that "toggles" it's inner items
     * The inner items can be any MenuItem
     *
     * @returns {cc.MenuItemToggle}
     */
    function create(): cc.MenuItemToggle
  }
}

declare namespace cc {
  interface MotionStreak  {

    /**
     * creates and initializes a motion streak with fade in seconds, minimum segments, stroke's width, color, texture filename or texture
     * Constructor of cc.MotionStreak
     *
     * @param {Number} fade time to fade
     * @param {Number} minSeg minimum segment size
     * @param {Number} stroke stroke's width
     * @param {Number} color
     * @param {string|cc.Texture2D} texture texture filename or texture
     */
    constructor(fade: number, minSeg: number, stroke: number, color: number, texture: string | cc.Texture2D)

    /**
     * - Indicate whether use fast mode.
     */
    fastMode: boolean

    /**
     * - Indicate whether starting position initialized.
     */
    startingPositionInitialized: boolean

    /**
     * - Texture used for the motion streak.
     */
    texture: cc.Texture2D

    /**
     * Gets the blend func.
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * Gets opacity.
     *
     * @returns {number}
     */
    getOpacity(): number

    /**
     * Gets the position.x
     *
     * @returns {Number}
     */
    getPositionX(): number

    /**
     * Gets the position.y
     *
     * @returns {Number}
     */
    getPositionY(): number

    /**
     * Get stroke.
     *
     * @returns {Number} stroke
     */
    getStroke(): number

    /**
     * Gets the texture.
     *
     * @returns {cc.Texture2D}
     */
    getTexture(): cc.Texture2D

    /**
     * initializes a motion streak with fade in seconds, minimum segments, stroke's width, color and texture filename or texture
     *
     * @param {Number} fade time to fade
     * @param {Number} minSeg minimum segment size
     * @param {Number} stroke stroke's width
     * @param {Number} color
     * @param {string|cc.Texture2D} texture texture filename or texture
     *
     * @returns {Boolean}
     */
    initWithFade(fade: number, minSeg: number, stroke: number, color: number, texture: string | cc.Texture2D): boolean

    /**
     * Checking fast mode.
     *
     * @returns {boolean}
     */
    isFastMode(): boolean

    /**
     * Checking OpacityModifyRGB.
     *
     * @returns {boolean}
     */
    isOpacityModifyRGB(): boolean

    /**
     * Checking starting position initialized.
     *
     * @returns {boolean}
     */
    isStartingPositionInitialized(): boolean

    /**
     * Remove all living segments of the ribbon
     */
    reset(): any

    /**
     * Set the blend func.
     *
     * @param {Number} src
     * @param {Number} dst
     */
    setBlendFunc(src: number, dst: number): any

    /**
     * set fast mode
     *
     * @param {Boolean} fastMode
     */
    setFastMode(fastMode: boolean): any

    /**
     * Set opacity.
     *
     * @param {} opacity
     */
    setOpacity(opacity: any): any

    /**
     * set opacity modify RGB.
     *
     * @param {} value
     */
    setOpacityModifyRGB(value: any): any

    /**
     * Set the position.
     *
     * @param {cc.Point|Number} position
     * @param {Number} yValue If not exists, the first parameter must be cc.Point.
     */
    setPosition(position: cc.Point | number, yValue: number): any

    /**
     * Set the position.x
     *
     * @param {Number} x
     */
    setPositionX(x: number): any

    /**
     * Set the position.y
     *
     * @param {Number} y
     */
    setPositionY(y: number): any

    /**
     * Set Starting Position Initialized.
     *
     * @param {Boolean} startingPositionInitialized
     */
    setStartingPositionInitialized(startingPositionInitialized: boolean): any

    /**
     * Set stroke.
     *
     * @param {Number} stroke
     */
    setStroke(stroke: number): any

    /**
     * Set the texture.
     *
     * @param {cc.Texture2D} texture
     */
    setTexture(texture: cc.Texture2D): any

    /**
     * color used for the tint
     *
     * @param {cc.Color} color
     */
    tintWithColor(color: cc.Color): any

    /**
     * schedules the "update" method.
     * It will use the order number 0. This method will be called every frame.
     * Scheduled methods with a lower order value will be called before the ones that have a higher order value.
     * Only one "update" method could be scheduled per node.
     *
     * @param {Number} delta
     */
    update(delta: number): any
  }
}

declare namespace cc {
  namespace MotionStreak {



    /**
     * Please use new cc.MotionStreak instead.
     * Creates and initializes a motion streak with fade in seconds, minimum segments, stroke's width, color, texture filename or texture
     *
     * @param {Number} fade time to fade
     * @param {Number} minSeg minimum segment size
     * @param {Number} stroke stroke's width
     * @param {Number} color
     * @param {string|cc.Texture2D} texture texture filename or texture
     *
     * @returns {cc.MotionStreak}
     */
    function create(fade: number, minSeg: number, stroke: number, color: number, texture: string | cc.Texture2D): cc.MotionStreak
  }
}

declare namespace cc {
  interface ParallaxNode  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()

    /**
     * - Parallax nodes array
     */
    parallaxArray: any[]

    /**
     * Adds a child to the container with a z-order, a parallax ratio and a position offset
     * It returns self, so you can chain several addChilds.
     *
     * @param {cc.Node} child
     * @param {Number} z
     * @param {cc.Point} ratio
     * @param {cc.Point} offset
     */
    addChild(child: cc.Node, z: number, ratio: cc.Point, offset: cc.Point): any

    /**
     * Gets the parallax array.
     *
     * @returns {Array}
     */
    getParallaxArray(): any[]

    /**
     * Remove all children with cleanup
     *
     * @param {Boolean} cleanup
     */
    removeAllChildren(cleanup: boolean): any

    /**
     * Remove Child
     *
     * @param {cc.Node} child
     * @param {Boolean} cleanup
     */
    removeChild(child: cc.Node, cleanup: boolean): any

    /**
     * Set parallax array.
     *
     * @param {Array} value
     */
    setParallaxArray(value: any[]): any
  }
}

declare namespace cc {
  namespace ParallaxNode {



    /**
     * Create new parallax node.
     *
     * @returns {cc.ParallaxNode}
     */
    function create(): cc.ParallaxNode
  }
}

declare namespace cc {
  interface ParticleSystem  {

    /**
     * return the string found by key in dict.
     * This plist files can be create manually or with Particle Designer:
     * http://particledesigner.71squared.com/Constructor of cc.ParticleSystem
     *
     * @param {String|Number} plistFile
     */
    constructor(plistFile: string | number)

    /**
     * - <@readonly> Indicate whether the particle system is activated.
     */
    active: boolean

    /**
     * - Angle of each particle setter.
     */
    angle: number

    /**
     * - Variation of angle of each particle setter.
     */
    angleVar: number

    /**
     * - Index of system in batch node array.
     */
    atlasIndex: number

    /**
     * - Indicate whether the node will be auto-removed when it has no particles left.
     */
    autoRemoveOnFinish: boolean

    /**
     * - Weak reference to the sprite batch node.
     */
    batchNode: cc.SpriteBatchNode

    /**
     * - How many seconds the emitter wil run. -1 means 'forever'
     */
    duration: number

    /**
     * - Emission rate of the particles.
     */
    emissionRate: number

    /**
     * - Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.
     */
    emitterMode: number

    /**
     * - Ending color of each particle.
     */
    endColor: cc.Color

    /**
     * - Variation of the end color.
     */
    endColorVar: cc.Color

    /**
     * - Ending radius of the particles. Only available in 'Radius' mode.
     */
    endRadius: number

    /**
     * - Variation of the ending radius.
     */
    endRadiusVar: number

    /**
     * - End size in pixels of each particle.
     */
    endSize: number

    /**
     * - Variation of end size in pixels.
     */
    endSizeVar: number

    /**
     * - End angle of each particle.
     */
    endSpin: number

    /**
     * - Variation of end angle.
     */
    endSpinVar: number

    /**
     * - Gravity of the emitter.
     */
    gravity: cc.Point

    /**
     * - Life of each particle setter.
     */
    life: number

    /**
     * - Variation of life.
     */
    lifeVar: number

    /**
     * - Indicate whether the alpha value modify color.
     */
    opacityModifyRGB: boolean

    /**
     * - Current quantity of particles that are being simulated.
     */
    particleCount: number

    /**
     * - Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.
     */
    positionType: number

    /**
     * - Variation of source position.
     */
    posVar: cc.Point

    /**
     * - Number of degress to rotate a particle around the source pos per second. Only available in 'Radius' mode.
     */
    rotatePerS: number

    /**
     * - Variation of the degress to rotate a particle around the source pos per second.
     */
    rotatePerSVar: number

    /**
     * - Indicate whether the rotation of each particle equals to its direction. Only available in 'Gravity' mode.
     */
    rotationIsDir: boolean

    /**
     * - ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.
     */
    shapeType: number

    /**
     * - Source position of the emitter.
     */
    sourcePos: cc.Point

    /**
     * - Speed of the emitter.
     */
    speed: cc.Point

    /**
     * - Variation of the speed.
     */
    speedVar: cc.Point

    /**
     * - Start color of each particle.
     */
    startColor: cc.Color

    /**
     * - Variation of the start color.
     */
    startColorVar: cc.Color

    /**
     * - Starting radius of the particles. Only available in 'Radius' mode.
     */
    startRadius: number

    /**
     * - Variation of the starting radius.
     */
    startRadiusVar: number

    /**
     * - Start size in pixels of each particle.
     */
    startSize: number

    /**
     * - Variation of start size in pixels.
     */
    startSizeVar: number

    /**
     * - Start angle of each particle.
     */
    startSpin: number

    /**
     * - Variation of start angle.
     */
    startSpinVar: number

    /**
     * - Tangential acceleration of each particle. Only available in 'Gravity' mode.
     */
    tangentialAccel: number

    /**
     * - Variation of the tangential acceleration.
     */
    tangentialAccelVar: number

    /**
     * - Texture of Particle System.
     */
    texture: cc.Texture2D | HTMLImageElement | HTMLCanvasElement

    /**
     * - Maximum particles of the system.
     */
    totalParticles: number

    /**
     * Add a particle to the emitter
     *
     * @returns {Boolean}
     */
    addParticle(): boolean

    /**
     * to copy object with deep copy.
     * returns a clone of action.
     *
     * @returns {cc.ParticleSystem}
     */
    clone(): cc.ParticleSystem

    /**
     * Unschedules the "update" method.
     */
    destroyParticleSystem(): any

    /**
     * Return angle of each particle
     *
     * @returns {Number}
     */
    getAngle(): number

    /**
     * Return angle variance of each particle
     *
     * @returns {Number}
     */
    getAngleVar(): number

    /**
     * return index of system in batch node array
     *
     * @returns {Number}
     */
    getAtlasIndex(): number

    /**
     * return weak reference to the cc.SpriteBatchNode that renders the cc.Sprite
     *
     * @returns {cc.ParticleBatchNode}
     */
    getBatchNode(): cc.ParticleBatchNode

    /**
     * get BlendFunc of Particle System
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * return bounding box of particle system in world space
     *
     * @returns {cc.Rect}
     */
    getBoundingBoxToWorld(): cc.Rect

    /**
     * Return DrawMode of ParticleSystem (Canvas Mode only)
     *
     * @returns {Number}
     */
    getDrawMode(): number

    /**
     * How many seconds the emitter wil run. -1 means 'forever'
     *
     * @returns {Number}
     */
    getDuration(): number

    /**
     * get emission rate of the particles
     *
     * @returns {Number}
     */
    getEmissionRate(): number

    /**
     * return kind of emitter modes
     *
     * @returns {Number}
     */
    getEmitterMode(): number

    /**
     * get end color and end color variation of each particle
     *
     * @returns {cc.Color}
     */
    getEndColor(): cc.Color

    /**
     * get end color variance of each particle
     *
     * @returns {cc.Color}
     */
    getEndColorVar(): cc.Color

    /**
     * Return ending radius of the particles. Only available in 'Radius' mode.
     *
     * @returns {Number}
     */
    getEndRadius(): number

    /**
     * Return ending radius variance of the particles. Only available in 'Radius' mode.
     *
     * @returns {Number}
     */
    getEndRadiusVar(): number

    /**
     * get end size in pixels of each particle
     *
     * @returns {Number}
     */
    getEndSize(): number

    /**
     * get end size variance in pixels of each particle
     *
     * @returns {Number}
     */
    getEndSizeVar(): number

    /**
     * get end angle of each particle
     *
     * @returns {Number}
     */
    getEndSpin(): number

    /**
     * get end angle variance of each particle
     *
     * @returns {Number}
     */
    getEndSpinVar(): number

    /**
     * Return Gravity of emitter
     *
     * @returns {cc.Point}
     */
    getGravity(): cc.Point

    /**
     * Return life of each particle
     *
     * @returns {Number}
     */
    getLife(): number

    /**
     * Return life variance of each particle
     *
     * @returns {Number}
     */
    getLifeVar(): number

    /**
     * Quantity of particles that are being simulated at the moment
     *
     * @returns {Number}
     */
    getParticleCount(): number

    /**
     * get particles movement type: Free or Grouped
     *
     * @returns {Number}
     */
    getPositionType(): number

    /**
     * Return Position variance of the emitter
     *
     * @returns {cc.Point | Object}
     */
    getPosVar(): cc.Point | object

    /**
     * Return radial acceleration of each particle. Only available in 'Gravity' mode.
     *
     * @returns {Number}
     */
    getRadialAccel(): number

    /**
     * Return radial acceleration variance of each particle. Only available in 'Gravity' mode.
     *
     * @returns {Number}
     */
    getRadialAccelVar(): number

    /**
     * get Number of degress to rotate a particle around the source pos per second. Only available in 'Radius' mode.
     *
     * @returns {Number}
     */
    getRotatePerSecond(): number

    /**
     * Return Variance in degrees for rotatePerSecond. Only available in 'Radius' mode.
     *
     * @returns {Number}
     */
    getRotatePerSecondVar(): number

    /**
     * get the rotation of each particle to its direction Only available in 'Gravity' mode.
     *
     * @returns {boolean}
     */
    getRotationIsDir(): boolean

    /**
     * Return ShapeType of ParticleSystem (Canvas Mode only)
     *
     * @returns {Number}
     */
    getShapeType(): number

    /**
     * Return sourcePosition of the emitter
     *
     * @returns {cc.Point | Object}
     */
    getSourcePosition(): cc.Point | object

    /**
     * Return Speed of each particle
     *
     * @returns {Number}
     */
    getSpeed(): number

    /**
     * return speed variance of each particle. Only available in 'Gravity' mode.
     *
     * @returns {Number}
     */
    getSpeedVar(): number

    /**
     * set start color of each particle
     *
     * @returns {cc.Color}
     */
    getStartColor(): cc.Color

    /**
     * get start color variance of each particle
     *
     * @returns {cc.Color}
     */
    getStartColorVar(): cc.Color

    /**
     * Return starting radius of the particles. Only available in 'Radius' mode.
     *
     * @returns {Number}
     */
    getStartRadius(): number

    /**
     * Return starting radius variance of the particles. Only available in 'Radius' mode.
     *
     * @returns {Number}
     */
    getStartRadiusVar(): number

    /**
     * get start size in pixels of each particle
     *
     * @returns {Number}
     */
    getStartSize(): number

    /**
     * get size variance in pixels of each particle
     *
     * @returns {Number}
     */
    getStartSizeVar(): number

    /**
     * get initial angle of each particle
     *
     * @returns {Number}
     */
    getStartSpin(): number

    /**
     * get initial angle variance of each particle
     *
     * @returns {Number}
     */
    getStartSpinVar(): number

    /**
     * Return tangential acceleration of each particle. Only available in 'Gravity' mode.
     *
     * @returns {Number}
     */
    getTangentialAccel(): number

    /**
     * Return tangential acceleration variance of each particle. Only available in 'Gravity' mode.
     *
     * @returns {Number}
     */
    getTangentialAccelVar(): number

    /**
     * get Texture of Particle System
     *
     * @returns {cc.Texture2D}
     */
    getTexture(): cc.Texture2D

    /**
     * get maximum particles of the system
     *
     * @returns {Number}
     */
    getTotalParticles(): number

    /**
     * This is a hack function for performance, it's only available on Canvas mode.
     * It's very expensive to change color on Canvas mode, so if set it to true, particle system will ignore the changing color operation.
     *
     * @param {boolean} ignore
     */
    ignoreColor(ignore: boolean): any

    /**
     * initializes a cc.ParticleSystem
     */
    init(): any

    /**
     * Initializes a particle
     *
     * @param {cc.Particle} particle
     */
    initParticle(particle: cc.Particle): any

    /**
     * initializes the texture with a rectangle measured Points
     * pointRect should be in Texture coordinates, not pixel coordinates
     *
     * @param {cc.Rect} pointRect
     */
    initTexCoordsWithRect(pointRect: cc.Rect): any

    /**
     * initializes a particle system from a NSDictionary and the path from where to load the png
     *
     * @param {object} dictionary
     * @param {String} dirname
     *
     * @returns {Boolean}
     */
    initWithDictionary(dictionary: object, dirname: string): boolean

    /**
     * initializes a CCParticleSystem from a plist file.
     * This plist files can be creted manually or with Particle Designer:
     * http://particledesigner.71squared.com/
     *
     * @param {String} plistFile
     *
     * @returns {boolean}
     */
    initWithFile(plistFile: string): boolean

    /**
     * Initializes a system with a fixed number of particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean

    /**
     * Return ParticleSystem is active
     *
     * @returns {Boolean}
     */
    isActive(): boolean

    /**
     * return whether or not the node will be auto-removed when it has no particles left.
     * By default it is false.
     *
     * @returns {Boolean}
     */
    isAutoRemoveOnFinish(): boolean

    /**
     * whether or not the particles are using blend additive.
     * If enabled, the following blending function will be used.
     *
     * @returns {Boolean}
     */
    isBlendAdditive(): boolean

    /**
     * whether or not the system is full
     *
     * @returns {Boolean}
     */
    isFull(): boolean

    /**
     * does the alpha value modify color getter
     *
     * @returns {Boolean}
     */
    isOpacityModifyRGB(): boolean

    /**
     * listen the event that coming to foreground on Android (An empty function for native)
     *
     * @param {cc.Class} obj
     */
    listenBackToForeground(obj: cc.Class): any

    /**
     * should be overridden by subclasses
     */
    postStep(): any

    /**
     * Kill all living particles.
     */
    resetSystem(): any

    /**
     * angle of each particle setter
     *
     * @param {Number} angle
     */
    setAngle(angle: number): any

    /**
     * angle variance of each particle setter
     *
     * @param {} angleVar
     */
    setAngleVar(angleVar: any): any

    /**
     * set index of system in batch node array
     *
     * @param {Number} atlasIndex
     */
    setAtlasIndex(atlasIndex: number): any

    /**
     * set whether or not the node will be auto-removed when it has no particles left.
     * By default it is false.
     *
     * @param {Boolean} isAutoRemoveOnFinish
     */
    setAutoRemoveOnFinish(isAutoRemoveOnFinish: boolean): any

    /**
     * set weak reference to the cc.SpriteBatchNode that renders the cc.Sprite
     *
     * @param {cc.ParticleBatchNode} batchNode
     */
    setBatchNode(batchNode: cc.ParticleBatchNode): any

    /**
     * whether or not the particles are using blend additive.
     * If enabled, the following blending function will be used.
     *
     * @param {Boolean} isBlendAdditive
     */
    setBlendAdditive(isBlendAdditive: boolean): any

    /**
     * set BlendFunc of Particle System
     *
     * @param {Number} src
     * @param {Number} dst
     */
    setBlendFunc(src: number, dst: number): any

    /**
     * Sets a new CCSpriteFrame as particle.
     * WARNING: this method is experimental. Use setTextureWithRect instead.
     *
     * @param {cc.SpriteFrame} spriteFrame
     */
    setDisplayFrame(spriteFrame: cc.SpriteFrame): any

    /**
     * DrawMode of ParticleSystem setter (Canvas Mode only)
     *
     * @param {Number} drawMode
     */
    setDrawMode(drawMode: number): any

    /**
     * set run seconds of the emitter
     *
     * @param {Number} duration
     */
    setDuration(duration: number): any

    /**
     * set emission rate of the particles
     *
     * @param {Number} emissionRate
     */
    setEmissionRate(emissionRate: number): any

    /**
     * Switch between different kind of emitter modes:
     * - CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration
     * - CCParticleSystem.MODE_RADIUS: uses radius movement + rotation
     *
     * @param {Number} emitterMode
     */
    setEmitterMode(emitterMode: number): any

    /**
     * set end color and end color variation of each particle
     *
     * @param {cc.Color} endColor
     */
    setEndColor(endColor: cc.Color): any

    /**
     * set end color variance of each particle
     *
     * @param {cc.Color} endColorVar
     */
    setEndColorVar(endColorVar: cc.Color): any

    /**
     * ending radius of the particles setter. Only available in 'Radius' mode.
     *
     * @param {Number} endRadius
     */
    setEndRadius(endRadius: number): any

    /**
     * ending radius variance of the particles setter. Only available in 'Radius' mode.
     *
     * @param {} endRadiusVar
     */
    setEndRadiusVar(endRadiusVar: any): any

    /**
     * set end size in pixels of each particle
     *
     * @param {} endSize
     */
    setEndSize(endSize: any): any

    /**
     * set end size variance in pixels of each particle
     *
     * @param {Number} endSizeVar
     */
    setEndSizeVar(endSizeVar: number): any

    /**
     * set end angle of each particle
     *
     * @param {Number} endSpin
     */
    setEndSpin(endSpin: number): any

    /**
     * set end angle variance of each particle
     *
     * @param {Number} endSpinVar
     */
    setEndSpinVar(endSpinVar: number): any

    /**
     * Gravity of emitter setter
     *
     * @param {cc.Point} gravity
     */
    setGravity(gravity: cc.Point): any

    /**
     * life of each particle setter
     *
     * @param {Number} life
     */
    setLife(life: number): any

    /**
     * life variance of each particle setter
     *
     * @param {Number} lifeVar
     */
    setLifeVar(lifeVar: number): any

    /**
     * does the alpha value modify color setter
     *
     * @param {} newValue
     */
    setOpacityModifyRGB(newValue: any): any

    /**
     * Quantity of particles setter
     *
     * @param {Number} particleCount
     */
    setParticleCount(particleCount: number): any

    /**
     * set particles movement type: Free or Grouped
     *
     * @param {Number} positionType
     */
    setPositionType(positionType: number): any

    /**
     * Position variance of the emitter setter
     *
     * @param {cc.Point} posVar
     */
    setPosVar(posVar: cc.Point): any

    /**
     * radial acceleration of each particle setter. Only available in 'Gravity' mode.
     *
     * @param {Number} radialAccel
     */
    setRadialAccel(radialAccel: number): any

    /**
     * radial acceleration variance of each particle setter. Only available in 'Gravity' mode.
     *
     * @param {Number} radialAccelVar
     */
    setRadialAccelVar(radialAccelVar: number): any

    /**
     * set Number of degress to rotate a particle around the source pos per second. Only available in 'Radius' mode.
     *
     * @param {Number} degrees
     */
    setRotatePerSecond(degrees: number): any

    /**
     * Variance in degrees for rotatePerSecond setter. Only available in 'Radius' mode.
     *
     * @param {} degrees
     */
    setRotatePerSecondVar(degrees: any): any

    /**
     * set the rotation of each particle to its direction Only available in 'Gravity' mode.
     *
     * @param {boolean} t
     */
    setRotationIsDir(t: boolean): any

    /**
     * ShapeType of ParticleSystem setter (Canvas Mode only)
     *
     * @param {Number} shapeType
     */
    setShapeType(shapeType: number): any

    /**
     * sourcePosition of the emitter setter
     *
     * @param {} sourcePosition
     */
    setSourcePosition(sourcePosition: any): any

    /**
     * Speed of each particle setter
     *
     * @param {Number} speed
     */
    setSpeed(speed: number): any

    /**
     * speed variance of each particle setter. Only available in 'Gravity' mode.
     *
     * @param {Number} speedVar
     */
    setSpeedVar(speedVar: number): any

    /**
     * get start color of each particle
     *
     * @param {cc.Color} startColor
     */
    setStartColor(startColor: cc.Color): any

    /**
     * set start color variance of each particle
     *
     * @param {cc.Color} startColorVar
     */
    setStartColorVar(startColorVar: cc.Color): any

    /**
     * starting radius of the particles setter. Only available in 'Radius' mode.
     *
     * @param {Number} startRadius
     */
    setStartRadius(startRadius: number): any

    /**
     * starting radius variance of the particles setter. Only available in 'Radius' mode.
     *
     * @param {Number} startRadiusVar
     */
    setStartRadiusVar(startRadiusVar: number): any

    /**
     * set start size in pixels of each particle
     *
     * @param {Number} startSize
     */
    setStartSize(startSize: number): any

    /**
     * set size variance in pixels of each particle
     *
     * @param {Number} startSizeVar
     */
    setStartSizeVar(startSizeVar: number): any

    /**
     * set initial angle of each particle
     *
     * @param {Number} startSpin
     */
    setStartSpin(startSpin: number): any

    /**
     * set initial angle variance of each particle
     *
     * @param {Number} startSpinVar
     */
    setStartSpinVar(startSpinVar: number): any

    /**
     * Tangential acceleration of each particle setter. Only available in 'Gravity' mode.
     *
     * @param {Number} tangentialAccel
     */
    setTangentialAccel(tangentialAccel: number): any

    /**
     * tangential acceleration variance of each particle setter. Only available in 'Gravity' mode.
     *
     * @param {Number} tangentialAccelVar
     */
    setTangentialAccelVar(tangentialAccelVar: number): any

    /**
     * set Texture of Particle System
     *
     * @param {cc.Texture2D} texture
     */
    setTexture(texture: cc.Texture2D): any

    /**
     * Sets a new texture with a rect. The rect is in Points.
     *
     * @param {cc.Texture2D} texture
     * @param {cc.Rect} rect
     */
    setTextureWithRect(texture: cc.Texture2D, rect: cc.Rect): any

    /**
     * set maximum particles of the system
     *
     * @param {Number} tp totalParticles
     */
    setTotalParticles(tp: number): any

    /**
     * stop emitting particles. Running particles will continue to run until they die
     */
    stopSystem(): any

    /**
     * update emitter's status
     *
     * @param {Number} dt delta time
     */
    update(dt: number): any

    /**
     * should be overridden by subclasses
     *
     * @param {cc.Particle} particle
     * @param {cc.Point} newPosition
     */
    updateQuadWithParticle(particle: cc.Particle, newPosition: cc.Point): any

    /**
     * update emitter's status (dt = 0)
     */
    updateWithNoTime(): any
  }
}

declare namespace cc {
  namespace ParticleSystem {


    /**
     * Ball Shape for ShapeMode of Particle
     */
    enum BALL_SHAPE { }

    /**
     * The Particle emitter lives forever
     */
    enum DURATION_INFINITY { }

    /**
     * Gravity mode (A mode)
     */
    enum MODE_GRAVITY { }

    /**
     * Radius mode (B mode)
     */
    enum MODE_RADIUS { }

    /**
     * Shape Mode of Particle Draw
     */
    enum SHAPE_MODE { }

    /**
     * Star Shape for ShapeMode of Particle
     */
    enum STAR_SHAPE { }

    /**
     * The starting radius of the particle is equal to the ending radius
     */
    enum START_RADIUS_EQUAL_TO_END_RADIUS { }

    /**
     * The starting size of the particle is equal to the ending size
     */
    enum START_SIZE_EQUAL_TO_END_SIZE { }

    /**
     * Texture Mode of Particle Draw
     */
    enum TEXTURE_MODE { }

    /**
     * Living particles are attached to the world and are unaffected by emitter repositioning.
     */
    enum TYPE_FREE { }

    /**
     * Living particles are attached to the emitter and are translated along with it.
     */
    enum TYPE_GROUPED { }

    /**
     * Living particles are attached to the world but will follow the emitter repositioning.
     * Use case: Attach an emitter to an sprite, and you want that the emitter follows the sprite.
     */
    enum TYPE_RELATIVE { }

    /**
     * return the string found by key in dict.
     * This plist files can be create manually or with Particle Designer:
     * http://particledesigner.71squared.com/
     *
     * @param {String|Number} plistFile
     *
     * @returns {cc.ParticleSystem}
     */
    function create(plistFile: string | number): cc.ParticleSystem

    /**
     * return the string found by key in dict.
     * This plist files can be create manually or with Particle Designer:
     * http://particledesigner.71squared.com/
     *
     * @param {String|Number} plistFile
     *
     * @returns {cc.ParticleSystem}
     */
    function createWithTotalParticles(plistFile: string | number): cc.ParticleSystem
  }
}

declare namespace cc {
  interface ParticleBatchNode  {

    /**
     * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
     * Constructor of cc.ParticleBatchNode
     *
     * @param {String|cc.Texture2D} fileImage
     * @param {Number} capacity
     */
    constructor(fileImage: string | cc.Texture2D, capacity: number)

    /**
     * - The used texture
     */
    texture: cc.Texture2D | HTMLImageElement | HTMLCanvasElement

    /**
     * - The texture atlas used for drawing the quads
     */
    textureAtlas: cc.TextureAtlas

    /**
     * Add a child into the cc.ParticleBatchNode
     *
     * @param {cc.ParticleSystem} child
     * @param {Number} zOrder
     * @param {Number} tag
     */
    addChild(child: cc.ParticleSystem, zOrder: number, tag: number): any

    /**
     * disables a particle by inserting a 0'd quad into the texture atlas
     *
     * @param {Number} particleIndex
     */
    disableParticle(particleIndex: number): any

    /**
     * returns the blending function used for the texture
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * returns the used texture
     *
     * @returns {cc.Texture2D}
     */
    getTexture(): cc.Texture2D

    /**
     * return the texture atlas used for drawing the quads
     *
     * @returns {cc.TextureAtlas}
     */
    getTextureAtlas(): cc.TextureAtlas

    /**
     * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
     *
     * @param {String} fileImage
     * @param {Number} capacity
     *
     * @returns {Boolean}
     */
    init(fileImage: string, capacity: number): boolean

    /**
     * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
     *
     * @param {String} fileImage
     * @param {Number} capacity
     *
     * @returns {Boolean}
     */
    initWithFile(fileImage: string, capacity: number): boolean

    /**
     * initializes the particle system with cc.Texture2D, a capacity of particles
     *
     * @param {cc.Texture2D|HTMLImageElement|HTMLCanvasElement} texture
     * @param {Number} capacity
     *
     * @returns {Boolean}
     */
    initWithTexture(texture: cc.Texture2D | HTMLImageElement | HTMLCanvasElement, capacity: number): boolean

    /**
     * Inserts a child into the cc.ParticleBatchNode
     *
     * @param {cc.ParticleSystem} pSystem
     * @param {Number} index
     */
    insertChild(pSystem: cc.ParticleSystem, index: number): any

    /**
     *
     *
     * @param {Boolean} doCleanup
     */
    removeAllChildren(doCleanup: boolean): any

    /**
     *
     *
     * @param {cc.ParticleSystem} child
     * @param {Boolean} cleanup
     */
    removeChild(child: cc.ParticleSystem, cleanup: boolean): any

    /**
     *
     *
     * @param {Number} index
     * @param {Boolean} doCleanup
     */
    removeChildAtIndex(index: number, doCleanup: boolean): any

    /**
     * Reorder will be done in this function, no "lazy" reorder to particles
     *
     * @param {cc.ParticleSystem} child
     * @param {Number} zOrder
     */
    reorderChild(child: cc.ParticleSystem, zOrder: number): any

    /**
     * set the blending function used for the texture
     *
     * @param {Number|Object} src
     * @param {Number} dst
     */
    setBlendFunc(src: number | object, dst: number): any

    /**
     * sets a new texture. it will be retained
     *
     * @param {cc.Texture2D} texture
     */
    setTexture(texture: cc.Texture2D): any

    /**
     * set the texture atlas used for drawing the quads
     *
     * @param {cc.TextureAtlas} textureAtlas
     */
    setTextureAtlas(textureAtlas: cc.TextureAtlas): any
  }
}

declare namespace cc {
  namespace ParticleBatchNode {



    /**
     * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
     *
     * @param {String|cc.Texture2D} fileImage
     * @param {Number} capacity
     *
     * @returns {cc.ParticleBatchNode}
     */
    function create(fileImage: string | cc.Texture2D, capacity: number): cc.ParticleBatchNode
  }
}

declare namespace cc {
  interface ParticleExplosion  {

    /**
     * The cc.ParticleExplosion's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleExplosion()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize an explosion particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleExplosion {



    /**
     * Create an explosion particle system
     *
     * @returns {cc.ParticleExplosion}
     */
    function create(): cc.ParticleExplosion
  }
}

declare namespace cc {
  interface ParticleFire  {

    /**
     * The cc.ParticleFire's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleFire()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a fire particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleFire {



    /**
     * Create a fire particle system
     *
     * @returns {cc.ParticleFire}
     */
    function create(): cc.ParticleFire
  }
}

declare namespace cc {
  interface ParticleFireworks  {

    /**
     * The cc.ParticleFireworks's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleFireworks()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a fireworks particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleFireworks {



    /**
     * Create a fireworks particle system
     *
     * @returns {cc.ParticleFireworks}
     */
    function create(): cc.ParticleFireworks
  }
}

declare namespace cc {
  interface ParticleFlower  {

    /**
     * The cc.ParticleFlower's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleFlower()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a flower particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleFlower {



    /**
     * Create a flower particle system
     *
     * @returns {cc.ParticleFlower}
     */
    function create(): cc.ParticleFlower
  }
}

declare namespace cc {
  interface ParticleGalaxy  {

    /**
     * The cc.ParticleGalaxy's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleGalaxy()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a galaxy particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleGalaxy {



    /**
     * Create a galaxy particle system
     *
     * @returns {cc.ParticleGalaxy}
     */
    function create(): cc.ParticleGalaxy
  }
}

declare namespace cc {
  interface ParticleMeteor  {

    /**
     * The cc.ParticleMeteor's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleMeteor()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a meteor particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleMeteor {



    /**
     * Create a meteor particle system
     *
     * @returns {cc.ParticleMeteor}
     */
    function create(): cc.ParticleMeteor
  }
}

declare namespace cc {
  interface ParticleRain  {

    /**
     * The cc.ParticleRain's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleRain()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a rain particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleRain {



    /**
     * Create a rain particle system
     *
     * @returns {cc.ParticleRain}
     */
    function create(): cc.ParticleRain
  }
}

declare namespace cc {
  interface ParticleSmoke  {

    /**
     * The cc.ParticleSmoke's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleSmoke()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a smoke particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleSmoke {



    /**
     * Create a smoke particle system
     *
     * @returns {cc.ParticleSmoke}
     */
    function create(): cc.ParticleSmoke
  }
}

declare namespace cc {
  interface ParticleSnow  {

    /**
     * The cc.ParticleSnow's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleSnow()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a snow particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleSnow {



    /**
     * Create a snow particle system
     *
     * @returns {cc.ParticleSnow}
     */
    function create(): cc.ParticleSnow
  }
}

declare namespace cc {
  interface ParticleSpiral  {

    /**
     * The cc.ParticleSpiral's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleSpiral()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a spiral particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleSpiral {



    /**
     * Create a spiral particle system
     *
     * @returns {cc.ParticleSpiral}
     */
    function create(): cc.ParticleSpiral
  }
}

declare namespace cc {
  interface ParticleSun  {

    /**
     * The cc.ParticleSun's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.ParticleSun()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * initialize a sun particle system with number Of Particles
     *
     * @param {Number} numberOfParticles
     *
     * @returns {Boolean}
     */
    initWithTotalParticles(numberOfParticles: number): boolean
  }
}

declare namespace cc {
  namespace ParticleSun {



    /**
     * Create a sun particle system
     *
     * @returns {cc.ParticleSun}
     */
    function create(): cc.ParticleSun
  }
}

declare namespace cc {
  interface ProgressTimer  {

    /**
     * constructor of cc.cc.ProgressTimer
     *
     * @param {cc.Sprite} sprite
     */
    constructor(sprite: cc.Sprite)

    /**
     * - This allows the bar type to move the component at a specific rate.
     */
    barChangeRate: cc.Point

    /**
     * - Midpoint is used to modify the progress start position.
     * If you're using radials type then the midpoint changes the center point
     * If you're using bar type the the midpoint changes the bar growth
     * it expands from the center but clamps to the sprites edge so:
     * you want a left to right then set the midpoint all the way to cc.p(0,y)
     * you want a right to left then set the midpoint all the way to cc.p(1,y)
     * you want a bottom to top then set the midpoint all the way to cc.p(x,0)
     * you want a top to bottom then set the midpoint all the way to cc.p(x,1)
     */
    midPoint: cc.Point

    /**
     * - Percentage to change progress, from 0 to 100.
     */
    percentage: number

    /**
     * - Indicate whether the direction is reversed.
     */
    reverseDir: boolean

    /**
     * - The sprite to show the progress percentage.
     */
    sprite: cc.Sprite

    /**
     * - Type of the progress timer: cc.ProgressTimer.TYPE_RADIAL|cc.ProgressTimer.TYPE_BAR.
     */
    type: any

    /**
     * This allows the bar type to move the component at a specific rate
     * Set the component to 0 to make sure it stays at 100%.
     * For example you want a left to right bar but not have the height stay 100%
     * Set the rate to be cc.p(0,1); and set the midpoint to = cc.p(0,.5f);
     *
     * @returns {cc.Point}
     */
    getBarChangeRate(): cc.Point

    /**
     * return color of sprite
     *
     * @returns {cc.Color}
     */
    getColor(): cc.Color

    /**
     * Midpoint is used to modify the progress start position.
     * If you're using radials type then the midpoint changes the center point
     * If you're using bar type the the midpoint changes the bar growth
     * it expands from the center but clamps to the sprites edge so:
     * you want a left to right then set the midpoint all the way to cc.p(0,y)
     * you want a right to left then set the midpoint all the way to cc.p(1,y)
     * you want a bottom to top then set the midpoint all the way to cc.p(x,0)
     * you want a top to bottom then set the midpoint all the way to cc.p(x,1)
     *
     * @returns {cc.Point}
     */
    getMidpoint(): cc.Point

    /**
     * return Opacity of sprite
     *
     * @returns {Number}
     */
    getOpacity(): number

    /**
     * Percentages are from 0 to 100
     *
     * @returns {Number}
     */
    getPercentage(): number

    /**
     * The image to show the progress percentage, retain
     *
     * @returns {cc.Sprite}
     */
    getSprite(): cc.Sprite

    /**
     * Change the percentage to change progress
     *
     * @returns {cc.ProgressTimer.TYPE_RADIAL|cc.ProgressTimer.TYPE_BAR}
     */
    getType(): cc.ProgressTimer.TYPE_RADIAL | cc.ProgressTimer.TYPE_BAR

    /**
     * Initializes a progress timer with the sprite as the shape the timer goes through
     *
     * @param {cc.Sprite} sprite
     *
     * @returns {Boolean}
     */
    initWithSprite(sprite: cc.Sprite): boolean

    /**
     * only use for jsbinding
     *
     * @returns {boolean}
     */
    isOpacityModifyRGB(): boolean

    /**
     * return if reverse direction
     *
     * @returns {boolean}
     */
    isReverseDirection(): boolean

    /**
     *
     *
     * @param {cc.Point} barChangeRate
     */
    setBarChangeRate(barChangeRate: cc.Point): any

    /**
     * set color of sprite
     *
     * @param {cc.Color} color
     */
    setColor(color: cc.Color): any

    /**
     * Midpoint setter
     *
     * @param {cc.Point} mpoint
     */
    setMidpoint(mpoint: cc.Point): any

    /**
     * set opacity of sprite
     *
     * @param {Number} opacity
     */
    setOpacity(opacity: number): any

    /**
     * only use for jsbinding
     *
     * @param {} bValue
     */
    setOpacityModifyRGB(bValue: any): any

    /**
     * from 0-100
     *
     * @param {Number} percentage
     */
    setPercentage(percentage: number): any

    /**
     * Reverse Progress setter
     *
     * @param {Boolean} reverse
     */
    setReverseDirection(reverse: boolean): any

    /**
     * set reverse cc.ProgressTimer
     *
     * @param {Boolean} reverse
     */
    setReverseProgress(reverse: boolean): any

    /**
     * set sprite for cc.ProgressTimer
     *
     * @param {cc.Sprite} sprite
     */
    setSprite(sprite: cc.Sprite): any

    /**
     * set Progress type of cc.ProgressTimer
     *
     * @param {cc.ProgressTimer.TYPE_RADIAL|cc.ProgressTimer.TYPE_BAR} type
     */
    setType(type: cc.ProgressTimer.TYPE_RADIAL | cc.ProgressTimer.TYPE_BAR): any
  }
}

declare namespace cc {
  namespace ProgressTimer {


    /**
     *
     */
    enum TEXTURE_COORDS { }

    /**
     *
     */
    enum TEXTURE_COORDS_COUNT { }

    /**
     * Bar
     */
    enum TYPE_BAR { }

    /**
     * Radial Counter-Clockwise
     */
    enum TYPE_RADIAL { }

    /**
     * create a progress timer object with image file name that renders the inner sprite according to the percentage
     *
     * @param {cc.Sprite} sprite
     *
     * @returns {cc.ProgressTimer}
     */
    function create(sprite: cc.Sprite): cc.ProgressTimer
  }
}

declare namespace cc {
  interface ProtectedNode  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * Adds a child to the container with z order and tag
     * If the child is added to a 'running' node, then 'onEnter' and 'onEnterTransitionDidFinish' will be called immediately.
     *
     * @param {cc.Node} child A child node
     * @param {Number} localZOrder Z order for drawing priority. Please refer to `setLocalZOrder(int)`
     * @param {Number} tag An integer to identify the node easily. Please refer to `setTag(int)`
     */
    addProtectedChild(child: cc.Node, localZOrder: number, tag: number): any

    /**
     * Stops itself and its children and protected children's all running actions and schedulers
     */
    cleanup(): any

    /**
     * Gets a child from the container with its tag
     *
     * @param {Number} tag An identifier to find the child node.
     *
     * @returns {cc.Node} a Node object whose tag equals to the input parameter
     */
    getProtectedChildByTag(tag: number): cc.Node

    /**
     * Calls its parent's onEnter and calls its protected children's onEnter
     */
    onEnter(): any

    /**
     * Event callback that is invoked when the Node enters in the 'stage'.
     * If the Node enters the 'stage' with a transition, this event is called when the transition finishes.
     * If you override onEnterTransitionDidFinish, you shall call its parent's one, e.g. Node::onEnterTransitionDidFinish()
     */
    onEnterTransitionDidFinish(): any

    /**
     * Calls its parent's onExit and calls its protected children's onExit
     */
    onExit(): any

    /**
     * Event callback that is called every time the Node leaves the 'stage'.
     * If the Node leaves the 'stage' with a transition, this callback is called when the transition starts.
     */
    onExitTransitionDidStart(): any

    /**
     * Removes all children from the container with a cleanup.
     */
    removeAllProtectedChildren(): any

    /**
     * Removes all children from the container, and do a cleanup to all running actions depending on the cleanup parameter.
     *
     * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
     */
    removeAllProtectedChildrenWithCleanup(cleanup: boolean): any

    /**
     * Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter.
     *
     * @param {cc.Node} child The child node which will be removed.
     * @param {Boolean} cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise.
     */
    removeProtectedChild(child: cc.Node, cleanup: boolean): any

    /**
     * Removes a child from the container by tag value.
     * It will also cleanup all running actions depending on the cleanup parameter
     *
     * @param {Number} tag
     * @param {Boolean} cleanup
     */
    removeProtectedChildByTag(tag: number, cleanup: boolean): any

    /**
     * Reorders a child according to a new z value.
     *
     * @param {cc.Node} child An already added child node. It MUST be already added.
     * @param {Number} localZOrder Z order for drawing priority. Please refer to setLocalZOrder(int)
     */
    reorderProtectedChild(child: cc.Node, localZOrder: number): any

    /**
     * Sorts the children array once before drawing, instead of every time when a child is added or reordered.
     * This approach can improves the performance massively.
     */
    sortAllProtectedChildren(): any
  }
}

declare namespace cc {
  namespace ProtectedNode {



    /**
     * create a cc.ProtectedNode object;
     */
    function create(): any
  }
}

declare namespace cc {
  interface RenderTexture  {

    /**
     * creates a RenderTexture object with width and height in Points and a pixel format, only RGB and RGBA formats are valid
     * Constructor of cc.RenderTexture for Canvas
     *
     * @param {Number} width
     * @param {Number} height
     * @param {cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA} format
     * @param {Number} depthStencilFormat
     */
    constructor(width: number, height: number, format: cc.IMAGE_FORMAT_JPEG | cc.IMAGE_FORMAT_PNG | cc.IMAGE_FORMAT_RAWDATA, depthStencilFormat: number)

    /**
     * - Indicate auto draw mode activate or not.
     */
    autoDraw: boolean

    /**
     * - Clear color value, valid only when "autoDraw" is true.
     */
    clearColorVal: cc.Color

    /**
     * - Clear depth value.
     */
    clearDepthVal: number

    /**
     * - Code for "auto" update.
     */
    clearFlags: cc.Sprite

    /**
     * - Clear stencil value.
     */
    clearStencilVal: number

    /**
     * - The sprite.
     */
    sprite: cc.Sprite

    /**
     * starts grabbing
     */
    begin(): any

    /**
     * starts rendering to the texture while clearing the texture first.
     * This is more efficient then calling -clear first and then -begin
     *
     * @param {Number} r red 0-255
     * @param {Number} g green 0-255
     * @param {Number} b blue 0-255
     * @param {Number} a alpha 0-255 0 is transparent
     * @param {Number} depthValue
     * @param {Number} stencilValue
     */
    beginWithClear(r: number, g: number, b: number, a: number, depthValue: number, stencilValue: number): any

    /**
     * Clear RenderTexture.
     */
    cleanup(): any

    /**
     * clears the texture with a color
     *
     * @param {Number|cc.Rect} r red 0-1
     * @param {Number} g green 0-1
     * @param {Number} b blue 0-1
     * @param {Number} a alpha 0-1
     */
    clear(r: number | cc.Rect, g: number, b: number, a: number): any

    /**
     * clears the texture with a specified depth value
     *
     * @param {Number} depthValue
     */
    clearDepth(depthValue: number): any

    /**
     * clears the texture with rect.
     *
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    clearRect(x: number, y: number, width: number, height: number): any

    /**
     * clears the texture with a specified stencil value
     *
     * @param {Number} stencilValue
     */
    clearStencil(stencilValue: number): any

    /**
     * ends grabbing
     */
    end(): any

    /**
     * Clear color value. Valid only when "autoDraw" is true.
     *
     * @returns {cc.Color}
     */
    getClearColor(): cc.Color

    /**
     * Value for clearDepth. Valid only when autoDraw is true.
     *
     * @returns {Number}
     */
    getClearDepth(): number

    /**
     * Valid flags: GL_COLOR_BUFFER_BIT, GL_DEPTH_BUFFER_BIT, GL_STENCIL_BUFFER_BIT. They can be OR'ed. Valid when "autoDraw is YES.
     *
     * @returns {Number}
     */
    getClearFlags(): number

    /**
     * Value for clear Stencil. Valid only when autoDraw is true
     *
     * @returns {Number}
     */
    getClearStencil(): number

    /**
     * Gets the sprite
     *
     * @returns {cc.Sprite}
     */
    getSprite(): cc.Sprite

    /**
     * Initializes the instance of cc.RenderTexture
     *
     * @param {Number} width
     * @param {Number} height
     * @param {cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA} format
     * @param {Number} depthStencilFormat
     *
     * @returns {Boolean}
     */
    initWithWidthAndHeight(width: number, height: number, format: cc.IMAGE_FORMAT_JPEG | cc.IMAGE_FORMAT_PNG | cc.IMAGE_FORMAT_RAWDATA, depthStencilFormat: number): boolean

    /**
     * When enabled, it will render its children into the texture automatically. Disabled by default for compatibility reasons.
     * Will be enabled in the future.
     *
     * @returns {Boolean}
     */
    isAutoDraw(): boolean

    /**
     * Listen "come to background" message, and save render texture. It only has effect on Android.
     *
     * @param {cc.Class} obj
     */
    listenToBackground(obj: cc.Class): any

    /**
     * Listen "come to foreground" message and restore the frame buffer object. It only has effect on Android.
     *
     * @param {cc.Class} obj
     */
    listenToForeground(obj: cc.Class): any

    /**
     * creates a new CCImage from with the texture's data. Caller is responsible for releasing it by calling delete.
     *
     * @param {} flipImage
     *
     * @returns {*}
     */
    newCCImage(flipImage: any): any

    /**
     * saves the texture into a file using JPEG format. The file will be saved in the Documents folder.
     * Returns YES if the operation is successful.
     * (doesn't support in HTML5)
     *
     * @param {Number} filePath
     * @param {Number} format
     */
    saveToFile(filePath: number, format: number): any

    /**
     * When enabled, it will render its children into the texture automatically. Disabled by default for compatibility reasons.
     * Will be enabled in the future.
     *
     * @param {} autoDraw
     *
     * @returns {Boolean}
     */
    setAutoDraw(autoDraw: any): boolean

    /**
     * Set the clear color value. Valid only when "autoDraw" is true.
     *
     * @param {cc.Color} clearColor The clear color
     */
    setClearColor(clearColor: cc.Color): any

    /**
     * Set value for clearDepth. Valid only when autoDraw is true.
     *
     * @param {Number} clearDepth
     */
    setClearDepth(clearDepth: number): any

    /**
     * Set the clearFlags
     *
     * @param {Number} clearFlags
     */
    setClearFlags(clearFlags: number): any

    /**
     * Set value for clear Stencil. Valid only when autoDraw is true
     *
     * @param {} clearStencil
     *
     * @returns {Number}
     */
    setClearStencil(clearStencil: any): number

    /**
     * Set the sprite
     *
     * @param {cc.Sprite} sprite
     */
    setSprite(sprite: cc.Sprite): any

    /**
     * Used for grab part of screen to a texture.
     *
     * @param {cc.Point} rtBegin
     * @param {cc.Rect} fullRect
     * @param {cc.Rect} fullViewport
     */
    setVirtualViewport(rtBegin: cc.Point, fullRect: cc.Rect, fullViewport: cc.Rect): any
  }
}

declare namespace cc {
  namespace RenderTexture {



    /**
     * creates a RenderTexture object with width and height in Points and a pixel format, only RGB and RGBA formats are valid
     *
     * @param {Number} width
     * @param {Number} height
     * @param {cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA} format
     * @param {Number} depthStencilFormat
     *
     * @returns {cc.RenderTexture}
     */
    function create(width: number, height: number, format: cc.IMAGE_FORMAT_JPEG | cc.IMAGE_FORMAT_PNG | cc.IMAGE_FORMAT_RAWDATA, depthStencilFormat: number): cc.RenderTexture
  }
}

declare namespace cc {
  interface Scene  {

    /**
     * cc.Scene is a subclass of cc.Node that is used only as an abstract concept.
     * cc.Scene an cc.Node are almost identical with the difference that cc.Scene has it's
     * anchor point (by default) at the center of the screen.For the moment cc.Scene has no other logic than that, but in future releases it might have
     * additional logic.It is a good practice to use and cc.Scene as the parent of all your nodes.
     */
    constructor()


  }
}

declare namespace cc {
  namespace Scene {



    /**
     * creates a scene
     *
     * @returns {cc.Scene}
     */
    function create(): cc.Scene
  }
}

declare namespace cc {
  interface LoaderScene  {

    /**
     * cc.LoaderScene is a scene that you can load it when you loading files
     * cc.LoaderScene can present thedownload progress
     */
    constructor()


  }
}

declare namespace cc {
  namespace LoaderScene {



    /**
     * cc.LoaderScene.preload can present a loaderScene with download progress.
     * when all the resource are downloaded it will invoke call function
     *
     * @param {} resources
     * @param {} cb
     * @param {} target
     *
     * @returns {cc.LoaderScene|*}
     */
    function preload(resources: any, cb: any, target: any): cc.LoaderScene | any
  }
}

declare namespace cc {
  interface TransitionScene  {

    /**
     * creates a base transition with duration and incoming scene
     * Constructor of cc.TransitionScene
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene the scene to transit with
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * custom cleanup
     */
    cleanup(): any

    /**
     * called after the transition finishes
     */
    finish(): any

    /**
     * set hide the out scene and show in scene
     */
    hideOutShowIn(): any

    /**
     * initializes a transition with duration and incoming scene
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene a scene to transit to
     *
     * @returns {Boolean} return false if error
     */
    initWithDuration(t: number, scene: cc.Scene): boolean

    /**
     * Event callback that is invoked every time when cc.TransitionScene enters the 'stage'.
     * If the TransitionScene enters the 'stage' with a transition, this event is called when the transition starts.
     * During onEnter you can't access a "sister/brother" node.
     * If you override onEnter, you must call its parent's onEnter function with this._super().
     */
    onEnter(): any

    /**
     * callback that is called every time the cc.TransitionScene leaves the 'stage'.
     * If the cc.TransitionScene leaves the 'stage' with a transition, this callback is called when the transition finishes.
     * During onExit you can't access a sibling node.
     * If you override onExit, you shall call its parent's onExit with this._super().
     */
    onExit(): any

    /**
     * stuff gets drawn here
     */
    visit(): any
  }
}

declare namespace cc {
  namespace TransitionScene {



    /**
     * creates a base transition with duration and incoming scene
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene the scene to transit with
     *
     * @returns {cc.TransitionScene|Null}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionScene | null
  }
}

declare namespace cc {
  interface TransitionCrossFade  {

    /**
     * Constructor of TransitionCrossFade
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * overide draw
     */
    draw(): any

    /**
     * custom on enter
     */
    onEnter(): any

    /**
     * custom on exit
     */
    onExit(): any

    /**
     * stuff gets drawn here
     */
    visit(): any
  }
}

declare namespace cc {
  namespace TransitionCrossFade {



    /**
     * Cross fades two scenes using the cc.RenderTexture object.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionCrossFade}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionCrossFade
  }
}

declare namespace cc {
  interface TransitionFade  {

    /**
     * Constructor of TransitionFade
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} o
     */
    constructor(t: number, scene: cc.Scene, o: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER)


    /**
     * initializes the transition with a duration and with an RGB color
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     * @param {cc.Color} color
     *
     * @returns {Boolean}
     */
    initWithDuration(t: number, scene: cc.Scene, color: cc.Color): boolean

    /**
     * custom on enter
     */
    onEnter(): any

    /**
     * custom on exit
     */
    onExit(): any
  }
}

declare namespace cc {
  namespace TransitionFade {



    /**
     * Fade out the outgoing scene and then fade in the incoming scene.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     * @param {cc.Color} color
     *
     * @returns {cc.TransitionFade}
     */
    function create(t: number, scene: cc.Scene, color: cc.Color): cc.TransitionFade
  }
}

declare namespace cc {
  interface TransitionFadeTR  {

    /**
     * Constructor of TransitionFadeTR
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     *
     *
     * @param {cc.Size} size
     *
     * @returns {*}
     */
    actionWithSize(size: cc.Size): any

    /**
     *
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.ActionInterval}
     */
    easeActionWithAction(action: cc.ActionInterval): cc.ActionInterval

    /**
     * Custom on enter
     */
    onEnter(): any
  }
}

declare namespace cc {
  namespace TransitionFadeTR {



    /**
     * Fade the tiles of the outgoing scene from the left-bottom corner the to top-right corner.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionFadeTR}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionFadeTR
  }
}

declare namespace cc {
  interface TransitionFadeBL  {

    /**
     * Constructor of TransitionFadeBL
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     *
     *
     * @param {cc.Size} size
     *
     * @returns {*}
     */
    actionWithSize(size: cc.Size): any
  }
}

declare namespace cc {
  namespace TransitionFadeBL {



    /**
     * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionFadeBL}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionFadeBL
  }
}

declare namespace cc {
  interface TransitionFadeDown  {

    /**
     * Constructor of TransitionFadeDown
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     *
     *
     * @param {cc.Size} size
     *
     * @returns {*}
     */
    actionWithSize(size: cc.Size): any
  }
}

declare namespace cc {
  namespace TransitionFadeDown {



    /**
     * Fade the tiles of the outgoing scene from the top to the bottom.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionFadeDown}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionFadeDown
  }
}

declare namespace cc {
  interface TransitionFadeUp  {

    /**
     * Constructor of TransitionFadeUp
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     *
     *
     * @param {cc.Size} size
     *
     * @returns {cc.FadeOutUpTiles}
     */
    actionWithSize(size: cc.Size): cc.FadeOutUpTiles
  }
}

declare namespace cc {
  namespace TransitionFadeUp {



    /**
     * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionFadeUp}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionFadeUp
  }
}

declare namespace cc {
  interface TransitionJumpZoom  {

    /**
     * Constructor of TransitionJumpZoom
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * Custom on enter
     */
    onEnter(): any
  }
}

declare namespace cc {
  namespace TransitionJumpZoom {



    /**
     * creates a scene transition that zooms then jump across the screen, the same for the incoming scene
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionJumpZoom}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionJumpZoom
  }
}

declare namespace cc {
  interface TransitionMoveInL  {

    /**
     * Constructor of TransitionMoveInL
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * returns the action that will be performed
     */
    action(): any

    /**
     * creates an ease action from action
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseOut}
     */
    easeActionWithAction(action: cc.ActionInterval): cc.EaseOut

    /**
     * initializes the scenes
     */
    initScenes(): any

    /**
     * Custom on enter
     */
    onEnter(): any
  }
}

declare namespace cc {
  namespace TransitionMoveInL {



    /**
     * creates an action that Move in from to the left the incoming scene.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionMoveInL}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionMoveInL
  }
}

declare namespace cc {
  interface TransitionMoveInB  {

    /**
     * Constructor of TransitionMoveInB
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * init function
     */
    initScenes(): any
  }
}

declare namespace cc {
  namespace TransitionMoveInB {



    /**
     * create a scene transition that Move in from to the bottom the incoming scene.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionMoveInB}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionMoveInB
  }
}

declare namespace cc {
  interface TransitionMoveInR  {

    /**
     * Constructor of TransitionMoveInR
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * Init function
     */
    initScenes(): any
  }
}

declare namespace cc {
  namespace TransitionMoveInR {



    /**
     * create a scene transition that Move in from to the right the incoming scene.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionMoveInR}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionMoveInR
  }
}

declare namespace cc {
  interface TransitionMoveInT  {

    /**
     * Constructor of TransitionMoveInT
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * init function
     */
    initScenes(): any
  }
}

declare namespace cc {
  namespace TransitionMoveInT {



    /**
     * Move in from to the top the incoming scene.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionMoveInT}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionMoveInT
  }
}

declare namespace cc {
  interface TransitionPageTurn  {

    /**
     *
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     * @param {Boolean} backwards
     */
    constructor(t: number, scene: cc.Scene, backwards: boolean)


    /**
     *
     *
     * @param {cc.Size} vector
     *
     * @returns {cc.ReverseTime|cc.TransitionScene}
     */
    actionWithSize(vector: cc.Size): cc.ReverseTime | cc.TransitionScene

    /**
     * Creates a base transition with duration and incoming scene.
     * If back is true then the effect is reversed to appear as if the incoming
     * scene is being turned from left over the outgoing scene.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     * @param {Boolean} backwards
     *
     * @returns {Boolean}
     */
    initWithDuration(t: number, scene: cc.Scene, backwards: boolean): boolean

    /**
     * custom on enter
     */
    onEnter(): any
  }
}

declare namespace cc {
  namespace TransitionPageTurn {



    /**
     * Creates a base transition with duration and incoming scene.
     * If back is true then the effect is reversed to appear as if the incoming
     * scene is being turned from left over the outgoing scene.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     * @param {Boolean} backwards
     *
     * @returns {cc.TransitionPageTurn}
     */
    function create(t: number, scene: cc.Scene, backwards: boolean): cc.TransitionPageTurn
  }
}

declare namespace cc {
  interface TransitionProgress  {

    /**
     *
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * Custom on enter.
     */
    onEnter(): any

    /**
     * custom on exit
     */
    onExit(): any
  }
}

declare namespace cc {
  namespace TransitionProgress {



    /**
     * create a cc.TransitionProgress object
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionProgress}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionProgress
  }
}

declare namespace cc {
  interface TransitionProgressHorizontal  {

    /**
     *
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


  }
}

declare namespace cc {
  namespace TransitionProgressHorizontal {



    /**
     * create a cc.TransitionProgressHorizontal object
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionProgressHorizontal}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionProgressHorizontal
  }
}

declare namespace cc {
  interface TransitionProgressInOut  {

    /**
     * The constructor of cc.TransitionProgressInOut. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


  }
}

declare namespace cc {
  namespace TransitionProgressInOut {



    /**
     * create a cc.TransitionProgressInOut object
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionProgressInOut}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionProgressInOut
  }
}

declare namespace cc {
  interface TransitionProgressOutIn  {

    /**
     * The constructor of cc.TransitionProgressOutIn. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


  }
}

declare namespace cc {
  namespace TransitionProgressOutIn {



    /**
     * create a cc.TransitionProgressOutIn object
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionProgressOutIn}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionProgressOutIn
  }
}

declare namespace cc {
  interface TransitionProgressRadialCCW  {

    /**
     *
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


  }
}

declare namespace cc {
  namespace TransitionProgressRadialCCW {



    /**
     * create a cc.TransitionProgressRadialCCW object
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionProgressRadialCCW}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionProgressRadialCCW
  }
}

declare namespace cc {
  interface TransitionProgressRadialCW  {

    /**
     *
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


  }
}

declare namespace cc {
  namespace TransitionProgressRadialCW {



    /**
     * create a cc.TransitionProgressRadialCW object
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionProgressRadialCW}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionProgressRadialCW
  }
}

declare namespace cc {
  interface TransitionProgressVertical  {

    /**
     *
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


  }
}

declare namespace cc {
  namespace TransitionProgressVertical {



    /**
     * create a cc.TransitionProgressVertical object
     *
     * @param {Number} t time
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionProgressVertical}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionProgressVertical
  }
}

declare namespace cc {
  interface TransitionRotoZoom  {

    /**
     * Constructor of TransitionRotoZoom
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * Custom On Enter callback
     */
    onEnter(): any
  }
}

declare namespace cc {
  namespace TransitionRotoZoom {



    /**
     * Creates a Transition rotation and zoom
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene the scene to work with
     *
     * @returns {cc.TransitionRotoZoom}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionRotoZoom
  }
}

declare namespace cc {
  interface TransitionSceneOriented  {

    /**
     * Constructor of TransitionSceneOriented
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} orientation
     */
    constructor(t: number, scene: cc.Scene, orientation: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER)


    /**
     * initialize the transition
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} orientation
     *
     * @returns {Boolean}
     */
    initWithDuration(t: number, scene: cc.Scene, orientation: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER): boolean
  }
}

declare namespace cc {
  namespace TransitionSceneOriented {



    /**
     * creates a base transition with duration and incoming scene
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     * @param {cc.TRANSITION_ORIENTATION_LEFT_OVER|cc.TRANSITION_ORIENTATION_RIGHT_OVER|cc.TRANSITION_ORIENTATION_UP_OVER|cc.TRANSITION_ORIENTATION_DOWN_OVER} orientation
     *
     * @returns {cc.TransitionSceneOriented}
     */
    function create(t: number, scene: cc.Scene, orientation: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER): cc.TransitionSceneOriented
  }
}

declare namespace cc {
  interface TransitionShrinkGrow  {

    /**
     * Constructor of TransitionShrinkGrow
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     *
     *
     * @param {} action
     *
     * @returns {cc.EaseOut}
     */
    easeActionWithAction(action: any): cc.EaseOut

    /**
     * Custom on enter
     */
    onEnter(): any
  }
}

declare namespace cc {
  namespace TransitionShrinkGrow {



    /**
     * Shrink the outgoing scene while grow the incoming scene
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionShrinkGrow}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionShrinkGrow
  }
}

declare namespace cc {
  interface TransitionSlideInL  {

    /**
     * Constructor of TransitionSlideInL
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * returns the action that will be performed by the incoming and outgoing scene
     *
     * @returns {cc.MoveBy}
     */
    action(): cc.MoveBy

    /**
     *
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {*}
     */
    easeActionWithAction(action: cc.ActionInterval): any

    /**
     * initializes the scenes
     */
    initScenes(): any

    /**
     * custom on enter
     */
    onEnter(): any
  }
}

declare namespace cc {
  namespace TransitionSlideInL {



    /**
     * create a transition that a new scene is slided from left
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionSlideInL}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionSlideInL
  }
}

declare namespace cc {
  interface TransitionSlideInB  {

    /**
     * Constructor of TransitionSlideInB
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * returns the action that will be performed by the incoming and outgoing scene
     *
     * @returns {cc.MoveBy}
     */
    action(): cc.MoveBy

    /**
     * initializes the scenes
     */
    initScenes(): any
  }
}

declare namespace cc {
  namespace TransitionSlideInB {



    /**
     * create a Slide in the incoming scene from the bottom border.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionSlideInB}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionSlideInB
  }
}

declare namespace cc {
  interface TransitionSlideInR  {

    /**
     * Constructor of TransitionSlideInR
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * returns the action that will be performed by the incoming and outgoing scene
     *
     * @returns {cc.MoveBy}
     */
    action(): cc.MoveBy

    /**
     * initializes the scenes
     */
    initScenes(): any
  }
}

declare namespace cc {
  namespace TransitionSlideInR {



    /**
     * create Slide in the incoming scene from the right border.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionSlideInR}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionSlideInR
  }
}

declare namespace cc {
  interface TransitionSlideInT  {

    /**
     * Constructor of TransitionSlideInT
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     * returns the action that will be performed by the incoming and outgoing scene
     *
     * @returns {cc.MoveBy}
     */
    action(): cc.MoveBy

    /**
     * initializes the scenes
     */
    initScenes(): any
  }
}

declare namespace cc {
  namespace TransitionSlideInT {



    /**
     * create a Slide in the incoming scene from the top border.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionSlideInT}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionSlideInT
  }
}

declare namespace cc {
  interface TransitionSplitCols  {

    /**
     * Constructor of TransitionSplitCols
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     *
     *
     * @returns {*}
     */
    action(): any

    /**
     *
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.EaseInOut}
     */
    easeActionWithAction(action: cc.ActionInterval): cc.EaseInOut

    /**
     * custom on enter
     */
    onEnter(): any
  }
}

declare namespace cc {
  namespace TransitionSplitCols {



    /**
     * The odd columns goes upwards while the even columns goes downwards.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionSplitCols}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionSplitCols
  }
}

declare namespace cc {
  interface TransitionSplitRows  {

    /**
     * Constructor of TransitionSplitRows
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     *
     *
     * @returns {*}
     */
    action(): any
  }
}

declare namespace cc {
  namespace TransitionSplitRows {



    /**
     * The odd rows goes to the left while the even rows goes to the right.
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionSplitRows}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionSplitRows
  }
}

declare namespace cc {
  interface TransitionTurnOffTiles  {

    /**
     * Constructor of TransitionCrossFade
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     */
    constructor(t: number, scene: cc.Scene)


    /**
     *
     *
     * @param {cc.ActionInterval} action
     *
     * @returns {cc.ActionInterval}
     */
    easeActionWithAction(action: cc.ActionInterval): cc.ActionInterval

    /**
     * custom on enter
     */
    onEnter(): any
  }
}

declare namespace cc {
  namespace TransitionTurnOffTiles {



    /**
     * Turn off the tiles of the outgoing scene in random order
     *
     * @param {Number} t time in seconds
     * @param {cc.Scene} scene
     *
     * @returns {cc.TransitionTurnOffTiles}
     */
    function create(t: number, scene: cc.Scene): cc.TransitionTurnOffTiles
  }
}

declare namespace cc {
  interface Sprite  {

    /**
     * cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) )cc.Sprite can be created with an image, or with a sub-rectangle of an image.If the parent or any of its ancestors is a cc.SpriteBatchNode then the following features/limitations are valid
     * - Features when the parent is a cc.BatchNode:
     * - MUCH faster rendering, specially if the cc.SpriteBatchNode has many children. All the children will be drawn in a single batch.- Limitations
     * - Camera is not supported yet (eg: CCOrbitCamera action doesn't work)
     * - GridBase actions are not supported (eg: CCLens, CCRipple, CCTwirl)
     * - The Alias/Antialias property belongs to CCSpriteBatchNode, so you can't individually set the aliased property.
     * - The Blending function property belongs to CCSpriteBatchNode, so you can't individually set the blending function property.
     * - Parallax scroller is not supported, but can be simulated with a "proxy" sprite.If the parent is an standard cc.Node, then cc.Sprite behaves like any other cc.Node:
     * - It supports blending functions
     * - It supports aliasing / antialiasing
     * - But the rendering will be slower: 1 draw per children.The default anchorPoint in cc.Sprite is (0.5, 0.5).
     *
     * @param {String|cc.SpriteFrame|HTMLImageElement|cc.Texture2D} fileName The string which indicates a path to image file, e.g., "scene1/monster.png".
     * @param {cc.Rect} rect Only the contents inside rect of pszFileName's texture will be applied for this sprite.
     * @param {Boolean} rotated Whether or not the texture rectangle is rotated.
     */
    constructor(fileName: string | cc.SpriteFrame | HTMLImageElement | cc.Texture2D, rect: cc.Rect, rotated: boolean)

    /**
     * - The index used on the TextureAtlas.
     */
    atlasIndex: number

    /**
     * - The batch node object if this sprite is rendered by cc.SpriteBatchNode.
     */
    batchNode: cc.SpriteBatchNode

    /**
     * - Indicates whether the sprite needs to be updated.
     */
    dirty: boolean

    /**
     * - Indicates whether or not the sprite is flipped on x axis.
     */
    flippedX: boolean

    /**
     * - Indicates whether or not the sprite is flipped on y axis.
     */
    flippedY: boolean

    /**
     * - <@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
     */
    offsetX: number

    /**
     * - <@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
     */
    offsetY: number

    /**
     * - <@readonly> The quad (tex coords, vertex coords and color) information.
     */
    quad: cc.V3F_C4B_T2F_Quad

    /**
     * - Texture used to render the sprite.
     */
    texture: cc.Texture2D

    /**
     * - The weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode.
     */
    textureAtlas: cc.TextureAtlas

    /**
     * - <@readonly> Indicate whether the texture rectangle is rotated.
     */
    textureRectRotated: boolean

    /**
     * Add child to sprite (override cc.Node)
     *
     * @param {cc.Sprite} child
     * @param {Number} localZOrder child's zOrder
     * @param {number|String} tag child's tag
     */
    addChild(child: cc.Sprite, localZOrder: number, tag: number | string): any

    /**
     * Add a event listener for texture loaded event.
     *
     * @param {Function} callback
     * @param {Object} target
     */
    addLoadedEventListener(callback: Function, target: object): any

    /**
     * Returns the current displayed frame.
     *
     * @returns {cc.SpriteFrame}
     */
    displayFrame(): cc.SpriteFrame

    /**
     * Returns the index used on the TextureAtlas.
     *
     * @returns {Number}
     */
    getAtlasIndex(): number

    /**
     * Returns the batch node object if this sprite is rendered by cc.SpriteBatchNode
     *
     * @returns {cc.SpriteBatchNode|null} The cc.SpriteBatchNode object if this sprite is rendered by cc.SpriteBatchNode, null if the sprite isn't used batch node.
     */
    getBatchNode(): cc.SpriteBatchNode | null

    /**
     * Returns the blend function
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * Returns the offset position of the sprite. Calculated automatically by editors like Zwoptex.
     *
     * @returns {cc.Point}
     */
    getOffsetPosition(): cc.Point

    /**
     * Returns the quad (tex coords, vertex coords and color) information.
     *
     * @returns {cc.V3F_C4B_T2F_Quad|null} Returns a cc.V3F_C4B_T2F_Quad object when render mode is WebGL, returns null when render mode is Canvas.
     */
    getQuad(): cc.V3F_C4B_T2F_Quad | null

    /**
     * Returns the current displayed frame.
     *
     * @returns {cc.SpriteFrame}
     */
    getSpriteFrame(): cc.SpriteFrame

    /**
     * Returns the texture of the sprite node
     *
     * @returns {cc.Texture2D}
     */
    getTexture(): cc.Texture2D

    /**
     * Returns the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
     *
     * @returns {cc.TextureAtlas}
     */
    getTextureAtlas(): cc.TextureAtlas

    /**
     * Returns the rect of the cc.Sprite in points
     *
     * @returns {cc.Rect}
     */
    getTextureRect(): cc.Rect

    /**
     * Sets whether ignore anchor point for positioning
     *
     * @param {Boolean} relative
     */
    ignoreAnchorPointForPosition(relative: boolean): any

    /**
     * Initializes an empty sprite with nothing init.
     * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
     *
     * @returns {Boolean}
     */
    init(): boolean

    /**
     * Initializes a sprite with an image filename.This method will find pszFilename from local file system, load its content to CCTexture2D,
     * then use CCTexture2D to create a sprite.
     * After initialization, the rect used will be the size of the image. The offset will be (0,0).
     * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
     *
     * @param {String} filename The path to an image file in local file system
     * @param {cc.Rect} rect The rectangle assigned the content area from texture.
     *
     * @returns {Boolean} true if the sprite is initialized properly, false otherwise.
     */
    initWithFile(filename: string, rect: cc.Rect): boolean

    /**
     * Initializes a sprite with a SpriteFrame. The texture and rect in SpriteFrame will be applied on this sprite.
     * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself,
     *
     * @param {cc.SpriteFrame} spriteFrame A CCSpriteFrame object. It should includes a valid texture and a rect
     *
     * @returns {Boolean} true if the sprite is initialized properly, false otherwise.
     */
    initWithSpriteFrame(spriteFrame: cc.SpriteFrame): boolean

    /**
     * Initializes a sprite with a sprite frame name.
     * A cc.SpriteFrame will be fetched from the cc.SpriteFrameCache by name.
     * If the cc.SpriteFrame doesn't exist it will raise an exception.
     * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
     *
     * @param {String} spriteFrameName A key string that can fected a valid cc.SpriteFrame from cc.SpriteFrameCache
     *
     * @returns {Boolean} true if the sprite is initialized properly, false otherwise.
     */
    initWithSpriteFrameName(spriteFrameName: string): boolean

    /**
     * Initializes a sprite with a texture and a rect in points, optionally rotated.
     * After initialization, the rect used will be the size of the texture, and the offset will be (0,0).
     * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
     *
     * @param {cc.Texture2D|HTMLImageElement|HTMLCanvasElement} texture A pointer to an existing CCTexture2D object. You can use a CCTexture2D object for many sprites.
     * @param {cc.Rect} rect Only the contents inside rect of this texture will be applied for this sprite.
     * @param {Boolean} rotated Whether or not the texture rectangle is rotated.
     * @param {Boolean} counterclockwise Whether or not the texture rectangle rotation is counterclockwise (texture package is counterclockwise, spine is clockwise).
     *
     * @returns {Boolean} true if the sprite is initialized properly, false otherwise.
     */
    initWithTexture(texture: cc.Texture2D | HTMLImageElement | HTMLCanvasElement, rect: cc.Rect, rotated: boolean, counterclockwise: boolean): boolean

    /**
     * Returns whether or not the Sprite needs to be updated in the Atlas
     *
     * @returns {Boolean} True if the sprite needs to be updated in the Atlas, false otherwise.
     */
    isDirty(): boolean

    /**
     * Returns the flag which indicates whether the sprite is flipped horizontally or not.
     * It only flips the texture of the sprite, and not the texture of the sprite's children.
     * Also, flipping the texture doesn't alter the anchorPoint.
     * If you want to flip the anchorPoint too, and/or to flip the children too use:
     * sprite.setScaleX(sprite.getScaleX() * -1);
     *
     * @returns {Boolean} true if the sprite is flipped horizontally, false otherwise.
     */
    isFlippedX(): boolean

    /**
     * Return the flag which indicates whether the sprite is flipped vertically or not.
     * It only flips the texture of the sprite, and not the texture of the sprite's children.
     * Also, flipping the texture doesn't alter the anchorPoint.
     * If you want to flip the anchorPoint too, and/or to flip the children too use:
     * sprite.setScaleY(sprite.getScaleY() * -1);
     *
     * @returns {Boolean} true if the sprite is flipped vertically, false otherwise.
     */
    isFlippedY(): boolean

    /**
     * Returns whether or not a cc.SpriteFrame is being displayed
     *
     * @param {cc.SpriteFrame} frame
     *
     * @returns {Boolean}
     */
    isFrameDisplayed(frame: cc.SpriteFrame): boolean

    /**
     * Returns whether opacity modify color or not.
     *
     * @returns {Boolean}
     */
    isOpacityModifyRGB(): boolean

    /**
     * Returns whether or not the texture rectangle is rotated.
     *
     * @returns {Boolean}
     */
    isTextureRectRotated(): boolean

    /**
     * Removes all children from the container.
     *
     * @param {} cleanup whether or not cleanup all running actions
     */
    removeAllChildren(cleanup: any): any

    /**
     * Removes a child from the sprite.
     *
     * @param {} child
     * @param {} cleanup whether or not cleanup all running actions
     */
    removeChild(child: any, cleanup: any): any

    /**
     * Reorders a child according to a new z value. (override cc.Node )
     *
     * @param {cc.Node} child
     * @param {Number} zOrder
     */
    reorderChild(child: cc.Node, zOrder: number): any

    /**
     * Sets the index used on the TextureAtlas.
     *
     * @param {Number} atlasIndex
     */
    setAtlasIndex(atlasIndex: number): any

    /**
     * Sets the batch node to sprite
     *
     * @param {cc.SpriteBatchNode|null} spriteBatchNode
     */
    setBatchNode(spriteBatchNode: cc.SpriteBatchNode | null): any

    /**
     * conforms to cc.TextureProtocol protocol
     *
     * @param {Number|cc.BlendFunc} src
     * @param {Number} dst
     */
    setBlendFunc(src: number | cc.BlendFunc, dst: number): any

    /**
     * Makes the sprite to be updated in the Atlas.
     *
     * @param {Boolean} bDirty
     */
    setDirty(bDirty: boolean): any

    /**
     * Sets a new display frame to the sprite.
     *
     * @param {cc.SpriteFrame|String} newFrame
     */
    setDisplayFrame(newFrame: cc.SpriteFrame | string): any

    /**
     * Changes the display frame with animation name and index.
     * The animation name will be get from the CCAnimationCache
     *
     * @param {String} animationName
     * @param {Number} frameIndex
     */
    setDisplayFrameWithAnimationName(animationName: string, frameIndex: number): any

    /**
     * Sets whether the sprite should be flipped horizontally or not.
     *
     * @param {Boolean} flippedX true if the sprite should be flipped horizontally, false otherwise.
     */
    setFlippedX(flippedX: boolean): any

    /**
     * Sets whether the sprite should be flipped vertically or not.
     *
     * @param {Boolean} flippedY true if the sprite should be flipped vertically, false otherwise.
     */
    setFlippedY(flippedY: boolean): any

    /**
     * Sets whether opacity modify color or not.
     *
     * @param {Boolean} modify
     */
    setOpacityModifyRGB(modify: boolean): any

    /**
     * Sets a new sprite frame to the sprite.
     *
     * @param {cc.SpriteFrame|String} newFrame
     */
    setSpriteFrame(newFrame: cc.SpriteFrame | string): any

    /**
     * Sets the texture of sprite
     *
     * @param {cc.Texture2D|String} texture
     */
    setTexture(texture: cc.Texture2D | string): any

    /**
     * Sets the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
     *
     * @param {cc.TextureAtlas} textureAtlas
     */
    setTextureAtlas(textureAtlas: cc.TextureAtlas): any

    /**
     * Updates the texture rect of the CCSprite in points.
     *
     * @param {cc.Rect} rect a rect of texture
     * @param {Boolean} rotated Whether or not the texture is rotated
     * @param {cc.Size} untrimmedSize The original pixels size of the texture
     * @param {Boolean} needConvert contentScaleFactor switch
     */
    setTextureRect(rect: cc.Rect, rotated: boolean, untrimmedSize: cc.Size, needConvert: boolean): any

    /**
     * set the vertex rect.
     * It will be called internally by setTextureRect.
     * Useful if you want to create 2x images from SD images in Retina Display.
     * Do not call it manually. Use setTextureRect instead.
     * (override this method to generate "double scale" sprites)
     *
     * @param {cc.Rect} rect
     */
    setVertexRect(rect: cc.Rect): any

    /**
     * Sets whether the sprite is visible or not.
     *
     * @param {Boolean} visible
     */
    setVisible(visible: boolean): any

    /**
     * Sort all children of this sprite node.
     */
    sortAllChildren(): any

    /**
     * Returns whether the texture have been loaded
     *
     * @returns {boolean}
     */
    textureLoaded(): boolean

    /**
     * Tell the sprite to use batch node render.
     *
     * @param {cc.SpriteBatchNode} batchNode
     */
    useBatchNode(batchNode: cc.SpriteBatchNode): any
  }
}

declare namespace cc {
  namespace Sprite {


    /**
     * cc.Sprite invalid index on the cc.SpriteBatchNode
     */
    enum INDEX_NOT_INITIALIZED { }

    /**
     * Create a sprite with image path or frame name or texture or spriteFrame.
     *
     * @param {String|cc.SpriteFrame|HTMLImageElement|cc.Texture2D} fileName The string which indicates a path to image file, e.g., "scene1/monster.png".
     * @param {cc.Rect} rect Only the contents inside rect of pszFileName's texture will be applied for this sprite.
     * @param {Boolean} rotated Whether or not the texture rectangle is rotated.
     *
     * @returns {cc.Sprite} A valid sprite objectcc.Sprite
     */
    function create(fileName: string | cc.SpriteFrame | HTMLImageElement | cc.Texture2D, rect: cc.Rect, rotated: boolean): cc.Sprite

    /**
     *
     */
    function createWithSpriteFrame(): any

    /**
     *
     */
    function createWithSpriteFrameName(): any

    /**
     *
     */
    function createWithTexture(): any
  }
}

declare namespace cc {
  interface ControlSwitchSprite  {

    /**
     * ControlSwitchSprite: Sprite switch control ui component
     */
    constructor()

    /**
     * - The position of the mask
     */
    maskPos: cc.Point

    /**
     * - The texture of the mask
     */
    maskTexture: cc.Texture2D

    /**
     * - The sprite of switch off
     */
    offLabel: cc.LabelTTF

    /**
     * - The position of slider when switch is off
     */
    offPos: cc.Point

    /**
     * - <@readonly> The width of the off side of the switch control
     */
    offSideWidth: number

    /**
     * - The sprite of switch off
     */
    offSprite: cc.Sprite

    /**
     * - The sprite of switch on
     */
    onLabel: cc.LabelTTF

    /**
     * - The position of slider when switch is on
     */
    onPos: cc.Point

    /**
     * - <@readonly> The width of the on side of the switch control
     */
    onSideWidth: number

    /**
     * - The sprite of switch on
     */
    onSprite: cc.Sprite

    /**
     * - Slider's x position
     */
    sliderX: number

    /**
     * - The position of the texture
     */
    texturePos: cc.Point

    /**
     * - The thumb sprite of the switch control
     */
    thumbSprite: cc.Sprite

  }
}

declare namespace cc {
  interface LabelTTF  {

    /**
     * cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels with system font or a ttf font file
     * All features from cc.Sprite are valid in cc.LabelTTF
     * cc.LabelTTF objects are slow for js-binding on mobile devices.
     * Consider using cc.LabelAtlas or cc.LabelBMFont instead.
     * You can create a cc.LabelTTF from a font name, alignment, dimension and font size or a cc.FontDefinition object.
     *
     * @param {String} text
     * @param {String|cc.FontDefinition} fontName
     * @param {Number} fontSize
     * @param {cc.Size} dimensions
     * @param {Number} hAlignment
     * @param {Number} vAlignment
     */
    constructor(text: string, fontName: string | cc.FontDefinition, fontSize: number, dimensions: cc.Size, hAlignment: number, vAlignment: number)

    /**
     * - Height of the bounding box of label, the real content height is limited by boundingHeight
     */
    boundingHeight: number

    /**
     * - Width of the bounding box of label, the real content width is limited by boundingWidth
     */
    boundingWidth: number

    /**
     * - The fill color
     */
    fillStyle: cc.Color

    /**
     * - The label font with a style string: e.g. "18px Verdana"
     */
    font: string

    /**
     * - Font name of label
     */
    fontName: string

    /**
     * - Font size of label
     */
    fontSize: number

    /**
     * - The line width for stroke
     */
    lineWidth: number

    /**
     * - The blur size of shadow
     */
    shadowBlur: number

    /**
     * - The x axis offset of shadow
     */
    shadowOffsetX: number

    /**
     * - The y axis offset of shadow
     */
    shadowOffsetY: number

    /**
     * - The opacity of shadow
     */
    shadowOpacity: number

    /**
     * - Content string of label
     */
    string: string

    /**
     * - The stroke color
     */
    strokeStyle: cc.Color

    /**
     * - Horizontal Alignment of label: cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT
     */
    textAlign: number

    /**
     * - Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM
     */
    verticalAlign: number

    /**
     * Disable shadow rendering
     */
    disableShadow(): any

    /**
     * Disable label stroke
     */
    disableStroke(): any

    /**
     * Enable or disable shadow for the label
     *
     * @param {cc.Color | Number} a Color or The x axis offset of the shadow
     * @param {cc.Size | Number} b Size or The y axis offset of the shadow
     * @param {Number} c The blur size of the shadow or The opacity of the shadow (0 to 1)
     * @param {null | Number} d Null or The blur size of the shadow
     */
    enableShadow(a: cc.Color | number, b: cc.Size | number, c: number, d: null | number): any

    /**
     * Enable label stroke with stroke parameters
     *
     * @param {cc.Color} strokeColor The color of stroke
     * @param {Number} strokeSize The size of stroke
     */
    enableStroke(strokeColor: cc.Color, strokeSize: number): any

    /**
     * Returns the actual content size of the label, the content size is the real size that the label occupied while dimension is the outer bounding box of the label.
     *
     * @returns {cc.Size} The content size
     */
    getContentSize(): cc.Size

    /**
     * Returns the dimensions of cc.LabelTTF, the dimension is the maximum size of the label, set it so that label will automatically change lines when necessary.
     *
     * @returns {cc.Size} cc.LabelTTF#setDimensions, cc.LabelTTF#boundingWidth and cc.LabelTTF#boundingHeight
     */
    getDimensions(): cc.Size

    /**
     * Returns font name of cc.LabelTTF
     *
     * @returns {String}
     */
    getFontName(): string

    /**
     * Returns font size of cc.LabelTTF
     *
     * @returns {Number}
     */
    getFontSize(): number

    /**
     * Returns Horizontal Alignment of cc.LabelTTF
     *
     * @returns {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT}
     */
    getHorizontalAlignment(): cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT

    /**
     * Returns the scale factor of the node.
     *
     * @returns {Number} The scale factor
     */
    getScale(): number

    /**
     * Returns the scale factor on X axis of this node
     *
     * @returns {Number} The scale factor on X axis.
     */
    getScaleX(): number

    /**
     * Returns the scale factor on Y axis of this node
     *
     * @returns {Number} The scale factor on Y axis.
     */
    getScaleY(): number

    /**
     * Returns the text of the label
     *
     * @returns {String}
     */
    getString(): string

    /**
     * Extract the text definition used by this label
     *
     * @returns {cc.FontDefinition}
     */
    getTextDefinition(): cc.FontDefinition

    /**
     * Returns Vertical Alignment of cc.LabelTTF
     *
     * @returns {cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM}
     */
    getVerticalAlignment(): cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM

    /**
     * Initializes the cc.LabelTTF with a font name, alignment, dimension and font size, do not call it by yourself,
     * you should pass the correct arguments in constructor to initialize the label.
     *
     * @param {String} label string
     * @param {String} fontName
     * @param {Number} fontSize
     * @param {cc.Size} dimensions
     * @param {Number} hAlignment
     * @param {Number} vAlignment
     *
     * @returns {Boolean} return false on error
     */
    initWithString(label: string, fontName: string, fontSize: number, dimensions: cc.Size, hAlignment: number, vAlignment: number): boolean

    /**
     * Initializes the CCLabelTTF with a font name, alignment, dimension and font size, do not call it by yourself, you should pass the correct arguments in constructor to initialize the label.
     *
     * @param {String} text
     * @param {cc.FontDefinition} textDefinition
     *
     * @returns {Boolean}
     */
    initWithStringAndTextDefinition(text: string, textDefinition: cc.FontDefinition): boolean

    /**
     * Set Dimensions of cc.LabelTTF, the dimension is the maximum size of the label, set it so that label will automatically change lines when necessary.
     *
     * @param {cc.Size|Number} dim dimensions or width of dimensions
     * @param {Number} height height of dimensions
     */
    setDimensions(dim: cc.Size | number, height: number): any

    /**
     * set Target to draw on
     *
     * @param {} boolean onCanvas
     */
    setDrawMode(boolean: any): any

    /**
     * Sets the text fill color
     *
     * @param {cc.Color} fillColor The fill color of the label
     */
    setFontFillColor(fillColor: cc.Color): any

    /**
     * Sets font name of cc.LabelTTF
     *
     * @param {String} fontName
     */
    setFontName(fontName: string): any

    /**
     * Sets font size of cc.LabelTTF
     *
     * @param {Number} fontSize
     */
    setFontSize(fontSize: number): any

    /**
     * Sets Horizontal Alignment of cc.LabelTTF
     *
     * @param {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT} alignment Horizontal Alignment
     */
    setHorizontalAlignment(alignment: cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT): any

    /**
     * Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.
     *
     * @param {Number} scale or scaleX value
     * @param {Number} scaleY
     */
    setScale(scale: number, scaleY: number): any

    /**
     * Changes the scale factor on X axis of this node
     * The default value is 1.0 if you haven't changed it before
     *
     * @param {Number} newScaleX The scale factor on X axis.
     */
    setScaleX(newScaleX: number): any

    /**
     * Changes the scale factor on Y axis of this node
     * The Default value is 1.0 if you haven't changed it before.
     *
     * @param {Number} newScaleY The scale factor on Y axis.
     */
    setScaleY(newScaleY: number): any

    /**
     * Changes the text content of the label
     *
     * @param {String} text Text content for the label
     */
    setString(text: string): any

    /**
     * Sets the text definition used by this label
     *
     * @param {cc.FontDefinition} theDefinition
     */
    setTextDefinition(theDefinition: cc.FontDefinition): any

    /**
     * Sets Vertical Alignment of cc.LabelTTF
     *
     * @param {cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM} verticalAlignment
     */
    setVerticalAlignment(verticalAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM): any
  }
}

declare namespace cc {
  namespace LabelTTF {



    /**
     * creates a cc.LabelTTF from a font name, alignment, dimension and font size
     *
     * @param {String} text
     * @param {String|cc.FontDefinition} fontName
     * @param {Number} fontSize
     * @param {cc.Size} dimensions
     * @param {Number} hAlignment
     * @param {Number} vAlignment
     *
     * @returns {cc.LabelTTF|Null} cc.LabelTTF
     */
    function create(text: string, fontName: string | cc.FontDefinition, fontSize: number, dimensions: cc.Size, hAlignment: number, vAlignment: number): cc.LabelTTF | null

    /**
     *
     */
    function createWithFontDefinition(): any
  }
}

declare namespace cc {
  interface TextFieldTTF  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates a cc.TextFieldTTF from a fontName, alignment, dimension and font size.
     *
     * @param {String} placeholder
     * @param {cc.Size} dimensions
     * @param {Number} alignment
     * @param {String} fontName
     * @param {Number} fontSize
     */
    constructor(placeholder: string, dimensions: cc.Size, alignment: number, fontName: string, fontSize: number)

    /**
     * - <@readonly> Characators count
     */
    charCount: number

    /**
     *
     */
    colorSpaceHolder: cc.Color

    /**
     * - Delegate
     */
    delegate: cc.Node

    /**
     * - Place holder for the field
     */
    placeHolder: string

    /**
     * Open keyboard and receive input text.
     *
     * @returns {Boolean}
     */
    attachWithIME(): boolean

    /**
     * Return whether to allow attach with IME.
     *
     * @returns {Boolean}
     */
    canAttachWithIME(): boolean

    /**
     * Return whether to allow detach with IME.
     *
     * @returns {Boolean}
     */
    canDetachWithIME(): boolean

    /**
     * Delete backward
     */
    deleteBackward(): any

    /**
     * End text input and close keyboard.
     *
     * @returns {Boolean}
     */
    detachWithIME(): boolean

    /**
     * When the delegate detach with IME, this method call by CCIMEDispatcher.
     */
    didAttachWithIME(): any

    /**
     * When the delegate detach with IME, this method call by CCIMEDispatcher.
     */
    didDetachWithIME(): any

    /**
     * Render function using the canvas 2d context or WebGL context, internal usage only, please do not call this function.
     *
     * @param {CanvasRenderingContext2D | WebGLRenderingContext} ctx The render context
     */
    draw(ctx: CanvasRenderingContext2D | WebGLRenderingContext): any

    /**
     * Gets the char count.
     *
     * @returns {Number}
     */
    getCharCount(): number

    /**
     * Returns the color of space holder.
     *
     * @returns {cc.Color}
     */
    getColorSpaceHolder(): cc.Color

    /**
     * Gets the input text.
     *
     * @returns {String}
     */
    getContentText(): string

    /**
     * Gets the delegate.
     *
     * @returns {cc.Node}
     */
    getDelegate(): cc.Node

    /**
     * Gets the place holder.
     * default display string.
     *
     * @returns {String}
     */
    getPlaceHolder(): string

    /**
     * Gets the string
     *
     * @returns {String}
     */
    getString(): string

    /**
     * Gets the input tip message to show on mobile browser. (mobile Web only)
     *
     * @returns {string}
     */
    getTipMessage(): string

    /**
     * Initializes the cc.TextFieldTTF with a font name, alignment, dimension and font size
     *
     * @param {String} placeholder
     * @param {cc.Size} dimensions
     * @param {Number} alignment
     * @param {String} fontName
     * @param {Number} fontSize
     *
     * @returns {Boolean}
     */
    initWithPlaceHolder(placeholder: string, dimensions: cc.Size, alignment: number, fontName: string, fontSize: number): boolean

    /**
     * Append the text.
     * Input the character.
     *
     * @param {String} text
     * @param {Number} len
     */
    insertText(text: string, len: number): any

    /**
     * Remove delegate
     */
    removeDelegate(): any

    /**
     * Sets the color of space holder.
     *
     * @param {cc.Color} value
     */
    setColorSpaceHolder(value: cc.Color): any

    /**
     * Set the delegate.
     *
     * @param {cc.Node} value
     */
    setDelegate(value: cc.Node): any

    /**
     * Set the place holder.
     * display this string if string equal "".
     *
     * @param {String} text
     */
    setPlaceHolder(text: string): any

    /**
     * Input text property
     *
     * @param {String} text
     */
    setString(text: string): any

    /**
     * Sets the color of cc.TextFieldTTF's text.
     *
     * @param {cc.Color} textColor
     */
    setTextColor(textColor: cc.Color): any

    /**
     * Sets the input tip message to show on mobile browser. (mobile Web only)
     *
     * @param {string} tipMessage
     */
    setTipMessage(tipMessage: string): any

    /**
     * Recursive method that visit its children and draw them.
     *
     * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
     */
    visit(ctx: CanvasRenderingContext2D | WebGLRenderingContext): any
  }
}

declare namespace cc {
  namespace TextFieldTTF {



    /**
     * Please use new TextFieldTTF instead.
     * Creates a cc.TextFieldTTF from a fontName, alignment, dimension and font size.
     *
     * @param {String} placeholder
     * @param {cc.Size} dimensions
     * @param {Number} alignment
     * @param {String} fontName
     * @param {Number} fontSize
     *
     * @returns {cc.TextFieldTTF|Null}
     */
    function create(placeholder: string, dimensions: cc.Size, alignment: number, fontName: string, fontSize: number): cc.TextFieldTTF | null
  }
}

declare namespace cc {
  interface SpriteBatchNode  {

    /**
     * A cc.SpriteBatchNode can reference one and only one texture (one image file, one texture atlas).
     * Only the cc.Sprites that are contained in that texture can be added to the cc.SpriteBatchNode.
     * All cc.Sprites added to a cc.SpriteBatchNode are drawn in one WebGL draw call.
     * If the cc.Sprites are not added to a cc.SpriteBatchNode then an WebGL draw call will be needed for each one, which is less efficient.
     * Limitations:
     * - The only object that is accepted as child (or grandchild, grand-grandchild, etc...) is cc.Sprite or any subclass of cc.Sprite.
     * eg: particles, labels and layer can't be added to a cc.SpriteBatchNode.
     * - Either all its children are Aliased or Antialiased. It can't be a mix.
     * This is because "alias" is a property of the texture, and all the sprites share the same texture.
     *
     * @param {String|cc.Texture2D} fileImage
     */
    constructor(fileImage: string | cc.Texture2D)

    /**
     * - <@readonly> Descendants of sprite batch node
     */
    descendants: any[]

    /**
     * - The texture atlas
     */
    textureAtlas: cc.TextureAtlas

    /**
     * Add child to the sprite batch node (override addChild of cc.Node)
     *
     * @param {cc.Sprite} child
     * @param {Number} zOrder
     * @param {Number} tag
     */
    addChild(child: cc.Sprite, zOrder: number, tag: number): any

    /**
     * Same as addChild
     *
     * @param {cc.Sprite} child
     * @param {Number} z zOrder
     * @param {Number} aTag
     *
     * @returns {cc.SpriteBatchNode}
     */
    addSpriteWithoutQuad(child: cc.Sprite, z: number, aTag: number): cc.SpriteBatchNode

    /**
     * Add child at the end
     *
     * @param {cc.Sprite} sprite
     */
    appendChild(sprite: cc.Sprite): any

    /**
     * Returns index for child
     *
     * @param {cc.Sprite} sprite
     *
     * @returns {Number}
     */
    atlasIndexForChild(sprite: cc.Sprite): number

    /**
     * Returns the blending function used for the texture
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * Return Descendants of cc.SpriteBatchNode
     *
     * @returns {Array}
     */
    getDescendants(): any[]

    /**
     * Returns texture of the sprite batch node
     *
     * @returns {cc.Texture2D}
     */
    getTexture(): cc.Texture2D

    /**
     * Return null, no texture atlas is used any more
     *
     * @returns {cc.TextureAtlas}
     */
    getTextureAtlas(): cc.TextureAtlas

    /**
     * Returns highest atlas index in child
     *
     * @param {cc.Sprite} sprite
     *
     * @returns {Number}
     */
    highestAtlasIndexInChild(sprite: cc.Sprite): number

    /**
     * Do nothing
     */
    increaseAtlasCapacity(): any

    /**
     * initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
     * The capacity will be increased in 33% in runtime if it run out of space.
     * The file will be loaded using the TextureMgr.
     * Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
     *
     * @param {String} fileImage
     * @param {Number} capacity
     *
     * @returns {Boolean}
     */
    init(fileImage: string, capacity: number): boolean

    /**
     * Initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
     * The capacity will be increased in 33% in runtime if it run out of space.
     * The file will be loaded using the TextureMgr.
     * Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
     *
     * @param {String} fileImage
     * @param {Number} capacity
     *
     * @returns {Boolean}
     */
    initWithFile(fileImage: string, capacity: number): boolean

    /**
     * Set the texture property
     *
     * @param {cc.Texture2D} tex
     *
     * @returns {Boolean}
     */
    initWithTexture(tex: cc.Texture2D): boolean

    /**
     * Same as addChild(sprite, index)
     *
     * @param {cc.Sprite} sprite The child sprite
     * @param {Number} index The insert index
     */
    insertChild(sprite: cc.Sprite, index: number): any

    /**
     * Same as addChild(sprite, index)
     *
     * @param {cc.Sprite} sprite
     * @param {Number} index
     */
    insertQuadFromSprite(sprite: cc.Sprite, index: number): any

    /**
     * Returns lowest atlas index in child
     *
     * @param {cc.Sprite} sprite
     *
     * @returns {Number}
     */
    lowestAtlasIndexInChild(sprite: cc.Sprite): number

    /**
     * Do nothing
     *
     * @param {cc.Sprite} pobParent
     * @param {Number} index
     *
     * @returns {Number}
     */
    rebuildIndexInOrder(pobParent: cc.Sprite, index: number): number

    /**
     * Removes a child given a certain index. It will also cleanup the running actions depending on the cleanup parameter.
     *
     * @param {Number} index
     * @param {Boolean} doCleanup
     */
    removeChildAtIndex(index: number, doCleanup: boolean): any

    /**
     * Same as removeChild
     *
     * @param {cc.Sprite} sprite
     * @param {Boolean} cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise.
     */
    removeSpriteFromAtlas(sprite: cc.Sprite, cleanup: boolean): any

    /**
     * Sprites use this to start sortChildren, don't call this manually
     *
     * @param {Boolean} reorder
     */
    reorderBatch(reorder: boolean): any

    /**
     * Sets the source and destination blending function for the texture
     *
     * @param {Number | cc.BlendFunc} src
     * @param {Number} dst
     */
    setBlendFunc(src: number | cc.BlendFunc, dst: number): any

    /**
     * Sets the texture of the sprite batch node.
     *
     * @param {cc.Texture2D} texture
     */
    setTexture(texture: cc.Texture2D): any

    /**
     * TextureAtlas of cc.SpriteBatchNode setter
     *
     * @param {cc.TextureAtlas} textureAtlas
     */
    setTextureAtlas(textureAtlas: cc.TextureAtlas): any

    /**
     * Updates a quad at a certain index into the texture atlas. The CCSprite won't be added into the children array.
     * This method should be called only when you are dealing with very big AtlasSrite and when most of the cc.Sprite won't be updated.
     * For example: a tile map (cc.TMXMap) or a label with lots of characters (BitmapFontAtlas)
     *
     * @param {cc.Sprite} sprite
     * @param {Number} index
     */
    updateQuadFromSprite(sprite: cc.Sprite, index: number): any
  }
}

declare namespace cc {
  namespace SpriteBatchNode {



    /**
     * creates a cc.SpriteBatchNodeCanvas with a file image (.png, .jpg etc) with a default capacity of 29 children.
     * The capacity will be increased in 33% in runtime if it run out of space.
     * The file will be loaded using the TextureMgr.
     *
     * @param {String|cc.Texture2D} fileImage
     *
     * @returns {cc.SpriteBatchNode} cc.SpriteBatchNode
     */
    function create(fileImage: string | cc.Texture2D): cc.SpriteBatchNode

    /**
     *
     */
    function createWithTexture(): any
  }
}

declare namespace cc {
  interface LabelBMFont  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     * creates a bitmap font atlas with an initial string and the FNT file.
     *
     * @param {String} str
     * @param {String} fntFile
     * @param {Number} width
     * @param {Number} alignment
     * @param {cc.Point} imageOffset
     */
    constructor(str: string, fntFile: string, width: number, alignment: number, imageOffset: cc.Point)

    /**
     * - Width of the bounding box of label, the real content width is limited by boundingWidth
     */
    boundingWidth: number

    /**
     * - Content string of label
     */
    string: string

    /**
     * - Horizontal Alignment of label, cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT
     */
    textAlign: number

    /**
     * add texture loaded event listener.
     * Will execute the callback in the loaded.
     *
     * @param {Function} callback
     * @param {Object} target
     */
    addLoadedEventListener(callback: Function, target: object): any

    /**
     * updates the font chars based on the string to render
     */
    createFontChars(): any

    /**
     * Return the fnt file path.
     *
     * @returns {String}
     */
    getFntFile(): string

    /**
     * Gets the text of this label
     *
     * @returns {String}
     */
    getString(): string

    /**
     * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
     */
    init(): any

    /**
     * init a bitmap font atlas with an initial string and the FNT file
     *
     * @param {String} str
     * @param {String} fntFile
     * @param {Number} width
     * @param {Number} alignment
     * @param {cc.Point} imageOffset
     *
     * @returns {Boolean}
     */
    initWithString(str: string, fntFile: string, width: number, alignment: number, imageOffset: cc.Point): boolean

    /**
     * Conforms to cc.RGBAProtocol protocol.
     *
     * @returns {Boolean}
     */
    isOpacityModifyRGB(): boolean

    /**
     * Set text alignment.
     *
     * @param {Number} alignment
     */
    setAlignment(alignment: number): any

    /**
     * Set the AnchorPoint of the labelBMFont.
     * In order to change the location of label.
     *
     * @param {cc.Point|Number} point The anchor point of labelBMFont or The anchor point.x of labelBMFont.
     * @param {Number} y The anchor point.y of labelBMFont.
     */
    setAnchorPoint(point: cc.Point | number, y: number): any

    /**
     * Set the bounding width.
     * max with display width. The exceeding string will be wrapping.
     *
     * @param {Number} width
     */
    setBoundingWidth(width: number): any

    /**
     * Set the text.
     * Change this Label display string.
     *
     * @param {} label
     */
    setCString(label: any): any

    /**
     * set fnt file path.
     * Change the fnt file path.
     *
     * @param {String} fntFile
     */
    setFntFile(fntFile: string): any

    /**
     * Set the param to change English word warp according to whether the space.
     * default is false.
     *
     * @param {Boolean} breakWithoutSpace
     */
    setLineBreakWithoutSpace(breakWithoutSpace: boolean): any

    /**
     * Set whether to support cc.RGBAProtocol protocol
     *
     * @param {Boolean} opacityModifyRGB
     */
    setOpacityModifyRGB(opacityModifyRGB: boolean): any

    /**
     * Set scale.
     * Input a number, will be decrease or increase the font size.
     *
     * @param {Number} scale
     * @param {Number} scaleY default is scale
     */
    setScale(scale: number, scaleY: number): any

    /**
     * Set scale of x.
     * Input a number, will be decrease or increase the font size.
     * Horizontal scale.
     *
     * @param {Number} scaleX
     */
    setScaleX(scaleX: number): any

    /**
     * Set scale of x.
     * Input a number, will be decrease or increase the font size.
     * Longitudinal scale.
     *
     * @param {Number} scaleY
     */
    setScaleY(scaleY: number): any

    /**
     * Set the text
     *
     * @param {String} newString
     * @param {Boolean|null} needUpdateLabel
     */
    setString(newString: string, needUpdateLabel: boolean | null): any

    /**
     * return texture is loaded
     *
     * @returns {boolean}
     */
    textureLoaded(): boolean

    /**
     * Update Label.
     * Update this Label display string and more...
     */
    updateLabel(): any

    /**
     * Update String.
     * Only update this label display string.
     *
     * @param {Boolean} fromUpdate
     */
    updateString(fromUpdate: boolean): any
  }
}

declare namespace cc {
  namespace LabelBMFont {



    /**
     * creates a bitmap font atlas with an initial string and the FNT file
     *
     * @param {String} str
     * @param {String} fntFile
     * @param {Number} width
     * @param {Number} alignment
     * @param {cc.Point} imageOffset
     *
     * @returns {cc.LabelBMFont|Null}
     */
    function create(str: string, fntFile: string, width: number, alignment: number, imageOffset: cc.Point): cc.LabelBMFont | null
  }
}

declare namespace cc {
  interface TMXLayer  {

    /**
     * Creates a cc.TMXLayer with an tile set info, a layer info and a map info
     * Constructor of cc.TMXLayer
     *
     * @param {cc.TMXTilesetInfo} tilesetInfo
     * @param {cc.TMXLayerInfo} layerInfo
     * @param {cc.TMXMapInfo} mapInfo
     */
    constructor(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo)

    /**
     * - Height of the layer
     */
    layerHeight: number

    /**
     * - Name of the layer
     */
    layerName: string

    /**
     * - Layer orientation
     */
    layerOrientation: number

    /**
     * - Width of the layer
     */
    layerWidth: number

    /**
     * - Properties from the layer. They can be added using tilemap editors
     */
    properties: any[]

    /**
     * - Height of a tile
     */
    tileHeight: number

    /**
     * - Tiles for layer
     */
    tiles: any[]

    /**
     * - Tileset for layer
     */
    tileset: cc.TMXTilesetInfo

    /**
     * - Width of a tile
     */
    tileWidth: number

    /**
     * Gets the layer name
     *
     * @returns {String}
     */
    getLayerName(): string

    /**
     * Layer orientation, which is the same as the map orientation
     *
     * @returns {Number}
     */
    getLayerOrientation(): number

    /**
     * Gets layer size.
     *
     * @returns {cc.Size}
     */
    getLayerSize(): cc.Size

    /**
     * Size of the map's tile (could be different from the tile's size)
     *
     * @returns {cc.Size}
     */
    getMapTileSize(): cc.Size

    /**
     * Returns the position in pixels of a given tile coordinate
     *
     * @param {cc.Point|Number} pos position or x
     * @param {Number} y
     *
     * @returns {cc.Point}
     */
    getPositionAt(pos: cc.Point | number, y: number): cc.Point

    /**
     * properties from the layer. They can be added using Tiled
     *
     * @returns {Array}
     */
    getProperties(): any[]

    /**
     * Return the value for the specific property name
     *
     * @param {String} propertyName
     *
     * @returns {*}
     */
    getProperty(propertyName: string): any

    /**
     * Returns the tile (cc.Sprite) at a given a tile coordinate.
     * The returned cc.Sprite will be already added to the cc.TMXLayer. Don't add it again.
     * The cc.Sprite can be treated like any other cc.Sprite: rotated, scaled, translated, opacity, color, etc.
     * You can remove either by calling:
     * - layer.removeChild(sprite, cleanup);
     * - or layer.removeTileAt(ccp(x,y));
     *
     * @param {cc.Point|Number} pos or x
     * @param {Number} y
     *
     * @returns {cc.Sprite}
     */
    getTileAt(pos: cc.Point | number, y: number): cc.Sprite

    /**
     * lipped tiles can be changed dynamically
     *
     * @param {cc.Point|Number} pos or x
     * @param {Number} y
     *
     * @returns {Number}
     */
    getTileFlagsAt(pos: cc.Point | number, y: number): number

    /**
     * Returns the tile gid at a given tile coordinate.
     * if it returns 0, it means that the tile is empty.
     * This method requires the the tile map has not been previously released (eg. don't call layer.releaseMap())
     *
     * @param {cc.Point|Number} pos or x
     * @param {Number} y
     *
     * @returns {Number}
     */
    getTileGIDAt(pos: cc.Point | number, y: number): number

    /**
     * Pointer to the map of tiles
     *
     * @returns {Array}
     */
    getTiles(): any[]

    /**
     * Tile set information for the layer
     *
     * @returns {cc.TMXTilesetInfo}
     */
    getTileset(): cc.TMXTilesetInfo

    /**
     * Initializes a cc.TMXLayer with a tileset info, a layer info and a map info
     *
     * @param {cc.TMXTilesetInfo} tilesetInfo
     * @param {cc.TMXLayerInfo} layerInfo
     * @param {cc.TMXMapInfo} mapInfo
     *
     * @returns {Boolean}
     */
    initWithTilesetInfo(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo): boolean

    /**
     * Dealloc the map that contains the tile position from memory.
     * Unless you want to know at runtime the tiles positions, you can safely call this method.
     * If you are going to call layer.getTileGIDAt() then, don't release the map
     */
    releaseMap(): any

    /**
     * Removes a tile at given tile coordinate
     *
     * @param {cc.Point|Number} pos position or x
     * @param {Number} y
     */
    removeTileAt(pos: cc.Point | number, y: number): any

    /**
     * Set the layer name
     *
     * @param {String} layerName
     */
    setLayerName(layerName: string): any

    /**
     * Layer orientation, which is the same as the map orientation
     *
     * @param {Number} Var
     */
    setLayerOrientation(Var: number): any

    /**
     * Set layer size
     *
     * @param {cc.Size} Var
     */
    setLayerSize(Var: cc.Size): any

    /**
     * Set the map tile size.
     *
     * @param {cc.Size} Var
     */
    setMapTileSize(Var: cc.Size): any

    /**
     * properties from the layer. They can be added using Tiled
     *
     * @param {Array} Var
     */
    setProperties(Var: any[]): any

    /**
     * Sets the tile gid (gid = tile global id) at a given tile coordinate.
     * The Tile GID can be obtained by using the method "tileGIDAt" or by using the TMX editor . Tileset Mgr +1.
     * If a tile is already placed at that position, then it will be removed.
     *
     * @param {Number} gid
     * @param {cc.Point|Number} posOrX position or x
     * @param {Number} flagsOrY flags or y
     * @param {Number} flags
     */
    setTileGID(gid: number, posOrX: cc.Point | number, flagsOrY: number, flags: number): any

    /**
     * Pointer to the map of tiles
     *
     * @param {Array} Var
     */
    setTiles(Var: any[]): any

    /**
     * Tile set information for the layer
     *
     * @param {cc.TMXTilesetInfo} Var
     */
    setTileset(Var: cc.TMXTilesetInfo): any
  }
}

declare namespace cc {
  namespace TMXLayer {



    /**
     * Creates a cc.TMXLayer with an tile set info, a layer info and a map info
     *
     * @param {cc.TMXTilesetInfo} tilesetInfo
     * @param {cc.TMXLayerInfo} layerInfo
     * @param {cc.TMXMapInfo} mapInfo
     *
     * @returns {cc.TMXLayer|Null}
     */
    function create(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo): cc.TMXLayer | null
  }
}

declare namespace cc {
  interface TableViewCell  {

    /**
     * Abstract class for SWTableView cell node
     */
    constructor()

    /**
     * - The index used internally by SWTableView and its subclasses
     */
    objectId: number

    /**
     * The index used internally by SWTableView and its subclasses
     */
    getIdx(): any

    /**
     * Cleans up any resources linked to this cell and resets idx property.
     */
    reset(): any
  }
}

declare namespace cc {
  interface TMXTiledMap  {

    /**
     * Creates a TMX Tiled Map with a TMX file or content string.
     * Constructor of cc.TMXTiledMap
     *
     * @param {String} tmxFile tmxFile fileName or content string
     * @param {String} resourcePath If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
     */
    constructor(tmxFile: string, resourcePath: string)

    /**
     * - Height of the map
     */
    mapHeight: number

    /**
     * - Map orientation
     */
    mapOrientation: number

    /**
     * - Width of the map
     */
    mapWidth: number

    /**
     * - Object groups of the map
     */
    objectGroups: any[]

    /**
     * - Properties from the map. They can be added using tilemap editors
     */
    properties: any[]

    /**
     * - Height of a tile
     */
    tileHeight: number

    /**
     * - Width of a tile
     */
    tileWidth: number

    /**
     * Return All layers array.
     *
     * @returns {Array}
     */
    allLayers(): any[]

    /**
     * return the TMXLayer for the specific layer
     *
     * @param {String} layerName
     *
     * @returns {cc.TMXLayer}
     */
    getLayer(layerName: string): cc.TMXLayer

    /**
     * map orientation
     *
     * @returns {Number}
     */
    getMapOrientation(): number

    /**
     * Gets the map size.
     *
     * @returns {cc.Size}
     */
    getMapSize(): cc.Size

    /**
     * Return the TMXObjectGroup for the specific group
     *
     * @param {String} groupName
     *
     * @returns {cc.TMXObjectGroup}
     */
    getObjectGroup(groupName: string): cc.TMXObjectGroup

    /**
     * object groups
     *
     * @returns {Array}
     */
    getObjectGroups(): any[]

    /**
     * Gets the properties
     *
     * @returns {object}
     */
    getProperties(): object

    /**
     * Return properties dictionary for tile GID
     *
     * @param {Number} GID
     *
     * @returns {object}
     */
    getPropertiesForGID(GID: number): object

    /**
     * Return the value for the specific property name
     *
     * @param {String} propertyName
     *
     * @returns {String}
     */
    getProperty(propertyName: string): string

    /**
     * Gets the tile size.
     *
     * @returns {cc.Size}
     */
    getTileSize(): cc.Size

    /**
     * Initializes the instance of cc.TMXTiledMap with tmxFile
     *
     * @param {String} tmxFile
     *
     * @returns {Boolean} Whether the initialization was successful.
     */
    initWithTMXFile(tmxFile: string): boolean

    /**
     * Initializes the instance of cc.TMXTiledMap with tmxString
     *
     * @param {String} tmxString
     * @param {String} resourcePath
     *
     * @returns {Boolean} Whether the initialization was successful.
     */
    initWithXML(tmxString: string, resourcePath: string): boolean

    /**
     * Return properties dictionary for tile GID
     *
     * @param {Number} GID
     *
     * @returns {object}
     */
    propertiesForGID(GID: number): object

    /**
     * map orientation
     *
     * @param {Number} Var
     */
    setMapOrientation(Var: number): any

    /**
     * Set the map size.
     *
     * @param {cc.Size} Var
     */
    setMapSize(Var: cc.Size): any

    /**
     * object groups
     *
     * @param {Array} Var
     */
    setObjectGroups(Var: any[]): any

    /**
     * Set the properties
     *
     * @param {object} Var
     */
    setProperties(Var: object): any

    /**
     * Set the tile size
     *
     * @param {cc.Size} Var
     */
    setTileSize(Var: cc.Size): any
  }
}

declare namespace cc {
  namespace TMXTiledMap {



    /**
     * Creates a TMX Tiled Map with a TMX file or content string.
     * Implementation cc.TMXTiledMap
     *
     * @param {String} tmxFile tmxFile fileName or content string
     * @param {String} resourcePath If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
     *
     * @returns {cc.TMXTiledMap|undefined}
     */
    function create(tmxFile: string, resourcePath: string): cc.TMXTiledMap | undefined
  }
}

declare namespace ccui {
  interface Scale9Sprite  {

    /**
     * Constructor function. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {string|cc.SpriteFrame} file file name of texture or a SpriteFrame
     * @param {cc.Rect} rectOrCapInsets
     * @param {cc.Rect} capInsets
     *
     * @returns {Scale9Sprite}
     */
    constructor(file: string | cc.SpriteFrame, rectOrCapInsets: cc.Rect, capInsets: cc.Rect)

    /**
     * - The cap insets of the 9-slice sprite
     */
    capInsets: cc.Rect

    /**
     * - The bottom inset of the 9-slice sprite
     */
    insetBottom: number

    /**
     * - The left inset of the 9-slice sprite
     */
    insetLeft: number

    /**
     * - The right inset of the 9-slice sprite
     */
    insetRight: number

    /**
     * - The top inset of the 9-slice sprite
     */
    insetTop: number

    /**
     * - The preferred size of the 9-slice sprite
     */
    preferredSize: cc.Size

    /**
     * add texture loaded event listener
     *
     * @param {Function} callback
     * @param {Object} target
     */
    addLoadedEventListener(callback: Function, target: object): any

    /**
     * Gets the bottom side inset
     *
     * @returns {number}
     */
    getInsetBottom(): number

    /**
     * Gets the left side inset
     *
     * @returns {number}
     */
    getInsetLeft(): number

    /**
     * Gets the right side inset
     *
     * @returns {number}
     */
    getInsetRight(): number

    /**
     * Gets the top side inset
     *
     * @returns {number}
     */
    getInsetTop(): number

    /**
     * Original sprite's size.
     */
    getOriginalSize(): any

    /**
     * Initializes a ccui.Scale9Sprite. please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Initializes a 9-slice sprite with a SpriteBatchNode.
     *
     * @param {cc.SpriteBatchNode} batchNode
     * @param {cc.Rect} rect
     * @param {boolean|cc.Rect} rotated
     * @param {cc.Rect} capInsets
     *
     * @returns {boolean}
     */
    initWithBatchNode(batchNode: cc.SpriteBatchNode, rect: cc.Rect, rotated: boolean | cc.Rect, capInsets: cc.Rect): boolean

    /**
     * Initializes a 9-slice sprite with a texture file, a delimitation zone and
     * with the specified cap insets.
     * Once the sprite is created, you can then call its "setContentSize:" method
     * to resize the sprite will all it's 9-slice goodness intact.
     * It respects the anchorPoint too.
     *
     * @param {String} file The name of the texture file.
     * @param {cc.Rect} rect The rectangle that describes the sub-part of the texture that
     * is the whole image. If the shape is the whole texture, set this to the texture's full rect.
     * @param {cc.Rect} capInsets The values to use for the cap insets.
     */
    initWithFile(file: string, rect: cc.Rect, capInsets: cc.Rect): any

    /**
     * Initializes a 9-slice sprite with an sprite frame and with the specified
     * cap insets.
     * Once the sprite is created, you can then call its "setContentSize:" method
     * to resize the sprite will all it's 9-slice goodness interact.
     * It respects the anchorPoint too.
     *
     * @param {} spriteFrame The sprite frame object.
     * @param {} capInsets The values to use for the cap insets.
     */
    initWithSpriteFrame(spriteFrame: any, capInsets: any): any

    /**
     * Initializes a 9-slice sprite with an sprite frame name and with the specified
     * cap insets.
     * Once the sprite is created, you can then call its "setContentSize:" method
     * to resize the sprite will all it's 9-slice goodness interact.
     * It respects the anchorPoint too.
     *
     * @param {} spriteFrameName The sprite frame name.
     * @param {} capInsets The values to use for the cap insets.
     */
    initWithSpriteFrameName(spriteFrameName: any, capInsets: any): any

    /**
     * Returns the flag which indicates whether the widget is flipped horizontally or not.
     * It only flips the texture of the widget, and not the texture of the widget's children.
     * Also, flipping the texture doesn't alter the anchorPoint.
     * If you want to flip the anchorPoint too, and/or to flip the children too use:
     * widget->setScaleX(sprite->getScaleX() * -1);
     *
     * @returns v3.3{Boolean} true if the widget is flipped horizontally, false otherwise.
     */
    isFlippedX(): boolean

    /**
     * Return the flag which indicates whether the widget is flipped vertically or not.
     * It only flips the texture of the widget, and not the texture of the widget's children.
     * Also, flipping the texture doesn't alter the anchorPoint.
     * If you want to flip the anchorPoint too, and/or to flip the children too use:
     * widget->setScaleY(widget->getScaleY() * -1);
     *
     * @returns v3.3{Boolean} true if the widget is flipped vertically, false otherwise.
     */
    isFlippedY(): boolean

    /**
     * returns whether or not the opacity will be applied using glColor(R,G,B,opacity) or glColor(opacity, opacity, opacity, opacity);
     */
    isOpacityModifyRGB(): any

    /**
     * Creates and returns a new sprite object with the specified cap insets.
     * You use this method to add cap insets to a sprite or to change the existing
     * cap insets of a sprite. In both cases, you get back a new image and the
     * original sprite remains untouched.
     *
     * @param {cc.Rect} capInsets The values to use for the cap insets.
     */
    resizableSpriteWithCapInsets(capInsets: cc.Rect): any

    /**
     * Color: conforms to CCRGBAProtocol protocol
     *
     * @param {} color
     */
    setColor(color: any): any

    /**
     * Sets the untransformed size of the Scale9Sprite.
     *
     * @param {cc.Size|Number} size The untransformed size of the Scale9Sprite or The untransformed size's width of the Scale9Sprite.
     * @param {Number} height The untransformed size's height of the Scale9Sprite.
     */
    setContentSize(size: cc.Size | number, height: number): any

    /**
     * Sets whether the widget should be flipped horizontally or not.
     *
     * @param {} flippedX true if the widget should be flipped horizontally, false otherwise.
     */
    setFlippedX(flippedX: any): any

    /**
     * Sets whether the widget should be flipped vertically or not.
     *
     * @param {} flippedY true if the widget should be flipped vertically, false otherwise.
     */
    setFlippedY(flippedY: any): any

    /**
     * Sets the bottom side inset
     *
     * @param {number} insetBottom
     */
    setInsetBottom(insetBottom: number): any

    /**
     * Sets the left side inset
     *
     * @param {Number} insetLeft
     */
    setInsetLeft(insetLeft: number): any

    /**
     * Sets the right side inset
     *
     * @param {Number} insetRight
     */
    setInsetRight(insetRight: number): any

    /**
     * Sets the top side inset
     *
     * @param {Number} insetTop
     */
    setInsetTop(insetTop: number): any

    /**
     * Opacity: conforms to CCRGBAProtocol protocol
     *
     * @param {} opacity
     */
    setOpacity(opacity: any): any

    /**
     * sets the premultipliedAlphaOpacity property.
     * If set to NO then opacity will be applied as: glColor(R,G,B,opacity);
     * If set to YES then opacity will be applied as: glColor(opacity, opacity, opacity, opacity );
     * Textures with premultiplied alpha will have this property by default on YES. Otherwise the default value is NO
     *
     * @param {} value
     */
    setOpacityModifyRGB(value: any): any

    /**
     *
     *
     * @param {boolean} enabled True to enable 9-slice, false otherwise.
     */
    setScale9Enabled(enabled: boolean): any

    /**
     * set the sprite frame of ccui.Scale9Sprite
     *
     * @param {cc.SpriteFrame} spriteFrame
     * @param {cc.rect} capInsets
     */
    setSpriteFrame(spriteFrame: cc.SpriteFrame, capInsets: cc.Rect): any

    /**
     * Sets ccui.Scale9Sprite's state
     *
     * @param {Number} state
     */
    setState(state: number): any

    /**
     * return texture is loaded
     *
     * @returns {boolean}
     */
    textureLoaded(): boolean

    /**
     * Update the scale9Sprite with a SpriteBatchNode.
     *
     * @param {cc.SpriteBatchNode} batchNode
     * @param {cc.Rect} originalRect
     * @param {boolean} rotated
     * @param {cc.Rect} capInsets
     *
     * @returns {boolean}
     */
    updateWithBatchNode(batchNode: cc.SpriteBatchNode, originalRect: cc.Rect, rotated: boolean, capInsets: cc.Rect): boolean

    /**
     *
     *
     * @param {} sprite A sprite pointer.
     * @param {} spriteRect A delimitation zone.
     * @param {} spriteFrameRotated Whether the sprite is rotated or not.
     * @param {} offset The offset when slice the sprite.
     * @param {} originalSize The origial size of the sprite.
     * @param {} capInsets The Values to use for the cap insets.
     */
    updateWithSprite(sprite: any, spriteRect: any, spriteFrameRotated: any, offset: any, originalSize: any, capInsets: any): any
  }
}

declare namespace ccui {
  namespace Scale9Sprite {



    /**
     * Creates a 9-slice sprite with a texture file, a delimitation zone and
     * with the specified cap insets.
     *
     * @param {String|cc.SpriteFrame} file file name of texture or a cc.Sprite object
     * @param {cc.Rect} rect the rect of the texture
     * @param {cc.Rect} capInsets the cap insets of ccui.Scale9Sprite
     *
     * @returns {ccui.Scale9Sprite}
     */
    function create(file: string | cc.SpriteFrame, rect: cc.Rect, capInsets: cc.Rect): ccui.Scale9Sprite

    /**
     * create a ccui.Scale9Sprite with Sprite frame.
     *
     * @param {cc.SpriteFrame} spriteFrame
     * @param {cc.Rect} capInsets
     *
     * @returns {ccui.Scale9Sprite}
     */
    function createWithSpriteFrame(spriteFrame: cc.SpriteFrame, capInsets: cc.Rect): ccui.Scale9Sprite

    /**
     * create a ccui.Scale9Sprite with a Sprite frame name
     *
     * @param {string} spriteFrameName
     * @param {cc.Rect} capInsets
     *
     * @returns {Scale9Sprite}
     */
    function createWithSpriteFrameName(spriteFrameName: string, capInsets: cc.Rect): ccui.Scale9Sprite
  }
}

declare namespace sp {
  interface Skeleton  {

    /**
     * The constructor of sp.Skeleton. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {} skeletonDataFile
     * @param {} atlasFile
     * @param {} scale
     */
    constructor(skeletonDataFile: any, atlasFile: any, scale: any)


    /**
     * Finds a bone by name. This does a string comparison for every bone.
     *
     * @param {String} boneName
     *
     * @returns {spine.Bone}
     */
    findBone(boneName: string): spine.Bone

    /**
     * Finds a slot by name. This does a string comparison for every slot.
     *
     * @param {String} slotName
     *
     * @returns {spine.Slot}
     */
    findSlot(slotName: string): spine.Slot

    /**
     * Returns the attachment for the slot and attachment name. The skeleton looks first in its skin, then in the skeleton data’s default skin.
     *
     * @param {String} slotName
     * @param {String} attachmentName
     *
     * @returns {spine.RegionAttachment|spine.BoundingBoxAttachment}
     */
    getAttachment(slotName: string, attachmentName: string): spine.RegionAttachment | spine.BoundingBoxAttachment

    /**
     * Returns the blendFunc of sp.Skeleton.
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * Returns the bounding box of sp.Skeleton.
     *
     * @returns {cc.Rect}
     */
    getBoundingBox(): cc.Rect

    /**
     * Gets whether open debug bones.
     *
     * @returns {boolean} true to open, false to close.
     */
    getDebugBonesEnabled(): boolean

    /**
     * Gets whether open debug slots.
     *
     * @returns {boolean} true to open, false to close.
     */
    getDebugSlotsEnabled(): boolean

    /**
     * Return the renderer of attachment.
     *
     * @param {spine.RegionAttachment|spine.BoundingBoxAttachment} regionAttachment
     *
     * @returns {cc.Node}
     */
    getTextureAtlas(regionAttachment: spine.RegionAttachment | spine.BoundingBoxAttachment): cc.Node

    /**
     * Initializes a sp.Skeleton. please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
     */
    init(): any

    /**
     * Initializes sp.Skeleton with Data.
     *
     * @param {spine.SkeletonData|String} skeletonDataFile
     * @param {String|spine.Atlas|spine.SkeletonData} atlasFile atlas filename or atlas data or owns SkeletonData
     * @param {Number} scale scale can be specified on the JSON or binary loader which will scale the bone positions, image sizes, and animation translations.
     */
    initWithArgs(skeletonDataFile: spine.SkeletonData | string, atlasFile: string | spine.TextureAtlas | spine.SkeletonData, scale: number): any

    /**
     * Returns whether to enable premultiplied alpha.
     *
     * @returns {boolean}
     */
    isPremultipliedAlpha(): boolean

    /**
     * Sets the attachment for the slot and attachment name. The skeleton looks first in its skin, then in the skeleton data’s default skin.
     *
     * @param {String} slotName
     * @param {String} attachmentName
     */
    setAttachment(slotName: string, attachmentName: string): any

    /**
     * Sets the blendFunc of sp.Skeleton.
     *
     * @param {cc.BlendFunc|Number} src
     * @param {Number} dst
     */
    setBlendFunc(src: cc.BlendFunc | number, dst: number): any

    /**
     * Sets the bones to the setup pose, using the values from the `BoneData` list in the `SkeletonData`.
     */
    setBonesToSetupPose(): any

    /**
     * Sets whether open debug bones.
     *
     * @param {boolean} enable
     */
    setDebugBones(enable: boolean): any

    /**
     * Sets whether open debug bones.
     *
     * @param {boolean} enabled
     */
    setDebugBonesEnabled(enabled: boolean): any

    /**
     * Sets whether open debug slots.
     *
     * @param {boolean} enabled true to open, false to close.
     */
    setDebugSlotsEnabled(enabled: boolean): any

    /**
     * Sets whether open debug slots.
     *
     * @param {boolean} enable true to open, false to close.
     */
    setDebugSolots(enable: boolean): any

    /**
     * Sets the premultiplied alpha value to sp.Skeleton.
     *
     * @param {Number} alpha
     */
    setPremultipliedAlpha(alpha: number): any

    /**
     * Sets skeleton data to sp.Skeleton.
     *
     * @param {spine.SkeletonData} skeletonData
     * @param {spine.SkeletonData} ownsSkeletonData
     */
    setSkeletonData(skeletonData: spine.SkeletonData, ownsSkeletonData: spine.SkeletonData): any

    /**
     * Finds a skin by name and makes it the active skin. This does a string comparison for every skin. Note that setting the skin does not change which attachments are visible.
     *
     * @param {string} skinName
     *
     * @returns {spine.Skin}
     */
    setSkin(skinName: string): spine.Skin

    /**
     * Sets the slots to the setup pose, using the values from the `SlotData` list in the `SkeletonData`.
     */
    setSlotsToSetupPose(): any

    /**
     * Sets the time scale of sp.Skeleton.
     *
     * @param {Number} scale
     */
    setTimeScale(scale: number): any

    /**
     * Sets the bones and slots to the setup pose.
     */
    setToSetupPose(): any

    /**
     * Update will be called automatically every frame if "scheduleUpdate" is called when the node is "live".
     *
     * @param {Number} dt Delta time since last update
     */
    update(dt: number): any

    /**
     * Computes the world SRT from the local SRT for each bone.
     */
    updateWorldTransform(): any
  }
}

declare namespace sp {
  namespace Skeleton {



    /**
     * Creates a skeleton object.
     *
     * @param {spine.SkeletonData|String} skeletonDataFile
     * @param {String|spine.Atlas|spine.SkeletonData} atlasFile atlas filename or atlas data or owns SkeletonData
     * @param {Number} scale scale can be specified on the JSON or binary loader which will scale the bone positions, image sizes, and animation translations.
     *
     * @returns {sp.Skeleton}
     */
    function create(skeletonDataFile: spine.SkeletonData | string, atlasFile: string | spine.TextureAtlas | spine.SkeletonData, scale: number): sp.Skeleton
  }
}

declare namespace sp {
  interface SkeletonAnimation  {

    /**
     * The skeleton animation of spine. It updates animation's state and skeleton's world transform.
     */
    constructor()


    /**
     * Adds an animation to be played delay seconds after the current or last queued animation.
     *
     * @param {Number} trackIndex
     * @param {String} name
     * @param {Boolean} loop
     * @param {Number} delay
     *
     * @returns {spine.TrackEntry|null}
     */
    addAnimation(trackIndex: number, name: string, loop: boolean, delay: number): spine.TrackEntry | null

    /**
     * Clears track of animation state by trackIndex.
     *
     * @param {Number} trackIndex
     */
    clearTrack(trackIndex: number): any

    /**
     * Clears all tracks of animation state.
     */
    clearTracks(): any

    /**
     * Returns track entry by trackIndex.
     *
     * @param {} trackIndex
     *
     * @returns {spine.TrackEntry|null}
     */
    getCurrent(trackIndex: any): spine.TrackEntry | null

    /**
     * Initializes a sp.SkeletonAnimation. please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
     */
    init(): any

    /**
     * Set the current animation. Any queued animations are cleared.
     *
     * @param {Number} trackIndex
     * @param {String} name
     * @param {Boolean} loop
     *
     * @returns {spine.TrackEntry|null}
     */
    setAnimation(trackIndex: number, name: string, loop: boolean): spine.TrackEntry | null

    /**
     * Sets event listener of sp.SkeletonAnimation.
     *
     * @param {Object} target
     * @param {Function} callback
     */
    setAnimationListener(target: object, callback: Function): any

    /**
     * Sets animation state data to sp.SkeletonAnimation.
     *
     * @param {spine.AnimationStateData} stateData
     */
    setAnimationStateData(stateData: spine.AnimationStateData): any

    /**
     * Set the end event listener.
     *
     * @param {function} listener
     */
    setEndListener(listener: Function): any

    /**
     * Mix applies all keyframe values, interpolated for the specified time and mixed with the current values.
     *
     * @param {String} fromAnimation
     * @param {String} toAnimation
     * @param {Number} duration
     */
    setMix(fromAnimation: string, toAnimation: string, duration: number): any

    /**
     * Set the start event listener.
     *
     * @param {function} listener
     */
    setStartListener(listener: Function): any

    /**
     * Update will be called automatically every frame if "scheduleUpdate" is called when the node is "live".
     * It updates animation's state and skeleton's world transform.
     *
     * @param {Number} dt Delta time since last update
     */
    update(dt: number): any
  }
}

declare namespace sp {
  namespace SkeletonAnimation {



    /**
     * Creates a skeleton animation object.
     *
     * @param {spine.SkeletonData|String} skeletonDataFile
     * @param {String|spine.Atlas|spine.SkeletonData} atlasFile atlas filename or atlas data or owns SkeletonData
     * @param {Number} scale scale can be specified on the JSON or binary loader which will scale the bone positions, image sizes, and animation translations.
     *
     * @returns {sp.Skeleton}
     */
    function create(skeletonDataFile: spine.SkeletonData | string, atlasFile: string | spine.TextureAtlas | spine.SkeletonData, scale: number): sp.Skeleton
  }
}

declare namespace cc {
  interface PointObject  {

    /**
     * Parallax Object.
     * Parallax required attributes are stored.
     */
    constructor()


    /**
     * Gets the child.
     *
     * @returns {cc.Node}
     */
    getChild(): cc.Node

    /**
     * Gets the offset.
     *
     * @returns {cc.Point}
     */
    getOffset(): cc.Point

    /**
     * Gets the ratio.
     *
     * @returns {cc.Point} Not point, this is ratio.
     */
    getRatio(): cc.Point

    /**
     * initializes cc.PointObject
     *
     * @param {cc.Point} ratio Not point, this is a ratio.
     * @param {cc.Point} offset
     *
     * @returns {Boolean}
     */
    initWithCCPoint(ratio: cc.Point, offset: cc.Point): boolean

    /**
     * Set the child.
     *
     * @param {cc.Node} value
     */
    setChild(value: cc.Node): any

    /**
     * Set the offset.
     *
     * @param {cc.Point} value
     */
    setOffset(value: cc.Point): any

    /**
     * Set the ratio.
     *
     * @param {cc.Point} value
     */
    setRatio(value: cc.Point): any
  }
}

declare namespace cc {
  namespace PointObject {



    /**
     * Create a object to stored parallax data.
     *
     * @param {cc.Point} ratio
     * @param {cc.Point} offset
     *
     * @returns {cc.PointObject}
     */
    function create(ratio: cc.Point, offset: cc.Point): cc.PointObject
  }
}

declare namespace cc {
  interface ResolutionPolicy  {

    /**
     * Constructor of cc.ResolutionPolicy
     *
     * @param {cc.ContainerStrategy} containerStg
     * @param {cc.ContentStrategy} contentStg
     */
    constructor(containerStg: cc.ContainerStrategy, contentStg: cc.ContentStrategy)


    /**
     * Function to apply this resolution policy
     * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
     * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
     *
     * @param {cc.view} view The target view
     * @param {cc.Size} designedResolution The user defined design resolution
     *
     * @returns {object} An object contains the scale X/Y values and the viewport rect
     */
    apply(view: cc.view, designedResolution: cc.Size): object

    /**
     * Manipulation after appyling the strategy
     *
     * @param {cc.view} view The target view
     */
    postApply(view: cc.view): any

    /**
     * Manipulation before applying the resolution policy
     *
     * @param {cc.view} view The target view
     */
    preApply(view: cc.view): any

    /**
     * Setup the container's scale strategy
     *
     * @param {cc.ContainerStrategy} containerStg
     */
    setContainerStrategy(containerStg: cc.ContainerStrategy): any

    /**
     * Setup the content's scale strategy
     *
     * @param {cc.ContentStrategy} contentStg
     */
    setContentStrategy(contentStg: cc.ContentStrategy): any
  }
}

declare namespace cc {
  namespace ResolutionPolicy {


    /**
     *
     */
    enum EXACT_FIT { }

    /**
     *
     */
    enum FIXED_HEIGHT { }

    /**
     *
     */
    enum FIXED_WIDTH { }

    /**
     *
     */
    enum NO_BORDER { }

    /**
     *
     */
    enum SHOW_ALL { }

    /**
     *
     */
    enum UNKNOWN { }

  }
}

declare namespace cc {
  interface saxParser  {

    /**
     * Constructor of cc.SAXParser
     */
    constructor()


    /**
     *
     *
     * @param {String} xmlTxt
     *
     * @returns {Document}
     */
    parse(xmlTxt: string): Document
  }
}

declare namespace cc {
  interface TMXMapInfo  {

    /**
     * Creates a TMX Format with a tmx file or content string
     * Constructor of cc.TMXMapInfo
     *
     * @param {String} tmxFile fileName or content string
     * @param {String} resourcePath If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
     */
    constructor(tmxFile: string, resourcePath: string)

    /**
     * - Current string stored from characters stream.
     */
    currentString: string

    /**
     * - Layer attributes.
     */
    layerAttrs: object

    /**
     * - Height of the map
     */
    mapHeight: number

    /**
     * - Width of the map
     */
    mapWidth: number

    /**
     * - Map orientation.
     */
    orientation: number

    /**
     * - Parent element.
     */
    parentElement: object

    /**
     * - Parent GID.
     */
    parentGID: number

    /**
     * - Properties of the map info.
     */
    properties: any[]

    /**
     * - Is reading storing characters stream.
     */
    storingCharacters: boolean

    /**
     * - Height of a tile
     */
    tileHeight: number

    /**
     * - Width of a tile
     */
    tileWidth: number

    /**
     * - TMX file name.
     */
    tmxFileName: string

    /**
     * Gets the currentString
     *
     * @returns {String}
     */
    getCurrentString(): string

    /**
     * Layer attribute
     *
     * @returns {Object}
     */
    getLayerAttribs(): object

    /**
     * Layers
     *
     * @returns {Array}
     */
    getLayers(): any[]

    /**
     * Map width & height
     *
     * @returns {cc.Size}
     */
    getMapSize(): cc.Size

    /**
     * ObjectGroups
     *
     * @returns {Array}
     */
    getObjectGroups(): any[]

    /**
     * Gets Map orientation.
     *
     * @returns {Number}
     */
    getOrientation(): number

    /**
     * parent element
     *
     * @returns {Object}
     */
    getParentElement(): object

    /**
     * parent GID
     *
     * @returns {Number}
     */
    getParentGID(): number

    /**
     * Properties
     *
     * @returns {Array}
     */
    getProperties(): any[]

    /**
     * Is reading storing characters stream
     *
     * @returns {Boolean}
     */
    getStoringCharacters(): boolean

    /**
     * Gets the tile properties.
     *
     * @returns {object}
     */
    getTileProperties(): object

    /**
     * tilesets
     *
     * @returns {Array}
     */
    getTilesets(): any[]

    /**
     * Tiles width & height
     *
     * @returns {cc.Size}
     */
    getTileSize(): cc.Size

    /**
     * Gets the tmxFileName
     *
     * @returns {String}
     */
    getTMXFileName(): string

    /**
     * Initializes a TMX format with a tmx file
     *
     * @param {String} tmxFile
     *
     * @returns {Element}
     */
    initWithTMXFile(tmxFile: string): Element

    /**
     * initializes a TMX format with an XML string and a TMX resource path
     *
     * @param {String} tmxString
     * @param {String} resourcePath
     *
     * @returns {Boolean}
     */
    initWithXML(tmxString: string, resourcePath: string): boolean

    /**
     * Initalises parsing of an XML file, either a tmx (Map) file or tsx (Tileset) file
     *
     * @param {String} tmxFile
     * @param {boolean} isXmlString
     *
     * @returns {Element}
     */
    parseXMLFile(tmxFile: string, isXmlString: boolean): Element

    /**
     * initializes parsing of an XML string, either a tmx (Map) string or tsx (Tileset) string
     *
     * @param {String} xmlString
     *
     * @returns {Boolean}
     */
    parseXMLString(xmlString: string): boolean

    /**
     * Set the currentString
     *
     * @param {String} currentString
     */
    setCurrentString(currentString: string): any

    /**
     * Layer attribute
     *
     * @param {Object} value
     */
    setLayerAttribs(value: object): any

    /**
     * Layers
     *
     * @param {cc.TMXLayerInfo} value
     */
    setLayers(value: cc.TMXLayerInfo): any

    /**
     * Map width & height
     *
     * @param {cc.Size} value
     */
    setMapSize(value: cc.Size): any

    /**
     * ObjectGroups
     *
     * @param {cc.TMXObjectGroup} value
     */
    setObjectGroups(value: cc.TMXObjectGroup): any

    /**
     * Set the Map orientation.
     *
     * @param {Number} value
     */
    setOrientation(value: number): any

    /**
     * parent element
     *
     * @param {Object} value
     */
    setParentElement(value: object): any

    /**
     * parent GID
     *
     * @param {Number} value
     */
    setParentGID(value: number): any

    /**
     * Properties
     *
     * @param {object} value
     */
    setProperties(value: object): any

    /**
     * Is reading storing characters stream
     *
     * @param {Boolean} value
     */
    setStoringCharacters(value: boolean): any

    /**
     * Set the tile properties.
     *
     * @param {object} tileProperties
     */
    setTileProperties(tileProperties: object): any

    /**
     * tilesets
     *
     * @param {cc.TMXTilesetInfo} value
     */
    setTilesets(value: cc.TMXTilesetInfo): any

    /**
     * Tiles width & height
     *
     * @param {cc.Size} value
     */
    setTileSize(value: cc.Size): any

    /**
     * Set the tmxFileName
     *
     * @param {String} fileName
     */
    setTMXFileName(fileName: string): any
  }
}

declare namespace cc {
  namespace TMXMapInfo {



    /**
     * Creates a TMX Format with a tmx file or content string
     *
     * @param {String} tmxFile fileName or content string
     * @param {String} resourcePath If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
     *
     * @returns {cc.TMXMapInfo}
     */
    function create(tmxFile: string, resourcePath: string): cc.TMXMapInfo
  }
}

declare namespace cc {
  interface Scheduler  {

    /**
     * Scheduler is responsible of triggering the scheduled callbacks.
     * You should not use NSTimer. Instead use this class.
     * There are 2 different types of callbacks (selectors):
     * - update callback: the 'update' callback will be called every frame. You can customize the priority.
     * - custom callback: A custom callback will be called every frame, or with a custom interval of time
     * The 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update callback'. *
     */
    constructor()


    /**
     * Returns time scale of scheduler
     *
     * @returns {Number}
     */
    getTimeScale(): number

    /**
     * Returns whether or not the target is paused
     *
     * @param {cc.Class} target
     *
     * @returns {Boolean}
     */
    isTargetPaused(target: cc.Class): boolean

    /**
     * Pause all selectors from all targets.
     * You should NEVER call this method, unless you know what you are doing.
     */
    pauseAllTargets(): any

    /**
     * Pause all selectors from all targets with a minimum priority.
     * You should only call this with kCCPriorityNonSystemMin or higher.
     *
     * @param {Number} minPriority
     */
    pauseAllTargetsWithMinPriority(minPriority: number): any

    /**
     * Pauses the target.
     * All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.
     * If the target is not present, nothing happens.
     *
     * @param {cc.Class} target
     */
    pauseTarget(target: cc.Class): any

    /**
     * Resumes the target.
     * The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.
     * If the target is not present, nothing happens.
     *
     * @param {cc.Class} target
     */
    resumeTarget(target: cc.Class): any

    /**
     * Resume selectors on a set of targets.
     * This can be useful for undoing a call to pauseAllCallbacks.
     *
     * @param {Array} targetsToResume
     */
    resumeTargets(targetsToResume: any[]): any

    /**
     * The scheduled method will be called every 'interval' seconds.
     * If paused is YES, then it won't be called until it is resumed.
     * If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.
     * If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.
     * repeat let the action be repeated repeat + 1 times, use cc.REPEAT_FOREVER to let the action run continuously
     * delay is the amount of time the action will wait before it'll start
     *
     * @param {cc.Class} target
     * @param {function} callback_fn
     * @param {Number} interval
     * @param {Number} repeat
     * @param {Number} delay
     * @param {Boolean} paused
     */
    scheduleCallbackForTarget(target: cc.Class, callback_fn: Function, interval: number, repeat: number, delay: number, paused: boolean): any

    /**
     * Schedules the 'update' callback_fn for a given target with a given priority.
     * The 'update' callback_fn will be called every frame.
     * The lower the priority, the earlier it is called.
     *
     * @param {cc.Class} target
     * @param {Number} priority
     * @param {Boolean} paused
     */
    scheduleUpdateForTarget(target: cc.Class, priority: number, paused: boolean): any

    /**
     * Modifies the time of all scheduled callbacks.
     * You can use this property to create a 'slow motion' or 'fast forward' effect.
     * Default is 1.0. To create a 'slow motion' effect, use values below 1.0.
     * To create a 'fast forward' effect, use values higher than 1.0.
     *
     * @param {Number} timeScale
     */
    setTimeScale(timeScale: number): any

    /**
     * Unschedules all function callbacks from all targets.
     * You should NEVER call this method, unless you know what you are doing.
     */
    unscheduleAllCallbacks(): any

    /**
     * Unschedules all function callbacks for a given target. This also includes the "update" callback function.
     *
     * @param {cc.Class} target
     */
    unscheduleAllCallbacksForTarget(target: cc.Class): any

    /**
     * Unschedules all function callbacks from all targets with a minimum priority.
     * You should only call this with kCCPriorityNonSystemMin or higher.
     *
     * @param {Number} minPriority
     */
    unscheduleAllCallbacksWithMinPriority(minPriority: number): any

    /**
     * Unschedule a callback function for a given target.
     * If you want to unschedule the "update", use unscheudleUpdateForTarget.
     *
     * @param {cc.Class} target
     * @param {function} callback callback[Function] or key[String]
     */
    unscheduleCallbackForTarget(target: cc.Class, callback: Function): any

    /**
     * Unschedules the update callback function for a given target
     *
     * @param {cc.Class} target
     */
    unscheduleUpdateForTarget(target: cc.Class): any

    /**
     * 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)
     *
     * @param {Number} dt delta time
     */
    update(dt: number): any
  }
}

declare namespace cc {
  namespace Scheduler {


    /**
     * Priority level reserved for system services.
     */
    enum PRIORITY_SYSTEM { }

  }
}

declare namespace cc {
  interface SortableObject  {

    /**
     * The sortable object interface
     */
    constructor()


  }
}

declare namespace cc {
  interface SortedObject  {

    /**
     * The SortedObject class
     */
    constructor()


  }
}

declare namespace cc {
  interface SpriteFrame  {

    /**
     * A cc.SpriteFrame has:
     * - texture: A cc.Texture2D that will be used by the cc.Sprite
     * - rectangle: A rectangle of the texture
     * You can modify the frame of a cc.Sprite by doing:
     *
     * @param {String|cc.Texture2D} filename
     * @param {cc.Rect} rect If parameters' length equal 2, rect in points, else rect in pixels
     * @param {Boolean} rotated Whether the frame is rotated in the texture
     * @param {cc.Point} offset The offset of the frame in the texture
     * @param {cc.Size} originalSize The size of the frame in the texture
     */
    constructor(filename: string | cc.Texture2D, rect: cc.Rect, rotated: boolean, offset: cc.Point, originalSize: cc.Size)


    /**
     * Add a event listener for texture loaded event.
     *
     * @param {Function} callback
     * @param {Object} target
     */
    addLoadedEventListener(callback: Function, target: object): any

    /**
     * Clone the sprite frame
     *
     * @returns {SpriteFrame}
     */
    clone(): SpriteFrame

    /**
     * Copy the sprite frame
     *
     * @returns {cc.SpriteFrame}
     */
    copy(): cc.SpriteFrame

    /**
     * Copy the sprite frame
     *
     * @returns {cc.SpriteFrame}
     */
    copyWithZone(): cc.SpriteFrame

    /**
     * Returns the offset of the frame in the texture
     *
     * @returns {cc.Point}
     */
    getOffset(): cc.Point

    /**
     * Returns the offset of the sprite frame in the texture in pixel
     *
     * @returns {cc.Point}
     */
    getOffsetInPixels(): cc.Point

    /**
     * Returns the original size of the trimmed image
     *
     * @returns {cc.Size}
     */
    getOriginalSize(): cc.Size

    /**
     * Returns the original size of the trimmed image
     *
     * @returns {cc.Size}
     */
    getOriginalSizeInPixels(): cc.Size

    /**
     * Returns the rect of the sprite frame in the texture
     *
     * @returns {cc.Rect}
     */
    getRect(): cc.Rect

    /**
     * Gets the rect of the frame in the texture
     *
     * @returns {cc.Rect}
     */
    getRectInPixels(): cc.Rect

    /**
     * Returns the texture of the frame
     *
     * @returns {cc.Texture2D}
     */
    getTexture(): cc.Texture2D

    /**
     * Initializes SpriteFrame with Texture, rect, rotated, offset and originalSize in pixels.
     * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
     *
     * @param {String|cc.Texture2D} texture
     * @param {cc.Rect} rect if parameters' length equal 2, rect in points, else rect in pixels
     * @param {Boolean} rotated
     * @param {cc.Point} offset
     * @param {cc.Size} originalSize
     *
     * @returns {Boolean}
     */
    initWithTexture(texture: string | cc.Texture2D, rect: cc.Rect, rotated: boolean, offset: cc.Point, originalSize: cc.Size): boolean

    /**
     * Returns whether the sprite frame is rotated in the texture.
     *
     * @returns {Boolean}
     */
    isRotated(): boolean

    /**
     * Sets the offset of the frame in the texture
     *
     * @param {cc.Point} offsets
     */
    setOffset(offsets: cc.Point): any

    /**
     * Sets the offset of the sprite frame in the texture in pixel
     *
     * @param {cc.Point} offsetInPixels
     */
    setOffsetInPixels(offsetInPixels: cc.Point): any

    /**
     * Sets the original size of the trimmed image
     *
     * @param {cc.Size} sizeInPixels
     */
    setOriginalSize(sizeInPixels: cc.Size): any

    /**
     * Sets the original size of the trimmed image
     *
     * @param {cc.Size} sizeInPixels
     */
    setOriginalSizeInPixels(sizeInPixels: cc.Size): any

    /**
     * Sets the rect of the sprite frame in the texture
     *
     * @param {cc.Rect} rect
     */
    setRect(rect: cc.Rect): any

    /**
     * Sets the rect of the frame in the texture
     *
     * @param {cc.Rect} rectInPixels
     */
    setRectInPixels(rectInPixels: cc.Rect): any

    /**
     * Set whether the sprite frame is rotated in the texture.
     *
     * @param {Boolean} bRotated
     */
    setRotated(bRotated: boolean): any

    /**
     * Sets the texture of the frame, the texture is retained automatically
     *
     * @param {cc.Texture2D} texture
     */
    setTexture(texture: cc.Texture2D): any

    /**
     * Returns whether the texture have been loaded
     *
     * @returns {boolean}
     */
    textureLoaded(): boolean
  }
}

declare namespace cc {
  namespace SpriteFrame {



    /**
     * Create a cc.SpriteFrame with a texture filename, rect, rotated, offset and originalSize in pixels.
     * The originalSize is the size in pixels of the frame before being trimmed.
     *
     * @param {String|cc.Texture2D} filename
     * @param {cc.Rect} rect if parameters' length equal 2, rect in points, else rect in pixels
     * @param {Boolean} rotated
     * @param {cc.Point} offset
     * @param {cc.Size} originalSize
     *
     * @returns {cc.SpriteFrame} cc.SpriteFrame
     */
    function create(filename: string | cc.Texture2D, rect: cc.Rect, rotated: boolean, offset: cc.Point, originalSize: cc.Size): cc.SpriteFrame

    /**
     *
     */
    function createWithTexture(): any
  }
}

declare namespace cc {
  interface TextFieldDelegate  {

    /**
     * Text field delegate
     */
    constructor()


    /**
     * If doesn't want draw sender as default, return true.
     *
     * @param {cc.TextFieldTTF} sender
     *
     * @returns {Boolean}
     */
    onDraw(sender: cc.TextFieldTTF): boolean

    /**
     * If the sender doesn't want to attach with IME, return true;
     *
     * @param {cc.TextFieldTTF} sender
     *
     * @returns {Boolean}
     */
    onTextFieldAttachWithIME(sender: cc.TextFieldTTF): boolean

    /**
     * If the sender doesn't want to delete the delText, return true;
     *
     * @param {cc.TextFieldTTF} sender
     * @param {String} delText
     * @param {Number} len
     *
     * @returns {Boolean}
     */
    onTextFieldDeleteBackward(sender: cc.TextFieldTTF, delText: string, len: number): boolean

    /**
     * If the sender doesn't want to detach with IME, return true;
     *
     * @param {cc.TextFieldTTF} sender
     *
     * @returns {Boolean}
     */
    onTextFieldDetachWithIME(sender: cc.TextFieldTTF): boolean

    /**
     * If the sender doesn't want to insert the text, return true;
     *
     * @param {cc.TextFieldTTF} sender
     * @param {String} text
     * @param {Number} len
     *
     * @returns {Boolean}
     */
    onTextFieldInsertText(sender: cc.TextFieldTTF, text: string, len: number): boolean
  }
}

declare namespace cc {
  interface Texture2D  {

    /**
     * This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.
     * The created cc.Texture2D object will always have power-of-two dimensions.
     * Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions
     * i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).
     * Be aware that the content of the generated textures will be upside-down!
     */
    constructor()

    /**
     * - Content height in points
     */
    height: number

    /**
     * - Texture max S
     */
    maxS: number

    /**
     * - Texture max T
     */
    maxT: number

    /**
     * - <@readonly> WebGLTexture Object
     */
    name: WebGLTexture

    /**
     * - <@readonly> Pixel format of the texture
     */
    pixelFormat: number

    /**
     * - <@readonly> Height in pixels
     */
    pixelsHeight: number

    /**
     * - <@readonly> Width in pixels
     */
    pixelsWidth: number

    /**
     * - The shader program used by drawAtPoint and drawInRect
     */
    shaderProgram: cc.GLProgram

    /**
     * - Content width in points
     */
    width: number

  }
}

declare namespace cc {
  interface TextureAtlas  {

    /**
     * Creates a TextureAtlas with an filename and with an initial capacity for Quads.
     * The TextureAtlas capacity can be increased in runtime.
     * Constructor of cc.TextureAtlas
     *
     * @param {String|cc.Texture2D} fileName
     * @param {Number} capacity
     */
    constructor(fileName: string | cc.Texture2D, capacity: number)

    /**
     * - <@readonly> Quantity of quads that can be stored with the current texture atlas size.
     */
    capacity: number

    /**
     * - Indicates whether or not the array buffer of the VBO needs to be updated.
     */
    dirty: boolean

    /**
     * - <@readonly> Quads that are going to be rendered
     */
    quads: any[]

    /**
     * - Image texture for cc.TextureAtlas.
     */
    texture: object

    /**
     * - <@readonly> Quantity of quads that are going to be drawn.
     */
    totalQuads: number

    /**
     * Description
     *
     * @returns {String}
     */
    description(): string

    /**
     * Draws all the Atlas's Quads
     */
    drawQuads(): any

    /**
     * Ensures that after a realloc quads are still empty
     * Used internally by CCParticleBatchNode
     *
     * @param {Number} index
     * @param {Number} amount
     */
    fillWithEmptyQuadsFromIndex(index: number, amount: number): any

    /**
     * Quantity of quads that can be stored with the current texture atlas size
     *
     * @returns {Number}
     */
    getCapacity(): number

    /**
     * Quads that are going to be rendered
     *
     * @returns {Array}
     */
    getQuads(): any[]

    /**
     * Texture of the texture atlas
     *
     * @returns {Image}
     */
    getTexture(): object

    /**
     * Quantity of quads that are going to be drawn.
     *
     * @returns {Number}
     */
    getTotalQuads(): number

    /**
     * Used internally by CCParticleBatchNode
     * don't use this unless you know what you're doing
     *
     * @param {Number} amount
     */
    increaseTotalQuadsWith(amount: number): any

    /**
     * Initializes a TextureAtlas with a filename and with a certain capacity for Quads.
     * The TextureAtlas capacity can be increased in runtime.
     * WARNING: Do not reinitialize the TextureAtlas because it will leak memory.
     *
     * @param {String} file
     * @param {Number} capacity
     *
     * @returns {Boolean}
     */
    initWithFile(file: string, capacity: number): boolean

    /**
     * Initializes a TextureAtlas with a previously initialized Texture2D object, and
     * with an initial capacity for Quads.
     * The TextureAtlas capacity can be increased in runtime.
     * WARNING: Do not reinitialize the TextureAtlas because it will leak memory
     *
     * @param {Image} texture
     * @param {Number} capacity
     *
     * @returns {Boolean}
     */
    initWithTexture(texture: object, capacity: number): boolean

    /**
     * Inserts a Quad (texture, vertex and color) at a certain index
     * index must be between 0 and the atlas capacity - 1
     *
     * @param {cc.V3F_C4B_T2F_Quad} quad
     * @param {Number} index
     */
    insertQuad(quad: cc.V3F_C4B_T2F_Quad, index: number): any

    /**
     * Removes the quad that is located at a certain index and inserts it at a new index
     * This operation is faster than removing and inserting in a quad in 2 different steps
     *
     * @param {Number} fromIndex
     * @param {Number} newIndex
     */
    insertQuadFromIndex(fromIndex: number, newIndex: number): any

    /**
     * Inserts a c array of quads at a given index
     * index must be between 0 and the atlas capacity - 1
     * this method doesn't enlarge the array when amount + index > totalQuads
     *
     * @param {Array} quads
     * @param {Number} index
     * @param {Number} amount
     */
    insertQuads(quads: any[], index: number, amount: number): any

    /**
     * whether or not the array buffer of the VBO needs to be updated
     *
     * @returns {boolean}
     */
    isDirty(): boolean

    /**
     * Moves an amount of quads from oldIndex at newIndex
     *
     * @param {Number} oldIndex
     * @param {Number} amount
     * @param {Number} newIndex
     */
    moveQuadsFromIndex(oldIndex: number, amount: number, newIndex: number): any

    /**
     * Removes all Quads.
     * The TextureAtlas capacity remains untouched. No memory is freed.
     * The total number of quads to be drawn will be 0
     */
    removeAllQuads(): any

    /**
     * Removes a quad at a given index number.
     * The capacity remains the same, but the total number of quads to be drawn is reduced in 1
     *
     * @param {Number} index
     */
    removeQuadAtIndex(index: number): any

    /**
     * Removes a given number of quads at a given index
     *
     * @param {Number} index
     * @param {Number} amount
     */
    removeQuadsAtIndex(index: number, amount: number): any

    /**
     * Resize the capacity of the CCTextureAtlas.
     * The new capacity can be lower or higher than the current one
     * It returns YES if the resize was successful.
     * If it fails to resize the capacity it will return NO with a new capacity of 0.
     * no used for js
     *
     * @param {Number} newCapacity
     *
     * @returns {Boolean}
     */
    resizeCapacity(newCapacity: number): boolean

    /**
     * specify if the array buffer of the VBO needs to be updated
     *
     * @param {Boolean} dirty
     */
    setDirty(dirty: boolean): any

    /**
     *
     *
     * @param {Array} quads
     */
    setQuads(quads: any[]): any

    /**
     *
     *
     * @param {Image} texture
     */
    setTexture(texture: object): any

    /**
     * Updates a Quad (texture, vertex and color) at a certain index
     * index must be between 0 and the atlas capacity - 1
     *
     * @param {cc.V3F_C4B_T2F_Quad} quad
     * @param {Number} index
     */
    updateQuad(quad: cc.V3F_C4B_T2F_Quad, index: number): any
  }
}

declare namespace cc {
  namespace TextureAtlas {



    /**
     * Creates a TextureAtlas with an filename and with an initial capacity for Quads.
     * The TextureAtlas capacity can be increased in runtime.
     *
     * @param {String|cc.Texture2D} fileName
     * @param {Number} capacity
     *
     * @returns {cc.TextureAtlas|Null}
     */
    function create(fileName: string | cc.Texture2D, capacity: number): cc.TextureAtlas | null

    /**
     *
     */
    function createWithTexture(): any
  }
}

declare namespace cc {
  interface Timer  {

    /**
     * cc.Timer's Constructor
     * Constructor of cc.Timer
     */
    constructor()


    /**
     *
     *
     * @returns {Number} returns interval of timer
     */
    getInterval(): number

    /**
     *
     *
     * @param {Number} interval set interval in seconds
     */
    setInterval(interval: number): any

    /**
     * triggers the timer
     *
     * @param {Number} dt delta time
     */
    update(dt: number): any
  }
}

declare namespace cc {
  interface TMXLayerInfo  {

    /**
     * cc.TMXLayerInfo contains the information about the layers like:
     * - Layer name
     * - Layer size
     * - Layer opacity at creation time (it can be modified at runtime)
     * - Whether the layer is visible (if it's not visible, then the CocosNode won't be created)
     * This information is obtained from the TMX file.
     */
    constructor()

    /**
     * - Properties of the layer info.
     */
    properties: any[]

    /**
     * Gets the Properties.
     *
     * @returns {Array}
     */
    getProperties(): any[]

    /**
     * Set the Properties.
     *
     * @param {object} value
     */
    setProperties(value: object): any
  }
}

declare namespace cc {
  namespace TMXLayerInfo {


    /**
     *
     */
    enum ATTRIB_BASE64 { }

    /**
     *
     */
    enum ATTRIB_GZIP { }

    /**
     *
     */
    enum ATTRIB_NONE { }

    /**
     *
     */
    enum ATTRIB_ZLIB { }

  }
}

declare namespace cc {
  interface TMXObjectGroup  {

    /**
     * The cc.TMXObjectGroup's constructor.
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.TMXObjectGroup()".
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()

    /**
     * - Name of the group
     */
    groupName: string

    /**
     * - Properties from the group. They can be added using tilemap editors
     */
    properties: any[]

    /**
     * Gets the Group name.
     *
     * @returns {String}
     */
    getGroupName(): string

    /**
     * Return the dictionary for the specific object name.
     * It will return the 1st object found on the array for the given name.
     *
     * @param {String} objectName
     *
     * @returns {object|Null}
     */
    getObject(objectName: string): object | null

    /**
     * Gets the objects.
     *
     * @returns {Array}
     */
    getObjects(): any[]

    /**
     * Offset position of child objects
     *
     * @returns {cc.Point}
     */
    getPositionOffset(): cc.Point

    /**
     * List of properties stored in a dictionary
     *
     * @returns {Array}
     */
    getProperties(): any[]

    /**
     * Return the dictionary for the specific object name.
     * It will return the 1st object found on the array for the given name.
     *
     * @param {String} objectName
     *
     * @returns {object|Null}
     */
    objectNamed(objectName: string): object | null

    /**
     * Return the value for the specific property name
     *
     * @param {String} propertyName
     *
     * @returns {object}
     */
    propertyNamed(propertyName: string): object

    /**
     * Set the Group name
     *
     * @param {String} groupName
     */
    setGroupName(groupName: string): any

    /**
     * Set the objects.
     *
     * @param {object} objects
     */
    setObjects(objects: object): any

    /**
     * Offset position of child objects
     *
     * @param {cc.Point} offset
     */
    setPositionOffset(offset: cc.Point): any

    /**
     * List of properties stored in a dictionary
     *
     * @param {object} Var
     */
    setProperties(Var: object): any
  }
}

declare namespace cc {
  interface TMXTilesetInfo  {

    /**
     * cc.TMXTilesetInfo contains the information about the tilesets like:
     * - Tileset name
     * - Tileset spacing
     * - Tileset margin
     * - size of the tiles
     * - Image used for the tiles
     * - Image sizeThis information is obtained from the TMX file.
     */
    constructor()

    /**
     * - First grid
     */
    firstGid: number

    /**
     * - Size in pixels of the image
     */
    imageSize: cc.Size | null

    /**
     * - Margin
     */
    margin: number

    /**
     * - Tileset name
     */
    name: string

    /**
     * - Filename containing the tiles (should be sprite sheet / texture atlas)
     */
    sourceImage: string

    /**
     * - Spacing
     */
    spacing: number

    /**
     * Return rect
     *
     * @param {Number} gid
     * @param {} result
     *
     * @returns {cc.Rect}
     */
    rectForGID(gid: number, result: any): cc.Rect
  }
}

declare namespace cc {
  interface Touch  {

    /**
     * The touch event class
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} id
     */
    constructor(x: number, y: number, id: number)


    /**
     * Returns the delta distance from the previous touche to the current one in screen coordinates
     *
     * @returns {cc.Point}
     */
    getDelta(): cc.Point

    /**
     * Returns the id of cc.Touch
     *
     * @returns {Number}
     */
    getID(): number

    /**
     * Returns the id of cc.Touch
     *
     * @returns {Number}
     */
    getId(): number

    /**
     * Returns the current touch location in OpenGL coordinates
     *
     * @returns {cc.Point}
     */
    getLocation(): cc.Point

    /**
     * Returns the current touch location in screen coordinates
     *
     * @returns {cc.Point}
     */
    getLocationInView(): cc.Point

    /**
     * Returns X axis location value
     *
     * @returns {number}
     */
    getLocationX(): number

    /**
     * Returns Y axis location value
     *
     * @returns {number}
     */
    getLocationY(): number

    /**
     * Returns the previous touch location in OpenGL coordinates
     *
     * @returns {cc.Point}
     */
    getPreviousLocation(): cc.Point

    /**
     * Returns the previous touch location in screen coordinates
     *
     * @returns {cc.Point}
     */
    getPreviousLocationInView(): cc.Point

    /**
     * Returns the start touch location in OpenGL coordinates
     *
     * @returns {cc.Point}
     */
    getStartLocation(): cc.Point

    /**
     * Returns the start touch location in screen coordinates
     *
     * @returns {cc.Point}
     */
    getStartLocationInView(): cc.Point

    /**
     * Sets information to touch
     *
     * @param {Number} id
     * @param {Number} x
     * @param {Number} y
     */
    setTouchInfo(id: number, x: number, y: number): any
  }
}

declare namespace cc {
  interface Color  {

    /**
     * Color class, please use cc.color() to construct a color
     *
     * @param {Number} r
     * @param {Number} g
     * @param {Number} b
     * @param {Number} a
     */
    constructor(r: number, g: number, b: number, a: number)


  }
}

declare namespace cc {
  interface configuration  {

    /**
     * cc.configuration is a singleton object which contains some openGL variables
     */
    constructor()


    /**
     * returns whether or not an OpenGL is supported
     *
     * @param {String} searchName
     */
    checkForGLExtension(searchName: string): any

    /**
     * Dumps the current configuration on the console
     */
    dumpInfo(): any

    /**
     * gathers OpenGL / GPU information
     */
    gatherGPUInfo(): any

    /**
     * OpenGL Max Modelview Stack Depth.
     *
     * @returns {Number}
     */
    getMaxModelviewStackDepth(): number

    /**
     * OpenGL Max texture size.
     *
     * @returns {Number}
     */
    getMaxTextureSize(): number

    /**
     * returns the maximum texture units
     *
     * @returns {Number}
     */
    getMaxTextureUnits(): number

    /**
     * Returns the value of a given key. If the key is not found, it will return the default value
     *
     * @param {String} key
     * @param {String|Bool|Number|Object} default_value
     *
     * @returns {String|Bool|Number|Object}
     */
    getValue(key: string, default_value: string | boolean | number | object): string | boolean | number | object

    /**
     * Loads a config file. If the keys are already present, then they are going to be replaced. Otherwise the new keys are added.
     *
     * @param {string} url
     */
    loadConfigFile(url: string): any

    /**
     * Sets a new key/value pair in the configuration dictionary
     *
     * @param {string} key
     * @param {String|Bool|Number|Object} value
     */
    setValue(key: string, value: string | boolean | number | object): any

    /**
     * Whether or not ATITC Texture Compressed is supported
     *
     * @returns {Boolean}
     */
    supportsATITC(): boolean

    /**
     * Whether or not BGRA8888 textures are supported.
     *
     * @returns {Boolean}
     */
    supportsBGRA8888(): boolean

    /**
     * Whether or not glDiscardFramebufferEXT is supported
     *
     * @returns {Boolean}
     */
    supportsDiscardFramebuffer(): boolean

    /**
     * Whether or not ETC Texture Compressed is supported
     *
     * @returns {Boolean}
     */
    supportsETC(): boolean

    /**
     * Whether or not the GPU supports NPOT (Non Power Of Two) textures.
     * OpenGL ES 2.0 already supports NPOT (iOS).
     *
     * @returns {Boolean}
     */
    supportsNPOT(): boolean

    /**
     * Whether or not PVR Texture Compressed is supported
     *
     * @returns {Boolean}
     */
    supportsPVRTC(): boolean

    /**
     * Whether or not S3TC Texture Compressed is supported
     *
     * @returns {Boolean}
     */
    supportsS3TC(): boolean

    /**
     * Whether or not shareable VAOs are supported.
     *
     * @returns {Boolean}
     */
    supportsShareableVAO(): boolean
  }
}

declare namespace cc {
  interface Director  {

    /**
     * ATTENTION: USE cc.director INSTEAD OF cc.Director.
     * cc.director is a singleton object which manage your game's logic flow.
     * Since the cc.director is a singleton, you don't need to call any constructor or create functions,
     * the standard way to use it is by calling:
     * - cc.director.methodName();It creates and handle the main Window and manages how and when to execute the Scenes.
     * The cc.director is also responsible for:
     * - initializing the OpenGL context
     * - setting the OpenGL pixel format (default on is RGB565)
     * - setting the OpenGL pixel format (default on is RGB565)
     * - setting the OpenGL buffer depth (default one is 0-bit)
     * - setting the color for clear screen (default one is BLACK)
     * - setting the projection (default one is 3D)
     * - setting the orientation (default one is Portrait)
     * The cc.director also sets the default OpenGL context:
     * - GL_TEXTURE_2D is enabled
     * - GL_VERTEX_ARRAY is enabled
     * - GL_COLOR_ARRAY is enabled
     * - GL_TEXTURE_COORD_ARRAY is enabledcc.director also synchronizes timers with the refresh rate of the display.
     * Features and Limitations:
     * - Scheduled timers & drawing are synchronizes with the refresh rate of the display
     * - Only supports animation intervals of 1/60 1/30 & 1/15
     */
    constructor()


    /**
     * calculates delta time since last time it was called
     */
    calculateDeltaTime(): any

    /**
     * Converts a view coordinate to an WebGL coordinate
     * Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)
     * Implementation can be found in CCDirectorWebGL
     *
     * @param {cc.Point} uiPoint
     *
     * @returns {cc.Point}
     */
    convertToGL(uiPoint: cc.Point): cc.Point

    /**
     * Converts an WebGL coordinate to a view coordinate
     * Useful to convert node points to window points for calls such as glScissor
     * Implementation can be found in CCDirectorWebGL
     *
     * @param {cc.Point} glPoint
     *
     * @returns {cc.Point}
     */
    convertToUI(glPoint: cc.Point): cc.Point

    /**
     * Draw the scene. This method is called every frame. Don't call it manually.
     */
    drawScene(): any

    /**
     * End the life of director in the next frame
     */
    end(): any

    /**
     * Returns the cc.ActionManager associated with this director
     *
     * @returns {cc.ActionManager}
     */
    getActionManager(): cc.ActionManager

    /**
     * Returns the FPS value
     *
     * @returns {Number}
     */
    getAnimationInterval(): number

    /**
     * Returns the size in pixels of the surface. It could be different than the screen size.
     * High-res devices might have a higher surface size than the screen size.
     *
     * @returns {Number}
     */
    getContentScaleFactor(): number

    /**
     * Returns the cc.director delegate.
     *
     * @returns {cc.DirectorDelegate}
     */
    getDelegate(): cc.DirectorDelegate

    /**
     * Returns the delta time since last frame
     *
     * @returns {Number}
     */
    getDeltaTime(): number

    /**
     * This object will be visited after the main scene is visited.
     * This object MUST implement the "visit" selector.
     * Useful to hook a notification object
     *
     * @returns {cc.Node}
     */
    getNotificationNode(): cc.Node

    /**
     * Get the CCEGLView, where everything is rendered.
     * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
     *
     * @returns {cc.view}
     */
    getOpenGLView(): cc.view

    /**
     * Sets an OpenGL projection.
     * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
     *
     * @returns {Number}
     */
    getProjection(): number

    /**
     * Returns current running Scene. Director can only run one Scene at the time
     *
     * @returns {cc.Scene}
     */
    getRunningScene(): cc.Scene

    /**
     * Returns the cc.Scheduler associated with this director
     *
     * @returns {cc.Scheduler}
     */
    getScheduler(): cc.Scheduler

    /**
     * Returns seconds per frame
     *
     * @returns {Number}
     */
    getSecondsPerFrame(): number

    /**
     * Returns how many frames were called since the director started
     *
     * @returns {Number}
     */
    getTotalFrames(): number

    /**
     * Returns the visible origin of the running scene
     *
     * @returns {cc.Point}
     */
    getVisibleOrigin(): cc.Point

    /**
     * Returns the visible size of the running scene
     *
     * @returns {cc.Size}
     */
    getVisibleSize(): cc.Size

    /**
     * Returns the size of the WebGL view in points.
     * It takes into account any possible rotation (device orientation) of the window
     *
     * @returns {cc.Size}
     */
    getWinSize(): cc.Size

    /**
     * Returns the size of the OpenGL view in pixels.
     * It takes into account any possible rotation (device orientation) of the window.
     * On Mac winSize and winSizeInPixels return the same value.
     *
     * @returns {cc.Size}
     */
    getWinSizeInPixels(): cc.Size

    /**
     * Returns the z eye, only available in WebGL mode
     *
     * @returns {Number}
     */
    getZEye(): number

    /**
     * Returns whether or not to display the FPS informations
     *
     * @returns {Boolean}
     */
    isDisplayStats(): boolean

    /**
     * Returns whether next delta time equals to zero
     *
     * @returns {Boolean}
     */
    isNextDeltaTimeZero(): boolean

    /**
     * Returns whether or not the Director is paused
     *
     * @returns {Boolean}
     */
    isPaused(): boolean

    /**
     * Returns whether or not the replaced scene will receive the cleanup message.
     * If the new scene is pushed, then the old scene won't receive the "cleanup" message.
     * If the new scene replaces the old one, the it will receive the "cleanup" message.
     *
     * @returns {Boolean}
     */
    isSendCleanupToScene(): boolean

    /**
     * Run main loop of director
     */
    mainLoop(): any

    /**
     * Pause the director's ticker
     */
    pause(): any

    /**
     * Pops out a scene from the queue.
     * This scene will replace the running one.
     * The running scene will be deleted. If there are no more scenes in the stack the execution is terminated.
     * ONLY call it if there is a running scene.
     */
    popScene(): any

    /**
     * Pops out all scenes from the queue until the root scene in the queue.
     * This scene will replace the running one.
     * Internally it will call "popToSceneStackLevel(1)"
     */
    popToRootScene(): any

    /**
     * Pops out all scenes from the queue until it reaches "level".
     * If level is 0, it will end the director.
     * If level is 1, it will pop all scenes until it reaches to root scene.
     * If level is <= than the current stack level, it won't do anything.
     *
     * @param {Number} level
     */
    popToSceneStackLevel(level: number): any

    /**
     * Removes cached all cocos2d cached data. It will purge the cc.textureCache, cc.spriteFrameCache, cc.animationCache
     */
    purgeCachedData(): any

    /**
     * Purge the cc.director itself, including unschedule all schedule, remove all event listeners, clean up and exit the running scene, stops all animations, clear cached data.
     */
    purgeDirector(): any

    /**
     * Suspends the execution of the running scene, pushing it on the stack of suspended scenes.
     * The new scene will be executed.
     * Try to avoid big stacks of pushed scenes to reduce memory allocation.
     * ONLY call it if there is a running scene.
     *
     * @param {cc.Scene} scene
     */
    pushScene(scene: cc.Scene): any

    /**
     * Resume director after pause, if the current scene is not paused, nothing will happen.
     */
    resume(): any

    /**
     * Run a scene. Replaces the running scene with a new one or enter the first scene.
     *
     * @param {cc.Scene} scene
     */
    runScene(scene: cc.Scene): any

    /**
     * Sets the cc.ActionManager associated with this director
     *
     * @param {cc.ActionManager} actionManager
     */
    setActionManager(actionManager: cc.ActionManager): any

    /**
     * Enables/disables OpenGL alpha blending.
     * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
     *
     * @param {Boolean} on
     */
    setAlphaBlending(on: boolean): any

    /**
     * Sets animation interval
     *
     * @param {Number} value the animation interval desired
     */
    setAnimationInterval(value: number): any

    /**
     * set color for clear screen.
     * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
     *
     * @param {cc.Color} clearColor
     */
    setClearColor(clearColor: cc.Color): any

    /**
     * The size in pixels of the surface. It could be different than the screen size.
     * High-res devices might have a higher surface size than the screen size.
     *
     * @param {Number} scaleFactor
     */
    setContentScaleFactor(scaleFactor: number): any

    /**
     * Sets the default values based on the CCConfiguration info
     */
    setDefaultValues(): any

    /**
     * Sets the cc.director delegate. It shall implement the CCDirectorDelegate protocol
     *
     * @param {} delegate
     *
     * @returns {cc.DirectorDelegate}
     */
    setDelegate(delegate: any): cc.DirectorDelegate

    /**
     * Enables or disables WebGL depth test.
     * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
     *
     * @param {Boolean} on
     */
    setDepthTest(on: boolean): any

    /**
     * Sets whether display the FPS on the bottom-left corner
     *
     * @param {Boolean} displayStats
     */
    setDisplayStats(displayStats: boolean): any

    /**
     * Sets whether next delta time equals to zero
     *
     * @param {Boolean} nextDeltaTimeZero
     */
    setNextDeltaTimeZero(nextDeltaTimeZero: boolean): any

    /**
     * Starts the registered next scene
     */
    setNextScene(): any

    /**
     * Sets Notification Node
     *
     * @param {cc.Node} node
     */
    setNotificationNode(node: cc.Node): any

    /**
     * Sets the view, where everything is rendered, do not call this function.
     * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
     *
     * @param {cc.view} openGLView
     */
    setOpenGLView(openGLView: cc.view): any

    /**
     * Sets an OpenGL projection.
     * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
     *
     * @param {Number} projection
     */
    setProjection(projection: number): any

    /**
     * Sets the cc.Scheduler associated with this director
     *
     * @param {cc.Scheduler} scheduler
     */
    setScheduler(scheduler: cc.Scheduler): any

    /**
     * Update the view port.
     * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
     */
    setViewport(): any

    /**
     * Starts Animation
     */
    startAnimation(): any

    /**
     * Stops animation
     */
    stopAnimation(): any
  }
}

declare namespace cc {
  namespace Director {


    /**
     * The event after draw of cc.Director
     */
    enum EVENT_AFTER_DRAW { }

    /**
     * The event after update of cc.Director
     */
    enum EVENT_AFTER_UPDATE { }

    /**
     * The event after visit of cc.Director
     */
    enum EVENT_AFTER_VISIT { }

    /**
     * The event projection changed of cc.Director
     */
    enum EVENT_PROJECTION_CHANGED { }

    /**
     * Constant for 2D projection (orthogonal projection)
     */
    enum PROJECTION_2D { }

    /**
     * Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
     */
    enum PROJECTION_3D { }

    /**
     * Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.
     */
    enum PROJECTION_CUSTOM { }

    /**
     * Constant for default projection of cc.Director, default projection is 3D projection
     */
    enum PROJECTION_DEFAULT { }

  }
}

declare namespace cc {
  interface eventManager  {

    /**
     * cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching.
     * The EventListener list is managed in such way so that event listeners can be added and removed
     * while events are being dispatched.
     */
    constructor()


    /**
     * Adds a Custom event listener. It will use a fixed priority of 1.
     *
     * @param {string} eventName
     * @param {function} callback
     *
     * @returns {cc.EventListener} the generated event. Needed in order to remove the event from the dispatcher
     */
    addCustomListener(eventName: string, callback: Function): cc.EventListener

    /**
     * Adds a event listener for a specified event.
     * if the parameter "nodeOrPriority" is a node, it means to add a event listener for a specified event with the priority of scene graph.
     * if the parameter "nodeOrPriority" is a Number, it means to add a event listener for a specified event with the fixed priority.
     *
     * @param {cc.EventListener|Object} listener The listener of a specified event or a object of some event parameters.
     * @param {cc.Node|Number} nodeOrPriority The priority of the listener is based on the draw order of this node or fixedPriority The fixed priority of the listener.
     *
     * @returns {cc.EventListener} Return the listener. Needed in order to remove the event from the dispatcher.
     */
    addListener(listener: cc.EventListener | object, nodeOrPriority: cc.Node | number): cc.EventListener

    /**
     * Dispatches a Custom Event with a event name an optional user data
     *
     * @param {string} eventName
     * @param {*} optionalUserData
     */
    dispatchCustomEvent(eventName: string, optionalUserData: any): any

    /**
     * Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list.
     *
     * @param {cc.Event} event
     */
    dispatchEvent(event: cc.Event): any

    /**
     * Checks whether dispatching events is enabled
     *
     * @returns {boolean}
     */
    isEnabled(): boolean

    /**
     * Pauses all listeners which are associated the specified target.
     *
     * @param {cc.Node} node
     * @param {Boolean} recursive
     */
    pauseTarget(node: cc.Node, recursive: boolean): any

    /**
     * Removes all listeners
     */
    removeAllListeners(): any

    /**
     * Removes all custom listeners with the same event name
     *
     * @param {string} customEventName
     */
    removeCustomListeners(customEventName: string): any

    /**
     * Remove a listener
     *
     * @param {cc.EventListener} listener an event listener or a registered node target
     */
    removeListener(listener: cc.EventListener): any

    /**
     * Removes all listeners with the same event listener type or removes all listeners of a node
     *
     * @param {Number|cc.Node} listenerType listenerType or a node
     * @param {Boolean} recursive
     */
    removeListeners(listenerType: number | cc.Node, recursive: boolean): any

    /**
     * Resumes all listeners which are associated the specified target.
     *
     * @param {cc.Node} node
     * @param {Boolean} recursive
     */
    resumeTarget(node: cc.Node, recursive: boolean): any

    /**
     * Whether to enable dispatching events
     *
     * @param {boolean} enabled
     */
    setEnabled(enabled: boolean): any

    /**
     * Sets listener's priority with fixed value.
     *
     * @param {cc.EventListener} listener
     * @param {Number} fixedPriority
     */
    setPriority(listener: cc.EventListener, fixedPriority: number): any
  }
}

declare namespace cc {
  interface FontDefinition  {

    /**
     * Common usage:var fontDef = new cc.FontDefinition();
     * fontDef.fontName = "Arial";
     * fontDef.fontSize = 12;
     * ...OR using inline definition useful for constructor injectionvar fontDef = new cc.FontDefinition({
     * fontName: "Arial",
     * fontSize: 12
     * });
     *
     * @param {Object} properties - (OPTIONAL) Allow inline FontDefinition
     */
    constructor(properties: object)


  }
}

declare namespace cc {
  interface game  {

    /**
     * An object to boot the game.
     */
    constructor()

    /**
     * The canvas of the game, equals to cc._canvas
     */
    canvas: any

    /**
     * Config of game
     */
    config: any

    /**
     * The container of game canvas, equals to cc.container
     */
    container: any

    /**
     * The outer frame of the game canvas, parent of cc.container
     */
    frame: any

    /**
     * Callback when the scripts of engine have been load.
     */
    onStart: any

    /**
     * Callback when game exits.
     */
    onStop: any

    /**
     * End game, it will close the game window
     */
    end(): any

    /**
     * Check whether the game is paused.
     */
    isPaused(): any

    /**
     * Pause the game.
     */
    pause(): any

    /**
     * Prepare game.
     *
     * @param {} cb
     */
    prepare(cb: any): any

    /**
     * Restart game.
     */
    restart(): any

    /**
     * Resume the game from pause.
     */
    resume(): any

    /**
     * Run game with configuration object and onStart function.
     *
     * @param {Object|Function} config Pass configuration object or onStart function
     * @param {onStart} onStart onStart function to be executed after game initialized
     */
    run(config: object | Function, onStart: Function): any

    /**
     * Set frameRate of game.
     *
     * @param {} frameRate
     */
    setFrameRate(frameRate: any): any

    /**
     * Run the game frame by frame.
     */
    step(): any
  }
}

declare namespace cc {
  namespace game {


    /**
     * Keys found in project.json.
     */
    enum CONFIG_KEY { }

    /**
     * Debug mode: Error to console.
     */
    enum DEBUG_MODE_ERROR { }

    /**
     * Debug mode: Error to web page.
     */
    enum DEBUG_MODE_ERROR_FOR_WEB_PAGE { }

    /**
     * Debug mode: Info, warning, error to console.
     */
    enum DEBUG_MODE_INFO { }

    /**
     * Debug mode: Info, warning, error to web page.
     */
    enum DEBUG_MODE_INFO_FOR_WEB_PAGE { }

    /**
     * Debug mode: No debugging. {@static}
     */
    enum DEBUG_MODE_NONE { }

    /**
     * Debug mode: Warning, error to console.
     */
    enum DEBUG_MODE_WARN { }

    /**
     * Debug mode: Warning, error to web page.
     */
    enum DEBUG_MODE_WARN_FOR_WEB_PAGE { }

    /**
     * Event that is fired when the game is hidden.
     */
    enum EVENT_HIDE { }

    /**
     * Event that is fired when the renderer is done being initialized.
     */
    enum EVENT_RENDERER_INITED { }

    /**
     * Event that is fired when the game is resized.
     */
    enum EVENT_RESIZE { }

    /**
     * Event that is fired when the game is shown.
     */
    enum EVENT_SHOW { }

    /**
     *
     */
    enum RENDER_TYPE_CANVAS { }

    /**
     *
     */
    enum RENDER_TYPE_OPENGL { }

    /**
     *
     */
    enum RENDER_TYPE_WEBGL { }

  }
}

declare namespace cc {
  interface ImageTGA  {

    /**
     * TGA format
     *
     * @param {Number} status
     * @param {Number} type
     * @param {Number} pixelDepth
     * @param {Number} width map width
     * @param {Number} height map height
     * @param {Array} imageData raw data
     * @param {Number} flipped
     */
    constructor(status: number, type: number, pixelDepth: number, width: number, height: number, imageData: any[], flipped: number)


  }
}

declare namespace cc {
  interface imeDispatcher  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * Add delegate to concern ime msg
     *
     * @param {cc.IMEDelegate} delegate
     */
    addDelegate(delegate: cc.IMEDelegate): any

    /**
     * Attach the pDeleate with ime.
     *
     * @param {cc.IMEDelegate} delegate
     *
     * @returns {Boolean} If the old delegate can detattach with ime and the new delegate can attach with ime, return true, otherwise return false.
     */
    attachDelegateWithIME(delegate: cc.IMEDelegate): boolean

    /**
     * Detach the pDeleate with ime.
     *
     * @param {cc.IMEDelegate} delegate
     *
     * @returns {Boolean} If the old delegate can detattach with ime and the new delegate can attach with ime, return true, otherwise return false.
     */
    detachDelegateWithIME(delegate: cc.IMEDelegate): boolean

    /**
     * Dispatch the delete backward operation
     */
    dispatchDeleteBackward(): any

    /**
     * Dispatch the input text from ime
     *
     * @param {String} text
     * @param {Number} len
     */
    dispatchInsertText(text: string, len: number): any

    /**
     * Dispatch keyboard notification
     *
     * @param {cc.IMEKeyboardNotificationInfo} info
     */
    dispatchKeyboardDidHide(info: cc.IMEKeyboardNotificationInfo): any

    /**
     * Dispatch keyboard notification
     *
     * @param {cc.IMEKeyboardNotificationInfo} info
     */
    dispatchKeyboardDidShow(info: cc.IMEKeyboardNotificationInfo): any

    /**
     * Dispatch keyboard notification
     *
     * @param {cc.IMEKeyboardNotificationInfo} info
     */
    dispatchKeyboardWillHide(info: cc.IMEKeyboardNotificationInfo): any

    /**
     * Dispatch keyboard notification
     *
     * @param {cc.IMEKeyboardNotificationInfo} info
     */
    dispatchKeyboardWillShow(info: cc.IMEKeyboardNotificationInfo): any

    /**
     * Get the content text, which current CCIMEDelegate which attached with IME has.
     *
     * @returns {String}
     */
    getContentText(): string

    /**
     * Process keydown's keycode
     *
     * @param {Number} keyCode
     */
    processKeycode(keyCode: number): any

    /**
     * Remove the delegate from the delegates who concern ime msg
     *
     * @param {cc.IMEDelegate} delegate
     */
    removeDelegate(delegate: cc.IMEDelegate): any
  }
}

declare namespace cc {
  interface inputManager  {

    /**
     * This class manages all events of input. include: touch, mouse, accelerometer, keyboard
     */
    constructor()


    /**
     *
     *
     * @param {HTMLElement} element
     *
     * @returns {Object}
     */
    getHTMLElementPosition(element: HTMLElement): object

    /**
     *
     *
     * @param {cc.Point} location
     * @param {cc.Point} pos
     * @param {Number} eventType
     *
     * @returns {cc.EventMouse}
     */
    getMouseEvent(location: cc.Point, pos: cc.Point, eventType: number): cc.EventMouse

    /**
     *
     *
     * @param {Touch} event
     * @param {cc.Point} pos
     *
     * @returns {cc.Point}
     */
    getPointByEvent(event: Touch, pos: cc.Point): cc.Point

    /**
     *
     *
     * @param {cc.Touch} touch
     *
     * @returns {cc.Touch}
     */
    getPreTouch(touch: cc.Touch): cc.Touch

    /**
     *
     *
     * @param {Array} touches
     *
     * @returns {Array}
     */
    getSetOfTouchesEndOrCancel(touches: any[]): any[]

    /**
     *
     *
     * @param {Number} tx
     * @param {Number} ty
     * @param {cc.Point} pos
     *
     * @returns {cc.Touch}
     */
    getTouchByXY(tx: number, ty: number, pos: cc.Point): cc.Touch

    /**
     *
     *
     * @param {Touch} event
     * @param {cc.Point} pos
     *
     * @returns {Array}
     */
    getTouchesByEvent(event: Touch, pos: cc.Point): any[]

    /**
     *
     *
     * @param {Array} touches
     */
    handleTouchesBegin(touches: any[]): any

    /**
     *
     *
     * @param {Array} touches
     */
    handleTouchesCancel(touches: any[]): any

    /**
     *
     *
     * @param {Array} touches
     */
    handleTouchesEnd(touches: any[]): any

    /**
     *
     *
     * @param {Array} touches
     */
    handleTouchesMove(touches: any[]): any

    /**
     *
     *
     * @param {HTMLElement} element
     */
    registerSystemEvent(element: HTMLElement): any

    /**
     *
     *
     * @param {cc.Touch} touch
     */
    setPreTouch(touch: cc.Touch): any

    /**
     *
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace cc {
  interface Particle  {

    /**
     * Structure that contains the values of each particle
     *
     * @param {cc.Point} pos Position of particle
     * @param {cc.Point} startPos
     * @param {cc.Color} color
     * @param {cc.Color} deltaColor
     * @param {cc.Size} size
     * @param {cc.Size} deltaSize
     * @param {Number} rotation
     * @param {Number} deltaRotation
     * @param {Number} timeToLive
     * @param {Number} atlasIndex
     * @param {cc.Particle.ModeA} modeA
     * @param {cc.Particle.ModeA} modeB
     */
    constructor(pos: cc.Point, startPos: cc.Point, color: cc.Color, deltaColor: cc.Color, size: cc.Size, deltaSize: cc.Size, rotation: number, deltaRotation: number, timeToLive: number, atlasIndex: number, modeA: cc.Particle.ModeA, modeB: cc.Particle.ModeA)


  }
}

declare namespace cc {
  namespace Particle {

    /**
     * Array of Point instances used to optimize particle updates
     */
    let TemporaryPoints: any


  }
}

declare namespace cc.Particle {
  interface ModeA  {

    /**
     * Mode A: gravity, direction, radial accel, tangential accel
     *
     * @param {cc.Point} dir direction of particle
     * @param {Number} radialAccel
     * @param {Number} tangentialAccel
     */
    constructor(dir: cc.Point, radialAccel: number, tangentialAccel: number)


  }
}

declare namespace cc.Particle {
  interface ModeB  {

    /**
     * Mode B: radius mode
     *
     * @param {Number} angle
     * @param {Number} degreesPerSecond
     * @param {Number} radius
     * @param {Number} deltaRadius
     */
    constructor(angle: number, degreesPerSecond: number, radius: number, deltaRadius: number)


  }
}

declare namespace cc.ParticleSystem {
  interface ModeA  {

    /**
     * Mode A:Gravity + Tangential Accel + Radial Accel
     *
     * @param {cc.Point} gravity Gravity value.
     * @param {Number} speed speed of each particle.
     * @param {Number} speedVar speed variance of each particle.
     * @param {Number} tangentialAccel tangential acceleration of each particle.
     * @param {Number} tangentialAccelVar tangential acceleration variance of each particle.
     * @param {Number} radialAccel radial acceleration of each particle.
     * @param {Number} radialAccelVar radial acceleration variance of each particle.
     * @param {boolean} rotationIsDir
     */
    constructor(gravity: cc.Point, speed: number, speedVar: number, tangentialAccel: number, tangentialAccelVar: number, radialAccel: number, radialAccelVar: number, rotationIsDir: boolean)

    /**
     * Gravity value. Only available in 'Gravity' mode.
     */
    gravity: any

    /**
     * radial acceleration of each particle. Only available in 'Gravity' mode.
     */
    radialAccel: any

    /**
     * radial acceleration variance of each particle. Only available in 'Gravity' mode.
     */
    radialAccelVar: any

    /**
     * set the rotation of each particle to its direction Only available in 'Gravity' mode.
     */
    rotationIsDir: any

    /**
     * speed of each particle. Only available in 'Gravity' mode.
     */
    speed: any

    /**
     * speed variance of each particle. Only available in 'Gravity' mode.
     */
    speedVar: any

    /**
     * tangential acceleration of each particle. Only available in 'Gravity' mode.
     */
    tangentialAccel: any

    /**
     * tangential acceleration variance of each particle. Only available in 'Gravity' mode.
     */
    tangentialAccelVar: any

  }
}

declare namespace cc.ParticleSystem {
  interface ModeB  {

    /**
     * Mode B: circular movement (gravity, radial accel and tangential accel don't are not used in this mode)
     *
     * @param {Number} startRadius The starting radius of the particles.
     * @param {Number} startRadiusVar The starting radius variance of the particles.
     * @param {Number} endRadius The ending radius of the particles.
     * @param {Number} endRadiusVar The ending radius variance of the particles.
     * @param {Number} rotatePerSecond Number of degrees to rotate a particle around the source pos per second.
     * @param {Number} rotatePerSecondVar Variance in degrees for rotatePerSecond.
     */
    constructor(startRadius: number, startRadiusVar: number, endRadius: number, endRadiusVar: number, rotatePerSecond: number, rotatePerSecondVar: number)

    /**
     * The ending radius of the particles. Only available in 'Radius' mode.
     */
    endRadius: any

    /**
     * The ending radius variance of the particles. Only available in 'Radius' mode.
     */
    endRadiusVar: any

    /**
     * Number of degress to rotate a particle around the source pos per second. Only available in 'Radius' mode.
     */
    rotatePerSecond: any

    /**
     * Variance in degrees for rotatePerSecond. Only available in 'Radius' mode.
     */
    rotatePerSecondVar: any

    /**
     * The starting radius of the particles. Only available in 'Radius' mode.
     */
    startRadius: any

    /**
     * The starting radius variance of the particles. Only available in 'Radius' mode.
     */
    startRadiusVar: any

  }
}

declare namespace cc {
  interface path  {

    /**
     *
     */
    constructor()


    /**
     * Get the file name of a file path.
     *
     * @param {string} pathStr
     * @param {string} extname
     *
     * @returns {*}
     */
    basename(pathStr: string, extname: string): any

    /**
     * Change file name of a file path.
     *
     * @param {String} pathStr
     * @param {String} basename
     * @param {Boolean} isSameExt
     *
     * @returns {string}
     */
    changeBasename(pathStr: string, basename: string, isSameExt: boolean): string

    /**
     * Change extname of a file path.
     *
     * @param {string} pathStr
     * @param {string} extname
     *
     * @returns {string}
     */
    changeExtname(pathStr: string, extname: string): string

    /**
     * Get dirname of a file path.
     *
     * @param {string} pathStr
     *
     * @returns {*}
     */
    dirname(pathStr: string): any

    /**
     * Get the ext name of a path.
     *
     * @param {string} pathStr
     *
     * @returns {*}
     */
    extname(pathStr: string): any

    /**
     * Join strings to be a path.
     *
     * @returns {string}
     */
    join(): string

    /**
     * Get the main name of a file name
     *
     * @param {string} fileName
     *
     * @returns {string}
     */
    mainFileName(fileName: string): string
  }
}

declare namespace cc {
  interface plistParser  {

    /**
     * cc.plistParser is a singleton object for parsing plist files
     */
    constructor()


    /**
     * parse a xml string as plist object.
     *
     * @param {String} xmlTxt plist xml contents
     *
     * @returns {*} plist object
     */
    parse(xmlTxt: string): any
  }
}

declare namespace cc {
  interface Point  {

    /**
     * cc.Point is the class for point object, please do not use its constructor to create points, use cc.p() alias function instead.
     *
     * @param {Number} x
     * @param {Number} y
     */
    constructor(x: number, y: number)

    /**
     *
     */
    x: any

    /**
     *
     */
    y: any

  }
}

declare namespace cc {
  interface pool  {

    /**
     * cc.pool is a singleton object serves as an object cache pool.
     * It can helps you to improve your game performance for objects which need frequent release and recreate operations
     * Some common use case is :
     * 1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)
     * 2. Blocks in candy crash (massive creation and recreation)
     * etc...
     */
    constructor()


    /**
     * remove all objs in pool and reset the pool
     */
    drainAllPools(): any

    /**
     * Get the obj from pool
     *
     * @param {} args
     *
     * @returns {*} call the reuse function an return the obj
     */
    getFromPool(args: any): any

    /**
     * Check if this kind of obj has already in pool
     *
     * @param {} objClass
     *
     * @returns {boolean} if this kind of obj is already in pool return true,else return false;
     */
    hasObject(objClass: any): boolean

    /**
     * Put the obj in pool
     *
     * @param {} obj
     */
    putInPool(obj: any): any

    /**
     * Remove the obj if you want to delete it;
     *
     * @param {} obj
     */
    removeObject(obj: any): any
  }
}

declare namespace cc {
  interface Quad2  {

    /**
     *
     *
     * @param {cc.Vertex2F} tl
     * @param {cc.Vertex2F} tr
     * @param {cc.Vertex2F} bl
     * @param {cc.Vertex2F} br
     * @param {Array} arrayBuffer
     * @param {Number} offset
     */
    constructor(tl: cc.Vertex2F, tr: cc.Vertex2F, bl: cc.Vertex2F, br: cc.Vertex2F, arrayBuffer: any[], offset: number)


  }
}

declare namespace cc {
  namespace Quad2 {


    /**
     *
     */
    enum BYTES_PER_ELEMENT { }

  }
}

declare namespace cc {
  interface Quad3  {

    /**
     * A 3D Quad. 4 * 3 floats
     *
     * @param {cc.Vertex3F} bl
     * @param {cc.Vertex3F} br
     * @param {cc.Vertex3F} tl
     * @param {cc.Vertex3F} tr
     * @param {} arrayBuffer
     * @param {} offset
     */
    constructor(bl: cc.Vertex3F, br: cc.Vertex3F, tl: cc.Vertex3F, tr: cc.Vertex3F, arrayBuffer: any, offset: any)


  }
}

declare namespace cc {
  namespace Quad3 {


    /**
     *
     */
    enum BYTES_PER_ELEMENT { }

  }
}

declare namespace cc {
  interface Rect  {

    /**
     * cc.Rect is the class for rect object, please do not use its constructor to create rects, use cc.rect() alias function instead.
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     */
    constructor(x: number, y: number, width: number, height: number)

    /**
     *
     */
    height: number

    /**
     *
     */
    width: number

    /**
     *
     */
    x: number

    /**
     *
     */
    y: number

  }
}

declare namespace cc {
  interface RGBA  {

    /**
     * An RGBA color class, its value present as percent
     *
     * @param {Number} r
     * @param {Number} g
     * @param {Number} b
     * @param {Number} a
     */
    constructor(r: number, g: number, b: number, a: number)


  }
}

declare namespace cc {
  interface screen  {

    /**
     * The fullscreen API provides an easy way for web content to be presented using the user's entire screen.
     * It's invalid on safari, QQbrowser and android browser
     */
    constructor()


    /**
     * Automatically request full screen with a touch/click event
     *
     * @param {Element} element
     * @param {Function} onFullScreenChange
     */
    autoFullScreen(element: Element, onFullScreenChange: Function): any

    /**
     * exit the full mode.
     *
     * @returns {Boolean}
     */
    exitFullScreen(): boolean

    /**
     * return true if it's full now.
     *
     * @returns {Boolean}
     */
    fullScreen(): boolean

    /**
     * initialize
     */
    init(): any

    /**
     * change the screen to full mode.
     *
     * @param {Element} element
     * @param {Function} onFullScreenChange
     */
    requestFullScreen(element: Element, onFullScreenChange: Function): any
  }
}

declare namespace cc {
  interface shaderCache  {

    /**
     * cc.shaderCache is a singleton object that stores manages GL shaders
     */
    constructor()


    /**
     * adds a CCGLProgram to the cache for a given name
     *
     * @param {cc.GLProgram} program
     * @param {String} key
     */
    addProgram(program: cc.GLProgram, key: string): any

    /**
     * returns a GL program for a shader name
     *
     * @param {String} shaderName
     *
     * @returns {cc.GLProgram}
     */
    getProgram(shaderName: string): cc.GLProgram

    /**
     * loads the default shaders
     */
    loadDefaultShaders(): any

    /**
     * returns a GL program for a given key
     *
     * @param {String} key
     */
    programForKey(key: string): any

    /**
     * reload the default shaders
     */
    reloadDefaultShaders(): any
  }
}

declare namespace cc {
  namespace shaderCache {


    /**
     *
     */
    enum TYPE_MAX { }

    /**
     *
     */
    enum TYPE_POSITION_COLOR { }

    /**
     *
     */
    enum TYPE_POSITION_LENGTH_TEXTURECOLOR { }

    /**
     *
     */
    enum TYPE_POSITION_TEXTURE { }

    /**
     *
     */
    enum TYPE_POSITION_TEXTURE_A8COLOR { }

    /**
     *
     */
    enum TYPE_POSITION_TEXTURE_UCOLOR { }

    /**
     *
     */
    enum TYPE_POSITION_TEXTURECOLOR { }

    /**
     *
     */
    enum TYPE_POSITION_TEXTURECOLOR_ALPHATEST { }

    /**
     *
     */
    enum TYPE_POSITION_UCOLOR { }

    /**
     *
     */
    enum TYPE_SPRITE_POSITION_COLOR { }

    /**
     *
     */
    enum TYPE_SPRITE_POSITION_TEXTURECOLOR { }

    /**
     *
     */
    enum TYPE_SPRITE_POSITION_TEXTURECOLOR_ALPHATEST { }

  }
}

declare namespace cc {
  interface Size  {

    /**
     * cc.Size is the class for size object, please do not use its constructor to create sizes, use cc.size() alias function instead.
     *
     * @param {Number} width
     * @param {Number} height
     */
    constructor(width: number, height: number)

    /**
     *
     */
    height: number

    /**
     *
     */
    width: number

  }
}

declare namespace cc {
  interface spriteFrameCache  {

    /**
     * cc.spriteFrameCache is a singleton that handles the loading of the sprite frames. It saves in a cache the sprite frames.example
     * // add SpriteFrames to spriteFrameCache With File
     * cc.spriteFrameCache.addSpriteFrames(s_grossiniPlist);
     */
    constructor()


    /**
     * Adds an sprite frame with a given name.
     * If the name already exists, then the contents of the old name will be replaced with the new one.
     *
     * @param {cc.SpriteFrame} frame
     * @param {String} frameName
     */
    addSpriteFrame(frame: cc.SpriteFrame, frameName: string): any

    /**
     * Adds multiple Sprite Frames from a plist or json file.
     * A texture will be loaded automatically. The texture name will composed by replacing the .plist or .json suffix with .png
     * If you want to use another texture, you should use the addSpriteFrames:texture parameter.
     *
     * @param {String} url file path
     * @param {HTMLImageElement|cc.Texture2D|string} texture
     */
    addSpriteFrames(url: string, texture: HTMLImageElement | cc.Texture2D | string): any

    /**
     * Returns an Sprite Frame that was previously added.
     * If the name is not found it will return nil.
     * You should retain the returned copy if you are going to use it.
     *
     * @param {String} name name of SpriteFrame
     *
     * @returns {cc.SpriteFrame}
     */
    getSpriteFrame(name: string): cc.SpriteFrame

    /**
     * Deletes an sprite frame from the sprite frame cache.
     *
     * @param {String} name
     */
    removeSpriteFrameByName(name: string): any

    /**
     * Purges the dictionary of loaded sprite frames.
     * Call this method if you receive the "Memory Warning".
     * In the short term: it will free some resources preventing your app from being killed.
     * In the medium term: it will allocate more resources.
     * In the long term: it will be the same.
     */
    removeSpriteFrames(): any

    /**
     * Removes multiple Sprite Frames from a plist file.
     * Sprite Frames stored in this file will be removed.
     * It is convinient to call this method when a specific texture needs to be removed.
     *
     * @param {String} url Plist filename
     */
    removeSpriteFramesFromFile(url: string): any

    /**
     * Removes all Sprite Frames associated with the specified textures.
     * It is convenient to call this method when a specific texture needs to be removed.
     *
     * @param {HTMLImageElement|HTMLCanvasElement|cc.Texture2D} texture
     */
    removeSpriteFramesFromTexture(texture: HTMLImageElement | HTMLCanvasElement | cc.Texture2D): any
  }
}

declare namespace cc.sys {

  /**
   * Indicate the running browser type
   */
  let browserType: any

  /**
   * Indicate the running browser version
   */
  let browserVersion: any

  /**
   * The capabilities of the current platform
   */
  let capabilities: any

  /**
   * Indicate whether system is mobile system
   */
  let isMobile: any

  /**
   * Is native ? This is set to be true in jsb auto.
   */
  let isNative: any

  /**
   * Indicate the current language of the running system
   */
  let language: any

  /**
   * cc.sys.localStorage is a local storage component.
   */
  let localStorage: any

  /**
   * Open a url in browser
   */
  let openURL: any

  /**
   * Indicate the running os name
   */
  let os: any

  /**
   * Indicate the running os main version number
   */
  let osMainVersion: any

  /**
   * Indicate the running os version string
   */
  let osVersion: any

  /**
   * Indicate the running platform
   */
  let platform: any

  /**
   * Indicate the real pixel resolution of the whole game window
   */
  let windowPixelResolution: any

  /**
   *
   */
  enum ANDROID { }

  /**
   *
   */
  enum BLACKBERRY { }

  /**
   *
   */
  enum DESKTOP_BROWSER { }

  /**
   *
   */
  enum EMSCRIPTEN { }

  /**
   *
   */
  enum IOS { }

  /**
   * Arabic language code
   */
  enum LANGUAGE_ARABIC { }

  /**
   * Chinese language code
   */
  enum LANGUAGE_CHINESE { }

  /**
   * Spanish language code
   */
  enum LANGUAGE_DUTCH { }

  /**
   * English language code
   */
  enum LANGUAGE_ENGLISH { }

  /**
   * French language code
   */
  enum LANGUAGE_FRENCH { }

  /**
   * German language code
   */
  enum LANGUAGE_GERMAN { }

  /**
   * Hungarian language code
   */
  enum LANGUAGE_HUNGARIAN { }

  /**
   * Italian language code
   */
  enum LANGUAGE_ITALIAN { }

  /**
   * Japanese language code
   */
  enum LANGUAGE_JAPANESE { }

  /**
   * Korean language code
   */
  enum LANGUAGE_KOREAN { }

  /**
   * Norwegian language code
   */
  enum LANGUAGE_NORWEGIAN { }

  /**
   * Polish language code
   */
  enum LANGUAGE_POLISH { }

  /**
   * Portuguese language code
   */
  enum LANGUAGE_PORTUGUESE { }

  /**
   * Russian language code
   */
  enum LANGUAGE_RUSSIAN { }

  /**
   * Spanish language code
   */
  enum LANGUAGE_SPANISH { }

  /**
   * Unknown language code
   */
  enum LANGUAGE_UNKNOWN { }

  /**
   *
   */
  enum LINUX { }

  /**
   *
   */
  enum MACOS { }

  /**
   *
   */
  enum MOBILE_BROWSER { }

  /**
   *
   */
  enum NACL { }

  /**
   *
   */
  enum OS_ANDROID { }

  /**
   *
   */
  enum OS_BADA { }

  /**
   *
   */
  enum OS_BLACKBERRY { }

  /**
   *
   */
  enum OS_IOS { }

  /**
   *
   */
  enum OS_LINUX { }

  /**
   *
   */
  enum OS_MARMALADE { }

  /**
   *
   */
  enum OS_OSX { }

  /**
   *
   */
  enum OS_UNKNOWN { }

  /**
   *
   */
  enum OS_WINDOWS { }

  /**
   *
   */
  enum OS_WINRT { }

  /**
   *
   */
  enum OS_WP8 { }

  /**
   *
   */
  enum TIZEN { }

  /**
   *
   */
  enum UNKNOWN { }

  /**
   *
   */
  enum WIN32 { }

  /**
   *
   */
  enum WINRT { }

  /**
   *
   */
  enum WP8 { }

  /**
   * Clean a script in the JS VM, only available in JSB
   *
   * @param {String} jsfile
   */
  function cleanScript(jsfile: string): any

  /**
   * Dump system informations
   */
  function dump(): any

  /**
   * Dumps rooted objects, only available in JSB
   */
  function dumpRoot(): any

  /**
   * Forces the garbage collection, only available in JSB
   */
  function garbageCollect(): any

  /**
   * Check whether an object is valid,
   * In web engine, it will return true if the object exist
   * In native engine, it will return true if the JS object and the correspond native object are both valid
   *
   * @param {Object} obj
   *
   * @returns {boolean} Validity of the object
   */
  function isObjectValid(obj: object): boolean

  /**
   * Restart the JS VM, only available in JSB
   */
  function restartVM(): any
}

declare namespace cc {
  interface Tex2F  {

    /**
     *
     *
     * @param {Number} u
     * @param {Number} v
     * @param {Array} arrayBuffer
     * @param {Number} offset
     */
    constructor(u: number, v: number, arrayBuffer: any[], offset: number)


  }
}

declare namespace cc {
  namespace Tex2F {


    /**
     *
     */
    enum BYTES_PER_ELEMENT { }

  }
}

declare namespace cc {
  interface textureCache  {

    /**
     * cc.textureCache is a singleton object, it's the global cache for cc.Texture2D
     */
    constructor()


    /**
     * Returns a Texture2D object given an ETC filename
     * If the file image was not previously loaded, it will create a new CCTexture2D
     * object and it will return it. Otherwise it will return a reference of a previously loaded image
     * note:addETCImage does not support on HTML5
     *
     * @param {String} filename
     *
     * @returns {cc.Texture2D}
     */
    addETCImage(filename: string): cc.Texture2D

    /**
     * Returns a Texture2D object given an PVR filename
     * If the file image was not previously loaded, it will create a new Texture2D
     * object and it will return it. Otherwise it will return a reference of a previously loaded image
     *
     * @param {String} path
     *
     * @returns {cc.Texture2D}
     */
    addPVRImage(path: string): cc.Texture2D

    /**
     * Returns a Texture2D object given an PVR filename
     * If the file image was not previously loaded, it will create a new CCTexture2D
     * object and it will return it. Otherwise it will return a reference of a previously loaded image
     * note: AddPVRTCImage does not support on HTML5
     *
     * @param {String} filename
     *
     * @returns {cc.Texture2D}
     */
    addPVRTCImage(filename: string): cc.Texture2D

    /**
     * Returns a Texture2D object given an UIImage image
     * If the image was not previously loaded, it will create a new Texture2D object and it will return it.
     * Otherwise it will return a reference of a previously loaded image
     * The "key" parameter will be used as the "key" for the cache.
     * If "key" is null, then a new texture will be created each time.
     *
     * @param {HTMLImageElement|HTMLCanvasElement} image
     * @param {String} key
     *
     * @returns {cc.Texture2D}
     */
    addUIImage(image: HTMLImageElement | HTMLCanvasElement, key: string): cc.Texture2D

    /**
     * Cache the image data
     *
     * @param {String} path
     * @param {Image|HTMLImageElement|HTMLCanvasElement} texture
     */
    cacheImage(path: string, texture: object | HTMLImageElement | HTMLCanvasElement): any

    /**
     * Description
     *
     * @returns {String}
     */
    description(): string

    /**
     * Output to cc.log the current contents of this TextureCache
     * This will attempt to calculate the size of each texture, and the total texture memory in use.
     */
    dumpCachedTextureInfo(): any

    /**
     *
     *
     * @param {Image} texture
     *
     * @returns {String|Null}
     */
    getKeyByTexture(texture: object): string | null

    /**
     *
     *
     * @param {Image} texture
     *
     * @returns {Array}
     */
    getTextureColors(texture: object): any[]

    /**
     * Returns an already created texture. Returns null if the texture doesn't exist.
     *
     * @param {String} textureKeyName
     *
     * @returns {cc.Texture2D|Null}
     */
    getTextureForKey(textureKeyName: string): cc.Texture2D | null

    /**
     * Purges the dictionary of loaded textures.
     * Call this method if you receive the "Memory Warning"
     * In the short term: it will free some resources preventing your app from being killed
     * In the medium term: it will allocate more resources
     * In the long term: it will be the same
     */
    removeAllTextures(): any

    /**
     * Deletes a texture from the cache given a texture
     *
     * @param {Image} texture
     */
    removeTexture(texture: object): any

    /**
     * Deletes a texture from the cache given a its key name
     *
     * @param {String} textureKeyName
     */
    removeTextureForKey(textureKeyName: string): any

    /**
     * Returns an already created texture. Returns null if the texture doesn't exist.
     *
     * @param {String} textureKeyName
     *
     * @returns {cc.Texture2D|Null}
     */
    textureForKey(textureKeyName: string): cc.Texture2D | null
  }
}

declare namespace cc {
  interface Tile  {

    /**
     * A Tile composed of position, startPosition and delta.
     *
     * @param {cc.Point} position
     * @param {cc.Point} startPosition
     * @param {cc.Size} delta
     */
    constructor(position: cc.Point, startPosition: cc.Point, delta: cc.Size)


  }
}

declare namespace cc {
  interface V2F_C4B_T2F  {

    /**
     *
     *
     * @param {cc.Vertex2F} vertices
     * @param {cc.Color} colors
     * @param {cc.Tex2F} texCoords
     * @param {Array} arrayBuffer
     * @param {Number} offset
     */
    constructor(vertices: cc.Vertex2F, colors: cc.Color, texCoords: cc.Tex2F, arrayBuffer: any[], offset: number)


  }
}

declare namespace cc {
  namespace V2F_C4B_T2F {


    /**
     *
     */
    enum BYTES_PER_ELEMENT { }

  }
}

declare namespace cc {
  interface V2F_C4B_T2F_Triangle  {

    /**
     *
     *
     * @param {cc.V2F_C4B_T2F} a
     * @param {cc.V2F_C4B_T2F} b
     * @param {cc.V2F_C4B_T2F} c
     * @param {Array} arrayBuffer
     * @param {Number} offset
     */
    constructor(a: cc.V2F_C4B_T2F, b: cc.V2F_C4B_T2F, c: cc.V2F_C4B_T2F, arrayBuffer: any[], offset: number)


  }
}

declare namespace cc {
  namespace V2F_C4B_T2F_Triangle {


    /**
     *
     */
    enum BYTES_PER_ELEMENT { }

  }
}

declare namespace cc {
  interface V3F_C4B_T2F  {

    /**
     *
     *
     * @param {cc.Vertex3F} vertices
     * @param {cc.Color} colors
     * @param {cc.Tex2F} texCoords
     * @param {Array} arrayBuffer
     * @param {Number} offset
     */
    constructor(vertices: cc.Vertex3F, colors: cc.Color, texCoords: cc.Tex2F, arrayBuffer: any[], offset: number)


  }
}

declare namespace cc {
  namespace V3F_C4B_T2F {


    /**
     *
     */
    enum BYTES_PER_ELEMENT { }

  }
}

declare namespace cc {
  interface V3F_C4B_T2F_Quad  {

    /**
     *
     *
     * @param {cc.V3F_C4B_T2F} tl
     * @param {cc.V3F_C4B_T2F} bl
     * @param {cc.V3F_C4B_T2F} tr
     * @param {cc.V3F_C4B_T2F} br
     * @param {Array} arrayBuffer
     * @param {Number} offset
     */
    constructor(tl: cc.V3F_C4B_T2F, bl: cc.V3F_C4B_T2F, tr: cc.V3F_C4B_T2F, br: cc.V3F_C4B_T2F, arrayBuffer: any[], offset: number)


  }
}

declare namespace cc {
  namespace V3F_C4B_T2F_Quad {


    /**
     *
     */
    enum BYTES_PER_ELEMENT { }

  }
}

declare namespace cc {
  interface Vertex2F  {

    /**
     *
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Array} arrayBuffer
     * @param {Number} offset
     */
    constructor(x: number, y: number, arrayBuffer: any[], offset: number)


  }
}

declare namespace cc {
  namespace Vertex2F {


    /**
     *
     */
    enum BYTES_PER_ELEMENT { }

  }
}

declare namespace cc {
  interface Vertex3F  {

    /**
     *
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @param {Array} arrayBuffer
     * @param {Number} offset
     */
    constructor(x: number, y: number, z: number, arrayBuffer: any[], offset: number)


  }
}

declare namespace cc {
  namespace Vertex3F {


    /**
     *
     */
    enum BYTES_PER_ELEMENT { }

  }
}

declare namespace cc {
  interface view  {

    /**
     * Constructor of cc.EGLView
     */
    constructor()


    /**
     * Sets whether the engine modify the "viewport" meta in your web page.
     * It's enabled by default, we strongly suggest you not to disable it.
     * And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden
     * Only useful on web
     *
     * @param {Boolean} enabled Enable automatic modification to "viewport" meta
     */
    adjustViewPort(enabled: boolean): any

    /**
     * Returns whether developer can set content's scale factor.
     *
     * @returns {Boolean}
     */
    canSetContentScaleFactor(): boolean

    /**
     * Empty function
     */
    centerWindow(): any

    /**
     * Returns the real location in view for a translation based on a related position
     *
     * @param {Number} tx The X axis translation
     * @param {Number} ty The Y axis translation
     * @param {Object} relatedPos The related position object including "left", "top", "width", "height" informations
     *
     * @returns {cc.Point}
     */
    convertToLocationInView(tx: number, ty: number, relatedPos: object): cc.Point

    /**
     * If enabled, the application will try automatically to enter full screen mode on mobile devices
     * You can pass true as parameter to enable it and disable it by passing false.
     * Only useful on web
     *
     * @param {Boolean} enabled Enable or disable auto full screen on mobile devices
     */
    enableAutoFullScreen(enabled: boolean): any

    /**
     * Retina support is enabled by default for Apple device but disabled for other devices,
     * it takes effect only when you called setDesignResolutionPolicy
     * Only useful on web
     *
     * @param {Boolean} enabled Enable or disable retina display
     */
    enableRetina(enabled: boolean): any

    /**
     * Force destroying EGL view, subclass must implement this method.
     */
    end(): any

    /**
     * Returns the canvas size of the view.
     * On native platforms, it returns the screen size since the view is a fullscreen view.
     * On web, it returns the size of the canvas element.
     *
     * @returns {cc.Size}
     */
    getCanvasSize(): cc.Size

    /**
     * Returns the resolution translate on EGLView
     *
     * @returns {cc.Size|Object}
     */
    getContentTranslateLeftTop(): cc.Size | object

    /**
     * Returns the designed size for the view.
     * Default resolution size is the same as 'getFrameSize'.
     *
     * @returns {cc.Size}
     */
    getDesignResolutionSize(): cc.Size

    /**
     * Returns device pixel ratio for retina display.
     *
     * @returns {Number}
     */
    getDevicePixelRatio(): number

    /**
     * Returns the frame size of the view.
     * On native platforms, it returns the screen size since the view is a fullscreen view.
     * On web, it returns the size of the canvas's outer DOM element.
     *
     * @returns {cc.Size}
     */
    getFrameSize(): cc.Size

    /**
     * Returns the current resolution policy
     *
     * @returns {cc.ResolutionPolicy} cc.ResolutionPolicy
     */
    getResolutionPolicy(): cc.ResolutionPolicy

    /**
     * Returns scale factor of the horizontal direction (X axis).
     *
     * @returns {Number}
     */
    getScaleX(): number

    /**
     * Returns scale factor of the vertical direction (Y axis).
     *
     * @returns {Number}
     */
    getScaleY(): number

    /**
     * Returns the current scissor rectangle
     *
     * @returns {cc.Rect}
     */
    getScissorRect(): cc.Rect

    /**
     * Returns the current target-densitydpi value of cc.view.
     *
     * @returns {String}
     */
    getTargetDensityDPI(): string

    /**
     * Returns the name of the view
     *
     * @returns {String}
     */
    getViewName(): string

    /**
     * Returns the view port rectangle.
     *
     * @returns {cc.Rect}
     */
    getViewPortRect(): cc.Rect

    /**
     * Returns the visible origin of the view port.
     *
     * @returns {cc.Point}
     */
    getVisibleOrigin(): cc.Point

    /**
     * Returns the visible origin of the view port.
     *
     * @returns {cc.Point}
     */
    getVisibleOriginInPixel(): cc.Point

    /**
     * Returns the visible area size of the view port.
     *
     * @returns {cc.Size}
     */
    getVisibleSize(): cc.Size

    /**
     * Returns the visible area size of the view port.
     *
     * @returns {cc.Size}
     */
    getVisibleSizeInPixel(): cc.Size

    /**
     * Check whether auto full screen is enabled.
     * Only useful on web
     *
     * @returns {Boolean} Auto full screen enabled or not
     */
    isAutoFullScreenEnabled(): boolean

    /**
     * Get whether render system is ready(no matter opengl or canvas),
     * this name is for the compatibility with cocos2d-x, subclass must implement this method.
     *
     * @returns {Boolean}
     */
    isOpenGLReady(): boolean

    /**
     * Check whether retina display is enabled.
     * Only useful on web
     *
     * @returns {Boolean}
     */
    isRetinaEnabled(): boolean

    /**
     * Returns whether GL_SCISSOR_TEST is enable
     *
     * @returns {Boolean}
     */
    isScissorEnabled(): boolean

    /**
     * Sets whether resize canvas automatically when browser's size changed.
     * Useful only on web.
     *
     * @param {Boolean} enabled Whether enable automatic resize with browser's resize event
     */
    resizeWithBrowserSize(enabled: boolean): any

    /**
     * Sets the resolution translate on EGLView
     *
     * @param {Number} offsetLeft
     * @param {Number} offsetTop
     */
    setContentTranslateLeftTop(offsetLeft: number, offsetTop: number): any

    /**
     * Sets the resolution policy with designed view size in points.
     * The resolution policy include:
     * [1] ResolutionExactFit Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.
     * [2] ResolutionNoBorder Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.
     * [3] ResolutionShowAll Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.
     * [4] ResolutionFixedHeight Scale the content's height to screen's height and proportionally scale its width
     * [5] ResolutionFixedWidth Scale the content's width to screen's width and proportionally scale its height
     * [cc.ResolutionPolicy] [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy
     *
     * @param {Number} width Design resolution width.
     * @param {Number} height Design resolution height.
     * @param {cc.ResolutionPolicy|Number} resolutionPolicy The resolution policy desired
     */
    setDesignResolutionSize(width: number, height: number, resolutionPolicy: cc.ResolutionPolicy | number): any

    /**
     * On native, it sets the frame size of view.
     * On web, it sets the size of the canvas's outer DOM element.
     *
     * @param {Number} width
     * @param {Number} height
     */
    setFrameSize(width: number, height: number): any

    /**
     * Open or close IME keyboard , subclass must implement this method.
     *
     * @param {Boolean} isOpen
     */
    setIMEKeyboardState(isOpen: boolean): any

    /**
     * Sets the orientation of the game, it can be landscape, portrait or auto.
     * When set it to landscape or portrait, and screen w/h ratio doesn't fit,
     * cc.view will automatically rotate the game canvas using CSS.
     * Note that this function doesn't have any effect in native,
     * in native, you need to set the application orientation in native project settings
     *
     * @param {Number} orientation - Possible values: cc.ORIENTATION_LANDSCAPE | cc.ORIENTATION_PORTRAIT | cc.ORIENTATION_AUTO
     */
    setOrientation(orientation: number): any

    /**
     * Sets the document body to desired pixel resolution and fit the game content to it.
     * This function is very useful for adaptation in mobile browsers.
     * In some HD android devices, the resolution is very high, but its browser performance may not be very good.
     * In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
     * But this API can be helpful to set a desired pixel resolution which is in between.
     * This API will do the following:
     * 1. Set viewport's width to the desired width in pixel
     * 2. Set body width to the exact pixel resolution
     * 3. The resolution policy will be reset with designed view size in points.
     *
     * @param {Number} width Design resolution width.
     * @param {Number} height Design resolution height.
     * @param {cc.ResolutionPolicy|Number} resolutionPolicy The resolution policy desired
     */
    setRealPixelResolution(width: number, height: number, resolutionPolicy: cc.ResolutionPolicy | number): any

    /**
     * Sets the callback function for cc.view's resize action,
     * this callback will be invoked before applying resolution policy,
     * so you can do any additional modifications within the callback.
     * Useful only on web.
     *
     * @param {Function|null} callback The callback function
     */
    setResizeCallback(callback: Function | null): any

    /**
     * Sets the current resolution policy
     *
     * @param {cc.ResolutionPolicy|Number} resolutionPolicy
     */
    setResolutionPolicy(resolutionPolicy: cc.ResolutionPolicy | number): any

    /**
     * Sets Scissor rectangle with points.
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     */
    setScissorInPoints(x: number, y: number, w: number, h: number): any

    /**
     * Sets view's target-densitydpi for android mobile browser. it can be set to:
     * 1. cc.DENSITYDPI_DEVICE, value is "device-dpi"
     * 2. cc.DENSITYDPI_HIGH, value is "high-dpi" (default value)
     * 3. cc.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)
     * 4. cc.DENSITYDPI_LOW, value is "low-dpi"
     * 5. Custom value, e.g: "480"
     *
     * @param {String} densityDPI
     */
    setTargetDensityDPI(densityDPI: string): any

    /**
     * Sets the name of the view
     *
     * @param {String} viewName
     */
    setViewName(viewName: string): any

    /**
     * Sets view port rectangle with points.
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w width
     * @param {Number} h height
     */
    setViewPortInPoints(x: number, y: number, w: number, h: number): any

    /**
     * Exchanges the front and back buffers, subclass must implement this method.
     */
    swapBuffers(): any
  }
}

declare namespace cc {
  interface visibleRect  {

    /**
     * cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
     * it should represent the same rect as cc.view.getViewportRect()
     */
    constructor()

    /**
     * - Bottom center coordinate of the screen related to the game scene
     */
    bottom: cc.Point

    /**
     * - Bottom left coordinate of the screen related to the game scene
     */
    bottomLeft: cc.Point

    /**
     * - Bottom right coordinate of the screen related to the game scene
     */
    bottomRight: cc.Point

    /**
     * - Center coordinate of the screen related to the game scene
     */
    center: cc.Point

    /**
     * - Height of the screen
     */
    height: number

    /**
     * - Left center coordinate of the screen related to the game scene
     */
    left: cc.Point

    /**
     * - Right center coordinate of the screen related to the game scene
     */
    right: cc.Point

    /**
     * - Top center coordinate of the screen related to the game scene
     */
    top: cc.Point

    /**
     * - Top left coordinate of the screen related to the game scene
     */
    topLeft: cc.Point

    /**
     * - Top right coordinate of the screen related to the game scene
     */
    topRight: cc.Point

    /**
     * - Width of the screen
     */
    width: number

  }
}

declare namespace cc {
  namespace visibleRect {



    /**
     * initialize
     *
     * @param {cc.Rect} visibleRect
     */
    function init(visibleRect: cc.Rect): any
  }
}

declare namespace ccs {

  /**
   * The display manager for CocoStudio Armature bone.
   * Defined in: CCDisplayManager.js.
   */
  let DisplayManager: any

  /**
   * TweenType
   * Defined in: CCTweenFunction.js.
   */
  let TweenType: object

  /**
   * *************************************************************************
   * Copyright (c) 2013-2014 Chukong Technologies Inc.http://www.cocos2d-x.orgPermission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * **************************************************************************
   * Defined in: compatible.js.
   */
  let uiReader: any

  /**
   * The animation loop from back
   * Defined in: CCProcessBase.js.
   */
  enum ANIMATION_TYPE_LOOP_BACK { }

  /**
   * The animation loop from front
   * Defined in: CCProcessBase.js.
   */
  enum ANIMATION_TYPE_LOOP_FRONT { }

  /**
   * The animation max
   * Defined in: CCProcessBase.js.
   */
  enum ANIMATION_TYPE_MAX { }

  /**
   * The animation isn't loop
   * Defined in: CCProcessBase.js.
   */
  enum ANIMATION_TYPE_NO_LOOP { }

  /**
   * The animation just have one frame
   * Defined in: CCProcessBase.js.
   */
  enum ANIMATION_TYPE_SINGLE_FRAME { }

  /**
   * The animation to loop from back
   * Defined in: CCProcessBase.js.
   */
  enum ANIMATION_TYPE_TO_LOOP_BACK { }

  /**
   * The animation to loop from front
   * Defined in: CCProcessBase.js.
   */
  enum ANIMATION_TYPE_TO_LOOP_FRONT { }

  /**
   * The value of the blend type of add
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_ADD { }

  /**
   * The value of the blend type of alpha
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_ALPHA { }

  /**
   * The value of the blend type of darken
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_DARKEN { }

  /**
   * The value of the blend type of difference
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_DIFFERENCE { }

  /**
   * The value of the blend type of erase
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_ERASE { }

  /**
   * The value of the blend type of highlight
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_HIGHLIGHT { }

  /**
   * The value of the blend type of invert
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_INVERT { }

  /**
   * The value of the blend type of layer
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_LAYER { }

  /**
   * The value of the blend type of lighten
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_LIGHTEN { }

  /**
   * The value of the blend type of multiply
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_MULTIPLY { }

  /**
   * The value of the blend type of normal
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_NORMAL { }

  /**
   * The value of the blend type of overlay
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_OVERLAY { }

  /**
   * The value of the blend type of screen
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_SCREEN { }

  /**
   * The value of the blend type of subtract
   * Defined in: CCDatas.js.
   */
  enum BLEND_TYPE_SUBTRACT { }

  /**
   * CocoStudio version
   */
  enum cocostudioVersion { }

  /**
   * The Armature flag of display render type.
   * Defined in: CCDatas.js.
   */
  enum DISPLAY_TYPE_ARMATURE { }

  /**
   * The Particle flag of display render type.
   * Defined in: CCDatas.js.
   */
  enum DISPLAY_TYPE_PARTICLE { }

  /**
   * The Sprite flag of display render type.
   * Defined in: CCDatas.js.
   */
  enum DISPLAY_TYPE_SPRITE { }

  /**
   * The flag fade action type of Cocostudio frame.
   * Defined in: CCActionFrame.js.
   */
  enum FRAME_TYPE_FADE { }

  /**
   * The max flag of Cocostudio frame.
   * Defined in: CCActionFrame.js.
   */
  enum FRAME_TYPE_MAX { }

  /**
   * The flag move action type of Cocostudio frame.
   * Defined in: CCActionFrame.js.
   */
  enum FRAME_TYPE_MOVE { }

  /**
   * The flag rotate action type of Cocostudio frame.
   * Defined in: CCActionFrame.js.
   */
  enum FRAME_TYPE_ROTATE { }

  /**
   * The flag scale action type of Cocostudio frame.
   * Defined in: CCActionFrame.js.
   */
  enum FRAME_TYPE_SCALE { }

  /**
   * The flag tint action type of Cocostudio frame.
   * Defined in: CCActionFrame.js.
   */
  enum FRAME_TYPE_TINT { }

  /**
   * The ease type of Cocostudio frame.
   * Defined in: CCActionFrame.js.
   */
  enum FrameEaseType { }

  /**
   * movement event type enum
   * Defined in: CCArmatureAnimation.js.
   */
  enum MovementEventType { }

  /**
   * Returns the version of Armature.
   * Defined in: CCArmatureDefine.js.
   *
   * @returns {string}
   */
  function armatureVersion(): string

  /**
   * Analysis of studio JSON file
   * The incoming file name, parse out the corresponding object
   * Temporary support file list:
   * ui 1.*
   * node 1.* - 2.*
   * action 1.* - 2.*
   * scene 0.* - 1.*
   * Defined in: load.js.
   *
   * @param {String} file
   * @param {String} path Resource path
   *
   * @returns {{node: cc.Node|action: cc.Action}}
   */
  function load(file: string, path: string): cc.Node | cc.Action

  /**
   * Analysis of studio JSON file and layout ui widgets by visible size.
   * The incoming file name, parse out the corresponding object
   * Temporary support file list:
   * ui 1.*
   * node 1.* - 2.*
   * action 1.* - 2.*
   * scene 0.* - 1.*
   * Defined in: load.js.
   *
   * @param {String} file
   * @param {String} path Resource path
   *
   * @returns {{node: cc.Node|action: cc.Action}}
   */
  function loadWithVisibleSize(file: string, path: string): cc.Node | cc.Action

  /**
   * Registers a trigger class to objectFactory type map.
   * Defined in: TriggerBase.js.
   *
   * @param {String} className
   * @param {function} func
   */
  function registerTriggerClass(className: string, func: Function): any

  /**
   * Sends event by trigger manager.
   * Defined in: TriggerBase.js.
   *
   * @param {Number} event
   */
  function sendEvent(event: number): any
}

declare namespace ccs {
  interface actionManager  {

    /**
     * Base singleton object for ccs.ActionManager.
     */
    constructor()


    /**
     * Clear data: Release all actions.
     */
    clear(): any

    /**
     * Gets an actionObject with a name.
     *
     * @param {String} jsonName
     * @param {String} actionName
     *
     * @returns {ccs.ActionObject}
     */
    getActionByName(jsonName: string, actionName: string): ccs.ActionObject

    /**
     * Init properties with json dictionary
     *
     * @param {String} jsonName
     * @param {Object} dic
     * @param {Object} root
     */
    initWithDictionary(jsonName: string, dic: object, root: object): any

    /**
     * Play an Action with a name.
     *
     * @param {String} jsonName
     * @param {String} actionName
     * @param {cc.CallFunc} fun
     */
    playActionByName(jsonName: string, actionName: string, fun: cc.CallFunc): any

    /**
     * Release all actions.
     */
    releaseActions(): any

    /**
     * Stop an Action with a name.
     *
     * @param {String} jsonName
     * @param {String} actionName
     */
    stopActionByName(jsonName: string, actionName: string): any
  }
}

declare namespace ccs {
  interface ActionTimeline  {

    /**
     * ActionTimeline
     */
    constructor()

    /**
     *
     */
    gotoFrameAndPause: any

    /**
     *
     */
    gotoFrameAndPlay: any

  }
}

declare namespace ccs {
  namespace ActionTimeline {



    /**
     * create new ActionTimeline
     *
     * @returns {ccs.ActionTimeline}
     */
    function create(): ccs.ActionTimeline
  }
}

declare namespace ccs {
  interface ActionTimelineData  {

    /**
     * ActionTimelineData
     */
    constructor()


  }
}

declare namespace ccs {
  namespace ActionTimelineData {



    /**
     * Create new ActionTimelineData.
     *
     * @param {} actionTag
     *
     * @returns {ccs.ActionTimelineData}
     */
    function create(actionTag: any): ccs.ActionTimelineData
  }
}

declare namespace ccs {
  interface AlphaFrame  {

    /**
     * Alpha frame
     */
    constructor()


  }
}

declare namespace ccs {
  interface AnchorPointFrame  {

    /**
     * AnchorPoint frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace AnchorPointFrame {



    /**
     * Create the AnchorPoint frame
     *
     * @returns {ccs.AnchorPointFrame}
     */
    function create(): ccs.AnchorPointFrame
  }
}

declare namespace ccs {
  interface armatureDataManager  {

    /**
     * ccs.armatureDataManager is a singleton object which format and manage armature configuration and armature animation
     */
    constructor()


    /**
     * Adds animation data to armature data manager.
     *
     * @param {String} id
     * @param {ccs.AnimationData} animationData
     * @param {} configFilePath
     */
    addAnimationData(id: string, animationData: ccs.AnimationData, configFilePath: any): any

    /**
     * Adds armature data
     *
     * @param {string} id The id of the armature data
     * @param {ccs.ArmatureData} armatureData
     * @param {} configFilePath
     */
    addArmatureData(id: string, armatureData: ccs.ArmatureData, configFilePath: any): any

    /**
     * Adds ArmatureFileInfo, it is managed by CCArmatureDataManager.
     *
     * @param {String} imagePath
     * @param {String} plistPath
     * @param {String} configFilePath
     */
    addArmatureFileInfo(imagePath: string, plistPath: string, configFilePath: string): any

    /**
     * Adds ArmatureFileInfo, it is managed by CCArmatureDataManager.
     *
     * @param {String} imagePath
     * @param {String} plistPath
     * @param {String} configFilePath
     * @param {Function} selector
     * @param {Object} target
     */
    addArmatureFileInfoAsync(imagePath: string, plistPath: string, configFilePath: string, selector: Function, target: object): any

    /**
     * Adds RelativeData of Armature data manager.
     *
     * @param {String} configFilePath
     */
    addRelativeData(configFilePath: string): any

    /**
     * Add sprite frame to CCSpriteFrameCache, it will save display name and it's relative image name
     *
     * @param {String} plistPath
     * @param {String} imagePath
     * @param {String} configFilePath
     */
    addSpriteFrameFromFile(plistPath: string, imagePath: string, configFilePath: string): any

    /**
     * Adds texture data to Armature data manager.
     *
     * @param {String} id
     * @param {ccs.TextureData} textureData
     * @param {} configFilePath
     */
    addTextureData(id: string, textureData: ccs.TextureData, configFilePath: any): any

    /**
     * Clear data
     */
    clear(): any

    /**
     * Gets animationData by id
     *
     * @param {String} id
     *
     * @returns {ccs.AnimationData}
     */
    getAnimationData(id: string): ccs.AnimationData

    /**
     * Returns animation data of Armature data manager.
     *
     * @returns {Object}
     */
    getAnimationDatas(): object

    /**
     * Gets armatureData by id
     *
     * @param {String} id
     *
     * @returns {ccs.ArmatureData}
     */
    getArmatureData(id: string): ccs.ArmatureData

    /**
     * Returns armature Data of Armature data manager.
     *
     * @returns {Object}
     */
    getArmatureDatas(): object

    /**
     * Gets RelativeData of Armature data manager.
     *
     * @param {String} configFilePath
     *
     * @returns {ccs.RelativeData}
     */
    getRelativeData(configFilePath: string): ccs.RelativeData

    /**
     * Gets textureData by id
     *
     * @param {String} id
     *
     * @returns {ccs.TextureData}
     */
    getTextureData(id: string): ccs.TextureData

    /**
     * Returns texture data of Armature data manager.
     *
     * @returns {Object}
     */
    getTextureDatas(): object

    /**
     * Returns whether or not need auto load sprite file
     *
     * @returns {boolean}
     */
    isAutoLoadSpriteFile(): boolean

    /**
     * Removes animation data
     *
     * @param {string} id
     */
    removeAnimationData(id: string): any

    /**
     * Removes armature data from armature data manager.
     *
     * @param {string} id
     */
    removeArmatureData(id: string): any

    /**
     * Removes armature cache data by configFilePath
     *
     * @param {String} configFilePath
     */
    removeArmatureFileInfo(configFilePath: string): any

    /**
     * Removes texture data by id
     *
     * @param {string} id
     */
    removeTextureData(id: string): any
  }
}

declare namespace ccs {
  interface Class  {

    /**
     * The same as cc.Class
     */
    constructor()


  }
}

declare namespace ccs {
  interface ActionFrame  {

    /**
     * The constructor of cc.ActionFrame.
     */
    constructor()

    /**
     * - easing type of ccs.ActionFrame
     */
    easingType: number

    /**
     * - frame index of ccs.ActionFrame
     */
    frameIndex: number

    /**
     * - frame type of ccs.ActionFrame
     */
    frameType: number

    /**
     * - time of ccs.ActionFrame
     */
    time: number

    /**
     * Returns the action of ActionFrame. its subClass need override it.
     *
     * @param {number} duration the duration time of ActionFrame
     * @param {ccs.ActionFrame} srcFrame source frame.
     *
     * @returns {null}
     */
    getAction(duration: number, srcFrame: ccs.ActionFrame): null

    /**
     * Sets the easing parameter to action frame.
     *
     * @param {Array} parameter
     */
    setEasingParameter(parameter: any[]): any

    /**
     * Sets the easing type to ccs.ActionFrame
     *
     * @param {Number} easingType
     */
    setEasingType(easingType: number): any
  }
}

declare namespace ccs {
  interface ActionFadeFrame  {

    /**
     * Construction of ccs.ActionFadeFrame
     */
    constructor()


    /**
     * Returns a fade action with easing.
     *
     * @param {Number} duration
     *
     * @returns {cc.FadeTo}
     */
    getAction(duration: number): cc.FadeTo

    /**
     * Returns the fade action opacity.
     *
     * @returns {number}
     */
    getOpacity(): number

    /**
     * Changes the fade action opacity.
     *
     * @param {number} opacity
     */
    setOpacity(opacity: number): any
  }
}

declare namespace ccs {
  interface ActionMoveFrame  {

    /**
     * Construction of ccs.ActionMoveFrame
     */
    constructor()


    /**
     * Returns the CCAction of ActionFrame.
     *
     * @param {number} duration
     *
     * @returns {cc.MoveTo}
     */
    getAction(duration: number): cc.MoveTo

    /**
     * Returns the move action position.
     *
     * @returns {cc.Point}
     */
    getPosition(): cc.Point

    /**
     * Changes the move action position.
     *
     * @param {cc.Point|Number} pos
     * @param {Number} y
     */
    setPosition(pos: cc.Point | number, y: number): any
  }
}

declare namespace ccs {
  interface ActionRotationFrame  {

    /**
     * Construction of ccs.ActionRotationFrame
     */
    constructor()


    /**
     * Returns the CCAction of ActionFrame.
     *
     * @param {number} duration
     * @param {cc.ActionFrame} srcFrame
     *
     * @returns {cc.RotateTo}
     */
    getAction(duration: number, srcFrame: cc.ActionFrame): cc.RotateTo

    /**
     * Returns the rotate action rotation.
     *
     * @returns {number}
     */
    getRotation(): number

    /**
     * Changes rotate action rotation.
     *
     * @param {number} rotation
     */
    setRotation(rotation: number): any
  }
}

declare namespace ccs {
  interface ActionScaleFrame  {

    /**
     * Construction of ccs.ActionScaleFrame
     */
    constructor()


    /**
     * Returns the action of ActionFrame.
     *
     * @param {number} duration
     *
     * @returns {cc.ScaleTo}
     */
    getAction(duration: number): cc.ScaleTo

    /**
     * Returns the scale action scaleX.
     *
     * @returns {number}
     */
    getScaleX(): number

    /**
     * Returns the scale action scaleY.
     *
     * @returns {number}
     */
    getScaleY(): number

    /**
     * Changes the scale action scaleX.
     *
     * @param {number} scaleX
     */
    setScaleX(scaleX: number): any

    /**
     * Changes the scale action scaleY.
     *
     * @param {number} scaleY
     */
    setScaleY(scaleY: number): any
  }
}

declare namespace ccs {
  interface ActionTintFrame  {

    /**
     * Construction of ccs.ActionTintFrame
     */
    constructor()


    /**
     * Returns a tint action with easing.
     *
     * @param {} duration
     *
     * @returns {cc.TintTo}
     */
    getAction(duration: any): cc.TintTo

    /**
     * Returns the color of tint action.
     *
     * @returns {cc.Color}
     */
    getColor(): cc.Color

    /**
     * Changes the tint action color.
     *
     * @param {cc.Color} color
     */
    setColor(color: cc.Color): any
  }
}

declare namespace ccs {
  interface ActionNode  {

    /**
     * Construction of ccs.ActionNode
     */
    constructor()


    /**
     * Pushes back an ActionFrame to ccs.ActionNode.
     *
     * @param {ccs.ActionFrame} frame
     */
    addFrame(frame: ccs.ActionFrame): any

    /**
     * Removes all ActionFrames from ccs.ActionNode.
     */
    clearAllFrame(): any

    /**
     * Removes an ActionFrame from ccs.ActionNode.
     *
     * @param {ccs.ActionFrame} frame
     */
    deleteFrame(frame: ccs.ActionFrame): any

    /**
     * Returns the target node of ccs.ActionNode
     *
     * @returns {cc.Node}
     */
    getActionNode(): cc.Node

    /**
     * Returns the tag of ccs.ActionNode
     *
     * @returns {number}
     */
    getActionTag(): number

    /**
     * Returns index of first ActionFrame.
     *
     * @returns {number}
     */
    getFirstFrameIndex(): number

    /**
     * Returns the index of last ccs.ActionFrame.
     *
     * @returns {number}
     */
    getLastFrameIndex(): number

    /**
     * Returns node which will run a action.
     *
     * @returns {*}
     */
    getObject(): any

    /**
     * Returns the time interval of frame.
     *
     * @returns {number}
     */
    getUnitTime(): number

    /**
     * Init properties with a json dictionary
     *
     * @param {Object} dic
     * @param {Object} root
     */
    initWithDictionary(dic: object, root: object): any

    /**
     * Inserts an ActionFrame to ccs.ActionNode.
     *
     * @param {number} index
     * @param {ccs.ActionFrame} frame
     */
    insertFrame(index: number, frame: ccs.ActionFrame): any

    /**
     * Returns if the action is done once time.
     *
     * @returns {Boolean} that if the action is done once time
     */
    isActionDoneOnce(): boolean

    /**
     * Plays ccs.ActionNode's action.
     *
     * @param {cc.CallFunc} fun
     */
    playAction(fun: cc.CallFunc): any

    /**
     * Sets tag to ccs.ActionNode
     *
     * @param {Number} tag
     */
    setActionTag(tag: number): any

    /**
     * Sets node which will run a action.
     *
     * @param {Object} node
     */
    setObject(node: object): any

    /**
     * Sets the time interval of frame.
     *
     * @param {number} time
     */
    setUnitTime(time: number): any

    /**
     * Stops action.
     */
    stopAction(): any

    /**
     * Updates action states to some time.
     *
     * @param {Number} time
     *
     * @returns {boolean}
     */
    updateActionToTimeLine(time: number): boolean
  }
}

declare namespace ccs {
  interface ActionObject  {

    /**
     * Construction of ccs.ActionObject.
     */
    constructor()


    /**
     * Adds a ActionNode to play the action.
     *
     * @param {ccs.ActionNode} node
     */
    addActionNode(node: ccs.ActionNode): any

    /**
     * Returns the current time of frame.
     *
     * @returns {number}
     */
    getCurrentTime(): number

    /**
     * Returns if the action will loop play.
     *
     * @returns {boolean}
     */
    getLoop(): boolean

    /**
     * Returns name fo ccs.ActionObject
     *
     * @returns {string}
     */
    getName(): string

    /**
     * Returns the total time of frame.
     *
     * @returns {number} the total time of frame
     */
    getTotalTime(): number

    /**
     * Returns the time interval of frame.
     *
     * @returns {number} the time interval of frame
     */
    getUnitTime(): number

    /**
     * Init properties with a json dictionary
     *
     * @param {Object} dic
     * @param {Object} root
     */
    initWithDictionary(dic: object, root: object): any

    /**
     * Returns if the action is playing.
     *
     * @returns {boolean} true if the action is playing, false the otherwise
     */
    isPlaying(): boolean

    /**
     * Pauses the action.
     */
    pause(): any

    /**
     * Plays the action.
     *
     * @param {cc.CallFunc} fun Action Call Back
     */
    play(fun: cc.CallFunc): any

    /**
     * Removes a ActionNode which play the action.
     *
     * @param {ccs.ActionNode} node
     */
    removeActionNode(node: ccs.ActionNode): any

    /**
     * Sets the current time of frame.
     *
     * @param {Number} time the current time of frame
     */
    setCurrentTime(time: number): any

    /**
     * Sets if the action will loop play.
     *
     * @param {boolean} loop
     */
    setLoop(loop: boolean): any

    /**
     * Sets name to ccs.ActionObject
     *
     * @param {string} name
     */
    setName(name: string): any

    /**
     * Sets the time interval of frame.
     *
     * @param {number} time
     */
    setUnitTime(time: number): any

    /**
     * scheduler update function
     *
     * @param {Number} dt delta time
     */
    simulationActionUpdate(dt: number): any

    /**
     * Stop the action.
     */
    stop(): any

    /**
     * Updates frame by time.
     *
     * @param {} time
     */
    updateToFrameByTime(time: any): any
  }
}

declare namespace ccs {
  interface AnimationData  {

    /**
     * The animation data information of Cocos Armature. It include all movement information for the Armature.
     * The struct is AnimationData -> MovementData -> MovementBoneData -> FrameData
     * -> MovementFrameData
     */
    constructor()


    /**
     * adds movement data to the movement data dictionary
     *
     * @param {ccs.MovementData} moveData
     */
    addMovement(moveData: ccs.MovementData): any

    /**
     * gets movement data from movement data dictionary
     *
     * @param {String} moveName
     *
     * @returns {ccs.MovementData}
     */
    getMovement(moveName: string): ccs.MovementData

    /**
     * gets the count of movement data dictionary
     *
     * @returns {Number}
     */
    getMovementCount(): number
  }
}

declare namespace ccs {
  interface AnimationEvent  {

    /**
     * Constructor of ccs.AnimationEvent
     *
     * @param {function} callFunc
     * @param {object} target
     * @param {object} data
     */
    constructor(callFunc: Function, target: object, data: object)


  }
}

declare namespace ccs {
  interface ArmatureData  {

    /**
     * Construction of ccs.ArmatureData
     */
    constructor()

    /**
     * - the bone data dictionary
     */
    boneDataDic: object

    /**
     * - the data version of armature data
     */
    dataVersion: number

    /**
     * - the name of armature data
     */
    name: string

    /**
     * Adds bone data to dictionary
     *
     * @param {ccs.BoneData} boneData
     */
    addBoneData(boneData: ccs.BoneData): any

    /**
     * Gets bone data by bone name
     *
     * @param {String} boneName
     *
     * @returns {ccs.BoneData}
     */
    getBoneData(boneName: string): ccs.BoneData

    /**
     * Gets bone data dictionary
     *
     * @returns {Object}
     */
    getBoneDataDic(): object

    /**
     * Initializes a ccs.ArmatureData
     *
     * @returns {boolean}
     */
    init(): boolean
  }
}

declare namespace ccs {
  interface ArmatureMovementDispatcher  {

    /**
     * Constructor of ArmatureMovementDispatcher.
     */
    constructor()


    /**
     * Adds animation event callback to event animation list
     *
     * @param {function} callFunc
     * @param {Object|null} target
     */
    addAnimationEventCallBack(callFunc: Function, target: object | null): any

    /**
     * Calls armature movement events.
     *
     * @param {ccs.Armature} armature
     * @param {Number} movementType
     * @param {String} movementID
     */
    animationEvent(armature: ccs.Armature, movementType: number, movementID: string): any

    /**
     * Removes animation event callback from trigger manager.
     *
     * @param {function} callFunc
     * @param {Object|null} target
     */
    removeAnimationEventCallBack(callFunc: Function, target: object | null): any
  }
}

declare namespace ccs {
  interface BaseData  {

    /**
     * Construction of ccs.BaseData
     */
    constructor()

    /**
     * - a of color
     */
    a: number

    /**
     * - b of color
     */
    b: number

    /**
     * - g of color
     */
    g: number

    /**
     * - is Use Color Info
     */
    isUseColorInfo: number

    /**
     * - r of color
     */
    r: number

    /**
     * - scaleX
     */
    scaleX: number

    /**
     * - scaleY
     */
    scaleY: number

    /**
     * - skewX
     */
    skewX: number

    /**
     * - skewY
     */
    skewY: number

    /**
     * - tween Rotate
     */
    tweenRotate: number

    /**
     * - x
     */
    x: number

    /**
     * - y
     */
    y: number

    /**
     * - zOrder
     */
    zOrder: number

    /**
     * Copy data from node
     *
     * @param {ccs.BaseData} node
     */
    copy(node: ccs.BaseData): any

    /**
     * Returns the color of ccs.BaseData
     *
     * @returns {cc.Color}
     */
    getColor(): cc.Color

    /**
     * Sets color to base data.
     *
     * @param {cc.Color} color
     */
    setColor(color: cc.Color): any

    /**
     * Calculate two baseData's between value(to - from) and set to self
     *
     * @param {ccs.BaseData} from
     * @param {ccs.BaseData} to
     * @param {Boolean} limit
     */
    subtract(from: ccs.BaseData, to: ccs.BaseData, limit: boolean): any
  }
}

declare namespace ccs {
  interface BoneData  {

    /**
     * Construction of ccs.BoneData
     */
    constructor()

    /**
     * - the bone transform data
     */
    boneDataTransform: cc.AffineTransform

    /**
     * - the display data list
     */
    displayDataList: any[]

    /**
     * - the name of Bone
     */
    name: string

    /**
     * - the parent name of bone
     */
    parentName: string

    /**
     * Adds display data to list
     *
     * @param {ccs.DisplayData} displayData
     */
    addDisplayData(displayData: ccs.DisplayData): any

    /**
     * Returns display data with index.
     *
     * @param {Number} index
     *
     * @returns {ccs.DisplayData}
     */
    getDisplayData(index: number): ccs.DisplayData

    /**
     * Initializes a ccs.BoneData
     *
     * @returns {boolean}
     */
    init(): boolean
  }
}

declare namespace ccs {
  interface FrameData  {

    /**
     * Construction of ccs.FrameData.
     */
    constructor()

    /**
     * - the blendFunc of frame.
     */
    blendFunc: object

    /**
     * - the display renderer index.
     */
    displayIndex: number

    /**
     * - the duration of frame
     */
    duration: number

    /**
     * - the count of easing parameters.
     */
    easingParamNumber: number

    /**
     * - the dictionary of easing parameters.
     */
    easingParams: object

    /**
     * - the event name
     */
    event: string

    /**
     * - the frame ID of frame
     */
    frameID: number

    /**
     * - the flag which frame whether is tween.
     */
    isTween: boolean

    /**
     * - the movement name.
     */
    movement: string

    /**
     * - the sound path.
     */
    sound: string

    /**
     * - the sound effect path.
     */
    soundEffect: string

    /**
     * - the easing type of frame
     */
    tweenEasing: number

    /**
     * copy data
     *
     * @param {} frameData
     */
    copy(frameData: any): any
  }
}

declare namespace ccs {
  interface BaseTriggerAction  {

    /**
     * Construction of ccs.BaseTriggerAction
     */
    constructor()


    /**
     * Sets the action to done.
     */
    done(): any

    /**
     * Initializes a BaseTriggerAction object.
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Removes all actions.
     */
    removeAll(): any

    /**
     * Serializes a ccs.BaseTriggerAction object.
     *
     * @param {} jsonVal
     */
    serialize(jsonVal: any): any
  }
}

declare namespace ccs {
  interface BaseTriggerCondition  {

    /**
     * Construction of ccs.BaseTriggerCondition
     */
    constructor()


    /**
     * Detects trigger condition
     *
     * @returns {boolean}
     */
    detect(): boolean

    /**
     * initializes a BaseTriggerCondition class.
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Removes all condition
     */
    removeAll(): any

    /**
     * Serialize a BaseTriggerCondition object.
     *
     * @param {} jsonVal
     */
    serialize(jsonVal: any): any
  }
}

declare namespace ccs {
  interface ColliderBody  {

    /**
     * Base class for ccs.ColliderBody
     */
    constructor()

    /**
     * - The collider filter of collider body
     */
    colliderFilter: ccs.ColliderFilter

    /**
     * - The contour data of collider body
     */
    contourData: ccs.ContourData

    /**
     * - The shape of collider body
     */
    shape: ccs.Shape

    /**
     * get calculated vertex list
     *
     * @returns {Array}
     */
    getCalculatedVertexList(): any[]

    /**
     * colliderFilter getter
     *
     * @returns {ccs.ColliderFilter}
     */
    getColliderFilter(): ccs.ColliderFilter

    /**
     * contourData getter
     *
     * @returns {ccs.ContourData}
     */
    getContourData(): ccs.ContourData

    /**
     * shape setter
     *
     * @returns {ccs.Shape}
     */
    getShape(): ccs.Shape

    /**
     * colliderFilter setter
     *
     * @param {ccs.ColliderFilter} colliderFilter
     */
    setColliderFilter(colliderFilter: ccs.ColliderFilter): any

    /**
     * contourData setter
     *
     * @param {ccs.ContourData} contourData
     */
    setContourData(contourData: ccs.ContourData): any

    /**
     * shape getter
     *
     * @param {ccs.Shape} shape
     */
    setShape(shape: ccs.Shape): any
  }
}

declare namespace ccs {
  interface ColliderDetector  {

    /**
     * Base class for ccs.ColliderDetector
     *
     * @param {ccs.Bone} bone
     */
    constructor(bone: ccs.Bone)

    /**
     * - Indicate whether the collider detector is active
     */
    active: boolean

    /**
     * - The collider body
     */
    body: object

    /**
     * - The collider filter of the collider detector
     */
    colliderFilter: ccs.ColliderFilter

    /**
     * add contourData
     *
     * @param {ccs.ContourData} contourData
     */
    addContourData(contourData: ccs.ContourData): any

    /**
     * add contourData
     *
     * @param {Array} contourDataList
     */
    addContourDataList(contourDataList: any[]): any

    /**
     * get colliderFilter
     *
     * @returns {ccs.ColliderFilter}
     */
    getColliderFilter(): ccs.ColliderFilter

    /**
     * remove all body
     */
    removeAll(): any

    /**
     * remove contourData
     *
     * @param {} contourData
     */
    removeContourData(contourData: any): any

    /**
     * set colliderFilter
     *
     * @param {ccs.ColliderFilter} filter
     */
    setColliderFilter(filter: ccs.ColliderFilter): any
  }
}

declare namespace ccs {
  interface ColliderFilter  {

    /**
     * Base class for ccs.ColliderFilter
     */
    constructor()


  }
}

declare namespace ccs {
  interface Component  {

    /**
     * The same as cc.Component
     */
    constructor()


  }
}

declare namespace ccs {
  interface ComAttribute  {

    /**
     * Construction of ccs.ComAttribute
     */
    constructor()


    /**
     * Returns boolean value from attribute
     *
     * @param {String} key
     *
     * @returns {Boolean}
     */
    getBool(key: string): boolean

    /**
     * Returns double value from attribute
     *
     * @param {String} key
     *
     * @returns {Number}
     */
    getDouble(key: string): number

    /**
     * Returns float value from attribute
     *
     * @param {String} key
     *
     * @returns {Number}
     */
    getFloat(key: string): number

    /**
     * Returns int value from attribute
     *
     * @param {String} key
     *
     * @returns {Number}
     */
    getInt(key: string): number

    /**
     * Returns object value from attribute
     *
     * @param {String} key
     *
     * @returns {Object}
     */
    getObject(key: string): object

    /**
     * Returns string value from attribute
     *
     * @param {String} key
     *
     * @returns {String}
     */
    getString(key: string): string

    /**
     * Initializes a ccs.ComAttribute
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Parses json file.
     *
     * @param {} filename
     */
    parse(filename: any): any

    /**
     * Sets boolean attribute
     *
     * @param {String} key
     * @param {Boolean} value
     */
    setBool(key: string, value: boolean): any

    /**
     * Sets double attribute
     *
     * @param {String} key
     * @param {number} value
     */
    setDouble(key: string, value: number): any

    /**
     * Sets float attribute
     *
     * @param {String} key
     * @param {number} value
     */
    setFloat(key: string, value: number): any

    /**
     * Sets int attribute
     *
     * @param {String} key
     * @param {number} value
     */
    setInt(key: string, value: number): any

    /**
     * Sets object attribute
     *
     * @param {String} key
     * @param {Object} value
     */
    setObject(key: string, value: object): any

    /**
     * Sets string attribute
     *
     * @param {String} key
     * @param {Boolean} value
     */
    setString(key: string, value: boolean): any
  }
}

declare namespace ccs {
  namespace ComAttribute {



    /**
     * allocates and initializes a ComAttribute.
     *
     * @returns {ccs.ComAttribute}
     */
    function create(): ccs.ComAttribute
  }
}

declare namespace ccs {
  interface ComAudio  {

    /**
     * Construction of ccs.ComAudio
     */
    constructor()


    /**
     * Stops all audios.
     */
    end(): any

    /**
     * The volume of the music max value is 1.0,the min value is 0.0 .
     *
     * @returns {Number}
     */
    getBackgroundMusicVolume(): number

    /**
     * The volume of the effects max value is 1.0,the min value is 0.0 .
     *
     * @returns {Number}
     */
    getEffectsVolume(): number

    /**
     * Returns the file path of audio component.
     *
     * @returns {string}
     */
    getFile(): string

    /**
     * Initializes a ccs.ComAudio.
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Whether the music is playing.
     *
     * @returns {Boolean}
     */
    isBackgroundMusicPlaying(): boolean

    /**
     * Returns audio component whether plays loop
     *
     * @returns {boolean}
     */
    isLoop(): boolean

    /**
     * The callback calls when a audio component enter stage.
     */
    onExit(): any

    /**
     * Pause all effects
     */
    pauseAllEffects(): any

    /**
     * Pause background music
     */
    pauseBackgroundMusic(): any

    /**
     * Pause playing sound effect.
     *
     * @param {Number} soundId
     */
    pauseEffect(soundId: number): any

    /**
     * Play background music
     *
     * @param {String} pszFilePath
     * @param {Boolean} loop
     */
    playBackgroundMusic(pszFilePath: string, loop: boolean): any

    /**
     * Play sound effect.
     *
     * @param {String} pszFilePath
     * @param {Boolean} loop
     *
     * @returns {Boolean}
     */
    playEffect(pszFilePath: string, loop: boolean): boolean

    /**
     * Preload background music resource
     *
     * @param {String} pszFilePath
     */
    preloadBackgroundMusic(pszFilePath: string): any

    /**
     * Preload effect
     *
     * @param {String} pszFilePath
     */
    preloadEffect(pszFilePath: string): any

    /**
     * Resume all effects
     */
    resumeAllEffects(): any

    /**
     * Resume background music
     */
    resumeBackgroundMusic(): any

    /**
     * Resume effect
     *
     * @param {Number} soundId
     */
    resumeEffect(soundId: number): any

    /**
     * Rewind background music
     */
    rewindBackgroundMusic(): any

    /**
     * Set the volume of music.
     *
     * @param {Number} volume must be in 0.0~1.0 .
     */
    setBackgroundMusicVolume(volume: number): any

    /**
     * Set the volume of sound effects.
     *
     * @param {Number} volume
     */
    setEffectsVolume(volume: number): any

    /**
     * File path setter
     *
     * @param {String} pszFilePath
     */
    setFile(pszFilePath: string): any

    /**
     * Sets audio component whether plays loop
     *
     * @param {Boolean} loop
     */
    setLoop(loop: boolean): any

    /**
     * stop all effects
     */
    stopAllEffects(): any

    /**
     * Stop background music
     *
     * @param {String} releaseData
     */
    stopBackgroundMusic(releaseData: string): any

    /**
     * Stop effect
     *
     * @param {Number} soundId
     */
    stopEffect(soundId: number): any

    /**
     * Unload effect
     *
     * @param {String} pszFilePath
     */
    unloadEffect(pszFilePath: string): any

    /**
     * Indicates whether any background music can be played or not.
     *
     * @returns {boolean}
     */
    willPlayBackgroundMusic(): boolean
  }
}

declare namespace ccs {
  namespace ComAudio {



    /**
     * allocates and initializes a ComAudio.
     *
     * @returns {ccs.ComAudio}
     */
    function create(): ccs.ComAudio
  }
}

declare namespace ccs {
  interface ComController  {

    /**
     * Construction of ccs.ComController.
     */
    constructor()


    /**
     * Returns controller component whether is enabled
     *
     * @returns {Boolean}
     */
    isEnabled(): boolean

    /**
     * The callback calls when controller component enter stage.
     */
    onEnter(): any

    /**
     * Sets controller component whether is enabled
     *
     * @param {Boolean} bool
     */
    setEnabled(bool: boolean): any
  }
}

declare namespace ccs {
  namespace ComController {



    /**
     * Allocates and initializes a ComController.
     *
     * @returns {ccs.ComController}
     */
    function create(): ccs.ComController
  }
}

declare namespace ccs {
  interface ComRender  {

    /**
     * Construction of ccs.ComRender
     *
     * @param {cc.Node} node
     * @param {String} comName
     */
    constructor(node: cc.Node, comName: string)


    /**
     * Returns a render node
     *
     * @returns {cc.Node}
     */
    getNode(): cc.Node

    /**
     * The callback calls when a render component enter stage.
     */
    onEnter(): any

    /**
     * The callback calls when a render component exit stage.
     */
    onExit(): any

    /**
     * Sets a render node to component.
     *
     * @param {cc.Node} node
     */
    setNode(node: cc.Node): any
  }
}

declare namespace ccs {
  namespace ComRender {



    /**
     * allocates and initializes a ComRender.
     *
     * @param {} node
     * @param {} comName
     *
     * @returns {ccs.ComRender}
     */
    function create(node: any, comName: any): ccs.ComRender
  }
}

declare namespace ccs {
  interface DecorativeDisplay  {

    /**
     * Decorative a display node for Cocos Armature
     */
    constructor()


    /**
     * Returns collide detector
     *
     * @returns {ccs.ColliderDetector}
     */
    getColliderDetector(): ccs.ColliderDetector

    /**
     * Returns the display node
     *
     * @returns {cc.Node}
     */
    getDisplay(): cc.Node

    /**
     * Returns display data
     *
     * @returns {ccs.DisplayData}
     */
    getDisplayData(): ccs.DisplayData

    /**
     * Initializes a ccs.DecorativeDisplay
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Sets collide detector
     *
     * @param {ccs.ColliderDetector} colliderDetector
     */
    setColliderDetector(colliderDetector: ccs.ColliderDetector): any

    /**
     * Sets display node to decorative
     *
     * @param {cc.Node} display
     */
    setDisplay(display: cc.Node): any

    /**
     * Sets display data
     *
     * @param {ccs.DisplayData} displayData
     */
    setDisplayData(displayData: ccs.DisplayData): any
  }
}

declare namespace ccs {
  namespace DecorativeDisplay {



    /**
     * Allocates and initializes a decorative display.
     *
     * @returns {ccs.DecorativeDisplay}
     */
    function create(): ccs.DecorativeDisplay
  }
}

declare namespace ccs {
  interface DisplayData  {

    /**
     * Construction of ccs.DisplayData
     */
    constructor()

    /**
     * - the display name
     */
    displayName: string

    /**
     * - the display type
     */
    displayType: number

    /**
     * Changes display name to texture type
     *
     * @param {String} displayName
     *
     * @returns {String}
     */
    changeDisplayToTexture(displayName: string): string

    /**
     * copy data
     *
     * @param {ccs.DisplayData} displayData
     */
    copy(displayData: ccs.DisplayData): any
  }
}

declare namespace ccs {
  interface ArmatureDisplayData  {

    /**
     * Construction of ccs.ArmatureDisplayData
     */
    constructor()


  }
}

declare namespace ccs {
  interface ParticleDisplayData  {

    /**
     * Construction of ccs.ParticleDisplayData
     */
    constructor()


  }
}

declare namespace ccs {
  interface SpriteDisplayData  {

    /**
     * Construction of ccs.SpriteDisplayData
     */
    constructor()

    /**
     * - the skin data
     */
    skinData: ccs.BaseData

    /**
     * copy data
     *
     * @param {ccs.SpriteDisplayData} displayData
     */
    copy(displayData: ccs.SpriteDisplayData): any
  }
}

declare namespace ccs {
  interface MovementBoneData  {

    /**
     * Construction of ccs.MovementBoneData.
     */
    constructor()

    /**
     * - the delay of bone's movement.
     */
    delay: number

    /**
     * - the duration of bone's movement.
     */
    duration: number

    /**
     * - the frame list of bone's movement.
     */
    frameList: any[]

    /**
     * - the name of bone's movement.
     */
    name: string

    /**
     * - the scale of bone's movement.
     */
    scale: number

    /**
     * Adds frame data to frame list.
     *
     * @param {ccs.FrameData} frameData
     */
    addFrameData(frameData: ccs.FrameData): any

    /**
     * Gets frame data by Index.
     *
     * @param {Number} index
     *
     * @returns {ccs.FrameData}
     */
    getFrameData(index: number): ccs.FrameData

    /**
     * Initializes a ccs.MovementBoneData.
     *
     * @returns {boolean}
     */
    init(): boolean
  }
}

declare namespace ccs {
  interface Node  {

    /**
     * The same as cc.Node
     */
    constructor()


  }
}

declare namespace ccs {
  interface Armature  {

    /**
     * Create a armature node.
     * Constructor of ccs.Armature
     *
     * @param {String} name
     * @param {ccs.Bone} parentBone
     */
    constructor(name: string, parentBone: ccs.Bone)

    /**
     * - The animation
     */
    animation: ccs.ArmatureAnimation

    /**
     * - The armature data
     */
    armatureData: ccs.ArmatureData

    /**
     * - The batch node of the armature
     */
    batchNode: cc.SpriteBatchNode

    /**
     * - The body of the armature
     */
    body: object

    /**
     * - <@writeonly> The collider filter of the armature
     */
    colliderFilter: ccs.ColliderFilter

    /**
     * - The name of the armature
     */
    name: string

    /**
     * - The parent bone of the armature node
     */
    parentBone: ccs.Bone

    /**
     * - The version
     */
    version: number

    /**
     * Add a Bone to this Armature
     *
     * @param {ccs.Bone} bone The Bone you want to add to Armature
     * @param {String} parentName The parent Bone's name you want to add to. If it's null, then set Armature to its parent
     */
    addBone(bone: ccs.Bone, parentName: string): any

    /**
     * Change a bone's parent with the specified parent name.
     *
     * @param {ccs.Bone} bone The bone you want to change parent
     * @param {String} parentName The new parent's name
     */
    changeBoneParent(bone: ccs.Bone, parentName: string): any

    /**
     * create a bone with name
     *
     * @param {String} boneName
     *
     * @returns {ccs.Bone}
     */
    createBone(boneName: string): ccs.Bone

    /**
     * draw contour
     */
    drawContour(): any

    /**
     * Gets the animation of this Armature.
     *
     * @returns {ccs.ArmatureAnimation}
     */
    getAnimation(): ccs.ArmatureAnimation

    /**
     * Returns the armatureData of ccs.Armature
     *
     * @returns {ccs.ArmatureData}
     */
    getArmatureData(): ccs.ArmatureData

    /**
     * armatureTransformDirty getter
     *
     * @returns {Boolean}
     */
    getArmatureTransformDirty(): boolean

    /**
     * Returns the blendFunc of ccs.Armature
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * Gets a bone with the specified name
     *
     * @param {String} name The bone's name you want to get
     *
     * @returns {ccs.Bone}
     */
    getBone(name: string): ccs.Bone

    /**
     * when bone contain the point ,then return it.
     *
     * @param {Number} x
     * @param {Number} y
     *
     * @returns {ccs.Bone}
     */
    getBoneAtPoint(x: number, y: number): ccs.Bone

    /**
     * Get CCArmature's bone dictionary
     *
     * @returns {Object} Armature's bone dictionary
     */
    getBoneDic(): object

    /**
     * This boundingBox will calculate all bones' boundingBox every time
     *
     * @returns {cc.Rect}
     */
    getBoundingBox(): cc.Rect

    /**
     * Return parent bone of ccs.Armature.
     *
     * @returns {ccs.Bone}
     */
    getParentBone(): ccs.Bone

    /**
     * version getter
     *
     * @returns {Number}
     */
    getVersion(): number

    /**
     * Initializes a CCArmature with the specified name and CCBone
     *
     * @param {String} name
     * @param {ccs.Bone} parentBone
     *
     * @returns {Boolean}
     */
    init(name: string, parentBone: ccs.Bone): boolean

    /**
     * The callback when ccs.Armature enter stage.
     */
    onEnter(): any

    /**
     * The callback when ccs.Armature exit stage.
     */
    onExit(): any

    /**
     * Remove a bone with the specified name. If recursion it will also remove child Bone recursively.
     *
     * @param {ccs.Bone} bone The bone you want to remove
     * @param {Boolean} recursion Determine whether remove the bone's child recursion.
     */
    removeBone(bone: ccs.Bone, recursion: boolean): any

    /**
     * Sets animation to this Armature
     *
     * @param {ccs.ArmatureAnimation} animation
     */
    setAnimation(animation: ccs.ArmatureAnimation): any

    /**
     * Sets armatureData to this Armature
     *
     * @param {ccs.ArmatureData} armatureData
     */
    setArmatureData(armatureData: ccs.ArmatureData): any

    /**
     * Sets the blendFunc to ccs.Armature
     *
     * @param {cc.BlendFunc|Number} blendFunc
     * @param {Number} dst
     */
    setBlendFunc(blendFunc: cc.BlendFunc | number, dst: number): any

    /**
     * set collider filter
     *
     * @param {ccs.ColliderFilter} filter
     */
    setColliderFilter(filter: ccs.ColliderFilter): any

    /**
     * Sets parent bone of this Armature
     *
     * @param {ccs.Bone} parentBone
     */
    setParentBone(parentBone: ccs.Bone): any

    /**
     * version setter
     *
     * @param {Number} version
     */
    setVersion(version: number): any

    /**
     * The update callback of ccs.Armature, it updates animation's state and updates bone's state.
     *
     * @param {Number} dt
     */
    update(dt: number): any

    /**
     * Set contentSize and Calculate anchor point.
     */
    updateOffsetPoint(): any
  }
}

declare namespace ccs {
  namespace Armature {



    /**
     * Allocates an armature, and use the ArmatureData named name in ArmatureDataManager to initializes the armature.
     *
     * @param {String} name Bone name
     * @param {ccs.Bone} parentBone the parent bone
     *
     * @returns {ccs.Armature}
     */
    function create(name: string, parentBone: ccs.Bone): ccs.Armature
  }
}

declare namespace ccs {
  interface Bone  {

    /**
     * The Bone of Armature, it has bone data, display manager and transform data for armature.
     *
     * @param {String} name The name of the bone
     */
    constructor(name: string)

    /**
     * - The armature
     */
    armature: ccs.Armature

    /**
     * - Indicate whether the blend is dirty
     */
    blendDirty: boolean

    /**
     * - The bone data
     */
    boneData: ccs.BoneData

    /**
     * - The child armature
     */
    childArmature: ccs.Armature

    /**
     * - <@readonly> All children bones
     */
    childrenBone: any[]

    /**
     * - The collider filter
     */
    colliderFilter: ccs.ColliderFilter

    /**
     * - The displayManager
     */
    displayManager: ccs.DisplayManager

    /**
     * - Indicate whether force the bone to show When CCArmature play a animation and there isn't a CCMovementBoneData of this bone in this CCMovementData.
     */
    ignoreMovementBoneData: boolean

    /**
     * - The name of the bone
     */
    name: string

    /**
     * - The parent bone
     */
    parentBone: ccs.Bone

    /**
     * - <@readonly> Tween
     */
    tween: ccs.Tween

    /**
     * - <@readonly> The tween data
     */
    tweenData: ccs.FrameData

    /**
     * Adds a child to this bone, and it will let this child call setParent(ccs.Bone) function to set self to it's parent
     *
     * @param {ccs.Bone} child
     */
    addChildBone(child: ccs.Bone): any

    /**
     * Add display and use _displayData init the display.
     * If index already have a display, then replace it.
     * If index is current display index, then also change display to _index
     *
     * @param {ccs.DisplayData} displayData it include the display information, like DisplayType.
     * If you want to create a sprite display, then create a CCSpriteDisplayData param
     * @param {Number} index the index of the display you want to replace or add to
     * -1 : append display from back
     */
    addDisplay(displayData: ccs.DisplayData, index: number): any

    /**
     * Changes display by index
     *
     * @param {Number} index
     * @param {Boolean} force
     */
    changeDisplayByIndex(index: number, force: boolean): any

    /**
     * Changes display by name
     *
     * @param {String} name
     * @param {Boolean} force
     */
    changeDisplayByName(name: string, force: boolean): any

    /**
     * Changes display with index
     *
     * @param {Number} index
     * @param {Boolean} force
     */
    changeDisplayWithIndex(index: number, force: boolean): any

    /**
     * Changes display with name
     *
     * @param {String} name
     * @param {Boolean} force
     */
    changeDisplayWithName(name: string, force: boolean): any

    /**
     * Returns the armature reference of ccs.Bone.
     *
     * @returns {ccs.Armature}
     */
    getArmature(): ccs.Armature

    /**
     * Returns the blendFunc of ccs.Bone.
     *
     * @returns {cc.BlendFunc}
     */
    getBlendFunc(): cc.BlendFunc

    /**
     * Returns boneData of ccs.Bone.
     *
     * @returns {ccs.BoneData}
     */
    getBoneData(): ccs.BoneData

    /**
     * Returns ccs.Bone's child armature.
     *
     * @returns {ccs.Armature}
     */
    getChildArmature(): ccs.Armature

    /**
     * Returns the children of ccs.Bone
     *
     * @returns {Array}
     */
    getChildrenBone(): any[]

    /**
     * Returns the collider body list in this bone.
     *
     * @returns {Array|null}
     */
    getColliderBodyList(): any[] | null

    /**
     * Returns the collide detector of ccs.Bone.
     *
     * @returns {*}
     */
    getColliderDetector(): any

    /**
     * Returns collider filter of ccs.Bone.
     *
     * @returns {cc.ColliderFilter}
     */
    getColliderFilter(): cc.ColliderFilter

    /**
     * displayManager dirty getter
     *
     * @returns {ccs.DisplayManager}
     */
    getDisplayManager(): ccs.DisplayManager

    /**
     * Returns the display render node.
     *
     * @returns {cc.Node}
     */
    getDisplayRenderNode(): cc.Node

    /**
     * Returns the type of display render node
     *
     * @returns {Number}
     */
    getDisplayRenderNodeType(): number

    /**
     * Returns whether is ignore movement bone data.
     *
     * @returns {Boolean}
     */
    getIgnoreMovementBoneData(): boolean

    /**
     * Return the worldTransform of ccs.Bone.
     *
     * @returns {cc.AffineTransform}
     */
    getNodeToArmatureTransform(): cc.AffineTransform

    /**
     * Returns the world transform of ccs.Bone.
     *
     * @returns {cc.AffineTransform}
     */
    getNodeToWorldTransform(): cc.AffineTransform

    /**
     * Returns the parent bone of ccs.Bone.
     *
     * @returns {ccs.Bone}
     */
    getParentBone(): ccs.Bone

    /**
     * Return the tween of ccs.Bone
     *
     * @returns {ccs.Tween}
     */
    getTween(): ccs.Tween

    /**
     * Returns the tweenData of ccs.Bone.
     *
     * @returns {ccs.FrameData}
     */
    getTweenData(): ccs.FrameData

    /**
     * Returns the world information of ccs.Bone.
     *
     * @returns {ccs.BaseData}
     */
    getWorldInfo(): ccs.BaseData

    /**
     * Initializes a ccs.Bone with the specified name
     *
     * @param {String} name bone name
     *
     * @returns {Boolean}
     */
    init(name: string): boolean

    /**
     * Returns the blend dirty flag whether is dirty.
     *
     * @returns {Boolean|*|ccs.Bone._blendDirty}
     */
    isBlendDirty(): boolean | any | any

    /**
     * Returns whether is ignore movement bone data.
     *
     * @returns {Boolean}
     */
    isIgnoreMovementBoneData(): boolean

    /**
     * Returns ccs.Bone's transform dirty flag whether is dirty.
     *
     * @returns {Boolean}
     */
    isTransformDirty(): boolean

    /**
     * Returns the worldTransform of ccs.Bone.
     *
     * @returns {cc.AffineTransform}
     */
    nodeToArmatureTransform(): cc.AffineTransform

    /**
     *
     *
     * @returns {cc.AffineTransform}
     */
    nodeToWorldTransform(): cc.AffineTransform

    /**
     * Removes a child bone
     *
     * @param {ccs.Bone} bone
     * @param {Boolean} recursion
     */
    removeChildBone(bone: ccs.Bone, recursion: boolean): any

    /**
     * Removes display by index.
     *
     * @param {Number} index display renderer's index
     */
    removeDisplay(index: number): any

    /**
     * Removes itself from its parent ccs.Bone.
     *
     * @param {Boolean} recursion
     */
    removeFromParent(recursion: boolean): any

    /**
     * Sets the armature reference to ccs.Bone.
     *
     * @param {ccs.Armature} armature
     */
    setArmature(armature: ccs.Armature): any

    /**
     * Sets blend dirty flag
     *
     * @param {Boolean} dirty
     */
    setBlendDirty(dirty: boolean): any

    /**
     * Sets BlendFunc to ccs.Bone.
     *
     * @param {cc.BlendFunc|Number} blendFunc blendFunc or src of blendFunc
     * @param {Number} dst dst of blendFunc
     */
    setBlendFunc(blendFunc: cc.BlendFunc | number, dst: number): any

    /**
     * Sets the boneData to ccs.Bone.
     *
     * @param {ccs.BoneData} boneData
     */
    setBoneData(boneData: ccs.BoneData): any

    /**
     * Sets ccs.Bone's child armature
     *
     * @param {ccs.Armature} armature
     */
    setChildArmature(armature: ccs.Armature): any

    /**
     * Sets collider filter to ccs.Bone.
     *
     * @param {ccs.ColliderFilter} filter
     */
    setColliderFilter(filter: ccs.ColliderFilter): any

    /**
     * When CCArmature play a animation, if there is not a CCMovementBoneData of this bone in this CCMovementData, this bone will hide.
     * Set IgnoreMovementBoneData to true, then this bone will also show.
     *
     * @param {Boolean} bool
     */
    setIgnoreMovementBoneData(bool: boolean): any

    /**
     * Sets the local zOrder to ccs.Bone.
     *
     * @param {Number} zOrder
     */
    setLocalZOrder(zOrder: number): any

    /**
     * Sets parent bone to ccs.Bone.
     * If _parent is NUll, then also remove this bone from armature.
     * It will not set the ccs.Armature, if you want to add the bone to a ccs.Armature, you should use ccs.Armature.addBone(bone, parentName).
     *
     * @param {ccs.Bone} parent the parent bone.
     */
    setParentBone(parent: ccs.Bone): any

    /**
     * Sets ccs.Bone's transform dirty flag.
     *
     * @param {Boolean} dirty
     */
    setTransformDirty(dirty: boolean): any

    /**
     * Updates worldTransform by tween data and updates display state
     *
     * @param {Number} delta
     */
    update(delta: number): any

    /**
     * Updates display color
     */
    updateColor(): any

    /**
     * Updates display zOrder
     */
    updateZOrder(): any
  }
}

declare namespace ccs {
  namespace Bone {



    /**
     * Allocates and initializes a bone.
     *
     * @param {} name
     *
     * @returns {ccs.Bone}
     */
    function create(name: any): ccs.Bone
  }
}

declare namespace ccs {
  interface ProcessBase  {

    /**
     * Constructor of ccs.ProcessBase
     */
    constructor()

    /**
     * - The animation internal
     */
    animationInterval: number

    /**
     * - <@readonly> Indicate whether the process is done
     */
    completed: boolean

    /**
     * - <@readonly> The current frame's index
     */
    currentFrameIndex: number

    /**
     * - <@readonly> The current percentage of the process
     */
    currentPercent: number

    /**
     * - <@readonly> The number of loop
     */
    loop: number

    /**
     * - <@readonly> Indicate whether the process is paused
     */
    paused: boolean

    /**
     * - <@readonly> Indicate whether the process is playing
     */
    playing: boolean

    /**
     * - The process scale
     */
    processScale: number

    /**
     * - <@readonly> The duration
     */
    rawDuration: number

    /**
     * - <@readonly> The tween easing
     */
    tweenEasing: number

    /**
     * Returns animation interval of ccs.ProcessBase
     *
     * @returns {number}
     */
    getAnimationInternal(): number

    /**
     * Returns the index of current frame.
     *
     * @returns {Number}
     */
    getCurrentFrameIndex(): number

    /**
     * Returns current percent of ccs.ProcessBase
     *
     * @returns {number}
     */
    getCurrentPercent(): number

    /**
     * Returns loop type of ccs.ProcessBase
     *
     * @returns {number}
     */
    getLoop(): number

    /**
     * Returns process scale
     *
     * @returns {number}
     */
    getProcessScale(): number

    /**
     * Returns the raw duration of ccs.ProcessBase
     *
     * @returns {number}
     */
    getRawDuration(): number

    /**
     * Returns tween easing of ccs.ProcessBase
     *
     * @returns {number}
     */
    getTweenEasing(): number

    /**
     * Goes to specified frame by frameIndex.
     *
     * @param {Number} frameIndex
     */
    gotoFrame(frameIndex: number): any

    /**
     * Returns whether the animation is complete
     *
     * @returns {boolean}
     */
    isComplete(): boolean

    /**
     * Returns whether the animation is pause
     *
     * @returns {boolean}
     */
    isPause(): boolean

    /**
     * Returns whether the animation is playing
     *
     * @returns {boolean}
     */
    isPlaying(): boolean

    /**
     * Pauses the Process
     */
    pause(): any

    /**
     * Plays animation by animation name.
     *
     * @param {Number} durationTo The frames between two animation changing-over.
     * It's meaning is changing to this animation need how many frames
     * -1 : use the value from MovementData get from flash design panel
     * @param {Number} durationTween The frame count you want to play in the game.
     * if _durationTween is 80, then the animation will played 80 frames in a loop
     * -1 : use the value from MovementData get from flash design panel
     * @param {Number} loop Whether the animation is loop
     * loop < 0 : use the value from MovementData get from flash design panel
     * loop = 0 : this animation is not loop
     * loop > 0 : this animation is loop
     * @param {Number} tweenEasing Tween easing is used for calculate easing effect
     * TWEEN_EASING_MAX : use the value from MovementData get from flash design panel
     * -1 : fade out
     * 0 : line
     * 1 : fade in
     * 2 : fade in and out
     */
    play(durationTo: number, durationTween: number, loop: number, tweenEasing: number): any

    /**
     * Resumes the Process
     */
    resume(): any

    /**
     * Sets animation interval to ccs.ProcessBase.
     *
     * @param {} animationInternal
     */
    setAnimationInternal(animationInternal: any): any

    /**
     * Sets process scale
     *
     * @param {} processScale
     */
    setProcessScale(processScale: any): any

    /**
     * Stops the Process
     */
    stop(): any

    /**
     * Update process' state.
     *
     * @param {Number} dt
     */
    update(dt: number): any

    /**
     * Updates will call this handler, you can handle your logic here
     */
    updateHandler(): any
  }
}

declare namespace ccs {
  interface ArmatureAnimation  {

    /**
     * The Animation class for Armature, it plays armature animation, and controls speed scale and manages animation frame.
     *
     * @param {ccs.Armature} armature The armature
     */
    constructor(armature: ccs.Armature)

    /**
     * - Animation data
     */
    animationData: ccs.AnimationData

    /**
     * - Animation play speed scale
     */
    animationScale: number

    /**
     * - Indicate whether the frame event is ignored
     */
    ignoreFrameEvent: boolean

    /**
     * - Animation play speed scale
     */
    speedScale: number

    /**
     * - User custom object
     */
    userObject: object

    /**
     * Emits a frame event
     *
     * @param {ccs.Bone} bone
     * @param {String} frameEventName
     * @param {Number} originFrameIndex
     * @param {Number} currentFrameIndex
     */
    frameEvent(bone: ccs.Bone, frameEventName: string, originFrameIndex: number, currentFrameIndex: number): any

    /**
     * Returns animation data of animation.
     *
     * @returns {ccs.AnimationData}
     */
    getAnimationData(): ccs.AnimationData

    /**
     * Returns animation play speed scale.
     *
     * @returns {Number}
     */
    getAnimationScale(): number

    /**
     * Returns the Id of current movement
     *
     * @returns {String}
     */
    getCurrentMovementID(): string

    /**
     * Returns the length of armature's movements
     *
     * @returns {Number}
     */
    getMovementCount(): number

    /**
     * Returns animation play speed scale.
     *
     * @returns {Number}
     */
    getSpeedScale(): number

    /**
     * Returns the user object of animation.
     *
     * @returns {Object}
     */
    getUserObject(): object

    /**
     * Goes to specified frame and pauses current movement.
     *
     * @param {Number} frameIndex
     */
    gotoAndPause(frameIndex: number): any

    /**
     * Goes to specified frame and plays current movement.
     * You need first switch to the movement you want to play, then call this function.
     * example : playByIndex(0);
     * gotoAndPlay(0);
     * playByIndex(1);
     * gotoAndPlay(0);
     * gotoAndPlay(15);
     *
     * @param {Number} frameIndex
     */
    gotoAndPlay(frameIndex: number): any

    /**
     * Initializes with an armature object
     *
     * @param {ccs.Armature} armature
     *
     * @returns {Boolean}
     */
    init(armature: ccs.Armature): boolean

    /**
     * Determines if the frame event is ignored
     *
     * @returns {boolean}
     */
    isIgnoreFrameEvent(): boolean

    /**
     * Emits a movement event
     *
     * @param {ccs.Armature} armature
     * @param {Number} movementType
     * @param {String} movementID
     */
    movementEvent(armature: ccs.Armature, movementType: number, movementID: string): any

    /**
     * Pauses armature animation.
     */
    pause(): any

    /**
     * play animation by animation name.
     *
     * @param {String} animationName The animation name you want to play
     * @param {Number} durationTo the frames between two animation changing-over.It's meaning is changing to this animation need how many frames
     * -1 : use the value from CCMovementData get from flash design panel
     * @param {Number} loop Whether the animation is loop.
     * loop < 0 : use the value from CCMovementData get from flash design panel
     * loop = 0 : this animation is not loop
     * loop > 0 : this animation is loop
     */
    play(animationName: string, durationTo: number, loop: number): any

    /**
     * Plays animation with index, the other param is the same to play.
     *
     * @param {Number} animationIndex
     * @param {Number} durationTo
     * @param {Number} durationTween
     * @param {Number} loop
     * @param {Number} tweenEasing
     */
    playByIndex(animationIndex: number, durationTo: number, durationTween: number, loop: number, tweenEasing: number): any

    /**
     * Plays animation with index, the other param is the same to play.
     *
     * @param {Number|Array} animationIndex
     * @param {Number} durationTo
     * @param {Number} loop
     */
    playWithIndex(animationIndex: number | any[], durationTo: number, loop: number): any

    /**
     * Plays animation by indexes
     *
     * @param {Array} movementIndexes
     * @param {Number} durationTo
     * @param {Boolean} loop
     */
    playWithIndexes(movementIndexes: any[], durationTo: number, loop: boolean): any

    /**
     * Plays animation with names
     *
     * @param {Array} movementNames
     * @param {Number} durationTo
     * @param {Boolean} loop
     */
    playWithNames(movementNames: any[], durationTo: number, loop: boolean): any

    /**
     * Resumes armature animation.
     */
    resume(): any

    /**
     * Sets animation data to animation.
     *
     * @param {ccs.AnimationData} data
     */
    setAnimationData(data: ccs.AnimationData): any

    /**
     * Sets animation play speed scale.
     *
     * @param {Number} animationScale
     */
    setAnimationScale(animationScale: number): any

    /**
     * Sets frame event callback to animation.
     *
     * @param {function} callFunc
     * @param {Object} target
     */
    setFrameEventCallFunc(callFunc: Function, target: object): any

    /**
     * Sets movement event callback to animation.
     *
     * @param {function} callFunc
     * @param {Object} target
     */
    setMovementEventCallFunc(callFunc: Function, target: object): any

    /**
     * Sets animation play speed scale.
     *
     * @param {Number} speedScale
     */
    setSpeedScale(speedScale: number): any

    /**
     * Sets user object to animation.
     *
     * @param {Object} userObject
     */
    setUserObject(userObject: object): any

    /**
     * Stops armature animation.
     */
    stop(): any

    /**
     * Updates the state of ccs.Tween list, calls frame event's callback and calls movement event's callback.
     *
     * @param {Number} dt
     */
    update(dt: number): any

    /**
     * Updates will call this handler, you can handle your logic here
     */
    updateHandler(): any

    /**
     * Updates movement list.
     */
    updateMovementList(): any
  }
}

declare namespace ccs {
  namespace ArmatureAnimation {



    /**
     * Allocates and initializes a ArmatureAnimation.
     *
     * @param {} armature
     *
     * @returns {ccs.ArmatureAnimation}
     */
    function create(armature: any): ccs.ArmatureAnimation
  }
}

declare namespace ccs {
  interface Tween  {

    /**
     * The tween class for Armature.
     *
     * @param {ccs.Bone} The bone to be animated
     */
    constructor(The: ccs.Bone)

    /**
     * - The animation
     */
    animation: ccs.ArmatureAnimation

    /**
     * Update display index and process the key frame event when arrived a key frame
     *
     * @param {ccs.FrameData} keyFrameData
     */
    arriveKeyFrame(keyFrameData: ccs.FrameData): any

    /**
     * Returns Armature animation of ccs.Tween.
     *
     * @returns {ccs.ArmatureAnimation}
     */
    getAnimation(): ccs.ArmatureAnimation

    /**
     * Goes to specified frame and pauses frame.
     *
     * @param {Number} frameIndex
     */
    gotoAndPause(frameIndex: number): any

    /**
     * Goes to specified frame and plays frame.
     *
     * @param {Number} frameIndex
     */
    gotoAndPlay(frameIndex: number): any

    /**
     * initializes a ccs.Tween with a CCBone
     *
     * @param {ccs.Bone} bone
     *
     * @returns {Boolean}
     */
    init(bone: ccs.Bone): boolean

    /**
     * Plays the tween.
     *
     * @param {ccs.MovementBoneData} movementBoneData
     * @param {Number} durationTo
     * @param {Number} durationTween
     * @param {Boolean} loop
     * @param {ccs.TweenType} tweenEasing
     */
    play(movementBoneData: ccs.MovementBoneData, durationTo: number, durationTween: number, loop: boolean, tweenEasing: ccs.TweenType): any

    /**
     * Sets Armature animation to ccs.Tween.
     *
     * @param {ccs.ArmatureAnimation} animation
     */
    setAnimation(animation: ccs.ArmatureAnimation): any

    /**
     * Calculate the between value of _from and _to, and give it to between frame data
     *
     * @param {ccs.FrameData} from
     * @param {ccs.FrameData} to
     * @param {Boolean} limit
     */
    setBetween(from: ccs.FrameData, to: ccs.FrameData, limit: boolean): any

    /**
     * Sets movement bone data to ccs.Tween.
     *
     * @param {} data
     */
    setMovementBoneData(data: any): any

    /**
     * According to the percent to calculate current color with tween effect
     *
     * @param {Number} percent
     * @param {ccs.FrameData} node
     */
    tweenColorTo(percent: number, node: ccs.FrameData): any

    /**
     * According to the percent to calculate current CCFrameData with tween effect
     *
     * @param {Number} percent
     * @param {ccs.FrameData} node
     *
     * @returns {ccs.FrameData}
     */
    tweenNodeTo(percent: number, node: ccs.FrameData): ccs.FrameData

    /**
     * Calculate which frame arrived, and if current frame have event, then call the event listener
     *
     * @param {Number} currentPercent
     *
     * @returns {Number}
     */
    updateFrameData(currentPercent: number): number

    /**
     * update will call this handler, you can handle your logic here
     */
    updateHandler(): any
  }
}

declare namespace ccs {
  namespace Tween {



    /**
     * Allocates and initializes a ArmatureAnimation.
     *
     * @param {ccs.Bone} bone
     *
     * @returns {ccs.Tween}
     */
    function create(bone: ccs.Bone): ccs.Tween
  }
}

declare namespace ccs {
  interface Sprite  {

    /**
     * The same as cc.Sprite
     */
    constructor()


  }
}

declare namespace ccs {
  interface Skin  {

    /**
     * ccs.Bone uses ccs.Skin to displays on screen.
     *
     * @param {String} fileName
     * @param {cc.Rect} rect
     */
    constructor(fileName: string, rect: cc.Rect)

    /**
     * - The bone of the skin
     */
    bone: ccs.Bone

    /**
     * - <@readonly> The displayed name of skin
     */
    displayName: string

    /**
     * - The data of the skin
     */
    skinData: object

    /**
     * Returns the bone reference of ccs.Skin.
     *
     * @returns {null}
     */
    getBone(): null

    /**
     * display name getter
     *
     * @returns {String}
     */
    getDisplayName(): string

    /**
     * Returns skin's world transform.
     *
     * @returns {cc.AffineTransform}
     */
    getNodeToWorldTransform(): cc.AffineTransform

    /**
     * Returns skin date of ccs.Skin.
     *
     * @returns {ccs.BaseData}
     */
    getSkinData(): ccs.BaseData

    /**
     * Initializes with texture file name.
     *
     * @param {String} fileName
     * @param {cc.Rect} rect
     *
     * @returns {Boolean}
     */
    initWithFile(fileName: string, rect: cc.Rect): boolean

    /**
     * Initializes with sprite frame name
     *
     * @param {String} spriteFrameName
     *
     * @returns {Boolean}
     */
    initWithSpriteFrameName(spriteFrameName: string): boolean

    /**
     * Sets the bone reference to ccs.Skin.
     *
     * @param {} bone
     */
    setBone(bone: any): any

    /**
     * Sets skin data to ccs.Skin.
     *
     * @param {ccs.BaseData} skinData
     */
    setSkinData(skinData: ccs.BaseData): any

    /**
     * Updates armature skin's transform with skin transform and bone's transform.
     */
    updateArmatureTransform(): any
  }
}

declare namespace ccs {
  namespace Skin {



    /**
     * allocates and initializes a skin.
     *
     * @param {String} fileName fileName or sprite frame name
     * @param {cc.Rect} rect
     *
     * @returns {ccs.Skin}
     */
    function create(fileName: string, rect: cc.Rect): ccs.Skin

    /**
     * allocates and initializes a skin.
     *
     * @param {String} spriteFrameName
     *
     * @returns {ccs.Skin}
     */
    function createWithSpriteFrameName(spriteFrameName: string): ccs.Skin
  }
}

declare namespace ccs {
  interface TriggerObj  {

    /**
     * The trigger object of Cocostudio.
     */
    constructor()


    /**
     * Detects trigger's conditions.
     *
     * @returns {boolean}
     */
    detect(): boolean

    /**
     * Sets trigger's actions to done.
     */
    done(): any

    /**
     * Returns the events of ccs.TriggerObj.
     *
     * @returns {null|Array}
     */
    getEvents(): null | any[]

    /**
     * Returns the id of ccs.TriggerObj.
     *
     * @returns {number}
     */
    getId(): number

    /**
     * Initializes a ccs.TriggerObj
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Removes all condition and actions from ccs.TriggerObj.
     */
    removeAll(): any

    /**
     * Serializes ccs.TriggerObj
     *
     * @param {} jsonVal
     */
    serialize(jsonVal: any): any

    /**
     * Sets enable value.
     *
     * @param {Boolean} enable
     */
    setEnable(enable: boolean): any
  }
}

declare namespace ccs {
  interface ColorFrame  {

    /**
     * Color frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace ColorFrame {



    /**
     * Create the Color frame
     *
     * @returns {ccs.ColorFrame}
     */
    function create(): ccs.ColorFrame
  }
}

declare namespace ccs {
  interface ContourData  {

    /**
     * The Contour data information of Cocos Armature.
     */
    constructor()


    /**
     * add a vertex object to vertex list
     *
     * @param {cc.Point} p
     */
    addVertex(p: cc.Point): any
  }
}

declare namespace ccs {
  interface ContourVertex2  {

    /**
     * contour vertex
     *
     * @param {Number} x
     * @param {Number} y
     */
    constructor(x: number, y: number)


  }
}

declare namespace ccs {
  interface dataReaderHelper  {

    /**
     * ccs.dataReaderHelper is a singleton object for reading CocoStudio data
     */
    constructor()


    /**
     * Translate XML export from Dragon Bone flash tool to data, and save them. When you add a new xml, the data already saved will be keeped.
     *
     * @param {Object} skeleton
     * @param {ccs.DataInfo} dataInfo
     */
    addDataFromCache(skeleton: object, dataInfo: ccs.DataInfo): any

    /**
     * Add armature data from file.
     *
     * @param {String} filePath
     */
    addDataFromFile(filePath: string): any

    /**
     * Adds data from file with Async.
     *
     * @param {String} imagePath
     * @param {String} plistPath
     * @param {String} filePath
     * @param {function} selector
     * @param {Object} target
     */
    addDataFromFileAsync(imagePath: string, plistPath: string, filePath: string, selector: Function, target: object): any

    /**
     * Adds json armature data to armature data manager.
     *
     * @param {String} filePath
     * @param {ccs.DataInfo} dataInfo
     */
    addDataFromJson(filePath: string, dataInfo: ccs.DataInfo): any

    /**
     * Adds json armature data to armature data manager.
     *
     * @param {Object} dic json armature data
     * @param {ccs.DataInfo} dataInfo
     */
    addDataFromJsonCache(dic: object, dataInfo: ccs.DataInfo): any

    /**
     * Adds xml armature data to armature data manager.
     *
     * @param {XMLDocument} xml
     * @param {ccs.DataInfo} dataInfo
     */
    addDataFromXML(xml: XMLDocument, dataInfo: ccs.DataInfo): any

    /**
     * Decodes xml animation data.
     *
     * @param {XMLDocument} animationXML
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.AnimationData}
     */
    decodeAnimation(animationXML: XMLDocument, dataInfo: ccs.DataInfo): ccs.AnimationData

    /**
     * Decodes animation json data.
     *
     * @param {Object} json
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.AnimationData}
     */
    decodeAnimationFromJson(json: object, dataInfo: ccs.DataInfo): ccs.AnimationData

    /**
     * decode xml armature data.
     *
     * @param {XMLDocument} armatureXML
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.ArmatureData}
     */
    decodeArmature(armatureXML: XMLDocument, dataInfo: ccs.DataInfo): ccs.ArmatureData

    /**
     * decode json armature data.
     *
     * @param {Object} json
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.ArmatureData}
     */
    decodeArmatureFromJSON(json: object, dataInfo: ccs.DataInfo): ccs.ArmatureData

    /**
     * decode xml bone data.
     *
     * @param {XMLDocument} boneXML
     * @param {XMLDocument} parentXML
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.BoneData}
     */
    decodeBone(boneXML: XMLDocument, parentXML: XMLDocument, dataInfo: ccs.DataInfo): ccs.BoneData

    /**
     * decode xml display data of bone
     *
     * @param {XMLDocument} displayXML
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.DisplayData}
     */
    decodeBoneDisplay(displayXML: XMLDocument, dataInfo: ccs.DataInfo): ccs.DisplayData

    /**
     * Decodes json display data of bone.
     *
     * @param {Object} json
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.DisplayData}
     */
    decodeBoneDisplayFromJson(json: object, dataInfo: ccs.DataInfo): ccs.DisplayData

    /**
     * decode json bone data.
     *
     * @param {Object} json json bone data.
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.BoneData}
     */
    decodeBoneFromJson(json: object, dataInfo: ccs.DataInfo): ccs.BoneData

    /**
     * Decodes xml data of contour.
     *
     * @param {XMLDocument} contourXML
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.ContourData}
     */
    decodeContour(contourXML: XMLDocument, dataInfo: ccs.DataInfo): ccs.ContourData

    /**
     * Decodes json data of contour.
     *
     * @param {Object} json
     *
     * @returns {ccs.ContourData}
     */
    decodeContourFromJson(json: object): ccs.ContourData

    /**
     * Decodes xml data of frame.
     *
     * @param {XMLDocument} frameXML
     * @param {XMLDocument} parentFrameXml
     * @param {ccs.BoneData} boneData
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.FrameData}
     */
    decodeFrame(frameXML: XMLDocument, parentFrameXml: XMLDocument, boneData: ccs.BoneData, dataInfo: ccs.DataInfo): ccs.FrameData

    /**
     * Decodes json data of frame.
     *
     * @param {Object} json
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.FrameData}
     */
    decodeFrameFromJson(json: object, dataInfo: ccs.DataInfo): ccs.FrameData

    /**
     * Decodes xml movement data.
     *
     * @param {XMLDocument} movementXML
     * @param {ccs.ArmatureData} armatureData
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.MovementData}
     */
    decodeMovement(movementXML: XMLDocument, armatureData: ccs.ArmatureData, dataInfo: ccs.DataInfo): ccs.MovementData

    /**
     * Decodes xml data of bone's movement.
     *
     * @param {XMLDocument} movBoneXml
     * @param {XMLDocument} parentXml
     * @param {ccs.BoneData} boneData
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.MovementBoneData}
     */
    decodeMovementBone(movBoneXml: XMLDocument, parentXml: XMLDocument, boneData: ccs.BoneData, dataInfo: ccs.DataInfo): ccs.MovementBoneData

    /**
     * Decodes json data of bone's movement.
     *
     * @param {Object} json
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.MovementBoneData}
     */
    decodeMovementBoneFromJson(json: object, dataInfo: ccs.DataInfo): ccs.MovementBoneData

    /**
     * Decodes json movement data.
     *
     * @param {Object} json
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.MovementData}
     */
    decodeMovementFromJson(json: object, dataInfo: ccs.DataInfo): ccs.MovementData

    /**
     * Decodes json data of node.
     *
     * @param {} node
     * @param {} json
     * @param {} dataInfo
     */
    decodeNodeFromJson(node: any, json: any, dataInfo: any): any

    /**
     * Decodes xml data of texture
     *
     * @param {XMLDocument} textureXML
     * @param {ccs.DataInfo} dataInfo
     *
     * @returns {ccs.TextureData}
     */
    decodeTexture(textureXML: XMLDocument, dataInfo: ccs.DataInfo): ccs.TextureData

    /**
     * Decodes json data of Texture.
     *
     * @param {} json
     *
     * @returns {ccs.TextureData}
     */
    decodeTextureFromJson(json: any): ccs.TextureData

    /**
     * Removes config file from config file list.
     *
     * @param {String} configFile
     */
    removeConfigFile(configFile: string): any
  }
}

declare namespace ccs {
  interface EventFrame  {

    /**
     * Event frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace EventFrame {



    /**
     * Create the Event frame
     *
     * @returns {ccs.EventFrame}
     */
    function create(): ccs.EventFrame
  }
}

declare namespace ccs {
  interface Frame  {

    /**
     * Timeline Frame.
     * base class
     */
    constructor()


  }
}

declare namespace ccs {
  interface FrameEvent  {

    /**
     * The frame event class for Armature.
     */
    constructor()

    /**
     * - The bone reference of frame event.
     */
    bone: ccs.Bone

    /**
     * - The index of current frame.
     */
    currentFrameIndex: number

    /**
     * - The name of frame event.
     */
    frameEventName: string

    /**
     * - The index of origin frame.
     */
    originFrameIndex: number

  }
}

declare namespace ccs {
  interface InnerActionFrame  {

    /**
     * Inner action frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace InnerActionFrame {



    /**
     * Create the InnerAction frame
     *
     * @returns {ccs.InnerActionFrame}
     */
    function create(): ccs.InnerActionFrame
  }
}

declare namespace ccs.InnerActionType {



}

declare namespace ccs {
  interface MovementData  {

    /**
     * The movement data information of Cocos Armature.
     */
    constructor()

    /**
     * Change to this movement will last durationTo frames. Use this effect can avoid too suddenly changing.Example : current movement is "stand", we want to change to "run", then we fill durationTo frames before
     * change to "run" instead of changing to "run" directly.
     */
    durationTo: any

    /**
     * This is different from duration, durationTween contain tween effect.
     * duration is the raw time that the animation will last, it's the same with the time you edit in the Action Editor.
     * durationTween is the actual time you want this animation last.
     * Example : If we edit 10 frames in the flash, then duration is 10. When we set durationTween to 50, the movement will last 50 frames, the extra 40 frames will auto filled with tween effect
     */
    durationTween: any

    /**
     * Which tween easing effect the movement use
     * TWEEN_EASING_MAX : use the value from MovementData get from flash design panel
     */
    tweenEasing: any

    /**
     * add a movement bone data to dictionary
     *
     * @param {ccs.MovementBoneData} movBoneData
     */
    addMovementBoneData(movBoneData: ccs.MovementBoneData): any

    /**
     * add a movement bone data from dictionary by name
     *
     * @param {} boneName
     *
     * @returns {ccs.MovementBoneData}
     */
    getMovementBoneData(boneName: any): ccs.MovementBoneData
  }
}

declare namespace ccs {
  interface MovementEvent  {

    /**
     * The movement event class for Armature.
     */
    constructor()

    /**
     * - The armature reference of movement event.
     */
    armature: ccs.Armature

    /**
     * - The ID of movement.
     */
    movementID: string

    /**
     * - The type of movement.
     */
    movementType: number

  }
}

declare namespace ccs {
  interface objectFactory  {

    /**
     * The singleton object that creating object factory, it creates object with class name, and manager the type mapping.
     */
    constructor()


    /**
     * Creates ccui widget object.
     *
     * @param {String} name widget name
     *
     * @returns {ccui.Widget|null}
     */
    createGUI(name: string): ccui.Widget | null

    /**
     * Creates object with class name. if the the class name without register in type map, it returns null.
     *
     * @param {String} className
     *
     * @returns {*}
     */
    createObject(className: string): any

    /**
     * Registers class type in type map.
     *
     * @param {ccs.TInfo} t
     */
    registerType(t: ccs.TInfo): any
  }
}

declare namespace ccs {
  interface PositionFrame  {

    /**
     * Position frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace PositionFrame {



    /**
     * Create the Position frame
     *
     * @returns {ccs.PositionFrame}
     */
    function create(): ccs.PositionFrame
  }
}

declare namespace ccs {
  interface RelativeData  {

    /**
     * RelativeData uses to save plist files, armature files, animations and textures for armature data manager.
     */
    constructor()


  }
}

declare namespace ccs {
  interface RotationFrame  {

    /**
     * Rotation Frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace RotationFrame {



    /**
     * Create the Rotation frame
     *
     * @returns {ccs.RotationFrame}
     */
    function create(): ccs.RotationFrame
  }
}

declare namespace ccs {
  interface RotationSkewFrame  {

    /**
     * Rotation skew frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace RotationSkewFrame {



    /**
     * Create the RotationSkew frame
     *
     * @returns {ccs.RotationSkewFrame}
     */
    function create(): ccs.RotationSkewFrame
  }
}

declare namespace ccs {
  interface ScaleFrame  {

    /**
     * Scale frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace ScaleFrame {



    /**
     * Create the Scale frame
     *
     * @returns {ccs.ScaleFrame}
     */
    function create(): ccs.ScaleFrame
  }
}

declare namespace ccs {
  interface SkewFrame  {

    /**
     * Skew frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace SkewFrame {



    /**
     * Create the Skew frame
     *
     * @returns {ccs.SkewFrame}
     */
    function create(): ccs.SkewFrame
  }
}

declare namespace ccs {
  interface spriteFrameCacheHelper  {

    /**
     * ccs.spriteFrameCacheHelper is a singleton object, it's a sprite frame cache helper
     */
    constructor()


    /**
     * Adds sprite frame from file
     *
     * @param {} plistPath
     * @param {} imagePath
     */
    addSpriteFrameFromFile(plistPath: any, imagePath: any): any

    /**
     * Clear the sprite frame cache's data.
     */
    clear(): any

    /**
     * Returns texture atlas with texture.
     *
     * @param {} texture
     *
     * @returns {*}
     */
    getTextureAtlasWithTexture(texture: any): any
  }
}

declare namespace ccs {
  interface TextureData  {

    /**
     * The texture data information of Cocos Armature
     */
    constructor()


    /**
     * Adds a contourData to contourDataList
     *
     * @param {ccs.ContourData} contourData
     */
    addContourData(contourData: ccs.ContourData): any

    /**
     * gets a contourData from contourDataList by index
     *
     * @param {Number} index
     *
     * @returns {ccs.ContourData}
     */
    getContourData(index: number): ccs.ContourData
  }
}

declare namespace ccs {
  interface TextureFrame  {

    /**
     * Texture frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace TextureFrame {



    /**
     * Create the Texture frame
     *
     * @returns {ccs.TextureFrame}
     */
    function create(): ccs.TextureFrame
  }
}

declare namespace ccs {
  interface Timeline  {

    /**
     * timeline object
     */
    constructor()


  }
}

declare namespace ccs {
  namespace Timeline {



    /**
     * Create the Timeline
     *
     * @returns {ccs.Timeline}
     */
    function create(): ccs.Timeline
  }
}

declare namespace ccs {
  interface TransformHelp  {

    /**
     * use to calculate the matrix of node from parent node
     */
    constructor()


  }
}

declare namespace ccs {
  namespace TransformHelp {



    /**
     *
     *
     * @param {cc.AffineTransform} matrix
     * @param {ccs.BaseData} node
     */
    function matrixToNode(matrix: cc.AffineTransform, node: ccs.BaseData): any

    /**
     *
     *
     * @param {ccs.BaseData} target
     * @param {ccs.BaseData} source
     */
    function nodeConcat(target: ccs.BaseData, source: ccs.BaseData): any

    /**
     *
     *
     * @param {ccs.BaseData} target
     * @param {ccs.BaseData} source
     */
    function nodeSub(target: ccs.BaseData, source: ccs.BaseData): any

    /**
     *
     *
     * @param {ccs.BaseData} node
     * @param {cc.AffineTransform} matrix
     */
    function nodeToMatrix(node: ccs.BaseData, matrix: cc.AffineTransform): any

    /**
     * Calculate a BaseData's transform matrix from parent node.
     *
     * @param {ccs.BaseData} bone Constructor
     * @param {} parentNode
     */
    function transformFromParent(bone: ccs.BaseData, parentNode: any): any
  }
}

declare namespace ccs {
  interface triggerManager  {

    /**
     * The trigger manager of Cocostudio
     */
    constructor()


    /**
     * Adds event and trigger object to trigger manager.
     *
     * @param {} event
     * @param {} triggerObj
     */
    add(event: any, triggerObj: any): any

    /**
     * Adds an armature movement callback to manager.
     *
     * @param {ccs.Armature} armature
     * @param {function} callFunc
     * @param {Object} target
     */
    addArmatureMovementCallBack(armature: ccs.Armature, callFunc: Function, target: object): any

    /**
     * Returns the event triggers by event id.
     *
     * @param {Number} event
     *
     * @returns {Array}
     */
    get(event: number): any[]

    /**
     * Returns the trigger object by id
     *
     * @param {Number} id
     *
     * @returns {ccs.TriggerObj}
     */
    getTriggerObj(id: number): ccs.TriggerObj

    /**
     * Returns the event triggers whether is empty.
     *
     * @returns {boolean}
     */
    isEmpty(): boolean

    /**
     * Parses the triggers.
     *
     * @param {Array} triggers
     */
    parse(triggers: any[]): any

    /**
     * Removes event object from trigger manager.
     *
     * @param {*} event
     * @param {*} Obj
     *
     * @returns {Boolean}
     */
    remove(event: any, Obj: any): boolean

    /**
     * Removes all event triggers from manager.
     */
    removeAll(): any

    /**
     * Removes all armature movement callbacks from ccs.triggerManager.
     */
    removeAllArmatureMovementCallBack(): any

    /**
     * Removes an armature's all movement callbacks.
     *
     * @param {ccs.Armature} armature
     */
    removeArmatureAllMovementCallBack(armature: ccs.Armature): any

    /**
     * Removes armature movement callback from manager.
     *
     * @param {ccs.Armature} armature
     * @param {Object} target
     * @param {function} callFunc
     */
    removeArmatureMovementCallBack(armature: ccs.Armature, target: object, callFunc: Function): any

    /**
     * Removes trigger object from manager
     *
     * @param {Number} id
     *
     * @returns {boolean}
     */
    removeTriggerObj(id: number): boolean

    /**
     * Returns the version of ccs.triggerManager
     *
     * @returns {string}
     */
    version(): string
  }
}

declare namespace ccs {
  interface VisibleFrame  {

    /**
     * Visible frame
     * To control the display state
     */
    constructor()


  }
}

declare namespace ccs {
  namespace VisibleFrame {



    /**
     * Create the visible frame
     *
     * @returns {ccs.VisibleFrame}
     */
    function create(): ccs.VisibleFrame
  }
}

declare namespace ccs {
  interface ZOrderFrame  {

    /**
     * zOrder frame
     */
    constructor()


  }
}

declare namespace ccs {
  namespace ZOrderFrame {



    /**
     * Create the ZOrder frame
     *
     * @returns {ccs.ZOrderFrame}
     */
    function create(): ccs.ZOrderFrame
  }
}

declare namespace ccui {

  /**
   * Cocos UI version
   */
  let cocosGUIVersion: any

  /**
   * allocates and initializes a UILabel.
   * Defined in: UIText.js.
   */
  let Label: ccui.Text

  /**
   * *************************************************************************
   * Copyright (c) 2011-2012 cocos2d-x.org
   * Copyright (c) 2013-2014 Chukong Technologies Inc.http://www.cocos2d-x.orgPermission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * **************************************************************************
   * Defined in: UILayoutComponent.js.
   */
  let LayoutComponent_ReferencePoint: any


  /**
   * Gets the layout manager by ccui.Layout's layout type.
   * Defined in: UILayoutManager.js.
   *
   * @param {Number} type
   *
   * @returns {ccui.linearVerticalLayoutManager|ccui.linearHorizontalLayoutManager|ccui.relativeLayoutManager|null}
   */
  function getLayoutManager(type: number): ccui.linearVerticalLayoutManager | ccui.linearHorizontalLayoutManager | ccui.relativeLayoutManager | null

  /**
   * Gets a zero margin object
   * Defined in: UILayoutParameter.js.
   *
   * @returns {ccui.Margin}
   */
  function MarginZero(): ccui.Margin
}

declare namespace ccui {
  interface Class  {

    /**
     * The same as cc.Class
     */
    constructor()


  }
}

declare namespace ccui {
  interface LayoutParameter  {

    /**
     * The constructor of ccui.LayoutParameter.
     */
    constructor()


    /**
     * Clones a ccui.LayoutParameter object from itself.
     *
     * @returns {ccui.LayoutParameter}
     */
    clone(): ccui.LayoutParameter

    /**
     * Gets LayoutParameterType of LayoutParameter.
     *
     * @returns {Number}
     */
    getLayoutType(): number

    /**
     * Gets Margin of LayoutParameter.
     *
     * @returns {ccui.Margin}
     */
    getMargin(): ccui.Margin

    /**
     * Sets Margin to LayoutParameter.
     *
     * @param {ccui.Margin} margin
     */
    setMargin(margin: ccui.Margin): any
  }
}

declare namespace ccui {
  namespace LayoutParameter {


    /**
     * The linear of ccui.LayoutParameter's type.
     */
    enum LINEAR { }

    /**
     * The none of ccui.LayoutParameter's type.
     */
    enum NONE { }

    /**
     * The relative of ccui.LayoutParameter's type.
     */
    enum RELATIVE { }

    /**
     * allocates and initializes a LayoutParameter.
     *
     * @returns {ccui.LayoutParameter}
     */
    function create(): ccui.LayoutParameter
  }
}

declare namespace ccui {
  interface LinearLayoutParameter  {

    /**
     * The constructor of ccui.LinearLayoutParameter.
     */
    constructor()


    /**
     * Gets LinearGravity of LayoutParameter.
     *
     * @returns {Number}
     */
    getGravity(): number

    /**
     * Sets LinearGravity to LayoutParameter.
     *
     * @param {Number} gravity
     */
    setGravity(gravity: number): any
  }
}

declare namespace ccui {
  namespace LinearLayoutParameter {


    /**
     * The bottom of ccui.LinearLayoutParameter's linear gravity.
     */
    enum BOTTOM { }

    /**
     * The center horizontal of ccui.LinearLayoutParameter's linear gravity.
     */
    enum CENTER_HORIZONTAL { }

    /**
     * The center vertical of ccui.LinearLayoutParameter's linear gravity.
     */
    enum CENTER_VERTICAL { }

    /**
     * The left of ccui.LinearLayoutParameter's linear gravity.
     */
    enum LEFT { }

    /**
     * The none of ccui.LinearLayoutParameter's linear gravity.
     */
    enum NONE { }

    /**
     * The right of ccui.LinearLayoutParameter's linear gravity.
     */
    enum RIGHT { }

    /**
     * The top of ccui.LinearLayoutParameter's linear gravity.
     */
    enum TOP { }

    /**
     * allocates and initializes a LinearLayoutParameter.
     *
     * @returns {ccui.LinearLayoutParameter}
     */
    function create(): ccui.LinearLayoutParameter
  }
}

declare namespace ccui {
  interface RelativeLayoutParameter  {

    /**
     * The constructor of ccui.RelativeLayoutParameter
     */
    constructor()


    /**
     * Gets RelativeAlign parameter for LayoutParameter.
     *
     * @returns {Number}
     */
    getAlign(): number

    /**
     * Gets a name in Relative Layout of LayoutParameter.
     *
     * @returns {string}
     */
    getRelativeName(): string

    /**
     * Gets the key of LayoutParameter. Witch widget named this is relative to.
     *
     * @returns {string}
     */
    getRelativeToWidgetName(): string

    /**
     * Sets RelativeAlign parameter for LayoutParameter.
     *
     * @param {Number} align
     */
    setAlign(align: number): any

    /**
     * Sets a name in Relative Layout for LayoutParameter.
     *
     * @param {String} name
     */
    setRelativeName(name: string): any

    /**
     * Sets a key for LayoutParameter. Witch widget named this is relative to.
     *
     * @param {String} name
     */
    setRelativeToWidgetName(name: string): any
  }
}

declare namespace ccui {
  namespace RelativeLayoutParameter {


    /**
     * The center in parent of ccui.RelativeLayoutParameter's relative align.
     */
    enum CENTER_IN_PARENT { }

    /**
     * The location above center of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_ABOVE_CENTER { }

    /**
     * The location above left align of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_ABOVE_LEFTALIGN { }

    /**
     * The location above right align of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_ABOVE_RIGHTALIGN { }

    /**
     * The location below center of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_BELOW_CENTER { }

    /**
     * The location below left align of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_BELOW_LEFTALIGN { }

    /**
     * The location below right align of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_BELOW_RIGHTALIGN { }

    /**
     * The location left of bottom align of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_LEFT_OF_BOTTOMALIGN { }

    /**
     * The location left of center of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_LEFT_OF_CENTER { }

    /**
     * The location left of top align of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_LEFT_OF_TOPALIGN { }

    /**
     * The location right of bottom align of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_RIGHT_OF_BOTTOMALIGN { }

    /**
     * The location right of center of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_RIGHT_OF_CENTER { }

    /**
     * The location right of top align of ccui.RelativeLayoutParameter's relative align.
     */
    enum LOCATION_RIGHT_OF_TOPALIGN { }

    /**
     * The none of ccui.RelativeLayoutParameter's relative align.
     */
    enum NONE { }

    /**
     * The parent's bottom center horizontal of ccui.RelativeLayoutParameter's relative align.
     */
    enum PARENT_BOTTOM_CENTER_HORIZONTAL { }

    /**
     * The parent's left bottom of ccui.RelativeLayoutParameter's relative align.
     */
    enum PARENT_LEFT_BOTTOM { }

    /**
     * The parent's left center vertical of ccui.RelativeLayoutParameter's relative align.
     */
    enum PARENT_LEFT_CENTER_VERTICAL { }

    /**
     * The parent's right bottom of ccui.RelativeLayoutParameter's relative align.
     */
    enum PARENT_RIGHT_BOTTOM { }

    /**
     * The parent's right center vertical of ccui.RelativeLayoutParameter's relative align.
     */
    enum PARENT_RIGHT_CENTER_VERTICAL { }

    /**
     * The parent's top center horizontal of ccui.RelativeLayoutParameter's relative align.
     */
    enum PARENT_TOP_CENTER_HORIZONTAL { }

    /**
     * The parent's top left of ccui.RelativeLayoutParameter's relative align.
     */
    enum PARENT_TOP_LEFT { }

    /**
     * The parent's top right of ccui.RelativeLayoutParameter's relative align.
     */
    enum PARENT_TOP_RIGHT { }

    /**
     * Allocates and initializes a RelativeLayoutParameter.
     *
     * @returns {ccui.RelativeLayoutParameter}
     */
    function create(): ccui.RelativeLayoutParameter
  }
}

declare namespace ccui {
  interface Margin  {

    /**
     * Constructor of ccui.Margin.
     *
     * @param {Number|ccui.Margin} margin a margin or left
     * @param {Number} top
     * @param {Number} right
     * @param {Number} bottom
     */
    constructor(margin: number | ccui.Margin, top: number, right: number, bottom: number)

    /**
     * - bottom of margin
     */
    bottom: number

    /**
     * - Left of margin
     */
    left: number

    /**
     * - right of margin
     */
    right: number

    /**
     * - Top of margin
     */
    top: number

    /**
     * Checks target whether equals itself.
     *
     * @param {ccui.Margin} target
     *
     * @returns {boolean}
     */
    equals(target: ccui.Margin): boolean

    /**
     * Sets boundary of margin
     *
     * @param {Number} l left
     * @param {Number} t top
     * @param {Number} r right
     * @param {Number} b bottom
     */
    setMargin(l: number, t: number, r: number, b: number): any
  }
}

declare namespace ccui {
  interface Node  {

    /**
     * that same as cc.Node
     */
    constructor()


  }
}

declare namespace ccui {
  interface ProtectedNode  {

    /**
     * that same as cc.Node
     */
    constructor()


  }
}

declare namespace ccui {
  interface Widget  {

    /**
     * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()

    /**
     * - The action tag of the widget
     */
    actionTag: number

    /**
     * - Indicate whether the widget is bright
     */
    bright: boolean

    /**
     * - Indicate whether the widget is enabled
     */
    enabled: boolean

    /**
     * - Indicate whether the widget is focused
     */
    focused: boolean

    /**
     * - Height in percentage of parent height
     */
    heightPercent: number

    /**
     * - The name of the widget
     */
    name: string

    /**
     * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
     * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
     */
    onFocusChanged: any

    /**
     * use this function to manually specify the next focused widget regards to each direction
     */
    onNextFocusedWidget: any

    /**
     * - The size type of the widget
     */
    sizeType: ccui.Widget.SIZE_ABSOLUTE | ccui.Widget.SIZE_PERCENT

    /**
     * - Indicate whether touch events are enabled
     */
    touchEnabled: boolean

    /**
     * - Indicate whether the update function is scheduled
     */
    updateEnabled: boolean

    /**
     * - <@readonly> The direct parent when it's a widget also, otherwise equals null
     */
    widgetParent: ccui.Widget

    /**
     * - <@readonly> The type of the widget
     */
    widgetType: ccui.Widget.TYPE_WIDGET | ccui.Widget.TYPE_CONTAINER

    /**
     * - Width in percentage of parent width
     */
    widthPercent: number

    /**
     * - Position x in percentage of width
     */
    xPercent: number

    /**
     * - Position y in percentage of height
     */
    yPercent: number

    /**
     * Set a event handler to the widget in order to use cocostudio editor and framework
     *
     * @param {function} callback
     */
    addCCSEventListener(callback: Function): any

    /**
     * Adds a node for widget (this function is deleted in -x)
     *
     * @param {cc.Node} node
     * @param {Number} zOrder
     * @param {Number} tag
     */
    addNode(node: cc.Node, zOrder: number, tag: number): any

    /**
     * Sets the touch event target/selector of the ccui.Widget
     *
     * @param {Function} selector
     * @param {Object} target
     */
    addTouchEventListener(selector: Function, target: object): any

    /**
     * Calls the checkChildInfo of widget's parent, its subclass will override it.
     *
     * @param {number} handleState
     * @param {ccui.Widget} sender
     * @param {cc.Point} touchPoint
     */
    checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any

    /**
     * Checks a point if in parent's area.
     *
     * @param {cc.Point} pt
     *
     * @returns {Boolean}
     */
    clippingParentAreaContainPoint(pt: cc.Point): boolean

    /**
     * Clones a new widget.
     *
     * @returns {ccui.Widget}
     */
    clone(): ccui.Widget

    /**
     * A call back function when widget lost of focus.
     */
    didNotSelectSelf(): any

    /**
     * Dispatch a EventFocus through a EventDispatcher
     *
     * @param {ccui.Widget} widgetLostFocus
     * @param {ccui.Widget} widgetGetFocus
     */
    dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any

    /**
     * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
     * If the widget is not in a layout, it will return itself
     *
     * @param {} direction the direction to look for the next focused widget in a layout
     * @param {} current the current focused widget
     */
    findNextFocusedWidget(direction: any, current: any): any

    /**
     * Gets the bottom boundary position of this widget.
     *
     * @returns {number}
     */
    getBottomBoundary(): number

    /**
     * Gets the bottom boundary position of this widget.
     *
     * @returns {number}
     */
    getBottomInParent(): number

    /**
     * Gets callback name of widget
     *
     * @returns v3.3{String|Null}
     */
    getCallbackName(): string | null

    /**
     * Gets callback type of widget
     *
     * @returns v3.3{String|null}
     */
    getCallbackType(): string | null

    /**
     * no matter what widget object you call this method on , it will return you the exact one focused widget
     */
    getCurrentFocusedWidget(): any

    /**
     * Get custom size of ccui.Widget
     *
     * @returns {cc.Size}
     */
    getCustomSize(): cc.Size

    /**
     * Returns the "class name" of widget.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Gets layout parameter
     *
     * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
     *
     * @returns {ccui.LayoutParameter}
     */
    getLayoutParameter(type: ccui.LayoutParameter.NONE | ccui.LayoutParameter.LINEAR | ccui.LayoutParameter.RELATIVE): ccui.LayoutParameter

    /**
     * Gets layout size of ccui.Widget.
     *
     * @returns {cc.Size}
     */
    getLayoutSize(): cc.Size

    /**
     * Gets the left boundary position of this widget.
     *
     * @returns {number}
     */
    getLeftBoundary(): number

    /**
     * Gets the left boundary position of this widget.
     *
     * @returns {number}
     */
    getLeftInParent(): number

    /**
     * Gets node by tag
     *
     * @param {Number} tag
     *
     * @returns {cc.Node}
     */
    getNodeByTag(tag: number): cc.Node

    /**
     * Returns all children.
     *
     * @returns {Array}
     */
    getNodes(): any[]

    /**
     * Gets the percent (x,y) of the widget
     *
     * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
     */
    getPositionPercent(): cc.Point

    /**
     * Gets the position type of the widget
     *
     * @returns {Number} the position type of widget
     */
    getPositionType(): number

    /**
     * Gets the right boundary position of this widget.
     *
     * @returns {number}
     */
    getRightBoundary(): number

    /**
     * Gets the right boundary position of this widget.
     *
     * @returns {number}
     */
    getRightInParent(): number

    /**
     * Returns size of widget
     *
     * @returns {cc.Size}
     */
    getSize(): cc.Size

    /**
     * Returns size percent of ccui.Widget
     *
     * @returns {cc.Point}
     */
    getSizePercent(): cc.Point

    /**
     * Gets the size type of widget.
     *
     * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
     */
    getSizeType(): ccui.Widget.SIZE_ABSOLUTE | ccui.Widget.SIZE_PERCENT

    /**
     * Gets the top boundary position of this widget.
     *
     * @returns {number}
     */
    getTopBoundary(): number

    /**
     * Gets the top boundary position of this widget.
     *
     * @returns {number}
     */
    getTopInParent(): number

    /**
     * Gets the position of touch began event.
     *
     * @returns {cc.Point}
     */
    getTouchBeganPosition(): cc.Point

    /**
     * Gets the touch end point of widget when widget is selected.
     *
     * @returns {cc.Point} the touch end point.
     */
    getTouchEndPos(): cc.Point

    /**
     * Gets the position of touch end event
     *
     * @returns {cc.Point}
     */
    getTouchEndPosition(): cc.Point

    /**
     * Gets the touch move point of widget when widget is selected.
     *
     * @returns {cc.Point} the touch move point.
     */
    getTouchMovePos(): cc.Point

    /**
     * Gets the position of touch moved event
     *
     * @returns {cc.Point}
     */
    getTouchMovePosition(): cc.Point

    /**
     * Gets the touch began point of widget when widget is selected.
     *
     * @returns {cc.Point} the touch began point.
     */
    getTouchStartPos(): cc.Point

    /**
     * Gets the Virtual Renderer of widget.
     *
     * @returns {ccui.Widget}
     */
    getVirtualRenderer(): ccui.Widget

    /**
     * Gets the content size of widget. Content size is widget's texture size.
     */
    getVirtualRendererSize(): any

    /**
     * The direct parent when it's a widget also, otherwise equals null
     *
     * @returns {ccui.Widget|null}
     */
    getWidgetParent(): ccui.Widget | null

    /**
     * get widget type
     *
     * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
     */
    getWidgetType(): ccui.Widget.TYPE_WIDGET | ccui.Widget.TYPE_CONTAINER

    /**
     * Gets world position of ccui.Widget.
     *
     * @returns {cc.Point} world position of ccui.Widget.
     */
    getWorldPosition(): cc.Point

    /**
     * Checks a point if is in widget's space
     *
     * @param {cc.Point} pt
     *
     * @returns {boolean} true if the point is in widget's space, false otherwise.
     */
    hitTest(pt: cc.Point): boolean

    /**
     * Ignore the widget size
     *
     * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
     */
    ignoreContentAdaptWithSize(ignore: boolean): any

    /**
     * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
     *
     * @param {Number} eventType
     * @param {ccui.Widget} sender
     * @param {cc.Touch} touch
     */
    interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any

    /**
     * Determines if the widget is bright
     *
     * @returns {boolean} true if the widget is bright, false if the widget is dark.
     */
    isBright(): boolean

    /**
     * returns whether clipping parent widget contains point.
     *
     * @param {cc.Point} pt location point
     *
     * @returns {Boolean}
     */
    isClippingParentContainsPoint(pt: cc.Point): boolean

    /**
     * Determines if the widget is enabled
     *
     * @returns {boolean}
     */
    isEnabled(): boolean

    /**
     * Returns the flag which indicates whether the widget is flipped horizontally or not.
     * It only flips the texture of the widget, and not the texture of the widget's children.
     * Also, flipping the texture doesn't alter the anchorPoint.
     * If you want to flip the anchorPoint too, and/or to flip the children too use:
     * widget.setScaleX(sprite.getScaleX() * -1);
     *
     * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
     */
    isFlippedX(): boolean

    /**
     * Return the flag which indicates whether the widget is flipped vertically or not.
     * It only flips the texture of the widget, and not the texture of the widget's children.
     * Also, flipping the texture doesn't alter the anchorPoint.
     * If you want to flip the anchorPoint too, and/or to flip the children too use:
     * widget.setScaleY(widget.getScaleY() * -1);
     *
     * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
     */
    isFlippedY(): boolean

    /**
     * Determines if the widget is on focused
     *
     * @returns {boolean} whether the widget is focused or not
     */
    isFocused(): boolean

    /**
     * returns whether the widget could accept focus.
     *
     * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
     */
    isFocusEnabled(): boolean

    /**
     * Determines if the widget is highlighted
     *
     * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
     */
    isHighlighted(): boolean

    /**
     * Gets whether ignore the content size (custom size)
     *
     * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
     */
    isIgnoreContentAdaptWithSize(): boolean

    /**
     * Returns whether enable layout component of a widget
     *
     * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
     */
    isLayoutComponentEnabled(): boolean

    /**
     * Return whether the widget is propagate touch events to its parents or not
     *
     * @returns v3.2{boolean}
     */
    isPropagateTouchEvents(): boolean

    /**
     * Return whether the widget is swallowing touch or not
     *
     * @returns v3.2{boolean}
     */
    isSwallowTouches(): boolean

    /**
     * Returns whether or not touch is enabled.
     *
     * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
     */
    isTouchEnabled(): boolean

    /**
     *
     *
     * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
     */
    isUnifySizeEnabled(): boolean

    /**
     * Calls updateSizeAndPosition and its parent's onEnter
     */
    onEnter(): any

    /**
     * Calls unscheduleUpdate and its parent's onExit
     */
    onExit(): any

    /**
     * This method is called when a focus change event happens
     *
     * @param {ccui.Widget} widgetLostFocus
     * @param {ccui.Widget} widgetGetFocus
     */
    onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any

    /**
     * The callback of touch began event.
     * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
     * 1. sets highlight state,
     * 2. sends event to parent widget by interceptTouchEvent
     * 3. calls the callback of touch began event.
     * 4. returns true,
     * otherwise returns false directly.
     *
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     *
     * @returns {boolean}
     */
    onTouchBegan(touch: cc.Touch, event: cc.Event): boolean

    /**
     * A call back function called when widget is selected, and on touch canceled.
     *
     * @param {cc.Point} touchPoint
     */
    onTouchCancelled(touchPoint: cc.Point): any

    /**
     * The callback of touch end event
     * It sends event to parent widget by interceptTouchEvent,
     * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
     * sets the highlight state to false ,
     *
     * @param {} touch
     * @param {} event
     */
    onTouchEnded(touch: any, event: any): any

    /**
     * A call back function called when widget is selected, and on touch long clicked.
     *
     * @param {cc.Point} touchPoint
     */
    onTouchLongClicked(touchPoint: cc.Point): any

    /**
     * The callback of touch moved event.
     * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
     *
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     */
    onTouchMoved(touch: cc.Touch, event: cc.Event): any

    /**
     * Removes all node
     */
    removeAllNodes(): any

    /**
     * Removes a node from ccui.Widget
     *
     * @param {cc.Node} node
     * @param {Boolean} cleanup
     */
    removeNode(node: cc.Node, cleanup: boolean): any

    /**
     * Removes node by tag
     *
     * @param {Number} tag
     * @param {Boolean} cleanup
     */
    removeNodeByTag(tag: number, cleanup: boolean): any

    /**
     * when a widget calls this method, it will get focus immediately.
     */
    requestFocus(): any

    /**
     * Sets whether the widget is bright. The default value is true, a widget is default to bright
     *
     * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
     */
    setBright(bright: boolean): any

    /**
     * To set the bright style of ccui.Widget.
     *
     * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
     */
    setBrightStyle(style: number): any

    /**
     * Sets callback name to widget.
     *
     * @param {String} callbackName
     */
    setCallbackName(callbackName: string): any

    /**
     * Sets callback type to widget
     *
     * @param {String} callbackType
     */
    setCallbackType(callbackType: string): any

    /**
     * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
     * and updates size percent by parent content size. At last, updates its children's size and position.
     *
     * @param {cc.Size|Number} contentSize content size or width of content size
     * @param {Number} height
     */
    setContentSize(contentSize: cc.Size | number, height: number): any

    /**
     * Sets whether the widget is enabled
     * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
     * The default value is true, a widget is default to enabled
     *
     * @param {Boolean} enabled
     */
    setEnabled(enabled: boolean): any

    /**
     * Sets whether the widget should be flipped horizontally or not.
     *
     * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
     */
    setFlippedX(flipX: boolean): any

    /**
     * Sets whether the widget should be flipped vertically or not.
     *
     * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
     */
    setFlippedY(flipY: boolean): any

    /**
     * Sets whether the widget is on focused
     * The default value is false, a widget is default to not on focused
     *
     * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
     */
    setFocused(focus: boolean): any

    /**
     * sets whether the widget could accept focus.
     *
     * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
     */
    setFocusEnabled(enable: boolean): any

    /**
     * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
     *
     * @param {} highlight true if the widget is highlighted, false if the widget is not highlighted.
     */
    setHighlighted(highlight: any): any

    /**
     * Whether enable layout component of a widget
     *
     * @param {Boolean} enable enable layout Component of a widget
     */
    setLayoutComponentEnabled(enable: boolean): any

    /**
     * Gets LayoutParameter of widget.
     *
     * @param {ccui.LayoutParameter} parameter
     */
    setLayoutParameter(parameter: ccui.LayoutParameter): any

    /**
     * Changes the position (x,y) of the widget .
     * The original point (0,0) is at the left-bottom corner of screen.
     *
     * @param {cc.Point|Number} pos
     * @param {Number} posY
     */
    setPosition(pos: cc.Point | number, posY: number): any

    /**
     * Changes the position (x,y) of the widget
     *
     * @param {cc.Point} percent
     */
    setPositionPercent(percent: cc.Point): any

    /**
     * Changes the position type of the widget
     *
     * @param {Number} type the position type of widget
     */
    setPositionType(type: number): any

    /**
     * Allow widget touch events to propagate to its parents. Set false will disable propagation
     *
     * @param {Boolean} isPropagate
     */
    setPropagateTouchEvents(isPropagate: boolean): any

    /**
     * Changes the size that is widget's size
     *
     * @param {cc.Size} size that is widget's size
     */
    setSize(size: cc.Size): any

    /**
     * Changes the percent that is widget's percent size
     *
     * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
     */
    setSizePercent(percent: cc.Point): any

    /**
     * TEXTURE_RES_TYPE
     * Changes the size type of widget.
     *
     * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
     */
    setSizeType(type: ccui.Widget.SIZE_ABSOLUTE | ccui.Widget.SIZE_PERCENT): any

    /**
     * Specify widget to swallow touches or not
     *
     * @param {Boolean} swallow
     */
    setSwallowTouches(swallow: boolean): any

    /**
     * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
     *
     * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
     */
    setTouchEnabled(enable: boolean): any

    /**
     *
     *
     * @param {Boolean} enable enable Unify Size of a widget
     */
    setUnifySizeEnabled(enable: boolean): any

    /**
     * updates its size by size type and its position by position type.
     *
     * @param {cc.Size} parentSize parent size
     */
    updateSizeAndPosition(parentSize: cc.Size): any
  }
}

declare namespace ccui {
  namespace Widget {


    /**
     * Light bright style of ccui.Widget.
     */
    enum BRIGHT_STYLE_HIGH_LIGHT { }

    /**
     * None bright style of ccui.Widget.
     */
    enum BRIGHT_STYLE_NONE { }

    /**
     * Normal bright style of ccui.Widget.
     */
    enum BRIGHT_STYLE_NORMAL { }

    /**
     * The down of Focus direction for ccui.Widget
     */
    enum DOWN { }

    /**
     * The left of Focus direction for ccui.Widget
     */
    enum LEFT { }

    /**
     * The image file texture type of ccui.Widget loads.
     */
    enum LOCAL_TEXTURE { }

    /**
     * The sprite frame texture type of ccui.Widget loads.
     */
    enum PLIST_TEXTURE { }

    /**
     * The absolute of ccui.Widget's position type.
     */
    enum POSITION_ABSOLUTE { }

    /**
     * The percent of ccui.Widget's position type.
     */
    enum POSITION_PERCENT { }

    /**
     * The right of Focus direction for ccui.Widget
     */
    enum RIGHT { }

    /**
     * The absolute of ccui.Widget's size type.
     */
    enum SIZE_ABSOLUTE { }

    /**
     * The percent of ccui.Widget's size type.
     */
    enum SIZE_PERCENT { }

    /**
     * The touch began type of ccui.Widget's touch event
     */
    enum TOUCH_BEGAN { }

    /**
     * The touch canceled type of ccui.Widget's touch event
     */
    enum TOUCH_CANCELED { }

    /**
     * The touch end type of ccui.Widget's touch event
     */
    enum TOUCH_ENDED { }

    /**
     * The touch moved type of ccui.Widget's touch event
     */
    enum TOUCH_MOVED { }

    /**
     * The type code of Container for ccui controls.
     */
    enum TYPE_CONTAINER { }

    /**
     * The type code of Widget for ccui controls.
     */
    enum TYPE_WIDGET { }

    /**
     * The up of Focus direction for ccui.Widget
     */
    enum UP { }

    /**
     * allocates and initializes a UIWidget.
     *
     * @returns {ccui.Widget}
     */
    function create(): ccui.Widget

    /**
     * call this method with parameter true to enable the Android Dpad focus navigation feature
     *
     * @param {Boolean} enable set true to enable dpad focus navigation, otherwise disable dpad focus navigation
     */
    function enableDpadNavigation(enable: boolean): any

    /**
     * Gets the focused widget of current stage.
     *
     * @returns {null|ccui.Widget}
     */
    function getCurrentFocusedWidget(): null | ccui.Widget
  }
}

declare namespace ccui {
  interface Button  {

    /**
     * Allocates and initializes a UIButton.
     * Constructor of ccui.Button. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {String} normalImage
     * @param {String} selectedImage
     * @param {String} disableImage
     * @param {Number} texType
     */
    constructor(normalImage: string, selectedImage: string, disableImage: string, texType: number)

    /**
     * - Indicate whether button has zoom effect when clicked
     */
    pressedActionEnabled: boolean

    /**
     * - The content string font of the button title
     */
    titleFont: string

    /**
     * - The content string font color of the button title
     */
    titleFontColor: cc.Color

    /**
     * - The content string font name of the button title
     */
    titleFontName: string

    /**
     * - The content string font size of the button title
     */
    titleFontSize: number

    /**
     * - The content string of the button title
     */
    titleText: string

    /**
     * Returns disable renderer cap insets.
     *
     * @returns {cc.Rect}
     */
    getCapInsetsDisabledRenderer(): cc.Rect

    /**
     * Returns normal renderer cap insets.
     *
     * @returns {cc.Rect}
     */
    getCapInsetsNormalRenderer(): cc.Rect

    /**
     * Returns pressed renderer cap insets.
     *
     * @returns {cc.Rect}
     */
    getCapInsetsPressedRenderer(): cc.Rect

    /**
     * Returns the "class name" of widget.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Returns the normalize of texture size
     *
     * @returns v3.3{cc.Size}
     */
    getNormalTextureSize(): cc.Size

    /**
     * Returns title color of ccui.Button
     *
     * @returns {cc.Color}
     */
    getTitleColor(): cc.Color

    /**
     * Gets title fontName of ccui.Button.
     *
     * @returns {String}
     */
    getTitleFontName(): string

    /**
     * Returns title fontSize of ccui.Button.
     *
     * @returns {Number}
     */
    getTitleFontSize(): number

    /**
     * Get the title renderer.
     * title ttf object.
     *
     * @returns {cc.LabelTTF}
     */
    getTitleRenderer(): cc.LabelTTF

    /**
     * Returns title text of ccui.Button
     *
     * @returns {String} text
     */
    getTitleText(): string

    /**
     * Gets the Virtual Renderer of widget.
     *
     * @returns {cc.Node}
     */
    getVirtualRenderer(): cc.Node

    /**
     * Returns the renderer size.
     *
     * @returns {cc.Size}
     */
    getVirtualRendererSize(): cc.Size

    /**
     * Returns a zoom scale
     *
     * @returns v3.2{number}
     */
    getZoomScale(): number

    /**
     * Sets whether ignore the widget size
     *
     * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
     */
    ignoreContentAdaptWithSize(ignore: boolean): any

    /**
     * Returns button is using scale9 renderer or not.
     *
     * @returns {Boolean}
     */
    isScale9Enabled(): boolean

    /**
     * Load dark state texture for button.
     *
     * @param {String} disabled disabled state of texture's filename.
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTextureDisabled(disabled: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Load normal state texture for button.
     *
     * @param {String} normal normal state of texture's filename.
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTextureNormal(normal: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Load selected state texture for button.
     *
     * @param {String} selected selected state of texture's filename.
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTexturePressed(selected: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Load textures for button.
     *
     * @param {String} normal normal state of texture's filename.
     * @param {String} selected selected state of texture's filename.
     * @param {String} disabled disabled state of texture's filename.
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTextures(normal: string, selected: string, disabled: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Sets capinsets for button, if button is using scale9 renderer.
     *
     * @param {cc.Rect} capInsets
     */
    setCapInsets(capInsets: cc.Rect): any

    /**
     * Sets capinsets for button, if button is using scale9 renderer.
     *
     * @param {cc.Rect} capInsets
     */
    setCapInsetsDisabledRenderer(capInsets: cc.Rect): any

    /**
     * Sets capinsets for button, if button is using scale9 renderer.
     *
     * @param {cc.Rect} capInsets
     */
    setCapInsetsNormalRenderer(capInsets: cc.Rect): any

    /**
     * Sets capinsets for button, if button is using scale9 renderer.
     *
     * @param {cc.Rect} capInsets
     */
    setCapInsetsPressedRenderer(capInsets: cc.Rect): any

    /**
     * Changes if button can be clicked zoom effect.
     *
     * @param {Boolean} enabled
     */
    setPressedActionEnabled(enabled: boolean): any

    /**
     * Sets if button is using scale9 renderer.
     *
     * @param {Boolean} able true that using scale9 renderer, false otherwise.
     */
    setScale9Enabled(able: boolean): any

    /**
     * Sets title color to ccui.Button.
     *
     * @param {cc.Color} color
     */
    setTitleColor(color: cc.Color): any

    /**
     * Sets title fontName to ccui.Button.
     *
     * @param {String} fontName
     */
    setTitleFontName(fontName: string): any

    /**
     * Sets title fontSize to ccui.Button
     *
     * @param {cc.Size} size
     */
    setTitleFontSize(size: cc.Size): any

    /**
     * Sets title text to ccui.Button
     *
     * @param {String} text
     */
    setTitleText(text: string): any

    /**
     * When user pressed the button, the button will zoom to a scale.
     * The final scale of the button equals (button original scale + _zoomScale)
     *
     * @param {} scale
     */
    setZoomScale(scale: any): any
  }
}

declare namespace ccui {
  namespace Button {


    /**
     * The disabled renderer's zOrder value of ccui.Button.
     */
    enum DISABLED_RENDERER_ZORDER { }

    /**
     * The normal renderer's zOrder value of ccui.Button.
     */
    enum NORMAL_RENDERER_ZORDER { }

    /**
     * The pressed renderer's zOrder value ccui.Button.
     */
    enum PRESSED_RENDERER_ZORDER { }

    /**
     * The title renderer's zOrder value of ccui.Button.
     */
    enum TITLE_RENDERER_ZORDER { }

    /**
     * the zoom action time step of ccui.Button
     */
    enum ZOOM_ACTION_TIME_STEP { }

    /**
     * allocates and initializes a UIButton.
     *
     * @param {string} normalImage normal state texture name
     * @param {string} selectedImage selected state texture name
     * @param {string} disableImage disabled state texture name
     * @param {string} texType
     *
     * @returns {ccui.Button}
     */
    function create(normalImage: string, selectedImage: string, disableImage: string, texType: string): ccui.Button
  }
}

declare namespace ccui {
  interface CheckBox  {

    /**
     * allocates and initializes a UICheckBox.
     * Constructor of ccui.CheckBox, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {String} backGround
     * @param {String} backGroundSelected
     * @param {String} cross
     * @param {String} backGroundDisabled
     * @param {String} frontCrossDisabled
     * @param {Number} texType
     */
    constructor(backGround: string, backGroundSelected: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: number)

    /**
     * - Indicate whether the check box has been selected
     */
    selected: boolean

    /**
     * add a call back function would called when checkbox is selected or unselected.
     *
     * @param {Function} selector
     * @param {Object} target
     */
    addEventListener(selector: Function, target: object): any

    /**
     * add event listener to ccui.CheckBox. it would called when checkbox is selected or unselected.
     *
     * @param {Function} selector
     * @param {Object} target
     */
    addEventListenerCheckBox(selector: Function, target: object): any

    /**
     * Returns the "class name" of widget.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     *
     */
    getSelectedState(): any

    /**
     * override "getVirtualRenderer" method of widget.
     *
     * @returns {cc.Node} the renderer of ccui.CheckBox.
     */
    getVirtualRenderer(): cc.Node

    /**
     * Returns the content size of Renderer.
     *
     * @returns {cc.Size}
     */
    getVirtualRendererSize(): cc.Size

    /**
     * Returns the selected state of ccui.CheckBox.
     *
     * @returns {boolean}
     */
    isSelected(): boolean

    /**
     * Loads background texture for checkbox.
     *
     * @param {String} backGround background filename
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTextureBackGround(backGround: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Loads disabled state of backGround texture for checkbox.
     *
     * @param {String} backGroundDisabled
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTextureBackGroundDisabled(backGroundDisabled: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Loads selected state of background texture for checkbox.
     *
     * @param {String} backGroundSelected
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTextureBackGroundSelected(backGroundSelected: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Loads cross texture for checkbox.
     *
     * @param {String} cross
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTextureFrontCross(cross: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Loads frontCrossDisabled texture for checkbox.
     *
     * @param {String} frontCrossDisabled
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTextureFrontCrossDisabled(frontCrossDisabled: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Loads textures for checkbox.
     *
     * @param {String} backGround
     * @param {String} backGroundSelected
     * @param {String} cross
     * @param {String} backGroundDisabled
     * @param {String} frontCrossDisabled
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTextures(backGround: string, backGroundSelected: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Sets the selected state to ccui.CheckBox
     *
     * @param {Boolean} selected
     */
    setSelected(selected: boolean): any

    /**
     *
     *
     * @param {} selected
     */
    setSelectedState(selected: any): any
  }
}

declare namespace ccui {
  namespace CheckBox {


    /**
     * The disabled Background renderer's zOrder
     */
    enum BOX_DISABLED_RENDERER_ZORDER { }

    /**
     * The normal background renderer's zOrder
     */
    enum BOX_RENDERER_ZORDER { }

    /**
     * The selected Background renderer's zOrder
     */
    enum BOX_SELECTED_RENDERER_ZORDER { }

    /**
     * The selected state of ccui.CheckBox's event.
     */
    enum EVENT_SELECTED { }

    /**
     * The unselected state of ccui.CheckBox's event.
     */
    enum EVENT_UNSELECTED { }

    /**
     * The disabled front renderer's zOrder
     */
    enum FRONT_CROSS_DISABLED_RENDERER_ZORDER { }

    /**
     * The normal front renderer's zOrder
     */
    enum FRONT_CROSS_RENDERER_ZORDER { }

    /**
     * allocates and initializes a UICheckBox.
     *
     * @param {string} backGround backGround texture.
     * @param {string} backGroundSeleted backGround selected state texture.
     * @param {string} cross cross texture.
     * @param {string} backGroundDisabled cross dark state texture.
     * @param {string} frontCrossDisabled cross dark state texture.
     * @param {Number} texType
     *
     * @returns {ccui.CheckBox}
     */
    function create(backGround: string, backGroundSeleted: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: number): ccui.CheckBox
  }
}

declare namespace ccui {
  interface ImageView  {

    /**
     * allocates and initializes a ccui.ImageView.
     * Constructor of ccui.ImageView, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {String} imageFileName
     * @param {Number} texType
     */
    constructor(imageFileName: string, texType: number)


    /**
     * Returns cap insets of ccui.ImageView.
     *
     * @returns {cc.Rect}
     */
    getCapInsets(): cc.Rect

    /**
     * Returns the "class name" of ccui.ImageView.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Returns the renderer of ccui.ImageView
     *
     * @returns {cc.Node}
     */
    getVirtualRenderer(): cc.Node

    /**
     * Returns the image's texture size.
     *
     * @returns {cc.Size}
     */
    getVirtualRendererSize(): cc.Size

    /**
     * Ignore the imageView's custom size, true that imageView will ignore it's custom size, use renderer's content size, false otherwise.
     *
     * @param {Boolean} ignore
     */
    ignoreContentAdaptWithSize(ignore: boolean): any

    /**
     * Returns ImageView is using scale9 renderer or not.
     *
     * @returns {Boolean}
     */
    isScale9Enabled(): boolean

    /**
     * Loads textures for button.
     *
     * @param {String} fileName
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTexture(fileName: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Sets capinsets for button, if button is using scale9 renderer.
     *
     * @param {cc.Rect} capInsets
     */
    setCapInsets(capInsets: cc.Rect): any

    /**
     * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
     * and updates size percent by parent content size. At last, updates its children's size and position.
     *
     * @param {cc.Size|Number} contentSize content size or width of content size
     * @param {Number} height
     */
    setContentSize(contentSize: cc.Size | number, height: number): any

    /**
     * Sets if button is using scale9 renderer.
     *
     * @param {Boolean} able
     */
    setScale9Enabled(able: boolean): any

    /**
     * Sets texture rect
     *
     * @param {cc.Rect} rect
     */
    setTextureRect(rect: cc.Rect): any
  }
}

declare namespace ccui {
  namespace ImageView {


    /**
     * The zOrder value of ccui.ImageView's renderer.
     */
    enum RENDERER_ZORDER { }

    /**
     * Allocates and initializes a UIImageView.
     *
     * @param {string} imageFileName
     * @param {Number} texType
     *
     * @returns {ccui.ImageView}
     */
    function create(imageFileName: string, texType: number): ccui.ImageView
  }
}

declare namespace ccui {
  interface LabelBMFont  {

    /**
     * The TextBMFont control of Cocos UI, it rendered by LabelBMFont.
     */
    constructor()

    /**
     * - Content string of the label
     */
    string: string

  }
}

declare namespace ccui {
  interface Layout  {

    /**
     * Allocates and initializes an UILayout.
     * Constructor of ccui.Layout
     */
    constructor()

    /**
     * - Indicate whether clipping is enabled
     */
    clippingEnabled: boolean

    /**
     *
     */
    clippingType: ccui.Layout.CLIPPING_STENCIL | ccui.Layout.CLIPPING_SCISSOR

    /**
     *
     */
    layoutType: ccui.Layout.ABSOLUTE | ccui.Layout.LINEAR_VERTICAL | ccui.Layout.LINEAR_HORIZONTAL | ccui.Layout.RELATIVE

    /**
     * Adds a widget to the container.
     *
     * @param {ccui.Widget} widget
     * @param {Number} zOrder
     * @param {Number|string} tag tag or name
     */
    addChild(widget: ccui.Widget, zOrder: number, tag: number | string): any

    /**
     * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
     * If the widget is not in a layout, it will return itself
     *
     * @param {Number} direction the direction to look for the next focused widget in a layout
     * @param {ccui.Widget} current the current focused widget
     *
     * @returns {ccui.Widget} return the index of widget in the layout
     */
    findNextFocusedWidget(direction: number, current: ccui.Widget): ccui.Widget

    /**
     * force refresh widget layout
     */
    forceDoLayout(): any

    /**
     * Gets background color of ccui.Layout, if color type is Layout.COLOR_SOLID.
     *
     * @returns {cc.Color}
     */
    getBackGroundColor(): cc.Color

    /**
     * Get background opacity value of ccui.Layout.
     *
     * @returns {Number}
     */
    getBackGroundColorOpacity(): number

    /**
     * Get background color type of ccui.Layout.
     *
     * @returns {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT}
     */
    getBackGroundColorType(): ccui.Layout.BG_COLOR_NONE | ccui.Layout.BG_COLOR_SOLID | ccui.Layout.BG_COLOR_GRADIENT

    /**
     * Gets background color vector of ccui.Layout, if color type is Layout.COLOR_GRADIENT
     *
     * @returns {cc.Point}
     */
    getBackGroundColorVector(): cc.Point

    /**
     * Gets background end color of ccui.Layout
     *
     * @returns {cc.Color}
     */
    getBackGroundEndColor(): cc.Color

    /**
     * Gets background image capinsets of ccui.Layout.
     *
     * @returns {cc.Rect}
     */
    getBackGroundImageCapInsets(): cc.Rect

    /**
     * Gets backGround image color
     *
     * @returns {cc.Color}
     */
    getBackGroundImageColor(): cc.Color

    /**
     * Gets backGround image opacity
     *
     * @returns {Number}
     */
    getBackGroundImageOpacity(): number

    /**
     * Gets background image texture size.
     *
     * @returns {cc.Size}
     */
    getBackGroundImageTextureSize(): cc.Size

    /**
     * Gets background start color of ccui.Layout
     *
     * @returns {cc.Color}
     */
    getBackGroundStartColor(): cc.Color

    /**
     * Gets clipping type of ccui.Layout
     *
     * @returns {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR}
     */
    getClippingType(): ccui.Layout.CLIPPING_STENCIL | ccui.Layout.CLIPPING_SCISSOR

    /**
     * Returns the "class name" of widget.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Gets LayoutType of ccui.Layout.
     *
     * @returns {null}
     */
    getLayoutType(): null

    /**
     * Get whether background image is use scale9 renderer.
     *
     * @returns {Boolean}
     */
    isBackGroundImageScale9Enabled(): boolean

    /**
     * Gets if layout is clipping enabled.
     *
     * @returns {Boolean} if layout is clipping enabled.
     */
    isClippingEnabled(): boolean

    /**
     * Gets whether enable focus loop
     *
     * @returns {boolean} If focus loop is enabled, then it will return true, otherwise it returns false. The default value is false.
     */
    isLoopFocus(): boolean

    /**
     * Returns whether the layout will pass the focus to its children or not. The default value is true
     *
     * @returns {boolean} To query whether the layout will pass the focus to its children or not. The default value is true
     */
    isPassFocusToChild(): boolean

    /**
     * Calls its parent's onEnter, and calls its clippingStencil's onEnter if clippingStencil isn't null.
     */
    onEnter(): any

    /**
     * Calls its parent's onExit, and calls its clippingStencil's onExit if clippingStencil isn't null.
     */
    onExit(): any

    /**
     * To specify a user-defined functor to decide which child widget of the layout should get focused
     *
     * @param {Number} direction
     * @param {ccui.Widget} current
     */
    onPassFocusToChild(direction: number, current: ccui.Widget): any

    /**
     * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
     *
     * @param {Boolean} cleanup
     */
    removeAllChildren(cleanup: boolean): any

    /**
     * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
     * and sets the layout dirty flag to true.
     *
     * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
     */
    removeAllChildrenWithCleanup(cleanup: boolean): any

    /**
     * Remove the background image of ccui.Layout.
     */
    removeBackGroundImage(): any

    /**
     * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
     *
     * @param {ccui.Widget} widget
     * @param {Boolean} cleanup
     */
    removeChild(widget: ccui.Widget, cleanup: boolean): any

    /**
     * request to refresh widget layout, it will do layout at visit calls
     */
    requestDoLayout(): any

    /**
     * Sets background color for layout, if color type is Layout.COLOR_SOLID
     *
     * @param {cc.Color} color
     * @param {cc.Color} endColor
     */
    setBackGroundColor(color: cc.Color, endColor: cc.Color): any

    /**
     * Sets background opacity to ccui.Layout.
     *
     * @param {number} opacity
     */
    setBackGroundColorOpacity(opacity: number): any

    /**
     * Sets Color Type for ccui.Layout.
     *
     * @param {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT} type
     */
    setBackGroundColorType(type: ccui.Layout.BG_COLOR_NONE | ccui.Layout.BG_COLOR_SOLID | ccui.Layout.BG_COLOR_GRADIENT): any

    /**
     * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
     *
     * @param {cc.Point} vector
     */
    setBackGroundColorVector(vector: cc.Point): any

    /**
     * Sets a background image for layout
     *
     * @param {String} fileName
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    setBackGroundImage(fileName: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Sets a background image CapInsets for layout, if the background image is a scale9 render.
     *
     * @param {cc.Rect} capInsets capinsets of background image.
     */
    setBackGroundImageCapInsets(capInsets: cc.Rect): any

    /**
     * Sets backGround image color
     *
     * @param {cc.Color} color
     */
    setBackGroundImageColor(color: cc.Color): any

    /**
     * Sets backGround image Opacity
     *
     * @param {Number} opacity
     */
    setBackGroundImageOpacity(opacity: number): any

    /**
     * Sets background image use scale9 renderer.
     *
     * @param {Boolean} able true that use scale9 renderer, false otherwise.
     */
    setBackGroundImageScale9Enabled(able: boolean): any

    /**
     * Changes if layout can clip it's content and locChild.
     * If you really need this, please enable it. But it would reduce the rendering efficiency.
     *
     * @param {Boolean} able clipping enabled.
     */
    setClippingEnabled(able: boolean): any

    /**
     * Sets clipping type to ccui.Layout
     *
     * @param {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR} type
     */
    setClippingType(type: ccui.Layout.CLIPPING_STENCIL | ccui.Layout.CLIPPING_SCISSOR): any

    /**
     * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type..
     *
     * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
     */
    setLayoutType(type: ccui.Layout.ABSOLUTE | ccui.Layout.LINEAR_VERTICAL | ccui.Layout.LINEAR_HORIZONTAL | ccui.Layout.RELATIVE): any

    /**
     * If a layout is loop focused which means that the focus movement will be inside the layout
     *
     * @param {Boolean} loop pass true to let the focus movement loop inside the layout
     */
    setLoopFocus(loop: boolean): any

    /**
     * Specifies whether the layout pass its focus to its child
     *
     * @param {} pass To specify whether the layout pass its focus to its child
     */
    setPassFocusToChild(pass: any): any

    /**
     * Calls adaptRenderers (its subclass will override it.) and do layout.
     * If clippingEnabled is true, it will clip/scissor area.
     *
     * @param {cc.Node.RenderCmd} parentCmd
     */
    visit(parentCmd: any): any
  }
}

declare namespace ccui {
  namespace Layout {


    /**
     * The absolute of ccui.Layout's layout type.
     */
    enum ABSOLUTE { }

    /**
     * The zOrder value of ccui.Layout's image background.
     */
    enum BACKGROUND_IMAGE_ZORDER { }

    /**
     * The zOrder value of ccui.Layout's color background.
     */
    enum BACKGROUND_RENDERER_ZORDER { }

    /**
     * The gradient of ccui.Layout's background color type, it will use a LayerGradient to draw the background.
     */
    enum BG_COLOR_GRADIENT { }

    /**
     * The None of ccui.Layout's background color type
     */
    enum BG_COLOR_NONE { }

    /**
     * The solid of ccui.Layout's background color type, it will use a LayerColor to draw the background.
     */
    enum BG_COLOR_SOLID { }

    /**
     * The scissor of ccui.Layout's clipping type.
     */
    enum CLIPPING_SCISSOR { }

    /**
     * The stencil of ccui.Layout's clipping type.
     */
    enum CLIPPING_STENCIL { }

    /**
     * The horizontal of ccui.Layout's layout type.
     */
    enum LINEAR_HORIZONTAL { }

    /**
     * The vertical of ccui.Layout's layout type.
     */
    enum LINEAR_VERTICAL { }

    /**
     * The relative of ccui.Layout's layout type.
     */
    enum RELATIVE { }

    /**
     * allocates and initializes a UILayout.
     *
     * @returns {ccui.Layout}
     */
    function create(): ccui.Layout
  }
}

declare namespace ccui {
  interface HBox  {

    /**
     * The constructor of ccui.HBox
     *
     * @param {cc.Size} size
     */
    constructor(size: cc.Size)


  }
}

declare namespace ccui {
  namespace HBox {



    /**
     * Creates a HBox object
     *
     * @param {cc.Size} size
     *
     * @returns {ccui.HBox}
     */
    function create(size: cc.Size): ccui.HBox
  }
}

declare namespace ccui {
  interface RelativeBox  {

    /**
     * The constructor of ccui.RelativeBox
     *
     * @param {cc.Size} size
     */
    constructor(size: cc.Size)


  }
}

declare namespace ccui {
  namespace RelativeBox {



    /**
     * Creates a relative box
     *
     * @param {cc.Size} size
     *
     * @returns {ccui.RelativeBox}
     */
    function create(size: cc.Size): ccui.RelativeBox
  }
}

declare namespace ccui {
  interface ScrollView  {

    /**
     * Allocates and initializes a UIScrollView.
     * Constructor of ccui.ScrollView. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()

    /**
     * - Indicate whether bounce is enabled
     */
    bounceEnabled: boolean

    /**
     * - Scroll direction of the scroll view
     */
    direction: ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH

    /**
     * - Indicate whether inertiaScroll is enabled
     */
    inertiaScrollEnabled: boolean

    /**
     * - Inner container height of the scroll view
     */
    innerHeight: number

    /**
     * - Inner container width of the scroll view
     */
    innerWidth: number

    /**
     * - Touch total time threshold
     */
    touchTotalTimeThreshold: number

    /**
     * Add child to ccui.ScrollView.
     *
     * @param {cc.Node} widget
     * @param {Number} zOrder
     * @param {Number|string} tag tag or name
     *
     * @returns {boolean}
     */
    addChild(widget: cc.Node, zOrder: number, tag: number | string): boolean

    /**
     * Adds callback function called ScrollView event triggered
     *
     * @param {Function} selector
     */
    addEventListener(selector: Function): any

    /**
     * Adds callback function called ScrollView event triggered
     *
     * @param {Function} selector
     * @param {Object} target
     */
    addEventListenerScrollView(selector: Function, target: object): any

    /**
     * Add node for scrollView
     *
     * @param {cc.Node} node
     * @param {Number} zOrder
     * @param {Number} tag
     */
    addNode(node: cc.Node, zOrder: number, tag: number): any

    /**
     * When a widget is in a layout, you could call this method to get the next focused widget within a specified _direction.
     * If the widget is not in a layout, it will return itself
     *
     * @param {Number} _direction the _direction to look for the next focused widget in a layout
     * @param {ccui.Widget} current the current focused widget
     *
     * @returns {ccui.Widget}
     */
    findNextFocusedWidget(_direction: number, current: ccui.Widget): ccui.Widget

    /**
     * Gets a child from the container given its name
     *
     * @param {String} name
     *
     * @returns {ccui.Widget}
     */
    getChildByName(name: string): ccui.Widget

    /**
     * Gets a child from the container given its tag
     *
     * @param {Number} tag
     *
     * @returns {ccui.Widget}
     */
    getChildByTag(tag: number): ccui.Widget

    /**
     * Returns inner container's children
     *
     * @returns {Array}
     */
    getChildren(): any[]

    /**
     * Gets the count of inner container's children
     *
     * @returns {Number}
     */
    getChildrenCount(): number

    /**
     * Returns the "class name" of ccui.ScrollView.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Returns scroll direction of ScrollView.
     *
     * @returns {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH}
     */
    getDirection(): ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH

    /**
     * Gets inner container of ScrollView. Inner container is the container of ScrollView's children.
     *
     * @returns {ccui.Layout}
     */
    getInnerContainer(): ccui.Layout

    /**
     * Get inner container position
     */
    getInnerContainerPosition(): any

    /**
     * Returns inner container size of ScrollView.
     * Inner container size must be larger than or equal ScrollView's size.
     *
     * @returns {cc.Size} inner container size.
     */
    getInnerContainerSize(): cc.Size

    /**
     * Returns the layout type of ccui.ScrollView.
     *
     * @returns {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE}
     */
    getLayoutType(): ccui.Layout.ABSOLUTE | ccui.Layout.LINEAR_VERTICAL | ccui.Layout.LINEAR_HORIZONTAL | ccui.Layout.RELATIVE

    /**
     * Returns a node by tag
     *
     * @param {Number} tag
     *
     * @returns {cc.Node}
     */
    getNodeByTag(tag: number): cc.Node

    /**
     * Returns all nodes of inner container
     *
     * @returns {Array}
     */
    getNodes(): any[]

    /**
     * Get the scroll bar's auto hide time
     *
     * @returns {number}
     */
    getScrollBarAutoHideTime(): number

    /**
     * Get the scroll bar's color
     *
     * @returns {cc.Color} the scroll bar's color
     */
    getScrollBarColor(): cc.Color

    /**
     * Get the scroll bar's opacity
     *
     * @returns {number}
     */
    getScrollBarOpacity(): number

    /**
     * Get the horizontal scroll bar's position from right-top corner.
     *
     * @returns {cc.Point}
     */
    getScrollBarPositionFromCornerForHorizontal(): cc.Point

    /**
     * Get the vertical scroll bar's position from right-top corner.
     *
     * @returns {cc.Point}
     */
    getScrollBarPositionFromCornerForVertical(): cc.Point

    /**
     * Get the scroll bar's width
     *
     * @returns {number} the scroll bar's width
     */
    getScrollBarWidth(): number

    /**
     * Get the touch total time threshold
     *
     * @returns {Number}
     */
    getTouchTotalTimeThreshold(): number

    /**
     * Initializes a ccui.ScrollView. Please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
     *
     * @returns {boolean}
     */
    init(): boolean

    /**
     * Intercept touch event, handle its child's touch event.
     *
     * @param {number} event event type
     * @param {ccui.Widget} sender
     * @param {cc.Touch} touch
     */
    interceptTouchEvent(event: number, sender: ccui.Widget, touch: cc.Touch): any

    /**
     * Returns whether bounce is enabled
     *
     * @returns {boolean}
     */
    isBounceEnabled(): boolean

    /**
     * Returns whether inertiaScroll is enabled
     *
     * @returns {boolean}
     */
    isInertiaScrollEnabled(): boolean

    /**
     * Query scroll bar auto hide state
     *
     * @returns {boolean}
     */
    isScrollBarAutoHideEnabled(): boolean

    /**
     * Query scroll bar state.
     *
     * @returns {boolean} True if scroll bar is enabled, false otherwise.
     */
    isScrollBarEnabled(): boolean

    /**
     * Move inner container to bottom boundary of ScrollView.
     */
    jumpToBottom(): any

    /**
     * Move inner container to bottom and left boundary of ScrollView.
     */
    jumpToBottomLeft(): any

    /**
     * Move inner container to bottom and right boundary of ScrollView.
     */
    jumpToBottomRight(): any

    /**
     * Move inner container to left boundary of ScrollView.
     */
    jumpToLeft(): any

    /**
     * Move inner container to both _direction percent position of ScrollView.
     *
     * @param {cc.Point} percent The destination vertical percent, accept value between 0 - 100
     */
    jumpToPercentBothDirection(percent: cc.Point): any

    /**
     * Move inner container to horizontal percent position of ScrollView.
     *
     * @param {Number} percent The destination vertical percent, accept value between 0 - 100
     */
    jumpToPercentHorizontal(percent: number): any

    /**
     * Move inner container to vertical percent position of ScrollView.
     *
     * @param {Number} percent The destination vertical percent, accept value between 0 - 100
     */
    jumpToPercentVertical(percent: number): any

    /**
     * Move inner container to right boundary of ScrollView.
     */
    jumpToRight(): any

    /**
     * Move inner container to top boundary of ScrollView.
     */
    jumpToTop(): any

    /**
     * Move inner container to top and left boundary of ScrollView.
     */
    jumpToTopLeft(): any

    /**
     * Move inner container to top and right boundary of ScrollView.
     */
    jumpToTopRight(): any

    /**
     * Calls the parent class' onEnter and schedules update function.
     */
    onEnter(): any

    /**
     * The touch began event callback handler of ccui.ScrollView.
     *
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     *
     * @returns {boolean}
     */
    onTouchBegan(touch: cc.Touch, event: cc.Event): boolean

    /**
     * The touch canceled event callback of ccui.ScrollView.
     *
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     */
    onTouchCancelled(touch: cc.Touch, event: cc.Event): any

    /**
     * The touch ended event callback handler of ccui.ScrollView.
     *
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     */
    onTouchEnded(touch: cc.Touch, event: cc.Event): any

    /**
     * The touch moved event callback handler of ccui.ScrollView.
     *
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     */
    onTouchMoved(touch: cc.Touch, event: cc.Event): any

    /**
     * Removes all children.
     */
    removeAllChildren(): any

    /**
     * Removes all children.
     *
     * @param {Boolean} cleanup
     */
    removeAllChildrenWithCleanup(cleanup: boolean): any

    /**
     * Remove all node from ccui.ScrollView.
     */
    removeAllNodes(): any

    /**
     * Removes widget child
     *
     * @param {ccui.Widget} child
     * @param {Boolean} cleanup
     *
     * @returns {boolean}
     */
    removeChild(child: ccui.Widget, cleanup: boolean): boolean

    /**
     * Removes a node from ccui.ScrollView.
     *
     * @param {cc.Node} node
     */
    removeNode(node: cc.Node): any

    /**
     * Removes a node by tag
     *
     * @param {Number} tag
     */
    removeNodeByTag(tag: number): any

    /**
     * Scroll inner container to bottom boundary of ScrollView.
     *
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToBottom(time: number, attenuated: boolean): any

    /**
     * Scroll inner container to bottom and left boundary of ScrollView.
     *
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToBottomLeft(time: number, attenuated: boolean): any

    /**
     * Scroll inner container to bottom and right boundary of ScrollView.
     *
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToBottomRight(time: number, attenuated: boolean): any

    /**
     * Scroll inner container to left boundary of ScrollView.
     *
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToLeft(time: number, attenuated: boolean): any

    /**
     * Scroll inner container to both _direction percent position of ScrollView.
     *
     * @param {cc.Point} percent
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToPercentBothDirection(percent: cc.Point, time: number, attenuated: boolean): any

    /**
     * Scroll inner container to horizontal percent position of ScrollView.
     *
     * @param {Number} percent
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToPercentHorizontal(percent: number, time: number, attenuated: boolean): any

    /**
     * Scroll inner container to vertical percent position of ScrollView.
     *
     * @param {Number} percent
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToPercentVertical(percent: number, time: number, attenuated: boolean): any

    /**
     * Scroll inner container to right boundary of ScrollView.
     *
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToRight(time: number, attenuated: boolean): any

    /**
     * Scroll inner container to top boundary of ScrollView.
     *
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToTop(time: number, attenuated: boolean): any

    /**
     * Scroll inner container to top and left boundary of ScrollView.
     *
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToTopLeft(time: number, attenuated: boolean): any

    /**
     * Scroll inner container to top and right boundary of ScrollView.
     *
     * @param {Number} time
     * @param {Boolean} attenuated
     */
    scrollToTopRight(time: number, attenuated: boolean): any

    /**
     * Sets bounce enabled
     *
     * @param {Boolean} enabled
     */
    setBounceEnabled(enabled: boolean): any

    /**
     * Changes scroll _direction of ScrollView.
     *
     * @param {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH} dir Direction::VERTICAL means vertical scroll, Direction::HORIZONTAL means horizontal scroll
     */
    setDirection(dir: ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH): any

    /**
     * Sets inertiaScroll enabled
     *
     * @param {boolean} enabled
     */
    setInertiaScrollEnabled(enabled: boolean): any

    /**
     * Set inner container position
     *
     * @param {cc.Point} position Inner container position.
     */
    setInnerContainerPosition(position: cc.Point): any

    /**
     * Changes inner container size of ScrollView.
     * Inner container size must be larger than or equal the size of ScrollView.
     *
     * @param {cc.Size} size inner container size.
     */
    setInnerContainerSize(size: cc.Size): any

    /**
     * Sets LayoutType of ccui.ScrollView.
     *
     * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
     */
    setLayoutType(type: ccui.Layout.ABSOLUTE | ccui.Layout.LINEAR_VERTICAL | ccui.Layout.LINEAR_HORIZONTAL | ccui.Layout.RELATIVE): any

    /**
     * Set scroll bar auto hide state
     *
     * @param {boolean} autoHideEnabled scroll bar auto hide state
     */
    setScrollBarAutoHideEnabled(autoHideEnabled: boolean): any

    /**
     * Set scroll bar auto hide time
     *
     * @param {number} autoHideTime scroll bar auto hide state
     */
    setScrollBarAutoHideTime(autoHideTime: number): any

    /**
     * Set the scroll bar's color
     *
     * @param {cc.Color} color the scroll bar's color
     */
    setScrollBarColor(color: cc.Color): any

    /**
     * Toggle scroll bar enabled.
     *
     * @param {boolean} enabled True if enable scroll bar, false otherwise.
     */
    setScrollBarEnabled(enabled: boolean): any

    /**
     * Set the scroll bar's opacity
     *
     * @param {number} opacity the scroll bar's opacity
     */
    setScrollBarOpacity(opacity: number): any

    /**
     * Set the scroll bar positions from the left-bottom corner (horizontal) and right-top corner (vertical).
     *
     * @param {cc.Point} positionFromCorner The position from the left-bottom corner (horizontal) and right-top corner (vertical).
     */
    setScrollBarPositionFromCorner(positionFromCorner: cc.Point): any

    /**
     * Set the horizontal scroll bar position from left-bottom corner.
     *
     * @param {cc.Point} positionFromCorner The position from left-bottom corner
     */
    setScrollBarPositionFromCornerForHorizontal(positionFromCorner: cc.Point): any

    /**
     * Set the vertical scroll bar position from right-top corner.
     *
     * @param {cc.Point} positionFromCorner The position from right-top corner
     */
    setScrollBarPositionFromCornerForVertical(positionFromCorner: cc.Point): any

    /**
     * Set the scroll bar's width
     *
     * @param {number} width The scroll bar's width
     */
    setScrollBarWidth(width: number): any

    /**
     * Set the touch total time threshold
     *
     * @param {Number} touchTotalTimeThreshold
     */
    setTouchTotalTimeThreshold(touchTotalTimeThreshold: number): any

    /**
     * Immediately stops inner container scroll initiated by any of the "scrollTo*" member functions
     */
    stopAutoScroll(): any

    /**
     * The update callback handler.
     *
     * @param {Number} dt
     */
    update(dt: number): any
  }
}

declare namespace ccui {
  namespace ScrollView {


    /**
     * The both flag of ccui.ScrollView's direction.
     */
    enum DIR_BOTH { }

    /**
     * The horizontal flag of ccui.ScrollView's direction.
     */
    enum DIR_HORIZONTAL { }

    /**
     * The none flag of ccui.ScrollView's direction.
     */
    enum DIR_NONE { }

    /**
     * The vertical flag of ccui.ScrollView's direction.
     */
    enum DIR_VERTICAL { }

    /**
     * The flag autoscroll ended of ccui.ScrollView's event.
     */
    enum EVENT_AUTOSCROLL_ENDED { }

    /**
     * The flag bounce bottom of ccui.ScrollView's event.
     */
    enum EVENT_BOUNCE_BOTTOM { }

    /**
     * The flag bounce left of ccui.ScrollView's event.
     */
    enum EVENT_BOUNCE_LEFT { }

    /**
     * The flag bounce right of ccui.ScrollView's event.
     */
    enum EVENT_BOUNCE_RIGHT { }

    /**
     * The flag bounce top of ccui.ScrollView's event.
     */
    enum EVENT_BOUNCE_TOP { }

    /**
     * The flag container moved of ccui.ScrollView's event.
     */
    enum EVENT_CONTAINER_MOVED { }

    /**
     * The flag scroll to bottom of ccui.ScrollView's event.
     */
    enum EVENT_SCROLL_TO_BOTTOM { }

    /**
     * The flag scroll to left of ccui.ScrollView's event.
     */
    enum EVENT_SCROLL_TO_LEFT { }

    /**
     * The flag scroll to right of ccui.ScrollView's event.
     */
    enum EVENT_SCROLL_TO_RIGHT { }

    /**
     * The flag scroll to top of ccui.ScrollView's event.
     */
    enum EVENT_SCROLL_TO_TOP { }

    /**
     * The scrolling flag of ccui.ScrollView's event.
     */
    enum EVENT_SCROLLING { }

    /**
     * allocates and initializes a UIScrollView.
     *
     * @returns {ccui.ScrollView}
     */
    function create(): ccui.ScrollView
  }
}

declare namespace ccui {
  interface ListView  {

    /**
     * allocates and initializes a UIListView.
     * Constructor of ccui.ListView, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * add child to ListView
     *
     * @param {cc.Node} widget
     * @param {Number} zOrder
     * @param {Number|String} tag tag or name
     */
    addChild(widget: cc.Node, zOrder: number, tag: number | string): any

    /**
     * Adds callback function called ListView event triggered
     *
     * @param {Function} selector
     */
    addEventListener(selector: Function): any

    /**
     * Adds event listener to ccui.ListView.
     *
     * @param {Function} selector
     * @param {Object} target
     */
    addEventListenerListView(selector: Function, target: object): any

    /**
     * provides a public _doLayout function for Editor. it calls _doLayout.
     */
    doLayout(): any

    /**
     * Query the topmost item in horizontal list
     *
     * @returns {?ccui.Widget} A item instance.
     */
    getBottommostItemInCurrentView(): ccui.Widget

    /**
     * Query the center item
     *
     * @returns {?ccui.Widget} A item instance.
     */
    getCenterItemInCurrentView(): ccui.Widget

    /**
     * Query the closest item to a specific position in inner container.
     *
     * @param {cc.Point} targetPosition Specifies the target position in inner container's coordinates.
     * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
     *
     * @returns {?ccui.Widget} A item instance if list view is not empty. Otherwise, returns null.
     */
    getClosestItemToPosition(targetPosition: cc.Point, itemAnchorPoint: cc.Point): ccui.Widget

    /**
     * Query the closest item to a specific position in current view.
     * For instance, to find the item in the center of view, call 'getClosestItemToPositionInCurrentView(cc.p(0.5, 0.5), cc.p(0.5, 0.5))'.
     *
     * @param {cc.Point} positionRatioInView Specifies the target position with ratio in list view's content size.
     * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
     *
     * @returns {?ccui.Widget} A item instance if list view is not empty. Otherwise, returns null.
     */
    getClosestItemToPositionInCurrentView(positionRatioInView: cc.Point, itemAnchorPoint: cc.Point): ccui.Widget

    /**
     * Returns current selected index
     *
     * @returns {number}
     */
    getCurSelectedIndex(): number

    /**
     * Returns the "class name" of ccui.ListView.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Returns the index of item.
     *
     * @param {ccui.Widget} item the item which need to be checked.
     *
     * @returns {Number} the index of item.
     */
    getIndex(item: ccui.Widget): number

    /**
     * Returns a item whose index is same as the parameter.
     *
     * @param {Number} index
     *
     * @returns {ccui.Widget}
     */
    getItem(index: number): ccui.Widget

    /**
     * Returns the item container.
     *
     * @returns {Array}
     */
    getItems(): any[]

    /**
     * Returns the margin between each item.
     *
     * @returns {Number}
     */
    getItemsMargin(): number

    /**
     * Query the leftmost item in horizontal list
     *
     * @returns {?ccui.Widget} A item instance.
     */
    getLeftmostItemInCurrentView(): ccui.Widget

    /**
     * Query whether the magnetic out of boundary is allowed.
     *
     * @returns {boolean}
     */
    getMagneticAllowedOutOfBoundary(): boolean

    /**
     * Get magnetic type of ListView.
     *
     * @returns {number}
     */
    getMagneticType(): number

    /**
     * Query the rightmost item in horizontal list
     *
     * @returns {?ccui.Widget} A item instance.
     */
    getRightmostItemInCurrentView(): ccui.Widget

    /**
     * Query the topmost item in horizontal list
     *
     * @returns {?ccui.Widget} A item instance.
     */
    getTopmostItemInCurrentView(): ccui.Widget

    /**
     * Push back custom item into ccui.ListView.
     *
     * @param {ccui.Widget} item
     * @param {Number} index
     */
    insertCustomItem(item: ccui.Widget, index: number): any

    /**
     * Insert a default item(create by a cloned model) into ListView.
     *
     * @param {Number} index
     */
    insertDefaultItem(index: number): any

    /**
     * Intercept touch event, handle its child's touch event.
     *
     * @param {Number} eventType
     * @param {ccui.Widget} sender
     * @param {cc.Touch} touch
     */
    interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any

    /**
     * Jump to specific item
     *
     * @param {number} itemIndex Specifies the item's index
     * @param {cc.Point} positionRatioInView Specifies the position with ratio in list view's content size.
     * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
     */
    jumpToItem(itemIndex: number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point): any

    /**
     * Push back custom item into ListView.
     *
     * @param {ccui.Widget} item
     */
    pushBackCustomItem(item: ccui.Widget): any

    /**
     * Push back a default item(create by a cloned model) into ListView.
     */
    pushBackDefaultItem(): any

    /**
     * Refreshes list view.
     */
    refreshView(): any

    /**
     * Removes all children from ccui.ListView.
     */
    removeAllChildren(): any

    /**
     * Removes all children from ccui.ListView and do a cleanup all running actions depending on the cleanup parameter.
     *
     * @param {Boolean} cleanup
     */
    removeAllChildrenWithCleanup(cleanup: boolean): any

    /**
     * Removes all items from ccui.ListView.
     */
    removeAllItems(): any

    /**
     * remove child from ListView
     *
     * @param {cc.Node} widget
     * @param {Boolean} cleanup
     */
    removeChild(widget: cc.Node, cleanup: boolean): any

    /**
     * Removes a item whose index is same as the parameter.
     *
     * @param {Number} index
     */
    removeItem(index: number): any

    /**
     * Removes the last item of ccui.ListView.
     */
    removeLastItem(): any

    /**
     * Requests refresh list view.
     */
    requestRefreshView(): any

    /**
     * Scroll to specific item
     *
     * @param {number} itemIndex Specifies the item's index
     * @param {cc.Point} positionRatioInView Specifies the position with ratio in list view's content size.
     * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
     * @param {number} timeInSec Scroll time
     */
    scrollToItem(itemIndex: number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point, timeInSec: number): any

    /**
     * Changes scroll direction of ccui.ListView.
     *
     * @param {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH} dir
     */
    setDirection(dir: ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH): any

    /**
     * Changes the gravity of ListView.
     *
     * @param {ccui.ListView.GRAVITY_LEFT|ccui.ListView.GRAVITY_RIGHT|ccui.ListView.GRAVITY_CENTER_HORIZONTAL|ccui.ListView.GRAVITY_BOTTOM|ccui.ListView.GRAVITY_CENTER_VERTICAL} gravity
     */
    setGravity(gravity: ccui.ListView.GRAVITY_LEFT | ccui.ListView.GRAVITY_RIGHT | ccui.ListView.GRAVITY_CENTER_HORIZONTAL | ccui.ListView.GRAVITY_BOTTOM | ccui.ListView.GRAVITY_CENTER_VERTICAL): any

    /**
     * Sets a item model for ListView. A model will be cloned for adding default item.
     *
     * @param {ccui.Widget} model
     */
    setItemModel(model: ccui.Widget): any

    /**
     * Changes the margin between each item.
     *
     * @param {Number} margin
     */
    setItemsMargin(margin: number): any

    /**
     * Set magnetic allowed out of boundary.
     *
     * @param {boolean} magneticAllowedOutOfBoundary
     */
    setMagneticAllowedOutOfBoundary(magneticAllowedOutOfBoundary: boolean): any

    /**
     * Set magnetic type of ListView.
     *
     * @param {ccui.ListView.MAGNETIC_NONE|ccui.ListView.MAGNETIC_CENTER|ccui.ListView.MAGNETIC_BOTH_END|ccui.ListView.MAGNETIC_LEFT|ccui.ListView.MAGNETIC_RIGHT|ccui.ListView.MAGNETIC_TOP|ccui.ListView.MAGNETIC_BOTTOM} magneticType
     */
    setMagneticType(magneticType: ccui.ListView.MAGNETIC_NONE | ccui.ListView.MAGNETIC_CENTER | ccui.ListView.MAGNETIC_BOTH_END | ccui.ListView.MAGNETIC_LEFT | ccui.ListView.MAGNETIC_RIGHT | ccui.ListView.MAGNETIC_TOP | ccui.ListView.MAGNETIC_BOTTOM): any
  }
}

declare namespace ccui {
  namespace ListView {


    /**
     * The flag selected item of ccui.ListView's event.
     */
    enum EVENT_SELECTED_ITEM { }

    /**
     * The bottom flag of ccui.ListView's gravity.
     */
    enum GRAVITY_BOTTOM { }

    /**
     * The center horizontal flag of ccui.ListView's gravity.
     */
    enum GRAVITY_CENTER_HORIZONTAL { }

    /**
     * The center vertical flag of ccui.ListView's gravity.
     */
    enum GRAVITY_CENTER_VERTICAL { }

    /**
     * The left flag of ccui.ListView's gravity.
     */
    enum GRAVITY_LEFT { }

    /**
     * The right flag of ccui.ListView's gravity.
     */
    enum GRAVITY_RIGHT { }

    /**
     * The top flag of ccui.ListView's gravity.
     */
    enum GRAVITY_TOP { }

    /**
     * The flag of ccui.ListView's magnetic both end type.
     * ListView tries to align its items in left or right end if it is horizontal, top or bottom in vertical.
     * The aligning side (left or right, top or bottom) is determined by user's scroll direction.
     */
    enum MAGNETIC_BOTH_END { }

    /**
     * The flag of ccui.ListView's magnetic bottom type.
     */
    enum MAGNETIC_BOTTOM { }

    /**
     * The flag of ccui.ListView's magnetic center type.
     * ListView tries to align its items in center of current view.
     */
    enum MAGNETIC_CENTER { }

    /**
     * The flag of ccui.ListView's magnetic left type.
     */
    enum MAGNETIC_LEFT { }

    /**
     * The flag of ccui.ListView's magnetic none type.
     */
    enum MAGNETIC_NONE { }

    /**
     * The flag of ccui.ListView's magnetic right type.
     */
    enum MAGNETIC_RIGHT { }

    /**
     * The flag of ccui.ListView's magnetic top type.
     */
    enum MAGNETIC_TOP { }

    /**
     * The flag selected item end of ccui.ListView's event.
     */
    enum ON_SELECTED_ITEM_END { }

    /**
     * The flag selected item start of ccui.ListView's event.
     */
    enum ON_SELECTED_ITEM_START { }

    /**
     * allocates and initializes a UIListView.
     */
    function create(): any
  }
}

declare namespace ccui {
  interface PageView  {

    /**
     * Allocates and initializes a UIPageView.
     * Constructor of ccui.PageView. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
     */
    constructor()


    /**
     * Adds event listener to ccui.PageView.
     *
     * @param {Function} selector
     * @param {Object} target
     */
    addEventListenerPageView(selector: Function, target: object): any

    /**
     * Insert a page into the end of PageView.
     *
     * @param {ccui.Widget} page Page to be inserted.
     */
    addPage(page: ccui.Widget): any

    /**
     * Add a widget to a page of PageView.
     *
     * @param {ccui.Widget} widget widget to be added to PageView.
     * @param {number} pageIdx index of page.
     * @param {Boolean} forceCreate if force create and there is no page exist, PageView would create a default page for adding widget.
     */
    addWidgetToPage(widget: ccui.Widget, pageIdx: number, forceCreate: boolean): any

    /**
     * Returns current page index
     *
     * @returns {number}
     */
    getCurPageIndex(): number

    /**
     * Returns current page index
     *
     * @returns {number}
     */
    getCurrentPageIndex(): number

    /**
     * Returns user defined scroll page threshold.
     */
    getCustomScrollThreshold(): any

    /**
     * Returns the "class name" of ccui.PageView.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Query page indicator state.
     *
     * @returns {boolean} True if page indicator is enabled, false otherwise.
     */
    getIndicatorEnabled(): boolean

    /**
     * Get the color of page indicator's index nodes.
     *
     * @returns {cc.Color}
     */
    getIndicatorIndexNodesColor(): cc.Color

    /**
     * Get the scale of page indicator's index nodes.
     *
     * @returns {Number}
     */
    getIndicatorIndexNodesScale(): number

    /**
     * Get the page indicator's position.
     *
     * @returns {cc.Point}
     */
    getIndicatorPosition(): cc.Point

    /**
     * Get the page indicator's position as anchor point.
     *
     * @returns {cc.Point}
     */
    getIndicatorPositionAsAnchorPoint(): cc.Point

    /**
     * Get the color of page indicator's selected index.
     *
     * @returns {cc.Color}
     */
    getIndicatorSelectedIndexColor(): cc.Color

    /**
     * Get the space between page indicator's index nodes.
     *
     * @returns {number}
     */
    getIndicatorSpaceBetweenIndexNodes(): number

    /**
     * Returns a page from PageView by index
     *
     * @param {Number} index
     *
     * @returns {ccui.Layout}
     */
    getPage(index: number): ccui.Layout

    /**
     * Returns all pages of PageView
     *
     * @returns {Array}
     */
    getPages(): any[]

    /**
     * Insert a page into PageView at a given index.
     *
     * @param {ccui.Widget} page Page to be inserted.
     * @param {number} idx A given index.
     */
    insertPage(page: ccui.Widget, idx: number): any

    /**
     * Queries whether we are using user defined scroll page threshold or not
     */
    isUsingCustomScrollThreshold(): any

    /**
     * Removes all pages from PageView
     */
    removeAllPages(): any

    /**
     * Removes a page from PageView.
     *
     * @param {ccui.Widget} page Page to be removed.
     */
    removePage(page: ccui.Widget): any

    /**
     * Removes a page at index of PageView.
     *
     * @param {number} index A given index.
     */
    removePageAtIndex(index: number): any

    /**
     * scroll PageView to index.
     *
     * @param {number} idx A given index in the PageView. Index start from 0 to pageCount -1.
     */
    scrollToItem(idx: number): any

    /**
     * scroll PageView to index.
     *
     * @param {number} idx A given index in the PageView. Index start from 0 to pageCount -1.
     */
    scrollToPage(idx: number): any

    /**
     * Jump to a page with a given index without scrolling.
     * This is the different between scrollToPage.
     *
     * @param {number} index A given index in PageView. Index start from 0 to pageCount -1.
     */
    setCurPageIndex(index: number): any

    /**
     * Jump to a page with a given index without scrolling.
     * This is the different between scrollToPage.
     *
     * @param {number} index A given index in PageView. Index start from 0 to pageCount -1.
     */
    setCurrentPageIndex(index: number): any

    /**
     * Set custom scroll threshold to page view. If you don't specify the value, the pageView will scroll when half page view width reached.
     *
     * @param {} threshold
     */
    setCustomScrollThreshold(threshold: any): any

    /**
     * Changes scroll direction of ccui.PageView.
     *
     * @param {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH} direction
     */
    setDirection(direction: ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH): any

    /**
     * Toggle page indicator enabled.
     *
     * @param {boolean} enabled True if enable page indicator, false otherwise.
     */
    setIndicatorEnabled(enabled: boolean): any

    /**
     * Set color of page indicator's index nodes.
     *
     * @param {cc.Color} color Color for indicator
     */
    setIndicatorIndexNodesColor(color: cc.Color): any

    /**
     * Set scale of page indicator's index nodes.
     *
     * @param {Number} scale Scale for indicator
     */
    setIndicatorIndexNodesScale(scale: number): any

    /**
     * Sets texture of indicator index nodes
     *
     * @param {String} texName
     * @param {ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE} texType
     */
    setIndicatorIndexNodesTexture(texName: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Set the page indicator's position in page view.
     *
     * @param {cc.Point} position The position in page view
     */
    setIndicatorPosition(position: cc.Point): any

    /**
     * Set the page indicator's position using anchor point.
     *
     * @param {cc.Point} positionAsAnchorPoint The position as anchor point.
     */
    setIndicatorPositionAsAnchorPoint(positionAsAnchorPoint: cc.Point): any

    /**
     * Set color of page indicator's selected index.
     *
     * @param {cc.Color} color Color for indicator
     */
    setIndicatorSelectedIndexColor(color: cc.Color): any

    /**
     * Set space between page indicator's index nodes.
     *
     * @param {number} spaceBetweenIndexNodes Space between nodes in pixel.
     */
    setIndicatorSpaceBetweenIndexNodes(spaceBetweenIndexNodes: number): any

    /**
     * Set using user defined scroll page threshold or not. If you set it to false, then the default scroll threshold is pageView.width / 2.
     *
     * @param {} flag
     */
    setUsingCustomScrollThreshold(flag: any): any
  }
}

declare namespace ccui {
  namespace PageView {


    /**
     * The right flag of ccui.PageView's auto scroll direction.
     */
    enum DIRECTION_LEFT { }

    /**
     * The right flag of ccui.PageView's auto scroll direction.
     */
    enum DIRECTION_RIGHT { }

    /**
     * The turning flag of ccui.PageView's event.
     */
    enum EVENT_TURNING { }

    /**
     * The left flag of ccui.PageView's touch direction.
     */
    enum TOUCH_DIR_LEFT { }

    /**
     * The right flag of ccui.PageView's touch direction.
     */
    enum TOUCH_DIR_RIGHT { }

    /**
     * allocates and initializes a UIPageView.
     *
     * @returns {ccui.PageView}
     */
    function create(): ccui.PageView
  }
}

declare namespace ccui {
  interface VBox  {

    /**
     * The constructor of ccui.VBox
     *
     * @param {cc.Size} size
     */
    constructor(size: cc.Size)


    /**
     * Initializes a VBox with size.
     *
     * @param {cc.Size} size
     *
     * @returns {boolean}
     */
    initWithSize(size: cc.Size): boolean
  }
}

declare namespace ccui {
  namespace VBox {



    /**
     * Creates a VBox
     *
     * @param {cc.Size} size
     *
     * @returns {ccui.VBox}
     */
    function create(size: cc.Size): ccui.VBox
  }
}

declare namespace ccui {
  interface LoadingBar  {

    /**
     * allocates and initializes a UILoadingBar.
     * Constructor of ccui.LoadingBar, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {string} textureName
     * @param {Number} percentage
     */
    constructor(textureName: string, percentage: number)

    /**
     * - The progress direction of loadingbar
     */
    direction: ccui.LoadingBar.TYPE_LEFT | ccui.LoadingBar.TYPE_RIGHT

    /**
     * - The current progress of loadingbar
     */
    percent: number

    /**
     * Returns cap insets for loadingBar.
     *
     * @returns {cc.Rect}
     */
    getCapInsets(): cc.Rect

    /**
     * Returns the "class name" of widget.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Returns the progress direction of LoadingBar.
     * LoadingBarTypeLeft means progress left to right, LoadingBarTypeRight otherwise.
     *
     * @returns {ccui.LoadingBar.TYPE_LEFT | ccui.LoadingBar.TYPE_RIGHT}
     */
    getDirection(): ccui.LoadingBar.TYPE_LEFT | ccui.LoadingBar.TYPE_RIGHT

    /**
     * Returns the progress direction of LoadingBar.
     *
     * @returns {number} percent value from 1 to 100.
     */
    getPercent(): number

    /**
     * Returns the renderer of ccui.LoadingBar
     *
     * @returns {cc.Node}
     */
    getVirtualRenderer(): cc.Node

    /**
     * Returns the texture size of renderer.
     *
     * @returns {cc.Size|*}
     */
    getVirtualRendererSize(): cc.Size | any

    /**
     * Ignore the LoadingBar's custom size, if ignore is true that LoadingBar will ignore it's custom size, use renderer's content size, false otherwise.
     *
     * @param {Boolean} ignore
     */
    ignoreContentAdaptWithSize(ignore: boolean): any

    /**
     * Returns LoadingBar is using scale9 renderer or not..
     *
     * @returns {Boolean}
     */
    isScale9Enabled(): boolean

    /**
     * Loads texture for LoadingBar.
     *
     * @param {String} texture
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadTexture(texture: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Sets capinsets for LoadingBar, if LoadingBar is using scale9 renderer.
     *
     * @param {cc.Rect} capInsets
     */
    setCapInsets(capInsets: cc.Rect): any

    /**
     * Sets the contentSize of ccui.LoadingBar
     *
     * @param {Number|cc.Size} contentSize
     * @param {Number} height
     */
    setContentSize(contentSize: number | cc.Size, height: number): any

    /**
     * Changes the progress direction of LoadingBar.
     * LoadingBarTypeLeft means progress left to right, LoadingBarTypeRight otherwise.
     *
     * @param {ccui.LoadingBar.TYPE_LEFT | ccui.LoadingBar.TYPE_RIGHT} dir
     */
    setDirection(dir: ccui.LoadingBar.TYPE_LEFT | ccui.LoadingBar.TYPE_RIGHT): any

    /**
     * The current progress of loadingBar
     *
     * @param {number} percent percent value from 1 to 100.
     */
    setPercent(percent: number): any

    /**
     * Sets if LoadingBar is using scale9 renderer.
     *
     * @param {Boolean} enabled
     */
    setScale9Enabled(enabled: boolean): any
  }
}

declare namespace ccui {
  namespace LoadingBar {


    /**
     * The zOrder value of ccui.LoadingBar's renderer.
     */
    enum RENDERER_ZORDER { }

    /**
     * The left direction of ccui.LoadingBar.
     */
    enum TYPE_LEFT { }

    /**
     * The right direction of ccui.LoadingBar.
     */
    enum TYPE_RIGHT { }

    /**
     * Allocates and initializes a UILoadingBar.
     *
     * @param {string} textureName
     * @param {Number} percentage
     *
     * @returns {ccui.LoadingBar}
     */
    function create(textureName: string, percentage: number): ccui.LoadingBar
  }
}

declare namespace ccui {
  interface RichText  {

    /**
     * create a rich text
     * Constructor of ccui.RichText. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     */
    constructor()


    /**
     * Formats richText's renderer.
     */
    formatRenderers(): any

    /**
     * Formats the richText's content.
     */
    formatText(): any

    /**
     * Gets the content size of ccui.RichText
     *
     * @returns {cc.Size}
     */
    getContentSize(): cc.Size

    /**
     * Returns the class name of ccui.RichText.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Returns the renderer container's content size.
     *
     * @returns {cc.Size}
     */
    getVirtualRendererSize(): cc.Size

    /**
     * Ignore the richText's custom size, If ignore is true that richText will ignore it's custom size, use renderer's content size, false otherwise.
     *
     * @param {Boolean} ignore
     */
    ignoreContentAdaptWithSize(ignore: boolean): any

    /**
     * Insert a element
     *
     * @param {ccui.RichElement} element
     * @param {Number} index
     */
    insertElement(element: ccui.RichElement, index: number): any

    /**
     * Push a element
     *
     * @param {ccui.RichElement} element
     */
    pushBackElement(element: ccui.RichElement): any

    /**
     * Remove element
     *
     * @param {ccui.RichElement} element
     */
    removeElement(element: ccui.RichElement): any

    /**
     * Sets anchor point
     *
     * @param {cc.Point} pt
     */
    setAnchorPoint(pt: cc.Point): any

    /**
     * Allow child renderer to be affected by ccui.RichText's opacity
     *
     * @param {boolean} value
     */
    setCascadeOpacityEnabled(value: boolean): any

    /**
     * This allow the RichText layout to break line on space only like in Latin text format
     * by default the property is false, which break the line on characters
     *
     * @param {} value
     */
    setLineBreakOnSpace(value: any): any

    /**
     * Set the renderer horizontal flow alignment for the Control
     * although it is named TextHorizontalAlignment, it should work with all type of renderer too.
     * NOTE: we should rename this to setHorizontalAlignment directly
     *
     * @param {Number} value - example cc.TEXT_ALIGNMENT_RIGHT
     */
    setTextHorizontalAlignment(value: number): any

    /**
     * Set the renderer vertical flow alignment for the Control
     * although it is named TextVerticalAlignment, it should work with all type of renderer too.
     *
     * @param {Number} value - example cc.VERTICAL_TEXT_ALIGNMENT_CENTER
     */
    setTextVerticalAlignment(value: number): any

    /**
     * Sets vertical space
     *
     * @param {Number} space
     */
    setVerticalSpace(space: number): any
  }
}

declare namespace ccui {
  namespace RichText {



    /**
     * create a rich text
     *
     * @returns {RichText}
     */
    function create(): RichText
  }
}

declare namespace ccui {
  interface Slider  {

    /**
     * allocates and initializes a UISlider.
     * Constructor of ccui.Slider. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {} barTextureName
     * @param {} normalBallTextureName
     * @param {} resType
     */
    constructor(barTextureName: any, normalBallTextureName: any, resType: any)

    /**
     * - The current progress of loadingbar
     */
    percent: number

    /**
     * Adds a callback
     *
     * @param {Function} selector
     * @param {Object} target
     */
    addEventListener(selector: Function, target: object): any

    /**
     * add event listener
     *
     * @param {Function} selector
     * @param {Object} target
     */
    addEventListenerSlider(selector: Function, target: object): any

    /**
     * Returns cap insets for slider.
     *
     * @returns {cc.Rect}
     */
    getCapInsetsBarRenderer(): cc.Rect

    /**
     * Returns cap insets of ProgressBar for slider.
     *
     * @returns {cc.Rect}
     */
    getCapInsetsProgressBarRenderer(): cc.Rect

    /**
     * Returns the "class name" of ccui.LoadingBar.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Gets the progress direction of slider.
     *
     * @returns {number}
     */
    getPercent(): number

    /**
     * Returns the bar renderer.
     *
     * @returns {cc.Node}
     */
    getVirtualRenderer(): cc.Node

    /**
     * Returns the content size of bar renderer.
     *
     * @returns {cc.Size}
     */
    getVirtualRendererSize(): cc.Size

    /**
     * test the point whether location in loadingBar's bounding box.
     *
     * @param {cc.Point} pt
     *
     * @returns {boolean}
     */
    hitTest(pt: cc.Point): boolean

    /**
     * override "ignoreContentAdaptWithSize" method of widget.
     *
     * @param {Boolean} ignore
     */
    ignoreContentAdaptWithSize(ignore: boolean): any

    /**
     * Returns slider is using scale9 renderer or not.
     *
     * @returns {Boolean}
     */
    isScale9Enabled(): boolean

    /**
     * Loads texture for slider bar.
     *
     * @param {String} fileName
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadBarTexture(fileName: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Loads dark state texture for slider progress bar.
     *
     * @param {String} fileName
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadProgressBarTexture(fileName: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Load dark state texture for slider ball.
     *
     * @param {String} disabled
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadSlidBallTextureDisabled(disabled: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Loads normal state texture for slider ball.
     *
     * @param {String} normal
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadSlidBallTextureNormal(normal: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Loads selected state texture for slider ball.
     *
     * @param {String} pressed
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadSlidBallTexturePressed(pressed: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Loads textures for slider ball.
     *
     * @param {String} normal
     * @param {String} pressed
     * @param {String} disabled
     * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
     */
    loadSlidBallTextures(normal: string, pressed: string, disabled: string, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE): any

    /**
     * Sets capinsets of ProgressBar for slider, if slider is using scale9 renderer.
     *
     * @param {cc.Rect} capInsets
     */
    setCapInsetProgressBarRenderer(capInsets: cc.Rect): any

    /**
     * Sets capinsets for slider, if slider is using scale9 renderer.
     *
     * @param {cc.Rect} capInsets
     */
    setCapInsets(capInsets: cc.Rect): any

    /**
     * Sets capinsets for slider's renderer, if slider is using scale9 renderer.
     *
     * @param {cc.Rect} capInsets
     */
    setCapInsetsBarRenderer(capInsets: cc.Rect): any

    /**
     * Changes the progress direction of slider.
     *
     * @param {number} percent
     */
    setPercent(percent: number): any

    /**
     * Sets if slider is using scale9 renderer.
     *
     * @param {Boolean} able
     */
    setScale9Enabled(able: boolean): any
  }
}

declare namespace ccui {
  namespace Slider {


    /**
     * The zOrder value of ccui.Slider's ball renderer.
     */
    enum BALL_RENDERER_ZORDER { }

    /**
     * The zOrder value of ccui.Slider's base bar renderer.
     */
    enum BASEBAR_RENDERER_ZORDER { }

    /**
     * The percent change event flag of ccui.Slider.
     */
    enum EVENT_PERCENT_CHANGED { }

    /**
     * The zOrder value of ccui.Slider's progress bar renderer.
     */
    enum PROGRESSBAR_RENDERER_ZORDER { }

    /**
     * allocates and initializes a UISlider.
     *
     * @param {} barTextureName
     * @param {} normalBallTextureName
     * @param {} resType
     *
     * @returns {ccui.Slider}
     */
    function create(barTextureName: any, normalBallTextureName: any, resType: any): ccui.Slider
  }
}

declare namespace ccui {
  interface Text  {

    /**
     * allocates and initializes a UILabel.
     * Constructor of ccui.Text. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {String} textContent
     * @param {String} fontName
     * @param {Number} fontSize
     */
    constructor(textContent: string, fontName: string, fontSize: number)

    /**
     * - Height of the bounding area of label, the real content height is limited by boundingHeight
     */
    boundingHeight: number

    /**
     * - Width of the bounding area of label, the real content width is limited by boundingWidth
     */
    boundingWidth: number

    /**
     * - The label font with a style string: e.g. "18px Verdana"
     */
    font: string

    /**
     * - The label font name
     */
    fontName: string

    /**
     * - The label font size
     */
    fontSize: number

    /**
     * - The content string of the label
     */
    string: string

    /**
     * - <@readonly> The content string length of the label
     */
    stringLength: number

    /**
     * - Horizontal Alignment of label, cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT
     */
    textAlign: number

    /**
     * - Indicate whether the label will scale when touching
     */
    touchScaleEnabled: boolean

    /**
     * - Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM
     */
    verticalAlign: number

    /**
     * Disables renderer's effect.
     */
    disableEffect(): any

    /**
     * Enables glow color
     *
     * @param {} glowColor
     */
    enableGlow(glowColor: any): any

    /**
     * Enables outline style and sets outline's color and size.
     *
     * @param {cc.Color} outlineColor
     * @param {cc.Size} outlineSize
     */
    enableOutline(outlineColor: cc.Color, outlineSize: cc.Size): any

    /**
     * Enables shadow style and sets color, offset and blur radius styles.
     *
     * @param {cc.Color} shadowColor
     * @param {cc.Size} offset
     * @param {Number} blurRadius
     */
    enableShadow(shadowColor: cc.Color, offset: cc.Size, blurRadius: number): any

    /**
     * Returns the "class name" of ccui.Text.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Returns font name of ccui.Text.
     *
     * @returns {string}
     */
    getFontName(): string

    /**
     * Returns font Size of ccui.Text
     *
     * @returns {Number}
     */
    getFontSize(): number

    /**
     * Gets the string value of ccui.Text.
     *
     * @returns {String}
     */
    getString(): string

    /**
     * Gets the string length of ccui.Text.
     *
     * @returns {Number}
     */
    getStringLength(): number

    /**
     * Gets the string value of ccui.Text.
     *
     * @returns {String}
     */
    getStringValue(): string

    /**
     * Returns renderer's dimension.
     *
     * @returns {cc.Size}
     */
    getTextAreaSize(): cc.Size

    /**
     * Returns Horizontal Alignment of label
     *
     * @returns {TEXT_ALIGNMENT_LEFT|TEXT_ALIGNMENT_CENTER|TEXT_ALIGNMENT_RIGHT}
     */
    getTextHorizontalAlignment(): cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT

    /**
     * Gets text vertical alignment.
     *
     * @returns {VERTICAL_TEXT_ALIGNMENT_TOP|VERTICAL_TEXT_ALIGNMENT_CENTER|VERTICAL_TEXT_ALIGNMENT_BOTTOM}
     */
    getTextVerticalAlignment(): cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM

    /**
     * Returns the type of ccui.Text.
     *
     * @returns {null}
     */
    getType(): null

    /**
     * Returns the renderer of ccui.Text.
     *
     * @returns {cc.Node}
     */
    getVirtualRenderer(): cc.Node

    /**
     * Returns the renderer's content size.
     *
     * @returns {cc.Size}
     */
    getVirtualRendererSize(): cc.Size

    /**
     * Gets the touch scale enabled of label.
     *
     * @returns {Boolean}
     */
    isTouchScaleChangeEnabled(): boolean

    /**
     * Sets font name
     *
     * @param {} name
     *
     * @returns {String} name
     */
    setFontName(name: any): string

    /**
     * Sets fontSize
     *
     * @param {Number} size
     */
    setFontSize(size: number): any

    /**
     * Changes the value of ccui.Text.
     *
     * @param {String} text
     */
    setString(text: string): any

    /**
     * Changes the value of ccui.Text.
     *
     * @param {String} text
     */
    setText(text: string): any

    /**
     * Sets text Area Size
     *
     * @param {cc.Size} size
     */
    setTextAreaSize(size: cc.Size): any

    /**
     * Sets Horizontal Alignment of cc.LabelTTF
     *
     * @param {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT} alignment Horizontal Alignment
     */
    setTextHorizontalAlignment(alignment: cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT): any

    /**
     * Sets Vertical Alignment of label
     *
     * @param {cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM} alignment
     */
    setTextVerticalAlignment(alignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM): any

    /**
     * Sets the touch scale enabled of label.
     *
     * @param {Boolean} enable
     */
    setTouchScaleChangeEnabled(enable: boolean): any
  }
}

declare namespace ccui {
  namespace Text {


    /**
     * The zOrder value of ccui.Text's renderer.
     */
    enum RENDERER_ZORDER { }

  }
}

declare namespace ccui {
  interface TextAtlas  {

    /**
     * Allocates and initializes a UILabelAtlas.
     * Constructor of ccui.TextAtlas, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {String} stringValue
     * @param {String} charMapFile
     * @param {number} itemWidth
     * @param {number} itemHeight
     * @param {String} startCharMap
     */
    constructor(stringValue: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string)

    /**
     * - Content string of the label
     */
    string: string

    /**
     * Returns the "class name" of ccui.TextAtlas.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * get string value for ui text atlas.
     *
     * @returns {String}
     */
    getString(): string

    /**
     * Returns the length of string.
     *
     * @returns {*|Number|long|int}
     */
    getStringLength(): any | number | number | number

    /**
     * get string value for text atlas.
     *
     * @returns {String}
     */
    getStringValue(): string

    /**
     * Returns the renderer of ccui.TextAtlas.
     *
     * @returns {cc.Node}
     */
    getVirtualRenderer(): cc.Node

    /**
     * Returns the renderer's content size
     *
     * @returns {cc.Size}
     */
    getVirtualRendererSize(): cc.Size

    /**
     * initializes the UILabelAtlas with a string, a char map file(the atlas), the width and height of each element and the starting char of the atlas
     *
     * @param {String} stringValue
     * @param {String} charMapFile
     * @param {number} itemWidth
     * @param {number} itemHeight
     * @param {String} startCharMap
     */
    setProperty(stringValue: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string): any

    /**
     * Sets string value for ui text atlas.
     *
     * @param {String} value
     */
    setString(value: string): any

    /**
     * Sets string value for text atlas.
     *
     * @param {String} value
     */
    setStringValue(value: string): any
  }
}

declare namespace ccui {
  namespace TextAtlas {


    /**
     * The zOrder value of ccui.TextAtlas's renderer.
     */
    enum RENDERER_ZORDER { }

    /**
     * allocates and initializes a UILabelAtlas.
     *
     * @param {} stringValue
     * @param {} charMapFile
     * @param {} itemWidth
     * @param {} itemHeight
     * @param {} startCharMap
     *
     * @returns {ccui.TextAtlas}
     */
    function create(stringValue: any, charMapFile: any, itemWidth: any, itemHeight: any, startCharMap: any): ccui.TextAtlas
  }
}

declare namespace ccui {
  interface TextField  {

    /**
     * allocates and initializes a UITextField.
     * Constructor of ccui.TextField. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
     *
     * @param {string} placeholder
     * @param {string} fontName
     * @param {Number} fontSize
     */
    constructor(placeholder: string, fontName: string, fontSize: number)

    /**
     * - The text field font with a style string: e.g. "18px Verdana"
     */
    font: string

    /**
     * - The text field font name
     */
    fontName: string

    /**
     * - The text field font size
     */
    fontSize: number

    /**
     * - The max length of the text field
     */
    maxLength: number

    /**
     * - Indicate whether max length limit is enabled
     */
    maxLengthEnabled: boolean

    /**
     * - Indicate whether the text field is for entering password
     */
    passwordEnabled: boolean

    /**
     * - The place holder of the text field
     */
    placeHolder: string

    /**
     * - The content string of the label
     */
    string: string

    /**
     * Adds event listener callback.
     *
     * @param {Object} target
     * @param {Function} selector
     */
    addEventListener(target: object, selector: Function): any

    /**
     * Adds event listener to cuci.TextField.
     *
     * @param {Object} target
     * @param {Function} selector
     */
    addEventListenerTextField(target: object, selector: Function): any

    /**
     * Open keyboard and receive input text.
     *
     * @returns {Boolean}
     */
    attachWithIME(): boolean

    /**
     * detach with IME
     */
    didNotSelectSelf(): any

    /**
     * Returns whether attach with IME.
     *
     * @returns {Boolean}
     */
    getAttachWithIME(): boolean

    /**
     * Returns the delete backward of ccui.TextField.
     *
     * @returns {Boolean}
     */
    getDeleteBackward(): boolean

    /**
     * Returns the "class name" of ccui.TextField.
     *
     * @returns {string}
     */
    getDescription(): string

    /**
     * Returns whether detach with IME.
     *
     * @returns {Boolean}
     */
    getDetachWithIME(): boolean

    /**
     * Returns font name of ccui.TextField.
     *
     * @returns {String} font name
     */
    getFontName(): string

    /**
     * Gets font size of ccui.TextField.
     *
     * @returns {Number} size
     */
    getFontSize(): number

    /**
     * Returns insertText string of ccui.TextField.
     *
     * @returns {String}
     */
    getInsertText(): string

    /**
     * Returns the max length of ccui.TextField.
     *
     * @returns {number} length
     */
    getMaxLength(): number

    /**
     * Returns the password style character.
     *
     * @returns {String}
     */
    getPasswordStyleText(): string

    /**
     * Returns the placeholder string.
     *
     * @returns {String}
     */
    getPlaceHolder(): string

    /**
     * Returns the color of ccui.TextField's place holder.
     *
     * @returns {cc.Color}
     */
    getPlaceHolderColor(): cc.Color

    /**
     * Returns string value of ccui.TextField.
     *
     * @returns {String}
     */
    getString(): string

    /**
     * Returns the length of ccui.TextField.
     *
     * @returns {Number}
     */
    getStringLength(): number

    /**
     * Returns textField string value
     *
     * @returns {String}
     */
    getStringValue(): string

    /**
     * Returns touch size of ccui.TextField.
     *
     * @returns {cc.Size}
     */
    getTouchSize(): cc.Size

    /**
     * Returns the renderer of ccui.TextField.
     *
     * @returns {cc.Node}
     */
    getVirtualRenderer(): cc.Node

    /**
     * Returns the ccui.TextField's content size.
     *
     * @returns {cc.Size}
     */
    getVirtualRendererSize(): cc.Size

    /**
     * Checks a point if is in ccui.TextField's space
     *
     * @param {cc.Point} pt
     *
     * @returns {boolean}
     */
    hitTest(pt: cc.Point): boolean

    /**
     * Returns Whether to open string length limit.
     *
     * @returns {Boolean}
     */
    isMaxLengthEnabled(): boolean

    /**
     * Returns whether to open setting string as password character.
     *
     * @returns {Boolean}
     */
    isPasswordEnabled(): boolean

    /**
     * Calls parent class' onEnter and schedules update function.
     */
    onEnter(): any

    /**
     * The touch began event callback handler.
     *
     * @param {cc.Point} touchPoint
     * @param {} unusedEvent
     */
    onTouchBegan(touchPoint: cc.Point, unusedEvent: any): any

    /**
     * Sets attach with IME.
     *
     * @param {Boolean} attach
     */
    setAttachWithIME(attach: boolean): any

    /**
     * Sets the delete backward of ccui.TextField.
     *
     * @param {Boolean} deleteBackward
     */
    setDeleteBackward(deleteBackward: boolean): any

    /**
     * Sets detach with IME.
     *
     * @param {Boolean} detach
     */
    setDetachWithIME(detach: boolean): any

    /**
     * Sets font name for ccui.TextField
     *
     * @param {String} name
     */
    setFontName(name: string): any

    /**
     * Sets font size for ccui.TextField.
     *
     * @param {Number} size
     */
    setFontSize(size: number): any

    /**
     * Sets insertText string to ccui.TextField.
     *
     * @param {String} insertText
     */
    setInsertText(insertText: string): any

    /**
     * Sets the max length of ccui.TextField. Only when you turn on the string length limit, it is valid.
     *
     * @param {number} length
     */
    setMaxLength(length: number): any

    /**
     * Sets Whether to open string length limit for ccui.TextField.
     *
     * @param {Boolean} enable
     */
    setMaxLengthEnabled(enable: boolean): any

    /**
     * Sets whether to open setting string as password character.
     *
     * @param {Boolean} enable
     */
    setPasswordEnabled(enable: boolean): any

    /**
     * Sets the password style character, Only when you turn on setting string as password character, it is valid.
     *
     * @param {} styleText
     */
    setPasswordStyleText(styleText: any): any

    /**
     * Sets the placeholder string.
     * display this string if string equal "".
     *
     * @param {String} value
     */
    setPlaceHolder(value: string): any

    /**
     * Sets the place holder color to ccui.TextField.
     *
     * @param {} color
     */
    setPlaceHolderColor(color: any): any

    /**
     * Changes the string value of textField.
     *
     * @param {String} text
     */
    setString(text: string): any

    /**
     * Changes the string value of textField.
     *
     * @param {String} text
     */
    setText(text: string): any

    /**
     * Sets the text area size to ccui.TextField.
     *
     * @param {cc.Size} size
     */
    setTextAreaSize(size: cc.Size): any

    /**
     * Sets the text color to ccui.TextField
     *
     * @param {} textColor
     */
    setTextColor(textColor: any): any

    /**
     * Sets the text horizontal alignment of ccui.TextField.
     *
     * @param {} alignment
     */
    setTextHorizontalAlignment(alignment: any): any

    /**
     * Sets the text vertical alignment of ccui.TextField.
     *
     * @param {} alignment
     */
    setTextVerticalAlignment(alignment: any): any

    /**
     * Sets whether use touch area.
     *
     * @param {} enable
     */
    setTouchAreaEnabled(enable: any): any

    /**
     * Sets touch size of ccui.TextField.
     *
     * @param {cc.Size} size
     */
    setTouchSize(size: cc.Size): any
  }
}

declare namespace ccui {
  namespace TextField {


    /**
     * The attach with IME event flag of ccui.TextField
     */
    enum EVENT_ATTACH_WITH_IME { }

    /**
     * The delete backward event flag of ccui.TextField
     */
    enum EVENT_DELETE_BACKWARD { }

    /**
     * The detach with IME event flag of ccui.TextField
     */
    enum EVENT_DETACH_WITH_IME { }

    /**
     * The insert text event flag of ccui.TextField
     */
    enum EVENT_INSERT_TEXT { }

    /**
     * The zOrder value of ccui.TextField's renderer.
     */
    enum RENDERER_ZORDER { }

    /**
     * Creates a ccui.TextField.
     *
     * @param {String} placeholder
     * @param {String} fontName
     * @param {Number} fontSize
     *
     * @returns {ccui.TextField}
     */
    function create(placeholder: string, fontName: string, fontSize: number): ccui.TextField
  }
}

declare namespace ccui {
  interface VideoPlayer  {

    /**
     *
     */
    constructor()

    /**
     * - The video path
     */
    path: string

    /**
     * Get the video path
     *
     * @returns {String}
     */
    getURL(): string

    /**
     * Determine whether already full screen
     */
    isFullScreenEnabled(): any

    /**
     * Whether the video is playing
     *
     * @returns {boolean}
     */
    isPlaying(): boolean

    /**
     * Trigger playing events
     */
    onPlayEvent(): any

    /**
     * Pause the video
     */
    pause(): any

    /**
     * Play the video
     */
    play(): any

    /**
     * Delete events
     *
     * @param {ccui.VideoPlayer.EventType} event
     */
    removeEventListener(event: any): any

    /**
     * Resume the video
     */
    resume(): any

    /**
     * Jump to the specified point in time
     *
     * @param {Number} sec
     */
    seekTo(sec: number): any

    /**
     * The binding event
     *
     * @param {ccui.VideoPlayer.EventType} event
     * @param {Function} callback
     */
    setEventListener(event: any, callback: Function): any

    /**
     * Set whether the full screen
     * May appear inconsistent in different browsers
     *
     * @param {boolean} enable
     */
    setFullScreenEnabled(enable: boolean): any

    /**
     * Whether to keep the aspect ratio
     *
     * @param {} enable
     */
    setKeepAspectRatioEnabled(enable: any): any

    /**
     * Set the video address
     * Automatically replace extname
     * All supported video formats will be added to the video
     *
     * @param {String} address
     */
    setURL(address: string): any

    /**
     * Stop the video
     */
    stop(): any
  }
}

declare namespace ccui {
  namespace VideoPlayer {

    /**
     * The VideoPlayer support list of events
     */
    let EventType: any


  }
}

declare namespace ccui {
  interface WebView  {

    /**
     *
     */
    constructor()

    /**
     * - The url to be shown in the web view
     */
    path: string

    /**
     * Determine whether to go back
     */
    canGoBack(): any

    /**
     * Determine whether to go forward
     */
    canGoForward(): any

    /**
     * remove node
     */
    cleanup(): any

    /**
     * In the webview execution within a period of js string
     *
     * @param {String} str
     */
    evaluateJS(str: string): any

    /**
     * go back
     */
    goBack(): any

    /**
     * go forward
     */
    goForward(): any

    /**
     * Load an URL
     *
     * @param {String} url
     */
    loadURL(url: string): any

    /**
     * Reload the WebView
     */
    reload(): any

    /**
     * Delete events
     *
     * @param {ccui.WebView.EventType} event
     */
    removeEventListener(event: any): any

    /**
     * Set the contentSize
     *
     * @param {Number} w
     * @param {Number} h
     */
    setContentSize(w: number, h: number): any

    /**
     * The binding event
     *
     * @param {ccui.WebView.EventType} event
     * @param {Function} callback
     */
    setEventListener(event: any, callback: Function): any

    /**
     * Limited scale
     */
    setScalesPageToFit(): any

    /**
     * Stop loading
     */
    stopLoading(): any
  }
}

declare namespace ccui {
  namespace WebView {

    /**
     * The WebView support list of events
     */
    let EventType: any


  }
}

declare namespace ccui {
  interface RichElement  {

    /**
     * Constructor of ccui.RichElement
     *
     * @param {} tag
     * @param {} color
     * @param {} opacity
     */
    constructor(tag: any, color: any, opacity: any)


  }
}

declare namespace ccui {
  namespace RichElement {


    /**
     * The custom type of rich element.
     */
    enum CUSTOM { }

    /**
     * The image type of rich element.
     */
    enum IMAGE { }

    /**
     * The text type of rich element.
     */
    enum TEXT { }

  }
}

declare namespace ccui {
  interface RichElementCustomNode  {

    /**
     * Constructor of ccui.RichElementCustomNode
     *
     * @param {Number} tag
     * @param {cc.Color} color
     * @param {Number} opacity
     * @param {cc.Node} customNode
     */
    constructor(tag: number, color: cc.Color, opacity: number, customNode: cc.Node)


  }
}

declare namespace ccui {
  namespace RichElementCustomNode {



    /**
     * Create a richElementCustomNode
     *
     * @param {Number} tag
     * @param {Number} color
     * @param {Number} opacity
     * @param {cc.Node} customNode
     *
     * @returns {ccui.RichElementCustomNode}
     */
    function create(tag: number, color: number, opacity: number, customNode: cc.Node): ccui.RichElementCustomNode
  }
}

declare namespace ccui {
  interface RichElementImage  {

    /**
     * Constructor of ccui.RichElementImage
     *
     * @param {Number} tag
     * @param {cc.Color} color
     * @param {Number} opacity
     * @param {String} filePath
     */
    constructor(tag: number, color: cc.Color, opacity: number, filePath: string)


  }
}

declare namespace ccui {
  namespace RichElementImage {



    /**
     * Create a richElementImage
     *
     * @param {Number} tag
     * @param {cc.Color} color
     * @param {Number} opacity
     * @param {String} filePath
     *
     * @returns {ccui.RichElementImage}
     */
    function create(tag: number, color: cc.Color, opacity: number, filePath: string): ccui.RichElementImage
  }
}

declare namespace ccui {
  interface RichElementText  {

    /**
     * Usage Example using FontDefinition:var rtEl = new ccui.RichElementText("tag", new cc.FontDefinition({
     * fillStyle: cc.color.BLACK,
     * fontName: "Arial",
     * fontSize: 12,
     * fontWeight: "bold",
     * fontStyle: "normal",
     * lineHeight: 14
     * }), 255, "Some Text");Constructor of ccui.RichElementText
     *
     * @param {Number} tag
     * @param {cc.Color|cc.FontDefinition} colorOrFontDef
     * @param {Number} opacity
     * @param {String} text
     * @param {String} fontName
     * @param {Number} fontSize
     */
    constructor(tag: number, colorOrFontDef: cc.Color | cc.FontDefinition, opacity: number, text: string, fontName: string, fontSize: number)


  }
}

declare namespace ccui {
  namespace RichElementText {



    /**
     * Create a richElementText
     *
     * @param {Number} tag
     * @param {cc.Color} color
     * @param {Number} opacity
     * @param {String} text
     * @param {String} fontName
     * @param {Number} fontSize
     *
     * @returns {ccui.RichElementText}
     */
    function create(tag: number, color: cc.Color, opacity: number, text: string, fontName: string, fontSize: number): ccui.RichElementText
  }
}

declare namespace ccui {
  interface helper  {

    /**
     * ccui.helper is the singleton object which is the Helper object contains some functions for seek widget
     */
    constructor()


  }
}

declare namespace ccui {
  namespace helper {



    /**
     * Refresh object and it's children layout state
     *
     * @param {cc.Node} rootNode
     */
    function doLayout(rootNode: cc.Node): any

    /**
     * restrict capInsetSize, when the capInsets' width is larger than the textureSize, it will restrict to 0,
     * the height goes the same way as width.
     *
     * @param {cc.Rect} capInsets
     * @param {cc.Size} textureSize
     */
    function restrictCapInsetRect(capInsets: cc.Rect, textureSize: cc.Size): any

    /**
     * Finds a widget whose action tag equals to param name from root widget.
     *
     * @param {ccui.Widget} root
     * @param {Number} tag
     *
     * @returns {ccui.Widget}
     */
    function seekActionWidgetByActionTag(root: ccui.Widget, tag: number): ccui.Widget

    /**
     * Finds a widget whose name equals to param name from root widget.
     *
     * @param {ccui.Widget} root
     * @param {String} name
     *
     * @returns {ccui.Widget}
     */
    function seekWidgetByName(root: ccui.Widget, name: string): ccui.Widget

    /**
     * Finds a widget whose name equals to param name from root widget.
     * RelativeLayout will call this method to find the widget witch is needed.
     *
     * @param {ccui.Widget} root
     * @param {String} name
     *
     * @returns {ccui.Widget}
     */
    function seekWidgetByRelativeName(root: ccui.Widget, name: string): ccui.Widget

    /**
     * Finds a widget whose tag equals to param tag from root widget.
     *
     * @param {ccui.Widget} root
     * @param {number} tag
     *
     * @returns {ccui.Widget}
     */
    function seekWidgetByTag(root: ccui.Widget, tag: number): ccui.Widget
  }
}

declare namespace ccui {
  interface linearHorizontalLayoutManager  {

    /**
     * ccui.linearHorizontalLayoutManager is a singleton object which is the linear horizontal layout manager for ccui.Layout
     */
    constructor()


  }
}

declare namespace ccui {
  interface linearVerticalLayoutManager  {

    /**
     * ccui.linearVerticalLayoutManager is a singleton object which is the linear vertical layout manager for ccui.Layout.
     */
    constructor()


  }
}

declare namespace ccui {
  interface relativeLayoutManager  {

    /**
     * ccui.relativeLayoutManager is the singleton object which is the relative layout manager for ccui.Layout, it has a _doLayout function to do layout.
     */
    constructor()


  }
}

declare namespace ClassManager {



}

declare namespace jsb {



}

declare namespace jsb {
  interface AssetsManager  {

    /**
     *
     *
     * @param {String} arg0
     * @param {String} arg1
     */
    constructor(arg0: string, arg1: string)


    /**
     *
     */
    checkUpdate(): any

    /**
     *
     *
     * @param {String} arg0
     * @param {String} arg1
     *
     * @returns {jsb.AssetsManager}
     */
    create(arg0: string, arg1: string): jsb.AssetsManager

    /**
     *
     */
    downloadFailedAssets(): any

    /**
     *
     *
     * @returns {object} jsb.Manifest
     */
    getLocalManifest(): object

    /**
     *
     *
     * @returns {jsb.Manifest}
     */
    getRemoteManifest(): jsb.Manifest

    /**
     *
     *
     * @returns {number} jsb.AssetsManager::State
     */
    getState(): number

    /**
     *
     *
     * @returns {String}
     */
    getStoragePath(): string

    /**
     *
     */
    update(): any
  }
}

declare namespace jsb {
  interface EventAssetsManager  {

    /**
     *
     */
    constructor()


    /**
     *
     *
     * @param {String} arg0
     * @param {cc.AssetsManager} arg1
     * @param {number} arg2 cc.EventAssetsManager::EventCode
     * @param {float} arg3
     * @param {float} arg4
     * @param {String} arg5
     * @param {String} arg6
     * @param {int} arg7
     * @param {int} arg8
     */
    EventAssetsManager(arg0: string, arg1: jsb.AssetsManager, arg2: number, arg3: number, arg4: number, arg5: string, arg6: string, arg7: number, arg8: number): any

    /**
     *
     *
     * @returns {String}
     */
    getAssetId(): string

    /**
     *
     *
     * @returns {cc.AssetsManager}
     */
    getAssetsManager(): jsb.AssetsManager

    /**
     *
     *
     * @returns {int}
     */
    getCURLECode(): number

    /**
     *
     *
     * @returns {int}
     */
    getCURLMCode(): number

    /**
     *
     *
     * @returns {number} cc.EventAssetsManager.EventCode
     */
    getEventCode(): number

    /**
     *
     *
     * @returns {String}
     */
    getMessage(): string

    /**
     *
     *
     * @returns {float}
     */
    getPercent(): number

    /**
     *
     *
     * @returns {float}
     */
    getPercentByFile(): number
  }
}

declare namespace jsb {
  interface EventListenerAssetsManager  {

    /**
     *
     */
    constructor()


    /**
     *
     *
     * @param {cc.AssetsManager} arg0
     * @param {function} arg1
     *
     * @returns {cc.EventListenerAssetsManager}
     */
    create(arg0: jsb.AssetsManager, arg1: Function): jsb.EventListenerAssetsManager

    /**
     *
     */
    EventListenerAssetsManager(): any

    /**
     *
     *
     * @param {cc.AssetsManager} arg0
     * @param {function} arg1
     *
     * @returns {bool}
     */
    init(arg0: jsb.AssetsManager, arg1: Function): boolean
  }
}

declare namespace jsb {
  interface fileUtils  {

    /**
     * ATTENTION: USE jsb.fileUtils INSTEAD OF jsb.FileUtils.
     * jsb.fileUtils is the native file utils' singleton object,
     * please refer to Cocos2d-x's API to know how to use it.
     * Only available in JSB
     */
    constructor()


    /**
     *
     *
     * @param {String} arg0
     */
    addSearchPath(arg0: string): any

    /**
     *
     *
     * @param {String} arg0
     */
    addSearchResolutionsOrder(arg0: string): any

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {bool}
     */
    createDirectories(arg0: string): boolean

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {bool}
     */
    createDirectory(arg0: string): boolean

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {String}
     */
    fullPathForFilename(arg0: string): string

    /**
     *
     *
     * @param {String} arg0
     * @param {String} arg1
     *
     * @returns {String}
     */
    fullPathFromRelativeFile(arg0: string, arg1: string): string

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {long}
     */
    getFileSize(arg0: string): number

    /**
     *
     *
     * @returns {Array}
     */
    getSearchPaths(): any[]

    /**
     *
     *
     * @returns {Array}
     */
    getSearchResolutionsOrder(): any[]

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {String}
     */
    getStringFromFile(arg0: string): string

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {map_object}
     */
    getValueMapFromFile(arg0: string): object

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {Array}
     */
    getValueVectorFromFile(arg0: string): any[]

    /**
     *
     *
     * @returns {String}
     */
    getWritablePath(): string

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {bool}
     */
    isAbsolutePath(arg0: string): boolean

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {bool}
     */
    isDirectoryExist(arg0: string): boolean

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {bool}
     */
    isFileExist(arg0: string): boolean

    /**
     *
     *
     * @returns {bool}
     */
    isPopupNotify(): boolean

    /**
     *
     *
     * @param {String} arg0
     */
    loadFilenameLookupDictionaryFromFile(arg0: string): any

    /**
     *
     */
    purgeCachedEntries(): any

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {bool}
     */
    removeDirectory(arg0: string): boolean

    /**
     *
     *
     * @param {String} arg0
     *
     * @returns {bool}
     */
    removeFile(arg0: string): boolean

    /**
     *
     *
     * @param {String} arg0
     * @param {String} arg1
     * @param {String} arg2
     *
     * @returns {bool}
     */
    renameFile(arg0: string, arg1: string, arg2: string): boolean

    /**
     *
     *
     * @param {Array} arg0
     */
    setSearchPaths(arg0: any[]): any

    /**
     *
     *
     * @param {Array} arg0
     */
    setSearchResolutionsOrder(arg0: any[]): any

    /**
     *
     *
     * @param {String} arg0
     * @param {String} arg1
     *
     * @returns {bool}
     */
    writeStringToFile(arg0: string, arg1: string): boolean

    /**
     *
     *
     * @param {map_object} arg0
     * @param {String} arg1
     *
     * @returns {bool}
     */
    writeToFile(arg0: object, arg1: string): boolean
  }
}

declare namespace jsb {
  interface Manifest  {

    /**
     *
     */
    constructor()


    /**
     *
     *
     * @returns {String}
     */
    getManifestFileUrl(): string

    /**
     *
     *
     * @returns {String}
     */
    getPackageUrl(): string

    /**
     *
     *
     * @returns {String}
     */
    getVersion(): string

    /**
     *
     *
     * @returns {String}
     */
    getVersionFileUrl(): string

    /**
     *
     *
     * @returns {bool}
     */
    isLoaded(): boolean

    /**
     *
     *
     * @returns {bool}
     */
    isVersionLoaded(): boolean
  }
}

declare namespace jsb {
  interface reflection  {

    /**
     * jsb.reflection is a bridge to let you invoke Java static functions.
     * please refer to this document to know how to use it: http://www.cocos2d-x.org/docs/manual/framework/html5/v3/reflection/en
     * Only available on iOS/Mac/Android platform
     */
    constructor()


    /**
     *
     */
    callStaticMethod(): any
  }
}

declare namespace sp {


  /**
   * The event type of spine skeleton animation. It contains event types: START(0), END(1), COMPLETE(2), EVENT(3).
   * Defined in: CCSkeletonAnimation.js.
   */
  enum ANIMATION_EVENT_TYPE { }

  /**
   * The attachment type of spine. It contains three type: REGION(0), BOUNDING_BOX(1), MESH(2) and SKINNED_MESH.
   */
  enum ATTACHMENT_TYPE { }

  /**
   * The vertex index of spine.
   */
  enum VERTEX_INDEX { }

}

declare namespace cc { interface TableViewDataSource { } }

declare namespace cc { interface TableViewDelegate { } }

declare namespace cc { interface BlendFunc { } }

declare namespace cc { interface kmMat4 { } }

declare namespace cc { interface CanvasContextWrapper { } }

declare namespace ccs { interface Shape { } }

declare namespace ccs { interface DisplayManager { } }

declare namespace ccs { interface TweenType { } }

declare namespace ccs { interface DataInfo { } }

declare namespace cc { interface DirectorDelegate { } }

declare namespace cc { interface ColliderFilter { } }

declare namespace cc { interface IMEKeyboardNotificationInfo { } }

declare namespace cc { interface ScrollViewDelegate { } }

declare namespace cc { interface ActionFrame { } }

declare namespace ccs { interface TInfo { } }
