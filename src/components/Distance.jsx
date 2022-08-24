import React from "react";
import styled from "styled-components";
import { MdOutlineFlight } from "react-icons/md";
import { hoverEffect, darkThemeColor } from "../utils";

function Distance() {
  return (
    <DistanceCard>
      <CardContent>
        <Chart>
          <MdOutlineFlight />
        </Chart>
        <DistanceText>비행거리</DistanceText>
        <Diatance> 총 17,890 km </Diatance>
        <DiatanceIncrease>+ 12.8% / 전월대비</DiatanceIncrease>
        <Pages>9월</Pages>
      </CardContent>
    </DistanceCard>
  );
}

const DistanceCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: ${darkThemeColor};
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const DistanceText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
  
`;

const Diatance = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const DiatanceIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
`;

const Pages = styled.h3`
  text-align: center;
`;

export default Distance;
