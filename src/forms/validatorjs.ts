let validatorjs;

if (import.meta.env.SSR) {
  const { createRequire } = await import('module');
  const require = createRequire(import.meta.url);
  validatorjs = require('validatorjs');
} else {
  const mod = await import('validatorjs');
  validatorjs = mod.default || mod;
}

export default validatorjs;
