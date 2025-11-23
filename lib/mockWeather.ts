import { WeatherData } from './weather';

// Mock weather data for development/demo
const mockWeatherData: Record<string, WeatherData> = {
  London: {
    city: 'London',
    country: 'GB',
    temperature: 15,
    feelsLike: 13,
    humidity: 72,
    description: 'partly cloudy',
    icon: '02d',
    windSpeed: 4.5,
    pressure: 1013,
  },
  'New York': {
    city: 'New York',
    country: 'US',
    temperature: 22,
    feelsLike: 21,
    humidity: 65,
    description: 'clear sky',
    icon: '01d',
    windSpeed: 3.2,
    pressure: 1015,
  },
  Tokyo: {
    city: 'Tokyo',
    country: 'JP',
    temperature: 18,
    feelsLike: 17,
    humidity: 80,
    description: 'light rain',
    icon: '10d',
    windSpeed: 2.8,
    pressure: 1010,
  },
  Paris: {
    city: 'Paris',
    country: 'FR',
    temperature: 16,
    feelsLike: 14,
    humidity: 68,
    description: 'overcast clouds',
    icon: '04d',
    windSpeed: 3.5,
    pressure: 1012,
  },
  Sydney: {
    city: 'Sydney',
    country: 'AU',
    temperature: 25,
    feelsLike: 24,
    humidity: 55,
    description: 'clear sky',
    icon: '01d',
    windSpeed: 5.1,
    pressure: 1018,
  },
  Dubai: {
    city: 'Dubai',
    country: 'AE',
    temperature: 32,
    feelsLike: 35,
    humidity: 45,
    description: 'clear sky',
    icon: '01d',
    windSpeed: 4.0,
    pressure: 1008,
  },
};

export async function getMockWeatherByCity(city: string): Promise<WeatherData> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const weatherData = mockWeatherData[city];
  
  if (!weatherData) {
    throw new Error(`No mock data available for ${city}`);
  }

  return weatherData;
}

