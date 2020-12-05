<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <Search />
        <Sort />
      </div>

      <p
        v-if="
          !Object.keys(tasksTodo).length &&
          search &&
          !Object.keys(tasksCompleted).length
        "
      >
        No Search Results
      </p>
      <q-scroll-area class="relative-position q-scrollarea-tasks">
        <NoTasks v-if="!Object.keys(tasksTodo).length && !search" />

        <TasksTodo
          v-if="Object.keys(tasksTodo).length"
          :tasksTodo="tasksTodo"
        />

        <TasksCompleted
          v-if="Object.keys(tasksCompleted).length"
          :tasksCompleted="tasksCompleted"
          class="q-mb-xl"
        />
      </q-scroll-area>

      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          @click="showAddTask = true"
          round
          color="primary"
          size="24px"
          icon="add"
          class="all-pointer-events"
        />
      </div>
    </div>

    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapState("tasks", ["search"]),
  },
  components: {
    AddTask: require("components/Tasks/Modals/AddTask.vue").default,
    TasksTodo: require("components/Tasks/TasksTodo.vue").default,
    TasksCompleted: require("components/Tasks/TasksCompleted.vue").default,
    NoTasks: require("components/Tasks/NoTasks.vue").default,
    Search: require("components/Tasks/Tools/Search.vue").default,
    Sort: require("components/Tasks/Tools/Sort.vue").default,
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  },
};
</script>

<style>
.q-scrollarea-tasks {
  display: flex;
  flex-grow: 1;
}
</style>

