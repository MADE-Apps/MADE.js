import { RegexValidator } from "./RegexValidator";

export class EmailValidator extends RegexValidator {
    constructor() {
        super(/^^(?!\.)(""([^""\r\\]|\\[""\r\\])*""|([-a-zA-Z0-9!#$%&'*+/=?^_`{|}~]|(?<!\.)\.)*)(?<!\.)@[a-z0-9][\w\.-]*[a-z0-9]\.[a-z][a-z\.]*[a-z]$/);
        this.key = "EmailValidator";
        this.feedbackMessage = "The value must be a valid email address, e.g. test@example.com.";
    }
}