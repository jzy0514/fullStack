<template>
    <div class="menu">
        {{message}}
    </div>
</template>

<script>
import bus from "@/common/bus"
export default {
    data(){
        return {
            message:"aaaa"
        }
    },
    created(){
        bus.$on("todo",(val)=>{
            this.message=val
        })
    }
}
</script>

<style>

</style>
