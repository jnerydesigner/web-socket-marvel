import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerHeaderMiddle = styled.div`
  width: 80%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogo = styled.div`
  width: 15%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  width: 80%;
  height: 10vh;
  h3 {
    font-size: 2.8rem;
    color: white;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Loader = styled.div`
  position: relative;
  width: 80%;
  height: 5px;
  border-radius: 20px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 20px;
    transform-origin: left;
    animation: animate 4s linear infinite;
    filter: blur(3px);
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(0);
    width: 10px;
    height: 10px;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 50%;
    animation: animateDot 4s linear infinite;
  }

  @keyframes animateDot {
    0% {
      transform: translateY(-50%) scale(0);
    }
    5% {
      transform: translateY(-50%) scale(1);
    }
    15%,
    20% {
      transform: translateY(-50%) scale(1);
      box-shadow: 0 0 0 4px ${(props) => props.theme.colors.primary}22,
        0 0 0 10px ${(props) => props.theme.colors.secondary}22,
        0 0 40px 5px ${(props) => props.theme.colors.secondary},
        0 0 60px 15px ${(props) => props.theme.colors.secondary};
    }
    40% {
      transform: translateY(-50%) scale(1) translateX(395px);
    }
    80% {
      transform: translateY(-50%) scale(2) translateX(395px);
      box-shadow: 0 0 0 4px ${(props) => props.theme.colors.secondary}22,
        0 0 0 10px ${(props) => props.theme.colors.secondary}22,
        0 0 40px 5px ${(props) => props.theme.colors.secondary},
        0 0 60px 15px ${(props) => props.theme.colors.secondary};
    }
  }

  @keyframes animate {
    0%,
    20% {
      transform: scaleX(0);
    }
    40% {
      transform: scaleX(1);
      transform-origin: left;
    }
    40.0000001% {
      transform: scaleX(1);
      transform-origin: right;
    }
    80%,
    100% {
      transform: scaleX(0);
      transform-origin: right;
    }
  }
`;

export const ContainerTheme = styled.div`
  width: 10%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
