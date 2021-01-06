const initialState = {
  theme: {
    mode: localStorage.getItem('theme-mode') || 'dark',
  },
  sw: {
    isInitialized: false,
    isUpdated: false,
    registration: null,
  },
  notifications: [],
  // user: {
  //   firstname: '',
  //   lastname: '',
  //   username: '',
  //   email: '',
  //   password: '',
  // },
}

export { initialState }
