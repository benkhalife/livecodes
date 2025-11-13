# Type Alias: WatchCode()

> **WatchCode**: (`event`, `fn`) => `object`

Called when the playground "content" is changed (see [`getCode`](https://play.nitrocode.ir/docs/sdk/js-ts#getcode) and [`getConfig`](https://play.nitrocode.ir/docs/sdk/js-ts#getcode)).

This includes changes in:
- Code (in editors)
- Editor [languages](https://play.nitrocode.ir/docs/languages/)
- [CSS processors](https://play.nitrocode.ir/docs/features/css#css-processors)
- [External resources](https://play.nitrocode.ir/docs/features/external-resources)
- Project info (e.g. allows adding content in page head and attributes to `<html>` element)
- [Custom settings](https://play.nitrocode.ir/docs/advanced/custom-settings) (e.g. allows changing [import maps](https://play.nitrocode.ir/docs/features/module-resolution#custom-module-resolution))
- Project title
- [Test](https://play.nitrocode.ir/docs/features/tests) code

## Parameters

• **event**: `"code"`

• **fn**

## Returns

`object`

### remove()

> **remove**: () => `void`

#### Returns

`void`

## Defined in

[models.ts:248](https://github.com/benkhalife/livecodes/blob/0416bd82794049417c507907a01f8daf1767a602/src/sdk/models.ts#L248)