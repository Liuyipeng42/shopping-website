<template>
  <div style="background-color: black">
    <div style="background-color: black; display: flex">
      <div style="flex: 0 0 33%; text-align: right">
        <el-image
          :src="require('../assets/menu/mainLogo.png')"
          style="height: 55px"
        ></el-image>
      </div>

      <div style="flex: 0 0 35%; text-align: right">
        <el-image
          :src="require('../assets/menu/number.jpg')"
          style="height: 40px; margin-top: 10px"
        ></el-image>
      </div>
      <div style="flex: 0 0 30%; color: white; margin-top: 17px">购物网站</div>
    </div>

    <el-menu
      class="el-menu-demo"
      style="display: flex"
      mode="horizontal"
      background-color="#000000"
      text-color="#ffffff"
      active-text-color="#aaaaaa"
      :router="useRouter"
      default-active="home"
      @select="handleSelect"
    >
      <el-menu-item style="flex: 0 0 27%; height: 24px"> </el-menu-item>
      <el-menu-item
        index="/home"
        style="text-align: center; font-size: 17px; flex: 0 0 6%; height: 55px"
      >
        主页
      </el-menu-item>
      <el-menu-item
        index="/products"
        style="text-align: center; font-size: 17px; flex: 0 0 6%; height: 55px"
      >
        产品展示
      </el-menu-item>
      <el-menu-item
        index="/news"
        style="text-align: center; font-size: 17px; flex: 0 0 6%; height: 55px"
      >
        新闻中心
      </el-menu-item>
      <el-menu-item
        index="/service"
        style="text-align: center; font-size: 17px; flex: 0 0 6%; height: 55px"
      >
        客服服务
      </el-menu-item>
      <el-menu-item
        index="/hire"
        style="text-align: center; font-size: 17px; flex: 0 0 6%; height: 55px"
      >
        人才招聘
      </el-menu-item>
      <el-menu-item
        index="/contact"
        style="text-align: center; font-size: 17px; flex: 0 0 6%; height: 55px"
      >
        联系我们
      </el-menu-item>
      <el-menu-item
        index="search"
        style="flex: 0 0 6%; text-align: left; height: 55px"
      >
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          style="width: 200px"
          v-model="search"
        >
        </el-input>
      </el-menu-item>
      <el-menu-item style="flex: 0 0 28%; height: 24px"> </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "menuBar",
	data() {
		return {
			useRouter:true,
			search: ""
		}
	},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

  },
};
</script>