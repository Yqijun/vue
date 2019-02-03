<template>
  <!-- 顶部 -->
  <div class="home">
    <el-container>
      <!-- 头部样式 -->
      <el-header>
        <Top/>
      </el-header>
      <el-container>
        <!-- 侧边样式 -->
        <el-aside width="220px">
          <SideBar/>
        </el-aside>
        <!-- 内容样式 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入组件
import Top from "../layout/top";
import SideBar from "../layout/sideBar";
export default {
  components: {
    Top,
    SideBar
  },
  beforeCreate() {
    // 得到 token
    var token = window.localStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
      this.$message.error("您还没有登录，请先登录");
      return;
    }
  }
};
</script>

<style>
.home,
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
  line-height: 60px;
  color: #333;
  background-color: #b3c0d1;
}
.el-aside {
  background-color: #545c64;
  color: #333;
  height: 100%;
}
el-main {
  background-color: #e9eef3;
  color: #333;
  height: 100%;
}
</style>
