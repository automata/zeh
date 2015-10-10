sched = require 'node-schedule'
colors = require 'colors'
exec = require('child_process').exec

console.log colors.green "Hi, I'm Zeh, your personal assistant..."

# Every day at 22:00
rule = '00 22 * * *'

# Task
command = "cd ~/src/automata/braindump ; echo \".\" >> foo.md ; git add foo.md ; git commit -m \"Zeh: Daily update\" ; cd #{__dirname}"

job = sched.scheduleJob rule, ->
  child = exec command, (error, stdout, stderr) ->
    console.log colors.green stdout
  console.log 'ping'.green
