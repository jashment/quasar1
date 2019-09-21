<template>
  <q-page class="q-pa-md">
    <p>Todo Page</p>
    <q-list separator bordered>
      <q-item
        clickable
        :class="!task.completed ? 'bg-yellow-2' : 'bg-grey-2'"
        @click="task.completed = !task.completed"
        v-for="task in tasks"
        :key="task.id"
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strikethrough' : task.completed}">{{task.name}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
          <q-icon name="event" size="1.25rem" class="q-mr-xs" />
          </div>
          <div class="column">
          <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
          <q-item-label class="row justify-end" caption><small>{{task.dueTime}}</small></q-item-label>
          </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  }
};
</script>

<style>
</style>

