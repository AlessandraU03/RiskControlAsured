// ButtonAtom.js
import React from "react";

function ButtonAtom({ onClick, className, children }) {
  return (
    <button 
      onClick={onClick} 
      className={ className}
    >
      {children}
    </button>
  );
}

export default ButtonAtom;
