<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useProjects } from './composables/useProjects'
import ProjectCards from './widgets/ProjectCards.vue'
import ProjectTable from './widgets/ProjectsTable.vue'
import { Candidat } from './types'
import { useModal, useToast } from 'vuestic-ui'

const doShowAsCards = useLocalStorage('projects-view', true)

const { projects, isLoading, remove, pagination, sorting } = useProjects()

console.log("projects",projects)

const { init: notify } = useToast()


const { confirm } = useModal()

const onProjectDeleted = async (project: Candidat) => {
  const response = await confirm({
    title: 'Delete Candidat',
    message: `Are you sure you want to delete candidat?`,
    okText: 'Delete',
    size: 'small',
    maxWidth: '380px',
  })

  if (!response) {
    return
  }

  await remove(project)
  notify({
    message: 'Project deleted',
    color: 'success',
  })
}




</script>

<template>
  <h1 class="page-title">Candidat</h1>

  <VaCard>
    <VaCardContent>
      <div class="flex flex-col md:flex-row gap-2 mb-2 justify-between">
        <div class="flex flex-col md:flex-row gap-2 justify-start">
          <VaButtonToggle
            v-model="doShowAsCards"
            color="background-element"
            border-color="background-element"
            :options="[
              { label: 'Cards', value: true },
              { label: 'Table', value: false },
            ]"
          />
        </div>
       
      </div>

      <ProjectCards
        v-if="doShowAsCards"
        :projects="projects"
        :loading="isLoading"
        @delete="onProjectDeleted"
      />
      <ProjectTable
        v-else
        v-model:sort-by="sorting.sortBy"
        v-model:sorting-order="sorting.sortingOrder"
        v-model:pagination="pagination"
        :projects="projects"
        :loading="isLoading"
        @delete="onProjectDeleted"
      />
    </VaCardContent>

  </VaCard>
</template>
