# hadrians-react

A digital score sheet for the board game Hadrian's Wall. Each player tracks their cohorts,
wall guard, forts, mining and foresting on screen instead of on the paper pad.

## What is on the sheet

| Component | Tracks |
|---|---|
| `Cohorts` | Soldiers available and spent |
| `WallGuard` | The wall guard track |
| `CippiWallFort` and `CWF` | The cippi, wall and fort rows, with icons from `CippiWallFortIcons.ts` |
| `MiningForesting` | The two resource tracks |
| `ScribbleBox` | Free notes |
| `Arrow` | The shared arrow marker |

`views/SheetLeft.tsx` lays the left page of the pad out from those parts. `types/user.ts`
holds the player state.

A Svelte version of the same sheet lives at
[hadrians-svelte](https://github.com/HTJin/hadrians-svelte); the two were built to compare
the frameworks on one real layout.

## Stack

React 18, TypeScript, Vite, Tailwind CSS, React Router.

## Run it

```bash
bun install
bun run dev      # http://localhost:5173
```
