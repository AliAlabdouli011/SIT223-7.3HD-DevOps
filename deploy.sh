#!/usr/bin/env bash
set -euo pipefail

APP_IMAGE="${APP_IMAGE:-discountmate-api:latest}"
APP_NAME="${APP_NAME:-discountmate-api}"
PORT="${PORT:-3000}"

DOCKER="/usr/local/bin/docker"
DOCKER_CFG="--config ${WORKSPACE}/.jenkins-docker"

# Ensure docker is reachable (helpful log)
"$DOCKER" $DOCKER_CFG version

# Stop & remove old container if exists
if "$DOCKER" $DOCKER_CFG ps -a --format '{{.Names}}' | grep -q "^${APP_NAME}\$"; then
  echo "Stopping old container ${APP_NAME}..."
  "$DOCKER" $DOCKER_CFG rm -f "${APP_NAME}" || true
fi

# Run new container
echo "Starting ${APP_NAME} from image ${APP_IMAGE} on port ${PORT}..."
"$DOCKER" $DOCKER_CFG run -d --name "${APP_NAME}" -p "${PORT}:3000" "${APP_IMAGE}"

echo "Container started. Running healthcheck..."
./healthcheck.sh "${PORT}"
