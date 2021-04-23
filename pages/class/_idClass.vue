<template>
  <div>
    <div class="jumbotron jumbotron-fluid rounded bg-white">
      <div class="container">
        <h1 class="display-4">{{currentClass.name}}</h1>
        <p class="lead">{{currentClass.description}}</p>
      </div>
    </div>
    <class-schedule v-for="item in listSchedule" :key="item.id" :data="item" />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    currentClass() {
      return this.$store.state.class.current;
    },
    listSchedule() {
      return this.$store.state.schedule.list;
    },
  },
  async fetch() {
    if (this.$store.state.class.listClass.length) {
      this.$store.state.class.listClass.forEach((dataClass) => {
        if (dataClass.id == this.$route.params.idClass)
          this.SET_CURRENT_CLASS(dataClass);
      });
    }
    if (
      !this.currentClass.id ||
      this.$route.params.idClass != this.currentClass.id
    ) {
      const { data } = await this.$axios({
        method: "GET",
        url: "class",
        params: { id: this.$route.params.idClass },
      });
      this.SET_CURRENT_CLASS(data.data[0]);
    }
    this.getSchedule();
    // action
    // this.$store.dispatch("schedule/setList", xx);

    // mutation
    // this.$store.commit("schedule/setList", xx);
  },
  methods: {
    ...mapMutations({
      SET_CURRENT_CLASS: "class/setCurrent",
    }),
    async getSchedule() {
      const req = await this.$axios.$get("/schedule", {
        params: { classId: this.$route.params.idClass },
      });
      if (req.success) {
        this.$store.dispatch("schedule/setList", req.data);
      }
    },
  },
};
</script>