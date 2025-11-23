import { Suspense } from 'react';
import { WeatherCard } from '@/components/WeatherCard';
import { getWeatherByCity } from '@/lib/weather';
import { Card, CardBody } from '@/components/ui/Card';

// Default cities to display
const CITIES = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Dubai'];

async function WeatherGrid() {
  const weatherPromises = CITIES.map((city) =>
    getWeatherByCity(city).catch((error) => ({
      error: true,
      city,
      message: error.message,
    }))
  );

  const weatherData = await Promise.all(weatherPromises);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {weatherData.map((data, index) => {
        if ('error' in data) {
          return (
            <Card key={index}>
              <CardBody>
                <div className="text-center py-8">
                  <p className="text-red-600 dark:text-red-400 font-medium">
                    Failed to load weather for {data.city}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {data.message}
                  </p>
                </div>
              </CardBody>
            </Card>
          );
        }

        return <WeatherCard key={data.city} weather={data} />;
      })}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CITIES.map((city) => (
        <Card key={city}>
          <CardBody>
            <div className="animate-pulse space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                </div>
                <div className="h-16 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Weather Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time weather updates from around the world
          </p>
        </div>

        <Suspense fallback={<LoadingSkeleton />}>
          <WeatherGrid />
        </Suspense>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Data updates every 5 minutes • Powered by OpenWeatherMap API
          </p>
        </div>
      </div>
    </div>
  );
}

