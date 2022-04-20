const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs')
const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const users = [{id: 1, username: "Vasya", age: 13}];



const createUser = (input) => {
  const id = Date.now()
  return {
    id, ...input
  }
}

const root = {
  getAllUsers: () => {
    return users;
  },
  getUser:({id}) => {
    return users.find(user => user.id === id)
  },
  createUser: ({input}) => {
    const user = createUser(input);
    users.push(user)
    return user
  }
}

const app = express();
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(5005, () => console.log('server started on port 5005'));
