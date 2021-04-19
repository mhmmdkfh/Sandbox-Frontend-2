<template>
  <div>
    <div class="jumbotron jumbotron-fluid rounded bg-white">
      <div class="container">
        <h1 class="display-4">{{detail.name}}</h1>
        <p class="lead">{{detail.description}}</p>
      </div>
    </div>
    {{detail}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: {
        id: "",
        code: "",
        name: "",
        dateStart: "",
        dateEnd: "",
        description: "",
        photo: "",
        createdAt: "",
        updatedAt: "",
        students: [],
        spv: [],
        tutors: [],
      },
    };
  },
  async fetch() {
    const { data } = await this.$axios({
      method: "GET",
      url: "class",
      params: { id: this.$route.params.idClass },
    });
    this.detail = data.data[0];
  },
};
</script>