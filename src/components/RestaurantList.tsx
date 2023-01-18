import { User } from "@firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import {RestaurantData, Restaurant} from "../model/restaurant";
import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
// import "../css/RestauantList.css"

// import "../css/RestaurantList.css";

// const RestaurntProvider : React.FC<>
export default function RestaurantList (){
    const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(null);
    const [restaurant , setRestaurant] = useState<Restaurant[] | null>(null);
    //const [restaurant , setRestaurant] = useState([]);

    const serviceKey = process.env.REACT_APP_ENCODING_KEY;
    const URL = `https://api.odcloud.kr/api/3044660/v1/uddi:14a68b95-508b-4a35-ab41-e0fa7078c89f_202004061115?serviceKey=${serviceKey}`
    const page = 1; // 페이지 이동 변수 구독 
    const perPage = 10;


    const getRestaurantData = async () =>{
        try{
        const fetchData = await axios.get(URL, 
            {
                params:{
                page : 1,
                perPage: 10,
                returnType : "json"
            }
            })
        .then(resopnse =>{
            // console.log(`response 요청 : ${JSON.stringify(resopnse.data)}`);
            // setRestaurant(resopnse.data);
            setRestaurantData(resopnse.data);
        });
        }catch (error) {
            console.log(error)
        }
    }
    console.log(`response 요청 : ${JSON.stringify(restaurantData)}`);
    useEffect(() => {
        getRestaurantData();
      }, [restaurant]);    
      return(
        <div className="restaurantContent">
            {
            restaurantData ? restaurantData.data.map((getRestaurant)=>{
                return <div className="ContentList">
                            <div className="cardImage">
                                <img src="" alt="" />
                            </div>
                            <div className="cardData">
                                    <div className="title">
                                        식당 명 : {getRestaurant.모범업소명}
                                    </div>
                                    <ul className="dataUl">
                                        <li className = "dataLi">주소 : {getRestaurant.주소}</li>
                                        <li className = "dataLi">연락처 : {getRestaurant.연락처}</li>
                                        <li className = "dataLi">대표메뉴 : {getRestaurant.대표메뉴}</li>
                                        <li className = "dataLi">{getRestaurant.업태}</li>
                                    </ul>
                            </div> 
                </div>
            }) : null
        }
        </div>  
    )
};



