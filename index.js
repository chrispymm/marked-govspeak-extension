import govukRenderer from './renderer.js'
import govspeakCta from './cta.js'
import govspeakWarning from './warning.js'

const govspeakExtension = [
  govspeakCta,
  govspeakWarning,
]

export {
  govukRenderer,
  govspeakCta,
  govspeakWarning,
}

export default {
  renderer: govukRenderer,
  extensions: govspeakExtension
}
