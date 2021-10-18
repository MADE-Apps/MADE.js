import { IEquatable } from "made-runtime";

/**
 * Represents a color as red, green, blue, and alpha parts.
 */
export class Color implements IEquatable<Color> {
    r: number;
    g: number;
    b: number;
    a: number;

    /**
     * Initializes a new instance of the Color with the specified red, green, blue, and alpha values.
     * @param r The red component.
     * @param g The green component.
     * @param b The blue component.
     * @param a The alpha component.
     */
    constructor(r: number, g: number, b: number, a: number = 255) {
        this.r = r;
        Color.validateByte(r);
        this.g = g;
        Color.validateByte(g);
        this.b = b;
        Color.validateByte(b);
        this.a = a;
        Color.validateByte(a);
    }

    /**
     * Creates a new Color from the specified hex string.
     * @param hex The hex string to parse.
     * @returns The new Color based on the specified hex value.
     */
    static fromHex(hex: string): Color {
        if (hex.startsWith("#")) {
            hex = hex.substr(1);
        }

        const r = parseInt(hex.substr(0, 2), 16);
        Color.validateByte(r);
        const g = parseInt(hex.substr(2, 2), 16);
        Color.validateByte(g);
        const b = parseInt(hex.substr(4, 2), 16);
        Color.validateByte(b);

        let a;
        if (hex.length === 8) {
            a = parseInt(hex.substr(6, 2), 16);
        } else {
            a = 255;
        }

        Color.validateByte(a);

        return new Color(r, g, b, a);
    }

    /**
     * Lightens a color by a specified amount.
     * @param amount The amount to lighten the color.
     * @returns The lightened color.
     */
    lighten(amount: number): Color {
        var num = amount * 0.01;
        return Color.lerp(this, num);
    }

    /**
     * Darkens a color by a specified amount.
     * @param amount The amount to darken the color.
     * @returns The darkened color.
     */
    darken(amount: number): Color {
        var num = amount * -0.01;
        return Color.lerp(this, num);
    }

    /**
     * Calculates and returns the brightness of the color.
     * @returns The brightness of the color.
     */
    getBrightness(): number {
        var min = Math.min(this.r, this.g, this.b);
        var max = Math.max(this.r, this.g, this.b);
        return (max + min) / (255 * 2);
    }

    /**
     * Calculates and returns the hue of the color.
     * @returns The hue of the color.
     */
    getHue(): number {
        if (this.r === this.g && this.g === this.b) {
            return 0;
        }

        var min = Math.min(this.r, this.g, this.b);
        var max = Math.max(this.r, this.g, this.b);

        var delta = max - min;
        var hue = 0;

        if (this.r === max) {
            hue = (this.g - this.b) / delta;
        } else if (this.g === max) {
            hue = 2 + (this.b - this.r) / delta;
        } else {
            hue = 4 + (this.r - this.g) / delta;
        }

        hue *= 60;
        if (hue < 0) {
            hue += 360;
        }

        return hue;
    }

    /**
     * Calculates and returns the saturation of the color.
     * @returns The saturation of the color.
     */
    getSaturation(): number {
        if (this.r === this.g && this.g === this.b) {
            return 0;
        }

        var min = Math.min(this.r, this.g, this.b);
        var max = Math.max(this.r, this.g, this.b);

        var div = max + min;
        if (div > 255) {
            div = 255 * 2 - max - min;
        }

        return (max - min) / div;
    }

    /**
     * Converts the color to a hex string.
     * @returns The hex string representation of the color.
     */
    toHex(includeAlpha: boolean = true): string {
        const r = this.r.toString(16);
        const g = this.g.toString(16);
        const b = this.b.toString(16);
        const a = this.a.toString(16);
        return `#${r}${g}${b}${includeAlpha ? a : ""}`;
    }

    equals(other: Color): boolean {
        return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
    }

    toString(): string {
        return `Color [R=${this.r}, G=${this.g}, B=${this.b}, A=${this.a}]`;
    }

    private static validateByte(byte: number) {
        if (isNaN(byte) || byte < 0 || byte > 255) {
            throw new Error(`Color values must be between 0 and 255.`);
        }
    }

    private static lerp(color: Color, amount: number): Color {
        var r = color.r;
        var g = color.g;
        var b = color.b;

        if (amount < 0) {
            amount = 1 + amount;
            r *= amount;
            g *= amount;
            b *= amount;
        } else {
            r += (255 - r) * amount;
            g += (255 - g) * amount;
            b += (255 - b) * amount;
        }

        return new Color(r, g, b, color.a);
    }
}