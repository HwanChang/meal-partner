<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <kakao-map />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import KakaoMap from '~/components/KakaoMap'
export default {
  components: {
    KakaoMap
  }
}
</script>
