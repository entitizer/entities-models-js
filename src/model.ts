
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
            this.set(fields);
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
            // recursive toJSON
            value = localToJSON(value);

            if (undefined !== value) {
                fields[prop] = value;
            }
        }

        return fields;
    }
}

function localToJSON(value: any): any {
    if (~[null, undefined].indexOf(value)) {
        return value;
    }
    if (typeof value.toJSON === 'function') {
        value = value.toJSON();
    } else if (Array.isArray(value)) {
        return value.map(item => localToJSON(item));
    }
    return value;
}
