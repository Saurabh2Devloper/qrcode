import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      {isVisible && <p>This paragraph is nosehbgjabenkjgk!</p>}
    </div>
  );
};

export default ToggleVisibility;