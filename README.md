# Live Demo Link : https://sensai-nine-teal.vercel.app/

The Sensai is AI-powered career coaching application, The project utilizes a modern, robust, and scalable full-stack technology stack.

##Technology used for building Sensai

# Frameworks and AI Engine

NextJs - A React framework that supports server-side rendering, static site generation, and serverless functions (API Routes). 
Chosen to build the full-stack application and handle both the frontend and the backend API logic. It offers performance optimizations and route protection, crucial for a professional web app.

ReactJs - The core JavaScript library for building user interfaces (UI) using components.

Gemini AI - Google's family of generative AI models capable of understanding and generating text, code, and more.
The central intelligence for all "Sensai" features, including the Mock Interview Q&A and Industry Insights data.

# Styling

Tailwind CSS - A utility-first CSS framework that provides low-level utility classes to build custom designs directly in HTML/JSX.

ShadCN UI - A collection of reusable UI components (like buttons, cards, forms) built on top of Tailwind CSS and Radix UI primitives.

# Database

Prisma - An Object-Relational Mapper (ORM) that provides a type-safe database query builder, used to simplify and manage all database interactions. It converts JavaScript/TypeScript code into database queries (like SQL) and provides an easy way to define the data model for the application.

Neon - Neon DB is a modern, cloud-based database built on the popular PostgreSQL system. Think of it as a super-efficient version of a traditional database, designed for the internet age. Its main selling point is that it is serverless

PostgreSQL - A powerful, open-source relational database system.

# Services

Clerk - A complete, full-featured platform for handling user authentication and management in web applications.

Vercel - A cloud platform optimized for Next.js deployment, offering serverless hosting. Used to deploy the application to a live URL. Its deep integration with Next.js ensures fast, scalable, and hassle-free deployment.

Inngest - A platform for building reliable serverless background jobs and workflows, used to handle long-running or scheduled tasks that shouldn't block the main web application, such as: processing large data, scheduling weekly updates for salary trends, or ensuring the reliability of core AI processes.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
