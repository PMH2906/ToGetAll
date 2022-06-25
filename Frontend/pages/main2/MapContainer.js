/*global kakao*/
import React, { useEffect, useState } from 'react'
import Styles from './MapContainer.module.css'

const MapContainer = ({ searchPlace }) => { // 지도를 표시할 div
  const [Places, setPlaces] = useState([])

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    var markers = []

    const container = document.getElementById('myMap')
    const options = {
      center: new kakao.maps.LatLng(37.486471, 127.020733),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch('서울 서초구 효령로 335', function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var imageSrc = '/img/playdata.png',
          imageSize = new kakao.maps.Size(124, 126),
          imageOption = { offset: new kakao.maps.Point(27, 69) };
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
          markerPosition = new kakao.maps.LatLng(37.486471, 127.020733);
        var marker2 = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage
        });
        map.setCenter(coords);
        marker2.setMap(map);
        const ps = new kakao.maps.services.Places()
        ps.keywordSearch(searchPlace, placesSearchCB)
        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            let bounds = new kakao.maps.LatLngBounds();
            for (let i = 0; i < data.length; i++) {
              displayMarker(data[i])
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
            }
            // paginationEl.scrollTop = 0;
            map.setBounds(bounds)
            // 페이지 목록 보여주는 displayPagination() 추가
            displayPagination(pagination)
            setPlaces(data)
          }
        }
        // 검색결과 목록 하단에 페이지 번호 표시
        function displayPagination(pagination) {
          // menuEl = document.getElementById('menu_wrap'),
          var paginationEl = document.getElementById('pagination'),
            fragment = document.createDocumentFragment(), i
          // 기존에 추가된 페이지 번호 삭제
          while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild(paginationEl.lastChild)
          }
          for (i = 1; i <= pagination.last; i++) {
            var el = document.createElement('a')
            el.href = '#'
            el.innerHTML = i
            if (i === pagination.current) {
              el.className = 'on'
            } else {
              el.onclick = (function (i) {
                return function () {
                  pagination.gotoPage(i)
                }
              })(i)
            }
            fragment.appendChild(el)
          }
          paginationEl.appendChild(fragment)
          paginationEl.scrollTop = 0;
        }
        function displayMarker(place) {
          let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
          })
          kakao.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
            infowindow.open(map, marker)
          })
        }
        function displayInfowindow(marker, title) {
          var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
          infowindow.setContent(content)
          infowindow.open(map, marker)
        }
      }
    })
  }, [searchPlace]);

  return (
    <div className={Styles.map_wrap}>
      <div
        id="myMap"
        style={{
          width: '95% ',
          height: '500px',
          overflow: 'hidden',
          lineHeight: 'center',
          textAlign: 'center',
          margin: 'auto'
        }}
      >
      </div>
      <div className={Styles.card} id="result-list">
        <div >
          {Places.map((item, i) => (
            <div key={i} style={{ marginTop: '10px' }}>
              <div className={Styles.cardInfo}>
                <h4 className={Styles.cardInfotitle}>{item.place_name}</h4>
                {item.road_address_name ? (
                  <div className={Styles.info}>
                    <span className={Styles.s}>{item.road_address_name}</span>
                    <span className={Styles.s}>{item.address_name}</span>
                  </div>
                ) : (
                  <span className={Styles.s}>{item.address_name}</span>
                )}
                <div style={{
                  color: '#009900', topmargine: '10px'
                }}>
                  <span>
                    {item.phone}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className={Styles.pagination} id="pagination"></div>
      </div>
    </div>
  )
}
export default MapContainer