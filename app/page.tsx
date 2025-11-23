import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🌤️</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Weather Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Your modern weather application built with Next.js 14, featuring real-time updates,
            dark mode support, and a beautiful responsive UI.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/dashboard">
              <Button size="lg" variant="primary">
                View Dashboard
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Real-Time Weather
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  Get accurate weather data from major cities around the world, updated every 5 minutes.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🌓</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Dark Mode
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  Seamlessly switch between light and dark themes with system preference support.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Responsive Design
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  Fully responsive interface that works perfectly on all devices and screen sizes.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Next.js 14
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  Built with the latest Next.js 14 App Router for optimal performance and SEO.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">✅</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Form Validation
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  Robust form handling with React Hook Form and Zod schema validation.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Modern UI
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  Beautiful UI components built with Tailwind CSS and TypeScript.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to check the weather?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore real-time weather data from cities around the world.
          </p>
          <Link href="/dashboard">
            <Button size="lg" variant="secondary">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Weather data provided by OpenWeatherMap API
          </p>
        </div>
      </footer>
    </div>
  );
}
