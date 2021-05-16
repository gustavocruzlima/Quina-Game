import React from "react";
import background from "../Images/endTrabalhos.jpeg";


import ButtonEndGame from "../components/Button/ButtonEnd/ButtonEnd";

function EndTrabalhos() {
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
        <ButtonEndGame />
    </div>
    </>
  );
}

export default EndTrabalhos;