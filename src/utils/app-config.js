const config = {
  endpoint: getEnvOrThrow("BASE_URL"),
};

function getEnvOrThrow(envVarName) {
  const envVar = process.env[`REACT_APP_${envVarName}`];
  if (!envVar) {
    throw Error(`Undefined environment variable: ${envVarName}`);
  }
  return envVar;
}

export default config;
