/**
 * Defines an interface for a value converter that converts from a value to another.
 */
export interface IValueConverter<TFrom, TTo> {
    /**
     * Converts the from value to the to value, with an optional conversion parameter.
     * @param {TFrom} value - The value to convert.
     * @param {any} parameter - The optional parameter used to help with the conversion.
     * @return {TTo} The converted to value.
     */
    convert(value: TFrom, parameter: any): TTo;

    /**
     * Converts the to value to the from value, with an optional conversion parameter.
     * @param {TTo} value - The value to convert.
     * @param {any} parameter - The optional parameter used to help with the conversion.
     * @return {TFrom} The converted from value.
     */
    convertBack(value: TTo, parameter: any): TFrom;
}