<template>
    <div>
        <PartialsTitle title="Create User" />
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="userUpdate">
                    <FormInput name="Name" type="email" :val="input.name" @value="(val)=>input.name=val" />
                    <FormInput name="Adress" :val="input.address" @value="(val)=>input.address=val" />
                    <FormInput name="Phone" :val="input.phone" @value="(val)=>input.phone=val" />
                    <FormInput name="Gender" :val="input.gender" @value="(val)=>input.gender=val" />
                    <FormInput name="Email" :val="input.email" @value="(val)=>input.email=val" />
                    <FormInput name="Password" type="password" :val="input.password" @value="(val)=>input.password=val" />
                    <button class="btn btn-primary float-right" type="submit" >Simpan</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
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
}
</script>