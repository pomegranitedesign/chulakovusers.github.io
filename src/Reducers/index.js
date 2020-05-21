import {
	FETCH_DATA_FAILURE,
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	SWITCH_LANGUAGE,
	SWITCH_VIEW,
	SWITCH_SORTBY,
	SEARCH,
	SET_FAVOURITE
} from '../Actions/types'

const _initialState = {
	users: [],
	loading: false,
	error: null,
	currentLanguage: 'ENGLISH',
	currentView: 'preview',
	sortBy: {
		value: '',
		direction: ''
	},
	search: ''
}

export default (state = _initialState, action) => {
	switch (action.type) {
		case SET_FAVOURITE: {
			const users = [ ...state.users ]
			const user = users.find((user) => user.id === action.id)
			if (!user.favourite) user.favourite = true
			else user.favourite = false
			return { ...state, users }
		}

		case SEARCH: {
			return { ...state, search: action.search }
		}

		case SWITCH_SORTBY: {
			let sortedUsers = [ ...state.users ]
			const isAscending = action.sortBy.direction === 'asc'

			if (action.sortBy.value === 'id')
				sortedUsers = sortedUsers.sort((a, b) => {
					if (isAscending) return a.id > b.id ? 1 : -1
					else return a.id < b.id ? 1 : -1
				})

			if (action.sortBy.value === 'name')
				sortedUsers = sortedUsers.sort((a, b) => {
					if (isAscending) return a.name > b.name ? 1 : -1
					else return a.name < b.name ? 1 : -1
				})

			if (action.sortBy.value === 'age')
				sortedUsers = sortedUsers.sort((a, b) => {
					if (isAscending) return a.age > b.age ? 1 : -1
					else return a.age < b.age ? 1 : -1
				})

			return {
				...state,
				sortBy: action.sortBy,
				users: sortedUsers
			}
		}

		case SWITCH_VIEW:
			return { ...state, currentView: action.currentView }

		case SWITCH_LANGUAGE:
			return { ...state, currentLanguage: action.newLanguage }

		case FETCH_DATA_FAILURE:
			return { ...state, loading: false, error: action.error }

		case FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.users
			}

		case FETCH_DATA_START:
			return { ...state, loading: true }

		default:
			return state
	}
}
