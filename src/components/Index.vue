<template>
  <div>
    <el-button @click="link" round type="primary">{{ msg }}</el-button>
  </div>
</template>

<style lang="scss" scoped>
.el-button{
  span{
    color: #fff;
  }
  
}
</style>

<script>
export default {
  props: {
    msg: String
  },
  methods:{
    link(){
      this.$router.push({ path: "/about"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
