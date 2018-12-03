export default function ({ store, redirect }) {
  store.dispatch('signOut')
  return redirect('/')
}