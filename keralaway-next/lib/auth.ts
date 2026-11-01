import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_SESSION_COOKIE = "kw_admin_session";

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return secret;
}

export function createSessionToken(): string {
  const issuedAt = Date.now().toString();
  const signature = createHmac("sha256", getSecret()).update(issuedAt).digest("hex");
  return `${issuedAt}.${signature}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature) return false;

  const expected = createHmac("sha256", getSecret()).update(issuedAt).digest("hex");
  const expectedBuf = Buffer.from(expected, "hex");
  const actualBuf = Buffer.from(signature, "hex");
  if (expectedBuf.length !== actualBuf.length) return false;

  return timingSafeEqual(expectedBuf, actualBuf);
}

export function checkAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD is not set");
  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(password);
  if (expectedBuf.length !== actualBuf.length) return false;
  return timingSafeEqual(expectedBuf, actualBuf);
}
