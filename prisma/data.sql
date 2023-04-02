-- Planet Data --
-- diameter: kilometers
-- distance: million kilometers (10^6)
-- temperature: Celsius

insert into "planets" ("planetName", "diameter", "yearDiscovered", "distance", "planetType",  "temperature", "funFact1", "funFact2", "funFact3", "visibleRings")
values ('Mercury', 4879, 1610, 57.9, 'solid',  167, 'Mercury is the fastest planet in the solar system. It travels at nearly 47 km / second. Zooooooom!', 'No life likely here -- the solar radiation and heat are pretty unfriendly...', 'We have a current mission out for mercury -- the BepiColombo!', false);

insert into "planets" ("planetName", "diameter", "yearDiscovered", "distance", "planetType",  "temperature", "funFact1", "funFact2", "funFact3", "visibleRings")
values ('Venus', 12104, 1610, 108.2, 'solid',  464, 'Venus is the second brightest object in the night sky -- the moon is first!', 'Venus was named after the Roman goddess of love and beauty.', 'Venus spins the opposite direction of Earth and most other planets -- this makes its day longer than its year!', false);

insert into "planets" ("planetName", "diameter", "yearDiscovered", "distance", "planetType",  "temperature", "funFact1", "funFact2", "funFact3", "visibleRings")
values ('Earth', 12756, 1610, 149.6, 'solid',  15, 'Earth is the only planet with liquid water on the surface (for now!).', 'Most planets were named after Greek and Roman gods & goddesses, but we decided to name Earth after the ground. Lame.', 'Earth actually takes 23 hours, 56 minutes, and 4 seconds to rotate around its axis.', false);

insert into "planets" ("planetName", "diameter", "yearDiscovered", "distance", "planetType",  "temperature", "funFact1", "funFact2", "funFact3", "visibleRings")
values ('Mars', 6792, 1610, 228.0, 'solid',  -65, 'The government discovered Martians back in the 1930s. Very hush hush.', 'Gravity on Mars is 37% less than gravity on Earth. That means you could jump three times as high!', 'Mars has a huge volcano named the Olympus Mons. The volcano is 16 miles high -- three times the height of Mt. Everest!', false);

insert into "planets" ("planetName", "diameter", "yearDiscovered", "distance", "planetType",  "temperature", "funFact1", "funFact2", "funFact3", "visibleRings")
values ('Jupiter', 142984, 1610, 778.5, 'gas',  -110, 'Jupiter has rings -- they are just too faint to see very well.', 'Jupiter is seriously big. You could fit more than 1,300 Earths inside of it!', 'Jupiter''s Great Red Spot is a planetary sized storm that has been raging for centuries', false);

insert into "planets" ("planetName", "diameter", "yearDiscovered", "distance", "planetType",  "temperature", "funFact1", "funFact2", "funFact3", "visibleRings")
values ('Saturn', 120536, 1610, 1432.0, 'gas',  -140, 'Saturn moves around the sun VERY slowly. One year on Saturn is 29 Earth years.', 'Saturn spins on it''s axis quite quickly, though~! One day on Saturn is 10 hours and 14 minutes.', 'No standing on Saturn -- it''s made of gas!', true);

insert into "planets" ("planetName", "diameter", "yearDiscovered", "distance", "planetType",  "temperature", "funFact1", "funFact2", "funFact3", "visibleRings")
values ('Uranus', 51118, 1781, 2867.0, 'gas',  -195, 'An interesting fact about Uranus? You probably know better than I do...', 'Uranus has winds that reach up to 900 km/h (560 mph). Zooooom!', 'Uranus has only been visited once -- by NASA''s Voyager 2.', true);

insert into "planets" ("planetName", "diameter", "yearDiscovered", "distance", "planetType",  "temperature", "funFact1", "funFact2", "funFact3", "visibleRings")
values ('Neptune', 49528, 1846, 4515.0, 'gas',  -200, 'Gravity on neptune is only 17% stronger than Earth -- this is due to its mass:volume ratio.', 'Neptune gets its blue color from methane -- the same methane you produce after eating too many beans!', 'There was a big throwdown between Jean Joseph Le Verrier and John Couch Adams between who "officially" discovered Neptune. Both men got credit.', false);

