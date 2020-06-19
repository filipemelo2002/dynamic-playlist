import React from "react";
import { Provider } from "react-redux";
import Video from "./components/Video";
import Playlist from "./components/Playlist";
import store from "./store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Playlist />
      </Provider>
    </div>
  );
}

export default App;
