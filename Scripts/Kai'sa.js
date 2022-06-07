// "Title": "Kai'Sa changes"
let {rank, ad, ap, level, base7, base8, stacks, apBase7, stackDamage, proc7, passive127}=newFunction();
function newFunction () {
	let passive127=0.00025, q127=[.50, .25], w127=[1.3, .7], passive128=0.0005, q128=[.5, .25], w128=[1.3, .45], ap=200, ad=200, armor=30, mr=30, level=9, stacks=0, base7=4, apBase7=.15, base8=4, apBase8=.15, stackDamage=1, rank=5, trigger=0.15, proc7=trigger+ap*passive127, proc8=trigger+ap*passive128, burst8=0, hitNumber=1;
	return {rank, ad, ap, level, base7, base8, stacks, apBase7, stackDamage, proc7, passive127, apBase8, burst8, proc8};
}

//
function hit (hitNumber) {
	switch (hitNumber) {
		case "first":
			console.log(`
<Terminal> _Firing Prey Seeker
	'It's Too Late To Run...'
			`);
			break;
		case 1:
			console.log(`
	'Hope you're ready to eat Plasma'

	'Here goes - 'Shot ${hitNumber} firing!'

<Heads_Up_Combat_Terminal>

_Lock-On|Established
_Deploying_Hardpoints.[Plasmatic_Eradicatiors]|_Hardpoints_Primed_&_Spinning
_Combat_Systems|Clear_To_Fire
`);
			hitNumber++;
			break;
		case 2:
			console.log(`'and ${hitNumber}!'

<Terminal> _Plasma payload at 40%
	`);
			hitNumber++;
			break;
		case 3:
			console.log(`'Activate Subsytem! H.o.B'
		
<Terminal> _Command Recieved..
<Terminal> _Hail Of Blades missile volley engage
<Terminal> _Firing: Shot ${hitNumber}, Shot ${hitNumber+1}, Shot ${hitNumber+2}
		`);
			hitNumber++;
			break;
		case "final":
			console.log(`<Terminal> _Plasma Payload at 100%
<Terminal> _Plasma Ignition`);
			hitNumber=5;
			break;
		case 5:
			console.log(`And that makes ${hitNumber}, See you in the next life `);
			break;
	}
}
function wd127 () {
	let sum=30+(rank*25)+(w7[0]*ad)+(w7[1]*ap);
	return sum;
}
function wd128 () {
	let sum=30+(rank*25)+(w8[0]*ad)+(w8[1]*ap);
	return sum;
}
//
function pd127 () {
	return Math.round(4+(level*.7518));
}
function pd128 () {
	return Math.floor(4+(level*.7518)+(level*.4781));
}
//
const w7=wd127;
const w8=wd128;
const p7=pd127;
const p8=pd128;
let hpMax=3000;
let hpCurrent=3000;
let hpMissing=(hpMax-hpCurrent);
let dmg=0;
//
base7=p7();
base8=p8();
let burst7=(hpMissing);
let passivedmg=0;
//
function stacking7 () {
	switch (stacks) {
		case 1:
			passivedmg+=apBase7+(passive127*ap);
			passivedmg+=(stackDamage+(level*.583))*stacks;
			dmg=dmg+ad;
			dmg+=passivedmg;
			stacks+=1;
			hpCurrent-=dmg;
			console.log(`Damage Dealt: ${dmg}, 
Auto Damage: ${ad}, 
Passive Damage: ${passivedmg}`);
			console.log(`Target Current Hp: -- ${hpCurrent} --`);
			console.log(`Plasma Level: [${stacks}/5]`);
			console.log("");
			dmg=0;
			break;
		case 2:
			passivedmg+=apBase7+(passive127*ap);
			passivedmg+=(stackDamage+(level*.583))*stacks;
			dmg+=ad;
			dmg+=passivedmg;
			hpCurrent-=dmg;
			stacks+=1;
			console.log(`Damage Dealt: ${dmg}, 
Auto Damage: ${Math.round(ad)}, 
Additional Damage: ${Math.round(passivedmg)}
`);
			console.log(`Target Current Hp: -- ${Math.round(hpCurrent)} --`);
			console.log(`Plasma Level: [${stacks}/5]`);
			console.log("");
			dmg=0;
			break;
		case 3:
			passivedmg+=apBase7+(passive127*ap);
			passivedmg+=(stackDamage+(level*.583))*stacks;
			dmg+=ad;
			dmg+=passivedmg;

			hpCurrent-=dmg;
			stacks+=1;
			console.log(`Damage Dealt: ${Math.round(dmg)}, 
Auto Damage: ${Math.round(ad)}, 
Additional Damage: ${Math.round(passivedmg)}
`);
			console.log(`Target Current Hp: -- ${Math.round(hpCurrent)} --`);
			console.log(`Plasma Level: [${stacks}/5]`);
			console.log("");
			dmg=0;
			break;
		case 4:
			passivedmg+=apBase7+(passive127*ap);
			passivedmg+=(stackDamage+(level*.583))*stacks;
			dmg+=ad;
			dmg+=passivedmg;
			burst7=proc7*(hpMax-hpCurrent);
			dmg+=burst7;
			hpCurrent-=dmg;
			stacks-=4;
			console.log(`
Plasma Ruptured! 
Rupture Power: ${100*(apBase7+(passive127*ap))}%
Rupture Damage: ${(proc7*(hpMax-hpCurrent))},
Plasma Set To: [${stacks}/5]

Damage Dealt: ${(dmg)}, 
Auto Damage: ${(ad)}, 
Additional Damage: ${(passivedmg)}
`);
			console.log(`Target Current Hp: -- ${Math.round(hpCurrent)} --`);
			console.log("");
			dmg=0;
			break;
		default:
			dmg+=ad;
			passivedmg+=pd127();
			passivedmg+=ap*.15;

			dmg+=passivedmg;


			stacks+=1;
			hpCurrent=hpMax-=dmg;

			console.log(`Damage Dealt: ${Math.round(dmg)}, 
Auto Damage: ${Math.round(ad)},
Additional Damage: ${Math.round(passivedmg)}
`);
			console.log(`Target Current Hp: ${Math.round(hpCurrent)}`);
			console.log(`Plasma Level: [${stacks}/5]`);
			console.log("");
			dmg=0;
			break;
	};
}
//
let s7=stacking7;

