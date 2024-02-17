import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 310px;
  }

  @media screen and (min-width: 768px) {
    max-width: 734px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1278px;
  }
`;
