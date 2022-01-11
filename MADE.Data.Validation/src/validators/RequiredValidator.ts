import { IValidator } from "./IValidator";
import { hasValue } from "../object";

export class RequiredValidator implements IValidator {
    key: string;
    isInvalid: boolean;
    isDirty: boolean;
    feedbackMessage: string;

    constructor() {
        this.key = "RequiredValidator";
        this.isInvalid = false;
        this.isDirty = false;
        this.feedbackMessage = `A value is required.`;
    }

    validate(value: any): void {
        this.isInvalid = !hasValue(value);
        this.isDirty = true;
    }
}