# beatstar-perfect-plus

This repo contains a Frida agent that lets you hook methods from Beatstar to always get Perfect+.

Go into [index.ts](agent/index.ts) to see the code.

# Usage

- Clone the repo
- `npm i`
- `npm run watch`
- `frida -U <app-name> -i <path-to-_agent.js>`

# Explanation

I was able to do so because of the great [frida-il2cpp-bridge](https://github.com/vfsfitvnm/frida-il2cpp-bridge) module (Thanks [vfsfitvnm](https://github.com/vfsfitvnm)).

After bumped the C# files with all the signatures in the game I was able to trace back methods called when user interact with the game (see the comment into [index.ts](agent/index.ts)).

At this point it was a matter of searching and analyzing methods and parameters.