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

INSERT INTO "moons" ("planetName", "moonName", "nameHistory", "diameter", "yearDiscovered")
VALUES
('Saturn',	'S/2009 S 1',	'TBD',	300,	2009),
('Saturn',	'(moonlets)',	'TBD',	1,	2006),
('Saturn',	'Pan',	'The god of shepherds, Pan',	28.2,	1990),
('Saturn',	'Daphnis',	'Named after Daphnis, a shepherd, pipes player, and pastoral poet',	8,	2005),
('Saturn',	'Atlas',	"Named after Atlas because the moon appears to hold the rings on its shoulders",	18.77,	1980),
('Saturn',	'Prometheus',	'Named after the Titan god of fire',	53.56,	1980),
('Saturn',	'Pandora',	'Named after the first human woman created by Hephaestus',	50.58,	1980),
('Saturn',	'Epimetheus',	'Named after the brother of Prometheus',	72.2,	1966),
('Saturn',	'Janus',	'Named after the god of beginnings and endings',	111.23,	1966),
('Saturn',	'Aegaeon',	'Named after Aegaeon, one of the Hecatoncheires',	0.66,	2008),
('Saturn',	'Mimas',	'Named after one of the Giants',	246.31,	1789),
('Saturn',	'Methone',	'Named after one of the Alkyonides, daughters of the giant Alkyoneus',	1.8,	2004),
('Saturn',	'Anthe',	'Named after one of the Alkyonides, daughters of the giant Alkyoneus',	1.12,	2007),
('Saturn',	'Pallene',	'Named after one of the Alkyonides, daughters of the giant Alkyoneus',	3,	2004),
('Saturn',	'Enceladus',	'Named after one of the Giants',	313.3,	1789),
('Saturn',	'Tethys',	'Named after the titaness, Tethys',	659.9,	1684),
('Saturn',	'Telesto',	'Named after an Oceanid, one of the water-nymph daughters of Oceanus and Tethys',	15.41,	1980),
('Saturn',	'Calypso',	'Named after a nymph on the island of Ogygia',	22,	1980),
('Saturn',	'Dione',	'Named after one of the titanesses',	697.68,	1684),
('Saturn',	'Helene',	'Named after Helen of Troy, the granddaughter of Cronus',	35.2,	1980),
('Saturn',	'Polydeuces',	'Named after Pollux, twin brother of Castor (Polydeuces is another name for Pollux)',	2.6,	2004),
('Saturn',	'Rhea',	'Named after one of the titanesses',	949.21,	1672),
('Saturn',	'Titan',	'Named after the Titans, race of large beings',	3199.7,	1655),
('Saturn',	'Hyperion',	'Named after the Titan god of sun',	167.77,	1848),
('Saturn',	'Iapetus',	'Named after the Titan Iapetus',	912.79,	1671),
('Saturn',	'S/2019 S 1',	'TBD',	3,	2019),
('Saturn',	'Kiviuq',	'Named after a hero in Inuit epic stories',	16,	2000),
('Saturn',	'Ijiraq',	'Named after a shapeshifter in Inuit mythology',	12,	2000),
('Saturn',	'Phoebe',	'Named after the Titaness, Phoebe',	132.35,	1898),
('Saturn',	'Paaliaq',	'Named after a giant from Inuit mythology',	22,	2000),
('Saturn',	'Skathi',	'Named after a figure in Norse methology to diversify the largely Greek and Roman names',	8,	2000),
('Saturn',	'S/2007 S 2',	'TBD',	4,	2007),
('Saturn',	'S/2004 S 37',	'TBD',	4,	2004),
('Saturn',	'Albiorix',	'Named after a Gallic giant who was considered to be the king of the world',	28.6,	2000),
('Saturn',	'Bebhionn',	'Named after an early Irish goddess of birth',	6,	2004),
('Saturn',	'S/2004 S 29',	'TBD',	4,	2004),
('Saturn',	'S/2004 S 31',	'TBD',	4,	2004),
('Saturn',	'Erriapus',	'Named after a giant in Gaulish mythology',	10,	2000),
('Saturn',	'Skoll',	'Named after Skoll, a wolf in Norse mythology that chases the sun',	6,	2006),
('Saturn',	'Tarqeq',	'Named after Tarqeq, the Inuit moon god',	7,	2007),
('Saturn',	'Siarnaq',	'Named after Siarnaq (also known as Sedna), the Inuit goddess of the sea',	39.3,	2000),
('Saturn',	'Tarvos',	'Named after  Tarvos, a ddeity depicted as a bull god carrying three cranes from Gaulish mythology',	15,	2000),
('Saturn',	'Hyrrokkin',	'Named after a giantess from Norse mythology who launched Baldrs funteral ship',	8,	2004),
('Saturn',	'Greip',	'Named after a giantess in Norse mythology',	6,	2006),
('Saturn',	'S/2004 S 13',	'TBD',	3,	2004),
('Saturn',	'Mundilfari',	'Named after Mundilfari, the father of the sun goddess Sol and moon god Mani from Norse mythology',	7,	2000),
('Saturn',	'S/2006 S 1',	'TBD',	5,	2006),
('Saturn',	'Gridr',	'Named after a jotunn, a type of supernatural being in Norse mythology',	4,	2004),
('Saturn',	'Bergelmir',	'Named after a giant from Norse mythology and the grandson of Ymir',	6,	2004),
('Saturn',	'Jarnsaxa',	'Named after a giantess in Norse mythology',	6,	2006),
('Saturn',	'Narvi',	'Named after a giant in Norse Mythology',	7,	2003),
('Saturn',	'Suttungr',	'Named after a giant who once owned the meat of poetry',	7,	2000),
('Saturn',	'S/2004 S 17',	'TBD',	3,	2004),
('Saturn',	'S/2007 S 3',	'TBD',	5,	2007),
('Saturn',	'Hati',	'Named after a giant wolf from Norse mythology, twin brother of Skoll',	6,	2004),
('Saturn',	'S/2004 S 12',	'TBD',	4,	2004),
('Saturn',	'Eggther',	'Named after a jotunn from Norse mythology, a herder who raises monstrous wolves',	4,	2004),
('Saturn',	'Farbauti',	'Named after Farbauti, father of Loki',	5,	2004),
('Saturn',	'Thrymr',	'Named after the king of the jotnar who once stole Thors hammer Mjolnir to extort the gods into giving him Freyja as a wife',	7,	2000),
('Saturn',	'Bestla',	'Named after Bestla, a frost giantess from Norse mythology, mother of Odin',	7,	2004),
('Saturn',	'S/2004 S 7',	'TBD',	5,	2004),
('Saturn',	'Angrboda',	'Named after the consort of Loki and mother of Fenrir, Jormungander, and Hel in Norse Mythology',	3,	2004),
('Saturn',	'Aegir',	'Named after a giant of Norse mythology, the personification of tranquil seas',	6,	2004),
('Saturn',	'Beli',	'Named after a jotunn from Norse mythology, killed by Freyr with the antler of a stag',	3,	2004),
('Saturn',	'Gerd',	'Named after the wife of Freyr and personification of fertile soil in Norse Mythology',	3,	2004),
('Saturn',	'Gunnlod',	'Named after the daughter of Suttungr in Norse mythology',	4,	2004),
('Saturn',	'S/2006 S 3',	'TBD',	5,	2006),
('Saturn',	'Skrymir',	'Named after Skrymir, master of illusions from Norse mythology',	4,	2004),
('Saturn',	'S/2004 S 28',	'TBD',	4,	2004),
('Saturn',	'Alvaldi',	'Named after a rich jotunn from Norse mythology',	4,	2004),
('Saturn',	'Kari',	'Named after Kari, son of Fornjot, personification of wind from Norse mythology',	7,	2006),
('Saturn',	'Geirrod',	'Named after a jotunn who is an enemy of , and killed by, Thor in Norse mythology',	4,	2004),
('Saturn',	'Fenrir',	'Named after Fenrisulfr, a giant wolf from Norse mythology',	4,	2004),
('Saturn',	'Surtur',	'Named after Surt, leader of the fire giants in Norse mythology',	6,	2006),
('Saturn',	'Loge',	'Named after Logi, a fire giant from Norse mythology',	6,	2006),
('Saturn',	'Ymir',	'Named after Ymir, ancestor of all frost giants in Norse mythology',	18,	2000),
('Saturn',	'S/2004 S 21',	'TBD',	3,	2004),
('Saturn',	'S/2004 S 39',	'TBD',	2,	2004),
('Saturn',	'S/2004 S 24',	'TBD',	3,	2004),
('Saturn',	'S/2004 S 36',	'TBD',	3,	2004),
('Saturn',	'Thiazzi',	'Named after son of Alvaldi who kidnapped the goddess Iounn in Norse mythology',	4,	2004),
('Saturn',	'S/2004 S 34',	'TBD',	3,	2004),
('Saturn',	'Fornjot',	'Named after a giant in Norse mythology',	6,	2004),
('Saturn',	'S/2004 S 26',	'TBD',	4,	2004)

