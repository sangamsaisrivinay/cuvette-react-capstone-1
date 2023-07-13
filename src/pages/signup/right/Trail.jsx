import React, { useState } from 'react';

const Trail = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default Trail;
