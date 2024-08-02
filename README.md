# Next.js Auth Example

## Overview

This project is a sample web application built with [Next.js](https://nextjs.org/), designed for self-practice and learning. It demonstrates the integration of various libraries and technologies to create a robust, secure, and accessible web application.

## Features

### Authentication

- **Auth.js**: This application uses [Auth.js](https://authjs.dev/) for managing authentication with email magic links and GitHub OAuth. Auth.js provides a straightforward and secure way to handle user authentication, supporting multiple authentication strategies including OAuth providers and passwordless login. This ensures the application is secure and can easily integrate with third-party authentication services.

### UI Components

- **Shadcn/UI**: The application utilizes [Shadcn/UI](https://ui.shadcn.com/) for its input and button components. Shadcn/UI offers a collection of accessible, highly customizable UI components built with modern design principles. This ensures that all UI components are fully accessible, improving the user experience for individuals with disabilities and adhering to best practices in web accessibility.

### Input Validation

- **Zod**: Input validation is handled by [Zod](https://zod.dev/). Zod is a powerful TypeScript-first schema declaration and validation library. It provides an intuitive way to define schemas for your data and validate inputs, reducing the risk of errors and ensuring that only valid data is processed by your application.

### Database Integration

- **Prisma**: The application uses [Prisma](https://www.prisma.io/) as its ORM to interact with a PostgreSQL database. Prisma provides a type-safe database client with an auto-generated query builder, making database interactions straightforward and error-free. By using Prisma, you can focus on your application's logic rather than dealing with complex SQL queries, and benefit from easy migrations and data modeling.

# Todo

- [x] Setup magic links for sign-in
- [x] Setup GitHub OAuth
- [x] Fix success magic link sent notification on log-in form component
- [ ] Setup an additional OAuth
- [ ] Configure register form where user enters their name and email only
- [ ] Change default auth.js error page
- [ ] User dashboard and profile
- [ ] Deployment

## Deployment needs

- [ ] Vercel hosting for app (free)
- [ ] Domain?
- [ ] Resend domain config (free)
- [ ] Postgres db hosting (supabase? free)
