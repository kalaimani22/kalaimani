import React, { useEffect, useState } from "react";

const CountriesInfo = () => {
  const [country, setCountry] = useState("india");
  const [countryInfo, setCountryInfo] = useState();

  const countryEvent = () => {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setCountryInfo(res[0]);
      });
  };

  useEffect(() => {
    countryEvent();
  }, [country]);

  return (
    <React.Fragment>
      <h3>Country Info</h3>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <ul>
        <li>
          <img src={countryInfo?.coatOfArms.svg} />
        </li>
      </ul>
    </React.Fragment>
  );
};

export default CountriesInfo;
