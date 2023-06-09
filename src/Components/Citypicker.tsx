"use client"

import React from 'react'
import { Country,City } from 'country-state-city';
import Select from 'react-select';
import {useState} from "react";
import { useRouter } from 'next/navigation';

type option ={
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  },
  label: string
} | null;

type CityOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
    name: string;
    stateCode: string;
  };
  label: string
} | null;

const options = Country.getAllCountries().map((country) =>({
  value : {
    latitude : country.latitude,
    longitude : country.longitude,
    isoCode : country.isoCode
  },
  label: country.name,
}))

function Citypicker() {

  const [selectedCountry,setselectedCountry] = useState<option>();
  const [selectedCity,setselectedCity] = useState<CityOption>();
  const router = useRouter();

  const handleCountryChange = (option : option) => {
    setselectedCountry(option);
    setselectedCity(null);
  };
  const handleCityChange = (option : CityOption) => {
    setselectedCity(option);
    router.push(`location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
  };

  return (
    <div className='space-y-4'  >
      <div className='space-y-2'>
      <div className='items-center flex text text-white/80 space-x-1'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>  
      <label htmlFor='country'>Country</label>
      </div>
      <Select  
      value={selectedCountry} 
      onChange={handleCountryChange} 
      options={options} />          
    </div>
    {selectedCountry &&(
      <div className='space-y-2'>
      <div className='items-center flex text text-white/80 space-x-1'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>  
      <label htmlFor='country'>City</label>
      </div>
      <Select  
      value={selectedCity} 
      onChange={handleCityChange} 
      options ={City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map((state) => ({
        value: {
            latitude: state.latitude!,
            longitude: state.longitude!,
            isoCode: state.countryCode,
            name: state.name,
            stateCode: state.stateCode,
        },
        label: state.name,
    }))
} />          
    </div>
      )}
    </div>
  )
}

export default Citypicker;