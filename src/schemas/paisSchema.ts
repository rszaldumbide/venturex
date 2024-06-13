import { z } from "zod";

export const paisSchema = z.object({
  // Talla de camiseta
  sector: z.string().min(1, { message: "Selecciona un Sector." }),
  pais: z.string(),
});

export type paisValues = z.infer<typeof paisSchema>;
