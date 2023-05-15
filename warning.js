const govspeakWarning = {
  name: 'warning',
  level: 'inline',
  start(src) {
    return src.match(/^%/)?.index
  },
  tokenizer(src, tokens) {
    const rule = /^\%([\s\S]*?)%/
    const match = rule.exec(src)
    if(match) {
      return {
        type: 'warning',
        raw: match[0],
        text: match[1].trim()
      }
    }
  },
  renderer(token) {
    return `<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-warning-text__assistive">Warning</span>
    ${token.text}</strong>
</div>`
  }
}

export default govspeakWarning
