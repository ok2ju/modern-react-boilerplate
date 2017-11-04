# Modern React boilerplate

![](http://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif)

## Toolset
* [webpack](https://webpack.js.org/) with [webpack-dev-server](https://github.com/webpack/webpack-dev-server), [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
* [Babel](http://babeljs.io/) with [babel-preset-env](https://github.com/babel/babel-preset-env), [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react), [object spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/), [class properties](https://babeljs.io/docs/plugins/transform-class-properties/), [babili](https://github.com/babel/minify)
* [ESLint](http://eslint.org/)
* [Jest](http://facebook.github.io/jest) + [Enzyme](http://airbnb.io/enzyme/)
* [React-router v3](https://github.com/ReactTraining/react-router/tree/v3/docs)

## Prerequisites
You should have `node` and `yarn` installed on your machine:
* [Node](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/docs): to install run `npm install --global yarn`

## Getting Started

1. Clone this repo
```sh
$ git clone https://github.com/ok2ju/modern-react-boilerplate.git && cd modern-react-boilerplate
```

2. Install project dependencies
```sh
$ yarn install
```

3. Run app (in dev mode) using following command:
```sh
$ yarn dev
```

4. Visit http://localhost:8080

## Available scripts
* `yarn dev` - run app in dev mode
* `yarn build` - build production-ready app
* `yarn lint` - lint(validate) source code
* `yarn test` - run tests

## Varieties
This repository has two branches:
* `develop` - basic react application boilerplate with minimum configuration
* `package/flowtyped-react` - react boilerplate with [flow](https://flow.org/) - static type checker

**Note**: currently this branches have different dependencies versions. 😓 I will fix it later.
For example `develop` branch has `react-router v3` but `package/flowtyped-react` - `react-router v4`
