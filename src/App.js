import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <Home />
          } /*index key word to make the home persist in the route*/
        />
        <Route path="shop" element={<h1>Shop</h1>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
