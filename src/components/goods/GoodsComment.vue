<template>
  <div>
      <comment :newsid="id"></comment>
  </div>
</template>
<script>
import comment from '../sub-components/Comment.vue'
export default {
    data(){
      return{}
    },
    methods:{},
    props:['id'],
    components:{
      comment
    }
}
</script>
<style lang="scss" scoped>
</style>