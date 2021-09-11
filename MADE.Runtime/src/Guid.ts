import IEquatable from "./IEquatable";

/**
 * Defines a globally unique identifier (GUID).
 */
export default class Guid implements IEquatable<Guid> {

  private _guid: string;

  /**
   * Initializes a new instance of the Guid class using a Guid value represented by a string.
   * @param {string} guid - A string that contains a valid GUID.
   */
  constructor(public guid: string) {
    if (!this.isValid(guid)) {
      throw new Error('The format of the Guid is invalid.');
    }

    this._guid = guid.toLowerCase();
  }

  /**
   * Returns a value indicating whether this instance and a specified Guid object represent the same value.
   * @param {Guid} other - A Guid to compare to this instance.
   * @returns {boolean} True if the Guid is equal to this instance; otherwise, false.
   */
  public equals(other: Guid): boolean {
    return this.toString() === other.toString();
  }

  /**
   * Returns a string representation of the value of this instance of a Guid.
   * @returns {string} The value of this Guid, formatted as: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
   */
  public toString(): string {
    return this._guid;
  }

  /**
   * An instance of the Guid structure whose value is all zeros.
   * @returns {Guid} A zero GUID.
   */
  static empty(): Guid {
    return new Guid('00000000-0000-0000-0000-000000000000');
  }

  /**
   * Initializes a new instance of the Guid with a value that is created from a sequence of random bytes.
   * @returns {Guid} A new GUID.
   */
  static newGuid(): Guid {
    var result: string;
    var i: string;
    var j: number;

    result = "";
    for (j = 0; j < 32; j++) {
      if (j == 8 || j == 12 || j == 16 || j == 20)
        result = result + '-';
      i = Math.floor(Math.random() * 16).toString(16).toLowerCase();
      result = result + i;
    }

    return new Guid(result);
  }

  private isValid(guid: string): boolean {
    
    var guidRegex: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return guidRegex.test(guid);
  }
}
