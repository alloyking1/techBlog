<template>
  <div>
    <h1>testing</h1>
  </div>
</template>

<script>
import axios from "axios"
export default {
    props:['tag', 'category'],
    data(){
        return{
            post:""
        }
    },

    mounted(){
        axios.get("").then(data){
            console.log(data)
        }
    }
}
</script>