import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../store/actions";
const Playlist = ({ modules, dispatch }) => (
  <div className="playlist-frame">
    <ul>
      {modules.map((module) => (
        <li key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.videos.map((video) => (
              <li key={video.id}>
                <button
                  type="button"
                  onClick={() => dispatch(Actions.playVideo(module, video))}
                >
                  {video.title}
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);
export default connect((state) => ({ modules: state.modules }))(Playlist);
