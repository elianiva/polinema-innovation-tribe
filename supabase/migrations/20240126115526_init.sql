CREATE TABLE "public"."profiles"
(
  "id"         uuid         NOT NULL DEFAULT uuid_generate_v4(),
  "email"      text         NOT NULL,
  "username"   text         NOT NULL,
  "fullname"   text         NOT NULL,
  "bio"        text         NULL,
  "picture"     text         NULL,
  "role"       text         NOT NULL DEFAULT 'user',       -- possible values: user, admin
  "provider"   text         NOT NULL DEFAULT 'credential', -- possible values: credential, oauth
  "created_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "profiles_email_key" ON "public"."profiles" ("email");
CREATE UNIQUE INDEX "profiles_username_key" ON "public"."profiles" ("username");

CREATE TABLE "public"."ideas"
(
  "id"          uuid         NOT NULL DEFAULT uuid_generate_v4(),
  "title"       text         NOT NULL,
  "problem"     text         NOT NULL,
  "solution"    text         NOT NULL,
  "description" text         NOT NULL,
  "created_at"  timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at"  timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "user_id"     uuid         NOT NULL,
  PRIMARY KEY ("id")
);

ALTER TABLE "public"."ideas"
  ADD FOREIGN KEY ("user_id") REFERENCES "public"."profiles" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

CREATE TABLE "public"."comments"
(
  "id"         uuid         NOT NULL DEFAULT uuid_generate_v4(),
  "content"    text         NOT NULL,
  "created_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "user_id"    uuid         NOT NULL,
  "idea_id"    uuid         NOT NULL,
  PRIMARY KEY ("id")
);

ALTER TABLE "public"."comments"
  ADD FOREIGN KEY ("user_id") REFERENCES "public"."profiles" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."comments"
  ADD FOREIGN KEY ("idea_id") REFERENCES "public"."ideas" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

CREATE TABLE "public"."suggestions"
(
  "id"         uuid         NOT NULL DEFAULT uuid_generate_v4(),
  "name"       text         NOT NULL,
  "suggestion" text         NOT NULL,
  "created_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id")
);

-- automatically insert data whenever new user signs in using oauth
CREATE FUNCTION public.handle_new_user()
  RETURNS TRIGGER
  LANGUAGE plpgsql
  SECURITY DEFINER SET search_path = public
AS
$$
BEGIN
  INSERT INTO public.profiles
  (id,
   email,
   username,
   fullname,
   bio,
   picture,
   role,
   provider)
  VALUES (new.id,
          new.email,
          new.raw_user_meta_data ->> 'username'::text,
          new.raw_user_meta_data ->> 'name'::text,
          new.raw_user_meta_data ->> 'bio'::text,
          new.raw_user_meta_data ->> 'picture'::text,
          'user',
          'oauth');
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT
  ON auth.users
  FOR EACH ROW
EXECUTE PROCEDURE public.handle_new_user();