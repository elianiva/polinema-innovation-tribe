CREATE TABLE "public"."tags"
(
  "id"         uuid         NOT NULL DEFAULT uuid_generate_v4(),
  "name"       text         NOT NULL,
  "color"      text         NOT NULL,
  "created_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "tags_name_key" ON "public"."tags" ("name");

CREATE TABLE "public"."idea_tags"
(
  "id"         uuid         NOT NULL DEFAULT uuid_generate_v4(),
  "idea_id"    uuid         NOT NULL,
  "tag_id"     uuid         NOT NULL,
  "created_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id")
);

ALTER TABLE "public"."idea_tags"
  ADD FOREIGN KEY ("idea_id") REFERENCES "public"."ideas" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."idea_tags"
  ADD FOREIGN KEY ("tag_id") REFERENCES "public"."tags" ("id") ON DELETE SET NULL ON UPDATE CASCADE;