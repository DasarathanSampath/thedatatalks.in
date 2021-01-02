---
date:  08 Dec 2020
id: 'air-handling-unit-performance-calculation'
title: "Air Handling Unit (AHU) performance calculation"
desc: Calculating water side energies, air side energies which includes capacity/tonnage, psychrometric properties, air flow rate, apparatus dew point temperature & by-pass factor.
imgDesc: 'A simple line drawing showing the basic components of AHU'
author: 'by Dasa'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

BTU of the coil side(High side) should match the BTU of the air side(Low side).

## Coil side / High side:

Typical values are 

 - Chilled water-in 44° F
 - Chilled water-out 54° F
 - Estimated Δt - 10° F
 - Chilled water pressure drops - max. 20 ft of H2O
 - Flow rate - 2.4 gpm/ton
 - Water velocity – 2 fps ~ 3 fps

A typical chilled water system gives water at 44° F to an AHU at the inlet.

Measure the water flow rate at the inlet of the AHU. We can measure the flow rate using an analog/digital manometer OR an ultrasonic flowmeter installed on the chilled water pipe. 

Typical AHU requires flow rate of 2.4 gallons/ton. So, the flow rate should be 24 gpm for the AHU capacity of 10 TR.

Typical AHU will have Δt of 10° F. So, the AHU coil outlet temperature should be 54° F.

Refer [water system cooling load calculations](https://thedatatalks.in/education/ahu-water-side-cooling-load-calculation) for formulae derivations.

For the above assumed parameters we can calculate the cooling load as

```
Btu/hr 	= 500 x gpm x Δt
	    = 500 X   24gpm x (44° F -54° F)
	    = 120000
	    = 120000/ 12000 tons = 10 tons

```