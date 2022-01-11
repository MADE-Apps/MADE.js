import { IValidator, IValidatorArgs } from ".";
import { isNullOrWhiteSpace } from "../string";

export class ValidatorArray extends Array<IValidator> {
    validatedCallback: (args: IValidatorArgs) => void;
    constructor(validatedCallback: (args: IValidatorArgs) => void = () => { }, ...validators: IValidator[]) {
        super(...validators);
        this.validatedCallback = validatedCallback;
    }

    validate(value: any) {
        this.forEach(v => v.validate(value));
        this.validatedCallback({ isInvalid: this.isInvalid(), isDirty: this.isDirty(), feedbackMessages: this.feedbackMessages() });
    }

    isInvalid() {
        return this.some(v => v.isInvalid);
    }

    isDirty() {
        return this.some(v => v.isDirty);
    }

    feedbackMessages() {
        return this.filter(v => v.isInvalid)
            .map(v => v.feedbackMessage)
            .filter(m => !isNullOrWhiteSpace(m));
    }

    setInvalid(invalid: boolean) {
        this.forEach(v => v.isInvalid = invalid);
    }

    setDirty(dirty: boolean) {
        this.forEach(v => v.isDirty = dirty);
    }
}