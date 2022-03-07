## Description

Deploy web service (nestjs, nextjs) using k8s and helm.

## Requirement

Make sure to install :

```text
docker, kubernetes, minikube, kubectl, kubens, helm
```

## Build images

```bash
cd server && docker build . -t nest-next-server
cd client && docker build . -t nest-next-client
```

## Deploy

in root folder run this command

```bash
helm install ./k8s --generate-name
```

## Hosting

### Local machine

Get IP :

```bash
minikube ip
192.168.39.11
```

Add hosts

```bash
sudo vim /etc/hosts
```

Add this in hosts file and save it.

```text
192.168.39.11 server.devops.local
192.168.39.11 client.devops.local
```

enjoy 😉🔥🚀, add stars for this repo if you like it
