<template>
  <div>
    <br />
    <hr
      style="
        width: 1000px;
        margin: 0 auto;
        border-top: 1.2px ridge rgb(255, 38, 0);
      "
    />
    <br />
    <!-- background: #f0f1f3; -->
    <div>
      <div style="display: flex; width: 1000px; height: 280px; margin: 0 auto">
        <div style="width: 200px; font-size: 30px">手机</div>

        <div class="background" @mouseover="mouseOver" @click="buy(1)">
          <div class="img">
            <img src="../assets/products/1.png" class="productImgSize" />
          </div>
          <div class="name" style="margin-left: 10px">
            <p>Xperia PRO-I 微单™手机 旗舰款</p>
            <p style="color: rgb(72, 107, 245); margin-top: 4px">RMB 10999</p>
          </div>
        </div>

        <div style="flex: 0 0 2%"></div>

        <div class="background" @mouseover="mouseOver" @click="buy(2)">
          <div class="img">
            <img src="../assets/products/2.png" class="productImgSize" />
          </div>
          <div class="name" style="margin-left: 10px">
            <p>Xperia 5 III 5G手机 黑色</p>
            <p style="color: rgb(72, 107, 245); margin-top: 28px">RMB 6599</p>
          </div>
        </div>

        <div style="flex: 0 0 2%"></div>

        <div class="background" @mouseover="mouseOver" @click="buy(3)">
          <div class="img">
            <img src="../assets/products/3.png" class="productImgSize" />
          </div>
          <div class="name" style="margin-left: 10px">
            <p>索尼 Xperia 1 III 5G 微单™手机* 256GB 青川绿</p>
            <p style="color: rgb(72, 107, 245); margin-top: 4px">RMB 7999</p>
          </div>
        </div>

        <div style="flex: 0 0 2%"></div>
        <div style="width: 300px"></div>
      </div>
      <br />
      <hr style="width: 1000px; margin: 0 auto" />
      <br />

      <div style="display: flex; width: 1000px; height: 280px; margin: 0 auto">
        <div style="width: 200px; font-size: 30px">耳机</div>

        <div class="background" @mouseover="mouseOver" @click="buy(4)">
          <div class="img">
            <img src="../assets/products/4.png" class="productImgSize" />
          </div>
          <div class="name" style="margin-left: 10px">
            <p>MDR-Z1R 高解析度立体声耳机</p>
            <p style="color: rgb(72, 107, 245); margin-top: 4px">RMB 12999</p>
          </div>
        </div>

        <div style="flex: 0 0 2%"></div>

        <div class="background" @mouseover="mouseOver" @click="buy(5)">
          <div class="img">
            <img src="../assets/products/5.png" class="productImgSize" />
          </div>
          <div class="name" style="margin-left: 10px">
            <p>MDR-Z7M2 头戴式立体声耳机</p>
            <p style="color: rgb(72, 107, 245); margin-top: 4px">RMB 4999</p>
          </div>
        </div>

        <div style="flex: 0 0 2%"></div>

        <div class="background" @mouseover="mouseOver" @click="buy(6)">
          <div class="img">
            <img src="../assets/products/6.png" class="productImgSize" />
          </div>
          <div class="name" style="margin-left: 10px">
            <p>MDR-Z1000 头戴监听耳机</p>
            <p style="color: rgb(72, 107, 245); margin-top: 4px">RMB 2999</p>
          </div>
        </div>

        <div style="flex: 0 0 2%"></div>

        <div class="background" @mouseover="mouseOver" @click="buy(7)">
          <div class="img">
            <img src="../assets/products/7.png" class="productImgSize" />
          </div>
          <div class="name" style="margin-left: 10px">
            <p>MDR-1AM2 高解析度立体声耳机</p>
            <p style="color: rgb(72, 107, 245); margin-top: 4px">RMB 1899</p>
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr
      style="
        width: 1000px;
        margin: 0 auto;
        border-top: 1.2px ridge rgb(0, 0, 0);
      "
    />
  </div>
</template>

<script>
export default {
  name: "products",

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    mouseOver() {},
    buy(id) {
      this.$router.push({
        path: `/buy/${id}`,
      });
    },
  },
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.background {
  padding: 0;
  margin: 0;
  width: 200px;
  height: 280px;
  border: 1px solid #ccc;
  /* background: #f0f1f3; */
}

.img {
  padding: 0;
  margin: 0;
  width: 200px;
  height: 200px;
}

.productImgSize {
  padding: 0;
  margin: 0;
  height: 200px;
  width: 200px;
}

.name {
  padding: 0;
  margin: 0;
  width: 180px;
  margin-left: 0px;
}
</style>
