const initialState = {
  notifications: [],
  sw: {
    isInitialized: false,
    isUpdated: false,
    registration: null
  },
  redirect: null,
  theme: {
    mode: localStorage.getItem('theme-mode') || 'light'
  },
  signupData: {},
  signinData: {},
  user: {},
  userId: '',
  userUploads: [],
}

export { initialState }
