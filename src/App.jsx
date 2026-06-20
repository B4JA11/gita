import React, { useState, useEffect } from 'react';
import LiveTracker from './LiveTracker';

const citiesData = [
  { id: 1, name: "თბილისი", temp: 25, condition: "მზიანი" },
  { id: 2, name: "ბათუმი", temp: 22, condition: "წვიმიანი" },
  { id: 3, name: "ქუთაისი", temp: 24, condition: "ღრუბლიანი" }
];

function App() {
  const [activeCity, setActiveCity] = useState(citiesData[0]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    console.log("ამინდის აპლიკაცია წარმატებით ჩაიტვირთა!");
  }, []);

  useEffect(() => {
    document.title = `ამინდი: ${activeCity.name}`;
  }, [activeCity]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: 'auto' }}>
      
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
        <h3>აირჩიე ქალაქი:</h3>
        
        {citiesData.map((city) => (
          <button 
            key={city.id} 
            onClick={() => setActiveCity(city)}
            style={{ 
              marginRight: '10px', 
              padding: '8px 12px', 
              backgroundColor: activeCity.id === city.id ? '#007BFF' : '#f0f0f0',
              color: activeCity.id === city.id ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {city.name}
          </button>
        ))}

        <div style={{ marginTop: '20px' }}>
          <h4>აქტუალური ამინდი: {activeCity.name}</h4>
          <p>ტემპერატურა: {activeCity.temp}°C</p>
          <p>მდგომარეობა: {activeCity.condition}</p>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={() => setIsLive(!isLive)}
          style={{
            padding: '10px 15px',
            backgroundColor: isLive ? '#DC3545' : '#28A745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >
          {isLive ? "გათიშე Live რეჟიმი" : "ჩართე Live რეჟიმი"}
        </button>

        {isLive ? <LiveTracker /> : null}
      </div>

    </div>
  );
}

export default App;