import React, { useState } from "react";
import {
  SwitchContainer,
  SwitchInput,
  SwitchLabel,
  SwitchSlider,
} from "./styles";

interface SwitchProps {
  id: string;
  label?: string;
  checked: boolean;
}
export const SwitchTheme: React.FC<SwitchProps> = ({ id, checked }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const newCheckedValue = event.target.checked;
    setIsChecked(newCheckedValue);
  };

  return (
    <SwitchContainer>
      <SwitchInput
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleInputChange}
      />
      <SwitchSlider className="slider round" />
    </SwitchContainer>
  );
};
