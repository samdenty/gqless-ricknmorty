// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  ScalarNode,
  InputNode,
  InputNodeField,
  EnumNode
} from "gqless";

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get character() {
          return new FieldNode(
            schema.Character,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, true);
              }
            }),
            true
          );
        },
        get characters() {
          return new FieldNode(
            schema.Characters,
            new Arguments({
              get page() {
                return new ArgumentsField(schema.Int, true);
              },
              get filter() {
                return new ArgumentsField(schema.FilterCharacter, true);
              }
            }),
            true
          );
        },
        get location() {
          return new FieldNode(
            schema.Location,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, true);
              }
            }),
            true
          );
        },
        get locations() {
          return new FieldNode(
            schema.Locations,
            new Arguments({
              get page() {
                return new ArgumentsField(schema.Int, true);
              },
              get filter() {
                return new ArgumentsField(schema.FilterLocation, true);
              }
            }),
            true
          );
        },
        get episode() {
          return new FieldNode(
            schema.Episode,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, true);
              }
            }),
            true
          );
        },
        get episodes() {
          return new FieldNode(
            schema.Episodes,
            new Arguments({
              get page() {
                return new ArgumentsField(schema.Int, true);
              },
              get filter() {
                return new ArgumentsField(schema.FilterEpisode, true);
              }
            }),
            true
          );
        }
      },
      { name: "Query", extension: ((extensions as any) || {}).Query }
    );
  },
  get ID() {
    return new ScalarNode({
      name: "ID",
      extension: ((extensions as any) || {}).ID
    });
  },
  get Character() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get status() {
          return new FieldNode(schema.String, undefined, true);
        },
        get species() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get gender() {
          return new FieldNode(schema.String, undefined, true);
        },
        get origin() {
          return new FieldNode(schema.Location, undefined, true);
        },
        get location() {
          return new FieldNode(schema.Location, undefined, true);
        },
        get image() {
          return new FieldNode(schema.String, undefined, true);
        },
        get episode() {
          return new FieldNode(
            new ArrayNode(schema.Episode, true),
            undefined,
            true
          );
        },
        get created() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Character", extension: ((extensions as any) || {}).Character }
    );
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get Location() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get dimension() {
          return new FieldNode(schema.String, undefined, true);
        },
        get residents() {
          return new FieldNode(
            new ArrayNode(schema.Character, true),
            undefined,
            true
          );
        },
        get created() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Location", extension: ((extensions as any) || {}).Location }
    );
  },
  get Episode() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get air_date() {
          return new FieldNode(schema.String, undefined, true);
        },
        get episode() {
          return new FieldNode(schema.String, undefined, true);
        },
        get characters() {
          return new FieldNode(
            new ArrayNode(schema.Character, true),
            undefined,
            true
          );
        },
        get created() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Episode", extension: ((extensions as any) || {}).Episode }
    );
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get FilterCharacter() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get status() {
          return new InputNodeField(schema.String, true);
        },
        get species() {
          return new InputNodeField(schema.String, true);
        },
        get type() {
          return new InputNodeField(schema.String, true);
        },
        get gender() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "FilterCharacter" }
    );
  },
  get Characters() {
    return new ObjectNode(
      {
        get info() {
          return new FieldNode(schema.Info, undefined, true);
        },
        get results() {
          return new FieldNode(
            new ArrayNode(schema.Character, true),
            undefined,
            true
          );
        }
      },
      { name: "Characters", extension: ((extensions as any) || {}).Characters }
    );
  },
  get Info() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get pages() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get next() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get prev() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      { name: "Info", extension: ((extensions as any) || {}).Info }
    );
  },
  get FilterLocation() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get type() {
          return new InputNodeField(schema.String, true);
        },
        get dimension() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "FilterLocation" }
    );
  },
  get Locations() {
    return new ObjectNode(
      {
        get info() {
          return new FieldNode(schema.Info, undefined, true);
        },
        get results() {
          return new FieldNode(
            new ArrayNode(schema.Location, true),
            undefined,
            true
          );
        }
      },
      { name: "Locations", extension: ((extensions as any) || {}).Locations }
    );
  },
  get FilterEpisode() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get episode() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "FilterEpisode" }
    );
  },
  get Episodes() {
    return new ObjectNode(
      {
        get info() {
          return new FieldNode(schema.Info, undefined, true);
        },
        get results() {
          return new FieldNode(
            new ArrayNode(schema.Episode, true),
            undefined,
            true
          );
        }
      },
      { name: "Episodes", extension: ((extensions as any) || {}).Episodes }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get CacheControlScope() {
    return new EnumNode({ name: "CacheControlScope" });
  },
  get Upload() {
    return new ScalarNode({
      name: "Upload",
      extension: ((extensions as any) || {}).Upload
    });
  }
};

lazyGetters(schema);
