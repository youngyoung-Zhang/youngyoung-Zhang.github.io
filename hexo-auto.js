var exec = require('child_process').exec;
var cmd = 'cd /blog/ && nohup hexo s &';

exec(cmd, function (error, stdout, stderr) {
    // 建议打印如下日志,便于排查问题
    if (stdout) {
        console.log('stdout: ' + stdout);
    }
    if (stderr) {
        console.log('stderr: ' + stderr);
    }

    if (error) {
        console.info('start error!', error);
        process.exit(0);
    } else {
        console.info('start hexo-js success!')
    }
});