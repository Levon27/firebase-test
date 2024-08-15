import express = require("express");
import {TeamsService} from "./services/teams.service";
const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
  const teamsService = new TeamsService();
  await teamsService.createTeam(
    req.body.team_name,
    req.body.game_code,
    req.body.player_numbers,
    req.body.event_id,
  );
  res.send("created");
});

export default router;
