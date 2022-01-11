import { IValidator } from "./IValidator";
import { isLengthLessThan } from "../object";

export class MinLengthValidator implements IValidator {
    key: string;
    isInvalid: boolean;
    isDirty: boolean;
    feedbackMessage: string;
    min: number;

    constructor(min: number) {
        this.key = "MinLengthValidator";
        this.isInvalid = false;
        this.isDirty = false;
        this.feedbackMessage = `The length must be greater than ${min}.`;
        this.min = min;
    }

    validate(value: any): void {
        this.isInvalid = isLengthLessThan(value, this.min);
        this.isDirty = true;
    }
}