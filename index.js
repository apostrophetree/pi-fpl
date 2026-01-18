const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const PORT = 3000;

// Landing page
app.get("/", (req, res) => {
  res.send(`
    <h1>Pi Login Demo</h1>
    <button onclick="login()">Login with Pi</button>

    <script src="https://sdk.minepi.com/pi-sdk.js"></script>
    <script>
      Pi.init({ version: "2.0" });

      function login() {
        Pi.authenticate(
          ["username"],
          function (auth) {
            document.body.innerHTML =
              "<h2>Logged in as: " + auth.user.username + "</h2>";
          },
          function (error) {
            alert("Login failed");
          }
        );
      }
    </script>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
