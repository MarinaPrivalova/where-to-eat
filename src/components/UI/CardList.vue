<template>
  <BtnSearch
    @click="
      GET_RANDOM_CARD
    "
  />
  <ul class="card-list">
    <Card v-for="card in CARDS" :key="card.id" v-bind:card_data="card" />
  </ul>
</template>

<script>
import Card from "./Card";
import BtnSearch from "./BtnSearch.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "card-list",
  components: {
    Card,
    BtnSearch,
  },
  props: {
    card_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    ...mapGetters(["CARDS", "CARD"]),
  },
  methods: {
    ...mapActions(["GET_CARDS_FROM_API", "GET_RANDOM_CARD"]),
  },
  mounted() {
    this.GET_CARDS_FROM_API().then((res) => {
      if (res.data) {
        console.log("ok");
      }
    });
  },
};
</script>

<style scoped>
.card-list {
  list-style: none;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  width: 95%;
  margin: 0 auto;
  position: relative;
}

@media screen and (max-width: 1120px) {
  .card-list {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
}
</style>
