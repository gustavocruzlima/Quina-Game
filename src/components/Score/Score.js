import React, { useEffect, useState } from "react";
import Aluno from "../../assets/avatarAluno.png";
import Trabalho from "../../assets/avatarTrabalhos.png";
/* eslint-disable */
import "./styles.css";

function Score({ player, startClickGame, points, status }) {
  let startVerifier = 0;
  const [piecesBlack, setPiecesBlack] = useState(0);
  const [piecesWhite, setPiecesWhite] = useState(0);
  console.log(piecesWhite);

  function setScore() {
     
    if (startClickGame) {
      // console.log("player: "+player);
      // console.log("status: "+status);
      // console.log(piecesBlack);
      if (startVerifier != 0){
        status == "White" && player == "white"
        ? setPiecesBlack(piecesBlack + 1)
        : null;

        status == "Black" && player == "white"
        ? setPiecesWhite(piecesWhite + 1)
        : null;
      }
      
    }
  }

  useEffect(() => {
    setScore();
  }, [status]);

  return (
    <div className="container">
      <img src={player === "white" ? Aluno : Trabalho} />
      {status === "White" && player === "white" ? (
        <div className="infoSuaVez">
          <span>SUA VEZ</span>
        </div>
      ) : null}
      {status === "Black" && player === "black" ? (
        <div className="infoSuaVez">
          <span>SUA VEZ</span>
        </div>
      ) : null}
    </div>
  );
}

export default Score;