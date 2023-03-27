DROP SCHEMA "public" cascade;
create schema "public";

CREATE TABLE "public"."test" (
    "userId" serial NOT NULL,
    "test" text NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
    OIDS=FALSE
)