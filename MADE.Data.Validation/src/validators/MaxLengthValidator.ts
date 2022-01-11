import { IValidator } from "./IValidator";
import { isLengthGreaterThan } from "../object";

export class MaxLengthValidator implements IValidator {
    key: string;
    isInvalid: boolean;
    isDirty: boolean;
    feedbackMessage: string;
    max: number;

    constructor(max: number) {
        this.key = "MaxLengthValidator";
        this.isInvalid = false;
        this.isDirty = false;
        this.feedbackMessage = `The length must be less than ${max}.`;
        this.max = max;
    }

    validate(value: any): void {
        this.isInvalid = isLengthGreaterThan(value, this.max);
        this.isDirty = true;
    }
}