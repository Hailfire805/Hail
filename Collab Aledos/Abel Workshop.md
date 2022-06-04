# Target Ability: Camille Q

Tags used: Offense, Mobility, Objectives

---
Offense
    Has AA reset
    Has Damage
        Damage Type:
            Phyiscal [Medium-High]
            True Damage [High]
        Base damage:
    Has Cooldown
        Default
            Cooldown Length [High]
        Cooldown Starts
            On Cast [Minor]
    Has Scaling
        AD Scaling
            Start: 20%/40%
            End: 40%/80%
            Step: 5
            Steps: 4
        Physical -> True Scaling
            Start: 40%
            End: 100%
            Step: 4%
            Steps 15

Mobility

Objectives

---

## Attribute types

- Core Attributes

- Non-Core Attributes

- Qualatitive Attributes

- Classifying Attributes

- Filtering (Sub-Type) Attributes

## Scoring Algorithim v0.1

If [Entity] has a [Entity_Tag_Score] which is [Comparision_type] than [Score_amount_One]

OR,

If [Entitiy_group] has a [Sum_of_Tag_Score] which is [Comparision_type] than [Score_amount_Two]

<!-- 
If an Entity's tag Score is above the defined amount for this type of Entity then this Entity would receive that Tag.

If the sum of an Entity Group's Tag_Scores is above the defined amount for this type of  entity group then this Entity Group would receive that Tag.
-->

- If Entity Tag_Score Offense = 15
Give Entity Parent +15 Offense Tag_Score

Item stats are used with a champions Stat scoring modifier

### Attributes to add

Post Effect

## Brad Notes

If an Entity has/is [Attribute_Condition] give the Entity a [Tag_Score] of [###]
If an Entity's [Total_Tag_Score] passes that tag's [Minimum_Requirement] assign the [Tag]
The [Tag_Score] for each Entity is based on the results of the total [Tag_Weights] and the [Attribute_Elements]

Scaling as tag doesn't mean what you are it is
The Orientation tags are all

## Abel Notes

Scaling tag- I want to give players something actionable to plan their gameplay around based off of who scales well and who doesn't.

If the entity does the same type of damage that it scales from, then its easier to itemize to penetrate that kind of defense which would mean a higher offence tag rating
