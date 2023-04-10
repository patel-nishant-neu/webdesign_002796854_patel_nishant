import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempratureAndDetails from './components/TempratureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: "boston"});
  const[units, setUnits] = useState("metric");
  const[weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then(data => {
        setWeather(data);
      });
    };
      
    fetchWeather();
  }, [query, units]);

  const FormateBackground = () => {
    if(!weather) return " from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if(weather.temp <= threshold) return " from-cyan-700 to-blue-700";
    return " from-yellow-700 to-orange-700";
  }

  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 rounded-lg ${FormateBackground}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
      {weather && (
          <div>
          <TimeAndLocation weather={weather}/>
          <TempratureAndDetails weather={weather}/>
          <Forecast title="Hourly Forecast" items={weather.hourly}/>
          <Forecast title="Daily Forecast" items={weather.daily}/>
          </div>
      )}
      
    </div>
  );
}

export default App;
