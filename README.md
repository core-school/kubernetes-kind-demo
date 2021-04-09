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

## Commands 

- `kubectl cluster-info`
- `kubectl proxy`

## Access dashboard 
* First run `kubectl proxy` and access dashboard:
[http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login]
* Create a sample user:
 https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md




## References
- [https://kind.sigs.k8s.io/docs/user/quick-start/]
- [https://kubernetes.io/docs/tasks/tools/]
- [https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/]