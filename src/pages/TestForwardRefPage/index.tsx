import { Button } from "antd";
import React, { useRef } from "react";
import video1 from "../../assets/videos/video1.mp4";

type Props = {};

const TestForwardRefPage = (props: Props) => {
  const videoRef = useRef<any>();

  const onPlayClick = () => {
    videoRef.current.play();
  };

  const onPauseClick = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} src={video1} controls />
      <Button type="primary" onClick={onPlayClick}>
        Play
      </Button>
      <Button type="primary" onClick={onPauseClick}>
        Pause
      </Button>
    </div>
  );
};

export default TestForwardRefPage;
