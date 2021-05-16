import styled from "styled-components";
import "./styles.css";

const theme = {
  white: {
    default: "#ffffff",
    hover: "#04ff48"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: black;
  padding: 5px 15px;
  border-radius: 25px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  margin: 0;
  position: absolute;
  top: 93%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 12px;
  font-size: 20px;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "white"
};

export default function ButtonBegin() {
  return (
    <>
    <div className="buttonBegin">
      <a href="/game">
        <Button>Jogar</Button>
      </a>
      </div>
    </>
  );
}
