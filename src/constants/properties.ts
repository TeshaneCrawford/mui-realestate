import { z } from 'zod';

export const propertiesSchema = z.object({
    id: z.number(),
    img: z.string(),
    price: z.number(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    address: z.string(),
    space: z.number(),
});
