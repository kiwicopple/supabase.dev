ALTER TABLE ONLY "public"."results"
    ADD COLUMN IF NOT EXISTS "labels" jsonb;

ALTER TABLE ONLY "public"."projects"
    ADD COLUMN IF NOT EXISTS "key" character varying;

CREATE UNIQUE INDEX IF NOT EXISTS idx_projects_key
    ON "public"."projects"("key");

ALTER TABLE "public"."projects" DROP CONSTRAINT IF EXISTS unique_projects_key;
ALTER TABLE "public"."projects"
    ADD CONSTRAINT unique_projects_key
    UNIQUE USING INDEX idx_projects_key;