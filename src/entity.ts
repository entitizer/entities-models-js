
import { IModel, Model, PlainObject } from './model';

export interface IEntity extends IModel {
    readonly id: number;
}

export class Entity extends Model implements IEntity {
    get id(): number {
        return this.get<number>('id');
    }

    static create(fields?: PlainObject): Entity {
        return new Entity(fields);
    }
}
