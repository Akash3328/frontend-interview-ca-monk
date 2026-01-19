import { useQuery } from "@tanstack/react-query";
import { fetchDummyGreeting } from "./API/testApi";
import AppRouter from "./router/AppRouter";

function App() {
  const { data, isLoading } = useQuery<string>({
  queryKey: ["greeting"],
  queryFn: fetchDummyGreeting,
});

  return (
    
     <AppRouter />
   
  );
}

export default App;
