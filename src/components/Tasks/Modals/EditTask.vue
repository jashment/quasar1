<template>
  <q-card>
    <modal-header>Edit Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName" />

        <modal-due-date
          :dueDate.sync="taskToSubmit.dueDate"
          @clear="clearDueDate"
        />

        <modal-due-time
          :dueTime.sync="taskToSubmit.dueTime"
          v-if="taskToSubmit.dueDate"
        />
      </q-card-section>
      <modal-buttons />
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import mixinAddEditTask from "src/mixins/mixin-add-edit-task.js";
export default {
  props: ["task", "id"],
  data() {
    return {
      taskToSubmit: {},
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitTask() {
      this.updateTask({ id: this.id, updates: this.taskToSubmit });
      this.$emit("close");
    },
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  },
  mixins: [mixinAddEditTask],
};
</script>

<style scoped>
</style>