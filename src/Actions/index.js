import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	SWITCH_LANGUAGE,
	SWITCH_VIEW,
	SWITCH_SORTBY,
	SEARCH,
	SET_FAVOURITE
} from './types'

import jsonData from '../data.json'

export const fetchData = () => (dispatch) => {
	dispatch({ type: FETCH_DATA_START })

	setTimeout(
		() => dispatch({ type: FETCH_DATA_SUCCESS, users: jsonData }),
		1000
	)
}

export const switchLanguage = (newLanguage = '') => ({
	type: SWITCH_LANGUAGE,
	newLanguage
})

export const switchView = (newView = '') => ({
	type: SWITCH_VIEW,
	currentView: newView
})

export const switchSortBy = (value = '', direction = '') => ({
	type: SWITCH_SORTBY,
	sortBy: { value, direction }
})

export const setSearch = (search = '') => ({ type: SEARCH, search })

export const setFavourite = (id = null) => ({ type: SET_FAVOURITE, id })
