const db = require("../configs/db");
const { Properties } = require("../models");
const fakeData = require("./fakeData");

async function seed() {
  try {
    await db.sync({ force: false });
    const data = await Properties.bulkCreate(fakeData);
    console.log(data);
    console.log(fakeData);
    process.exit(0);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
}

seed();
