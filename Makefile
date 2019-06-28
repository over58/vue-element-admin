restart:
	git pull origin master
	cnpm install
	npm run build
	docker rm -f ele-admin
	docker rmi ele-admin:latest
	docker build -t ele-admin:latest  .
	docker run -d -p 8080:80 --name ele-admin ele-admin:latest

start:
	git pull origin master
	cnpm install
	npm run build
	docker build -t ele-admin:latest  .
	docker run -d -p 8080:80 --name ele-admin ele-admin:latest
rm:
	docker rm -f ele-admin
rmi:
	docker rmi ele-admin:latest
commit-update:
	git add .
	git commit -m 'update'
	git push origin master
commit-add:
	git add .
	git commit -m 'add'
	git push origin master
