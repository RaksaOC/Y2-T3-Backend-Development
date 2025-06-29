import { Writer, Novel } from "./model.js";

// Retrieve all novels for a specific writer
export async function fetchNovelsByWriter(writerName) {
  const writer = await Writer.findOne({
    where: { name: writerName },
    include: { model: Novel },
  });
  if (!writer) return [];
  return writer.Novels || [];
}

// Add a new novel for a writer
export async function addNovelToWriter(writerName, novelData) {
  const writer = await Writer.findOne({ where: { name: writerName } });
  if (!writer) throw new Error("Writer not found");
  return await Novel.create({ ...novelData, writer_id: writer.id });
}

// Get all writers and their novels
export async function getAllWritersWithNovels() {
  return await Writer.findAll({ include: Novel });
}
