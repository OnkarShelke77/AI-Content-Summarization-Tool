##AI-Powered Content Summarization and Analysis Tool

Project Summary:
This application allows users to upload text content (articles, documents, emails, etc.) and receive a summarized version with key insights and analysis. The application uses Next.js for the front-end, Node.js (Express.js) for the back-end, and integrates with an AI service for text analysis.

Assumptions:
Users will upload text content in plain text, HTML, or DOC formats.
The AI service used for text analysis is the Google Cloud Natural Language API.

Prerequisites:
Node.js
NPM
Git
Google Cloud API Key

Installation Steps:

Backend Setup

1.Clone the repository:
git clone https://github.com/OnkarShelke77/AI-Content-Summarization-Tool.git
cd AI-Content-Summarization-Tool

2.Navigate to the backend directory: cd backend

3.Install dependencies: npm install

4.Create a .env file and add your Google Cloud API key:
GOOGLE_CLOUD_API_KEY=your-google-cloud-api-key

5.Start the backend server: node index.js

Frontend Setup:
1.Navigate to the frontend directory: cd frontend

2.Install dependencies: npm install

3.Start the frontend server: npm run dev

Detailed Steps:

Backend (Node.js with AI Integration)
Set Up Server: Create an Express server in index.js.
Create API Routes: Define routes in routes/analyze.js to handle file uploads and text analysis.
Integrate AI Service: Use Google Cloud Natural Language API for text summarization and analysis.

Frontend (Next.js)
Create Components: Develop UploadForm.js for file uploads and SummaryDisplay.js for displaying results.
Handle Uploads: Use Next.js API routes to handle uploads and interact with the backend.
Display Results: Show the summarized text and extracted insights on the user interface.


