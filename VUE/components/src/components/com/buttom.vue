<template>
  <button @click="handle" :class="'i-button-size'+size" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
import bus from "@/common/bus"
function oneOf(value,validList){
    for(let i = 0 ; i<validList.length;i++){
        if(value === validList[i]){
            return true
        }
    }
    return false
    // return Array.prototype.findIndex.call(validList,value)!=-1
    // console.log(validList.findIndex(value))
    return true
}
export default {
    props:{
        size:{

            default:"default",
            validator(value){
                return oneOf(value,["large","small"])
            }
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            msg:"我是button里面的数据"
        }
    },
    methods:{
        handle(){
            bus.$emit("todo",this.msg)
        }
    }
};
</script>

<style>
button{
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.i-button-sizelarge{
  padding: 12px;
}
.i-button-sizedefault{
  padding: 8px;
}
.i-button-sizesmall{
  padding: 4px;
}

</style>
