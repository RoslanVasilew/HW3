import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

// Sample list of Israeli cities
const cities = [
  'Jerusalem',
  'Tel Aviv',
  'Haifa',
  'Rishon LeZion',
  'Petah Tikva',
  'Ashdod',
  'Netanya',
  'Beersheba',
  'Holon',
  'Bnei Brak',
  'Ramat Gan',
  'Rehovot',
  'Herzliya',
  'Kfar Saba',
  'Bat Yam',
  'Modi\'in-Maccabim-Re\'ut',
  'Ashkelon',
  'Beit Shemesh',
  'Nazareth',
  'Tiberias',
  'Ramat Hasharon',
  'Kiryat Gat',
  'Givatayim',
  'Ramat Beit Shemesh',
  'Lod',
  'Ra\'anana',
  'Eilat',
  'Hod HaSharon',
  'Ramla',
  'Rahat',
  'Kiryat Ata',
  'Nahariya',
  'Sderot',
  'Yavne',
  'Karmiel',
  'Ness Ziona',
  'Tamra',
  'Ma\'alot-Tarshiha',
  'Dimona',
  'Acre',
  'Or Yehuda',
  'Afula',
  'Safed',
  'Ofakim',
  'Herzliya Pituah',
  'Tirat Carmel',
  'Migdal HaEmek',
  'Netivot',
  'Kiryat Yam',
  'Kiryat Motzkin'
];


const CityAutocomplete = (props) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const checkCity = (e) =>{
   props.city1(e);
}
  // Filter function for suggestions
  const getSuggestions = (inputValue) => {
    const inputValueLowerCase = inputValue.trim().toLowerCase();
    const filteredCities = cities.filter(city =>
      city.toLowerCase().includes(inputValueLowerCase)
    );
    // Return only the top 3 suggestions
    return filteredCities.slice(0, 3);
  };

  // Render suggestion
  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion}
    </div>
  );

  // Autosuggest input props
  const inputProps = {
    placeholder: 'Type a city',
    value,
    onChange: (event, { newValue }) => {
      setValue(newValue);
      if(cities.includes(newValue)){checkCity(newValue);}
      
    },
   
  };

  // Set suggestions
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Clear suggestions
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
 
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={suggestion => suggestion}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      
    />
  );
};

export default CityAutocomplete;