T# openmrs-esm-root-config
This repository is used to configure icrc specific overrides for OpenMRS-ESMs.

# Overrides

As of now below things have been overriden:

- [Patient chart](https://github.com/openmrs/openmrs-esm-patient-chart) to show only conditions tab in reference application.

# ICRC How to build

```
npm install
NODE_OPTIONS=--openssl-legacy-provider  npm run build
NODE_OPTIONS=--openssl-legacy-provider  npm publish
```

# Access to ICRC Nexus instance

https://tfs.ext.icrc.org/ICRCCollection/DevOps%20Portal/_wiki/wikis/DevOps%20Wiki/14980/How-to-connect-to-Nexus-with-npm-and-yarn

# ICRC How to publish

Done via TFS
