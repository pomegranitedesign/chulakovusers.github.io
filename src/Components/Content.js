import React, { Component } from 'react'
import { Table, Card, Avatar } from 'antd'
import uuid from 'uuid/dist/v4'
import { StarOutlined, StarFilled } from '@ant-design/icons'

import translate from '../i18n/translate'
import VideoPlayer from './VideoPlayer'

class Content extends Component {
	render() {
		const { users, currentView, setFavourite } = this.props

		const _tableColumns = [
			{ title: translate('name'), dataIndex: 'name', key: 'name' },
			{ title: translate('age'), dataIndex: 'age', key: uuid() },
			{ title: translate('phone'), dataIndex: 'phone', key: 'phone' },
			{
				title: '',
				dataIndex: 'favourite',
				key: 'favourite',
				render: (_, { favourite, id }) =>
					favourite ? (
						<StarFilled onClick={() => setFavourite(id)} />
					) : (
						<StarOutlined onClick={() => setFavourite(id)} />
					)
			}
		]

		switch (currentView) {
			case 'preview':
				return users.map(
					({
						id,
						name,
						image,
						age,
						phone,
						phrase,
						video,
						favourite
					}) => (
						<Card
							key={id}
							style={{
								marginBottom: 40,
								borderRadius: 3,
								boxShadow:
									'0px 10px 20px -10px rgba(0, 0, 0, 0.25)'
							}}
						>
							<div>
								<Card.Meta
									title={name}
									style={{
										display: 'flex',
										alignItems: 'center'
									}}
									avatar={
										<Avatar
											src={require(`../Assets/Images/${image}.svg`)}
										/>
									}
								/>

								<br />

								<h4
									style={{
										fontSize: 16,
										color: '#999999',
										fontWeight: '400'
									}}
								>
									{age} {translate('yearsOld')}
								</h4>
								{favourite ? (
									<StarFilled
										onClick={() => setFavourite(id)}
									/>
								) : (
									<StarOutlined
										onClick={() => setFavourite(id)}
									/>
								)}
								<h4
									style={{
										fontSize: 16,
										fontWeight: '400',
										color: '#0e0e0e'
									}}
								>
									{phone}
								</h4>
								<p>{phrase}</p>
							</div>

							{video && <VideoPlayer name={video} />}
						</Card>
					)
				)

			case 'table':
				return (
					<Table scroll columns={_tableColumns} dataSource={users} />
				)

			default:
				return (
					<Table scroll columns={_tableColumns} dataSource={users} />
				)
		}
	}
}

export default Content
