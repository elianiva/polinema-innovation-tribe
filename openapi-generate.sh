#!/usr/bin/env bash

 pnpm dlx openapi-typescript@5.4.0 $(grep NEXT_PUBLIC_SUPABASE_URL .env | cut -d '=' -f2)/rest/v1/?apikey=$(grep NEXT_PUBLIC_SUPABASE_ANON_KEY .env | cut -d '=' -f2) --output ./src/types/generated-types.ts