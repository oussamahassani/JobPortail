import { Ref, ref, unref } from 'vue'
import {
  getProjects,
  removeProject,
  Sorting,
  Pagination,
} from './apiCnadidat'
import { Project } from '../types'
import { watchIgnorable } from '@vueuse/core'

const makePaginationRef = () => ref<Pagination>({ page: 1, perPage: 10, total: 0 })
const makeSortingRef = () => ref<Sorting>({ sortBy: 'creation_date', sortingOrder: 'desc' })

export const useProjects = (options?: { sorting?: Ref<Sorting>; pagination?: Ref<Pagination> }) => {
  const isLoading = ref(false)
  const projects = ref<any[]>([])

  const { sorting = makeSortingRef(), pagination = makePaginationRef() } = options ?? {}

  const fetch = async () => {
    isLoading.value = true
    const { data, pagination: newPagination } = await getProjects({
      ...unref(sorting),
      ...unref(pagination),
    })
    console.log("fetch data",data)
    projects.value = data as any[]

    ignoreUpdates(() => {
      pagination.value = newPagination
    })

    isLoading.value = false
  }

  const { ignoreUpdates } = watchIgnorable([pagination, sorting], fetch, { deep: true })

  fetch()

  return {
    isLoading,

    projects,

    fetch,



    async remove(project: any) {
      isLoading.value = true
      await removeProject(project)
      await fetch()
      isLoading.value = false
    },

    pagination,
    sorting,
  }
}
