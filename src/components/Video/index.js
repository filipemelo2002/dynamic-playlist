import React from "react";
import { connect } from "react-redux";
const Video = ({ module, video }) => (
  <div className="video-frame">
    <h1>
      {module.title} - {video.title}
    </h1>
    <video id="media-video" controls={true} key={video.url} width="500">
      <source type="video/mp4" id="video" src={video.url} />
    </video>
  </div>
);

export default connect((state) => ({
  module: state.activeModule,
  video: state.activeVideo,
}))(Video);
