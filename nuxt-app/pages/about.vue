<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
<div class="wrap">
  <div class="item">
    <img src="https://images.unsplash.com/photo-1694552410572-c059b6be7daa?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    <div class="txt">
      <h2>css 可樂</h2>
      <p>一個技術型頻道</p>
    </div>
  </div>
  <div class="item">
    <img src="https://images.unsplash.com/photo-1635549298330-186987c31a26?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    <div class="txt">
      <h2>js 拿鐵</h2>
      <p>完全宅男</p>
    </div>
  </div>
  <div class="item">
    <img src="https://plus.unsplash.com/premium_photo-1679440415221-7c53736a9e24?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    <div class="txt">
      <h2>美妝主播</h2>
      <p>就愛美</p>
    </div>
  </div>
</div>
</template>
<script setup>
if (process.client) {
  // 1) 插到 <head>
  const sHead = document.createElement('script')
  sHead.id = '_bownow_ts'
  sHead.textContent = `var _bownow_ts = document.createElement("script");
      _bownow_ts.charset = "utf-8";
      _bownow_ts.src =
        "https://contents.bownow.jp/js/UTC_373f6c2fd8a84cc0e8f9/trace.js";
      document.getElementsByTagName("head")[0].appendChild(_bownow_ts);`
  document.head.appendChild(sHead)

  // 2) 插到 <body> 尾端
  const sBody = document.createElement('script')
  sBody.id = '_bownow_cs_sid_93a969426cf23e18dba3'
  sBody.textContent = `var _bownow_cs_sid_93a969426cf23e18dba3 =
        document.createElement("script");
      _bownow_cs_sid_93a969426cf23e18dba3.charset = "utf-8";
      _bownow_cs_sid_93a969426cf23e18dba3.src =
        "https://contents.bownow.jp/forms/sid_93a969426cf23e18dba3/trace.js";
      document
        .getElementsByTagName("head")[0]
        .appendChild(_bownow_cs_sid_93a969426cf23e18dba3);`
  document.body.appendChild(sBody)
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrap{
  width: 1200px;
  display: flex;
}
.item{
  width: 370px;
  margin: 20px;
  transition: .5s;
}
.item img{
  width: 100%;
  display: block;
}
.item h2{
  border-bottom: 1px solid #888;
  padding-bottom: .3em;
  margin-bottom: .4em;
}
.item p{
  color: #666;
  font-size: .9em;
  /* font-wait: 600; */
  line-height: 1.6em;
}
.item:hover{
  transform: translateY(-20px);
}
.item:hover .txt{
  background-image: linear-gradient(0deg,#fb8076,#feb850);
}
.item:hover .item .text:before{
  border-left: 184px solid #feb850;
  border-right: 184px solid #feb850;
}
.item:hover h2{
  color: #fff;
  border-bottom-color: #fff;
}
.item:hover p{
  color:#fff;
}
</style>
