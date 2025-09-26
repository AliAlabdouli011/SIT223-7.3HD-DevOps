
# DiscountMate DevOps Starter (Jenkins 7.3HD)

A minimal Node.js/Express API with Jest tests and a Jenkins pipeline including:
- Build
- Test
- Code Quality (ESLint)
- Security Scan (npm audit)
- Docker Build
- Deploy (local Docker)
- Release (git tag)
- Monitoring (placeholder)

## Quick Start (Local)

```bash
# install deps
cd app && npm ci && cd ..

# run locally (without docker)
node app/src/index.js
# visit http://localhost:3000/health
```

## Docker Run

```bash
docker build -t discountmate-api:local .
./scripts/deploy.sh
./scripts/healthcheck.sh
```

## Jenkins

Create a multibranch or pipeline job and point to this repo.
Ensure the Jenkins agent has Docker and Node 20 or runs in a Docker-in-Docker environment.

Key stages are in `Jenkinsfile`. Modify as needed (e.g., integrate SonarQube/Snyk).

## Tests

```
cd app
npm test
```
