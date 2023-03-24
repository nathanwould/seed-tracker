"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core3 = require("@keystone-6/core");

// models/Seed.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var Seed = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields.text)({
      ui: {
        description: "Common name of plant"
      },
      validation: { isRequired: true }
    }),
    species: (0, import_fields.text)({
      ui: {
        description: "Binomial latin name of plant if available or important"
      }
    }),
    plantType: (0, import_fields.text)({
      ui: {
        description: 'I.E. "pepper" or "cabbage"'
      },
      validation: { isRequired: true }
    }),
    companyName: (0, import_fields.text)({
      validation: { isRequired: true }
    }),
    link: (0, import_fields.text)(),
    packedForSeason: (0, import_fields.text)({
      ui: {
        description: "The year it was packed for"
      }
    }),
    daysToEmerge: (0, import_fields.text)({
      ui: {
        description: "It can be a number or range of numbers"
      }
    }),
    plantingDepth: (0, import_fields.text)({
      ui: {
        description: 'Try to include a unit like " or cm'
      }
    }),
    seedSpacing: (0, import_fields.text)({
      ui: {
        description: "In inches please!"
      }
    }),
    rowSpacing: (0, import_fields.text)({
      ui: {
        description: "Also in inches!"
      }
    }),
    daysToMaturity: (0, import_fields.text)(),
    weeksAfterLastFrostToStartIndoors: (0, import_fields.text)(),
    weeksBeforeFirstFrostToStartIndoors: (0, import_fields.text)(),
    weeksAfterLastFrostToSowOutdoors: (0, import_fields.text)(),
    weeksBeforeFirstFrostToSowOutdoors: (0, import_fields.text)(),
    startIndoors: (0, import_fields.checkbox)(),
    directSow: (0, import_fields.checkbox)(),
    isHeirloom: (0, import_fields.checkbox)(),
    isOpenPollenated: (0, import_fields.checkbox)()
  }
});

// models/User.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var User = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    name: (0, import_fields2.text)({
      validation: { isRequired: true }
    }),
    email: (0, import_fields2.text)({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    password: (0, import_fields2.password)()
  }
});

// schema.ts
var lists = {
  User,
  Seed
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core3.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    lists,
    session
  })
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
