import React from 'react'

        const SearchFilter = ({Search, setSearch, Filter, setFilter }) => {
            const handleInputChange = (event) => {
            event.preventDefault();
            setSearch(event.target.value);
        };

        const handleSelectChange = (event) => {
            event.preventDefault();
            setFilter(event.target.value);
        };
  return (
       <section className="section-searchFilter container">
      <div>
        <input
        style={{padding: "1.3rem" , borderRadius: "20px", border: "2px solid gray"}}
          type="text"
          placeholder="search"
          value={Search}
          onChange={handleInputChange}
        />
        <select
          className="select-section"
          value={Filter}
          onChange={ handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter
