#!/usr/bin/env node

const clc = require("cli-color");
const JSZip = require("jszip");
const fs = require('fs');
const { exec } = require('child_process');
const { Command } = require('commander');
const program = new Command();
const { prompt } = require('inquirer');


// Import Template Files
const website = require('./template/website')
const discordbot = require('./template/discordbot')
const twitchbot = require('./template/twitchbot')
const simplysite = require('./template/simplysite')
const eris = require('./template/eris')

// Add template
program
  .command('create [template]')
  .option('-vsc, --code', 'Open Visual Studio Code Before Process')
  .option('-ts, --typescript', 'Install js template with lang ts')
  .description('Install Template')
  .action((template, options) => {

    if (template == 'website') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      exec('npm init -y', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Installing Package...'))
      exec('npm install http fs express', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.css', website.indexcss, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('index.html', website.indexhtml, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('server.js', website.serverjs, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      if (options.code) {
        exec('code .', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
    }




    if (template == 'discord-bot') {
      console.log(clc.yellow('[YURD] Install Template...'))


      if (options.typescript) {
        console.log(clc.yellow('[YURD] Creating Project...'))
      exec('npm init -y', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Installing Package...'))
      exec('npm install discord.js dotenv', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.ts', discordbot.indexts, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('.env', discordbot.env, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      if (options.code) {
        exec('code .', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
      return
    }


      console.log(clc.yellow('[YURD] Creating Project...'))
      exec('npm init -y', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Installing Package...'))
      exec('npm install discord.js dotenv', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.js', discordbot.indexjs, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('.env', discordbot.env, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      if (options.code) {
        exec('code .', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
    }

    if (template == 'discord-bot-eris') {
      console.log(clc.yellow('[YURD] Install Template...'))


      if (options.typescript) {
        console.log(clc.yellow('[YURD] Creating Project...'))
      exec('npm init -y', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Installing Package...'))
      exec('npm install eris dotenv', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.ts', eris.indexts, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('.env', eris.env, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      if (options.code) {
        exec('code .', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
      return
    }


      console.log(clc.yellow('[YURD] Creating Project...'))
      exec('npm init -y', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Installing Package...'))
      exec('npm install eris dotenv', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.js', eris.indexjs, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('.env', eris.env, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      if (options.code) {
        exec('code .', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
    }

    if (template == 'twitch-bot') {
      console.log(clc.yellow('[YURD] Install Template...'))

      if (options.typescript) {
        console.log(clc.yellow('[YURD] Creating Project...'))
      exec('npm init -y', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Installing Package...'))
      exec('npm install tmi.js dotenv', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.ts', twitchbot.indexts, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('.env', twitchbot.env, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      if (options.code) {
        exec('code .', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
      return
    }


      console.log(clc.yellow('[YURD] Creating Project...'))
      exec('npm init -y', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Installing Package...'))
      exec('npm install tmi.js dotenv', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.js', twitchbot.indexjs, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('.env', twitchbot.env, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      if (options.code) {
        exec('code .', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
    }


    if (template == 'simply-site') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.html', simplysite.indexhtml, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('style.css', simplysite.stylecss, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('script.js', simplysite.scriptjs, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      if (options.code) {
        exec('code .', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
    }
  })


// version 
program
  .command('version')
  .description('YURD Version')
  .action(() => {
    console.log('1.0.0')
  })

program.parse();

