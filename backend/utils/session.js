import { v4 as uuid } from "uuid";

export function getSessionId(req) {
  return req.headers["x-session-id"] || uuid();
}