export default {
  isAuthenticated: false,
  authenticate(cb) {
    let execute = () => {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    };
    execute();
  },
  signout(cb) {
    let execute = () => {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    };
    execute();
  }
};
