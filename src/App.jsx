import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import { CitiesProvider } from "./components/CitiesContext.jsx";
function App() {
  return (
    <>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />}></Route>
            <Route path="pricing" element={<Pricing />}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="app" element={<AppLayout />}>
              {/* these  are all children of app so they will show up as app/cities, app/countries etc
              we also have the base url for just app configged as what would show up when you click /app/cities 
            */}
              <Route index element={<CityList />}></Route>
              <Route path="cities" element={<CityList />}></Route>
              <Route path="cities/:id" element={<City />}></Route>
              <Route path="countries" element={<CountryList />}></Route>
              <Route path="form" element={<Form />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </>
  );
}

export default App;
