
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface StringDecoded {
    result: string;
}

export interface IQuery {
    example(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    parseString(unparsedString: string): Nullable<StringDecoded> | Promise<Nullable<StringDecoded>>;
}

type Nullable<T> = T | null;
