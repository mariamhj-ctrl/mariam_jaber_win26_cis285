const express = requires("express");
const app = express ();

app.get("/",(req, res) => {
    res.send("Hello from backend");
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});