import { useEffect, useState } from "react";
import "./LoadingScreen.scss";

import { useProgress } from "@react-three/drei";

import Button from "../Button/Button";

import {
  playSound,
  playBackgroundMusic,
} from "../../utils/audioSystem";

import { useAudioStore } from "../../Experience/stores/audioStore";

const loadingMessages = [
  "Placing the blocks...",
  "Connecting the paths...",
  "Building the environment...",
  "Putting the finishing touches in place...",
];

const LoadingScreen = () => {
  const { progress } = useProgress();

  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const { setIsAudioEnabled } = useAudioStore();

  useEffect(() => {
    if (progress >= 100) return;

    const interval = setInterval(() => {
      setMessageIndex((current) =>
        current < loadingMessages.length - 1
          ? current + 1
          : current
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [progress]);

  const handleReveal = () => {
    setIsAudioEnabled(true);
    setIsRevealed(true);

    playBackgroundMusic();
    playSound("buttonClick");
  };

  const handleAnimationFinished = () => {
    setIsAnimationFinished(true);
  };

  if (isAnimationFinished) {
    return null;
  }

  const loadingComplete = progress >= 100;

  return (
    <>
      <div className="loading-screen">

        <div
          className={`background-top-half ${
            isRevealed ? "revealed" : ""
          }`}
          onTransitionEnd={handleAnimationFinished}
        ></div>

        <div
          className={`background-bottom-half ${
            isRevealed ? "revealed" : ""
          }`}
        ></div>

        <div className="loading-screen-info-container">

          {/* Greeting */}
          <div
            className={`intro-message-container ${
              isRevealed ? "revealed" : ""
            }`}
          >
            Hi 👋! Thanks for stopping by!
          </div>

          {/* Loading message */}
          {!loadingComplete && (
            <div
              className={`instructions-container ${
                isRevealed ? "revealed" : ""
              }`}
            >
              {loadingMessages[messageIndex]}
            </div>
          )}

          {/* Loading bar */}
          {!loadingComplete && (
            <div className="loading-bar-container">
              <div
                className="loading-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}

         {/* Ready state */}
{loadingComplete && !isRevealed && (
  <>
    <div className="ready-scroll-message">
      Scroll ↓ to explore the world ✦
    </div>

    <Button onClick={handleReveal}>
      &nbsp;&nbsp;&nbsp; Enter World &nbsp;&nbsp;&nbsp;
    </Button>
  </>
)}
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
