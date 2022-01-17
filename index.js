#!/usr/bin/env node


/*
# Yurd app
# Template Generator
# 
# 
# README
# Whenever you have to create a project in any language, you often waste time creating the code base. 
# Yurd has some code base templates to install to get started and programming right away without wasting time creating the code base 
# (installs with npm but also uses other languages)
# 
# npm i -g yurd
# 
# All templates
# 
# discord-bot, discord-bot-eris, simply-site, twitch-bot, website, djs-handler, go-multiplication-table, discordpy, cppcli, tkinter, swing-template, discordia, go, discordext, rust-cli
# 
# yurd create <template>
# 
# Use TypeScript in discord-bot | discord-bot-eris | twitch-bot | djs-handler
# 
# yurd create <template> -ts 
# 
# Open VSC
# 
# yurd create <template> -vsc 
# 
# Info command
# 
# yurd info <template>
# 
# General commands
# 
# yurd help
# yurd developer
# yurd version
# yurd all
# 
# ----------------------------------------------------------------
# 
# Yurd by
# Thebigbot - Main developer & CEO - https://github.com/Thebigbot0000
# ale_006 - Template developer - https://github.com/ale-006
# NotReallyEight - Template developer - https://github.com/NotReallyEight
# UsboKirishima - Template developer - https://github.com/UsboKirishima
# Bl4ckdestinyXX - Template developer - https://github.com/BlackdestinyXX
# 
# ----------------------------------------------------------------
# 
# All Commands
# yurd help
# yurd developer
# yurd version
# yurd all
# yurd info <template>
# yurd create <template>
# 
# 
# yurd help : Show help menu
# yurd version : Show version
# yurd create <template> : Create template
# yurd all : Show all template
# yurd info <template> : Show template info
# yurd developer : Show all developer
# 
# 
# 
# ----------------------------------------------------------------
# 
# 
# 
# Links
# https://github.com/Thebigbot0000/yurd
# https://github.com/Thebigbot0000/yurd.js.org
# https://www.npmjs.com/package/yurd
# 
# 
# 
# § Dev §
# https://github.com/Thebigbot0000
# https://github.com/ale-006
# https://github.com/NotReallyEight
# https://github.com/UsboKirishima
# https://github.com/BlackdestinyXX
# https://www.npmjs.com/~thebigbot
# 
# 
# It is strictly forbidden to copy any main code 
# and pass it off as your own 
# 
# 
*/

const clc = require("cli-color");
const fs = require('fs');
const { exec } = require('child_process');
const { Command } = require('commander');
const program = new Command();
const inquirer = require('inquirer');

// Import public.json
const filePublic = require('./public/public.json')

// Import package.json
const pkJson = require('./package.json')

// Import Template Files
const website = require('./template/website')
const discordbot = require('./template/discordbot')
const twitchbot = require('./template/twitchbot')
const simplysite = require('./template/simplysite')
const eris = require('./template/eris')
const djshnd = require('./template/djshandler')
const cppcli = require('./template/cppcli')
const multiplicationtable = require('./template/multiplicationtable')
const discordpy = require('./template/discordpy')
const tkinter = require('./template/tkinter')
const swingtemplate = require('./template/swingtemplate')
const luadiscord = require('./template/discordlua')
const go = require('./template/go')
const webgl = require('./template/webgl')
const discordext = require('./template/discordext')
const rustcli = require('./template/rustcli')
const guess = require('./template/guessthenumber')
const electron = require('./template/electron');
const { fileURLToPath } = require("url");

// Add template
program
  .command('create [template]')
  .option('-vsc, --code', 'Open Visual Studio Code Before Process')
  .option('-ts, --typescript', 'Install js template with lang ts')
  .option('-mongo, --dbmongo', 'Install Mongo Database')
  .option('-mysql, --dbmysql', 'Install SQL Database')
  .option('-fs, --pkgfs', 'Install fs')
  .description('Install Template')
  .action((template, options) => {

    if (!template) {
      console.log(clc.red(`404 Error. Not Fund! -- Yurd ${pkJson.version}`))
    }

    if (template == 'website') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      exec('npm init -y', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      if (options.dbmongo) {
        exec('npm i mongodb', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }

      if (options.pkgfs) {
        exec('npm i fs', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.dbmysql) {
        exec('npm i mysql', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }

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

    if (template == 'go-multiplication-table') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.go', multiplicationtable.maingo, function (err, data) {
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

    if (template == 'rust-cli' || template == 'rustcli') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.rs', rustcli.mainrs, function (err, data) {
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

    if (template == 'cpp-cli' || template == 'c++-cli') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.cpp', cppcli.maincpp, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('info.h', cppcli.infoh, function (err, data) {
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

    if (template == 'discord.py' || template == 'discordpy') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      exec('py -3 -m pip install -U discord.py', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.py', discordpy.mainpy, function (err, data) {
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

    if (template == 'tkinter') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.py', tkinter.mainpy, function (err, data) {
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

    if (template == 'discordext' || template == 'discord.ext') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      exec('py -3 -m pip install -U discord.py', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.py', discordext.apppy, function (err, data) {
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

    if (template == 'swing-template' || template == 'swinswingtemplateg') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.java', swingtemplate.mainjava, function (err, data) {
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

    if (template == 'guess-number-r' || template == 'guessnumber-r') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.r', guess.mainr, function (err, data) {
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

    if (template == 'guess-number-go' || template == 'guessnumber-go') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.go', guess.maingo, function (err, data) {
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

    if (template == 'discord.lua' || template == 'discordlua' || template == 'discordia') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      exec('lit install SinisterRectus/discordia', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      fs.appendFile('main.lua', luadiscord.mainlua, function (err, data) {
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
      if (options.pkgfs) {
        exec('npm i fs', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.dbmysql) {
        exec('npm i mysql', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
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

      if (options.dbmongo) {
        exec('npm i mongodb', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
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

    if (template == 'djs-handler') {
      console.log(clc.yellow('[YURD] Install Template...'))
      if (options.dbmysql) {
        exec('npm i mysql', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.pkgfs) {
        exec('npm i fs', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.dbmongo) {
        exec('npm i mongodb', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }

      if (options.typescript) {
        console.log(clc.yellow('[YURD] Creating Project...'))
        exec('npm init -y', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
        console.log(clc.yellow('[YURD] Installing Package...'))
        exec('npm install discord.js dotenv fs @types/node', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
        console.log(clc.yellow('[YURD] Creating Files...'))
        fs.appendFile('index.ts', djshnd.indexts, function (err, data) {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
          }
        })
        fs.mkdir('commands', function (err, data) {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
          }
        })
        fs.appendFile('.env', djshnd.env, function (err, data) {
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

      exec('npm install discord.js dotenv fs', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.js', djshnd.indexjs, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.mkdirSync('commands', function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('.env', djshnd.env, function (err, data) {
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
      if (options.dbmysql) {
        exec('npm i mysql', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.pkgfs) {
        exec('npm i fs', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.typescript) {
        console.log(clc.yellow('[YURD] Creating Project...'))
        exec('npm init -y', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });

        if (options.dbmongo) {
          exec('npm i mongodb', (err, stdout, stderr) => {
            if (err) {
              console.log(clc.red('[YURD] Unexpected Error!'))
              return;
            }
          });
        }

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
      if (options.dbmysql) {
        exec('npm i mysql', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.pkgfs) {
        exec('npm i fs', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.dbmongo) {
        exec('npm i mongodb', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }

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

    if (template == 'electron') {
      if (options.dbmysql) {
        exec('npm i mysql', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.pkgfs) {
        exec('npm i fs', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }
      if (options.dbmongo) {
        exec('npm i mongodb', (err, stdout, stderr) => {
          if (err) {
            console.log(clc.red('[YURD] Unexpected Error!'))
            return;
          }
        });
      }

      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Project...'))
      exec('npm init -y', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });
      console.log(clc.yellow('[YURD] Installing Package...'))
      exec('npm install --save-dev electron', (err, stdout, stderr) => {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
          return;
        }
      });

      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.js', electron.indexjs, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('preload.js', electron.preloadjs, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('index.html', website.indexhtml, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('index.css', website.indexcss, function (err, data) {
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
      console.log(clc.yellow('[YURD] [WARN] ⚠ ATTENTION! Insert in the package.json inside the entry "scripts" replace the line "test" with the string: "start": "electron."'))
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

    if (template == 'go') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.go', go.maingo, function (err, data) {
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

    if (template == 'webgl' || template == 'web-gl') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('index.html', webgl.indexhtml, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('webgl.css', webgl.webglcss, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
      fs.appendFile('webgl-demo.js', webgl.webgldemojs, function (err, data) {
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
    console.log(clc.yellow("ATTENTION! the command \"yurd version\" will be removed in version 1.0.6 of yurd! Use \"yurd -v\" to use this command"))
    console.log(pkJson.version)
  })

program
  .command('all')
  .description('YURD all template')
  .action(() => {
    console.log(clc.yellow("ATTENTION! the command \"yurd all\" will be removed in version 1.0.6 of yurd! Use \"yurd -all\" to use this command"), 
      clc.white(`
JavaScript Support: 
discord-bot | discord-bot-eris | simply-site | twitch-bot | website | djs-handler | webgl | electron`),
      clc.white(`

TypeScript Support:
discord-bot | discord-bot-eris | twitch-bot | djs-handler`),
      clc.white(`

C++ Support:
cpp-cli`),

      clc.white(`

Go Support:
go-multiplication-table | go | guess-number-go`),

      clc.white(`

Python Support:
discordpy | tkinter | discordext`),

      clc.white(`

Java Support:
swing-template`),

      clc.white(`

Lua Support:
discordia`),

      clc.white(`

Rust Support:
rust-cli`),

      clc.white(`

R Support:
guess-number-r`))
  })


program
  .command('info [template]')
  .description('YURD Help')
  .action((template) => {
    if (template === 'discord-bot') {
      console.log(`
》File: index.js, package-lock.json, package.json
》Directory: node_modules
》Language: Js
》Packages: discord.js, dotenv
》Requires: Node.js, npm`)
    }

    if (template === 'discord-bot-eris') {
      console.log(`
》File: index.js, package-lock.json, package.json
》Directory: node_modules
》Language: Js
》Packages: eris, dotenv
》Requires: Node.js, npm`)
    }

    if (template === 'website') {
      console.log(`
》File: index.js, package-lock.json, package.json, index.html, index.css
》Directory: node_modules
》Language: html, css, js
》Packages: express, fs, http
》Requires: Node.js, npm`)
    }

    if (template === 'simply-site') {
      console.log(`
》File: index.html, style.css, script.js
》Language: Html, Css, Js`)
    }

    if (template === 'twitch-bot') {
      console.log(`
》File: index.js, package-lock.json, package.json
》Directory: node_modules
》Language: Js
》Packages: tmi.js, dotenv
》Requires: Node.js, npm`)
    }

    if (template === 'djs-handler') {
      console.log(`
》File: index.js, package-lock.json, package.json
》Directory: node_modules, commands
》Language: Js
》Packages: discord.js, dotenv, fs
》Requires: Node.js, npm`)
    }

    if (template === 'go-multiplication-table') {
      console.log(`
》File: main.go
》Language: Go
》Packages: fmt
》Requires: Go`)
    }

    if (template === 'discordpy') {
      console.log(`
》File: main.py
》Language: Python
》Packages: discord.py
》Requires: Python, pip`)
    }

    if (template === 'cppcli') {
      console.log(`
》File: info.h, main.cpp
》Language: C++`)
    }

    if (template === 'tkinter') {
      console.log(`
》File: main.py
》Language: Python
》Packages: tkinter
》Requires: Python, pip`)
    }

    if (template === 'swing-template') {
      console.log(`
》File: main.java
》Language: Java
》Packages: JavaSwing
》Requires: Java`)
    }

    if (template === 'discordia') {
      console.log(`
》File: main.lua
》Language: Lua
》Packages: SinisterRectus/discordia
》Requires: Luvit`)
    }

    if (template === 'go') {
      console.log(`
》File: main.go
》Language: Go
》Packages: fmt
》Requires: Go`)
    }

    if (template === 'discordext') {
      console.log(`
》File: main.py
》Language: Python
》Packages: discord.py
》Requires: Python, pip`)
    }

    if (template === 'rust-cli') {
      console.log(`
》File: main.rs
》Language: Rust
》Requires: Rust`)
    }
    if (template === 'guess-number-r') {
      console.log(`
》File: main.r
》Language: R
》Requires: R`)
    }

    if (template === 'guess-number-go') {
      console.log(`
》File: main.go
》Language: Go
》Requires: Go`)
    }

    if (template === 'electron') {
      console.log(`
》File: preload.js, index.js, package-lock.json, package.json
》Directory: node_modules
》Language: JS
》Packages: electron
》Requires: Node.js, Npm`)
    }
  })


program
  .command('developer')
  .description('YURD Developer')
  .action(() => {
    console.log(clc.yellow("ATTENTION! the command \"yurd developer\" will be removed in version 1.0.6 of yurd! Use \"yurd --developer\" to use this command"), clc.white(`
Thebigbot - Main developer & CEO - https://github.com/Thebigbot0000
ale_006 - Template developer - https://github.com/ale-006
NotReallyEight - Template developer - https://github.com/NotReallyEight
UsboKirishima - Template developer - https://github.com/UsboKirishima
Bl4ckdestinyXX - Template developer - https://github.com/BlackdestinyXX`))
  })

program
  .command('dev')
  .description('YURD Developer')
  .action(() => {
    console.log(clc.yellow("ATTENTION! the command \"yurd dev\" will be removed in version 1.0.6 of yurd! Use \"yurd -dev\" to use this command"), clc.white(`
Thebigbot - Main developer & CEO - https://github.com/Thebigbot0000
ale_006 - Template developer - https://github.com/ale-006
NotReallyEight - Template developer - https://github.com/NotReallyEight
UsboKirishima - Template developer - https://github.com/UsboKirishima
Bl4ckdestinyXX - Template developer - https://github.com/BlackdestinyXX`))
  })

program
  .command('help')
  .description('YURD Help')
  .action(() => {
    console.log(clc.yellow("ATTENTION! the command \"yurd help\" will be removed in version 1.0.6 of yurd! Use \"yurd -h\" to use this command"), clc.white(`
yurd help : Show help menu
yurd version : Show version
yurd create <template> : Create template
yurd all : Show all template
yurd info <template> : Show template info
yurd developer : Show all developer`))
  })

  program
  .description('Template Generator')
  .option('-v, --version', 'Show version')
  .option('-h, --help', 'Show help menu')
  .option('-dev, --developer', 'Show all developer')
  .option('-all, --list', 'Show all template')
  .action((options) => {
    if (options.version) console.log(pkJson.version)
    if (options.help) console.log(clc.white(`
yurd -h : Show help menu | or yurd --help
yurd -v : Show version | or yurd --version
yurd create <template> : Create template
yurd -all : Show all template | or yurd --list
yurd info <template> : Show template info
yurd -dev: Show all developer | or yurd --developer`))
    if (options.developer) console.log(clc.white(`
Thebigbot - Main developer & CEO - https://github.com/Thebigbot0000
ale_006 - Template developer - https://github.com/ale-006
NotReallyEight - Template developer - https://github.com/NotReallyEight
UsboKirishima - Template developer - https://github.com/UsboKirishima
Bl4ckdestinyXX - Template developer - https://github.com/BlackdestinyXX`))
    if (options.list)     console.log(
      clc.white(`
JavaScript Support: 
discord-bot | discord-bot-eris | simply-site | twitch-bot | website | djs-handler | webgl | electron`),
      clc.white(`
    
TypeScript Support:
discord-bot | discord-bot-eris | twitch-bot | djs-handler`),
      clc.white(`
    
C++ Support:
cpp-cli`),
    
      clc.white(`
    
Go Support:
go-multiplication-table | go | guess-number-go`),
    
      clc.white(`
    
Python Support:
discordpy | tkinter | discordext`),
    
      clc.white(`
    
Java Support:
swing-template`),
    
      clc.white(`
    
Lua Support:
discordia`),
    
      clc.white(`
    
Rust Support:
rust-cli`),
    
      clc.white(`
    
R Support:
guess-number-r`))
});


// Add public 

program
  .command('add [script]')
  .description('Create a public template')
  .action((template) => {
    console.log(clc.yellow("ATTENTION! The public template service is in alpha!"))
    fs.appendFile(filePublic.name.file, filePublic.name.content_git, function (err, data) {
      if (err) {
        console.log(clc.red('[YURD] Unexpected Error!'))
      }
    })
  })

program.parse();


