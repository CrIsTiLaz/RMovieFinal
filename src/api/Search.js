const express = require("express");

// Initialize App
const app = express();

// Assign route
app.use("/search/:filter", (req, res, next) => {
  const { filter } = req.params;
  const filteredUsers = data.filter((user) => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredUsers);
});

// Start server on PORT 5000
app.listen(5000, () => {
  console.log("Server started!");
});
