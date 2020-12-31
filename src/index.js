import WaveSurfer from "wavesurfer.js";
import CustomHeightForChannels from "./lib/WaveSurferCustomHeightForChannels";

window.addEventListener("DOMContentLoaded", () => {
  const wavesurfer = WaveSurfer.create({
    container: document.getElementById("wavesurfer"),
    // backend: "MediaElement",
    // backend: "WebAudio",
    backend: "MediaElementWebAudio",
    splitChannels: true,
    plugins: [
      CustomHeightForChannels.create({
        1: 44,
        2: 30,
        4: 26,
        5: 26,
        6: 20,
      }),
    ],
  });
  wavesurfer.load("/4_channel_test.wav");

  document.getElementById("playPause").onclick = () => {
    wavesurfer.playPause();
  };
  window.wavesurfer = wavesurfer;
  Array.from(document.querySelectorAll(".links > a")).forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      wavesurfer.load(el.getAttribute("href"));
    };
  });
});
