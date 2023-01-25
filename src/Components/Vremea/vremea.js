import React, { useState } from "react";
import axios from "axios";
import styles from "../Vremea/vremea.module.scss";

function Vremea() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />

      <div>
        <div className={styles.Top}>
          <div className="location">
            <p>Locatia selectata{data.name}</p>
          </div>
          <span style={{ color: "gold" }}>
            {data.main ? <h1>{data.main.temp.toFixed()}°Celsius</h1> : null}
          </span>
          <span className={styles.description}>
            {data.weather ? <span>Sky is {data.weather[0].main}</span> : null}
          </span>
        </div>
        <br></br>

        {data.name !== undefined && (
          <div className={styles.description}>
            <p>Feels Like</p>
            <div className={styles.description}>
              {data.main ? (
                <span className="bold">{data.main.feels_like.toFixed()}°C</span>
              ) : null}
            </div>
            <p>Humidity</p>
            <div className={styles.description}>
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            </div>
            <p>Wind Speed</p>
            <div className={styles.description}>
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Vremea;
