import type { WeatherCondition } from '../content/config';

export function getWeatherIcon(condition: WeatherCondition): string {
  const icons: Record<WeatherCondition, string> = {
    'Sunny': '☀️',
    'Overcast': '☁️',
    'Cloudy': '⛅',
    'Drizzle': '🌦️',
    'Rainy': '🌧️',
    'Foggy': '🌫️',
    'Snowy': '❄️',
    'Clear': '🌤️',
  };

  return icons[condition];
}
