### Adapted from..
- https://www.howtographql.com/graphql-js/
- https://www.howtographql.com/react-apollo/

### TODO..
- Remove hardcoded endpoints; move to env
- docker-compose the node graphql service


### Manually [Re]Generate Prisma
> $| ../hackernews-node/prisma
```
prisma generate
```

### Running Locally (currently)

1. Run Prisma server
   > $| ../hackernews-node/prisma
   ```
   docker-compose up
   ```

2. Run GraphQL server
   > $| ../hackernews-node
   ```
   npm start
   ```

3. Run node frontend
   > $| ../hackernews-react-apollo
   ```
   node ./src/index.js
   ```
