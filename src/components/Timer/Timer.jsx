import {
  TimerStyledValue,
  TimerStyledWrp,
  TimerStyledField,
  TimerStyledLabel,
} from './Timer.styled';
export const Timer = () => {
  return (
    <TimerStyledWrp>
      <TimerStyledField>
        <TimerStyledValue>00</TimerStyledValue>
        <TimerStyledLabel>Days</TimerStyledLabel>
      </TimerStyledField>
      <TimerStyledField>
        <TimerStyledValue>00</TimerStyledValue>
        <TimerStyledLabel>Hours</TimerStyledLabel>
      </TimerStyledField>
      <TimerStyledField>
        <TimerStyledValue>00</TimerStyledValue>
        <TimerStyledLabel>Minutes</TimerStyledLabel>
      </TimerStyledField>
      <TimerStyledField>
        <TimerStyledValue>00</TimerStyledValue>
        <TimerStyledLabel>Seconds</TimerStyledLabel>
      </TimerStyledField>
    </TimerStyledWrp>
  );
};
