<template>
  <div id="admin-master">
    <div class="wrapper">
      <!-- Navbar -->
      <template v-if="$route.name !=='AdminLogin'">
      <admin-header></admin-header>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <admin-sidebar></admin-sidebar>
      <!-- Main Sidebar Container end  -->
      </template>
      <router-view></router-view>

      <!-- Control Sidebar -->
      <!-- Control sidebar content goes here -->
      <!-- /.control-sidebar -->
      <!-- Main Footer Start -->
      <admin-footer v-if="$route.name !=='AdminLogin'"></admin-footer>
      <!-- Main Footer end -->
    </div>
  </div>
</template>

<script>
import AdminFooter from "./partial/AdminFooter.vue";
import AdminHeader from "./partial/AdminHeader.vue";
import AdminSidebar from "./partial/AdminSidebar.vue";
export default {
  name: "AdminMaster",
  components: {
    AdminFooter,
    AdminHeader,
    AdminSidebar,
  },
};
</script>
