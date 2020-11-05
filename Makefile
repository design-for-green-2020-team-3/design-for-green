.PHONY = all


all: update-source build run
update-source:
		git pull
build:
	sudo chown debian: -R api/output/ && docker-compose build && sudo chown 101:101 -R api/output/

run:
		docker-compose up -d

