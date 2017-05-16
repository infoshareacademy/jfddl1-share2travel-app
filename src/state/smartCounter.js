const initialState = {
  smartCounterValue: 0
}

export default (state = initialState, action) => {
  if (action.type === 'UPDATE_COUNTER') {
    return {
      ...state,
      smartCounterValue: state.smartCounterValue + action.delta
    }
  }

  return state
}