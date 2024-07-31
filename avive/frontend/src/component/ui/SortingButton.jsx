import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';

const Button = styled.button`
  display: inline-flex;
  width: 150px;
  height: 40px;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: #fff;
  color: #606060;
  cursor: pointer;
  font-size: 15px;
  position: relative;
`;

const Text = styled.span`
  margin-left: 20px;
  margin-bottom: 18px;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const CaretDownIcon = styled(FaCaretDown)`
  margin-left: 25px;
  margin-bottom: 15px;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  width: 135px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const MenuItem = styled.div`
  padding: 6px 12px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;


  &:hover {
    background-color: #f9f9f9;
  }
`;

const SortButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Latest');

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
    // 여기에 정렬 처리 로직 추가
  };

  return (
    <div style={{ position: 'relative' }}>
      <Button onClick={handleButtonClick}>
        <Text>{selectedOption}</Text>
        <IconWrapper>
          <CaretDownIcon />
        </IconWrapper>
      </Button>
      <DropdownWrapper show={showDropdown}>
        <MenuItem onClick={() => handleOptionClick('Lastest')}>Lastest</MenuItem>
        <MenuItem onClick={() => handleOptionClick('Popular')}>Popular</MenuItem>
        <MenuItem onClick={() => handleOptionClick('Earliest')}>Earliest</MenuItem>
      </DropdownWrapper>
    </div>
  );
};

export default SortButton;
