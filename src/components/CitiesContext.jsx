import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const CitiesContext = createContext(null);

function CitiesProvider({ children }) {
  const [cities, setCities] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCities() {
      const controller = new AbortController();

      const data = await fetch("http://localhost:8000/cities", {
        signal: controller.signal,
      });
      if (!data.ok) {
        window.alert("Error fetching cities data");
      }

      const cities = await data.json();
      setCities(cities);
      setLoading(false);
      console.log(cities);

      return controller.abort();
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context) throw new Error("Cities context used incocrrectly");
  return context;
}
export { CitiesProvider, useCities };
