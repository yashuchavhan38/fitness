pipeline {
    agent any

    stages {
        // Stage to clone the repository from GitHub
        stage('Clone Repo') {
            steps {
                git credentialsId: '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', 
                    url: 'https://github.com/yashuchavhan38/fitness.git', 
                    branch: 'main'
            }
        }

        // Stage to install project dependencies
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        // Stage to build the project
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        // Stage to run tests using Mocha and generate the Mochawesome report
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        // Stage to archive the generated Mochawesome report
        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'mochawesome-report/*.html', allowEmptyArchive: true
            }
        }

        // Stage for deployment (customize this as per your requirements)
        stage('Deploy') {
            steps {
                echo 'Deploy step here'
                // Add deployment steps here (e.g., deployment to cloud, server, etc.)
            }
        }
    }

    // Clean workspace after the pipeline run (always executed)
    post {
        always {
            cleanWs() // Clean up workspace
        }
    }
}
