<template>
  <div id="demo">
    <v-avatar initials="PS" />
    <v-avatar initials="SG" />
    <v-avatar initials="2E" />
    <v-avatar initials="HB" />
  </div>
</template>

<script>
import VAvatar from './VAvatar.vue';

export default {
  name: 'Demo',

  components: {
    VAvatar,
  },
};
</script>

<style scoped>
  #demo {
    padding: 50px;
    display: flex;
  }
  #demo > * {
    margin: 0 10px 10px 0;
  }
</style>
