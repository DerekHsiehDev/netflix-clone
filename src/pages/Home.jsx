import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="2" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Action" fetchURL={requests.requestAction} />
      <Row rowID="5" title="Romance" fetchURL={requests.requestRomance} />
    </div>
  );
};

export default Home;
