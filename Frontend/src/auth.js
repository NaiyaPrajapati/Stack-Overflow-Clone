function isLogin() {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("uname") != null
    ) {
      return true;
    }
    return false;
  }
  
  export default isLogin;
  