import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//TAILWIND
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//ERROR HANDLING
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};