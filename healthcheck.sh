#!/usr/bin/env bash
set -euo pipefail
PORT="${1:-3000}"

for i in {1..30}; do
  if curl -fsS "http://localhost:${PORT}/health" | grep -qi "ok"; then
    echo "Healthcheck OK"
    exit 0
  fi
  echo "Waiting for app on port ${PORT}... (${i}/30)"
  sleep 2
done

echo "Healthcheck FAILED"
exit 1
