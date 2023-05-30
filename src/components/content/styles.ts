import styled from "styled-components";

const sizeDivThumb = "140px";

export const ContainerContent = styled.div`
  width: 100%;
  /* background-color: #067d39; */
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerContentMiddle = styled.div`
  width: 80%;
  padding: 10px;

  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 20px;
  margin-top: 20px;
`;

export const ContainerContentMiddleNavigation = styled.div`
  width: 80%;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerContentNavigation = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4a40d;
`;

export const CardContainer = styled.div`
  padding-top: 20px;
  height: auto;
  min-height: 380px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  -webkit-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.18);
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.18);
  border: 1px solid #c67207;
  transition: 0.4s;
  position: relative;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  h3 {
    margin-top: 10px;
    color: ${(props) => props.theme.font.color.primary};
    font-size: ${(props) => props.theme.font.weight.large};
  }
  p {
    width: 90%;
    text-align: justify;
    margin-bottom: 10px;
    color: ${(props) => props.theme.font.color.primary};
    font-size: ${(props) => props.theme.font.weight.small};
  }
`;

export const ContainerThumb = styled.div`
  width: ${sizeDivThumb};
  height: ${sizeDivThumb};
  min-height: ${sizeDivThumb};

  border-radius: 50%;
  border: 4px solid #ffff;
  -webkit-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.18);
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.18);
  /* transition: 0.5s;
  :hover {
    transform: scale(1.5);
  } */
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const BtnLikedContainer = styled.div`
  height: 120px;
  width: 120;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  top: -30px;
  left: 5px;
`;

export const ListPagination = styled.ul`
  width: 100%;
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: azure;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    height: 100%;
    cursor: pointer;
    padding: 0 18px;
    a {
      text-decoration: none;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
