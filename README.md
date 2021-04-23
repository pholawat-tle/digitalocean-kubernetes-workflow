# Example Architecture in Kubernetes using nginx Ingress
This includes an Node.js app with Express framework boilerplate and a React app created using `npx create-react-app`

## Prerequisites ( to run on your local machine )
- [skaffold](https://skaffold.dev/)
- [NGINX Ingress](https://kubernetes.github.io/ingress-nginx/deploy/)
- Kubernetes cluster ( [minikube](https://minikube.sigs.k8s.io/docs/start/) or docker desktop's kubernetes )


## Usage
- Run `skaffold dev`

| App  | URL |
| ------------- | ------------- |
| React.js  | http://minikube-ip:80  |
| Express.js  | http://minikube-ip:80/api/  |
