/* global kakao */
export function searchAddrFromCoords (coords, callback) {
  const geocoder = new kakao.maps.services.Geocoder()
  geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback)
}

export function displayCenterInfo (result, status) {
  if (status === kakao.maps.services.Status.OK) {
    const infoDiv = document.getElementById('centerAddr')
    for (let i = 0; i < result.length; i++) {
      if (result[i].region_type === 'H') {
        infoDiv.innerHTML = result[i].address_name
        break
      }
    }
  }
}
