import { z } from "zod";

export const estimatorSchema = z.object({
  projectType: z.string().min(1, "Please select what you are building"),
  projectStage: z.string().min(1, "Please select your project stage"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a target timeline"),
  description: z
    .string()
    .min(10, "Please provide a brief description (at least 10 characters)")
    .max(2000, "Description must be under 2000 characters"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(100).optional().or(z.literal("")),
  phone: z.string().max(30).optional().or(z.literal("")),
});

export type EstimatorInput = z.infer<typeof estimatorSchema>;
