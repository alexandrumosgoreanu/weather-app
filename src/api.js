const apiKey = "dda848a3c50b4296a92185040232711";

async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=dda848a3c50b4296a92185040232711&q=${location}`, { mode: "cors" });
        if (!response.ok) 
            throw new Error(`City ${location} not found`);

        const data = await response.json();
        return processData(data);
    }
    catch(err) {
        console.log(err);
    }
}

function processData(data) {
    const processedData = {
        location: data.location.name,
        localtime: data.location.localtime,
        condition: data.current.condition.text,
        feelsLike: {
            f: data.current.condition.feelslike_f,
            c: data.current.condition.feelslike_c
        },
        temp: {
            f: data.current.condition.temp_f,
            c: data.current.condition.temp_c
        },
        humidity: data.current.condition.humidity,
        pressure: {
            in: data.current.condition.pressure_in,
            mb: data.current.condition.pressure_mb
        },
        wind: {
            mph: data.current.condition.wind_mph,
            kph: data.current.condition.wind_kph
        },
    }

    return processedData;
}

export { getWeather };