<template>
  <ul class="card-list">
    <Card
      v-for="card in CARDS"
      :key="card.id"
      v-bind:card_data="card"
    />
  </ul>
</template>

<script>
import Card from "./Card";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "card-list",
  components: {
    Card,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['CARDS']),
  },
  methods: {
    ...mapActions(["GET_CARDS_FROM_API"]),
  },
  mounted() {
    this.GET_CARDS_FROM_API()
    .then((res) => {
      if(res.data) {
        console.log('ok')
      }
    })
  }
};
</script>

<style scoped>
.card-list {
  list-style: none;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
}
</style>
