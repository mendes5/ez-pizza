import { apiGet } from "./modules/API";
import { useQuery } from "react-query";

const App = () => {
  const { data, isSuccess } = useQuery('test', () => apiGet('/points'));

  return isSuccess ? <>Points: {data.userPoints}</> : 'Loading...';
};

export default App;
