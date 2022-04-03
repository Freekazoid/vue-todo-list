<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h2>Реализовать to-do лист.</h2>

    <p>Требования:</p>
    <ul>
      <li>Использовать router-view</li>
      <li>Использовать store, минимум логики в компонентах и view</li>
      <li>Добавление новой задачи по нажатию кнопки Enter</li>
      <li>При нажатии на задачу - делать её выполненной</li>
      <li>Отображать счётчик задач</li>
      <li>Кнопки фильтров: Все, выполненные, активные</li>
      <li>Кнопка clear completed если хотя бы одна задача выполнена</li>
      <li>При перезагрузке страницы задачи и их статусы не должны сбрасываться</li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>
.home{
  widows: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>