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
values ('Mars', 'Phobos', 'Named after a mythological son of Ares -- the greek counterpart to the Roman god, Mars. Phobos means "fear".', 1877, 23);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Mars', 'Deimos', 'Named after a mythological sun of Ares -- the greek countpart to the Roman god, Mars. Deomos means "dread".', 1877, 12);

-- Jupiter --
insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Metis', 'Named after the mythological Metis, who was Zeus''s first wife.', 1979, 43);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Adrastea', 'Named after the Greek nymph Adrastea.', 1979, 16);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Amalthea', 'Named after a naiad who nursed the newborn Jupiter.', 1892, 167);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Thebe', 'Named after his Greek equivalent, Zeus.', 1892, 99);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Io', 'Named after a maiden who was loved by Zeus.', 1610, 3643);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Europa', 'Named after a woman who was abducted by Zeus.', 1610, 3122);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Ganymede', 'Named after the Trojan prince desired by Zeus to be the cupbearer for the gods.', 1610, 5268);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Callisto', 'Named after a woman turned into a bear by Zeus.', 1610, 4821);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Themisto', 'Named after the mother of Zeus, Ister.', 1975, 9);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Leda', 'Named after Leda from greek mythology.', 1974, 22);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Ersa', 'Named after Ersa, the sister of Pandia.', 2018, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2018 J 2', 'TBD', 2018, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Himalia', 'Named after Himalia, the nymph of the Island of Rhodes.', 1904, 140);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Pandia', 'Named after Pandia, the daughter of Zeus and Selene.', 2017, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Lysithea', 'Named after one of Zeus'' lovers.', 1938, 42);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Elara', 'Named after one of Zeus'' lovers.', 1905, 80);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2011 J 3', 'TBD', 2011, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Dia', 'Named after the Dia, the daughter of Eioneus.', 2000, 4);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2018 J 4', 'TBD', 2018, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Carpo', 'Named after Carpo, one of the Horae and daughter of Zeus.', 2003, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Valetudo', 'Named after Jupiter''s great grandaughter, goddess of health and hygiene.', 2016, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Euporie', 'Named after Euporie, one of the Horae and daughter of Zeus.', 2001, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 18', 'TBD', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Eupheme', 'Named after Eupheme, ancient Greek spirit of good omen and praise.', 2, 2003);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2021 J 3', 'TBD', 2021, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2010 J 2', 'TBD', 2010, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2016 J 1', 'TBD', 2016, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Mneme', 'Named after one of the Muses.', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Euanthe', 'Named after the mother of Graces by Zeus.', 2001, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 16', 'TBD', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Harpalyke', 'Named after a woman from Greek Mythology who was transformed into the bird Chalcis.', 2000, 4);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Orthosie', 'Named after one of the Horae -- a Titaness.', 2001, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Ananke', 'Named after the personifcation of necessity and mother of the Morirai.', 1951, 29);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2022 J 3', 'TBD', 2022, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'locaste', 'TBD', 2000, 5);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Hermippe', 'Named for one of the many lovers of Zeus.', 2001, 4);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2017 J 9', 'TBD', 2017, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Philophyrosyne', 'Named after the Greek spirit of welcome, friendliness, and kindness.', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2016 J 3', 'TBD', 2016, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2016 J 1', 'TBD', 2016, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Pasithee', 'Named after one the Graces.', 2001, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2017 J 8', 'TBD', 2017, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2021 J 6', 'TBD', 2021, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 24', 'TBD', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Euryodome', 'Named after one of the Graces.', 2001, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2011 J 2', 'TBD', 2011, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 4', 'TBD', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Chaldene', 'Named for the mother of Solymos by Zeus.', 2000, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2017 J 2', 'TBD', 2017, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Kalilchore', 'Named after one of the Muses.', 2000, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Erinome', 'Named for a chaste young women whom Venus causes to fall in love with Jupiter.', 2022, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Kale', 'Named after one of the Graces.', 2021, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Eirene', 'Named after the goddess of peace.', 2003, 4);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Aitne', 'Named after the greek for "I burn".', 2001, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Arche', 'Named after one of Zeus''s daughters.', 2002, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Taygete', 'Named after one of Zeus'' lovers.', 2000, 5);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2016 J 4', 'TBD', 2016, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2011 J 1', 'TBD', 2011, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Carme', 'Named for the mother of Britomartis by the Roman god Jupiter.', 1938, 47);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Herse', 'Named for a daughter of Selene and Zeus.', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 19', 'TBD', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2010 J 1', 'TBD', 2010, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 9', 'TBD', 2003, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2017 J 6', 'TBD', 2017, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2017 J 6', 'TBD', 2017, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Kalyke', 'Named for the mother of Endymion by Zeus.', 2000, 7);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Hegemone', 'Named for one of the Graces', 2003, 3);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2018 J 3', 'TBD', 2018, 1);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2021 J 5', 'TBD', 2021, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Pasiphae', 'Named after the wife on Minos and mother of the Minotaur.', 1908, 58);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Sponde', 'Named for one of the Horae.', 2001, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 10', 'TBD', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Megaclite', 'Named for one of the adulterous conquests of the Roman god Jupiter.', 2000, 5);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Cyllene', 'Named for a nymph who was a daughter of Zeus.', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Sinope', 'Named for a nymph who outsmarted a smitten Zeus.', 1914, 35);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2017 J 1', 'TBD', 2017, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Aoede', '', 2003, 4);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Autonoe', 'Named after on the Muses.', 2001, 4);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Callirrhoe', 'Named after the daughter of the river god Achelous.', 1999, 10);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'S/2003 J 23', 'TBD', 2003, 2);

