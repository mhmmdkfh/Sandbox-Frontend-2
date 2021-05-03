<template>
    <div>
        <PartialsTitle title="List User"/>
        <nuxt-link to="/user/create">
          <p class="btn btn-primary float-right">Create User</p>
        </nuxt-link>
        <div>
                <table class="table table-striped table-light">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in listUser" :key="i">
                        <td>{{item.name}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.phone}}</td>
                        <td>{{item.gender}}</td>
                        <td>
                          <div class="row">
                            <nuxt-link :to="'/user/'+ item.id">
                              <h5 class="btn btn-primary mt-2 mb-2">Edit</h5>
                            </nuxt-link>
                            <a href="" class="btn btn-danger mt-2 mb-2" data-toggle="modal" data-target="#delProfile">delete</a>
                          </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>    
    </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import request from "~/mixins/request";
export default {
  mixins: [request],
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
  methods: {
    ...mapMutations({
      SET_USER: "user/setUser",
    }),
    ...mapActions({
      SET_USER: "user/SET_USER",
    }),
  },
};
</script>