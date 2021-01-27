const faker = require('faker');

const db = require('../config/connection');
const { Case, User } = require('../models');

db.once('open', async () => {
  await Case.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }


// const { Case } = require('../models');

db.once('open', async () => {
  await Case.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 10; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  await User.collection.insertMany(userData);

  // create case data
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
