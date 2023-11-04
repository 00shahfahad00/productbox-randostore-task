import React from "react";
import MainLayout from "../Layout/MainLayout";
import axios from "axios";

const Home = () => {
  return (
    <MainLayout>
      <div className="main-container">
        <div className="left-content">
          <p>New arrival only</p>
          <div className="for-flex">
            <h1>new</h1>
          </div>
          <h1>collections</h1>
          <h1>for everyone</h1>
          <button className="btn1">Latest collection</button>
        </div>
        <div className="main-right">
          <img className="cookie" src="http://localhost:4000/img/cookies.jpg" />
        </div>
      </div>
      <h1 className="popular">opular Items</h1>
      <div className="line">
        <hr></hr>
      </div>
      <Cards />
      <Offer />
    </MainLayout>
  );
};

const Cards = () => {
  const [api, setApi] = React.useState([]);
  const fetchdata = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/data/cardsApi.json"
    );
    setApi(data);
  };
  React.useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="cards-title">
      {api.map((entry) => (
        <div className="cards-container">
          <img src={entry.img} />
          <h3 className="dec">{entry.name}</h3>
          <p className="price">{entry.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

const Offer = () => {
  return (
    <div>
      <div className="sec-container">
        <div className="left-content">
          <div className="for-flex">
            <h1>Exclusive</h1>
          </div>
          <h1>Offers for you</h1>
          <p>only on best sellling products</p>
          <button className="btn1">Check now</button>
        </div>
        <div className="right-content">
          <img src="/data/images/exclusive_image.png" />
        </div>
      </div>
    </div>
  );
};
