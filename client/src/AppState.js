import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Course.js').Course[]} user info from the database*/
  courses: [],
  /** @type {import('./models/Score.js').Score[]} user info from the database*/
  scores: [],
  /** @type {import('./models/Course.js').Course | null} user info from the database*/
  activeCourse: null,
  /** @type {import('./models/Group.js').Group[]} user info from the database*/
  groups: []

})

