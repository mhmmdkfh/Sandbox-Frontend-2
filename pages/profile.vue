<template>
  <div>
    <partials-title title="Profile" />
    <div class="card">
      <div class="card-body">
        <form>
          <FormInput name="Name" :val="$auth.user.name" @value="(val)=>input.name=val" />
          <FormInput name="Adress" :val="$auth.user.address" @value="(val)=>input.address=val" />
          <FormInput name="Phone" :val="$auth.user.phone" @value="(val)=>input.phone=val" />
          <FormInput name="Gender" :val="$auth.user.gender" @value="(val)=>input.gender=val" />
          <FormInput name="Email" type="email" :val="$auth.user.email" @value="(val)=>input.email=val" />
          <FormInput name="Password" type="password" :val="$auth.user.password" @value="(val)=>input.password=val" />
          <button class="btn btn-primary float-right" type="submit" >Simpan</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import request from "~/mixins/request";
export default {
  mixins: [request],
  data() {
    return{
      input: {
                name: "",
                address: "",
                phone: "",
                gender: "",
                email: "",
                password: "",
      },
    };
  },
  computed: {
    listUser() {
      return this.$store.state.user.listUser;
    },
  },
  async fetch() {
    if (!this.listUser.length) {
      const req = await this.requestGet({ endpoint: "users" });
      // this.SET_CLASS(req.data);
      this.$store.dispatch("user/setUser", req.data);
      // this.SET_CLASS(req.data);
    }
  },

    
}
</script>
