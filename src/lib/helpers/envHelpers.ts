export function isDebugMode() {
  return isDevelopment() || window.location.search.includes('debug=true')
}

export function isDevelopment() {
  return process.env.NODE_ENV === 'development'
}

export function isProduction() {
  return process.env.NODE_ENV === 'production'
}
