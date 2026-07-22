import React from "react";

export const PositionText = ({
  t = false,
  b = false,
  l = false,
  r = false,
  children,
}: {
  t?: boolean;
  b?: boolean;
  l?: boolean;
  r?: boolean;

  children: React.ReactNode;
}) => {
  return (
    <div
      className={`text-4xl font-bold absolute
        ${t ? "top-0" : ""}
        ${b ? "bottom-0" : ""}
        ${l ? "left-0" : ""}
        ${r ? "right-0" : ""}
      flex justify-center items-center`}
    >
      <div
        style={{
          textShadow: "1px 1px 3px black, 1px 1px 3px black, 0px 0px 5px black",
        }}
      >
        {children}
      </div>
    </div>
  );
};
