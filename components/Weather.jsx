import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  // console.log(data);
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[65vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-8'>
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='800'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{(data.main.temp-273.15).toFixed(0)}&#176;C</p>
      </div>
      {/* Bottom */}

<div className='bg-black/50 relative p-8 rounded-md'>
    <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
    <div className='flex justify-between text-center'>
        <div>
            <p className='font-bold text-2xl'>{(data.main.feels_like-273.15).toFixed(0)}&#176;C</p>
            <p className='text-xl'>Feels Like</p>
        </div>
        <div>
            <p className='font-bold text-2xl'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
        </div>
        <div>
            <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} km/h</p>
            <p className='text-xl'>Winds</p>
        </div>
    </div>
</div>

    </div>
  );
};

export default Weather;