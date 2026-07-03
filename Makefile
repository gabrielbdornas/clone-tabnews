phony: start stop clean image

start:
	docker compose up -d

exec:
	docker compose exec app bash

stop:
	docker compose stop

clean:
	docker compose down --rmi all --volumes --remove-orphans

image:
	docker compose up --build
