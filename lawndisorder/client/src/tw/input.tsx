import React from "react";

export const Input = ({
  className = "",
  value,
  onChange,
  onKeyDown,
}: {
  className?: string;
  value: string;
  onChange?: (evt: any) => void;
  onKeyDown?: (evt: any) => void;
}) => {
  return (
    <input
      type="text"
      value={value}
      className={`flex justify-center border p-1 bg-zinc-500 dark:bg-zinc-500 ${className}`}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
