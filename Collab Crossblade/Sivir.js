class Champion { // Creates the Champion
    constructor(champ) {
        this.champ = champ;
        this.abilities = [];
    }
}
class Ability { // Creates the Abilities
  constructor(name, description, favorite, hasScaling, scaling) { // Takes in the name, description, whether it is my favorite, and if it has any scaling and how much
    this.Name = name;
    this.Description = " " + description;
    if (favorite == true) {
        this.Favorite = "" + true;
    } else {
        this.Favorite = "" + false ;        
    }
    this.Scales = "" + hasScaling;
    this.Scaling = "" + scaling ;
  }
}
{ // Functions
function addP(pName, pEffect,  pFav, pScales, pScaling) { // Adds the ability to the array
    return p = new Ability(pName, pEffect, pFav, pScales, pScaling);
  };
function addQ(QName, QEffect,  qFav, QScales, QScaling) { // Adds the ability to the array
    return q = new Ability(QName, QEffect, qFav, QScales, QScaling);
  };
function addW(wName, wEffect,  wFav, wScales, wScaling) { // Adds the ability to the array
    return w = new Ability(wName, wEffect, wFav, wScales, wScaling);
  };
function addE(eName, eEffect,  eFav, eScales, eScaling) { // Adds the ability to the array
    return e = new Ability(eName, eEffect, eFav, eScales, eScaling);
  };
function addR(rName, rEffect,  rFav, rScales, rScaling) { // Adds the ability to the array
    return r = new Ability(rName, rEffect, rFav, rScales, rScaling);
  };
function addChampion(champ, parm1, parm2, parm3, parm4, parm5, parm6, parm7, parm8, parm9, parm10, parm11, parm12, parm13, parm14, parm15, parm16, parm17, parm18, parm19, parm20, parm21, parm22, parm23, parm24, parm25) { // Creates a complete champion
    champName = new Champion(champ); // sets the champion name
    champName.abilities.push(addP(parm1, parm6, parm11, parm16, parm21)); 
    champName.abilities.push(addQ(parm2, parm7, parm12, parm17, parm22));
    champName.abilities.push(addW(parm3, parm8, parm13, parm18, parm23));
    champName.abilities.push(addE(parm4, parm9, parm14, parm19, parm24));
    champName.abilities.push(addR(parm5, parm10, parm15, parm20, parm25));
    for (let i = 0; i < champName.abilities.length; i++) {
        console.log(champName.abilities[i]); // prints the abilities
        
    } champName.abilities
}
}
{ // Output}
addChampion('Sivir', 'Fleet of Foot', 'Boomerang Blade', 'Richochet', 'Spell Shield', 'On the Hunt', 'After dealing damage to an enemy champion with an attack or ability Sivir gains movement speed for 2 seconds', 'Sivir fires a fast-moving projectile that deals physical damage to all targets hit before turning back and dealing damage again', 'Sivir empowers her next three attacks to bounces to nearby targets at a reduced damage, and Sivir also gains bonus attack speed until all attacks are used', 'Sivir blocks the next hostile ability within 1.5 seconds and if successful restores Mana', 'Sivir passively gains bonus attack speed during Richochet. Sivir empowers herself and all nearby allies giving them bonus movement speed that after a delay will decay to half of its initial strength', false, false, false, true, false, true, true, true, true, true, '+5 ms at level 6, 11, 16 and 18', '+15 dmg & +15% total ad per pass', '+15% damage for secondary targets', '+10 mana restored', '+15% attack speed during Richochet, +10% innital Movement Speed, + 1 second before decay begins');
addChampion('Camille', 'Adaptive Defenses', 'Precision Protocol', 'Tactical Sweep', 'Hookshot', 'Hextech Ultimatum', 'After basic attacking an enemy champion, Camille gains an adaptive Physical or Magic shield depending on the damage the champion has dealt to other champions the most', 'Basic attack reset that increases movement speed, has increased range, if used after 1.5 seconds it converts a percentage of damage to true damage, it can be recast for 2 seconds if used after')
}

