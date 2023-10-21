import { Decoder, Encoder } from './gen.mjs';

/** Base93 charset. */
const CS93 = " !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~";

/** Encode `bigint` to a Base93 string. */
export const e93 = /*#__PURE__#*/ Encoder(CS93);

/** Decode Base93 string to a `bigint`. */
export const d93 = /*#__PURE__#*/ Decoder(CS93);
