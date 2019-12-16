<!--
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2019-12-14 12:33:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiger-prawn-adfw\src\layouts\HeaderAsideLayout\components\AppMain.vue
 -->
<template>
  <div >
      <div class="ground" v-html="content"></div>
      <router-view class="ground" v-if="!content"/>
  </div>
</template>

<script>
export default {
  name: "playground",
  props: {
    content: String,
    loading: Boolean
  },

};
</script>
<style scoped>

</style>
