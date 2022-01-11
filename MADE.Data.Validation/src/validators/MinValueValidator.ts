import { IValidator } from "./IValidator";
import { isLessThan } from "../object";

export class MinValueValidator implements IValidator {
    key: string;
    isInvalid: boolean;
    isDirty: boolean;
    feedbackMessage: string;
    min: number;

    constructor(min: number) {
        this.key = "MinValueValidator";
        this.isInvalid = false;
        this.isDirty = false;
        this.feedbackMessage = `The value must be greater than ${min}.`;
        this.min = min;
    }

    validate(value: any): void {
        this.isInvalid = isLessThan(value, this.min);
        this.isDirty = true;
    }
}