import axios from "axios";
import { createStore } from 'vuex'
 
const store = createStore({
  state: {
    cards: [],
    randomCard: {}
  },
  mutations: {
    SET_CARDS_TO_STATE: (state, cards) => {
      state.cards = cards;
    },
    SET_RANDOM_CARD_TO_STATE: (state, randomCard) => {
      state.randomCard = randomCard;
    }
  },
  actions: {
    GET_CARDS_FROM_API({commit}) {
      return axios('https://bandaumnikov.ru/api/test/site/get-index', {
        method: "GET"
      })
      .then((cards) => {
        commit('SET_CARDS_TO_STATE', cards.data.data);
        return cards;
      })
      .catch((err) => {
        console.log(err)
        return err;
      })
    },
    GET_RANDOM_CARD({commit}) {
      return axios('https://bandaumnikov.ru/api/test/site/get-index', {
        method: "GET"
      })
      .then((cards) => {
        commit('SET_RANDOM_CARD_TO_STATE', cards.data.data);
        const randomCard = cards.data.data[Math.floor(Math.random() * cards.data.data.length)];
        console.log(randomCard);
        return randomCard;
      })
      .catch((err) => {
        console.log(err)
        return err;
      })
    }
  },
  getters: {
    CARDS(state) {
      return state.cards
    },
    CARD(state) {
      return state.randomCard
    }
  }
});

export default store;
