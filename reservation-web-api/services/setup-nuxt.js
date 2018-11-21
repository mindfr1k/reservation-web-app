const { Nuxt, Builder } = require('nuxt')

const { NODE_ENV } = process.env

const isProd = NODE_ENV === 'prod'
const config = require('../../nuxt.config')

config.dev = !isProd
const nuxt = new Nuxt(config)
const builder = new Builder(nuxt)
builder.build()

module.exports = nuxt.render