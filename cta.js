const govspeakCta = {
  name: 'cta',
  level: 'block',
  start(src) {
    if (src.match(/\$CTA(?: {2})?/i)) {
      return src.match(/^\$CTA/i)?.index
    }
    return undefined
  },
  tokenizer(src, tokens) {
    //const rule = /^\$cta\n?(.+?(?=\$cta))?\n?(?:\$cta)/igs
    const rule = /^\$CTA(?: {2})?\n([\s\S]*?)\n\$CTA/i
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
