import React, { useContext, useState } from "react";
import SignUpPage from "./pages/SignUp";
import { AuthContext } from "./lib/context/authContext";
import "./css/App.css";
import RestaurantList from "./components/RestaurantList";
import axios from "axios";

function App() {
  const userInfo = useContext(AuthContext);
  const [restaurant , setRestaurant] = useState([]);

  return (
    <div className="App">
      <RestaurantList/>
      {/* <div className="card-body">
                <button onClick={RestaurantList}>버튼</button>
            </div>
      <SignUpPage/> */}
    </div>
  );
}
export default App;
