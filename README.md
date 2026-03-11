# Frienemies

Production-ready Vite/React storefront prepared for standard cPanel hosting.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

## cPanel deployment

1. Run `npm run build` locally or in CI.
2. Open the generated `dist` folder.
3. Upload **only the contents inside `dist`** to `public_html` (or your target subfolder).
4. Do not upload the `dist` folder itself unless your hosting path specifically requires that nesting.

## Routing

The app uses `HashRouter`, so direct refreshes work on standard cPanel hosting without Apache/Nginx rewrite rules.

## Vite base path

The project is configured with:

```js
base: './'
```

That makes built assets resolve safely when deployed at the domain root or copied into a normal cPanel folder.
If you later deploy into a named subfolder and want absolute paths instead, update `vite.config.js` accordingly.
