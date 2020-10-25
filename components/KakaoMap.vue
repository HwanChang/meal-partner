<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div class="map_wrap">
        <div id="map" style="width: 100%; height: 100%;" />
        <div class="hAddr">
          <span id="centerAddr" />
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
/* global kakao */
import { displayCenterInfo, searchAddrFromCoords } from '@/plugins/kakaomap'

export default {
  mounted () {
    const mapContainer = document.getElementById('map')
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 6
    }
    const map = new kakao.maps.Map(mapContainer, mapOption)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const locPosition = new kakao.maps.LatLng(lat, lon)
        map.setCenter(locPosition)
      })
    } else {
      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667)
      map.setCenter(locPosition)
    }
    kakao.maps.event.addListener(map, 'idle', () => {
      searchAddrFromCoords(map.getCenter(), displayCenterInfo)
    })
  }
}
</script>

<style>
  .map_wrap {position:relative;width:100%;height:350px;}
  .hAddr {position:absolute;left:10px;top:10px;border-radius: 2px;background:#fff;background:rgba(255,255,255,0.8);z-index:1;padding:5px;}
  #centerAddr {display:block;margin-top:2px;font-weight: normal;}
</style>
