import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'

import { LOCALES } from './Locales'
import messages from './Messages'

const LanguageProvider = ({ children, locale = LOCALES.ENGLISH }) => {
	return (
		<IntlProvider
			locale={locale}
			textComponent={Fragment}
			messages={messages[locale]}
		>
			{children}
		</IntlProvider>
	)
}

export default LanguageProvider
