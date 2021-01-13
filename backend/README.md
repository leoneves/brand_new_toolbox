## How to run locally
- docker run --name brand_new_toolbox -e POSTGRES_USER=devuser -e POSTGRES_PASSWORD='devuser12345' -d -p 5432:5432 postgres
- bundle e rails db:create
- bundle e rails db:migrate

## Create super admin in rails console
`User.create(user_name: 'super', role: 'super', email: 'super.admin@toolbox.com.br', password: 'test12')`
