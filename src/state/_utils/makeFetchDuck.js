/**
 * Created by Karolina on 21.05.2017.
 */
export default (prefix, url) => {
    // Action types
    const FETCH__BEGIN = `${prefix}/FETCH__BEGIN`
    const FETCH__SUCCESS = `${prefix}/FETCH__SUCCESS`
    const FETCH__FAIL = `${prefix}/FETCH__FAIL`

// Async action creator - created using thunk
    const fetchItems = () => dispatch => {
        dispatch({
            type: FETCH__BEGIN
        })
        fetch(
            url
        ).then(
            response => response.json()
        ).then(
            data => dispatch({
                type: FETCH__SUCCESS,
                data: data
            })
        ).catch(
            error => dispatch({
                type: FETCH__FAIL,
                error: error
            })
        )
    }

// Initial state
    const initialState = {
        data: null,
        fetching: false,
        error: null
    }

// Reducer
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCH__BEGIN:
                return {
                    ...state,
                    fetching: true
                }
            case FETCH__SUCCESS:
                return {
                    ...state,
                    fetching: false,
                    data: action.data,
                    error: null
                }
            case FETCH__FAIL:
                return {
                    ...state,
                    fetching: false,
                    error: action.error
                }
            default:
                return state
        }
    }

    return {
        fetchItems,
        reducer,
    }
}