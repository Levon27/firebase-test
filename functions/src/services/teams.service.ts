import {getFirestore} from "firebase-admin/firestore";

/**
 * Teams service
 */
export class TeamsService {
  async createTeam(team_name: string, game_code: number,
    player_numbers: number, event_id: string) {
    await getFirestore().collection("teams").add({
      team_name,
      game_code,
      player_numbers,
      event_id,
    });
  }
}
