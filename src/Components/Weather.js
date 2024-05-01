import React, {useState} from 'react'
import './Weather.css'
import { CiSearch } from 'react-icons/ci'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLocationDot } from "react-icons/fa6";


const Weather = () => {

  const [city, setcity] = useState('');
  const [weather, setweather] = useState();
  const [error, seterror] = useState('');
  
  const API_KEY = "e82ae03808d124b67988681f18a43353";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  function handleOnChange(event) {
    setcity(event.target.value);
    console.log(event.target.value);
  }

  async function fetchData(){
    try {
      let response = await fetch(url);
      let output = await response.json();
      if(response.ok) {
        setweather(output);
        console.log(output);
        seterror('')
      }
    } catch (error) {
      seterror('Data not found. Please enter the correct city name');
    }
  }


  return (
   <>
   
    {/* <div className='container'>
      <div className='city'>
        <input type='text' value={city} onChange={handleOnChange} placeholder='Enter any ity name'></input>
        <button onClick={() => fetchData() }>
        <CiSearch />
        </button>
      </div>
      {
        error && <p className='error-message'>{error}</p>
      }

      {
        weather && weather.weather && 
        <div className='content'>
          <div className='weather-image'>
            <img src='https://openweathermap.org/img/wn/10d@2x.png'></img>
          </div>

        </div>
      }
    </div> */}

    <div className='container'>
      <h1 className='text-center pt-3 '>Weather Application</h1>
    <div className="container-fluid px-1 px-sm-3 py-4 mx-auto">
    <div className="row d-flex justify-content-center">
        <div className="row card0">
            <div className="card1 col-lg-8 col-md-7">
                {/* <small>the.weather</small> */}
                <div className="text-center">
                    {/* <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" /> */}
                    {
                       weather && weather.weather && 
                       <div className='content'>
                       <div className='weather-image'>
                       <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} ></img>
                      </div>
                      </div>
                    }
                </div>
                <div className="row px-3 mt-3 mb-3">
                    <h1 className="large-font mr-3">
                    {
                            weather && weather.weather && 
                            weather.main.temp
                        } <span>&deg;C</span>
                    </h1>
                    <div className="d-flex flex-column mr-3">
                        <h2 className="mt-3 mb-3">
                          <FaLocationDot /> &nbsp;
                          {
                            weather && weather.weather && 
                            weather.name
                        } <span>,
                          {
                            weather && weather.weather && 
                            weather.sys.country
                          }
                        </span>
                        </h2>
                        {/* <small>10:36 - Tuesday, 22 Oct '19</small> */}
                    </div>
                    {/* <div className="d-flex flex-column text-center">
                        <h3 className="fa fa-sun-o mt-5"></h3>
                        <small>Developed and designed by Ali Hassan</small>
                    </div> */}
                </div>
            </div>
            <div className="card2 col-lg-4 col-md-5">
                <div className="row px-3">
                <input type='text' value={city} onChange={handleOnChange} placeholder='Enter any city name'></input>
                    <button className='btn btn-warning mt-3 mb-2' onClick={() => fetchData() }>
                       Search <CiSearch />
                    </button>
                </div>
                
                <div className="mr-5">

                    <div className="line my-3"></div>
                    
                    <p className='text-white'>Weather Details</p>
                    <div className="row px-3">
                        <p className="light-text">Atmosphere</p>
                        <p className="ml-auto">
                        {
                            weather && weather.weather && 
                            weather.weather[0].description
                        }
                          
                        </p>
                    </div>
                    <div className="row px-3">
                        <p className="light-text">Humidity</p>
                        <p className="ml-auto">
                        {
                            weather && weather.weather && 
                            weather.main.humidity
                        } <span>%</span>
                        </p>
                    </div>
                    <div className="row px-3">
                        <p className="light-text">Wind</p>
                        <p className="ml-auto">
                        {
                            weather && weather.weather && 
                            weather.wind.speed
                        } <span>km/h</span>
                        </p>
                    </div>

                    <div className="line mt-3"></div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    <footer className='text-center mt-4 mb-3'>
      <h6>Developed and designed by Ali Hassan</h6>
    </footer>
   </>
  )
}

export default Weather