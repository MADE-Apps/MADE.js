import { Color, Colors } from '../src'

describe("when creating a Color", () => {
    it("should set the R G B A values", () => {
        // Arrange
        const r = 1
        const g = 2
        const b = 3
        const a = 4

        // Act
        const color = new Color(r, g, b, a)

        // Assert
        expect(color.r).toBe(r)
        expect(color.g).toBe(g)
        expect(color.b).toBe(b)
        expect(color.a).toBe(a)
    });

    it("should throw error if values are outside of valid range", () => {
        // Arrange
        const r = 256
        const g = 256
        const b = 256
        const a = 256

        // Act
        const color = () => new Color(r, g, b, a)

        // Assert
        expect(color).toThrowError(`Color values must be between 0 and 255.`)
    });
});

describe("when creating a Color from a Hex value", () => {
    it("should set the R G B A values", () => {
        // Arrange
        const hex = "#FF0000"

        // Act
        const color = Color.fromHex(hex);

        // Assert
        expect(color.r).toBe(255)
        expect(color.g).toBe(0)
        expect(color.b).toBe(0)
        expect(color.a).toBe(255)
    });

    it("should set the R G B A values with alpha hex", () => {
        // Arrange
        const hex = "#FF0000EF"

        // Act
        const color = Color.fromHex(hex);

        // Assert
        expect(color.r).toBe(255)
        expect(color.g).toBe(0)
        expect(color.b).toBe(0)
        expect(color.a).toBe(0xEF)
    });

    it("should throw error if value is not valid", () => {
        // Arrange
        const hex = "#FF00"

        // Act
        const color = () => Color.fromHex(hex);

        // Assert
        expect(color).toThrowError(`Color values must be between 0 and 255.`)
    });
});

describe("when retrieving a Color brightness", () => {
    it("should return the brightness", () => {
        // Arrange
        const color = Colors.red;

        // Act
        const brightness = color.getBrightness();

        // Assert
        expect(brightness).toBe(0.5)
    });
});

describe("when retrieving a Color hue", () => {
    it("should return the hue", () => {
        // Arrange
        const color = Colors.red;

        // Act
        const hue = color.getHue();

        // Assert
        expect(hue).toBe(0)
    });
});

describe("when retrieving a Color saturation", () => {
    it("should return the saturation", () => {
        // Arrange
        const color = Colors.red;

        // Act
        const saturation = color.getSaturation();

        // Assert
        expect(saturation).toBe(1)
    });
});

describe("when converting a Color to hex", () => {
    it("should return the hex value", () => {
        // Arrange
        const color = new Color(255, 255, 255, 255)

        // Act
        const hex = color.toHex();

        // Assert
        expect(hex).toBe("#ffffffff")
    });

    it("should return the hex value with alpha", () => {
        // Arrange
        const color = new Color(255, 255, 255, 0xEF)

        // Act
        const hex = color.toHex();

        // Assert
        expect(hex).toBe("#ffffffef")
    });

    it("should return the hex value excluding alpha", () => {
        // Arrange
        const color = new Color(255, 255, 255, 0xEF)

        // Act
        const hex = color.toHex(false);

        // Assert
        expect(hex).toBe("#ffffff")
    });
});

describe("when lightening a Color", () => {
    it("should return a lightened Color", () => {
        // Arrange
        const color = Colors.red;

        // Act
        const lightened = color.lighten(40);

        // Assert
        expect(lightened.getBrightness()).toBeGreaterThan(color.getBrightness())
    });
});

describe("when darkening a Color", () => {
    it("should return a darkened Color", () => {
        // Arrange
        const color = Colors.red;

        // Act
        const darkened = color.darken(40);

        // Assert
        expect(darkened.getBrightness()).toBeLessThan(color.getBrightness())
    });
});

describe("when checking Color equality", () => {
    it("should return true when comparing two equal Colors", () => {
        // Arrange
        const color1 = new Color(0, 0, 0, 0)
        const color2 = new Color(0, 0, 0, 0)

        // Act
        var result = color1.equals(color2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return false when comparing two different Colors", () => {
        // Arrange
        const color1 = new Color(0, 0, 0, 0)
        const color2 = new Color(1, 1, 1, 1)

        // Act
        var result = color1.equals(color2);

        // Assert
        expect(result).toBe(false);
    });
});
