# Language-Fluency-Model
Generation of Language Fluency model
The project aims to enhance language fluency through interactive practice sessions by login to the website fluentify by 
providing email and password if the user forgots the password then he clicks on forgot  password and password gets recovered by answering a security question. 
if the user not logged in then the user  first registers into the website.Users provide voice input to the website fluentify. User can also fetches text from a random sentence generator. Subsequently, users speak the retrieved text by clicking on a microphone button, triggering speech-to-text conversion.The system then analyzes the fluency of the user's speech .In addition to the fluency analysis feature, the project offers a user-friendly interface featuring a blog section and tongue twisters for practice. This provides users with engaging content to further improve their language skills. Through this platform, users can actively engage in speech practice and contributing to their overall language proficiency.

## Table of Contents

---    Installation
---    Usage
---    Features
---    Configuration
---    Credits

## Installation

to set up project locally, please ensure you have the following technologies installed:
Python
Flask
Django
AI/ML
HTML, CSS, JavaScript
Visual Studio Code
Google Colab 
Jupyter Notebook 

Install Dependencies:
Ensure you have Python installed. Install Flask, Django, and other libraries using  preferred Python package manager (e.g., pip).
pip install flask
pip install django
pip install notebook

Set Up the Environment:
If you are using Visual Studio Code, open the project folder in VSCode.
For Google Colab, open the notebook file (.ipynb) using Google Colab.
For Jupyter Notebook, install Jupyter Notebook and run it, then open the notebook file (.ipynb).

Run the Project:
To run the Flask application, execute the app.py file.
For Django, run the command python manage.py runserver.

Access the Application:
Open your web browser and navigate to http://localhost:5000 for Flask or http://localhost:8000 for Django to access the application.

## Usage
Once you have set up the project, follow these steps to use the Fluentify:

1.Navigate to the Application:
Open your web browser and go to http://localhost:5000 for Flask or http://localhost:8000 for Django.

2.Generate Text:
On the homepage,by clicking on the "text" button, you will get to a "Random Text Generator" page where you can select a text to check your fluency.

3.Voice Input:
Click on the microphone icon to enable voice input.
Speak the generated text clearly into your microphone.

4.Speech-to-Text Conversion:
The system will transcribe your speech into text in real-time using speech recognition technology.

5.Fluency Analysis:
Once your speech is transcribed, the system will analyze its fluency .

6.Practice Sections:
Explore the blog section and tongue twisters for additional language practice.
Use these sections to enhance your language skills and fluency further.

7.Repeat:
Practice speaking and analyzing your fluency using different sentences and exercises provided by the application.

## Features

1.Voice Input:
Users can provide voice input by clicking on the microphone icon, enabling them to interact with the application hands-free.

2.Text Generation:
The application fetches random sentences from a generator, providing users with a variety of texts to practice with.

3.Speech-to-Text Conversion:
Utilizing speech recognition technology, the system transcribes user speech into text in real-time with high accuracy.

4.Fluency Analysis:
The system analyzes the fluency of the transcribed speech, providing  fluency level.

5.Practice Sections:
Users can access a blog section and tongue twisters for additional language practice, enhancing their language skills and fluency.

6.User-Friendly Interface:
The application features an intuitive and user-friendly interface, making it easy for users to navigate and interact with the system.

7.Accessibility:
The application is designed to be accessible to users with different abilities, ensuring inclusivity and equal access to language practice resources.

8.Scalability:
The system is scalable, allowing for future enhancements and additional features to be easily integrated to further enrich the user experience. Real-time feedback 
generation is in our future scope.

## mysql database configuration

1. Installation
Description: Ensure that MySQL database server is installed on your local machine or accessible from your server environment.
Instructions:
If MySQL is not installed, download and install MySQL from the official website: MySQL Downloads.
Follow the installation instructions provided for your operating system.

2. Database Setup
Description: Set up a MySQL database for Generation of language fluency model.
Instructions:
Log in to your MySQL server using a MySQL client or command-line interface.
Create a new database for your project:
   CREATE DATABASE project;
Create a new MySQL user and grant necessary privileges to the database:
  CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
  GRANT ALL PRIVILEGES ON project.* TO 'username'@'localhost';
  FLUSH PRIVILEGES;

4. Configuration
Description: Update the database connection settings in your project configuration.
Instructions:
Open the configuration file (e.g., config.py) located in the project directory.
Update the MySQL database connection parameters with the appropriate values:
  MYSQL_HOST = 'localhost'
  MYSQL_USER = 'username'
  MYSQL_PASSWORD = 'password'
  MYSQL_db=projects

## credits
Open-Source Projects and Libraries
Flask: A lightweight web framework for Python.
Django: A high-level Python web framework.
SpeechRecognition: Library for performing speech recognition in Python.
MySQL Connector/Python: MySQL driver for Python.
AI/ML: Artificial Intelligence and Machine Learning for model generation.



