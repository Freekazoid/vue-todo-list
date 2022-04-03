<template>
  <div class="select" @click="selectOption">
    <div href="#" class="title">
      {{ !input.select?title:input.select }}
    </div>
    <div class="arrow" :class="{'open': selectOpen}" ></div>
    <div v-show="openSelect" class="list">
      <div 
        @click.stop="getOption($event)"
        v-for="(item, index) in array" 
        :key="index"
        :class="{'active': index == selectedOption}"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onSelect: {
      type: Function,
      required: true
    },
    array: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'select item'
    }
  },
  data(){
    return {
      input: {
        select: '', 
        id: false
      },
      openSelect: false,
      selectOpen: false,
    }
  },
  computed:{
    selectedOption(){
      return this.array.indexOf(this.input.select.trim())>=0?this.array.indexOf(this.input.select.trim()):null;
    }
  },
  methods:{
    selectOption(){
      this.openSelect = !this.openSelect
      this.selectOpen = !this.selectOpen
    },
    getOption(e){
      this.openSelect = false
      this.selectOpen = !this.selectOpen
      const value =  e.target.innerHTML.trim()

      this.input.id = this.array.indexOf(value)
      this.input.select = value
      this.onSelect(e, this.input)
      
    }
  }
}
</script>
<style lang="scss" scoped>
.select{
  width: 180px;
  min-width: max-content;
  display: inline-flex;
  position: relative;
  border: 1px solid #000;
  border-radius: 3px;
  justify-content: space-between;
  padding: 5px 10px;
  user-select: none;

  .arrow {
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    transform: rotate(135deg);
    cursor: pointer;
    
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      border-width: 2px 2px 0 0;
      border-style: solid;
      border-color: black;
      display: block;
    }
    &:after {
      content: '';
      float: left;
      position: relative;
      top: -100%;
      width: 100%;
      height: 100%;
      border-width: 0 0 0 0;
      border-style: solid;
      border-color: black;
    }
  }
  .arrow.open{
    transform: rotate(316deg) translate(-7px, 4px);
  }

  .title, .list div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6px;
    cursor: pointer;
  }
  .list {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 32px;
    border: 1px solid #000;
    width: 100%;
    left: 0;
    border-radius: 3px;
    background: #fff;

    div{
      display: flex;
      width: 100%;
      height: 30px;
      justify-content: space-between;

      &:nth-child(odd){
        background: #fbfbfb;
      }
      &:hover{
        background: #4485c5e0;
      }
      &.active{
        background: #4485c5 !important;
      }
    }
  }
}
</style>