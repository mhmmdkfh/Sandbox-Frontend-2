<template>
  <div>
    <PartialsTitle title="Class" />
    <div class="row">
      <div class="col-md-4" v-for="(item,i) in listClass" :key="i">
        <class-item-2 :title="item.name" :id="item.id" :description="item.description" :img="item.photo">
          <template v-slot:footer>
            <p @click="entryClass(item)">Diikuti sebanyak : {{item.students.length}} Orang</p>
            <p>Pemateri : {{item.tutors[0].name}}</p>
          </template>
        </class-item-2>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import request from "~/mixins/request";
export default {
  mixins: [request],
  computed: {
    listClass() {
      return this.$store.state.class.listClass;
    },
  },
  async fetch() {
    if (!this.listClass.length) {
      const req = await this.requestGet({ endpoint: "class" });
      // this.SET_CLASS(req.data);
      this.$store.dispatch("class/setClass", req.data);
      // this.SET_CLASS(req.data);
    }
  },
  methods: {
    ...mapMutations({
      SET_CLASS: "class/setClass",
    }),
    ...mapActions({
      SET_CLASS: "class/SET_CLASS",
    }),
    async entryClass({ name, id }) {
      const { isConfirmed } = await this.konfirm("masuk ke kelas " + name);
      if (isConfirmed) {
        this.$router.push("class/" + id);
      }
    },
  },
};
</script>