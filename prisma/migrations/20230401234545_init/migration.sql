-- CreateEnum
CREATE TYPE "planetNamesEnum" AS ENUM ('Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto');

-- CreateEnum
CREATE TYPE "planetTypesEnum" AS ENUM ('solid', 'gas');

-- CreateTable
CREATE TABLE "moons" (
    "moonId" SERIAL NOT NULL,
    "planetName" "planetNamesEnum" NOT NULL,
    "moonName" TEXT NOT NULL,
    "nameHistory" TEXT NOT NULL,
    "yearDiscovered" INTEGER NOT NULL,
    "diameter" INTEGER NOT NULL,

    CONSTRAINT "moons_pkey" PRIMARY KEY ("moonId")
);

-- CreateTable
CREATE TABLE "planets" (
    "planetName" "planetNamesEnum" NOT NULL,
    "diameter" INTEGER NOT NULL,
    "distance" DECIMAL NOT NULL,
    "planetType" "planetTypesEnum" NOT NULL,
    "visibleRings" BOOLEAN NOT NULL,
    "yearDiscovered" INTEGER NOT NULL,
    "temperature" INTEGER NOT NULL,
    "funFact1" TEXT NOT NULL,
    "funFact2" TEXT NOT NULL,
    "funFact3" TEXT NOT NULL,

    CONSTRAINT "planets_pk" PRIMARY KEY ("planetName")
);

-- AddForeignKey
ALTER TABLE "moons" ADD CONSTRAINT "moons_fk0" FOREIGN KEY ("planetName") REFERENCES "planets"("planetName") ON DELETE NO ACTION ON UPDATE NO ACTION;
