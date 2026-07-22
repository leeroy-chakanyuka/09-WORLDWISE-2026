import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import { useCities } from "./CitiesContext";
function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return (
      <Message message="No Countries added yet. Add your first by clicking on the map" />
    );
  }

  return (
    <ul className={styles.countryList}>
      {cities
        // 1. Filter out duplicate countries first
        .filter(
          (city, index, self) =>
            self.findIndex((c) => c.country === city.country) === index,
        )
        // 2. Map the unique results into your list items
        .map((city) => (
          <li key={city.id}>
            <CountryItem country={city} />
          </li>
        ))}
    </ul>
  );
}

export default CountryList;
