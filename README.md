# react-ch5

> 

[![NPM](https://img.shields.io/npm/v/react-ch5.svg)](https://www.npmjs.com/package/react-ch5) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## WARNING

This is a pre 1.0.0 release. It is not really feature-complete, just a proof of concept with basic hooks support for CH5.

These hooks allow publish and subscribe of digital/boolean, analog/number and string values.

## Install

```bash
npm install --save react-ch5
```
or
```bash
yarn add react-ch5
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from '@avsp/hook'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [Chris Poole, AVSP Ltd](https://github.com/avspltd/)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
