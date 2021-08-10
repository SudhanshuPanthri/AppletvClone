import React, { useEffect, useState } from "react";
import "./Hero.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "../../axios";
import requests from "../../Requests";

function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `
            url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="content">
          <h1>All Apple Originals.</h1>
          <h2>
            Exclusively on Apple TV+. Watch here and on the Apple TV app across
            your devices.
          </h2>
          <button className="btn">Start your free trial</button>
          <span>7 days free, then ₹ 99/month</span>
          <ExpandMoreIcon
            style={{
              fontSize: 32,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <div className="contentCards"></div>
    </>
  );
}

export default Hero;
