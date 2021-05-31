import styled from "styled-components";

export const CanvasContainer = styled.div`
  position: absolute;
  /* flex: 4; */
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: rgba(200, 200, 200, 0.4) 2px solid;
  height: 60vh;
  width: 40vw;
`;

export const Title = styled.div`
  z-index: 10;
  text-align: center;
  display: flex;
  /* position: absolute; */
  color: whitesmoke;
  border: white solid 1px;
  justify-content: center;
  pointer-events: none;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  flex: 1;
  font-size: 10vh;
`;
