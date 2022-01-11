import { IValidator } from "./IValidator";

export class RegexValidator implements IValidator {
    key: string;
    isInvalid: boolean;
    isDirty: boolean;
    feedbackMessage: string;
    pattern: RegExp;

    constructor(pattern: RegExp) {
        this.key = "RegexValidator";
        this.isInvalid = false;
        this.isDirty = false;
        this.feedbackMessage = "The value does not match the valid mask.";
        this.pattern = pattern;
    }

    validate(value: any): void {
        var str = value?.toString() ?? "";
        this.isInvalid = !this.pattern.test(str);
        this.isDirty = true;
    }
}