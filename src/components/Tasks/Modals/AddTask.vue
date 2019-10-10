<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn flat round icon="close" dense v-close-popup />
    </q-card-section>

    <q-form @submit="submitForm">

      <q-card-section>
      <div class="row q-mb-sm">
        <q-input outlined v-model="taskToSubmit.name" :rules="[val => !!val || 'Field is Required']" label="Task Name" class="col" />
      </div>

      <div class="row q-mb-sm">
        <q-input outlined v-model="taskToSubmit.dueDate" label="Due Date">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="row q-mb-sm">
        <q-input outlined v-model="taskToSubmit.dueTime" label="Due Time">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="taskToSubmit.dueTime" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Save" color="primary" v-close-popup />
    </q-card-actions>

    </q-form>

  </q-card>
</template>

<script>
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Submitted')
    }
  }
};
</script>

<style scoped>
</style>