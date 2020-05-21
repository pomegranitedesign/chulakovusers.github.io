import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { Spin, Row, Col, Layout, Input } from 'antd'

import {
	fetchData,
	switchLanguage,
	switchView,
	switchSortBy,
	setSearch,
	setFavourite
} from './Actions'
import { Sort, View, Content, Language } from './Components'
import { LanguageProvider, LOCALES } from './i18n'

const App = ({
	state,
	fetchData,
	switchLanguage,
	switchView,
	switchSortBy,
	setSearch,
	setFavourite
}) => {
	useEffect(
		() => {
			fetchData()
		},
		[ fetchData ]
	)

	const filteredUsers = state.search
		? state.users.filter((user) => user.name.match(state.search))
		: state.users

	return (
		<Fragment>
			<LanguageProvider locale={LOCALES[state.currentLanguage]}>
				<Layout.Header
					style={{
						height: 'auto',
						paddingTop: 20,
						paddingBottom: 20
					}}
				>
					<Row>
						<Col span={12}>
							<Sort
								sortBy={state.sortBy}
								switchSortBy={switchSortBy}
							/>

							<Language
								switchLanguage={switchLanguage}
								currentLanguage={state.currentLanguage}
							/>

							<View
								switchView={switchView}
								currentView={state.currentView}
							/>
						</Col>

						<Input
							style={{ marginTop: 30 }}
							onChange={(event) => setSearch(event.target.value)}
							value={state.search}
						/>
					</Row>
				</Layout.Header>

				{state.loading ? (
					<Spin
						size="default"
						style={{
							margin: '50px auto',
							display: 'block'
						}}
					/>
				) : (
					<Layout.Content>
						<Content
							users={filteredUsers}
							currentView={state.currentView}
							setFavourite={setFavourite}
						/>
					</Layout.Content>
				)}
			</LanguageProvider>
		</Fragment>
	)
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps, {
	fetchData,
	switchLanguage,
	switchView,
	switchSortBy,
	setSearch,
	setFavourite
})(App)
