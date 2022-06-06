---
Tags = "Offense, Mobility, Sustain, Objectives, Engage, Utility"
---

# PsuedoCode Tagging System

## Offense

### Has Damage

  Phyiscal Damage

### Has Gapclose element

### Has AA resets

### Has AOE

### Has Scaling

#### [Scaling Type]

   Start
   Step
   Steps

## Mobility

### Has Blink/Dash
  
#### Blink

   Range
   Cooldown
   Cost
   Cast Time

#### Dash

   Range
   Cooldown
   Cost
   Speed
   Cast Time

## Sustain

### Has Healing

#### Self healing

Conditions

#### Ally healing (maybe this would create a different tag depending on amount)

### Has Shielding

  Shield strength

## Objectives

### Jungle mobs

#### Has damage

##### Has increased damage vs Monsters/objectives

##### Has life% damage

##### Has objective finisher (burst dmg over 900dmg)

### Towers

#### {1} Towers

##### Has increased dmg vs towers

##### Has penetration

#### Has aa reset(vs towers)

## Utility

### Has CC

### Has Defensive

## Engage

### Has Offense

### Has Mobility

### Has Crowd Control

## System Example

Tag Name

 Selected Filter Attributes

  If Sub type

   Attribute Value

Camille Q
Offense
   Has Damage
      If Physical
         Score Weight: 0.75
      If True
         Score Weight: 1
   Has Gapclose Element
      Movement Speed
         Duration
            0 to 1 second
               Score weight
                  0.1
            1.1 to 2
               Score weight
                  0.25
            2 to 4
               Score weight
                  0.35
            4 to 8
               Score wieght
                  0.5
            8+
               Score weight
                  0.75
      
