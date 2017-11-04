function buildConfig(env) {
  return require('./webpack/' + env + '.js')({ env }); // eslint-disable-line
}

module.exports = buildConfig;
