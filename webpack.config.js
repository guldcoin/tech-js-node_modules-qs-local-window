module.exports = [
  {
    mode: 'production',
    target: 'web',
    entry: {
      index: './index.js'
    },
    output: {
      filename: 'qs-local-window.min.js',
      path: __dirname,
      library: 'qsLocalWindow',
      libraryTarget: 'var'
    }
  }
]
