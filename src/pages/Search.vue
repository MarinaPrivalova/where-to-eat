<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="search">
    <div class="search__btn-container">
      <button-search @click="GET_RANDOM_CARD">Выбрать</button-search>
    </div>
    <card-list></card-list>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "search-page",
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {...mapActions(["GET_RANDOM_CARD"])},
};
</script>
<style scoped>
.search {
  max-width: 1280px;
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;
}

.search__btn-container {
  display: flex;
  margin: 50px auto;
  width: 80%;
  justify-content: space-evenly;
}
</style>
