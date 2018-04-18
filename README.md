# FreshSpire

> Front-End Codebase for project Fresh Spire

## Work flow

Clone the repo first

```sh
> git clone git@github.com:ckres/teamfresh.git
> cd ./teamfresh
```

Install all the dependencies (make sure you already have node.js installed)

```sh
npm install
```

and run

```sh
npm start
```

You will be redirected to [http://localhost:3000](http://localhost:3000) by default and everything is hot-reloaded, which means you don't have to refresh the browser everytime you did some code modification.

## How to Work On Your Own Feature

We use React.js as the front-end framework, which is kind of component based. Generally you could follow the steps that I provide below:

1. Create your own branch, I suggest using a formatt in `yourName:featureName`, like `chang:view-deals`
1. Create a React component file, for example, `ViewDeals.js`
1. Create its corresponding style file with the same file name, and use `scss` as extension, `ViewDeals.scss`
1. Write the according route, in `App.js`
1. Mock your data if needed. If it's a generic/big feature, ideally I recommend you create a separated store like `DealStore.js`. But don't create too many stores as this could be hard to maintain in the future.
1. The bottom line is that it doesn't break the current code base, so plz make sure you fully test your feature.
1. Push your feature and submit a pull request.

## Conventions

### Styles

We use `Sass`, which is a preprocessor of css. It transform `scss` files to `css`. There are quite a few awesome features such as nesting, using variables, etc. It's quite easy to pick up.

> But pay attention that in the .js files you are still importing `.css` rather than `.scss`

Every styles, sizes variables that could be shared across components, plz put it under `theme.scss` like this:

```css
$spearmint-dark: #3dd28f;
$spearmint-light: #64dba5;

$grey-dark: #e9e9e9;
$grey-light: #f2f3f3;

$charcoal-dark: #2b2b2b;
$charcoal-light: #404041;
```

### Routes

We use `react-router` to handle route. As you can see, this project is essentially a Single Page Application, in which we only have one `html` file and a single entry `App.js`.

