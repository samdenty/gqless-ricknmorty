import * as extensions from "../extensions";
import {
  TypeData,
  ScalarType,
  EnumType,
  FieldsType,
  FieldsTypeArg
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name CacheControlScope
 * @type ENUM
 */
type t_CacheControlScope = EnumType<"PRIVATE" | "PUBLIC">;

/**
 * @name Character
 * @type OBJECT
 */
type t_Character = FieldsType<
  {
    __typename: t_String<"Character">;

    /**
     * Time at which the character was created in the database.
     */
    created: t_String | null;

    /**
     * Episodes in which this character appeared.
     */
    episode: (t_Episode | null)[] | null;

    /**
     * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
     */
    gender: t_String | null;

    /**
     * The id of the character.
     */
    id: t_ID | null;

    /**
     * Link to the character's image.
     * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
     */
    image: t_String | null;

    /**
     * The character's last known location
     */
    location: t_Location | null;

    /**
     * The name of the character.
     */
    name: t_String | null;

    /**
     * The character's origin location
     */
    origin: t_Location | null;

    /**
     * The species of the character.
     */
    species: t_String | null;

    /**
     * The status of the character ('Alive', 'Dead' or 'unknown').
     */
    status: t_String | null;

    /**
     * The type or subspecies of the character.
     */
    type: t_String | null;
  },
  Extension<"Character">
>;

/**
 * @name Characters
 * @type OBJECT
 */
type t_Characters = FieldsType<
  {
    __typename: t_String<"Characters">;
    info: t_Info | null;
    results: (t_Character | null)[] | null;
  },
  Extension<"Characters">
>;

/**
 * @name Episode
 * @type OBJECT
 */
type t_Episode = FieldsType<
  {
    __typename: t_String<"Episode">;

    /**
     * The air date of the episode.
     */
    air_date: t_String | null;

    /**
     * List of characters who have been seen in the episode.
     */
    characters: (t_Character | null)[] | null;

    /**
     * Time at which the episode was created in the database.
     */
    created: t_String | null;

    /**
     * The code of the episode.
     */
    episode: t_String | null;

    /**
     * The id of the episode.
     */
    id: t_ID | null;

    /**
     * The name of the episode.
     */
    name: t_String | null;
  },
  Extension<"Episode">
>;

/**
 * @name Episodes
 * @type OBJECT
 */
type t_Episodes = FieldsType<
  {
    __typename: t_String<"Episodes">;
    info: t_Info | null;
    results: (t_Episode | null)[] | null;
  },
  Extension<"Episodes">
>;

/**
 * @name FilterCharacter
 * @type INPUT_OBJECT
 */
export type FilterCharacter = {
  gender: string | null;
  name: string | null;
  species: string | null;
  status: string | null;
  type: string | null;
};

/**
 * @name FilterEpisode
 * @type INPUT_OBJECT
 */
export type FilterEpisode = { episode: string | null; name: string | null };

/**
 * @name FilterLocation
 * @type INPUT_OBJECT
 */
export type FilterLocation = {
  dimension: string | null;
  name: string | null;
  type: string | null;
};

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<"Float">>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name Info
 * @type OBJECT
 */
type t_Info = FieldsType<
  {
    __typename: t_String<"Info">;

    /**
     * The length of the response.
     */
    count: t_Int | null;

    /**
     * Number of the next page (if it exists)
     */
    next: t_Int | null;

    /**
     * The amount of pages.
     */
    pages: t_Int | null;

    /**
     * Number of the previous page (if it exists)
     */
    prev: t_Int | null;
  },
  Extension<"Info">
>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name Location
 * @type OBJECT
 */
type t_Location = FieldsType<
  {
    __typename: t_String<"Location">;

    /**
     * Time at which the location was created in the database.
     */
    created: t_String | null;

    /**
     * The dimension in which the location is located.
     */
    dimension: t_String | null;

    /**
     * The id of the location.
     */
    id: t_ID | null;

    /**
     * The name of the location.
     */
    name: t_String | null;

    /**
     * List of characters who have been last seen in the location.
     */
    residents: (t_Character | null)[] | null;

    /**
     * The type of the location.
     */
    type: t_String | null;
  },
  Extension<"Location">
>;

/**
 * @name Locations
 * @type OBJECT
 */
type t_Locations = FieldsType<
  {
    __typename: t_String<"Locations">;
    info: t_Info | null;
    results: (t_Location | null)[] | null;
  },
  Extension<"Locations">
>;

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<"Query">;

    /**
     * Get a specific character by ID
     */
    character: FieldsTypeArg<{ id?: string | null }, t_Character | null>;

    /**
     * Get the list of all characters
     */
    characters: FieldsTypeArg<
      { filter?: FilterCharacter | null; page?: number | null },
      t_Characters | null
    >;

    /**
     * Get a specific episode by ID
     */
    episode: FieldsTypeArg<{ id?: string | null }, t_Episode | null>;

    /**
     * Get the list of all episodes
     */
    episodes: FieldsTypeArg<
      { filter?: FilterEpisode | null; page?: number | null },
      t_Episodes | null
    >;

    /**
     * Get a specific locations by ID
     */
    location: FieldsTypeArg<{ id?: string | null }, t_Location | null>;

    /**
     * Get the list of all locations
     */
    locations: FieldsTypeArg<
      { filter?: FilterLocation | null; page?: number | null },
      t_Locations | null
    >;
  },
  Extension<"Query">
