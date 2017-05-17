const initialState = {
  sidebarOpen: false,
}

export default (state = initialState, action) => {
  if (action.type === 'TOGGLE_SIDEBAR') {
    return {
      ...state,
      sidebarOpen: action.shouldBeOpen
    }
  }

  return state
}