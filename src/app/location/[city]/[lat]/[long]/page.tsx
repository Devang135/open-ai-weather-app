import { getClient } from "@/Components/apollo-client";
import fetchWeatherQuery from "@/Components/queries/FetchWeatherQueries";
import { Root } from "../../../../../../typings";
import CalloutCard from "@/Components/CalloutCard";
import { HumidityChart, InformationPanel, RainChart, StatCard, TempChart } from "@/Components";


type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
    const client = getClient();
    const { data } = await client.query({
            query: fetchWeatherQuery,
            variables: { 
              current_weather:"true",
              latitude: lat, 
              longitude: long,
              timezone:"Asia/Kolkata",
              }
        });
    const results:Root = data.myQuery;
    console.log(results);
  return (
  <div>
    <div className='flex flex-col min-h-screen md:flex-row'>
      <InformationPanel city={city} lat={lat} long={long} results={results} />
        <div className='flex-1 p-5 lg:p-10'>
          <div className="pb-5">
          <div>
            <h1 className="text-xl font-semibold">Today Overview</h1>
            <p  className="text-sm text-gray-500">
              Last Updated at: {" "}
              {new Date(results.current_weather.time).toLocaleString()}({results.timezone})

            </p>
            </div>
          </div>

          <div>
              <CalloutCard message="Recomendation"/>
          </div>

        <div className="pt-5 text-sm grid grid-cols-1 xl:grid-cols-2 gap-3 m-2">
        <div className="pt-5 text-sm">
          <StatCard 
            title="Maximum Temperature"
            metric ={`${results.daily.temperature_2m_max[0].toFixed(1)} ℃`}
            color="yellow"/>
        </div>
        <div className="pt-5 text-sm ">
          <StatCard 
            title="Minimum Temperature "
            metric ={`${results.daily.temperature_2m_min[0].toFixed(1)} ℃`}
            color="blue"/>
        </div>
        <div className="pt-5">
          <StatCard title="UV Index" color="red" metric={`${results.daily.uv_index_max[0].toFixed(1)}`}/>
          {Number(results.daily.uv_index_max[0].toFixed(1))>5&& (<CalloutCard 
          message={"The UV Index is High. Wear SPF and Sunglasses 🕶️ 🔥"} 
          warning
          />
          )}
        </div>
        <div className='flex space-x-2 pt-1'>
              <StatCard
                title='Wind Speed'
                metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                color='cyan'
              />
              <StatCard
                title='Wind Direction'
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color='violet'
              />
          </div>
      </div>

      <div> 
      <hr className='mb-5' />
        <div className='space-y-3'>
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
        
      </div>
    </div>
    </div>
  </div>
  );
}


export default WeatherPage;