-- 'Uranus' -- (unfinished) https://en.wikipedia.org/wiki/Moons_of_'Uranus'

INSERT INTO "moons" ("planetName", "moonName", "nameHistory", "diameter", "yearDiscovered")
VALUES
  ('Uranus',	'Cordelia',	'Daughter of Lear in King Lear',	40.2,	1986),
('Uranus',	'Ophelia',	'Daughter of Polonius and fiancée of Hamlet in Hamlet',	42.8,	1986),
('Uranus',	'Bianca',	'Daughter of Baptista in The Taming of the Shrew',	54,	1986),
('Uranus',	'Creddia',	'Cressida, female protagonist of Troilus and Cressida',	79.6,	1986),
('Uranus',	'Desdemona',	'Wife of Othello in Othello',	64,	1986),
('Uranus',	'Juliet',	'Female protagonist of Romeo and Juliet',	93.6,	1986),
('Uranus',	'Portia',	'Portia, wife of Brutus in Julius Caesar',	135.2,	1986),
('Uranus',	'Rosalind',	'Daughter of the banished duke in As You Like It',	72,	1986),
('Uranus',	'Cupid',	'Minor character in Timon of Athens',	18,	2003),
('Uranus',	'Belinda',	'Protagonist of The Rape of the Lock',	80.6,	1986),
('Uranus',	'Perdita',	"Daughter of Leontes and Hermione in The Winter's Tale",	30,	1999),
('Uranus',	'Puck',	"Puck, a mischievous spirit in A Midsummer Night's Dream",	162,	1985),
('Uranus',	'Mab',	'Midwife of the fairies in Romeo and Juliet',	25,	2003),
('Uranus',	'Miranda',	'Miranda, lead character in The Tempest',	471.6,	1948),
('Uranus',	'Ariel',	'Sylph (a type of air spirit) in The Rape of the Lock',	1157.8,	1851),
('Uranus',	'Umbriel',	'Evil spirit in The Rape of the Lock',	1169.4,	1851),
('Uranus',	'Titania',	"Queen of the fairies in A Midsummer Night's Dream",	1576.8,	1787),
('Uranus',	'Oberon',	"King of the fairies in A Midsummer Night's Dream",	1522.8,	1787),
('Uranus',	'Francisco',	'Lord in The Tempest',	22,	2003),
('Uranus',	'Caliban',	'Caliban, the monstrous slave in The Tempest',	72,	1997),
('Uranus',	'Stephano',	'Drunken butler in The Tempest',	32,	1999),
('Uranus',	'Trinculo',	'Jester in The Tempest',	18,	2001),
('Uranus',	'Sycorax',	'Mother of Caliban in The Tempest',	165,	1997),
('Uranus',	'Margaret',	'Gentlewoman attending on Hero in Much Ado About Nothing',	20,	2003),
('Uranus',	'Prospero',	'Rightful Duke of Milan in The Tempest',	50,	1999),
('Uranus',	'Setebos',	'Deity worshipped by Sycorax in The Tempest',	48,	1999),
('Uranus',	'Ferdinand',	'Son of the King of Naples in The Tempest',	20,	2003)

