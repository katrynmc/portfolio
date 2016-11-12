const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'public');

if (!isProduction) {
  const child_process = require('child_process');
  child_process.exec("webpack-dev-server --progress --colors",
    function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

else if (isProduction) {
  const child_process = require('child_process');
  child_process.exec("webpack -p --config webpack.production.config.js", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}
