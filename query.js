const { User, Cart} = require('./models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

// Find all users with their associated tasks
// Raw SQL: SELECT * FROM "Users" JOIN "Tasks" ON "Tasks"."userId" = "Users".id;

const findAllWithTasks = async () => {
  try {
    const users = await User.findAll({
      include: [{
        model: Cart
      }]
    });
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
  }catch (err){
    console.log('Association fail....');
  }
}
const run = async () => {
  await findAllWithTasks()
  await process.exit()
}

run()