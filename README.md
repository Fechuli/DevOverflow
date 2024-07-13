# Backdoor - DevFlow
![backdoor-devflow](https://github.com/user-attachments/assets/2c23fd3e-2b09-4045-88c1-23cc616d2a3c)

Backdoor - DevFlow is an internal application designed to facilitate the exchange of opinions, questions, and answers about programming and projects at Backdoor, our design and 3D experience studio.

## Technologies Used

- **Framework:** Next.js
- **Style:** Tailwind CSS
- **Language:** TypeScript
- **Database:** MongoDB
- **Deploy:** Vercel

## Environment Variables Configuration

The application requires several environment variables, which should be configured in the `env.local` file. Below is the list of required variables:

1. `CLERK_PUBLIC_KEY`: The public key for the Clerk authentication system.
2. `CLERK_SECRET_KEY`: The secret key for the Clerk authentication system.
3. `CLERK_SIGNIN_REDIRECT_URL`: The route for the Clerk sign-in redirect, e.g., `/sign-in`.
4. `CLERK_SIGNOUT_REDIRECT_URL`: The route for the Clerk sign-out redirect, e.g., `/sign-out`.
5. `MONGODB_URL`: URL to connect to the MongoDB database.
6. `WEBHOOK_SECRET_KEY`: Secret key for webhooks.
7. `SITE_DOMAIN`: Domain where the site is hosted.
8. `OPENAI_SECRET_KEY`: Secret key for OpenAI.

## Application Structure

The application is organized with a main menu that includes the following sections:

- **Home**
- **Community**
- **Collections**
- **Tags**
- **Profile**
- **Ask a Question**

### User and Reputation System

Users can earn reputation points by answering questions, posting new questions, or helping other users. This system encourages active participation within the community.

### Artificial Intelligence Features

With integration to the ChatGPT API, users can get AI-generated responses to their questions.

### Tagging System

Users can tag questions and answers with relevant tags, making it easier to categorize and search for information.

### Global and Local Search

The application offers a global search functionality to find users, questions, tags, or answers, along with a local search system within each category.

## Deployment

The application is deployed on Vercel.
