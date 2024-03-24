import { sleep } from '../../../services/utils'
import axios from 'axios'
import {URL_GET_ALL_CANDIDAT,API_BASE_URL} from '../../../stores/constant'
import { Console } from 'console'
let projectsDb : any = []

// Simulate API calls
export type Pagination = {
  page: number
  perPage: number
  total: number
}

export type Sorting = {
  sortBy: keyof (typeof projectsDb)[number] | undefined
  sortingOrder: 'asc' | 'desc' | null
}


const getSortItem = (obj: any, sortBy: keyof (typeof projectsDb)[number]) => {
  if (sortBy === 'project_owner') {
    return obj.project_owner.fullname
  }

  if (sortBy === 'team') {
    return obj.team.map((user: any) => user.fullname).join(', ')
  }

  if (sortBy === 'creation_date') {
    return new Date(obj[sortBy])
  }

  return obj[sortBy]
}


  export const getProjects = async (options: Sorting & Pagination) => {

        try {
          let projects: any[] = []
          const response = await axios.post(API_BASE_URL + URL_GET_ALL_CANDIDAT, { role: "CANDIDAT" })
          projects = response.data
          console.log("1")
  
          if (options.sortBy && options.sortingOrder) {
            projects.sort((a, b) => {
              a = getSortItem(a, options.sortBy!)
              b = getSortItem(b, options.sortBy!)
              if (a < b) {
                return options.sortingOrder === "asc" ? -1 : 1
              }
              if (a > b) {
                return options.sortingOrder === "asc" ? 1 : -1
              }
              return 0
            })
          }
  
          projectsDb = projects
          const normalizedProjects = projects.slice((options.page - 1) * options.perPage, options.page * options.perPage)
  
          return {
            data: normalizedProjects,
            pagination: {
              page: options.page,
              perPage: options.perPage,
              total: projectsDb.length,
            },
          }
  
     
        } catch (error) {
          console.log(error)
        }
     
    
  }
  





export const removeProject = async (project: (typeof projectsDb)[number]) => {
  await sleep(1000)

  const index = projectsDb.findIndex((p: { _id: any }) => p._id === project._id)
  projectsDb.splice(index, 1)

  return project
}
