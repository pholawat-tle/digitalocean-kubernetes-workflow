# Deploying Docker Images to Kubernetes
This includes a github action that build and publixh docker images to docker hub and imperatively set the kubernetes on Digital Ocean to update the image

## Prerequisites
- Docker Hub Account
- Digital Ocean Account


## Usage
- Create GitHub Secret Environments ( DOCKER_USERNAME, DOCKER_PASSWORD, DIGITALOCEAN_ACCESS_TOKEN )
- Run the workflow from GitHub Actions tab

| App  | URL |
| ------------- | ------------- |
| React.js  | http://ingress-endpoint:80  |
| Express.js  | http://ingress-endpoint:80/api/  |
