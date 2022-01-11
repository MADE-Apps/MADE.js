import { IValidator } from "./IValidator";
import { isGreaterThan } from "../object";

export class MaxValueValidator implements IValidator {
    key: string;
    isInvalid: boolean;
    isDirty: boolean;
    feedbackMessage: string;
    max: number;

    constructor(max: number) {
        this.key = "MaxValueValidator";
        this.isInvalid = false;
        this.isDirty = false;
        this.feedbackMessage = `The value must be less than ${max}.`;
        this.max = max;
    }

    validate(value: any): void {
        this.isInvalid = isGreaterThan(value, this.max);
        this.isDirty = true;
    }
}