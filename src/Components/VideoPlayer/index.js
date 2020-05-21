import VideoPlayer from './VideoPlayer'
import withIntersectionObserver from '../../Hoc/withIntersectionObserver'
export default withIntersectionObserver(0.99)(VideoPlayer)