insert into "planets" ("planetName", "diameter", "yearDiscovered", "distance", "planetType",  "temperature", "funFact1", "funFact2", "funFact3", "visibleRings")
values ('Pluto', 2376, 1930, 5906.4, 'solid', -225, 'Some people classify pluto as a dwarf planet. Some people also think the Earth is flat.', 'One year on pluto is 248 Earth years. Yikes.', 'Disney''s Pluto the dog was named after the planet!', false);

-- Moon Data --
-- Diameter: kilometers

-- Earth --
insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Earth', 'The Moon', 'Until Galileo found moons orbiting Jupiter in 1610, we thought Earth''s moon was the only moon!', 1609, 3475);

-- Mars --
insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Mars', 'Phobos', 'Like Deimos, Phobos was named after the mythological son of Ares -- the greek counterpart to the Roman god, Mars. Phobos means "fear".', 1877, 23);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Mars', 'Deimos', 'Like Phobos, Deimos was named after a mythological sun of Ares -- the greek countpart to the Roman god, Mars. Deomos means "dread".', 1877, 12);

-- Jupiter (unfinished) -- https://en.wikipedia.org/wiki/Moons_of_Jupiter
insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Metis', 'Named after the mythological Metis, who was Zeus''s first wife.', 1979, 43);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Adrastea', '', 1979, 16);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Amalthea', '', 1892, 167);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Thebe', '', 1892, 99);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Io', '', 1610, 3643);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Europa', '', 1610, 3122);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Ganymede', '', 1610, 5268);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Callisto', '', 1610, 4821);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Themisto', '', 1975, 9);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Leda', '', 1974, 22);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Ersa', '', 2018, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2018 J 2', '', 2018, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Himalia', '', 1904, 140);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Pandia', '', 2017, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Lysithea', '', 1938, 42);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Elara', '', 1905, 80);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2011 J 3', '', 2011, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Dia', '', 2000, 4);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2018 J 4', '', 2018, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Carpo', '', 2003, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Valetudo', '', 2016, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Euporie', '', 2001, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 18', '', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Eupheme', '', 2, 2003);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2021 J 3', '', 2021, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2010 J 2', '', 2010, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2016 J 1', '', 2016, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Mneme', '', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Euanthe', '', 2001, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 16', '', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Harpalyke', '', 2000, 4);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Orthosie', '', 2001, 2);

-- Saturn -- (unfinished) https://en.wikipedia.org/wiki/Moons_of_Saturn

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Saturn', 'S/2009 S 1', '', 2009, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Saturn', '(moonlets)', '', 2006, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Saturn', 'Pan', '', 1990, 28);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Saturn', 'Daphnis', '', 2005, 8);

-- Uranus -- (unfinished) https://en.wikipedia.org/wiki/Moons_of_Uranus

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Uranus', 'Cordelia', '', 1986, 43);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Uranus', 'Ophelia', '', 1986, 48);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Uranus', 'Bianca', '', 1986, 53);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Uranus', 'Cressida', '', 1986, 82);

-- Neptune -- (unfinished) https://en.wikipedia.org/wiki/Moons_of_Saturn

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Neptune', 'Naiad', '', 1989, 60);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Neptune', 'Thalassa', '', 1989, 81);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Neptune', 'Depsina', '', 1989, 156);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Neptune', 'Galatea', '', 1989, 175);

-- Pluto --

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Pluto', 'Charon', 'Charon, ferryman of the underworld.', 2009, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Pluto', 'Styx', 'The mythical river Styx.', 2006, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Pluto', 'Nix', 'Nyx, goddess of the night.', 1990, 28);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Pluto', 'Kerberos', 'Cerberus, guard of the underworld.', 2005, 8);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Pluto', 'Hydra', 'Hydra, guard of the underworld.', 2005, 8);