insert into "moons" ("planetName", "moonName", "nameHistory", "yearDiscovered", "diameter")
values ('Jupiter', 'Kore', 'Named after Persephone -- Kore is another name for her.', 2003, 2);

-- Saturn --

INSERT INTO "moons" ("planetName", "moonName", "nameHistory", "diameter", "yearDiscovered") 
VALUES 
    ('Saturn', 'S/2009 S 1', 'TBD', 1, 2009),
	('Saturn', '(moonlets)', 'Small little dudes!', 1 ,2006),
	('Saturn', 'Pan', 'Named after the Pagan Sex God or the Greek God of Shepherds.', 28, 1990),
	('Saturn', 'Daphnis', 'Named after a love-struck shepherd.', 8, 2005),
	('Saturn', 'Atlas', 'Named after the son of Titan, Atlas.', 30, 1980),
	('Saturn', 'Prometheus', 'Named after Prometheus, a Titan in Greek Mythology.', 86 ,1980),
	('Saturn', 'Pandora', 'Named after Pandora from Greek Mythology.', 81, 1980),
	('Saturn', 'Epimetheus', 'Named after Epimetheus, the brother of Prometheus.', 116 ,1966),
	('Saturn', 'Janus', 'Named after the two-faced Roman god Janus.', 179, 1966),
	('Saturn', 'Aegaeon', 'Named after one of the hekatonkheires.', 1, 2008),
	('Saturn', 'Mimas', 'Named after the offspring of Gaia from Greek Mythology.', 396, 1789),
	('Saturn', 'Methone', 'Named after one of the seven Alkyonides.', 3, 2004),
	('Saturn', 'Anthe', 'Named after one of the seven Alykonides.', 1,  2007),
	('Saturn', 'Pallene', 'Named after one of the seven Alykonides.', 4,  2004),
	('Saturn', 'Enceladus', 'Named after a giant from Greek Mythology.', 504, 1789),
	('Saturn', 'Tethys', 'Named after the titan Tethys from Greek Mythology.', 1062, 1684.),
	('Saturn', 'Telesto', 'Named after an Oceanid from Greek Mythology.',  25, 1980),
	('Saturn', 'Calypso',  'Named after the woman who fell in love with Odysseus in Greek Mythology.', 21, 1980);
