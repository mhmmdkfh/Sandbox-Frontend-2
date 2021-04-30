<script>
export default {
  methods: {
    konfirm(message = "") {
      return this.$swal({
        title: "Apakah kamu yakin ?",
        text: message,
        icon: "question",
        showCancelButton: true,
      });
    },
    async requestGet({ endpoint, params, notif }) {
      try {
        const req = await this.$axios.$get(endpoint, { params });
        if (req.success) {
          if (notif) this.$swal("Berhasil !", req.message, "success");
          return req;
        } else {
          this.$swal("Gagal !", req.message, "error");
          return req;
        }
      } catch (error) {
        this.$swal("ERROR !", error.toString(), "error");
      }
    },
  },
};
</script>