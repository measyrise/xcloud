/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
export default function({ isHMR, app, store, route, params, error, redirect }) {
  // debugger
  if (isHMR) {
    // ignore if called from hot module replacement
    return
  } // if url does not have language, redirect to english
  else if (!params.lang) {
    //return redirect('/zh'+route.fullPath);
    //console.log('/zh'+route.fullPath);
  }

  // based on directory structure _lang/xxxx, en/about has params.lang as "en"
  const locale = params.lang || 'en'
  store.commit('SET_LANG', locale) // set store
  console.log(store.state.app.size)
  //调用模块里的东西时
  store.dispatch('setSize', 'setsizetest')
  console.log('***************************************')
  console.log(store.state.size)
  console.log(store.state.app.size)
  //调用模块里的东西时
  store.commit('SET_SIZE', 'setsizeofcommit') // set store

  console.log('***************************************')
  console.log(store.state.size)
  console.log(store.state.app.size)
  app.i18n.locale = store.state.locale
}
