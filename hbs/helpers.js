const hbs = require('hbs')

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitilize', (text) => {
    return text.split(' ')
               .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
               .join(' ');
})