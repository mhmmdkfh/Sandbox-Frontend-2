<template>
  <div>
    <PartialsTitle title="Edit Profile" />
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="userUpdate">
                <FormInput name="id" :val="currentUser.id" @value="(val)=>input.id=val"/>
                <FormInput name="Name" :val="currentUser.name" @value="(val)=>input.name=val" />
                <FormInput name="Email" :val="currentUser.email" @value="(val)=>input.email=val" />
                <FormInput name="Adress" :val="currentUser.address" @value="(val)=>input.address=val" />
                <FormInput name="Phone" :val="currentUser.phone" @value="(val)=>input.phone=val" />
                <FormInput name="Gender" :val="currentUser.gender" @value="(val)=>input.gender=val" />
                <button class="btn btn-primary float-right" type="submit" >Simpan</button>
            </form>
        </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import request from "~/mixins/post";
export default {
    mixins: [request],
    data() {
        return{
            input: {
                id: "",
                name: "",
                email: "",
                address: "",
                phone: "",
                gender: "",
            },
        };
    },
    computed: {
        currentUser() {
        return this.$store.state.user.current;
        },
        listEdit() {
        return this.$store.state.edit.list;
        },
    },
    async fetch() {
        if (this.$store.state.user.listUser.length) {
        this.$store.state.user.listUser.forEach((dataUser) => {
            if (dataUser.id == this.$route.params.idUser)
            this.SET_CURRENT_USER(dataUser);
        });
        }
        if (
        !this.currentUser.id ||
        this.$route.params.idUser != this.currentUser.id
        ) {
        const req = await this.requestGet({
            endpoint: "users",
            params: { id: this.$route.params.idUser },
        });
        if (req.success) this.SET_CURRENT_USER(req.data[0]);
        }
        this.getEdit();
        // action
        // this.$store.dispatch("schedule/setList", xx);

        // mutation
        // this.$store.commit("schedule/setList", xx);
    },
    methods: {
        ...mapMutations({
        SET_CURRENT_USER: "user/setCurrent",
        }),
        async getEdit() {
            const req = await this.$axios.$get("/edit", {
                params: { id: this.$route.params.idUser },
            });
            if (req.success) {
                this.$store.dispatch("edit/setList", req.data);
            }
        },
        async userUpdate() {
            
            try {
                let { data } = await this.requestPut({
                    endpoint: "users",
                    params: {id: this.$route.params.idUser, data: this.input},
                });
                if (data.success) {
                this.$swal(
                    "Login Berhasil",
                    "Selamat datang di sistem kami.",
                    "success"
                );
                this.$router.push("/");
                }
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>