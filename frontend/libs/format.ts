import { isString } from "lodash";

const HEX_REGEX = /0[xX][0-9a-fA-F]+$/;
export function isHexString(value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }
  return HEX_REGEX.test(value);
}

export function unixTimestampSecondsToHumanDisplayTime(
  unixTimestampSeconds: number
) {
  return unixTimestampSecondsToDate(unixTimestampSeconds).toLocaleString(
    undefined,
    {
      dateStyle: "long",
      timeStyle: "long",
    }
  );
}

export function unixTimestampSecondsToDate(unixTimestampSeconds: number) {
  return new Date(unixTimestampSeconds * 1000);
}

export function getBigIntOrNull(value: any): Nullable<bigint> {
  try {
    return BigInt(value);
  } catch (err) {
    return null;
  }
}

export function getHexStringOrNull(value: unknown): Nullable<string> {
  if (!isString(value)) {
    return null;
  }

  if (!isHexString(value)) {
    return null;
  }

  return value as string;
}

// Truncates an hex string to the format 0x0000…0000
// https://github.com/gpxl-dev/truncate-eth-address/blob/main/src/index.ts
const TRUNCATE_HEX_STR_REGEX =
  /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
export function truncateHexString(hexString: string) {
  if (isHexString(hexString)) {
    const match = hexString?.match(TRUNCATE_HEX_STR_REGEX);
    if (match) {
      return `${match[1]}…${match[2]}`;
    }
  }

  return hexString;
}

export function truncateSmart(value: string, length = 25) {
  if (isHexString(value)) {
    return truncateHexString(value);
  }

  return truncateValue(value, length);
}

export function truncateValue(value: string, length = 11) {
  if (value.length <= length) {
    return value;
  }
  return value.substring(0, length) + "…";
}

export function timeDifferenceFromTimestamp(unixTimestampSeconds: number) {
  return timeDifference({
    previous: new Date(unixTimestampSeconds * 1000),
  });
}

// Copied & modified from https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
// also used in aspect-frontend
const msPerMinute = 60 * 1000;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const msPerMonth = msPerDay * 30;
const msPerYear = msPerDay * 365;
function timeDifference({
  current = new Date(),
  previous,
}: {
  current?: Date;
  previous: Date;
}) {
  var elapsed = current.getTime() - previous.getTime();
  return displayTime(elapsed);
}

export function displayTime(valueInMilliSeconds: number) {
  const { value, unit } = getTimeMeta(valueInMilliSeconds);
  return value + unit;
}

function getTimeMeta(valueInMilliSeconds: number) {
  if (valueInMilliSeconds < msPerMinute) {
    return {
      value: Math.round(valueInMilliSeconds / 1000),
      unit: "s",
    };
  } else if (valueInMilliSeconds < msPerHour) {
    return {
      value: Math.round(valueInMilliSeconds / msPerMinute),
      unit: "min",
    };
  } else if (valueInMilliSeconds < msPerDay) {
    return {
      value: Math.round(valueInMilliSeconds / msPerHour),
      unit: "h",
    };
  } else if (valueInMilliSeconds < msPerMonth) {
    return {
      value: Math.round(valueInMilliSeconds / msPerDay),
      unit: "d",
    };
  } else if (valueInMilliSeconds < msPerYear) {
    return {
      value: Math.round(valueInMilliSeconds / msPerMonth),
      unit: "mo",
    };
  } else {
    return {
      value: Math.round(valueInMilliSeconds / msPerYear),
      unit: "y",
    };
  }
}

export function toNumberWithCommas(value: string): string {
  // Split the input into the whole and decimal parts
  const [whole, decimal] = value.split(".");

  // Insert commas into the whole number part
  const wholeWithCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine the whole and decimal parts
  return decimal ? `${wholeWithCommas}.${decimal}` : wholeWithCommas;
}
