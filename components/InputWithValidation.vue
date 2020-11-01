<template>
  <ValidationProvider v-slot="{ errors, valid }" :rules="rules">
    <v-text-field
      v-model="innerValue"
      :label="label"
      :error-messages="errors"
      :success="valid"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider
  },
  props: {
    rules: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      innerValue: ''
    }
  }
}
</script>
