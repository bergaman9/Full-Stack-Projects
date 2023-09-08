import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = async (req, res) => {
  let newPlayer = new Player(req.body);

  const result = await newPlayer.save();
  res.json(result);
};

export const getPlayers = async (req, res) => {
  const result = await Player.find({});
  res.json(result);
};

export const getPlayerWithID = async (req, res) => {
  const result = await Player.findById(req.params.playerId);
  res.json(result);
};

export const updatePlayer = async (req, res) => {
  const result = await Player.findOneAndUpdate(
    { _id: req.params.playerId },
    req.body,
    { new: true }
  );
  res.json(result);
};

export const deletePlayer = async (req, res) => {
  const result = await Player.findOneAndDelete({ _id: req.params.playerId });
  res.json({ message: "Successfully deleted player" });
};
