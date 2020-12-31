# WaveSurfer Custom Height For Channels Plugin

[WaveSurfer.js](https://wavesurfer-js.org/) Custom Height For Channels Plugin

### Usage

```js
import CustomHeightForChannelsPlugin from "wavesurfer-custom-height-for-channels-plugin";
const wavesurfer = WaveSurfer.create({
  container: document.getElementById("wavesurfer"),
  backend: "MediaElement", // All backends supported.
  ...
  plugins: [
      ...
      CustomHeightForChannelsPlugin.create({
        1: 44,
        //2: 30, // 2 channels height will be 128px by default WaveSurfer default height
        4: 26,
        5: 26,
        6: 20,
      }),
      ...
  ],
});

```

### Installation

```sh
$ npm i wavesurfer-custom-height-for-channels-plugin
```

### Todos

- Write tests

## License

MIT

**Free Software, Hell Yeah!**

[git-repo-url]: https://github.com/whthT/wavesurfer-custom-height-for-channels-plugin
[wavesurfer.js]: https://wavesurfer-js.org
[whtht]: https://github.com/whthT
[node.js]: http://nodejs.org
