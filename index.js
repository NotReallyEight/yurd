#!/usr/bin/env node


/*
# Yurd app
# Template Generator
*/
const clc = require("cli-color");
const fs = require('fs');
const { exec } = require('child_process');
const { Command } = require('commander');
const program = new Command();
const inquirer = require('inquirer');

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


// Add template
program
  .command('create [template]')
  .option('-vsc, --code', 'Open Visual Studio Code Before Process')
  .option('-ts, --typescript', 'Install js template with lang ts')
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

    if (template == 'djs-handler') {
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

    if (template == 'go') {
      console.log(clc.yellow('[YURD] Install Template...'))
      console.log(clc.yellow('[YURD] Creating Files...'))
      fs.appendFile('main.go', go.maingo, function (err, data) {
        if (err) {
          console.log(clc.red('[YURD] Unexpected Error!'))
        }
      })
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
      console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
    }
  })


// version 
program
  .command('version')
  .description('YURD Version')
  .action(() => {
    console.log(pkJson.version)
  })

program
  .command('all')
  .description('YURD all template')
  .action(() => {
    console.log(
      clc.white(`
JavaScript Support: 
discord-bot | discord-bot-eris | simply-site | twitch-bot | website | djs-handler | webgl`),
      clc.white(`

TypeScript Support:
discord-bot | discord-bot-eris | twitch-bot | djs-handler`),
      clc.white(`

C++ Support:
cpp-cli`),

      clc.white(`

Go Support:
go-multiplication-table | go`),

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
rust-cli`))
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
  })


program
  .command('help')
  .description('YURD Help')
  .action(() => {
    console.log(clc.white(`
yurd help : Show help menu
yurd version : Show version
yurd create <template> : Create template
yurd all : Show all template
yurd developer : Show all developer`))
  })

program
  .command('developer')
  .description('YURD Developer')
  .action(() => {
    console.log(clc.white(`
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
    console.log(clc.white(`
Thebigbot - Main developer & CEO - https://github.com/Thebigbot0000
ale_006 - Template developer - https://github.com/ale-006
NotReallyEight - Template developer - https://github.com/NotReallyEight
UsboKirishima - Template developer - https://github.com/UsboKirishima
Bl4ckdestinyXX - Template developer - https://github.com/BlackdestinyXX`))
  })




program.parse();


