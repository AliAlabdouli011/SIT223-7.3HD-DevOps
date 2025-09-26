
#!/usr/bin/env bash
set -euo pipefail
curl -fsSL http://localhost:${PORT:-3000}/health && echo " - healthy"
