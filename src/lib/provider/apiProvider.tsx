// import React, { useState, useEffect } from 'react';   
// import axios, { AxiosResponse } from 'axios';
// import internal from 'stream';
// import GyeongnamTourLeisure from '../model/ShoppingData'



// export default function NaverApiProvider(){
// const [ShoppingData, setShoppingData] = useState([]);
//   const getShoppingData = async () => {
//     const ClientID = "aqVTxdIHE0aEDYu1XksO";
//     const ClientSecret = "hFcW9OjDU4";
//     const URL = "https://openapi.naver.com/v1/search/shop.json?"; //URL이 이상하다고 생각하실겁니다! 아래에 계속 됩니다!
    
//     const state = {
//       isLoading: true,
//       items: [],
//       value: ""
//     };
    
//     try{
//       await axios
//         .get(URL, {
//           params: {
//             query: "모자",
//             display: 20,
//           },
//           headers: {
//             "X-Naver-Client-Id": `${ClientID}`,
//             "X-Naver-Client-Secret": `${ClientSecret}`,
//           },
//         })
//         .then((res) => 
//         setShoppingData(res.data.items)
//         ) 
//     }
//     catch (error) {
//                     if (axios.isAxiosError(error)) {
//                       console.log('error message: ', error.message);
//                       return <div>{error.message}</div> ;
//                     } else {
//                       console.log('unexpected error: ', error);
//                       return 'An unexpected error occurred';
//                     }
//                   }

//   useEffect(() => {
//     getShoppingData();
//   }, []);

//   console.log(ShoppingData);
  
//   return <div className="ShoppingContent">
//     <div className="ImageDiv">
//       <img src="{ShoppingData.image}" alt="" />
//     </div>
//     <div className="ShoppingDiv">
//       <ul>
//         <li>{ShoppingData}</li>
//       </ul>
//     </div>
//     </div>;
// }
// };
export {}