function stacking8 () {
	switch (stacks) {
		case 1:
			dmg+=ap*(apBase8+(stacks*.00025));
			dmg+=
				dmg+=base8;
			hpCurrent-=dmg;
			stacks+=1;
			console.log(`Damage Dealt: ${dmg}`);
			console.log(`Target Current Hp: ${hpCurrent}`);
			console.log(`Stacks On Target: ${stacks}`);
			console.log("");
			dmg=0;
			break;
		case 2:
			dmg+=ap*(apBase8+(stacks*.00025));
			dmg+=(stackDamage+(level*1.75))*stacks;
			dmg+=base8;
			hpCurrent-=dmg;
			stacks+=1;
			console.log(`Damage Dealt: ${dmg}`);
			console.log(`Target Current Hp: ${hpCurrent}`);
			console.log(`Stacks On Target: ${stacks}`);
			console.log("");
			dmg=0;
			break;
		case 3:
			dmg+=ap*(apBase8+(stacks*.00025));
			dmg+=(stackDamage+(level*1.75))*stacks;
			dmg+=base8;
			hpCurrent-=dmg;
			stacks+=1;
			console.log(`Damage Dealt : ${dmg}`);
			console.log(`Target Current Hp: ${hpCurrent}`);
			console.log(`Stacks On Target: ${stacks}`);
			console.log("");
			dmg=0;
			break;
		case 4:
			dmg+=ap*(apBase8+(stacks*.00025));
			dmg+=(stackDamage+(level*1.75))*stacks;
			dmg+=base8;
			burst8+=(hpMax-hpCurrent)*proc8;
			hpCurrent-=burst8;
			hpCurrent-=dmg;
			stacks-=4;
			console.log(`Plasma Ruptured! Stacks Set To: ${stacks}`);
			console.log("");
			console.log(`Damage Dealt: ${Math.floor(dmg+burst8)},  Rupture Damage: ${Math.floor(burst8)}`);
			console.log(`Target Current Hp: ${hpCurrent}`);
			console.log(`Stacks On Target: ${stacks}`);
			console.log("");
			dmg=0;
			break;
		default:
			dmg+=base8;
			stacks+=1;
			hpCurrent-=dmg;
			console.log(`Damage Dealt: ${dmg}`);
			console.log(`Target Current Hp: ${hpMax-dmg}`);
			console.log(`Stacks On Target: ${stacks}`);
			console.log("");
			dmg=0;
			break;
	};
}
//
let s8=stacking8;
hit("first");
s7();
hit(1);
s7();
hit(2);
s7();
hit(3);
s7();
hit("final");
s7();
hit(5);


//console.log(`

//With 12.8 changes:

//`);

//s8();
//s8();
//s8();
//s8();
//s8();
