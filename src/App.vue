<template>
  <!-- <menu></menu> -->
  <div>
		<menuBar></menuBar>

    <div>
      <!-- 指定组件的呈现位置 -->
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import menuBar from "./components/menuBar.vue";

export default {
  name: "app",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MainPage,
		// eslint-disable-next-line vue/no-unused-components
		menuBar
  },
};
</script>

<style>
</style>


