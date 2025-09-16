<template>
  <header class="header px-3 bg-white shadow-md">
    <!-- logo -->
    <nuxt-link :to="{
      path: '/',
    }" class="gtm-logo-home flex items-center">
      <img :src="imgLogo" alt="">
    </nuxt-link>
    <!-- menu -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router=true @select="handleSelect">
      <el-menu-item index="/">Home</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Career Pathing</template>
        <el-menu-item index="2-1">Preparation</el-menu-item>
        <el-menu-item index="2-2">Onboarding</el-menu-item>
        <el-menu-item index="2-3">Management</el-menu-item>
        <el-menu-item index="2-4">Growth</el-menu-item>
        <el-menu-item index="2-5">LongTerm</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>Trending Resources</template>
        <el-menu-item index="3-1">Experience</el-menu-item>
        <el-menu-item index="3-2">Lecture</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>Resource Matching</template>
        <el-menu-item index="4-1">Get relative</el-menu-item>
        <el-menu-item index="4-2">Get finacial</el-menu-item>
        <el-menu-item index="4-3">Get Land</el-menu-item>
        <el-menu-item index="4-4">Get Service</el-menu-item>
      </el-sub-menu>
      <el-menu-item class="el-login" index="5">Login/Sign up</el-menu-item>
    </el-menu>


  </header>
</template>
<script setup>
import { ref } from 'vue';
import imgLogo from '~/assets/images/general/logo/imgLogo.png';
const activeIndex = ref('1');
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>
<style scoped>
.header {
  height: 111px;
  padding: 10 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e3e3e3;
}

.header .gtm-logo-home {
  height: 52px;
  background-color: #ffffff;
  padding: 16px 24px;
  border-radius: 4px;

}

.header .gtm-logo-home img {
  height: 20px;
}

.el-menu-demo {
  height: 52px;
  width: 55%;
  border-radius: 25px;
  background-color: #f0f0f0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}
.el-login {
  background: linear-gradient(to right, #17375a, #409eff); /* dark blue to bright blue */
  color: #ffffff !important;
  border-radius: 25px;
  padding: 0 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}
</style>