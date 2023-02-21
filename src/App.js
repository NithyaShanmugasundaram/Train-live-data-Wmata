import SelectComponent from "./components/select/Select";
import React, { useState, useEffect } from 'react';
import Trains from "./components/train/Trains";
import { serviceTypes, lineCodeTypes, carCounts } from './helpers'

function App() {
  const [filterServiceType, setFilterServiceType] = useState("")
  const [filterCarCount, setFilterCarCount] = useState("");
  const [filterLineCode, setFilterLineCode] = useState();
  const [trainPosition, setTrainPosition] = useState([])
  const [filteredArray, setFilteredArray] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://api.wmata.com/TrainPositions/TrainPositions?contentType=json", {
      method: 'GET',
      headers: {
        'api_key': "b34962d7e2a342c4b0aef917260c8c67",
      },
    });
    const data = await response.json();
    setTrainPosition(data.TrainPositions)
  }

  useEffect(() => {
    if (trainPosition.length > 0) {
      const result = trainPosition
        .filter((item) =>
          !!filterCarCount ? filterCarCount.includes(item.CarCount.toString()) : item
        )
        .filter((item) =>
          !!filterLineCode ? filterLineCode.includes(item.LineCode) : item
        )
        .filter((item) =>
          !!filterServiceType ? filterServiceType.includes(item.ServiceType) : item
        );
      setFilteredArray(result);
    }
    const timer = setInterval(() => {
      fetchData();
    }, 7000);
    return () => clearInterval(timer)
  }, [filterCarCount, filterLineCode, filterServiceType, trainPosition]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "Service Type") {
      setFilterServiceType(value)
    } else if (name == "Car Count") {
      setFilterCarCount(value)
    } else if (name == "Line Code")
      setFilterLineCode(value)
  }

  return (
    <><h1>Live Train Data</h1>
      <div className="grid-container">
        <div className="grid-item1"><SelectComponent selectItems={serviceTypes} label="Service Types" name="Service Type" onChange={handleChange} value={filterServiceType} /></div>
        <div className="grid-item2"><SelectComponent selectItems={lineCodeTypes} label="Line Code" name="Line Code" onChange={handleChange} value={filterLineCode} /></div>
        <div className="grid-item3"><SelectComponent selectItems={carCounts} label="Car Count" onChange={handleChange} name="Car Count" value={filterCarCount} /></div>
      </div>
      {trainPosition.length>0?<div className="cards">
        {filteredArray.length > 0 ? <Trains trainPosition={filteredArray} /> : <h3>No matching data.</h3>}
      </div>:<h3>Loading...</h3>}
    </>
  );
}

export default App;
