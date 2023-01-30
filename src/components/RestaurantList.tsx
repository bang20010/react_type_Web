import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import {RestaurantData, Restaurant} from "../model/restaurant";
import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import Pagination from '@mui/material/Pagination';
import { getValue } from "@testing-library/user-event/dist/utils";
import {restaurantName} from "../model/restaurantName";
import Map from "./Map"

export default function RestaurantList (
    //{name} : restaurantName
    ){
    const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(null);
    const [restaurant , setRestaurant] = useState<Restaurant[] | null>(null);
    const [restaurantName , setRestaurantName] = useState<String>();
    const [currentCount , setCurrentCount] = useState(1);
    const [loading, setLoading] = useState(true);
    const serviceKey = process.env.REACT_APP_ENCODING_KEY;
    const URL = `https://api.odcloud.kr/api/3044660/v1/uddi:14a68b95-508b-4a35-ab41-e0fa7078c89f_202004061115?serviceKey=${serviceKey}`
    const lastPage = 5;
    const perPage = 5;

    
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalpage] = useState<number>();
   // const [totalData, setTotalData] = useState<number>(1);

    const getRestaurantData = async () =>{
        try{
        const fetchData = await axios.get(URL, 
            {
                params:{
                page : page,
                perPage: perPage,
                returnType : "json",
                // totalCount : 78
            }
            })
        .then(resopnse =>{
            setCurrentCount(resopnse.data.currentCount);
            setRestaurantData(resopnse.data);
            setTotalpage(Math.ceil(resopnse.data.totalCount / perPage));
          
            
        });
        }catch (error) {
            console.log(error)
        }
    }

    const buttonHandler = (event: React.ChangeEvent<unknown>, getPage: number) => {
        setPage(getPage);
    }

    useEffect(() => {
        getRestaurantData();
      }, 
      [page]
      );
     
        useEffect(() => {
            console.log(`레스토랑 이름 변경 ${restaurantName}`)
        }, 
        [restaurantName]
        );   
       
        function checkAddress (value : string){
            let regexp: RegExp = /^[가-힣]{9}$/;
            let get = value.match(regexp);
            console.log(value.match(regexp));
        } 
      return(
        <div className="contnent">
            {/* <Map name={restaurantName}/> */}
            <Map name={restaurantName}/>
        <div className="restaurantContent">
            {
            restaurantData ? restaurantData.data.map((getRestaurant)=>{
                return <div className="ContentList">
                            {/* <div className="cardImage">
                                <img src="" alt="" />
                            </div> */}
                            <div className="cardData" onMouseOver = {()=>{
                                setRestaurantName(getRestaurant.모범업소명);
                                //getRestaurantName(getRestaurant.모범업소명)
                            }}>
                                    <div className="title">
                                        {getRestaurant.모범업소명}&nbsp;<p className="subTitle">({getRestaurant.업태})</p>
                                    </div>
                                    <ul className="dataUl">
                                        <li className = "dataLi">주소 : {getRestaurant.주소}</li>
                                        <li className = "dataLi">연락처 : {getRestaurant.연락처}</li>
                                        <li className = "dataLi">대표메뉴 : {getRestaurant.대표메뉴}</li>
                                    </ul>
                            </div> 
                </div>
            }) : null
        }
        <div className="pagenation">
        <Pagination count={totalPage} page={page}  
        onChange={buttonHandler}
        />
        </div>
        </div>  
        </div>
    )
};
