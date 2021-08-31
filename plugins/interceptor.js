import { rejects } from 'assert'

export default function(ctx) {
  ctx.$axios.onError(async error => {
    const status = parseInt(error.response && error.response.status)
    if (status === 401) {
      if (error.response.config.url.includes('logout')) {
        return
      }
      ctx.redirect('/login')
      return ctx.$auth.logout()
    }
    if (status == 403) {
      return ctx.error({ statusCode: 403 })
    }
    return Promise.reject(error)
  })
}
