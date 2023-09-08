import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    // GET endpoint
    .get(getPlayers)

    // POST endpoint
    .post(addNewPlayer);

  app
    .route("/player/:playerId")
    // GET specific player
    .get(getPlayerWithID)

    // UPDATE a specific player
    .put(updatePlayer)

    // DELETE a specific player
    .delete(deletePlayer);
};

export default routes;
