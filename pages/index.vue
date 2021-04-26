<template>
  <div>
    <partials-title title="PERTEMUAN SENIN"></partials-title>
    <atoms-float-button @click.native="increment" />
    <atoms-card>
      <template v-slot:left>
        <h2>State Counter : {{$store.state.example.counter}}</h2>
      </template>
      <template v-slot:right>
        <FormInput name="Firstname" :val="firstname" @value="(val)=>firstname=val" />
        <FormInput name="Lastname" :val="lastname" @value="(val)=>lastname=val" />
      </template>
    </atoms-card>
    <atoms-card></atoms-card>
  </div>
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      i: 0,
      books: ["vue 1", "vue 2", "vue 3"],
      firstname: "Ghany",
      lastname: "Ersa",
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
  },
  methods: {
    ...mapMutations({
      increment: "example/increment",
    }),
  },
};
</script>