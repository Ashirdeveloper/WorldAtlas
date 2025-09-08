import React from 'react'
import { useTransition,useEffect,useState } from 'react'
import { getCountryData } from '../api/postApi'
import Loader from '../components/Loader'
import { CountryCard } from '../components/Layout/CountryCard'
import SearchFilter from '../components/SearchFilter'
const Country = () => {
  const [isPending,startTransition]=useTransition();
  const [Countries,setCountries]= useState([]);
  const [Search,setSearch]= useState();
  const [Filter,setFilter]= useState("all");

  const searchCountry = (country) => {
    if(Search){
      return country.name.common.toLowerCase().includes(Search.toLowerCase());
    };
     return country;
  }
  const filterRegion = (country) => {
    if (Filter === "all") return country;
    return country.region === Filter;
  }
  //filter
  const filterCountries=Countries.filter((country)=> searchCountry(country)&& filterRegion(country));
  // console.log(filterCountries);

  useEffect(()=> {
       startTransition(async ()=> {
        const res = await getCountryData();
       setCountries(res.data)
       })
  },[])
  if (isPending) 
    return <Loader />
  return (
    <>
      <SearchFilter Search={Search} setSearch={setSearch} setFilter={setFilter} Filter={Filter} />
    <section className="country-section">
      <ul className='grid grid-four-cols'>
          {
            filterCountries.map((country, index)=> {
              return <CountryCard key={index} country={country} />;
            })
          }
      </ul>

    </section>
    </>
  )
}

export default Country