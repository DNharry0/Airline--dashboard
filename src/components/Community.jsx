import React from "react";
import styled from "styled-components";
import { GiRocketFlight } from "react-icons/gi";
import { darkThemeColor, hoverEffect, themeColor } from "../utils";
function Community() {
  return (
    <JoinChannel>
      <CardContent flex={true}>
        <FlightCommunity>
          <FlightLogo>
            <GiRocketFlight />
          </FlightLogo>
          <FlightText>
            <FlightHead>비행 커뮤니티</FlightHead>
            <FlightFoot>의견 공유</FlightFoot>
          </FlightText>
        </FlightCommunity>
        <FlightJoin>참여</FlightJoin>
      </CardContent>
    </JoinChannel>
  );
}

const JoinChannel = styled.div`
  background-color: ${darkThemeColor};
  height: 50%;
  margin-top: 6.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FlightCommunity = styled.div`
  display: flex;
`;

const FlightLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    height: 3rem;
    width: 3rem;
  }
`;

const FlightText = styled.div`
  color: white;
`;

const FlightHead = styled.h2`
  font-weight: 500;
`;
const FlightFoot = styled.h5`
  color: #e4e4e4;
  font-weight: normal;
`;
const FlightJoin = styled.button`
  background-color: ${themeColor};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export default Community;
