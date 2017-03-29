
import { IModel, Model, PlainObject, IPlainObject } from './model';

export type EntityTypeValue = 'H' | 'P' | 'O' | 'L' | 'E';

export class EntityTypes {
    static PERSON: EntityTypeValue = 'H';
    static PRODUCT: EntityTypeValue = 'P';
    static ORGANIZATION: EntityTypeValue = 'O';
    static LOCATION: EntityTypeValue = 'L';
    static EVENT: EntityTypeValue = 'E';
}

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
    readonly id: string;
    /**
     * Wikidata id
     */
    readonly wikiId: string;
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
    readonly types: string[];
}

/**
 * Entity class
 */
export class Entity extends Model implements IEntity {

    get lang(): string {
        return this.get<string>('lang');
    }
    set lang(value: string) {
        this.set<string>('lang', value);
    }

    get id(): string {
        return this.get<string>('id');
    }
    set id(value: string) {
        this.set<string>('id', value);
    }

    get wikiId(): string {
        return this.get<string>('wikiId');
    }
    set wikiId(value: string) {
        this.set<string>('wikiId', value);
    }

    get name(): string {
        return this.get<string>('name');
    }
    set name(value: string) {
        this.set<string>('name', value);
    }

    get abbr(): string {
        return this.get<string>('abbr');
    }
    set abbr(value: string) {
        this.set<string>('abbr', value);
    }

    get description(): string {
        return this.get<string>('description');
    }
    set description(value: string) {
        this.set<string>('description', value);
    }

    get pageId(): number {
        return this.get<number>('pageId');
    }
    set pageId(value: number) {
        this.set<number>('pageId', value);
    }

    get aliases(): string[] {
        return this.get<string[]>('aliases');
    }
    set aliases(value: string[]) {
        this.set<string[]>('aliases', value);
    }

    get extract(): string {
        return this.get<string>('extract');
    }
    set extract(value: string) {
        this.set<string>('extract', value);
    }

    get title(): string {
        return this.get<string>('title');
    }
    set title(value: string) {
        this.set<string>('title', value);
    }

    get wikiImage(): string {
        return this.get<string>('wikiImage');
    }
    set wikiImage(value: string) {
        this.set<string>('wikiImage', value);
    }

    get type(): EntityTypeValue {
        return this.get<EntityTypeValue>('type');
    }
    set type(value: EntityTypeValue) {
        this.set<EntityTypeValue>('type', value);
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
    set oldId(value: number) {
        this.set<number>('oldId', value);
    }

    get oldSlug(): string {
        return this.get<string>('oldSlug');
    }
    set oldSlug(value: string) {
        this.set<string>('oldSlug', value);
    }

    get types(): string[] {
        return this.get<string[]>('types');
    }
    set types(value: string[]) {
        this.set<string[]>('types', value);
    }

    static create(fields?: PlainObject): Entity {
        return new Entity(fields);
    }
}
