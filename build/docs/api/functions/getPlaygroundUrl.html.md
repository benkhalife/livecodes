# Function: getPlaygroundUrl()

> **getPlaygroundUrl**(`options`): `string`

Gets the URL to a LiveCodes playground (as a string) from the provided [options](https://play.nitrocode.ir/docs/sdk/js-ts#embed-options).
This can be useful for providing links to run code in playgrounds.

## Parameters

• **options**: [`EmbedOptions`](../interfaces/EmbedOptions.md) = `{}`

The [options](https://play.nitrocode.ir/docs/sdk/js-ts#embed-options) for the playground.

## Returns

`string`

- The URL of the playground (as a string).

large objects like config and params are store in the url hash params while the rest are in the search params
unless config is a string in which case it is stored in searchParams

## Defined in

[index.ts:387](https://github.com/benkhalife/livecodes/blob/89e6b033263f66c12b8b4f926dc5b2071ee77b8b/src/sdk/index.ts#L387)