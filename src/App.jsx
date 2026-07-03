import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<p>Welcome to the app</p>}></Route>
            <Route path="cities" element={<p>List of cities</p>}></Route>
            <Route path="countries" element={<p>List of countries</p>}></Route>
            <Route path="form" element={<p>Form</p>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
