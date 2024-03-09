# Medicine Delivery App
### ~ React + TypeScript + Vite + MUI + Json Server 

#### ~ React Hook Form + Redux Toolkit +  RTK Query

Available commands:
-------------------

-   `npm install`


- `npm run dev`


-   `npm run build`


#### !!! If Error:
```Material UI createTheme_default is not a function```
#### Fixed it by removing the node_modules/.vite/deps folder and restarting the server:


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
