import Image from 'next/image';
import { Card, CardHeader, CardBody } from './ui/Card';
import { getWeatherIconUrl, type WeatherData } from '@/lib/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <Card className="hover:scale-105 transition-transform duration-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {weather.city}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {weather.country}
            </p>
          </div>
          <Image
            src={getWeatherIconUrl(weather.icon)}
            alt={weather.description}
            width={64}
            height={64}
            unoptimized
          />
        </div>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          <div>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold text-gray-900 dark:text-white">
                {weather.temperature}°
              </span>
              <span className="text-xl text-gray-500 dark:text-gray-400 mb-2">
                C
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Feels like {weather.feelsLike}°C
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 mt-2 capitalize">
              {weather.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {weather.humidity}%
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Wind</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {weather.windSpeed} m/s
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Pressure</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {weather.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

