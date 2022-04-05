## Intro

react app create by CRA package.(still using react 17.0.2)

## Setup Project

- dev env: MacOS 10.15.7

```
yarn install
yarn start
## run dev server on localhost:3000
```

## Folder Structure

- /src folder:
  - api: api functions.
  - components: component for style.
  - pages: component for route. Implement business logic.
  - system: global style or theme.
  - utils: hook or utils function logic.
- /types folder: declare modules for typescript.

## UI stories

1. user into the main page, enter a GitHub user name for reading his(her) repo profile.
   - user exists, go to 2
   - the user does not exist, go to the error page
2. the user can select a repo profile by repo name
3. pop a modal that shows repo info and link to the Github page.

you can use link to directly goto 2 or 3, and if user or user's repo does not exist it will go to the error page

## Scrolling Optimation Feature

Using React-window package and React.memo optimize scrolling.

1. react-window can reducing memory usage. only render components which are exist in view.
2. React.memo can memrize component's last props, when parent re-render, it can compare last props and current new props to decide if needs to re-render itself.

the original way to implement business logic is rendering when an API call receives,
so it will render 10 components whenever new data come in.
but by using react-window, which only render thing in view, we can render fewer components when new data come in.

on the other side, we package the style logic of every repo's profile into a component and render it by passing props, so we can use React. memo to reduce unnecessary render when props are equal.

## TODO

- better UI style.
- skeleton for better UX.
- more feature like check repo file.
