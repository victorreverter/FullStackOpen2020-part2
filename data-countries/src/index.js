import React,  {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

const App = () => {
  const [countryTotal, setCountryTotal] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);

  const handleChange = (elem) => {
    elem.preventDefault();
    // console.log(elem.target.value);

    const filteredArr = countryTotal.filter((el) => {
      return el.name.includes(elem.target.value);
    });

    setCountryInfo(filteredArr);
  };

  // const countryVal = `https://restcountries.eu/rest/v2/all`;

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountryTotal(response.data);
      })
  }, [])


  // console.log(countryTotal);
  // console.log(countryInfo);

  const CountryRender = () => {
    if (countryInfo.length === 0) {
      return( <p>Any country found...</p>);    
    } else if (countryInfo.length > 5) {
      return (<p>Too many countries founded.</p>);    
    } else if (countryInfo.length >= 2 && countryInfo.length <= 4) {
      return countryInfo.map((element, index) => {
        return <p key={index}>{element.name}</p>;
      });
    } else {
      let langArr = countryInfo[0].languages; 
      // console.log(countryInfo[0]);
      return (
        <div>
          <h2>{countryInfo[0].name}</h2>
          <p>Capital: {countryInfo[0].capital}</p>
          <p>Population: {countryInfo[0].population}</p>
          <h3>Languages:</h3>
          <ul>
            {langArr.map((el, i) => {
              return <li key={i}>{el.name}</li>;
            })}
          </ul>
          <img src={countryInfo[0].flag} />
        </div>
      );    
    }
  }

  return (
    <div className="container">
      <p>find countries</p>
      <input
        type="text"
        placeholder="search a country"
        onChange={handleChange}
      />

      <CountryRender />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
