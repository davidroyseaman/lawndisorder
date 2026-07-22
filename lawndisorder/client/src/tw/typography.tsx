import React from "react";

export const Regular = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-md font-bold">{children}</div>;
};

export const Mega = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-3xl font-bold">{children}</div>;
};
