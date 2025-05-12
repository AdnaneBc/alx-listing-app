# ALX Listing App

## Project Overview

The **ALX Listing App** is a modern, scalable foundation for an Airbnb-style property listing platform. This project focuses on setting up the initial structure using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**. The goal is to scaffold a clean and organized codebase that supports reusable components and responsive UI design, setting the stage for a dynamic and user-friendly property listing experience.

---

## About the Project

The ALX Listing App project aims to scaffold and lay the foundational structure for a modern Airbnb clone. This initial milestone focuses on setting up a well-organized and scalable codebase using Next.js, TypeScript, TailwindCSS, and ESLint. By establishing a clean folder structure, reusable components, and adhering to best practices, the project ensures a solid starting point for building a dynamic, responsive, and user-friendly property listing page.

### Learning Objectives

This milestone is designed for professional developers to strengthen their expertise in modern web application development. By completing this milestone, learners will:

- Gain hands-on experience scaffolding a Next.js project tailored for production readiness.
- Implement TypeScript for type safety and reusable interfaces to enhance code maintainability and robustness.
- Configure TailwindCSS for building responsive, accessible, and visually appealing UI components.
- Structure a Next.js project following industry-standard best practices, ensuring scalability and readability.
- Create foundational reusable components and organize assets effectively for real-world applications.

### Requirements

To successfully complete this milestone, learners must meet the following prerequisites:

- Basic knowledge of Next.js, React, and TypeScript.
- Familiarity with TailwindCSS and modern styling techniques.
- Understanding of ESLint and its role in maintaining code quality.
- Proficiency in organizing and structuring projects for scalability.

---

## Project Structure

The project is structured to support clean, maintainable, and scalable development:
alx-listing-app/
├── components/
│ └── common/
│ ├── Button.tsx # Reusable Button component
│ └── Card.tsx # Reusable Card component
├── constants/
│ └── index.ts # Centralized constants (API endpoints, strings, config)
├── interfaces/
│ └── index.ts # TypeScript interfaces (CardProps, ButtonProps, etc.)
├── pages/
│ └── index.tsx # Home page (Next.js Pages Router)
├── public/
│ └── assets/ # Static images and SVGs
├── styles/
│ └── globals.css # TailwindCSS styles
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json # TypeScript configuration
├── .eslintrc.json # ESLint configuration
└── README.md # Project documentation

---

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm (comes with Node.js)
- A modern code editor (e.g., VS Code) with recommended extensions for TypeScript and TailwindCSS

### Installation Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd alx-listing-app
```

2. **Install project dependencies**

npm install

3. **Run the development Server**

npm run dev

4. **Open your browser**

Visit http://localhost:3000 to view the app.
