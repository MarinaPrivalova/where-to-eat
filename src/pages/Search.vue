<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="search">
    <CardList />
  </div>
</template>

<script>
import CardList from '@/components/UI/CardList.vue';
export default {
    name: "search-page",
    props: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    components: { CardList }
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
</style>
