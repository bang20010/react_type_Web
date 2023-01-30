import React, { useContext, useState } from "react";
import SignUpPage from "./pages/SignUp";
import { AuthContext } from "./lib/context/authContext";
import "./css/App.css";
import RestaurantList from "./components/RestaurantList";
import {restaurantName} from "./model/restaurantName";
import axios from "axios";
import Nav from "./components/Navibar"
// import Map from "./components/Map"

const App = () => {
  const userInfo = useContext(AuthContext);
  const [restaurant , setRestaurant] = useState([]);
  const [restaurantName , setRestaurantName] = useState<restaurantName | null>(null);


  return (
    <div className="App">
      <Nav/>
      <RestaurantList/>
    </div>
  );
}
export default App;
