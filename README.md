# Project Template

Project template for TypeScript, and JavaScript projects with full modern tooling
<br>

![typescript](https://img.shields.io/badge/typescript-blue?logo=typescript&style=for-the-badge)
![javascript](https://img.shields.io/badge/javascript-blue?logo=JavaScript&style=for-the-badge)
<br>
![eslint](https://img.shields.io/badge/eslint-lint-blueviolet?logo=eslint&style=for-the-badge)
![prettier](https://img.shields.io/badge/prettier-format-yellow?logo=prettier&style=for-the-badge)
![test](https://img.shields.io/badge/jest-test-orange?logo=jest&style=for-the-badge)
![rollup](https://img.shields.io/badge/rollup.js-build-red?logo=rollup.js&style=for-the-badge)

## TypeScript

JavaScript that scales. TypeScript is a superset of JavaScript that compiles into plain JavaScript.

TypeScript starts from the same syntax and semantics that millions of JavaScript developers know today. Use existing JavaScript code, incorporate popular JavaScript libraries, and call TypeScript code from JavaScript.

TypeScript compiles to clean, simple JavaScript code which runs on any browser, in Node.js, or in any JavaScript engine that supports ECMAScript 3 (or newer).
Types enable JavaScript developers to use highly-productive development tools and practices like static checking and code refactoring when developing JavaScript applications.

Types are optional, and type inference allows a few type annotations to make a big difference to the static verification of your code. Types let you define interfaces between software components and gain insights into the behavior of existing JavaScript libraries.
TypeScript offers support for the latest and evolving JavaScript features, including those from ECMAScript 2015 and future proposals, like async functions and decorators, to help build robust components.

These features are available at development time for high-confidence app development, but are compiled into simple JavaScript that targets ECMAScript 3 (or newer) environments.

[https://www.typescriptlang.org/index.html](https://www.typescriptlang.org/index.html)

## Linting

lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. The term originates from a Unix utility that examined C language source code.
<br><br>
[https://en.wikipedia.org/wiki/Lint_(software](https://en.wikipedia.org/wiki/Lint_(software)

- ### ESLint

  ESLint is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.
  JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

  The primary reason ESLint was created was to allow developers to create their own linting rules. ESLint is designed to have all rules completely pluggable. The default rules are written just like any plugin rules would be. They can all follow the same pattern, both for the rules themselves as well as tests. While ESLint will ship with some built-in rules to make it useful from the start, you’ll be able to dynamically load rules at any point in time.
  ESLint is written using Node.js to provide a fast runtime environment and easy installation via npm.
  <br><br>
  [https://github.com/eslint/eslint](https://github.com/eslint/eslint)

- ### ESLint TypeScript Plugin

  As covered by the previous section, both ESLint and TypeScript rely on turning your source code into a data format called an AST in order to do their jobs.
  However, it turns out that ESLint and TypeScript use different ASTs to each other.

  The reason for this difference is not so interesting or important, and is simply the result of different evolutions, priorities and timelines of the projects.
  This project, typescript-eslint, exists primarily because of this major difference between the projects.
  typescript-eslint exists so that you can use ESLint and TypeScript together, without needing to worry about implementation detail differences wherever possible.

  [https://github.com/typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

- ### TypeScript ESLint Parser

  An ESLint custom parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.
  There is sometimes an incorrect assumption that the parser itself is what does everything necessary to facilitate the use of ESLint with TypeScript. In actuality, it is the combination of the parser and one or more plugins which allow you to maximize your usage of ESLint with TypeScript.

  For example, once this parser successfully produces an AST for the TypeScript source code, it might well contain some information which simply does not exist in a standard JavaScript context, such as the data for a TypeScript-specific construct, like an interface.

  The core rules built into ESLint, such as indent have no knowledge of such constructs, so it is impossible to expect them to work out of the box with them.

  Instead, you also need to make use of one more plugins which will add or extend rules with TypeScript-specific features.

  By far the most common case will be installing the @typescript-eslint/eslint-plugin plugin, but there are also other relevant options available such a @typescript-eslint/eslint-plugin-tslint.
  <br><br>
  [https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser](https://github.com/typescript-eslint/typescript-eslint)

- ### TypeScript ESTree

  A parser that converts TypeScript source code into an ESTree-compatible form.
  This parser is somewhat generic and robust, and could be used to power any use-case which requires taking TypeScript source code and producing an ESTree-compatible AST.

  In fact, it is already used within these hyper-popular open-source projects to power their TypeScript support.

  - ESLint, the pluggable linting utility for JavaScript and JSX
  - Prettier, an opinionated code formatter

[https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/typescript-estree](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/typescript-estree)

### Git Hooks and Pre-commit

What are Git hooks?

Git hooks are scripts that Git executes before or after events such as: commit, push, and receive. Git hooks are a built-in feature - no need to download anything. Git hooks are run locally.

These hook scripts are only limited by a developer's imagination.

- ### Lint Staged

  Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

  This project contains a script that will run arbitrary shell tasks with a list of staged files as an argument, filtered by a specified glob pattern.

[https://github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)

- ### Husky

  Git hooks made easy

  Husky can prevent bad git commit, git push and more 🐶 woof!

[https://github.com/typicode/husky](https://github.com/typicode/husky)

## Formatting

- ### Prettier

  Prettier is an opinionated code formatter with support for.
  Prettier is an opinionated code formatter with support for:

  - JavaScript, including ES2017
  - JSX
  - Angular
  - Vue
  - Flow
  - TypeScript
  - CSS, Less, and SCSS
  - HTML
  - JSON
  - GraphQL
  - Markdown, including GFM and MDX
  - YAML

  It removes all original styling\* and ensures that all outputted code conforms to a consistent style.

  Prettier takes your code and reprints it from scratch by taking the line length into account.
  It removes all original styling, and ensures that all outputted code conforms to a consistent style.

  Prettier takes your code and reprints it from scratch by taking the line length into account.

[https://github.com/prettier/prettier](https://github.com/prettier/prettier)

- ### ESLint Prettier Config

  Turns off all rules that are unnecessary or might conflict with Prettier.

  This lets you use your favorite shareable config without letting its stylistic choices get in the way when using Prettier.

  Note that this config only turns rules off, so it only makes sense using it together with some other config.

[https://github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

- ### ESLint Plugin Prettier
  Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

[https://github.com/prettier/eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

## Testing Framework

- ### Jest

  Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

  It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

  Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

  Jest is well-documented, requires little configuration and can be extended to match your requirements.

  Jest makes testing delightful.

  [https://jestjs.io/](https://jestjs.io/)
  [https://github.com/facebook/jest](https://github.com/facebook/jest)

- ### Wallaby

  Wallaby.js is a developer productivity tool that runs your JavaScript and TypeScript tests immediately as you type, highlighting results in your IDE right next to your code.

  Test execution results, including code coverage, are displayed and updated in realtime right where you need to see them — in your code editor, next to the line of code that you're editing. Say goodbye to context switching.

  The tool is insanely fast, because it calculates and runs the minimum set of tests affected by your code changes, often only a single test needs to be run. No other testing tool is capable of operating on this level.

  There is no vendor, API or framework lock-in when using Wallaby.js, because the tool is a plugin for your existing testing/UI framework and IDE. You will always be able to run your tests without Wallaby.js if you need to.

[https://wallabyjs.com/](https://wallabyjs.com/)

## Build

- ### Rollup

  Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.

  [https://rollupjs.org/guide/en/](https://rollupjs.org/guide/en/)
