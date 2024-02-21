<template>
  <div>{{count}}</div>
</temolate>
<script setup>
    // 在vue中引入
    import useCount from './useCount.js'
    let {count, doubleCount} = useCount(1);
    console.log(count)
</script>
