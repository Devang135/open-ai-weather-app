import Image from 'next/image';
import CityPicker from '@/Components/Citypicker';
import weatherCodeToString, { WeatherCode } from '@/lib/weatherCodeToString';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { Root } from '../../typings';

interface InformationPanelProps {
  city: string;
  lat: string;
  long: string;
  results:Root;
}

const InformationPanel: React.FC<InformationPanelProps> = ({
  city,
  lat,
  long,
  results,
}) => {
  return (
  <div className='bg-gradient-to-br from-teal-400 to-blue-500 p-10'>
      <div className='pb-5 text-white'>
        <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
        <p className='text-xs text-white'>
          Long/Lat: {long}, {lat}
        </p>
      </div>
      <CityPicker />
      <hr className='my-10' />
    <div className='text-white'>
      <div className='mt-5 items-center flex justify-between space-x-10'>
        <div>
          <p className='text-xl'>
            {new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className='font-extralight'>
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className='text-xl font-bold uppercase'>
          {new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
      </div>
      <hr className='mt-10 mb-5' />
      <div className='flex items-center justify-between'>
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString(
                results.current_weather.weathercode as WeatherCode
              )?.icon
            }.png`}
            alt={
              weatherCodeToString(
                results.current_weather.weathercode as WeatherCode
              )!.label
            }
            width={75}
            height={75}
          />
          <div className='flex items-center justify-between space-x-10'>
            <p className='text-6xl font-semibold'>
              {results.current_weather.temperature.toFixed(1)}°C
            </p>
            <p className='text-right font-extralight'>
              {
                weatherCodeToString(
                  results.current_weather.weathercode as WeatherCode
                )?.label
              }
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className='space-y-2 py-5'>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#088395]'>
          <SunIcon className='h-10 w-10 text-white' />
          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight text-white'>Sunrise</p>
            <p className='uppercase text-2xl text-white'>
              {new Date(results.daily.sunrise[0]).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#088395]'>
          <MoonIcon className='h-10 w-10 text-white' />
          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight text-white'>Sunset</p>
            <p className='uppercase text-2xl text-white'>
              {new Date(results.daily.sunset[0]).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
