import React from 'react'
import { Button, Menu, Dropdown } from 'antd'

import translate from '../i18n/translate'

const Sort = ({ sortBy = {}, switchSortBy = () => {} }) => {
	const SortByMenu = (
		<Menu style={{ padding: 20, borderRadius: 3 }}>
			<Button
				onClick={() => switchSortBy('id', sortBy.direction)}
				type={sortBy.value === 'id' && 'primary'}
			>
				ID
			</Button>

			<Button
				onClick={() => switchSortBy('name', sortBy.direction)}
				type={sortBy.value === 'name' && 'primary'}
				style={{ marginLeft: 20 }}
			>
				{translate('name')}
			</Button>

			<Button
				onClick={() => switchSortBy('age', sortBy.direction)}
				type={sortBy.value === 'age' && 'primary'}
				style={{ marginLeft: 20 }}
			>
				{translate('age')}
			</Button>

			<br />

			<div style={{ marginTop: 20 }}>
				<Button
					onClick={() => switchSortBy(sortBy.value, 'asc')}
					type={sortBy.direction === 'asc' && 'primary'}
				>
					{translate('ascending')}
				</Button>

				<Button
					onClick={() => switchSortBy(sortBy.value, 'desc')}
					type={sortBy.direction === 'desc' && 'primary'}
					style={{ marginLeft: 20 }}
				>
					{translate('descending')}
				</Button>
			</div>
		</Menu>
	)

	return (
		<Dropdown overlay={SortByMenu} trigger={[ 'click', 'hover' ]}>
			<Button>Sort By</Button>
		</Dropdown>
	)
}

export default Sort
