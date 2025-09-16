<template>
  <app-header class="sticky left-0 right-0 transition-all duration-300 delay-300 ease-linear"/>
  <div class="container">
    <slot />
  </div>
</template>
<style scoped>
.container {
  width: 100%;
}
</style>