import React from "react";
import classNames from "classnames";

const Button = ({
  title,
  size = "sm || md",
  variant = "primary || secondary",
  ...props
}) => (
  <button
    className={classNames(
      "inline-flex items-center justify-center w-auto font-medium rounded-r-lg rounded-l-lg shadow focus:outline-none disabled:opacity-50",
      {
        "py-2 px-10 text-sm font-normal": size === "sm",
        "py-3 px-32 md:px-24 sm:px-20 text-sm font-normal": size === "md",
        "bg-white text-black": variant === "primary",
        "text-black bg-[#FF7F50] border  ": variant === "secondary",
      }
    )}
    {...props}
  >
    {title}
  </button>
);

export default Button;
