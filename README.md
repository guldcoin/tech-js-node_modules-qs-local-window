# qs-local-window

Get a variable from the cache, querystring, or localStorage. If present in querystring, sets the others.

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
