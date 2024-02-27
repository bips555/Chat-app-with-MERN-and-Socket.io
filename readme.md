<!-- npm create-vite@latest .
this is used to create vite application in frontend also allows to select technology
npm run dev to run frontend server
npm init -y in root directory to make deployment easy for later -->
<!-- changed script in package.json
made a server.js file in backend also  by installing express package npm i express 
also installed dotenv bcryptjs mongoose socket io jsonwebtoken cookie-parser --> 
<!-- nodemon is used so that the server doesnot get disrupted from time to time -->
<!-- while using dotenv always import dotenv and use dotenv.config()
and always restart the server while making changes in env file -->

<!-- test apis -->

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/api/auth/signup", (req, res) => {
 res.send("signup route");
});
app.get("/api/auth/login", (req, res) => {
 res.send("login route");
});
