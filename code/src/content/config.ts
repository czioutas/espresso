import { defineCollection, z } from 'astro:content';

// Define strict enums for attributes
const TasteAttribute = z.enum([
  // Positive attributes
  'ACIDIC',
  'FLORAL',
  'SILKY',
  'STONE FRUIT',
  'CREAMY',
  'NUTTY',
  'CHOCOLATE',
  'HEAVY',
  'TOASTY',
  'CARAMEL',
  'FRUITY',
  'BRIGHT',
  'CITRUS',
  'BERRY',
  'WINEY',
  'SPICY',
  'EARTHY',
  'SMOOTH',
  'BALANCED',
  'COMPLEX',
  // Negative attributes
  'SOUR',
  'WATERY',
  'BITTER',
  'ACIDITY',
  'ASHY',
  'BURNT',
  'FLAT',
  'HARSH',
  'METALLIC',
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
  'Melancholic',
  'Focused',
  'Reflective',
  'Resolute',
  'Nostalgic',
  'Contemplative',
  'Energetic',
  'Calm',
  'Anxious',
  'Joyful',
  'Pensive',
  'Restless',
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
]);

const Strength = z.enum([
  'Weak',
  'Light',
  'Normal',
  'Medium',
  'Strong',
]);

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    rating: z.number().min(0).max(10),
    attributes: z.object({
      positive: z.array(TasteAttribute).min(1),
      negative: z.array(TasteAttribute).min(1),
    }),
    strength: Strength,
    location: Location,
    mapsUrl: z.string().url(),
    website: z.string().url().optional(),
    instagram: z.string().optional(),
    weather: WeatherCondition,
    mood: Mood,
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
