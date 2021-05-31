import styled from "styled-components/macro";

export const Root = styled.div`
  padding: 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  outline: none;
  justify-content: flex-start;
  overflow: hidden;
  background-color: #f7523b;
  /* border: black solid 2px; */
  height: 100vh;

  /* background-color: ${({
    theme: {
      palette: {
        bg: { sageGreen },
      },
    },
  }) => sageGreen}; */
`;
