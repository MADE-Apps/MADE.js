import { IValidator } from "./IValidator";
import { isIpAddress } from "../object";

export class IpAddressValidator implements IValidator {
    key: string;
    isInvalid: boolean;
    isDirty: boolean;
    feedbackMessage: string;

    constructor() {
        this.key = "IpAddressValidator";
        this.isInvalid = false;
        this.isDirty = false;
        this.feedbackMessage = "The value must be a valid IP address, e.g. 192.168.0.1.";
    }

    validate(value: any): void {
        this.isInvalid = !isIpAddress(value);
        this.isDirty = true;
    }
}