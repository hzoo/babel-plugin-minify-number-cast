# babel-plugin-minify-number-cast

Turns number cast from Number(a) to +a

## Example

**In**

```javascript
Number();
Number(1);
Number(a);
```

**Out**

```javascript
0;
1;
+a;
```

## Installation

```sh
$ npm install babel-plugin-minify-number-cast
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["minify-number-cast"]
}
```

### Via CLI

```sh
$ babel --plugins minify-number-cast script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["minify-number-cast"]
});
```
