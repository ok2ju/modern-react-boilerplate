function buildConfig(env) {
  return require('./config/' + env + '.js')({ env }); // eslint-disable-line
}

module.exports = buildConfig;
