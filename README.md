# The Nextjs starter

Hopefully the last one you'll need 😉

## Features

- ▲ Uses the latest [Next.js](https://github.com/zeit/next.js) along with [typescript](https://www.typescriptlang.org/)
- 🎉 Icons from [fontawesome](https://fontawesome.com/) using [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
- 💅 Styling with [styled-components](https://github.com/styled-components/styled-components)
- 🐐 Unit testing with [react-testing-library](https://github.com/testing-library/react-testing-library)
- 🖥 Custom reverse proxy server using [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)
- ✏️ Static code analysis with [eslint](https://eslint.org/)
- 📖 Component Visual Documentation with [storybook](https://storybook.js.org)
- 🏹 Custom Routing with [next-routes](https://github.com/fridays/next-routes)
- 💨 Global styling and grid with [tailwind.css](https://tailwindcss.com/)

## Getting started

```
git clone --depth=1 --branch=master git@github.com:techequipt/the-nextjs-starter.git into-folder & rm -rf ./into-folder/.git
cd into-folder
npm install
cp ./.env.example ./.env
npm start
```

The app will run at `http://localhost:3000`

- Components, services, utilities and routes will all live in `./src`
- Jest tests live in `./tests/`
- Storybook stories live in `./stories/` and expect filenames of `name.stories.js`.
