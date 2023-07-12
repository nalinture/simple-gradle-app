pipeline {
     agent any
     tools {
          gradle '8.2.1'
     }
     stages {
         stage('Clean Workspace') {
             steps {
                  deleteDir()                  
             }
         }
         stage('Checkout') {
             steps {                  
                  checkout scm                  
             }
         }
         stage('Build') {
             steps {   
                  sh 'gradle --version'
                  sh 'gradle clean build'
             }              

         }
     }
 }
