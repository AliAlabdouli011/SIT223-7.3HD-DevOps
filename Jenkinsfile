
pipeline {
  agent any

  environment {
    NODE_VERSION = '20'
    APP_IMAGE = "discountmate-api:${env.BUILD_NUMBER}"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Setup Node') {
      steps {
        sh 'node -v || true'
        sh 'npm -v || true'
      }
    }

    stage('Install Dependencies') {
      steps {
        dir('app') {
          sh 'npm ci'
        }
      }
    }

    stage('Build') {
      steps {
        dir('app') {
          sh 'npm run build'
        }
      }
    }

    stage('Test') {
      steps {
        dir('app') {
          sh 'npm test'
          // JUnit report publishing is optional; Jest by default outputs text.
        }
      }
    }

    stage('Code Quality (ESLint)') {
      steps {
        dir('app') {
          sh 'npm run lint'
        }
      }
    }

    stage('Security Scan (npm audit)') {
      steps {
        dir('app') {
          sh 'npm audit --audit-level=high || true'
        }
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t $APP_IMAGE .'
      }
    }

    stage('Deploy (Local Docker)') {
      steps {
        sh './scripts/deploy.sh'
        sh './scripts/healthcheck.sh'
      }
    }

    stage('Release (Tag)') {
      when { expression { return env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'master' } }
      steps {
        sh 'git config user.email "jenkins@local"'
        sh 'git config user.name "Jenkins"'
        sh 'git tag -fa "v0.${BUILD_NUMBER}" -m "Automated release v0.${BUILD_NUMBER}" || true'
        sh 'git push origin --tags || true'
      }
    }

    stage('Monitoring (Placeholder)') {
      steps {
        sh 'echo "Send metrics to monitoring tool here (e.g., Prometheus/Datadog API)"'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'app/coverage/**', allowEmptyArchive: true
      echo 'Pipeline finished.'
    }
  }
}
