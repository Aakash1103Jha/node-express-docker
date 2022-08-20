build-image:
	docker image build . -t aakash1103jha/node-express-docker

run-image:
	docker run -p 4000:4000 --env-file ./.env aakash1103jha/node-express-docker:latest
up:
	docker-compose up --build