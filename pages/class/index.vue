<template>
  <div>
    <PartialsTitle title="Class" />
    <div class="row">
      <div class="col-md-4" v-for="(item,i) in listClass" :key="i">
        <class-item-2 :title="item.name" :id="item.id" :description="item.description" :img="item.photo">
          <template v-slot:footer>
            <p>Diikuti sebanyak : {{item.students.length}} Orang</p>
            <p>Pemateri : {{item.tutors[0].name}}</p>
          </template>
        </class-item-2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listClass: [],
    };
  },
  async fetch() {
    const req = await this.$axios.$get("class");
    if (req.success) this.listClass = req.data;
  },
};
</script>