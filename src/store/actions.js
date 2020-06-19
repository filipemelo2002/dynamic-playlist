export function playVideo(module, video) {
  return {
    type: "PLAY_VIDEO",
    module,
    video,
  };
}
