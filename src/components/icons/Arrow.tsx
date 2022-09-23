import React from "react";

function Arrow({ size = 50, rotate = 0 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 12.7 12.7"
    >
      <g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(169.333 -118.746)"
      >
        <path
          fill="#000"
          d="M-166.158 119.276v11.64h1.059v-1.058h1.058V128.8h1.059v-1.058h1.058V126.684h1.06v-1.058h-.002 1.057v-1.059h-1.056v-1.059h-1.059v-1.058h-1.058v-1.059h-1.059v-1.058h-1.058v-1.057z"
          data-original="#000000"
          paintOrder="normal"
          vectorEffect="none"
        ></path>
      </g>
    </svg>
  );
}

export default Arrow;
