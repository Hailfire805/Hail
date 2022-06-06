class Entity {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.attributes = [];
    }
    addAction(action) {
        this.actions.push(action);
    }
    removeAction(action) {
        this.actions.splice(this.actions.indexOf(action), 1);
    }
    addInventory(item) {
        this.inventory.push(item);
    }
    removeInventory(item) {
        this.inventory.splice(this.inventory.indexOf(item), 1);
    }
    addAttribute(attribute) {
        this.attributes.push(attribute);
    }
    removeAttribute(attribute) {
        this.attributes.splice(this.attributes.indexOf(attribute), 1);
    }
}
class Player extends Entity {
    constructor(name, type, description) {
        super(name, type, description);
    }
}
class Item extends Entity {
    constructor(name, type) {
        super(name, type);

        this.consumeable; // True or False
        if (this.consumeable == true) { // If the item is consumeable
            this.consumeEffects = []; // Array of consume effects
            this.effectDuration = 0; // Duration of the effect in seconds
            this.hasCharges; // True or False
            if (this.hasCharges == true) { // If the item has charges
                this.charges = 0; // How many charges
                this.maxCharges = 0; // Max charges
                this.rechargeable; // True or False
                if (this.rechargeable == true) { // If the item is rechargeable
                    this.rechargeTime = 0; // Time in seconds to recharge
                } else if (this.rechargeable == false) { // If the item is not rechargeable
                    this.rechargeMethod = ""; // How the item is recharged
                }
            }
            this.stackable; // True or False
            if (this.stackable == true) { // If the item is stackable
                this.maxStack = 0; // Max stack
            }
        }

        this.hasActiveEfects; // True or False
        if (this.hasActiveEfects == true) { // If the item has active effects
            this.numberOfActiveEfects; // Number of active effects
            this.activeEfects = []; // Array of active effects
            this.activeEffectsHaveScaling; // True or False
            if (this.activeEffectsHaveScaling == true) { // If the active effects have scaling
                this.activeEffectsScaling = []; // Array of active effects scaling
            }
        }

        this.hasCooldown; // True or False;
        if (this.hasCooldown) { // If has cooldown
            this.cooldown = 0; // Cooldown in seconds
        }


        this.HasLimitation; // True or False
        if (this.HasLimitation == true) { // If the item has a limitation
            this.limitations = []; // Array of limitations
        }

        this.hasNamedEffect; // True or False
        if (this.hasNamedEffect == true) { // If the item has a named effect
            this.namedEffect = []; // Array of named effects
        }

        this.hasPassiveEfects; // True or False
        if (this.hasPassiveEfects == true) { // If the item has passive effects
            this.NumberOfPassiveEfects; // Number of passive effects
            this.passiveEfects = []; // Array of passive effects
            this.passiveEffectsHaveScaling; // True or False
            if (this.passiveEffectsHaveScaling == true) { // If the passive effects have scaling
                this.passiveEffectsScalings = []; // Array of passive effects scalings
            }
        }

        this.hasRange; // True or False
        if (this.hasRange == true) { // If the item has a range
            this.hasMaxRange = []; // True or False
            if (this.hasMaxRange == true) { // If the item has a target range
                this.targetRange = 0; // Target range
            } else if (this.hasMaxRange == false) { // If the item does not have a target range
                this.hasAura = []; // True or False
                if (this.hasAura == true) { // If the item has an AOE range
                    this.auraRadius = 0; // AOE range
                } else if (this.hasAoeRange == false) { // If the item does not have an AOE range
                    this.hasAoeRadius = []; // True or False
                    if (this.hasAoeRadius == true) { // If the item has an AOE radius
                        this.aoeRadius = 0; // AOE radius
                    }
                }
            }
        }

        this.hasRangeTypeDifference; // True or False
        if (this.hasRangeTypeDifference == true) { // if the item has a range type difference
            this.meleeType = []; // Effects if melee
            this.rangedType = []; // Effects if ranged
        }

        this.hasRecipe = ""; // Does it have a recipe?
        if (this.hasRecipe == true) {
            this.recipe = []; // Recipe for crafting
            this.combineCost; // cost to combine recipe into this item
            this.components = []; // components needed to craft this item
            this.buildsInto; // item this item builds into
        }

        this.hasStatIncreases; // Stats of the item
        if (this.hasStatIncreases) { // Item includes Stat Increases
            this.stats = []; // What Stats are increased
            for (let i = 0; i < this.stats.length; i++) { // For each stat
                this.stats[i]; // What is the increase
            }
        }

        this.hasSellValue; // True or False
        if (this.hasSellValue == true && this.tier != starter) { // If the item has a sell value and is not a starter item
            this.sellValue = this.cost * .7;  // The sell value is 70% of the cost 
        } else if (this.hasSellValue == true && this.tier == starter) { // If the item has a sell value and is a starter item
            this.sellValue = this.cost * .4; // The sell value is 40% of the cost
        } else { // If the item does not have a sell value
            this.sellValue = 0; // The sell value is 0
        }

        this.isExclusive = ""; // Is it exclusive to a certain champion?
        if (this.isExclusive == true) {
            this.champion; // Champion that can use this item
        }

        this.isTargeted; // True or False
        if (this.isTargeted == true) { // If the item is targeted
            this.targetType = []; // Target type
            this.targetRange = 0; // Target range
        }

        this.isTrinketItem; // True or False

        this.isProjectile; // True or False
        if (this.isProjectile == true) { // If the item is a projectile
            this.projectileSpeed = 0; // Projectile speed
        }

        this.isPurchaseable; // Can it be purchased?
        if (this.isPurchaseable == true) {
            this.purchaseCost; // Cost to purchase this item
        } else if (this.isPurchaseable == false) {
            this.gainedThrough; // How did this item come to be?
        }

        this.tier; // tier of the item
        if (this.tier == 'starter') { // If the item is a starter item
            this.isStarterItem = true; // Is it a starter item?
        } else if (this.tier == 'basic') { // If the item is a basic item
            this.isBasicItem = true; // Is it a basic item?
        } else if (this.tier == 'epic') { // If the item is an epic item
            this.isEpicItem = true; // Is it an epic item?
        } else if (this.tier == 'legendary') { // If the item is a legendary item
            this.isLegendaryItem = true; // Is it a legendary item?
        } else if (this.tier == 'mythic') { // If the item is a mythic item
            this.isMythicItem = true; // Is it a mythic item?
        }
    }
    addAttribute(attribute, value) {
        this[attribute] = value; // Add the attribute and value to the item
        this.arrayValue = attribute + ": " + value; // Add the attribute and value to the item
        this.attributes.push(this.arrayValue); // Add the attribute to the attributes array
    }
    displayAttributes() {
        console.log(this.name + ": Attributes");
        for (let i = 0; i < this.attributes.length; i++) { // For each attribute
            console.log(this.attributes[i]); // Display the attribute
        }
    } 
}
class Action {
    constructor(name, description, attributes) {
        this.name = name;
        this.description = description;
        this.attributes = attributes;
        this.components = [];
        this.effects = [];
    }
    addComponent(component) {
        this.components.push(component);
    }
    removeComponent(component) {
        this.components.splice(this.components.indexOf(component), 1);
    }
    addEffect(effect) {
        this.effects.push(effect);
    }
    removeEffect(effect) {
        this.effects.splice(this.effects.indexOf(effect), 1);
    }
}
class Component {
    constructor(name, description, attributes, partOf, effects) {
        this.name = name;
        this.description = description;
        this.attributes = attributes;
        this.partOf = partOf;
        this.effects = effects;
    }
}
class Effect {
    constructor(name, description, attributes) {
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }
}
class Attribute {
    constructor(name, description, value, valueType, valueScaling) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.valueType = valueType;
        this.valueScaling = valueScaling;
    }
}
class Stat {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
class Unit extends Entity {
    constructor(name, baseStats, statGrowth) {
        super(name, description, attributes);
        this.baseStats = [
            new Stat("Health", baseHealth),
            new Stat("Mana", baseMana),
            new Stat("Strength", baseStrength),
            new Stat("Attack Damage", baseAttackDamage),
            new Stat("Attack Speed", baseAttackSpeed),
            new Stat("Armor", baseArmor),
            new Stat("Magic Resist", baseMagicResist),
            new Stat("Movement Speed", baseMovementSpeed),
            new Stat("Attack Range", baseAttackRange),
            new Stat("Health Regeneration", baseHealthRegeneration),
            new Stat("Mana Regeneration", baseManaRegeneration),

        ]
        this.stats = [
            new Stat("Health", 100),
            new Stat("Mana", 100),
            new Stat("Attack Damage", 100)
        ]
        this.skills = skills;
        this.items = items;
        this.actions = actions;
    }

}
class CharacterClass {
    constructor(name, attributes, strengths, weaknesses) {
        this.name = name;
        this.attributes = attributes;
        this.strengths = strengths;
        this.weaknesses = weaknesses;
        this.members = [];
    }
    addMember(member) {
        this.members.push(member);
    }
    removeMember(member) {
        this.members.splice(this.members.indexOf(member), 1);
    }
    addStrength(strength) {
        this.strengths.push(strength);
    }
    removeStrength(strength) {
        this.strengths.splice(this.strengths.indexOf(strength), 1);
    }
    addWeakness(weakness) {
        this.weaknesses.push(weakness);
    }
    removeWeakness(weakness) {
        this.weaknesses.splice(this.weaknesses.indexOf(weakness), 1);
    }
    addAttribute(attribute) {
        this.attributes.push(attribute);
    }
    removeAttribute(attribute) {
        this.attributes.splice(this.attributes.indexOf(attribute), 1);
    }
}
class Ability {
    constructor(name, description, attributes, effects) {
        this.name = name;
        this.type = "";
        if (this.type == "basic") {
            this.type = "Basic Ability";
        } else if (this.type == "Ultimate") {
            this.type = "Ultimate Ability";
        } else if (this.type == "Passive") {
            this.type = "Passive Ability";
        }
        this.description = description;
        this.attributes = attributes;
        this.effects = effects;
        this.hasCost; // True or False
        if (this.hasCost == true) { // If the ability has a cost
            this.hasDynamicCost; // True or False
            if (this.hasDynamicCost == true) { // If the ability has a cost reduction
                this.dynamicType = ""; // Cost reduction type
                if (this.dynamicType == "increases") { // If the cost reduction increases
                    this.baseCost = 0; // Base cost value
                    this.increasedCost = 0; // Increased cost value
                    this.increasedCondition = ""; // Increased by
                    this.increaseType = ""; // Increase type
                    if (this.increaseType == "percent") { // If the increase is percent
                        this.increasePercentage = 0; // Increase percentage
                    } else if (this.increaseType == "flat") { // If the increase is flat
                        this.increasedCost = 0; // Increased cost value
                    }
                } else if (this.dynamicType == "decreases") { // If the cost reduction decreases
                    this.cost = 0; // Cost value
                    this.decreasedCost = 0; // Decreased cost value
                    this.decreasedCondition = ""; // Decreased by
                    this.decreaseType = ""; // Decrease type
                    if (this.decreaseType == "percent") { // If the decrease is percent
                        this.decreasePercentage = 0; // Decrease percentage
                    } else if (this.decreaseType == "flat") { // If the decrease is flat
                        this.decreasedCost = 0; // Decreased cost value 
                    }
                }
            } else { // If the ability has a static cost
                this.cost = 0; // Cost value
            }
            this.costType = ""; // Cost type
            if (this.costType == "energy") { // If the cost is energy
                this.energyCost = 0; // Cost value
            } else if (this.costType == "health") { // If the cost is health
                this.healthCost = 0; // Cost value
            } else if (this.costType == "mana") { // If the cost is mana
                this.manaCost = 0; // Cost value
            } else if (this.costType == "other") { // If the cost is stamina
                this.otherCost = 0; // Cost value
            }
        }
        this.hasRange; // True or False
        if (this.hasRange == true) { // If the ability has a range
            this.rangeType = ""; // Range type
            if (this.rangeType == "static") { // If the range is static
                this.range = 0; // Range value
            } else if (this.rangeType == "dynamic") { // If the range is dynamic
                this.dynamicRangeType = ""; // Dynamic range type
                if (this.dynamicRangeType == "increase") { // If the range increases
                    this.baseRange = 0; // Range value
                    this.increasedRange = 0; // Increased range value
                } else if (this.dynamicRangeType == "decrease") { // If the range decreases
                    this.range = 0; // Range value
                    this.decreasedRange = 0; // Decreased range value
                }
            }
        }
        this.hasDuration; // True or False
        if (this.hasDuration == true) { // If the ability has a duration
            this.durationType = ""; // Duration type
            if (this.durationType == "static") { // If the duration is static
                this.duration = 0; // Duration value
            } else if (this.durationType == "dynamic") { // If the duration is dynamic
                this.dynamicDurationType = ""; // Dynamic duration type
                if (this.dynamicDurationType == "increase") { // If the duration increases
                    this.baseDuration = 0; // Duration value
                    this.increasedDuration = 0; // Increased duration value
                    this.increasedBy = ""; // Increased by
                } else if (this.dynamicDurationType == "decrease") { // If the duration decreases
                    this.duration = 0; // Duration value
                    this.decreasedDuration = 0; // Decreased duration value
                    this.decreasedBy = ""; // Decreased by
                }
            }
        }
        this.hasDynamicCooldown; // True or False
        if (this.hasDynamicCooldown == true) { // If the ability has a cooldown reduction
            this.dynamicType = ""; // Cooldown reduction type
            if (this.dynamicType == "increases") { // If the cooldown reduction increases
                this.baseCooldown = 0; // Base cooldown value
                this.increasedCooldown = 0; // Increased cooldown value
                this.increasedCondition = ""; // Increased by
                this.increaseType = ""; // Increase type
                if (this.increaseType == "percentage") { // If the increase is percentage
                    this.increasePercentage = 0; // Increase percentage value
                } else if (this.increaseType == "flat") { // If the increase is flat
                    this.increaseFlat = 0; // Increase flat value in seconds
                }
            } else if (this.dynamicType == "decreases") { // If the cooldown reduction decreases
                this.cooldown = 0; // Cooldown value
                this.decreasedCooldown = 0; // Decreased cooldown value
                this.decreasedCondition = ""; // Decreased by
            }
        } else if (this.hasDynamicCooldown == false) { // If the ability does not have a cooldown reduction
            this.cooldown = 0; // Cooldown value
        }
    }
}
class AbilityEffect {
    constructor(name, description, attributes, effects) {
        this.name = name;
        this.targetType = "";
        if (this.effectTarget == "self") {
            this.hasHeal;
            if (this.hasHeal == true) {
                this.healType = "";
                if (this.healType == "flat") {
                    this.healAmount = 0;
                } else if (this.healType == "percent") {
                    this.percentType = "";
                    if (this.percentType == "percent of max health") {
                        this.healType =
                            this.healPercentage = 0;
                    }
                }

            } else if (this.targetType == "enemy") {
                this.targets = "Enemy";
                this.hasDamage; // True or False
                if (this.hasDamage == true) { // If the ability has damage
                    this.damageType = ""; // Damage type
                    if (this.damageType == "physical damage") { // If the damage is physical
                        this.damage = 0; // Damage value
                    } else if (this.damageType == "magic damage") { // If the damage is magical
                        this.damage = 0; // Damage value
                    } else if (this.damageType == "true damage") { // If the damage is pure
                        this.damage = 0; // Damage value
                    }
                    this.hasDamageOverTime; // True or False
                    if (this.hasDamageOverTime == true) { // If the ability has damage over time
                        this.damageOverTime = 0; // Damage over time
                        this.numberOfTicks = 0; // Number of ticks
                        this.tickrate = 0; // Tickrate
                        this.damageOverTimeDuration = 0; // Damage over time duration
                        this.hasTickAcceleration; // True or False
                        if (this.tickAcceleration == true) { // If the ability has tick acceleration
                            this.tickAccelerationType = ""; // Tick acceleration type
                            if (this.tickAccelerationType == "percentage") { // If the tick acceleration is percentage
                                this.tickAccelerationPercentage = 0; // Tick acceleration percentage
                            } else if (this.tickAccelerationType == "flat") { // If the tick acceleration is flat
                                this.tickAccelerationFlat = 0; // Tick acceleration flat
                            } else if (this.tickAccelerationType == "flat per tick") { // If the tick acceleration is flat per tick
                                this.tickAccelerationFlatPerTick = 0; // Tick acceleration flat per tick
                            } else if (this.tickAccelerationType == "flat per second") { // If the tick acceleration is flat per second
                                this.tickAccelerationFlatPerSecond = 0; // Tick acceleration flat per second
                            }
                        } else if (this.tickAcceleration == false) { // If the ability does not have tick acceleration
                            this.tickDamage = this.damageOverTime / this.numberOfTicks; // Tick damage
                        }
                        this.hasDebuff; // True or False
                        if (this.hasDebuff == true) { // If the ability has a debuff
                            this.debuffType = ""; // Debuff type
                            if (this.debuffType == "damage") { // If the debuff is a damage debuff
                                this.damageModifier = 0; // Damage modifier
                                this.damageType = ""; // Damage type
                            } else if (this.debuffType == "damage over time") { // If the debuff is a damage over time debuff

                                this.damageOverTimeType = ""; // Damage over time type




                            }
                        } else if (this.debuffType == "Crowd Control") { // If the debuff is a crowd control debuff
                            this.crowdControlDuration = 0; // Crowd control duration
                        }


                    }
                }
                this.hasCrowdControl; // True or False

            } else if (this.targetType == "ally") {
                this.targets = "Ally";
            } else if (this.targetType == "neutral") {
                this.targets = "Neutral";
            }
        }
    }
}

