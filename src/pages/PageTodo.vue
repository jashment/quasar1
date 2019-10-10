<template>
  <q-page class="q-pa-md">
    <p>Todo Page</p>
    <q-list separator bordered>
      <Task v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></Task>
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn @click="showAddTask = true" round color="primary" size="24px" icon="add" />
    </div>

  <q-dialog v-model="showAddTask">
    <AddTask />
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showAddTask: true
    }
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  components: {
    Task: require("components/Tasks/Task.vue").default,
    AddTask: require("components/Tasks/Modals/AddTask.vue").default
  }
};
</script>

<style>
</style>

