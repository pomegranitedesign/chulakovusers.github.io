import React from 'react'
import { Button, Dropdown, Menu } from 'antd'

import translate from '../i18n/translate'

const View = ({ switchView = () => {}, currentView = '' }) => {
	const ViewMenu = (
		<Menu style={{ padding: 20, borderRadius: 3 }}>
			<Button
				type={currentView === 'table' && 'primary'}
				onClick={() => switchView('table')}
			>
				{translate('table')}
			</Button>

			<Button
				type={currentView === 'preview' && 'primary'}
				onClick={() => switchView('preview')}
				style={{ marginLeft: 20 }}
			>
				{translate('preview')}
			</Button>
		</Menu>
	)

	return (
		<Dropdown overlay={ViewMenu} trigger={[ 'click', 'hover' ]}>
			<Button>View</Button>
		</Dropdown>
	)
}

export default View
