import { IValidator } from "./IValidator";
import { isGreaterThan, isLessThan } from "../object";

export class BetweenValidator implements IValidator {
    key: string;
    isInvalid: boolean;
    isDirty: boolean;
    feedbackMessage: string;
    min: number;
    max: number;

    constructor(min: number, max: number) {
        this.key = "BetweenValidator";
        this.isInvalid = false;
        this.isDirty = false;
        this.feedbackMessage = `The value must be between ${min} and ${max}.`;
        this.min = min;
        this.max = max;
    }

    validate(value: any): void {
        var num = Number(value);
        this.isInvalid = isNaN(num) || isLessThan(num, this.min) || isGreaterThan(num, this.max);
        this.isDirty = true;
    }
}