import { RegexValidator } from "./RegexValidator";

export class AlphaNumericValidator extends RegexValidator {
    constructor() {
        super(/^[a-zA-Z0-9]*$/);
        this.key = "AlphaNumericValidator";
        this.feedbackMessage = "The value must only contain letters or numbers.";
    }
}