<template>
  <div class="lang">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{ netType === 'testnet' ? 'TestNet' : 'MainNet' }}
        <div class="ball_box"></div>
      </span>
      <el-dropdown-menu
        class="lang_zh"
        slot="dropdown"
        :visible-arrow="false"
        :divided="true"
      >
        <el-dropdown-item command="mainnet"
          ><div class="openKG">MainNet</div></el-dropdown-item
        >
        <el-dropdown-item command="testnet"
          ><div class="openKG">TestNet</div></el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
// import LangStorage from '../helpers/lang'
// import $ from 'jquery'

export default {
  data() {
    return {
      netType: ''
    }
  },
  filters: {
    langStyle: function(value) {
      if (value === 'en') {
        return 'EN'
      } else {
        return 'ZH'
      }
    }
  },
  methods: {
    handleCommand: function(command) {
      this.netType = command
      this.$store.commit('CHANGE_NET_TYPE', this.netType)
      localStorage.setItem('netType', command)
      setTimeout(() => {
        this.$router.go(0)
      }, 200)
    }
  },
  mounted() {
    console.log(this.$store)
    this.netType = localStorage.getItem('netType') || 'testnet'
    this.$store.dispatch('Home/CHANGE_NET_TYPE', this.netType)
  }
}
</script>

<style lang="scss" scoped>
.lang {
  outline: none;
  font-size: 14px;
  .el-dropdown {
    cursor: pointer;
    .el-dropdown-link {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      width: 84px;
      height: 53px;
      outline: none;
      font-weight: 500;
      color: #000;
      font-size: 10px;
      transition: all 0.5s;
      border-radius: 13px;
      padding: 0 10px;
      line-height: 53px;
      position: relative;
      .ball_box {
        width: 10px;
        height: 10px;
        background: url(../../assets/exchange_black.svg) no-repeat center;
        background-size: cover;
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
.el-dropdown-menu {
  padding: 0;
  margin: 0;
  top: 52px !important;
  z-index: 99999 !important;
  transform: translateX(10px);
  .el-dropdown-menu__item {
    width: 116px;
    height: 45px;
    font-size: 13px;
    line-height: 45px;
    font-weight: 400;
    color: #000;
    opacity: 0.6;
    outline: none;
    transition: all 0.1s;
    text-align: center;
    &:hover {
      background-color: #fafafa;
      opacity: 1;
    }
  }
}
div.openKG {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // i {
  //   width: 14px;
  //   height: 14px;
  //   background: url(../../assets/images/openlogo.svg) no-repeat center;
  //   background-size: cover;
  // }
}
.el-popper[x-placement^='bottom'] {
  margin: 0;
}

.el-dropdown-menu.lang_zh {
  font-family: 'PingFang SC Bold', 'PingFang SC', 'Microsoft Yahei',
    Helvetica Neue, Helvetica, Arial, sans-serif;
}

.el-dropdown-menu.lang_en {
  font-family: 'Roboto-Regular', 'Graphik-regular', 'DINPro-Medium',
    'PingFangSC-Regular', 'Microsoft YaHei', 'Arial', sans-serif;
}
</style>
