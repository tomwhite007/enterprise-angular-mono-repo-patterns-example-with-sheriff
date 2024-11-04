# Enterprise Angular Mono Repo Patterns Example with Sheriff

A demo reference project using Barrel-less Module Boundaries in Nrwl Nx with [Sheriff](https://softarc-consulting.github.io/sheriff/)

This project is a replica of [enterprise-angular-mono-repo-patterns-example](https://github.com/tomwhite007/enterprise-angular-mono-repo-patterns-example) repo, but with a simplified file structure by using Sheriff. In order to reduce the amount of libraries that Enterprise Angular Mono Repo Patterns requires, Sheriff allows the grouping of singular-dependency libs to be brought into a common hybrid feature lib, like the example diagram below:

![Enterprise Angular Mono Repo Patterns with hybrid feature libs](readme-assets/eamp-sheriff-demo-diagram.png 'Hybrid feature libs')

The diagram above was originally generated using [nx graph](https://nx.dev/nx-api/nx/documents/dep-graph) on the original [enterprise-angular-mono-repo-patterns-example](https://github.com/tomwhite007/enterprise-angular-mono-repo-patterns-example) project, but now this project needs to use [Detective](https://github.com/angular-architects/detective) to show the Sheriff-controlled dependencies.

Run `npx detective` on this project to see the result.

At the moment, Detective is unable to show the containing-lib-to-child sub-module linkages at the same time as the outer lib connections. I'm preparing to document and raise an issue on this, then I'll update this readme.

Sheriff and Detective facilitate a pragmatic, modularised architecture that can still take advantage of Nx caching and [affected](https://nx.dev/nx-api/nx/documents/affected) commands whilst reducing the volume of libs that Enterprise Angular Mono Repo Patterns requires.
