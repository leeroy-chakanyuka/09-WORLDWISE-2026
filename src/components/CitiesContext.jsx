import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const CitiesContext = createContext(null);

function CitiesProvider({ children }) {
  const [cities, setCities] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState({});

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

  async function getCurrentCity(id) {
    const controller = new AbortController();
    console.log(id);
    const data = await fetch(`http://localhost:8000/cities/${id}`, {
      signal: controller.signal,
    });
    if (!data.ok) {
      window.alert("Error fetching cities data");
    }

    const city = await data.json();
    setCurrentCity(city);
    setLoading(false);
    console.log(cities);

    return controller.abort();
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCurrentCity,
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
