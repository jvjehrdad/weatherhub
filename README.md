# WeatherHub 🌤️

A modern weather application built with Next.js 14, featuring real-time weather updates, dark mode support, and a beautiful responsive UI.

## Features ✨

- **Real-Time Weather Data**: Get accurate weather information from major cities around the world
- **Dark/Light Mode**: Seamlessly switch between themes with system preference support
- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Form Validation**: Robust contact form with React Hook Form and Zod schema validation
- **SEO Optimized**: Complete metadata, Open Graph tags, sitemap, and robots.txt
- **Modern UI Components**: Reusable components built with TypeScript and Tailwind CSS
- **Server Components**: Leveraging Next.js 14 App Router for optimal performance

## Tech Stack 🛠️

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Theme Management**: next-themes
- **API**: OpenWeatherMap API

## Project Structure 📁

```
weatherhub/
├── app/
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Homepage
│   ├── contact/             # Contact form page
│   ├── dashboard/           # Weather dashboard
│   ├── robots.ts            # SEO robots configuration
│   ├── sitemap.ts           # SEO sitemap
│   └── globals.css          # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Button component with variants
│   │   ├── Card.tsx         # Card components
│   │   └── Input.tsx        # Form input component
│   ├── ThemeProvider.tsx    # Theme provider wrapper
│   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   ├── Navigation.tsx       # Main navigation
│   └── WeatherCard.tsx      # Weather display card
├── lib/
│   ├── validations.ts       # Zod schemas
│   └── weather.ts           # Weather API utilities
└── .env.local.example       # Environment variables template
```

## Getting Started 🚀

### Prerequisites

- Node.js 18+ or Bun
- pnpm (recommended) or npm/yarn
- OpenWeatherMap API key (free)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-hub
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your OpenWeatherMap API key to `.env.local`:
```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

5. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts 📜

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Pages 📄

- **Home** (`/`) - Landing page with feature overview
- **Dashboard** (`/dashboard`) - Real-time weather from 6 major cities
- **Contact** (`/contact`) - Contact form with validation

## Components 🧩

### UI Components

- **Button**: Multiple variants (primary, secondary, outline) and sizes
- **Card**: Container with header, body, and footer sections
- **Input**: Form input with label, error states, and validation support

### Feature Components

- **ThemeToggle**: Sun/moon icon toggle for theme switching
- **Navigation**: Responsive navigation with active state
- **WeatherCard**: Displays weather data with icon and details

## Git Commits 📝

The project follows Conventional Commits format:

```
76b2bab Initial commit from Create Next App
f2aea16 feat(ui): add button, card and input components
e45402f feat(theme): add dark mode toggle with persistence
4d0e098 feat(form): add contact form with validation
244e0cb feat(dashboard): integrate openweathermap api
410fa8a feat(seo): add metadata and open graph tags
073cb99 feat(nav): add navigation component and homepage
```

## Deployment 🌐

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add `NEXT_PUBLIC_OPENWEATHER_API_KEY` environment variable
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS
- DigitalOcean

Make sure to:
1. Set the environment variable
2. Run `pnpm build`
3. Configure the start command to `pnpm start`

## Environment Variables 🔐

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_OPENWEATHER_API_KEY` | OpenWeatherMap API key | Yes |

## Features Details 📋

### Dark Mode
- Uses `next-themes` for theme management
- Supports system preference detection
- Persists user preference in localStorage
- Smooth transitions between themes

### Weather Dashboard
- Fetches data from OpenWeatherMap API
- Shows weather for 6 major cities
- Updates every 5 minutes (ISR)
- Displays: temperature, humidity, wind speed, pressure
- Graceful error handling

### Contact Form
- Real-time validation with Zod
- Fields: Name, Email, Phone (optional), Message
- Success/error states
- Responsive design
- Accessibility compliant

### SEO
- Complete metadata for all pages
- Open Graph tags
- Twitter Card tags
- Dynamic sitemap
- Robots.txt configuration

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License 📄

MIT

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments 🙏

- Weather data provided by [OpenWeatherMap](https://openweathermap.org)
- Icons from Heroicons
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
