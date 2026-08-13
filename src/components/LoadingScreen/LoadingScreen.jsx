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
    <div className="loading-screen">

      <div
        className={`background-top-half ${
          isRevealed ? "revealed" : ""
        }`}
        onTransitionEnd={handleAnimationFinished}
      />

      <div
        className={`background-bottom-half ${
          isRevealed ? "revealed" : ""
        }`}
      />

      <div className="loading-screen-info-container">

        {/* LOADING STATE */}
        {!loadingComplete ? (
          <>
            <div
              className={`intro-message-container ${
                isRevealed ? "revealed" : ""
              }`}
            >
              Hi! 👋 Thanks for stopping by!
            </div>

            <div
              className={`instructions-container ${
                isRevealed ? "revealed" : ""
              }`}
            >
              {loadingMessages[messageIndex]}
            </div>

            <div className="loading-bar-container">
              <div
                className="loading-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        ) : (

          /* READY STATE */
          <div className="ready-state">

            <div className="ready-message">
              World ready.
            </div>

            <div className="ready-message">
              Scroll ↓ to explore the world ✦
            </div>

            <Button onClick={handleReveal}>
              &nbsp;&nbsp;&nbsp; Enter World &nbsp;&nbsp;&nbsp;
            </Button>

          </div>
        )}

      </div>
    </div>
  );
};

export default LoadingScreen;
