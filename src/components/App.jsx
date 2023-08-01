import { AddForm } from './AddForm/AddForm';
import cities from '../mockData/cities.json';
export const App = () => {
  return (
    <div>
      Trip APP
      <AddForm cities={cities} />
    </div>
  );
};
