import React from "react";

const regularStyle =
  "border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 text-slate-900 dark:text-slate-100";
const lightStyle =
  "border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-slate-900 dark:text-slate-100";
const darkStyle =
  "border-zinc-400 dark:border-zinc-600 bg-zinc-300 dark:bg-zinc-700 text-slate-900 dark:text-slate-100";
const disabledStyle =
  "border-zinc-300 dark:border-zinc-700 bg-zinc-400 dark:bg-zinc-600 text-zinc-600 dark:text-zinc-400";
//text-zinc-600 bg-zinc-400 dark:text-zinc-400 dark:bg-zinc-600
export const Box = ({
  className = "",
  disabled = false,
  light = false,
  dark = false,
  relative = false,
  children,
}: {
  className?: string;
  disabled?: boolean;
  light?: boolean;
  dark?: boolean;
  relative?: boolean;
  children?: React.ReactNode;
}) => {
  const style = disabled
    ? disabledStyle
    : light
    ? lightStyle
    : dark
    ? darkStyle
    : regularStyle;
  return (
    <div
      className={`border p-2 ${style} ${className} ${
        relative ? "relative" : ""
      }`}
      // style={{
      //   boxShadow: disabled
      //     ? "0px 0px 2px 0px inset white"
      //     : "0px 0px 2px 0px inset gray",
      // }}
    >
      {children}
    </div>
  );
};
