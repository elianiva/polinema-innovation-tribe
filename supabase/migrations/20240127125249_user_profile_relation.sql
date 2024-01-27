ALTER TABLE "public"."profiles"
  ADD FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
