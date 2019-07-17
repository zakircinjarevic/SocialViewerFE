export default {
  env: process.env.NODE_ENV || "development",
  files: "http://localhost:3000/api/gdrive",
  port: process.env.PORT || 8000,
  token: "",
  currentUser: {
    name: "",
    email: "",
    picture: "",
    isLoggedIn: "",
    userID: "",
    posts: []
  }
};
