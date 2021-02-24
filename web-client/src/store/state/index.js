const initialState = {
  auth: {
    token: null,
    isAuthenticated: null,
    loading: true,
    payload: {}
  },
  user: {},
  profile: {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
  },
  post: {
    posts: [],
    post: null,
    loading: true,
    error: {}
  },
  notifications: [],
  sw: {
    isInitialized: false,
    isUpdated: false,
    registration: null
  },
  theme: {
    mode: localStorage.getItem('theme-mode') || 'light'
  },
}

export { initialState }
