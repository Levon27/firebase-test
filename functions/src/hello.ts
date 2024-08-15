import express = require("express");
const router = express.Router();

router.get("/:name", (req: express.Request, res: express.Response) => {
  res.send(`<h1> Hello ${req.params.name} from GET!</h1>`);
});

router.post("/", (req: express.Request, res: express.Response) => {
  res.send(`<h1> Hello ${req.body.name} from POST!</h1>`);
});

export default router;
