# PhotoSearch App :camera:

This project consists on a simple web app that allows users to search photos using the Unsplash API.

Feel free to take a look at https://haystack-news-challenge.vercel.app/ :raised_hands:

## Installation :gear:

#### Prerequisites :clipboard:

To install and run this project locally, you'll need the following dependencies:

- Node v20.12.2 (as specified in the .nvmrc file)
- `npm` as a package manager

Additionally, you'll need an Unsplash API Key. You can find instructions on how to create a developer account and register a new app in the [Unsplash API Docs page](https://unsplash.com/documentation#creating-a-developer-account).

Once you have you API Key, please create a `.env` file (feel free to copy the `.env.template` file) and then set the key:

```
VITE_UNSPLASH_ACCESS_KEY={your API Key}
```

#### Steps to install :hammer_and_wrench:

Feel free to run the following commands:

```sh
# In project root

nvm use       # Use Node version specified in .nvmrc
npm install   # Install project dependencies
npm run dev   # Run project locally
```

## Features :rocket:

- **Home screen:** Upon accessing the application, the user can see the latest interesting photos from Unsplash.
- **Searching:** There's a search bar that the user can use to search photos by tag.
- **Viewing photos from a specific tag:** When clicking in any of the photo's tags, the user will get redirected to the tag page where they'll see the photos that contain that tag.
- **URL-based state:** Since the search and view-by-tag features leverage heavily on the URL params, the user can easily use the browser's navigation back and forward buttons as expected. Additionally, bookmarking and URL sharing is also supported.

## Tech stack :computer:

- **[Vite](https://vitejs.dev/)**: Since this project is a client-side Single Page Application (SPA), I decided to use Vite as a build tool because of its efficient Hot Module Replacement (HMR) features, which makes hot-reloading easy without needing to recompile the application. The project was bootstrapped from the React + TypeScript template by executing the `npm create vite@latest haystack-news-challenge -- --template react-ts`.
- **[TypeScript](https://www.typescriptlang.org/docs/)**: Who doesn't love type safety?
- **[TailwindCSS](https://tailwindcss.com/docs/installation)**: I usually use more "traditional" CSS approaches, so I decided to give Tailwind a try for this project to get more familiar with this tool.
- **[React Router](https://reactrouter.com/en/main/start/overview)**: Client-based routing library that has built-in support for URL query params, particularly useful to keep state in the URL when performing searches.
- **[TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)** (a.k.a. React Query): Nowadays it's one of the most popular tools for data fetching and server state management. I chose this library because to handle the data received from the requests to the Unsplash API.
- **[Vitest](https://vitest.dev/)**: Testing framework built to be used along with Vite. Even though testing was not mandatory for this project, I decided to go ahead and at least setup the testing suite and even write a simple unit test to demonstrate that the project is testable.
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: Testing library with multiple helpers to test React components.
- **Other**: ESLint + Prettier for code linting and formatting, Husky to configure pre-commit hooks.
