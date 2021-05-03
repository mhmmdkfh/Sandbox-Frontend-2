<template>
  <div class="main-sidebar">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="index.html">Stisla</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="index.html">St</a>
      </div>
      <ul class="sidebar-menu">
        <li class="menu-header">Dashboard</li>
        <li :class="$route.path=='/profile'?'active':''">
          <nuxt-link class="nav-link" to="/profile">Profile</nuxt-link>
        </li>
        <li :class="$route.path=='/user'?'active':''">
          <nuxt-link class="nav-link" to="/user">List User</nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
export default {
  asyncData() {},
  data() {
    return {
      nav: ["home", "profile", "login", "hehe", "hoho"],
    };
  },
};
</script>