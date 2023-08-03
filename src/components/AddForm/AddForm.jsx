import { useEffect, useState } from 'react';
import { formatRequestDate } from 'helpers/formatRequestDate';
export const AddForm = ({ cities, onClick, addTrip }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isVerify, setIsVerify] = useState(false);
  const now = new Date();
  const maxDate = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, -8);
  const minDate = now.toISOString().slice(0, -8);
  useEffect(() => {
    if (selectedCity && startTime && endTime) {
      return setIsVerify(true);
    } else return setIsVerify(false);
  }, [selectedCity, startTime, endTime]);
  const handleCityChange = e => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  };

  const handleStartTimeChange = e => {
    console.log(e.target.value);
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = e => {
    console.log(e.target.value);
    setEndTime(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const chosenCity = cities.filter(city => city.id === +selectedCity)[0];
    console.log('chosenCity', chosenCity);

    const newTrip = {
      name: chosenCity.name,
      imageUrl: chosenCity.imageUrl,
      startTime: new Date(startTime).getTime(),
      endTime: new Date(endTime).getTime(),
    };
    console.log(
      'TripData',
      newTrip,
      formatRequestDate(newTrip.startTime, 'toPoints')
    );
    addTrip(newTrip);
    onClick();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="city">Please select a city</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value=""></option>
          {cities.map(city => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="start-time">Select date</label>
        <input
          type="datetime-local"
          id="start-time"
          value={startTime}
          onChange={handleStartTimeChange}
          min={minDate}
          max={maxDate}
        />
      </div>
      <div>
        <label htmlFor="end-time">Select date</label>
        <input
          type="datetime-local"
          id="end-time"
          value={endTime}
          onChange={handleEndTimeChange}
          min={minDate && startTime}
          max={maxDate}
        />
      </div>
      <div>
        <button type="button" onClick={onClick}>
          Cancel
        </button>
        <button disabled={!isVerify} type="submit">
          Save
        </button>
      </div>
    </form>
  );
};
