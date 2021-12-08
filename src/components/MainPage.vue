<template>
  <div>
    <div style="height: 550px">
      <div class="center" style="width: 1300px">
        <el-carousel height="500px">
          <el-carousel-item>
            <router-link active-class="active" to="/products">
              <img src="../assets/main/1.png" style="height: 500px" />
            </router-link>
          </el-carousel-item>
          <el-carousel-item>
            <router-link active-class="active" to="/products">
              <img src="../assets/main/2.png" style="height: 540px" />
            </router-link>
          </el-carousel-item>
          <el-carousel-item>
            <router-link active-class="active" to="/products">
              <img src="../assets/main/3.png" style="height: 510px" />
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div style="background-color: #eaecee; height: 770px">
      <br />
      <div style="display: flex">
        <div style="flex: 0 0 48%; text-align: right">
          <img src="../assets/main/tag1.png" style="height: 40px" />
        </div>
        <div style="flex: 0 0 0.5%"></div>
        <div
          style="
            font-size: 28px;
            text-align: center;
            flex: 0 0 49.5%;
            text-align: left;
          "
        >
          潮玩科技
        </div>
      </div>
      <br />

      <div style="display: flex">
        <div style="flex: 0 0 49%; text-align: right">
          <div>
            <router-link active-class="active" to="/products">
              <img
                class="imageSize1"
                style="margin-left: 1%"
                :src="require('../assets/main/4.jpg')"
              />
            </router-link>

            <router-link active-class="active" to="/products">
              <img
                class="imageSize1"
                style="margin-left: 1%"
                :src="require('../assets/main/5.png')"
              />
            </router-link>
            <br />
            <router-link active-class="active" to="/products">
              <img
                class="imageSize1"
                style="margin-left: 1%"
                :src="require('../assets/main/6.png')"
              />
            </router-link>
            <router-link active-class="active" to="/products">
              <img
                class="imageSize1"
                style="margin-left: 1%"
                :src="require('../assets/main/7.png')"
              />
            </router-link>
          </div>
        </div>
        <div style="flex: 0 0 2%"></div>
        <div style="flex: 0 0 49%; text-align: left">
          <div>
            <router-link active-class="active" to="/products">
              <img class="imageSize2" :src="require('../assets/main/8.jpg')" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div style="background-color: #eaecee; height: 850px">
      <br />
      <div style="display: flex">
        <div style="flex: 0 0 48%; text-align: right">
          <img src="../assets/main/tag2.png" style="height: 40px" />
        </div>
        <div style="flex: 0 0 0.5%"></div>
        <div
          style="
            font-size: 28px;
            text-align: center;
            flex: 0 0 49.5%;
            text-align: left;
          "
        >
          便携音频
        </div>
      </div>
      <br />

      <div style="display: flex">
        <div style="flex: 0 0 49%; text-align: right">
          <div>
            <router-link active-class="active" to="/products">
              <el-image
                class="imageSize2"
                :src="require('../assets/main/9.jpg')"
              ></el-image>
            </router-link>
          </div>
        </div>
        <div style="flex: 0 0 2%"></div>

        <div style="flex: 0 0 49%; text-align: left">
          <div>
            <router-link active-class="active" to="/products">
              <el-image
                class="imageSize1"
                style="margin-left: 1%"
                :src="require('../assets/main/10.png')"
              ></el-image>
            </router-link>
            <router-link active-class="active" to="/products">
              <el-image
                class="imageSize1"
                style="margin-left: 1%"
                :src="require('../assets/main/11.png')"
              ></el-image
            ></router-link>
            <br />
            <router-link active-class="active" to="/products">
              <el-image
                class="imageSize1"
                style="margin-left: 1%"
                :src="require('../assets/main/12.png')"
              ></el-image
            ></router-link>
            <router-link active-class="active" to="/products">
              <el-image
                class="imageSize1"
                style="margin-left: 1%"
                :src="require('../assets/main/13.png')"
              ></el-image
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style>
.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 100px;
}

.imageSize1 {
  height: 340px;
  width: 300px;
}

.imageSize2 {
  height: 680px;
  width: 600px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
