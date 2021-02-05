const initialState = {
  currentUserId: null,
  notifications: [],
  sw: {
    isInitialized: false,
    isUpdated: false,
    registration: null
  },
  redirect: null,
  theme: {
    mode: localStorage.getItem('theme-mode') || 'dark'
  },
  users: {},
}

export { initialState }
