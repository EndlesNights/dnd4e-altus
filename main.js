
Hooks.once("init", async function() {

    CONFIG.DND4E.spoken = {
        "Alti": "DND4E.SpokenAlti",
        "Cellian": "DND4E.SpokenCellian",
        "Ghido": "DND4E.SpokenGhido",
        "Jarissian": "DND4E.SpokenJarissian",
        "Luxen": "DND4E.SpokenLuxen",
        "Saeven": "DND4E.SpokenSaeven",
        "Token": "DND4E.SpokenToken",
        "Vasten": "DND4E.SpokenVasten"
    };

    CONFIG.DND4E.script = {
        "Alti": "DND4E.ScriptAlti",
        "Cellian": "DND4E.ScriptCellian",
        "Ghido": "DND4E.ScriptGhido",
        "Token": "DND4E.ScriptToken"
    }

    CONFIG.DND4E.skills = {
        "acr": "DND4E.SkillAcr",
        "arc": "DND4E.SkillArc",
        "ath": "DND4E.SkillAth",
        "blu": "DND4E.SkillBlu",
        "dip": "DND4E.SkillDip",
        "dun": "DND4E.SkillDun",
        "end": "DND4E.SkillEnd",
        "eng": "DND4E.SkillEng",
        "hea": "DND4E.SkillHea",
        "his": "DND4E.SkillHis",
        "ins": "DND4E.SkillIns",
        "itm": "DND4E.SkillItm",
        "nat": "DND4E.SkillNat",
        "prc": "DND4E.SkillPrc",
        "pra": "DND4E.SkillPra",
        "rel": "DND4E.SkillRel",
        "stl": "DND4E.SkillStl",
        "stw": "DND4E.SkillStw",
        "thi": "DND4E.SkillThi"
      };
});


Hooks.once("ready", async function() {
    game.settings.set("dnd4e", "custom-skills",[
        {
            ability: "int",
            armourCheck: false,
            id: "eng",
            label: "Engineering"
        },
        {
            ability: "wis",
            armourCheck: false,
            id: "pra",
            label: "Prayer"
        }
    ]);

});