import { cleanUrl } from './utils/helpers.js'

const govukRenderer = {
  heading(text, level, raw, slugger) {
    let className = '';
    switch(level) {
      case 1:
        className='govuk-heading-l';
        break;
      case 2: 
        className='govuk-heading-m';
        break;
      case 3: 
        className='govuk-heading-s';
        break;
    }

    const classString = className ? `class="${className}"` : ''; 

    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}" ${classString} >${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}  ${$classString}>${text}</h${level}>\n`;      
  },

  link(href, title, text) {
    href = cleanUrl(this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a class="govuk-link" href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }
}

export default govukRenderer