>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name Upload
 * @type SCALAR
 */
type t_Upload<T extends any = any> = ScalarType<T, Extension<"Upload">>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    args: t___InputValue[];
    description: t_String | null;
    locations: t___DirectiveLocation[];
    name: t_String;
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "ARGUMENT_DEFINITION"
  | "ENUM"
  | "ENUM_VALUE"
  | "FIELD"
  | "FIELD_DEFINITION"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "INPUT_FIELD_DEFINITION"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "MUTATION"
  | "OBJECT"
  | "QUERY"
  | "SCALAR"
  | "SCHEMA"
  | "SUBSCRIPTION"
  | "UNION"
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    deprecationReason: t_String | null;
    description: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    args: t___InputValue[];
    deprecationReason: t_String | null;
    description: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
    type: t___Type;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    defaultValue: t_String | null;
    description: t_String | null;
    name: t_String;
    type: t___Type;
  },
  Extension<"__InputValue">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;
    directives: t___Directive[];
    mutationType: t___Type | null;
    queryType: t___Type;
    subscriptionType: t___Type | null;
    types: t___Type[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    description: t_String | null;
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    inputFields: t___InputValue[] | null;
    interfaces: t___Type[] | null;
    kind: t___TypeKind;
    name: t_String | null;
    ofType: t___Type | null;
    possibleTypes: t___Type[] | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "ENUM"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "LIST"
  | "NON_NULL"
  | "OBJECT"
  | "SCALAR"
  | "UNION"
>;

/**
 * @name query_root
 * @type OBJECT
 */
type t_query_root = FieldsType<
  {
    __typename: t_String<"query_root">;

    /**
     * Get a specific character by ID
     */
    character: FieldsTypeArg<{ id?: string | null }, t_Character | null>;

    /**
     * Get the list of all characters
     */
    characters: FieldsTypeArg<
      { filter?: FilterCharacter | null; page?: number | null },
      t_Characters | null
    >;

    /**
     * Get a specific episode by ID
     */
    episode: FieldsTypeArg<{ id?: string | null }, t_Episode | null>;

    /**
     * Get the list of all episodes
     */
    episodes: FieldsTypeArg<
      { filter?: FilterEpisode | null; page?: number | null },
      t_Episodes | null
    >;

    /**
     * Get a specific locations by ID
     */
    location: FieldsTypeArg<{ id?: string | null }, t_Location | null>;

    /**
     * Get the list of all locations
     */
    locations: FieldsTypeArg<
      { filter?: FilterLocation | null; page?: number | null },
      t_Locations | null
    >;
  },
  Extension<"query_root">
>;

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name CacheControlScope
 * @type ENUM
 */
export type CacheControlScope = TypeData<t_CacheControlScope>;

/**
 * @name Character
 * @type OBJECT
 */
export type Character = TypeData<t_Character>;

/**
 * @name Characters
 * @type OBJECT
 */
export type Characters = TypeData<t_Characters>;

/**
 * @name Episode
 * @type OBJECT
 */
export type Episode = TypeData<t_Episode>;

/**
 * @name Episodes
 * @type OBJECT
 */
export type Episodes = TypeData<t_Episodes>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Info
 * @type OBJECT
 */
export type Info = TypeData<t_Info>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name Location
 * @type OBJECT
 */
export type Location = TypeData<t_Location>;

/**
 * @name Locations
 * @type OBJECT
 */
export type Locations = TypeData<t_Locations>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name Upload
 * @type SCALAR
 */
export type Upload = TypeData<t_Upload>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export type __DirectiveLocation = TypeData<t___DirectiveLocation>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export type __TypeKind = TypeData<t___TypeKind>;

/**
 * @name query_root
 * @type OBJECT
 */
export type query_root = TypeData<t_query_root>;
