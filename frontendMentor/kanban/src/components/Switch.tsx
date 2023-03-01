import React, { useState } from 'react';

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  const toggleClass = ' transform translate-x-6';

  return (
    <div
      className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-mainPurple rounded-full p-1 cursor-pointer"
      onClick={handleClick}
    >
      <div className={"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" + (isChecked ? null : toggleClass)}>

      </div>
    </div>
  )
}

export default Switch;
