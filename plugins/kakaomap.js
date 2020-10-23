/* global kakao */
export function searchAddrFromCoords (coords, callback) {
  const geocoder = new kakao.maps.services.Geocoder()
  geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback)
}

export function displayCenterInfo (result, status) {
  if (status === kakao.maps.services.Status.OK) {
    const infoDiv = document.getElementById('centerAddr')
    result.some((value, index) => {
      if (value.region_type === 'H') {
        infoDiv.innerHTML = value.address_name
        return true
      } else {
        return false
      }
    })
  }
}
