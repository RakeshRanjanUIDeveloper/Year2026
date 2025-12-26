import React, { useState } from "react";

const NestedDropdown = () => {
  const [country, setCountry] = useState("");
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];

  const selectedCountry = countries.find((c) => c.value === country);
  return (
    <React.Fragment>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select the Country</option>
        {countries.map((country) => (
          <option key={country.name} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <select>
          {selectedCountry.cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
        {/* 
      <select>
        {selectedCountry ? (
          selectedCountry.cities.map((city) => (
            <option value={city}>{city}</option>
          ))
        ) : (
          <option value="">Select the City</option>
        )}
      </select>*/}
    </React.Fragment>
  );
};

export default NestedDropdown;
