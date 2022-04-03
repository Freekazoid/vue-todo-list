<template>
  <div class="input">
    <input type="text" @keyup.enter="keyChange($event, value)" @change="oneChange($event, value)" name="text" @input='$emit(`value`, value)' v-model="value" required autocomplete="off">
    <label>
      {{ title }}
    </label>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
		onChange:{
			type: Function,
			default: () => {},
		},
		keyUp:{
			type: Function,
			default: () => {},
		}
  },
  data(){
    return{
			value: ''
    }
  },
	methods:{
		oneChange(e, value){
			this.onChange(e, value);
			this.value = '';
		},
		keyChange(e, value){
			this.keyUp(e, value);
			this.value = '';
		}
	}
}
</script>

<style lang="scss" scoped>
.input {
	display: inline-flex;
  width: 180px;
	position: relative;
	margin: 5px;
	overflow: hidden;
	padding-top: 15px;

	input {
		width: 100%;
		padding: 10px;
		border: none;
		outline: none;
		border-bottom: 1px solid #999;
		box-sizing: border-box;
		position: relative;
		z-index: 5;
		background: none;

		&:focus {
			& ~ .line {
				left: 0;
				opacity: 1;
			}
		}
	}
	.line {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 3px;
		background: #4485c5;
		left: -999px;
		transition: .25s;
		opacity: 0;
		z-index: 6;
	}
	label {
		position: absolute;
		left: 10px;
		top: 45%;
		transition: ease-out .15s;
		color: #999;
	}
}
.input input:focus ~ label, input:valid ~ label {
	top: 0px;
	transform: scale(0.94) translateX(-2px);
	color: #4485c5;
}

</style>