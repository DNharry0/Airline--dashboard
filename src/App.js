import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [airlineData, setAirlineData] = useState(null);

  const getAirlineData = async () => {
    const url = `https://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp?serviceKey=${API_KEY}&from_time=0500&to_time=0700&lang=K&type=xml`;
    const response = await fetch(url);
    const data = await response.text();
    const parser = new XMLParser();
    const jObj = parser.parse(data);
    setAirlineData(jObj);
  };

  useEffect(() => {
    getAirlineData();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent airlineData={airlineData} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
