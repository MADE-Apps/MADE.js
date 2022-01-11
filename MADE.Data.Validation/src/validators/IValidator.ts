export interface IValidator {
    /**
     * The key associated with the validator for referencing.
     */
    key: string;

    /**
     * A value indicating whether the data provided is in an invalid state.
     */
    isInvalid: boolean;

    /**
     * A value indicating whether the state of the validator is dirty by a change to the validation state.
     */
    isDirty: boolean;

    /**
     * The feedback message to display when in an invalid state.
     */
    feedbackMessage: string;

    /**
     * Executes data validation on the provided value.
     * @param value - The value to be validated.
     */
    validate(value: any): void;
}