-- 	('†Dione','1122.8
-- (1128 × 1123 × 1119)',1684.0),
-- 	('Helene','35.2
-- (43 × 38 × 26)',1980.0),
-- 	('Polydeuces','2.6
-- (3.0 × 2.4 × 1.0)',2004.0),
-- 	('†Rhea','1527.6
-- (1530 × 1526 × 1525)',1672.0),
-- 	('♠Titan','5149.46
-- (5149 × 5149 × 5150)',1655.0),
-- 	('Hyperion','270.0
-- (360 × 266 × 205)',1848.0),
-- 	('†Iapetus','1468.6
-- (1491 × 1491 × 1424)',1671.0),
-- 	('‡S/2019 S 1','≈ 3',2019.0),
-- 	('‡Kiviuq','≈ 16',2000.0),
-- 	('‡Ijiraq','≈ 12',2000.0),
-- 	('♣Phoebe','213.0
-- (219 × 217 × 204)',1898.0),
-- 	('‡Paaliaq','≈ 22',2000.0),
-- 	('♣Skathi','≈ 8',2000.0),
-- 	('♣S/2007 S 2','≈ 4',2007.0),
-- 	('♣S/2004 S 37','≈ 4',2004.0),
-- 	('♦Albiorix','28.6',2000.0),
-- 	('♦Bebhionn','≈ 6',2004.0),
-- 	('‡S/2004 S 29','≈ 4',2004.0),
-- 	('‡S/2004 S 31','≈ 4',2004.0),
-- 	('♦Erriapus','≈ 10',2000.0),
-- 	('♣Skoll','≈ 6',2006.0),
-- 	('‡Tarqeq','≈ 7',2007.0),
-- 	('‡Siarnaq','39.3',2000.0),
-- 	('♦Tarvos','≈ 15',2000.0),
-- 	('♣Hyrrokkin','≈ 8',2004.0),
-- 	('♣Greip','≈ 6',2006.0),
-- 	('♣S/2004 S 13','≈ 3',2004.0),
-- 	('♣Mundilfari','≈ 7',2000.0),
-- 	('♣S/2006 S 1','≈ 5',2006.0),
-- 	('♣Gridr','≈ 4',2004.0),
-- 	('♣Bergelmir','≈ 6',2004.0),
-- 	('♣Jarnsaxa','≈ 6',2006.0),
-- 	('♣Narvi','≈ 7',2003.0),
-- 	('♣Suttungr','≈ 7',2000.0),
-- 	('♣S/2004 S 17','≈ 3',2004.0),
-- 	('♣S/2007 S 3','≈ 5',2007.0),
-- 	('♣Hati','≈ 6',2004.0),
-- 	('♣S/2004 S 12','≈ 4',2004.0),
-- 	('♣Eggther','≈ 4',2004.0),
-- 	('♣Farbauti','≈ 5',2004.0),
-- 	('♣Thrymr','≈ 7',2000.0),
-- 	('♣Bestla','≈ 7',2004.0),
-- 	('♣S/2004 S 7','≈ 5',2004.0),
-- 	('♣Angrboda','≈ 3',2004.0),
-- 	('♣Aegir','≈ 6',2004.0),
-- 	('♣Beli','≈ 3',2004.0),
-- 	('♣Gerd','≈ 3',2004.0),
-- 	('♣Gunnlod','≈ 4',2004.0),
-- 	('♣S/2006 S 3','≈ 5',2006.0),
-- 	('♣Skrymir','≈ 4',2004.0),
-- 	('♣S/2004 S 28','≈ 4',2004.0),
-- 	('♣Alvaldi','≈ 4',2004.0),
-- 	('♣Kari','≈ 7',2006.0),
-- 	('♣Geirrod','≈ 4',2004.0),
-- 	('♣Fenrir','≈ 4',2004.0),
-- 	('♣Surtur','≈ 6',2006.0),
-- 	('♣Loge','≈ 6',2006.0),
-- 	('♣Ymir','≈ 18',2000.0),
-- 	('♣S/2004 S 21','≈ 3',2004.0),
-- 	('♣S/2004 S 39','≈ 2',2004.0),
-- 	('♦S/2004 S 24','≈ 3',2004.0),
-- 	('♣S/2004 S 36','≈ 3',2004.0),
-- 	('♣Thiazzi','≈ 4',2004.0),
-- 	('♣S/2004 S 34','≈ 3',2004.0),
-- 	('♣Fornjot','≈ 6',2004.0),
-- 	('♣S/2004 S 26','≈ 4',2004.0);

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