-- Neptune -- (unfinished) https://en.wikipedia.org/wiki/Moons_of_Saturn

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Neptune', 'Naiad', '', 1989, 60);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Neptune', 'Thalassa', '', 1989, 81);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Neptune', 'Depsina', '', 1989, 156);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Neptune', 'Galatea', '', 1989, 175);

INSERT INTO "moons" ("planetName", "moonName", "nameHistory", "diameter", "yearDiscovered")
VALUES
('Neptune',	'Naiad',	'The Naiads, female spirits (nymphs) associated with bodies of freshwater',	66,	1989),
('Neptune',	'Thalassa',	'The sea goddess Thalassa',	82,	1989),
('Neptune',	'Despina',	'The nymph Despoina',	150,	1989),
('Neptune',	'Galatea',	'Galatea, one of the Nereids',	174.8,	1989),
('Neptune',	'Larissa',	'Larissa, nymph and lover of Poseidon',	194,	1981),
('Neptune',	'Hippocamp',	'Hippocampus, a mythical creature associated with Poseidon',	18,	2013),
('Neptune',	'Proteus',	'The shapeshifting sea god Proteus',	420,	1989),
('Neptune',	'Triton',	'The sea god Triton',	2706.8,	1846),
('Neptune',	'Nereid',	'The Nereids, a group of sea nymphs',	340,	1949),
('Neptune',	'Halimede',	'Halimede, one of the Nereids',	62,	2002),
('Neptune',	'Sao',	'Sao, one of the Nereids',	40,	2002),
('Neptune',	'Laomedeia',	'Laomedeia, one of the Nereids',	40,	2002),
('Neptune',	'Psamathe',	'Psamathe, one of the Nereids',	38,	2003),
('Neptune',	'Neso',	'Neso, one of the Nereids',	60,	2002)
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
