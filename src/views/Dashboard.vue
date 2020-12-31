<template>
  <div class="bg-white vh-100">
    <DashboardHeader />
    <div class="d-flex">
        <div class="w-25 d-flex bg-dark justify-content-between align-items-center flex-column">
            <img src="../assets/logoDark.png" class="w-100"/>
        </div>
        <div class="w-75">

        </div>
    </div>
  </div>
</template>
<script>
import DashboardHeader from "../components//dashboardHeader";
export default {
  name: "Dashboard",
  components: {
    DashboardHeader,
  },
};
</script>