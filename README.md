# ContentForge AI

**ContentForge AI** is a modern, full-stack AI-powered content creation platform. It helps users generate high-quality marketing campaigns, long-form articles, social media posts, YouTube scripts, ad copy, and professional documents—quickly and efficiently—using advanced AI models.

## Features

- **AI-Powered Ad Copy Generation**: Instantly create compelling ad copy tailored to your brand and audience.
- **YouTube Content Planning**: Generate video ideas and scripts based on your latest YouTube content.
- **Long-form Content Creation**: Write in-depth, SEO-optimized articles and blog posts.
- **Social Media Management**: Get post suggestions and optimized hashtags for Twitter, Instagram, and LinkedIn.
- **Marketing Campaign Generator**: Build hyper-personalized campaigns, ad copies, and email sequences.
- **Document Generator**: Create professional documents, proposals, and more, with PDF export and history.
- **Authentication & User Management**: Secure sign-up, login, password reset, and protected routes.
- **Subscription & Payments**: Multiple pricing plans with Stripe integration.
- **Responsive UI**: Built with React, Tailwind CSS, and Vite for a fast, modern experience.

## Tech Stack

- **Frontend**: React, TypeScript, React Router, Tailwind CSS
- **AI Integration**: Google Generative AI (Gemini Pro)
- **Authentication & Database**: Supabase
- **Payments**: Stripe
- **PDF Generation**: jsPDF, html2canvas
- **Build Tool**: Vite
- **Linting & Formatting**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Codeenk/project1212.git
   cd project1212-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables:**
   - Set up your own API keys for Google Generative AI, Supabase, and Stripe in the respective files in `src/lib/`.
   - (Optional) Configure Supabase and Stripe backend endpoints as needed.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Build for Production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Project Structure

```
src/
  App.tsx                # Main app and routing
  components/            # Reusable UI components
  hooks/                 # Custom React hooks (e.g., useAuth)
  lib/                   # API integrations (AI, Supabase, Stripe)
  pages/                 # Main pages/routes (Home, Features, Tools, etc.)
  utils/                 # Utility functions (e.g., PDF generation)
  index.css              # Tailwind CSS entry
  main.tsx               # App entry point
```

## Main Pages & Tools

- **Home**: Landing page with hero, features, testimonials, and CTA.
- **Features**: Overview of all AI-powered features.
- **Pricing**: Subscription plans (Starter, Professional, Enterprise).
- **Blog**: Latest updates and articles (static demo).
- **Contact**: Support contact form and info.
- **Auth**: Sign up, login, forgot/reset password.
- **Tools** (protected):
  - **Marketing Campaigns**
  - **Long-form Content**
  - **Social Media Posts**
  - **YouTube Content**
  - **Document Generator**
  - **Ad Copy Generator**

## Authentication & Authorization

- Uses Supabase for secure authentication.
- Protected routes for tools—users must be logged in.

## Payments

- Stripe integration for subscription management.
- Pricing plans: Starter, Professional, Enterprise.

## Privacy & Terms

- See `/privacy` and `/terms` routes for full policies.

## Customization

- Update API keys and endpoints in `src/lib/`.
- Modify Tailwind config in `tailwind.config.js`.
- Add or edit features in `src/pages/` and `src/components/`.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) (add your license file if needed)

## Contact

- Email: support@contentforge.ai
- Address: 123 AI Street, San Francisco, CA 94105 
