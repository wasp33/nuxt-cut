export default defineNuxtPlugin(() => {
  // 插到 <head>
  const headScript = document.createElement('script')
  headScript.id = '_bownow_ts'
  headScript.textContent = `var _bownow_ts = document.createElement("script");
      _bownow_ts.charset = "utf-8";
      _bownow_ts.src =
        "https://contents.bownow.jp/js/UTC_373f6c2fd8a84cc0e8f9/trace.js";
      document.getElementsByTagName("head")[0].appendChild(_bownow_ts);`
  document.head.appendChild(headScript)

  // 插到 <body>
  // const bodyScript = document.createElement('script')
  // bodyScript.id = 'yyyy'
  // bodyScript.textContent = `console.log('👋 全局 yyyy')`
  // document.body.appendChild(bodyScript)
})