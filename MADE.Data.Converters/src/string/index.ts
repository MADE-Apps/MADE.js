export function toNumber(value: string): number {
    if (isNullOrWhiteSpace(value)) {
        return 0;
    }

    return value.match(/^[-+]?[0-9]*\.?[0-9]+$/)
        ? parseFloat(value)
        : 0;
}

function isNullOrWhiteSpace(value: string): boolean {
    return value === null || value.match(/^ *$/) !== null;
}