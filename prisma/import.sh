#!/bin/sh

set -e

if [ -f "$PWD"/.env ]; then
# shellcheck source=/dev/null
  . "$PWD"/.env
fi

if [ -n "$DEV_DATABASE_URL" ]; then
  psql "$DEV_DATABASE_URL" \
    -f "$PWD"/prisma/data.sql
else
  echo 'no DATABASE_URL environment variable set' 1>&2
  exit 1
fi
