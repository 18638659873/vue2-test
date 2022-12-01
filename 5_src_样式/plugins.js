export default {
  install(Vue) {
    // 全局过滤器
    Vue.filter('mySlice', function (val) {
          return val.slice(0, 4)
        }
    )
    // 自定义函数
    Vue.directive('fbind', {
      bind(element, binding) {//绑定元素时,第一次 初始化时候被调用
        element.value = binding.value
      },
      inserted(element) {//被插入页面是调用
        // element.innerText = binding.value
        element.focus()
      },
      update(element, binding) {//重新解析模板时被调用
        element.value = binding.value
      }
    })

    // 定义混合
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200
        }
      }
    })
  }


}