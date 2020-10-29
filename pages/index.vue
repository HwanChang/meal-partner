<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex md10 offset-md1>
        <v-card>
          <google-map />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import GoogleMap from '~/components/GoogleMap'
export default {
  components: {
    GoogleMap
  }
}
</script>
