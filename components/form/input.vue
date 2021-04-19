<template>
  <div class="form-group">
    <label>{{name}}</label>
    <div class="row">
      <div class="col-md-9">
        <input type="text" class="form-control" v-model="value">
      </div>
      <div class="col-md-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, default: "Default Input Text" },
    val: { type: String, default: "" },
  },
  computed: {
    value: {
      get() {
        return this.val;
      },
      set(value) {
        this.$emit("value", value);
      },
    },
  },
};
</script>