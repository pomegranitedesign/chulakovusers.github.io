import React from 'react'
import { Button, Dropdown, Menu } from 'antd'

const Language = ({ switchLanguage = () => {}, currentLanguage = '' }) => {
	const LanguageMenu = (
		<Menu style={{ padding: 20, borderRadius: 3 }}>
			<Button
				type="primary"
				onClick={() => switchLanguage('ENGLISH')}
				type={currentLanguage === 'ENGLISH' && 'primary'}
			>
				English
			</Button>

			<Button
				onClick={() => switchLanguage('RUSSIAN')}
				type={currentLanguage === 'RUSSIAN' && 'primary'}
				style={{ marginLeft: 20 }}
			>
				Русский
			</Button>
		</Menu>
	)

	return (
		<Dropdown overlay={LanguageMenu} trigger={[ 'click', 'hover' ]}>
			<Button>Language</Button>
		</Dropdown>
	)
}

export default Language
