import express = require("express");
const router = express.Router();

router.post("/", (req: express.Request, res: express.Response) => {
  res.send(`<h1> Hello ${req.params.name} from games!</h1>`);
});

export default router;
