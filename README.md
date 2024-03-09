# Medicine Delivery App
### ~ React + TypeScript + Vite + MUI + Json Server + Concurrently


#### ~ ReactDOM + React Router + React Hook Form + Redux Toolkit +  RTK Query

Available commands:
-------------------

-   `npm install`


- `npm run dev`


-  Serve I: 

   ➜   [http://localhost:3001](http://localhost:3001/)

  -  Endpoints:  

     ➜  [http://localhost:3001/pharmacies](http://localhost:3001/pharmacies)

     ➜  [http://localhost:3001/drugs](http://localhost:3001/drugs)

     ➜  [http://localhost:3001/order](http://localhost:3001/order)

-  Serve II:

   ➜   [http://127.0.0.1:517:?](http://127.0.0.1:5173/)


-   `npm run build`


#### !!! If Error:
```Material UI createTheme_default is not a function```
#### Fixed it by removing the node_modules/.vite/deps folder and restarting the servers:


-   `rm -rf node_modules/.vite/deps`


- `npm run dev`


If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
