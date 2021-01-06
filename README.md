docker build -t mycorp/leo:toolbox.latest .

docker run -itP --name toolbox --env-file toolbox.env --link postgres:dev_db -p 5000:5000 -p 8000:8000 mycorp/leo:toolbox.latest

User.create(email: 'admin@admin.com.br', password: 'test12')
