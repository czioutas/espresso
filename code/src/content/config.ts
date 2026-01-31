import { defineCollection, z } from 'astro:content';

// Define strict enums for attributes
const TasteAttribute = z.enum([
  // Positive attributes
  'SMOOTH',
  'LIGHT',
  'CLEAN',
  // Negative attributes
  'BLAND',
  'NO_AROMA',
  'BITTER',
  'DARK',
]);

const WeatherCondition = z.enum([
  'Sunny',
  'Overcast',
  'Cloudy',
  'Drizzle',
  'Rainy',
  'Foggy',
  'Snowy',
  'Clear',
]);

const Mood = z.enum([
  'Energetic',
  'Hopeful',
  'Normal',
]);

const Location = z.enum([
  'Mitte',
  'Kreuzberg',
  'Prenz. Berg',
  'Prenzlauer Berg',
  'Friedrichshain',
  'Neukölln',
  'Charlottenburg',
  'Schöneberg',
  'Wedding',
  'Moabit',
  'Tempelhof',
  'Treptow',
  'Lichtenberg',
  'Pankow',
  'Etna',
]);

const Strength = z.enum([
  'Weak',
  'Light',
  'Normal',
  'Medium',
  'Strong',
]);

const Country = z.enum([
  'DE', // Germany
  'IT', // Italy
  'GR', // Greece
  'FR', // France
  'ES', // Spain
  'PT', // Portugal
  'NL', // Netherlands
  'BE', // Belgium
  'AT', // Austria
  'CH', // Switzerland
  'UK', // United Kingdom
  'US', // United States
  'CA', // Canada
  'AU', // Australia
  'JP', // Japan
  'KR', // South Korea
  'TH', // Thailand
  'VN', // Vietnam
  'TR', // Turkey
  'MX', // Mexico
  'BR', // Brazil
  'AR', // Argentina
  'CO', // Colombia
]);

const Atmosphere = z.enum([
  'Cozy',
  'Minimalist',
  'Busy',
  'Intimate',
  'Industrial',
  'Hipster',
  'Traditional',
  'Modern',
  'Rustic',
  'Sleek',
  'Warm',
  'Cold',
  'Vibrant',
  'Quiet',
  'Lively',
  'Casual',
  'Packed',
]);

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    rating: z.number().min(0).max(10),
    attributes: z.object({
      positive: z.array(TasteAttribute).min(0),
      negative: z.array(TasteAttribute).min(0),
    }),
    strength: Strength,
    location: Location,
    country: Country,
    mapsUrl: z.string().url(),
    website: z.string().url().optional(),
    instagram: z.string().optional(),
    weather: WeatherCondition,
    mood: Mood,
    atmosphere: Atmosphere,
    date: z.date(),
  }),
});

export const collections = {
  reviews,
};

// Export types for use in components
export type TasteAttribute = z.infer<typeof TasteAttribute>;
export type WeatherCondition = z.infer<typeof WeatherCondition>;
export type Mood = z.infer<typeof Mood>;
export type Location = z.infer<typeof Location>;
export type Strength = z.infer<typeof Strength>;
export type Country = z.infer<typeof Country>;
export type Atmosphere = z.infer<typeof Atmosphere>;
