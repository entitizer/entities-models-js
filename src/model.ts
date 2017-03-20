
export type IPlainObject<T> = { [index: string]: T }
export type PlainObject = IPlainObject<any>;

function checkField(name: string) {
    if (typeof name !== 'string') {
        throw new Error('Invalid model fieldName type');
    }
}

export interface IModel {
    set<T>(fieldName: string | PlainObject, fieldValue?: T);
    get<T>(fieldName: string): T;
    toJSON(fieldNames?: string[]): PlainObject;
}

/**
 * Model base class
 */
export abstract class Model implements IModel {
    private _fields: PlainObject = {};
    // private _keys?: any;

    constructor(fields?: PlainObject) {
        if (fields) {
            if (typeof fields !== 'object') {
                throw new Error('`fields` param must be an oject');
            }
            for (let prop in fields) {
                this.set(prop, fields[prop]);
            }
        }
    }

    get<T>(fieldName: string): T {
        checkField(fieldName);

        return this._fields[fieldName];
    }

    set<T>(fieldName: string | PlainObject, fieldValue?: T) {
        if (typeof fieldName === 'string') {
            if (fieldValue === undefined) {
                delete this._fields[fieldName];
            } else {
                this._fields[fieldName] = fieldValue;
            }
        } else {
            for (var prop in fieldName) {
                if (fieldName.hasOwnProperty(prop)) {
                    this.set(prop, fieldName[prop]);
                }
            }
        }
    }

    toJSON(fieldNames?: string[]): PlainObject {
        const fields: PlainObject = {};

        for (let prop in this._fields) {
            if (fieldNames && fieldNames.indexOf(prop) < 0) {
                continue;
            }
            let value = this._fields[prop];
            if (value && typeof value.toJSON === 'function') {
                value = value.toJSON();
            }
            fields[prop] = value;
        }

        return fields;
    }
}
