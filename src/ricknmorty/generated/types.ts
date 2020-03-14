import * as extensions from "../extensions";
import {
  TypeData,
  FieldsType,
  FieldsTypeArg,
  ScalarType,
  EnumType
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

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
      { page?: number | null; filter?: FilterCharacter | null },
      t_Characters | null
    >;

    /**
     * Get a specific locations by ID
     */
    location: FieldsTypeArg<{ id?: string | null }, t_Location | null>;

    /**
     * Get the list of all locations
     */
    locations: FieldsTypeArg<
      { page?: number | null; filter?: FilterLocation | null },
      t_Locations | null
    >;

    /**
     * Get a specific episode by ID
     */
    episode: FieldsTypeArg<{ id?: string | null }, t_Episode | null>;

    /**
     * Get the list of all episodes
     */
    episodes: FieldsTypeArg<
      { page?: number | null; filter?: FilterEpisode | null },
      t_Episodes | null
    >;
  },
  Extension<"Query">
>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name Character
 * @type OBJECT
 */
type t_Character = FieldsType<
  {
    __typename: t_String<"Character">;

    /**
     * The id of the character.
     */
    id: t_ID | null;

    /**
     * The name of the character.
     */
    name: t_String | null;

    /**
     * The status of the character ('Alive', 'Dead' or 'unknown').
     */
    status: t_String | null;

    /**
     * The species of the character.
     */
    species: t_String | null;

    /**
     * The type or subspecies of the character.
     */
    type: t_String | null;

    /**
     * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
     */
    gender: t_String | null;

    /**
     * The character's origin location
     */
    origin: t_Location | null;

    /**
     * The character's last known location
     */
    location: t_Location | null;

    /**
     * Link to the character's image.
     * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
     */
    image: t_String | null;

    /**
     * Episodes in which this character appeared.
     */
    episode: (t_Episode | null)[] | null;

    /**
     * Time at which the character was created in the database.
     */
    created: t_String | null;
  },
  Extension<"Character">
>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name Location
 * @type OBJECT
 */
type t_Location = FieldsType<
  {
    __typename: t_String<"Location">;

    /**
     * The id of the location.
     */
    id: t_ID | null;

    /**
     * The name of the location.
     */
    name: t_String | null;

    /**
     * The type of the location.
     */
    type: t_String | null;

    /**
     * The dimension in which the location is located.
     */
    dimension: t_String | null;

    /**
     * List of characters who have been last seen in the location.
     */
    residents: (t_Character | null)[] | null;

    /**
     * Time at which the location was created in the database.
     */
    created: t_String | null;
  },
  Extension<"Location">
>;

/**
 * @name Episode
 * @type OBJECT
 */
type t_Episode = FieldsType<
  {
    __typename: t_String<"Episode">;

    /**
     * The id of the episode.
     */
    id: t_ID | null;

    /**
     * The name of the episode.
     */
    name: t_String | null;

    /**
     * The air date of the episode.
     */
    air_date: t_String | null;

    /**
     * The code of the episode.
     */
    episode: t_String | null;

    /**
     * List of characters who have been seen in the episode.
     */
    characters: (t_Character | null)[] | null;

    /**
     * Time at which the episode was created in the database.
     */
    created: t_String | null;
  },
  Extension<"Episode">
>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name FilterCharacter
 * @type INPUT_OBJECT
 */
export type FilterCharacter = {
  name: string | null;
  status: string | null;
  species: string | null;
  type: string | null;
  gender: string | null;
};

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
     * The amount of pages.
     */
    pages: t_Int | null;

    /**
     * Number of the next page (if it exists)
     */
    next: t_Int | null;

    /**
     * Number of the previous page (if it exists)
     */
    prev: t_Int | null;
  },
  Extension<"Info">
>;

/**
 * @name FilterLocation
 * @type INPUT_OBJECT
 */
export type FilterLocation = {
  name: string | null;
  type: string | null;
  dimension: string | null;
};

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
 * @name FilterEpisode
 * @type INPUT_OBJECT
 */
export type FilterEpisode = { name: string | null; episode: string | null };

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
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[];

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type;

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType: t___Type | null;

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType: t___Type | null;

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[];
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
    kind: t___TypeKind;
    name: t_String | null;
    description: t_String | null;
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    interfaces: t___Type[] | null;
    possibleTypes: t___Type[] | null;
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    inputFields: t___InputValue[] | null;
    ofType: t___Type | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL"
>;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    name: t_String;
    description: t_String | null;
    args: t___InputValue[];
    type: t___Type;
    isDeprecated: t_Boolean;
    deprecationReason: t_String | null;
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
    name: t_String;
    description: t_String | null;
    type: t___Type;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue: t_String | null;
  },
  Extension<"__InputValue">
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    name: t_String;
    description: t_String | null;
    isDeprecated: t_Boolean;
    deprecationReason: t_String | null;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    name: t_String;
    description: t_String | null;
    locations: t___DirectiveLocation[];
    args: t___InputValue[];
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "QUERY"
  | "MUTATION"
  | "SUBSCRIPTION"
  | "FIELD"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "VARIABLE_DEFINITION"
  | "SCHEMA"
  | "SCALAR"
  | "OBJECT"
  | "FIELD_DEFINITION"
  | "ARGUMENT_DEFINITION"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "ENUM_VALUE"
  | "INPUT_OBJECT"
  | "INPUT_FIELD_DEFINITION"
>;

/**
 * @name CacheControlScope
 * @type ENUM
 */
type t_CacheControlScope = EnumType<"PUBLIC" | "PRIVATE">;

/**
 * @name Upload
 * @type SCALAR
 */
type t_Upload<T extends any = any> = ScalarType<T, Extension<"Upload">>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Character
 * @type OBJECT
 */
export type Character = TypeData<t_Character>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name Location
 * @type OBJECT
 */
export type Location = TypeData<t_Location>;

/**
 * @name Episode
 * @type OBJECT
 */
export type Episode = TypeData<t_Episode>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name Characters
 * @type OBJECT
 */
export type Characters = TypeData<t_Characters>;

/**
 * @name Info
 * @type OBJECT
 */
export type Info = TypeData<t_Info>;

/**
 * @name Locations
 * @type OBJECT
 */
export type Locations = TypeData<t_Locations>;

/**
 * @name Episodes
 * @type OBJECT
 */
export type Episodes = TypeData<t_Episodes>;

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
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

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
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

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
 * @name CacheControlScope
 * @type ENUM
 */
export type CacheControlScope = TypeData<t_CacheControlScope>;

/**
 * @name Upload
 * @type SCALAR
 */
export type Upload = TypeData<t_Upload>;
