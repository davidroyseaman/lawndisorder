import React from "react";

export const CentreText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-4xl font-bold absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
      {/*<div className="bg-zinc-300 dark:bg-zinc-700">{children}</div>*/}
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
