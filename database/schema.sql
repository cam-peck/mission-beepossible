DROP SCHEMA "public" cascade;
create schema "public";

CREATE TYPE planet AS ENUM ('Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto');
CREATE TYPE planetType AS ENUM ('solid', 'gas');
CREATE TABLE "public"."planets" (
	"planetName" planet NOT NULL,
	"diameter" int NOT NULL,
	"distance" decimal NOT NULL,
	"planetType" planetType NOT NULL,
	"yearDiscovered" int NOT NULL,
	"temperature" int NOT NULL,
	"funFact1" text NOT NULL,
	"funFact2" text NOT NULL,
	"funFact3" text NOT NULL,
	CONSTRAINT "planets_pk" PRIMARY KEY ("planetName")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."moons" (
	"moonId" serial NOT NULL,
	"planetName" planet NOT NULL,
	"moonName" TEXT NOT NULL,
	"nameHistory" TEXT NOT NULL,
	"yearDiscovered" int NOT NULL,
	"size" int NOT NULL
) WITH (
  OIDS=FALSE
);

ALTER TABLE "moons" ADD CONSTRAINT "moons_fk0" FOREIGN KEY ("planetName") REFERENCES "planets"("planetName");
