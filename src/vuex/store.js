import axios from "axios";
import { createStore } from 'vuex'


const store = createStore({
  state: {
    cards: []
  },
  mutations: {
    SET_CARDS_TO_STATE: (state, cards) => {
      state.cards = cards;
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

    GET_RANDOM_CARD(cards) {
      return cards[Math.floor(Math.random() * cards.length)];
    }
  },
  getters: {
    CARDS(state) {
      return state.cards
    }
  }
});

export default store;
