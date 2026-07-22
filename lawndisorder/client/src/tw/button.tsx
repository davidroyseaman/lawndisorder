import React from "react";

export const Button = ({
  className = "",
  onClick,
  children,
  relative = false,
}: {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
  relative?: boolean;
}) => {
  return (
    <div
      className={`flex justify-center cursor-pointer border p-2 bg-zinc-300 dark:bg-zinc-700 ${
        relative ? "relative" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
