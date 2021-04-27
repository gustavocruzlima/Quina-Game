import React from "react";

import './styles.css';

function Score({player, points, captures, pieces, status}) {
  // console.log(status);
  return (
    <div className="container">
      <img src={player==='white' ? process.env.PUBLIC_URL + '/Images/avatarAluno.png' : process.env.PUBLIC_URL + '/Images/avatarTrabalhos.png'}/>
      <div className={player==='white' ? "infoTextWhite" : "infoTextBlack"}>
        <span>{points} Pontos</span>
      </div>
      <div className={player==='white' ? "infoTextWhite" : "infoTextBlack"}>
        <span>{captures} Capturas</span>
      </div>
      <div className={player==='white' ? "infoTextWhite" : "infoTextBlack"}>
        <span>{pieces} Peças colocadas</span>
      </div>
      {status==='White'&&player==="white" ? <div className="infoSuaVez"><span>SUA VEZ</span></div> : null}
      {status==='Black'&&player==="black" ? <div className="infoSuaVez"><span>SUA VEZ</span></div> : null}
    </div>
  );
}

export default Score;
