const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");

const mongoose = require("mongoose");
mongoose.set("useFindAndModify", true);

const connect = mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//user routes
app.use("/auth");
app.use("/register");
app.use("/login");
app.use("/logout");

//comment routes
app.use("/saveComment");
app.use("/getComments");
app.use("/deleteComment");

//favorited routes
app.use("/favoriteNumber");
app.use("/favorited");
app.use("/removeFromFavorite");
app.use("/addToFavorite");
app.use("/getFavoritedMovie");

//like routes
app.use("/getLikes");
app.use("/getDislikes");
app.use("/upLike");
app.use("/unLike");
app.use("/unDisLike");
app.use("/upDisLike")

/*
app.use("/users", require("./routes/users"));
app.use("/favorite", require("./routes/favorite"));
app.use("/comment", require("./routes/comment"));
app.use("/like", require("./routes/like"));
*/

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
