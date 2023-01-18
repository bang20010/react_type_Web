import { User } from "@firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import {RestaurantData, Restaurant} from "../../model/restaurant";


export const apiCilent = axios.create({
    baseURL : `https://api.odcloud.kr/api/3044660/v1/uddi:14a68b95-508b-4a35-ab41-e0fa7078c89f_202004061115?serviceKey=${process.env.REACT_APP_ENCODING_KEY}`,
    params :{
        page : 1,
        perPage: 10,
        returnType : "json"
    },
    timeout : 2500,
    
});

// const RestaurntProvider : React.FC<>
export default class ApiPovider {

    public async getRestaurant():Promise<any>{

    const [restaurant , setRestaurant] = useState();
    const URL = "https://api.odcloud.kr/api/3044660/v1/uddi:14a68b95-508b-4a35-ab41-e0fa7078c89f_202004061115?"
    const serviceKey ="fz5Hm9lLf6rINuNGkSXXWbyxKNTGyJh8sbloH5kVc91wa3vIuSP%2FpvDXp8K1ycamW1k6TLsiAuV0pS3cwwW1YQ%3D%3D";
    const page = 1; // 페이지 이동 변수 구독 
    const perPage = 10;

    const getRestaurantData = async () =>{
        try{
            const fetchData = await axios.get(URL, {
                params:{
                    serviceKey : `${URL}`,
                    page: 1,
                    perPage : 10,
                    returnType : "json",
            }
        });
        return fetchData.data();
        }catch (error) {
            console.log(error)
        }
    }
}
};

