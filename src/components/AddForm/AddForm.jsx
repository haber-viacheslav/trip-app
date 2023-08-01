import { useState } from 'react';
import { formatRequestDate } from 'helpers/formatRequestDate';
export const AddForm = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const now = new Date();
  const maxDate = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, -8);
  const minDate = now.toISOString().slice(0, -8);

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
    const tripData = {
      city: cities.filter(city => city.id === +selectedCity)[0].name,
      start: new Date(startTime).getTime(),
      end: new Date(endTime).getTime(),
    };
    console.log('TripData', formatRequestDate(tripData.start));
    // В этом месте вы можете выполнить дополнительные действия при отправке формы, например, передать данные обратно в родительский компонент.
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
      <button type="submit">Готово</button>
    </form>
  );
};
