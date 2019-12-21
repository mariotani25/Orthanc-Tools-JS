import { RETRIEVE, REMOVE_RESULT, ADD_RESULT_TO_LIST, SET_RETRIVE_STATUS_STUDY } from '../actions/actions-types'

const initialState = {
  results: []
}

export default function retrieveListReducer (state = initialState, action) {
  switch (action.type) {
    case RETRIEVE :
      return {
        ...state
      }
    case REMOVE_RESULT :
      const removedLines = action.payload
      const newResults = state.results.filter(function (results) {
        return !removedLines.includes(results.key)
      })
      return {
        ...state,
        results: newResults
      }
    case ADD_RESULT_TO_LIST:
      let maxKey = Math.max.apply(Math, state.results.map(function (query) { return query.key }))
      maxKey = Math.max(0, maxKey)
      state.results.push({
        key: (maxKey + 1),
        isRetrieved: false,
        ...action.payload
      })
      return {
        ...state
      }
    case SET_RETRIVE_STATUS_STUDY:
      console.log(action.payload)
      for (const i in state.results) {
        if (state.results[i].key === action.payload.key) {
          state.results[i].isRetrieved = action.payload.isRetrieved
          break
        }
      }
      return {
        ...state
      }
    default :
      return state
  }
}