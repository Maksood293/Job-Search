import React from "react";
import { Button } from "../../components/Button/Button";
import "./HomePage.scss";
import Appearence from "../../assets/appearence.png";
import { Card } from "../../components/Card/Card";
import solaytic from '../../assets/solaytic.png'
import kanba from '../../assets/kanba.png';
import lightAi from '../../assets/lightAi.png';
import ztos from '../../assets/ztos.png';
import goldline from '../../assets/goldline.png'
import ideaa from '../../assets/ideaa.png'
import liva from '../../assets/liva.png'
import velocity from '../../assets/velocity.png'
import { Link } from "react-router-dom";

const HomePage = () => {
  const cardContent = [
    "Get More Visibility",
    "Organize Your Candidates",
    "Verify Their Abilities",
  ];

  const Companies = [solaytic,kanba,lightAi,ztos,kanba,goldline,ideaa,liva,velocity]
  return (
    <div className="main-container">
      <div className="container">
        <div className="content">
          <h1>
            <span className="welcome">Welcome to</span> <br />
            My<span className="jobs">Jobs</span>
          </h1>
          <Button variant="primary"><Link to="/login">Get Started</Link></Button>
        </div>
        <div>
          <img src={Appearence} alt="Appearence" />
        </div>
      </div>
      <div className="card-container">
        <p className="why-us">Why Us</p>
        <div className="cards">
          {cardContent.map((content, index) => (
            <Card key={index}>
              <h1>{content}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </Card>
          ))}
        </div>
      </div>
      <div className="footer-container">
        <p>Companies Who Trust Us</p>
        <div className="company">
            {Companies.slice(0,5).map((imgLink, index)=>(
                <img src={imgLink} alt="company logo" key={index}/>
            ))}
        </div><br/>
        <div className="company2">
            {Companies.slice(5,9).map((imgLink, index)=>(
                <img src={imgLink} alt="company logo" key={index}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
