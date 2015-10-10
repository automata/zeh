var colors, command, exec, rule, run, sched;

sched = require('node-schedule');

colors = require('colors');

exec = require('child_process').exec;

console.log(colors.green("Hi, I'm Zeh, your personal assistant..."));

rule = '00 22 * * *';

command = "cd ~/src/automata/braindump ; echo \".\" >> foo.md ; git add foo.md ; git commit -m \"Zeh: Daily update\" ; cd " + __dirname;

run = function() {
  var job;
  return job = sched.scheduleJob(rule, function() {
    var child;
    return child = exec(command, function(error, stdout, stderr) {
      return console.log(colors.green(stdout));
    });
  });
};

exports.run = run;
