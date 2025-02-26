import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, text, variant = "white", size = "normal", hasIcon = false, icon, mode }) => {
  const baseStyles =
    " font-inter font-medium leading-none rounded-full h-10 py-4 flex items-center justify-center gap-2";
    const variants = {
      white: mode === 'dark' 
        ? 'bg-white text-black shadow-nav-shadow' 
        : 'bg-dark1f text-white',
      gold: mode==='dark'
      ?"bg-[rgba(0,0,0,0.10)] text-white shadow-nav-shadow" // Light gold
      :"bg-[rgba(0,0,0,0.10)] text-dark1f", // Light gold
      light: "bg-[rgba(0,0,0,0.10)] text-dark1f", // Light gold
    };
  const sizes = {
    small: "text-sm px-5", // Light gold
    normal: "text-[16px] px-8", // Light gold
  };

  return (
    <Link to={to} className={` ${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {text}
      {hasIcon && icon && <img src={icon} alt="icon" loading="lazy" className={`w-[14px] ${variant==='light' || mode==='light' ? 'filter invert' : ''}`} />}
    </Link>
  );
};

export default Button;
