import React from "react";
import { Route, Routes, Link } from "react-router-dom";
// import grass from "./grass.png";
import grass from "./grass2.jpg";

const Index = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            className="flex grow justify-center items-center"
            style={{
              backgroundImage: `url(${grass})`,
            }}
          >
            <div
              style={{
                fontSize: "10vw",
                color: "rgba(127,255,64,0.6)",
                textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
                background:
                  "linear-gradient(0deg, rgba(1,1,1,0) 0%, rgba(1,1,1,0.6) 45%, rgba(0,0,0,0.4) 50%, rgba(1,1,1,0.6) 55%, rgba(1,1,1,0) 100%)",
              }}
              className="font-serif"
            >
              LAWNDING PAGE
            </div>
          </div>
        }
      />
      <Route path="home" element={<div>ok</div>} />
    </Routes>
  );
};

export default Index;
