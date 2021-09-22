import { IValueConverter } from "./IValueConverter";

export class BooleanToStringValueConverter implements IValueConverter<boolean, string> {
    trueValue: string;
    falseValue: string;

    constructor(trueValue: string = 'Yes', falseValue: string = 'No') {
        this.trueValue = trueValue;
        this.falseValue = falseValue;
    }

    convert(value: boolean, _parameter: any = null): string {
        return value ? this.trueValue : this.falseValue;
    }
    
    convertBack(value: string, _parameter: any = null): boolean {
        return value == this.trueValue;
    }
}