import { IValidator } from "./IValidator";

export class ContainsValidator implements IValidator {
    key: string;
    isInvalid: boolean;
    isDirty: boolean;
    feedbackMessage: string;
    options: any[];

    constructor(options: any[]) {
        this.key = "BetweenValidator";
        this.isInvalid = false;
        this.isDirty = false;
        this.feedbackMessage = `The value is not a valid option.`;
        this.options = options;
    }

    validate(value: any): void {
        this.isInvalid = this.options.indexOf(value) === -1;
        this.isDirty = true;
    }
}