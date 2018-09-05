# qs-local-window

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-qs-local-window) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-qs-local-window/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/lib/qs-local-window.html)

[![node package manager](https://img.shields.io/npm/v/qs-local-window.svg)](https://www.npmjs.com/package/qs-local-window) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-qs-local-window.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-qs-local-window?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-qs-local-window.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-qs-local-window/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-qs-local-window/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-qs-local-window) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-qs-local-window/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-qs-local-window?type=dev)

Get a variable from the cache, querystring, or localStorage. If present in querystring, sets the others.

### Install

##### Browser

```sh
curl https///bitbucket.org/guld/tech-js-node_modules-qs-local-window/raw/guld/qs-local-window.js -o qs-local-window.js
```

### Usage

Assuming the URI is `http://example.com/?perspective=isysd`.

```
<html>
  <body>
    <script src="qs-local-window.js"></script>
    <script>
      console.log(window.perspective) // undefined
      console.log(localStorage.getItem('perspective')) // null
      console.log(qsLocalWindow.getValue('perspective')) // isysd
      console.log(window.perspective) // isysd
      console.log(localStorage.getItem('perspective')) // isysd
    </script>
  </body>
</html>
```

### License

MIT Copyright isysd
