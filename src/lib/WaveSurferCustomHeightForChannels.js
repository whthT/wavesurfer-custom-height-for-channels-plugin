export default class CustomHeightForChannelsPlugin {
  static create(params) {
    return {
      name: "customHeightForChannelsPlugin",
      deferInit: params && params.deferInit ? params.deferInit : false,
      params: params,
      staticProps: {},
      instance: CustomHeightForChannelsPlugin,
    };
  }

  constructor(params, ws) {
    this.params = params;
    this.wavesurfer = ws;
    this.util = ws.util;
    this.isChannelsHeightSetted = false;
    this.interval = null;
  }

  _combineParamsWithDefaults() {
    return Object.assign(
      {
        1: this.wavesurfer.params.height,
        2: this.wavesurfer.params.height,
        3: this.wavesurfer.params.height,
        4: this.wavesurfer.params.height,
        5: this.wavesurfer.params.height,
        6: this.wavesurfer.params.height,
        7: this.wavesurfer.params.height,
      },
      this.params
    );
  }

  _onReady() {
    this.isChannelsHeightSetted = false;
    this.interval = setInterval(this._setChannelsHeight.bind(this), 20);
  }

  _setChannelsHeight() {
    if (!this.isChannelsHeightSetted && this.wavesurfer.backend.buffer) {
      const servedHeight = this.params[
        this.wavesurfer.backend.buffer.numberOfChannels
      ];
      this.wavesurfer.params.height = servedHeight;
      this.wavesurfer.drawer.fireEvent("redraw");
      this.isChannelsHeightSetted = true;
      clearInterval(this.interval);
    }
  }

  init() {
    this.params = this._combineParamsWithDefaults();
    if (this.wavesurfer.isReady) {
      this._onReady();
    } else {
      this.wavesurfer.on("ready", this._onReady.bind(this));
    }
  }

  destroy() {
    this.wavesurfer.un("ready", this._onReady.bind(this));
    clearInterval(this.interval);
  }
}
