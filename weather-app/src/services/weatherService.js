import{DateTime} from "luxon";

const API_KEY = "8f44cefdb23b3235ebf92857ab42a6e5";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res) => res.json())
};

const formateCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return{lat, lon, temp, feels_like, temp_min, temp_max, humidity,
         name, dt, country, sunrise, sunset, 
         details, icon, speed}
}

const formateForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,8).map(d => {
        return {
            title: formateToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });

    hourly = hourly.slice(1,13).map(d => {
        return {
            title: formateToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        };
    });
    return{timezone, daily, hourly};
};


const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams)
    .then(formateCurrentWeather);

    const {lat, lon} = formattedCurrentWeather
    const formattedForecastWeather = await getWeatherData
    ('onecall',
    {lat,
    lon,
    exclude: 'current, minutely, alerts',
    units: searchParams.units
    }).then(formateForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather};
};

const formateToLocalTime = (
    secs,
    zone, 
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconURLFromCode = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export default getFormattedWeatherData;
export {formateToLocalTime, iconURLFromCode};