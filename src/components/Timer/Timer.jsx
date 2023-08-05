import { useState, useEffect } from 'react';
import {
  TimerStyledValue,
  TimerStyledWrp,
  TimerStyledField,
  TimerStyledLabel,
} from './Timer.styled';
import { getTimeForTimer } from 'helpers/getTimeForTimer';
export const Timer = ({ tripTime }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeForTimer(tripTime));
  const { days, hours, minutes, seconds } = timeLeft;
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeForTimer(tripTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [tripTime]);
  return (
    <TimerStyledWrp>
      <TimerStyledField>
        <TimerStyledValue>{days}</TimerStyledValue>
        <TimerStyledLabel>Days</TimerStyledLabel>
      </TimerStyledField>
      <TimerStyledField>
        <TimerStyledValue>{hours}</TimerStyledValue>
        <TimerStyledLabel>Hours</TimerStyledLabel>
      </TimerStyledField>
      <TimerStyledField>
        <TimerStyledValue>{minutes}</TimerStyledValue>
        <TimerStyledLabel>Minutes</TimerStyledLabel>
      </TimerStyledField>
      <TimerStyledField>
        <TimerStyledValue>{seconds}</TimerStyledValue>
        <TimerStyledLabel>Seconds</TimerStyledLabel>
      </TimerStyledField>
    </TimerStyledWrp>
  );
};
