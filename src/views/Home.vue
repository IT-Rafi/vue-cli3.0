<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <index msg="go about"/>
    <input type="text" @input="realTime('param','num')" placeholder="只可以输入数字" v-model="obj.param">
    <input type="text" @input="realTime('param1','num')" placeholder="只可以输入数字"  v-model="obj.param1">
    <input class="hide" type="text" @input="realTime('param2')" v-model="obj.param2">
    
  </div>
</template>
<style lang="scss" scoped>
input{
  width: 100px;
  height: 30px;
  border: 1px solid #333;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px;
  outline: none;
}
</style>

<script>
// @ is an alias to /src
import index from "@/components/Index.vue";

export default {
  name: "home",
  components: {
    index
  },
  data(){
    return{
      obj:{
      }
    }
  },
  mounted() {
    this.getUserMsg();
  },
  methods: {
    realTime(type,val){
      // console.log(e)
      if(val=="num"){
        this.obj[type]=this.obj[type].replace(/[^\d]/g,'')
      }
      console.log(this.obj)
    },
    getUserMsg() {
      // console.log(this.$api)
      this.$http
        .get(this.$api.nr)
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
