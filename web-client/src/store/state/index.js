const initialState = {
  notifications: [],
  sw: {
    isInitialized: false,
    isUpdated: false,
    registration: null,
  },
  theme: {
    mode: localStorage.getItem('theme-mode') || 'dark',
  },
  users: {},
  currentUserId: null,
  currentUser: id => {
    return this.users[this.currentUserId];
  },
};

export { initialState };
