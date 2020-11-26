<template>
  <div class="q-mt-lg">
    <ListHeader bgColor="bg-green-4">Completed</ListHeader>
    <q-list separator bordered>
      <Task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      ></Task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ["tasksCompleted"],
  components: {
    Task: require("components/Tasks/Task.vue").default,
    ListHeader: require("components/Shared/ListHeader.vue").default,
  },
};
</script>