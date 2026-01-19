import { useQuery } from "@tanstack/react-query";
import { fetchDummyGreeting } from "./API/blogApi";
import AppRouter from "./router/AppRouter";
import BlogList from "./pages/BlogList";

function App() {
 
  return (
    
       <BlogList />
   
  );
}

export default App;
