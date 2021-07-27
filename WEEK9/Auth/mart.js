const express = require('express')
const userRoute = require("./routes/userRoute");
const app = express()
const port = 3090

app.use(express.json());

app.use("/api/user", userRoute);

app.get('/', (req, res) => {
  res.send('Welcom To My API!')

  
})

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})