const initialState = {
  students: [],
  searchPhrase: '',
  activeFilterNames: []
}

export default (state = initialState, action) => {
  if (action.type === 'FETCH_STUDENTS__SUCCESS') {
    return {
      ...state,
      students: action.students
    }
  }

  if (action.type === 'UPDATE_FILTERS') {
    return {
      ...state,
      activeFilterNames: state.activeFilterNames.filter(
        item => {
          const itemPrefix = item.split('_')[0]
          const filterNamePrefix = action.filterName.split('_')[0]
          return itemPrefix !== filterNamePrefix
        }
      ).concat(action.enabled === true ? action.filterName : [])
    }
  }

  if (action.type === 'UPDATE_SEARCH_PHRASE') {
    return {
      ...state,
      searchPhrase: action.searchPhrase,
      activeFilterNames: state.activeFilterNames.filter(
        item => item !== 'phrase'
      ).concat('phrase')
    }
  }
  return state
}