# Brand new toolboox

## Abstract
A bootstrap project to creating a back-office. It's based on Devise and Devise jwt in its backend; Furthermore, including a frontend with React.

## Getting started
  * Configure Devise to reset password(through action_mailer);
  * In config/environments/*.rb, change host in config.action_mailer.default_url_options to your host address;

## How to run in docker

### Build image
docker build -t mycorp/leo:toolbox.latest .

### Running container
docker run -itP --name toolbox --env-file toolbox.env --link postgres:dev_db -p 5000:5000 -p 8000:8000 mycorp/leo:toolbox.latest

## Create super admin in rails console
`User.create(user_name: 'super', role: 'super', email: 'super.admin@toolbox.com.br', password: 'test12')`
