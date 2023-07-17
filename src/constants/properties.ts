import { z } from 'zod';

import house1 from "../../public/image1.png";
import house2 from "../../public/image2.png";
import house3 from "../../public/image3.png";

export const propertiesSchema = z.object({
    id: z.number(),
    img: z.string(),
    price: z.number(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    address: z.string(),
    space: z.number(),
});

export const properties = [
    {
        id: 1,
        img: house1,
        price: 100000,
        bedrooms: 3,
        bathrooms: 2,
        address: "1234 Main St",
        space: 2000,
    },
    {
        id: 2,
        img: house2,
        price: 200000,
        bedrooms: 4,
        bathrooms: 3,
        address: "1234 Main St",
        space: 3000,
    },
    {
        id: 3,
        img: house3,
        price: 300000,
        bedrooms: 5,
        bathrooms: 4,
        address: "1234 Main St",
        space: 4000,
    }
];
