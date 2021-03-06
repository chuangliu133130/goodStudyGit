exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"o/bar\":{\"target\":\"C1\",\"id\":\"o/bar\",\"remoteTrackingBranchID\":null},\"foo\":{\"target\":\"C3\",\"id\":\"foo\",\"remoteTrackingBranchID\":null},\"side\":{\"target\":\"C2\",\"id\":\"side\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C5\":{\"parents\":[\"C3\",\"C4\"],\"id\":\"C5\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C6\":{\"parents\":[\"C2\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"bar\":{\"target\":\"C3\",\"id\":\"bar\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"bar\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git pull origin bar:foo;git pull origin master:side",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"o/bar\":{\"target\":\"C1\",\"id\":\"o/bar\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"bar\":{\"target\":\"C3\",\"id\":\"bar\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"bar\",\"id\":\"HEAD\"}}}",
  "name": {
    "en_US": "Pull arguments",
    "zh_CN": "Pull ?????????",
    "zh_TW": "pull ?????????",
    "es_AR": "Par??metros de pull",
    "pt_BR": "Par??metros do pull",
    "de_DE": "Optionen f??r Pull",
    "ja"   : "Pull?????????",
    "fr_FR": "Arguments de pull",
    "ru_RU": "?????????????????? ?????? pull",
    "ko"   : "pull ?????????"
  },
  "hint": {
    "en_US": "Remember that you can create new local branches with fetch/pull arguments",
    "zh_CN": "??????, ??????????????? fetch/pull ??????????????????",
    "zh_TW": "???????????????????????? fetch ?????? pull ????????????????????? local ??? branch",
    "es_AR": "Acordate de que pod??s crear nuevas ramas locales usando los par??metros de fetch/pull",
    "pt_BR": "Lembre-se que voc?? pode criar novos ramos locais com par??metros de fetch/pull",
    "de_DE": "Du kannst neue lokale Branches mittels fetch / pull erstellen",
    "ja"   : "Fetch???pull????????????????????????????????????????????????????????????????????????????????????????????????",
    "fr_FR": "Vous pouvez aussi cr??er une nouvelle branche locale avec les arguments de fetch/pull",
    "ru_RU": "??????????????????, ?????? ?????????? ?????????? ?????????? ?????????????????? ?? ?? ?????????????? ???????????? fetch/pull",
    "ko"   : "fetch/pull ??? ???????????? ??? ?????? ???????????? ???????????? ??????????????? ???????????????."
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git pull arguments",
              "",
              "Now that you know pretty much *everything* there is to know about arguments for `git fetch` and `git push`, there's almost really nothing left to cover for git pull :)",
              "",
              "That's because git pull at the end of the day is *really* just shorthand for a fetch followed by merging in whatever was just fetched. You can think of it as running git fetch with the *same* arguments specified and then merging in *where* those commits ended up.",
              "",
              "This applies even when you use crazy-complicated arguments as well. Let's see some examples:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Here are some equivalent commands in git:",
              "",
              "`git pull  origin foo` is equal to:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "And...",
              "",
              "`git pull  origin bar~1:bugFix` is equal to:",
              "",
              "`git fetch origin bar~1:bugFix; git merge bugFix`",
              "",
              "See? git pull is really just shorthand for fetch + merge, and all git pull cares about is where the commits ended up (the `destination` argument that it figures out during fetch).",
              "",
              "Lets see a demo:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "If we specify the place to fetch, everything happens as before with fetch but we merge in whatever was just fetched"
            ],
            "afterMarkdowns": [
              "See! by specifying `master` we downloaded commits onto `o/master` just as normal. Then we merged `o/master` to where we are, *regardless* of what was currently checked out."
            ],
            "command": "git pull origin master",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Does it work with source and destination too? You bet! Let's see that:"
            ],
            "afterMarkdowns": [
              "Wow, that's a TON in one command. We created a new branch locally named `foo`, downloaded commits from remote's master onto that branch `foo`, and then merged that branch into our currently checked out branch `bar`. It's over 9000!!!"
            ],
            "command": "git pull origin master:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok to finish up, attain the state of the goal visualization. You'll need to download some commits, make some new branches, and merge those branches into other branches, but it shouldn't take many commands :P"
            ]
          }
        }
      ]
    },
    "fr_FR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Les arguments de git pull",
              "",
              "Maintenant que vous savez presque *tout* ce qu'il y a ?? savoir sur les arguments de `git fetch` et `git push`, il n'y a presque plus rien ?? vous apprendre sur git pull :)",
              "",
              "C'est parce que git pull est en fait *juste* un raccourci pour un fetch suivi d'un merge de tout ce qui vient d'??tre rapatri??. Vous pouvez vous repr??senter git pull comme un git fetch avec les *m??mes* arguments, suivi d'un merge qui aura lieu ?? l'endroit *exact* o?? ces commits seront arriv??s.",
              "",
              "Cela fonctionne m??me quand vous utilisez des arguments tr??s compliqu??s. Voyons quelques exemples :"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Voici quelques commandes ??quivalentes dans git :",
              "",
              "`git pull origin foo` est ??quivalent ?? :",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Et :",
              "",
              "`git pull origin bar~1:bugFix` est ??quivalent ?? :",
              "",
              "`git fetch origin bar~1:bugFix; git merge bugFix`",
              "",
              "Vous voyez ? git pull est au fond un simple un raccourci pour fetch + merge, et tout ce qui lui importe est la destination des commits (l'argument `destination` qu'il utilise durant le fetch).",
              "",
              "Voyons une d??monstration :"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Si nous pr??cisons l'emplacement ?? rapatrier tout se passe comme pr??c??demment, avec fetch, mais en sus nous fusionnons tout ce qui a ??t?? rapatri??."
            ],
            "afterMarkdowns": [
              "Vu ? En pr??cisant `master` nous avons t??l??charg?? les commits dans `o/master` comme d'habitude. Puis nous avons fusionn?? `o/master` avec l?? o?? nous sommes, *sans nous soucier* de la branche courante."
            ],
            "command": "git pull origin master",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Cela fonctionne-t-il aussi bien avec une source et une destination ? Et oui ! Voyons cela :"
            ],
            "afterMarkdowns": [
              "Wow, INCROYABLE tout ce que nous avons fait en une commande. Nous avons cr???? une brance locale nomm??e `foo`, t??l??charg?? les commits depuis la branche master distante dans `foo`, et ensuite fusionn?? cette branche dans notre branche actuelle de travail (checkout??e) `bar` !!!"
            ],
            "command": "git pull origin master:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, pour finir ce niveau reproduisez l'??tat de la fen??tre Objectif. Vous aurez besoin de t??l??charger quelques commits, de cr??er des branches et de les fusionner dans d'autres branches, mais cela ne devrait pas utiliser trop de commandes :P"
            ]
          }
        }
      ]
    },
    "es_AR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Par??metros de git pull",
              "",
              "Ahora que sab??s pr??cticamente *todo* lo que hay que saber sobre los par??metros de `git fetch` y `git push`, casi que no queda nada para cubrir de git pull :)",
              "",
              "Eso es porque git pull es simplemente un atajo para hacer un fetch seguido de un merge. Pod??s pensarlo como correr git fetch con los *mismos* par??metros, y despu??s mergear aquello a donde esos commits hayan ido a parar.",
              "",
              "Esto aplica incluso cuando us??s par??metros hiper-rebuscados. Veamos algunos ejemplos:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Estos son algunos comandos equivalentes de git:",
              "",
              "`git pull  origin foo` equivale a:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Y...",
              "",
              "`git pull  origin bar~1:bugFix` equivale a:",
              "",
              "`git fetch origin bar~1:bugFix; git merge bugFix`",
              "",
              "??Ves? git pull es simplemente un atajo para un fetch + merge, y todo lo que le importa a git pull es d??nde terminaron esos commits (el par??metro `destino` que determina durante el fetch).",
              "",
              "Veamos una demostraci??n:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Si especificamos el lugar del que hacer fetch, todo ocurre como antes, pero s??lo mergeamos lo que se fetche??"
            ],
            "afterMarkdowns": [
              "??Ves! Especificando `master` bajamos los commits a `o/master` como siempre. Despu??s mergeamos `o/master` a nuestra rama actual, *sin importar* qu?? hab??a en nuestra copia de trabajo."
            ],
            "command": "git pull origin master",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "??Esto funciona con origen y destino, tambi??n? ??M??s vale! Ve??moslo:"
            ],
            "afterMarkdowns": [
              "Wow, eso es un MONT??N en un ??nico comando. Creamos una nueva rama local llamada `foo`, descargamos los commits del master del remoto a esta rama `foo`, y despu??s mezclamos esa rama a nuestra rama actual `bar`. ??????Supera los 9000!!!"
            ],
            "command": "git pull origin master:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "OK: para terminar, alcanz?? el estado del objetivo. Vas a necesitar descargar algunos commits, crear algunas ramas nuevas, y mergear esas ramas junto con otras, pero no deber??a llevar demasiados comandos :P"
            ]
          }
        }
      ]
    },
    "pt_BR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Par??metros do git pull",
              "",
              "Agora que voc?? sabe praticamente *tudo* que h?? para saber sobre par??metros do `git fetch` e `git push`, n??o h?? praticamente nada a se abordar a respeito do  git pull :)",
              "",
              "Isso ?? porque o git pull no final das contas ?? *realmente* apenas um atalho para um fetch seguido de um merge em seja l?? o que acabou de ser baixado. Voc?? pode pensar nele como rodar o git fetch recebendo os *mesmos* argumentos, seguido de um merge no lugar *onde* esses commits foram parar.",
              "",
              "Isso se aplica mesmo no caso de argumentos loucamente complicados. Vejamos alguns exemplos:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Aqui est??o alguns comandos que s??o equivalente para o Git:",
              "",
              "`git pull  origin foo` ?? igual a:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "E...",
              "",
              "`git pull  origin bar~1:bugFix` ?? igual a:",
              "",
              "`git fetch origin bar~1:bugFix; git merge bugFix`",
              "",
              "Viu? O git pull ?? realmente um atalho para fetch + merge, e tudo com o que o git pull se importa ?? com onde os commits foram parar (o par??metro de `destino` que ele descobre durante o fetch).",
              "",
              "Vejamos uma demonstra????o:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Se especificarmos o lugar onde fazer o fetch, tudo acontece como antes com o fetch, mas fazemos o merge naquilo que acabou de ser baixado"
            ],
            "afterMarkdowns": [
              "Veja! Especificando `master` n??s baixamos commits em `o/master` como sempre. Ent??o fizemos um merge de `o/master` com o lugar onde estamos, *independente* daquilo que est?? atualmente em checkout."
            ],
            "command": "git pull origin master",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Isso tamb??m funciona com origem e destino especificados? Sim, voc?? acertou! Vejamos:"
            ],
            "afterMarkdowns": [
              "Wow, isso ?? MUITA coisa em um comando s??. N??s criamos um novo ramo local chamado `foo`, baixamos commits do master remoto nesse ramo `foo`, e ent??o fizemos um merge dele com o ramo atualmente em checkout, `bar`."
            ],
            "command": "git pull origin master:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, para terminar, obtenha o estado da visualiza????o do objetivo. Voc?? vai precisar baixar alguns commits, criar novos ramos, e fazer merge de ramos em outros ramos, mas n??o deve precisar de muitos comandos para isso :P"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## git pull ?????????",
              "",
              "??????????????????????????? `git fetch` ?????? `git push` ???*????????????*????????????????????????????????? `git pull`:)",
              "",
              "???????????? `git pull` ???????????????*??????*???????????? fetch ????????? merge ??? fetch ??? commit???????????????????????????????????? `git fetch` ?????????*??????*???????????????????????? fetch ????????? commit *?????????*???????????? merge???",
              "",
              "???????????????????????????????????????????????????????????????????????????????????????"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "?????? git ??????????????????????????????????????????",
              "",
              "`git pull  origin foo` ????????????",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "??????...",
              "",
              "`git pull  origin bar~1:bugFix` ????????????",
              "",
              "`git fetch origin bar~1:bugFix; git merge bugFix`",
              "",
              "?????????`git pull` ????????????????????? fetch ??? merge ???????????????????????????????????? `git pull` ????????????????????? commit ???????????????????????? fetch ?????????????????????`destination`??????",
              "",
              "??????????????????????????????"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "??????????????? fetch ??????????????????`??????`???????????????????????????fetch ?????????????????????????????????????????? merge ??????????????? fetch ??????`??????`???commit???"
            ],
            "afterMarkdowns": [
              "???????????????????????? `master`???????????????????????????????????? commit ???????????? `o/master` ???????????????????????? merge `o/master` ???????????????????????????*??????*??????????????? checkout ?????????????????????"
            ],
            "command": "git pull origin master",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "????????????????????????????????? source ?????? destination?????????????????????????????????????????????"
            ],
            "afterMarkdowns": [
                "?????????????????????????????????????????? local ????????????????????? `foo` branch???????????? remote ??? `master` ??? commit??????????????? local ??? `foo` branch????????? merge `foo` branch ?????????????????? checkout ??? `bar` branch????????????????????????????????????"
            ],
            "command": "git pull origin master:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "??????????????????????????????????????????????????????????????????????????? commit????????????????????? branch????????? merge ?????? branch ???????????? branch ????????????????????????????????????????????????:P"
            ]
          }
        }
      ]
    },
   "zh_CN":{
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git pull ??????",
              "",
              "????????????????????? fetch/push ????????????????????????, ?????? pull ???????????? \"nothing\" ???! :)",
              "",
              "?????? git pull ?????? fetch ?????? merge ?????????. ????????????????????? git fetch ?????????????????????, ????????? merge ?????? fetch ????????? (commit)",
              "",
              "????????????????????????????????????????????????, ????????????:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "??????????????? Git ???????????????:",
              "",
              "`git pull  origin foo` ????????????",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "??????...",
              "",
              "`git pull  origin bar~1:bugFix` ????????????",
              "",
              "`git fetch origin bar~1:bugFix; git merge bugFix`",
              "",
              "?????????? git pull ??????????????? fetch + merge ?????????, git pull ?????????????????????????????????(????????? git fetch ???????????? destination)",
              "",
              "???????????????????????????"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "?????????????????????????????? <place>, ??????????????????????????????????????????, ?????? merge.  "
            ],
            "afterMarkdowns": [
              "???! ???????????? master ??????????????? o/master. ???????????? merge `o/master` ????????????????????????(???????????????????????????). "
            ],
            "command": "git pull origin master",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "??????????????? source / destination ???? ?????????, ?????????:"
            ],
            "afterMarkdowns": [
              " ???, ??????????????????. ????????????????????????????????? foo ?????????, ????????? master ??????, ????????????????????? foo ??????. ????????? merge ????????????????????????. ????????????! 9000!!!"
            ],
            "command": "git pull origin master:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "??????, ?????????! ?????????????????????.  ???????????????????????????, ???????????????????????????, ????????????????????????????????????, ???????????????????????? :P "
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Optionen f??r Git Pull",
              "",
              "Da du jetzt so ziemlich *alles* kennst, was es an Optionen f??r `git fetch` und `git push` gibt, ist kaum noch etwas zu Optionen f??r `git pull` zu sagen. :)",
              "",
              "Das liegt daran, dass `git pull` letztendlich *wirklich* nur eine Abk??rzuung f??r `fetch` gefolgt von einem `merge` von was auch immer gerade heruntergeladen wurde, ist. Denk es dir als ein `git fetch` mit denselben Optionen und einem anschlie??enden Merge.",
              "",
              "Das trifft sogar zu, wenn du v??llig abgedrehte Optionen verwendest. Ein paar Beispiele:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Hier sind einige gleichwertige Befehle in Git:",
              "",
              "`git pull origin foo` ist dasselbe wie:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Und ...",
              "",
              "`git pull origin bar~1:bugFix` ist dasselbe wie:",
              "",
              "`git fetch origin bar~1:bugFix; git merge bugFix`",
              "",
              "Siehst du? `git pull` ist wirklich nur eine Abk??rzung von `fetch` + `merge` und es interessiert sich nur daf??r wo die Commits hin sollen (die \"Ziel\"-Option, die es beim `fetch` auswertet).",
              "",
              "Schauen wir uns eine Demonstration an:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Wenn wir den Ort, auf den das `fetch` ausgef??hrt werden soll, angeben, passiert alles so wie beim `git fetch` aber es wird direkt danach auch ein Merge ausgef??hrt."
            ],
            "afterMarkdowns": [
              "Siehst du? Da wir `master` angegeben haben sind die Commits in `o/master` heruntergeladen worden. Danach wurde `o/master` gemerged, egal was gerade ausgecheckt war."
            ],
            "command": "git pull origin master",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Funktioniert das auch wenn man Quelle und Ziel angibt? Aber sicher! Das sehen wir hier:"
            ],
            "afterMarkdowns": [
              "Wow, das ist eine Menge in einem einzelnen Befehl. Wir haben lokal einen neuen Branch namens `foo` erstellt, die Commits vom `master` des Servers dorthin heruntergeladen und ihn danach in unseren aktuell ausgecheckten Commit `bar` gemerged."
            ],
            "command": "git pull origin master:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, um's zu Ende zu bringen versuch das Ziel aus der Zielgrafik zu erreichen. Du wirst einige Commits herunterladen, einige neue Branches anlegen und diese in andere mergen m??ssen, aber das sollte nicht allzuviele Befehle ben??tigen. :P"
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ?????????????????? ?????? pull",
              "",
              "?????????????????? ?????? `git pull` ???? ?????????????????? ?????? ??????-???? ??????????, ????????????????, ?????? ???? ?????? ?????????????? ?? ?????????????????????? ?????? `git fetch` ?? `git push` :)",
              "",
              "?????? ???? ????????????, `git pull` ?????????????? ?????????????????? `git fetch`, ?? ???????????? ?????????? `git merge` ?? ?????? ????????????, ?? ?????????????? ?????????????????????? ???????????????????? ???????????????? fetch. ?????????????? ??????????????, ?????? ?????? ??????????, ?????? ?????????????????? git fetch ?? ???????? ???? ??????????????????????, ?????????????? ???? ?????????????? ?????? pull, ?? ?????????? ?????????????????? git merge ?? ????????????, ?????????????????? ?? ?????????????????? <????????????????> ?????????????? pull.",
              "",
              "???????????????????? ???? ????????????????:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "?????? ?????????????? ?????????????????? ?????????????????????????? ???????????? ?? git:",
              "",
              "`git pull  origin foo` ?????? ???? ???? ??????????, ?????? ??????????????:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "?? ??????...",
              "",
              "`git pull  origin bar~1:bugFix` ???? ????, ??????:",
              "",
              "`git fetch origin bar~1:bugFix; git merge bugFix`",
              "",
              "?????? ??????????, git pull ????????????????????????, ?????????? ???? ???????? ?????????????? ?????????????????? fetch + merge.",
              "",
              "?????????????????? ????????????????????????:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "?????????? ?????????????? ???????????????????? fetch ?? ???????????????????? ?????????????????? ?? pull, ?? merge ?????????????????????? ?? ???????? ??????????????????????, ?????????????? ?????????? ?????????????? ???????????????? fetch"
            ],
            "afterMarkdowns": [
              "?????? ??????????, ???? ?????????????? `master`, ?????????????? ?????? ???????????? ?????? ???????????????????? ?????????????????????? ???? ?????????? `o/master`. ?????????? ???? ?????????? (merge) ?????????????????????? ?????????? `o/master` ?? ????????????, ???? ?????????????? ???? ??????????????????."
            ],
            "command": "git pull origin master",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "?????????? ???? ?????? ????????????????, ???????? ?????????????? `<????????????????>` ?? `<????????????????>`? ????????????????:"
            ],
            "afterMarkdowns": [
              "??????, ?????????????? ?????????? ?????????????????? ?????????? ?????????? ????????????????!. ???? ?????????????? ?????????? ?????????? `foo` ?? ?????????????????? ??????????????????????, ?????????????? ???? ?????? ?????????????????? ?? ?????????? `master` ???????????????????? ??????????????????????, ?? ?????????? ?????????? ?????? ?????????? ?? ???????????? `bar`, ???? ?????????????? ???? ????????????????????!"
            ],
            "command": "git pull origin master:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "?? ?????????????????? ???????????????????? ???????????????????? ???????????????? ???????????? ?? ???????????????????????? ?? ??????????????. ?????????? ?????????????? ?????????????????? ??????????????????, ?????????????? ?????????????????? ?????????? ??????????, ?????????? ???????? ?????????? ?? ????????????, ???? ???????????????????????? ???????????????????????? ?????? ?????????? ???????????? ????????????. ??????????! :P"
            ]
          }
        }
      ]
    },
    "ko": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git pull??? ?????????",
              "",
              "`git fetch`??? `git push`??? ???????????? ??? ????????? ?????????, git pull?????? ??? ???????????? ?????? ???????????? :)",
              "",
              "git pull??? ?????? merge??? ???????????? fetch ??? ???????????? ????????????. git fetch??? *??????* ????????? ???????????? ???????????? *??????*??? merge????????? ?????? ?????????.",
              "",
              "?????????????????????-????????? ???????????? ?????????????????? ???????????? ?????? ?????????. ????????? ???????????????:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "git?????? ?????? ??????????????? ????????????:",
              "",
              "`git pull  origin foo` ??? ????????? ????????????:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "?????????...",
              "",
              "`git pull  origin bar~1:bugFix` ??? ????????? ????????????:",
              "",
              "`git fetch origin bar~1:bugFix; git merge bugFix`",
              "",
              "?????????? git pull??? ?????? fetch + merge??? ???????????? ????????????, ????????? git pull??? ???????????? ?????????????????? ???????????????(fetch??? ?????? ????????? `destination`????????? ????????? merge??? ???????????????).",
              "",
              "?????? ??????????????????:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "place??? ????????????, ????????? fecth??? ???????????? ????????? ????????? ???????????? fetch????????? ???????????????."
            ],
            "afterMarkdowns": [
              "?????????! `master`??? ???????????? ????????? `o/master`??? ???????????? ???????????? ?????????????????????. ????????? ????????? ?????? ????????? `o/master`??? ?????????????????? ?????? ??????????????? ???????????? *????????????* ?????????"
            ],
            "command": "git pull origin master",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "source ??? destination ?????? ???????????????? ??????????????????! ??????????????????:"
            ],
            "afterMarkdowns": [
              "??????, ????????? ????????? ????????? ????????????????????????. ????????? ????????? `foo`??? ??? ???????????? ?????????, ?????? ???????????? master?????? ??? ????????? `foo`??? ???????????? ??????????????????, ?????? ??? ???????????? ????????? ?????? ??????????????? ????????? `bar`??? ??????????????????. ?????????!!!"
            ],
            "command": "git pull origin master:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "???????????? ??????????????? ??????, ??? ???????????? ?????? ????????? ????????? ?????????. ????????? ????????????, ??? ???????????? ?????????, ??? ??????????????? ?????? ???????????? ???????????? ????????????, ????????? ???????????? ????????? ?????? ????????? ?????? :P"
            ]
          }
        }
      ]
    }
  }
};
