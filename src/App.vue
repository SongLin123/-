<!--
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2019-12-13 19:49:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiger-prawn-adfw\src\App.vue
 -->
<template>
  
  <HeaderAsideLayout :content="content" :loading="loading"></HeaderAsideLayout>
</template>
<script>
import HeaderAsideLayout from '@/layouts/HeaderAsideLayout';
  export default {
    name: 'framework',
    components:{
      HeaderAsideLayout
    },
    props: {
      loading: Boolean,
      content: String,
    },
    
  };
</script>
