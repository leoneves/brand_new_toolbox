#!/bin/bash

(cd ./backend
    echo "RUNNING MIGRATIONS. RAILS_ENV: $RAILS_ENV"
    bundle exec rake db:create
    if [ "$RAILS_ENV" = "production" ] || [ "$RAILS_ENV" = "staging" ]; then
        bundle exec rake db:migrate RAILS_ENV=migration
    else
        bundle exec rake db:migrate
    fi
)

exec "$@"
