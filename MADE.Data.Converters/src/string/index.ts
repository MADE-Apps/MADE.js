export function toNumber(value: string): number {
    if (isNullOrWhiteSpace(value)) {
        return 0;
    }

    return value.match(/^[-+]?[0-9]*\.?[0-9]+$/)
        ? parseFloat(value)
        : 0;
}

export function toBoolean(value: string): boolean {
    if (isNullOrWhiteSpace(value)) {
        return false;
    }

    return value === 'true' || value === '1' || value === 'on' || value === 'checked' || value === 'selected' || value === 'yes';
};

function isNullOrWhiteSpace(value: string): boolean {
    return value === null || value.match(/^ *$/) !== null;
}