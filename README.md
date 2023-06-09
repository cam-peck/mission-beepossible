# Mission Beepossible 🐝

A full-stack Next.js (w/TypeScript) application for future astronauts to learn about the universe.

## Why Build This? 🤔

The Dear Junior Dev Discord community challenge for this past week was to build an application to teach other about the solar system. Requirements were as follows:

```
Planets:

-- Each planet of the solar system must have its own profile page.

We utilized Next Pages to create the profile page for the planet. By using slugs, we could take the planet name in the url to query our database for information. This set up allowed us to create on planet profile page that had the ability to render the information for any of the 9 planets.

-- Each page must include at a minimum (Name of the planet, size, distance from the Sun, three identifying facts, solid or gas core, and a visual representation of the planet)

This data is represented on each of the pages. The identifying facts are fun facts in an accordion set up and the solid or gas core is represented through a modal hover.

-- NOTE: No images, assets, emojis, or SVGs are permitted. The visual representation of each planet must be made ENTIRELY out of CSS.
-- If the planet has a moon, you must display the following information for every moon (Name, history behind name, and size).
-- Planet pages must include at least two different components that are NOT used on your homepage.

Each planet was created using vanilla CSS but responsive sizing and page layout done with TailwindCSS. The two components on the planet page are modals for the solid or gas core (also for moon data!), and the fun facts.

-- If a planet has more than one moon, the moon information must be displayed in repeating elements.

Cameron decided that we should go all or nothing on the moons. We spent a good few hours inputting moon data for the moons (Jupiter and Saturn have a lot!). To display the moons, we created a moon component that would take information and render the moon. This way we could `map` through the moons data we fetch and render all of the moons.
-- All planet and moon content MUST be stored in a database.


Backend:

-- You must use foreign keys.

Moons are linked to the planets using a foreign key of planetName.

-- Planets and Moons must be stored separate from one another.

Planets and moons have separate tables.

-- You must incorporate one ENUM for the planet data.

planetName and planetType are both ENUMs.

Homepage:

-- The homepage should be an overview of the solar system.
-- The data included will be up to each team.
-- The homepage must include at least two components that are NOT used on any planet page.

We utilized a navbar are the top (collapsible with responsive design) to link to the planets as well as a Solar System component to display all of the planets orbiting the sun!

-- Homepage content does not need to be stored in a database and can be coded into your components.

The only planet data we used on the homepage was the names of the planets for our links to each planet page.
```

## Database Schema 📰

![Database](public/readme-db.png 'Image of the database schema')

## Techonologies Used 💻

### Full-stack

- Next.js
- TypeScript

### Front-end

- React
- TailwindCSS
- CSS3

### Back-end

- Docker
- PostgreSQL
- Prisma
- Supabase (for deployment)
- Vercel (for deployment)

## Live Deployment 🔗

Check out the site --> https://mission-beepossible.vercel.app/

## Project Summary

This was a big step up over the previous weekend flex-box project!

1. Planning

- We had a long(ish) meeting before we starting coding to decide on our tech stack and database schema. We chose Next.js because we both love React, and Next is a great way to get a project up and running quickly. We're also both currently learning Next, and thought this project would be a great opportunity to practice with Next (it was!). For other techonologies -- We went with TailwindCSS for responsive styling and general CSS, and Brandon added custom CSS for the planets via vanilla CSS3. We also developed in a docker devcontainer that spun up the app along with PostgreSQL for easy local development. I decided to use Prisma and Supabase for deployment after looking online and finding lots of good documentation on their integration with Vercel. Supabase ending up being REALLY useful, and made it easy to seperate between the dev and prod database environments.

2. The Coding

- After we got done planning, we spent the remainder of the week working on the code. We moved in chunks, submitting all PRs to GitHub for the other person to check before merging into main. There were a LOT of zoom calls here... (we're on one now, as we write this up!) We did our best to stay out of each others' files, but did have to resolve a few merge conflicts. (Luckily, they weren't too bad!!!) Once we finished up all of the primary features on Friday, I got the cloud database setup via Supabase, and we deployed the website early Sunday morning. We cleaned up the remaining moon data on Sunday along with some lingering bugs and then submitted the project!

## Preview 👀

### Home Page!

![Home](public/readme-home.gif 'Viewing the Solar System')

### Planet Page!

![Planet](public/readme-planet-data.gif "Viewing the planet's page")

### Mobile View!

![Responsive](public/readme-responsive.gif 'Showing off the responsive layout')

## Development 👨‍💻

### System Requirements

- Docker
- Node v18+
- NPM

### Getting Started

1. Clone the repository. I like using `code .` to get the repository open, but `cd` works just as well.

```
git clone https://github.com/cam-peck/mission-beepossible
cd mission-beepossible
```

2. Make a copy of the provided `.example.env` file. Name your copy `.env`.

```
cp .example.env .env
```

3. Open your `schema.prisma` file. Replace the datasource section with...

```
datasource db {
  provider  = "postgresql"
  url       = env("DEV_DATABASE_URL")
}
```

4. Sync your database with prisma.

```
npm run prisma:schema
```

5. Generate your prisma client.

```
npm run prisma:generate
```

6. Seed your database with all of the planet data.

```
npm run db:import
```

7. If you're on Windows and for some reason the `sh` script throws an error, use the script below to remove invisible newline chars. The most likely culprits are the `.env` and `import.sh` files.

```
sed -i 's/\r$//' <filename>
```

8. You're good to go. Run the script below and go to localhost:3000 to get started developing!

```
npm run dev
```
