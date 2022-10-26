import React from "react";

const Button = ({ styles }) => (
  <a href="https://tailwindcss.com/docs/text-color" target="_blank" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Join Discord
  </a>
);

export default Button;