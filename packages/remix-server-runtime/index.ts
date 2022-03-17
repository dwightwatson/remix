// Default implementations for the Remix server runtime interface
export { createCookie, isCookie } from "./cookies";
export { json, redirect } from "./responses";
export { createSession, isSession, createSessionStorage } from "./sessions";
export { createCookieSessionStorage } from "./sessions/cookieStorage";
export { createMemorySessionStorage } from "./sessions/memoryStorage";

// helpers
export { createRequestHandler } from "./server";

// Types for the Remix server runtime interface
export type {
  CreateCookieFunction,
  IsCookieFunction,
  JsonFunction,
  RedirectFunction,
  CreateSessionFunction,
  CreateSessionStorageFunction,
  IsSessionFunction,
  CreateCookieSessionStorageFunction,
  CreateMemorySessionStorageFunction,
} from './interface'

// Remix server runtime packages should re-export these types
export type {
  ActionFunction,
  AppData,
  AppLoadContext,
  CreateRequestHandler,
  Cookie,
  CookieOptions,
  CookieParseOptions,
  CookieSerializeOptions,
  CookieSignatureOptions,
  DataFunctionArgs,
  EntryContext,
  ErrorBoundaryComponent,
  HandleDataRequestFunction,
  HandleDocumentRequestFunction,
  HeadersFunction,
  HtmlLinkDescriptor,
  HtmlMetaDescriptor,
  LinkDescriptor,
  LinksFunction,
  LoaderFunction,
  MetaDescriptor,
  MetaFunction,
  PageLinkDescriptor,
  RequestHandler,
  RouteComponent,
  RouteHandle,
  ServerBuild,
  ServerEntryModule,
  ServerPlatform,
  Session,
  SessionData,
  SessionIdStorageStrategy,
  SessionStorage,
} from './reexport'