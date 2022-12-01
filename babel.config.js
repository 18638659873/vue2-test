module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // ["es2015", {"modules": false}],//引入部分组件配置，目前使用报错，因此使用下面的
    ["@babel/preset-env", {"modules": false}],//引入部分组件配置
  ],
  // 引入部分组件配置
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]

}
