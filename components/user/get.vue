<template>
    <div>
        <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{{name}}</td>
            <td>{{email}}</td>
            <td>{{address}}</td>
            <td>{{phone}}</td>
            <td>{{gender}}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
        },
        gender: {
            type: String,
            default: "",
        },
    },
};
</script>