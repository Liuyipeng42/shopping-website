<template>
  <div>
    <div
      style="
        display: flex;
        width: 1000px;
        height: 500px;
        margin: 0 auto;
        margin-top: 20px;
      "
    >
      <div style="height: 500px; width: 1000px">
        <div style="height: 400px; width: 400px; float: left">
          <img :src="present.img" style="height: 400px; width: 400px" />
        </div>

        <div
          style="height: 160px; width: 560px; float: left; margin-left: 20px"
        >
          <h1>{{ present.name }}</h1>
          <span style="color: rgb(90, 90, 90); font-size: 15px">{{
            present.description
          }}</span>
        </div>

        <div style="margin-bottom: 1%">
          <hr
            align="center"
            width="590px"
            style="border: none; border-top: 1px dashed #969696"
          />
        </div>

        <div style="height: 30px; width: 560px; float: left; margin-left: 20px">
          <span style="margin-left: 40px">价格:</span>
          <span style="color: rgb(77, 117, 218); margin-left: 15px">
            RMB {{ present.price }}
          </span>
        </div>

        <div style="height: 30px; width: 560px; float: left; margin-left: 20px">
          <span style="margin-left: 40px">颜色:</span>

          <el-radio style="margin-left: 20px" v-model="color" label="black"
            >黑色</el-radio
          >
          <el-radio v-model="color" label="white">白色</el-radio>
        </div>

        <div style="height: 30px; width: 560px; float: left; margin-left: 20px">
          <span style="margin-left: 40px">数量:</span>

          <el-input-number
            style="margin-left: 20px"
            v-model="num"
            :min="1"
            :max="10"
            size="mini"
          ></el-input-number>
        </div>
        <div style="height: 30px; width: 560px; float: left; margin-left: 20px">
          <span style="margin-left: 7px">付款方式:</span>

          <el-select
            style="margin-left: 20px"
            v-model="payment"
            size="mini"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div style="margin-top: 15%">
          <hr
            align="center"
            width="590px"
            style="border: none; border-top: 1px dashed #969696"
          />
        </div>

        <div
          style="
            height: 30px;
            width: 560px;
            float: left;
            margin-left: 20px;
            margin-top: 20px;
          "
        >
          <el-button type="primary" style="margin-left: 95px; width: 100px"
            >购买</el-button
          >
          <el-button style="margin-left: 25px; width: 120px"
            >加入购物车</el-button
          >
        </div>
      </div>
    </div>

    <div style="margin: 0 auto; text-align: center">
      <h3>推荐产品</h3>

      <div style="display: flex; width: 1000px; height: 280px; margin: 0 auto">
        <div style="flex: 0 0 6.5%"></div>

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
  </div>
</template>

<script>
export default {
  name: "buy",
  computed: {
    present() {
      return this.productsData[this.id - 1];
    },
  },
  methods: {
    buy(id) {
			this.id = id
			console.log(id)
      this.$router.push({
        path: `/buy/${id}`,
      });
    },
		mouseOver() {},
  },
  data() {
    return {
      id: this.$route.params.id,
      num: 1,
      color: "black",
      options: [
        {
          value: "1",
          label: "支付宝",
        },
        {
          value: "2",
          label: "微信",
        },
        {
          value: "3",
          label: "银行卡",
        },
      ],
      payment: "",
      productsData: [
        {
          img: require("../assets/buy/1.png"),
          name: "Xperia PRO-I 微单™手机 旗舰款",
          price: "10999",
          description:
            "1英寸影像传感器*/ F2.0/F4.0可变双光圈 / 实时追踪对焦 / 蔡司® Tessar 镜头 主摄采用“非球面玻璃镜片”设计 / 新增“视频大师”应用APP / 源自数码相机的外观设计",
        },
        {
          img: require("../assets/buy/2.png"),
          name: "Xperia 5 III 5G手机 黑色",
          price: "6599",
          description:
            "HDR OLED 120Hz刷新率显示屏 / 潜望式可变长焦镜头 / 物体追踪对焦 / 3.5mm音频接口 / 纤薄精巧的机身设计",
        },
        {
          img: require("../assets/buy/3.png"),
          name: "索尼 Xperia 1 III 5G 微单™手机* 256GB 青川绿",
          price: "7999",
          description:
            "4K HDR OLED 120Hz刷新率显示屏 / 潜望式可变长焦镜头 / 实时追踪对焦 / 20张/秒 高速连拍 / 3.5mm音频接口 / 双前置立体声扬声器",
        },
        {
          img: require("../assets/buy/4.png"),
          name: "MDR-Z1R 高解析度立体声耳机 黑",
          price: "12999",
          description:
            "70mm大孔径HD驱动单元（声波变宽和平坦，体验到更自然的声音） / 镁质球顶振膜（实现120kHz高频率范围的声音再现。） / 斐波那契隔栅（驱动单元开孔均衡，硬度高，高频平稳） / 人体工程学皮革耳垫（触感柔和，佩戴舒适。） / 皮革头箍（耐用柔软，佩戴舒适） / 听感：声音清澈，音质辽远，自然静谧，声场开阔精准，高频延展，自然，空气感十足。 / 适合音乐类型，大编制，古典，流行，民谣，摇滚。",
        },
        {
          img: require("../assets/buy/5.png"),
          name: "MDR-Z7M2 头戴式立体声耳机",
          price: "4999",
          description:
            "70mm HD（高解析度）驱动单元呈现自然澎湃之声 / 专业的平衡连接线材，升级聆听体验 / 优化的细节设计，带来舒适的佩戴感受",
        },
        {
          img: require("../assets/buy/6.png"),
          name: "MDR-Z1000 头戴监听耳机 黑",
          price: "2999",
          description:
            "佩戴方式：头戴式 / 类型：封闭式，动态 / 驱动单元：50mm / 功率处理容量：4000mW / 阻抗：1kHz时24Ω / 灵敏度：108dB/mW / 频响范围：5-80,000Hz / 耳机线：约1.2m/3m，采用7N-OFC 绞合线，可拆卸 / 插头：镀金L型立体声迷你插头；镀金立体声迷你插头 / 质量：约270g（不含导线）",
        },
        {
          img: require("../assets/buy/7.png"),
          name: "MDR-1AM2 高解析度立体声耳机 银色",
          price: "1899",
          description:
            "类型：封闭式，动态 / 驱动单元：40 mm，圆顶型（CCAW 音圈） / 功率处理容量：1500 mW（IEC*） / 阻抗：1 kHz 时16 Ω / 频率响应：3 Hz - 100000 Hz (JEITA)",
        },
      ],
    };
  },
};
</script>

<style>
</style>