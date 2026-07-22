const standardFrontend = (cwd, namespace) => {
  const scripts = ['dev-ts', 'dev-js', 'dev-css', 'dev-serve'];
  return scripts.map((s) => ({
    namespace,
    name: `${cwd} ${s}`,
    script: "npm",
    args: `run ${s}`,
    cwd,
  }));
};

const standardBackend = (cwd, namespace) => {
  const scripts = ['dev', 'start'];
  return scripts.map((s) => ({
    namespace,
    name: `${cwd} ${s}`,
    script: "npm",
    args: `run ${s}`,
    cwd,
  }));
};

const babel = (cwd, namespace) => {
  const scripts = ['dev-babel'];
  return scripts.map((s) => ({
    namespace,
    name: `${cwd} ${s}`,
    script: "npm",
    args: `run ${s}`,
    cwd,
  }));
}

module.exports = {
  "apps": [

    ...standardFrontend('./lawndisorder/client', 'lawndisorder'),
    ...standardBackend('./lawndisorder/server', 'lawndisorder'),


  ]
}
