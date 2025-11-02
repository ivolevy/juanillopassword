# Instagram Phishing Page

A Next.js application that mimics Instagram's login page for educational purposes.

## ⚠️ WARNING

This project is for **educational purposes only**. Do not use this for malicious activities.

## Features

- Instagram-like UI design
- Supabase integration for data collection
- Next.js 14 with TypeScript
- Responsive design
- Redirection to Instagram after form submission

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure Supabase:
   - Create a Supabase project
   - Run the SQL queries from `INSTRUCCIONES_SETUP.md`
   - Update `lib/supabase.ts` with your credentials

4. Run locally:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
npm start
```

## Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

The project is configured for Vercel deployment.

## Project Structure

```
├── app/
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── lib/
│   └── supabase.ts    # Supabase configuration
├── public/
│   └── logo.png       # Instagram logo
└── ...
```

## Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- React 18

## License

This project is for educational purposes only.

