CREATE TABLE "client" (
  "id" uuid PRIMARY KEY,
  "full_name" varchar,
  "email" varchar,
  "password" varchar
);

CREATE TABLE "case" (
  "id" uuid PRIMARY KEY,
  "user_id" uuid
);

CREATE TABLE "category" (
  "id" int PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "movie" (
  "id" int PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "movie_category" (
  "id" int PRIMARY KEY,
  "movie_id" int,
  "category_id" int
);

CREATE TABLE "preferences" (
  "id" SERIAL PRIMARY KEY,
  "case_id" uuid,
  "category" varchar NOT NULL
);

CREATE TABLE "suggest" (
  "id" uuid PRIMARY KEY,
  "case_id" uuid,
  "id_movie" int
);

ALTER TABLE "case" ADD FOREIGN KEY ("user_id") REFERENCES "client" ("id");

ALTER TABLE "movie_category" ADD FOREIGN KEY ("movie_id") REFERENCES "movie" ("id");

ALTER TABLE "movie_category" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

ALTER TABLE "preferences" ADD FOREIGN KEY ("case_id") REFERENCES "case" ("id");

ALTER TABLE "suggest" ADD FOREIGN KEY ("case_id") REFERENCES "case" ("id");

ALTER TABLE "suggest" ADD FOREIGN KEY ("id_movie") REFERENCES "movie" ("id");
