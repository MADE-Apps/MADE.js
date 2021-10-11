import { TimeSpan } from '../src'

describe("when creating a TimeSpan", () => {
    it("should create a new TimeSpan", () => {
        // Arrange & Act
        const timeSpan = new TimeSpan(1, 2, 3, 4, 5)

        // Assert
        expect(timeSpan.days()).toBe(1)
        expect(timeSpan.hours()).toBe(2)
        expect(timeSpan.minutes()).toBe(3)
        expect(timeSpan.seconds()).toBe(4)
        expect(timeSpan.milliseconds()).toBe(5)
    });
});

describe("when converting a TimeSpan to a string", () => {
    it("should return as formatted time string", () => {
        // Arrange
        const timeSpan = new TimeSpan(1, 12, 30, 15, 15)

        // Act & Assert
        expect(timeSpan.toString()).toBe("1.12:30:15.15")
    });
});

describe("when getting totals", () => {
    it("should return total days", () => {
        // Arrange
        var timeSpan = new TimeSpan(1)

        // Act & Assert
        expect(timeSpan.totalDays()).toBe(1)
    });

    it("should return total hours", () => {
        // Arrange
        var timeSpan = new TimeSpan(1, 6)

        // Act & Assert
        expect(timeSpan.totalHours()).toBe(30)
    });

    it("should return total minutes", () => {
        // Arrange
        var timeSpan = new TimeSpan(1, 6, 30)

        // Act & Assert
        expect(timeSpan.totalMinutes()).toBe(1830)
    });

    it("should return total seconds", () => {
        // Arrange
        var timeSpan = new TimeSpan(1, 6, 30, 30)

        // Act & Assert
        expect(timeSpan.totalSeconds()).toBe(109830)
    });

    it("should return total milliseconds", () => {
        // Arrange
        var timeSpan = new TimeSpan(1, 6, 30, 30, 1000)

        // Act & Assert
        expect(timeSpan.totalMilliseconds()).toBe(109831000)
    });

    it("should return total ticks", () => {
        // Arrange
        var timeSpan = new TimeSpan(1, 6, 30, 30, 1000)

        // Act & Assert
        expect(timeSpan.ticks()).toBe(1098310000000)
    });
});


describe("when adding a TimeSpan to another", () => {
    it("should add positive TimeSpan", () => {
        // Arrange
        const timeSpan = new TimeSpan(1, 2, 3, 4, 5)
        const timeSpanToAdd = new TimeSpan(1, 2, 3, 4, 5)

        // Act
        const result = timeSpan.add(timeSpanToAdd)

        // Assert
        expect(result.days()).toBe(2)
        expect(result.hours()).toBe(4)
        expect(result.minutes()).toBe(6)
        expect(result.seconds()).toBe(8)
        expect(result.milliseconds()).toBe(10)
    });

    it("should subtract negative TimeSpan", () => {
        // Arrange
        const timeSpan = new TimeSpan(1, 2, 3, 4, 5)
        const timeSpanToAdd = new TimeSpan(-1, -2, -3, -4, -5)

        // Act
        const result = timeSpan.add(timeSpanToAdd)

        // Assert
        expect(result.days()).toBe(0)
        expect(result.hours()).toBe(0)
        expect(result.minutes()).toBe(0)
        expect(result.seconds()).toBe(0)
        expect(result.milliseconds()).toBe(0)
    });
});

describe("when subtracting a TimeSpan from another", () => {
    it("should subtract positive TimeSpan", () => {
        // Arrange
        const timeSpan = new TimeSpan(1, 2, 3, 4, 5)
        const timeSpanToSubtract = new TimeSpan(1, 2, 3, 4, 5)

        // Act
        const result = timeSpan.subtract(timeSpanToSubtract)

        // Assert
        expect(result.days()).toBe(0)
        expect(result.hours()).toBe(0)
        expect(result.minutes()).toBe(0)
        expect(result.seconds()).toBe(0)
        expect(result.milliseconds()).toBe(0)
    });

    it("should add negative TimeSpan", () => {
        // Arrange
        const timeSpan = new TimeSpan(1, 2, 3, 4, 5)
        const timeSpanToSubtract = new TimeSpan(-1, -2, -3, -4, -5)

        // Act
        const result = timeSpan.subtract(timeSpanToSubtract)

        // Assert
        expect(result.days()).toBe(2)
        expect(result.hours()).toBe(4)
        expect(result.minutes()).toBe(6)
        expect(result.seconds()).toBe(8)
        expect(result.milliseconds()).toBe(10)
    });
});

describe("when multiplying a TimeSpan by a factor", () => {
    it("should multiply value", () => {
        // Arrange
        const timeSpan = new TimeSpan(1, 2, 3, 4, 5)

        // Act
        const result = timeSpan.multiply(2)

        // Assert
        expect(result.days()).toBe(2)
        expect(result.hours()).toBe(4)
        expect(result.minutes()).toBe(6)
        expect(result.seconds()).toBe(8)
        expect(result.milliseconds()).toBe(10)
    });
});

describe("when dividing a TimeSpan by a factor", () => {
    it("should divide value", () => {
        // Arrange
        var timeSpan = new TimeSpan(2, 4, 6, 8, 10)

        // Act
        var result = timeSpan.divide(2)

        // Assert
        expect(result.days()).toBe(1)
        expect(result.hours()).toBe(2)
        expect(result.minutes()).toBe(3)
        expect(result.seconds()).toBe(4)
        expect(result.milliseconds()).toBe(5)
    });
});

describe("when checking TimeSpan equality", () => {
    it("should return true when comparing two equal TimeSpans", () => {
        // Arrange
        const timeSpan = new TimeSpan(1, 2, 3, 4, 5)
        const timeSpanToCompare = new TimeSpan(1, 2, 3, 4, 5)

        // Act
        const result = timeSpan.equals(timeSpanToCompare)

        // Assert
        expect(result).toBe(true);
    });

    it("should return false when comparing two different TimeSpans", () => {
        // Arrange
        const timeSpan = new TimeSpan(1, 2, 3, 4, 5)
        const timeSpanToCompare = new TimeSpan(1, 2, 3, 4, 6)

        // Act
        const result = timeSpan.equals(timeSpanToCompare)

        // Assert
        expect(result).toBe(false);
    });
});
