<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <ListHeader bgColor="bg-orange-4 ">Todo</ListHeader>
      <q-list separator bordered>
        <Task
          v-for="(task, key) in tasksTodo"
          :key="key"
          :task="task"
          :id="key"
        ></Task>
      </q-list>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["tasksTodo"],
  components: {
    Task: require("components/Tasks/Task.vue").default,
    ListHeader: require("components/Shared/ListHeader.vue").default,
  },
};
</script>