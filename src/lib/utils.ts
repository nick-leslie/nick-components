import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

export function hasKey<O extends object>(obj: O, key: PropertyKey): key is keyof O {
    return key in obj
}