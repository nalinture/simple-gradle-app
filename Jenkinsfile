pipeline {
     agent any
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
                  sh 'gradle clean build'
             }              

         }
     }
 }
