<template>
  <div class="todo">
    <h2>Todo List</h2>
    <h3>Tasks ( {{ taskCount }} ) Active ( {{ activeTask }} ) Completed ( {{ completedTask }} )</h3>

    <div class="add-new">
      <Input :keyUp="newTask" @value="value = $event" title="Name task"/>
      <Button :onClick="newTask">
        Add New
      </Button>
    </div>

    <div class="all-task">
      <div class="task" v-for="(item, index) in filterTodo" :key="item.id">
        <input class="hidden" :id="`task-${item.id}`" type="checkbox" @change="toggleTask(index)" :checked="item.done">
        <label :for="`task-${item.id}`">
          <del v-if="item.done">
            <h2>{{ item.title }}</h2>
            <p>{{ item.context }}</p>
          </del>
          <div v-else>
            <h2>{{ item.title }}</h2>
            <p >{{ item.context }}</p>
          </div>  
        </label>
      </div>
    </div>

    <div class="box-button">
      <Select :select="arraySelect[0]" :onSelect="filterTask" :array="arraySelect" title="Filter Task"/>

      <Button :disabled="completedTask<=0" :onClick="clearCompleted">
        clear Completed
      </Button>

      <Button :onClick="clearAll">
        clear All
      </Button>
    </div>
  </div>
</template>

<script>
import Select from '@/components/select';
import Button from '@/components/button';
import Input from '@/components/input'

export default {
  components: {
    Button, Input, Select
  },
  data(){
    return{
      value: '',
      arraySelect: ['All', 'Active', 'Completed']
    }
  },
  computed:{
    completedTask(){
      return this.$store.getters.completedTask;
    },
    activeTask(){
      return this.$store.getters.activeTask;
    },
    taskCount(){
      return this.$store.getters.taskCount;
    },
    filterTodo(){
      return this.$store.getters.filterTask;
    }
  },
  methods:{
    clearAll(){
      this.$store.dispatch('clearAll');
    },
    toggleTask(index) {
      this.$store.dispatch('toggleTodo', index);
    },
    clearCompleted(){
      this.$store.dispatch('clearTodo');
    },
    newTask(e, value){
      if(value)
        this.$store.dispatch('newTodo', value);
      else 
        this.$store.dispatch('newTodo', this.value);
    },
    filterTask(e, value){
      this.$store.dispatch('filterTasks', value.select.toLowerCase());
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: calc(100vh - 100px);
	.box-button {
    width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.all-task {
		display: flex;
		padding: 10px 40px;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin: 30px 0;
		.task {
			width: 500px;
		}
	}
	.add-new {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 30px 0 0 0;
	}
	.hidden {
		display: none;
	}
}

</style>