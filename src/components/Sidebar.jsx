import React from "react";
import styled from "styled-components";
import {RiFileCopyLine } from "react-icons/ri";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage.jpg";
import { darkThemeColor } from "../utils";
import { GiAirForce } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import {TiWeatherCloudy} from "react-icons/ti"
import {MdScheduleSend} from "react-icons/md"
import {AiFillSchedule}from "react-icons/ai"

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />{" "}
        <GiAirForce color="white" fontSize="50px" />
        <Name>Harry Kang</Name>
        <Badge content="Captain"></Badge>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <AiFillSchedule />
            <h3>대시보드</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>비행기록</h3>
          </Link>
          <Link>
            <MdScheduleSend />
            <h3>스케줄</h3>
          </Link>
          <Link>
            <TiWeatherCloudy />
            <h3>날씨</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>문제가 있습니까?</span>
          <a href="#">
            <BiPhoneCall />
            &nbsp;고객센터 연결
          </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #0b3861;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #0b3861;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
