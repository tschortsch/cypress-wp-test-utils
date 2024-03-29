# Changelog

## 1.0.0

* [Feature] Add support for cypress 11.x & 12.x.
* [Compatibility] Compatibility with WordPress 6.1.
* [Fix] Use `@cypress/xpath` instead of depreacted `cypress-xpath` package.

## 0.8.0

* [Feature] Add support for cypress 10.x.

## 0.7.1

* [Fix] Fix selector in `toolbarOptionIsActive` command.

## 0.7.0

* [Change] Use xpath union operator to handle selectors for different WordPress versions. With this change the `wpVersion` config option is not used anymore and can be removed from the `env` variables.

## 0.6.0

* [Compatibility] Compatibility with WordPress 5.9.
* [Feature] `wpVersion` config option now accepts `5.9` as valid value. Since WordPress 5.9 is still in beta phase the default value for this option remains at `5.8`.
* [Feature] Export `config` object with applied default values so that it can be reused in own tests.
* [Fix] Fix `openGlobalBlockInserter` and `searchForBlock` commands when used with WordPress 5.9.

## 0.5.0

* [Feature] Add support for cypress 9.x.
* [Fix] Return types of some commands.

## 0.4.0

* [Fix] Always click on first matching element in `insertBlock` command.
* [Fix] Fix `openGlobalBlockInserter` command when used with WordPress 5.7.

## 0.3.0

* [Feature] Introduce new `wpVersion` config option to set the WordPress version where the tests are being run. Possible values are `5.7` or `5.8` (Default `5.8`).
* [Dependencies] Bump dependency versions

## 0.2.0

* [Internal] Migrate codebase to TypeScript
* [Dependencies] Bump dependency versions

## 0.1.0

* Initial release
