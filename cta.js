const govspeakCta = {
  name: 'cta',
  level: 'block',
  start(src) {
    if (src.match(/\$cta/)) {
      return src.match(/^\$cta/)?.index
    }
    return undefined
  },
  tokenizer(src, tokens) {
    //const rule = /^\$cta\n?(.+?(?=\$cta))?\n?(?:\$cta)/igs
    const rule = /^\$cta\n([\s\S]*?)\n\$cta/
    const match = rule.exec(src)
    if(match) {
      const token = {
        type: 'cta',
        raw: match[0],
        text: match[0].trim(),                       
        tokens: this.lexer.blockTokens(match[1]) 
      }
      return token;
    }
  },
  renderer(token) {
    return `<div class="call-to-action">${this.parser.parse(token.tokens)}\n</div>`
  }
}

export default govspeakCta
