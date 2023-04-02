# Mission Beepossible

A full-stack Next.js (w/TypeScript) application for future astronauts to learn about the universe.

## Why Build This?

The Dear Junior Dev Discord community challenge for this past week was to build an application to teach other about the solar system. Requirements were as follows:

```
Planets:

-- Each planet of the solar system must have its own profile page.
-- Each page must include at a minimum (Name of the planet, size, distance from the Sun, three identifying facts, solid or gas core, and a visual representation of the planet)
-- NOTE: No images, assets, emojis, or SVGs are permitted. The visual representation of each planet must be made ENTIRELY out of CSS.
-- If the planet has a moon, you must display the following information for every moon (Name, history behind name, and size).
-- Planet pages must include at least two different components that are NOT used on your homepage.
-- If a planet has more than one moon, the moon information must be displayed in repeating elements.
-- All planet and moon content MUST be stored in a database.


Backend:

-- You must use foreign keys.
-- Planets and Moons must be stored separate from one another.
-- You must incorporate one ENUM for the planet data.

Homepage:

-- The homepage should be an overview of the solar system.
-- The data included will be up to each team.
-- The homepage must include at least two components that are NOT used on any planet page.
-- Homepage content does not need to be stored in a database and can be coded into your components.

REAME:

-- Your README must include instructions for me to spin up the project locally, as well as an overview of the tech and/or libraries used.
-- It should also include a list of the Quackathon requirements and how those were met or exceeded by your team.
```

## Techonologies Used

- Next.js
- TypeScript
- React
- TailwindCSS
- CSS3
- Docker
- PostgreSQL
- Prisma
- Supabase (for deployment)
- Vercel (for deployment)

## Live Deployment

Check out the site --> https://mission-beepossible.vercel.app/

## Project Summary

This was a big step up over the previous weekend flex-box project!

1. Planning

- We had a long(ish) meeting before we starting coding to decide on our tech stack and database schema. We chose Next.js because we both love React, and felt that React would be a good choice for a Single Page Application. We're also both currently learning Next, and thought this project would be a great opportunity to practice with Next (it was!). We went with TailwindCSS for responsive styling and general CSS, and Brandon added custom CSS for the planets via vanilla CSS3. We developed in a docker devcontainer that spun up the app along with PostgreSQL for easy local development. I decided to use Prisma and Supabase for deployment after looking online and finding lots of good documentation on their integration with Vercel.

2. The Coding

- We spent a large portion of the week working on the code. We moved in chunks, submitting all PRs to GitHub for the other person to check before merging into main. We did our best to stay out of each other's files, but did have to resolve a few merge conflicts. (Luckily, they weren't too bad!!!) Once we finished up all of the primary features on Friday, I got the cloud database setup via Supabase, and we deployed the website early Sunday morning. We cleaned up the remaining moon data on Sunday along with some lingering bugs and then submitted the project!

## Preview

### Home Page!

![DEMO](public/readme-home.gif)

### Planet Page!

![DEMO](public/readme-planet-data.gif)

### Mobile View!

![DEMO](public/readme-responsive.gif)

## Development

### System Requirements

- Docker
- Node v18+
- NPM

### Getting Started

1. Clone the repository.

```
git clone https://github.com/cam-peck/mission-beepossible
cd flex-bee
```

2. Make a copy of the provided `.env.example` file. Name your copy `.env`.

```
cp .env.example .env
```

3. Sync your database with prisma.

```
npm run prisma:schema
```

4. Generate your prisma client.

```
npm run prisma:generate
```

5. You're good to go! To start developing...

```
npm run dev
```
