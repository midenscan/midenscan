import { GraphQLScalarType } from "graphql";
import * as utils from "utils";

export const BigIntNumberScalar = new GraphQLScalarType({
  name: "BigIntNumber",
  description: "GraphQL Scalar representing the Number type.",
  serialize: (value: unknown) => {
    if (!(typeof value === "bigint")) {
      throw new Error(
        `[BigIntNumberError] Invalid argument: ${value} with type of ${typeof value}. Expected BigIntNumber instance.`
      );
    }

    return Number(BigInt(value));
  },

  parseValue: (value: unknown) => {
    if (!(typeof value === "string")) {
      throw new Error(
        `[BigIntNumberError] Invalid argument: ${value} with type of ${typeof value}. Expected string.`
      );
    }
    return BigInt(value);
  },
});

export const BigIntStringScalar = new GraphQLScalarType({
  name: "BigIntString",
  description: "GraphQL Scalar representing the BigInt type.",
  serialize: (value: unknown) => {
    if (!(typeof value === "bigint")) {
      throw new Error(
        `[BigIntStringError] Invalid argument: ${value} with type of ${typeof value}. Expected BigIntString instance.`
      );
    }

    return BigInt(value).toString();
  },

  parseValue: (value: unknown) => {
    if (!(typeof value === "string")) {
      throw new Error(
        `[BigIntStringError] Invalid argument: ${value} with type of ${typeof value}. Expected string.`
      );
    }
    return BigInt(value);
  },
});

export const DigestStringScalar = new GraphQLScalarType({
  name: "DigestString",
  description: "GraphQL Scalar representing a digest hex str",
  serialize: (value: unknown) => {
    if (!(value instanceof Buffer)) {
      throw new Error(
        `[DigestStringScalarError] Invalid argument: ${value} with typeof ${typeof value}.`
      );
    }
    return utils.bufferToDigest(value);
  },
  parseValue: (value: unknown) => {
    if (!(typeof value === "string") || !utils.isHex(value)) {
      throw new Error(
        `[DigestStringScalarError] Invalid argument: ${typeof value}. Expected hex string.`
      );
    }

    return utils.digestToBuffer(value);
  },
});

export const AccountStringScalar = new GraphQLScalarType({
  name: "AccountString",
  description: "GraphQL Scalar representing a account hex str",
  serialize: (value: unknown) => {
    if (!(value instanceof Buffer)) {
      throw new Error(
        `[AccountStringScalarError] Invalid argument: ${value} with typeof ${typeof value}.`
      );
    }
    return utils.bufferToAccount(value);
  },
  parseValue: (value: unknown) => {
    if (!(typeof value === "string") || !utils.isHex(value)) {
      throw new Error(
        `[AccountStringScalarError] Invalid argument: ${typeof value}. Expected hex string.`
      );
    }

    return utils.accountToBuffer(value);
  },
});

export const NoteInputsScalar = new GraphQLScalarType({
  name: "NoteInputsScalar",
  description: "GraphQL Scalar representing a notes inputs",
  serialize: (value: unknown) => {
    if (!(typeof value === "string")) {
      throw new Error(
        `[NoteInputsScalarError] Invalid argument: ${value} with typeof ${typeof value}.`
      );
    }
    const cleanedString = value.replace(/[{}]/g, "").trim();
    const numStrings = cleanedString.split(",");
    return numStrings.map((numStr) => numStr.trim());
  },
  parseValue: (value: unknown) => {
    throw new Error("[NoteInputsScalar] Not supported");
  },
});
