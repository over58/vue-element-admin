
// 使用函数的好处是传入上下文，可以使用vm实例中的数据，这在实际项目中是有用的
function getSteps(vm) {
  return [
    {
      element: '#hamburger-container',
      popover: {
        title: 'Hamburger',
        description: 'Open && Close sidebar',
        position: 'bottom'
      }
    },
    {
      element: '#breadcrumb-container',
      popover: {
        title: 'Breadcrumb',
        description: 'Indicate the current page location',
        position: 'bottom'
      }
    },
    {
      element: '#tags-view-container',
      popover: {
        title: 'Tags view',
        description: 'The history of the page you visited',
        position: 'bottom'
      },
      padding: 0,
      onNext: () => {
        vm.show = true
        // 异步项目某些元素时的核心
        vm.driver.refresh()
        vm.$nextTick(() => {
          vm.driver.start(3)
        })
      }
    },
    {
      element: '#inner-step-1',
      popover: {
        title: '异步显示的元素',
        description: 'The history of the page you visited',
        position: 'bottom'
      },
      padding: 0,
      onNext() {
        // 最后一步点击done的时候调用
        vm.show = false
      }
    }
  ]
}

export default getSteps
