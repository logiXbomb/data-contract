# data-contract

### coming soon

> These are the initial thoughts on how this will work

>> You can define a schema "GraphQL" style

>> And then it will be converted behind the scenes into a json schema that can be used to validate inputs and outputs.

>> This is inteded to help maintain contracts bewteen microservices in NodeJS

```graphql
type Person {
  firstName: String
  lastName: String
}
```

```json
{
  "id": "Person",
  "title": "Person",
  "properties": {
    "firstName": { "type": "string" },
    "lastName": { "type": "string" }
  }
}
```

```javascript
import express from 'express';
import Contract from 'data-contract';

const contractTypes = `
  type Person {
    firstName: String
    lastName: String
  }
`;

const contract = new Contract(contractTypes);

const app = express();

app.use(contract.expressValidator);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
```
