const db = require("../configs/db");
const { Properties } = require("../models");
const FakeData = require("./fakeData");

async function seed() {
  try {
    await db.sync({ force: false });
    const data = await Properties.bulkCreate(FakeData);
    console.log(data);
    process.exit(0);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1); // Indicate failure with a non-zero exit code
  }
}

seed();
