import { useQuery } from "@tanstack/react-query";
import { fetchDummyGreeting } from "./API/testApi";


function App() {
  const { data, isLoading } = useQuery<string>({
  queryKey: ["greeting"],
  queryFn: fetchDummyGreeting,
});

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <h1>{data}</h1>}
    </div>
  );
}

export default App;
