import React, { Component } from 'react'
import { Player } from 'video-react'

class VideoPlayer extends Component {
	constructor(props) {
		super(props)
		this.player = {}
		this.play = this.play.bind(this)
		this.pause = this.pause.bind(this)
	}

	componentDidMount() {
		this.player.subscribeToStateChange(this.handleStateChange.bind(this))
	}

	handleStateChange(state) {
		this.setState({ player: state })
	}

	play() {
		this.player.play()
	}

	pause() {
		this.player.pause()
	}

	render() {
		const { isVisible, name } = this.props

		if (this.player) {
			if (isVisible) this.play()
		}

		return (
			<Player
				ref={(player) => (this.player = player)}
				src={require(`../../Assets/Videos/${name}.mp4`)}
			/>
		)
	}
}

export default VideoPlayer
