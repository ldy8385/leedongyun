function setCSSBack(e, t) {
    var i = document.getElementById(Utils.DOMScreenBackgroundContainerId);
    e ? (backgroundImage = e, i.style.backgroundImage = "url(" + e.src + ")") : i.style.backgroundImage = null, t && (i.style.backgroundColor = t), i.style.backgroundPosition = "center top", i.style.backgroundRepeat = "repeat", resizeCSSBack()
}

function resizeCSSBack() {
    return
}

function ImagesPreloader() {
    this.loadedImages = {}, this.data = null, this.endCallback = null, this.processCallback = null, this.minProgressVal = 0, this.maxProgressVal = 100, this.wait = Utils.proxy(this.wait, this)
}

function SoundsPreloader(e, t, i) {
    this.sounds = e, this.endCallback = t, this.progressCallback = i, this.loadedCount = 0, this.minProgressVal = 0, this.maxProgressVal = 100
}

function Asset(e, t, i, a, g, s) {
    this.name = e + "", this.src = t + "", this.width = i, this.height = a, this.frames = g, this.layers = s, this.bitmap = null, this.object = null, this.ready = !(!this.width || !this.height), this.spriteClass = null
}

function AssetsLibrary(e, t, i) {
    this.path = "images", this.scale = 1, this.items = {}, this.bitmaps = {}, this.loaded = !1, this.onload = null, this.onloadprogress = null, this.spriteClass = Sprite, this.onLoadHandler = Utils.proxy(this.onLoadHandler, this), this.onLoadProgressHandler = Utils.proxy(this.onLoadProgressHandler, this), this.init(e, t), this.addAssets(i)
}

function Vector(e, t) {
    "undefined" == typeof e && (e = 0), this.x = e, "undefined" == typeof t && (t = 0), this.y = t
}

function Rectangle(e, t, i, a, g) {
    this.center = new Vector(e, t), this.width = i, this.height = a, this.angle = g, this.vertices = [], this.AABB = [], this.refreshVertices()
}

function EventsProxy() {
    this.eventsListeners = []
}

function Tween(e, t, i, a, g, s) {
    if (Utils.callSuperConstructor(Tween, this), "object" != typeof e && (e = null), e) {
        if ("undefined" == typeof e[t]) throw new Error('Trying to tween undefined property "' + t + '"');
        if (isNaN(e[t])) throw new Error("Tweened value can not be " + typeof e[t])
    } else if (isNaN(t)) throw new Error("Tweened value can not be " + typeof t);
    "function" != typeof s && (s = Easing.linear.easeIn), this.obj = e, this.prop = t, this.start = i, this.end = a, this.duration = ~~g, this.callback = s, this.playing = !1, this._pos = -1, this.autoRewind = !1, this.newly = !0, this.eventsListeners = []
}

function DisplayObjectContainer() {
    Utils.callSuperConstructor(DisplayObjectContainer, this), this.objects = [], this.anchor = {
        x: 0,
        y: 0
    }
}

function DisplayObject() {
    Utils.callSuperConstructor(DisplayObject, this)
}

function Graphics() {
    Utils.callSuperConstructor(Graphics, this)
}

function Sprite(e, t, i, a, g) {
    Utils.callSuperConstructor(Sprite, this), this.offset = {
        left: 0,
        top: 0
    }, this.width = t, this.height = i, this.totalFrames = Math.max(1, ~~a), this.totalFrames <= 1 && (this.animated = !1), this.totalLayers = Math.max(1, ~~g), this.bitmap = e, this.changeFrameDelay = Sprite.CHANGE_FRAME_DELAY, this.cacheBitmap = Sprite.CACHE_BITMAPS
}

function TransformFilter(e) {
    if ("function" != typeof e) throw new Error("Invalid filter");
    this.filter = e, this.sprite = null
}

function StageTimer(e, t, i) {
    Utils.callSuperConstructor(StageTimer, this), this.repeat = i, this.initialTimeout = t, this.timeout = t, this.onend = e, this.destroy = !1, this.newly = !0, this.paused = !1
}

function Stage(e, t, i) {
    Utils.callSuperConstructor(Stage, this), this.canvas = null, e && (this.canvas = "string" == typeof e ? document.getElementById(e) : e), this.backgroundCanvas = null, this.needToRebuildBack = !1, this.screenWidth = t, this.screenHeight = i, this.viewport = {
        x: 0,
        y: 0
    }, this.buffer = null, this.buffer = document.createElement("canvas"), this.buffer.width = t * Utils.globalScale, this.buffer.height = i * Utils.globalScale, this.transformBuffer = null, this.transformBuffer = document.createElement("canvas"), this.transformBuffer.width = t * Utils.globalScale, this.transformBuffer.height = i * Utils.globalScale, this.delay = 40, this.started = !1, this.fps = 0, this.lastFPS = 0, this.showFPS = !1, this.pixelClickEvent = !1, this.pixelMouseUpEvent = !1, this.pixelMouseDownEvent = !1, this.pixelMouseMoveEvent = !1, this.ceilSizes = !1, this.tmMain = null, this.tmFPS = null, this.clearLock = !1, this.allowDebugDrawing = !1, this.allowStaticDebugDrawing = !1, this.drawBackAlways = Utils.mobileCheckBrokenAndroid() || !Utils.detectMobileBrowser() && Utils.isChrome(), this.tweens = [], this.timers = [], this.eventsListeners = [], this.lastTick = 0, this.inputController = null, this.inputListeners = null, this.onpretick = null, this.onprerender = null, this.onposttick = null, this.onmousedown = null, this.onmouseup = null, this.onclick = null, this.oncontextmenu = null, this.onmousemove = null, this.canvas && this.addInputListeners(this.canvas), this.tick = Utils.proxy(this.tick, this), this.clearFPS = Utils.proxy(this.clearFPS, this), this.stage = this, this.drawScene = this.render
}

function SimpleText(e, t, i, a) {
    this.font = e, this.x = 0, this.y = 0, this.width = t, this.height = i, this.align = SimpleText.ALIGN_LEFT, this.rotation = 0, this.charSpacing = 0, this.scale = 1, this.opacity = 1, this["static"] = !1, this.charMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], this.charWidth = [], this.sprites = [], this.text = "", this.stage = window.stage, this.parent = window.stage, this.ALIGN_LEFT = SimpleText.ALIGN_LEFT, this.ALIGN_RIGHT = SimpleText.ALIGN_RIGHT, this.ALIGN_CENTER = SimpleText.ALIGN_CENTER, this.ignoreViewport = a
}

function AudioPlayer() {
    this.volume = 1, this.disabled = !1, this.basePath = "", this.mp3Support = !0, this.delayPlay = !1, this.audioWrapper = null, this.locked = !1, this.busy = !1, this.startPlayTime = 0, this.onend = null, this.controlPlay = Utils.proxy(this.controlPlay, this)
}

function AudioMixer(e, t) {
    this.singleChannelMode = !1, this.channels = [], this.init(e, t)
}

function BitmapText(e, t) {
    this.font = Utils.isArray(e) ? e : [e], this.charMap = t, this.sprites = [], this.lines = [], this.stage = window.stage, this.parent = window.stage
}

function GameStage(e, t, i, a) {
    GameStage.instance && (GameStage.instance.stop(), GameStage.instance.destroy(), GameStage.instance = null), GameStage.superclass.constructor.call(this, i || "screen", e.width, e.height), this.setBackgroundCanvas(a || "screen_background"), this.delay = 1e3 / t, this.ceilSizes = !0, this.showFPS = !1, this._isPaused = !1, this.handleFitLayout = Utils.proxy(this.handleFitLayout, this), this.handleLockScreen = Utils.proxy(this.handleLockScreen, this), this.handleUnlockScreen = Utils.proxy(this.handleUnlockScreen, this), this.refreshView = Utils.proxy(this.refreshView, this), Utils.addEventListener("fitlayout", this.handleFitLayout), Utils.addEventListener("lockscreen", this.handleLockScreen), Utils.addEventListener("unlockscreen", this.handleUnlockScreen), Utils.addEventListener("hidewindow", this.refreshView), Utils.addEventListener("showwindow", this.refreshView), GameStage.instance = this
}

function SkillButton(e, t, i) {
    this.type = e;
    var a = "castle/skill/" + this.type,
        g = library.getAsset(a);
    SkillButton.superclass.constructor.call(this, library.getBitmap(a), g.width, g.height, g.frames || 1, g.layers || 1), this.gotoAndStop(0), this.anchor = {
        x: 0,
        y: this.height / 2
    }, this.max = 1 * t || 1, this.value = 1 * i || 0, this.showEffect = !0, this.tick(0)
}

function CastleCell(e, t, i, a) {
    this.config = e, CastleCell.superclass.constructor.call(this, null, this.config.width, this.config.height), this.anchor = {
        x: -this.config.width / 2,
        y: -this.config.height / 2
    }, this.setFieldPosition(t, i), this.setUnitType(a)
}

function PowerScale() {
    var e = library.getAsset("castle/power/scale_empty"),
        t = library.getBitmap("castle/power/scale_empty");
    PowerScale.superclass.constructor.call(this, t, e.width, e.height, 1, 1), this.anchor = {
        x: -this.width / 2,
        y: 0
    }, this.filler = library.getSprite("castle/power/scale_full", {
        x: 0,
        y: 0
    }), this.addChild(this.filler), this.addChild(library.getSprite("castle/power/back", {
        x: this.width,
        y: 0,
        anchor: {
            x: -15,
            y: 0
        }
    }))
}

function UpgradeSlot() {
    var e = "upgrade/slot",
        t = library.getAsset(e);
    UpgradeSlot.superclass.constructor.call(this, library.getBitmap(e), t.width, t.height, t.frames || 1, t.layers || 1), this.picture = library.getSprite("upgrade/image"), this.addChild(this.picture), this.scale = new Graphics.rectangle(32, 21, 10, 40), this.scale.anchor = {
        x: this.scale.width / 2,
        y: this.scale.height / 2
    }, this.scale.fillColor = "rgba(255,0,0,0.5)", this.scale.lineWidth = 0, this.addChild(this.scale), this.onclick = Utils.proxy(this.select, this), this.costText = null, this.sign = library.getSprite("upgrade/sign", {
        x: 24,
        y: -24
    }), this.addChild(this.sign), this.name = "", UpgradeSlot.items.push(this), this.onremove = function(e) {
        e.target.cost && e.target.cost.parentNode && e.target.cost.parentNode.removeChild(e.target.cost);
        var t = UpgradeSlot.items.indexOf(e.target);
        t >= 0 && UpgradeSlot.items.splice(t, 1)
    }
}

function TowerBullet(e, t) {
    this.damage = t || 1, this.target = e;
    var i = "castle/tower/bullet",
        a = library.getAsset(i);
    TowerBullet.superclass.constructor.call(this, library.getBitmap(i), a.width, a.height, a.frames || 1, a.layers || 1)
}

function Tower(e) {
    this.config = e;
    var t = "castle/tower",
        i = library.getAsset(t);
    Tower.superclass.constructor.call(this, library.getBitmap(t), i.width, i.height, i.frames || 1, i.layers || 1), this.anchor = {
        x: 0,
        y: this.height / 4
    }, this.maxhp = this.config.hp + Upgrade("towersLevel").level, this.hp = 1 * this.maxhp, this.damage = this.config.damage + Math.floor(Upgrade("towersLevel").level / 2), this.reload = this.config.reload * (1 - .5 * Upgrade("towersLevel").progress), this.ticksToReload = 0, this.range = 1 * this.config.range, this.radius = this.config.radius * (1 + Upgrade("towersLevel").progress), this.fieldPosition = {
        row: 0,
        col: 0
    }, this.onDie = null, this.target = null, this.onShoot = null, this.scaleContainer = new Graphics.rectangle(10, 6, 1, 16), this.scaleContainer.lineWidth = 0, this.scaleContainer.fillColor = "rgba(255,0,0,1)", this.scaleContainer.anchor = {
        x: 0,
        y: this.scaleContainer.height / 2
    }, this.addChild(this.scaleContainer), this.scale = new Graphics.rectangle(0, -this.scaleContainer.height / 2, this.scaleContainer.width, this.scaleContainer.height), this.scale.lineWidth = 0, this.scale.fillColor = "rgba(0,255,0,1)", this.scaleContainer.addChild(this.scale)
}

function Cannon(e, t, i, a, g) {
    Cannon.superclass.constructor.call(this, e, t, i, a, g), this.onclick = Utils.proxy(this.shoot, this), this.readyToShot = !1, this.shotTimeout = Battle.timeToTicks(.5 + 1 * Upgrade("cannons").progress), this.damage = 10, this.light = null, this.ticksLeft = 0, this.scale = library.getSprite("castle/cannon/scale", {
        x: 11.5,
        y: -1
    }), this.scale.maxWidth = 1 * this.scale.width, this.addChild(this.scale), this.setPowerScale(0), this.scaleY = .8 + .2 * Upgrade("cannons").progress
}

function Boss(e) {
    this.config = e;
    var t = "enemy/loki",
        i = library.getAsset(t);
    Boss.superclass.constructor.call(this, library.getBitmap(t), i.width, i.height, i.frames || 1, i.layers || 1), this.maxhp = 1 * this.config.hp, this.hp = 1 * this.maxhp, this.ticksToReload = 1 * this.config.timeout, this.damage = 1 * this.config.damage, this.onDie = null, this.onShoot = null, this.x = this.config.position.x, this.y = this.config.position.y, this.stop(), this.onenterframe = function(e) {
        e.target.currentFrame == e.target.totalFrames - 1 && e.target.gotoAndStop(0)
    }, this.opacity = 0
}

function startLoad() {
    loadGameData(function(e) {
        GameData = e
    });
    var e = Utils.getMobileScreenResolution(GAME_MANIFEST.landscape);
    (Utils.mobileCheckSlowDevice() || Utils.touchScreen && Utils.isFirefox()) && (e = Utils.getScaleScreenResolution(1, GAME_MANIFEST.landscape)), Utils.globalScale = e.scale, Utils.createLayout(document.getElementById("main_container"), e), Utils.mobileHideAddressBar(), Utils.checkOrientation(GAME_MANIFEST.landscape);
    var t = new SoundsPreloader(ASSETS.sounds, TTLoader.loadComplete, TTLoader.showLoadProgress);
    if (t.maxProgressVal = 50, t.minProgressVal = 50, "funtomic" === ExternalAPI.type) {
        var i = document.querySelector("#progress_container");
        i.style.backgroundImage = "url(images/2/background/intro.png)", i.style.backgroundSize = "auto 100%"
    }
    TTLoader.create(function() {
        document.querySelector("#progress_container").style.display = "none", document.querySelector("#screen_container").style.display = "block", document.querySelector("#screen_background_container").style.display = "block";
        for (var e = ["webkit", "moz", "khtml", "ms"], t = 0; t < e.length; t++) document.body.style[e[t] + "UserSelect"] = "none";
        window.UXMODE = !1, multiChannelMode = AudioMixer.isWebAudioSupport() || !Utils.detectMobileBrowser(), mixer = new AudioMixer("sounds", multiChannelMode ? 20 : 1), ExternalAPI.exec("setMixer", mixer), setTimeout(init, 0)
    }, GAME_MANIFEST.landscape, !0), library = new AssetsLibrary(Utils.imagesRoot, Utils.globalScale, ASSETS.bitmaps), library.load(function() {
        var e = new SoundsPreloader(ASSETS.sounds, TTLoader.loadComplete, TTLoader.showLoadProgress);
        e.maxProgressVal = 50, e.minProgressVal = 50, e.load()
    }, TTLoader.showLoadProgress, 0, 50), Utils.switchToTimeMode(1e3 / 24)
}

function init() {
    "funtomic" === ExternalAPI.type ? createBattle() : ExternalAPI.exec("showCompanyLogo", showStartMenu) || showStartMenu()
}

function showStartMenu() {
    _startMenuAds && ExternalAPI.exec("showAds"), _startMenuAds = !0, setCSSBack(library.getBitmap("tile_horizontal")), playSound("music", MIXER_CHANNEL_MUSIC);
    var e = GameStage.create(GAME_MANIFEST.fps),
        t = library.getSprite("background/intro", {
            x: e.screenWidth / 2,
            y: e.screenHeight / 2
        });
    t.setStatic(!0), e.addChild(t), ExternalAPI.exec("addLogo", 50, 290, !1, e);
    var i = e.addChild(library.getSprite("button/menu/play", {
        x: e.screenWidth - 49,
        y: e.screenHeight - 72,
        onclick: function() {
            startPlay(e)
        }
    }));
    setBitmapText("font6", I18.f("play"), i, 0, -5, 0, 1);
    var a = e.addChild(library.getSprite("button/menu/clear_data", {
        x: e.screenWidth - 76,
        y: e.screenHeight - 72,
        onclick: function(t) {
            var g = new Graphics.rectangle(e.screenWidth / 2, e.screenHeight / 2, e.screenWidth, e.screenHeight);
            g.lineWidth = 0, g.fillColor = "rgba(0,0,0,0.5)", e.addChild(g);
            var s = g.addChild(library.getSprite("button/sure_clear", {
                x: 0,
                y: -10
            }));
            setBitmapText("font6", I18.f("sure1"), s, 0, -25, 0, .9), setBitmapText("font6", I18.f("sure2"), s, 0, 5, 0, .9);
            var o = g.addChild(library.getSprite("button/yes", {
                x: -30,
                y: s.y + s.height / 2,
                onclick: function() {
                    playSound("crash", MIXER_CHANNEL_EFFECT), clearGameData(), i.moveBy(0, 46, 500, Easing.bounce.easeOut), a.onclick = null, a.visible = !1
                }
            }));
            setBitmapText("font6", I18.f("yes").toUpperCase(), o, -1, -1, 0, .9);
            var h = g.addChild(library.getSprite("button/no", {
                x: 30,
                y: s.y + s.height / 2
            }));
            setBitmapText("font6", I18.f("no").toUpperCase(), h, -1, -1, 0, .9), g.onclick = function() {
                return g.destroy = !0, !1
            }
        }
    }));
    setBitmapText("font6", I18.f("clear"), a, 0, -3, 0, .9), clearedGameData() ? a.visible = !1 : i.y -= 46;
    var g = e.addChild(library.getSprite("button/menu/more_games", {
        x: e.screenWidth - 86,
        y: e.screenHeight - 26,
        onclick: showMoreGames
    }));
    setBitmapText("font1", I18.f("more"), g, 0, -3, 0, .9), ExternalAPI.exec("getMoreGamesButtonDisable") && (g.visible = !1), "y8" == ExternalAPI.type && (i.y -= 46, a.y -= 46, g = e.addChild(library.getSprite("button/menu/more_games", {
        x: e.screenWidth - 86,
        y: e.screenHeight - 72,
        onclick: ExternalAPI.showHighScores
    })), setBitmapText("font1", I18.f("highscores"), g, 0, -3, 0, .9));
    var s = e.addChild(library.getSprite("button/sound", {
        x: e.screenWidth - 30,
        y: 20,
        onclick: function(e) {
            toggleSound(), refreshSoundButton(e.target)
        }
    }));
    refreshSoundButton(s);
    var o = ExternalAPI.exec("showCopyright", e);
    if (o && (o.x -= 13), Utils.isFullScreenEnabled()) {
        var h = library.getSprite("button/fullscreen");
        h.x = 25, h.y = 298, h.onclick = function() {
            Utils.toggleFullScreen(document.getElementById("main_container"))
        }, e.addChild(h)
    }
    e.start(), e.refreshBackground(), ExternalAPI.exec("trackGameEvent", "ShowMenu"), ExternalAPI.exec("addY8Logos", 50, 295, 430, 295, e), "funtomic" === ExternalAPI.type && addBtnWT("button/menu/more_games", {
        x: 390,
        y: 293,
        width: 190,
        scale: .95
    }, e, "font4", .75)
}

function startPlay(e) {
    if ("y8" == ExternalAPI.type) {
        var t = ExternalAPI.exec("showWelcomeScreen", e, {
            windowBack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAAHICAYAAAAlT9ORAAAACXBIWXMAAAsTAAALEwEAmpwYAAA5umlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo2N2E2YjI3ZC1jMjk2LTUzNDgtODU4OC0wMjA1MTc4MWMzYWI8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpDRDNBNjM4NjBBRDAxMUU2QTJBOEQ3MzcxNTIwRUVCQTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo0ZDQzOTZjMy0xODhkLTRjNGItYmZlMi1jM2U4ZjQ2NzE2MDY8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6YTc5YjRiZTMtZmQ2MS02MDRiLWIxYjAtOWM0OGI2MTU0Mjc5PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NmFkNzg5ZWEtMGFjZS0xMWU2LWJmZjEtYTdkNmQ4ZDNkZjEwPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NGQ0Mzk2YzMtMTg4ZC00YzRiLWJmZTItYzNlOGY0NjcxNjA2PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA0LTI1VDEzOjM1OjEwKzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTYtMDQtMjVUMTM6MzA6NTkrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0wNC0yNVQxMzozNToxMCswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDQtMjVUMTM6MzU6MTArMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMzI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NDU2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz6Sh/niAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAACQTSURBVHja7N3Li6TZnd7x573FPSJvyqq+jnrUHtE2NkwzCxvZaCGLXozQalb2bsDYeCeYv2NAO4MxeCkPWItBGAYjzcIYjWYxtIw8nkaX7pa6q7qysjMzMq7v9RwvIiIrb3G/R3w/kHRVZmRW9ol4n/j9zjnv+zrWWgEAxnOe1IKbv7xsJHpSC96qFnO1WiV3Mvj8h7+5OmSoAOyq9989qg/+3GjFF81u3HjZSD6/nY9n1/GdwHzrZSN5T1KR4QMAdZ/Ugo8kfT4ITPdWWL5PWALAjWI/F98afMKtFnPqV5YAgHteNpL3qsVcLzAl/RMqSwAYXmn2c1KOpG8TmAAwUtda+2N/1rB8/Sj/djHnHwz+flDO/TPGFMCmuW7Hv7hJvTi9/uIq+mzGKlOOpO9O+h1fe1r+p68dFb4d+O4fuY5zwFMBYNsYa6+T1Pzdi6vwxx+ftf/vpN9nrf3RxIH5jfdOvpcPvG8x3AB2RZRkf/3Tjy6+P2lguoQlgH2VD7xvfeO9k+9N+nh/3APe/9rRvxkWln/4h/+4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",
            buttonBack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAABUCAYAAAAxtf0+AAAACXBIWXMAAAsTAAALEwEAmpwYAAA5uWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo2N2E2YjI3ZC1jMjk2LTUzNDgtODU4OC0wMjA1MTc4MWMzYWI8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpDQ0RCN0FBNjBBRDAxMUU2OTM0NTlDODFDMjJDODUxQzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo5MzlkZTQxYi1mYzA3LTI3NDYtOTYwMC1jOTYxZTY0Yzk1ZjU8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6YTc5YjRiZTMtZmQ2MS02MDRiLWIxYjAtOWM0OGI2MTU0Mjc5PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NmFkNzg5ZWEtMGFjZS0xMWU2LWJmZjEtYTdkNmQ4ZDNkZjEwPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6OTM5ZGU0MWItZmMwNy0yNzQ2LTk2MDAtYzk2MWU2NGM5NWY1PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA0LTI1VDEzOjM1OjI3KzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTYtMDQtMjVUMTM6MzA6NTgrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0wNC0yNVQxMzozNToyNyswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDQtMjVUMTM6MzU6MjcrMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xODQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+ODQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PjSuFTAAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAEJdJREFUeNrsXV2PHMd1Pbequnt7Z7lciVySciQZtmxEUUL4QS8RDCQOEvglQf5iXvMDksfAiYAgCRI7cQzLcIQolkyKpkhKy+HuzHTXx81DVc309PbMzud+DOsAg9md7e3u6T517rm3qqsIi0G23m34uQBQIiFhezhp/W5b7zPBzFALHOAWgAMAefg5A6DDe56uf8KWUQe+NX9/BeA0vM+FuoDYb4bXYVDqQhBlcQPHbNP1T9gmBJFs8a0GMAivb4LCn4TPz4Fm7PcegO+Ed9H6mwsvC8DMCB8JCatCdoiw7OBhFOevAfwGwJM2yZm5k+D3AHwPwP1AZLTeq6DkZSZRuGmbkyxLwiYsSVBvGG1ROeZh4J0K1rgNDeCzQPR6HsFvAfgAwIMWscc/C6KyzOjd/ZweZoLuCsIdABCCDgThCEAv3aOEFXHmGCfO8Wn8oLL860HNvxhq/sIxVw1OipaaDwE8AvCr6CTaBJcA3gPw/aDEpk3uo1L+8CCnHylJbxNwWxD2hKCk2glbgXNcO8aIgZeOcXIytB9X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",
            headerColor: "#ffd311",
            headerStroke: "#3f310b",
            textColor: "#f9de4f",
            textStroke: "#3f310b",
            buttonColor: "#f8c208",
            buttonStroke: "#3f310b",
            onSelect: function(e) {
                loadGameData(function(t) {
                    e.target.safeRemove(), GameData = t, doStartPlay()
                })
            }
        });
        t || doStartPlay()
    } else doStartPlay()
}

function doStartPlay() {
    playSound("shield", MIXER_CHANNEL_EFFECT), GameData.firstTime ? (GameData.firstTime = !1, createBattle()) : showUpgrades()
}

function fxPreBattle(e, t) {
    var i = Easing.cubic.easeIn,
        a = 1e3,
        g = new Graphics.rectangle(e.screenWidth / 2, e.screenHeight / 2, e.screenWidth, e.screenHeight);
    g.lineWidth = 0, g.fillColor = "rgba(0,0,0,0.5)", e.addChild(g);
    var s = e.addChild(library.getSprite("fx/get_ready", {
        x: e.screenWidth / 2,
        y: e.screenHeight / 2,
        scaleX: 2,
        scaleY: 2
    }));
    s.bitmap = null, setBitmapText("font6", I18.f("ready"), s, 0, 0, 0, .9), e.addChild(g).fadeTo(0, a, i, function(g) {
        e.removeChild(g.target.obj), e.setTimeout(function() {
            e.removeChild(s);
            var g = e.addChild(library.getSprite("fx/go", {
                x: e.screenWidth / 2,
                y: e.screenHeight / 2,
                scaleX: 2,
                scaleY: 2
            }));
            g.bitmap = null, g.fadeTo(0, a / 2, i, function(t) {
                e.removeChild(t.target.obj)
            }, function(e) {
                var t = 2 * (1 / e.target.obj[e.target.prop]);
                e.target.obj.scaleX = t, e.target.obj.scaleY = t
            }), setBitmapText("font6", I18.f("go"), g, 0, 0, 0, .9), t()
        }, a / 2)
    })
}

function createBattle() {
    showAd();
    playSound("game", MIXER_CHANNEL_MUSIC);
    var e = GameStage.create(GAME_MANIFEST.fps);
    battle = new Battle(GAME_CONFIG, e), battle.init(), battle.run();
    ExternalAPI.exec("addLogo", 175, 298, !1, e);
    ExternalAPI.exec("gameStarted", 0, 1), battle.paused = !0, fxPreBattle(e, function() {
        battle.run(), battle.stage.setTimeout(function() {
            Tutorial.show("attack", battle.stage)
        }, 3500)
    }), e.addEventListener("pretick", function(e) {
        battle && battle.tick(e.delta)
    }), e.start(), e.refreshBackground();
}

function showAd() {
    Utils.getCookie("game_count");
    if (x == "") {
        x = 1;
        Utils.setCookie("game_count", x);
    } else {
        Number(x);
        x++;
        Utils.setCookie("game_count", x);
        if (x > 4) {
            // var showADcallback = function(data) {};
            // var adData = {ad:2};
            // sdk.showAD(showADcallback, adData);
            
            alert("광고");
            x = 1;
            Utils.setCookie("game_count", x);
        }
    }
}

function showScore(time,kill) {
    if(typeof time !== 'undefined'){
        console.log("게임 진행시간 : " + time);
        console.log("죽인 적 수 : " + kill);
        if(parseInt(time) < 1){
            time = 1;
            var score = parseInt(time) * kill * 100;
        }else{
            var score = parseInt(time) * kill * 100;
        }
        console.log(parseInt(time));
        console.log("점수 : " + score);
        // var scoreData = {app_id:sdk.gameId, token:sdk.token, stage:"", score:ig.game.currentScore, totalScore:ig.game.lastGameDistance};
        // sdk.showScore(scoreData);
    }
}

function showUpgrades() {
    "funtomic" != ExternalAPI.type && ExternalAPI.exec("showAds"), playSound("music", MIXER_CHANNEL_MUSIC), playSound("upgrades", MIXER_CHANNEL_EFFECT), saveGameData(), battle && (battle = null);
    var e = GameStage.create(GAME_MANIFEST.fps),
        t = library.getSprite("background/upgrade", {
            x: e.screenWidth / 2,
            y: e.screenHeight / 2
        });
    t.setStatic(!0), e.addChild(t);
    ExternalAPI.exec("addLogo", 50, 297, !1, e);
    window.UXMODE = !1;
    var i = new Graphics.circle(414, 180, 20);
    i.fillColor = "transparent", i.lineWidth = 0, i.N = 0, i.T = !1, i.onclick = function(t) {
        if (++i.N >= 5) {
            playSound("roar", MIXER_CHANNEL_CASTLE), window.UXMODE = !0;
            var a;
            a = new Graphics.rectangle(444, 215, 8, 3), a.fillColor = "rgba(0,0,255,0.5)", a.lineWidth = 0, e.addChild(a), a = new Graphics.rectangle(444, 218, 8, 3), a.fillColor = "rgba(255,255,0,0.5)", a.lineWidth = 0, e.addChild(a), t.target.destroy = !0
        }
        i.T || (e.setTimeout(function() {
            i.N = 0, i.T = !1
        }, 1e3), i.T = !0)
    }, e.addChild(i);
    for (var a = ["power", "attack", "towersCount", "towersLevel", "goldPerViking", "armor", "skillReload", "cannons", "skill_yellow", "skill_red", "skill_green", "skill_blue"], g = [], s = 0, o = a.length; o > s; s++) {
        var h = new UpgradeSlot;
        h.setPosition(50 + 80 * (s % 4), 80 + 80 * Math.floor(s / 4)), h.setName(a[s]), e.addChild(h), g.push(h)
    }
    var n = library.getSprite("castle/money/back", {
        x: UpgradeSlot.items[3].x + 120,
        y: UpgradeSlot.items[3].y
    });
    e.addChild(n), fontId = "font/yellow", asset = library.getAsset(fontId), n.moneyText = new SimpleText(library.getBitmap(fontId), asset.width, asset.height), n.moneyText.stage = this.stage, n.moneyText.parent = n, n.moneyText.charMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], n.moneyText.charSpacing = -12, n.moneyText.align = SimpleText.ALIGN_CENTER, n.moneyText.setPosition(4, -4), n.moneyText.write(GameData.money);
    var f = library.getSprite("button/play", {
        x: e.screenWidth - 20,
        y: 20
    });
    e.addChild(f), f.onclick = function() {
        for (playSound("shield", MIXER_CHANNEL_EFFECT), e.removeChild(n); UpgradeSlot.items.length;) e.removeChild(UpgradeSlot.items.shift());
        createBattle(), "funtomic" == ExternalAPI.type && ExternalAPI.exec("showAds")
    };
    var d = e.addChild(library.getSprite("button/sound", {
        x: e.screenWidth - 62,
        y: 20,
        onclick: function(e) {
            toggleSound(), refreshSoundButton(e.target)
        }
    }));
    refreshSoundButton(d), e.addChild(library.getSprite("button/home", {
        x: e.screenWidth - 100,
        y: 20,
        onclick: function(e) {
            showStartMenu()
        }
    }));
    var A = e.addChild(library.getSprite("button/menu/more_games", {
        x: e.screenWidth - 86,
        y: e.screenHeight - 26,
        onclick: showMoreGames
    }));
    setBitmapText("font1", I18.f("more"), A, 0, -3, 0, .9), A.visible = !1, e.onpretick = function() {}, e.onposttick = function() {
        n.moneyText.write(GameData.money)
    }, e.start(), e.refreshBackground(), Tutorial.show("money", e, g), setBitmapText("font6", I18.f("upgrades").toUpperCase(), e, 240, 20, 0, 1), setBitmapText("font6", I18.f("choose"), e, 190, 300, 0, 1), ExternalAPI.exec("addY8Logos", 30, 301, 450, 301, e)
}

function playSound(e, t) {
    if (mixer) {
        t = "undefined" == typeof t ? MIXER_CHANNEL_EFFECT : t;
        var i = t == MIXER_CHANNEL_MUSIC;
        !i && multiChannelMode ? GameData.sound && mixer.play(e, !1, !0, t || MIXER_CHANNEL_EFFECT) : GameData.music && i && currentMusic != e && (currentMusic = e, GameData.sound && mixer.play(e, !0, !1, 0))
    }
}

function setMusicOff() {
    if (mixer) {
        GameData.sound = !1, GameData.music = !1;
        for (var e = 0; e < mixer.channels.length; e++) mixer.stop(e);
        saveGameData()
    }
}

function setMusicOn() {
    if (mixer) {
        if (GameData.sound = !0, GameData.music = !0, currentMusic) {
            var e = currentMusic;
            currentMusic = null, playSound(e, MIXER_CHANNEL_MUSIC)
        }
        saveGameData()
    }
}

function toggleSound(e) {
    return GameData.sound = "undefined" == typeof e ? !GameData.sound : !!e, toggleMusic(GameData.music), saveGameData(), GameData.sound || AudioMixer.isWebAudioSupport() && (mixer.stop(MIXER_CHANNEL_CASTLE), mixer.stop(MIXER_CHANNEL_ENEMY), mixer.stop(MIXER_CHANNEL_SKILL), mixer.stop(MIXER_CHANNEL_TOWER), mixer.stop(MIXER_CHANNEL_EFFECT)), GameData.sound
}

function toggleMusic(e) {
    if (GameData.music = "undefined" == typeof e ? !GameData.music : !!e, saveGameData(), GameData.music && GameData.sound) {
        if (currentMusic) {
            var t = currentMusic;
            currentMusic = null, playSound(t, MIXER_CHANNEL_MUSIC)
        }
    } else mixer.stop(MIXER_CHANNEL_MUSIC);
    return GameData.music
}

function refreshSoundButton(e) {
    if (!(GameData.sound ^ e.objects.length > 0))
        if (GameData.sound) e.removeChild(e.objects[0]);
        else {
            var t = (Math.min(e.width, e.height), .8),
                i = new Graphics.circle(0, 0, .4 * e.width * t);
            e.addChild(i), i.lineWidth = 2, i.color = "rgba(255,0,0,1)";
            var a = new Graphics.free;
            i.addChild(a);
            var g = .3 * e.width * t;
            a.lineWidth = 2, a.color = "rgba(255,0,0,1)", a.beginPath(), a.moveTo(g, -g), a.lineTo(-g, g), a.stroke()
        }
}

function getGameDataId() {
    return "playtomax_" + GAME_ID + "_data"
}

function validateGameData(e) {
    if (!e) return JSON.parse(JSON.stringify(DefaultGameData));
    for (var t in DefaultGameData) "undefined" == typeof e[t] && (e[t] = JSON.parse(JSON.stringify(DefaultGameData[t])));
    return e
}

function loadGameData(e) {
    function t(t) {
        var i = {};
        console.log(t)
        t ? i = JSON.parse(t) : (i = JSON.parse(JSON.stringify(DefaultGameData)),
            i.firstTime = !0, i.tutorial.complete = !1), i = validateGameData(i), e && e(i)
    }
    var i = ExternalAPI.exec("loadGameData", t);
    i !== !0 && t(Utils.getCookie(getGameDataId()))
}

function saveGameData() {
    GameData = validateGameData(GameData);
    var e = JSON.stringify(GameData);
    ExternalAPI.exec("saveGameData", e) !== !0 && Utils.setCookie(getGameDataId(), e)
}

function clearGameData() {
    GameData = validateGameData(null), saveGameData()
}

function clearedGameData() {
    return !GameData || GameData.firstTime
}

function addBtnWT(e, t, i, a, g) {
    function s() {
        var e = "http://www.123games.co.kr/",
            t = window.open(e, "_blank");
        t ? t.focus() : window.location.href = e
    }
    var o = i.addChild(library.getSprite(e, {
        x: t.x,
        y: t.y,
        scaleX: t.scale,
        scaleY: t.scale,
        width: t.width ? t.width : 172,
        onclick: s
    }));
    setBitmapText(a, I18.f(""), o, 10, -2, null, .9 * g);
    var h = "font2" == a ? "walkthrough_icon2" : "walkthrough_icon",
        n = "font2" == a ? -60 : -70,
        f = "font2" == a ? -1.5 : 1.5;
    o.addChild(library.getSprite(h, {
        x: 7,
        y: 0,
        scaleX: f,
        scaleY: f
    }))
}

function Upgrade(e) {
    var t = (GAME_CONFIG.castle.upgrade[e], {});
    return t.update = function() {
        var e = GAME_CONFIG.castle.upgrade[this.name];
        this.level = GameData.upgrade[this.name] || 0, this.progress = this.level / e.maxLevel, this.cost = Math.ceil(e.cost * (this.progress < 1 ? 1 + e.costRatio * (this.level + 1) : 0))
    }, t.buy = function() {
        return 1 == this.progress ? !1 : this.cost > GameData.money ? !1 : (GameData.upgrade[this.name] = (~~GameData.upgrade[this.name] || 0) + 1, GameData.money -= this.cost, saveGameData(), this.update(), playSound("money", MIXER_CHANNEL_EFFECT), !0)
    }, t.name = e, t.update(), t
}

function random(e, t, i) {
    if (e && e instanceof Array) {
        var a = Math.round(random(0, e.length - 1));
        return e.length ? e[a] : void 0
    }
    var g = Math.random();
    return void 0 === e ? g : (void 0 === t && (t = 0), g *= Math.abs(e - t), g = Math.min(e, t) + g, i ? g : Math.round(g))
}

function setBitmapText(e, t, i, a, g, s, o, h, n, f, d) {
    var A = d ? d : null;
    s = "undefined" != typeof s && null !== s ? s : 10;
    var C = new BitmapText(library.getBitmap("fonts/" + e), window[e]);
    return C.scale = "undefined" != typeof o && null !== o ? o : 1, C.x = "undefined" != typeof a && null !== a ? a : 0, C.y = "undefined" != typeof g && null !== g ? g : -1, C.align = "undefined" != typeof h && null !== h ? h : BitmapText.ALIGN_CENTER, C.charSpacing = "undefined" != typeof n && null !== n ? n : 0, C.lineSpacing = "undefined" != typeof f && null !== f ? f : 0, C.parent = i, C.write(t), A && (C.setScaleToFitContainer(A - s, null, C.scale), C.refresh()), C
}

function showMoreGames() {
    playSound("skill_yellow", MIXER_CHANNEL_EFFECT);
    // ExternalAPI.exec("showMoreGames") || ExternalAPI.exec("customMoreGames") || window.open(ExternalAPI.getMoreGamesURL(), "_blank")
}
var GAME_MANIFEST = {
        id: "clickbattle_madness",
        name: "Clickbattle: Madness",
        fps: 60,
        landscape: !0,
        moreGames: "http://playtomax.com/showcase.php"
    },
    GAME_CONFIG = {};
GAME_CONFIG.colors = {
    red: "255,0,0",
    green: "0,255,0",
    blue: "0,0,255",
    yellow: "255,255,0"
}, GAME_CONFIG.castle = {
    maxSkill: 50,
    hp: 20,
    towerColumns: 5
}, GAME_CONFIG.castle.field = {
    cols: 8,
    rows: 10,
    initialColumns: 4,
    left: 287,
    top: 43,
    cell: {
        width: 24,
        height: 24
    },
    respawnTimeout: 2,
    unitSpeed: 400,
    powerTimeout: 2,
    maxPower: 15
}, GAME_CONFIG.castle.field.unit = {}, GAME_CONFIG.castle.field.unit.types = [{
    type: "yellow",
    x: -1,
    y: 1,
    bullet: {
        damage: 1,
        speed: 400
    },
    color: "255,255,0"
}, {
    type: "red",
    x: -4,
    y: -1,
    bullet: {
        damage: 1,
        speed: 400
    },
    color: "255,0,0"
}, {
    type: "green",
    x: -1,
    y: 0,
    bullet: {
        damage: 1,
        speed: 400
    },
    color: "0,255,0"
}, {
    type: "blue",
    x: -4,
    y: -2,
    bullet: {
        damage: 1,
        speed: 400
    },
    color: "0,0,255"
}], GAME_CONFIG.castle.cannon = {
    damage: 50,
    reload: 10
}, GAME_CONFIG.castle.tower = {
    hp: 5,
    damage: 1,
    reload: 2,
    range: 100,
    radius: 30
};
var DEFAULT_COST_RATIO = .05;
GAME_CONFIG.castle.upgrade = {
    power: {
        cost: 1200,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 38
    },
    goldPerViking: {
        cost: 700,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 15
    },
    skillReload: {
        cost: 300,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 25
    },
    towersCount: {
        cost: 2e3,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 30
    },
    towersLevel: {
        cost: 1e3,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 20
    },
    skill_red: {
        cost: 800,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 20
    },
    skill_green: {
        cost: 800,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 20
    },
    skill_blue: {
        cost: 800,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 20
    },
    skill_yellow: {
        cost: 800,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 20
    },
    cannons: {
        cost: 500,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 25
    },
    attack: {
        cost: 1e3,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 30
    },
    armor: {
        cost: 600,
        costRatio: DEFAULT_COST_RATIO,
        maxLevel: 30
    }
}, GAME_CONFIG.enemy = {}, GAME_CONFIG.enemy.field = {}, GAME_CONFIG.enemy.field.width = GAME_CONFIG.castle.field.left - 60, GAME_CONFIG.enemy.field.height = GAME_CONFIG.castle.field.rows * GAME_CONFIG.castle.field.cell.height, GAME_CONFIG.enemy.field.x = 30, GAME_CONFIG.enemy.field.y = GAME_CONFIG.castle.field.top, GAME_CONFIG.enemy.field.skillArea = GAME_CONFIG.enemy.field.width - 65, GAME_CONFIG.enemy.speed = {
    slow: 50,   //10
    medium: 80, //20
    fast: 110    //30
};
var ENEMY_ATTACK_RATIO = .046875; //.046875
GAME_CONFIG.enemy.types = [], GAME_CONFIG.enemy.types.push({
    type: "1",
    x: 0,
    y: 0,
    damage: 1,
    hp: 14,
    gold: 10,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "2",
    x: 0,
    y: 0,
    damage: 1,
    hp: 15,
    gold: 20,
    speed: GAME_CONFIG.enemy.speed.fast,
    attackTimeout: 21 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "3",
    x: 0,
    y: 0,
    damage: 1,
    hp: 17,
    gold: 30,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 29 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "4",
    x: 0,
    y: 0,
    damage: 1,
    hp: 19,
    gold: 50,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 36 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "5",
    x: 0,
    y: 0,
    damage: 1,
    hp: 22,
    gold: 60,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 36 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "6",
    x: 0,
    y: 0,
    damage: 2,
    hp: 25,
    gold: 70,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "7",
    x: 0,
    y: 0,
    damage: 2,
    hp: 29,
    gold: 80,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "8",
    x: 0,
    y: 0,
    damage: 2,
    hp: 33,
    gold: 90,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "9",
    x: 0,
    y: 0,
    damage: 3,
    hp: 40,
    gold: 100,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "10",
    x: 0,
    y: 0,
    damage: 3,
    hp: 44,
    gold: 110,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "11",
    x: 0,
    y: 0,
    damage: 3,
    hp: 48,
    gold: 120,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "12",
    x: 0,
    y: 0,
    damage: 5,
    hp: 52,
    gold: 130,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 24 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "13",
    x: 0,
    y: 0,
    damage: 3,
    hp: 59,
    gold: 140,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "14",
    x: 0,
    y: 0,
    damage: 3,
    hp: 65,
    gold: 150,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 20 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "15",
    x: 0,
    y: 0,
    damage: 3,
    hp: 74,
    gold: 160,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 21 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "16",
    x: 0,
    y: 0,
    damage: 4,
    hp: 83,
    gold: 170,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 23 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "17",
    x: 0,
    y: 0,
    damage: 4,
    hp: 92,
    gold: 180,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 107 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "18",
    x: 0,
    y: 0,
    damage: 4,
    hp: 102,
    gold: 190,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 35 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "19",
    x: 0,
    y: 0,
    damage: 4,
    hp: 114,
    gold: 200,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 33 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "20",
    x: 0,
    y: 0,
    damage: 4,
    hp: 120,
    gold: 250,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.types.push({
    type: "21",
    x: 0,
    y: 0,
    damage: 4,
    hp: 130,
    gold: 300,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
}), GAME_CONFIG.enemy.boat = {
    types: [{
        type: 1,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [1, 1, 1, 2, 2]
    }, {
        type: 1,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [1, 1, 1, 2, 2]
    }, {
        type: 5,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [1, 2, 2, 3, 3]
    }, {
        type: 5,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [3, 2, 2, 1, 3, 4]
    }, {
        type: 5,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [3, 3, 4, 3, 4, 2, 4]
    }, {
        type: 5,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [4, 5, 4, 4, 3, 3, 3, 4]
    }, {
        type: 5,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [5, 5, 4, 4, 3, 3, 3, 4, 5, 5]
    }, {
        type: 8,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [6, 6, 6, 6, 7, 7, 6, 7]
    }, {
        type: 8,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [6, 6, 7, 7, 7, 8, 7, 6, 6, 7, 8, 8, 8, 8, 6, 7, 8]
    }, {
        type: 8,
        hp: 500,
        gold: 400,
        timeout: 16,
        units: [7, 7, 7, 8, 8, 6, 7, 8, 8, 9, 8, 8, 8, 9, 9, 7]
    }, {
        type: 8,
        hp: 500,
        gold: 400,
        timeout: 16,
        units: [7, 7, 7, 7 ,7 ,7 ,7 ,7 ,7 ,7 ,7, 9, 9, 9, 9, 9, 9, 8, 9, 8, 8, 9, 8, 9, 7, 7, 7, 8, 9]
    }, {
        type: 12,
        hp: 500,
        gold: 400,
        timeout: 16,
        units: [10, 10 , 10, 10, 11, 11]
    }, {
        type: 12,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [10, 11, 11, 11, 11, 10, 10, 10, 11, 10, 11, 10, 11, 10]
    }, {
        type: 12,
        hp: 500,
        gold: 500,
        timeout: 16,
        units: [10, 11, 10, 10, 11, 11, 10, 11, 10, 11, 10, 11, 10, 12, 12, 12, 10]
    }, {
        type: 16,
        hp: 500,
        gold: 500,
        timeout: 16,
        units: [12, 11, 12, 11, 12, 13, 13, 11, 10, 11, 10, 10, 10, 10]
    }, {
        type: 16,
        hp: 500,
        gold: 500,
        timeout: 16,
        units: [11, 10, 12, 12, 12, 13, 13, 14, 13, 12, 12, 13, 14, 14, 13, 13, 12, 12, 12, 14, 11, 10]
    }, {
        type: 16,
        hp: 500,
        gold: 600,
        timeout: 16,
        units: [10, 11, 11, 10, 12, 13, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 13, 14, 12, 11, 10 , 11, 10, 13, 14, 13, 12, 12]
    }, {
        type: 19,
        hp: 500,
        gold: 600,
        timeout: 16,
        units: [14, 14, 15, 15, 16, 16, 14, 15, 16, 14, 15, 16]
    }, {
        type: 19,
        hp: 500,
        gold: 700,
        timeout: 16,
        units: [10, 12, 12, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 13, 13, 11, 10, 11, 14, 12, 12, 12, 12, 12, 14, 14, 14, 14, 12, 12, 11, 11, 11, 11, 14, 15, 16, 16, 16, 16]
    }, {
        type: 19,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [10, 11, 12, 13, 14, 15, 16, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 16, 16, 16, 17, 17, 17, 17, 16, 14, 13, 13, 13, 16, 17, 17, 17]
    }]
}, GAME_CONFIG.enemy.wave = [
    [1, 1],
    [1, 1, 2],
    [2, 2, 2, 2, 3],
    [2, 2, 2, 3, 3, 3],
    [2, 2, 2, 2, 2, 3, 3, 3],
    [2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
    [2, 2, 3, 3, 4,4,4],
    [3, 3, 3, 4, 4, 5,5],
    [4, 4, 4, 5, 5,5,5],
    [5, 5, 6, 6,6,6],
    [4, 4, 4, 5, 5, 5, 6, 6,6],
    [6, 6, 7, 7, 7, 8, 8,8,8],
    [8, 8, 8, 9, 9, 9,9,9],
    [9, 9, 10, 10, 11, 12,12,12],
    [12, 12, 12, 13, 13,13,13],
    [13, 13, 13, 14, 14, 14, 14, 15,15,15],
    [13, 13, 14, 14, 15, 15, 16, 16,16,16],
    [13, 13, 14, 15, 16, 17, 18, 19,19,19],
    [17, 17, 17, 18, 18, 18, 19, 19,19,19],
    [19, 19, 19, 19, 20, 20, 20, 20,20,20]
], GAME_CONFIG.enemy.boss = {
    position: {
        x: 210, //210
        y: 100  //100
    },
    timeout: 1e4,
    hp: 1e4,
    damage: 10,
};
var ASSETS = {
        bitmaps: [{
            name: "walkthrough_icon",
            src: "walkthrough_icon.png",
            frames: 1,
            layers: 1,
            width: 101,
            height: 25
        }, {
            name: "walkthrough_icon2",
            src: "walkthrough_icon2.png",
            frames: 1,
            layers: 1,
            width: 101,
            height: 25
        }, {
            name: "background/intro",
            src: "background/intro.png",
            width: 480,
            height: 320
        }, {
            name: "background/game",
            src: "background/game.png",
            width: 480,
            height: 320
        }, {
            name: "background/shield",
            src: "background/shield.png",
            width: 53,
            height: 58
        }, {
            name: "background/upgrade",
            src: "background/upgrades.png",
            width: 480,
            height: 320
        }, {
            name: "background/mage_complete",
            src: "background/mage_complete.png",
            frames: 1,
            layers: 1,
            width: 202,
            height: 242
        }, {
            name: "fx/get_ready",
            src: "background/get_ready.png",
            frames: 1,
            layers: 1,
            width: 50,
            height: 16
        }, {
            name: "fx/go",
            src: "background/go.png",
            frames: 1,
            layers: 1,
            width: 42,
            height: 50
        }, {
            name: "font/black",
            src: "font/black.png",
            width: 16,
            height: 18,
            frames: 10
        }, {
            name: "font/red",
            src: "font/red.png",
            width: 20,
            height: 20,
            frames: 10
        }, {
            name: "font/yellow",
            src: "font/yellow.png",
            width: 20,
            height: 20,
            frames: 10
        }, {
            name: "font/power",
            src: "font/power.png",
            width: 36,
            height: 34,
            frames: 11
        }, {
            name: "button/close",
            src: "button/close.png",
            width: 36,
            height: 35
        }, {
            name: "button/menu",
            src: "button/menu.png",
            width: 23,
            height: 23
        }, {
            name: "button/next",
            src: "button/next.png",
            width: 23,
            height: 22
        }, {
            name: "button/no",
            src: "button/no.png",
            width: 28,
            height: 23
        }, {
            name: "button/ok",
            src: "button/ok.png",
            width: 35,
            height: 35
        }, {
            name: "button/pause",
            src: "button/pause.png",
            width: 26,
            height: 26
        }, {
            name: "button/play",
            src: "button/play.png",
            width: 35,
            height: 35
        }, {
            name: "button/sound",
            src: "button/sound.png",
            width: 26,
            height: 26
        }, {
            name: "button/yes",
            src: "button/yes.png",
            width: 28,
            height: 23
        }, {
            name: "button/call_more",
            src: "button/call_more.png",
            width: 49,
            height: 35
        }, {
            name: "button/home",
            src: "button/home.png",
            frames: 1,
            layers: 1,
            width: 26,
            height: 26
        }, {
            name: "button/fullscreen",
            src: "button/fullscreen.png",
            frames: 1,
            layers: 1,
            width: 35,
            height: 35
        }, {
            name: "button/menu/play",
            src: "button/play_menu.png",
            width: 95,
            height: 43
        }, {
            name: "button/menu/clear_data",
            src: "button/clear_data.png",
            width: 148,
            height: 43
        }, {
            name: "button/sure_clear",
            src: "button/sure_clear.png",
            frames: 1,
            layers: 1,
            width: 200,
            height: 132
        }, {
            name: "button/menu/more_games",
            src: "button/more_games.png",
            width: 172,
            height: 43
        }, {
            name: "button/leaderboard",
            src: "button/leaderboard.png",
            frames: 1,
            layers: 1,
            width: 80,
            height: 42
        }, {
            name: "castle/defeat",
            src: "castle/defeat_back.png",
            width: 132,
            height: 144
        }, {
            name: "castle/win",
            src: "castle/win.png",
            width: 211,
            height: 135
        }, {
            name: "castle/money/back",
            src: "castle/money_back.png",
            width: 87,
            height: 25
        }, {
            name: "castle/power/word",
            src: "castle/power.png",
            width: 119,
            height: 33
        }, {
            name: "castle/power/back",
            src: "castle/power_back.png",
            width: 95,
            height: 76
        }, {
            name: "castle/power/scale_empty",
            src: "castle/scale_empty.png",
            width: 159,
            height: 67
        }, {
            name: "castle/power/scale_full",
            src: "castle/scale_full.png",
            width: 159,
            height: 67
        }, {
            name: "castle/unit/red",
            src: "castle/unit/red.png",
            width: 26,
            height: 25
        }, {
            name: "castle/unit/yellow",
            src: "castle/unit/yellow.png",
            width: 20,
            height: 20
        }, {
            name: "castle/unit/green",
            src: "castle/unit/green.png",
            width: 20,
            height: 22
        }, {
            name: "castle/unit/blue",
            src: "castle/unit/blue.png",
            width: 25,
            height: 26
        }, {
            name: "castle/unit/blue/bullet",
            src: "castle/unit/bullet_blue.png",
            width: 22,
            height: 24
        }, {
            name: "castle/unit/green/bullet",
            src: "castle/unit/bullet_green.png",
            width: 29,
            height: 23
        }, {
            name: "castle/unit/red/bullet",
            src: "castle/unit/bullet_red.png",
            width: 35,
            height: 28
        }, {
            name: "castle/unit/yellow/bullet",
            src: "castle/unit/bullet_yellow.png",
            width: 23,
            height: 25
        }, {
            name: "castle/skill/red",
            src: "castle/skill/btn_red.png",
            width: 26,
            height: 28,
            frames: 3
        }, {
            name: "castle/skill/yellow",
            src: "castle/skill/btn_yellow.png",
            width: 24,
            height: 24,
            frames: 3
        }, {
            name: "castle/skill/green",
            src: "castle/skill/btn_green.png",
            width: 24,
            height: 24,
            frames: 3
        }, {
            name: "castle/skill/blue",
            src: "castle/skill/btn_blue.png",
            width: 24,
            height: 26,
            frames: 3
        }, {
            name: "castle/skill/fist",
            src: "castle/skill/fist.png",
            width: 118,
            height: 76,
            frames: 12
        }, {
            name: "castle/skill/bugs",
            src: "castle/skill/bugs.png",
            width: 36,
            height: 32,
            frames: 10
        }, {
            name: "castle/skill/comet",
            src: "castle/comet.png",
            width: 48,
            height: 67
        }, {
            name: "castle/skill/comet_bang",
            src: "castle/comet_bang.png",
            width: 64,
            height: 50,
            frames: 8,
            layers: 2
        }, {
            name: "castle/cannon",
            src: "castle/cannon.png",
            width: 35,
            height: 30
        }, {
            name: "castle/cannon/scale",
            src: "castle/cannon_scale_full.png",
            width: 19,
            height: 7
        }, {
            name: "castle/cannon/scale_ready",
            src: "castle/cannon_scale_ready.png",
            width: 19,
            height: 7
        }, {
            name: "castle/tower",
            src: "castle/tower.png",
            width: 30,
            height: 40,
            frames: 4
        }, {
            name: "castle/tower/bullet",
            src: "castle/bullet.png",
            width: 4,
            height: 4
        }, {
            name: "enemy/unit/1/attack",
            src: "enemy/viking/attack1.png",
            width: 26,
            height: 20,
            frames: 6
        }, {
            name: "enemy/unit/10/attack",
            src: "enemy/viking/attack10.png",
            width: 42,
            height: 38,
            frames: 5
        }, {
            name: "enemy/unit/11/attack",
            src: "enemy/viking/attack11.png",
            width: 34,
            height: 36,
            frames: 5
        }, {
            name: "enemy/unit/12/attack",
            src: "enemy/viking/attack12.png",
            width: 38,
            height: 38,
            frames: 6
        }, {
            name: "enemy/unit/13/attack",
            src: "enemy/viking/attack13.png",
            width: 38,
            height: 36,
            frames: 6
        }, {
            name: "enemy/unit/14/attack",
            src: "enemy/viking/attack14.png",
            width: 30,
            height: 28,
            frames: 6
        }, {
            name: "enemy/unit/15/attack",
            src: "enemy/viking/attack15.png",
            width: 26,
            height: 22,
            frames: 6
        }, {
            name: "enemy/unit/16/attack",
            src: "enemy/viking/attack16.png",
            width: 30,
            height: 20,
            frames: 6
        }, {
            name: "enemy/unit/17/attack",
            src: "enemy/viking/attack17.png",
            width: 30,
            height: 26,
            frames: 6
        }, {
            name: "enemy/unit/18/attack",
            src: "enemy/viking/attack18.png",
            width: 24,
            height: 20,
            frames: 6
        }, {
            name: "enemy/unit/19/attack",
            src: "enemy/viking/attack19.png",
            width: 30,
            height: 20,
            frames: 6
        }, {
            name: "enemy/unit/2/attack",
            src: "enemy/viking/attack2.png",
            width: 22,
            height: 20,
            frames: 7
        }, {
            name: "enemy/unit/20/attack",
            src: "enemy/viking/attack20.png",
            width: 30,
            height: 24,
            frames: 6
        }, {
            name: "enemy/unit/21/attack",
            src: "enemy/viking/attack21.png",
            width: 36,
            height: 26,
            frames: 6
        }, {
            name: "enemy/unit/3/attack",
            src: "enemy/viking/attack3.png",
            width: 26,
            height: 26,
            frames: 5
        }, {
            name: "enemy/unit/4/attack",
            src: "enemy/viking/attack4.png",
            width: 28,
            height: 22,
            frames: 5
        }, {
            name: "enemy/unit/5/attack",
            src: "enemy/viking/attack5.png",
            width: 22,
            height: 20,
            frames: 5
        }, {
            name: "enemy/unit/6/attack",
            src: "enemy/viking/attack6.png",
            width: 32,
            height: 22,
            frames: 4
        }, {
            name: "enemy/unit/7/attack",
            src: "enemy/viking/attack7.png",
            width: 38,
            height: 26,
            frames: 5
        }, {
            name: "enemy/unit/8/attack",
            src: "enemy/viking/attack8.png",
            width: 32,
            height: 24,
            frames: 5
        }, {
            name: "enemy/unit/9/attack",
            src: "enemy/viking/attack9.png",
            width: 32,
            height: 26,
            frames: 5
        }, {
            name: "enemy/unit/1/die",
            src: "enemy/viking/die1.png",
            width: 28,
            height: 22,
            frames: 5
        }, {
            name: "enemy/unit/10/die",
            src: "enemy/viking/die10.png",
            width: 36,
            height: 32,
            frames: 6
        }, {
            name: "enemy/unit/11/die",
            src: "enemy/viking/die11.png",
            width: 34,
            height: 26,
            frames: 6
        }, {
            name: "enemy/unit/12/die",
            src: "enemy/viking/die12.png",
            width: 36,
            height: 32,
            frames: 6
        }, {
            name: "enemy/unit/13/die",
            src: "enemy/viking/die13.png",
            width: 36,
            height: 32,
            frames: 6
        }, {
            name: "enemy/unit/14/die",
            src: "enemy/viking/die14.png",
            width: 42,
            height: 28,
            frames: 7
        }, {
            name: "enemy/unit/15/die",
            src: "enemy/viking/die15.png",
            width: 36,
            height: 26,
            frames: 7
        }, {
            name: "enemy/unit/16/die",
            src: "enemy/viking/die16.png",
            width: 36,
            height: 26,
            frames: 7
        }, {
            name: "enemy/unit/17/die",
            src: "enemy/viking/die17.png",
            width: 38,
            height: 26,
            frames: 6
        }, {
            name: "enemy/unit/18/die",
            src: "enemy/viking/die18.png",
            width: 30,
            height: 20,
            frames: 7
        }, {
            name: "enemy/unit/19/die",
            src: "enemy/viking/die19.png",
            width: 38,
            height: 20,
            frames: 7
        }, {
            name: "enemy/unit/2/die",
            src: "enemy/viking/die2.png",
            width: 34,
            height: 24,
            frames: 7
        }, {
            name: "enemy/unit/20/die",
            src: "enemy/viking/die20.png",
            width: 38,
            height: 24,
            frames: 6
        }, {
            name: "enemy/unit/21/die",
            src: "enemy/viking/die21.png",
            width: 30,
            height: 24,
            frames: 6
        }, {
            name: "enemy/unit/3/die",
            src: "enemy/viking/die3.png",
            width: 32,
            height: 20,
            frames: 6
        }, {
            name: "enemy/unit/4/die",
            src: "enemy/viking/die4.png",
            width: 34,
            height: 20,
            frames: 6
        }, {
            name: "enemy/unit/5/die",
            src: "enemy/viking/die5.png",
            width: 30,
            height: 18,
            frames: 6
        }, {
            name: "enemy/unit/6/die",
            src: "enemy/viking/die6.png",
            width: 30,
            height: 24,
            frames: 6
        }, {
            name: "enemy/unit/7/die",
            src: "enemy/viking/die7.png",
            width: 32,
            height: 26,
            frames: 6
        }, {
            name: "enemy/unit/8/die",
            src: "enemy/viking/die8.png",
            width: 28,
            height: 24,
            frames: 6
        }, {
            name: "enemy/unit/9/die",
            src: "enemy/viking/die9.png",
            width: 34,
            height: 26,
            frames: 6
        }, {
            name: "enemy/unit/1/walk",
            src: "enemy/viking/walk1.png",
            width: 16,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/10/walk",
            src: "enemy/viking/walk10.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/11/walk",
            src: "enemy/viking/walk11.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/12/walk",
            src: "enemy/viking/walk12.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/13/walk",
            src: "enemy/viking/walk13.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/14/walk",
            src: "enemy/viking/walk14.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/15/walk",
            src: "enemy/viking/walk15.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/16/walk",
            src: "enemy/viking/walk16.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/17/walk",
            src: "enemy/viking/walk17.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/18/walk",
            src: "enemy/viking/walk18.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/19/walk",
            src: "enemy/viking/walk19.png",
            width: 24,
            height: 22,
            frames: 4
        }, {
            name: "enemy/unit/2/walk",
            src: "enemy/viking/walk2.png",
            width: 16,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/20/walk",
            src: "enemy/viking/walk20.png",
            width: 22,
            height: 22,
            frames: 4
        }, {
            name: "enemy/unit/21/walk",
            src: "enemy/viking/walk21.png",
            width: 18,
            height: 18,
            frames: 4
        }, {
            name: "enemy/unit/3/walk",
            src: "enemy/viking/walk3.png",
            width: 20,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/4/walk",
            src: "enemy/viking/walk4.png",
            width: 22,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/5/walk",
            src: "enemy/viking/walk5.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/6/walk",
            src: "enemy/viking/walk6.png",
            width: 20,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/7/walk",
            src: "enemy/viking/walk7.png",
            width: 20,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/9/walk",
            src: "enemy/viking/walk9.png",
            width: 18,
            height: 20,
            frames: 4
        }, {
            name: "enemy/unit/1/gold",
            src: "enemy/viking/gold1.png",
            width: 13,
            height: 20
        }, {
            name: "enemy/unit/10/gold",
            src: "enemy/viking/gold10.png",
            width: 27,
            height: 23
        }, {
            name: "enemy/unit/11/gold",
            src: "enemy/viking/gold11.png",
            width: 22,
            height: 20
        }, {
            name: "enemy/unit/12/gold",
            src: "enemy/viking/gold12.png",
            width: 23,
            height: 24
        }, {
            name: "enemy/unit/13/gold",
            src: "enemy/viking/gold13.png",
            width: 25,
            height: 23
        }, {
            name: "enemy/unit/14/gold",
            src: "enemy/viking/gold14.png",
            width: 23,
            height: 23
        }, {
            name: "enemy/unit/15/gold",
            src: "enemy/viking/gold15.png",
            width: 20,
            height: 23
        }, {
            name: "enemy/unit/16/gold",
            src: "enemy/viking/gold16.png",
            width: 19,
            height: 26
        }, {
            name: "enemy/unit/17/gold",
            src: "enemy/viking/gold17.png",
            width: 22,
            height: 25
        }, {
            name: "enemy/unit/18/gold",
            src: "enemy/viking/gold18.png",
            width: 19,
            height: 20
        }, {
            name: "enemy/unit/19/gold",
            src: "enemy/viking/gold19.png",
            width: 21,
            height: 22
        }, {
            name: "enemy/unit/2/gold",
            src: "enemy/viking/gold2.png",
            width: 18,
            height: 20
        }, {
            name: "enemy/unit/20/gold",
            src: "enemy/viking/gold20.png",
            width: 23,
            height: 22
        }, {
            name: "enemy/unit/21/gold",
            src: "enemy/viking/gold21.png",
            width: 19,
            height: 19
        }, {
            name: "enemy/unit/3/gold",
            src: "enemy/viking/gold3.png",
            width: 19,
            height: 20
        }, {
            name: "enemy/unit/4/gold",
            src: "enemy/viking/gold4.png",
            width: 24,
            height: 20
        }, {
            name: "enemy/unit/5/gold",
            src: "enemy/viking/gold5.png",
            width: 16,
            height: 18
        }, {
            name: "enemy/unit/6/gold",
            src: "enemy/viking/gold6.png",
            width: 15,
            height: 20
        }, {
            name: "enemy/unit/7/gold",
            src: "enemy/viking/gold7.png",
            width: 17,
            height: 25
        }, {
            name: "enemy/unit/8/gold",
            src: "enemy/viking/gold8.png",
            width: 14,
            height: 21
        }, {
            name: "enemy/unit/9/gold",
            src: "enemy/viking/gold9.png",
            width: 24,
            height: 18
        }, {
            name: "enemy/unit/bones1",
            src: "enemy/viking/bones1.png",
            width: 38,
            height: 25,
            frames: 21
        }, {
            name: "enemy/unit/bones2",
            src: "enemy/viking/bones2.png",
            width: 41,
            height: 22,
            frames: 21
        }, {
            name: "enemy/unit/bones3",
            src: "enemy/viking/bones3.png",
            width: 37,
            height: 27,
            frames: 21
        }, {
            name: "enemy/unit/bones4",
            src: "enemy/viking/bones4.png",
            width: 37,
            height: 27,
            frames: 21
        }, {
            name: "enemy/unit/bones5",
            src: "enemy/viking/bones5.png",
            width: 41,
            height: 22,
            frames: 21
        }, {
            name: "enemy/unit/bones6",
            src: "enemy/viking/bones6.png",
            width: 38,
            height: 25,
            frames: 21
        }, {
            name: "enemy/unit/bones7",
            src: "enemy/viking/bones7.png",
            width: 35,
            height: 33,
            frames: 21
        }, {
            name: "enemy/boat/1",
            src: "enemy/boat/1.png",
            width: 45,
            height: 38
        }, {
            name: "enemy/boat/2",
            src: "enemy/boat/2.png",
            width: 45,
            height: 38
        }, {
            name: "enemy/boat/3",
            src: "enemy/boat/3.png",
            width: 43,
            height: 38
        }, {
            name: "enemy/boat/4",
            src: "enemy/boat/4.png",
            width: 43,
            height: 38
        }, {
            name: "enemy/boat/5",
            src: "enemy/boat/5.png",
            width: 43,
            height: 38
        }, {
            name: "enemy/boat/6",
            src: "enemy/boat/6.png",
            width: 43,
            height: 38
        }, {
            name: "enemy/boat/7",
            src: "enemy/boat/7.png",
            width: 43,
            height: 38
        }, {
            name: "enemy/boat/8",
            src: "enemy/boat/8.png",
            width: 45,
            height: 38
        }, {
            name: "enemy/boat/9",
            src: "enemy/boat/9.png",
            width: 45,
            height: 38
        }, {
            name: "enemy/boat/10",
            src: "enemy/boat/10.png",
            width: 45,
            height: 38
        }, {
            name: "enemy/boat/11",
            src: "enemy/boat/11.png",
            width: 45,
            height: 38
        }, {
            name: "enemy/boat/12",
            src: "enemy/boat/12.png",
            width: 43,
            height: 38
        }, {
            name: "enemy/boat/13",
            src: "enemy/boat/13.png",
            width: 43,
            height: 38
        }, {
            name: "enemy/boat/14",
            src: "enemy/boat/14.png",
            width: 45,
            height: 38
        }, {
            name: "enemy/boat/15",
            src: "enemy/boat/15.png",
            width: 45,
            height: 38
        }, {
            name: "enemy/boat/16",
            src: "enemy/boat/16.png",
            width: 45,
            height: 39
        }, {
            name: "enemy/boat/17",
            src: "enemy/boat/17.png",
            width: 43,
            height: 39
        }, {
            name: "enemy/boat/18",
            src: "enemy/boat/18.png",
            width: 43,
            height: 39
        }, {
            name: "enemy/boat/19",
            src: "enemy/boat/19.png",
            width: 45,
            height: 38
        }, {
            name: "enemy/boat/20",
            src: "enemy/boat/20.png",
            width: 43,
            height: 40
        }, {
            name: "enemy/loki",
            src: "enemy/loki.png",
            width: 41,
            height: 40,
            frames: 11
        }, {
            name: "enemy/coin",
            src: "enemy/coin.png",
            width: 8,
            height: 8
        }, {
            name: "upgrade/image",
            src: "upgrade/upgrade.png",
            width: 46,
            height: 50,
            frames: 12
        }, {
            name: "upgrade/sign",
            src: "upgrade/upgrade_sign.png",
            width: 22,
            height: 21
        }, {
            name: "upgrade/slot",
            src: "upgrade/upgrade_slot.png",
            width: 93,
            height: 89
        }, {
            name: "upgrade/scale",
            src: "upgrade/upgrade_scale.png",
            width: 16,
            height: 55
        }, {
            name: "tutorial/attack",
            src: "tutorial/attack.png",
            frames: 1,
            layers: 1,
            width: 172,
            height: 70
        }, {
            name: "tutorial/cannon",
            src: "tutorial/cannon.png",
            frames: 1,
            layers: 1,
            width: 126,
            height: 88
        }, {
            name: "tutorial/money",
            src: "tutorial/money.png",
            frames: 1,
            layers: 1,
            width: 94,
            height: 42
        }, {
            name: "tutorial/power",
            src: "tutorial/power.png",
            frames: 1,
            layers: 1,
            width: 128,
            height: 94
        }, {
            name: "tutorial/skill",
            src: "tutorial/skill.png",
            frames: 1,
            layers: 1,
            width: 172,
            height: 138
        }, {
            name: "tutorial/arrow",
            src: "tutorial/arrow.png",
            frames: 1,
            layers: 1,
            width: 22,
            height: 30
        }, {
            name: "tutorial/hand",
            src: "tutorial/hand.png",
            frames: 3,
            layers: 1,
            width: 48,
            height: 70
        }, {
            name: "tile_horizontal",
            src: "tile_horizontal.png",
            frames: 1,
            layers: 1,
            width: 32,
            height: 34
        }, {
            name: "fonts/font1",
            src: "fonts/font1.png",
            frames: 1,
            layers: 1,
            width: 512,
            height: 384
        }, {
            name: "fonts/font2",
            src: "fonts/font2.png",
            frames: 1,
            layers: 1,
            width: 512,
            height: 263
        }, {
            name: "fonts/font3",
            src: "fonts/font3.png",
            frames: 1,
            layers: 1,
            width: 512,
            height: 263
        }, {
            name: "fonts/font4",
            src: "fonts/font4.png",
            frames: 1,
            layers: 1,
            width: 512,
            height: 473
        }, {
            name: "fonts/font5",
            src: "fonts/font5.png",
            frames: 1,
            layers: 1,
            width: 512,
            height: 108
        }, {
            name: "fonts/font_red",
            src: "fonts/font_red.png",
            frames: 1,
            layers: 1,
            width: 512,
            height: 338
        }, {
            name: "fonts/font6",
            src: "fonts/font6.png",
            frames: 1,
            layers: 1,
            width: 322.5,
            height: 82.5
        },{
            name: "fonts/font7",
            src: "fonts/font7.png",
            frames: 1,
            layers: 1,
            width: 250,
            height: 365
        }],
        sounds: ["sounds/attack_blue", "sounds/attack_green", "sounds/attack_magic", "sounds/attack_red", "sounds/attack_shot", "sounds/attack_yellow", "sounds/battle_lose", "sounds/battle_win", "sounds/boat_dead", "sounds/call", "sounds/click", "sounds/crash", "sounds/dead", "sounds/game", "sounds/gold", "sounds/hammer", "sounds/horn", "sounds/kick", "sounds/money", "sounds/music", "sounds/roar", "sounds/shield", "sounds/skill_blue", "sounds/skill_green", "sounds/skill_red", "sounds/skill_yellow", "sounds/slow_shot", "sounds/upgrades"]
    },
    CSSBack = new function() {
        var e;
        this.resize = function() {
            if (e) {
                var t = Utils.getWindowRect(),
                    i = t.height / e.height,
                    a = Math.floor(e.width * i),
                    g = Math.floor(e.height * i);
                document.body.style.backgroundSize = a + "px " + g + "px"
            }
        }
    },
    backgroundImage = null,
    CRENDER_DEBUG = !1;
"undefined" == typeof window.console && (window.console = {
    log: function() {}
});
var Utils;
window.Utils || (Utils = {}), Utils.detectMobileBrowser = function() {
    var e = !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i));
    return e
}, Utils.detectTouchScreen = function() {
    return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}, Utils.getTouchStartEvent = function() {
    return Utils.isWindowsPhone() ? "MSPointerDown" : "touchstart"
}, Utils.getTouchMoveEvent = function() {
    return Utils.isWindowsPhone() ? "MSPointerMove" : "touchmove"
}, Utils.getTouchEndEvent = function() {
    return Utils.isWindowsPhone() ? "MSPointerUp" : "touchend"
}, Utils.touchScreen = Utils.detectMobileBrowser(), Utils.globalScale = 1, Utils.globalPixelScale = 1, Utils.isWindowHidden = !1, Utils.DOMMainContainerId = "main_container", Utils.DOMProgressContainerId = "progress_container", Utils.DOMProgressId = "progress", Utils.DOMScreenBackgroundContainerId = "screen_background_container", Utils.DOMScreenBackgroundWrapperId = "screen_background_wrapper", Utils.DOMScreenBackgroundId = "screen_background", Utils.DOMScreenContainerId = "screen_container", Utils.DOMScreenWrapperId = "screen_wrapper", Utils.DOMScreenId = "screen", Utils.DOMP2lContainerId = "p2l_container", Utils.DOMP2lId = "p2l", Utils.DOMMarkId = "mark", Utils.trace = function(e) {
    var t;
    try {
        throw new Error("")
    } catch (i) {
        t = i.stack || ""
    }
    return t = t.split("\n"), t.splice(0, 2), t = t.join("\n"), e || console.log(t), t
}, Utils.setCookie = function(e, t) {
    try {
        t = btoa(t);
        window.localStorage.setItem(e, t)
    } catch (i) {
        var a = new Date;
        a.setDate(a.getDate() + 3650), document.cookie = e + "=" + t + "; expires=" + a.toUTCString()
    }
}, Utils.getCookie = function(e) {
    var t;
    try {
        t = window.localStorage.getItem(e)
        if(t != undefined){
            t = atob(t);
        }
    } catch (i) {
        var a = e + "=",
            g = document.cookie.indexOf(a);
        if (-1 == g) return null;
        var s = document.cookie.indexOf(";", g + a.length); - 1 == s && (s = document.cookie.length), t = decodeURIComponent(document.cookie.substring(g + a.length, s))
    }
    return t
}, Utils.bindEvent = function(e, t, i) {
    e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t.toLowerCase(), i)
}, Utils.unbindEvent = function(e, t, i) {
    e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent && e.detachEvent("on" + t, i)
}, Utils.getObjectLeft = function(e) {
    var t = e.offsetLeft;
    return e.offsetParent && (t += Utils.getObjectLeft(e.offsetParent)), t
}, Utils.getObjectTop = function(e) {
    var t = e.offsetTop;
    return e.offsetParent && (t += Utils.getObjectTop(e.offsetParent)), t
}, Utils.parseGet = function() {
    var e, t, i = {},
        a = window.location.toString(),
        g = window.location.toString().indexOf("?");
    if (g >= 0) {
        a = a.substr(g + 1, a.length), t = a.split("&");
        for (var s = 0; s < t.length; s++) e = t[s].split("="), i[e[0]] = e[1]
    }
    return i
}, Utils.getMouseCoord = function(e, t) {
    var i = e || window.event;
    if (i.touches && (i = i.touches[0]), !i) return {
        x: 0,
        y: 0
    };
    var a = 0,
        g = 0,
        s = 0,
        o = 0;
    t && (a = Utils.getObjectLeft(t), g = Utils.getObjectTop(t)), i.pageX || i.pageY ? (s = i.pageX, o = i.pageY) : (i.clientX || i.clientY) && (s = i.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft, o = i.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop);
    var h = s - a,
        n = o - g;
    return {
        x: h,
        y: n
    }
}, Utils.removeFromArray = function(e, t) {
    for (var i = [], a = 0; a < e.length; a++) e[a] != t && i.push(e[a]);
    return i
}, Utils.showLoadProgress = function(e) {
    var t = Utils.globalScale,
        i = "Loading: " + e + "%";
    i += "<br><br>", i += '<div style="display: block; background: #000; width: ' + e * t * 2 + "px; height: " + 10 * t + 'px;">&nbsp;</div>', document.getElementById(Utils.DOMProgressId).innerHTML = i
}, Utils.hideAddressBarLock = !1, Utils.mobileHideAddressBar = function() {
    Utils.hideAddressBarLock || window.scrollTo(0, 1)
}, Utils.mobileCheckIphone4 = function() {
    return Utils.detectMobileBrowser() && navigator.userAgent.indexOf("iPhone") >= 0 && 2 == window.devicePixelRatio
}, Utils.mobileCheckBrokenAndroid = function() {
    return Utils.detectMobileBrowser() && Utils.isAndroid() && !Utils.isChrome() && !Utils.isFirefox()
}, Utils.mobileCheckSlowDevice = function() {
    return Utils.mobileCheckBrokenAndroid() && navigator.userAgent.toLowerCase().indexOf("sm-t310") >= 0 || Utils.detectMobileBrowser() && Utils.isAndroid() && Utils.isFirefox() && navigator.userAgent.toLowerCase().indexOf("sm-t310") >= 0
}, Utils.isChrome = function() {
    var e = !1;
    if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0 && (e = !0, Utils.isAndroid())) {
        var t = parseInt((/Chrome\/([0-9]+)/.exec(navigator.appVersion) || 0)[1], 10) || 0;
        22 > t && (e = !1)
    }
    return e
}, Utils.isAndroid = function() {
    return navigator.userAgent.toLowerCase().indexOf("android") >= 0
}, Utils.isIOS = function() {
    return !(Utils.isWindowsPhone() || !navigator.userAgent.toLowerCase().match(/(ipad|iphone|ipod)/g))
}, Utils.isPlayFreeBrowser = function() {
    return navigator.userAgent.toLowerCase().indexOf("playfreebrowser") >= 0
}, Utils.isFirefox = function() {
    return navigator.userAgent.toLowerCase().indexOf("firefox") >= 0
}, Utils.isIE = function() {
    return navigator.userAgent.toLowerCase().indexOf("MSIE") >= 0 || "Microsoft Internet Explorer" == navigator.appName
}, Utils.isWindowsPhone = function() {
    return navigator.userAgent.toLowerCase().indexOf("windows phone") >= 0
}, Utils.disableCorrectPixelRatio = !1, Utils.mobileCorrectPixelRatio = function() {
    if (!Utils.isWindowsPhone()) {
        for (var e = document.getElementsByTagName("head")[0], t = e.getElementsByTagName("meta"), i = !0, a = null, g = "", s = 0; s < t.length; s++)
            if ("viewport" == t[s].name) {
                a = t[s], i = !1;
                break
            }
        i && (a = document.createElement("meta"), a.name = "viewport"), g += "width=device-width, user-scalable=no";
        var o = 1 / (window.devicePixelRatio ? window.devicePixelRatio : 1);
        o = o.toFixed(2), Utils.disableCorrectPixelRatio && (o = 1), g += ", initial-scale=" + o + ", maximum-scale=" + o + ", minimum-scale=" + o, a.content = g, i && document.getElementsByTagName("head")[0].appendChild(a)
    }
}, Utils.supportedScales = [{
    scale: 1,
    width: 320,
    height: 480
}, {
    scale: 1.5,
    width: 480,
    height: 720
}, {
    scale: 2,
    width: 640,
    height: 960
}], Utils.getMobileScreenResolution = function(e) {
    var t = 1,
        i = window.innerWidth,
        a = window.innerHeight;
    i && a || (i = screen.width, a = screen.height), Utils.disableCorrectPixelRatio && (t = window.devicePixelRatio ? window.devicePixelRatio : 1), i *= t, a *= t;
    var g = Utils.clone(Utils.supportedScales),
        s = {
            width: 0,
            height: 0
        },
        o = "";
    if (Utils.detectMobileBrowser()) s.width = Math.min(i, a), s.height = Math.max(i, a), o = "height";
    else {
        if (e)
            for (var h = 0; h < g.length; h++) {
                var n = g[h].width;
                g[h].width = g[h].height, g[h].height = n
            }
        s.width = i, s.height = a, o = "height"
    }
    var f = Number.MAX_VALUE;
    for (h = 0; h < g.length; h++) {
        var d = Math.abs(s[o] - g[h][o]);
        f > d && (f = d, t = g[h].scale)
    }
    return Utils.getScaleScreenResolution(t, e);
}, Utils.getScaleScreenResolution = function(e, t) {
    var i = Math.round(320 * e),
        a = Math.round(480 * e);
    return {
        width: t ? a : i,
        height: t ? i : a,
        scale: e
    }
}, Utils.imagesRoot = "images", Utils.initialResolution = {
    width: 320,
    height: 480,
    scale: 1
}, Utils.ignoreMobileHeightCorrection = !1, Utils.p2lImagePath = null, Utils.createLayout = function(e, t) {
    var i = Utils.globalScale;
    Utils.initialResolution = t;
    var a = window.innerHeight;
    document.body.style.overflow = "hidden";
    var g = Utils.p2lImagePath || Utils.imagesRoot + "/p2l.jpg",
        s = "";
    s += '<div id="' + Utils.DOMProgressContainerId + '" align="center" style="width: 100%; height: ' + a + 'px; display: block; position: absolute; left: 0px; top: 0px;">', s += '<table cellspacing="0" cellpadding="0" border="0"><tr><td id="' + Utils.DOMProgressId + '" align="center" valign="middle" style="width: ' + t.width + "px; height: " + t.height + "px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: " + 12 * i + 'px; vertical-align: middle; box-sizing: border-box"></td></tr></table>', s += "</div>", s += '<div id="' + Utils.DOMScreenBackgroundContainerId + '" style="width: 100%; height: ' + a + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">', s += '<div id="' + Utils.DOMScreenBackgroundWrapperId + '" style="width: ' + t.width + "px; height: " + t.height + 'px; position: relative; left: 0px; overflow: hidden;">', s += '<canvas id="' + Utils.DOMScreenBackgroundId + '" width="' + t.width + '" height="' + t.height + '" style="transform: translateZ(0)"></canvas>', s += "</div>", s += "</div>", s += '<div id="' + Utils.DOMScreenContainerId + '" style="width: 100%; height: ' + a + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">', s += '<div id="' + Utils.DOMScreenWrapperId + '" width="' + t.width + '" height="' + t.height + '" style="width: ' + t.width + "px; height: " + t.height + 'px; position: relative; left: 0px; overflow: hidden;">', s += '<canvas id="' + Utils.DOMScreenId + '" style="position: absolute; left: 0px; top: 0px;" width="' + t.width + '" height="' + t.height + '">You browser does not support this application :(</canvas>', s += "</div>", s += "</div>", e.innerHTML = s;
    var o = document.createElement("div");
    o.setAttribute("id", Utils.DOMP2lContainerId), o.setAttribute("align", "center"), o.setAttribute("style", "width: 100%; height: " + a + "px; position: absolute; left: 0px; top: 0px; visibility: hidden; z-index: 1000; background-color: #fff; background-image: url(" + g + "); background-repeat: no-repeat; background-position: center center");
    var h = document.createElement("img");
    if (h.setAttribute("id", Utils.DOMP2lId), h.width = 1, h.height = 1, h.style.display = "none", o.appendChild(h), e.appendChild(o), window.parent == window && Utils.isAndroid() && Utils.isFirefox()) {
        var n = document.createElement("div");
        n.setAttribute("id", Utils.DOMMarkId), n.style.position = "fixed", n.style.right = "0px", n.style.bottom = "0px", n.style.width = "1px", n.style.height = "1px", n.style.background = "", n.style.zIndex = "100000", e.appendChild(n)
    }
    var f = document.createElement("style");
    f.type = "text/css";
    var d = "html body {-ms-content-zooming:none;";
    d += "content-zooming:none;", d += "-ms-touch-action:none;", d += "touch-action: none;} ", d += "body {margin:0;", d += "padding:0;", d += "background:#000;}", f.innerHTML = d, document.getElementsByTagName("head")[0].appendChild(f), Utils.addDetectTouchScreenEvents(), Utils.fitLayoutToScreen()
}, Utils.addDetectTouchScreenEvents = function() {
    var e = document.getElementById(Utils.DOMScreenId);
    Utils.bindEvent(e, "mousemove", function() {
        Utils.touchScreen = !1
    }), Utils.bindEvent(e, Utils.getTouchStartEvent(), function() {
        Utils.touchScreen = !0
    })
}, Utils.showMainLayoutContent = function() {
    document.getElementById(Utils.DOMProgressContainerId).style.display = "none", document.getElementById(Utils.DOMScreenContainerId).style.display = "block", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block"
}, Utils.preventEvent = function(e) {
    return e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0, e.returnValue = !1, !1
}, Utils.touchStartEventDisabled = !1, Utils.preventTouchStart = function() {
    Utils.touchStartEventDisabled && Utils.bindEvent(document.body, Utils.getTouchStartEvent(), Utils.preventEvent)
}, Utils.removePreventTouchStart = function() {
    Utils.touchStartEventDisabled && Utils.unbindEvent(document.body, Utils.getTouchStartEvent(), Utils.preventEvent)
}, Utils.addMobileListeners = function(e, t) {
    !t && navigator.userAgent.match(/(iPad|iPhone|iPod).*CPU.*OS 7_\d/i) || (Utils.touchStartEventDisabled = !0, Utils.preventTouchStart()), Utils.isPlayFreeBrowser() || Utils.bindEvent(window, "scroll", function() {
        setTimeout(Utils.mobileHideAddressBar, 300)
    });
    var i = Utils.getVisibiltyProps();
    i.visibilityChange && document.addEventListener(i.visibilityChange, Utils.handleVisibilityChange, !1), setInterval(function() {
        Utils.checkOrientation(e)
    }, 500), setTimeout(Utils.mobileHideAddressBar, 500)
}, Utils.handleVisibilityChange = function() {
    Utils.isWindowHidden = document[Utils.getVisibiltyProps().hidden], Utils.fixChromeContext(), Utils.dispatchEvent(Utils.isWindowHidden ? "hidewindow" : "showwindow")
}, Utils.getVisibiltyProps = function() {
    var e, t;
    return "undefined" != typeof document.hidden ? (e = "hidden", t = "visibilitychange") : "undefined" != typeof document.mozHidden ? (e = "mozHidden", t = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange"), {
        hidden: e,
        visibilityChange: t
    }
}, Utils.staticWindowRect = null, Utils.setWindowRect = function(e, t) {
    Utils.staticWindowRect = {
        width: e,
        height: t
    }
}, Utils.getWindowRect = function() {
    return window.parent == window && Utils.isAndroid() && Utils.isFirefox() && document.getElementById(Utils.DOMMarkId) ? {
        width: window.innerWidth,
        height: document.getElementById(Utils.DOMMarkId).offsetTop + 1
    } : {
        width: window.innerWidth,
        height: window.innerHeight
    }
}, Utils.storeOrient = null, Utils.noCheckOrient = !1, Utils.checkOrientation = function(e) {
    if (Utils.detectMobileBrowser() && document.getElementById(Utils.DOMScreenContainerId) && !Utils.noCheckOrient && 1 != Utils.parseGet().nocheckorient) {
        var t = Utils.getWindowRect(),
            i = t.width > t.height;
        if (Utils.storeOrient !== i) {
            Utils.storeOrient = i;
            var a = i == e;
            a ? (Utils.dispatchEvent("unlockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "hidden", document.getElementById(Utils.DOMProgressContainerId).style.visibility = "visible", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block", document.getElementById(Utils.DOMScreenContainerId).style.display = "block") : (Utils.dispatchEvent("lockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "visible", document.getElementById(Utils.DOMProgressContainerId).style.visibility = "hidden", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "none", document.getElementById(Utils.DOMScreenContainerId).style.display = "none"), setTimeout(Utils.mobileHideAddressBar, 900), setTimeout(Utils.fitLayoutToScreen, 1e3)
        }
    }
}, Utils.fitLayoutTimer = 0, Utils.addFitLayoutListeners = function() {
    Utils.fitLayoutTimer = setInterval(Utils.fitLayoutToScreen, 500)
}, Utils.removeFitLayoutListeners = function() {
    clearInterval(Utils.fitLayoutTimer)
}, Utils.fitLayoutLock = !1, Utils.fitLayoutCorrectHeight = 0, Utils.fitLayoutAlign = "center", Utils.fitLayoutVerticalAlign = "top", Utils.layoutMargin = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
}, Utils.fixChromeContext = function() {
    if (Utils.isChrome()) {
        var e = document.getElementById(Utils.DOMScreenId);
        e && (e.width++, e.width--)
    }
}, Utils.fitLayoutToScreen = function(e) {
    var t, i, a, g, s;
    if (Utils.isWindowHidden && Utils.fixChromeContext(), !Utils.fitLayoutLock && (s = Utils.getWindowRect(), "object" == typeof e && e.width || (g = Utils.staticWindowRect ? Utils.staticWindowRect : s, i = g.width, a = g.height, a += Utils.fitLayoutCorrectHeight, a -= Utils.layoutMargin.top, a -= Utils.layoutMargin.bottom, i -= Utils.layoutMargin.left, i -= Utils.layoutMargin.right, e = {
        width: i,
        height: a
    }), e.width && e.height && (t = document.getElementById(Utils.DOMScreenWrapperId)))) {
        t.initWidth || (t.initWidth = Utils.initialResolution.width, t.initHeight = Utils.initialResolution.height), i = t.initWidth, a = t.initHeight;
        var o = e.width / i,
            h = e.height / a,
            n = h > o ? o : h;
        if (Utils.globalPixelScale = n, i = Math.floor(i * n), a = Math.floor(a * n), t.lastWidth != e.width || t.lastHeight != e.height || t.lastRealWidth != s.width || t.lastRealHeight != s.height) {
            t.lastWidth = e.width, t.lastHeight = e.height, t.lastRealWidth = s.width, t.lastRealHeight = s.height, Utils.resizeElement(Utils.DOMScreenId, i, a), Utils.resizeElement(Utils.DOMScreenBackgroundId, i, a), Utils.resizeElement(Utils.DOMProgressContainerId, g.width, g.height), Utils.resizeElement(Utils.DOMProgressId, i, a), t = Utils.resizeElement(Utils.DOMScreenWrapperId, i, a), Utils.alignElement(t, s, i, a), t = Utils.resizeElement(Utils.DOMScreenBackgroundWrapperId, i, a), Utils.alignElement(t, s, i, a), Utils.resizeElement(Utils.DOMP2lContainerId, g.width, g.height), Utils.resizeElement(Utils.DOMScreenContainerId, g.width, g.height), Utils.resizeElement(Utils.DOMScreenBackgroundContainerId, g.width, g.height);
            var f = Math.floor(Math.min(s.width, s.height) / 2);
            t = document.getElementById(Utils.DOMP2lContainerId), t && (t.style.backgroundSize = f + "px " + f + "px"), Utils.dispatchEvent("fitlayout"), Utils.isPlayFreeBrowser() && window.scrollTo(1, 2), setTimeout(Utils.mobileHideAddressBar, 10), Utils.fixChromeContext()
        }
    }
}, Utils.alignElement = function(e, t, i, a) {
    e && ("left" == Utils.fitLayoutAlign ? e.style.left = Utils.layoutMargin.left + "px" : "right" == Utils.fitLayoutAlign ? e.style.left = Math.floor(t.width - i - Utils.layoutMargin.right) + "px" : e.style.left = Math.floor((t.width - i - Utils.layoutMargin.left - Utils.layoutMargin.right) / 2) + "px", "top" == Utils.fitLayoutVerticalAlign ? e.style.top = Utils.layoutMargin.top + "px" : "bottom" == Utils.fitLayoutVerticalAlign ? e.style.top = Math.floor(t.height - a - Utils.layoutMargin.bottom) + "px" : e.style.top = Math.floor((t.height - a - Utils.layoutMargin.top - Utils.layoutMargin.bottom) / 2) + "px")
}, Utils.resizeElement = function(e, t, i) {
    var a = document.getElementById(e);
    return a ? (a.style.width = Math.floor(t) + "px", a.style.height = Math.floor(i) + "px", a) : null
}, Utils.drawIphoneLimiter = function(e, t) {
    t ? e.drawRectangle(240, 295, 480, 54, "#f00", !0, .5, !0) : e.drawRectangle(160, 448, 320, 64, "#f00", !0, .5, !0)
}, Utils.drawGrid = function(e, t, i) {
    "undefined" == typeof t && (t = !1);
    var a = 10,
        g = 10;
    "undefined" == typeof i && (i = "#FFF");
    for (var s = 1, o = {
        w: t ? 480 : 320,
        h: t ? 320 : 480
    }, h = a; h < o.w; h += a) {
        var n = .1 + .1 * ((h - a) / a % 10);
        e.drawLine(h, 0, h, o.h, s, i, n)
    }
    for (var f = g; f < o.h; f += g) n = .1 + .1 * ((f - g) / g % 10), e.drawLine(0, f, o.w, f, s, i, n)
}, Utils.drawScaleFix = function(e, t) {.75 == Utils.globalScale && (t ? e.drawRectangle(507, 160, 54, 320, "#000", !0, 1, !0) : e.drawRectangle(160, 507, 320, 54, "#000", !0, 1, !0)), 1.5 == Utils.globalScale && (t ? e.drawRectangle(510, 160, 60, 320, "#000", !0, 1, !0) : e.drawRectangle(160, 510, 320, 60, "#000", !0, 1, !0))
}, Utils.grad2radian = function(e) {
    return e / (180 / Math.PI)
}, Utils.radian2grad = function(e) {
    return e * (180 / Math.PI)
}, Utils.eventsListeners = [], Utils.onlockscreen = null, Utils.onunlockscreen = null, Utils.onhidewindow = null, Utils.onshowwindow = null, Utils.onfitlayout = null, Utils.addEventListener = function(e, t) {
    EventsManager.addEvent(Utils, e, t, !1)
}, Utils.addEventListenerOnce = function(e, t) {
    EventsManager.addEvent(Utils, e, t, !0)
}, Utils.removeEventListener = function(e, t) {
    EventsManager.removeEvent(Utils, e, t)
}, Utils.dispatchEvent = function(e, t) {
    return EventsManager.dispatchEvent(Utils, e, t)
}, Utils.isArray = function(e) {
    return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
}, Utils.isPlainObject = function(e) {
    return e && e.constructor ? e.constructor === Object : !1
}, Utils.getFunctionArguments = function(e, t) {
    return "undefined" == typeof t && (t = 0), [].slice.call(e, t)
}, Utils.proxy = function(e, t) {
    for (var i = [], a = 2; a < arguments.length; a++) i.push(arguments[a]);
    return function() {
        for (var a = [], g = 0; g < arguments.length; g++) a.push(arguments[g]);
        return e.apply(t || this, a.concat(i))
    }
}, Utils.extend = function(e, t) {
    var i = function() {};
    i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e, e.superclass = t.prototype
}, Utils.callSuperConstructor = function(e, t) {
    for (var i = [], a = 2; a < arguments.length; a++) i.push(arguments[a]);
    e.superclass.constructor.apply(t, i)
}, Utils.callSuperMethod = function(e, t, i) {
    for (var a = [], g = 3; g < arguments.length; g++) a.push(arguments[g]);
    return e.superclass[i].apply(t, a)
}, Utils.copyObjectProps = function(e, t) {
    for (var i in e)
        if (e.hasOwnProperty(i))
            if (Utils.isArray(e[i])) {
                t[i] = [];
                for (var a = 0; a < e[i].length; a++) "object" == typeof e[i][a] && null !== e[i][a] ? (t[i][a] = Utils.cloneEmptyObject(e[i][a]), Utils.copyObjectProps(e[i][a], t[i][a])) : t[i][a] = e[i][a]
            } else Utils.isPlainObject(e[i]) ? (t[i] = {}, Utils.copyObjectProps(e[i], t[i])) : t[i] = e[i]
}, Utils.cloneEmptyObject = function(e) {
    return e.constructor ? new e.constructor : {}
}, Utils.clone = function(e) {
    if (!e || "object" != typeof e) return e;
    var t = Utils.cloneEmptyObject(e);
    return Utils.copyObjectProps(e, t), t
}, Utils.switchToTimeMode = function(e) {
    Stage.TIMER_MODE = Stage.TIMER_MODE_TIME, Tween.STEP_TYPE = Tween.STEP_BY_TIME, StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_TIME, Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_TIME, Sprite.CHANGE_FRAME_DELAY = e
}, Utils.getGameID = function() {
    if (window.GAME_ID && "my_game" != window.GAME_ID) return window.GAME_ID;
    for (var e = window.location.toString(), t = e.split("/"), i = ""; !i;) i = t.pop(), i.split(".").length > 1 && (i = ""), 0 == t.length && (i = "my_game");
    return i
}, Utils.ajax = function(e, t, i, a, g, s) {
    function o(e) {
        "json" == a && (e = JSON.parse(e)), "xml" == a && (e = Utils.parseXMLString(e)), g && g(e, h)
    }
    var h, n = !1;
    if (h = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), Utils.isIE() && window.XDomainRequest && !document.addEventListener) {
        var f = document.createElement("a");
        f.href = e, window.location.hostname && f.hostname && window.location.hostname != f.hostname && (h = new XDomainRequest, n = !0)
    }
    if (n ? (h.onload = function() {
        o(h.responseText)
    }, h.onerror = function() {
        s && s(1, h)
    }, h.ontimeout = function() {
        s && s(0, h)
    }) : h.onreadystatechange = function() {
        if (4 == h.readyState) {
            var e = h.responseText;
            200 != h.status && 0 != h.status || !e ? s && s(h.status, h) : o(e)
        }
    }, i) {
        if ("string" != typeof i) {
            var d = [];
            for (var A in i) d.push(encodeURIComponent(A) + "=" + encodeURIComponent(i[A]));
            i = d.join("&")
        }
    } else i = "";
    t || (t = "GET"), h.open(t, e + ("GET" == t ? "?" + i : ""), !0), "POST" != t || n || h.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), h.send("GET" != t ? i : null)
}, Utils.get = function(e, t, i, a, g) {
    Utils.ajax(e, "GET", t, i, a, g)
}, Utils.post = function(e, t, i, a, g) {
    Utils.ajax(e, "POST", t, i, a, g)
}, Utils.getBezierBasis = function(e, t, i) {
    function a(e) {
        return 1 >= e ? 1 : e * a(e - 1)
    }
    return a(t) / (a(e) * a(t - e)) * Math.pow(i, e) * Math.pow(1 - i, t - e)
}, Utils.getBezierCurve = function(e, t) {
    "undefined" == typeof t && (t = .1);
    var i = [];
    t /= e.length;
    for (var a = 0; 1 + t > a; a += t) {
        a > 1 && (a = 1);
        var g = i.length;
        i[g] = {
            x: 0,
            y: 0
        };
        for (var s = 0; s < e.length; s++) {
            var o = Utils.getBezierBasis(s, e.length - 1, a);
            i[g].x += e[s].x * o, i[g].y += e[s].y * o
        }
    }
    return i
}, Utils.parseXMLString = function(e) {
    var t = null;
    if ("undefined" != typeof window.DOMParser) t = (new window.DOMParser).parseFromString(e, "text/xml");
    else {
        if ("undefined" == typeof window.ActiveXObject || !new window.ActiveXObject("Microsoft.XMLDOM")) throw new Error("No XML parser found");
        t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)
    }
    return t
}, Utils.gotoFullScreen = function(e) {
    e = e || document.documentElement, e.requestFullscreen && e.requestFullscreen(), e.webkitRequestFullscreen && e.webkitRequestFullscreen(), e.mozRequestFullScreen && e.mozRequestFullScreen(), e.msRequestFullscreen && e.msRequestFullscreen()
}, Utils.cancelFullScreen = function() {
    document.cancelFullScreen && document.cancelFullScreen(), document.webkitCancelFullScreen && document.webkitCancelFullScreen(), document.mozCancelFullScreen && document.mozCancelFullScreen(), document.msExitFullscreen && document.msExitFullscreen(), document.exitFullscreen && document.exitFullscreen()
}, Utils.isFullScreen = function() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
}, Utils.isFullScreenEnabled = function() {
    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
}, Utils.toggleFullScreen = function(e) {
    Utils.isFullScreen() ? Utils.cancelFullScreen() : Utils.gotoFullScreen(e)
}, Utils.sign = function(e) {
    return 0 == e ? 0 : e > 0 ? 1 : -1
}, ImagesPreloader.prototype.load = function(e, t, i) {
    this.data = e, this.endCallback = t, this.processCallback = i;
    for (var a = 0; a < this.data.length; a++) {
        var g = this.data[a],
            s = new Image;
        s.src = g.src, this.loadedImages[g.name] = s
    }
    this.wait()
}, ImagesPreloader.prototype.wait = function() {
    var e = 0,
        t = 0;
    for (var i in this.loadedImages) this.loadedImages[i].complete && e++, t++;
    e >= t ? this.endCallback && this.endCallback(this.loadedImages) : (this.processCallback && this.processCallback(Math.floor(e / t * this.maxProgressVal + this.minProgressVal)), setTimeout(this.wait, 50))
}, SoundsPreloader.prototype.isMp3Support = function() {
    return "" != document.createElement("audio").canPlayType("audio/mpeg")
}, SoundsPreloader.prototype.isWebAudio = function() {
    return Boolean(window.AudioMixer) && AudioMixer.isWebAudioSupport()
}, SoundsPreloader.prototype.load = function(e, t, i) {
    if (e && (this.sounds = e), t && (this.endCallback = t), i && (this.progressCallback = i), !this.sounds || this.sounds.length < 1 || !this.isWebAudio()) return void(this.endCallback && this.endCallback());
    var a, g, s, o = this.isMp3Support() ? "mp3" : "ogg";
    this.loadedCount = 0;
    for (var h = this, n = 0; n < this.sounds.length; n++) g = this.sounds[n] + "." + o, this.isWebAudio() ? (a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), a.open("GET", g, !0), a.responseType = "arraybuffer", a.onreadystatechange = function() {
        if (4 == this.readyState && (200 == this.status || 0 == this.status)) {
            var e = this.soundSrc;
            AudioMixer.waContext || (AudioMixer.waContext = new AudioContext), AudioMixer.waContext.decodeAudioData(this.response, function(t) {
                AudioMixer.buffer[e] = t, h.soundIsLoaded(null, h)
            }, function() {
                h.soundIsLoaded(null, h)
            })
        }
        4 == this.readyState && 404 == this.status && h.soundIsLoaded(null, h)
    }, a.soundSrc = g, a.send()) : (s = document.createElement("audio"), s.src = g, s.type = "mp3" == o ? "audio/mpeg" : "audio/ogg", s.preload = "auto", s.load(), s.addEventListener("canplay", Utils.proxy(this.soundIsLoaded, s, this)), s.addEventListener("canplaythrough", Utils.proxy(this.soundIsLoaded, s, this)))
}, SoundsPreloader.prototype.soundIsLoaded = function(e, t) {
    if (this.nodeName && "audio" == this.nodeName.toLowerCase()) {
        if (this.alreadyLoaded) return;
        this.alreadyLoaded = !0
    }
    t.loadedCount++, t.progressCallback && t.progressCallback(Math.floor(t.loadedCount / t.sounds.length * t.maxProgressVal + t.minProgressVal)), t.loadedCount >= t.sounds.length && t.endCallback && t.endCallback()
}, Asset.prototype.detectSize = function() {
    if (!this.bitmap) return !1;
    try {
        isNaN(this.width) && (this.width = this.bitmap.width ? parseInt(this.bitmap.width) : 0), isNaN(this.height) && (this.height = this.bitmap.height ? parseInt(this.bitmap.height) : 0)
    } catch (e) {
        CRENDER_DEBUG && console.log(e)
    }
    return !isNaN(this.width) && !isNaN(this.height)
}, Asset.prototype.normalize = function(e) {
    this.ready || this.detectSize() && ((isNaN(this.frames) || this.frames < 1) && (this.frames = 1), (isNaN(this.layers) || this.layers < 1) && (this.layers = 1), this.width = Math.ceil(this.width / this.layers / e), this.height = Math.ceil(this.height / this.frames / e), this.ready = !0)
}, AssetsLibrary.prototype.init = function(e, t) {
    "undefined" != typeof e && (this.path = e + ""), "undefined" != typeof t && (this.scale = parseFloat(t), isNaN(this.scale) && (this.scale = 1))
}, AssetsLibrary.prototype.load = function(e, t, i, a) {
    this.onload = e, this.onloadprogress = t;
    var g = new ImagesPreloader,
        s = [];
    for (var o in this.items) s.push(this.items[o]);
    "undefined" != typeof i && (g.minProgressVal = i), "undefined" != typeof a && (g.maxProgressVal = a), g.load(s, this.onLoadHandler, this.onLoadProgressHandler)
}, AssetsLibrary.prototype.onLoadProgressHandler = function(e) {
    "function" == typeof this.onloadprogress && this.onloadprogress(e)
}, AssetsLibrary.prototype.onLoadHandler = function(e) {
    this.loaded = !0;
    for (var t in e) {
        var i = e[t],
            a = this.items[t];
        a.bitmap = i, a.normalize(this.scale)
    }
    "function" == typeof this.onload && this.onload(this.items)
}, AssetsLibrary.prototype.addAssets = function(e) {
    if ("undefined" != typeof e && "object" == typeof e)
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            i.noscale = "undefined" == typeof i.noscale ? !1 : i.noscale, i.noscale || (i.src = "%SCALE%/" + i.src), this.addAsset(i)
        }
}, AssetsLibrary.prototype.addAsset = function(e, t, i, a, g, s) {
    function o(e) {
        var t = e.split("/");
        return t = t.pop(), t = t.split("."), t = t.shift() + ""
    }
    var h = null,
        n = null;
    "object" == typeof e && 1 == arguments.length && (t = e.name, i = e.width || NaN, a = e.height || NaN, g = e.frames || 1, s = e.layers || 1, h = e.spriteClass || null, n = e.properties || null, e = e.src), e = e.replace("%SCALE%", "%PATH%/" + this.scale), e = e.replace("%PATH%", this.path), "undefined" == typeof t && (t = o(e));
    var f = new Asset(t, e, i, a, g, s);
    if (f.spriteClass = h, n)
        for (var d in n) "undefined" == typeof f[d] && (f[d] = n[d]);
    return this.items[t] = f, f
}, AssetsLibrary.prototype.addObject = function(e) {
    var t = this.addAsset("%SCALE%/" + e.image, e.name, e.width * this.scale, e.height * this.scale, e.frames, e.layers);
    return t && (t.object = e), t
}, AssetsLibrary.prototype.getAsset = function(e, t) {
    var i = null;
    if ("undefined" != typeof this.items[e] && this.items[e].bitmap && (t = "undefined" == typeof t ? !0 : t, i = !t || this.items[e].ready ? this.items[e] : null), !i) throw new Error('Trying to get undefined asset "' + e + '"');
    return i
}, AssetsLibrary.prototype.getSprite = function(name, params, spriteClass) {
    var mc = null,
        asset = null;
    try {
        asset = this.getAsset(name, !0)
    } catch (e) {
        asset = new Asset
    }
    if (spriteClass = spriteClass || asset.spriteClass || this.spriteClass || Sprite, "string" == typeof spriteClass && (spriteClass = window[spriteClass] ? window[spriteClass] : eval(spriteClass)), mc = spriteClass.create && "function" == typeof spriteClass.create ? spriteClass.create(asset, this) : new spriteClass(asset.bitmap, asset.width, asset.height, asset.frames, asset.layers), params && "object" == typeof params)
        for (var prop in params) mc[prop] = params[prop];
    return mc
}, AssetsLibrary.prototype.getBitmap = function(e) {
    try {
        var t = this.getAsset(e, !0);
        return t.bitmap
    } catch (i) {
        return null
    }
}, Vector.prototype.isZero = function() {
    return 0 == this.x && 0 == this.y
}, Vector.prototype.clone = function() {
    return new Vector(this.x, this.y)
}, Vector.prototype.add = function(e) {
    return this.x += e.x, this.y += e.y, this
}, Vector.prototype.subtract = function(e) {
    return this.x -= e.x, this.y -= e.y, this
}, Vector.prototype.mult = function(e) {
    return this.x *= e, this.y *= e, this
}, Vector.prototype.invert = function() {
    return this.mult(-1), this
}, Vector.prototype.rotate = function(e, t) {
    "undefined" == typeof t && (t = new Vector(0, 0));
    var i = this.clone();
    return i.subtract(t), i.x = this.x * Math.cos(e) + this.y * Math.sin(e), i.y = this.x * -Math.sin(e) + this.y * Math.cos(e), i.add(t), this.x = i.x, this.y = i.y, this
}, Vector.prototype.normalize = function(e, t) {
    return "undefined" == typeof t && (t = new Vector(0, 0)), this.subtract(t), this.rotate(-e), this
}, Vector.prototype.getLength = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
}, Vector.prototype.distanceTo = function(e) {
    var t = this.clone();
    return t.subtract(e), t.getLength()
}, Rectangle.prototype.clone = function() {
    return new Rectangle(this.center.x, this.center.y, this.width, this.height, this.angle)
}, Rectangle.prototype.refreshVertices = function() {
    var e = this.width / 2,
        t = this.height / 2;
    this.vertices = [], this.vertices.push(new Vector(-e, t)), this.vertices.push(new Vector(e, t)), this.vertices.push(new Vector(e, -t)), this.vertices.push(new Vector(-e, -t)), this.AABB = [this.center.clone(), this.center.clone()];
    for (var i = 0; 4 > i; i++) this.vertices[i].rotate(-this.angle, this.center), this.vertices[i].x < this.AABB[0].x && (this.AABB[0].x = this.vertices[i].x), this.vertices[i].x > this.AABB[1].x && (this.AABB[1].x = this.vertices[i].x), this.vertices[i].y < this.AABB[0].y && (this.AABB[0].y = this.vertices[i].y), this.vertices[i].y > this.AABB[1].y && (this.AABB[1].y = this.vertices[i].y)
}, Rectangle.prototype.move = function(e, t) {
    this.center.add(new Vector(e, t)), this.refreshVertices()
}, Rectangle.prototype.rotate = function(e) {
    this.angle += e, this.refreshVertices()
}, Rectangle.prototype.hitTestPoint = function(e) {
    var t = e.clone();
    return t.normalize(-this.angle, this.center), Math.abs(t.x) <= this.width / 2 && Math.abs(t.y) <= this.height / 2
}, Rectangle.prototype.hitTestRectangle = function(e) {
    var t, i, a, g = this.clone(),
        s = e.clone();
    return g.move(-this.center.x, -this.center.y), s.move(-this.center.x, -this.center.y), s.center.rotate(this.angle), g.rotate(-this.angle), s.rotate(-this.angle), t = Math.max(g.AABB[0].x, g.AABB[1].x, s.AABB[0].x, s.AABB[1].x) - Math.min(g.AABB[0].x, g.AABB[1].x, s.AABB[0].x, s.AABB[1].x), i = g.AABB[1].x - g.AABB[0].x, a = s.AABB[1].x - s.AABB[0].x, t > i + a ? !1 : (t = Math.max(g.AABB[0].y, g.AABB[1].y, s.AABB[0].y, s.AABB[1].y) - Math.min(g.AABB[0].y, g.AABB[1].y, s.AABB[0].y, s.AABB[1].y), i = g.AABB[1].y - g.AABB[0].y, a = s.AABB[1].y - s.AABB[0].y, t > i + a ? !1 : (g.move(-s.center.x, -s.center.y), s.move(-s.center.x, -s.center.y), g.center.rotate(s.angle), g.refreshVertices(), g.rotate(-s.angle), s.rotate(-s.angle), t = Math.max(g.AABB[0].x, g.AABB[1].x, s.AABB[0].x, s.AABB[1].x) - Math.min(g.AABB[0].x, g.AABB[1].x, s.AABB[0].x, s.AABB[1].x), i = g.AABB[1].x - g.AABB[0].x, a = s.AABB[1].x - s.AABB[0].x, t > i + a ? !1 : (t = Math.max(g.AABB[0].y, g.AABB[1].y, s.AABB[0].y, s.AABB[1].y) - Math.min(g.AABB[0].y, g.AABB[1].y, s.AABB[0].y, s.AABB[1].y), i = g.AABB[1].y - g.AABB[0].y, a = s.AABB[1].y - s.AABB[0].y, i + a >= t)))
};
var EventsManager = {};
EventsManager.addEvent = function(e, t, i, a) {
    if (e.eventsListeners) {
        for (var g = 0; g < e.eventsListeners.length; g++)
            if (e.eventsListeners[g].type === t && e.eventsListeners[g].callback === i) return;
        e.eventsListeners.push({
            type: t,
            callback: i,
            once: !!a
        })
    }
}, EventsManager.removeEvent = function(e, t, i) {
    if (e.eventsListeners) {
        e["on" + t] == i && (e["on" + t] = null);
        for (var a = 0; a < e.eventsListeners.length; a++)
            if (e.eventsListeners[a].type === t && e.eventsListeners[a].callback === i) return void(e.eventsListeners = Utils.removeFromArray(e.eventsListeners, e.eventsListeners[a]))
    }
}, EventsManager.dispatchEvent = function(e, t, i) {
    if (e.eventsListeners) {
        var a = !0;
        if ("function" == typeof e["on" + t] && (a = e["on" + t](i), a === !1)) return !1;
        for (var g = [], s = 0; s < e.eventsListeners.length && (e.eventsListeners[s].type !== t || (e.eventsListeners[s].once && g.push(e.eventsListeners[s]), a = e.eventsListeners[s].callback(i), a !== !1)); s++);
        for (s = 0; s < g.length; s++) EventsManager.removeEvent(e, t, g[s].callback);
        return a === !1 ? !1 : void 0
    }
}, EventsManager.hasEventListener = function(e, t) {
    if (!e.eventsListeners) return !1;
    if (e["on" + t]) return !0;
    for (var i = 0; i < e.eventsListeners.length; i++)
        if (e.eventsListeners[i].type === t) return !0;
    return !1
}, EventsManager.removeAllEventListeners = function(e, t) {
    if (e.eventsListeners) {
        "undefined" == typeof t ? e.eventsListeners = [] : e["on" + t] && (e["on" + t] = null);
        for (var i = [], a = 0; a < e.eventsListeners.length; a++) e.eventsListeners[a].type !== t && i.push(e.eventsListeners[a]);
        e.eventsListeners = i
    }
}, EventsProxy.prototype.addEventListener = function(e, t) {
    EventsManager.addEvent(this, e, t, !1)
}, EventsProxy.prototype.addEventListenerOnce = function(e, t) {
    EventsManager.addEvent(this, e, t, !0)
}, EventsProxy.prototype.removeEventListener = function(e, t) {
    EventsManager.removeEvent(this, e, t)
}, EventsProxy.prototype.dispatchEvent = function(e, t) {
    return EventsManager.dispatchEvent(this, e, t)
}, EventsProxy.prototype.hasEventListener = function(e) {
    return EventsManager.hasEventListener(this, e)
}, EventsProxy.prototype.removeAllEventListeners = function(e) {
    EventsManager.removeAllEventListeners(this, e)
};
var Easing = {};
Easing.back = {
        easeIn: function(e, t, i, a) {
            var g = 1.70158;
            return i * (e /= a) * e * ((g + 1) * e - g) + t
        },
        easeOut: function(e, t, i, a) {
            var g = 1.70158;
            return i * ((e = e / a - 1) * e * ((g + 1) * e + g) + 1) + t
        },
        easeInOut: function(e, t, i, a) {
            var g = 1.70158;
            return (e /= a / 2) < 1 ? i / 2 * (e * e * (((g *= 1.525) + 1) * e - g)) + t : i / 2 * ((e -= 2) * e * (((g *= 1.525) + 1) * e + g) + 2) + t
        }
    }, Easing.bounce = {
        easeIn: function(e, t, i, a) {
            return i - Easing.bounce.easeOut(a - e, 0, i, a) + t
        },
        easeOut: function(e, t, i, a) {
            return (e /= a) < 1 / 2.75 ? i * (7.5625 * e * e) + t : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOut: function(e, t, i, a) {
            return a / 2 > e ? .5 * Easing.bounce.easeIn(2 * e, 0, i, a) + t : .5 * Easing.bounce.easeOut(2 * e - a, 0, i, a) + .5 * i + t
        }
    }, Easing.circular = {
        easeIn: function(e, t, i, a) {
            return -i * (Math.sqrt(1 - (e /= a) * e) - 1) + t
        },
        easeOut: function(e, t, i, a) {
            return i * Math.sqrt(1 - (e = e / a - 1) * e) + t
        },
        easeInOut: function(e, t, i, a) {
            return (e /= a / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + t : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        }
    }, Easing.cubic = {
        easeIn: function(e, t, i, a) {
            return i * (e /= a) * e * e + t
        },
        easeOut: function(e, t, i, a) {
            return i * ((e = e / a - 1) * e * e + 1) + t
        },
        easeInOut: function(e, t, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
        }
    }, Easing.elastic = {
        easeIn: function(e, t, i, a) {
            if (0 == i) return t;
            var g = 1.70158,
                s = 0,
                o = 1 * i;
            return 0 == e ? t : 1 == (e /= a) ? t + i : (s || (s = .3 * a), o < Math.abs(i) ? (o = 1 * i, g = s / 4) : g = s / (2 * Math.PI) * Math.asin(i / o), -(o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - g) * (2 * Math.PI) / s)) + t)
        },
        easeOut: function(e, t, i, a) {
            if (0 == i) return t;
            var g = 1.70158,
                s = 0,
                o = 1 * i;
            return 0 == e ? t : 1 == (e /= a) ? t + i : (s || (s = .3 * a), o < Math.abs(i) ? (o = 1 * i, g = s / 4) : g = s / (2 * Math.PI) * Math.asin(i / o), o * Math.pow(2, -10 * e) * Math.sin((e * a - g) * (2 * Math.PI) / s) + i + t)
        },
        easeInOut: function(e, t, i, a) {
            if (0 == i) return t;
            var g = 1.70158,
                s = 0,
                o = 1 * i;
            return 0 == e ? t : 2 == (e /= a / 2) ? t + i : (s || (s = a * (.3 * 1.5)), o < Math.abs(i) ? (o = 1 * i, g = s / 4) : g = s / (2 * Math.PI) * Math.asin(i / o), 1 > e ? -.5 * (o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - g) * (2 * Math.PI) / s)) + t : o * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - g) * (2 * Math.PI) / s) * .5 + i + t)
        }
    }, Easing.exponential = {
        easeIn: function(e, t, i, a) {
            return 0 == e ? t : i * Math.pow(2, 10 * (e / a - 1)) + t
        },
        easeOut: function(e, t, i, a) {
            return e == a ? t + i : i * (-Math.pow(2, -10 * e / a) + 1) + t
        },
        easeInOut: function(e, t, i, a) {
            return 0 == e ? t : e == a ? t + i : (e /= a / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : i / 2 * (-Math.pow(2, -10 * --e) + 2) + t
        }
    }, Easing.linear = {
        easeIn: function(e, t, i, a) {
            return i * e / a + t
        },
        easeOut: function(e, t, i, a) {
            return i * e / a + t
        },
        easeInOut: function(e, t, i, a) {
            return i * e / a + t
        }
    }, Easing.quadratic = {
        easeIn: function(e, t, i, a) {
            return i * (e /= a) * e + t
        },
        easeOut: function(e, t, i, a) {
            return -i * (e /= a) * (e - 2) + t
        },
        easeInOut: function(e, t, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
        }
    }, Easing.quartic = {
        easeIn: function(e, t, i, a) {
            return i * (e /= a) * e * e * e + t
        },
        easeOut: function(e, t, i, a) {
            return -i * ((e = e / a - 1) * e * e * e - 1) + t
        },
        easeInOut: function(e, t, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e * e * e + t : -i / 2 * ((e -= 2) * e * e * e - 2) + t
        }
    }, Easing.quintic = {
        easeIn: function(e, t, i, a) {
            return i * (e /= a) * e * e * e * e + t
        },
        easeOut: function(e, t, i, a) {
            return i * ((e = e / a - 1) * e * e * e * e + 1) + t
        },
        easeInOut: function(e, t, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e * e * e * e + t : i / 2 * ((e -= 2) * e * e * e * e + 2) + t
        }
    }, Easing.sine = {
        easeIn: function(e, t, i, a) {
            return -i * Math.cos(e / a * (Math.PI / 2)) + i + t
        },
        easeOut: function(e, t, i, a) {
            return i * Math.sin(e / a * (Math.PI / 2)) + t
        },
        easeInOut: function(e, t, i, a) {
            return -i / 2 * (Math.cos(Math.PI * e / a) - 1) + t
        }
    }, Easing.smoothstep = {
        easeIn: function(e, t, i, a) {
            var g = e / a / 2;
            return 2 * (g * g * (3 - 2 * g)) * i + t
        },
        easeOut: function(e, t, i, a) {
            var g = (e / a + 1) / 2;
            return (2 * (g * g * (3 - 2 * g)) - 1) * i + t
        },
        easeInOut: function(e, t, i, a) {
            var g = e / a;
            return g * g * (3 - 2 * g) * i + t
        }
    }, Utils.extend(Tween, EventsProxy), Tween.prototype.onchange = null, Tween.prototype.onfinish = null, Tween.prototype.onrewind = null, Tween.prototype.play = function() {
        return this.playing = !0, this.tick(0), this
    }, Tween.prototype.pause = function() {
        return this.playing = !1, this
    }, Tween.prototype.rewind = function() {
        return this._pos = -1, this
    }, Tween.prototype.forward = function() {
        return this._pos = this.duration, this
    }, Tween.prototype.stop = function() {
        return this.pause(), this.rewind(), this
    }, Tween.prototype.updateValue = function(e) {
        return this.obj ? this.obj[this.prop] = e : this.prop = e, this
    }, Tween.prototype.tick = function(e) {
        if (!this.playing) return !1;
        if (e || (e = 0), Tween.STEP_TYPE == Tween.STEP_BY_FRAME ? this._pos++ : this._pos += e, this._pos < 0) return !1;
        if (this._pos > this.duration) {
            if (!this.autoRewind) return this.finish();
            this._pos -= this.duration, this.hasEventListener("rewind") && this.dispatchEvent("rewind", {
                target: this,
                value: this._pos
            })
        }
        var t = this.start == this.end ? 1 * this.start : this.callback(this._pos, this.start, this.end - this.start, this.duration);
        return this.updateValue(t), this.hasEventListener("change") && this.dispatchEvent("change", {
            target: this,
            value: t
        }), !1
    }, Tween.prototype.finish = function() {
        return this.stop(), this.updateValue(this.end), !(this.hasEventListener("finish") && this.dispatchEvent("finish", {
            target: this,
            value: this.end
        }) === !1)
    }, Tween.STEP_BY_FRAME = 0, Tween.STEP_BY_TIME = 1, Tween.STEP_TYPE = Tween.STEP_BY_FRAME, Utils.extend(DisplayObjectContainer, EventsProxy), DisplayObjectContainer.prototype.objectsCounter = 0, DisplayObjectContainer.prototype.scaleX = 1, DisplayObjectContainer.prototype.scaleY = 1, DisplayObjectContainer.prototype.opacity = 1, DisplayObjectContainer.prototype.x = 0, DisplayObjectContainer.prototype.y = 0, DisplayObjectContainer.prototype.width = 0, DisplayObjectContainer.prototype.height = 0, DisplayObjectContainer.prototype.skewX = 0, DisplayObjectContainer.prototype.skewY = 0,
    DisplayObjectContainer.prototype.rotation = 0, DisplayObjectContainer.prototype.parent = null, DisplayObjectContainer.prototype.cropChildren = !1, DisplayObjectContainer.prototype.hitArea = null, DisplayObjectContainer.prototype.fillColor = null, DisplayObjectContainer.prototype.fillLinearGradient = null, DisplayObjectContainer.prototype.fillRadialGradient = null, DisplayObjectContainer.prototype.fillPattern = null, DisplayObjectContainer.prototype.getAbsoluteRotation = function() {
        return this.rotation + (this.parent ? this.parent.getAbsoluteRotation() : 0)
    }, DisplayObjectContainer.prototype.getAbsoluteOpacity = function() {
        return this.opacity * (this.parent ? this.parent.getAbsoluteOpacity() : 1)
    }, DisplayObjectContainer.prototype.getAbsoluteScaleX = function() {
        return this.scaleX * (this.parent ? this.parent.getAbsoluteScaleX() : 1)
    }, DisplayObjectContainer.prototype.getAbsoluteScaleY = function() {
        return this.scaleY * (this.parent ? this.parent.getAbsoluteScaleY() : 1)
    }, DisplayObjectContainer.prototype.getAbsoluteSkewX = function() {
        return this.skewX + (this.parent ? this.parent.getAbsoluteSkewX() : 0)
    }, DisplayObjectContainer.prototype.getAbsoluteSkewY = function() {
        return this.skewY + (this.parent ? this.parent.getAbsoluteSkewY() : 0)
    }, DisplayObjectContainer.prototype.getTransformProps = function() {
        return {
            x: this.x,
            y: this.y,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: this.skewX,
            skewY: this.skewY,
            rotation: this.rotation
        }
    }, DisplayObjectContainer.prototype.setTransformProps = function(e) {
        for (var t in e) this[t] = e[t]
    }, DisplayObjectContainer.prototype.prepareCanvas = function(e) {
        var t = e.getContext("2d");
        t.save();
        var i = this.x,
            a = this.y;
        this.ignoreViewport || this.parent != this.stage || (i -= this.stage.viewport.x, a -= this.stage.viewport.y), i *= Utils.globalScale, a *= Utils.globalScale, t.transform(1, this.skewX, this.skewY, 1, i, a), t.rotate(this.rotation), t.scale(this.scaleX, this.scaleY), t.globalAlpha = this.getAbsoluteOpacity()
    }, DisplayObjectContainer.prototype.moveCanvasAnchor = function(e, t) {
        var i = t ? 1 : -1;
        0 == this.anchor.x && 0 == this.anchor.y || e.getContext("2d").translate(this.anchor.x * Utils.globalScale * i, this.anchor.y * Utils.globalScale * i)
    }, DisplayObjectContainer.prototype.restoreCanvas = function(e) {
        e.getContext("2d").restore()
    }, DisplayObjectContainer.prototype.prepareCanvasShadow = function(e, t) {
        if (this.shadowColor) {
            var i = e.getContext("2d");
            if (t || i.save(), 0 != this.rotation) {
                var a = Math.sqrt(this.shadowOffsetX * this.shadowOffsetX + this.shadowOffsetY + this.shadowOffsetY) * Utils.globalScale,
                    g = Math.atan2(this.shadowOffsetY, this.shadowOffsetX) + this.rotation;
                i.shadowOffsetX = Math.cos(g) * a, i.shadowOffsetY = Math.sin(g) * a
            } else i.shadowOffsetX = this.shadowOffsetX * Utils.globalScale, i.shadowOffsetY = this.shadowOffsetY * Utils.globalScale;
            i.shadowColor = this.shadowColor, i.shadowBlur = this.shadowBlur * Utils.globalScale
        }
    }, DisplayObjectContainer.prototype.restoreCanvasShadow = function(e) {
        this.shadowColor && this.restoreCanvas(e)
    }, DisplayObjectContainer.prototype.render = function(e, t, i) {
        var a = this.visible && this.objects.length && this.cropChildren && this.stage;
        if (a) {
            var g = e;
            e = this.stage.transformBuffer;
            var s = this.getAbsolutePosition(),
                o = s.x,
                h = s.y;
            this.ignoreViewport || this.parent != this.stage || (o -= this.stage.viewport.x, h -= this.stage.viewport.y), o *= Utils.globalScale, h *= Utils.globalScale;
            var n = e.getContext("2d");
            n.save(), n.transform(1, 0, 0, 1, o, h), n.clearRect((-this.width / 2 - this.anchor.x) * Utils.globalScale - 1, (-this.height / 2 - this.anchor.y) * Utils.globalScale - 1, this.width * Utils.globalScale + 2, this.height * Utils.globalScale + 2)
        }
        for (var f = 0; f < this.objects.length; f++) {
            var d = this.objects[f];
            d.destroy ? (this.removeChild(d), f--) : d.visible && d.render(e, t, i)
        }
        a && (g.getContext("2d").drawImage(e, (s.x - this.anchor.x - this.width / 2) * Utils.globalScale, (s.y - this.anchor.y - this.height / 2) * Utils.globalScale, this.width * Utils.globalScale, this.height * Utils.globalScale, (-this.width / 2 - this.anchor.x) * Utils.globalScale, (-this.height / 2 - this.anchor.y) * Utils.globalScale, this.width * Utils.globalScale, this.height * Utils.globalScale), e.getContext("2d").restore())
    }, DisplayObjectContainer.prototype.getX = function() {
        return Math.round(this.x * Utils.globalScale)
    }, DisplayObjectContainer.prototype.getY = function() {
        return Math.round(this.y * Utils.globalScale)
    }, DisplayObjectContainer.prototype.getWidth = function() {
        return this.width * Math.abs(this.getAbsoluteScaleX()) * Utils.globalScale
    }, DisplayObjectContainer.prototype.getHeight = function() {
        return this.height * Math.abs(this.getAbsoluteScaleY()) * Utils.globalScale
    }, DisplayObjectContainer.prototype.getPosition = function() {
        return {
            x: this.x,
            y: this.y
        }
    }, DisplayObjectContainer.prototype.setPosition = function(e, t) {
        return "undefined" == typeof t && "undefined" != typeof e.x && "undefined" != typeof e.y ? this.setPosition(e.x, e.y) : (this.x = parseFloat(e), void(this.y = parseFloat(t)))
    }, DisplayObjectContainer.prototype.setPropScale = function(e) {
        this.scaleX = this.scaleY = 1 * e
    }, DisplayObjectContainer.prototype.getAnchor = function() {
        return this.anchor
    }, DisplayObjectContainer.prototype.setAnchor = function(e, t) {
        return "undefined" == typeof t && "undefined" != typeof e.x && "undefined" != typeof e.y ? this.setAnchor(e.x, e.y) : (this.anchor.x = parseFloat(e), void(this.anchor.y = parseFloat(t)))
    }, DisplayObjectContainer.prototype.alignAnchor = function(e, t) {
        return e = parseInt(e), isNaN(e) && (e = DisplayObjectContainer.ANCHOR_ALIGN_CENTER), 0 > e && (e = DisplayObjectContainer.ANCHOR_ALIGN_LEFT), e > 0 && (e = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT), t = parseInt(t), isNaN(t) && (t = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE), 0 > t && (t = DisplayObjectContainer.ANCHOR_VALIGN_TOP), t > 0 && (t = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM), this.anchor.x = this.width * e / 2, this.anchor.y = this.height * t / 2, this.getAnchor()
    }, DisplayObjectContainer.prototype.getAbsoluteAnchor = function() {
        return this.getPosition()
    }, DisplayObjectContainer.prototype.getRelativeCenter = function() {
        var e = this.getAnchor(),
            t = this.getAbsoluteRotation(),
            i = {
                x: e.x,
                y: e.y
            };
        return 0 == t || 0 == i.x && 0 == i.y ? (i.x = -(i.x * this.getAbsoluteScaleX()), i.y = -(i.y * this.getAbsoluteScaleY())) : (i = new Vector(-i.x * this.getAbsoluteScaleX(), -i.y * this.getAbsoluteScaleY()), i.rotate(-t)), i
    }, DisplayObjectContainer.prototype.getAbsolutePosition = function() {
        var e = {
            x: this.x,
            y: this.y
        };
        if (this.parent) {
            var t = this.parent.getAbsolutePosition(),
                i = this.parent.getAbsoluteRotation();
            if (0 != i) {
                var a = new Vector(e.x * this.parent.getAbsoluteScaleX(), e.y * this.parent.getAbsoluteScaleY());
                a.rotate(-i), e.x = t.x + a.x, e.y = t.y + a.y
            } else e.x = t.x + e.x * this.parent.getAbsoluteScaleX(), e.y = t.y + e.y * this.parent.getAbsoluteScaleY()
        }
        return e
    }, DisplayObjectContainer.prototype.getAbsoluteCenter = function() {
        var e = this.getAbsolutePosition(),
            t = this.getRelativeCenter();
        return e.x += t.x, e.y += t.y, e
    }, DisplayObjectContainer.prototype.getCenter = function() {
        return this.getAbsoluteCenter()
    }, DisplayObjectContainer.prototype.getIgnoreViewport = function() {
        return this.ignoreViewport || this.parent && this.parent.getIgnoreViewport()
    }, DisplayObjectContainer.prototype.getHitAreaRectangle = function() {
        if (!this.hitArea) return this.getDrawRectangle();
        this.hitArea.rotation || (this.hitArea.rotation = 0);
        var e = this.getAbsoluteRotation() + this.hitArea.rotation,
            t = this.getAbsoluteScaleX(),
            i = this.getAbsoluteScaleY(),
            a = this.getCenter(),
            g = new Rectangle(0, 0, this.hitArea.width * Math.abs(t), this.hitArea.height * Math.abs(i), e);
        if (0 != e) {
            var s = new Vector(this.hitArea.x * t, this.hitArea.y * i);
            s.rotate(-e), g.move(a.x + s.x, a.y + s.y)
        } else g.move(a.x + this.hitArea.x * t, a.y + this.hitArea.x * i);
        return g
    }, DisplayObjectContainer.prototype.getDrawRectangle = function() {
        var e = this.getCenter(),
            t = new Rectangle(0, 0, this.width * Math.abs(this.getAbsoluteScaleX()), this.height * Math.abs(this.getAbsoluteScaleY()), this.getAbsoluteRotation());
        return t.move(e.x, e.y), t
    }, DisplayObjectContainer.prototype.getAABBRectangle = function() {
        var e = this.getDrawRectangle(),
            t = e.AABB[1].x - e.AABB[0].x,
            i = e.AABB[1].y - e.AABB[0].y;
        return new Rectangle(e.AABB[0].x + t / 2, e.AABB[0].y + i / 2, t, i, 0)
    }, DisplayObjectContainer.prototype.getFullAABBRectangle = function() {
        for (var e = [this.getAABBRectangle()], t = 0; t < this.objects.length; t++) e.push(this.objects[t].getFullAABBRectangle());
        var i = [{
            x: Number.MAX_VALUE,
            y: Number.MAX_VALUE
        }, {
            x: Number.MIN_VALUE,
            y: Number.MIN_VALUE
        }];
        for (t = 0; t < e.length; t++) {
            var a = e[t];
            i[0].x = Math.min(i[0].x, a.AABB[0].x), i[0].y = Math.min(i[0].y, a.AABB[0].y), i[1].x = Math.max(i[1].x, a.AABB[1].x), i[1].y = Math.max(i[1].y, a.AABB[1].y)
        }
        var g = i[1].x - i[0].x,
            s = i[1].y - i[0].y;
        return new Rectangle(i[0].x + g / 2, i[0].y + s / 2, g, s, 0)
    }, DisplayObjectContainer.prototype.cacheAsBitmap = function() {
        var e = this.x,
            t = this.y,
            i = this.rotation,
            a = this.parent;
        this.rotation = 0, this.parent = null;
        var g = this.getAABBRectangle(),
            s = this.getFullAABBRectangle();
        this.x = g.AABB[0].x - s.AABB[0].x + (this.width / 2 + this.anchor.x) * this.scaleX, this.y = g.AABB[0].y - s.AABB[0].y + (this.height / 2 + this.anchor.y) * this.scaleY;
        var o = document.createElement("canvas");
        return o.width = s.width * Utils.globalScale, o.height = s.height * Utils.globalScale, this.render(o, !0, 0), this.render(o, !1, 0), this.parent = a, this.x = e, this.y = t, this.rotation = i, o
    }, DisplayObjectContainer.prototype.localToGlobal = function(e, t) {
        var i = "object" == typeof e && "undefined" != typeof e.x && "undefined" != typeof e.y ? new Vector(e.x + 0, e.y + 0) : new Vector(e, t);
        return i.rotate(this.getAbsoluteRotation()).add(this.getAbsolutePosition()), i
    }, DisplayObjectContainer.prototype.globalToLocal = function(e, t) {
        var i = "object" == typeof e && "undefined" != typeof e.x && "undefined" != typeof e.y ? new Vector(e.x + 0, e.y + 0) : new Vector(e, t);
        return i.subtract(this.getAbsolutePosition()).rotate(this.getAbsoluteRotation()), i
    }, DisplayObjectContainer.prototype.localToLocal = function(e, t, i) {
        return i.globalToLocal(this.localToGlobal(e, t))
    }, DisplayObjectContainer.prototype.swapChildren = function(e, t) {
        var i = e.zIndex;
        e.setZIndex(t.zIndex), t.setZIndex(i)
    }, DisplayObjectContainer.prototype.findMaxZIndex = function() {
        for (var e = -1, t = !1, i = 0; i < this.objects.length; i++) this.objects[i].zIndex > e && (e = this.objects[i].zIndex, t = i);
        return {
            index: t,
            zIndex: e
        }
    }, DisplayObjectContainer.prototype.findMinZIndex = function() {
        for (var e = -1, t = !1, i = 0; i < this.objects.length; i++) 0 == i && (e = this.objects[i].zIndex, t = 0), this.objects[i].zIndex < e && (e = this.objects[i].zIndex, t = i);
        return {
            index: t,
            zIndex: e
        }
    }, DisplayObjectContainer.prototype.addChild = function(e) {
        var t = this.findMaxZIndex(),
            i = e.zIndex;
        return t.index !== !1 ? e.zIndex = t.zIndex + 1 : e.zIndex = 0, this.objectsCounter++, e.uid = this.objectsCounter, e.parent = this, e.setStage(this.stage), this.objects.push(e), 0 != i && this.setChildZIndex(e, ~~i), e.hasEventListener("add") && e.dispatchEvent("add", {
            target: e
        }), e
    }, DisplayObjectContainer.prototype.addChildAt = function(e, t) {
        return this.addChild(e), this.setChildZIndex(e, ~~t), e
    }, DisplayObjectContainer.prototype.contains = function(e, t) {
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i] == e) return !0;
            if (t && this.objects[i].contains(e, t)) return !0
        }
        return !1
    }, DisplayObjectContainer.prototype.setStage = function(e) {
        this.stage = e;
        for (var t = 0; t < this.objects.length; t++) this.objects[t].setStage(e)
    }, DisplayObjectContainer.prototype.removeChild = function(e) {
        e && this.objects.indexOf(e) >= 0 && (e.stage && e.stage.clearObjectTweens(e), e.clear(), e.hasEventListener("remove") && e.dispatchEvent("remove", {
            target: e
        }), e.removeAllEventListeners(), e.parent = null, e.stage = null, this.objects = Utils.removeFromArray(this.objects, e))
    }, DisplayObjectContainer.prototype.setChildZIndex = function(e, t) {
        e.zIndex = t, this.objects = this.objects.sort(function(e, t) {
            return e.zIndex == t.zIndex ? e.uid > t.uid ? 1 : -1 : e.zIndex > t.zIndex ? 1 : -1
        })
    }, DisplayObjectContainer.prototype.getHitArea = function() {
        return this.hitArea ? (this.hitArea.rotation || (this.hitArea.rotation = 0), this.hitArea) : {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height,
            rotation: 0
        }
    }, DisplayObjectContainer.prototype.hitTest = function(e, t) {
        if (t || (t = this), 0 == e.getAbsoluteRotation() && 0 == t.getAbsoluteRotation()) {
            var i = e.getCenter(),
                a = t.getCenter(),
                g = e.width * Math.abs(e.getAbsoluteScaleX()),
                s = e.height * Math.abs(e.getAbsoluteScaleY()),
                o = t.width * Math.abs(t.getAbsoluteScaleX()),
                h = t.height * Math.abs(t.getAbsoluteScaleY()),
                n = i.x - g / 2,
                f = i.y - s / 2,
                d = a.x - o / 2,
                A = a.y - h / 2,
                C = Math.max(f, A),
                I = Math.max(n, d),
                r = Math.min(n + g, d + o),
                x = Math.min(f + s, A + h),
                c = r - I,
                l = x - C;
            return c > 0 && l > 0
        }
        var y = e.getDrawRectangle(),
            p = t.getDrawRectangle();
        return y.hitTestRectangle(p)
    }, DisplayObjectContainer.prototype.hitTestPointObject = function(e, t, i, a, g) {
        var s, o, h, n, f, d, A, C, I;
        "boolean" == typeof e.pixelCheck && (a = e.pixelCheck);
        var r = e.getHitArea();
        h = r.width * Math.abs(e.getAbsoluteScaleX()), n = r.height * Math.abs(e.getAbsoluteScaleY());
        var x = e.getAbsoluteCenter();
        if (s = x.x + r.x - h / 2, o = x.y + r.y - n / 2, f = t, d = i, e.ignoreViewport || (f += this.stage.viewport.x, d += this.stage.viewport.y), C = !1, e.getAbsoluteRotation() + r.rotation == 0 ? f >= s && d >= o && s + h >= f && o + n >= d && (C = !0) : (A = e.getHitAreaRectangle(), A.hitTestPoint(new Vector(f, d)) && (C = !0)), C && a) {
            this.stage.buffer.width = this.stage.canvas.width, this.stage.buffer.height = this.stage.canvas.height, this.stage.clearScreen(this.stage.buffer);
            var c = e.getTransformProps(),
                l = e.parent,
                y = e.getAbsolutePosition();
            e.x = y.x, e.y = y.y, e.scaleX = e.getAbsoluteScaleX(), e.scaleY = e.getAbsoluteScaleY(), e.skewX = e.getAbsoluteSkewX(), e.skewY = e.getAbsoluteSkewY(), e.rotation = e.getAbsoluteRotation(), e.parent = null, e.render(this.stage.buffer, e["static"], 0);
            var p = Math.floor(t * Utils.globalScale),
                u = Math.floor(i * Utils.globalScale);
            I = this.stage.buffer.getContext("2d").getImageData(p, u, 1, 1), 0 == I.data[3] && (C = !1), e.setTransformProps(c), e.parent = l
        }
        return !C && g && e.dragged && (C = !0), C
    }, DisplayObjectContainer.prototype.getObjectsStackByCoord = function(e, t, i, a) {
        for (var g, s = [], o = this.objects.length - 1; o >= 0; o--) this.objects[o].visible && (g = this.objects[o], g.objects && g.objects.length && (s = s.concat(g.getObjectsStackByCoord(e, t, i, a))), this.hitTestPointObject(g, e, t, i, a) && s.push(g));
        return s
    }, DisplayObjectContainer.prototype.getObjectsUnderPoint = function(e, t, i) {
        var a = this.getAbsolutePosition();
        return this.getObjectsStackByCoord(a.x + e, a.y + t, !!i)
    }, DisplayObjectContainer.prototype.getObjectUnderPoint = function(e, t, i) {
        var a = this.getObjectsUnderPoint(e, t, i);
        return a[0]
    }, DisplayObjectContainer.prototype.doDrag = function(e, t) {
        for (var i = 0; i < this.objects.length; i++) this.objects[i].doDrag(e, t);
        if (this.dragged) {
            var a = e,
                g = t;
            this.ignoreViewport || (a += this.stage.viewport.x, g += this.stage.viewport.y), a -= this.dragX, g -= this.dragY;
            var s = this.parent.globalToLocal(a, g);
            this.x = s.x, this.y = s.y
        }
    }, DisplayObjectContainer.prototype.checkMouseOut = function(e, t) {
        for (var i = this.objects.length - 1; i >= 0; i--)
            if (this.objects[i].checkMouseOut(e, t) === !1) return;
        if (this.mouseOn && e.indexOf(this) < 0) {
            this.mouseOn = !1;
            var a = this.stage.finalizeMouseCoords(this, t);
            return this.dispatchEvent("mouseout", {
                target: this,
                x: a.x,
                y: a.y
            })
        }
    }, DisplayObjectContainer.prototype.getMaxZIndexInStack = function(e) {
        for (var t = -1, i = 0, a = 0; a < e.length; a++) e[a].zIndex > t && (t = e[a].zIndex, i = a);
        return i
    }, DisplayObjectContainer.prototype.sortStack = function(e, t) {
        return e.sort(function(e, i) {
            return e.zIndex == i.zIndex ? t ? e.uid < i.uid ? 1 : -1 : e.uid > i.uid ? 1 : -1 : t ? e.zIndex < i.zIndex ? 1 : -1 : e.zIndex > i.zIndex ? 1 : -1
        })
    }, DisplayObjectContainer.prototype.clear = function() {
        for (; this.objects.length;) this.removeChild(this.objects[0])
    }, DisplayObjectContainer.prototype.getFillStyle = function(e) {
        var t, i = null;
        if (this.fillLinearGradient) {
            t = e.getContext("2d").createLinearGradient(this.fillLinearGradient.x0 * Utils.globalScale, this.fillLinearGradient.y0 * Utils.globalScale, this.fillLinearGradient.x1 * Utils.globalScale, this.fillLinearGradient.y1 * Utils.globalScale);
            for (var a = 0; a < this.fillLinearGradient.points.length; a++) t.addColorStop(this.fillLinearGradient.points[a].point, this.fillLinearGradient.points[a].color);
            i = t
        } else if (this.fillRadialGradient) {
            for (t = e.getContext("2d").createRadialGradient(this.fillRadialGradient.x0 * Utils.globalScale, this.fillRadialGradient.y0 * Utils.globalScale, this.fillRadialGradient.r0 * Utils.globalScale, this.fillRadialGradient.x1 * Utils.globalScale, this.fillRadialGradient.y1 * Utils.globalScale, this.fillRadialGradient.r1 * Utils.globalScale), a = 0; a < this.fillRadialGradient.points.length; a++) t.addColorStop(this.fillRadialGradient.points[a].point, this.fillRadialGradient.points[a].color);
            i = t
        } else i = this.fillPattern ? e.getContext("2d").createPattern(this.fillPattern.img, this.fillPattern.repeat) : this.fillColor;
        return i
    }, DisplayObjectContainer.prototype.set = function(e) {
        for (var t in e) this[t] = e[t]
    }, DisplayObjectContainer.ANCHOR_ALIGN_LEFT = -1, DisplayObjectContainer.ANCHOR_ALIGN_CENTER = 0, DisplayObjectContainer.ANCHOR_ALIGN_RIGHT = 1, DisplayObjectContainer.ANCHOR_VALIGN_TOP = -1, DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE = 0, DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM = 1;
var ANCHOR_ALIGN_LEFT = DisplayObjectContainer.ANCHOR_ALIGN_LEFT,
    ANCHOR_ALIGN_CENTER = DisplayObjectContainer.ANCHOR_ALIGN_CENTER,
    ANCHOR_ALIGN_RIGHT = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT,
    ANCHOR_VALIGN_TOP = DisplayObjectContainer.ANCHOR_VALIGN_TOP,
    ANCHOR_VALIGN_MIDDLE = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE,
    ANCHOR_VALIGN_BOTTOM = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM;
Utils.extend(DisplayObject, DisplayObjectContainer), DisplayObject.prototype.uid = 0, DisplayObject.prototype.stage = null, DisplayObject.prototype.shadowColor = null, DisplayObject.prototype.shadowOffsetX = 0, DisplayObject.prototype.shadowOffsetY = 0, DisplayObject.prototype.shadowBlur = 0, DisplayObject.prototype.zIndex = 0, DisplayObject.prototype.visible = !0, DisplayObject.prototype["static"] = !1, DisplayObject.prototype.ignoreViewport = !1, DisplayObject.prototype.destroy = !1, DisplayObject.prototype.dragged = !1, DisplayObject.prototype.dragX = 0, DisplayObject.prototype.dragY = 0, DisplayObject.prototype.mouseOn = !1, DisplayObject.prototype.allowDebugDrawing = !0, DisplayObject.prototype.pixelCheck = null, DisplayObject.prototype.onmouseover = null, DisplayObject.prototype.onmouseout = null, DisplayObject.prototype.onmousedown = null, DisplayObject.prototype.onmouseup = null, DisplayObject.prototype.onclick = null, DisplayObject.prototype.oncontextmenu = null, DisplayObject.prototype.onmousemove = null, DisplayObject.prototype.onprerender = null, DisplayObject.prototype.onenterframe = null, DisplayObject.prototype.onrender = null, DisplayObject.prototype.onadd = null, DisplayObject.prototype.onremove = null, DisplayObject.prototype.onbox2dsync = null, DisplayObject.prototype.setStatic = function(e, t) {
    if (e = Boolean(e), !t)
        for (var i = 0; i < this.objects.length; i++) this.objects[i].setStatic(e);
    return this["static"] != e ? (this["static"] = e, this.stage && this.stage.refreshBackground(), !0) : !1
}, DisplayObject.prototype.startDrag = function(e, t) {
    this.dragged = !0, this.dragX = e, this.dragY = t
}, DisplayObject.prototype.stopDrag = function() {
    this.dragged = !1, this.dragX = 0, this.dragY = 0
}, DisplayObject.prototype.removeTweens = function() {
    this.stage && this.stage.clearObjectTweens(this)
}, DisplayObject.prototype.addTween = function(e, t, i, a, g, s) {
    if (!this.stage) return null;
    var o = this[e];
    if (isNaN(o)) return null;
    var h = this.stage.createTween(this, e, o, t, i, a);
    return h.onchange = s, h.onfinish = g, h
}, DisplayObject.prototype.moveTo = function(e, t, i, a, g, s) {
    if (i = ~~i, 0 >= i) return this.setPosition(e, t), g && g({
        target: new Tween(this, "y", t, t, i, a)
    }), this;
    var o, h = [];
    this.x != e && (o = this.addTween("x", e, i, a), o && h.push(o)), this.y != t && (o = this.addTween("y", t, i, a), o && h.push(o));
    var n = h.length;
    if (n > 0) {
        h[n - 1].onchange = s, h[n - 1].onfinish = g;
        for (var f = 0; n > f; f++) h[f].play()
    } else g && g({
        target: new Tween(this, "y", t, t, i, a)
    });
    return this
}, DisplayObject.prototype.moveBy = function(e, t, i, a, g, s) {
    return this.moveTo(this.x + e, this.y + t, i, a, g, s)
}, DisplayObject.prototype.fadeTo = function(e, t, i, a, g) {
    t = ~~t;
    var s = null;
    return 0 >= t ? this.opacity = e : this.opacity != e && (s = this.addTween("opacity", e, t, i, a, g), s && s.play()), !s && a && a({
        target: new Tween(this, "opacity", e, e, t, i)
    }), this
}, DisplayObject.prototype.fadeBy = function(e, t, i, a, g) {
    var s = Math.max(0, Math.min(1, this.opacity + e));
    return this.fadeTo(s, t, i, a, g)
}, DisplayObject.prototype.rotateTo = function(e, t, i, a, g) {
    t = ~~t;
    var s = null;
    return 0 >= t ? this.rotation = e : (s = this.addTween("rotation", e, t, i, a, g), s && s.play()), !s && a && a({
        target: new Tween(this, "rotation", e, e, t, i)
    }), this
}, DisplayObject.prototype.rotateBy = function(e, t, i, a, g) {
    return this.rotateTo(this.rotation + e, t, i, a, g)
}, DisplayObject.prototype.skewXTo = function(e, t, i, a, g) {
    t = ~~t;
    var s = null;
    return 0 >= t ? this.skewX = e : (s = this.addTween("skewX", e, t, i, a, g), s && s.play()), !s && a && a({
        target: new Tween(this, "skewX", e, e, t, i)
    }), this
}, DisplayObject.prototype.skewXBy = function(e, t, i, a, g) {
    return this.skewXTo(this.skewX + e, t, i, a, g)
}, DisplayObject.prototype.skewYTo = function(e, t, i, a, g) {
    t = ~~t;
    var s = null;
    return 0 >= t ? this.skewY = e : (s = this.addTween("skewY", e, t, i, a, g), s && s.play()), !s && a && a({
        target: new Tween(this, "skewY", e, e, t, i)
    }), this
}, DisplayObject.prototype.skewYBy = function(e, t, i, a, g) {
    return this.skewYTo(this.skewY + e, t, i, a, g)
}, DisplayObject.prototype.scaleTo = function(e, t, i, a, g) {
    if (t = ~~t, 0 >= t) return this.scaleX = this.scaleY = e, a && a({
        target: new Tween(this, "scaleY", e, e, t, i)
    }), this;
    var s, o = [];
    this.scaleX != e && (s = this.addTween("scaleX", e, t, i), s && o.push(s)), this.scaleY != e && (s = this.addTween("scaleY", e, t, i), s && o.push(s));
    var h = o.length;
    if (h > 0) {
        o[h - 1].onchange = g, o[h - 1].onfinish = a;
        for (var n = 0; h > n; n++) o[n].play()
    } else a && a({
        target: new Tween(this, "scaleY", e, e, t, i)
    });
    return this
}, DisplayObject.prototype.setZIndex = function(e) {
    this.zIndex = ~~e, this.parent && this.parent.setChildZIndex(this, this.zIndex)
}, DisplayObject.prototype.hitTestPoint = function(e, t, i, a) {
    return this.stage ? this.stage.hitTestPointObject(this, e, t, i, a) : !1
}, DisplayObject.prototype.setRelativePosition = function(e, t, i, a) {
    switch (e = e || 0, t = t || 0, i) {
        case "right":
            e = this.stage.screenWidth - e;
            break;
        case "left":
            break;
        default:
            e = this.stage.screenWidth / 2 + e
    }
    switch (a) {
        case "bottom":
            t = this.stage.screenHeight - t;
            break;
        case "top":
            break;
        default:
            t = this.stage.screenHeight / 2 + t
    }
    this.setPosition(e, t)
}, DisplayObject.prototype.debugDraw = function() {
    if (this.visible && this.allowDebugDrawing) {
        var e = this.getAbsolutePosition(),
            t = this.getCenter(),
            i = this.getDrawRectangle(),
            a = this.getAABBRectangle();
        stage.drawCircle(e.x, e.y, 1, 1, "rgba(255,0,0,0.9)"), stage.drawCircle(t.x, t.y, 1, 1, "rgba(0,255,0,0.9)"), stage.drawLine(e.x, e.y, t.x, t.y, 1, "rgba(255,255,255,0.5)"), stage.drawPolygon(i.vertices, .5, "rgba(255,0,255,0.5)", 1), stage.drawLine(a.vertices[0].x, a.vertices[0].y, a.vertices[2].x, a.vertices[2].y, 1, "rgba(255,255,255,0.5)"), stage.drawLine(a.vertices[2].x, a.vertices[0].y, a.vertices[0].x, a.vertices[2].y, 1, "rgba(255,255,255,0.5)"), stage.drawPolygon(a.vertices, .5, "rgba(255,255,255,0.5)")
    }
}, DisplayObject.prototype.fixChildrenParent = function() {
    for (var e = 0; e < this.objects.length; e++) this.objects[e].parent = this, this.objects[e].fixChildrenParent()
}, DisplayObject.prototype.clone = function() {
    var e = Utils.clone(this);
    return e.fixChildrenParent(), e
}, DisplayObject.prototype.safeRemove = function() {
    this.destroy = !0
}, Utils.extend(Graphics, DisplayObject), Graphics.prototype.x = 0, Graphics.prototype.y = 0, Graphics.prototype.color = "#000", Graphics.prototype.lineWidth = 1, Graphics.prototype.lineDash = null, Graphics.prototype.render = function(e, t, i) {
    !!this["static"] == !!t && this.hasEventListener("render") && this.dispatchEvent("render", {
        target: this,
        canvas: e,
        delta: i
    }), Utils.callSuperMethod(Graphics, this, "render", e, t, i)
}, Graphics.prototype.preparePath = function(e) {
    this.moveCanvasAnchor(e), this.prepareCanvasShadow(e);
    var t = e.getContext("2d");
    if (t.beginPath(), t.strokeStyle = this.lineWidth > 0 ? this.color : "transparent", t.lineWidth = this.lineWidth * Utils.globalScale, t.globalAlpha = this.getAbsoluteOpacity(), t.fillStyle = this.getFillStyle(e), this.lineDash && t.setLineDash) {
        for (var i = [], a = 0; a < this.lineDash.length; a++) i.push(this.lineDash[a] * Utils.globalScale);
        t.setLineDash(i)
    }
}, Graphics.prototype.removeShadow = function(e) {
    var t = e.getContext("2d");
    t.shadowColor = "", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0
}, Graphics.prototype.finalizeCanvas = function(e) {
    var t = e.getContext("2d");
    (this.fillColor || this.fillLinearGradient || this.fillRadialGradient || this.fillPattern) && (t.fill(), this.color && this.lineWidth && this.removeShadow(e)), t.stroke(), this.restoreCanvasShadow(e), this.moveCanvasAnchor(e, !0)
}, Graphics.prototype.resetView = function() {
    this.color = "transparent", this.fillColor = null, this.fillLinearGradient = null, this.fillRadialGradient = null, this.fillPattern = null
}, Graphics.circle = function(e, t, i) {
    Utils.callSuperConstructor(Graphics.circle, this), this.x = e, this.y = t, this.radius = i, this.width = 2 * i, this.height = 2 * i
}, Utils.extend(Graphics.circle, Graphics), Graphics.circle.prototype.render = function(e, t, i) {
    this.prepareCanvas(e), !!this["static"] == !!t && 0 != this.opacity && (this.preparePath(e), e.getContext("2d").arc(0, 0, this.radius * Utils.globalScale, 0, 2 * Math.PI), this.finalizeCanvas(e)), Utils.callSuperMethod(Graphics.circle, this, "render", e, t, i), this.restoreCanvas(e)
}, Graphics.line = function(e, t, i, a) {
    Utils.callSuperConstructor(Graphics.line, this), this.x1 = e, this.x2 = i, this.y1 = t, this.y2 = a
}, Utils.extend(Graphics.line, Graphics), Graphics.line.prototype.render = function(e, t, i) {
    if (this.prepareCanvas(e), !!this["static"] == !!t && 0 != this.opacity) {
        this.preparePath(e);
        var a = e.getContext("2d");
        a.moveTo(this.x1 * Utils.globalScale, this.y1 * Utils.globalScale), a.lineTo(this.x2 * Utils.globalScale, this.y2 * Utils.globalScale), this.finalizeCanvas(e)
    }
    Utils.callSuperMethod(Graphics.line, this, "render", e, t, i), this.restoreCanvas(e)
}, Graphics.rectangle = function(e, t, i, a) {
    Utils.callSuperConstructor(Graphics.rectangle, this), this.x = e, this.y = t, this.width = i, this.height = a
}, Utils.extend(Graphics.rectangle, Graphics), Graphics.rectangle.prototype.render = function(e, t, i) {
    this.prepareCanvas(e), !!this["static"] == !!t && 0 != this.opacity && (this.preparePath(e), e.getContext("2d").rect(-this.width / 2 * Utils.globalScale, -this.height / 2 * Utils.globalScale, this.width * Utils.globalScale, this.height * Utils.globalScale), this.finalizeCanvas(e)), Utils.callSuperMethod(Graphics.rectangle, this, "render", e, t, i), this.restoreCanvas(e)
}, Graphics.arc = function(e, t, i, a, g, s) {
    Utils.callSuperConstructor(Graphics.arc, this), this.x = e, this.y = t, this.radius = i, this.startAngle = a, this.endAngle = g, this.antiClockWise = s, this.width = 2 * i, this.height = 2 * i
}, Utils.extend(Graphics.arc, Graphics), Graphics.arc.prototype.render = function(e, t, i) {
    this.prepareCanvas(e), !!this["static"] == !!t && 0 != this.opacity && (this.preparePath(e), e.getContext("2d").arc(0, 0, this.radius * Utils.globalScale, this.startAngle, this.endAngle, this.antiClockWise), this.finalizeCanvas(e)), Utils.callSuperMethod(Graphics.arc, this, "render", e, t, i), this.restoreCanvas(e)
}, Graphics.polygon = function(e) {
    if (!e || e.length < 2) throw Error("Invalid parameters");
    Utils.callSuperConstructor(Graphics.polygon, this), this.points = e;
    for (var t = Number.MAX_VALUE, i = Number.MAX_VALUE, a = Number.MIN_VALUE, g = Number.MIN_VALUE, s = 0; s < e.length; s++) e[s].x < t && (t = e[s].x), e[s].y < i && (i = e[s].y), e[s].x > a && (a = e[s].x), e[s].y > g && (g = e[s].y);
    this.width = a - t, this.height = g - i
}, Utils.extend(Graphics.polygon, Graphics), Graphics.polygon.prototype.render = function(e, t, i) {
    if (this.prepareCanvas(e), !!this["static"] == !!t && 0 != this.opacity) {
        this.preparePath(e);
        var a = e.getContext("2d");
        a.moveTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
        for (var g = 1; g < this.points.length; g++) a.lineTo(this.points[g].x * Utils.globalScale, this.points[g].y * Utils.globalScale);
        a.lineTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale), this.finalizeCanvas(e)
    }
    Utils.callSuperMethod(Graphics.polygon, this, "render", e, t, i), this.restoreCanvas(e)
}, Graphics.text = function(e, t, i) {
    Utils.callSuperConstructor(Graphics.text, this), this.x = e, this.y = t, this.text = i, this.align = Graphics.text.ALIGN_LEFT, this.valign = Graphics.text.VALIGN_MIDDLE, this.style = "normal", this.size = 10, this.font = "sans-serif", this.lineHeight = 10, this.maxWidth = 0, this.maxWidthType = Graphics.text.MAX_WIDTH_WORD_WRAP, this.fitToParent = !1
}, Utils.extend(Graphics.text, Graphics), Graphics.text.ALIGN_LEFT = "left", Graphics.text.ALIGN_CENTER = "center", Graphics.text.ALIGN_RIGHT = "right", Graphics.text.VALIGN_TOP = "top", Graphics.text.VALIGN_MIDDLE = "middle", Graphics.text.VALIGN_BOTTOM = "bottom", Graphics.text.MAX_WIDTH_WORD_WRAP = 0, Graphics.text.MAX_WIDTH_FIT = 1, Graphics.text.LINES_DELIMITER = "\n", Graphics.text.prototype.preparePath = function(e) {
    Utils.callSuperMethod(Graphics.text, this, "preparePath", e);
    var t = e.getContext("2d");
    t.font = this.style + " " + Math.floor(this.size * Utils.globalScale) + "px " + this.font, t.textAlign = this.align, t.textBaseline = this.valign
}, Graphics.text.prototype.getRect = function(e, t, i) {
    i || (this.prepareCanvas(e), this.preparePath(e)), t || (t = this.text);
    var a = e.getContext("2d").measureText(t);
    return i || (this.finalizeCanvas(e), this.restoreCanvas(e)), a
}, Graphics.text.prototype.getLines = function(e) {
    var t, i, a, g, s, o, h = this.text + "",
        n = this.maxWidth;
    if (this.fitToParent && (0 == n || this.parent.width < n) && (n = this.parent.width), n > 0 && this.maxWidthType == Graphics.text.MAX_WIDTH_WORD_WRAP) {
        for (g = h.split(Graphics.text.LINES_DELIMITER), s = [], o = [], i = 0; i < g.length; i++) {
            for (a = g[i].split(" "), o = [a[0]], t = 1; t < a.length; t++) this.getRect(e, o.join(" ") + " " + a[t], !0).width / Utils.globalScale > n ? (s.push(o.join(" ")), o = [a[t]]) : o.push(a[t]);
            s.push(o.join(" "))
        }
        h = s.join(Graphics.text.LINES_DELIMITER)
    }
    return s = h.split(Graphics.text.LINES_DELIMITER)
}, Graphics.text.prototype.render = function(e, t, i) {
    if (this.prepareCanvas(e), !!this["static"] == !!t && 0 != this.opacity && this.text) {
        this.preparePath(e);
        var a = this.getLines(e),
            g = 0;
        this.valign == Graphics.text.VALIGN_MIDDLE && a.length > 1 && (g = -(a.length * this.lineHeight) / 2), this.valign == Graphics.text.VALIGN_BOTTOM && a.length > 1 && (g = -(a.length * this.lineHeight)), g *= Utils.globalScale;
        var s = 0;
        this.maxWidthType == Graphics.text.MAX_WIDTH_FIT && (s = this.maxWidth, this.fitToParent && (0 == s || this.parent.width < s) && (s = this.parent.width)), s *= Utils.globalScale;
        for (var o = 0; o < a.length; o++) {
            var h = e.getContext("2d");
            (this.fillColor || this.fillLinearGradient || this.fillRadialGradient || this.fillPattern) && (s ? h.fillText(a[o], 0, g + o * this.lineHeight * Utils.globalScale, s) : h.fillText(a[o], 0, g + o * this.lineHeight * Utils.globalScale)), this.color && this.lineWidth > 0 && (this.removeShadow(e), s ? h.strokeText(a[o], 0, g + o * this.lineHeight * Utils.globalScale, s) : h.strokeText(a[o], 0, g + o * this.lineHeight * Utils.globalScale), this.prepareCanvasShadow(e, !0))
        }
        this.finalizeCanvas(e)
    }
    Utils.callSuperMethod(Graphics.text, this, "render", e, t, i), this.restoreCanvas(e)
}, Graphics.free = function() {
    this.commands = [], Utils.callSuperConstructor(Graphics.free, this)
}, Utils.extend(Graphics.free, Graphics), Graphics.free.prototype.clear = function() {
    this.commands = [], Utils.callSuperMethod(Graphics.free, this, "clear")
}, Graphics.free.prototype.beginPath = function() {
    return this.commands.push({
        command: "beginPath"
    }), this
}, Graphics.free.prototype.stroke = function() {
    return this.commands.push({
        command: "stroke"
    }), this
}, Graphics.free.prototype.setStrokeStyle = function(e) {
    return this.commands.push({
        command: "setStrokeStyle",
        style: e
    }), this
}, Graphics.free.prototype.setFillStyle = function(e) {
    return this.commands.push({
        command: "setFillStyle",
        style: e
    }), this
}, Graphics.free.prototype.fill = function() {
    return this.commands.push({
        command: "fill"
    }), this
}, Graphics.free.prototype.moveTo = function(e, t) {
    return this.commands.push({
        command: "moveTo",
        x: e,
        y: t
    }), this
}, Graphics.free.prototype.lineTo = function(e, t) {
    return this.commands.push({
        command: "lineTo",
        x: e,
        y: t
    }), this
}, Graphics.free.prototype.arc = function(e, t, i, a, g, s) {
    return this.commands.push({
        command: "arc",
        x: e,
        y: t,
        radius: i,
        startAngle: a,
        endAngle: g,
        antiClockWise: s
    }), this
}, Graphics.free.prototype.circle = function(e, t, i) {
    return this.commands.push({
        command: "circle",
        x: e,
        y: t,
        radius: i
    }), this
}, Graphics.free.prototype.rect = function(e, t, i, a) {
    return this.commands.push({
        command: "circle",
        x: e,
        y: t,
        width: i,
        height: a
    }), this
}, Graphics.free.prototype.polygon = function(e) {
    return this.commands.push({
        command: "polygon",
        points: e
    }), this
}, Graphics.free.prototype.executeCommand = function(e, t) {
    var i = e.getContext("2d");
    switch (t.command) {
        case "beginPath":
            i.beginPath();
            break;
        case "stroke":
            i.stroke();
            break;
        case "fill":
            i.fill();
            break;
        case "setStrokeStyle":
            i.strokeStyle = this.lineWidth > 0 ? t.style : "transparent";
            break;
        case "setFillStyle":
            i.fillStyle = t.style;
            break;
        case "moveTo":
            i.moveTo(t.x * Utils.globalScale, t.y * Utils.globalScale);
            break;
        case "lineTo":
            i.lineTo(t.x * Utils.globalScale, t.y * Utils.globalScale);
            break;
        case "arc":
            i.arc(t.x * Utils.globalScale, t.y * Utils.globalScale, t.radius * Utils.globalScale, t.startAngle, t.endAngle, t.antiClockWise);
            break;
        case "circle":
            i.arc(t.x * Utils.globalScale, t.y * Utils.globalScale, t.radius * Utils.globalScale, 0, 2 * Math.PI);
            break;
        case "rect":
            i.rect((t.x - t.width / 2) * Utils.globalScale, (t.y - t.height / 2) * Utils.globalScale, t.width * Utils.globalScale, t.height * Utils.globalScale);
            break;
        case "polygon":
            i.moveTo(t.points[0].x * Utils.globalScale, t.points[0].y * Utils.globalScale);
            for (var a = 1; a < t.points.length; a++) i.lineTo(t.points[a].x * Utils.globalScale, t.points[a].y * Utils.globalScale);
            i.lineTo(t.points[0].x * Utils.globalScale, t.points[0].y * Utils.globalScale)
    }
}, Graphics.free.prototype.executeCommands = function(e) {
    for (var t = 0; t < this.commands.length; t++) this.executeCommand(e, this.commands[t])
}, Graphics.free.prototype.render = function(e, t, i) {
    this.prepareCanvas(e), !!this["static"] == !!t && 0 != this.opacity && (this.preparePath(e), this.executeCommands(e), this.finalizeCanvas(e)), Utils.callSuperMethod(Graphics.free, this, "render", e, t, i), this.restoreCanvas(e)
};
var BitmapsCache = {};
BitmapsCache.bitmaps = {}, BitmapsCache.cache = function(e) {
    if (!(e && e instanceof Image)) return e;
    if (BitmapsCache.bitmaps[e.src]) return BitmapsCache.bitmaps[e.src];
    var t = document.createElement("canvas");
    t.width = e.width, t.height = e.height;
    var i = t.getContext("2d");
    return i.drawImage(e, 0, 0, e.width, e.height, 0, 0, e.width, e.height), BitmapsCache.bitmaps[e.src] = t, t
};
var ImageFilter = {};
ImageFilter.cache = {}, ImageFilter.getFromCache = function(e, t, i) {
        if (!(t instanceof Image)) return null;
        if (!ImageFilter.cache[e]) return null;
        for (var a = ImageFilter.cache[e], g = 0; g < a.length; g++) {
            var s = a[g];
            if (s.src == t.src) {
                for (var o = !0, h = 0; h < i.length; h++)
                    if (i[h] != s.args[h]) {
                        o = !1;
                        break
                    }
                if (o) return s.cns
            }
        }
        return null
    }, ImageFilter.putToCache = function(e, t, i, a) {
        if (t instanceof Image && "string" == typeof e) {
            var g = {
                src: t.src,
                args: i,
                cns: a
            };
            ImageFilter.cache[e] || (ImageFilter.cache[e] = []), ImageFilter.cache[e].push(g)
        }
    }, ImageFilter.apply = function(e, t) {
        if (!(e instanceof Image || e instanceof HTMLImageElement || e instanceof HTMLCanvasElement)) throw new Error("Incorrect bitmap. Must be Image or Canvas.");
        var i = t;
        if ("string" == typeof t && (i = ImageFilter.filter[t]), "function" != typeof i) throw new Error("Incorrect filter " + t);
        for (var a = [], g = 2; g < arguments.length; g++) a.push(arguments[g]);
        var s = ImageFilter.getFromCache(t, e, a);
        if (s) return s;
        var o = document.createElement("canvas");
        o.width = e.width, o.height = e.height;
        var h = o.getContext("2d");
        h.drawImage(e, 0, 0, e.width, e.height, 0, 0, e.width, e.height);
        var n = i.apply(ImageFilter.filter[t], [h.getImageData(0, 0, o.width, o.height)].concat(a));
        return h.putImageData(n, 0, 0), ImageFilter.putToCache(t, e, a, o), o
    }, ImageFilter.clearCache = function() {
        ImageFilter.cache = {}
    }, ImageFilter.filter = {}, ImageFilter.filter.grayscale = function(e) {
        for (var t = 0; t < e.data.length; t += 4) {
            var i = .2126 * e.data[t] + .7152 * e.data[t + 1] + .0722 * e.data[t + 2];
            e.data[t] = i, e.data[t + 1] = i, e.data[t + 2] = i
        }
        return e
    }, ImageFilter.filter.discolor = function(e) {
        for (var t = 0; t < e.data.length; t += 4) {
            var i = (e.data[t] + e.data[t + 1] + e.data[t + 2]) / 2;
            e.data[t] = i, e.data[t + 1] = i, e.data[t + 2] = i
        }
        return e
    }, ImageFilter.filter.brightness = function(e, t) {
        t *= 255;
        for (var i = 0; i < e.data.length; i += 4) e.data[i] = Math.min(e.data[i] + t, 255), e.data[i + 1] = Math.min(e.data[i + 1] + t, 255), e.data[i + 2] = Math.min(e.data[i + 2] + t, 255);
        return e
    }, ImageFilter.filter.tint = function(e, t, i, a) {
        for (var g = 0; g < e.data.length; g += 4) e.data[g] + 3 && (e.data[g] = t, e.data[g + 1] = i, e.data[g + 2] = a);
        return e
    }, ImageFilter.filter.invert = function(e) {
        for (var t = 0; t < e.data.length; t += 4) e.data[t] = 255 - e.data[t], e.data[t + 1] = 255 - e.data[t + 1], e.data[t + 2] = 255 - e.data[t + 2];
        return e
    }, ImageFilter.filter.multiply = function(e, t, i, a) {
        for (var g = 0; g < e.data.length; g += 4) e.data[g] = e.data[g] * t / 255, e.data[g + 1] = e.data[g + 1] * i / 255, e.data[g + 2] = e.data[g + 2] * a / 255;
        return e
    }, ImageFilter.filter.sepia = function(e) {
        for (var t = 0; t < e.data.length; t += 4) {
            var i = .3 * e.data[t] + .59 * e.data[t + 1] + .11 * e.data[t + 2];
            e.data[t] = i + 100, e.data[t + 1] = i + 50, e.data[t + 2] = i + 255
        }
        return e
    }, ImageFilter.filter.sepia2 = function(e) {
        for (var t = 0; t < e.data.length; t += 4) {
            var i = e.data[t],
                a = e.data[t + 1],
                g = e.data[t + 2];
            e.data[t] = (.393 * i + .769 * a + .189 * g) / 1.351, e.data[t + 1] = (.349 * i + .686 * a + .168 * g) / 1.203, e.data[t + 2] = (.272 * i + .534 * a + .131 * g) / 2.14
        }
        return e
    }, ImageFilter.filter.add = function(e, t, i, a) {
        for (var g = 0; g < e.data.length; g += 4) e.data[g] = Math.min(e.data[g] + t, 255), e.data[g + 1] = Math.min(e.data[g + 1] + i, 255), e.data[g + 2] = Math.min(e.data[g + 2] + a, 255);
        return e
    }, ImageFilter.filter.screen = function(e, t, i, a) {
        for (var g = 0; g < e.data.length; g += 4) e.data[g] = 1 - (1 - e.data[g]) * (1 - t), e.data[g + 1] = 1 - (1 - e.data[g + 1]) * (1 - i), e.data[g + 2] = 1 - (1 - e.data[g + 2]) * (1 - a);
        return e
    }, ImageFilter.filter.diff = function(e, t, i, a) {
        for (var g = 0; g < e.data.length; g += 4) e.data[g] = Math.abs(e.data[g] - t), e.data[g + 1] = Math.abs(e.data[g + 1] - i), e.data[g + 2] = Math.abs(e.data[g + 2] - a);
        return e
    }, ImageFilter.filter.darken = function(e, t, i, a) {
        for (var g = 0; g < e.data.length; g += 4) e.data[g] = Math.min(e.data[g], t), e.data[g + 1] = Math.min(e.data[g + 1], i), e.data[g + 2] = Math.min(e.data[g + 2], a);
        return e
    }, ImageFilter.filter.lighten = function(e, t, i, a) {
        for (var g = 0; g < e.data.length; g += 4) e.data[g] = Math.max(e.data[g], t), e.data[g + 1] = Math.max(e.data[g + 1], i), e.data[g + 2] = Math.max(e.data[g + 2], a);
        return e
    }, ImageFilter.filter.subtract = function(e, t, i, a) {
        for (var g = 0; g < e.data.length; g += 4) e.data[g] = Math.max(e.data[g] - t, 0), e.data[g + 1] = Math.max(e.data[g + 1] - i, 0), e.data[g + 2] = Math.max(e.data[g + 2] - a, 0);
        return e
    }, ImageFilter.filter.blur = function(e, t, i) {
        return t = t || 5, e = i ? ImageFilter.filter.blur.rgba(e, t) : ImageFilter.filter.blur.rgb(e, t)
    }, ImageFilter.filter.blur.mulTable = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], ImageFilter.filter.blur.shgTable = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24], ImageFilter.filter.blur.getStack = function() {
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            next: null
        }
    }, ImageFilter.filter.blur.rgba = function(e, t) {
        var i, a, g, s, o, h, n, f, d, A, C, I, r, x, c, l, y, p, u, w, v, m, T, b, S = e.data,
            E = e.width,
            M = e.height,
            k = t + t + 1,
            U = E - 1,
            B = M - 1,
            L = t + 1,
            G = L * (L + 1) / 2,
            D = ImageFilter.filter.blur.getStack(),
            O = D;
        for (g = 1; k > g; g++)
            if (O = O.next = ImageFilter.filter.blur.getStack(), g == L) var P = O;
        O.next = D;
        var N = null,
            R = null;
        n = h = 0;
        var j = ImageFilter.filter.blur.mulTable[t],
            F = ImageFilter.filter.blur.shgTable[t];
        for (a = 0; M > a; a++) {
            for (l = y = p = u = f = d = A = C = 0, I = L * (w = S[h]), r = L * (v = S[h + 1]), x = L * (m = S[h + 2]), c = L * (T = S[h + 3]), f += G * w, d += G * v, A += G * m, C += G * T, O = D, g = 0; L > g; g++) O.r = w, O.g = v, O.b = m, O.a = T, O = O.next;
            for (g = 1; L > g; g++) s = h + ((g > U ? U : g) << 2), f += (O.r = w = S[s]) * (b = L - g), d += (O.g = v = S[s + 1]) * b, A += (O.b = m = S[s + 2]) * b, C += (O.a = T = S[s + 3]) * b, l += w, y += v, p += m, u += T, O = O.next;
            for (N = D, R = P, i = 0; E > i; i++) S[h + 3] = T = C * j >> F, 0 != T ? (T = 255 / T, S[h] = (f * j >> F) * T, S[h + 1] = (d * j >> F) * T, S[h + 2] = (A * j >> F) * T) : S[h] = S[h + 1] = S[h + 2] = 0, f -= I, d -= r, A -= x, C -= c, I -= N.r, r -= N.g, x -= N.b, c -= N.a, s = n + ((s = i + t + 1) < U ? s : U) << 2, l += N.r = S[s], y += N.g = S[s + 1], p += N.b = S[s + 2], u += N.a = S[s + 3], f += l, d += y, A += p, C += u, N = N.next, I += w = R.r, r += v = R.g, x += m = R.b, c += T = R.a, l -= w, y -= v, p -= m, u -= T, R = R.next, h += 4;
            n += E
        }
        for (i = 0; E > i; i++) {
            for (y = p = u = l = d = A = C = f = 0, h = i << 2, I = L * (w = S[h]), r = L * (v = S[h + 1]), x = L * (m = S[h + 2]), c = L * (T = S[h + 3]), f += G * w, d += G * v, A += G * m, C += G * T, O = D, g = 0; L > g; g++) O.r = w, O.g = v, O.b = m, O.a = T, O = O.next;
            for (o = E, g = 1; t >= g; g++) h = o + i << 2, f += (O.r = w = S[h]) * (b = L - g), d += (O.g = v = S[h + 1]) * b, A += (O.b = m = S[h + 2]) * b, C += (O.a = T = S[h + 3]) * b, l += w, y += v, p += m, u += T, O = O.next, B > g && (o += E);
            for (h = i, N = D, R = P, a = 0; M > a; a++) s = h << 2, S[s + 3] = T = C * j >> F, T > 0 ? (T = 255 / T, S[s] = (f * j >> F) * T, S[s + 1] = (d * j >> F) * T, S[s + 2] = (A * j >> F) * T) : S[s] = S[s + 1] = S[s + 2] = 0, f -= I, d -= r, A -= x, C -= c, I -= N.r, r -= N.g, x -= N.b, c -= N.a, s = i + ((s = a + L) < B ? s : B) * E << 2, f += l += N.r = S[s], d += y += N.g = S[s + 1], A += p += N.b = S[s + 2], C += u += N.a = S[s + 3], N = N.next, I += w = R.r, r += v = R.g, x += m = R.b, c += T = R.a, l -= w, y -= v, p -= m, u -= T, R = R.next, h += E
        }
        return e
    }, ImageFilter.filter.blur.rgb = function(e, t) {
        var i, a, g, s, o, h, n, f, d, A, C, I, r, x, c, l, y, p, u, w, v = e.data,
            m = e.width,
            T = e.height,
            b = t + t + 1,
            S = m - 1,
            E = T - 1,
            M = t + 1,
            k = M * (M + 1) / 2,
            U = ImageFilter.filter.blur.getStack(),
            B = U;
        for (g = 1; b > g; g++)
            if (B = B.next = ImageFilter.filter.blur.getStack(), g == M) var L = B;
        B.next = U;
        var G = null,
            D = null;
        n = h = 0;
        var O = ImageFilter.filter.blur.mulTable[t],
            P = ImageFilter.filter.blur.shgTable[t];
        for (a = 0; T > a; a++) {
            for (x = c = l = f = d = A = 0, C = M * (y = v[h]), I = M * (p = v[h + 1]), r = M * (u = v[h + 2]), f += k * y, d += k * p, A += k * u, B = U, g = 0; M > g; g++) B.r = y, B.g = p, B.b = u, B = B.next;
            for (g = 1; M > g; g++) s = h + ((g > S ? S : g) << 2), f += (B.r = y = v[s]) * (w = M - g), d += (B.g = p = v[s + 1]) * w, A += (B.b = u = v[s + 2]) * w, x += y, c += p, l += u, B = B.next;
            for (G = U, D = L, i = 0; m > i; i++) v[h] = f * O >> P, v[h + 1] = d * O >> P, v[h + 2] = A * O >> P, f -= C, d -= I, A -= r, C -= G.r, I -= G.g, r -= G.b, s = n + ((s = i + t + 1) < S ? s : S) << 2, x += G.r = v[s], c += G.g = v[s + 1], l += G.b = v[s + 2], f += x, d += c, A += l, G = G.next, C += y = D.r, I += p = D.g, r += u = D.b, x -= y, c -= p, l -= u, D = D.next, h += 4;
            n += m
        }
        for (i = 0; m > i; i++) {
            for (c = l = x = d = A = f = 0, h = i << 2, C = M * (y = v[h]), I = M * (p = v[h + 1]), r = M * (u = v[h + 2]), f += k * y, d += k * p, A += k * u, B = U, g = 0; M > g; g++) B.r = y, B.g = p, B.b = u, B = B.next;
            for (o = m, g = 1; t >= g; g++) h = o + i << 2, f += (B.r = y = v[h]) * (w = M - g), d += (B.g = p = v[h + 1]) * w, A += (B.b = u = v[h + 2]) * w, x += y, c += p, l += u, B = B.next, E > g && (o += m);
            for (h = i, G = U, D = L, a = 0; T > a; a++) s = h << 2, v[s] = f * O >> P, v[s + 1] = d * O >> P, v[s + 2] = A * O >> P, f -= C, d -= I, A -= r, C -= G.r, I -= G.g, r -= G.b, s = i + ((s = a + M) < E ? s : E) * m << 2, f += x += G.r = v[s], d += c += G.g = v[s + 1], A += l += G.b = v[s + 2], G = G.next, C += y = D.r, I += p = D.g, r += u = D.b, x -= y, c -= p, l -= u, D = D.next, h += m
        }
        return e
    }, Utils.extend(Sprite, DisplayObject), Sprite.prototype.animated = !0, Sprite.prototype.animDirection = 1, Sprite.prototype.currentFrame = 0, Sprite.prototype.totalFrames = 1, Sprite.prototype.currentLayer = 0, Sprite.prototype.totalLayers = 1, Sprite.prototype.bitmap = null, Sprite.prototype.mask = null, Sprite.prototype.isMask = !1, Sprite.prototype.maskInvert = !1, Sprite.prototype.animStep = 0, Sprite.prototype.animDelay = 1, Sprite.prototype.changeFrameDelay = 1e3 / 24, Sprite.prototype.changeFrameTime = 0, Sprite.prototype.onchangeframe = null, Sprite.prototype.onanimend = null, Sprite.prototype.cacheBitmap = !1, Sprite.prototype.transformFilter = null, Sprite.create = function(e, t) {
        if ("string" == typeof e) {
            if (t = t || window.library, !t) throw new Error("Could not create sprite from asset '%s'. Library not found.", e);
            e = t.getAsset(e)
        }
        return new Sprite(e.bitmap, e.width || 1, e.height || 1, e.frames || 1, e.layers || 1)
    }, Sprite.prototype.play = function(e) {
        this.animated = !0, "undefined" != typeof e && (this.animDirection = e ? -1 : 1)
    }, Sprite.prototype.stop = function() {
        this.animated = !1
    }, Sprite.prototype.gotoAndStop = function(e) {
        this.currentFrame = e, this.stop()
    }, Sprite.prototype.gotoAndPlay = function(e, t) {
        this.currentFrame = e, this.play(t)
    }, Sprite.prototype.nextFrame = function(e) {
        this.hasEventListener("enterframe") && this.dispatchEvent("enterframe", {
            target: this,
            delta: e
        });
        var t = 1;
        if (Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) {
            if (this.changeFrameTime += e, !(this.changeFrameTime >= this.changeFrameDelay * this.animDelay)) return;
            t = Math.floor(this.changeFrameTime / (this.changeFrameDelay * this.animDelay)), this.changeFrameTime -= Math.abs(t) * this.changeFrameDelay * this.animDelay
        } else this.animStep++; if (this.animStep >= this.animDelay || Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) {
            for (var i = 0; t > i; i++) this.animated && (this.currentFrame += this.animDirection), this.animDirection > 0 && this.currentFrame >= this.totalFrames && (this.currentFrame = 0, this.hasEventListener("animend") && this.dispatchEvent("animend", {
                target: this,
                delta: e
            })), this.animDirection < 0 && this.currentFrame < 0 && (this.currentFrame = this.totalFrames - 1, this.hasEventListener("animend") && this.dispatchEvent("animend", {
                target: this,
                delta: e
            })), this.hasEventListener("changeframe") && this.dispatchEvent("changeframe", {
                target: this,
                delta: e
            });
            this.animStep = 0
        }
    }, Sprite.prototype.setMask = function(e) {
        this.mask = e, this.mask.isMask = !0, this.mask.stage = this.stage
    }, Sprite.prototype.renderBack = function(e, t, i, a) {
        if (t) {
            var g = 0,
                s = 0;
            this.fillPattern && this.fillPattern.offset && (g = this.fillPattern.offset.x * Utils.globalScale, s = this.fillPattern.offset.y * Utils.globalScale);
            var o = e.getContext("2d");
            o.save(), o.translate(-(i / 2) + g, -(a / 2) + s), o.fillStyle = t, o.strokeStyle = t, o.fillRect(-g, -s, i, a), o.restore()
        }
    }, Sprite.prototype.renderBitmap = function(e, t, i, a) {
        if (this.bitmap) {
            var g = this.bitmap.width,
                s = this.bitmap.height,
                o = this.currentLayer * t + this.offset.left * Utils.globalScale,
                h = this.currentFrame * i + this.offset.top * Utils.globalScale;
            if (0 > o && (o = 0), 0 > h && (h = 0), g > o && s > h) {
                var n = t,
                    f = i;
                if (o + n > g && (n = g - o), h + f > s && (f = s - h), Sprite.FLOOR_VALUES_ON_RENDER && (o = ~~o, h = ~~h, n = ~~n, f = ~~f, t = ~~t, i = ~~i), n > 0 && f > 0 && t > 0 && i > 0 && (this.transformFilter ? this.transformFilter.filter(e, this.cacheBitmap ? BitmapsCache.cache(this.bitmap) : this.bitmap, o, h, n, f, -t / 2, -i / 2, t, i) : e.getContext("2d").drawImage(this.cacheBitmap ? BitmapsCache.cache(this.bitmap) : this.bitmap, o, h, n, f, -t / 2, -i / 2, t, i)), a) return {
                    x: o,
                    y: h,
                    width: n,
                    height: f
                }
            }
        }
        return a ? {
            x: 0,
            y: 0,
            width: t,
            height: i
        } : void 0
    }, Sprite.prototype.render = function(e, t, i, a) {
        if (!this.isMask || a) {
            i || (i = 0);
            var g = !!this["static"] == !!t;
            if (g && this.nextFrame(i), this.stage && !this.destroy) {
                if (this.prepareCanvas(e), g && this.visible && 0 != this.opacity && (!this.hasEventListener("prerender") || this.dispatchEvent("prerender", {
                    target: this,
                    canvas: e,
                    delta: i
                }) !== !1)) {
                    this.moveCanvasAnchor(e);
                    var s = this.width * Utils.globalScale,
                        o = this.height * Utils.globalScale,
                        h = this.getFillStyle(e);
                    if (this.prepareCanvasShadow(e), this.stage.ceilSizes && (s = Math.ceil(s), o = Math.ceil(o)), this.mask) {
                        this.stage.buffer.width = this.stage.buffer.width;
                        var n = this.stage.buffer.getContext("2d");
                        n.save(), n.translate(s / 2, o / 2), this.renderBack(this.stage.buffer, h, s, o);
                        var f = this.renderBitmap(this.stage.buffer, s, o, !0);
                        n.globalCompositeOperation = this.maskInvert ? "destination-out" : "destination-in", this.mask.render ? this.mask.render(this.stage.buffer, t, i, !0) : n.drawImage(this.mask, this.mask.x ? this.mask.x : 0, this.mask.y ? this.mask.y : 0), Sprite.FLOOR_VALUES_ON_RENDER ? e.getContext("2d").drawImage(this.stage.buffer, 0, 0, f.width, f.height, -Math.floor(s / 2), -Math.floor(o / 2), ~~s, ~~o) : e.getContext("2d").drawImage(this.stage.buffer, 0, 0, f.width, f.height, -s / 2, -o / 2, s, o), n.restore()
                    } else this.renderBack(e, h, s, o), this.renderBitmap(e, s, o);
                    this.stage.allowDebugDrawing && this.allowDebugDrawing && (!this.stage.allowStaticDebugDrawing && this["static"] || this.debugDraw()), this.hasEventListener("render") && this.dispatchEvent("render", {
                        target: this,
                        canvas: e,
                        delta: i
                    }), this.restoreCanvasShadow(e), this.moveCanvasAnchor(e, !0)
                }
                Utils.callSuperMethod(Sprite, this, "render", e, t, i), this.restoreCanvas(e)
            }
        }
    }, Sprite.prototype.resetView = function() {
        this.bitmap = null, this.fillColor = null, this.fillLinearGradient = null, this.fillRadialGradient = null, this.fillPattern = null;
        for (var e = 0; e < this.objects.length; e++) this.objects[e].resetView && this.objects[e].resetView()
    }, Sprite.prototype.setTransformFilter = function(e) {
        e.sprite = this, this.transformFilter = e
    }, Sprite.prototype.removeTransformFilter = function() {
        this.transformFilter = null
    }, Sprite.CHANGE_FRAME_BY_FRAME = 0, Sprite.CHANGE_FRAME_BY_TIME = 1, Sprite.CHANGE_FRAME_DELAY = 1e3 / 24, Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_FRAME, Sprite.FLOOR_VALUES_ON_RENDER = !0, Sprite.CACHE_BITMAPS = !1, TransformFilter.prototype.animateTo = function(e, t, i, a, g) {
        if (this.sprite && this.sprite.stage) {
            t = ~~t;
            var s = null;
            return 0 >= t ? this.val = e : this.val != e && (s = this.sprite.stage.createTween(this, "val", this.val, e, t, i), s && (s.onfinish = a, s.onchange = g, s.play())), !s && a && a({
                target: new Tween(this, "val", e, e, t, i)
            }), this
        }
    }, TransformFilter.prototype.animateBy = function(e, t, i, a, g) {
        if (this.sprite && this.sprite.stage) {
            t = ~~t;
            var s = null;
            return 0 >= t ? this.val += e : 0 != e && (s = this.sprite.stage.createTween(this, "val", this.val, this.val + e, t, i), s && (s.onfinish = a, s.onchange = g, s.play())), !s && a && a({
                target: new Tween(this, "val", this.val, this.val, t, i)
            }), this
        }
    }, TransformFilter.noizeX = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.noizeX, this, this.apply), this.val = e || 1, this.step = t || 1
    }, Utils.extend(TransformFilter.noizeX, TransformFilter), TransformFilter.noizeX.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = 0, A = f / s, C = 0; s > C; C += this.step) {
            var I = this.val * (d % 2 == 0 ? 1 : -1) * Utils.globalScale,
                r = Math.min(this.step, s - (a + C));
            e.getContext("2d").drawImage(t, i, a + C, g, r, o + I, h + C * A, n, r * A), d++
        }
    }, TransformFilter.noizeY = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.noizeY, this, this.apply), this.val = e || 1, this.step = t || 1
    }, Utils.extend(TransformFilter.noizeY, TransformFilter), TransformFilter.noizeY.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = 0, A = n / g, C = 0; g > C; C += this.step) {
            var I = this.val * (d % 2 == 0 ? 1 : -1) * Utils.globalScale,
                r = Math.min(this.step, g - (i + C));
            e.getContext("2d").drawImage(t, i + C, a, r, s, o + C * A, h + I, r * A, f), d++
        }
    }, TransformFilter.waveX = function(e, t, i) {
        Utils.callSuperConstructor(TransformFilter.waveX, this, this.apply), this.val = e || 1, this.strength = t || 1, this.step = i || 1
    }, Utils.extend(TransformFilter.waveX, TransformFilter), TransformFilter.waveX.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = 0, A = f / s, C = 0; s > C; C += this.step) {
            var I = Math.sin(this.val + C / this.strength) * Utils.globalScale,
                r = Math.min(this.step, s - (a + C));
            e.getContext("2d").drawImage(t, i, a + C, g, r, o + I, h + C * A, n, r * A), d++
        }
    }, TransformFilter.waveY = function(e, t, i) {
        Utils.callSuperConstructor(TransformFilter.waveY, this, this.apply), this.val = e || 1, this.strength = t || 1, this.step = i || 1
    }, Utils.extend(TransformFilter.waveY, TransformFilter), TransformFilter.waveY.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = 0, A = n / g, C = 0; g > C; C += this.step) {
            var I = Math.sin(this.val + C / this.strength) * Utils.globalScale,
                r = Math.min(this.step, g - (i + C));
            e.getContext("2d").drawImage(t, i + C, a, r, s, o + C * A, h + I, r * A, f), d++
        }
    }, TransformFilter.scaleTop = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.scaleTop, this, this.apply), this.val = e || 1, this.step = t || 1
    }, Utils.extend(TransformFilter.scaleTop, TransformFilter), TransformFilter.scaleTop.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = f / s, A = (1 - this.val) / s, C = 0; s > C; C += this.step) {
            var I = Math.min(this.step, s - (a + C)),
                r = n * (this.val + A * (C + I));
            e.getContext("2d").drawImage(t, i, a + C, g, I, o + (n - r) / 2, h + C * d, r, I * d)
        }
    }, TransformFilter.scaleBottom = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.scaleBottom, this, this.apply), this.val = e || 1, this.step = t || 1
    }, Utils.extend(TransformFilter.scaleBottom, TransformFilter), TransformFilter.scaleBottom.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = f / s, A = (this.val - 1) / s, C = 0; s > C; C += this.step) {
            var I = Math.min(this.step, s - (a + C)),
                r = n * (1 + A * (C + I));
            e.getContext("2d").drawImage(t, i, a + C, g, I, o + (n - r) / 2, h + C * d, r, I * d)
        }
    }, TransformFilter.scaleLeft = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.scaleLeft, this, this.apply), this.val = e || 1, this.step = t || 1
    }, Utils.extend(TransformFilter.scaleLeft, TransformFilter), TransformFilter.scaleLeft.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = n / g, A = (1 - this.val) / g, C = 0; g > C; C += this.step) {
            var I = Math.min(this.step, g - (i + C)),
                r = f * (this.val + A * (C + I));
            e.getContext("2d").drawImage(t, i + C, a, I, s, o + C * d, h + (f - r) / 2, I * d, r)
        }
    }, TransformFilter.scaleRight = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.scaleRight, this, this.apply), this.val = e || 1, this.step = t || 1
    }, Utils.extend(TransformFilter.scaleRight, TransformFilter), TransformFilter.scaleRight.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = n / g, A = (this.val - 1) / g, C = 0; g > C; C += this.step) {
            var I = Math.min(this.step, g - (i + C)),
                r = f * (1 + A * (C + I));
            e.getContext("2d").drawImage(t, i + C, a, I, s, o + C * d, h + (f - r) / 2, I * d, r)
        }
    }, TransformFilter.trail = function(e, t, i, a, g, s, o) {
        Utils.callSuperConstructor(TransformFilter.trail, this, this.apply), this.val = e || 0, this.count = t || 3, this.distance = i || 20, this.startOpacity = "undefined" == typeof a ? .5 : a, this.endOpacity = "undefined" == typeof g ? .1 : g, this.startScale = "undefined" == typeof s ? 1 : s, this.endScale = "undefined" == typeof o ? 1 : o
    }, Utils.extend(TransformFilter.trail, TransformFilter), TransformFilter.trail.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        var d = e.getContext("2d");
        d.save();
        var A = this.distance / this.count * Utils.globalScale,
            C = d.globalAlpha,
            I = this.startOpacity * C,
            r = this.endOpacity * C,
            x = (I - r) / this.count,
            c = 1 + (this.startScale - this.endScale) / this.count;
        d.scale(this.endScale, this.endScale);
        for (var l = this.count; l > 0; l--) {
            var y = o + n / 2 + Math.cos(this.val) * (l * A),
                p = h + f / 2 + Math.sin(this.val) * (l * A);
            this.startScale + c * l;
            d.globalAlpha = r + (I - l * x), d.scale(c, c), d.drawImage(t, i, a, g, s, y - n / 2, p - f / 2, n, f)
        }
        d.restore(), d.drawImage(t, i, a, g, s, o, h, n, f)
    }, TransformFilter.composite = function(e) {
        Utils.callSuperConstructor(TransformFilter.composite, this, this.apply), this.val = e || "source-over"
    }, Utils.extend(TransformFilter.composite, TransformFilter), TransformFilter.composite.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        var d = e.getContext("2d"),
            A = d.globalCompositeOperation;
        d.globalCompositeOperation = this.val, d.drawImage(t, i, a, g, s, o, h, n, f), d.globalCompositeOperation = A
    }, TransformFilter.lens = function(e, t, i, a, g) {
        Utils.callSuperConstructor(TransformFilter.lens, this, this.apply), this.val = e || 2, this.x = t || 0, this.y = i || 0, this.radius = a || 30, this.opacity = g || 1
    }, Utils.extend(TransformFilter.lens, TransformFilter), TransformFilter.lens.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        var d = e.getContext("2d");
        d.drawImage(t, i, a, g, s, o, h, n, f), d.save(), d.beginPath(), d.arc(this.x * Utils.globalScale, this.y * Utils.globalScale, this.radius * Utils.globalScale, 0, 2 * Math.PI), d.closePath(), d.clip(), d.globalAlpha = this.opacity, d.drawImage(t, i, a, g, s, o - (this.x * this.val - this.x) * Utils.globalScale - (n * this.val - n) / 2, h - (this.y * this.val - this.y) * Utils.globalScale - (f * this.val - f) / 2, n * this.val, f * this.val), d.restore()
    }, TransformFilter.moveTop = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.moveTop, this, this.apply), this.val = e || 10, this.step = t || 1
    }, Utils.extend(TransformFilter.moveTop, TransformFilter), TransformFilter.moveTop.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = f / s, A = this.val * Utils.globalScale / (s / this.step), C = 0; s > C; C += this.step) {
            var I = Math.min(this.step, s - (a + C)),
                r = (s - C) * A;
            e.getContext("2d").drawImage(t, i, a + C, g, I, o + r, h + C * d, n, I * d)
        }
    }, TransformFilter.moveBottom = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.moveBottom, this, this.apply), this.val = e || 10, this.step = t || 1
    }, Utils.extend(TransformFilter.moveBottom, TransformFilter), TransformFilter.moveBottom.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = f / s, A = this.val * Utils.globalScale / (s / this.step), C = 0; s > C; C += this.step) {
            var I = Math.min(this.step, s - (a + C)),
                r = C * A;
            e.getContext("2d").drawImage(t, i, a + C, g, I, o + r, h + C * d, n, I * d)
        }
    }, TransformFilter.moveLeft = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.moveLeft, this, this.apply), this.val = e || 1, this.step = t || 1
    }, Utils.extend(TransformFilter.moveLeft, TransformFilter), TransformFilter.moveLeft.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = n / g, A = this.val * Utils.globalScale / (g / this.step), C = 0; g > C; C += this.step) {
            var I = Math.min(this.step, g - (i + C)),
                r = (g - C) * A;
            e.getContext("2d").drawImage(t, i + C, a, I, s, o + C * d, h + r, I * d, f)
        }
    }, TransformFilter.moveRight = function(e, t) {
        Utils.callSuperConstructor(TransformFilter.moveRight, this, this.apply), this.val = e || 1, this.step = t || 1
    }, Utils.extend(TransformFilter.moveRight, TransformFilter), TransformFilter.moveRight.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        for (var d = n / g, A = this.val * Utils.globalScale / (g / this.step), C = 0; g > C; C += this.step) {
            var I = Math.min(this.step, g - (i + C)),
                r = C * A;
            e.getContext("2d").drawImage(t, i + C, a, I, s, o + C * d, h + r, I * d, f)
        }
    }, TransformFilter.dissolutionY = function(e, t, i) {
        Utils.callSuperConstructor(TransformFilter.dissolutionY, this, this.apply), this.val = "undefined" == typeof e ? 1 : e, this.step = "undefined" == typeof t ? 2 : t, this.revert = i || !1
    }, Utils.extend(TransformFilter.dissolutionY, TransformFilter), TransformFilter.dissolutionY.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        if (!(this.val >= this.step)) {
            if (this.val <= 0) return void e.getContext("2d").drawImage(t, i, a, g, s, o, h, n, f);
            for (var d = n / g, A = -1, C = 0; s > C; C++) A++, A > this.step * Utils.globalScale && (A = 0), this.revert == A > (this.step - this.val) * Utils.globalScale && e.getContext("2d").drawImage(t, i, a + C, g, 1, o, h + C * d, n, 1 * d)
        }
    }, TransformFilter.dissolutionX = function(e, t, i) {
        Utils.callSuperConstructor(TransformFilter.dissolutionX, this, this.apply), this.val = "undefined" == typeof e ? 1 : e, this.step = "undefined" == typeof t ? 2 : t, this.revert = i || !1
    }, Utils.extend(TransformFilter.dissolutionX, TransformFilter), TransformFilter.dissolutionX.prototype.apply = function(e, t, i, a, g, s, o, h, n, f) {
        if (!(this.val >= this.step)) {
            if (this.val <= 0) return void e.getContext("2d").drawImage(t, i, a, g, s, o, h, n, f);
            for (var d = f / s, A = -1, C = 0; g > C; C++) A++, A > this.step * Utils.globalScale && (A = 0), this.revert == A > (this.step - this.val) * Utils.globalScale && e.getContext("2d").drawImage(t, i + C, a, 1, s, o + C * d, h, 1 * d, f)
        }
    }, TransformFilter.filters = ["noizeX", "noizeY", "waveX", "waveY", "scaleTop", "scaleBottom", "scaleLeft", "scaleRight", "trail", "composite", "lens", "moveTop", "moveBottom", "moveLeft", "moveRight", "dissolutionX", "dissolutionY"], Utils.extend(StageTimer, EventsProxy), StageTimer.prototype.onend = null, StageTimer.prototype.ontick = null, StageTimer.prototype.update = function(delta) {
        if (this.destroy) return !0;
        if (this.paused) return !1;
        if (StageTimer.TIMEOUT_TYPE == StageTimer.TIMEOUT_BY_FRAME ? this.timeout-- : this.timeout -= delta, this.timeout <= 0) {
            if ("string" == typeof this.onend ? eval(this.onend) : this.hasEventListener("end") && this.dispatchEvent("end", {
                target: this
            }), !this.repeat) return !0;
            this.rewind()
        }
        return this.hasEventListener("tick") && this.dispatchEvent("tick", {
            target: this,
            delta: delta
        }), !1
    }, StageTimer.prototype.rewind = function() {
        this.timeout = this.initialTimeout
    }, StageTimer.prototype.resume = function() {
        this.paused = !1
    }, StageTimer.prototype.pause = function() {
        this.paused = !0
    }, StageTimer.TIMEOUT_BY_FRAME = 0, StageTimer.TIMEOUT_BY_TIME = 1, StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_FRAME, Utils.extend(Stage, DisplayObjectContainer), Stage.prototype.refreshBackground = function() {
        this.needToRebuildBack = !0
    }, Stage.prototype.setBackgroundCanvas = function(e) {
        e && (this.backgroundCanvas = "string" == typeof e ? document.getElementById(e) : e)
    }, Stage.prototype.destroy = function() {
        clearTimeout(this.tmMain), clearTimeout(this.tmFPS), this.stop(), this.clear(), this.clearScreen(this.canvas), this.backgroundCanvas && this.clearScreen(this.backgroundCanvas), this.removeInputListeners(this.stage)
    }, Stage.prototype.clearScreen = function(e) {
        this.clearLock || e.getContext("2d").clearRect(0, 0, Math.floor(e.width), Math.floor(e.height))
    }, Stage.prototype.addChild = function(e) {
        return e.stage = this, Utils.callSuperMethod(Stage, this, "addChild", e)
    }, Stage.prototype.setZIndex = function(e, t) {
        this.setChildZIndex(e, t)
    }, Stage.prototype.finalizeMouseCoords = function(e, t) {
        if (!e) return t;
        var i = this.prepareMouseCoord(t.x),
            a = this.prepareMouseCoord(t.y);
        e.getIgnoreViewport() || (i += this.viewport.x, a += this.viewport.y);
        var g = e.getAbsolutePosition();
        return i -= g.x, a -= g.y, {
            x: i,
            y: a
        }
    }, Stage.prototype.prepareMouseCoord = function(e) {
        return e / Utils.globalScale / Utils.globalPixelScale
    }, Stage.prototype.processMouseEvent = function(e, t, i) {
        for (var a, g, s = Utils.getMouseCoord(e, this.inputController), o = this.getObjectsStackByCoord(this.prepareMouseCoord(s.x), this.prepareMouseCoord(s.y), i, !1), h = 0; h < o.length; h++)
            if (g = this.finalizeMouseCoords(o[h], s), o[h].hasEventListener(t) && (a = o[h].dispatchEvent(t, {
                target: o[h],
                x: g.x,
                y: g.y
            })), a === !1) return;
        this.hasEventListener(t) && this.dispatchEvent(t, {
            target: this,
            x: Math.floor(this.prepareMouseCoord(s.x)),
            y: Math.floor(this.prepareMouseCoord(s.y))
        })
    }, Stage.prototype.checkClick = function(e) {
        this.processMouseEvent(e, "click", this.pixelClickEvent)
    }, Stage.prototype.checkContextMenu = function(e) {
        this.processMouseEvent(e, "contextmenu", this.pixelClickEvent)
    }, Stage.prototype.checkMouseMove = function(e) {
        var t = Utils.getMouseCoord(e, this.inputController);
        this.doDrag(this.prepareMouseCoord(t.x), this.prepareMouseCoord(t.y));
        var i, a, g, s = this.getObjectsStackByCoord(this.prepareMouseCoord(t.x), this.prepareMouseCoord(t.y), this.pixelMouseMoveEvent),
            o = [];
        if (s.length > 0) {
            for (i = 0; i < s.length && (o.push(s[i]), g = this.finalizeMouseCoords(s[i], t), s[i].hasEventListener("mousemove") && (a = s[i].dispatchEvent("mousemove", {
                target: s[i],
                x: g.x,
                y: g.y
            })), a !== !1); i++);
            for (a !== !1 && this.hasEventListener("mousemove") && this.dispatchEvent("mousemove", {
                target: this,
                x: Math.floor(this.prepareMouseCoord(t.x)),
                y: Math.floor(this.prepareMouseCoord(t.y))
            }), a = !0, i = 0; i < o.length; i++)
                if (g = this.finalizeMouseCoords(o[i], t), !o[i].mouseOn && o[i].hasEventListener("mouseover") && (a = o[i].dispatchEvent("mouseover", {
                    target: o[i],
                    x: g.x,
                    y: g.y
                })), o[i].mouseOn = !0, a === !1) {
                    o = o.slice(0, i + 1);
                    break
                }
        } else this.hasEventListener("mousemove") && this.dispatchEvent("mousemove", {
            target: this,
            x: Math.floor(this.prepareMouseCoord(t.x)),
            y: Math.floor(this.prepareMouseCoord(t.y))
        });
        this.checkMouseOut(o, t)
    }, Stage.prototype.checkMouseDown = function(e) {
        this.processMouseEvent(e, "mousedown", this.pixelMouseDownEvent)
    }, Stage.prototype.checkMouseUp = function(e) {
        this.processMouseEvent(e, "mouseup", this.pixelMouseUpEvent)
    }, Stage.prototype.clear = function() {
        this.tweens = [], this.timers = [], this.eventsListeners = [], this.objectsCounter = 0, Utils.callSuperMethod(Stage, this, "clear")
    }, Stage.prototype.getCenter = function() {
        return {
            x: this.screenWidth / 2,
            y: this.screenHeight / 2
        }
    }, Stage.prototype.prepareCanvasToGraph = function(e) {
        var t = e.getContext("2d");
        t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.globalAlpha = 1
    }, Stage.prototype.drawRectangle = function(e, t, i, a, g, s, o, h) {
        var n = this.canvas;
        this.prepareCanvasToGraph(n);
        var f = n.getContext("2d");
        "undefined" != typeof o ? f.globalAlpha = o : f.globalAlpha = 1, g || (g = "#000"), f.fillStyle = g, f.strokeStyle = g, h || (e -= this.viewport.x, t -= this.viewport.y), e *= Utils.globalScale, t *= Utils.globalScale, i *= Utils.globalScale, a *= Utils.globalScale, s ? f.fillRect(e - i / 2, t - a / 2, i, a) : f.strokeRect(e - i / 2, t - a / 2, i, a), f.restore()
    }, Stage.prototype.drawCircle = function(e, t, i, a, g, s, o) {
        this.drawArc(e, t, i, 0, 2 * Math.PI, !1, a, g, s, o)
    }, Stage.prototype.drawArc = function(e, t, i, a, g, s, o, h, n, f) {
        var d = this.canvas;
        this.prepareCanvasToGraph(d);
        var A = d.getContext("2d");
        "undefined" == typeof h && (h = "#000"), A.strokeStyle = h, "undefined" == typeof o && (o = 1), A.lineWidth = o * Utils.globalScale, "undefined" == typeof n && (n = 1), A.globalAlpha = n, f || (e -= this.viewport.x, t -= this.viewport.y), e *= Utils.globalScale, t *= Utils.globalScale, i *= Utils.globalScale, A.beginPath(), A.arc(e, t, i, a, g, s), A.stroke(), A.restore()
    }, Stage.prototype.drawPolygon = function(e, t, i, a, g) {
        if ("object" == typeof e && e instanceof Array && !(e.length < 2)) {
            for (var s = 0; s < e.length - 1; s++) this.drawLine(e[s].x, e[s].y, e[s + 1].x, e[s + 1].y, t, i, a, g);
            this.drawLine(e[s].x, e[s].y, e[0].x, e[0].y, t, i, a, g)
        }
    }, Stage.prototype.drawLine = function(e, t, i, a, g, s, o, h) {
        var n = this.canvas;
        this.prepareCanvasToGraph(n);
        var f = n.getContext("2d");
        s ? f.strokeStyle = s : f.strokeStyle = "#000", g ? f.lineWidth = g * Utils.globalScale : f.lineWidth = Utils.globalScale, o ? f.globalAlpha = o : f.globalAlpha = 1, h || (e -= this.viewport.x, t -= this.viewport.y, i -= this.viewport.x, a -= this.viewport.y), e *= Utils.globalScale, t *= Utils.globalScale, i *= Utils.globalScale, a *= Utils.globalScale, f.beginPath(), f.moveTo(e, t), f.lineTo(i, a), f.stroke(), f.restore()
    }, Stage.prototype.start = function() {
        this.started || (this.started = !0, this.clearFPS(), this.tick())
    }, Stage.prototype.forceRender = function() {
        this.started && this.tick()
    }, Stage.prototype.stop = function() {
        this.started = !1
    }, Stage.prototype.clearFPS = function() {
        this.lastFPS = this.fps, this.fps = 0, this.started && (this.tmFPS = setTimeout(this.clearFPS, 1e3))
    }, Stage.prototype.setTextStyle = function(e, t, i, a, g, s) {
        var o = s ? s : this.canvas,
            h = o.getContext("2d");
        h.fillStyle = a, h.strokeStyle = g;
        var n = "";
        i && (n += i + " "), t && (n += Math.floor(t * Utils.globalScale) + "px "), e && (n += e), h.font = n
    }, Stage.prototype.drawText = function(e, t, i, a, g, s, o) {
        var h = o ? o : this.canvas,
            n = h.getContext("2d");
        "undefined" == typeof a ? n.globalAlpha = 1 : n.globalAlpha = a, g || (t -= this.viewport.x, i -= this.viewport.y), t *= Utils.globalScale, i *= Utils.globalScale, s && (t -= this.getTextWidth(e) / 2), n.fillText(e, t, i)
    }, Stage.prototype.strokeText = function(e, t, i, a, g, s, o) {
        var h = o ? o : this.canvas,
            n = h.getContext("2d");
        "undefined" == typeof a ? n.globalAlpha = 1 : n.globalAlpha = a, g || (t -= this.viewport.x, i -= this.viewport.y), t *= Utils.globalScale, i *= Utils.globalScale, s && (t -= this.getTextWidth(e) / 2), n.strokeText(e, t, i)
    }, Stage.prototype.getTextWidth = function(e, t) {
        var i = t ? t : this.canvas;
        return i.getContext("2d").measureText(e).width
    }, Stage.prototype.render = function(e, t, i, a) {
        if (e) {
            a || (a = 0);
            var g = e.getContext("2d");
            if (g.setTransform(1, 0, 0, 1, 0, 0), !i) {
                var s = this.getFillStyle(e);
                s ? (g.fillStyle = s, g.fillRect(0, 0, e.width, e.height)) : this.clearLock || this.clearScreen(e)
            }
            this.prepareCanvas(e), this.moveCanvasAnchor(e), this.prepareCanvasShadow(e), Utils.callSuperMethod(Stage, this, "render", e, t, a), this.restoreCanvasShadow(e), this.moveCanvasAnchor(e, !0), this.restoreCanvas(e)
        }
    }, Stage.prototype.createTween = function(e, t, i, a, g, s) {
        var o = new Tween(e, t, i, a, g, s);
        return this.tweens.push(o), o
    }, Stage.prototype.removeTween = function(e) {
        var t = null;
        if (isNaN(e)) {
            for (var i = 0; i < this.tweens.length; i++)
                if (this.tweens[i] === e) {
                    t = i;
                    break
                }
        } else t = e;
        return isNaN(t) || (this.tweens[t] && this.tweens[t].pause(), this.tweens.splice(t, 1)), t
    }, Stage.prototype.clearObjectTweens = function(e) {
        for (var t = 0; t < this.tweens.length; t++) this.tweens[t].obj === e && (this.tweens[t].destroy = !0)
    }, Stage.prototype.updateTweens = function(e) {
        for (var t, i = 0; i < this.tweens.length; i++) t = this.tweens[i], t.destroy && (i = this.removeTween(i), i--);
        for (i = 0; i < this.tweens.length; i++) t = this.tweens[i], !t.newly && t.tick(e) && (t.destroy = !0), t.newly = !1
    }, Stage.prototype.setTimeout = function(e, t) {
        var i = new StageTimer(e, t);
        return this.timers.push(i), i
    }, Stage.prototype.clearTimeout = function(e) {
        e && (e.destroy = !0)
    }, Stage.prototype.setInterval = function(e, t) {
        var i = new StageTimer(e, t, !0);
        return this.timers.push(i), i
    }, Stage.prototype.clearInterval = function(e) {
        this.clearTimeout(e)
    }, Stage.prototype.removeTimer = function(e) {
        this.timers = Utils.removeFromArray(this.timers, e)
    }, Stage.prototype.updateTimers = function(e) {
        for (var t, i = 0; i < this.timers.length; i++) t = this.timers[i], t.destroy && (this.removeTimer(t), i--);
        for (i = 0; i < this.timers.length; i++) t = this.timers[i], !t.newly && t.update(e) && (t.destroy = !0), t.newly = !1
    }, Stage.prototype.tick = function() {
        Stage.TIMER_MODE == Stage.TIMER_MODE_FRAME && clearTimeout(this.tmMain);
        var e;
        if (Utils.isWindowHidden) this.lastTick = 0, e = this.delay;
        else {
            var t = (new Date).getTime(),
                i = Math.min(Stage.MIN_DELTA, t - this.lastTick);
            if (this.lastTick = t, this.hasEventListener("pretick") && this.dispatchEvent("pretick", {
                target: this,
                delta: i
            }), !this.started) return void(this.lastTick = 0);
            if (this.updateTweens(i), !this.started) return void(this.lastTick = 0);
            if (this.updateTimers(i), !this.started) return void(this.lastTick = 0);
            this.hasEventListener("prerender") && this.dispatchEvent("prerender", {
                target: this,
                delta: i
            }), this.needToRebuildBack && (this.needToRebuildBack = !1, this.backgroundCanvas && this.render(this.backgroundCanvas, !0));
            var a = !1;
            if (this.drawBackAlways && (this.render(this.canvas, !0, !1, i), a = !0), this.render(this.canvas, !1, a, i), this.showFPS) {
                var g = this.canvas.getContext("2d");
                g.save(), this.setTextStyle("sans-serif", 10, "bold", "#fff"), g.shadowColor = "#000", g.shadowBlur = 4 * Utils.globalScale, this.drawText("FPS: " + this.lastFPS, 2, 10, 1, !0), g.restore()
            }
            this.hasEventListener("posttick") && this.dispatchEvent("posttick", {
                target: this,
                delta: i
            }), e = (new Date).getTime() - t, e = this.delay - e, 1 > e && (e = 1), this.fps++
        }
        this.started ? Stage.TIMER_MODE == Stage.TIMER_MODE_FRAME ? this.tmMain = setTimeout(this.tick, e) : requestAnimationFrame(this.tick) : this.lastTick = 0
    }, Stage.prototype.box2dSync = function(e) {
        for (var t, i = e.m_bodyList; i; i = i.m_next) i.sprite && (i.sprite.rotation = i.GetRotation(), t = i.GetPosition(), i.sprite.x = t.x, i.sprite.y = t.y, i.sprite.hasEventListener("box2dsync") && i.sprite.dispatchEvent("box2dsync", {
            target: i.sprite
        }))
    }, Stage.prototype.processTouchEvent = function(e, t) {
        var i = e.length;
        !Stage.MULTITOUCH_ENABLED && i > 1 && (i = 1);
        for (var a = 0; i > a; a++) {
            var g = {
                clientX: e[a].clientX,
                clientY: e[a].clientY
            };
            this[t](g)
        }
    }, Stage.prototype.prepareEventTouches = function(e, t) {
        return e[t] || (e[t] = [{
            clientX: e.clientX,
            clientY: e.clientY
        }]), e[t]
    }, Stage.prototype.restoreFocus = function() {
        this.inputController && (window.focus && window.focus(), document.body.focus && document.body.focus(), this.inputController.focus && this.inputController.focus())
    }, Stage.prototype.inputListeners = null, Stage.prototype.addInputListeners = function(e) {
        if (e = e || this.inputController || this.canvas, this.removeInputListeners(), this.inputController = e, !this.inputController) return !1;
        this.inputListeners = {}, this.inputListeners[Utils.getTouchStartEvent()] = Utils.proxy(function(e) {
            return Utils.touchScreen ? (this.restoreFocus(), this.processTouchEvent(this.prepareEventTouches(e, "changedTouches"), "checkMouseDown"), this.processTouchEvent(this.prepareEventTouches(e, "changedTouches"), "checkClick"), Utils.preventEvent(e)) : void 0
        }, this), this.inputListeners[Utils.getTouchMoveEvent()] = Utils.proxy(function(e) {
            return Utils.touchScreen ? (this.processTouchEvent(this.prepareEventTouches(e, "changedTouches"), "checkMouseMove"), Utils.preventEvent(e)) : void 0
        }, this), this.inputListeners[Utils.getTouchEndEvent()] = Utils.proxy(function(e) {
            return Utils.touchScreen ? (this.processTouchEvent(this.prepareEventTouches(e, "changedTouches"), "checkMouseUp"), Utils.preventEvent(e)) : void 0
        }, this), this.inputListeners.click = Utils.proxy(function(e) {
            return Utils.touchScreen ? void 0 : (this.restoreFocus(), this.checkClick(e), Utils.preventEvent(e))
        }, this), this.inputListeners.mousemove = Utils.proxy(function(e) {
            return Utils.touchScreen ? void 0 : (this.checkMouseMove(e), Utils.preventEvent(e))
        }, this), this.inputListeners.mousedown = Utils.proxy(function(e) {
            return Utils.touchScreen ? void 0 : (this.restoreFocus(), 0 == e.button && this.checkMouseDown(e), Utils.preventEvent(e))
        }, this), this.inputListeners.mouseup = Utils.proxy(function(e) {
            return Utils.touchScreen ? void 0 : (0 == e.button && this.checkMouseUp(e), Utils.preventEvent(e))
        }, this), this.inputListeners.contextmenu = Utils.proxy(function(e) {
            return Utils.touchScreen ? void 0 : (this.restoreFocus(), this.checkContextMenu(e), Utils.preventEvent(e))
        }, this);
        for (var t in this.inputListeners) Utils.bindEvent(this.inputController, t, this.inputListeners[t])
    }, Stage.prototype.removeInputListeners = function() {
        if (this.inputController && this.inputListeners)
            for (var e in this.inputListeners) Utils.unbindEvent(this.inputController, e, this.inputListeners[e]);
        this.inputListeners = null
    }, Stage.MIN_DELTA = 500, Stage.TIMER_MODE_FRAME = 0, Stage.TIMER_MODE_TIME = 1, Stage.TIMER_MODE = Stage.TIMER_MODE_FRAME, Stage.MULTITOUCH_ENABLED = !0,
    function() {
        var e = function(e) {
                setTimeout(e, 1e3 / 60)
            },
            t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || e;
        Utils.detectMobileBrowser() && (t = e), window.requestAnimationFrame = t
    }();
var TTLoader = {
    endCallback: null,
    loadedData: null,
    landscapeMode: !1,
    skipPlayButton: !1,
    completed: !1,
    backgroundUrl: "",
    backgroundImage: null,
    originalLogoSize: {
        width: 0,
        height: 0
    },
    originalButtonSize: {
        width: 0,
        height: 0
    },
    create: function(e, t, i, a) {
        TTLoader.endCallback = e, TTLoader.landscapeMode = t, TTLoader.skipPlayButton = i, "function" == typeof window.HTML5API_preloaderStarted && HTML5API_preloaderStarted(), window.ExternalAPI && ExternalAPI.HTML5API_preloaderStarted(), document.getElementById("progress_container").style.backgroundColor = "#000", document.getElementById("progress_container").style.backgroundRepeat = "no-repeat", document.getElementById("progress_container").style.backgroundPosition = "center center", document.getElementById("progress_container").style.zIndex = "1000";
        var g = document.getElementById("progress");
        g.setAttribute("valign", "top"), g.style.verticalAlign = "top", g.style.background = "transparent";
        var s = document.createElement("div"),
            o = document.createElement("a");
        o.setAttribute("id", "tt_load_logo_c");
        var h = window.ExternalAPI ? ExternalAPI.exec("getPreloaderURL") : "http://playtomax.com/",
            n = "_blank";
        !a && h || (h = "javascript:void(0)", n = ""), o.setAttribute("href", h), o.setAttribute("target", n);
        var f = new Image;
        f.setAttribute("id", "tt_load_logo"), f.setAttribute("border", ""), f.style.cursor = "pointer", o.appendChild(f), s.appendChild(o), f.onload = f.onerror = function() {
            TTLoader.originalLogoSize.width = ~~(this.naturalWidth || this.width), TTLoader.originalLogoSize.height = ~~(this.naturalHeight || this.height), this.onload = this.onerror = null
        }, f.complete && f.onload && f.onload.call(f), s.style.position = "absolute", s.style.left = "0px", s.style.top = "0px", s.style.width = "100%", g.appendChild(s);
        var d = document.createElement("div");
        d.setAttribute("id", "tt_load_progress_wrapper"), d.style.position = "absolute", d.style.left = "0px", d.style.bottom = "0px", d.style.width = "100%", d.style.height = "28px", d.style.background = "url(" + TTLoader.footerSrc + ")", d.style.backgroundRepeat = "no-repeat", d.style.backgroundPosition = "center top";
        var s = document.createElement("div");
        s.setAttribute("id", "tt_load_progress_cont"), s.setAttribute("align", "left"), s.setAttribute("style", "padding: 1px; border: 2px solid #e44d26; background: #fff");
        var A = document.createElement("div");
        A.setAttribute("id", "tt_load_progress"), A.setAttribute("style", "width: 0px; background: #e44d26;"), A.innerHTML = "&nbsp;", s.appendChild(A), d.appendChild(s);
        var C = new Image;
        C.width = 76, C.height = 80, C.src = TTLoader.html5LogoSrc, C.style.position = "absolute", C.style.top = "-12px", C.style.left = "50%", C.id = "tt_load_html5_logo", d.appendChild(C), g.appendChild(d);
        var s = document.createElement("div");
        s.setAttribute("id", "tt_load_play");
        var I = new Image;
        I.setAttribute("id", "tt_load_button"), I.style.display = "none", s.appendChild(I), I.onload = I.onerror = function() {
            TTLoader.originalButtonSize.width = ~~(this.naturalWidth || this.width), TTLoader.originalButtonSize.height = ~~(this.naturalHeight || this.height), this.onload = this.onerror = null
        }, I.src = TTLoader.buttonSrc, I.complete && I.onload && I.onload.call(I);
        var r = document.createElement("img");
        r.setAttribute("id", "tt_load_icon"), r.src = TTLoader.loadingSrc, s.appendChild(r);
        var x = document.createElement("style");
        x.type = "text/css";
        var c = "@-moz-keyframes TTLoaderIconSpin { 100% { -moz-transform: rotate(360deg); } } ";
        if (c += "@-webkit-keyframes TTLoaderIconSpin { 100% { -webkit-transform: rotate(360deg); } } ", c += "@keyframes TTLoaderIconSpin { 100% { transform: rotate(360deg); }'; ", x.innerHTML = c, document.getElementsByTagName("head")[0].appendChild(x), TTLoader.applyWendorStyles(r.style, "animation", "TTLoaderIconSpin 3s linear infinite"), g.appendChild(s), Utils.addEventListener("fitlayout", TTLoader.setSizes), window.addEventListener("resize", TTLoader.setSizes), TTLoader.backgroundUrl) {
            var l = new ImagesPreloader;
            l.load([{
                name: "bg",
                src: TTLoader.backgroundUrl
            }], function(e) {
                TTLoader.backgroundImage = e.bg, document.getElementById("progress_container").style.backgroundImage = "url('" + TTLoader.backgroundImage.src + "')", TTLoader.setSizes()
            })
        }
        TTLoader.setSizes()
    },
    setSizes: function() {
        var e;
        if (e = Utils.getWindowRect ? Utils.getWindowRect() : {
            width: window.innerWidth,
            height: window.innerHeight
        }, document.getElementById("progress_container").style.width = e.width + "px", document.getElementById("progress_container").style.height = e.height + "px", TTLoader.backgroundImage) {
            var t = e.height / TTLoader.backgroundImage.height,
                i = Math.floor(TTLoader.backgroundImage.width * t),
                a = Math.floor(TTLoader.backgroundImage.height * t);
            document.getElementById("progress_container").style.backgroundSize = i + "px " + a + "px"
        }
        var g = Utils.globalScale * Utils.globalPixelScale;
        TTLoader.landscapeMode || (document.getElementById("progress").style.paddingTop = Math.floor(80 * g) + "px"), document.getElementById("tt_load_progress_cont").style.width = Math.floor(200 * g) + "px", document.getElementById("tt_load_progress").style.height = Math.floor(12 * g) + "px", document.getElementById("tt_load_progress").style.width = g * TTLoader.progressVal * 2 + "px", document.getElementById("tt_load_progress_cont").style.marginTop = Math.floor((55 * g / 2 - 12 * g) / 2) + "px";
        var s = document.getElementById("tt_load_logo"),
            o = 582 / TTLoader.originalLogoSize.width / 2;
        s.setAttribute("width", Math.floor(g * TTLoader.originalLogoSize.width * o) + "px"), s.setAttribute("height", Math.floor(g * TTLoader.originalLogoSize.height * o) + "px");
        var h = (document.getElementById("tt_load_button"), 262 / TTLoader.originalButtonSize.width / 3);
        document.getElementById("tt_load_button").setAttribute("width", Math.floor(g * TTLoader.originalButtonSize.width * h) + "px"), document.getElementById("tt_load_button").setAttribute("height", Math.floor(g * TTLoader.originalButtonSize.height * h) + "px"), document.getElementById("tt_load_button").style.marginTop = Math.floor((e.height - 125 * g / 3) / 2) + "px", document.getElementById("tt_load_icon").setAttribute("width", Math.floor(128 * g / 2) + "px"), document.getElementById("tt_load_icon").setAttribute("height", Math.floor(128 * g / 2) + "px"), document.getElementById("tt_load_icon").style.marginTop = Math.floor((e.height - 128 * g / 2) / 2) + "px", document.getElementById("tt_load_progress_wrapper").style.height = Math.floor(55 * g / 2) + "px", document.getElementById("tt_load_progress_wrapper").style.backgroundSize = Math.floor(548 * g / 2) + "px " + Math.floor(55 * g / 2) + "px", document.getElementById("tt_load_html5_logo").width = 30 * g, document.getElementById("tt_load_html5_logo").height = 33 * g, document.getElementById("tt_load_html5_logo").style.top = "-" + 6 * g + "px", document.getElementById("tt_load_html5_logo").style.marginLeft = "-" + 15 * g + "px"
    },
    progressVal: 0,
    showLoadProgress: function(e) {
        0 > e && (e = 0), e > 100 && (e = 100), "function" == typeof window.HTML5API_preloaderProgress && HTML5API_preloaderProgress(~~e), window.ExternalAPI && ExternalAPI.HTML5API_preloaderProgress(~~e), TTLoader.progressVal = e, TTLoader.setSizes()
    },
    loadComplete: function(e) {
        if (TTLoader.showLoadProgress(100), TTLoader.loadedData = e, "function" == typeof window.HTML5API_preloaderEnded) return HTML5API_preloaderEnded(), void TTLoader.close();
        if (window.ExternalAPI) return ExternalAPI.HTML5API_preloaderEnded(), void TTLoader.close();
        var t = document.getElementById("tt_load_button");
        t.style.display = "", document.getElementById("tt_load_icon").style.display = "none", Utils.bindEvent(t, "click", TTLoader.close), Utils.bindEvent(t, Utils.getTouchEndEvent(), TTLoader.close), t.style.cursor = "pointer", t.src = TTLoader.buttonSrc, t = document.getElementById("tt_load_progress"), t = document.getElementById("tt_load_progress_cont"), TTLoader.skipPlayButton ? TTLoader.close() : TTLoader.animateButtonTimer = setInterval(TTLoader.animateButton, 40)
    },
    animateButtonTimer: null,
    animateButtonVal: 0,
    animateButtonDirect: 1,
    animateButton: function() {
        TTLoader.animateButtonVal += TTLoader.animateButtonDirect, (TTLoader.animateButtonVal >= 10 || 0 == TTLoader.animateButtonVal) && (TTLoader.animateButtonDirect *= -1);
        var e = 1 + TTLoader.animateButtonVal / 100;
        TTLoader.applyWendorStyles(document.getElementById("tt_load_button").style, "transform", "scale(" + e + ", " + e + ")")
    },
    applyWendorStyles: function(e, t, i) {
        for (var a = ["", "-webkit-", "-moz-", "-o-", "-ms-"], g = 0; g < a.length; g++) e[a[g] + t] = i
    },
    close: function() {
        TTLoader.completed || (TTLoader.completed = !0, clearTimeout(TTLoader.animateButtonTimer), TTLoader.endCallback(TTLoader.loadedData))
    },
    logoSrc: "data:image/png;base64,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",
    buttonSrc: "data:image/png;base64,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",
    footerSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAAA3CAMAAAAL8KFeAAAAeFBMVEUAAAAAAAEAAAENDg4BAQIICAkAAAEAAAEAAAEDAwQNDg/x+Prz+vzx+Prs8/U5Ozz0+/3m7O7T2drO1NW5v8FtcHHa4eLh6Ont9Pbf5efb4ePX3d/y+fvAxsivtLalqqycoKKRlZbm7e/w9/nc4uQ3OTqWm5z0+/0Va/f0AAAAJ3RSTlMAAQIIGA8EHxILJ/L46eUz/tOtn3lGdk/aysG5s5B3bWRYK4kaGUjKPGIBAAAB5ElEQVR42u3bWW7CMBRG4dzr2BkgFMrUgQ4M7d3/DosQQiUQTPpYn28Nlg9E/rMbdotVMzT8e8Nmtd1kf7LlgCRkvNplfcnmyZCUwVKyPkQ3A0NihkuVXmekMSSnzykRdbQmSc3u7lOibmtI0sqp3HlGlmNDmpZO74pN8MQmWU8+SBYlWi0MyVpUKnfE5ot/NglrvpzeERsukqQtfJD4RTIyJGyUO41eJDND0maxq0RdPjEkbRK5SiT4b0Pivn2Q2xfJ1JC46e2rRH3Bz9bkjQqvN2rjyrUheevSdfdGq+LRkLzHotKsS/A1X1thTe1Dd23yTwPsM3dCbfDX3oSy5mUr9gZ1GTpr82HA3kfupKs2rwbsvXb0RkL5QG1wMHgog1yvzbsBB+/Xe6O+eDHg4KXwer02jH9xNDz25qI2PDfCyezYm3Ztng04er7SG3HlnEkWTsbz0snlc6M3A07ecqcXtal53IpfJrVXaoOevdGK2qDdm9an+UBtcNmb0PpIMjfgzDx3clabgikFWqZFpee1YUqBltFZb8TlTClwYZ07oTaI9obaINobphSITyuYUiA6rWBKgei0gikF4tMKphSITiuYUiA+rWBKgei0gikFotMKphSITyuYUiA6rWBKgei04gf1SxlWC63ntAAAAABJRU5ErkJggg==",
    loadingSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAC/VBMVEUAAAD9vaL/+uj/+eX/79n+i2T///v6fVb//ej3YTr///7/////flf/j2j2Yjv/hF3///////3//+D////vWTL/zKX//PT/nnf/e1T///f///z/uJH/4b/////0XDX////+akP/7sf/////f1j/47z/jGX4YDn//+73Yjv///7////4Yjv/qoP///////31XTb///3/bkf/pX7/9c7mTif/rIXsVC3/mXL/uJD/////bEX/hF3//+r/ckv//////tr/wZr/6cH/yaLvWDH/flb/4Ln///L/2bL/wJn/jWbqUiv/oXr/88z/sIn/hl//lG3/0Kn/yKH//+r4YTn//93wWTL/n3j/mXL/rYb/2bLqUyv/////j2f/58D/5b3/pH3/sov5Zj///+j/////mXL/a0P/rYb//+L/f1j///D/4rv//9r/17D/wJn//Nj/z6joUCn/uJH/7cb/rIX/6MHxWTL/47z//9ryWzT/7sf2Xjf/+9T+aEH/uZL//+r/5r///////9v/////+NH///3//9j////lTSbuVi/zXDT///TnUCnqUiv/bETrVC3wWTL/hV7//+/3Xzj//+b/nXb/mnP/aUL8ZD35Yjv/rof9Zj//v5f/sor/bkf/z6j/cUr/u5T/dk//c0z/3rf/elP/eFH/glv///n///3/fVb/iWL/f1j/mHD/kGj/h2D//+3/kmr//+j//+P//97/lW3/jGX//+r/qoP//+D/p4D//9v//9n/+9T/7sf/uJH/tI3/n3j//9j/9c7/5L3/4br/27T/xZ7/pH3/o3v/6MH/5r//1K3/to//2LH/1q//0qv/yKH/xp//wpv/q4T/8cr/7MX1Xjf/y6T4YTr+Z0D/zKX/cEn///v/fFX/dU7///j/i2T///z///b//+z/oXr/k2z/jmf/gFn/8sv/vZb/sIn///H//+L//NX/+NH/+ND/68T/+tP/4Ln/2rP/0ar/lm///9z/wZr/+dL/6cL/pn//9M3/88z/47z/yqPXa+0wAAAAhnRSTlMAAhkGDAZNDCAbicmJS0sj7rpMNDQyJxfxqW9IEtzSzsbDwr6vk4mIc1hAPh355d7U087My8O8u7CvramVlZKNjYxoXVNC8u7u7ezg2dnTzs3M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",
    html5LogoSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABkCAMAAABO18UcAAACwVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////kTSb////xZSnr6+vkSybs///yZyniPxT+9/XlVjHwYinkRx/iSSXvSwTkSyTzaCnr7e7kRRz+/v3r6urkSSHjMgTfLQDxYSPwXh/niXH2oHvkQhjkTyjkQxr+5933m3XqysHxYCHs/f/uXijhOQ3iQhngNAjwWhniQBbgMAPs+v3sWyjjPBLhOxHwUxDjMwXqVyfhNgvjNgnq0sznYT7fKwDq29fnhWv0aSngMgXuRwHxZCfoVCfgLwH+8Oz85NzpcFHlUizlTybwXB3jOQ7jMALs+//85+H94NLnUSbwTwrwTAbjLgDs9ffoa0vmWTXfJwDr8PH+8u/63tfyqJXthWrsf2PmXDjs9/rr8/X+9fL618z3xrnuj3breVvnaEfyaS7xYynwVxb/+/nr5+f96+X62dH40sj1va/1uKjptaj0s6Pon4zxn4rwmoTuinDoZEPnXjvr///r3tv83tD4z8T7z7z2wrTzr574tJbxo4/vlH3ngWbmel7qdVfr8vTr7u/97ujq1M73zMDpv7Tpu7DzrZvoo5H4qonomYX1j2TrfGD1i1381MLpycH3yb7qxLr6w6z5vaP4sJD3pYHolH73on3njXb2mXPzeEPyczzybTTvXiPfGgDr4d/q2NLqz8jqzsX6u5/orJ32lmz1k2j0glHzgU7zfkzze0jkQBbr5OL84db3yr76ybT6xrDor6D0hlfuQgDeLWjTAAAAOHRSTlMA8xBlBfj2w5haVjHvs6BBLCgHzMfAk2A0FOvRr4V4Rzod6ePeu6SPiIJ7ak4M5baKfyTc2HUcjEFv/7UAAAl1SURBVGjetZmHWtNgFIZTFMS99957r/xqWiA2tBARtVULbaFYqlSqDGXIUkBEUVFx77333nvvvffWq7AkJD0hqTQ+9buAviHhf/OdE8wZ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"
};
SimpleText.prototype.manageSprites = function(e) {
    var t, i, a = e.length,
        g = this.sprites.length;
    if (a > g)
        for (t = 0; a - g > t; t++) i = new SimpleText.spriteClass(this.font, this.width, this.height, this.charMap.length), this.sprites.push(i), this.parent.addChild(i);
    if (g > a) {
        for (t = 0; g - a > t; t++) this.parent.removeChild(this.sprites[t]);
        this.sprites.splice(0, g - a)
    }
}, SimpleText.prototype.getCharIx = function(e) {
    for (var t = 0; t < this.charMap.length; t++)
        if (this.charMap[t] == e) return t;
    return -1
}, SimpleText.prototype.getCharWidth = function(e) {
    var t = this.getCharIx(e);
    return t >= 0 && this.charWidth[t] ? this.charWidth[t] : this.width
}, SimpleText.prototype.getWidth = function() {
    for (var e = 0, t = 0; t < this.text.length; t++) e += this.getCharWidth(this.text.substr(t, 1)) + this.charSpacing;
    return e
}, SimpleText.prototype.write = function(e) {
    var t, i, a, g, s;
    e += "", this.text = e, this.manageSprites(e), t = this.x, i = this.y, this.align == SimpleText.ALIGN_CENTER && (t = this.x - this.getWidth() / 2 * this.scale + this.getCharWidth(this.text.substr(0, 1)) / 2 * this.scale), this.align == SimpleText.ALIGN_RIGHT && (t = this.x - this.getWidth() * this.scale), a = new Vector(t - this.x, 0), a.rotate(-this.rotation), t = a.x + this.x, i = a.y + this.y, a = new Vector(0, 0);
    for (var o = 0; o < e.length; o++)
        if (this.sprites[o].visible = !0, s = this.charMap.indexOf(e.substr(o, 1)), 0 > s) this.sprites[o].visible = !1;
        else {
            var h = this.getCharWidth(this.text.substr(o, 1));
            this.sprites[o].scaleX = this.sprites[o].scaleY = this.scale, this.sprites[o].gotoAndStop(s), g = a.clone(), g.x *= this.scale, g.rotate(-this.rotation), this.sprites[o].x = g.x + ("," == this.text.substr(o, 1) ? t - h / 2 : t), this.sprites[o].y = g.y + i, this.sprites[o].rotation = this.rotation, this.sprites[o]["static"] = this["static"], this.sprites[o].opacity = this.opacity, this.sprites[o].ignoreViewport = this.ignoreViewport, this.sprites[o].gx = this.sprites[o].x, this.sprites[o].gy = this.sprites[o].y, this.sprites[o].gscaleX = this.sprites[o].scaleX, this.sprites[o].gscaleY = this.sprites[o].scaleY, this.sprites[o].grotation = this.sprites[o].rotation, this.sprites[o].gopacity = this.sprites[o].opacity, a.x += h + this.charSpacing
        }
}, SimpleText.prototype.refresh = function() {
    this.write(this.text)
}, SimpleText.prototype.addToGroup = function(e) {
    for (var t = 0; t < this.sprites.length; t++) this.sprites[t].gx = this.sprites[t].x / 2, this.sprites[t].gy = this.sprites[t].y, e.addChild(this.sprites[t], !1)
}, SimpleText.prototype.putToGroup = function(e) {
    for (var t = 0; t < this.sprites.length; t++) this.sprites[t].gx = this.sprites[t].x, this.sprites[t].gy = this.sprites[t].y, e.addChild(this.sprites[t], !1)
}, SimpleText.prototype.refreshOnTween = function(e) {
    e.target.obj.refresh()
}, SimpleText.prototype.setPosition = function(e, t) {
    this.x = e, this.y = t, this.refresh()
}, SimpleText.prototype.removeTweens = function() {
    this.stage && this.stage.clearObjectTweens(this)
}, SimpleText.prototype.addTween = function(e, t, i, a, g, s) {
    if (this.stage) {
        var o = this[e];
        if (!isNaN(o)) {
            var h = this.stage.createTween(this, e, o, t, i, a);
            return h.onchange = s, h.onfinish = g, h
        }
    }
}, SimpleText.prototype.moveTo = function(e, t, i, a, g, s) {
    if (i = ~~i, 0 >= i) this.setPosition(e, t);
    else {
        var o = this.addTween("x", e, i, a, g, s);
        o && (o.addEventListener("change", this.refreshOnTween), o.addEventListener("finish", this.refreshOnTween), o.play());
        var h = this.addTween("y", t, i, a, o ? null : g, o ? null : s);
        h && (h.addEventListener("change", this.refreshOnTween), h.addEventListener("finish", this.refreshOnTween), h.play())
    }
    return this
}, SimpleText.prototype.moveBy = function(e, t, i, a, g, s) {
    return this.moveTo(this.x + e, this.y + t, i, a, g, s)
}, SimpleText.prototype.fadeTo = function(e, t, i, a, g) {
    if (t = ~~t, 0 >= t) this.opacity = e;
    else {
        var s = this.addTween("opacity", e, t, i, a, g);
        s && (s.play(), s.addEventListener("change", this.refreshOnTween), s.addEventListener("finish", this.refreshOnTween))
    }
    return this
}, SimpleText.prototype.fadeBy = function(e, t, i, a, g) {
    var s = Math.max(0, Math.min(1, this.opacity + e));
    return this.fadeTo(s, t, i, a, g)
}, SimpleText.prototype.rotateTo = function(e, t, i, a, g) {
    if (t = ~~t, 0 >= t) this.rotation = e;
    else {
        var s = this.addTween("rotation", e, t, i, a, g);
        s && (s.play(), s.addEventListener("change", this.refreshOnTween), s.addEventListener("finish", this.refreshOnTween))
    }
    return this
}, SimpleText.prototype.rotateBy = function(e, t, i, a, g) {
    return this.rotateTo(this.rotation + e, t, i, a, g)
}, SimpleText.prototype.scaleTo = function(e, t, i, a, g) {
    if (t = ~~t, 0 >= t) this.scale = e;
    else {
        var s = this.addTween("scale", e, t, i, a, g);
        s && (s.play(), s.addEventListener("change", this.refreshOnTween), s.addEventListener("finish", this.refreshOnTween))
    }
    return this
}, SimpleText.spriteClass = Sprite, SimpleText.ALIGN_LEFT = 0, SimpleText.ALIGN_RIGHT = 1, SimpleText.ALIGN_CENTER = 2, AudioPlayer.prototype.createNewAudio = function() {
    if (AudioMixer.isWebAudioSupport()) {
        this.gainNode = AudioMixer.waContext.createGainNode ? AudioMixer.waContext.createGainNode() : AudioMixer.waContext.createGain();
        var e = AudioMixer.waContext.createBufferSource();
        return e.connect(this.gainNode), this.gainNode.connect(AudioMixer.waContext.destination), e
    }
    return document.createElement("audio")
}, AudioPlayer.prototype.isMp3Support = function() {
    return "" != document.createElement("audio").canPlayType("audio/mpeg")
}, AudioPlayer.prototype.init = function(e) {
    return this.basePath = e ? e : "", this.delayPlay = "ontouchstart" in window, this.audioWrapper = this.createNewAudio(), this.mp3Support = this.isMp3Support(), !0
}, AudioPlayer.prototype.play = function(e, t) {
    if (this.disabled) return !1;
    var i = this.basePath + "/" + e + (this.mp3Support ? ".mp3" : ".ogg");
    if (this.stop(), this.audioWrapper = this.createNewAudio(), this.audioWrapper.doLoop = !!t, this.audioWrapper.fileName = e, AudioMixer.isWebAudioSupport()) {
        var a = this;
        this.loadSound(i, function(e) {
            a.audioWrapper.buffer || (a.audioWrapper.buffer = e, a.audioWrapper.noteOn ? a.audioWrapper.noteOn(0) : a.audioWrapper.start(0), a.startPlayTime = (new Date).getTime(), a.audioWrapper.loop = t, "undefined" != typeof a.audioWrapper.playbackState ? a.waCheckInterval = setInterval(function() {
                return a.audioWrapper ? void(a.audioWrapper.playbackState == a.audioWrapper.FINISHED_STATE && a.controlPlay()) : void clearInterval(a.waCheckInterval)
            }, 100) : a.audioWrapper.onended = a.controlPlay)
        })
    } else this.audioWrapper.src = i, this.audioWrapper.type = this.mp3Support ? "audio/mpeg" : "audio/ogg", this.audioWrapper.loop = !1, this.audioWrapper.preload = "auto", this.audioWrapper.load(), this.delayPlay ? (this.audioWrapper.addEventListener("canplay", this.readyToPlay), this.audioWrapper.addEventListener("canplaythrough", this.readyToPlay)) : this.audioWrapper.play(), this.audioWrapper.addEventListener("ended", this.controlPlay, !1);
    this.busy = !0, this.startPlayTime = (new Date).getTime()
}, AudioPlayer.prototype.loadSound = function(e, t) {
    if (AudioMixer.buffer[e]) return void(t && t(AudioMixer.buffer[e]));
    var i = null;
    i = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), i.open("GET", e, !0), i.responseType = "arraybuffer", i.onreadystatechange = function() {
        4 != this.readyState || 200 != this.status && 0 != this.status || AudioMixer.waContext.decodeAudioData(this.response, function(i) {
            AudioMixer.buffer[e] = i, t && t(i)
        })
    }, i.send()
}, AudioPlayer.prototype.readyToPlay = function(e) {
    e.currentTarget.alreadyLoaded || (e.currentTarget.alreadyLoaded = !0, e.currentTarget.play())
}, AudioPlayer.prototype.stop = function() {
    if (this.busy && (this.busy = !1, this.audioWrapper)) {
        try {
            AudioMixer.isWebAudioSupport() ? this.audioWrapper.noteOff ? this.audioWrapper.noteOff(0) : this.audioWrapper.stop(0) : (this.audioWrapper.currentTime = 0, this.audioWrapper.pause(), this.audioWrapper.removeEventListener("canplay", this.readyToPlay), this.audioWrapper.removeEventListener("canplaythrough", this.readyToPlay))
        } catch (e) {}
        this.audioWrapper = null
    }
}, AudioPlayer.prototype.pause = function() {
    AudioMixer.isWebAudioSupport() ? this.audioWrapper && this.audioWrapper.disconnect() : this.audioWrapper && this.audioWrapper.pause()
}, AudioPlayer.prototype.resume = function() {
    if (AudioMixer.isWebAudioSupport()) {
        if (this.audioWrapper) try {
            this.audioWrapper.connect(this.gainNode)
        } catch (e) {}
    } else this.audioWrapper && this.audioWrapper.play()
}, AudioPlayer.prototype.controlPlay = function() {
    this.audioWrapper && (this.audioWrapper.doLoop ? AudioMixer.isWebAudioSupport() || (Utils.isFirefox() ? this.play(this.audioWrapper.fileName, !0) : (this.audioWrapper.currentTime = 0, this.audioWrapper.play())) : (this.busy = !1, "function" == typeof this.onend && this.onend(), this.waCheckInterval && clearInterval(this.waCheckInterval)))
}, AudioPlayer.prototype.getPosition = function() {
    if (AudioMixer.isWebAudioSupport()) {
        if (!this.startPlayTime) return 0;
        var e = this.getDuration();
        if (!e) return 0;
        var t = ((new Date).getTime() - this.startPlayTime) / 1e3;
        return e >= t ? t : this.audioWrapper.doLoop ? t - Math.floor(t / e) * e : e
    }
    return this.audioWrapper.currentTime ? this.audioWrapper.currentTime : 0
}, AudioPlayer.prototype.getDuration = function() {
    return AudioMixer.isWebAudioSupport() ? this.audioWrapper.buffer ? this.audioWrapper.buffer.duration : 0 : this.audioWrapper.duration ? this.audioWrapper.duration : 0
}, AudioPlayer.prototype.setVolume = function(e) {
    this.volume = e, this.volume < 0 && (this.volume = 0), this.volume > 1 && (this.volume = 1), AudioMixer.isWebAudioSupport() ? this.gainNode.gain.value = this.volume : this.audioWrapper.volume = this.volume
}, AudioPlayer.prototype.getVolume = function() {
    return this.volume
}, AudioMixer.prototype.init = function(e, t) {
    if (AudioMixer.isWebAudioSupport()) {
        AudioMixer.waContext = new window.AudioContext;
        var i = AudioMixer.waContext.createBuffer(1, 1, 22050),
            a = AudioMixer.waContext.createBufferSource();
        a.buffer = i, a.connect(AudioMixer.waContext.destination), a.noteOn ? a.noteOn(0) : a.start(0)
    }
    AudioMixer.isWebAudioSupport() || -1 == navigator.userAgent.toLowerCase().indexOf("mac") || (this.singleChannelMode = !0, t = 1), this.path = e, this.channels = [];
    for (var g = 0; t > g; g++) this.channels[g] = new AudioPlayer, this.channels[g].init(e);
    Utils.addEventListener("hidewindow", Utils.proxy(this.pauseOnHide, this)), Utils.addEventListener("showwindow", Utils.proxy(this.resumeOnShow, this))
}, AudioMixer.prototype.pauseOnHide = function() {
    if (AudioMixer.AUTO_PAUSE_ON_TAB_HIDE)
        for (var e = 0; e < this.channels.length; e++) this.channels[e].pause()
}, AudioMixer.prototype.resumeOnShow = function() {
    if (AudioMixer.AUTO_PAUSE_ON_TAB_HIDE)
        for (var e = 0; e < this.channels.length; e++) this.channels[e].resume()
}, AudioMixer.prototype.play = function(e, t, i, a) {
    var g = -1;
    return g = "number" == typeof a ? a : this.getFreeChannel(i), g >= 0 && g < this.channels.length && (this.channels[g].stop(), this.channels[g].play(e, t)), this.channels[g]
}, AudioMixer.prototype.stop = function(e) {
    e >= 0 && e < this.channels.length && this.channels[e].stop()
}, AudioMixer.prototype.getFreeChannel = function(e) {
    for (var t = -1, i = [], a = -1, g = -1, s = 0, o = 0; o < this.channels.length; o++) this.channels[o].locked || (this.channels[o].busy ? (s = (new Date).getTime(), s -= this.channels[o].startPlayTime, s > g && (g = s, a = o)) : i.push(o));
    return 0 == i.length ? !e && a >= 0 && (t = a) : t = i[0], t
}, AudioMixer.isWebAudioSupport = function() {
    return Boolean(window.AudioContext)
}, window.AudioContext = window.AudioContext || window.webkitAudioContext, AudioMixer.buffer = {}, AudioMixer.waContext = null, AudioMixer.AUTO_PAUSE_ON_TAB_HIDE = !0;
var ExternalAPI = {
        type: "funtomic",
        bitmaps: null,
        moreGamesBtnDisable: !0,
        stage: null,
        //kizi_logo1: "data:image/png;base64,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",
        //kizi_logo15: "data:image/png;base64,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",
        //kizi_logo2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAABICAMAAAAERX1nAAAC/VBMVEUAAAAAAAAAAQALDwoBAQH///8EBgL+/v/////////////////////////////////////////////+/v8MEQj///8IDgP////////////////7+/v//////////v7UpIU4VRFDZBL9fXJlfCD9rqXu8O/AhXN6kjz///8OGwUrRgyKl3cbLQutnqS+WE5PdAwzUg4YORGboKLgfWz11dBSX0d2alb50tlcei3Pzb+hiVfSX27////qmA6izRrolA2Xwhv7JAubxxvsnBDwpBLzqBPmkAueyRn2rRSfyxqZxRruoBH/76D/8bDjiwoCAgLk7fmTvxv/30L5sRWl0Rr8vRt3EQJwBgGFJAL/7JD/3TX/6HX5thn/41vynAz/4U7/6oKJLgms2xdVgRSw4Bn/+9OOuRr/52j//eD/+Nn/uRWo1hqRPyiRKgD5AwD///H/9s3/9cBdjBqfPQP//ufu4uH/9LmTRjp2nRSXMQGAGQD17Ojp2df/9cd4qB33pA5jAQBmmSCHshtsjxSkZFrUtrH/xhuiSgj//8P//rGfzgj9FAWQNwv0+f/7+Pf28fLex8S8kI7/8XmiWTuWxATUfgStTQDav73Nqqf//HqArBi5h4Csa1qmFwH//o+3gG+dV06qZkz/3yiHMCHchwjm0MvCm53Ko5pGbxayWQaxdWG7gU636Bx9IRkkKRfMdQexe3b/7VT/0yHIbAOrZySHtQP//p2TRBG8YAPDZwGSBgDFmoupbWz//lj/8zbe3eDmyIeTq2Kv1Tq8eyahUSBRcg2+vtvz3qe00XzI71a+FgXZ3PaIi5OjunTdum3v0VGdlDH3zC9fpyIxRAFveWr9Xk3LmTpxwhdwTxbV9YaDmFOcxEePrkaqrsDky7GksKHSplbatEs1NEhWLCKR3h2g4hr26sOTl6fA2ZZraY3w2H1NTGdeZVrowk6xJj68tDmQvC77Qys3ARWAzxPfGgbLm2W+ll6t11LcrizpuyZHoiTlM1ze9bOVaFnSTjeB7JiCAAAAPHRSTlMAanMSWu5MNve2ZwTXKQqQcsuqwirhPYVBViATfEyc+OvW/Pz4HP795pSO/MOH++bAbrH6j35Zv6bgtZKJFCcSAAATu0lEQVRo3syVe0xbVRjA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",
        init: function() {
            window.HTML5API && HTML5API.onAdStart && HTML5API.onAdStart(ExternalAPI.pauseGameOnAd), window.HTML5API && HTML5API.onAdComplete && HTML5API.onAdComplete(ExternalAPI.resumeGameOnAd)
        },
        exec: function() {
            var e = arguments[0];
            if ("exec" != e && "function" == typeof ExternalAPI[e]) return ExternalAPI[e].apply(ExternalAPI, Utils.getFunctionArguments(arguments, 1))
        },
        getMoreGamesURL: function() {},
        getMoreGamesButtonDisable: function() {
            return !0
        },
        setStage: function(e) {
            ExternalAPI.stage = e
        },
        getStage: function() {
            return ExternalAPI.stage || window.stage || null
        },
        levelStarted: function() {
            console.log("API LEVEL STARTED"), window.HTML5API && HTML5API.levelStarted()
        },
        levelEnded: function() {
            console.log("API LEVEL ENDED"), window.HTML5API && HTML5API.levelEnded()
        },
        HTML5API_preloaderStarted: function() {
            window.HTML5API && HTML5API.preloaderStarted && HTML5API.preloaderStarted()
        },
        HTML5API_preloaderEnded: function() {
            window.HTML5API && HTML5API.preloaderEnded && HTML5API.preloaderEnded()
        },
        HTML5API_preloaderProgress: function(e) {
            window.HTML5API && HTML5API.preloaderProgress && HTML5API.preloaderProgress(e)
        },
        setWidgetState: function(e) {
            window.HTML5API && HTML5API.setWidgetState && HTML5API.setWidgetState(e)
        },
        showAds: function() {
            console.log("API SHOW ADS"), window.HTML5API && HTML5API.displayMidroll && HTML5API.displayMidroll()
        },
        pauseGameOnAd: function() {
            var e = ExternalAPI.getStage();
            e && e.stop()
        },
        resumeGameOnAd: function() {
            var e = ExternalAPI.getStage();
            e && e.start()
        },
        addLogo: function(e, t, i, a) {
            var g = new Image;
            g.src = ExternalAPI["kizi_logo" + (Utils.globalScale + "").replace(".", "")];
            var s = g,
                o = new Sprite(s, 67, 36);
            return e || 0 === e || (e = 410), t || 0 === t || (t = 280), "undefined" == typeof i && (i = !0), "undefined" == typeof a && (a = ExternalAPI.stage ? ExternalAPI.stage : window.stage), o.x = e, o.y = t, a.addChild(o), o.setStatic(!i), o
        }
    },
    I18 = {
        currentLocale: "en",
        supportedLanguage: ["en"],
        strings: {},
        iniFolder: "language",
        iniPrefix: "",
        iniExt: "txt",
        iniSeparator: ";",
        parser: null,
        init: function(e, t) {
            var i = window.navigator.userLanguage || window.navigator.language || "";
            e || (e = window.ExternalAPI && window.ExternalAPI.exec("getLanguage") || i.substr(0, 2)), I18.supportedLanguage.indexOf(e) < 0 && (e = I18.supportedLanguage[0]), I18.currentLocale = e, Utils.get(I18.iniFolder + "/" + I18.iniPrefix + e + "." + I18.iniExt + "?v=" + (new Date).getTime(), null, null, function(e) {
                var i = {};
                if (I18.parser) i = I18.parser(e);
                else
                    for (var a, g = e.split("\n"), s = 0; s < g.length; s++) a = g[s].split(I18.iniSeparator), i[I18.trim(a[0])] = I18.trim(a[1]);
                I18.setup(i), t && t()
            })
        },
        setup: function(e) {
            I18.strings = e
        },
        trim: function(e) {
            return e ? e.replace(/^\s+|\s+$/gm, "") : ""
        },
        arrayAntidot: function(e) {
            return e ? e.length > 0 && Utils.isArray(e[0]) ? e[0] : e : void 0
        },
        getString: function(e, t) {
            "undefined" == typeof t && (t = null);
            var i = I18.getStringOrNull(e, t);
            return null == i ? "{" + e + "}" : i
        },
        getStringOrNull: function(e, t) {
            "undefined" == typeof t && (t = null);
            var i = I18.strings[e];
            return "undefined" == typeof i && (i = null), null == t || null == i ? i : (t = [i].concat(I18.arrayAntidot(t)), I18.sprintf.apply(I18, t))
        },
        f: function(e) {
            var t = I18.arrayAntidot(Array.prototype.slice.call(arguments, 1));
            return Utils.isArray(t) || (t = [t]), I18.getString(e, t)
        },
        s: function(e, t, i) {
            return Utils.isArray(i) || (i = [i]), I18.getString(e + "_" + t, I18.arrayAntidot(i))
        },
        sf: function(e, t, i) {
            return I18.getString(e + "_" + t, I18.arrayAntidot(i))
        },
        psf: function(e, t, i, a) {
            return I18.getString(e + "_" + t + "_" + i, I18.arrayAntidot(a))
        },
        sprintf: function() {
            var e = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
                t = arguments,
                i = 0,
                a = t[i++],
                g = function(e, t, i, a) {
                    i || (i = " ");
                    var g = e.length >= t ? "" : new Array(1 + t - e.length >>> 0).join(i);
                    return a ? e + g : g + e
                },
                s = function(e, t, i, a, s, o) {
                    var h = a - e.length;
                    return h > 0 && (e = i || !s ? g(e, a, o, i) : e.slice(0, t.length) + g("", h, "0", !0) + e.slice(t.length)), e
                },
                o = function(e, t, i, a, o, h, n) {
                    var f = e >>> 0;
                    return i = i && f && {
                        2: "0b",
                        8: "0",
                        16: "0x"
                    }[t] || "", e = i + g(f.toString(t), h || 0, "0", !1), s(e, i, a, o, n)
                },
                h = function(e, t, i, a, g, o) {
                    return null != a && (e = e.slice(0, a)), s(e, "", t, i, g, o)
                },
                n = function(e, a, n, f, d, A, C) {
                    var I, r, x, c, l;
                    if ("%%" === e) return "%";
                    for (var y = !1, p = "", u = !1, w = !1, v = " ", m = n.length, T = 0; n && m > T; T++) switch (n.charAt(T)) {
                        case " ":
                            p = " ";
                            break;
                        case "+":
                            p = "+";
                            break;
                        case "-":
                            y = !0;
                            break;
                        case "'":
                            v = n.charAt(T + 1);
                            break;
                        case "0":
                            u = !0, v = "0";
                            break;
                        case "#":
                            w = !0
                    }
                    if (f = f ? "*" === f ? +t[i++] : "*" == f.charAt(0) ? +t[f.slice(1, -1)] : +f : 0, 0 > f && (f = -f, y = !0), !isFinite(f)) throw new Error("sprintf: (minimum-)width must be finite");
                    switch (A = A ? "*" === A ? +t[i++] : "*" == A.charAt(0) ? +t[A.slice(1, -1)] : +A : "fFeE".indexOf(C) > -1 ? 6 : "d" === C ? 0 : void 0, l = a ? t[a.slice(0, -1)] : t[i++], C) {
                        case "s":
                            return h(String(l), y, f, A, u, v);
                        case "c":
                            return h(String.fromCharCode(+l), y, f, A, u);
                        case "b":
                            return o(l, 2, w, y, f, A, u);
                        case "o":
                            return o(l, 8, w, y, f, A, u);
                        case "x":
                            return o(l, 16, w, y, f, A, u);
                        case "X":
                            return o(l, 16, w, y, f, A, u).toUpperCase();
                        case "u":
                            return o(l, 10, w, y, f, A, u);
                        case "i":
                        case "d":
                            return I = +l || 0, I = Math.round(I - I % 1), r = 0 > I ? "-" : p, l = r + g(String(Math.abs(I)), A, "0", !1), s(l, r, y, f, u);
                        case "e":
                        case "E":
                        case "f":
                        case "F":
                        case "g":
                        case "G":
                            return I = +l, r = 0 > I ? "-" : p, x = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(C.toLowerCase())], c = ["toString", "toUpperCase"]["eEfFgG".indexOf(C) % 2], l = r + Math.abs(I)[x](A), s(l, r, y, f, u)[c]();
                        default:
                            return e
                    }
                };
            return a.replace(e, n)
        }
    };
BitmapText.ALIGN_LEFT = 0, BitmapText.ALIGN_RIGHT = 1, BitmapText.ALIGN_CENTER = 2, BitmapText.VALIGN_TOP = 0, BitmapText.VALIGN_MIDDLE = 1, BitmapText.VALIGN_BOTTOM = 2, BitmapText.spriteClass = Sprite, BitmapText.LINES_DELIMITER = "\n", BitmapText.prototype.x = 0, BitmapText.prototype.y = 0, BitmapText.prototype.align = BitmapText.ALIGN_LEFT, BitmapText.prototype.valign = BitmapText.VALIGN_TOP, BitmapText.prototype.rotation = 0, BitmapText.prototype.charSpacing = 0, BitmapText.prototype.lineSpacing = 0, BitmapText.prototype.lineHeight = null, BitmapText.prototype.maxWidth = 0, BitmapText.prototype.scale = 1, BitmapText.prototype.opacity = 1, BitmapText.prototype["static"] = !1, BitmapText.prototype.text = "", this.ignoreViewport = !1, this.zIndex = void 0, BitmapText.prototype.manageSprites = function(e) {
    if (this.parent) {
        var t, i, a = e.length,
            g = this.sprites.length;
        if (a > g)
            for (t = 0; a - g > t; t++) i = new BitmapText.spriteClass(null, 0, 0), this.sprites.push(i), this.parent.addChild(i);
        if (g > a) {
            for (t = 0; g - a > t; t++) this.parent.removeChild(this.sprites[t]);
            this.sprites.splice(0, g - a)
        }
    }
}, BitmapText.prototype.getChar = function(e) {
    for (var t = e.charCodeAt(0), i = 0; i < this.charMap.length; i++)
        if (this.charMap[i].id == t) return this.charMap[i];
    return console.log("Char not found", e, t, this.text), {
        id: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 0
    }
}, BitmapText.prototype.getWidth = function() {
    for (var e = 0, t = 0; t < this.lines.length; t++) {
        for (var i, a = 0, g = 0; g < this.lines[t].length; g++) i = this.getChar(this.lines[t].substr(g, 1)), a += i.xadvance + this.charSpacing;
        a > e && (e = a)
    }
    return e
}, BitmapText.prototype.getRealWidth = function() {
    return this.getWidth() * this.scale
}, BitmapText.prototype.getWidthOfLine = function(e) {
    for (var t, i = 0, a = 0; a < this.lines[e].length; a++) t = this.getChar(this.lines[e].substr(a, 1)), i += t.xadvance + this.charSpacing;
    return i
}, BitmapText.prototype.getHeight = function() {
    for (var e = 0, t = 0; t < this.lines.length; t++) e += this.getHeightOfLine(t) + this.lineSpacing;
    return e
}, BitmapText.prototype.getRealHeight = function() {
    return this.getHeight() * this.scale
}, BitmapText.prototype.getHeightOfLine = function(e) {
    if (this.lineHeight) return this.lineHeight;
    for (var t, i = 0, a = 0; a < this.lines[e].length; a++) t = this.getChar(this.lines[e].substr(a, 1)), t.height + t.yoffset > i && (i = t.height + t.yoffset);
    return i
}, BitmapText.prototype.setScaleToFitContainer = function(e, t, i) {
    var a = e / this.getWidth();
    t && t > a ? a = t : i && a > i && (a = i), this.scale = a
}, BitmapText.prototype.write = function(e) {
    var t, i, a, g, s, o, h, n, f;
    if (e += "", this.maxWidth > 0) {
        for (var d, A = e.split(BitmapText.LINES_DELIMITER), C = [], I = [], r = 0; r < A.length; r++) {
            d = A[r].split(" "), I = [d[0]];
            for (var x = 1; x < d.length; x++) this.lines = [I.join(" ") + " " + d[x]], this.getWidthOfLine(0) > this.maxWidth ? (C.push(I.join(" ")), I = [d[x]]) : I.push(d[x]);
            C.push(I.join(" "))
        }
        e = C.join(BitmapText.LINES_DELIMITER)
    }
    this.text = e, this.lines = e.split(BitmapText.LINES_DELIMITER), this.manageSprites(e), a = this.x, g = this.y, s = this.y, n = this.getHeight(), this.valign == BitmapText.VALIGN_MIDDLE && (s = this.y - n / 2 * this.scale), this.valign == BitmapText.VALIGN_BOTTOM && (s = this.y - n * this.scale);
    for (var c = 0, l = 0, x = 0; x < this.lines.length; x++) {
        f = this.getHeightOfLine(x), this.align == BitmapText.ALIGN_CENTER && (a = this.x - this.getWidthOfLine(x) / 2 * this.scale), this.align == BitmapText.ALIGN_RIGHT && (a = this.x - this.getWidthOfLine(x) * this.scale), o = new Vector(a - this.x, s - this.y + l), o.rotate(-this.rotation), a = o.x + this.x, g = o.y + this.y, l += (f + this.lineSpacing) * this.scale, o = new Vector(0, 0);
        for (var y = 0; y < this.lines[x].length; y++) i = this.sprites[c], c++, i.visible = !0, t = this.getChar(this.lines[x].substr(y, 1)), t ? (i.bitmap = this.font[t.page ? t.page : 0], i.width = t.width, i.height = t.height, i.offset.left = t.x, i.offset.top = t.y, i.anchor.x = -t.width / 2, i.anchor.y = -t.height / 2, h = o.clone(), h.x += t.xoffset * this.scale, h.y += (t.yoffset - f / 2) * this.scale, h.rotate(-this.rotation), i.x = h.x + a, i.y = h.y + g, i.scaleX = i.scaleY = this.scale, i.rotation = this.rotation, i.setStatic(this["static"]), i.ignoreViewport = this.ignoreViewport, i.opacity = this.opacity, i.gx = i.x, i.gy = i.y, i.gscaleX = i.scaleX, i.gscaleY = i.scaleY, i.grotation = i.rotation, i.gopacity = i.opacity, o.x += (t.xadvance + this.charSpacing) * this.scale, "number" == typeof this.zIndex && i.zIndex != this.zIndex && i.setZIndex(this.zIndex)) : i.visible = !1
    }
}, BitmapText.prototype.setStatic = function(e) {
    e = !!e, this["static"] != e && (this["static"] = e, this.refresh())
}, BitmapText.prototype.setZIndex = function(e) {
    this.zIndex = e;
    for (var t = 0; t < this.sprites.length; t++) this.sprites[t].setZIndex(e)
}, BitmapText.prototype.addToGroup = function(e) {
    for (var t = 0; t < this.sprites.length; t++) this.sprites[t].gx = this.sprites[t].x / 2, this.sprites[t].gy = this.sprites[t].y, e.addChild(this.sprites[t], !1)
}, BitmapText.prototype.putToGroup = function(e) {
    for (var t = 0; t < this.sprites.length; t++) this.sprites[t].gx = this.sprites[t].x, this.sprites[t].gy = this.sprites[t].y, e.addChild(this.sprites[t], !1)
}, BitmapText.prototype.refresh = function() {
    this.write(this.text)
}, BitmapText.prototype.refreshOnTween = function(e) {
    e.target.obj.refresh()
}, BitmapText.prototype.setPosition = function(e, t) {
    this.x = e, this.y = t, this.refresh()
}, BitmapText.prototype.removeTweens = function() {
    var e = this.parent && this.parent.stage ? this.parent.stage : this.stage;
    e && e.clearObjectTweens(this)
}, BitmapText.prototype.addTween = function(e, t, i, a, g, s) {
    var o = this.parent && this.parent.stage ? this.parent.stage : this.stage;
    if (o) {
        var h = this[e];
        if (!isNaN(h)) {
            var n = o.createTween(this, e, h, t, i, a);
            return n.onchange = s, n.onfinish = g, n
        }
    }
}, BitmapText.prototype.moveTo = function(e, t, i, a, g, s) {
    if (i = ~~i, 0 >= i) this.setPosition(e, t);
    else {
        var o = this.addTween("x", e, i, a, g, s);
        o && (o.addEventListener("change", this.refreshOnTween), o.addEventListener("finish", this.refreshOnTween), o.play());
        var h = this.addTween("y", t, i, a, o ? null : g, o ? null : s);
        h && (h.addEventListener("change", this.refreshOnTween), h.addEventListener("finish", this.refreshOnTween), h.play())
    }
    return this
}, BitmapText.prototype.moveBy = function(e, t, i, a, g, s) {
    return this.moveTo(this.x + e, this.y + t, i, a, g, s)
}, BitmapText.prototype.fadeTo = function(e, t, i, a, g) {
    if (t = ~~t, 0 >= t) this.opacity = e;
    else {
        var s = this.addTween("opacity", e, t, i, a, g);
        s && (s.play(), s.addEventListener("change", this.refreshOnTween), s.addEventListener("finish", this.refreshOnTween))
    }
    return this
}, BitmapText.prototype.fadeBy = function(e, t, i, a, g) {
    var s = Math.max(0, Math.min(1, this.opacity + e));
    return this.fadeTo(s, t, i, a, g)
}, BitmapText.prototype.rotateTo = function(e, t, i, a, g) {
    if (t = ~~t, 0 >= t) this.rotation = e;
    else {
        var s = this.addTween("rotation", e, t, i, a, g);
        s && (s.play(), s.addEventListener("change", this.refreshOnTween), s.addEventListener("finish", this.refreshOnTween))
    }
    return this
}, BitmapText.prototype.rotateBy = function(e, t, i, a, g) {
    return this.rotateTo(this.rotation + e, t, i, a, g)
}, BitmapText.prototype.scaleTo = function(e, t, i, a, g) {
    if (t = ~~t, 0 >= t) this.scale = e;
    else {
        var s = this.addTween("scale", e, t, i, a, g);
        s && (s.play(), s.addEventListener("change", this.refreshOnTween), s.addEventListener("finish", this.refreshOnTween))
    }
    return this
}, Utils.extend(GameStage, Stage), GameStage.instance = null, GameStage.create = function(e) {
    var t = Utils.getScaleScreenResolution(1, GAME_MANIFEST.landscape);
    return new GameStage(t, e)
}, GameStage.prototype.destroy = function() {
    Utils.removeEventListener("fitlayout", this.handleFitLayout), Utils.removeEventListener("lockscreen", this.handleLockScreen), Utils.removeEventListener("unlockscreen", this.handleUnlockScreen), Utils.removeEventListener("hidewindow", this.refreshView), Utils.removeEventListener("showwindow", this.refreshView), EventsManager.removeAllEventListeners(this), GameStage.superclass.destroy.call(this)
}, GameStage.prototype.tick = function(e) {
    e && !this.started ? (this.started = !0, Utils.callSuperMethod(GameStage, this, "tick"), this.started = !1) : Utils.callSuperMethod(GameStage, this, "tick")
}, GameStage.prototype.stop = function() {
    Utils.callSuperMethod(GameStage, this, "stop"), this.tick(!0)
}, GameStage.prototype.refreshView = function() {
    resizeCSSBack(), this.drawScene(this.canvas), this.drawScene(this.backgroundCanvas, !0)
}, GameStage.prototype.handleFitLayout = function() {
    this.refreshView(), this.tick()
}, GameStage.prototype.handleLockScreen = function() {
    this.stop(), this.refreshView()
}, GameStage.prototype.handleUnlockScreen = function() {
    this.start(), this.refreshView(), this.tick()
}, GameStage.prototype.tick = function() {
    Stage.TIMER_MODE == Stage.TIMER_MODE_FRAME && clearTimeout(this.tmMain);
    var e;
    if (Utils.isWindowHidden) this.lastTick = 0, e = this.delay;
    else {
        var t = (new Date).getTime(),
            i = Math.min(Stage.MIN_DELTA, t - this.lastTick);
        if (this._isPaused && (i = 0), this.lastTick = t, !this._isPaused && this.hasEventListener("pretick") && this.dispatchEvent("pretick", {
            target: this,
            delta: i
        }), !this.started) return void(this.lastTick = 0);
        if (this._isPaused || this.updateTweens(i), !this.started) return void(this.lastTick = 0);
        if (this._isPaused || this.updateTimers(i), !this.started) return void(this.lastTick = 0);
        !this._isPaused && this.hasEventListener("prerender") && this.dispatchEvent("prerender", {
            target: this,
            delta: i
        }), this.needToRebuildBack && (this.needToRebuildBack = !1, this.backgroundCanvas && this.render(this.backgroundCanvas, !0));
        var a = !1;
        if (this.drawBackAlways && (this.render(this.canvas, !0, !1, i), a = !0), this.render(this.canvas, !1, a, i), this.showFPS) {
            var g = this.canvas.getContext("2d");
            g.save(), this.setTextStyle("sans-serif", 10, "bold", "#fff"), g.shadowColor = "#000", g.shadowBlur = 4 * Utils.globalScale, this.drawText("FPS: " + this.lastFPS, 2, 10, 1, !0), g.restore()
        }!this._isPaused && this.hasEventListener("posttick") && this.dispatchEvent("posttick", {
            target: this,
            delta: i
        }), e = (new Date).getTime() - t, e = this.delay - e, 1 > e && (e = 1), this.fps++
    }
    this.started ? Stage.TIMER_MODE == Stage.TIMER_MODE_FRAME ? this.tmMain = setTimeout(this.tick, e) : requestAnimationFrame(this.tick) : this.lastTick = 0
}, Utils.extend(SkillButton, Sprite), SkillButton.prototype.setScaleValue = function(e) {
    this.stage && (this.scale || (this.scale = library.getSprite("castle/skill/" + this.type, {
        x: this.x,
        y: this.y,
        animated: !1,
        currentFrame: 1
    }), this.stage.addChild(this.scale)), this.scale.visible = 1 > e, this.scale.height = Math.floor(this.height * e), this.scale.height % 2 && this.scale.height++, this.scale.offset.top = 2 * (this.height - this.scale.height), this.scale.anchor = {
        x: 0,
        y: this.scale.height / 2
    })
}, SkillButton.prototype.tick = function(e) {
    var t = Math.max(0, Math.min(1, this.value / this.max));
    this.setScaleValue(t), 1 > t ? (this.showEffect = !0, this.gotoAndStop(1 > t ? 0 : 2)) : (this.gotoAndStop(1 > t ? 0 : 2), this.showEffect && (this.showReadyEffect(), Tutorial.show("skill", this.stage, this)), this.showEffect = !1)
}, SkillButton.prototype.showReadyEffect = function() {
    var e = 3 * this.width,
        t = new Graphics.circle(this.x - this.anchor.x, this.y - this.anchor.y, e);
    t.scaleX = t.scaleY = 0, t.lineWidth = 0, t.fillRadialGradient = {
        x0: 0,
        y0: 0,
        r0: e / 4,
        x1: 0,
        y1: 0,
        r1: 2 * e,
        points: [{
            point: 0,
            color: "rgba(" + GAME_CONFIG.colors[this.type] + ", 0.5)"
        }, {
            point: .5,
            color: "rgba(" + GAME_CONFIG.colors[this.type] + ", 0.0)"
        }]
    }, this.stage.addChild(t), t.scaleTo(1, Battle.timeToTicks(.3), Easing.quadratic.easeOut, function(e) {
        e.target.obj.fadeTo(0, Battle.timeToTicks(.3), Easing.quadratic.easeIn, function(e) {
            e.target.obj.destroy = !0
        })
    }, function(e) {
        e.target.obj.opacity = e.target.obj.scaleX
    })
}, Utils.extend(CastleCell, Sprite), CastleCell.prototype.setUnitType = function(e) {
    var t = e && GAME_CONFIG.colors[e];
    this.fillColor = t ? "rgba(" + t + ", 0.3)" : "transparent"
}, CastleCell.prototype.setFieldPosition = function(e, t) {
    this.col = Math.max(0, ~~t), this.row = Math.max(0, ~~e), this.x = this.config.width * this.col, this.y = this.config.height * this.row
}, Utils.extend(PowerScale, Sprite), PowerScale.prototype.setValue = function(e) {
    var t = Math.max(0, Math.min(1, e || 0));
    this.filler.width = this.width * t, this.filler.anchor = {
        x: -this.width * t / 2,
        y: 0
    }
}, Utils.extend(UpgradeSlot, Sprite), UpgradeSlot.selectedItem = null, UpgradeSlot.items = [], UpgradeSlot.prototype.setName = function(e) {
    this.name = e, this.picture.gotoAndStop(["power", "attack", "armor", "skillReload", "goldPerViking", "towersCount", "towersLevel", "skill_red", "skill_yellow", "skill_green", "skill_blue", "cannons"].indexOf(this.name)), this.update()
}, UpgradeSlot.prototype.update = function() {
    var e = Upgrade(this.name);
    this.scale.scaleY = e.progress, this.scale.fillColor = "rgba(255," + Math.round(128 * e.progress) + ",0,0.5)", this.updateCost(e.progress < 1 ? e.cost : 0), this.picture.opacity = e.cost > GameData.money ? .5 : 1;
    var t = !(e.cost > GameData.money) && e.progress < 1;
    this.sign.visible = t
}, UpgradeSlot.prototype.updateCost = function(e) {
    this.costText || (fontId = "font/yellow", asset = library.getAsset(fontId), this.costText = new SimpleText(library.getBitmap(fontId), asset.width, asset.height), this.costText.stage = this.stage, this.costText.parent = this, this.costText.charMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], this.costText.charSpacing = -12, this.costText.align = SimpleText.ALIGN_CENTER, this.costText.setPosition(-2, -27), this.costText.scale = .7, this.costText["static"] = !1), this.costText.write(e > 0 ? e : "")
}, UpgradeSlot.prototype.select = function() {
    UpgradeSlot.selectedItem = this, UpgradeSlot.selectedItem.upgrade()
}, UpgradeSlot.moneyCallback = null, UpgradeSlot.prototype.upgrade = function() {
    if (Upgrade(this.name).buy())
        for (var e = 0, t = UpgradeSlot.items.length; t > e; e++) UpgradeSlot.items[e].update();
    return !1
}, Utils.extend(TowerBullet, Sprite), TowerBullet.prototype.tick = function(e) {
    if (this.stage && this.target) {
        var t = this.target.localToGlobal(0, 0),
            i = new Vector(t.x - this.x, t.y - this.y),
            a = i.getLength(),
            g = 200 * (e / 1e3);
        g >= a ? (this.x = t.x, this.y = t.y, this.target.hit(this.damage), this.target = null) : (i.mult(g / a), this.x += i.x, this.y += i.y)
    }
}, TowerBullet.prototype.rescanTarget = function(e, t) {
    if (this.target && !(this.target.hp > 0)) {
        var i = this.target,
            a = new Vector(this.x, this.y),
            g = e.filter(function(e) {
                return i.hp <= 0 ? !1 : !(a.distanceTo(e.localToGlobal(0, 0)) > t)
            });
        a = this.target.localToGlobal(0, 0), this.target = g.shift() || null
    }
}, Utils.extend(Tower, Sprite), Tower.prototype.tick = function(e) {
    if (this.stage && (this.ticksToReload > 0 && (this.ticksToReload -= e), this.target && this.ticksToReload <= 0)) {
        var t = new TowerBullet(this.target, 1 * this.damage);
        t.setPosition(this.x - 7, this.y - 16), "function" == typeof this.onShoot && this.onShoot(t), this.ticksToReload = Battle.timeToTicks(this.reload), playSound("attack_shot", MIXER_CHANNEL_TOWER)
    }
}, Tower.prototype.scanTarget = function(e) {
    var t = 1 * this.range,
        i = new Vector(this.x, this.y),
        a = e.filter(function(e) {
            return i.distanceTo(e.localToGlobal(0, 0)) <= t
        });
    a.sort(function(e, t) {
        var a = i.distanceTo(e.localToGlobal(0, 0)),
            g = i.distanceTo(t.localToGlobal(0, 0));
        return a == g ? 0 : a > g ? -1 : 1
    }), this.target = a.shift() || null
}, Tower.prototype.hit = function(e) {
    this.hp = Math.max(0, this.hp - e);
    var t = this.hp / this.maxhp;
    this.scale.height = Math.round(this.scaleContainer.height * t), this.scale.height += this.scale.height % 2, this.scale.y = Math.round(-this.scale.height / 2), this.hp <= 0 && (this.die(), "function" == typeof this.onDie && this.onDie(this))
}, Tower.prototype.die = function() {
    this.fadeTo(0, Battle.timeToTicks(.5), Easing.linear.easeIn, function(e) {
        e.target.obj.destroy = !0
    }), playSound("crash", MIXER_CHANNEL_TOWER)
}, Utils.extend(Cannon, Sprite), Cannon.shooting = !1, Cannon.prototype.shoot = function() {
    if (!this.readyToShot) return !1;
    if (Cannon.shooting) return !1;
    this.ticksLeft = 1 * this.shotTimeout, this.readyToShot = !1;
    var e = Battle.timeToTicks(.3),
        t = 3;
    return this.moveTo(this.x + t, this.y, e / 2, Easing.cubic.easeIn, function(i) {
        i.target.obj.moveTo(i.target.obj.x - t, i.target.obj.y, 2 * e, Easing.cubic.easeOut)
    }), playSound("attack_magic", MIXER_CHANNEL_CASTLE), !1
}, Cannon.prototype.setPowerScale = function(e) {
    var t = Math.max(0, Math.min(1, e || 0));
    this.readyToShot = 1 == t;
    var i = this.scale.maxWidth,
        a = Math.round(i * t);
    a += a % 2, this.scale.width = a, this.scale.anchor = {
        x: Math.round(a / 2),
        y: 0
    }, this.scale.offset.left = i - a, this.readyToShot ? this.scale.bitmap = library.getBitmap("castle/cannon/scale_ready") : this.scale.bitmap = library.getBitmap("castle/cannon/scale")
}, Cannon.prototype.tick = function(e) {
    if (this.ticksLeft -= e, this.ticksLeft <= 0) this.light && (this.light.destroy = !0, this.light = null, Cannon.shooting = !1);
    else {
        if (Cannon.shooting = !0, !this.light) {
            var t = new Graphics.rectangle(this.x, this.y - 1, this.stage.screenWidth, 4 + 8 * Upgrade("cannons").progress);
            t.anchor = {
                x: (t.width + this.width) / 2 - 4,
                y: 1
            }, t.fillColor = "rgba(" + Math.ceil(255 * Upgrade("cannons").progress) + ",0,255,0.8)", t.lineWidth = 0, this.stage.addChild(t), this.light = t
        }
        var i = this.ticksLeft / this.shotTimeout;
        this.light.scaleY = .1 + .9 * i * i, this.light.opacity = .3 + .7 * i
    }
};
var Bullet = function(e, t, i, a, g) {
    Bullet.superclass.constructor.call(this, e, t, i, a, g), this.power = 1, this.type = null, this.anchor = {
        x: 10 - t / 2,
        y: 0
    };
    var s = .5 + .2 * Upgrade.get("attack").progress;
    this.scaleX = s, this.scaleY = s
};
Utils.extend(Bullet, Sprite), Bullet.prototype.tick = function(e) {};
var CastleUnit = function(e, t, i, a, g) {
    CastleUnit.superclass.constructor.call(this, e, t, i, a, g), this.type = null, this.state = null
};
Utils.extend(CastleUnit, Sprite), CastleUnit.STATE_QUEUE = 0, CastleUnit.STATE_MOVING = 1, CastleUnit.STATE_READY = 2, CastleUnit.STATE_ATTACK = 3, CastleUnit.createInstance = function(e) {
    var t = {
        config: e,
        type: e.type,
        state: CastleUnit.STATE_QUEUE,
        anchor: {
            x: -e.x,
            y: -e.y
        }
    };
    return library.getSprite("castle/unit/" + e.type, t, CastleUnit)
}, CastleUnit.prototype.canMove = function() {
    return this.state != CastleUnit.STATE_ATTACK
}, CastleUnit.prototype.canAttack = function() {
    return this.state == CastleUnit.STATE_READY
}, CastleUnit.prototype.tick = function(e) {};
var CastleField = function(e, t) {
    this.config = e, this.stage = t, this.cols = ~~this.config.cols, this.rows = ~~this.config.rows, this.units = [], this.queue = [], this.bullets = [], this.cells = [];
    for (var i = 0; i < this.rows; i++) {
        this.units.push([]);
        for (var a = 0; a < this.cols; a++) this.units[i].push(null)
    }
    var g = this.config.cell.width * this.cols,
        s = this.config.cell.height * this.rows;
    this.field = new Sprite(null, g, s), this.field.anchor = {
        x: -g / 2,
        y: -s / 2
    }, this.field.setPosition(this.config.left, this.config.top), this.field.fillColor = "rgba(0,0,0,0.2)", this.stage.addChild(this.field), this.onBullet = null, this.onCombo = null, this.powerTimeout = Battle.timeToTicks(this.config.powerTimeout), this.ticksTillPowerLoss = 0, this.respawnTimeout = Battle.timeToTicks(this.config.respawnTimeout), this.ticksTillEnqueue = 1 * this.respawnTimeout, this.power = 1, this.maxPower = this.config.maxPower + Upgrade("power").level, this.powerScale = new PowerScale, this.powerScale.setPosition(this.config.left, 10), this.stage.addChild(this.powerScale)
};
CastleField.prototype.cols = 0, CastleField.prototype.rows = 0, CastleField.prototype.cells = null, CastleField.prototype.queue = null, CastleField.prototype.bullets = null, CastleField.prototype.onBullet = null, CastleField.prototype.onCombo = null, CastleField.prototype.init = function() {
    for (var e = 0; e < this.rows; e++)
        for (var t = 0; t < this.cols; t++) {
            var i = new CastleCell(this.config.cell, e, t, null);
            this.field.addChild(i), this.cells.push(i), i.onclick = Utils.proxy(this.onCellClick, this)
        }
    for (var t = 0; t < this.config.initialColumns; t++) this.enqueue();
    for (var t = 0; t < this.queue.length; t++)
        for (var e = 0; e < this.rows; e++) this.queue[t][e].setPosition(this.config.cell.width * (this.cols + t + .5), this.config.cell.height * (e + .5)), this.field.addChild(this.queue[t][e]);
    this.moveUnits(0)
}, CastleField.prototype.enqueue = function(e) {
    if (this.ticksTillEnqueue = 1 * this.respawnTimeout, !e)
        for (var e = [], t = 0; t < this.rows; t++) {
            var i = this.config.unit.types;
            window.UXMODE && (i = [this.config.unit.types[0], this.config.unit.types[3]]);
            var a = random(i),
                g = CastleUnit.createInstance(a);
            e.push(g)
        }
    this.queue.push(e || this.createRandomColumn())
}, CastleField.prototype.findFreeCell = function(e, t) {
    for (var i = Math.max(0, Math.min(isNaN(t) ? this.cols : t, this.cols)); i > 0 && !this.units[e][i - 1];) i--;
    return i
}, CastleField.prototype.moveUnits = function(e) {
    for (var t = 0, i = 1; i < this.cols; i++)
        for (var a = 0; a < this.rows; a++) {
            var g = this.units[a][i];
            if (g) {
                var s = this.findFreeCell(a, i);
                g.canMove() && (t++, i > s && (this.units[a][i].state = CastleUnit.STATE_MOVING, this.units[a][s] = this.units[a][i], this.units[a][i] = null))
            }
        }
    for (; this.queue.length;)
        for (var o = this.queue.shift(), a = 0; a < this.rows; a++) {
            var s = this.findFreeCell(a);
            if (!(s >= this.cols)) {
                var g = o[a];
                g.stage || (g.setPosition(this.config.cell.width * (this.config.cols + 1), (a + .5) * this.config.cell.height), this.field.addChild(g)), this.units[a][s] = g, g.state = CastleUnit.STATE_MOVING, t++
            }
        }
    var h = !1;
    if (t > 0)
        for (var i = 0; i < this.cols; i++)
            for (var a = 0; a < this.rows; a++) {
                var g = this.units[a][i];
                if (g && g.state == CastleUnit.STATE_MOVING) {
                    var s = this.findFreeCell(a, i);
                    i > s && (this.units[a][s] = this.units[a][i], this.units[a][i] = null);
                    var n = this.config.cell.width * (s + .5),
                        f = this.config.unitSpeed * (e / 1e3);
                    g.x = Math.max(g.x - f, n), g.x == n && (this.units[a][s].state = CastleUnit.STATE_READY, h = !0)
                }
            }
    h && this.renderCells()
}, CastleField.prototype.onCellClick = function(e) {
    var t = e.target.row,
        i = e.target.col;
    this.units[t] && this.units[t][i] && (this.activateUnit(t, i), this.attack())
}, CastleField.prototype.activateUnit = function(e, t, i) {
    if (!(0 > e || e >= this.rows || 0 > t || t >= this.cols)) {
        var a = this.units[e][t];
        a && a.canAttack() && (i && a.type != i || (a.state = CastleUnit.STATE_ATTACK, this.activateUnit(e - 1, t, a.type), this.activateUnit(e + 1, t, a.type), this.activateUnit(e, t - 1, a.type), this.activateUnit(e, t + 1, a.type)))
    }
}, CastleField.prototype.onUnitsActivated = function(e) {
    if (e && e.length) {
        var t = e.length - 1;
        if ((!isNaN(this.ticksTillPowerLoss) && this.ticksTillPowerLoss <= 0 || e.length < 2) && (this.power = 1, this.powerScale.setValue(0)), this.ticksTillPowerLoss = 1 * this.powerTimeout, e.length > 1) {
            for (var i = e[0].config.type, a = 0, g = e.length; g > a; a++) {
                var s = e[a].localToGlobal(0, 0),
                    o = Math.ceil(e[a].config.bullet.damage * (1 + Upgrade("attack").level / 100)),
                    h = {
                        x: s.x,
                        y: s.y,
                        config: e[a].config.bullet,
                        power: o + this.power,
                        speed: e[a].config.bullet.speed,
                        type: i
                    },
                    n = library.getSprite("castle/unit/" + i + "/bullet", h, Bullet);
                "function" == typeof this.onBullet && this.onBullet(n)
            }
            playSound("attack_" + i, MIXER_CHANNEL_CASTLE)
        }
        this.power = Math.min(this.maxPower, this.power + t), "function" == typeof this.onCombo && this.onCombo(e)
    }
}, CastleField.prototype.attack = function(e) {
    for (var t = this, i = [], a = 0; a < this.rows; a++)
        for (var g = 0; g < this.cols; g++) this.units[a][g] && this.units[a][g].state == CastleUnit.STATE_ATTACK && (i.push(this.units[a][g]), this.units[a][g] = null);
    if (i.length) {
        t.renderCells(), this.onUnitsActivated(i);
        var s = i.length,
            o = 0,
            h = 0,
            n = i[0].stage.createTween(null, o, 0, 1, Battle.timeToTicks(.3), Easing.quadratic.easeOut);
        n.onchange = function(e) {
            var t = e.value - h;
            if (h = 1 * e.value, t)
                for (var a = 0; s > a; a++) i[a].opacity -= t, i[a].opacity = Math.max(0, i[a].opacity), i[a].scaleX += t, i[a].scaleY += t
        }, n.onfinish = function(e) {
            for (var t = 0; s > t; t++) i[t].destroy = !0, i[t] = null
        }, n.play()
    }
}, CastleField.prototype.renderCells = function() {
    for (var e = 0; e < this.rows; e++)
        for (var t = 0; t < this.cols; t++) {
            var i = this.cells[e * this.cols + t];
            this.units[e][t] && this.units[e][t].state == CastleUnit.STATE_READY ? i.setUnitType(this.units[e][t].type) : i.setUnitType(null)
        }
}, CastleField.prototype.tick = function(e) {
    this.ticksTillPowerLoss -= e, this.ticksTillEnqueue -= e;
    var t = Math.max(0, Math.min(1, (this.powerTimeout - this.ticksTillPowerLoss) / this.powerTimeout));
    this.powerScale.setValue(t), t >= 1 && (this.power = 1, this.powerScale.setValue(0)), this.ticksTillEnqueue <= 0 && this.enqueue();
    for (var i = 0; i < this.rows; i++)
        for (var a = 0; a < this.cols; a++) this.units[i][a] && this.units[i][a].tick(e);
    this.moveUnits(e)
};
var Castle = function(e, t) {
    this.config = e, this.stage = t, this.field = new CastleField(this.config.field, this.stage), this.cannons = [], this.maxSkill = Math.ceil(this.config.maxSkill / (1 + 3 * Upgrade("skillReload").level / 100)), this.hp = this.config.hp + 2 * Upgrade("armor").level, this.money = 1 * GameData.money || 0, this.onDie = null, this.maxCannonPower = 100 - Math.round(50 * Upgrade("cannons").progress), this.cannonPower = 0, this.towers = [], this.bullets = []
};
Castle.prototype.init = function() {
    this.field && this.field.init();
    var e = library.getSprite("background/shield", {
        x: this.stage.screenWidth / 2,
        y: 20
    });
    this.stage.addChild(e), e = library.getSprite("castle/money/back", {
        x: 0,
        y: 18
    }), e.anchor = {
        x: -e.width / 2,
        y: 0
    }, this.stage.addChild(e);
    for (var t = this.config.field.cell.height, i = this.config.field.left - 18, a = this.config.field.top + t / 2, g = 0; g < this.config.field.rows; g++) {
        var s = library.getSprite("castle/cannon", {
            x: i,
            y: a + t * g,
            zIndex: 1e3
        }, Cannon);
        this.stage.addChild(s), this.cannons.push(s)
    }
    for (var o = Math.max(this.config.towerColumns, Math.ceil(this.config.upgrade.towersCount.maxLevel / this.config.field.rows)), h = 0; o > h; h++) this.towers.push(new Array(this.config.field.rows));
    for (var n = [], f = Upgrade("towersCount").level, h = 0; f > h; h++) {
        var d = new Tower(this.config.tower);
        d.gotoAndStop(Math.floor((Upgrade("towersLevel").progress*0.9) * d.totalFrames)), this.stage.addChild(d), d.onDie = Utils.proxy(function(e) {
            this.towers[e.fieldPosition.col][e.fieldPosition.row] = void 0
        }, this), d.onShoot = Utils.proxy(function(e) {
            this.bullets.push(e), this.stage.addChild(e)
        }, this), n.push(d)
    }
    for (var h = n.length; h < o * this.config.field.rows; h++) n.push(null);
    n = n.sort(function(e) {
        return random(-1, 1)
    });
    for (var h = 0; h < n.length; h++)
        if (n[h]) {
            var A = {
                    col: Math.floor(h / this.config.field.rows),
                    row: h % this.config.field.rows
                },
                C = {
                    x: this.config.field.left - 50 - 30 * A.col + random(-3, 3),
                    y: this.config.field.top + this.config.field.cell.height / 2 + this.config.field.cell.height * A.row
                };
            n[h].setPosition(C.x, C.y), n[h].fieldPosition = A, n[h].setZIndex(100 + 3 * A.row + A.col), this.towers[A.col][A.row] = n[h]
        }
}, Castle.prototype.countAttackLine = function(e) {
    e -= this.config.field.top;
    for (var t = Math.max(0, Math.min(this.config.field.rows, Math.floor(e / this.config.field.cell.height))), i = this.towers.length - 1; i >= 0; i--)
        if (this.towers[i][t]) return 30 * (i + 1);
    return 0
}, Castle.prototype.findHitTarget = function(e) {
    e -= this.config.field.top;
    for (var t = Math.max(0, Math.min(this.config.field.rows, Math.floor(e / this.config.field.cell.height))), i = this.towers.length - 1; i >= 0; i--)
        if (this.towers[i][t]) return this.towers[i][t];
    return this
}, Castle.prototype.addCannonPower = function(e) {
    e = Math.max(0, e || 0), this.setCannonPower(this.cannonPower + e)
}, Castle.prototype.setCannonPower = function(e) {
    this.cannonPower = Math.max(0, Math.min(this.maxCannonPower, e || 0));
    for (var t = this.cannonPower / this.maxCannonPower, i = 0, a = this.cannons.length; a > i; i++) this.cannons[i].setPowerScale(t);
    t >= 1 && Tutorial.show("cannon", this.stage, this.cannons)
}, Castle.prototype.towersScan = function(e) {
    for (var t = 0; t < this.towers.length; t++)
        for (var i = 0; i < this.towers[t].length; i++) this.towers[t][i] && this.towers[t][i].scanTarget(e);
    for (var a = 0; a < this.bullets.length; a++) this.bullets[a].rescanTarget(e, this.radius)
}, Castle.prototype.tick = function(e) {
    this.field.tick(e), Cannon.shooting && this.setCannonPower(0);
    for (var t = 0; t < this.cannons.length; t++)
        if (this.cannons[t].tick(e), Cannon.shooting && this.cannons[t].light)
            for (var i = this.cannons[t].light.y, a = this.cannons[t].light.height / 2, g = battle.enemy.unitsRaycast(i - a, i + a), s = 0; s < g.length; s++) g[s].hit(this.cannons[t].damage);
    for (var o = 0; o < this.towers.length; o++)
        for (var h = 0; h < this.towers[o].length; h++) this.towers[o][h] && this.towers[o][h].tick(e);
    for (var t = 0; t < this.bullets.length; t++) this.bullets[t].tick(e), this.bullets[t].target || (this.bullets[t].destroy = !0, this.bullets.splice(t, 1), t--)
}, Castle.prototype.hit = function(e) {
    this.hp -= e, this.hp = Math.ceil(Math.max(0, this.hp)), this.hp <= 0 && "function" == typeof this.onDie && this.onDie()
}, Castle.prototype.destroyAllTowers = function() {
    for (var e = 0; e < this.towers.length; e++)
        for (var t = 0; t < this.towers[e].length; t++) {
            var i = this.towers[e][t];
            i && (i.hit(2 * i.hp), this.towers[e][t] = null)
        }
};
var EnemyUnit = function(e, t, i, a, g) {
    this.anchor = {
            x: 0,
            y: i / 2 - 2
        }, EnemyUnit.superclass.constructor.call(this, e, t, i, a, g), this.type = null, this.state = EnemyUnit.STATE_ONBOARD, this.targetLine = null, this.onDamage = null, this.onDie = null, this.attackTimeout = 0, this.ticksTillAttack = 1e3 * this.attackTimeout,
        this.onAttack = null
};
Utils.extend(EnemyUnit, Sprite), EnemyUnit.STATE_ONBOARD = 0, EnemyUnit.STATE_INCOMING = 1, EnemyUnit.STATE_MOVE = 2, EnemyUnit.STATE_ATTACK = 3, EnemyUnit.STATE_FROZEN = 4, EnemyUnit.STATE_DEAD = 255, EnemyUnit.createInstance = function(e, t) {
    return t = t || {}, t.config = e, t.type = e.type, t.state = EnemyUnit.STATE_ONBOARD, t.anchor = {
        x: e.x,
        // y: e.y
        y: 3
    }, t.hp = 1 * e.hp, t.gold = 1 * e.gold, t.damage = 1 * e.damage, t.speed = 1 * e.speed, t.attackTimeout = Battle.timeToTicks(e.attackTimeout), t.ticksTillAttack = 1 * t.attackTimeout, library.getSprite("enemy/unit/" + e.type + "/walk", t, EnemyUnit)
}, EnemyUnit.prototype.lookBeforeStep = function(e) {
    return !0
}, EnemyUnit.prototype.move = function(e) {
    if (this.state >= EnemyUnit.STATE_ATTACK) return !1;
    if (this.state == EnemyUnit.STATE_ONBOARD && (this.x += 20 * (e / 1e3)), this.state == EnemyUnit.STATE_MOVE) {
        var t = new Vector((this.speed || 20) * (e / 1e3), 0);
        if (null !== this.targetLine && this.targetLine != this.y) {
            var i = random(Math.PI / 4, Math.PI / 3, !0);
            t.rotate(i * (this.targetLine < this.y ? 1 : -1)), Math.abs(this.targetLine - this.y) <= Math.abs(t.y) && (t.y = this.y - this.targetLine, this.targetLine = null)
        }
        var a = this.getAABBRectangle();
        a.move(t.x, t.y), this.lookBeforeStep(this, a) || t.mult(.1), this.setPosition(this.x + t.x, this.y + t.y)
    }
}, EnemyUnit.prototype.isDead = function() {
    return this.state = EnemyUnit.STATE_DEAD
}, EnemyUnit.prototype.getProfit = function() {
    return Math.round(this.gold * (1 + 5 * Upgrade("goldPerViking").level / 100))
}, EnemyUnit.prototype.getDamage = function() {
    return this.damage
}, EnemyUnit.prototype.hit = function(e) {
    return e = Math.min(e, this.hp), this.hp -= e, "function" == typeof this.onDamage && this.onDamage(this, e), this.hp <= 0 && (this.state = EnemyUnit.STATE_DEAD, this.die()), this.hp
}, EnemyUnit.prototype.tick = function(e) {
    this.stage && (this.state == EnemyUnit.STATE_MOVE && (this.move(e), this.setZIndex(100 + 1 * Math.round(this.y))), this.state == EnemyUnit.STATE_ATTACK && (this.ticksTillAttack -= e, this.ticksTillAttack <= 0 && (this.ticksTillAttack = 1 * this.attackTimeout, "function" == typeof this.onAttack && (this.onAttack(this), this.gotoAndPlay(0), playSound("hammer", MIXER_CHANNEL_ENEMY)))), this.state == EnemyUnit.STATE_DEAD && this.setZIndex(1))
}, EnemyUnit.corpses = [], EnemyUnit.prototype.die = function() {
    for (; EnemyUnit.corpses.length > 30;) {
        var e = EnemyUnit.corpses.shift();
        e.onrender = function(e) {
            e.target.currentFrame == e.target.totalFrames - 1 && (e.target.destroy = !0)
        }, e.play()
    }
    "function" == typeof this.onDie && this.onDie(this), this.stop(), EnemyUnit.corpses.push(this);
    var t = "enemy/unit/bones" + random(2, 2);
    this.bitmap = library.getBitmap(t);
    var i = library.getAsset(t);
    this.width = i.width, this.height = i.height, this.totalFrames = i.frames, this.gotoAndPlay(0), this.onrender = function(e) {
        10 == e.target.currentFrame && (e.target.stop(), e.target.onrender = void 0, e.target.setZIndex(1))
    }, this.showCoinEffect(16, 16), playSound(random(0, 4) ? "dead" : "kick", MIXER_CHANNEL_ENEMY)
}, EnemyUnit.prototype.showCoinEffect = function(e, t) {
    var i = this.localToGlobal(0, 0),
        a = library.getSprite("enemy/coin", {
            x: i.x,
            y: i.y
        });
    this.stage.addChild(a);
    var g = Math.sqrt((i.x - e) * (i.x - e) + (i.y - t) * (i.y - t)) / 150,
        s = Math.ceil(Battle.timeToTicks(.5) * g);
    a.moveTo(e, t, s, Easing.quadratic.easeOut, function(e) {
        e.target.obj.fadeTo(0, Battle.timeToTicks(.5), Easing.cubic.easeOut, function(e) {
            e.target.obj.destroy = !0, playSound("gold", MIXER_CHANNEL_EFFECT)
        })
    })
}, EnemyUnit.prototype.walk = function() {
    if (this.state > EnemyUnit.STATE_ATTACK) return !1;
    this.state = EnemyUnit.STATE_MOVE, this.stop(), this.onrender = void 0;
    var e = "enemy/unit/" + this.type + "/walk";
    this.bitmap = library.getBitmap(e);
    var t = library.getAsset(e);
    this.width = t.width, this.height = t.height, this.totalFrames = t.frames || 1, this.totalLayers = t.layers || 1, this.gotoAndPlay(0)
}, EnemyUnit.prototype.startAttack = function() {
    if (this.state >= EnemyUnit.STATE_ATTACK) return !1;
    this.state = EnemyUnit.STATE_ATTACK, this.targetLine = null, this.stop();
    var e = "enemy/unit/" + this.type + "/attack";
    this.bitmap = library.getBitmap(e);
    var t = library.getAsset(e);
    this.width = t.width, this.height = t.height, this.totalFrames = t.frames, this.onrender = function(e) {
        e.target.currentFrame == e.target.totalFrames - 1 && e.target.gotoAndStop(0)
    }
}, EnemyUnit.prototype.goldFreeze = function() {
    if (this.state >= EnemyUnit.STATE_FROZEN) return !1;
    this.state = EnemyUnit.STATE_FROZEN, this.stop();
    var e = "enemy/unit/" + this.type + "/gold";
    this.bitmap = library.getBitmap(e);
    var t = library.getAsset(e);
    this.width = t.width, this.height = t.height, this.totalFrames = t.frames || 1, this.totalLayers = t.layers || 1
};
var Boat = function(e, t, i, a, g) {
    Boat.superclass.constructor.call(this, e, t, i, a, g), this.type = null, this.state = Boat.STATE_INCOMING, this.units = [], this.unitsLandingTime = null, this.onUnitLand = null, this.onLeave = null, this.ticksTillCome = Battle.timeToTicks(random(0, 5))
};
Utils.extend(Boat, Sprite), Boat.STATE_INCOMING = 0, Boat.STATE_WAIT = 1, Boat.STATE_LEAVE = 2, Boat.STATE_DEAD = 255, Boat.createInstance = function(e, t) {
    return t = t || {}, t.config = e, t.type = e.type, t.timeout = 1e3 * e.timeout, t.hp = 1 * e.hp, t.gold = 1 * e.gold, t.state = Boat.STATE_INCOMING, library.getSprite("enemy/boat/" + e.type, t, Boat)
}, Boat.prototype.addUnit = function(e) {
    var t = {
            x: -40 - 20 * this.units.length,
            y: this.y
        },
        i = EnemyUnit.createInstance(e, t);
    return this.parent.addChild(i), this.units.push(i), i
}, Boat.prototype.leave = function() {
    if (this.state != Boat.STATE_DEAD) {
        for (; this.units.length;) this.units[0].destroy = !0, this.units.shift();
        this.state = Boat.STATE_LEAVE
    }
}, Boat.prototype.getProfit = function() {
    for (var e = this.gold, t = 0; t < this.units.length; t++) e += this.units[t].getProfit();
    return e
}, Boat.prototype.hit = function(e) {
    this.hp -= e, this.hp <= 0 && ("function" == typeof this.onDie && this.onDie(this), this.die())
}, Boat.prototype.tick = function(e) {
    if (this.stage) {
        if (this.state == Boat.STATE_INCOMING)
            if (this.ticksTillCome > 0) this.ticksTillCome -= e;
            else {
                var t = 20 * (e / 1e3);
                this.x = Math.min(this.x + t, -this.width / 2), this.x >= -this.width / 2 && (this.state = Boat.STATE_WAIT)
            }
        if (this.state == Boat.STATE_LEAVE) {
            var t = 20 * (e / 1e3);
            this.x -= t, this.x -= t, this.x < -this.width && (this.destroy = !0, this.state = Boat.STATE_DEAD, "function" == typeof this.onLeave && this.onLeave(this))
        }
        if (this.state == Boat.STATE_WAIT) {
            for (var i = this.x + this.width / 2, a = 0; a < this.units.length; a++) {
                var g = this.units[a];
                g.move(e), g.x >= i && (g.x = i, g.state = EnemyUnit.STATE_MOVE), g.state != EnemyUnit.STATE_ONBOARD && (this.units.splice(a, 1), a--, "function" == typeof this.onUnitLanded && this.onUnitLanded(g))
            }
            0 == this.units.length && (null === this.unitsLandingTime ? this.unitsLandingTime = 1 * this.timeout : (this.unitsLandingTime -= e, this.unitsLandingTime <= 0 && this.leave()))
        }
    }
}, Boat.prototype.die = function() {
    for (; this.units.length;) {
        var e = this.units.shift();
        e.destroy = !0
    }
    this.rotateTo(-Math.PI / 2, Battle.timeToTicks(.5), Easing.linear.easeIn), this.moveBy(-20, 0, Battle.timeToTicks(.5), Easing.linear.easeIn), this.fadeTo(0, Battle.timeToTicks(.6), Easing.linear.easeIn, function(e) {
        e.target.obj.destroy = !0
    }), playSound("boat_dead", MIXER_CHANNEL_ENEMY)
};
var Enemy = function(e, t) {
    this.handleBoatLeave = Utils.proxy(this.handleBoatLeave, this), this.handleUnitLanding = Utils.proxy(this.handleUnitLanding, this), this.handleUnitDeath = Utils.proxy(this.handleUnitDeath, this), this.config = e, this.stage = t, this.boats = [], this.units = [], this.attackLine = 0, this.walkArea = null, this.castleSkill = null, this.unitsTotal = 0, this.totalMoneyProfit = 0, this.totalUnitsKilled = 0, this.nextWave = 0, this.boss = null, this.bossIsDead = !1
};
Enemy.prototype.init = function() {
    var e = this.config.field;
    this.walkArea = new Graphics.rectangle(e.x, e.y, e.width, e.height), this.walkArea.anchor = {
        x: -e.width / 2,
        y: -e.height / 2
    }, this.walkArea.color = "#FFF", this.walkArea.lineWidth = 0, this.walkArea.fillColor = "transparent", this.walkArea.addEventListener("mousedown", Utils.proxy(this.useSkill, this)), this.walkArea.setZIndex(1), this.stage.addChild(this.walkArea), this.attackLine = e.width
}, Enemy.prototype.initWave = function(e) {
    for (var t = GAME_CONFIG.castle.field.cell.height, i = GAME_CONFIG.castle.field.rows, a = Utils.proxy(function(e, t) {
        t.width = Math.round(.7 * t.width), t.height = Math.round(.7 * t.height), t.refreshVertices();
        for (var i = 0, a = this.units.length; a > i; i++)
            if (this.units[i] !== e && !(this.units[i].x < e.x || this.units[i].skipStepFilter || this.units[i].state != EnemyUnit.STATE_MOVE && this.units[i].state != EnemyUnit.STATE_ATTACK)) {
                var g = this.units[i].getAABBRectangle();
                if (g.width = Math.round(.7 * g.width), g.height = Math.round(.7 * g.height), g.refreshVertices(), t.hitTestRectangle(g)) return this.units[i].skipStepFilter = !0, !1
            }
        return !0
    }, this), g = 0; g < e.length; g++) {
        var s = this.config.boat.types[e[g] - 1],
            o = random(this.config.field.height * g / e.length + 5, this.config.field.height * (g + 1) / e.length - 5),
            h = this.addBoat(s, o);
        h.onDie = Utils.proxy(function(e) {
            this.totalMoneyProfit += e.getProfit(), this.unitsTotal -= e.units.length;
            var t = this.boats.indexOf(e);
            t >= 0 && this.boats.splice(t, 1);
            var i = Number.MAX_VALUE;
            this.boats.map(function(e) {
                e.ticksTillCome > 0 && (i = Math.min(e.ticksTillCome, i))
            }), this.boats.map(function(e) {
                e.ticksTillCome > 0 && (e.ticksTillCome = Math.max(0, e.ticksTillCome - i))
            })
        }, this);
        for (var n = 0, f = s.units.length; f > n; n++) {
            var d = this.config.types[s.units[n] - 1],
                A = h.addUnit(d);
            this.unitsTotal++;
            var C = random(0, i - 1);
            C = t / 2 + t * C + random(-2, 2), A.targetLine = C, A.lookBeforeStep = a
        }
    }
    for (var I = [], r = Math.min(6, 2 * Math.ceil(this.boats.length / 2)), g = 0; g < this.boats.length; g++) I.push(Battle.timeToTicks(random(g, Math.ceil(g * r))));
    I.sort(function(e) {
        return Math.round(random(-1, 1))
    });
    for (var g = 0; g < this.boats.length; g++) this.boats[g].ticksTillCome = I[g]
}, Enemy.prototype.addBoat = function(e, t) {
    var i = Boat.createInstance(e);
    return i.setPosition(this.walkArea.globalToLocal(-i.width / 2).x, t), i.setZIndex(1), this.walkArea.addChild(i), this.boats.push(i), i.onUnitLanded = this.handleUnitLanding, i.onLeave = this.handleBoatLeave, i
}, Enemy.prototype.handleBoatLeave = function(e) {
    var t = this.boats.indexOf(e);
    t >= 0 && this.boats.splice(t, 1)
}, Enemy.prototype.handleUnitLanding = function(e) {
    e.onAttack = this.handleUnitAttack, e.onDie = this.handleUnitDeath, this.units.push(e)
}, Enemy.prototype.handleUnitAttack = function(e) {}, Enemy.prototype.handleUnitDeath = function(e) {
    this.totalMoneyProfit += e.getProfit(), this.totalUnitsKilled++;
    var t = this.units.indexOf(e);
    t >= 0 && this.units.splice(t, 1), this.unitsTotal--
}, Enemy.prototype.tick = function(e) {
    if (this.unitsTotal <= 0)
        if (this.unitsTotal = 0, 0 == this.boats.length) {
            if (!this.boss) {
                var t = this.nextWave % this.config.wave.length;
                this.initWave(this.config.wave[t]), this.nextWave++, this.nextWave == this.config.wave.length && this.createBoss()
            }
        } else
            for (var i = 0, a = this.boats.length; a > i; i++) this.boats[i].leave();
    if (this.boss && this.boss.hp <= 0) {
        var g = this;
        this.bossIsDead || this.boss.die(function() {
            g.bossIsDead = !0
        })
    }
    for (var i = 0; i < this.boats.length; i++) this.boats[i].state != Boat.STATE_DEAD ? this.boats[i].tick(e) : (this.boats.splice(i, 1), i--);
    for (var i = 0; i < this.units.length; i++)
        if (this.units[i].state != EnemyUnit.STATE_DEAD) {
            this.units[i].skipStepFilter = !1, this.units[i].tick(e);
            var s = this.attackLine - battle.castle.countAttackLine(this.units[i].localToGlobal(0, 0).y);
            this.units[i].x >= s ? (this.units[i].x = s, this.units[i].startAttack()) : this.units[i].state == EnemyUnit.STATE_ATTACK && this.units[i].walk()
        } else this.units.splice(i, 1), i--;
    this.boss && this.boss.tick(e)
}, Enemy.prototype.unitsRaycast = function(e, t) {
    "undefined" == typeof t && (t = 1 * e);
    var i = [Math.min(e, t), Math.max(e, t)],
        a = this.units.filter(function(e) {
            var t = e.height / 2,
                a = e.localToGlobal(0, 0),
                g = [a.y - t, a.y + t];
            return g[0] >= i[0] && g[0] <= i[1] ? !0 : g[1] >= i[0] && g[1] <= i[1] ? !0 : g[0] <= i[0] && g[1] >= i[1]
        });
    return a
}, Enemy.prototype.unitsInSkillArea = function(e, t, i) {
    var a = this.units.filter(function(i) {
        var a = i.localToGlobal(0, 0),
            g = a.x - e.x,
            s = a.y - e.y,
            o = Math.sqrt(g * g + s * s);
        return t >= o
    });
    return a
}, Enemy.prototype.useSkill = function(e) {
    if (this.castleSkill) {
        this.stage.dispatchEvent("useskill", {
            type: this.castleSkill
        });
        var t = this,
            i = e.target.localToGlobal(e.x, e.y),
            a = Upgrade("skill_" + this.castleSkill),
            g = 60 - 30 * (1 - a.progress),
            s = new Graphics.circle(i.x, i.y, g);
        if (s.fillColor = "rgba(" + GAME_CONFIG.colors[this.castleSkill] + ",0.3)", s.lineWidth = 0, this.stage.addChild(s), s.fadeTo(0, Battle.timeToTicks(1), Easing.cubic.easeOut, function(e) {
            e.target.destroy = !0
        }), "yellow" == this.castleSkill) {
            var o = this.unitsInSkillArea({
                x: i.x,
                y: i.y
            }, g, 0);
            o = o.filter(function(e) {
                return e.state >= EnemyUnit.STATE_FROZEN ? !1 : !(e.x <= 0)
            });
            for (var h = a.level + 2; o.length && o.length > h;) o.splice(random(0, o.length - 1), 1);
            for (var n = 0; n < o.length; n++) o[n].goldFreeze(), o[n].gold += 100;
            o.length && playSound("skill_yellow", MIXER_CHANNEL_SKILL)
        }
        if ("red" == this.castleSkill)
            for (var f = {
                count: 3 + Math.max(1, Math.min(10, Math.ceil(a.level / 2))),
                range: 30 + a.level,
                radius: 15 + a.level,
                damage: 50 + 2 * a.level
            }, d = [], n = 0; n < f.count; n++) {
                var A = this.walkArea.localToGlobal(this.walkArea.width, 0).x,
                    C = {
                        x: Math.min(A, i.x + random(-f.range, f.range)),
                        y: i.y + random(-f.range, f.range)
                    },
                    I = library.getSprite("castle/skill/comet", {
                        x: C.x - 400,
                        y: C.y - 400,
                        anchor: {
                            x: 5,
                            y: 15
                        },
                        scaleX: .5 + .5 * a.progress,
                        scaleY: .5 + .5 * a.progress
                    });
                I.p = C, d.push(I), this.stage.setTimeout(function() {
                    var e = d.shift();
                    e.moveTo(e.p.x, e.p.y, Battle.timeToTicks(.5), Easing.linear.easeIn, function(e) {
                        var i = e.target.obj;
                        playSound("skill_red", MIXER_CHANNEL_SKILL), i.stage.addChild(library.getSprite("castle/skill/comet_bang", {
                            x: i.x,
                            y: i.y,
                            scaleX: .5 + .5 * a.progress,
                            scaleY: .5 + .5 * a.progress,
                            onrender: function(e) {
                                e.target.currentFrame >= e.target.totalFrames - 1 && e.target.currentLayer++, e.target.currentLayer >= e.target.totalLayers - 1 && (e.target.destroy = !0)
                            }
                        }));
                        for (var g = t.unitsInSkillArea({
                            x: i.x,
                            y: i.y
                        }, f.radius, 0), s = 0; s < g.length; s++) g[s].hit(f.damage);
                        i.destroy = !0
                    })
                }, Battle.timeToTicks(.3 * n)), this.stage.addChild(I)
            }
        if ("green" == this.castleSkill) {
            var o = this.unitsInSkillArea({
                x: i.x,
                y: i.y
            }, g, 0);
            o = o.filter(function(e) {
                return e.state >= EnemyUnit.STATE_FROZEN ? !1 : !(e.x <= 0)
            });
            for (var h = a.level + 2; o.length && o.length > h;) o.splice(random(0, o.length - 1), 1);
            for (var n = 0; n < o.length; n++) {
                var r = o[n].localToGlobal(0, 0),
                    x = library.getSprite("castle/skill/bugs", {
                        x: r.x,
                        y: r.y,
                        onrender: function(e) {
                            e.target.currentFrame >= e.target.totalFrames - 1 && (e.target.destroy = !0)
                        }
                    });
                this.stage.addChild(x), o[n].hit(o[n].hp)
            }
            o.length && playSound("skill_green", MIXER_CHANNEL_SKILL)
        }
        if ("blue" == this.castleSkill) {
            var o = this.unitsInSkillArea({
                x: i.x,
                y: i.y
            }, g, 0);
            this.stage.addChild(library.getSprite("castle/skill/fist", {
                x: i.x,
                y: i.y,
                scaleX: .5 + .5 * a.progress,
                scaleY: .5 + .5 * a.progress,
                onrender: function(e) {
                    e.target.currentFrame >= e.target.totalFrames - 1 && (e.target.destroy = !0)
                }
            }));
            for (var n = 0; n < o.length; n++) o[n].hit(50 + 12 * a.level);
            playSound("skill_blue", MIXER_CHANNEL_SKILL)
        }
        this.castleSkill = null
    }
}, Enemy.prototype.createBoss = function() {
    console.log("LOKI COMES!"), this.boss = new Boss(GAME_CONFIG.enemy.boss), this.walkArea.addChild(this.boss), this.handleBoss && this.handleBoss();
    
    var img = document.createElement("img");
    img.src = "images/2/fonts/font7.png";
    img.style.zIndex = "99999";
    img.style.position = "absolute";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.top = "0";
    img.style.left = "0";

    document.getElementById("screen_wrapper").appendChild(img);
    setTimeout(function() {
        document.getElementById("screen_wrapper").removeChild(img);
      }, 1500);
}, Utils.extend(Boss, Sprite), Boss.prototype.tick = function(e) {
    if (this.stage) {
        if (this.opacity < 1) return void(this.opacity += .01);
        this.ticksToReload > 0 && (this.ticksToReload -= e), this.ticksToReload <= 0 && (this.ticksToReload = 1 * this.config.timeout, this.attack())
    }
}, Boss.prototype.attack = function() {
    this.hp <= 0 || (playSound("attack_shot", MIXER_CHANNEL_ENEMY), this.play(), battle.castle.hit(this.config.damage))
}, Boss.prototype.hit = function(e) {
    this.hp -= ~~e
}, Boss.prototype.die = function(e) {
    var t = this;
    this.fadeTo(0, 1e3, Easing.quadratic.easeOut, function() {
        e && e()
    }, function() {
        t.scaleX = t.scaleY = 1 + 2 * (1 - t.opacity), t.rotation -= .05, t.x--
    })
};
var PauseShader = function(e) {
    PauseShader.bitmap || PauseShader.createBitmap(e), Utils.callSuperConstructor(PauseShader, this, PauseShader.bitmap, e.screenWidth, e.screenHeight), this.setPosition(e.screenWidth / 2, e.screenHeight / 2)
};
Utils.extend(PauseShader, Sprite), PauseShader.bitmap = null, PauseShader.createBitmap = function(e) {
    var t = e.addChild(new Graphics.rectangle(e.screenWidth / 2, e.screenHeight / 2, e.screenWidth, e.screenHeight));
    t.lineWidth = 0, t.fillColor = "rgba(0,0,0,0.5)";
    var i = [];
    i.push(new Graphics.rectangle(-24, 0, 32, 96)), i[0].lineWidth = 0, i[0].fillColor = "rgba(0,0,0,0.5)", t.addChild(i[0]), i.push(new Graphics.rectangle(24, 0, 32, 96)), i[1].lineWidth = 0, i[1].fillColor = "rgba(0,0,0,0.5)", t.addChild(i[1]), PauseShader.bitmap = t.cacheAsBitmap(), e.removeChild(t)
};
var Battle = function(e, t) {
    "funtomic" === ExternalAPI.type && ExternalAPI.exec("levelStarted"), this.config = e, this.stage = t, this.lastTick = 0, this.bullets = [], this.castle = new Castle(this.config.castle, this.stage), this.castle.onDie = Utils.proxy(this.onDefeat, this), this.enemy = new Enemy(this.config.enemy, this.stage), this.enemy.handleUnitAttack = Utils.proxy(this.handleUnitAttack, this), this.enemy.handleBoss = Utils.proxy(this.handleBoss, this);
    var i = library.getSprite("background/game", {
        "static": !0,
        x: t.screenWidth / 2,
        y: t.screenHeight / 2
    });
    t.addChild(i);
    var a = library.getSprite("button/pause", {
        x: 16,
        y: this.stage.screenHeight - 16,
        onclick: Utils.proxy(this.pause, this)
    });
    this.stage.addChild(a);
    var g = library.getSprite("button/sound", {
        x: 56,
        y: this.stage.screenHeight - 16,
        onclick: function(e) {
            toggleSound(), refreshSoundButton(e.target)
        }
    });
    refreshSoundButton(g), this.stage.addChild(g), "funtomic" === ExternalAPI.type && (this.stage.addChild(library.getSprite("button/home", {
        x: 96,
        y: this.stage.screenHeight - 16,
        onclick: showStartMenu
    })), addBtnWT("button/menu/more_games", {
        x: 150,
        y: 18,
        scale: .51
    }, this.stage, "font2", .9));
    var s = (this.config.castle.field.cols - 2) * this.config.castle.field.cell.width;
    this.powerScale = new Sprite(null, s, 10), this.powerScale.scaleX = 0, this.powerScale.anchor = {
        x: -s / 2,
        y: 0
    }, this.powerScale.setPosition(this.config.castle.field.left + this.config.castle.field.cell.width, 20), this.powerScale.fillColor = "rgba(255,255,255,0)", t.addChild(this.powerScale), this.skillStatus = {}, this.skillButton = {};
    for (var o = 0; o < this.config.castle.field.unit.types.length; o++) {
        var h = this.config.castle.field.unit.types[o];
        this.skillStatus[h.type] = this.castle.maxSkill / 2;
        var n = new SkillButton(h.type, this.castle.maxSkill, this.skillStatus[h.type]);
        n.setPosition(this.config.castle.field.left + 30 * o + 24, this.stage.screenHeight - 4), this.stage.addChild(n), this.skillButton[h.type] = n
    }
    this.moreButton = library.getSprite("button/call_more", {
        x: this.stage.screenWidth - 26,
        y: this.stage.screenHeight - 18
    }), this.stage.addChild(this.moreButton), this.moreButton.onclick = Utils.proxy(function() {
        this.castle.field.enqueue(), playSound("call", MIXER_CHANNEL_CASTLE)
    }, this), this.activeSkillMarker = new Graphics.rectangle(0, 0, 50, 50), this.activeSkillMarker.fillColor = "transparent", this.activeSkillMarker.color = "transparent", this.activeSkillMarker.lineWidth = 0, this.stage.addChild(this.activeSkillMarker), Utils.detectTouchScreen() || this.stage.addEventListener("mousemove", Utils.proxy(function(e) {
        if (this.enemy.castleSkill) {
            var t = this.config.colors[this.enemy.castleSkill] ? "rgba(" + this.config.colors[this.enemy.castleSkill] + ", 0.5)" : "transparent";
            this.activeSkillMarker.fillColor = t, this.activeSkillMarker.setPosition(e.x, e.y)
        } else this.activeSkillMarker.fillColor = "transparent", this.activeSkillMarker.setPosition(-this.activeSkillMarker.width, -this.activeSkillMarker.height)
    }, this)), this.stage.addEventListener("click", Utils.proxy(function(e) {
        if (this.enemy.castleSkill) {
            this.enemy.castleSkill = null, this.activeSkillMarker.fillColor = "transparent", this.activeSkillMarker.setPosition(-this.activeSkillMarker.width, -this.activeSkillMarker.height);
            for (var t in this.skillButton) this.skillButton[t].setPropScale(1)
        }
    }, this)), this.startTime = Date.now(), this.enemiesKilled = 0, this.goldCollected = 0, this.paused = !0, ExternalAPI.exec("addY8Logos", 130, 303, 200, 303, this.stage)
};
Battle.timeToTicks = function(e) {
    return Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME ? 1e3 * e : Math.ceil(e * GAME_MANIFEST.fps)
}, Battle.ticksToTime = function(e) {
    return Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME ? e : 1e3 * e / GAME_MANIFEST.fps
}, Battle.prototype.init = function() {
    var e = this;
    this.castle.field.onBullet = function(t) {
        e.stage.addChild(t), e.bullets.push(t)
    }, this.castle.field.onCombo = function(t) {
        t && t.length && (e.addSkill(t[0].config.type, t.length), e.castle.addCannonPower(t.length))
    }, this.castle.field.field.addEventListener("click", function() {
        e.enemy.castleSkill = null
    }), this.castle.init();
    var t;
    t = "font/yellow", asset = library.getAsset(t), this.moneyText = new SimpleText(library.getBitmap(t), asset.width, asset.height), this.moneyText.stage = this.stage, this.moneyText.parent = this.stage, this.moneyText.charMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], this.moneyText.charSpacing = -12, this.moneyText.align = SimpleText.ALIGN_LEFT, this.moneyText.setPosition(32, 14), t = "font/black", asset = library.getAsset(t), this.armorText = new SimpleText(library.getBitmap(t), asset.width, asset.height), this.armorText.stage = this.stage, this.armorText.parent = this.stage, this.armorText.charMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], this.armorText.charSpacing = -8, this.armorText.align = SimpleText.ALIGN_CENTER, this.armorText.setPosition(this.stage.screenWidth / 2 - 7, 14), t = "font/power", asset = library.getAsset(t), this.powerText = new SimpleText(library.getBitmap(t), asset.width, asset.height), this.powerText.stage = this.stage, this.powerText.parent = this.stage, this.powerText.charMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "x"], this.powerText.charSpacing = -24, this.powerText.align = SimpleText.ALIGN_CENTER;
    var i = this.powerText.write;
    this.powerText.write = function(e) {
        i.call(this, e);
        for (var t = 1, a = this.sprites.length; a > t; t++) this.sprites[t].y = this.sprites[t].y - 3 * t
    }, this.powerText.setPosition(this.stage.screenWidth - 34, 18);
    for (var a = 0; a < this.config.castle.field.unit.types.length; a++) {
        var g = this.config.castle.field.unit.types[a].type;
        this.skillButton[g].addEventListener("click", Utils.proxy(this.activateSkill, this))
    }
    this.stage.addEventListener("useskill", Utils.proxy(this.useSkill, this)), this.enemy.init()
}, Battle.prototype.run = function() {
    this.stage._isPaused = !1, this.paused = !1
}, Battle.prototype.externalPause = function() {
    this.paused = !0;
    for (var e = 0; e < this.enemy.units.length; e++) this.enemy.units[e].stop();
    for (var t = 0; t < this.enemy.boats.length; t++) {
        var i = this.enemy.boats[t];
        for (e = 0; e < i.units.length; e++) i.units[e].stop()
    }
}, Battle.prototype.externalUnPause = function() {
    this.paused = !1;
    for (var e = 0; e < this.enemy.units.length; e++) this.enemy.units[e].play();
    for (var t = 0; t < this.enemy.boats.length; t++) {
        var i = this.enemy.boats[t];
        for (e = 0; e < i.units.length; e++) i.units[e].play()
    }
}, Battle.prototype.pause = function() {
    this.stage._isPaused = !0, this.paused = !0;
    var e = this.stage.addChild(new PauseShader(this.stage));
    e.onclick = Utils.proxy(function() {
        return e.destroy = !0, this.run(), !1
    }, this), this.stage.tick(!0)
}, Battle.prototype.addSkill = function(e, t) {
    t = Math.max(0, ~~t || 0) + this.skillStatus[e], this.setSkill(e, t)
}, Battle.prototype.setSkill = function(e, t) {
    t = Math.max(0, ~~t || 0), this.skillStatus[e] = Math.max(0, Math.min(this.castle.maxSkill, t)), this.skillButton[e].value = t
}, Battle.prototype.activateSkill = function(e) {
    var t = e.target.type;
    if (this.skillStatus[t] >= this.castle.maxSkill) {
        this.enemy.castleSkill = t;
        for (var i in this.skillButton) this.skillButton[i].setPropScale(i == t ? 1.2 : 1);
        return !1
    }
}, Battle.prototype.useSkill = function(e) {
    for (var t in this.skillButton) this.skillButton[t].setPropScale(1);
    this.setSkill(e.type, 0)
}, Battle.prototype.handleUnitAttack = function(e) {
    var t = e.getDamage(),
        i = this.castle.findHitTarget(e.localToGlobal(0, 0).y);
    i && i.hit(t)
}, Battle.prototype.handleBoss = function() {
    this.castle.destroyAllTowers()
}, Battle.prototype.tick = function(e) {
    if (this.popupScreen) return !1;
    if (this.paused) return !1;
    for (var t = 0; t < this.bullets.length; t++) {
        var i = this.bullets[t],
            a = i.x,
            g = i.config.speed * e / 1e3,
            s = a - g;
        if (i.x = s, i.x < -i.width) i.destroy = !0;
        else {
            var o = this.config.castle.field.cell.height / 2,
                h = i.localToGlobal(0, 0);
            if (this.enemy.boss && this.enemy.boss.hp > 0) {
                var n = this.enemy.boss.localToGlobal(0, 0);
                Math.abs(n.x - h.x) < this.enemy.boss.width / 2 && Math.abs(n.y - h.y) < this.enemy.boss.height / 2 && (this.enemy.boss.hit(i.power + this.castle.field.power), i.destroy = !0)
            }
            if (!i.destroy)
                for (var f = this.enemy.unitsRaycast(h.y - o, h.y + o), d = 0; d < f.length; d++) {
                    var A = f[d],
                        C = h.x - A.localToGlobal(0, 0).x;
                    if (Math.abs(C) <= g) {
                        A.hit(i.power + this.castle.field.power), i.destroy = !0;
                        break
                    }
                }
            if (!i.destroy)
                for (var d = 0; d < this.enemy.boats.length; d++) {
                    var I = this.enemy.boats[d],
                        r = I.localToGlobal(0, 0);
                    if (r.x + I.width / 2 >= h.x && r.y - I.height / 2 <= h.y && r.y + I.height / 2 >= h.y) {
                        I.hit(i.power + this.castle.field.power), i.destroy = !0;
                        break
                    }
                }
        }
        i.destroy && (i = this.bullets[t] = null, this.bullets.splice(t--, 1))
    }
    this.enemy.tick(e), this.enemy.totalMoneyProfit > 0 && (this.castle.money += this.enemy.totalMoneyProfit, this.goldCollected += this.enemy.totalMoneyProfit), this.enemy.totalMoneyProfit = 0, this.enemy.totalUnitsKilled > 0 && (this.enemiesKilled += this.enemy.totalUnitsKilled), this.enemy.totalUnitsKilled = 0, this.castle.towersScan(this.enemy.units), this.castle.tick(e);
    for (var x in this.skillButton) this.skillButton[x].tick(e);
    this.castle.money + "" != this.moneyText.text && this.moneyText.write(this.castle.money), this.castle.hp != this.armorText.text && this.armorText.write(this.castle.hp);
    var c = "x" + this.castle.field.power;
    c != this.powerText.text && this.powerText.write(c), this.enemy.bossIsDead && this.enemy.unitsTotal <= 0 && this.onWin()
}, Battle.prototype.popupScreen = !1, Battle.prototype.onDefeat = function() {
    if (this.popupScreen) return !1;
    this.popupScreen = !0, this.enemy.nextWave > 1 && ExternalAPI.exec("submitScore", this.enemy.nextWave - 1), mixer.stop(MIXER_CHANNEL_MUSIC), playSound("battle_lose", MIXER_CHANNEL_EFFECT);
    for (var e = this; this.bullets.length;) {
        var t = this.bullets.shift();
        t.destroy = !0
    }
    var i = function(e) {
            return 10 > e ? "0" + e : e
        },
        a = "",
        g = Math.ceil((Date.now() - this.startTime) / 1e3);
    g >= 3600 && (a = a + Math.floor(g / 3600) + ":", g %= 3600), a = a + i(Math.floor(g / 60)) + ":", g %= 60, a += i(g);
    var s = new Graphics.rectangle(this.stage.screenWidth / 2, this.stage.screenHeight / 2, this.stage.screenWidth, this.stage.screenHeight);
    s.fillColor = "rgba(64,0,0,0.5)", s.opacity = 0, s.onclick = function() {
        return showUpgrades(), !1
    }, this.stage.addChild(s), s.fadeTo(1, Battle.timeToTicks(.3), Easing.cubic.easeIn, function(t) {
        var i = t.target.obj.stage,
            g = library.getSprite("castle/defeat", {
                x: i.screenWidth / 2,
                y: -200
            });
        i.addChild(g), setBitmapText("font6", I18.f("complete"), g, -10, -58, 0, .9, null, null, -6), g.moveTo(i.screenWidth / 2, i.screenHeight / 2, 500, Easing.bounce.easeOut, function() {
            var t = "font/black",
                s = library.getAsset(t),
                o = function(e, a, o) {
                    var h = new SimpleText(library.getBitmap(t), s.width, s.height);
                    h.stage = i, h.parent = g, h.charMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], h.charSpacing = -8, h.align = SimpleText.ALIGN_LEFT, h.setPosition(e, a), h.write(o)
                },
                h = 23,
                n = -21;
            o(10, n + 0 * h, a), o(10, n + 1 * h, e.enemiesKilled), o(10, n + 2 * h, [e.enemy.nextWave, e.config.enemy.wave.length].join("/")), o(10, n + 3 * h, e.goldCollected), i._isPaused = !0
            showScore(a,e.enemiesKilled);
        })
    });
    var o = library.getSprite("background/mage_complete", {
        x: -325,
        y: this.stage.screenHeight + 50
    });
    o.alignAnchor(-1, 1), this.stage.addChild(o), o.moveBy(300, -50, 600, Easing.cubic.easeIn), GameData.money = this.castle.money, this.stage.addChild(library.getSprite("button/play", {
        x: this.stage.screenWidth - 20,
        y: 20,
        onclick: function() {
            "funtomic" === ExternalAPI.type && ExternalAPI.exec("levelEnded"), showUpgrades()
        }
    })), ExternalAPI.exec("gameEnded", this.castle.money, !1, 0), ExternalAPI.exec("trackGameEvent", "LevelFail", this.enemy.nextWave)
}, Battle.prototype.onWin = function() {
    if (this.popupScreen) return !1;
    this.popupScreen = !0, ExternalAPI.exec("submitScore", this.enemy.nextWave - 1), mixer.stop(MIXER_CHANNEL_MUSIC), playSound("battle_win", MIXER_CHANNEL_EFFECT);
    for (; this.bullets.length;) {
        var e = this.bullets.shift();
        e.destroy = !0
    }
    GameData.money = this.castle.money;
    var t = new Graphics.rectangle(this.stage.screenWidth / 2, this.stage.screenHeight / 2, this.stage.screenWidth, this.stage.screenHeight);
    t.fillColor = "rgba(0,64,0,0.5)", t.opacity = 0, t.onclick = function() {
        return !1
    }, this.stage.addChild(t), t.fadeTo(1, Battle.timeToTicks(.3), Easing.cubic.easeIn, function(e) {
        var t = e.target.obj.stage,
            i = library.getSprite("castle/win", {
                x: t.screenWidth / 2,
                y: t.screenHeight / 2,
                onclick: showUpgrades
            });
        t.addChild(i), setBitmapText("font6", I18.f("win").toUpperCase(), i, 0, -65, 0, 1)
    }), ExternalAPI.exec("gameEnded", GameData.money, !0, 1), ExternalAPI.exec("trackGameEvent", "LevelFail", this.enemy.nextWave), "funtomic" === ExternalAPI.type && ExternalAPI.exec("levelEnded")
};
var Tutorial = {};
Tutorial.instance = null, Tutorial.closeHandler = null, Tutorial.currentType = "", Tutorial.clickX = 0, Tutorial.clickY = 0, Tutorial.clickRange = 10, Tutorial.findCastleMatches = function(e, t, i, a) {
    var g = battle.castle.field.units[t];
    if (!g) return a;
    var s = g[e];
    return s ? (s.type == i && a.indexOf(s) < 0 && (a.push(s), a = Tutorial.findCastleMatches(e + 1, t, i, a), a = Tutorial.findCastleMatches(e - 1, t, i, a), a = Tutorial.findCastleMatches(e, t + 1, i, a), a = Tutorial.findCastleMatches(e, t - 1, i, a)), a) : a
}, Tutorial.showAttack = function() {
    for (var e = -1, t = -1, i = Number.MIN_VALUE, a = 0; 10 > a; a++)
        for (var g = 0; 8 > g; g++) {
            var s = battle.castle.field.units[a][g];
            if (s) {
                var o = Tutorial.findCastleMatches(g, a, s.type, []);
                o.length > i && (e = g, t = a, i = o.length)
            }
        }
    s = battle.castle.field.units[t][e];
    var h = s.localToGlobal(0, 0);
    return h = Tutorial.instance.globalToLocal(h.x, h.y), Tutorial.createShader(h.x, h.y, 10), Tutorial.createHand(h.x, h.y), Tutorial.clickRange = 10, Tutorial.closeHandler = function() {
        battle.castle.field.onCellClick({
            target: {
                row: t,
                col: e
            }
        })
    }, !0
}, Tutorial.createHand = function(e, t) {
    var i = Utils.detectMobileBrowser(),
        a = library.getSprite(i ? "tutorial/hand" : "tutorial/arrow");
    return Tutorial.instance.addChild(a), a.x = e, a.y = t + a.height / 2, a.changeFrameDelay = 110, Tutorial.instance.hand = a, Tutorial.clickX = e, Tutorial.clickY = t, i ? a.moveDown = function() {} : (a.x += 6, a.moveDown = function() {
        a.moveTo(a.x, a.y + 8, 500, null, function() {
            a.y -= 8, a.moveDown()
        })
    }, a.moveDown()), a
}, Tutorial.voidHandler = function() {
    return !1
}, Tutorial.handleClick = function(e) {
    var t = Math.abs(e.x - Tutorial.clickX),
        i = Math.abs(e.y - Tutorial.clickY);
    if (t <= Tutorial.clickRange && i <= Tutorial.clickRange) {
        Tutorial.close(), Tutorial.closeHandler && Tutorial.closeHandler();
        var a = ["attack", "cannon", "skill", "money"];
        GameData.tutorial[Tutorial.currentType] = !0, GameData.tutorial.complete = !0;
        for (var g = 0, s = a.length; s > g; g++) GameData.tutorial.complete = GameData.tutorial.complete && GameData.tutorial[a[g]];
        saveGameData()
    }
    return !1
}, Tutorial.createInstance = function(e) {
    var t = new Sprite;
    return e.addChild(t), t
}, Tutorial.createShader = function(e, t, i) {
    var a = new Sprite(null, 480, 320);
    a.alignAnchor(DisplayObjectContainer.ANCHOR_ALIGN_LEFT, DisplayObjectContainer.ANCHOR_VALIGN_TOP), Tutorial.instance.addChild(a);
    var g = new Sprite(null, 480, t - i);
    return g.fillColor = "rgba(0,0,0,0.5)", g.alignAnchor(DisplayObjectContainer.ANCHOR_ALIGN_LEFT, DisplayObjectContainer.ANCHOR_VALIGN_TOP), g.setPosition(0, 0), a.addChild(g), g = new Sprite(null, 480, 320 - t - i), g.fillColor = "rgba(0,0,0,0.5)", g.alignAnchor(DisplayObjectContainer.ANCHOR_ALIGN_LEFT, DisplayObjectContainer.ANCHOR_VALIGN_TOP), g.setPosition(0, t + i), a.addChild(g), g = new Sprite(null, e - i, 2 * i), g.fillColor = "rgba(0,0,0,0.5)", g.alignAnchor(DisplayObjectContainer.ANCHOR_ALIGN_LEFT, DisplayObjectContainer.ANCHOR_VALIGN_TOP), g.setPosition(0, t - i), a.addChild(g), g = new Sprite(null, 480 - e - i, 2 * i), g.fillColor = "rgba(0,0,0,0.5)", g.alignAnchor(DisplayObjectContainer.ANCHOR_ALIGN_LEFT, DisplayObjectContainer.ANCHOR_VALIGN_TOP), g.setPosition(e + i, t - i), a.addChild(g), a.onclick = Tutorial.handleClick, a.onmousedown = Tutorial.voidHandler, a.onmouseup = Tutorial.voidHandler, a.onmousemove = Tutorial.voidHandler, a.onmouseover = Tutorial.voidHandler, a.onmouseout = Tutorial.voidHandler, a
}, Tutorial.showMoney = function(e) {
    for (var t = [], i = 0; i < e.length; i++) {
        var a = e[i];
        a.sign.visible && t.push(a)
    }
    if (!t.length) return !1;
    a = t[Math.floor(Math.random() * t.length)];
    var g = a.localToGlobal(0, 0);
    return g = Tutorial.instance.globalToLocal(g.x, g.y), Tutorial.createShader(g.x, g.y, 20), Tutorial.createHand(g.x, g.y), Tutorial.clickRange = a.width / 2, Tutorial.closeHandler = function() {
        a.select()
    }, !0
}, Tutorial.showCannon = function(e) {
    var t = e[Math.floor(Math.random() * e.length)],
        i = t.localToGlobal(0, 0);
    return i = Tutorial.instance.globalToLocal(i.x, i.y), Tutorial.createShader(i.x, i.y, 15), Tutorial.createHand(i.x, i.y), Tutorial.clickRange = 15, Tutorial.closeHandler = function() {
        t.shoot()
    }, !0
}, Tutorial.showSkill = function(e, t) {
    var i = battle.enemy.units;
    if (!i.length) return !1;
    var a = i[Math.floor(Math.random() * i.length)],
        g = e.localToGlobal(0, 0);
    g = Tutorial.instance.globalToLocal(g.x, g.y);
    var s = a.localToGlobal(0, 0);
    s = Tutorial.instance.globalToLocal(s.x, s.y);
    var o = [g, s],
        h = 0;
    Tutorial.createShader(g.x, g.y - e.height / 2, e.height / 2);
    var n = Tutorial.createHand(g.x, g.y),
        f = Utils.detectMobileBrowser();
    g.y += n.height / 2 - 16, s.y += n.height / 2, f || (g.x += 6, s.x += 6), n.setPosition(o[0].x, o[0].y), t.clearObjectTweens(n), n.moveDown();
    var d = t.setInterval(function() {
        h++, h >= o.length && (h = 0), n.setPosition(o[h].x, o[h].y), t.clearObjectTweens(n), n.moveDown()
    }, 1e3);
    return Tutorial.clickRange = 30,
        Tutorial.closeHandler = function() {
            t.clearInterval(d), battle.activateSkill({
                target: e
            })
        }, !0
}, Tutorial.show = function(e, t, i) {
    if (!Tutorial.instance && !GameData.tutorial[e]) {
        Tutorial.instance = Tutorial.createInstance(t), battle && battle.externalPause();
        var a = !1;
        "attack" == e && (a = Tutorial.showAttack()), "money" == e && (a = Tutorial.showMoney(i)), "cannon" == e && (a = Tutorial.showCannon(i)), "skill" == e && (a = Tutorial.showSkill(i, t)), a ? Tutorial.currentType = e : Tutorial.close()
    }
}, Tutorial.close = function() {
    Tutorial.instance && (Tutorial.instance.safeRemove(), Tutorial.instance = null, battle && battle.externalUnPause())
};
var GAME_ID = GAME_MANIFEST.id,
    library, mixer, battle, multiChannelMode, MIXER_CHANNEL_MUSIC = 0,
    MIXER_CHANNEL_CASTLE = 1,
    MIXER_CHANNEL_ENEMY = 2,
    MIXER_CHANNEL_SKILL = 3,
    MIXER_CHANNEL_TOWER = 4,
    MIXER_CHANNEL_EFFECT = 5;
window.onload = function() {
    "funtomic" === ExternalAPI.type && (Utils.noCheckOrient = !0), document.querySelector("head > title").innerHTML = '英雄魔法使者-7724游戏', Utils.addMobileListeners(GAME_MANIFEST.landscape, !0), Utils.mobileCorrectPixelRatio(), Utils.addFitLayoutListeners(), ExternalAPI.exec("muteSound", setMusicOff), ExternalAPI.exec("unmuteSound", setMusicOn), BitmapText.LINES_DELIMITER = "\\n", I18.init(ExternalAPI.exec("getLanguage")), ExternalAPI.init({
        appId: "5732e2a6e694aa89f500287b",
        leaderboardsTable: "highscores",
        landscape: GAME_MANIFEST.landscape,
        name: GAME_MANIFEST.name
    }, startLoad) !== !0 && setTimeout(startLoad, 600)
};
var _startMenuAds = !1,
    currentMusic = null,
    DefaultGameData = {
        firstTime: 1,
        sound: 1,
        music: 1,
        money: 0,
        tutorial: {
            complete: !1,
            attack: !1,
            cannon: !1,
            power: !1,
            skill: !1,
            money: !1
        },
        upgrade: {
            power: 0,
            goldPerViking: 0,
            skillReload: 0,
            towersCount: 0,
            towersLevel: 0,
            skillComet: 0,
            skillBugs: 0,
            skillPalm: 0,
            skillGold: 0,
            cannons: 0,
            attack: 0,
            armor: 0
        }
    },
    GameData = {};
loadGameData(function(e) {
    GameData = e
}), Upgrade.get = function(e) {
    return GAME_CONFIG.castle.upgrade[e] ? new Upgrade(e) : null
}, Upgrade.state = {
    power: 0,
    goldPerViking: 0,
    skillReload: 0,
    towersCount: 0,
    towersLevel: 0,
    cannons: 0,
    attack: 0,
    armor: 0,
    skill_red: 0,
    skill_green: 0,
    skill_blue: 0,
    skill_yellow: 0
}, Upgrade.prototype.getLevel = function() {
    return this.level || 0
}, Upgrade.prototype.setLevel = function(e) {
    e = Math.max(0, Math.min(this.config.maxLevel || 0, e || 0)), Upgrade.state[this.name] = e, this.level = e
}, Upgrade.prototype.getCost = function(e) {
    return "undefined" == typeof e && (e = 1 * this.level + 1), e = Math.max(0, Math.min(this.config.maxLevel, e || 1)), e >= this.config.maxLevel ? 0 : Math.floor(this.config.cost * (1 + e * this.config.costRatio))
}, Upgrade.prototype.getValue = function(e) {
    return this.config.getValue(this.level || 0, e || 0)
};
var tutorial = function() {
        var e = [],
            t = null,
            i = ["attack", "cannon", "power", "skill", "money"],
            a = function(e) {
                GameData.tutorial[e] = !0, GameData.tutorial.complete = !0;
                for (var t = 0, a = i.length; a > t; t++) GameData.tutorial.complete = GameData.tutorial.complete && GameData.tutorial[i[t]];
                saveGameData()
            },
            g = function(s, o) {
                if (!GameData.tutorial.complete && !(i.indexOf(s) < 0 || (e.push(s), t))) {
                    if (s = e.shift(), GameData.tutorial[s]) return g(e.shift(), o);
                    t = new Graphics.rectangle(o.screenWidth / 2, o.screenHeight / 2, o.screenWidth, o.screenHeight), t.lineWidth = 0, t.fillColor = "rgba(0,0,0,0.5)", t.opacity = 0;
                    var h = t.addChild(library.getSprite("tutorial/" + s, {
                        x: 0,
                        y: -20,
                        scaleX: 2,
                        scaleY: 2
                    }));
                    switch (s) {
                        case "attack":
                            setBitmapText("font2", I18.f("attack1"), h, 25, -17, 0, .4), setBitmapText("font3", I18.f("attack2"), h, 25, 2, 0, .4);
                            break;
                        case "cannon":
                            setBitmapText("font2", I18.f("cannon1"), h, 0, -27, 0, .4), setBitmapText("font3", I18.f("cannon2"), h, 0, -8, 0, .4);
                            break;
                        case "money":
                            setBitmapText("font3", I18.f("money"), h, -2, -3, 0, .4);
                            break;
                        case "power":
                            setBitmapText("font3", I18.f("power1"), h, 2, -30, 0, .4), setBitmapText("font_red", I18.f("power").toUpperCase(), h, -20, 20, 0, .4);
                            break;
                        case "skill":
                            setBitmapText("font2", I18.f("skill1"), h, -10, -50, 0, .4), setBitmapText("font3", I18.f("skill2"), h, -10, -40, 0, .4, null, null, -4)
                    }
                    var n = h.addChild(library.getSprite("button/ok", {
                        x: 0,
                        y: h.height / 2 + 10,
                        onclick: function() {
                            return a(s), o = t.stage, o._isPaused = !1, battle && (battle.paused = !1), o.removeChild(t), t = null, e.length > 0 && g(e.shift(), o), !1
                        }
                    }));
                    return setBitmapText("font3", I18.f("ok"), n, -1, -1, 0, .7), "skill" == s && (n.y -= 50), t.onclick = function() {
                        return !1
                    }, o.addChild(t), t.fadeTo(1, 500, Easing.cubic.easeIn, function() {
                        o._isPaused = !0, battle && (battle.paused = !0)
                    }), s
                }
            };
        return g
    }(),
    font_red = [{
        id: 91,
        x: 1,
        y: 1,
        width: 9,
        height: 32,
        xoffset: 2.5,
        yoffset: 3,
        page: 0,
        xadvance: 9.5
    }, {
        id: 93,
        x: 11,
        y: 1,
        width: 9,
        height: 32,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 9.5
    }, {
        id: 125,
        x: 21,
        y: 1,
        width: 10,
        height: 31.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 10
    }, {
        id: 123,
        x: 32,
        y: 1,
        width: 10,
        height: 31.5,
        xoffset: 2,
        yoffset: 3,
        page: 0,
        xadvance: 10
    }, {
        id: 350,
        x: 43,
        y: 1,
        width: 14.5,
        height: 31,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 342,
        x: 58.5,
        y: 1,
        width: 20.5,
        height: 30.5,
        xoffset: 1.5,
        yoffset: 6,
        page: 0,
        xadvance: 20.5
    }, {
        id: 199,
        x: 80,
        y: 1,
        width: 17.5,
        height: 30.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 290,
        x: 98.5,
        y: 1,
        width: 19.5,
        height: 30.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 18.5
    }, {
        id: 354,
        x: 119,
        y: 1,
        width: 18,
        height: 30,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 344,
        x: 138,
        y: 1,
        width: 20.5,
        height: 30,
        xoffset: 1.5,
        yoffset: 0,
        page: 0,
        xadvance: 20.5
    }, {
        id: 310,
        x: 159.5,
        y: 1,
        width: 21,
        height: 30,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 315,
        x: 181.5,
        y: 1,
        width: 15,
        height: 30,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 325,
        x: 197.5,
        y: 1,
        width: 17.5,
        height: 30,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 18
    }, {
        id: 330,
        x: 216,
        y: 1,
        width: 17.5,
        height: 30,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 18
    }, {
        id: 308,
        x: 234.5,
        y: 1,
        width: 17.5,
        height: 29.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 16
    }, {
        id: 340,
        x: 253,
        y: 1,
        width: 20.5,
        height: 29.5,
        xoffset: 1.5,
        yoffset: 1,
        page: 0,
        xadvance: 20.5
    }, {
        id: 372,
        x: 274.5,
        y: 1,
        width: 27,
        height: 29,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 25
    }, {
        id: 348,
        x: 302.5,
        y: 1,
        width: 14.5,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 374,
        x: 318,
        y: 1,
        width: 19.5,
        height: 29,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 194,
        x: 338.5,
        y: 1,
        width: 20,
        height: 29,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 18
    }, {
        id: 356,
        x: 359.5,
        y: 1,
        width: 18,
        height: 29,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 16.5
    }, {
        id: 327,
        x: 378.5,
        y: 1,
        width: 17.5,
        height: 29,
        xoffset: 1.5,
        yoffset: 0,
        page: 0,
        xadvance: 18
    }, {
        id: 366,
        x: 397,
        y: 1,
        width: 18,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 368,
        x: 416,
        y: 1,
        width: 18,
        height: 29,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 381,
        x: 435,
        y: 1,
        width: 17,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 16.5
    }, {
        id: 352,
        x: 453,
        y: 1,
        width: 14.5,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 336,
        x: 468.5,
        y: 1,
        width: 19.5,
        height: 29,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 19
    }, {
        id: 284,
        x: 489,
        y: 1,
        width: 19.5,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 18.5
    }, {
        id: 282,
        x: 1,
        y: 35,
        width: 16,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 16
    }, {
        id: 270,
        x: 18,
        y: 35,
        width: 18,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 18
    }, {
        id: 268,
        x: 37,
        y: 35,
        width: 17.5,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 264,
        x: 55.5,
        y: 35,
        width: 17.5,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 206,
        x: 74,
        y: 35,
        width: 11.5,
        height: 29,
        xoffset: 1.5,
        yoffset: 0,
        page: 0,
        xadvance: 11.5
    }, {
        id: 219,
        x: 86.5,
        y: 35,
        width: 18,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 212,
        x: 105.5,
        y: 35,
        width: 19.5,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 19
    }, {
        id: 197,
        x: 126,
        y: 35,
        width: 20,
        height: 29,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 18
    }, {
        id: 202,
        x: 147,
        y: 35,
        width: 16,
        height: 29,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 16
    }, {
        id: 1025,
        x: 164,
        y: 35,
        width: 16,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 16
    }, {
        id: 1049,
        x: 181,
        y: 35,
        width: 17.5,
        height: 28.5,
        xoffset: 1.5,
        yoffset: .5,
        page: 0,
        xadvance: 18
    }, {
        id: 258,
        x: 199.5,
        y: 35,
        width: 20,
        height: 28.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 18
    }, {
        id: 278,
        x: 220.5,
        y: 35,
        width: 16,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 16
    }, {
        id: 220,
        x: 237.5,
        y: 35,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 207,
        x: 256.5,
        y: 35,
        width: 12.5,
        height: 28.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 203,
        x: 270,
        y: 35,
        width: 16,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 16
    }, {
        id: 213,
        x: 287,
        y: 35,
        width: 19.5,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 19
    }, {
        id: 214,
        x: 307.5,
        y: 35,
        width: 19.5,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 19
    }, {
        id: 334,
        x: 328,
        y: 35,
        width: 19.5,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 19
    }, {
        id: 196,
        x: 348.5,
        y: 35,
        width: 20,
        height: 28.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 18
    }, {
        id: 195,
        x: 369.5,
        y: 35,
        width: 20,
        height: 28.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 18
    }, {
        id: 364,
        x: 390.5,
        y: 35,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 193,
        x: 409.5,
        y: 35,
        width: 20,
        height: 28.5,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 18
    }, {
        id: 192,
        x: 430.5,
        y: 35,
        width: 20,
        height: 28.5,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 18
    }, {
        id: 376,
        x: 451.5,
        y: 35,
        width: 19.5,
        height: 28.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 379,
        x: 472,
        y: 35,
        width: 17,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 41,
        x: 490,
        y: 35,
        width: 9.5,
        height: 28.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 360,
        x: 1,
        y: 66,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 40,
        x: 20,
        y: 66,
        width: 9.5,
        height: 28.5,
        xoffset: 3,
        yoffset: 5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 288,
        x: 30.5,
        y: 66,
        width: 19.5,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 266,
        x: 51,
        y: 66,
        width: 17.5,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 292,
        x: 69.5,
        y: 66,
        width: 21,
        height: 28.5,
        xoffset: 1.5,
        yoffset: 0,
        page: 0,
        xadvance: 21.5
    }, {
        id: 276,
        x: 91.5,
        y: 66,
        width: 16,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 16
    }, {
        id: 209,
        x: 108.5,
        y: 66,
        width: 17.5,
        height: 28.5,
        xoffset: 1.5,
        yoffset: .5,
        page: 0,
        xadvance: 18
    }, {
        id: 286,
        x: 127,
        y: 66,
        width: 19.5,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 296,
        x: 147.5,
        y: 66,
        width: 11.5,
        height: 28.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 300,
        x: 160,
        y: 66,
        width: 11,
        height: 28.5,
        xoffset: 1.5,
        yoffset: .5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 304,
        x: 172,
        y: 66,
        width: 11,
        height: 28.5,
        xoffset: 1.5,
        yoffset: .5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1044,
        x: 184,
        y: 66,
        width: 27,
        height: 28,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 25
    }, {
        id: 346,
        x: 212,
        y: 66,
        width: 14.5,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 14
    }, {
        id: 323,
        x: 227.5,
        y: 66,
        width: 17.5,
        height: 28,
        xoffset: 1.5,
        yoffset: 1,
        page: 0,
        xadvance: 18
    }, {
        id: 280,
        x: 246,
        y: 66,
        width: 16,
        height: 28,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 16
    }, {
        id: 313,
        x: 263,
        y: 66,
        width: 15,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 14.5
    }, {
        id: 211,
        x: 279,
        y: 66,
        width: 19.5,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 19
    }, {
        id: 201,
        x: 299.5,
        y: 66,
        width: 16,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 16
    }, {
        id: 377,
        x: 316.5,
        y: 66,
        width: 17,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 16.5
    }, {
        id: 200,
        x: 334.5,
        y: 66,
        width: 16,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 16
    }, {
        id: 370,
        x: 351.5,
        y: 66,
        width: 18,
        height: 28,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 302,
        x: 370.5,
        y: 66,
        width: 11,
        height: 28,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 221,
        x: 382.5,
        y: 66,
        width: 19.5,
        height: 28,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 17.5
    }, {
        id: 217,
        x: 403,
        y: 66,
        width: 18,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 17.5
    }, {
        id: 210,
        x: 422,
        y: 66,
        width: 19.5,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 19
    }, {
        id: 260,
        x: 442.5,
        y: 66,
        width: 20,
        height: 28,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 18
    }, {
        id: 262,
        x: 463.5,
        y: 66,
        width: 17.5,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 17.5
    }, {
        id: 204,
        x: 482,
        y: 66,
        width: 11,
        height: 28,
        xoffset: 1.5,
        yoffset: 1,
        page: 0,
        xadvance: 11.5
    }, {
        id: 218,
        x: 1,
        y: 96.5,
        width: 18,
        height: 28,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 17.5
    }, {
        id: 205,
        x: 20,
        y: 96.5,
        width: 11,
        height: 28,
        xoffset: 1.5,
        yoffset: 1,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1062,
        x: 32,
        y: 96.5,
        width: 22,
        height: 27.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 362,
        x: 55,
        y: 96.5,
        width: 18,
        height: 27.5,
        xoffset: 1,
        yoffset: 2,
        page: 0,
        xadvance: 17.5
    }, {
        id: 124,
        x: 74,
        y: 96.5,
        width: 6.5,
        height: 27.5,
        xoffset: 2,
        yoffset: 5.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1065,
        x: 81.5,
        y: 96.5,
        width: 30,
        height: 27.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 29.5
    }, {
        id: 256,
        x: 112.5,
        y: 96.5,
        width: 20,
        height: 27.5,
        xoffset: 0,
        yoffset: 2,
        page: 0,
        xadvance: 18
    }, {
        id: 332,
        x: 133.5,
        y: 96.5,
        width: 19.5,
        height: 27.5,
        xoffset: 1,
        yoffset: 2,
        page: 0,
        xadvance: 19
    }, {
        id: 274,
        x: 154,
        y: 96.5,
        width: 16,
        height: 27,
        xoffset: 1,
        yoffset: 2,
        page: 0,
        xadvance: 16
    }, {
        id: 298,
        x: 171,
        y: 96.5,
        width: 11.5,
        height: 27,
        xoffset: 1,
        yoffset: 2,
        page: 0,
        xadvance: 11.5
    }, {
        id: 329,
        x: 183.5,
        y: 96.5,
        width: 17,
        height: 26.5,
        xoffset: -1.5,
        yoffset: 2.5,
        page: 0,
        xadvance: 15
    }, {
        id: 291,
        x: 201.5,
        y: 96.5,
        width: 16,
        height: 26.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 351,
        x: 218.5,
        y: 96.5,
        width: 12,
        height: 26.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 12
    }, {
        id: 47,
        x: 231.5,
        y: 96.5,
        width: 18,
        height: 26.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 16
    }, {
        id: 63,
        x: 250.5,
        y: 96.5,
        width: 14.5,
        height: 26.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 92,
        x: 266,
        y: 96.5,
        width: 18,
        height: 26.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 16
    }, {
        id: 343,
        x: 285,
        y: 96.5,
        width: 16.5,
        height: 26.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 17
    }, {
        id: 231,
        x: 302.5,
        y: 96.5,
        width: 14.5,
        height: 26.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 355,
        x: 318,
        y: 96.5,
        width: 15,
        height: 26.5,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 311,
        x: 334,
        y: 96.5,
        width: 17,
        height: 26,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 16
    }, {
        id: 316,
        x: 352,
        y: 96.5,
        width: 13,
        height: 26,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 12
    }, {
        id: 326,
        x: 366,
        y: 96.5,
        width: 14.5,
        height: 26,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 15
    }, {
        id: 345,
        x: 381.5,
        y: 96.5,
        width: 16.5,
        height: 26,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 17
    }, {
        id: 317,
        x: 399,
        y: 96.5,
        width: 18.5,
        height: 26,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 17.5
    }, {
        id: 331,
        x: 418.5,
        y: 96.5,
        width: 14.5,
        height: 26,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 15
    }, {
        id: 81,
        x: 434,
        y: 96.5,
        width: 21.5,
        height: 25.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 19
    }, {
        id: 283,
        x: 456.5,
        y: 96.5,
        width: 13.5,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 13.5
    }, {
        id: 337,
        x: 471,
        y: 96.5,
        width: 16,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 15.5
    }, {
        id: 269,
        x: 488,
        y: 96.5,
        width: 14.5,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 14.5
    }, {
        id: 226,
        x: 1,
        y: 126.5,
        width: 16.5,
        height: 25,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 15
    }, {
        id: 382,
        x: 18.5,
        y: 126.5,
        width: 14.5,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 14
    }, {
        id: 229,
        x: 34,
        y: 126.5,
        width: 16.5,
        height: 25,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 15
    }, {
        id: 375,
        x: 51.5,
        y: 126.5,
        width: 16,
        height: 25,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 14.5
    }, {
        id: 367,
        x: 68.5,
        y: 126.5,
        width: 15,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 14.5
    }, {
        id: 373,
        x: 84.5,
        y: 126.5,
        width: 22,
        height: 25,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 20.5
    }, {
        id: 271,
        x: 107.5,
        y: 126.5,
        width: 15,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 15
    }, {
        id: 309,
        x: 123.5,
        y: 126.5,
        width: 15,
        height: 25,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 13
    }, {
        id: 369,
        x: 139.5,
        y: 126.5,
        width: 15,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 14.5
    }, {
        id: 251,
        x: 155.5,
        y: 126.5,
        width: 15,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 14.5
    }, {
        id: 341,
        x: 171.5,
        y: 126.5,
        width: 16.5,
        height: 25,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 17
    }, {
        id: 357,
        x: 189,
        y: 126.5,
        width: 15,
        height: 25,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 14
    }, {
        id: 349,
        x: 205,
        y: 126.5,
        width: 12,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 12
    }, {
        id: 265,
        x: 218,
        y: 126.5,
        width: 14.5,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 14.5
    }, {
        id: 328,
        x: 233.5,
        y: 126.5,
        width: 14.5,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 15
    }, {
        id: 244,
        x: 249,
        y: 126.5,
        width: 16,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 15.5
    }, {
        id: 238,
        x: 266,
        y: 126.5,
        width: 11.5,
        height: 25,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 9.5
    }, {
        id: 234,
        x: 278.5,
        y: 126.5,
        width: 13.5,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 13.5
    }, {
        id: 353,
        x: 293,
        y: 126.5,
        width: 12,
        height: 25,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 12
    }, {
        id: 37,
        x: 306,
        y: 126.5,
        width: 23,
        height: 24.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 22.5
    }, {
        id: 380,
        x: 330,
        y: 126.5,
        width: 14.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1105,
        x: 345.5,
        y: 126.5,
        width: 13.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 235,
        x: 360,
        y: 126.5,
        width: 13.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 241,
        x: 374.5,
        y: 126.5,
        width: 14.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 228,
        x: 390,
        y: 126.5,
        width: 16.5,
        height: 24.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 246,
        x: 407.5,
        y: 126.5,
        width: 16,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 279,
        x: 424.5,
        y: 126.5,
        width: 13.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 227,
        x: 439,
        y: 126.5,
        width: 16.5,
        height: 24.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 267,
        x: 456.5,
        y: 126.5,
        width: 14.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 335,
        x: 472,
        y: 126.5,
        width: 16,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 289,
        x: 489,
        y: 126.5,
        width: 16,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 259,
        x: 1,
        y: 153.5,
        width: 16.5,
        height: 24.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 245,
        x: 18.5,
        y: 153.5,
        width: 16,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 285,
        x: 35.5,
        y: 153.5,
        width: 16,
        height: 24.5,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 15.5
    }, {
        id: 255,
        x: 52.5,
        y: 153.5,
        width: 16,
        height: 24.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 365,
        x: 69.5,
        y: 153.5,
        width: 15,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 301,
        x: 85.5,
        y: 153.5,
        width: 10.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 10
    }, {
        id: 287,
        x: 97,
        y: 153.5,
        width: 16,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 224,
        x: 114,
        y: 153.5,
        width: 16.5,
        height: 24.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 225,
        x: 131.5,
        y: 153.5,
        width: 16.5,
        height: 24.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 361,
        x: 149,
        y: 153.5,
        width: 15,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 277,
        x: 165,
        y: 153.5,
        width: 13.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 293,
        x: 179.5,
        y: 153.5,
        width: 17.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 17.5
    }, {
        id: 297,
        x: 198,
        y: 153.5,
        width: 11.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 239,
        x: 210.5,
        y: 153.5,
        width: 12.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 252,
        x: 224,
        y: 153.5,
        width: 15,
        height: 24.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 378,
        x: 240,
        y: 153.5,
        width: 14.5,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 232,
        x: 255.5,
        y: 153.5,
        width: 13.5,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 314,
        x: 270,
        y: 153.5,
        width: 13,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 12
    }, {
        id: 216,
        x: 284,
        y: 153.5,
        width: 20,
        height: 24,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 19
    }, {
        id: 236,
        x: 305,
        y: 153.5,
        width: 10,
        height: 24,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 237,
        x: 316,
        y: 153.5,
        width: 10,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 233,
        x: 327,
        y: 153.5,
        width: 13.5,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 324,
        x: 341.5,
        y: 153.5,
        width: 14.5,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 33,
        x: 357,
        y: 153.5,
        width: 11,
        height: 24,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 11
    }, {
        id: 371,
        x: 369,
        y: 153.5,
        width: 15,
        height: 24,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1081,
        x: 385,
        y: 153.5,
        width: 14.5,
        height: 24,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 243,
        x: 400.5,
        y: 153.5,
        width: 16,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 347,
        x: 417.5,
        y: 153.5,
        width: 12,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 12
    }, {
        id: 303,
        x: 430.5,
        y: 153.5,
        width: 9.5,
        height: 24,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 242,
        x: 441,
        y: 153.5,
        width: 16,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 82,
        x: 458,
        y: 153.5,
        width: 20.5,
        height: 24,
        xoffset: 1.5,
        yoffset: 6,
        page: 0,
        xadvance: 20.5
    }, {
        id: 261,
        x: 479.5,
        y: 153.5,
        width: 16.5,
        height: 24,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 15
    }, {
        id: 249,
        x: 1,
        y: 180,
        width: 15,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 250,
        x: 17,
        y: 180,
        width: 15,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 57,
        x: 33,
        y: 180,
        width: 16,
        height: 24,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 15.5
    }, {
        id: 263,
        x: 50,
        y: 180,
        width: 14.5,
        height: 24,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 253,
        x: 65.5,
        y: 180,
        width: 16,
        height: 24,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 281,
        x: 82.5,
        y: 180,
        width: 13.5,
        height: 24,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1071,
        x: 97,
        y: 180,
        width: 20.5,
        height: 24,
        xoffset: 1.5,
        yoffset: 6,
        page: 0,
        xadvance: 20.5
    }, {
        id: 257,
        x: 118.5,
        y: 180,
        width: 16.5,
        height: 23.5,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 15
    }, {
        id: 50,
        x: 136,
        y: 180,
        width: 15,
        height: 23.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 333,
        x: 152,
        y: 180,
        width: 16,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 36,
        x: 169,
        y: 180,
        width: 12,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 54,
        x: 182,
        y: 180,
        width: 16,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 363,
        x: 199,
        y: 180,
        width: 15,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 56,
        x: 215,
        y: 180,
        width: 16.5,
        height: 23,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1046,
        x: 232.5,
        y: 180,
        width: 29,
        height: 23,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 27.5
    }, {
        id: 53,
        x: 262.5,
        y: 180,
        width: 15.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 15
    }, {
        id: 51,
        x: 279,
        y: 180,
        width: 15.5,
        height: 23,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 14.5
    }, {
        id: 48,
        x: 295.5,
        y: 180,
        width: 19.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 19
    }, {
        id: 1047,
        x: 316,
        y: 180,
        width: 15.5,
        height: 23,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1070,
        x: 332.5,
        y: 180,
        width: 29,
        height: 23,
        xoffset: 1.5,
        yoffset: 6,
        page: 0,
        xadvance: 29.5
    }, {
        id: 1050,
        x: 362.5,
        y: 180,
        width: 21,
        height: 23,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1069,
        x: 384.5,
        y: 180,
        width: 17.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1076,
        x: 403,
        y: 180,
        width: 22,
        height: 23,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 20
    }, {
        id: 272,
        x: 426,
        y: 180,
        width: 19.5,
        height: 23,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 55,
        x: 446.5,
        y: 180,
        width: 16.5,
        height: 23,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1068,
        x: 464,
        y: 180,
        width: 20.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 19.5
    }, {
        id: 275,
        x: 485.5,
        y: 180,
        width: 13.5,
        height: 23,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 80,
        x: 1,
        y: 206,
        width: 20,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 19.5
    }, {
        id: 67,
        x: 22,
        y: 206,
        width: 17.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1054,
        x: 40.5,
        y: 206,
        width: 19.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 19
    }, {
        id: 68,
        x: 61,
        y: 206,
        width: 18,
        height: 23,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 18
    }, {
        id: 1042,
        x: 80,
        y: 206,
        width: 18.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 18
    }, {
        id: 1056,
        x: 99.5,
        y: 206,
        width: 20,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 19.5
    }, {
        id: 208,
        x: 120.5,
        y: 206,
        width: 19.5,
        height: 23,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 306,
        x: 141,
        y: 206,
        width: 27.5,
        height: 23,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 27
    }, {
        id: 1067,
        x: 169.5,
        y: 206,
        width: 31,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 31
    }, {
        id: 79,
        x: 201.5,
        y: 206,
        width: 19.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 19
    }, {
        id: 66,
        x: 222,
        y: 206,
        width: 18.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 18
    }, {
        id: 8364,
        x: 241.5,
        y: 206,
        width: 19,
        height: 23,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 83,
        x: 261.5,
        y: 206,
        width: 14.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 1057,
        x: 277,
        y: 206,
        width: 17.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1066,
        x: 295.5,
        y: 206,
        width: 23.5,
        height: 23,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 22.5
    }, {
        id: 1051,
        x: 320,
        y: 206,
        width: 26.5,
        height: 23,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 25.5
    }, {
        id: 71,
        x: 347.5,
        y: 206,
        width: 19.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 18.5
    }, {
        id: 338,
        x: 368,
        y: 206,
        width: 25.5,
        height: 23,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 24.5
    }, {
        id: 75,
        x: 394.5,
        y: 206,
        width: 21,
        height: 23,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 38,
        x: 416.5,
        y: 206,
        width: 17.5,
        height: 23,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 16
    }, {
        id: 299,
        x: 435,
        y: 206,
        width: 11.5,
        height: 23,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 10
    }, {
        id: 85,
        x: 447.5,
        y: 206,
        width: 18,
        height: 22.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 88,
        x: 466.5,
        y: 206,
        width: 19.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 17.5
    }, {
        id: 52,
        x: 487,
        y: 206,
        width: 18,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 18
    }, {
        id: 76,
        x: 1,
        y: 231,
        width: 15,
        height: 22.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 77,
        x: 17,
        y: 231,
        width: 21.5,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 22
    }, {
        id: 84,
        x: 39.5,
        y: 231,
        width: 18,
        height: 22.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 1040,
        x: 58.5,
        y: 231,
        width: 20,
        height: 22.5,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 18
    }, {
        id: 74,
        x: 79.5,
        y: 231,
        width: 17.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 16
    }, {
        id: 90,
        x: 98,
        y: 231,
        width: 17,
        height: 22.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 78,
        x: 116,
        y: 231,
        width: 17.5,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 18
    }, {
        id: 73,
        x: 134.5,
        y: 231,
        width: 11,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 72,
        x: 146.5,
        y: 231,
        width: 21,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 49,
        x: 168.5,
        y: 231,
        width: 11,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1064,
        x: 180.5,
        y: 231,
        width: 28.5,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 29.5
    }, {
        id: 294,
        x: 210,
        y: 231,
        width: 21,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 1063,
        x: 232,
        y: 231,
        width: 18,
        height: 22.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1061,
        x: 251,
        y: 231,
        width: 19.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1052,
        x: 271.5,
        y: 231,
        width: 21.5,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 22
    }, {
        id: 87,
        x: 294,
        y: 231,
        width: 27,
        height: 22.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 25
    }, {
        id: 1053,
        x: 322,
        y: 231,
        width: 21,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 1055,
        x: 344,
        y: 231,
        width: 21,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 1058,
        x: 366,
        y: 231,
        width: 18,
        height: 22.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 319,
        x: 385,
        y: 231,
        width: 16,
        height: 22.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 15
    }, {
        id: 358,
        x: 402,
        y: 231,
        width: 18,
        height: 22.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 321,
        x: 421,
        y: 231,
        width: 17,
        height: 22.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 15
    }, {
        id: 1060,
        x: 439,
        y: 231,
        width: 22,
        height: 22.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 65,
        x: 462,
        y: 231,
        width: 20,
        height: 22.5,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 18
    }, {
        id: 1094,
        x: 483,
        y: 231,
        width: 18,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 10.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1041,
        x: 1,
        y: 255.5,
        width: 19,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 19
    }, {
        id: 1043,
        x: 21,
        y: 255.5,
        width: 15.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 64,
        x: 37.5,
        y: 255.5,
        width: 20,
        height: 22.5,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1097,
        x: 58.5,
        y: 255.5,
        width: 24.5,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 10.5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 1048,
        x: 84,
        y: 255.5,
        width: 17.5,
        height: 22.5,
        xoffset: 1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 18
    }, {
        id: 1059,
        x: 102.5,
        y: 255.5,
        width: 19.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1045,
        x: 123,
        y: 255.5,
        width: 16,
        height: 22,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 16
    }, {
        id: 70,
        x: 140,
        y: 255.5,
        width: 16,
        height: 22,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 15.5
    }, {
        id: 318,
        x: 157,
        y: 255.5,
        width: 16.5,
        height: 22,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 15.5
    }, {
        id: 69,
        x: 174.5,
        y: 255.5,
        width: 16,
        height: 22,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 16
    }, {
        id: 86,
        x: 191.5,
        y: 255.5,
        width: 17,
        height: 22,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 89,
        x: 209.5,
        y: 255.5,
        width: 19.5,
        height: 22,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 17.5
    }, {
        id: 222,
        x: 230,
        y: 255.5,
        width: 21,
        height: 22,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 20.5
    }, {
        id: 198,
        x: 252,
        y: 255.5,
        width: 26,
        height: 22,
        xoffset: -.5,
        yoffset: 7,
        page: 0,
        xadvance: 24.5
    }, {
        id: 35,
        x: 279,
        y: 255.5,
        width: 15.5,
        height: 22,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 14
    }, {
        id: 247,
        x: 295.5,
        y: 255.5,
        width: 14.5,
        height: 21.5,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 383,
        x: 311,
        y: 255.5,
        width: 10,
        height: 21.5,
        xoffset: 4,
        yoffset: 6.5,
        page: 0,
        xadvance: 12
    }, {
        id: 113,
        x: 322,
        y: 255.5,
        width: 17.5,
        height: 20.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 16
    }, {
        id: 59,
        x: 340.5,
        y: 255.5,
        width: 10,
        height: 20,
        xoffset: 1,
        yoffset: 12.5,
        page: 0,
        xadvance: 10
    }, {
        id: 114,
        x: 351.5,
        y: 255.5,
        width: 16.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 17
    }, {
        id: 248,
        x: 369,
        y: 255.5,
        width: 16.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1103,
        x: 386.5,
        y: 255.5,
        width: 16.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 16.5
    }, {
        id: 1078,
        x: 404,
        y: 255.5,
        width: 23.5,
        height: 19,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 22
    }, {
        id: 115,
        x: 428.5,
        y: 255.5,
        width: 12,
        height: 19,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 12
    }, {
        id: 98,
        x: 441.5,
        y: 255.5,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 15
    }, {
        id: 107,
        x: 458,
        y: 255.5,
        width: 17,
        height: 19,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1082,
        x: 476,
        y: 255.5,
        width: 17,
        height: 19,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 312,
        x: 494,
        y: 255.5,
        width: 17,
        height: 19,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1074,
        x: 1,
        y: 280,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 15
    }, {
        id: 223,
        x: 17.5,
        y: 280,
        width: 24,
        height: 19,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 24
    }, {
        id: 1079,
        x: 42.5,
        y: 280,
        width: 13,
        height: 19,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 11.5
    }, {
        id: 110,
        x: 56.5,
        y: 280,
        width: 14.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 15
    }, {
        id: 322,
        x: 72,
        y: 280,
        width: 14,
        height: 18.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 320,
        x: 87,
        y: 280,
        width: 14.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 13
    }, {
        id: 359,
        x: 102.5,
        y: 280,
        width: 15,
        height: 18.5,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 307,
        x: 118.5,
        y: 280,
        width: 23,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 23
    }, {
        id: 108,
        x: 142.5,
        y: 280,
        width: 13,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 12
    }, {
        id: 295,
        x: 156.5,
        y: 280,
        width: 17.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1080,
        x: 175,
        y: 280,
        width: 14.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 273,
        x: 190.5,
        y: 280,
        width: 16,
        height: 18.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 15
    }, {
        id: 106,
        x: 207.5,
        y: 280,
        width: 14.5,
        height: 18.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 13
    }, {
        id: 240,
        x: 223,
        y: 280,
        width: 16,
        height: 18.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 15
    }, {
        id: 1090,
        x: 240,
        y: 280,
        width: 15,
        height: 18.5,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1072,
        x: 256,
        y: 280,
        width: 16.5,
        height: 18.5,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 15
    }, {
        id: 1093,
        x: 273.5,
        y: 280,
        width: 16,
        height: 18.5,
        xoffset: 0,
        yoffset: 11,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1073,
        x: 290.5,
        y: 280,
        width: 15.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 104,
        x: 307,
        y: 280,
        width: 17.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 103,
        x: 325.5,
        y: 280,
        width: 16,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 122,
        x: 342.5,
        y: 280,
        width: 14.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 121,
        x: 358,
        y: 280,
        width: 16,
        height: 18.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 120,
        x: 375,
        y: 280,
        width: 16,
        height: 18.5,
        xoffset: 0,
        yoffset: 11,
        page: 0,
        xadvance: 14.5
    }, {
        id: 119,
        x: 392,
        y: 280,
        width: 22,
        height: 18.5,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 20.5
    }, {
        id: 1092,
        x: 415,
        y: 280,
        width: 18,
        height: 18.5,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 17
    }, {
        id: 117,
        x: 434,
        y: 280,
        width: 15,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 116,
        x: 450,
        y: 280,
        width: 15,
        height: 18.5,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 112,
        x: 466,
        y: 280,
        width: 16.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 16
    }, {
        id: 111,
        x: 483.5,
        y: 280,
        width: 16,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1102,
        x: 1,
        y: 301,
        width: 23.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 23.5
    }, {
        id: 109,
        x: 25.5,
        y: 301,
        width: 17.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 18
    }, {
        id: 1083,
        x: 44,
        y: 301,
        width: 21.5,
        height: 18.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 20.5
    }, {
        id: 97,
        x: 66.5,
        y: 301,
        width: 16.5,
        height: 18.5,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 15
    }, {
        id: 1088,
        x: 84,
        y: 301,
        width: 16.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 16
    }, {
        id: 1089,
        x: 101.5,
        y: 301,
        width: 14.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1085,
        x: 117,
        y: 301,
        width: 17.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1084,
        x: 135.5,
        y: 301,
        width: 17.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 18
    }, {
        id: 1101,
        x: 154,
        y: 301,
        width: 14.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 14
    }, {
        id: 1091,
        x: 169.5,
        y: 301,
        width: 16,
        height: 18.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 100,
        x: 186.5,
        y: 301,
        width: 15,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 15
    }, {
        id: 99,
        x: 202.5,
        y: 301,
        width: 14.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1087,
        x: 218,
        y: 301,
        width: 17.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 17
    }, {
        id: 1098,
        x: 236.5,
        y: 301,
        width: 19,
        height: 18.5,
        xoffset: .5,
        yoffset: 10,
        page: 0,
        xadvance: 18
    }, {
        id: 1100,
        x: 256.5,
        y: 301,
        width: 16.5,
        height: 18.5,
        xoffset: .5,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1086,
        x: 274,
        y: 301,
        width: 16,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1095,
        x: 291,
        y: 301,
        width: 15,
        height: 18.5,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 339,
        x: 307,
        y: 301,
        width: 20.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 20
    }, {
        id: 1096,
        x: 328.5,
        y: 301,
        width: 23.5,
        height: 18.5,
        xoffset: 1.5,
        yoffset: 10.5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 305,
        x: 353,
        y: 301,
        width: 9.5,
        height: 18,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 1077,
        x: 363.5,
        y: 301,
        width: 13.5,
        height: 18,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1075,
        x: 378,
        y: 301,
        width: 13,
        height: 18,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 118,
        x: 392,
        y: 301,
        width: 14,
        height: 18,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 13
    }, {
        id: 101,
        x: 407,
        y: 301,
        width: 13.5,
        height: 18,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 230,
        x: 421.5,
        y: 301,
        width: 20.5,
        height: 18,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 20
    }, {
        id: 254,
        x: 443,
        y: 301,
        width: 17,
        height: 18,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 17
    }, {
        id: 105,
        x: 461,
        y: 301,
        width: 9.5,
        height: 18,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 102,
        x: 471.5,
        y: 301,
        width: 13.5,
        height: 18,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 13
    }, {
        id: 1099,
        x: 486,
        y: 301,
        width: 9.5,
        height: 18,
        xoffset: 1,
        yoffset: 10.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 58,
        x: 496.5,
        y: 301,
        width: 10,
        height: 18,
        xoffset: 1,
        yoffset: 12.5,
        page: 0,
        xadvance: 10
    }, {
        id: 42,
        x: 1,
        y: 321.5,
        width: 15,
        height: 15.5,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 15
    }, {
        id: 43,
        x: 17,
        y: 321.5,
        width: 14.5,
        height: 14.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 14.5
    }, {
        id: 215,
        x: 32.5,
        y: 321.5,
        width: 13,
        height: 13,
        xoffset: 1.5,
        yoffset: 11.5,
        page: 0,
        xadvance: 14
    }, {
        id: 8226,
        x: 46.5,
        y: 321.5,
        width: 12,
        height: 12,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 12
    }, {
        id: 8217,
        x: 59.5,
        y: 321.5,
        width: 9.5,
        height: 11,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 9
    }, {
        id: 8221,
        x: 70,
        y: 321.5,
        width: 18,
        height: 11,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 18
    }, {
        id: 8222,
        x: 89,
        y: 321.5,
        width: 18,
        height: 11,
        xoffset: 1,
        yoffset: 21.5,
        page: 0,
        xadvance: 18
    }, {
        id: 34,
        x: 108,
        y: 321.5,
        width: 17.5,
        height: 11,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 8220,
        x: 126.5,
        y: 321.5,
        width: 18,
        height: 11,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 18
    }, {
        id: 8218,
        x: 145.5,
        y: 321.5,
        width: 9.5,
        height: 11,
        xoffset: 1,
        yoffset: 21.5,
        page: 0,
        xadvance: 9
    }, {
        id: 44,
        x: 156,
        y: 321.5,
        width: 9.5,
        height: 11,
        xoffset: 1,
        yoffset: 21.5,
        page: 0,
        xadvance: 9
    }, {
        id: 39,
        x: 166.5,
        y: 321.5,
        width: 7.5,
        height: 11,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 8216,
        x: 175,
        y: 321.5,
        width: 9,
        height: 11,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 9
    }, {
        id: 8249,
        x: 185,
        y: 321.5,
        width: 9,
        height: 10.5,
        xoffset: .5,
        yoffset: 13.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 94,
        x: 195,
        y: 321.5,
        width: 11.5,
        height: 10.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 11
    }, {
        id: 8250,
        x: 207.5,
        y: 321.5,
        width: 9,
        height: 10.5,
        xoffset: .5,
        yoffset: 13.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 61,
        x: 217.5,
        y: 321.5,
        width: 14.5,
        height: 10,
        xoffset: 1,
        yoffset: 13,
        page: 0,
        xadvance: 14.5
    }, {
        id: 8230,
        x: 233,
        y: 321.5,
        width: 32,
        height: 9.5,
        xoffset: 1.5,
        yoffset: 21.5,
        page: 0,
        xadvance: 34
    }, {
        id: 46,
        x: 266,
        y: 321.5,
        width: 10,
        height: 9.5,
        xoffset: 1,
        yoffset: 21.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 731,
        x: 277,
        y: 321.5,
        width: 8.5,
        height: 8.5,
        xoffset: .5,
        yoffset: 26,
        page: 0,
        xadvance: 7.5
    }, {
        id: 733,
        x: 286.5,
        y: 321.5,
        width: 11.5,
        height: 7.5,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 11.5
    }, {
        id: 732,
        x: 299,
        y: 321.5,
        width: 11.5,
        height: 7,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 11
    }, {
        id: 96,
        x: 311.5,
        y: 321.5,
        width: 9,
        height: 7,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 126,
        x: 321.5,
        y: 321.5,
        width: 15,
        height: 6.5,
        xoffset: 1,
        yoffset: 15,
        page: 0,
        xadvance: 15
    }, {
        id: 95,
        x: 337.5,
        y: 321.5,
        width: 16,
        height: 5.5,
        xoffset: 0,
        yoffset: 27.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 8211,
        x: 354.5,
        y: 321.5,
        width: 16,
        height: 5.5,
        xoffset: .5,
        yoffset: 16,
        page: 0,
        xadvance: 14.5
    }, {
        id: 45,
        x: 371.5,
        y: 321.5,
        width: 11,
        height: 5.5,
        xoffset: .5,
        yoffset: 16,
        page: 0,
        xadvance: 9
    }, {
        id: 8722,
        x: 383.5,
        y: 321.5,
        width: 14.5,
        height: 5,
        xoffset: 1,
        yoffset: 15.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 8212,
        x: 399,
        y: 321.5,
        width: 23.5,
        height: 5,
        xoffset: .5,
        yoffset: 16,
        page: 0,
        xadvance: 22
    }, {
        id: 32,
        x: 423.5,
        y: 321.5,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 26,
        page: 0,
        xadvance: 7.5
    }, {
        id: 32,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 26,
        page: 0,
        xadvance: 7.5
    }],
    font1 = [{
        id: 91,
        x: 1,
        y: 1,
        width: 11,
        height: 32.5,
        xoffset: 1.5,
        yoffset: 3,
        page: 0,
        xadvance: 9.5
    }, {
        id: 125,
        x: 13,
        y: 1,
        width: 12,
        height: 32.5,
        xoffset: -.5,
        yoffset: 3,
        page: 0,
        xadvance: 9.5
    }, {
        id: 123,
        x: 26,
        y: 1,
        width: 12,
        height: 32.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 9.5
    }, {
        id: 93,
        x: 39,
        y: 1,
        width: 11,
        height: 32.5,
        xoffset: -.5,
        yoffset: 3,
        page: 0,
        xadvance: 9
    }, {
        id: 350,
        x: 51,
        y: 1,
        width: 16,
        height: 32,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 199,
        x: 68,
        y: 1,
        width: 19,
        height: 31.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 17
    }, {
        id: 354,
        x: 88,
        y: 1,
        width: 19.5,
        height: 31.5,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 16
    }, {
        id: 342,
        x: 108.5,
        y: 1,
        width: 21.5,
        height: 31.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 19.5
    }, {
        id: 290,
        x: 131,
        y: 1,
        width: 21,
        height: 31.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 18
    }, {
        id: 330,
        x: 153,
        y: 1,
        width: 19,
        height: 31,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 315,
        x: 173,
        y: 1,
        width: 17,
        height: 31,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 14
    }, {
        id: 310,
        x: 191,
        y: 1,
        width: 22,
        height: 31,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 19
    }, {
        id: 344,
        x: 214,
        y: 1,
        width: 21.5,
        height: 31,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 19.5
    }, {
        id: 325,
        x: 236.5,
        y: 1,
        width: 19,
        height: 31,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 308,
        x: 256.5,
        y: 1,
        width: 19,
        height: 30.5,
        xoffset: -1,
        yoffset: 0,
        page: 0,
        xadvance: 15.5
    }, {
        id: 340,
        x: 276.5,
        y: 1,
        width: 21.5,
        height: 30.5,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 19.5
    }, {
        id: 270,
        x: 299,
        y: 1,
        width: 19.5,
        height: 30.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 17
    }, {
        id: 368,
        x: 319.5,
        y: 1,
        width: 19.5,
        height: 30,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 17
    }, {
        id: 372,
        x: 340,
        y: 1,
        width: 28,
        height: 30,
        xoffset: -1,
        yoffset: 0,
        page: 0,
        xadvance: 24.5
    }, {
        id: 336,
        x: 369,
        y: 1,
        width: 21,
        height: 30,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 194,
        x: 391,
        y: 1,
        width: 21.5,
        height: 30,
        xoffset: -1,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 327,
        x: 413.5,
        y: 1,
        width: 19,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 352,
        x: 433.5,
        y: 1,
        width: 16,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 13.5
    }, {
        id: 374,
        x: 450.5,
        y: 1,
        width: 20.5,
        height: 30,
        xoffset: -1,
        yoffset: 0,
        page: 0,
        xadvance: 16.5
    }, {
        id: 356,
        x: 472,
        y: 1,
        width: 19.5,
        height: 30,
        xoffset: -.5,
        yoffset: 0,
        page: 0,
        xadvance: 16
    }, {
        id: 366,
        x: 1,
        y: 35.5,
        width: 19.5,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 17
    }, {
        id: 292,
        x: 21.5,
        y: 35.5,
        width: 22.5,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 20.5
    }, {
        id: 348,
        x: 45,
        y: 35.5,
        width: 16,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 13.5
    }, {
        id: 284,
        x: 62,
        y: 35.5,
        width: 21,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 18
    }, {
        id: 282,
        x: 84,
        y: 35.5,
        width: 17.5,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 15.5
    }, {
        id: 212,
        x: 102.5,
        y: 35.5,
        width: 21,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 18.5
    }, {
        id: 268,
        x: 124.5,
        y: 35.5,
        width: 19,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 17
    }, {
        id: 206,
        x: 144.5,
        y: 35.5,
        width: 13,
        height: 30,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 11
    }, {
        id: 264,
        x: 158.5,
        y: 35.5,
        width: 19,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 17
    }, {
        id: 219,
        x: 178.5,
        y: 35.5,
        width: 19.5,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 17
    }, {
        id: 202,
        x: 199,
        y: 35.5,
        width: 17.5,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 15.5
    }, {
        id: 381,
        x: 217.5,
        y: 35.5,
        width: 18.5,
        height: 30,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 16
    }, {
        id: 197,
        x: 237,
        y: 35.5,
        width: 21.5,
        height: 30,
        xoffset: -1,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1049,
        x: 259.5,
        y: 35.5,
        width: 19,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1025,
        x: 279.5,
        y: 35.5,
        width: 18,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 258,
        x: 298.5,
        y: 35.5,
        width: 21.5,
        height: 29.5,
        xoffset: -1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 278,
        x: 321,
        y: 35.5,
        width: 18,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 220,
        x: 340,
        y: 35.5,
        width: 19.5,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 17
    }, {
        id: 323,
        x: 360.5,
        y: 35.5,
        width: 19,
        height: 29.5,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 17.5
    }, {
        id: 211,
        x: 380.5,
        y: 35.5,
        width: 21,
        height: 29.5,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 18.5
    }, {
        id: 364,
        x: 402.5,
        y: 35.5,
        width: 19.5,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 17
    }, {
        id: 210,
        x: 423,
        y: 35.5,
        width: 21,
        height: 29.5,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 18.5
    }, {
        id: 209,
        x: 445,
        y: 35.5,
        width: 19,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 41,
        x: 465,
        y: 35.5,
        width: 11,
        height: 29.5,
        xoffset: -.5,
        yoffset: 5,
        page: 0,
        xadvance: 10
    }, {
        id: 40,
        x: 477,
        y: 35.5,
        width: 11,
        height: 29.5,
        xoffset: 2,
        yoffset: 5,
        page: 0,
        xadvance: 10
    }, {
        id: 214,
        x: 489,
        y: 35.5,
        width: 21,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 207,
        x: 1,
        y: 67.5,
        width: 14,
        height: 29.5,
        xoffset: -.5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 379,
        x: 16,
        y: 67.5,
        width: 18.5,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 16
    }, {
        id: 193,
        x: 35.5,
        y: 67.5,
        width: 21.5,
        height: 29.5,
        xoffset: -1,
        yoffset: 1,
        page: 0,
        xadvance: 17.5
    }, {
        id: 376,
        x: 58,
        y: 67.5,
        width: 20.5,
        height: 29.5,
        xoffset: -1,
        yoffset: .5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 217,
        x: 79.5,
        y: 67.5,
        width: 19.5,
        height: 29.5,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 17
    }, {
        id: 203,
        x: 100,
        y: 67.5,
        width: 18,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 266,
        x: 119,
        y: 67.5,
        width: 19,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 17
    }, {
        id: 218,
        x: 139,
        y: 67.5,
        width: 19.5,
        height: 29.5,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 17
    }, {
        id: 276,
        x: 159.5,
        y: 67.5,
        width: 17.5,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 286,
        x: 178,
        y: 67.5,
        width: 21,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 18
    }, {
        id: 196,
        x: 200,
        y: 67.5,
        width: 21.5,
        height: 29.5,
        xoffset: -1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 360,
        x: 222.5,
        y: 67.5,
        width: 19.5,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 17
    }, {
        id: 195,
        x: 243,
        y: 67.5,
        width: 21.5,
        height: 29.5,
        xoffset: -1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 288,
        x: 265.5,
        y: 67.5,
        width: 21,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 18
    }, {
        id: 192,
        x: 287.5,
        y: 67.5,
        width: 21.5,
        height: 29.5,
        xoffset: -1,
        yoffset: 1,
        page: 0,
        xadvance: 17.5
    }, {
        id: 296,
        x: 310,
        y: 67.5,
        width: 13,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 334,
        x: 324,
        y: 67.5,
        width: 21,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 213,
        x: 346,
        y: 67.5,
        width: 21,
        height: 29.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 304,
        x: 368,
        y: 67.5,
        width: 12.5,
        height: 29.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 300,
        x: 381.5,
        y: 67.5,
        width: 12.5,
        height: 29.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 1044,
        x: 395,
        y: 67.5,
        width: 28,
        height: 29,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 24
    }, {
        id: 346,
        x: 424,
        y: 67.5,
        width: 16,
        height: 29,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 13.5
    }, {
        id: 377,
        x: 441,
        y: 67.5,
        width: 18.5,
        height: 29,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 16
    }, {
        id: 124,
        x: 460.5,
        y: 67.5,
        width: 8.5,
        height: 29,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 8
    }, {
        id: 370,
        x: 470,
        y: 67.5,
        width: 19.5,
        height: 29,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17
    }, {
        id: 302,
        x: 490.5,
        y: 67.5,
        width: 12.5,
        height: 29,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 11
    }, {
        id: 262,
        x: 1,
        y: 99,
        width: 19,
        height: 29,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 17
    }, {
        id: 260,
        x: 21,
        y: 99,
        width: 21.5,
        height: 29,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 200,
        x: 43.5,
        y: 99,
        width: 17.5,
        height: 29,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 15.5
    }, {
        id: 313,
        x: 62,
        y: 99,
        width: 17,
        height: 29,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 14
    }, {
        id: 201,
        x: 80,
        y: 99,
        width: 17.5,
        height: 29,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 15.5
    }, {
        id: 280,
        x: 98.5,
        y: 99,
        width: 17.5,
        height: 29,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 221,
        x: 117,
        y: 99,
        width: 20.5,
        height: 29,
        xoffset: -1,
        yoffset: 1,
        page: 0,
        xadvance: 16.5
    }, {
        id: 205,
        x: 138.5,
        y: 99,
        width: 12.5,
        height: 29,
        xoffset: .5,
        yoffset: 1,
        page: 0,
        xadvance: 11
    }, {
        id: 204,
        x: 152,
        y: 99,
        width: 12.5,
        height: 29,
        xoffset: .5,
        yoffset: 1,
        page: 0,
        xadvance: 11
    }, {
        id: 362,
        x: 165.5,
        y: 99,
        width: 19.5,
        height: 28.5,
        xoffset: 0,
        yoffset: 1.5,
        page: 0,
        xadvance: 17
    }, {
        id: 274,
        x: 186,
        y: 99,
        width: 17.5,
        height: 28.5,
        xoffset: 0,
        yoffset: 1.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1062,
        x: 204.5,
        y: 99,
        width: 23,
        height: 28.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 21
    }, {
        id: 332,
        x: 228.5,
        y: 99,
        width: 21,
        height: 28.5,
        xoffset: 0,
        yoffset: 1.5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 256,
        x: 250.5,
        y: 99,
        width: 21.5,
        height: 28.5,
        xoffset: -1,
        yoffset: 1.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1065,
        x: 273,
        y: 99,
        width: 31,
        height: 28.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 28.5
    }, {
        id: 298,
        x: 305,
        y: 99,
        width: 13,
        height: 28.5,
        xoffset: 0,
        yoffset: 1.5,
        page: 0,
        xadvance: 11
    }, {
        id: 63,
        x: 319,
        y: 99,
        width: 16,
        height: 28,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 47,
        x: 336,
        y: 99,
        width: 19.5,
        height: 28,
        xoffset: -1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 351,
        x: 356.5,
        y: 99,
        width: 14,
        height: 28,
        xoffset: 0,
        yoffset: 9.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 92,
        x: 371.5,
        y: 99,
        width: 19.5,
        height: 28,
        xoffset: -1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 311,
        x: 392,
        y: 99,
        width: 18.5,
        height: 27.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 343,
        x: 411.5,
        y: 99,
        width: 18,
        height: 27.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 16
    }, {
        id: 231,
        x: 430.5,
        y: 99,
        width: 16.5,
        height: 27.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14
    }, {
        id: 316,
        x: 448,
        y: 99,
        width: 14.5,
        height: 27.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 11.5
    }, {
        id: 291,
        x: 463.5,
        y: 99,
        width: 17.5,
        height: 27.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 15
    }, {
        id: 329,
        x: 482,
        y: 99,
        width: 18.5,
        height: 27.5,
        xoffset: -2.5,
        yoffset: 2.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 355,
        x: 1,
        y: 130,
        width: 16.5,
        height: 27.5,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 13.5
    }, {
        id: 345,
        x: 18.5,
        y: 130,
        width: 18,
        height: 27,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 16
    }, {
        id: 317,
        x: 37.5,
        y: 130,
        width: 20,
        height: 27,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 17
    }, {
        id: 331,
        x: 58.5,
        y: 130,
        width: 16,
        height: 27,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 326,
        x: 75.5,
        y: 130,
        width: 16,
        height: 27,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 309,
        x: 92.5,
        y: 130,
        width: 16.5,
        height: 26.5,
        xoffset: -1,
        yoffset: 4,
        page: 0,
        xadvance: 12.5
    }, {
        id: 271,
        x: 110,
        y: 130,
        width: 16.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 81,
        x: 127.5,
        y: 130,
        width: 22.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 18.5
    }, {
        id: 328,
        x: 151,
        y: 130,
        width: 16,
        height: 26.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 244,
        x: 168,
        y: 130,
        width: 17.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 15
    }, {
        id: 229,
        x: 186.5,
        y: 130,
        width: 18,
        height: 26.5,
        xoffset: -.5,
        yoffset: 4,
        page: 0,
        xadvance: 14.5
    }, {
        id: 226,
        x: 205.5,
        y: 130,
        width: 18,
        height: 26.5,
        xoffset: -.5,
        yoffset: 3.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 234,
        x: 224.5,
        y: 130,
        width: 15,
        height: 26,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 13
    }, {
        id: 251,
        x: 240.5,
        y: 130,
        width: 16.5,
        height: 26,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 14
    }, {
        id: 228,
        x: 258,
        y: 130,
        width: 18,
        height: 26,
        xoffset: -.5,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 367,
        x: 277,
        y: 130,
        width: 16.5,
        height: 26,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 14
    }, {
        id: 259,
        x: 294.5,
        y: 130,
        width: 18,
        height: 26,
        xoffset: -.5,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 227,
        x: 313.5,
        y: 130,
        width: 18,
        height: 26,
        xoffset: -.5,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 357,
        x: 332.5,
        y: 130,
        width: 16.5,
        height: 26,
        xoffset: -.5,
        yoffset: 3.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 265,
        x: 350,
        y: 130,
        width: 16.5,
        height: 26,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 14
    }, {
        id: 285,
        x: 367.5,
        y: 130,
        width: 17.5,
        height: 26,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 15
    }, {
        id: 353,
        x: 386,
        y: 130,
        width: 14,
        height: 26,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 238,
        x: 401,
        y: 130,
        width: 13,
        height: 26,
        xoffset: -.5,
        yoffset: 3.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 269,
        x: 415,
        y: 130,
        width: 16.5,
        height: 26,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 14
    }, {
        id: 283,
        x: 432.5,
        y: 130,
        width: 15,
        height: 26,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 13
    }, {
        id: 369,
        x: 448.5,
        y: 130,
        width: 16.5,
        height: 26,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 14
    }, {
        id: 373,
        x: 466,
        y: 130,
        width: 23,
        height: 26,
        xoffset: -.5,
        yoffset: 3.5,
        page: 0,
        xadvance: 20
    }, {
        id: 37,
        x: 1,
        y: 159.5,
        width: 24,
        height: 26,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 349,
        x: 26,
        y: 159.5,
        width: 14,
        height: 26,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 375,
        x: 41,
        y: 159.5,
        width: 17.5,
        height: 26,
        xoffset: -1,
        yoffset: 3.5,
        page: 0,
        xadvance: 14
    }, {
        id: 382,
        x: 59.5,
        y: 159.5,
        width: 16,
        height: 26,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 341,
        x: 76.5,
        y: 159.5,
        width: 18,
        height: 26,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 16
    }, {
        id: 293,
        x: 95.5,
        y: 159.5,
        width: 18.5,
        height: 26,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 17
    }, {
        id: 337,
        x: 115,
        y: 159.5,
        width: 17.5,
        height: 26,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 15
    }, {
        id: 1105,
        x: 133.5,
        y: 159.5,
        width: 15,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 13
    }, {
        id: 279,
        x: 149.5,
        y: 159.5,
        width: 15,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 13
    }, {
        id: 361,
        x: 165.5,
        y: 159.5,
        width: 16.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 245,
        x: 183,
        y: 159.5,
        width: 17.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 243,
        x: 201.5,
        y: 159.5,
        width: 17.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 216,
        x: 220,
        y: 159.5,
        width: 21,
        height: 25.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 18.5
    }, {
        id: 277,
        x: 242,
        y: 159.5,
        width: 15,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 13
    }, {
        id: 236,
        x: 258,
        y: 159.5,
        width: 11.5,
        height: 25.5,
        xoffset: -.5,
        yoffset: 4.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 237,
        x: 270.5,
        y: 159.5,
        width: 12,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 255,
        x: 283.5,
        y: 159.5,
        width: 17.5,
        height: 25.5,
        xoffset: -1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 281,
        x: 302,
        y: 159.5,
        width: 15,
        height: 25.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 13
    }, {
        id: 324,
        x: 318,
        y: 159.5,
        width: 16,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 289,
        x: 335,
        y: 159.5,
        width: 17.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 224,
        x: 353.5,
        y: 159.5,
        width: 18,
        height: 25.5,
        xoffset: -.5,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 225,
        x: 372.5,
        y: 159.5,
        width: 18,
        height: 25.5,
        xoffset: -.5,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 267,
        x: 391.5,
        y: 159.5,
        width: 16.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 297,
        x: 409,
        y: 159.5,
        width: 13,
        height: 25.5,
        xoffset: -1,
        yoffset: 4.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 380,
        x: 423,
        y: 159.5,
        width: 16,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 378,
        x: 440,
        y: 159.5,
        width: 16,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 301,
        x: 457,
        y: 159.5,
        width: 12.5,
        height: 25.5,
        xoffset: -.5,
        yoffset: 4.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 263,
        x: 470.5,
        y: 159.5,
        width: 16.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 232,
        x: 488,
        y: 159.5,
        width: 15,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 13
    }, {
        id: 233,
        x: 1,
        y: 187.5,
        width: 15,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 13
    }, {
        id: 371,
        x: 17,
        y: 187.5,
        width: 16.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14
    }, {
        id: 235,
        x: 34.5,
        y: 187.5,
        width: 15,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 13
    }, {
        id: 253,
        x: 50.5,
        y: 187.5,
        width: 17.5,
        height: 25.5,
        xoffset: -1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 261,
        x: 69,
        y: 187.5,
        width: 18,
        height: 25.5,
        xoffset: -.5,
        yoffset: 10.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 365,
        x: 88,
        y: 187.5,
        width: 16.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 239,
        x: 105.5,
        y: 187.5,
        width: 14,
        height: 25.5,
        xoffset: -1,
        yoffset: 4.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 303,
        x: 120.5,
        y: 187.5,
        width: 11,
        height: 25.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 9.5
    }, {
        id: 241,
        x: 132.5,
        y: 187.5,
        width: 16,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 242,
        x: 149.5,
        y: 187.5,
        width: 17.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 287,
        x: 168,
        y: 187.5,
        width: 17.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 347,
        x: 186.5,
        y: 187.5,
        width: 14,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 249,
        x: 201.5,
        y: 187.5,
        width: 16.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 246,
        x: 219,
        y: 187.5,
        width: 17.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 314,
        x: 237.5,
        y: 187.5,
        width: 14.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 250,
        x: 253,
        y: 187.5,
        width: 16.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 335,
        x: 270.5,
        y: 187.5,
        width: 17.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 252,
        x: 289,
        y: 187.5,
        width: 16.5,
        height: 25.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1081,
        x: 306.5,
        y: 187.5,
        width: 16,
        height: 25,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 54,
        x: 323.5,
        y: 187.5,
        width: 18,
        height: 25,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 15
    }, {
        id: 57,
        x: 342.5,
        y: 187.5,
        width: 17.5,
        height: 25,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 15
    }, {
        id: 33,
        x: 361,
        y: 187.5,
        width: 12.5,
        height: 25,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 36,
        x: 374.5,
        y: 187.5,
        width: 13.5,
        height: 25,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 11
    }, {
        id: 1071,
        x: 389,
        y: 187.5,
        width: 21.5,
        height: 25,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 19.5
    }, {
        id: 82,
        x: 411.5,
        y: 187.5,
        width: 21.5,
        height: 25,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 19.5
    }, {
        id: 257,
        x: 434,
        y: 187.5,
        width: 18,
        height: 24.5,
        xoffset: -.5,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 83,
        x: 453,
        y: 187.5,
        width: 16,
        height: 24.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 66,
        x: 470,
        y: 187.5,
        width: 20,
        height: 24.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 275,
        x: 491,
        y: 187.5,
        width: 15,
        height: 24.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 13
    }, {
        id: 363,
        x: 1,
        y: 215,
        width: 16.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 333,
        x: 18.5,
        y: 215,
        width: 17.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 15
    }, {
        id: 1046,
        x: 37,
        y: 215,
        width: 30,
        height: 24.5,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 26.5
    }, {
        id: 299,
        x: 68,
        y: 215,
        width: 13,
        height: 24.5,
        xoffset: -.5,
        yoffset: 5.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 50,
        x: 82,
        y: 215,
        width: 16.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 51,
        x: 99.5,
        y: 215,
        width: 17,
        height: 24.5,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 1047,
        x: 117.5,
        y: 215,
        width: 17,
        height: 24.5,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 53,
        x: 135.5,
        y: 215,
        width: 17,
        height: 24.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 56,
        x: 153.5,
        y: 215,
        width: 18,
        height: 24.5,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 15
    }, {
        id: 1042,
        x: 172.5,
        y: 215,
        width: 20,
        height: 24.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 272,
        x: 193.5,
        y: 215,
        width: 21,
        height: 24,
        xoffset: -1,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1070,
        x: 215.5,
        y: 215,
        width: 30,
        height: 24,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 28.5
    }, {
        id: 1076,
        x: 246.5,
        y: 215,
        width: 23,
        height: 24,
        xoffset: -1,
        yoffset: 10,
        page: 0,
        xadvance: 19
    }, {
        id: 208,
        x: 270.5,
        y: 215,
        width: 21,
        height: 24,
        xoffset: -1,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1061,
        x: 292.5,
        y: 215,
        width: 21,
        height: 24,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17
    }, {
        id: 90,
        x: 314.5,
        y: 215,
        width: 18.5,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 16
    }, {
        id: 1094,
        x: 334,
        y: 215,
        width: 19.5,
        height: 24,
        xoffset: .5,
        yoffset: 10,
        page: 0,
        xadvance: 16.5
    }, {
        id: 48,
        x: 354.5,
        y: 215,
        width: 21,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 18.5
    }, {
        id: 1041,
        x: 376.5,
        y: 215,
        width: 20.5,
        height: 24,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 18.5
    }, {
        id: 1097,
        x: 398,
        y: 215,
        width: 25.5,
        height: 24,
        xoffset: .5,
        yoffset: 10,
        page: 0,
        xadvance: 23
    }, {
        id: 1069,
        x: 424.5,
        y: 215,
        width: 19,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 17
    }, {
        id: 71,
        x: 444.5,
        y: 215,
        width: 21,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 18
    }, {
        id: 1068,
        x: 466.5,
        y: 215,
        width: 21.5,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 19
    }, {
        id: 1050,
        x: 1,
        y: 241.5,
        width: 22,
        height: 24,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 19
    }, {
        id: 64,
        x: 24,
        y: 241.5,
        width: 21.5,
        height: 24,
        xoffset: -.5,
        yoffset: 7,
        page: 0,
        xadvance: 18.5
    }, {
        id: 358,
        x: 46.5,
        y: 241.5,
        width: 19.5,
        height: 24,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 16
    }, {
        id: 1051,
        x: 67,
        y: 241.5,
        width: 27.5,
        height: 24,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 24.5
    }, {
        id: 38,
        x: 95.5,
        y: 241.5,
        width: 18.5,
        height: 24,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1067,
        x: 115,
        y: 241.5,
        width: 32,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 30
    }, {
        id: 1054,
        x: 148,
        y: 241.5,
        width: 21,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 18.5
    }, {
        id: 1066,
        x: 170,
        y: 241.5,
        width: 24.5,
        height: 24,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 21.5
    }, {
        id: 67,
        x: 195.5,
        y: 241.5,
        width: 19,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 17
    }, {
        id: 1058,
        x: 215.5,
        y: 241.5,
        width: 19.5,
        height: 24,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 16
    }, {
        id: 68,
        x: 236,
        y: 241.5,
        width: 19.5,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 17
    }, {
        id: 1056,
        x: 256.5,
        y: 241.5,
        width: 21.5,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 19
    }, {
        id: 8364,
        x: 279,
        y: 241.5,
        width: 20.5,
        height: 24,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 17
    }, {
        id: 75,
        x: 300.5,
        y: 241.5,
        width: 22,
        height: 24,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 19
    }, {
        id: 1057,
        x: 323.5,
        y: 241.5,
        width: 19,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 17
    }, {
        id: 80,
        x: 343.5,
        y: 241.5,
        width: 21.5,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 19
    }, {
        id: 55,
        x: 366,
        y: 241.5,
        width: 18,
        height: 24,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 15
    }, {
        id: 79,
        x: 385,
        y: 241.5,
        width: 21,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 18.5
    }, {
        id: 1059,
        x: 407,
        y: 241.5,
        width: 21,
        height: 24,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17
    }, {
        id: 88,
        x: 429,
        y: 241.5,
        width: 21,
        height: 24,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17
    }, {
        id: 74,
        x: 451,
        y: 241.5,
        width: 18.5,
        height: 24,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 306,
        x: 470.5,
        y: 241.5,
        width: 28.5,
        height: 24,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 26.5
    }, {
        id: 84,
        x: 1,
        y: 267.5,
        width: 19.5,
        height: 24,
        xoffset: -.5,
        yoffset: 6,
        page: 0,
        xadvance: 16
    }, {
        id: 338,
        x: 21.5,
        y: 267.5,
        width: 26.5,
        height: 24,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 23.5
    }, {
        id: 1043,
        x: 49,
        y: 267.5,
        width: 17,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1064,
        x: 67,
        y: 267.5,
        width: 30,
        height: 23.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 28.5
    }, {
        id: 85,
        x: 98,
        y: 267.5,
        width: 19.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17
    }, {
        id: 222,
        x: 118.5,
        y: 267.5,
        width: 22.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 20
    }, {
        id: 89,
        x: 142,
        y: 267.5,
        width: 20.5,
        height: 23.5,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 198,
        x: 163.5,
        y: 267.5,
        width: 27,
        height: 23.5,
        xoffset: -1.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 1063,
        x: 191.5,
        y: 267.5,
        width: 19.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17
    }, {
        id: 86,
        x: 212,
        y: 267.5,
        width: 18.5,
        height: 23.5,
        xoffset: -1,
        yoffset: 6,
        page: 0,
        xadvance: 15
    }, {
        id: 1040,
        x: 231.5,
        y: 267.5,
        width: 21.5,
        height: 23.5,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 318,
        x: 254,
        y: 267.5,
        width: 18,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 319,
        x: 273,
        y: 267.5,
        width: 17.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 294,
        x: 291.5,
        y: 267.5,
        width: 22.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 20.5
    }, {
        id: 321,
        x: 315,
        y: 267.5,
        width: 18.5,
        height: 23.5,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 87,
        x: 334.5,
        y: 267.5,
        width: 28,
        height: 23.5,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 24.5
    }, {
        id: 76,
        x: 363.5,
        y: 267.5,
        width: 17,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1053,
        x: 381.5,
        y: 267.5,
        width: 22.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 20.5
    }, {
        id: 65,
        x: 405,
        y: 267.5,
        width: 21.5,
        height: 23.5,
        xoffset: -1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 78,
        x: 427.5,
        y: 267.5,
        width: 19,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1052,
        x: 447.5,
        y: 267.5,
        width: 22.5,
        height: 23.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 21
    }, {
        id: 77,
        x: 471,
        y: 267.5,
        width: 22.5,
        height: 23.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 21
    }, {
        id: 1045,
        x: 1,
        y: 293.5,
        width: 17.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1060,
        x: 19.5,
        y: 293.5,
        width: 23.5,
        height: 23.5,
        xoffset: -.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 20.5
    }, {
        id: 72,
        x: 44,
        y: 293.5,
        width: 22.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 20.5
    }, {
        id: 70,
        x: 67.5,
        y: 293.5,
        width: 17.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 15
    }, {
        id: 52,
        x: 86,
        y: 293.5,
        width: 19.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 73,
        x: 106.5,
        y: 293.5,
        width: 12.5,
        height: 23.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 11
    }, {
        id: 1048,
        x: 120,
        y: 293.5,
        width: 19,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 49,
        x: 140,
        y: 293.5,
        width: 12.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 11
    }, {
        id: 69,
        x: 153.5,
        y: 293.5,
        width: 17.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1055,
        x: 172,
        y: 293.5,
        width: 22.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 20.5
    }, {
        id: 35,
        x: 195.5,
        y: 293.5,
        width: 17,
        height: 23,
        xoffset: -.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 383,
        x: 213.5,
        y: 293.5,
        width: 12,
        height: 23,
        xoffset: 3,
        yoffset: 6.5,
        page: 0,
        xadvance: 12
    }, {
        id: 247,
        x: 226.5,
        y: 293.5,
        width: 16.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 14
    }, {
        id: 113,
        x: 244,
        y: 293.5,
        width: 19,
        height: 22,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 59,
        x: 264,
        y: 293.5,
        width: 11.5,
        height: 21.5,
        xoffset: 0,
        yoffset: 12,
        page: 0,
        xadvance: 9.5
    }, {
        id: 248,
        x: 276.5,
        y: 293.5,
        width: 17.5,
        height: 21,
        xoffset: 0,
        yoffset: 9.5,
        page: 0,
        xadvance: 15
    }, {
        id: 114,
        x: 295,
        y: 293.5,
        width: 18,
        height: 21,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 16
    }, {
        id: 1103,
        x: 314,
        y: 293.5,
        width: 18,
        height: 21,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 16
    }, {
        id: 1078,
        x: 333,
        y: 293.5,
        width: 24.5,
        height: 20.5,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 21.5
    }, {
        id: 98,
        x: 358.5,
        y: 293.5,
        width: 17,
        height: 20.5,
        xoffset: -.5,
        yoffset: 9.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1074,
        x: 376.5,
        y: 293.5,
        width: 17,
        height: 20.5,
        xoffset: -.5,
        yoffset: 9.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1079,
        x: 394.5,
        y: 293.5,
        width: 14.5,
        height: 20.5,
        xoffset: -1,
        yoffset: 10,
        page: 0,
        xadvance: 11
    }, {
        id: 99,
        x: 410,
        y: 293.5,
        width: 16.5,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14
    }, {
        id: 100,
        x: 427.5,
        y: 293.5,
        width: 16.5,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 322,
        x: 445,
        y: 293.5,
        width: 15.5,
        height: 20,
        xoffset: -1,
        yoffset: 10,
        page: 0,
        xadvance: 12
    }, {
        id: 339,
        x: 461.5,
        y: 293.5,
        width: 22,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 19.5
    }, {
        id: 115,
        x: 484.5,
        y: 293.5,
        width: 14,
        height: 20,
        xoffset: 0,
        yoffset: 9.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 112,
        x: 1,
        y: 319,
        width: 18,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1102,
        x: 20,
        y: 319,
        width: 25,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 23
    }, {
        id: 108,
        x: 46,
        y: 319,
        width: 14.5,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 11.5
    }, {
        id: 106,
        x: 61.5,
        y: 319,
        width: 16,
        height: 20,
        xoffset: -1,
        yoffset: 10.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1101,
        x: 78.5,
        y: 319,
        width: 16,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 13.5
    }, {
        id: 111,
        x: 95.5,
        y: 319,
        width: 17.5,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 15
    }, {
        id: 320,
        x: 114,
        y: 319,
        width: 16,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 13
    }, {
        id: 307,
        x: 131,
        y: 319,
        width: 24,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 22
    }, {
        id: 240,
        x: 156,
        y: 319,
        width: 17.5,
        height: 20,
        xoffset: -1,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 312,
        x: 174.5,
        y: 319,
        width: 18.5,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 15
    }, {
        id: 103,
        x: 194,
        y: 319,
        width: 17.5,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 15
    }, {
        id: 1098,
        x: 212.5,
        y: 319,
        width: 20.5,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 17.5
    }, {
        id: 116,
        x: 234,
        y: 319,
        width: 16.5,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 13.5
    }, {
        id: 273,
        x: 251.5,
        y: 319,
        width: 17.5,
        height: 20,
        xoffset: -1,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1096,
        x: 270,
        y: 319,
        width: 24.5,
        height: 20,
        xoffset: .5,
        yoffset: 10,
        page: 0,
        xadvance: 23
    }, {
        id: 119,
        x: 295.5,
        y: 319,
        width: 23,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 20
    }, {
        id: 120,
        x: 319.5,
        y: 319,
        width: 17.5,
        height: 20,
        xoffset: -1,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1095,
        x: 338,
        y: 319,
        width: 16.5,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 13.5
    }, {
        id: 107,
        x: 355.5,
        y: 319,
        width: 18.5,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1080,
        x: 375,
        y: 319,
        width: 16,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14
    }, {
        id: 1093,
        x: 392,
        y: 319,
        width: 17.5,
        height: 20,
        xoffset: -1,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1092,
        x: 410.5,
        y: 319,
        width: 19.5,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 16.5
    }, {
        id: 1100,
        x: 431,
        y: 319,
        width: 18,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 15
    }, {
        id: 1091,
        x: 450,
        y: 319,
        width: 17.5,
        height: 20,
        xoffset: -1,
        yoffset: 10.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 122,
        x: 468.5,
        y: 319,
        width: 16,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 13.5
    }, {
        id: 359,
        x: 485.5,
        y: 319,
        width: 16.5,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1090,
        x: 1,
        y: 341,
        width: 16.5,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1086,
        x: 18.5,
        y: 341,
        width: 17.5,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 15
    }, {
        id: 1073,
        x: 37,
        y: 341,
        width: 17,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1089,
        x: 55,
        y: 341,
        width: 16.5,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14
    }, {
        id: 1088,
        x: 72.5,
        y: 341,
        width: 18,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1083,
        x: 91.5,
        y: 341,
        width: 23,
        height: 20,
        xoffset: -1,
        yoffset: 10,
        page: 0,
        xadvance: 19.5
    }, {
        id: 223,
        x: 115.5,
        y: 341,
        width: 25,
        height: 20,
        xoffset: 0,
        yoffset: 9.5,
        page: 0,
        xadvance: 23
    }, {
        id: 1087,
        x: 141.5,
        y: 341,
        width: 19,
        height: 20,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 16.5
    }, {
        id: 1082,
        x: 161.5,
        y: 341,
        width: 18.5,
        height: 20,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 15
    }, {
        id: 254,
        x: 181,
        y: 341,
        width: 18.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 305,
        x: 200.5,
        y: 341,
        width: 11,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 9.5
    }, {
        id: 117,
        x: 212.5,
        y: 341,
        width: 16.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14
    }, {
        id: 1077,
        x: 230,
        y: 341,
        width: 15,
        height: 19.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 13
    }, {
        id: 1099,
        x: 246,
        y: 341,
        width: 11,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 9.5
    }, {
        id: 118,
        x: 258,
        y: 341,
        width: 16,
        height: 19.5,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 12.5
    }, {
        id: 104,
        x: 275,
        y: 341,
        width: 18.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 17
    }, {
        id: 230,
        x: 294.5,
        y: 341,
        width: 22,
        height: 19.5,
        xoffset: -.5,
        yoffset: 10.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 97,
        x: 317.5,
        y: 341,
        width: 18,
        height: 19.5,
        xoffset: -.5,
        yoffset: 10.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1072,
        x: 336.5,
        y: 341,
        width: 18,
        height: 19.5,
        xoffset: -.5,
        yoffset: 10.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 58,
        x: 355.5,
        y: 341,
        width: 11.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 12,
        page: 0,
        xadvance: 9.5
    }, {
        id: 121,
        x: 368,
        y: 341,
        width: 17.5,
        height: 19.5,
        xoffset: -1,
        yoffset: 10,
        page: 0,
        xadvance: 14
    }, {
        id: 105,
        x: 386.5,
        y: 341,
        width: 11,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 9.5
    }, {
        id: 295,
        x: 398.5,
        y: 341,
        width: 18.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 17
    }, {
        id: 1075,
        x: 418,
        y: 341,
        width: 14.5,
        height: 19.5,
        xoffset: -.5,
        yoffset: 10,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1084,
        x: 433.5,
        y: 341,
        width: 19,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 17.5
    }, {
        id: 102,
        x: 453.5,
        y: 341,
        width: 15,
        height: 19.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1085,
        x: 469.5,
        y: 341,
        width: 18.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 17
    }, {
        id: 110,
        x: 489,
        y: 341,
        width: 16,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 14.5
    }, {
        id: 101,
        x: 1,
        y: 363,
        width: 15,
        height: 19.5,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 13
    }, {
        id: 109,
        x: 17,
        y: 363,
        width: 19,
        height: 19.5,
        xoffset: 0,
        yoffset: 10,
        page: 0,
        xadvance: 17.5
    }, {
        id: 42,
        x: 37,
        y: 363,
        width: 16.5,
        height: 17.5,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 14.5
    }, {
        id: 43,
        x: 54.5,
        y: 363,
        width: 16.5,
        height: 16,
        xoffset: 0,
        yoffset: 10.5,
        page: 0,
        xadvance: 14
    }, {
        id: 215,
        x: 72,
        y: 363,
        width: 14.5,
        height: 14.5,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 8226,
        x: 87.5,
        y: 363,
        width: 13.5,
        height: 13.5,
        xoffset: 0,
        yoffset: 11.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 8217,
        x: 102,
        y: 363,
        width: 11,
        height: 13,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 8220,
        x: 114,
        y: 363,
        width: 19.5,
        height: 13,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 8216,
        x: 134.5,
        y: 363,
        width: 11,
        height: 13,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 8218,
        x: 146.5,
        y: 363,
        width: 11,
        height: 13,
        xoffset: 0,
        yoffset: 20.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 8222,
        x: 158.5,
        y: 363,
        width: 19.5,
        height: 13,
        xoffset: 0,
        yoffset: 20.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 39,
        x: 179,
        y: 363,
        width: 9,
        height: 13,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 7
    }, {
        id: 44,
        x: 189,
        y: 363,
        width: 11,
        height: 13,
        xoffset: 0,
        yoffset: 20.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 8221,
        x: 201,
        y: 363,
        width: 19.5,
        height: 13,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 34,
        x: 221.5,
        y: 363,
        width: 19,
        height: 13,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 17
    }, {
        id: 94,
        x: 241.5,
        y: 363,
        width: 13.5,
        height: 12.5,
        xoffset: -.5,
        yoffset: 6.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 8249,
        x: 256,
        y: 363,
        width: 11,
        height: 12,
        xoffset: -.5,
        yoffset: 13,
        page: 0,
        xadvance: 7.5
    }, {
        id: 8250,
        x: 268,
        y: 363,
        width: 11,
        height: 12,
        xoffset: -.5,
        yoffset: 13,
        page: 0,
        xadvance: 7.5
    }, {
        id: 61,
        x: 280,
        y: 363,
        width: 16.5,
        height: 12,
        xoffset: 0,
        yoffset: 12.5,
        page: 0,
        xadvance: 14
    }, {
        id: 8230,
        x: 297.5,
        y: 363,
        width: 33,
        height: 11,
        xoffset: .5,
        yoffset: 20.5,
        page: 0,
        xadvance: 32.5
    }, {
        id: 46,
        x: 331.5,
        y: 363,
        width: 11.5,
        height: 11,
        xoffset: 0,
        yoffset: 21,
        page: 0,
        xadvance: 9.5
    }, {
        id: 731,
        x: 344,
        y: 363,
        width: 10,
        height: 10.5,
        xoffset: -.5,
        yoffset: 25,
        page: 0,
        xadvance: 7.5
    }, {
        id: 733,
        x: 355,
        y: 363,
        width: 13,
        height: 9.5,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 11
    }, {
        id: 96,
        x: 369,
        y: 363,
        width: 10.5,
        height: 9,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 126,
        x: 380.5,
        y: 363,
        width: 16.5,
        height: 8.5,
        xoffset: 0,
        yoffset: 14.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 732,
        x: 398,
        y: 363,
        width: 13,
        height: 8.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 11
    }, {
        id: 95,
        x: 412,
        y: 363,
        width: 17.5,
        height: 7,
        xoffset: -1,
        yoffset: 26.5,
        page: 0,
        xadvance: 13
    }, {
        id: 8722,
        x: 430.5,
        y: 363,
        width: 16.5,
        height: 7,
        xoffset: 0,
        yoffset: 15,
        page: 0,
        xadvance: 14
    }, {
        id: 8211,
        x: 448,
        y: 363,
        width: 17.5,
        height: 7,
        xoffset: -.5,
        yoffset: 15.5,
        page: 0,
        xadvance: 14
    }, {
        id: 45,
        x: 466.5,
        y: 363,
        width: 12.5,
        height: 7,
        xoffset: -.5,
        yoffset: 15.5,
        page: 0,
        xadvance: 9
    }, {
        id: 8212,
        x: 480,
        y: 363,
        width: 25,
        height: 7,
        xoffset: -.5,
        yoffset: 15.5,
        page: 0,
        xadvance: 21
    }, {
        id: 32,
        x: 506,
        y: 363,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 26.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 32,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 26.5,
        page: 0,
        xadvance: 7.5
    }],
    font2 = [{
        id: 93,
        x: 1,
        y: 1,
        width: 8.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 125,
        x: 10.5,
        y: 1,
        width: 9.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 123,
        x: 21,
        y: 1,
        width: 9.5,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 91,
        x: 31.5,
        y: 1,
        width: 8.5,
        height: 26.5,
        xoffset: 2,
        yoffset: 2.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 350,
        x: 41,
        y: 1,
        width: 13,
        height: 26,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 354,
        x: 55,
        y: 1,
        width: 16,
        height: 25.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 344,
        x: 72,
        y: 1,
        width: 17.5,
        height: 25.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 16
    }, {
        id: 199,
        x: 90.5,
        y: 1,
        width: 15.5,
        height: 25.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 342,
        x: 107,
        y: 1,
        width: 17.5,
        height: 25.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 310,
        x: 125.5,
        y: 1,
        width: 18,
        height: 25.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 290,
        x: 144.5,
        y: 1,
        width: 17,
        height: 25.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 315,
        x: 162.5,
        y: 1,
        width: 14,
        height: 25.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 325,
        x: 177.5,
        y: 1,
        width: 15.5,
        height: 25,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 308,
        x: 194,
        y: 1,
        width: 15.5,
        height: 25,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 12.5
    }, {
        id: 330,
        x: 210.5,
        y: 1,
        width: 15.5,
        height: 25,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 258,
        x: 227,
        y: 1,
        width: 17,
        height: 24.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 284,
        x: 245,
        y: 1,
        width: 17,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 15
    }, {
        id: 381,
        x: 263,
        y: 1,
        width: 15,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 13
    }, {
        id: 374,
        x: 279,
        y: 1,
        width: 16.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 13.5
    }, {
        id: 372,
        x: 296.5,
        y: 1,
        width: 23,
        height: 24.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 20
    }, {
        id: 368,
        x: 320.5,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 366,
        x: 337,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 356,
        x: 353.5,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 13
    }, {
        id: 352,
        x: 370,
        y: 1,
        width: 13,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 11.5
    }, {
        id: 348,
        x: 384,
        y: 1,
        width: 13,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 11.5
    }, {
        id: 340,
        x: 398,
        y: 1,
        width: 17.5,
        height: 24.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 16
    }, {
        id: 336,
        x: 416.5,
        y: 1,
        width: 17,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 15
    }, {
        id: 327,
        x: 434.5,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14.5
    }, {
        id: 194,
        x: 451,
        y: 1,
        width: 17.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 14.5
    }, {
        id: 282,
        x: 469.5,
        y: 1,
        width: 14,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 12.5
    }, {
        id: 270,
        x: 484.5,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 268,
        x: 1,
        y: 29.5,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 206,
        x: 17.5,
        y: 29.5,
        width: 10.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 9
    }, {
        id: 264,
        x: 29,
        y: 29.5,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 219,
        x: 45.5,
        y: 29.5,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 212,
        x: 62,
        y: 29.5,
        width: 17,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 15
    }, {
        id: 197,
        x: 80,
        y: 29.5,
        width: 17.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 14.5
    }, {
        id: 202,
        x: 98.5,
        y: 29.5,
        width: 14,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 12.5
    }, {
        id: 196,
        x: 113.5,
        y: 29.5,
        width: 17,
        height: 24.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 195,
        x: 131.5,
        y: 29.5,
        width: 17,
        height: 24.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1025,
        x: 149.5,
        y: 29.5,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 266,
        x: 164.5,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 304,
        x: 181,
        y: 29.5,
        width: 10,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 211,
        x: 192,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 200,
        x: 210,
        y: 29.5,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 201,
        x: 225,
        y: 29.5,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 203,
        x: 240,
        y: 29.5,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 204,
        x: 255,
        y: 29.5,
        width: 10,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 41,
        x: 266,
        y: 29.5,
        width: 9,
        height: 24,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 8.5
    }, {
        id: 40,
        x: 276,
        y: 29.5,
        width: 9,
        height: 24,
        xoffset: 2.5,
        yoffset: 4,
        page: 0,
        xadvance: 8
    }, {
        id: 379,
        x: 286,
        y: 29.5,
        width: 15,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 13
    }, {
        id: 214,
        x: 302,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 376,
        x: 320,
        y: 29.5,
        width: 16.5,
        height: 24,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 205,
        x: 337.5,
        y: 29.5,
        width: 10,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 218,
        x: 348.5,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 364,
        x: 365,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 207,
        x: 381.5,
        y: 29.5,
        width: 11.5,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 360,
        x: 394,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 209,
        x: 410.5,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 334,
        x: 427,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 210,
        x: 445,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 193,
        x: 463,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 192,
        x: 481,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 296,
        x: 499,
        y: 29.5,
        width: 10.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 300,
        x: 1,
        y: 56,
        width: 10,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 213,
        x: 12,
        y: 56,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 262,
        x: 30,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 217,
        x: 46.5,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 276,
        x: 63,
        y: 56,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 313,
        x: 78,
        y: 56,
        width: 13.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 288,
        x: 92.5,
        y: 56,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 220,
        x: 110.5,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 221,
        x: 127,
        y: 56,
        width: 16.5,
        height: 24,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1049,
        x: 144.5,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 278,
        x: 161,
        y: 56,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 292,
        x: 176,
        y: 56,
        width: 18.5,
        height: 24,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 17
    }, {
        id: 323,
        x: 195.5,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 286,
        x: 212,
        y: 56,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 1062,
        x: 230,
        y: 56,
        width: 19,
        height: 23.5,
        xoffset: 1.5,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 377,
        x: 250,
        y: 56,
        width: 15,
        height: 23.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 13
    }, {
        id: 1065,
        x: 266,
        y: 56,
        width: 25,
        height: 23.5,
        xoffset: 1.5,
        yoffset: 5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 370,
        x: 292,
        y: 56,
        width: 15.5,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1044,
        x: 308.5,
        y: 56,
        width: 22.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 346,
        x: 332,
        y: 56,
        width: 13,
        height: 23.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 302,
        x: 346,
        y: 56,
        width: 10,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 9
    }, {
        id: 124,
        x: 357,
        y: 56,
        width: 6.5,
        height: 23.5,
        xoffset: 1.5,
        yoffset: 4.5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 260,
        x: 364.5,
        y: 56,
        width: 17,
        height: 23.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 280,
        x: 382.5,
        y: 56,
        width: 14,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 298,
        x: 397.5,
        y: 56,
        width: 10.5,
        height: 23,
        xoffset: 1,
        yoffset: 1.5,
        page: 0,
        xadvance: 9
    }, {
        id: 362,
        x: 409,
        y: 56,
        width: 15.5,
        height: 23,
        xoffset: 1,
        yoffset: 1.5,
        page: 0,
        xadvance: 14
    }, {
        id: 274,
        x: 425.5,
        y: 56,
        width: 14,
        height: 23,
        xoffset: 1,
        yoffset: 1.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 256,
        x: 440.5,
        y: 56,
        width: 17.5,
        height: 23,
        xoffset: 0,
        yoffset: 1.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 332,
        x: 459,
        y: 56,
        width: 17,
        height: 23,
        xoffset: .5,
        yoffset: 1.5,
        page: 0,
        xadvance: 15
    }, {
        id: 291,
        x: 477,
        y: 56,
        width: 14,
        height: 22.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 63,
        x: 492,
        y: 56,
        width: 13,
        height: 22.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 11
    }, {
        id: 47,
        x: 1,
        y: 82,
        width: 15.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 351,
        x: 17.5,
        y: 82,
        width: 11,
        height: 22.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 9.5
    }, {
        id: 92,
        x: 29.5,
        y: 82,
        width: 15.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 329,
        x: 46,
        y: 82,
        width: 15,
        height: 22.5,
        xoffset: -1,
        yoffset: 2,
        page: 0,
        xadvance: 12
    }, {
        id: 231,
        x: 62,
        y: 82,
        width: 13,
        height: 22.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11.5
    }, {
        id: 355,
        x: 76,
        y: 82,
        width: 13,
        height: 22.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 343,
        x: 90,
        y: 82,
        width: 14.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 13.5
    }, {
        id: 317,
        x: 105.5,
        y: 82,
        width: 16.5,
        height: 22,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 14
    }, {
        id: 316,
        x: 123,
        y: 82,
        width: 11.5,
        height: 22,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 345,
        x: 135.5,
        y: 82,
        width: 14.5,
        height: 22,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 13.5
    }, {
        id: 326,
        x: 151,
        y: 82,
        width: 13,
        height: 22,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 311,
        x: 165,
        y: 82,
        width: 15,
        height: 22,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 13
    }, {
        id: 331,
        x: 181,
        y: 82,
        width: 13,
        height: 22,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 265,
        x: 195,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 269,
        x: 209,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 271,
        x: 223,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 251,
        x: 237,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 226,
        x: 251,
        y: 82,
        width: 14.5,
        height: 21.5,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 12
    }, {
        id: 341,
        x: 266.5,
        y: 82,
        width: 14.5,
        height: 21.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 283,
        x: 282,
        y: 82,
        width: 12.5,
        height: 21.5,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 10.5
    }, {
        id: 328,
        x: 295.5,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 12
    }, {
        id: 309,
        x: 309.5,
        y: 82,
        width: 13.5,
        height: 21.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 349,
        x: 324,
        y: 82,
        width: 11,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 9.5
    }, {
        id: 234,
        x: 336,
        y: 82,
        width: 12.5,
        height: 21.5,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 10.5
    }, {
        id: 353,
        x: 349.5,
        y: 82,
        width: 11,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 9.5
    }, {
        id: 229,
        x: 361.5,
        y: 82,
        width: 14.5,
        height: 21.5,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 12
    }, {
        id: 357,
        x: 377,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11
    }, {
        id: 81,
        x: 391,
        y: 82,
        width: 18,
        height: 21.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 375,
        x: 410,
        y: 82,
        width: 14,
        height: 21.5,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 244,
        x: 425,
        y: 82,
        width: 14,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 12.5
    }, {
        id: 238,
        x: 440,
        y: 82,
        width: 10.5,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 7.5
    }, {
        id: 1105,
        x: 451.5,
        y: 82,
        width: 12,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 279,
        x: 464.5,
        y: 82,
        width: 12,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 335,
        x: 477.5,
        y: 82,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 365,
        x: 492.5,
        y: 82,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 277,
        x: 1,
        y: 106.5,
        width: 12.5,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 37,
        x: 14.5,
        y: 106.5,
        width: 19.5,
        height: 21,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 18
    }, {
        id: 285,
        x: 35,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 255,
        x: 50.5,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 289,
        x: 66,
        y: 106.5,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 293,
        x: 81,
        y: 106.5,
        width: 15.5,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 14
    }, {
        id: 267,
        x: 97.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 297,
        x: 111.5,
        y: 106.5,
        width: 10.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 301,
        x: 123,
        y: 106.5,
        width: 10,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 8
    }, {
        id: 382,
        x: 134,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11
    }, {
        id: 361,
        x: 148,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 259,
        x: 162,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 227,
        x: 177.5,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 228,
        x: 193,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 373,
        x: 208.5,
        y: 106.5,
        width: 19,
        height: 21,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 16.5
    }, {
        id: 252,
        x: 228.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 369,
        x: 242.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 367,
        x: 256.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 241,
        x: 270.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 239,
        x: 284.5,
        y: 106.5,
        width: 11.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 246,
        x: 297,
        y: 106.5,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 235,
        x: 312,
        y: 106.5,
        width: 12,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 245,
        x: 325,
        y: 106.5,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 337,
        x: 340,
        y: 106.5,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 380,
        x: 355,
        y: 106.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 216,
        x: 369,
        y: 106.5,
        width: 17,
        height: 20.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 378,
        x: 387,
        y: 106.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 371,
        x: 401,
        y: 106.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 225,
        x: 415,
        y: 106.5,
        width: 14.5,
        height: 20.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 233,
        x: 430.5,
        y: 106.5,
        width: 12,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 347,
        x: 443.5,
        y: 106.5,
        width: 11,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 57,
        x: 455.5,
        y: 106.5,
        width: 14,
        height: 20.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 236,
        x: 470.5,
        y: 106.5,
        width: 9.5,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 237,
        x: 481,
        y: 106.5,
        width: 9.5,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 232,
        x: 491.5,
        y: 106.5,
        width: 12,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 224,
        x: 1,
        y: 129.5,
        width: 14.5,
        height: 20.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 33,
        x: 16.5,
        y: 129.5,
        width: 11,
        height: 20.5,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1081,
        x: 28.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 11.5
    }, {
        id: 242,
        x: 42.5,
        y: 129.5,
        width: 14,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 243,
        x: 57.5,
        y: 129.5,
        width: 14,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 261,
        x: 72.5,
        y: 129.5,
        width: 14.5,
        height: 20.5,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 314,
        x: 88,
        y: 129.5,
        width: 11.5,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 263,
        x: 100.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1071,
        x: 114.5,
        y: 129.5,
        width: 17.5,
        height: 20.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 253,
        x: 133,
        y: 129.5,
        width: 14.5,
        height: 20.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 249,
        x: 148.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 250,
        x: 162.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 324,
        x: 176.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 303,
        x: 190.5,
        y: 129.5,
        width: 9,
        height: 20.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 287,
        x: 200.5,
        y: 129.5,
        width: 14.5,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 82,
        x: 216,
        y: 129.5,
        width: 17.5,
        height: 20.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 281,
        x: 234.5,
        y: 129.5,
        width: 12,
        height: 20.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1046,
        x: 247.5,
        y: 129.5,
        width: 24.5,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 22
    }, {
        id: 257,
        x: 273,
        y: 129.5,
        width: 14.5,
        height: 20,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 12
    }, {
        id: 1050,
        x: 288.5,
        y: 129.5,
        width: 18,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1047,
        x: 307.5,
        y: 129.5,
        width: 14,
        height: 20,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 75,
        x: 322.5,
        y: 129.5,
        width: 18,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 66,
        x: 341.5,
        y: 129.5,
        width: 16,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 50,
        x: 358.5,
        y: 129.5,
        width: 13.5,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 363,
        x: 373,
        y: 129.5,
        width: 13,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 299,
        x: 387,
        y: 129.5,
        width: 10.5,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 8
    }, {
        id: 51,
        x: 398.5,
        y: 129.5,
        width: 14,
        height: 20,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 333,
        x: 413.5,
        y: 129.5,
        width: 14,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 54,
        x: 428.5,
        y: 129.5,
        width: 14.5,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 275,
        x: 444,
        y: 129.5,
        width: 12,
        height: 20,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 56,
        x: 457,
        y: 129.5,
        width: 14.5,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 12
    }, {
        id: 36,
        x: 472.5,
        y: 129.5,
        width: 11,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 9
    }, {
        id: 1042,
        x: 484.5,
        y: 129.5,
        width: 16,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1070,
        x: 1,
        y: 152,
        width: 24.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 1056,
        x: 26.5,
        y: 152,
        width: 17.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 208,
        x: 45,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 272,
        x: 63,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1040,
        x: 81,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1041,
        x: 99,
        y: 152,
        width: 16.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 83,
        x: 116.5,
        y: 152,
        width: 13,
        height: 19.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 306,
        x: 130.5,
        y: 152,
        width: 23,
        height: 19.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 1061,
        x: 154.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 65,
        x: 172.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1069,
        x: 190.5,
        y: 152,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 358,
        x: 207,
        y: 152,
        width: 16,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 1068,
        x: 224,
        y: 152,
        width: 17.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1053,
        x: 242.5,
        y: 152,
        width: 18.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 71,
        x: 262,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 1097,
        x: 280,
        y: 152,
        width: 20.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 19
    }, {
        id: 90,
        x: 301.5,
        y: 152,
        width: 15,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 1059,
        x: 317.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1054,
        x: 335.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 80,
        x: 353.5,
        y: 152,
        width: 17.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 88,
        x: 372,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 38,
        x: 390,
        y: 152,
        width: 15,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 294,
        x: 406,
        y: 152,
        width: 18.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 1064,
        x: 425.5,
        y: 152,
        width: 24,
        height: 19.5,
        xoffset: 1.5,
        yoffset: 5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 79,
        x: 450.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 64,
        x: 468.5,
        y: 152,
        width: 17.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 15.5
    }, {
        id: 67,
        x: 487,
        y: 152,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 1043,
        x: 1,
        y: 173.5,
        width: 14,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 74,
        x: 16,
        y: 173.5,
        width: 15.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 55,
        x: 32.5,
        y: 173.5,
        width: 14.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 84,
        x: 48,
        y: 173.5,
        width: 16,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 1058,
        x: 65,
        y: 173.5,
        width: 16,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 8364,
        x: 82,
        y: 173.5,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 53,
        x: 100,
        y: 173.5,
        width: 13.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 12
    }, {
        id: 1057,
        x: 114.5,
        y: 173.5,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 1066,
        x: 131,
        y: 173.5,
        width: 20,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 18
    }, {
        id: 338,
        x: 152,
        y: 173.5,
        width: 21.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1051,
        x: 174.5,
        y: 173.5,
        width: 22.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 20
    }, {
        id: 68,
        x: 198,
        y: 173.5,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 1076,
        x: 214.5,
        y: 173.5,
        width: 18.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1067,
        x: 234,
        y: 173.5,
        width: 26,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 24.5
    }, {
        id: 1094,
        x: 261,
        y: 173.5,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 72,
        x: 277.5,
        y: 173.5,
        width: 18.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 48,
        x: 297,
        y: 173.5,
        width: 17,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 318,
        x: 315,
        y: 173.5,
        width: 15,
        height: 19,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 12
    }, {
        id: 35,
        x: 331,
        y: 173.5,
        width: 14.5,
        height: 19,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 11
    }, {
        id: 85,
        x: 346.5,
        y: 173.5,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 319,
        x: 363,
        y: 173.5,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 89,
        x: 378,
        y: 173.5,
        width: 16.5,
        height: 19,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1052,
        x: 395.5,
        y: 173.5,
        width: 18.5,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 198,
        x: 415,
        y: 173.5,
        width: 21.5,
        height: 19,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 76,
        x: 437.5,
        y: 173.5,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1055,
        x: 452.5,
        y: 173.5,
        width: 18.5,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 78,
        x: 472,
        y: 173.5,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 77,
        x: 488.5,
        y: 173.5,
        width: 18.5,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 87,
        x: 1,
        y: 195,
        width: 23,
        height: 19,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 20
    }, {
        id: 86,
        x: 25,
        y: 195,
        width: 15,
        height: 19,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 12
    }, {
        id: 73,
        x: 41,
        y: 195,
        width: 10,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 9
    }, {
        id: 49,
        x: 52,
        y: 195,
        width: 10,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 9
    }, {
        id: 52,
        x: 63,
        y: 195,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 70,
        x: 79.5,
        y: 195,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 321,
        x: 94.5,
        y: 195,
        width: 15,
        height: 19,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 12
    }, {
        id: 69,
        x: 110.5,
        y: 195,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1045,
        x: 125.5,
        y: 195,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 222,
        x: 140.5,
        y: 195,
        width: 18,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 1060,
        x: 159.5,
        y: 195,
        width: 19,
        height: 19,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 17
    }, {
        id: 1063,
        x: 179.5,
        y: 195,
        width: 16,
        height: 19,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1048,
        x: 196.5,
        y: 195,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 247,
        x: 213,
        y: 195,
        width: 13.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 11.5
    }, {
        id: 383,
        x: 227.5,
        y: 195,
        width: 9.5,
        height: 18.5,
        xoffset: 3,
        yoffset: 5.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 113,
        x: 238,
        y: 195,
        width: 15,
        height: 18,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 248,
        x: 254,
        y: 195,
        width: 14.5,
        height: 17,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 59,
        x: 269.5,
        y: 195,
        width: 9.5,
        height: 17,
        xoffset: .5,
        yoffset: 10,
        page: 0,
        xadvance: 8
    }, {
        id: 114,
        x: 280,
        y: 195,
        width: 14.5,
        height: 17,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1103,
        x: 295.5,
        y: 195,
        width: 14.5,
        height: 17,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 13
    }, {
        id: 107,
        x: 311,
        y: 195,
        width: 15,
        height: 16.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 13
    }, {
        id: 100,
        x: 327,
        y: 195,
        width: 13,
        height: 16.5,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 11.5
    }, {
        id: 240,
        x: 341,
        y: 195,
        width: 14.5,
        height: 16.5,
        xoffset: 0,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 1100,
        x: 356.5,
        y: 195,
        width: 14.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1101,
        x: 372,
        y: 195,
        width: 13,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 312,
        x: 386,
        y: 195,
        width: 15,
        height: 16.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 307,
        x: 402,
        y: 195,
        width: 19.5,
        height: 16.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 18
    }, {
        id: 339,
        x: 422.5,
        y: 195,
        width: 18,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 16
    }, {
        id: 103,
        x: 441.5,
        y: 195,
        width: 14,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1098,
        x: 456.5,
        y: 195,
        width: 16.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 273,
        x: 474,
        y: 195,
        width: 14.5,
        height: 16.5,
        xoffset: 0,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 98,
        x: 489.5,
        y: 195,
        width: 13.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 111,
        x: 1,
        y: 216,
        width: 14,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 99,
        x: 16,
        y: 216,
        width: 13,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11.5
    }, {
        id: 115,
        x: 30,
        y: 216,
        width: 11,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 9.5
    }, {
        id: 1102,
        x: 42,
        y: 216,
        width: 20,
        height: 16.5,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 19
    }, {
        id: 223,
        x: 63,
        y: 216,
        width: 20.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 19
    }, {
        id: 112,
        x: 84.5,
        y: 216,
        width: 14.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 13
    }, {
        id: 1089,
        x: 100,
        y: 216,
        width: 13,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1078,
        x: 114,
        y: 216,
        width: 20,
        height: 16.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1082,
        x: 135,
        y: 216,
        width: 15,
        height: 16.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1088,
        x: 151,
        y: 216,
        width: 14.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 13
    }, {
        id: 1086,
        x: 166.5,
        y: 216,
        width: 14,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1083,
        x: 181.5,
        y: 216,
        width: 18.5,
        height: 16.5,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1074,
        x: 201,
        y: 216,
        width: 13.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 1079,
        x: 215.5,
        y: 216,
        width: 11.5,
        height: 16.5,
        xoffset: 0,
        yoffset: 8,
        page: 0,
        xadvance: 9
    }, {
        id: 1099,
        x: 228,
        y: 216,
        width: 9,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 118,
        x: 238,
        y: 216,
        width: 12.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 10
    }, {
        id: 230,
        x: 251.5,
        y: 216,
        width: 18,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1073,
        x: 270.5,
        y: 216,
        width: 14,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 1093,
        x: 285.5,
        y: 216,
        width: 14,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 119,
        x: 300.5,
        y: 216,
        width: 19,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 16.5
    }, {
        id: 117,
        x: 320.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 116,
        x: 334.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 359,
        x: 348.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 1091,
        x: 362.5,
        y: 216,
        width: 14,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 11
    }, {
        id: 1092,
        x: 377.5,
        y: 216,
        width: 16,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1090,
        x: 394.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 320,
        x: 408.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1095,
        x: 422.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 11
    }, {
        id: 1096,
        x: 436.5,
        y: 216,
        width: 20,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 19
    }, {
        id: 122,
        x: 457.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 108,
        x: 471.5,
        y: 216,
        width: 11.5,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 305,
        x: 484,
        y: 216,
        width: 9,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 1080,
        x: 494,
        y: 216,
        width: 13,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 106,
        x: 1,
        y: 234.5,
        width: 13,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 120,
        x: 15,
        y: 234.5,
        width: 14,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 110,
        x: 30,
        y: 234.5,
        width: 13,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 1075,
        x: 44,
        y: 234.5,
        width: 12,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 1072,
        x: 57,
        y: 234.5,
        width: 14.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 121,
        x: 72.5,
        y: 234.5,
        width: 14.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 105,
        x: 88,
        y: 234.5,
        width: 9,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 295,
        x: 98,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 109,
        x: 114.5,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 254,
        x: 131,
        y: 234.5,
        width: 15,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 104,
        x: 147,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 1077,
        x: 163.5,
        y: 234.5,
        width: 12,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 97,
        x: 176.5,
        y: 234.5,
        width: 14.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 102,
        x: 192,
        y: 234.5,
        width: 12,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 101,
        x: 205,
        y: 234.5,
        width: 12,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 322,
        x: 218,
        y: 234.5,
        width: 12.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 10
    }, {
        id: 1085,
        x: 231.5,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 58,
        x: 248,
        y: 234.5,
        width: 9,
        height: 16,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 8
    }, {
        id: 1084,
        x: 258,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 1087,
        x: 274.5,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 13.5
    }, {
        id: 42,
        x: 291,
        y: 234.5,
        width: 14,
        height: 14,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 12
    }, {
        id: 43,
        x: 306,
        y: 234.5,
        width: 13,
        height: 13,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 215,
        x: 320,
        y: 234.5,
        width: 11.5,
        height: 11.5,
        xoffset: 1.5,
        yoffset: 9.5,
        page: 0,
        xadvance: 11
    }, {
        id: 8226,
        x: 332.5,
        y: 234.5,
        width: 11,
        height: 11,
        xoffset: 1,
        yoffset: 9.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 8220,
        x: 344.5,
        y: 234.5,
        width: 16,
        height: 10.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 8221,
        x: 361.5,
        y: 234.5,
        width: 16,
        height: 10.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 8218,
        x: 378.5,
        y: 234.5,
        width: 8.5,
        height: 10.5,
        xoffset: 1,
        yoffset: 17,
        page: 0,
        xadvance: 7
    }, {
        id: 8222,
        x: 388,
        y: 234.5,
        width: 16,
        height: 10.5,
        xoffset: 1,
        yoffset: 17,
        page: 0,
        xadvance: 14
    }, {
        id: 8217,
        x: 405,
        y: 234.5,
        width: 8.5,
        height: 10.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 7
    }, {
        id: 8216,
        x: 414.5,
        y: 234.5,
        width: 8.5,
        height: 10.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 7
    }, {
        id: 44,
        x: 424,
        y: 234.5,
        width: 8.5,
        height: 10.5,
        xoffset: 1,
        yoffset: 17,
        page: 0,
        xadvance: 7
    }, {
        id: 39,
        x: 433.5,
        y: 234.5,
        width: 7.5,
        height: 10,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 6
    }, {
        id: 94,
        x: 442,
        y: 234.5,
        width: 10.5,
        height: 10,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 8250,
        x: 453.5,
        y: 234.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 6
    }, {
        id: 34,
        x: 463,
        y: 234.5,
        width: 15.5,
        height: 10,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 8249,
        x: 479.5,
        y: 234.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 6
    }, {
        id: 61,
        x: 489,
        y: 234.5,
        width: 13.5,
        height: 9.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 11.5
    }, {
        id: 8230,
        x: 1,
        y: 252.5,
        width: 27.5,
        height: 9,
        xoffset: 1,
        yoffset: 17,
        page: 0,
        xadvance: 27
    }, {
        id: 46,
        x: 29.5,
        y: 252.5,
        width: 9.5,
        height: 9,
        xoffset: .5,
        yoffset: 17,
        page: 0,
        xadvance: 7.5
    }, {
        id: 731,
        x: 40,
        y: 252.5,
        width: 8,
        height: 8.5,
        xoffset: .5,
        yoffset: 20.5,
        page: 0,
        xadvance: 6
    }, {
        id: 733,
        x: 49,
        y: 252.5,
        width: 10.5,
        height: 7.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 9
    }, {
        id: 732,
        x: 60.5,
        y: 252.5,
        width: 10.5,
        height: 7,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 9
    }, {
        id: 96,
        x: 72,
        y: 252.5,
        width: 8.5,
        height: 7,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 7
    }, {
        id: 126,
        x: 81.5,
        y: 252.5,
        width: 13.5,
        height: 6.5,
        xoffset: 1,
        yoffset: 12,
        page: 0,
        xadvance: 12
    }, {
        id: 95,
        x: 96,
        y: 252.5,
        width: 14.5,
        height: 5.5,
        xoffset: -.5,
        yoffset: 22,
        page: 0,
        xadvance: 11
    }, {
        id: 8211,
        x: 111.5,
        y: 252.5,
        width: 14.5,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 8212,
        x: 127,
        y: 252.5,
        width: 20,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 45,
        x: 148,
        y: 252.5,
        width: 10,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 8722,
        x: 159,
        y: 252.5,
        width: 14,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 32,
        x: 174,
        y: 252.5,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 21,
        page: 0,
        xadvance: 6
    }, {
        id: 32,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 21,
        page: 0,
        xadvance: 6
    }],
    font3 = [{
        id: 93,
        x: 1,
        y: 1,
        width: 8.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 125,
        x: 10.5,
        y: 1,
        width: 9.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 123,
        x: 21,
        y: 1,
        width: 9.5,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 91,
        x: 31.5,
        y: 1,
        width: 8.5,
        height: 26.5,
        xoffset: 2,
        yoffset: 2.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 350,
        x: 41,
        y: 1,
        width: 13,
        height: 26,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 354,
        x: 55,
        y: 1,
        width: 16,
        height: 25.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 344,
        x: 72,
        y: 1,
        width: 17.5,
        height: 25.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 16
    }, {
        id: 199,
        x: 90.5,
        y: 1,
        width: 15.5,
        height: 25.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 342,
        x: 107,
        y: 1,
        width: 17.5,
        height: 25.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 310,
        x: 125.5,
        y: 1,
        width: 18,
        height: 25.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 290,
        x: 144.5,
        y: 1,
        width: 17,
        height: 25.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 315,
        x: 162.5,
        y: 1,
        width: 14,
        height: 25.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 325,
        x: 177.5,
        y: 1,
        width: 15.5,
        height: 25,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 308,
        x: 194,
        y: 1,
        width: 15.5,
        height: 25,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 12.5
    }, {
        id: 330,
        x: 210.5,
        y: 1,
        width: 15.5,
        height: 25,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 258,
        x: 227,
        y: 1,
        width: 17,
        height: 24.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 284,
        x: 245,
        y: 1,
        width: 17,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 15
    }, {
        id: 381,
        x: 263,
        y: 1,
        width: 15,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 13
    }, {
        id: 374,
        x: 279,
        y: 1,
        width: 16.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 13.5
    }, {
        id: 372,
        x: 296.5,
        y: 1,
        width: 23,
        height: 24.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 20
    }, {
        id: 368,
        x: 320.5,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 366,
        x: 337,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 356,
        x: 353.5,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 13
    }, {
        id: 352,
        x: 370,
        y: 1,
        width: 13,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 11.5
    }, {
        id: 348,
        x: 384,
        y: 1,
        width: 13,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 11.5
    }, {
        id: 340,
        x: 398,
        y: 1,
        width: 17.5,
        height: 24.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 16
    }, {
        id: 336,
        x: 416.5,
        y: 1,
        width: 17,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 15
    }, {
        id: 327,
        x: 434.5,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14.5
    }, {
        id: 194,
        x: 451,
        y: 1,
        width: 17.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 14.5
    }, {
        id: 282,
        x: 469.5,
        y: 1,
        width: 14,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 12.5
    }, {
        id: 270,
        x: 484.5,
        y: 1,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 268,
        x: 1,
        y: 29.5,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 206,
        x: 17.5,
        y: 29.5,
        width: 10.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 9
    }, {
        id: 264,
        x: 29,
        y: 29.5,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 219,
        x: 45.5,
        y: 29.5,
        width: 15.5,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 14
    }, {
        id: 212,
        x: 62,
        y: 29.5,
        width: 17,
        height: 24.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 15
    }, {
        id: 197,
        x: 80,
        y: 29.5,
        width: 17.5,
        height: 24.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 14.5
    }, {
        id: 202,
        x: 98.5,
        y: 29.5,
        width: 14,
        height: 24.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 12.5
    }, {
        id: 196,
        x: 113.5,
        y: 29.5,
        width: 17,
        height: 24.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 195,
        x: 131.5,
        y: 29.5,
        width: 17,
        height: 24.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1025,
        x: 149.5,
        y: 29.5,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 266,
        x: 164.5,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 304,
        x: 181,
        y: 29.5,
        width: 10,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 211,
        x: 192,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 200,
        x: 210,
        y: 29.5,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 201,
        x: 225,
        y: 29.5,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 203,
        x: 240,
        y: 29.5,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 204,
        x: 255,
        y: 29.5,
        width: 10,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 41,
        x: 266,
        y: 29.5,
        width: 9,
        height: 24,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 8.5
    }, {
        id: 40,
        x: 276,
        y: 29.5,
        width: 9,
        height: 24,
        xoffset: 2.5,
        yoffset: 4,
        page: 0,
        xadvance: 8
    }, {
        id: 379,
        x: 286,
        y: 29.5,
        width: 15,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 13
    }, {
        id: 214,
        x: 302,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 376,
        x: 320,
        y: 29.5,
        width: 16.5,
        height: 24,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 205,
        x: 337.5,
        y: 29.5,
        width: 10,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 218,
        x: 348.5,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 364,
        x: 365,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 207,
        x: 381.5,
        y: 29.5,
        width: 11.5,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 360,
        x: 394,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 209,
        x: 410.5,
        y: 29.5,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 334,
        x: 427,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 210,
        x: 445,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 193,
        x: 463,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 192,
        x: 481,
        y: 29.5,
        width: 17,
        height: 24,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 296,
        x: 499,
        y: 29.5,
        width: 10.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 300,
        x: 1,
        y: 56,
        width: 10,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 9
    }, {
        id: 213,
        x: 12,
        y: 56,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 262,
        x: 30,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 217,
        x: 46.5,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 276,
        x: 63,
        y: 56,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 313,
        x: 78,
        y: 56,
        width: 13.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 288,
        x: 92.5,
        y: 56,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 220,
        x: 110.5,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14
    }, {
        id: 221,
        x: 127,
        y: 56,
        width: 16.5,
        height: 24,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1049,
        x: 144.5,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 278,
        x: 161,
        y: 56,
        width: 14,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 292,
        x: 176,
        y: 56,
        width: 18.5,
        height: 24,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 17
    }, {
        id: 323,
        x: 195.5,
        y: 56,
        width: 15.5,
        height: 24,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 286,
        x: 212,
        y: 56,
        width: 17,
        height: 24,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 15
    }, {
        id: 1062,
        x: 230,
        y: 56,
        width: 19,
        height: 23.5,
        xoffset: 1.5,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 377,
        x: 250,
        y: 56,
        width: 15,
        height: 23.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 13
    }, {
        id: 1065,
        x: 266,
        y: 56,
        width: 25,
        height: 23.5,
        xoffset: 1.5,
        yoffset: 5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 370,
        x: 292,
        y: 56,
        width: 15.5,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1044,
        x: 308.5,
        y: 56,
        width: 22.5,
        height: 23.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 346,
        x: 332,
        y: 56,
        width: 13,
        height: 23.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 302,
        x: 346,
        y: 56,
        width: 10,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 9
    }, {
        id: 124,
        x: 357,
        y: 56,
        width: 6.5,
        height: 23.5,
        xoffset: 1.5,
        yoffset: 4.5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 260,
        x: 364.5,
        y: 56,
        width: 17,
        height: 23.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 280,
        x: 382.5,
        y: 56,
        width: 14,
        height: 23.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 298,
        x: 397.5,
        y: 56,
        width: 10.5,
        height: 23,
        xoffset: 1,
        yoffset: 1.5,
        page: 0,
        xadvance: 9
    }, {
        id: 362,
        x: 409,
        y: 56,
        width: 15.5,
        height: 23,
        xoffset: 1,
        yoffset: 1.5,
        page: 0,
        xadvance: 14
    }, {
        id: 274,
        x: 425.5,
        y: 56,
        width: 14,
        height: 23,
        xoffset: 1,
        yoffset: 1.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 256,
        x: 440.5,
        y: 56,
        width: 17.5,
        height: 23,
        xoffset: 0,
        yoffset: 1.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 332,
        x: 459,
        y: 56,
        width: 17,
        height: 23,
        xoffset: .5,
        yoffset: 1.5,
        page: 0,
        xadvance: 15
    }, {
        id: 291,
        x: 477,
        y: 56,
        width: 14,
        height: 22.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 63,
        x: 492,
        y: 56,
        width: 13,
        height: 22.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 11
    }, {
        id: 47,
        x: 1,
        y: 82,
        width: 15.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 351,
        x: 17.5,
        y: 82,
        width: 11,
        height: 22.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 9.5
    }, {
        id: 92,
        x: 29.5,
        y: 82,
        width: 15.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 329,
        x: 46,
        y: 82,
        width: 15,
        height: 22.5,
        xoffset: -1,
        yoffset: 2,
        page: 0,
        xadvance: 12
    }, {
        id: 231,
        x: 62,
        y: 82,
        width: 13,
        height: 22.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11.5
    }, {
        id: 355,
        x: 76,
        y: 82,
        width: 13,
        height: 22.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 343,
        x: 90,
        y: 82,
        width: 14.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 13.5
    }, {
        id: 317,
        x: 105.5,
        y: 82,
        width: 16.5,
        height: 22,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 14
    }, {
        id: 316,
        x: 123,
        y: 82,
        width: 11.5,
        height: 22,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 345,
        x: 135.5,
        y: 82,
        width: 14.5,
        height: 22,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 13.5
    }, {
        id: 326,
        x: 151,
        y: 82,
        width: 13,
        height: 22,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 311,
        x: 165,
        y: 82,
        width: 15,
        height: 22,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 13
    }, {
        id: 331,
        x: 181,
        y: 82,
        width: 13,
        height: 22,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 265,
        x: 195,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 269,
        x: 209,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 271,
        x: 223,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 251,
        x: 237,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 226,
        x: 251,
        y: 82,
        width: 14.5,
        height: 21.5,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 12
    }, {
        id: 341,
        x: 266.5,
        y: 82,
        width: 14.5,
        height: 21.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 283,
        x: 282,
        y: 82,
        width: 12.5,
        height: 21.5,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 10.5
    }, {
        id: 328,
        x: 295.5,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 12
    }, {
        id: 309,
        x: 309.5,
        y: 82,
        width: 13.5,
        height: 21.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 349,
        x: 324,
        y: 82,
        width: 11,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 9.5
    }, {
        id: 234,
        x: 336,
        y: 82,
        width: 12.5,
        height: 21.5,
        xoffset: 1,
        yoffset: 3,
        page: 0,
        xadvance: 10.5
    }, {
        id: 353,
        x: 349.5,
        y: 82,
        width: 11,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 9.5
    }, {
        id: 229,
        x: 361.5,
        y: 82,
        width: 14.5,
        height: 21.5,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 12
    }, {
        id: 357,
        x: 377,
        y: 82,
        width: 13,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11
    }, {
        id: 81,
        x: 391,
        y: 82,
        width: 18,
        height: 21.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 375,
        x: 410,
        y: 82,
        width: 14,
        height: 21.5,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 244,
        x: 425,
        y: 82,
        width: 14,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 12.5
    }, {
        id: 238,
        x: 440,
        y: 82,
        width: 10.5,
        height: 21.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 7.5
    }, {
        id: 1105,
        x: 451.5,
        y: 82,
        width: 12,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 279,
        x: 464.5,
        y: 82,
        width: 12,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 335,
        x: 477.5,
        y: 82,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 365,
        x: 492.5,
        y: 82,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 277,
        x: 1,
        y: 106.5,
        width: 12.5,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 37,
        x: 14.5,
        y: 106.5,
        width: 19.5,
        height: 21,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 18
    }, {
        id: 285,
        x: 35,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 255,
        x: 50.5,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 289,
        x: 66,
        y: 106.5,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 293,
        x: 81,
        y: 106.5,
        width: 15.5,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 14
    }, {
        id: 267,
        x: 97.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 297,
        x: 111.5,
        y: 106.5,
        width: 10.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 301,
        x: 123,
        y: 106.5,
        width: 10,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 8
    }, {
        id: 382,
        x: 134,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11
    }, {
        id: 361,
        x: 148,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 259,
        x: 162,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 227,
        x: 177.5,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 228,
        x: 193,
        y: 106.5,
        width: 14.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 373,
        x: 208.5,
        y: 106.5,
        width: 19,
        height: 21,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 16.5
    }, {
        id: 252,
        x: 228.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 369,
        x: 242.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 367,
        x: 256.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11.5
    }, {
        id: 241,
        x: 270.5,
        y: 106.5,
        width: 13,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 239,
        x: 284.5,
        y: 106.5,
        width: 11.5,
        height: 21,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 246,
        x: 297,
        y: 106.5,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 235,
        x: 312,
        y: 106.5,
        width: 12,
        height: 21,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 245,
        x: 325,
        y: 106.5,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 337,
        x: 340,
        y: 106.5,
        width: 14,
        height: 21,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 380,
        x: 355,
        y: 106.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 216,
        x: 369,
        y: 106.5,
        width: 17,
        height: 20.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 15
    }, {
        id: 378,
        x: 387,
        y: 106.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 371,
        x: 401,
        y: 106.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 225,
        x: 415,
        y: 106.5,
        width: 14.5,
        height: 20.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 233,
        x: 430.5,
        y: 106.5,
        width: 12,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 347,
        x: 443.5,
        y: 106.5,
        width: 11,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 57,
        x: 455.5,
        y: 106.5,
        width: 14,
        height: 20.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 236,
        x: 470.5,
        y: 106.5,
        width: 9.5,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 237,
        x: 481,
        y: 106.5,
        width: 9.5,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 232,
        x: 491.5,
        y: 106.5,
        width: 12,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 224,
        x: 1,
        y: 129.5,
        width: 14.5,
        height: 20.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 33,
        x: 16.5,
        y: 129.5,
        width: 11,
        height: 20.5,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1081,
        x: 28.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 11.5
    }, {
        id: 242,
        x: 42.5,
        y: 129.5,
        width: 14,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 243,
        x: 57.5,
        y: 129.5,
        width: 14,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 261,
        x: 72.5,
        y: 129.5,
        width: 14.5,
        height: 20.5,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 314,
        x: 88,
        y: 129.5,
        width: 11.5,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 263,
        x: 100.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1071,
        x: 114.5,
        y: 129.5,
        width: 17.5,
        height: 20.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 253,
        x: 133,
        y: 129.5,
        width: 14.5,
        height: 20.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 249,
        x: 148.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 250,
        x: 162.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 324,
        x: 176.5,
        y: 129.5,
        width: 13,
        height: 20.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 303,
        x: 190.5,
        y: 129.5,
        width: 9,
        height: 20.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 287,
        x: 200.5,
        y: 129.5,
        width: 14.5,
        height: 20.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 82,
        x: 216,
        y: 129.5,
        width: 17.5,
        height: 20.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 281,
        x: 234.5,
        y: 129.5,
        width: 12,
        height: 20.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1046,
        x: 247.5,
        y: 129.5,
        width: 24.5,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 22
    }, {
        id: 257,
        x: 273,
        y: 129.5,
        width: 14.5,
        height: 20,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 12
    }, {
        id: 1050,
        x: 288.5,
        y: 129.5,
        width: 18,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1047,
        x: 307.5,
        y: 129.5,
        width: 14,
        height: 20,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 75,
        x: 322.5,
        y: 129.5,
        width: 18,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 66,
        x: 341.5,
        y: 129.5,
        width: 16,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 50,
        x: 358.5,
        y: 129.5,
        width: 13.5,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 363,
        x: 373,
        y: 129.5,
        width: 13,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 299,
        x: 387,
        y: 129.5,
        width: 10.5,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 8
    }, {
        id: 51,
        x: 398.5,
        y: 129.5,
        width: 14,
        height: 20,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 333,
        x: 413.5,
        y: 129.5,
        width: 14,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 54,
        x: 428.5,
        y: 129.5,
        width: 14.5,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 275,
        x: 444,
        y: 129.5,
        width: 12,
        height: 20,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 56,
        x: 457,
        y: 129.5,
        width: 14.5,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 12
    }, {
        id: 36,
        x: 472.5,
        y: 129.5,
        width: 11,
        height: 20,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 9
    }, {
        id: 1042,
        x: 484.5,
        y: 129.5,
        width: 16,
        height: 20,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1070,
        x: 1,
        y: 152,
        width: 24.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 1056,
        x: 26.5,
        y: 152,
        width: 17.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 208,
        x: 45,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 272,
        x: 63,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1040,
        x: 81,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1041,
        x: 99,
        y: 152,
        width: 16.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 83,
        x: 116.5,
        y: 152,
        width: 13,
        height: 19.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 306,
        x: 130.5,
        y: 152,
        width: 23,
        height: 19.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 1061,
        x: 154.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 65,
        x: 172.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1069,
        x: 190.5,
        y: 152,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 358,
        x: 207,
        y: 152,
        width: 16,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 1068,
        x: 224,
        y: 152,
        width: 17.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1053,
        x: 242.5,
        y: 152,
        width: 18.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 71,
        x: 262,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 1097,
        x: 280,
        y: 152,
        width: 20.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 19
    }, {
        id: 90,
        x: 301.5,
        y: 152,
        width: 15,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 1059,
        x: 317.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1054,
        x: 335.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 80,
        x: 353.5,
        y: 152,
        width: 17.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 88,
        x: 372,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 38,
        x: 390,
        y: 152,
        width: 15,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 294,
        x: 406,
        y: 152,
        width: 18.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 1064,
        x: 425.5,
        y: 152,
        width: 24,
        height: 19.5,
        xoffset: 1.5,
        yoffset: 5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 79,
        x: 450.5,
        y: 152,
        width: 17,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 64,
        x: 468.5,
        y: 152,
        width: 17.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 15.5
    }, {
        id: 67,
        x: 487,
        y: 152,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 1043,
        x: 1,
        y: 173.5,
        width: 14,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 74,
        x: 16,
        y: 173.5,
        width: 15.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 55,
        x: 32.5,
        y: 173.5,
        width: 14.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 84,
        x: 48,
        y: 173.5,
        width: 16,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 1058,
        x: 65,
        y: 173.5,
        width: 16,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 8364,
        x: 82,
        y: 173.5,
        width: 17,
        height: 19.5,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 53,
        x: 100,
        y: 173.5,
        width: 13.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 12
    }, {
        id: 1057,
        x: 114.5,
        y: 173.5,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 1066,
        x: 131,
        y: 173.5,
        width: 20,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 18
    }, {
        id: 338,
        x: 152,
        y: 173.5,
        width: 21.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1051,
        x: 174.5,
        y: 173.5,
        width: 22.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 20
    }, {
        id: 68,
        x: 198,
        y: 173.5,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 1076,
        x: 214.5,
        y: 173.5,
        width: 18.5,
        height: 19.5,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1067,
        x: 234,
        y: 173.5,
        width: 26,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 24.5
    }, {
        id: 1094,
        x: 261,
        y: 173.5,
        width: 15.5,
        height: 19.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 72,
        x: 277.5,
        y: 173.5,
        width: 18.5,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 48,
        x: 297,
        y: 173.5,
        width: 17,
        height: 19.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 15
    }, {
        id: 318,
        x: 315,
        y: 173.5,
        width: 15,
        height: 19,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 12
    }, {
        id: 35,
        x: 331,
        y: 173.5,
        width: 14.5,
        height: 19,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 11
    }, {
        id: 85,
        x: 346.5,
        y: 173.5,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 319,
        x: 363,
        y: 173.5,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 89,
        x: 378,
        y: 173.5,
        width: 16.5,
        height: 19,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1052,
        x: 395.5,
        y: 173.5,
        width: 18.5,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 198,
        x: 415,
        y: 173.5,
        width: 21.5,
        height: 19,
        xoffset: 0,
        yoffset: 5.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 76,
        x: 437.5,
        y: 173.5,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1055,
        x: 452.5,
        y: 173.5,
        width: 18.5,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 78,
        x: 472,
        y: 173.5,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 77,
        x: 488.5,
        y: 173.5,
        width: 18.5,
        height: 19,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 87,
        x: 1,
        y: 195,
        width: 23,
        height: 19,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 20
    }, {
        id: 86,
        x: 25,
        y: 195,
        width: 15,
        height: 19,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 12
    }, {
        id: 73,
        x: 41,
        y: 195,
        width: 10,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 9
    }, {
        id: 49,
        x: 52,
        y: 195,
        width: 10,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 9
    }, {
        id: 52,
        x: 63,
        y: 195,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 70,
        x: 79.5,
        y: 195,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 321,
        x: 94.5,
        y: 195,
        width: 15,
        height: 19,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 12
    }, {
        id: 69,
        x: 110.5,
        y: 195,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1045,
        x: 125.5,
        y: 195,
        width: 14,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 222,
        x: 140.5,
        y: 195,
        width: 18,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 1060,
        x: 159.5,
        y: 195,
        width: 19,
        height: 19,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 17
    }, {
        id: 1063,
        x: 179.5,
        y: 195,
        width: 16,
        height: 19,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1048,
        x: 196.5,
        y: 195,
        width: 15.5,
        height: 19,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 247,
        x: 213,
        y: 195,
        width: 13.5,
        height: 18.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 11.5
    }, {
        id: 383,
        x: 227.5,
        y: 195,
        width: 9.5,
        height: 18.5,
        xoffset: 3,
        yoffset: 5.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 113,
        x: 238,
        y: 195,
        width: 15,
        height: 18,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 248,
        x: 254,
        y: 195,
        width: 14.5,
        height: 17,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 59,
        x: 269.5,
        y: 195,
        width: 9.5,
        height: 17,
        xoffset: .5,
        yoffset: 10,
        page: 0,
        xadvance: 8
    }, {
        id: 114,
        x: 280,
        y: 195,
        width: 14.5,
        height: 17,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1103,
        x: 295.5,
        y: 195,
        width: 14.5,
        height: 17,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 13
    }, {
        id: 107,
        x: 311,
        y: 195,
        width: 15,
        height: 16.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 13
    }, {
        id: 100,
        x: 327,
        y: 195,
        width: 13,
        height: 16.5,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 11.5
    }, {
        id: 240,
        x: 341,
        y: 195,
        width: 14.5,
        height: 16.5,
        xoffset: 0,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 1100,
        x: 356.5,
        y: 195,
        width: 14.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1101,
        x: 372,
        y: 195,
        width: 13,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 312,
        x: 386,
        y: 195,
        width: 15,
        height: 16.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 307,
        x: 402,
        y: 195,
        width: 19.5,
        height: 16.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 18
    }, {
        id: 339,
        x: 422.5,
        y: 195,
        width: 18,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 16
    }, {
        id: 103,
        x: 441.5,
        y: 195,
        width: 14,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1098,
        x: 456.5,
        y: 195,
        width: 16.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 273,
        x: 474,
        y: 195,
        width: 14.5,
        height: 16.5,
        xoffset: 0,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 98,
        x: 489.5,
        y: 195,
        width: 13.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 111,
        x: 1,
        y: 216,
        width: 14,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 99,
        x: 16,
        y: 216,
        width: 13,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11.5
    }, {
        id: 115,
        x: 30,
        y: 216,
        width: 11,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 9.5
    }, {
        id: 1102,
        x: 42,
        y: 216,
        width: 20,
        height: 16.5,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 19
    }, {
        id: 223,
        x: 63,
        y: 216,
        width: 20.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 19
    }, {
        id: 112,
        x: 84.5,
        y: 216,
        width: 14.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 13
    }, {
        id: 1089,
        x: 100,
        y: 216,
        width: 13,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1078,
        x: 114,
        y: 216,
        width: 20,
        height: 16.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1082,
        x: 135,
        y: 216,
        width: 15,
        height: 16.5,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1088,
        x: 151,
        y: 216,
        width: 14.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 13
    }, {
        id: 1086,
        x: 166.5,
        y: 216,
        width: 14,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1083,
        x: 181.5,
        y: 216,
        width: 18.5,
        height: 16.5,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1074,
        x: 201,
        y: 216,
        width: 13.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 1079,
        x: 215.5,
        y: 216,
        width: 11.5,
        height: 16.5,
        xoffset: 0,
        yoffset: 8,
        page: 0,
        xadvance: 9
    }, {
        id: 1099,
        x: 228,
        y: 216,
        width: 9,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 118,
        x: 238,
        y: 216,
        width: 12.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 10
    }, {
        id: 230,
        x: 251.5,
        y: 216,
        width: 18,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1073,
        x: 270.5,
        y: 216,
        width: 14,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 12
    }, {
        id: 1093,
        x: 285.5,
        y: 216,
        width: 14,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 119,
        x: 300.5,
        y: 216,
        width: 19,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 16.5
    }, {
        id: 117,
        x: 320.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 116,
        x: 334.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 359,
        x: 348.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 1091,
        x: 362.5,
        y: 216,
        width: 14,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 11
    }, {
        id: 1092,
        x: 377.5,
        y: 216,
        width: 16,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1090,
        x: 394.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 320,
        x: 408.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1095,
        x: 422.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 11
    }, {
        id: 1096,
        x: 436.5,
        y: 216,
        width: 20,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 19
    }, {
        id: 122,
        x: 457.5,
        y: 216,
        width: 13,
        height: 16,
        xoffset: .5,
        yoffset: 8,
        page: 0,
        xadvance: 11
    }, {
        id: 108,
        x: 471.5,
        y: 216,
        width: 11.5,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 305,
        x: 484,
        y: 216,
        width: 9,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 1080,
        x: 494,
        y: 216,
        width: 13,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 106,
        x: 1,
        y: 234.5,
        width: 13,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 120,
        x: 15,
        y: 234.5,
        width: 14,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 110,
        x: 30,
        y: 234.5,
        width: 13,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 1075,
        x: 44,
        y: 234.5,
        width: 12,
        height: 16,
        xoffset: .5,
        yoffset: 8.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 1072,
        x: 57,
        y: 234.5,
        width: 14.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 121,
        x: 72.5,
        y: 234.5,
        width: 14.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 105,
        x: 88,
        y: 234.5,
        width: 9,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 295,
        x: 98,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 109,
        x: 114.5,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 254,
        x: 131,
        y: 234.5,
        width: 15,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 104,
        x: 147,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 1077,
        x: 163.5,
        y: 234.5,
        width: 12,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 97,
        x: 176.5,
        y: 234.5,
        width: 14.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 12
    }, {
        id: 102,
        x: 192,
        y: 234.5,
        width: 12,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 101,
        x: 205,
        y: 234.5,
        width: 12,
        height: 16,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 322,
        x: 218,
        y: 234.5,
        width: 12.5,
        height: 16,
        xoffset: 0,
        yoffset: 8.5,
        page: 0,
        xadvance: 10
    }, {
        id: 1085,
        x: 231.5,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 58,
        x: 248,
        y: 234.5,
        width: 9,
        height: 16,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 8
    }, {
        id: 1084,
        x: 258,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 14
    }, {
        id: 1087,
        x: 274.5,
        y: 234.5,
        width: 15.5,
        height: 16,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 13.5
    }, {
        id: 42,
        x: 291,
        y: 234.5,
        width: 14,
        height: 14,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 12
    }, {
        id: 43,
        x: 306,
        y: 234.5,
        width: 13,
        height: 13,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 215,
        x: 320,
        y: 234.5,
        width: 11.5,
        height: 11.5,
        xoffset: 1.5,
        yoffset: 9.5,
        page: 0,
        xadvance: 11
    }, {
        id: 8226,
        x: 332.5,
        y: 234.5,
        width: 11,
        height: 11,
        xoffset: 1,
        yoffset: 9.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 8220,
        x: 344.5,
        y: 234.5,
        width: 16,
        height: 10.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 8221,
        x: 361.5,
        y: 234.5,
        width: 16,
        height: 10.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 14
    }, {
        id: 8218,
        x: 378.5,
        y: 234.5,
        width: 8.5,
        height: 10.5,
        xoffset: 1,
        yoffset: 17,
        page: 0,
        xadvance: 7
    }, {
        id: 8222,
        x: 388,
        y: 234.5,
        width: 16,
        height: 10.5,
        xoffset: 1,
        yoffset: 17,
        page: 0,
        xadvance: 14
    }, {
        id: 8217,
        x: 405,
        y: 234.5,
        width: 8.5,
        height: 10.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 7
    }, {
        id: 8216,
        x: 414.5,
        y: 234.5,
        width: 8.5,
        height: 10.5,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 7
    }, {
        id: 44,
        x: 424,
        y: 234.5,
        width: 8.5,
        height: 10.5,
        xoffset: 1,
        yoffset: 17,
        page: 0,
        xadvance: 7
    }, {
        id: 39,
        x: 433.5,
        y: 234.5,
        width: 7.5,
        height: 10,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 6
    }, {
        id: 94,
        x: 442,
        y: 234.5,
        width: 10.5,
        height: 10,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 8250,
        x: 453.5,
        y: 234.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 6
    }, {
        id: 34,
        x: 463,
        y: 234.5,
        width: 15.5,
        height: 10,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14
    }, {
        id: 8249,
        x: 479.5,
        y: 234.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 10.5,
        page: 0,
        xadvance: 6
    }, {
        id: 61,
        x: 489,
        y: 234.5,
        width: 13.5,
        height: 9.5,
        xoffset: 1,
        yoffset: 10,
        page: 0,
        xadvance: 11.5
    }, {
        id: 8230,
        x: 1,
        y: 252.5,
        width: 27.5,
        height: 9,
        xoffset: 1,
        yoffset: 17,
        page: 0,
        xadvance: 27
    }, {
        id: 46,
        x: 29.5,
        y: 252.5,
        width: 9.5,
        height: 9,
        xoffset: .5,
        yoffset: 17,
        page: 0,
        xadvance: 7.5
    }, {
        id: 731,
        x: 40,
        y: 252.5,
        width: 8,
        height: 8.5,
        xoffset: .5,
        yoffset: 20.5,
        page: 0,
        xadvance: 6
    }, {
        id: 733,
        x: 49,
        y: 252.5,
        width: 10.5,
        height: 7.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 9
    }, {
        id: 732,
        x: 60.5,
        y: 252.5,
        width: 10.5,
        height: 7,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 9
    }, {
        id: 96,
        x: 72,
        y: 252.5,
        width: 8.5,
        height: 7,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 7
    }, {
        id: 126,
        x: 81.5,
        y: 252.5,
        width: 13.5,
        height: 6.5,
        xoffset: 1,
        yoffset: 12,
        page: 0,
        xadvance: 12
    }, {
        id: 95,
        x: 96,
        y: 252.5,
        width: 14.5,
        height: 5.5,
        xoffset: -.5,
        yoffset: 22,
        page: 0,
        xadvance: 11
    }, {
        id: 8211,
        x: 111.5,
        y: 252.5,
        width: 14.5,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 8212,
        x: 127,
        y: 252.5,
        width: 20,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 45,
        x: 148,
        y: 252.5,
        width: 10,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 8722,
        x: 159,
        y: 252.5,
        width: 14,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 32,
        x: 174,
        y: 252.5,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 21,
        page: 0,
        xadvance: 6
    }, {
        id: 32,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 21,
        page: 0,
        xadvance: 6
    }],
    font4 = [{
        id: 93,
        x: 1,
        y: 1,
        width: 12,
        height: 37,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 91,
        x: 14,
        y: 1,
        width: 12,
        height: 37,
        xoffset: 2.5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 125,
        x: 27,
        y: 1,
        width: 13,
        height: 36.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 11
    }, {
        id: 123,
        x: 41,
        y: 1,
        width: 13,
        height: 36.5,
        xoffset: 2,
        yoffset: 3,
        page: 0,
        xadvance: 11
    }, {
        id: 199,
        x: 55,
        y: 1,
        width: 21.5,
        height: 35.5,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 19.5
    }, {
        id: 290,
        x: 77.5,
        y: 1,
        width: 23,
        height: 35.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 20.5
    }, {
        id: 342,
        x: 101.5,
        y: 1,
        width: 24,
        height: 35.5,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 22.5
    }, {
        id: 350,
        x: 126.5,
        y: 1,
        width: 18,
        height: 35.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 354,
        x: 145.5,
        y: 1,
        width: 21.5,
        height: 35,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 18.5
    }, {
        id: 344,
        x: 168,
        y: 1,
        width: 24,
        height: 35,
        xoffset: 1.5,
        yoffset: 0,
        page: 0,
        xadvance: 22.5
    }, {
        id: 315,
        x: 193,
        y: 1,
        width: 18.5,
        height: 35,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 16
    }, {
        id: 330,
        x: 212.5,
        y: 1,
        width: 21,
        height: 35,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 310,
        x: 234.5,
        y: 1,
        width: 24.5,
        height: 35,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 325,
        x: 260,
        y: 1,
        width: 21,
        height: 35,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 308,
        x: 282,
        y: 1,
        width: 21,
        height: 34.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 194,
        x: 304,
        y: 1,
        width: 23.5,
        height: 34,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 20
    }, {
        id: 268,
        x: 328.5,
        y: 1,
        width: 21.5,
        height: 34,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 19.5
    }, {
        id: 340,
        x: 351,
        y: 1,
        width: 24,
        height: 34,
        xoffset: 1.5,
        yoffset: 1,
        page: 0,
        xadvance: 22.5
    }, {
        id: 282,
        x: 376,
        y: 1,
        width: 19.5,
        height: 34,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 270,
        x: 396.5,
        y: 1,
        width: 21.5,
        height: 34,
        xoffset: 1.5,
        yoffset: 0,
        page: 0,
        xadvance: 19.5
    }, {
        id: 327,
        x: 419,
        y: 1,
        width: 21,
        height: 34,
        xoffset: 1.5,
        yoffset: 0,
        page: 0,
        xadvance: 20
    }, {
        id: 264,
        x: 441,
        y: 1,
        width: 21.5,
        height: 34,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 19.5
    }, {
        id: 219,
        x: 463.5,
        y: 1,
        width: 21.5,
        height: 34,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 19.5
    }, {
        id: 212,
        x: 486,
        y: 1,
        width: 23,
        height: 34,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 21
    }, {
        id: 206,
        x: 1,
        y: 40,
        width: 14.5,
        height: 34,
        xoffset: 1.5,
        yoffset: 0,
        page: 0,
        xadvance: 12.5
    }, {
        id: 202,
        x: 16.5,
        y: 40,
        width: 19.5,
        height: 34,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 17.5
    }, {
        id: 356,
        x: 37,
        y: 40,
        width: 21.5,
        height: 34,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 18.5
    }, {
        id: 197,
        x: 59.5,
        y: 40,
        width: 23.5,
        height: 34,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 20
    }, {
        id: 258,
        x: 84,
        y: 40,
        width: 23.5,
        height: 33.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 20
    }, {
        id: 348,
        x: 108.5,
        y: 40,
        width: 18,
        height: 33.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 15.5
    }, {
        id: 292,
        x: 127.5,
        y: 40,
        width: 25.5,
        height: 33.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 23.5
    }, {
        id: 196,
        x: 154,
        y: 40,
        width: 23.5,
        height: 33.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 20
    }, {
        id: 366,
        x: 178.5,
        y: 40,
        width: 21.5,
        height: 33.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 19.5
    }, {
        id: 195,
        x: 201,
        y: 40,
        width: 23.5,
        height: 33.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 20
    }, {
        id: 284,
        x: 225.5,
        y: 40,
        width: 23,
        height: 33.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 20.5
    }, {
        id: 336,
        x: 249.5,
        y: 40,
        width: 23,
        height: 33.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 21
    }, {
        id: 381,
        x: 273.5,
        y: 40,
        width: 20.5,
        height: 33.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 18.5
    }, {
        id: 352,
        x: 295,
        y: 40,
        width: 18,
        height: 33.5,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 15.5
    }, {
        id: 374,
        x: 314,
        y: 40,
        width: 23,
        height: 33.5,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 19
    }, {
        id: 368,
        x: 338,
        y: 40,
        width: 21.5,
        height: 33.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 372,
        x: 360.5,
        y: 40,
        width: 31.5,
        height: 33.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 28
    }, {
        id: 1025,
        x: 393,
        y: 40,
        width: 19.5,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 41,
        x: 413.5,
        y: 40,
        width: 12,
        height: 33,
        xoffset: .5,
        yoffset: 5.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 40,
        x: 426.5,
        y: 40,
        width: 12,
        height: 33,
        xoffset: 3,
        yoffset: 5.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 193,
        x: 439.5,
        y: 40,
        width: 23.5,
        height: 33,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 20
    }, {
        id: 201,
        x: 464,
        y: 40,
        width: 19.5,
        height: 33,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 17.5
    }, {
        id: 214,
        x: 484.5,
        y: 40,
        width: 23,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 21
    }, {
        id: 286,
        x: 1,
        y: 76,
        width: 23,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 20.5
    }, {
        id: 213,
        x: 25,
        y: 76,
        width: 23,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 21
    }, {
        id: 278,
        x: 49,
        y: 76,
        width: 19.5,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 276,
        x: 69.5,
        y: 76,
        width: 19.5,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 288,
        x: 90,
        y: 76,
        width: 23,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 20.5
    }, {
        id: 266,
        x: 114,
        y: 76,
        width: 21.5,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 262,
        x: 136.5,
        y: 76,
        width: 21.5,
        height: 33,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 19.5
    }, {
        id: 379,
        x: 159,
        y: 76,
        width: 20.5,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 207,
        x: 180.5,
        y: 76,
        width: 15.5,
        height: 33,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 209,
        x: 197,
        y: 76,
        width: 21,
        height: 33,
        xoffset: 1.5,
        yoffset: .5,
        page: 0,
        xadvance: 20
    }, {
        id: 376,
        x: 219,
        y: 76,
        width: 23,
        height: 33,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 19
    }, {
        id: 296,
        x: 243,
        y: 76,
        width: 14.5,
        height: 33,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 12.5
    }, {
        id: 300,
        x: 258.5,
        y: 76,
        width: 14,
        height: 33,
        xoffset: 1.5,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 221,
        x: 273.5,
        y: 76,
        width: 23,
        height: 33,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 19
    }, {
        id: 220,
        x: 297.5,
        y: 76,
        width: 21.5,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 218,
        x: 320,
        y: 76,
        width: 21.5,
        height: 33,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 19.5
    }, {
        id: 370,
        x: 342.5,
        y: 76,
        width: 21.5,
        height: 33,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 217,
        x: 365,
        y: 76,
        width: 21.5,
        height: 33,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 19.5
    }, {
        id: 302,
        x: 387.5,
        y: 76,
        width: 14,
        height: 33,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 204,
        x: 402.5,
        y: 76,
        width: 14,
        height: 33,
        xoffset: 1.5,
        yoffset: 1,
        page: 0,
        xadvance: 12.5
    }, {
        id: 203,
        x: 417.5,
        y: 76,
        width: 19.5,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 211,
        x: 438,
        y: 76,
        width: 23,
        height: 33,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 21
    }, {
        id: 210,
        x: 462,
        y: 76,
        width: 23,
        height: 33,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 21
    }, {
        id: 360,
        x: 486,
        y: 76,
        width: 21.5,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 346,
        x: 1,
        y: 111,
        width: 18,
        height: 33,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 15.5
    }, {
        id: 304,
        x: 20,
        y: 111,
        width: 14,
        height: 33,
        xoffset: 1.5,
        yoffset: .5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 205,
        x: 35,
        y: 111,
        width: 14,
        height: 33,
        xoffset: 1.5,
        yoffset: 1,
        page: 0,
        xadvance: 12.5
    }, {
        id: 364,
        x: 50,
        y: 111,
        width: 21.5,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 192,
        x: 72.5,
        y: 111,
        width: 23.5,
        height: 33,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 20
    }, {
        id: 334,
        x: 97,
        y: 111,
        width: 23,
        height: 33,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 21
    }, {
        id: 200,
        x: 121,
        y: 111,
        width: 19.5,
        height: 33,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1049,
        x: 141.5,
        y: 111,
        width: 21,
        height: 33,
        xoffset: 1.5,
        yoffset: .5,
        page: 0,
        xadvance: 20
    }, {
        id: 323,
        x: 163.5,
        y: 111,
        width: 21,
        height: 33,
        xoffset: 1.5,
        yoffset: 1,
        page: 0,
        xadvance: 20
    }, {
        id: 313,
        x: 185.5,
        y: 111,
        width: 18.5,
        height: 33,
        xoffset: 1.5,
        yoffset: 1,
        page: 0,
        xadvance: 16
    }, {
        id: 377,
        x: 205,
        y: 111,
        width: 20.5,
        height: 32.5,
        xoffset: 1,
        yoffset: 1,
        page: 0,
        xadvance: 18.5
    }, {
        id: 124,
        x: 226.5,
        y: 111,
        width: 9,
        height: 32.5,
        xoffset: 2,
        yoffset: 6,
        page: 0,
        xadvance: 9.5
    }, {
        id: 280,
        x: 236.5,
        y: 111,
        width: 19.5,
        height: 32.5,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1044,
        x: 257,
        y: 111,
        width: 31.5,
        height: 32.5,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 27.5
    }, {
        id: 260,
        x: 289.5,
        y: 111,
        width: 23.5,
        height: 32.5,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 362,
        x: 314,
        y: 111,
        width: 21.5,
        height: 32,
        xoffset: 1,
        yoffset: 2,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1065,
        x: 336.5,
        y: 111,
        width: 34.5,
        height: 32,
        xoffset: 2,
        yoffset: 7.5,
        page: 0,
        xadvance: 32.5
    }, {
        id: 1062,
        x: 372,
        y: 111,
        width: 26,
        height: 32,
        xoffset: 2,
        yoffset: 7.5,
        page: 0,
        xadvance: 24
    }, {
        id: 274,
        x: 399,
        y: 111,
        width: 19.5,
        height: 32,
        xoffset: 1,
        yoffset: 2,
        page: 0,
        xadvance: 17.5
    }, {
        id: 256,
        x: 419.5,
        y: 111,
        width: 23.5,
        height: 32,
        xoffset: 0,
        yoffset: 2,
        page: 0,
        xadvance: 20
    }, {
        id: 332,
        x: 444,
        y: 111,
        width: 23,
        height: 32,
        xoffset: 1,
        yoffset: 2,
        page: 0,
        xadvance: 21
    }, {
        id: 298,
        x: 468,
        y: 111,
        width: 14,
        height: 32,
        xoffset: 1,
        yoffset: 2,
        page: 0,
        xadvance: 12.5
    }, {
        id: 351,
        x: 483,
        y: 111,
        width: 15,
        height: 31,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 13
    }, {
        id: 355,
        x: 1,
        y: 146,
        width: 18,
        height: 31,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 231,
        x: 20,
        y: 146,
        width: 18,
        height: 31,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 16
    }, {
        id: 63,
        x: 39,
        y: 146,
        width: 18,
        height: 31,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 329,
        x: 58,
        y: 146,
        width: 21,
        height: 31,
        xoffset: -1.5,
        yoffset: 3,
        page: 0,
        xadvance: 16.5
    }, {
        id: 343,
        x: 80,
        y: 146,
        width: 20,
        height: 31,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 291,
        x: 101,
        y: 146,
        width: 19.5,
        height: 31,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 17
    }, {
        id: 47,
        x: 121.5,
        y: 146,
        width: 21.5,
        height: 31,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 92,
        x: 144,
        y: 146,
        width: 21.5,
        height: 31,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 345,
        x: 166.5,
        y: 146,
        width: 20,
        height: 30.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 331,
        x: 187.5,
        y: 146,
        width: 18,
        height: 30.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 326,
        x: 206.5,
        y: 146,
        width: 18,
        height: 30.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 316,
        x: 225.5,
        y: 146,
        width: 16,
        height: 30.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 13
    }, {
        id: 311,
        x: 242.5,
        y: 146,
        width: 20.5,
        height: 30.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 18
    }, {
        id: 317,
        x: 264,
        y: 146,
        width: 22.5,
        height: 30,
        xoffset: 1.5,
        yoffset: 3.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 81,
        x: 287.5,
        y: 146,
        width: 25,
        height: 30,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 21
    }, {
        id: 349,
        x: 313.5,
        y: 146,
        width: 15,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 13
    }, {
        id: 341,
        x: 329.5,
        y: 146,
        width: 20,
        height: 29.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 271,
        x: 350.5,
        y: 146,
        width: 18,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 357,
        x: 369.5,
        y: 146,
        width: 18,
        height: 29.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 269,
        x: 388.5,
        y: 146,
        width: 18,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 16
    }, {
        id: 353,
        x: 407.5,
        y: 146,
        width: 15,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 13
    }, {
        id: 251,
        x: 423.5,
        y: 146,
        width: 18,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 16
    }, {
        id: 375,
        x: 442.5,
        y: 146,
        width: 19.5,
        height: 29.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 16
    }, {
        id: 283,
        x: 463,
        y: 146,
        width: 16.5,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 244,
        x: 480.5,
        y: 146,
        width: 19.5,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 265,
        x: 1,
        y: 179,
        width: 18,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 16
    }, {
        id: 328,
        x: 20,
        y: 179,
        width: 18,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 238,
        x: 39,
        y: 179,
        width: 14.5,
        height: 29.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 234,
        x: 54.5,
        y: 179,
        width: 16.5,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 226,
        x: 72,
        y: 179,
        width: 20,
        height: 29.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 309,
        x: 93,
        y: 179,
        width: 18.5,
        height: 29.5,
        xoffset: 0,
        yoffset: 4.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 229,
        x: 112.5,
        y: 179,
        width: 20,
        height: 29.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 367,
        x: 133.5,
        y: 179,
        width: 18,
        height: 29.5,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 16
    }, {
        id: 335,
        x: 152.5,
        y: 179,
        width: 19.5,
        height: 29,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 285,
        x: 173,
        y: 179,
        width: 19.5,
        height: 29,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 17
    }, {
        id: 337,
        x: 193.5,
        y: 179,
        width: 19.5,
        height: 29,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 37,
        x: 214,
        y: 179,
        width: 27,
        height: 29,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 25
    }, {
        id: 1105,
        x: 242,
        y: 179,
        width: 17,
        height: 29,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 279,
        x: 260,
        y: 179,
        width: 17,
        height: 29,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 382,
        x: 278,
        y: 179,
        width: 17.5,
        height: 29,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 267,
        x: 296.5,
        y: 179,
        width: 18,
        height: 29,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 259,
        x: 315.5,
        y: 179,
        width: 20,
        height: 29,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 293,
        x: 336.5,
        y: 179,
        width: 21,
        height: 29,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 252,
        x: 358.5,
        y: 179,
        width: 18,
        height: 29,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 241,
        x: 377.5,
        y: 179,
        width: 18,
        height: 29,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 246,
        x: 396.5,
        y: 179,
        width: 19.5,
        height: 29,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 245,
        x: 417,
        y: 179,
        width: 19.5,
        height: 29,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 228,
        x: 437.5,
        y: 179,
        width: 20,
        height: 29,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 227,
        x: 458.5,
        y: 179,
        width: 20,
        height: 29,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 369,
        x: 479.5,
        y: 179,
        width: 18,
        height: 29,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 16
    }, {
        id: 239,
        x: 1,
        y: 210.5,
        width: 15.5,
        height: 29,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 12
    }, {
        id: 373,
        x: 17.5,
        y: 210.5,
        width: 26,
        height: 29,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 23
    }, {
        id: 235,
        x: 44.5,
        y: 210.5,
        width: 17,
        height: 29,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 303,
        x: 62.5,
        y: 210.5,
        width: 12,
        height: 28.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 371,
        x: 75.5,
        y: 210.5,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 16
    }, {
        id: 301,
        x: 94.5,
        y: 210.5,
        width: 13.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 11
    }, {
        id: 224,
        x: 109,
        y: 210.5,
        width: 20,
        height: 28.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 225,
        x: 130,
        y: 210.5,
        width: 20,
        height: 28.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 216,
        x: 151,
        y: 210.5,
        width: 23.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 21
    }, {
        id: 243,
        x: 175.5,
        y: 210.5,
        width: 19.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 255,
        x: 196,
        y: 210.5,
        width: 19.5,
        height: 28.5,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 297,
        x: 216.5,
        y: 210.5,
        width: 14.5,
        height: 28.5,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 261,
        x: 232,
        y: 210.5,
        width: 20,
        height: 28.5,
        xoffset: .5,
        yoffset: 12,
        page: 0,
        xadvance: 16.5
    }, {
        id: 281,
        x: 253,
        y: 210.5,
        width: 16.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 12,
        page: 0,
        xadvance: 14.5
    }, {
        id: 232,
        x: 270.5,
        y: 210.5,
        width: 17,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 233,
        x: 288.5,
        y: 210.5,
        width: 17,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 365,
        x: 306.5,
        y: 210.5,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 263,
        x: 325.5,
        y: 210.5,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 236,
        x: 344.5,
        y: 210.5,
        width: 13,
        height: 28.5,
        xoffset: .5,
        yoffset: 5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 237,
        x: 358.5,
        y: 210.5,
        width: 13,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 361,
        x: 372.5,
        y: 210.5,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 289,
        x: 391.5,
        y: 210.5,
        width: 19.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 380,
        x: 412,
        y: 210.5,
        width: 17.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 287,
        x: 430.5,
        y: 210.5,
        width: 19.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17
    }, {
        id: 242,
        x: 451,
        y: 210.5,
        width: 19.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 324,
        x: 471.5,
        y: 210.5,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 347,
        x: 490.5,
        y: 210.5,
        width: 15,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 249,
        x: 1,
        y: 241.5,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 378,
        x: 20,
        y: 241.5,
        width: 17.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 253,
        x: 38.5,
        y: 241.5,
        width: 19.5,
        height: 28.5,
        xoffset: 0,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 250,
        x: 59,
        y: 241.5,
        width: 18,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 16
    }, {
        id: 314,
        x: 78,
        y: 241.5,
        width: 16,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 13
    }, {
        id: 277,
        x: 95,
        y: 241.5,
        width: 16.5,
        height: 28.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 33,
        x: 112.5,
        y: 241.5,
        width: 14,
        height: 28,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 12
    }, {
        id: 1071,
        x: 127.5,
        y: 241.5,
        width: 24,
        height: 28,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 22.5
    }, {
        id: 1081,
        x: 152.5,
        y: 241.5,
        width: 18,
        height: 28,
        xoffset: 1,
        yoffset: 5.5,
        page: 0,
        xadvance: 16
    }, {
        id: 54,
        x: 171.5,
        y: 241.5,
        width: 19.5,
        height: 28,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 57,
        x: 192,
        y: 241.5,
        width: 19.5,
        height: 28,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 17
    }, {
        id: 82,
        x: 212.5,
        y: 241.5,
        width: 24,
        height: 28,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 22.5
    }, {
        id: 36,
        x: 237.5,
        y: 241.5,
        width: 15,
        height: 28,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 299,
        x: 253.5,
        y: 241.5,
        width: 14,
        height: 27.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 11
    }, {
        id: 56,
        x: 268.5,
        y: 241.5,
        width: 20,
        height: 27.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 17
    }, {
        id: 66,
        x: 289.5,
        y: 241.5,
        width: 22.5,
        height: 27.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 20
    }, {
        id: 257,
        x: 313,
        y: 241.5,
        width: 20,
        height: 27.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 16.5
    }, {
        id: 1042,
        x: 334,
        y: 241.5,
        width: 22.5,
        height: 27.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 20
    }, {
        id: 1046,
        x: 357.5,
        y: 241.5,
        width: 33.5,
        height: 27.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 30.5
    }, {
        id: 333,
        x: 392,
        y: 241.5,
        width: 19.5,
        height: 27.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 17.5
    }, {
        id: 363,
        x: 412.5,
        y: 241.5,
        width: 18,
        height: 27.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 16
    }, {
        id: 1047,
        x: 431.5,
        y: 241.5,
        width: 19,
        height: 27.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 16
    }, {
        id: 50,
        x: 451.5,
        y: 241.5,
        width: 18.5,
        height: 27.5,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 275,
        x: 471,
        y: 241.5,
        width: 16.5,
        height: 27.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 14.5
    }, {
        id: 51,
        x: 488.5,
        y: 241.5,
        width: 19,
        height: 27.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 16
    }, {
        id: 83,
        x: 1,
        y: 272,
        width: 18,
        height: 27,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1070,
        x: 20,
        y: 272,
        width: 34,
        height: 27,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 32.5
    }, {
        id: 74,
        x: 55,
        y: 272,
        width: 21,
        height: 27,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 68,
        x: 77,
        y: 272,
        width: 21.5,
        height: 27,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 19.5
    }, {
        id: 208,
        x: 99.5,
        y: 272,
        width: 23.5,
        height: 27,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 20.5
    }, {
        id: 1066,
        x: 124,
        y: 272,
        width: 27.5,
        height: 27,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 24.5
    }, {
        id: 1069,
        x: 152.5,
        y: 272,
        width: 21.5,
        height: 27,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 19.5
    }, {
        id: 67,
        x: 175,
        y: 272,
        width: 21.5,
        height: 27,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 19.5
    }, {
        id: 75,
        x: 197.5,
        y: 272,
        width: 24.5,
        height: 27,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 71,
        x: 223,
        y: 272,
        width: 23,
        height: 27,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 20.5
    }, {
        id: 80,
        x: 247,
        y: 272,
        width: 24,
        height: 27,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 1067,
        x: 272,
        y: 272,
        width: 36,
        height: 27,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 34
    }, {
        id: 79,
        x: 309,
        y: 272,
        width: 23,
        height: 27,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 21
    }, {
        id: 1076,
        x: 333,
        y: 272,
        width: 26,
        height: 27,
        xoffset: 0,
        yoffset: 11.5,
        page: 0,
        xadvance: 22
    }, {
        id: 1068,
        x: 360,
        y: 272,
        width: 24,
        height: 27,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 272,
        x: 385,
        y: 272,
        width: 23.5,
        height: 27,
        xoffset: 0,
        yoffset: 7,
        page: 0,
        xadvance: 20.5
    }, {
        id: 55,
        x: 409.5,
        y: 272,
        width: 20,
        height: 27,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 17
    }, {
        id: 38,
        x: 430.5,
        y: 272,
        width: 21,
        height: 27,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 17.5
    }, {
        id: 53,
        x: 452.5,
        y: 272,
        width: 19,
        height: 27,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 48,
        x: 472.5,
        y: 272,
        width: 23,
        height: 27,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 21
    }, {
        id: 1057,
        x: 1,
        y: 301,
        width: 21.5,
        height: 27,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1050,
        x: 23.5,
        y: 301,
        width: 24.5,
        height: 27,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 1054,
        x: 49,
        y: 301,
        width: 23,
        height: 27,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 21
    }, {
        id: 8364,
        x: 73,
        y: 301,
        width: 23,
        height: 27,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1056,
        x: 97,
        y: 301,
        width: 24,
        height: 27,
        xoffset: 1,
        yoffset: 6.5,
        page: 0,
        xadvance: 21.5
    }, {
        id: 306,
        x: 122,
        y: 301,
        width: 32,
        height: 27,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 30
    }, {
        id: 1051,
        x: 155,
        y: 301,
        width: 31,
        height: 27,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 28
    }, {
        id: 338,
        x: 187,
        y: 301,
        width: 29.5,
        height: 27,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 27
    }, {
        id: 294,
        x: 217.5,
        y: 301,
        width: 25,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 23.5
    }, {
        id: 1040,
        x: 243.5,
        y: 301,
        width: 23.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 1059,
        x: 268,
        y: 301,
        width: 23.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1060,
        x: 292.5,
        y: 301,
        width: 26.5,
        height: 26.5,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 23.5
    }, {
        id: 1061,
        x: 320,
        y: 301,
        width: 23.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1063,
        x: 344.5,
        y: 301,
        width: 21.5,
        height: 26.5,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1064,
        x: 367,
        y: 301,
        width: 33.5,
        height: 26.5,
        xoffset: 2,
        yoffset: 7.5,
        page: 0,
        xadvance: 32.5
    }, {
        id: 73,
        x: 401.5,
        y: 301,
        width: 14,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1094,
        x: 416.5,
        y: 301,
        width: 21.5,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 11.5,
        page: 0,
        xadvance: 19
    }, {
        id: 1097,
        x: 439,
        y: 301,
        width: 28.5,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 11.5,
        page: 0,
        xadvance: 26
    }, {
        id: 1041,
        x: 468.5,
        y: 301,
        width: 22.5,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 21
    }, {
        id: 198,
        x: 1,
        y: 330,
        width: 30,
        height: 26.5,
        xoffset: -.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 27
    }, {
        id: 1055,
        x: 32,
        y: 330,
        width: 25,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 23.5
    }, {
        id: 1043,
        x: 58,
        y: 330,
        width: 19,
        height: 26.5,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1052,
        x: 78,
        y: 330,
        width: 25.5,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 24
    }, {
        id: 64,
        x: 104.5,
        y: 330,
        width: 24,
        height: 26.5,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 21.5
    }, {
        id: 72,
        x: 129.5,
        y: 330,
        width: 25,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 23.5
    }, {
        id: 76,
        x: 155.5,
        y: 330,
        width: 18.5,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1058,
        x: 175,
        y: 330,
        width: 21.5,
        height: 26.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 18.5
    }, {
        id: 1048,
        x: 197.5,
        y: 330,
        width: 21,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 85,
        x: 219.5,
        y: 330,
        width: 21.5,
        height: 26.5,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 319,
        x: 242,
        y: 330,
        width: 19,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 52,
        x: 262,
        y: 330,
        width: 21.5,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 321,
        x: 284.5,
        y: 330,
        width: 20.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 49,
        x: 306,
        y: 330,
        width: 14,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 86,
        x: 321,
        y: 330,
        width: 20.5,
        height: 26.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 17
    }, {
        id: 78,
        x: 342.5,
        y: 330,
        width: 21,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 1053,
        x: 364.5,
        y: 330,
        width: 25,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 23.5
    }, {
        id: 358,
        x: 390.5,
        y: 330,
        width: 21.5,
        height: 26.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 18.5
    }, {
        id: 87,
        x: 413,
        y: 330,
        width: 31.5,
        height: 26.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 28
    }, {
        id: 77,
        x: 445.5,
        y: 330,
        width: 25.5,
        height: 26.5,
        xoffset: 1.5,
        yoffset: 7,
        page: 0,
        xadvance: 24
    }, {
        id: 89,
        x: 472,
        y: 330,
        width: 23,
        height: 26.5,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 19
    }, {
        id: 88,
        x: 1,
        y: 358.5,
        width: 23.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 84,
        x: 25.5,
        y: 358.5,
        width: 21.5,
        height: 26.5,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 18.5
    }, {
        id: 90,
        x: 48,
        y: 358.5,
        width: 20.5,
        height: 26.5,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 18.5
    }, {
        id: 65,
        x: 69.5,
        y: 358.5,
        width: 23.5,
        height: 26.5,
        xoffset: 0,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 1045,
        x: 94,
        y: 358.5,
        width: 19.5,
        height: 26,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 318,
        x: 114.5,
        y: 358.5,
        width: 20,
        height: 26,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 17
    }, {
        id: 70,
        x: 135.5,
        y: 358.5,
        width: 19.5,
        height: 26,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 17
    }, {
        id: 222,
        x: 156,
        y: 358.5,
        width: 25,
        height: 26,
        xoffset: 1.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 22.5
    }, {
        id: 69,
        x: 182,
        y: 358.5,
        width: 19.5,
        height: 26,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 383,
        x: 202.5,
        y: 358.5,
        width: 13,
        height: 25.5,
        xoffset: 4.5,
        yoffset: 7.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 35,
        x: 216.5,
        y: 358.5,
        width: 19,
        height: 25.5,
        xoffset: .5,
        yoffset: 7.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 247,
        x: 236.5,
        y: 358.5,
        width: 18,
        height: 25.5,
        xoffset: 1,
        yoffset: 8.5,
        page: 0,
        xadvance: 16
    }, {
        id: 113,
        x: 255.5,
        y: 358.5,
        width: 21,
        height: 24.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 114,
        x: 277.5,
        y: 358.5,
        width: 20,
        height: 23.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 18.5
    }, {
        id: 248,
        x: 298.5,
        y: 358.5,
        width: 19.5,
        height: 23.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 17.5
    }, {
        id: 59,
        x: 319,
        y: 358.5,
        width: 12.5,
        height: 23.5,
        xoffset: 1,
        yoffset: 14,
        page: 0,
        xadvance: 11
    }, {
        id: 1103,
        x: 332.5,
        y: 358.5,
        width: 20,
        height: 23.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 18
    }, {
        id: 106,
        x: 353.5,
        y: 358.5,
        width: 17.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 12,
        page: 0,
        xadvance: 14.5
    }, {
        id: 99,
        x: 372,
        y: 358.5,
        width: 18,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 16
    }, {
        id: 98,
        x: 391,
        y: 358.5,
        width: 19,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 16.5
    }, {
        id: 103,
        x: 411,
        y: 358.5,
        width: 19.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 17
    }, {
        id: 240,
        x: 431.5,
        y: 358.5,
        width: 19.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 11.5,
        page: 0,
        xadvance: 17
    }, {
        id: 339,
        x: 452,
        y: 358.5,
        width: 24.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 22.5
    }, {
        id: 100,
        x: 477.5,
        y: 358.5,
        width: 18,
        height: 22.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 307,
        x: 1,
        y: 387,
        width: 27,
        height: 22.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 25
    }, {
        id: 111,
        x: 29,
        y: 387,
        width: 19.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 112,
        x: 49.5,
        y: 387,
        width: 20,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 18
    }, {
        id: 223,
        x: 70.5,
        y: 387,
        width: 28,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 26
    }, {
        id: 115,
        x: 99.5,
        y: 387,
        width: 15,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 13
    }, {
        id: 312,
        x: 115.5,
        y: 387,
        width: 20.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 17
    }, {
        id: 107,
        x: 137,
        y: 387,
        width: 20.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 18
    }, {
        id: 1098,
        x: 158.5,
        y: 387,
        width: 23,
        height: 22.5,
        xoffset: .5,
        yoffset: 11,
        page: 0,
        xadvance: 20
    }, {
        id: 1086,
        x: 182.5,
        y: 387,
        width: 19.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1078,
        x: 203,
        y: 387,
        width: 27.5,
        height: 22.5,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 24.5
    }, {
        id: 1082,
        x: 231.5,
        y: 387,
        width: 20.5,
        height: 22.5,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 17
    }, {
        id: 1079,
        x: 253,
        y: 387,
        width: 16,
        height: 22.5,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 13
    }, {
        id: 1083,
        x: 270,
        y: 387,
        width: 25.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 11.5,
        page: 0,
        xadvance: 22.5
    }, {
        id: 1088,
        x: 296.5,
        y: 387,
        width: 20,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 18
    }, {
        id: 1089,
        x: 317.5,
        y: 387,
        width: 18,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 16
    }, {
        id: 1100,
        x: 336.5,
        y: 387,
        width: 20,
        height: 22.5,
        xoffset: .5,
        yoffset: 11,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1102,
        x: 357.5,
        y: 387,
        width: 28,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 26
    }, {
        id: 1101,
        x: 386.5,
        y: 387,
        width: 18,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 15.5
    }, {
        id: 273,
        x: 405.5,
        y: 387,
        width: 19.5,
        height: 22.5,
        xoffset: 0,
        yoffset: 11.5,
        page: 0,
        xadvance: 17
    }, {
        id: 1074,
        x: 426,
        y: 387,
        width: 19,
        height: 22.5,
        xoffset: 1,
        yoffset: 11,
        page: 0,
        xadvance: 16.5
    }, {
        id: 1099,
        x: 446,
        y: 387,
        width: 12,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 305,
        x: 459,
        y: 387,
        width: 12,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 109,
        x: 472,
        y: 387,
        width: 21.5,
        height: 22,
        xoffset: 1.5,
        yoffset: 11.5,
        page: 0,
        xadvance: 20
    }, {
        id: 230,
        x: 1,
        y: 411.5,
        width: 24.5,
        height: 22,
        xoffset: .5,
        yoffset: 12,
        page: 0,
        xadvance: 22
    }, {
        id: 108,
        x: 26.5,
        y: 411.5,
        width: 16,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 13
    }, {
        id: 1093,
        x: 43.5,
        y: 411.5,
        width: 19.5,
        height: 22,
        xoffset: 0,
        yoffset: 12,
        page: 0,
        xadvance: 16
    }, {
        id: 1092,
        x: 64,
        y: 411.5,
        width: 22,
        height: 22,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 19
    }, {
        id: 1096,
        x: 87,
        y: 411.5,
        width: 27.5,
        height: 22,
        xoffset: 1.5,
        yoffset: 11.5,
        page: 0,
        xadvance: 26
    }, {
        id: 105,
        x: 115.5,
        y: 411.5,
        width: 12,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 116,
        x: 128.5,
        y: 411.5,
        width: 18,
        height: 22,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 110,
        x: 147.5,
        y: 411.5,
        width: 18,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 117,
        x: 166.5,
        y: 411.5,
        width: 18,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 16
    }, {
        id: 322,
        x: 185.5,
        y: 411.5,
        width: 17.5,
        height: 22,
        xoffset: 0,
        yoffset: 11.5,
        page: 0,
        xadvance: 13.5
    }, {
        id: 1095,
        x: 204,
        y: 411.5,
        width: 18,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 104,
        x: 223,
        y: 411.5,
        width: 21,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 320,
        x: 245,
        y: 411.5,
        width: 17.5,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 118,
        x: 263.5,
        y: 411.5,
        width: 17.5,
        height: 22,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 14
    }, {
        id: 1087,
        x: 282,
        y: 411.5,
        width: 21,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 19
    }, {
        id: 295,
        x: 304,
        y: 411.5,
        width: 21,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 97,
        x: 326,
        y: 411.5,
        width: 20,
        height: 22,
        xoffset: .5,
        yoffset: 12,
        page: 0,
        xadvance: 16.5
    }, {
        id: 101,
        x: 347,
        y: 411.5,
        width: 16.5,
        height: 22,
        xoffset: 1,
        yoffset: 12,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1072,
        x: 364.5,
        y: 411.5,
        width: 20,
        height: 22,
        xoffset: .5,
        yoffset: 12,
        page: 0,
        xadvance: 16.5
    }, {
        id: 1073,
        x: 385.5,
        y: 411.5,
        width: 19,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 17
    }, {
        id: 122,
        x: 405.5,
        y: 411.5,
        width: 17.5,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1091,
        x: 424,
        y: 411.5,
        width: 19.5,
        height: 22,
        xoffset: 0,
        yoffset: 12,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1090,
        x: 444.5,
        y: 411.5,
        width: 18,
        height: 22,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 1085,
        x: 463.5,
        y: 411.5,
        width: 21,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 19.5
    }, {
        id: 1084,
        x: 485.5,
        y: 411.5,
        width: 21.5,
        height: 22,
        xoffset: 1.5,
        yoffset: 11.5,
        page: 0,
        xadvance: 20
    }, {
        id: 359,
        x: 1,
        y: 435.5,
        width: 18,
        height: 22,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 15.5
    }, {
        id: 58,
        x: 20,
        y: 435.5,
        width: 12.5,
        height: 22,
        xoffset: 1.5,
        yoffset: 14,
        page: 0,
        xadvance: 11
    }, {
        id: 1077,
        x: 33.5,
        y: 435.5,
        width: 16.5,
        height: 22,
        xoffset: 1,
        yoffset: 12,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1080,
        x: 51,
        y: 435.5,
        width: 18,
        height: 22,
        xoffset: 1,
        yoffset: 11.5,
        page: 0,
        xadvance: 16
    }, {
        id: 1075,
        x: 70,
        y: 435.5,
        width: 16,
        height: 22,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 13
    }, {
        id: 121,
        x: 87,
        y: 435.5,
        width: 19.5,
        height: 22,
        xoffset: 0,
        yoffset: 11.5,
        page: 0,
        xadvance: 16
    }, {
        id: 119,
        x: 107.5,
        y: 435.5,
        width: 26,
        height: 22,
        xoffset: .5,
        yoffset: 11.5,
        page: 0,
        xadvance: 23
    }, {
        id: 254,
        x: 134.5,
        y: 435.5,
        width: 20.5,
        height: 22,
        xoffset: 1,
        yoffset: 12,
        page: 0,
        xadvance: 18.5
    }, {
        id: 120,
        x: 156,
        y: 435.5,
        width: 19.5,
        height: 22,
        xoffset: 0,
        yoffset: 12,
        page: 0,
        xadvance: 16
    }, {
        id: 102,
        x: 176.5,
        y: 435.5,
        width: 16.5,
        height: 21.5,
        xoffset: 1,
        yoffset: 12,
        page: 0,
        xadvance: 14.5
    }, {
        id: 42,
        x: 194,
        y: 435.5,
        width: 18.5,
        height: 19,
        xoffset: 1,
        yoffset: 8,
        page: 0,
        xadvance: 16.5
    }, {
        id: 43,
        x: 213.5,
        y: 435.5,
        width: 18,
        height: 17.5,
        xoffset: 1,
        yoffset: 12,
        page: 0,
        xadvance: 16
    }, {
        id: 215,
        x: 232.5,
        y: 435.5,
        width: 16,
        height: 15.5,
        xoffset: 2,
        yoffset: 13,
        page: 0,
        xadvance: 15.5
    }, {
        id: 8226,
        x: 249.5,
        y: 435.5,
        width: 15,
        height: 15,
        xoffset: 1,
        yoffset: 13,
        page: 0,
        xadvance: 13
    }, {
        id: 8217,
        x: 265.5,
        y: 435.5,
        width: 12,
        height: 14,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 10
    }, {
        id: 8216,
        x: 278.5,
        y: 435.5,
        width: 12,
        height: 14,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 10
    }, {
        id: 39,
        x: 291.5,
        y: 435.5,
        width: 10,
        height: 14,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 8
    }, {
        id: 8222,
        x: 302.5,
        y: 435.5,
        width: 21.5,
        height: 14,
        xoffset: 1,
        yoffset: 23.5,
        page: 0,
        xadvance: 20
    }, {
        id: 8221,
        x: 325,
        y: 435.5,
        width: 21.5,
        height: 14,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 8218,
        x: 347.5,
        y: 435.5,
        width: 12,
        height: 14,
        xoffset: 1,
        yoffset: 23.5,
        page: 0,
        xadvance: 10
    }, {
        id: 44,
        x: 360.5,
        y: 435.5,
        width: 12,
        height: 14,
        xoffset: 1,
        yoffset: 23.5,
        page: 0,
        xadvance: 10
    }, {
        id: 34,
        x: 373.5,
        y: 435.5,
        width: 21.5,
        height: 14,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 19
    }, {
        id: 8220,
        x: 396,
        y: 435.5,
        width: 21.5,
        height: 14,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 20
    }, {
        id: 8249,
        x: 418.5,
        y: 435.5,
        width: 12,
        height: 13.5,
        xoffset: .5,
        yoffset: 14.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 94,
        x: 431.5,
        y: 435.5,
        width: 15,
        height: 13.5,
        xoffset: 1,
        yoffset: 7.5,
        page: 0,
        xadvance: 12
    }, {
        id: 8250,
        x: 447.5,
        y: 435.5,
        width: 12,
        height: 13.5,
        xoffset: .5,
        yoffset: 14.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 61,
        x: 460.5,
        y: 435.5,
        width: 18,
        height: 13,
        xoffset: 1,
        yoffset: 14,
        page: 0,
        xadvance: 16
    }, {
        id: 8230,
        x: 1,
        y: 459.5,
        width: 37,
        height: 12,
        xoffset: 2,
        yoffset: 23.5,
        page: 0,
        xadvance: 37.5
    }, {
        id: 46,
        x: 39,
        y: 459.5,
        width: 12.5,
        height: 12,
        xoffset: 1,
        yoffset: 23.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 731,
        x: 52.5,
        y: 459.5,
        width: 11,
        height: 11.5,
        xoffset: .5,
        yoffset: 29,
        page: 0,
        xadvance: 8.5
    }, {
        id: 733,
        x: 64.5,
        y: 459.5,
        width: 14.5,
        height: 10,
        xoffset: 1,
        yoffset: 4.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 96,
        x: 80,
        y: 459.5,
        width: 11.5,
        height: 9.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 732,
        x: 92.5,
        y: 459.5,
        width: 14.5,
        height: 9.5,
        xoffset: 1,
        yoffset: 5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 126,
        x: 108,
        y: 459.5,
        width: 18.5,
        height: 9,
        xoffset: 1,
        yoffset: 16.5,
        page: 0,
        xadvance: 16.5
    }, {
        id: 95,
        x: 127.5,
        y: 459.5,
        width: 19,
        height: 7.5,
        xoffset: 0,
        yoffset: 30.5,
        page: 0,
        xadvance: 15
    }, {
        id: 45,
        x: 147.5,
        y: 459.5,
        width: 13.5,
        height: 7.5,
        xoffset: .5,
        yoffset: 17.5,
        page: 0,
        xadvance: 10
    }, {
        id: 8211,
        x: 162,
        y: 459.5,
        width: 19.5,
        height: 7.5,
        xoffset: .5,
        yoffset: 17.5,
        page: 0,
        xadvance: 16
    }, {
        id: 8212,
        x: 182.5,
        y: 459.5,
        width: 27.5,
        height: 7.5,
        xoffset: .5,
        yoffset: 17.5,
        page: 0,
        xadvance: 24
    }, {
        id: 8722,
        x: 211,
        y: 459.5,
        width: 18,
        height: 7,
        xoffset: 1,
        yoffset: 17.5,
        page: 0,
        xadvance: 16
    }, {
        id: 32,
        x: 230,
        y: 459.5,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 29,
        page: 0,
        xadvance: 8.5
    }, {
        id: 32,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 29,
        page: 0,
        xadvance: 8.5
    }],
    font5 = [{
        id: 123,
        x: 1,
        y: 1,
        width: 5,
        height: 17.5,
        xoffset: 1,
        yoffset: 1.5,
        page: 0,
        xadvance: 6
    }, {
        id: 125,
        x: 7,
        y: 1,
        width: 5,
        height: 17.5,
        xoffset: 0,
        yoffset: 1.5,
        page: 0,
        xadvance: 6
    }, {
        id: 91,
        x: 13,
        y: 1,
        width: 4,
        height: 17.5,
        xoffset: 1.5,
        yoffset: 2,
        page: 0,
        xadvance: 5.5
    }, {
        id: 93,
        x: 18,
        y: 1,
        width: 4,
        height: 17.5,
        xoffset: 0,
        yoffset: 2,
        page: 0,
        xadvance: 5.5
    }, {
        id: 290,
        x: 23,
        y: 1,
        width: 10,
        height: 17,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 199,
        x: 34,
        y: 1,
        width: 9.5,
        height: 17,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 342,
        x: 44.5,
        y: 1,
        width: 11,
        height: 17,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 350,
        x: 56.5,
        y: 1,
        width: 7.5,
        height: 17,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 310,
        x: 65,
        y: 1,
        width: 11,
        height: 16.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 11.5
    }, {
        id: 354,
        x: 77,
        y: 1,
        width: 9.5,
        height: 16.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10
    }, {
        id: 344,
        x: 87.5,
        y: 1,
        width: 11,
        height: 16.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 12
    }, {
        id: 325,
        x: 99.5,
        y: 1,
        width: 9,
        height: 16.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 315,
        x: 109.5,
        y: 1,
        width: 8,
        height: 16.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 8.5
    }, {
        id: 330,
        x: 118.5,
        y: 1,
        width: 9,
        height: 16.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 366,
        x: 128.5,
        y: 1,
        width: 9.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10.5
    }, {
        id: 368,
        x: 139,
        y: 1,
        width: 9.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10.5
    }, {
        id: 352,
        x: 149.5,
        y: 1,
        width: 7.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 8.5
    }, {
        id: 374,
        x: 158,
        y: 1,
        width: 10,
        height: 16,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 10
    }, {
        id: 381,
        x: 169,
        y: 1,
        width: 9,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10
    }, {
        id: 340,
        x: 179,
        y: 1,
        width: 11,
        height: 16,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 12
    }, {
        id: 194,
        x: 191,
        y: 1,
        width: 10.5,
        height: 16,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 10.5
    }, {
        id: 372,
        x: 202.5,
        y: 1,
        width: 14.5,
        height: 16,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 15
    }, {
        id: 327,
        x: 218,
        y: 1,
        width: 9,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10.5
    }, {
        id: 348,
        x: 228,
        y: 1,
        width: 7.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 8.5
    }, {
        id: 356,
        x: 236.5,
        y: 1,
        width: 9.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10
    }, {
        id: 336,
        x: 247,
        y: 1,
        width: 10,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 11
    }, {
        id: 308,
        x: 258,
        y: 1,
        width: 9,
        height: 16,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 9.5
    }, {
        id: 264,
        x: 268,
        y: 1,
        width: 9.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10.5
    }, {
        id: 284,
        x: 278.5,
        y: 1,
        width: 10,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 11
    }, {
        id: 282,
        x: 289.5,
        y: 1,
        width: 8.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 9.5
    }, {
        id: 270,
        x: 299,
        y: 1,
        width: 9.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10.5
    }, {
        id: 268,
        x: 309.5,
        y: 1,
        width: 9.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10.5
    }, {
        id: 206,
        x: 320,
        y: 1,
        width: 5.5,
        height: 16,
        xoffset: 1,
        yoffset: 0,
        page: 0,
        xadvance: 6.5
    }, {
        id: 212,
        x: 326.5,
        y: 1,
        width: 10,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 11
    }, {
        id: 219,
        x: 337.5,
        y: 1,
        width: 9.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10.5
    }, {
        id: 202,
        x: 348,
        y: 1,
        width: 8.5,
        height: 16,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 9.5
    }, {
        id: 197,
        x: 357.5,
        y: 1,
        width: 10.5,
        height: 16,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1049,
        x: 369,
        y: 1,
        width: 9,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1044,
        x: 379,
        y: 1,
        width: 14.5,
        height: 15.5,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 14.5
    }, {
        id: 1025,
        x: 394.5,
        y: 1,
        width: 8.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 258,
        x: 404,
        y: 1,
        width: 10.5,
        height: 15.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 278,
        x: 415.5,
        y: 1,
        width: 8.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 300,
        x: 425,
        y: 1,
        width: 5.5,
        height: 15.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 214,
        x: 431.5,
        y: 1,
        width: 10,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 201,
        x: 442.5,
        y: 1,
        width: 8.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 213,
        x: 452,
        y: 1,
        width: 10,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 217,
        x: 463,
        y: 1,
        width: 9.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 41,
        x: 473.5,
        y: 1,
        width: 4.5,
        height: 15.5,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 6
    }, {
        id: 40,
        x: 479,
        y: 1,
        width: 4.5,
        height: 15.5,
        xoffset: 1.5,
        yoffset: 3,
        page: 0,
        xadvance: 6
    }, {
        id: 211,
        x: 484.5,
        y: 1,
        width: 10,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 210,
        x: 495.5,
        y: 1,
        width: 10,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 379,
        x: 1,
        y: 20.5,
        width: 9,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10
    }, {
        id: 377,
        x: 11,
        y: 20.5,
        width: 9,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10
    }, {
        id: 376,
        x: 21,
        y: 20.5,
        width: 10,
        height: 15.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 10
    }, {
        id: 209,
        x: 32,
        y: 20.5,
        width: 9,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 218,
        x: 42,
        y: 20.5,
        width: 9.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 370,
        x: 52.5,
        y: 20.5,
        width: 9.5,
        height: 15.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 207,
        x: 63,
        y: 20.5,
        width: 6,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 220,
        x: 70,
        y: 20.5,
        width: 9.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 364,
        x: 80.5,
        y: 20.5,
        width: 9.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 334,
        x: 91,
        y: 20.5,
        width: 10,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 360,
        x: 102,
        y: 20.5,
        width: 9.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 205,
        x: 112.5,
        y: 20.5,
        width: 5.5,
        height: 15.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 204,
        x: 119,
        y: 20.5,
        width: 5.5,
        height: 15.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 203,
        x: 125.5,
        y: 20.5,
        width: 8.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 221,
        x: 135,
        y: 20.5,
        width: 10,
        height: 15.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 10
    }, {
        id: 304,
        x: 146,
        y: 20.5,
        width: 5.5,
        height: 15.5,
        xoffset: 1,
        yoffset: .5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 200,
        x: 152.5,
        y: 20.5,
        width: 8.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 346,
        x: 162,
        y: 20.5,
        width: 7.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 196,
        x: 170.5,
        y: 20.5,
        width: 10.5,
        height: 15.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 195,
        x: 182,
        y: 20.5,
        width: 10.5,
        height: 15.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 193,
        x: 193.5,
        y: 20.5,
        width: 10.5,
        height: 15.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 192,
        x: 205,
        y: 20.5,
        width: 10.5,
        height: 15.5,
        xoffset: 0,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 296,
        x: 216.5,
        y: 20.5,
        width: 5.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 302,
        x: 223,
        y: 20.5,
        width: 5.5,
        height: 15.5,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 6.5
    }, {
        id: 260,
        x: 229.5,
        y: 20.5,
        width: 10.5,
        height: 15.5,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 262,
        x: 241,
        y: 20.5,
        width: 9.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 266,
        x: 251.5,
        y: 20.5,
        width: 9.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 286,
        x: 262,
        y: 20.5,
        width: 10,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 276,
        x: 273,
        y: 20.5,
        width: 8.5,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 323,
        x: 282.5,
        y: 20.5,
        width: 9,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 280,
        x: 292.5,
        y: 20.5,
        width: 8.5,
        height: 15.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 9.5
    }, {
        id: 292,
        x: 302,
        y: 20.5,
        width: 11,
        height: 15.5,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 12.5
    }, {
        id: 288,
        x: 314,
        y: 20.5,
        width: 10,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 11
    }, {
        id: 313,
        x: 325,
        y: 20.5,
        width: 8,
        height: 15.5,
        xoffset: .5,
        yoffset: .5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1062,
        x: 334,
        y: 20.5,
        width: 11.5,
        height: 15,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 12.5
    }, {
        id: 362,
        x: 346.5,
        y: 20.5,
        width: 9.5,
        height: 15,
        xoffset: .5,
        yoffset: 1,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1065,
        x: 357,
        y: 20.5,
        width: 16.5,
        height: 15,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 17.5
    }, {
        id: 332,
        x: 374.5,
        y: 20.5,
        width: 10,
        height: 15,
        xoffset: .5,
        yoffset: 1,
        page: 0,
        xadvance: 11
    }, {
        id: 298,
        x: 385.5,
        y: 20.5,
        width: 5.5,
        height: 15,
        xoffset: .5,
        yoffset: 1,
        page: 0,
        xadvance: 6.5
    }, {
        id: 256,
        x: 392,
        y: 20.5,
        width: 10.5,
        height: 15,
        xoffset: 0,
        yoffset: 1,
        page: 0,
        xadvance: 10.5
    }, {
        id: 124,
        x: 403.5,
        y: 20.5,
        width: 2.5,
        height: 15,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 5
    }, {
        id: 274,
        x: 407,
        y: 20.5,
        width: 8.5,
        height: 15,
        xoffset: .5,
        yoffset: 1,
        page: 0,
        xadvance: 9.5
    }, {
        id: 92,
        x: 416.5,
        y: 20.5,
        width: 9.5,
        height: 14.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 351,
        x: 427,
        y: 20.5,
        width: 6,
        height: 14.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 7
    }, {
        id: 329,
        x: 434,
        y: 20.5,
        width: 9,
        height: 14.5,
        xoffset: -1,
        yoffset: 1.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 291,
        x: 444,
        y: 20.5,
        width: 8.5,
        height: 14.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 63,
        x: 453.5,
        y: 20.5,
        width: 7.5,
        height: 14.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 8
    }, {
        id: 47,
        x: 462,
        y: 20.5,
        width: 9.5,
        height: 14.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 343,
        x: 472.5,
        y: 20.5,
        width: 8.5,
        height: 14.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 10
    }, {
        id: 231,
        x: 482,
        y: 20.5,
        width: 7.5,
        height: 14.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 355,
        x: 490.5,
        y: 20.5,
        width: 7.5,
        height: 14.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8
    }, {
        id: 326,
        x: 499,
        y: 20.5,
        width: 7.5,
        height: 14,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 317,
        x: 1,
        y: 38,
        width: 10,
        height: 14,
        xoffset: .5,
        yoffset: 2,
        page: 0,
        xadvance: 10.5
    }, {
        id: 311,
        x: 12,
        y: 38,
        width: 9,
        height: 14,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9.5
    }, {
        id: 316,
        x: 22,
        y: 38,
        width: 6.5,
        height: 14,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 7
    }, {
        id: 81,
        x: 29.5,
        y: 38,
        width: 11.5,
        height: 14,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 331,
        x: 42,
        y: 38,
        width: 7.5,
        height: 14,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 345,
        x: 50.5,
        y: 38,
        width: 8.5,
        height: 14,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 10
    }, {
        id: 328,
        x: 60,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 269,
        x: 68.5,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 271,
        x: 77,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 251,
        x: 85.5,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 246,
        x: 94,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 9
    }, {
        id: 244,
        x: 103.5,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 9
    }, {
        id: 309,
        x: 113,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 234,
        x: 121.5,
        y: 38,
        width: 7,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 283,
        x: 129.5,
        y: 38,
        width: 7,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 265,
        x: 137.5,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 341,
        x: 146,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 10
    }, {
        id: 229,
        x: 155.5,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 285,
        x: 165,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 9
    }, {
        id: 337,
        x: 174.5,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 9
    }, {
        id: 228,
        x: 184,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 227,
        x: 193.5,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 226,
        x: 203,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 349,
        x: 212.5,
        y: 38,
        width: 6,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 7
    }, {
        id: 293,
        x: 219.5,
        y: 38,
        width: 9,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 259,
        x: 229.5,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 353,
        x: 239,
        y: 38,
        width: 6,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 7
    }, {
        id: 238,
        x: 246,
        y: 38,
        width: 5.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 5.5
    }, {
        id: 357,
        x: 252.5,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 367,
        x: 261,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 369,
        x: 269.5,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 373,
        x: 278,
        y: 38,
        width: 11.5,
        height: 13.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 12
    }, {
        id: 375,
        x: 290.5,
        y: 38,
        width: 8.5,
        height: 13.5,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 382,
        x: 300,
        y: 38,
        width: 7.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 37,
        x: 308.5,
        y: 38,
        width: 12.5,
        height: 13.5,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 13
    }, {
        id: 1105,
        x: 322,
        y: 38,
        width: 7,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 82,
        x: 330,
        y: 38,
        width: 11,
        height: 13,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 279,
        x: 342,
        y: 38,
        width: 7,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 252,
        x: 350,
        y: 38,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 216,
        x: 358.5,
        y: 38,
        width: 10.5,
        height: 13,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 253,
        x: 370,
        y: 38,
        width: 8.5,
        height: 13,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 8.5
    }, {
        id: 289,
        x: 379.5,
        y: 38,
        width: 8.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 9
    }, {
        id: 324,
        x: 389,
        y: 38,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 8.5
    }, {
        id: 36,
        x: 397.5,
        y: 38,
        width: 6,
        height: 13,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 371,
        x: 404.5,
        y: 38,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 301,
        x: 413,
        y: 38,
        width: 5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 5.5
    }, {
        id: 33,
        x: 419,
        y: 38,
        width: 5.5,
        height: 13,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 6.5
    }, {
        id: 224,
        x: 425.5,
        y: 38,
        width: 8.5,
        height: 13,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 8.5
    }, {
        id: 225,
        x: 435,
        y: 38,
        width: 8.5,
        height: 13,
        xoffset: 0,
        yoffset: 3,
        page: 0,
        xadvance: 8.5
    }, {
        id: 287,
        x: 444.5,
        y: 38,
        width: 8.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 9
    }, {
        id: 297,
        x: 454,
        y: 38,
        width: 5.5,
        height: 13,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 5.5
    }, {
        id: 57,
        x: 460.5,
        y: 38,
        width: 8.5,
        height: 13,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 9
    }, {
        id: 335,
        x: 470,
        y: 38,
        width: 8.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 9
    }, {
        id: 281,
        x: 479.5,
        y: 38,
        width: 7,
        height: 13,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 8
    }, {
        id: 54,
        x: 487.5,
        y: 38,
        width: 8.5,
        height: 13,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 9
    }, {
        id: 232,
        x: 497,
        y: 38,
        width: 7,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 8
    }, {
        id: 233,
        x: 1,
        y: 54,
        width: 7,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 8
    }, {
        id: 255,
        x: 9,
        y: 54,
        width: 8.5,
        height: 13,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 235,
        x: 18.5,
        y: 54,
        width: 7,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 236,
        x: 26.5,
        y: 54,
        width: 4.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 5.5
    }, {
        id: 237,
        x: 32,
        y: 54,
        width: 5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 5.5
    }, {
        id: 277,
        x: 38,
        y: 54,
        width: 7,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 239,
        x: 46,
        y: 54,
        width: 6,
        height: 13,
        xoffset: 0,
        yoffset: 2.5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 347,
        x: 53,
        y: 54,
        width: 6,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 7
    }, {
        id: 241,
        x: 60,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 242,
        x: 68.5,
        y: 54,
        width: 8.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 9
    }, {
        id: 243,
        x: 78,
        y: 54,
        width: 8.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 9
    }, {
        id: 1071,
        x: 87.5,
        y: 54,
        width: 10.5,
        height: 13,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 245,
        x: 99,
        y: 54,
        width: 8.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 9
    }, {
        id: 361,
        x: 108.5,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 380,
        x: 117,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8
    }, {
        id: 378,
        x: 125.5,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 8
    }, {
        id: 249,
        x: 134,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 8.5
    }, {
        id: 250,
        x: 142.5,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 8.5
    }, {
        id: 267,
        x: 151,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1081,
        x: 159.5,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 8.5
    }, {
        id: 263,
        x: 168,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 8.5
    }, {
        id: 261,
        x: 176.5,
        y: 54,
        width: 8.5,
        height: 13,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 365,
        x: 186,
        y: 54,
        width: 7.5,
        height: 13,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 303,
        x: 194.5,
        y: 54,
        width: 4.5,
        height: 13,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 5.5
    }, {
        id: 314,
        x: 200,
        y: 54,
        width: 6.5,
        height: 13,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 7
    }, {
        id: 1046,
        x: 207.5,
        y: 54,
        width: 15.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 16
    }, {
        id: 1047,
        x: 224,
        y: 54,
        width: 8,
        height: 12.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 48,
        x: 233,
        y: 54,
        width: 10,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 51,
        x: 244,
        y: 54,
        width: 8,
        height: 12.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 363,
        x: 253,
        y: 54,
        width: 7.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 50,
        x: 261.5,
        y: 54,
        width: 7.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 53,
        x: 270,
        y: 54,
        width: 8,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 9
    }, {
        id: 1054,
        x: 279,
        y: 54,
        width: 10,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 66,
        x: 290,
        y: 54,
        width: 10,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 8364,
        x: 301,
        y: 54,
        width: 10,
        height: 12.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 55,
        x: 312,
        y: 54,
        width: 8.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 9
    }, {
        id: 1056,
        x: 321.5,
        y: 54,
        width: 10.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1070,
        x: 333,
        y: 54,
        width: 16,
        height: 12.5,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 17.5
    }, {
        id: 257,
        x: 350,
        y: 54,
        width: 8.5,
        height: 12.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 272,
        x: 359.5,
        y: 54,
        width: 10.5,
        height: 12.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 67,
        x: 371,
        y: 54,
        width: 9.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 68,
        x: 381.5,
        y: 54,
        width: 9.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 275,
        x: 392,
        y: 54,
        width: 7,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 8
    }, {
        id: 1057,
        x: 400,
        y: 54,
        width: 9.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 56,
        x: 410.5,
        y: 54,
        width: 8.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 9
    }, {
        id: 338,
        x: 420,
        y: 54,
        width: 14,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 14.5
    }, {
        id: 38,
        x: 435,
        y: 54,
        width: 9,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 9.5
    }, {
        id: 71,
        x: 445,
        y: 54,
        width: 10,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 1076,
        x: 456,
        y: 54,
        width: 11.5,
        height: 12.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1069,
        x: 468.5,
        y: 54,
        width: 9.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1050,
        x: 479,
        y: 54,
        width: 11,
        height: 12.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1068,
        x: 491,
        y: 54,
        width: 11,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 333,
        x: 1,
        y: 69,
        width: 8.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 9
    }, {
        id: 75,
        x: 10.5,
        y: 69,
        width: 11,
        height: 12.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 11.5
    }, {
        id: 208,
        x: 22.5,
        y: 69,
        width: 10.5,
        height: 12.5,
        xoffset: 0,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 1042,
        x: 34,
        y: 69,
        width: 10,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1051,
        x: 45,
        y: 69,
        width: 14.5,
        height: 12.5,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 15
    }, {
        id: 1067,
        x: 60.5,
        y: 69,
        width: 17,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 18
    }, {
        id: 79,
        x: 78.5,
        y: 69,
        width: 10,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 80,
        x: 89.5,
        y: 69,
        width: 10.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 83,
        x: 101,
        y: 69,
        width: 7.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 306,
        x: 109.5,
        y: 69,
        width: 15,
        height: 12.5,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 16
    }, {
        id: 299,
        x: 125.5,
        y: 69,
        width: 5.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 6
    }, {
        id: 1066,
        x: 132,
        y: 69,
        width: 12.5,
        height: 12.5,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 13
    }, {
        id: 90,
        x: 145.5,
        y: 69,
        width: 9,
        height: 12,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 10
    }, {
        id: 294,
        x: 155.5,
        y: 69,
        width: 11,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1040,
        x: 167.5,
        y: 69,
        width: 10.5,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 198,
        x: 179,
        y: 69,
        width: 14,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 14.5
    }, {
        id: 222,
        x: 194,
        y: 69,
        width: 11,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 12
    }, {
        id: 89,
        x: 206,
        y: 69,
        width: 10,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 10
    }, {
        id: 76,
        x: 217,
        y: 69,
        width: 8,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 8.5
    }, {
        id: 88,
        x: 226,
        y: 69,
        width: 10.5,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1094,
        x: 237.5,
        y: 69,
        width: 9.5,
        height: 12,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 10
    }, {
        id: 72,
        x: 248,
        y: 69,
        width: 11,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1043,
        x: 260,
        y: 69,
        width: 8,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1097,
        x: 269,
        y: 69,
        width: 13,
        height: 12,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 87,
        x: 283,
        y: 69,
        width: 14.5,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 15
    }, {
        id: 86,
        x: 298.5,
        y: 69,
        width: 9,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 9
    }, {
        id: 85,
        x: 308.5,
        y: 69,
        width: 9.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 358,
        x: 319,
        y: 69,
        width: 9.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10
    }, {
        id: 84,
        x: 329.5,
        y: 69,
        width: 9.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10
    }, {
        id: 1041,
        x: 340,
        y: 69,
        width: 10,
        height: 12,
        xoffset: 1,
        yoffset: 3.5,
        page: 0,
        xadvance: 11
    }, {
        id: 1064,
        x: 351,
        y: 69,
        width: 15.5,
        height: 12,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 17.5
    }, {
        id: 1052,
        x: 367.5,
        y: 69,
        width: 11.5,
        height: 12,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 13
    }, {
        id: 1053,
        x: 380,
        y: 69,
        width: 11,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 12.5
    }, {
        id: 318,
        x: 392,
        y: 69,
        width: 8.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 9
    }, {
        id: 319,
        x: 401.5,
        y: 69,
        width: 8,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 8.5
    }, {
        id: 65,
        x: 410.5,
        y: 69,
        width: 10.5,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 321,
        x: 422,
        y: 69,
        width: 9,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 8.5
    }, {
        id: 64,
        x: 432,
        y: 69,
        width: 10.5,
        height: 12,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 11.5
    }, {
        id: 1045,
        x: 443.5,
        y: 69,
        width: 8.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 9.5
    }, {
        id: 1058,
        x: 453,
        y: 69,
        width: 9.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10
    }, {
        id: 1063,
        x: 463.5,
        y: 69,
        width: 9.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 78,
        x: 474,
        y: 69,
        width: 9,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 77,
        x: 484,
        y: 69,
        width: 11.5,
        height: 12,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 13
    }, {
        id: 49,
        x: 496.5,
        y: 69,
        width: 5.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 6.5
    }, {
        id: 1055,
        x: 1,
        y: 83.5,
        width: 11,
        height: 12,
        xoffset: .5,
        yoffset: 3.5,
        page: 0,
        xadvance: 12.5
    }, {
        id: 1061,
        x: 13,
        y: 83.5,
        width: 10.5,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 74,
        x: 24.5,
        y: 83.5,
        width: 9,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 9.5
    }, {
        id: 73,
        x: 34.5,
        y: 83.5,
        width: 5.5,
        height: 12,
        xoffset: 1,
        yoffset: 4,
        page: 0,
        xadvance: 6.5
    }, {
        id: 52,
        x: 41,
        y: 83.5,
        width: 9.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1048,
        x: 51.5,
        y: 83.5,
        width: 9,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1059,
        x: 61.5,
        y: 83.5,
        width: 10.5,
        height: 12,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1060,
        x: 73,
        y: 83.5,
        width: 12,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 12.5
    }, {
        id: 69,
        x: 86,
        y: 83.5,
        width: 8.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 9.5
    }, {
        id: 70,
        x: 95.5,
        y: 83.5,
        width: 8.5,
        height: 12,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 9
    }, {
        id: 247,
        x: 105,
        y: 83.5,
        width: 7.5,
        height: 11.5,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 35,
        x: 113.5,
        y: 83.5,
        width: 8,
        height: 11.5,
        xoffset: 0,
        yoffset: 4,
        page: 0,
        xadvance: 8.5
    }, {
        id: 383,
        x: 122.5,
        y: 83.5,
        width: 5,
        height: 11.5,
        xoffset: 2.5,
        yoffset: 4,
        page: 0,
        xadvance: 7
    }, {
        id: 113,
        x: 128.5,
        y: 83.5,
        width: 9,
        height: 11,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9.5
    }, {
        id: 248,
        x: 138.5,
        y: 83.5,
        width: 8.5,
        height: 10.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 1103,
        x: 148,
        y: 83.5,
        width: 8.5,
        height: 10.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9.5
    }, {
        id: 59,
        x: 157.5,
        y: 83.5,
        width: 4.5,
        height: 10.5,
        xoffset: .5,
        yoffset: 7.5,
        page: 0,
        xadvance: 6
    }, {
        id: 114,
        x: 163,
        y: 83.5,
        width: 8.5,
        height: 10.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 10
    }, {
        id: 273,
        x: 172.5,
        y: 83.5,
        width: 8.5,
        height: 10,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 106,
        x: 182,
        y: 83.5,
        width: 7.5,
        height: 10,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 111,
        x: 190.5,
        y: 83.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 103,
        x: 200,
        y: 83.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 107,
        x: 209.5,
        y: 83.5,
        width: 9,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9.5
    }, {
        id: 307,
        x: 219.5,
        y: 83.5,
        width: 12.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 13.5
    }, {
        id: 339,
        x: 233,
        y: 83.5,
        width: 11,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 12
    }, {
        id: 100,
        x: 245,
        y: 83.5,
        width: 7.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 223,
        x: 253.5,
        y: 83.5,
        width: 13,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 99,
        x: 267.5,
        y: 83.5,
        width: 7.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1101,
        x: 276,
        y: 83.5,
        width: 7.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8
    }, {
        id: 312,
        x: 284.5,
        y: 83.5,
        width: 9,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 98,
        x: 294.5,
        y: 83.5,
        width: 8,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 1100,
        x: 303.5,
        y: 83.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 112,
        x: 313,
        y: 83.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9.5
    }, {
        id: 1102,
        x: 322.5,
        y: 83.5,
        width: 13,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 1089,
        x: 336.5,
        y: 83.5,
        width: 7.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1098,
        x: 345,
        y: 83.5,
        width: 10,
        height: 10,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1078,
        x: 356,
        y: 83.5,
        width: 12.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 13
    }, {
        id: 115,
        x: 369.5,
        y: 83.5,
        width: 6,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 7
    }, {
        id: 1074,
        x: 376.5,
        y: 83.5,
        width: 8,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 1086,
        x: 385.5,
        y: 83.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 1088,
        x: 395,
        y: 83.5,
        width: 8.5,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9.5
    }, {
        id: 1082,
        x: 404.5,
        y: 83.5,
        width: 9,
        height: 10,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 1083,
        x: 414.5,
        y: 83.5,
        width: 11.5,
        height: 10,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 12
    }, {
        id: 1079,
        x: 427,
        y: 83.5,
        width: 6.5,
        height: 10,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 7
    }, {
        id: 240,
        x: 434.5,
        y: 83.5,
        width: 8.5,
        height: 10,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 110,
        x: 444,
        y: 83.5,
        width: 7.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 305,
        x: 452.5,
        y: 83.5,
        width: 4.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 5.5
    }, {
        id: 97,
        x: 458,
        y: 83.5,
        width: 8.5,
        height: 9.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1096,
        x: 467.5,
        y: 83.5,
        width: 12.5,
        height: 9.5,
        xoffset: 1,
        yoffset: 6,
        page: 0,
        xadvance: 14
    }, {
        id: 109,
        x: 481,
        y: 83.5,
        width: 9,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 10.5
    }, {
        id: 254,
        x: 491,
        y: 83.5,
        width: 9,
        height: 9.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 10
    }, {
        id: 116,
        x: 501,
        y: 83.5,
        width: 7.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8
    }, {
        id: 1095,
        x: 1,
        y: 97.5,
        width: 7.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1093,
        x: 9.5,
        y: 97.5,
        width: 8.5,
        height: 9.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1092,
        x: 19,
        y: 97.5,
        width: 9.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 10
    }, {
        id: 1091,
        x: 29.5,
        y: 97.5,
        width: 8.5,
        height: 9.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 8
    }, {
        id: 119,
        x: 39,
        y: 97.5,
        width: 11.5,
        height: 9.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 12
    }, {
        id: 105,
        x: 51.5,
        y: 97.5,
        width: 4.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 5.5
    }, {
        id: 359,
        x: 57,
        y: 97.5,
        width: 7.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8
    }, {
        id: 120,
        x: 65.5,
        y: 97.5,
        width: 8.5,
        height: 9.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 104,
        x: 75,
        y: 97.5,
        width: 9,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 10.5
    }, {
        id: 121,
        x: 85,
        y: 97.5,
        width: 8.5,
        height: 9.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 122,
        x: 94.5,
        y: 97.5,
        width: 7.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8
    }, {
        id: 230,
        x: 103,
        y: 97.5,
        width: 11,
        height: 9.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 12
    }, {
        id: 1090,
        x: 115,
        y: 97.5,
        width: 7.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8
    }, {
        id: 108,
        x: 123.5,
        y: 97.5,
        width: 6.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 7
    }, {
        id: 118,
        x: 131,
        y: 97.5,
        width: 7,
        height: 9.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 7.5
    }, {
        id: 102,
        x: 139,
        y: 97.5,
        width: 7,
        height: 9.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 7.5
    }, {
        id: 1072,
        x: 147,
        y: 97.5,
        width: 8.5,
        height: 9.5,
        xoffset: 0,
        yoffset: 6.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 101,
        x: 156.5,
        y: 97.5,
        width: 7,
        height: 9.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 8
    }, {
        id: 322,
        x: 164.5,
        y: 97.5,
        width: 7,
        height: 9.5,
        xoffset: 0,
        yoffset: 6,
        page: 0,
        xadvance: 7.5
    }, {
        id: 320,
        x: 172.5,
        y: 97.5,
        width: 7.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8
    }, {
        id: 1099,
        x: 181,
        y: 97.5,
        width: 4.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 5.5
    }, {
        id: 1080,
        x: 186.5,
        y: 97.5,
        width: 7.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 295,
        x: 195,
        y: 97.5,
        width: 9,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 10.5
    }, {
        id: 117,
        x: 205,
        y: 97.5,
        width: 7.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 8.5
    }, {
        id: 1077,
        x: 213.5,
        y: 97.5,
        width: 7,
        height: 9.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 8
    }, {
        id: 1084,
        x: 221.5,
        y: 97.5,
        width: 9,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 10.5
    }, {
        id: 58,
        x: 231.5,
        y: 97.5,
        width: 4.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 7.5,
        page: 0,
        xadvance: 6
    }, {
        id: 1085,
        x: 237,
        y: 97.5,
        width: 9,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 10.5
    }, {
        id: 1075,
        x: 247,
        y: 97.5,
        width: 6.5,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 7
    }, {
        id: 1073,
        x: 254.5,
        y: 97.5,
        width: 8,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 9
    }, {
        id: 1087,
        x: 263.5,
        y: 97.5,
        width: 9,
        height: 9.5,
        xoffset: .5,
        yoffset: 6,
        page: 0,
        xadvance: 10
    }, {
        id: 42,
        x: 273.5,
        y: 97.5,
        width: 7.5,
        height: 8,
        xoffset: .5,
        yoffset: 4.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 43,
        x: 282,
        y: 97.5,
        width: 7.5,
        height: 7.5,
        xoffset: .5,
        yoffset: 6.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 215,
        x: 290.5,
        y: 97.5,
        width: 6.5,
        height: 6.5,
        xoffset: 1,
        yoffset: 7,
        page: 0,
        xadvance: 8
    }, {
        id: 8226,
        x: 298,
        y: 97.5,
        width: 6,
        height: 6,
        xoffset: .5,
        yoffset: 7,
        page: 0,
        xadvance: 7
    }, {
        id: 34,
        x: 305,
        y: 97.5,
        width: 9,
        height: 5.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10
    }, {
        id: 39,
        x: 315,
        y: 97.5,
        width: 3,
        height: 5.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 4.5
    }, {
        id: 8220,
        x: 319,
        y: 97.5,
        width: 9.5,
        height: 5.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 8218,
        x: 329.5,
        y: 97.5,
        width: 4,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 5.5
    }, {
        id: 8222,
        x: 334.5,
        y: 97.5,
        width: 9.5,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 8221,
        x: 345,
        y: 97.5,
        width: 9.5,
        height: 5.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 44,
        x: 355.5,
        y: 97.5,
        width: 4,
        height: 5.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 5.5
    }, {
        id: 8216,
        x: 360.5,
        y: 97.5,
        width: 4,
        height: 5.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 5.5
    }, {
        id: 8217,
        x: 365.5,
        y: 97.5,
        width: 4,
        height: 5.5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 5.5
    }, {
        id: 8250,
        x: 370.5,
        y: 97.5,
        width: 4,
        height: 5,
        xoffset: 0,
        yoffset: 8,
        page: 0,
        xadvance: 4.5
    }, {
        id: 8249,
        x: 375.5,
        y: 97.5,
        width: 4,
        height: 5,
        xoffset: 0,
        yoffset: 8,
        page: 0,
        xadvance: 4.5
    }, {
        id: 61,
        x: 380.5,
        y: 97.5,
        width: 7.5,
        height: 5,
        xoffset: .5,
        yoffset: 7.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 94,
        x: 389,
        y: 97.5,
        width: 6,
        height: 5,
        xoffset: .5,
        yoffset: 4,
        page: 0,
        xadvance: 6.5
    }, {
        id: 46,
        x: 396,
        y: 97.5,
        width: 4.5,
        height: 4.5,
        xoffset: .5,
        yoffset: 12.5,
        page: 0,
        xadvance: 5.5
    }, {
        id: 8230,
        x: 401.5,
        y: 97.5,
        width: 17.5,
        height: 4.5,
        xoffset: 1,
        yoffset: 12.5,
        page: 0,
        xadvance: 20
    }, {
        id: 731,
        x: 420,
        y: 97.5,
        width: 4,
        height: 4,
        xoffset: .5,
        yoffset: 15.5,
        page: 0,
        xadvance: 4.5
    }, {
        id: 733,
        x: 425,
        y: 97.5,
        width: 5.5,
        height: 3.5,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 732,
        x: 431.5,
        y: 97.5,
        width: 5.5,
        height: 3,
        xoffset: .5,
        yoffset: 2.5,
        page: 0,
        xadvance: 6.5
    }, {
        id: 96,
        x: 438,
        y: 97.5,
        width: 4,
        height: 3,
        xoffset: .5,
        yoffset: 3,
        page: 0,
        xadvance: 5
    }, {
        id: 126,
        x: 443,
        y: 97.5,
        width: 7.5,
        height: 2.5,
        xoffset: .5,
        yoffset: 9,
        page: 0,
        xadvance: 8.5
    }, {
        id: 8212,
        x: 451.5,
        y: 97.5,
        width: 12.5,
        height: 2,
        xoffset: 0,
        yoffset: 9.5,
        page: 0,
        xadvance: 13
    }, {
        id: 8211,
        x: 465,
        y: 97.5,
        width: 8,
        height: 2,
        xoffset: 0,
        yoffset: 9.5,
        page: 0,
        xadvance: 8.5
    }, {
        id: 95,
        x: 474,
        y: 97.5,
        width: 8,
        height: 2,
        xoffset: 0,
        yoffset: 16,
        page: 0,
        xadvance: 8
    }, {
        id: 8722,
        x: 483,
        y: 97.5,
        width: 7.5,
        height: 2,
        xoffset: .5,
        yoffset: 9,
        page: 0,
        xadvance: 8.5
    }, {
        id: 45,
        x: 491.5,
        y: 97.5,
        width: 5,
        height: 2,
        xoffset: 0,
        yoffset: 9.5,
        page: 0,
        xadvance: 5.5
    }, {
        id: 32,
        x: 497.5,
        y: 97.5,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 15.5,
        page: 0,
        xadvance: 4.5
    }, {
        id: 32,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 15.5,
        page: 0,
        xadvance: 4.5
    }],
    font6 = [{
        id: 123,
        x: 65,
        y: 0,
        width: 128,
        height: 19,
        xoffset: -60,
        yoffset: 5.5,
        page: 0,
        xadvance: 6
    }, {
        id: 125,
        x: 0,
        y: 1,
        width: 65,
        height: 19,
        xoffset: -27,
        yoffset: 7,
        page: 0,
        xadvance: 6
    }, {
        id: 91,
        x: 193,
        y: 1,
        width: 144,
        height: 15,
        xoffset: -65,
        yoffset: 2,
        page: 0,
        xadvance: 5.5
    }, {
        id: 93,
        x: 1,
        y: 20,
        width: 185,
        height: 40,
        xoffset: -87,
        yoffset: 20,
        page: 0,
        xadvance: 5.5
    }, {
        id: 290,
        x: 308,
        y: 16,
        width: 18,
        height: 12,
        xoffset: -2.4,
        yoffset: 2,
        page: 0,
        xadvance: 11
    }, {
        id: 199,
        x: 308,
        y: 29,
        width: 18,
        height: 12,
        xoffset: -2,
        yoffset: 3.5,
        page: 0,
        xadvance: 10.5
    }, {
        id: 350,
        x: 193,
        y: 17,
        width: 115,
        height: 25,
        xoffset: -60,
        yoffset: 3.5,
        page: 0,
        xadvance: 12
    }, {
        id: 354,
        x: 187,
        y: 41,
        width: 64,
        height: 19,
        xoffset: -20,
        yoffset: 4,
        page: 0,
        xadvance: 11.5
    }, {
        id: 344,
        x: 0,
        y: 60,
        width: 33,
        height: 19,
        xoffset: -10,
        yoffset: 4,
        page: 0,
        xadvance: 10
    }, {
        id: 315,
        x: 251,
        y: 42,
        width: 65,
        height: 19,
        xoffset: -35,
        yoffset: 0,
        page: 0,
        xadvance: 12
    }, {
        id: 194,
        x: 39,
        y: 61,
        width: 120,
        height: 16,
        xoffset: -10,
        yoffset: 4,
        page: 0,
        xadvance: 10.5
    }, {
        id: 381,
        x: 160,
        y: 61,
        width: 158,
        height: 21,
        xoffset: .5,
        yoffset: 0,
        page: 0,
        xadvance: 10
    }],font7 = [{
        id: 123,
        x: 0,
        y: 392,
        width: 112,
        height: 43,
        xoffset: -60,
        yoffset: 5.5,
        page: 0,
        xadvance: 6
    }, {
        id: 125,
        x: 0,
        y: 0,
        width: 250,
        height: 341,
        xoffset: -27,
        yoffset: 7,
        page: 0,
        xadvance: 6
    }];
window.ExternalAPI && (window.ExternalAPI.getPreloaderURL = function() {
    return ""
}), window.ExternalAPI && (window.ExternalAPI.getMoreGamesButtonDisable = function() {
    return !1
});
var x = "";
Utils.setCookie("game_count", x);