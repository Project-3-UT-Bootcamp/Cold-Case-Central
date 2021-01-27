const faker = require('faker');

const db = require('../config/connection');
const { Case } = require('../models');

db.once('open', async () => {
  await Case.deleteMany({});

  // create user data
  const caseData = [];

  for (let i = 0; i < 5; i++) {
    const caseTitle = faker.name.findName();
    const caseDescription = faker.lorem.paragraphs();
    const caseStartDate = faker.date.past();
    const caseStatus = "Unsolved";
    const caseAuthor = faker.name.findName();

    caseData.push({ caseTitle, caseDescription, caseStartDate, caseStatus, caseAuthor });
  }
  await Case.collection.insertMany(caseData);

  console.log('all done!');
  process.exit(0);
});
