// Manually define Vite environment types to resolve "Cannot find type definition file for 'vite/client'"
// and "Property 'env' does not exist on type 'ImportMeta'" errors.

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
