FROM ruby:2.7.2-alpine
RUN apk update && apk add --no-cache supervisor
RUN mkdir -p /var/log/supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN apk add build-base libxml2-dev libxslt-dev postgresql postgresql-dev git curl openssh-client sqlite-dev tzdata shared-mime-info bash

# install node
RUN apk add --repository https://dl-cdn.alpinelinux.org/alpine/v3.13/main/ --no-cache \
  nodejs=14.15.4-r0 \
  nodejs-npm

RUN mkdir -p /app/backend
RUN mkdir -p /app/frontend
COPY backend /app/backend
COPY frontend /app/frontend

WORKDIR /app

RUN (cd ./backend \
        && chmod +x db-migrate.sh \
        && gem install bundler \
        && bundle config set without 'development test' \
        && bundle install)

RUN (cd ./frontend \
        && npm install \
        && npm install serve -g \
        && npm run build)

ENTRYPOINT ["/app/backend/db-migrate.sh"]

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
