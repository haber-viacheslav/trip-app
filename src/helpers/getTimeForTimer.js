export const getTimeForTimer = startTimeFromTrip => {
  const now = new Date().getTime(); //?
  const differenceTime = startTimeFromTrip - now;
  if (differenceTime <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceTime % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
