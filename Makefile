phony: start stop clean image

start:
	docker compose up -d

stop:
	docker compose stop

clean:
	docker compose down --rmi all --volumes --remove-orphans

image:
	docker compose up --build
