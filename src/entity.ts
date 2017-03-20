
import { IModel, Model, PlainObject, IPlainObject } from './model';

export type EntityTypeValue = 'P' | 'O' | 'L' | 'E';

export type EntityDataItem = {
    value: string;
    label?: string;
}

export type EntityData = IPlainObject<EntityDataItem[]>;

/**
 * Entity interface
 */
export interface IEntity extends IModel {
    readonly lang: string;
    /**
     * Entitizer entity id
     */
    readonly id: number;
    /**
     * Wikidata numeric id
     */
    readonly wikiId: number;
    /**
     * Entity name = WikiEntity label
     */
    readonly name: string;
    /**
     * Entity abbreviation
     */
    readonly abbr: string;
    readonly description: string;
    /**
     * Wikipadia page id
     */
    readonly pageId: number;
    readonly aliases: string[];
    readonly extract: string;
    /**
     * Wikipadia page title
     */
    readonly title: string;
    /**
     * Wikipadia image name
     */
    readonly wikiImage: string;

    readonly type: EntityTypeValue;

    readonly data: EntityData;

    readonly oldId: number;
    readonly oldSlug: string;
}

/**
 * Entity class
 */
export class Entity extends Model implements IEntity {

    get lang(): string {
        return this.get<string>('lang');
    }

    get id(): number {
        return this.get<number>('id');
    }

    get wikiId(): number {
        return this.get<number>('wikiId');
    }

    get name(): string {
        return this.get<string>('name');
    }

    get abbr(): string {
        return this.get<string>('abbr');
    }

    get description(): string {
        return this.get<string>('description');
    }

    get pageId(): number {
        return this.get<number>('pageId');
    }

    get aliases(): string[] {
        return this.get<string[]>('aliases');
    }

    get extract(): string {
        return this.get<string>('extract');
    }

    get title(): string {
        return this.get<string>('title');
    }

    get wikiImage(): string {
        return this.get<string>('wikiImage');
    }

    get type(): EntityTypeValue {
        return this.get<EntityTypeValue>('type');
    }

    get data(): EntityData {
        return this.get<EntityData>('data');
    }

    set data(data: EntityData) {
        this.set<EntityData>('data', data);
    }

    get oldId(): number {
        return this.get<number>('oldId');
    }

    get oldSlug(): string {
        return this.get<string>('oldSlug');
    }

    static create(fields?: PlainObject): Entity {
        return new Entity(fields);
    }
}
