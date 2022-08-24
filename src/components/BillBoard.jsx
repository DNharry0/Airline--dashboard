import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect, darkThemeColor } from "../utils";

function BillBoard({ airlineData }) {
  return (
    <YourProjects>
      <Project>
        <Detail>
          <Row>
            <ShortSubtitle>편명</ShortSubtitle>
            {airlineData?.response.body.items.item
              .filter(value => value.airline === "대한항공")
              .map((value, index) => {
                return <SubData> {value.flightId}</SubData>;
              })}
          </Row>
          <Row>
            <ShortSubtitle>터미널</ShortSubtitle>
            {airlineData?.response.body.items.item
              .filter(value => value.airline === "대한항공")
              .map((value, index) => {
                return <SubData>{value.terminalId}</SubData>;
              })}
          </Row>
          <Row>
            <ShortSubtitle>게이트</ShortSubtitle>
            {airlineData?.response.body.items.item
              .filter(value => value.airline === "대한항공")
              .map((value, index) => {
                return <SubData>{value.gatenumber}</SubData>;
              })}
          </Row>
          <Row>
            <SubTitle>도착공항</SubTitle>
            {airlineData?.response.body.items.item
              .filter(value => value.airline === "대한항공")
              .map((value, index) => {
                return <SubData>{value.airport}</SubData>;
              })}
          </Row>
        </Detail>
      </Project>
      <AllProjects>자세히</AllProjects>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  height: 27vw;
  width: 29vw;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    height: 90vw;
    width: 80%;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Detail = styled.div`
  display: flex;
`;
const ShortSubtitle = styled.div`
  display: flex;
  width: 5vw;
  justify-content: center;
  font-size: 1rem;
  font-weight: bolder;
  margin-right: 0.1rem;
  margin-bottom: 0.3rem;
  background-color: ${darkThemeColor};
  color: white;
  border-radius: 0.2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 18vw;
  }
`;

const SubTitle = styled.div`
  display: flex;
  width: 12vw;
  justify-content: center;
  font-size: 1rem;
  font-weight: bolder;
  margin-right: 0.1rem;
  margin-bottom: 0.3rem;
  background-color: ${darkThemeColor};
  color: white;
  border-radius: 0.2rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 18vw;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 18.5vw;
  }
`;
const SubData = styled.h5`
  margin-bottom: 0.1rem;
  color: white;
  margin-right: 0.1rem;
  background-color: #1971c2;
  border-radius: 0.2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`;

const AllProjects = styled.h5`
  text-align: end;
  color: ${darkThemeColor};
  cursor: pointer;
`;

export default BillBoard;
