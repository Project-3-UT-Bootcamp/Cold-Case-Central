const faker = require('faker');

const db = require('../config/connection');
const { Case, User } = require('../models');

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

  const createdUsers = await User.collection.insertMany(userData);
  
  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create case data
  let createdCases = [];
  for (let i = 0; i < 100; i += 1) {
    const caseTitle = faker.name.findName();
    const caseDescription = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const caseStartDate = faker.date.past();
    const caseStatus = "Unsolved";

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdCase = await Case.create({ caseTitle, caseDescription, caseStartDate, caseStatus, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { cases: createdCase._id } }
    );

    createdCases.push(createdCase);
  }
  // const caseData = [];

  // for (let i = 0; i < 5; i++) {
  //   const caseTitle = faker.name.findName();
  //   const caseDescription = faker.lorem.paragraphs();
  //   const caseStartDate = faker.date.past();
  //   const caseStatus = "Unsolved";
  //   const caseAuthor = faker.name.findName();

  //   caseData.push({ caseTitle, caseDescription, caseStartDate, caseStatus, caseAuthor });
  // }
  // await Case.collection.insertMany(caseData);

  console.log('all done!');
  process.exit(0);
});
