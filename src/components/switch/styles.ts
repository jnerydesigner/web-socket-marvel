import styled from "styled-components";

export const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const SwitchLabel = styled.label`
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const SwitchInput = styled.input`
  display: none;

  &:checked + ${SwitchSlider}:before {
    transform: translateX(26px);
  }

  &:checked + ${SwitchSlider} {
    background-color: #2196f3;
  }
`;
