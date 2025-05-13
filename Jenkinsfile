
pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git credentialsId: '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', url: 'https://github.com/yashuchavhan38/fitness.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
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

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'mochawesome-report/*.html', allowEmptyArchive: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy step here'
            }
        }
    }
}
