import React, { useRef, useState } from 'react'

export default function Interface({ setCameraPosition }) {

  const handleButtonClick = (newPosition) => {
   const  setCameraPosition = (newPosition);
    console.log(setCameraPosition, 'at menu click');
  };

  return (
    <div className="interface">
      {/* Menu */}
      <div className="Menu">
        <div className="raw">
          <div
            className="button"
            onClick={(newPosition) => handleButtonClick({ x: 10, y: 10, z: 0 })}
          >
            Artistic Artisan Design & More
          </div>
                    <div
            className="button"
            onClick={(newPosition) => handleButtonClick({ x: 20, y: 4, z: 20 })}
          >
            Kitchen One
          </div>
        </div>
      </div>
    </div>
  );
}
