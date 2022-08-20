build-image:
	docker image build . -t aakash1103jha/node-express-docker

run-image:
	docker run -p 4000:4000 --env-file ./.env aakash1103jha/node-express-docker:latest

up-dev:
	docker-compose up --build

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
	
down:
	docker-compose down