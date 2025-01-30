# Software Engineer Resume with LitElement

This project includes a sample component using LitElement with TypeScript.

This template is generated from the `lit-starter-ts` package in [the main Lit
repo](https://github.com/lit/lit). Issues and PRs for this template should be
filed in that repo.

## Setup

Install dependencies:

```bash
npm i
```

## Local


```bash
npm run dev
```


Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Build for GitHub Pages

```bash
npm run docs
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when committing files, but this can be added with Husky and and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

```bash
npm run format
```

