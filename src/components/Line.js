import React, { useState } from "react";

const Line = ({ color, zIndex }) => {
  const [rotate, setRotate] = useState(90);

  let styles = {
    transform: `rotate(${rotate}deg)`,
    backgroundColor: color,
    zIndex: zIndex,
  };

  console.log(rotate);
  return (
    <div className="line" style={styles} onClick={() => setRotate(rotate + 20)}>
      {/* <div className="face">
      </div> */}
    </div>
  );
};

export default Line;
