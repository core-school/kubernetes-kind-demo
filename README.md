## Kubernetes intro

🍊 **k8s** means kubernetes. Why? There are 8 letters from k to s

Key concepts (extracted from k8s docs):

- **Pods**
  Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.
  A Pod (as in a pod of whales or pea pod) is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers. A Pod's contents are always co-located and co-scheduled, and run in a shared context. A Pod models an application-specific "logical host": it contains one or more application containers which are relatively tightly coupled. In non-cloud contexts, applications executed on the same physical or virtual machine are analogous to cloud applications executed on the same logical host.

<img src="https://pbs.twimg.com/media/DssHegKX4AA3pgY.jpg" width="400">

- **Services**
  An abstract way to expose an application running on a set of Pods as a network service.
  With Kubernetes you don't need to modify your application to use an unfamiliar service discovery mechanism. Kubernetes gives Pods their own IP addresses and a single DNS name for a set of Pods, and can load-balance across them.

<img src="https://s03.s3c.es/imag/_v0/771x420/f/c/6/trump-kim-corea-norte-junio-2019-reuters.jpg" width="400">

- **Deployments**
  A Deployment provides declarative updates for Pods and ReplicaSets.
  You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments.

<img src="https://images.daznservices.com/di/library/GOAL/37/9d/jose-mourinho-tottenham-2019-20_ru3bsoi0ft6iz3y1xfoa2rw0.png?t=1117018800&quality=60&w=1200&h=800" width="400">

## Create a kubernetes cluster with kind

```bash
kind create cluster
```

```bash
Creating cluster "kind" ...
 ✓ Ensuring node image (kindest/node:v1.20.2) 🖼
 ✓ Preparing nodes 📦
 ✓ Writing configuration 📜
 ✓ Starting control-plane 🕹️
 ✓ Installing CNI 🔌
 ✓ Installing StorageClass 💾
Set kubectl context to "kind-kind"
You can now use your cluster with:

kubectl cluster-info --context kind-kind
```

## Some commands to know

- `kubectl get <resource>`
- `kubectl cluster-info`
- `kubectl proxy`

- Upload image to `kind` cluster: `kind load docker-image <image_name>`
- Apply/Create a resource in the cluster from a file: `kubectl apply -f`

## Access kubernetes dashboard

1. First run `kubectl proxy` and access dashboard:
   [http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login]
2. Create a sample user and a token to enter the cluster dashboard:
   https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md

## Access a deployed service

See [https://kubernetes.io/docs/tasks/administer-cluster/access-cluster-services/#manually-constructing-apiserver-proxy-urls]

```bash
curl http://localhost:8001/api/v1/namespaces/default/services/service-core-code-school:http/proxy/
```

## References

- [https://kind.sigs.k8s.io/docs/user/quick-start/]
- [https://kubernetes.io/docs/tasks/tools/]
- [https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/]
- [https://iximiuz.com/en/posts/kubernetes-kind-load-docker-image/]
- [https://github.com/derailed/k9s]
- [https://kubernetes.io/docs/tasks/administer-cluster/access-cluster-services/#manually-constructing-apiserver-proxy-urls]
