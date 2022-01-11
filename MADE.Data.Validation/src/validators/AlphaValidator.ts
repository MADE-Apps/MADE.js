import { RegexValidator } from "./RegexValidator";

export class AlphaValidator extends RegexValidator {
    constructor() {
        super(/^[a-zA-Z]*$/);
        this.key = "AlphaValidator";
        this.feedbackMessage = "The value must only contain letters.";
    }
}