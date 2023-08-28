#### rem：移动端适配的一种方式

##### rem（font size of the root element）w3c

- rem 中的字体大小是基于根 html 的 font-size 大小
- 1rem = font-size 的大小
- 根 html 的 font-size = 12px，则 1rem = 12px
- 那么我们最终是想根据同一个 UE 的宽度和内部元素的px，适配不同大小的屏幕
- 假如设计稿宽度是 375，手机 clientWidth = 375，那么 1rem = clientWidth / 设计稿宽度 = 1px
- 假如设计稿宽度是 375，手机 clientWidth = 414，那么 1rem = 414 / 375 = 1.104px
- 以此类推

- rem 布局的本质是等比缩放，一般是基于宽度，实际上是让 UE 图等比缩放，那么就可以做到适配了
- 我们可以监听 resize 事件，当屏幕宽度发生变化，同步修改 font-size 的值，做到等比缩放

```javascript

// 假设设计稿宽度为 750

document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 + 'px'

(function () {
    var html = document.documentElement;

    function onWindowResize() {
        html.style.fontSize = document.documentElement.clientWidth / 750 + 'px';
    }

    window.addEventListener('resize', onWindowResize)
    onWindowResize()
})()

```


- 那么我们如何计算 rem 的值呢
- 根据以上类推，可以推出一个计算公式

```javascript

const px2rem = (px) => {
  return (px / clientWidth) * 100
}

```