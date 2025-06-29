import { Presence, Pupil, Group } from "./model.js";
import { Op } from "sequelize";

// Add a presence record
export async function recordPresence({ pupil_id, group_id, date, status }) {
  return await Presence.create({ pupil_id, group_id, date, status });
}

// Get a presence record for a pupil on a date
export async function fetchPresence({ pupil_id, date }) {
  return await Presence.findOne({
    where: { pupil_id, date },
    include: [Pupil, Group],
  });
}

// Get all presence records for a group
export async function fetchGroupPresence(group_id) {
  return await Presence.findAll({
    where: { group_id },
    include: [Pupil],
  });
}

// Get all presence records for a pupil
export async function fetchPupilPresenceSummary(pupil_id) {
  return await Presence.findAll({
    where: { pupil_id },
    include: [Group],
  });
}
