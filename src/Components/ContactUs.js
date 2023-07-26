import React, { useState, useEffect } from "react";

const ContactUs = () => {
  const [country, setCountry] = useState("IN");
  const [countryFilter, setCountryFilter] = useState([]);

  useEffect(() => {
    console.log(country);
    filter();
    return () => {};
  }, [country]);
  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Paksitan",
      value: "pk",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "bangaladesh",
      value: "BG",
      cities: ["Dhaka", "Chittagong"],
    },
  ];
  const onChangeSelect = (e) => {
    setCountry(e.target.value);
  };

  const filter = () => {
    const filterCountry = countries.filter((item) => item.value === country);
    setCountryFilter(filterCountry);
  };
  return (
    <div>
      <h1>Contact</h1>

      <select onChange={(e) => onChangeSelect(e)}>
        {countries.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      {countryFilter.map((item, index) => (
        <select className="filter-data" key={index}>
          {item.cities.map((filter, index) => (
            <option key={index} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default ContactUs;
