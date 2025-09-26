
#!/usr/bin/env bash
set -euo pipefail
APP_IMAGE=${APP_IMAGE:-discountmate-api:local}
CONTAINER_NAME=${CONTAINER_NAME:-discountmate-api}
PORT=${PORT:-3000}

if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
  docker rm -f $CONTAINER_NAME || true
fi

docker run -d --name $CONTAINER_NAME -p ${PORT}:3000 $APP_IMAGE
echo "App running at http://localhost:${PORT}/health"
