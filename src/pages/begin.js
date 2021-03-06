import React from "react";
import background from "../Images/begin.png";


import ButtonBegin from "../components/Button/ButtonBegin/Button";

function Begin() {
  return (
    <>
    <div
        class="bg_image"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "100% 100%",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
        <ButtonBegin />
    </div>
    </>
  );
}

export default Begin;