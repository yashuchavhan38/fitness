pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git credentialsId: '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', url: 'https://github.com/yashuchavhan38/fitness.git', branch: 'main'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage goes here...'
            }
        }
    }
}
