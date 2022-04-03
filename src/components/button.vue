<template>
  <button @click="onClick" class="button" :disabled="disabled" :class="{'disabled': disabled}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
  .button {
    font-size: 20px;
    padding: 10px 40px;
    margin: 10px 0;
    margin-bottom: 10px;
    width: auto;
    cursor: pointer;
    color: #fff;
    display: inline-block;
    background: #4485c5;
    font-size: 16px;
    padding: 8px 20px;
    transition: .15s;
    border: none;
    border-radius: 3px;
    &:hover {
      background: #659cd2;
      transition: .15s;
    }
    &.disabled{
      background: #2f5a85;
      cursor: auto;
    }
  }

</style>