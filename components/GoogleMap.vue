<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div class="map_wrap">
        <div ref="map" style="width: 100%; height: 100%;" />
      </div>
    </v-layout>
  </v-container>
</template>

<script>
/* global google */
import MarkerClusterer from '@google/markerclustererplus'
export default {
  data () {
    return {
      geolocation: {},
      map: null,
      marker: null,
      infoWindow: null,
      registeredRestaurant: [],
      markers: []
    }
  },
  async mounted () {
    await this.getGeolocation()
    this.getMap()
  },
  methods: {
    async getGeolocation () {
      try {
        const geolocation = await this.$axios.$post('https://www.googleapis.com/geolocation/v1/geolocate?key=' + process.env.GOOGLE_MAP_APIKEY)
        this.geolocation = {
          lat: geolocation.location.lat,
          lng: geolocation.location.lng
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    },
    getMap () {
      this.map = new google.maps.Map(this.$refs.map, {
        center: this.geolocation,
        zoom: 15,
        zoomControl: true,
        streetViewControl: true,
        mapTypeControl: false,
        scaleControl: true
      })
    },
    getAddress () {
      new google.maps.Geocoder().geocode({
        location: this.map.getCenter()
      }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            // eslint-disable-next-line no-console
            console.log(results[0].formatted_address)
          } else {
            // eslint-disable-next-line no-console
            console.error('No results found')
          }
        } else {
          // eslint-disable-next-line no-console
          console.error('Geocoder failed due to: ' + status)
        }
      })
    },
    getMarker () {
      this.marker = new google.maps.Marker({
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: this.geolocation,
        map: this.map
      })
    },
    setMarkerClickListener (marker, infoWindow) {
      marker.addListener('click', () => {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null)
          infoWindow.close(this.map, marker)
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE)
          infoWindow.open(this.map, marker)
        }
      })
    },
    setInfoWindow (position) {
      this.infoWindow = new google.maps.InfoWindow({
        position,
        content: 'Location found.'
      })
    },
    setMarkerClusterer () {
      const markers = this.registeredRestaurant.map((location, i) => {
        return new google.maps.Marker({
          position: location
        })
      })
      return new MarkerClusterer(this.map, markers, {
        imagePath:
          'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
      })
    },
    drop () {
      this.clearMarkers()
      this.registeredRestaurant.forEach((value, index) => {
        this.addMarkerWithTimeout(value, index * 200)
      })
    },
    addMarkerWithTimeout (position, timeout) {
      window.setTimeout(() => {
        const infoWindow = new google.maps.InfoWindow({
          position,
          content: 'Location found.'
        })
        const marker = new google.maps.Marker({
          position,
          map: this.map,
          animation: google.maps.Animation.DROP
        })
        this.setMarkerClickListener(marker, infoWindow)
        this.markers.push(
          marker
        )
      }, timeout)
    },
    clearMarkers () {
      this.markers.forEach((value, index) => {
        value.setMap(null)
      })
      this.markers = []
    }
  }
}
</script>

<style>
.map_wrap {position:relative;width:100%;height:350px;}
.gmnoprint a, .gmnoprint span {
  display:none;
}
</style>
