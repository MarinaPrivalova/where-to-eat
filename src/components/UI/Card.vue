<template>
  <div class="card">
    <div class="card__container">
      <h2 class="card__title">{{card_data.name}}</h2>
      <p class="card__text">
        <span class="card__subtitle">Кухня: </span>{{card_data.cuisine}}
      </p>
      <p class="card__text"><span class="card__subtitle">Адрес: </span>{{card_data.address}}</p>
      <p class="card__text">
        <span class="card__subtitle">Как пройти: </span>{{card_data.landmark}}
      </p>
      <p class="card__text">
        <span class="card__subtitle">Расстояние: </span>{{card_data.distance}} м.
      </p>
      <p class="card__text">
        <span class="card__subtitle">Время в пути: </span>{{card_data.time}} мин.
      </p>
      <p class="card__text">
        <span class="card__subtitle">Бизнесланч: </span>{{card_data.business_lunch}}
      </p>
      <p class="card__text">
        <span class="card__subtitle">Средний чек: </span>{{card_data.price}}₽
      </p>
    </div>
    <img class="card__img" v-bind:src="card_data.photo" />
  </div>
</template>

<script>
export default {
  name: "place-card",
  props: {
    card_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  color: #d6e0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 600px;
  box-shadow: 0 0 8px 0 #202020;
  border: none;
  padding: 20px;
}

.card__container {
  display: flex;
  flex-direction: column;
  width: 250px;
}

.card__title {
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #fcdab7;
  margin-bottom: 30px;
}

.card__subtitle {
  font-weight: 500;
  font-size: 16px;
  color: #fcdab7;
}

.card__text {
  color: #d6e0f0;
  font-weight: 400;
  font-size: 16px;
}

.card__img {
  width: 300px;
  height: 225px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
}
</style>
