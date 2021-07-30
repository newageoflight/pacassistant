export function coerceType(value: string | string[] | null): string[] {
    if (Array.isArray(value)) {
        return value;
    } else if (typeof value === 'string') {
        return [value];
    } else if (value === null) {
        return null;
    } else {
        return [];
    }
}