import { useCallback, useEffect, useRef, useState } from 'react';
import {restaurantName} from "../model/restaurantName";
// import styled from 'styled-components';

declare global {
    interface Window {
      kakao: any;
    }
  }
  const kakao = (window as any).kakao;
  var infowindow = new kakao.maps.InfoWindow({zIndex:1});
  
export default Map;
  function Map (
    {name} : restaurantName
    ){
      useEffect(() => {
          let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
          let options = { //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 2 //지도의 레벨(확대, 축소 정도)
          };

          var places = new window.kakao.maps.services.Places();
          var ps = new kakao.maps.services.Places();
          if(name == undefined && name == null){
          ps.keywordSearch(`경기도 수원시`, placesSearchCB); 
          }else{
          ps.keywordSearch(`경기도 수원시 ${name}`, placesSearchCB); 
          }
          

          function placesSearchCB (data : any, status : any, pagination : any) {
            if (status === kakao.maps.services.Status.OK) {
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();
        
                for (var i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            } 
        }

        //
        function displayMarker(place :any) {
    
          // 마커를 생성하고 지도에 표시합니다
          var marker = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(place.y, place.x) 
          });
      
          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, 'click', function() {
              // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
              infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
              infowindow.open(map, marker);
          });
      }
          let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      
        }, [name])
  
      return (
          <div id="map" className='mapContent' style={{ width: "80vw", height: "91.7vh"}} />
      );
  }
  