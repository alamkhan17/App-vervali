## Getting started

```
yarn install
yarn start
```

## Debugging service workers

You may have noticed that running `yarn start` doesn't register any service workers.

That's because offline capabilities are confusing during development since you would always see the cached version
instead of the latest one with your changes.

You can debug service workers locally by building the production bundle and serving it like this:

```
yarn run build
yarn run serve
```

steps for solving problems

step 1: npm install
step 2: update react 17 to react 18
step 3: update react-dom 17 to react-dom 18
step 4: update mobx
step 5: update mobx-react
step 6: npm i @types/react
step 7: remove extra spaces from layout
step 8: add type for children in layout etc.
