import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage4.jpg";
import { cardShadow, hoverEffect } from "../utils";

function WeatherCheck() {
  return (
    <Weather>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>서울</InfoName>
              <InfoUpdate>1시간전 업데이트</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="맑음" />
        </Detail>
        <Title>기상</Title>
        <WeatherInfo>오늘은 전국이 대체로 맑을 전망이다.</WeatherInfo>
        <Issue>
          <Notice>특이사항</Notice>
          <Badge content="VIP 2인 탑승" glow />
          <Badge content="Check" arrivals />
        </Issue>
        <Issue>
          <Notice>특이사항</Notice>
          <Badge content="발달장애 남아 1인 탑승" glow />
          <Badge content="Check" arrivals />
        </Issue>
      </CardContent>
    </Weather>
  );
}

const Weather = styled.div`
  border-radius: 1rem;
  height: 130%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div`
`;
const InfoName = styled.h3``;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  font-weight: 500;
  margin-left: 2rem;
`;
const WeatherInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
  margin-left: 2rem;
`;
const Issue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;
const Notice = styled.div``;

export default WeatherCheck;
