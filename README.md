# openmrs-esm-root-config-icrc

ICRC specific configuration overrides for OpenMRS frontend modules, published as `@icrc/esm-icrc-overrides-app`.

## What it overrides

The module mounts nothing. Its `activate` returns `false` and its only job is to call `provide()` with a configuration object at load time.

Currently that object adds one entry to the patient chart primary navbar:

```js
"@openmrs/esm-patient-chart-app": { primaryNavbar: [ { label: "Immunizations", path: "/immunizations", view: "immunizationsDashboard" } ] }
```

Note that `provide()` comes from `@openmrs/esm-module-config`, which `@openmrs/esm-framework` has since superseded, and `primaryNavbar` is an early patient chart schema. Verify the tab actually appears in the target environment before relying on this module.

## Build

```sh
npm ci
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

The `NODE_OPTIONS` flag is required because the build still uses webpack 4, whose default hash is not available in modern OpenSSL.

No access to the internal Nexus instance is needed. Every dependency resolves from the public npm registry.

## Publishing

Publishing runs on GitHub Actions through [`publish.yml`](./.github/workflows/publish.yml), authenticated by npm trusted publishing over OIDC with no stored token. Dispatch it from the Actions tab:

- Leave `release` unchecked for a pre-release on the `pre` dist-tag.
- Check `release` for a full release, which also tags the commit and opens the version bump pull request. The `bump` input decides what `main` is lined up for afterwards.

The first publish of a new package name cannot use trusted publishing, because a trusted publisher is configured on a package settings page that only exists once the package has been published. See `tools/bootstrap-npm.yml.template` in [openmrs-esm-icrc](https://github.com/icrc/openmrs-esm-icrc) for that one-off step.

## Licence

BSD-3-Clause. See [LICENSE](./LICENSE).
