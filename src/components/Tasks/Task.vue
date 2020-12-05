<template>
  <q-item
    clickable
    v-touch-hold:750.mouse="showEditTaskModal"
    :class="!task.completed ? 'bg-yellow-2' : 'bg-grey-2'"
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox class="no-pointer-events" :value="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        v-html="$options.filters.searchHighlight(task.name, search)"
        :class="{ 'text-strikethrough': task.completed }"
      ></q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="1.25rem" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{
            task.dueDate | niceDate
          }}</q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTaskModal"
          flat
          round
          dense
          color="primary"
          icon="edit"
        />
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete"
        />
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { date } from "quasar";
const { formatDate } = date;
export default {
  props: ["task", "id"],
  data() {
    return { showEditTask: false };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you really like to delete?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
    showEditTaskModal() {
      this.showEditTask = true;
    },
  },
  components: {
    "edit-task": require("components/Tasks/Modals/EditTask.vue").default,
  },
  filters: {
    niceDate(value) {
      return formatDate(value, "MMM-D");
    },
    searchHighlight(value, search) {
      let searchRegex = new RegExp(search, "ig");
      if (search) {
        return value.replace(searchRegex, (match) => {
          return '<span class="bg-yellow-6">' + match + "</span>";
        });
      }
      return value;
    },
  },
  computed: {
    ...mapState("tasks", ["search"]),
  },
};
</script>

<style scoped>
</style>