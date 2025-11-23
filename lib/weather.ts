export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  description: string;
  icon: string;
  windSpeed: number;
  pressure: number;
}

export interface WeatherResponse {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    surface_pressure: number;
  };
}

// City coordinates for Open-Meteo API (free, no API key needed)
const CITY_COORDS: Record<
  string,
  { lat: number; lon: number; country: string }
> = {
  London: { lat: 51.5074, lon: -0.1278, country: 'GB' },
  'New York': { lat: 40.7128, lon: -74.006, country: 'US' },
  Tokyo: { lat: 35.6762, lon: 139.6503, country: 'JP' },
  Paris: { lat: 48.8566, lon: 2.3522, country: 'FR' },
  Sydney: { lat: -33.8688, lon: 151.2093, country: 'AU' },
  Dubai: { lat: 25.2048, lon: 55.2708, country: 'AE' },
};

// Weather code to description mapping
const WEATHER_DESCRIPTIONS: Record<
  number,
  { description: string; icon: string }
> = {
  0: { description: 'clear sky', icon: '01d' },
  1: { description: 'mainly clear', icon: '02d' },
  2: { description: 'partly cloudy', icon: '03d' },
  3: { description: 'overcast', icon: '04d' },
  45: { description: 'foggy', icon: '50d' },
  48: { description: 'depositing rime fog', icon: '50d' },
  51: { description: 'light drizzle', icon: '09d' },
  53: { description: 'moderate drizzle', icon: '09d' },
  55: { description: 'dense drizzle', icon: '09d' },
  61: { description: 'slight rain', icon: '10d' },
  63: { description: 'moderate rain', icon: '10d' },
  65: { description: 'heavy rain', icon: '10d' },
  71: { description: 'slight snow', icon: '13d' },
  73: { description: 'moderate snow', icon: '13d' },
  75: { description: 'heavy snow', icon: '13d' },
  77: { description: 'snow grains', icon: '13d' },
  80: { description: 'slight rain showers', icon: '09d' },
  81: { description: 'moderate rain showers', icon: '09d' },
  82: { description: 'violent rain showers', icon: '09d' },
  85: { description: 'slight snow showers', icon: '13d' },
  86: { description: 'heavy snow showers', icon: '13d' },
  95: { description: 'thunderstorm', icon: '11d' },
  96: { description: 'thunderstorm with slight hail', icon: '11d' },
  99: { description: 'thunderstorm with heavy hail', icon: '11d' },
};

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  const coords = CITY_COORDS[city];

  if (!coords) {
    throw new Error(`City ${city} not supported`);
  }

  // Open-Meteo API - Free, no API key required
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure`,
    {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch weather for ${city}`);
  }

  const data = (await response.json()) as WeatherResponse;
  const current = data.current;

  const weatherCode = current.weather_code || 0;
  const weatherInfo =
    WEATHER_DESCRIPTIONS[weatherCode] || WEATHER_DESCRIPTIONS[0];

  return {
    city,
    country: coords.country,
    temperature: Math.round(current.temperature_2m),
    feelsLike: Math.round(current.apparent_temperature),
    humidity: current.relative_humidity_2m,
    description: weatherInfo.description,
    icon: weatherInfo.icon,
    windSpeed: Math.round(current.wind_speed_10m * 10) / 10,
    pressure: Math.round(current.surface_pressure),
  };
}

export function getWeatherIconUrl(icon: string): string {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
