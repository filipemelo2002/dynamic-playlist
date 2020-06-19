import { createStore } from "redux";

const INITIAL_STATE = {
  activeModule: {},
  activeVideo: {},
  modules: [
    {
      id: 1,
      title: "Primeiro Módulo",
      videos: [
        {
          id: 1,
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          title: "Big Buck Bunny",
        },
        {
          id: 2,
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          title: "Elephant Dream",
        },
        {
          id: 3,
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          title: "For Bigger Blazes",
        },
      ],
    },
    {
      id: 2,
      title: "Segundo Módulo",
      videos: [
        {
          id: 1,
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          title: "For Bigger Fun",
        },
        {
          id: 2,
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
          title: "Sintel",
        },
        {
          id: 3,
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          title: "Tears of Steel",
        },
      ],
    },
  ],
};
function reducer(state = INITIAL_STATE, action) {
  if (action.type === "PLAY_VIDEO") {
    return {
      ...state,
      activeModule: action.module,
      activeVideo: action.video,
    };
  }
  return state;
}

export default createStore(reducer);
