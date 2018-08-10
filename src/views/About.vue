<template>
  <div class="about">
    <el-button @click="link">go index</el-button>
  </div>
</template>
<script>
export default {
  methods:{
    link(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

