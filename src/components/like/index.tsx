import { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import animationData from "../../data/animation.json";

const ButtonWrapper = styled.button`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 100%;

  .animation {
    pointer-events: none;
  }
`;

interface PropsLiked {
  idHero: string;
}

export const Like = ({ idHero }: PropsLiked) => {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const handleLiked = (idHero: string) => {
    const reverseAnimation = -1;
    const normalAnimation = 1;

    setAnimationState({
      ...animationState,
      isStopped: false,
      direction:
        animationState.direction === normalAnimation
          ? reverseAnimation
          : normalAnimation,
    });
    console.log(idHero);
  };

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <ButtonWrapper onClick={() => handleLiked(idHero)}>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            width={280}
            height={280}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </ButtonWrapper>
    </>
  );
};
