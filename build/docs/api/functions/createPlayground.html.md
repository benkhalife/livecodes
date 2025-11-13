# Function: createPlayground()

## createPlayground(container, options)

> **createPlayground**(`container`, `options`?): `Promise`\<[`Playground`](../interfaces/Playground.md)\>

Creates a LiveCodes playground.

### Parameters

• **container**: `string` \| `HTMLElement`

`HTMLElement` or a string representing a CSS selector. This is the container where the playground is rendered.
 If not found, an error is thrown (except in [headless mode](https://play.nitrocode.ir/docs/sdk/headless), in which this parameter is optional and can be omitted).

• **options?**: [`EmbedOptions`](../interfaces/EmbedOptions.md)

The [embed options](https://play.nitrocode.ir/docs/sdk/js-ts#embed-options) for the playground (optional).

### Returns

`Promise`\<[`Playground`](../interfaces/Playground.md)\>

- A promise that resolves to a [`Playground`](https://play.nitrocode.ir/docs/api/interfaces/Playground/) object which exposes many [SDK methods](https://play.nitrocode.ir/docs/sdk/js-ts/#sdk-methods) that can be used to interact with the playground.

### Defined in

[index.ts:26](https://github.com/benkhalife/livecodes/blob/e9f2d95306679d5975bc89ee6b9a546696e7f74f/src/sdk/index.ts#L26)

## createPlayground(options)

> **createPlayground**(`options`): `Promise`\<[`Playground`](../interfaces/Playground.md)\>

### Parameters

• **options**: [`EmbedOptions`](../interfaces/EmbedOptions.md) & `object`

### Returns

`Promise`\<[`Playground`](../interfaces/Playground.md)\>

### Defined in

[index.ts:30](https://github.com/benkhalife/livecodes/blob/e9f2d95306679d5975bc89ee6b9a546696e7f74f/src/sdk/index.ts#L30)