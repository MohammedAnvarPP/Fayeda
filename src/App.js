import { CountryList } from "./components/CountryList/CountryList";
import AboutUs from "./components/About Us/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./components/Services/Service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/AboutUS" element={<AboutUs />} />
          <Route path="/CountryList" element={<CountryList />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
