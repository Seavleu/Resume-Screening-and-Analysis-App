# Resume Screening and Analysis App

## Overview
This is a Resume Screening and Analysis platform that allows users to upload resumes in bulk (up to 100 files), screen them based on predefined criteria (such as skills, experience, and education), and view the results in a user-friendly table format. The app provides features to download candidate details and sends notifications upon completion of the screening process.

## Features
- **Bulk Resume Upload**: Upload multiple resumes at once (PDF, DOC, DOCX formats).
- **Criteria-Based Screening**: Screen resumes based on skills, years of experience, and education level.
- **Paginated Candidate Table**: View the results in a paginated table with tick and cross icons indicating whether candidates meet the criteria.
- **Candidate Details Modal**: View detailed information about each candidate in a modal.
- **Resume Export**: Download the resume details of individual candidates as a JSON file.
- **Email Notification**: Automatic email notification when the resume screening process is complete.

## Tech Stack
### Frontend
- **React**: Main UI library.
- **Zustand**: State management.
- **SWR**: Data fetching and caching.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide Icons**: For icons used in the UI.

### Backend Services
- **Google Cloud Storage**: Used for storing uploaded resumes.
- **DocParser**: For parsing resume files and extracting relevant information.
- **Supabase**: For database storage and API functionalities.
- **SendGrid**: For sending email notifications to the recruiter upon screening completion.
- **Auth0**: For authentication and user management.

## Components
All reusable components are stored in the `/components` directory and exported via `index.ts`.

- **CandidateModal**: Displays detailed information about a candidate.
- **CandidateTable**: Renders the candidate data in a table format.
- **CriteriaForm**: Allows the user to input screening criteria (skills, experience, and education).
- **FileUpload**: Handles the uploading of resume files.

## State Management
The state is managed using `Zustand`, with persistent storage for data such as uploaded resumes, candidates, and criteria. The state is stored in local storage using the `persist` middleware, ensuring data persistence across sessions.

## API Integrations
- **Google Cloud Storage**: For uploading and storing resumes securely in the cloud.
- **DocParser**: To automatically parse and extract structured data from resumes.
- **SendGrid**: Sends notification emails after resumes are successfully screened.
- **Supabase**: Manages database storage for candidate and criteria information.

## Installation

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** or **yarn**

### Steps to Run the App

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/resume-screening-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd resume-screening-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

   Or if you're using yarn:
   ```bash
   yarn install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   REACT_APP_SUPABASE_URL=<your-supabase-url>
   REACT_APP_SUPABASE_KEY=<your-supabase-key>
   REACT_APP_GOOGLE_STORAGE_BUCKET=<your-google-storage-bucket>
   REACT_APP_SENDGRID_API_KEY=<your-sendgrid-api-key>
   REACT_APP_AUTH0_DOMAIN=<your-auth0-domain>
   REACT_APP_AUTH0_CLIENT_ID=<your-auth0-client-id>
   ```

5. Start the development server:
   ```bash
   npm start
   ```

   Or with yarn:
   ```bash
   yarn start
   ```

   The app will be running on `http://localhost:3000`.

## Deployment
You can deploy the app using platforms like **Vercel** or **Netlify** for the frontend and **Supabase** for the backend. Make sure to configure the environment variables in the deployment settings.

## Future Enhancements
- **Resume Matching with Machine Learning**: Incorporate machine learning algorithms for smarter resume matching.
- **Advanced Filters**: Add additional filters for more granular resume screening (e.g., location, certifications, etc.).
- **Integration with Applicant Tracking Systems (ATS)**: Integrate with third-party ATS systems like Workday or Greenhouse.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact
For any inquiries or support, please contact seavleuheang@gmail.com.

### Customization
- Replace placeholders like `<your-supabase-url>`, `<your-auth0-domain>`, and other API keys with your actual environment variables.
- Modify the contact section to include your real contact info.

This `README.md` provides a clear explanation of the project, its features, tech stack, installation instructions, and other important details. Let me know if you need further adjustments!