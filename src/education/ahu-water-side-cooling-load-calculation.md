---
date:  08 Dec 2020
id: 'ahu-water-side-cooling-load-calculation'
title: "AHU water side cooling load calculation"
desc: Formulae for the chilled water cooling load calculation and its derivations. 
imgDesc: 'Image is the derivation of the chilled water cooling load calculation'
author: 'by Dasa'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

<div style="display: none">

![](/img/education/ahu-water-side-cooling-load-calculation/_thumbnail.png)

</div>

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

<DynamicGlobalComponent componentName="AhuWaterSideLoad" />

The simple formula which is used to calculate chilled water Btu is 

Btu/hr = 500 * gpm * $\Delta$T
 > Where, 
 > gpm         - Water flow rate measured in gpm (gallons per minute)
 > $\Delta$T   - Chilled water Temperature difference between inlet and outlet in °F

The above equation is derived from 

Q = m$C_{p}$$\Delta$T

 > Where, 
 > Q - Total enthalpy
 > m - Mass flow rate
 > $C_{p}$ - Specific heat of water
 > $\Delta$T   - Chilled water Temperature difference between inlet and outlet

We want to get the total enthalpy in Btu/hr by entering the water flow rate in gpm. To achieve that we need the vairables in below specified unit of measurements 

> mass flow rate in lb/gallons-hr, 
> Specific heat in Btu / lb-°F,
> Temperature difference in °F

<!-- $$
\begin{aligned}
Mass\enspace flow\enspace rate\enspace of\enspace water &= mass/volume  \\
1\enspace gallon\enspace of\enspace water &= 8.33\enspace lb  \\
1\enspace gpm &= 60\enspace gallons/hour\\
Specific\enspace heat\enspace of\enspace water &= 1.0 Btu/lb-^{o}F
\end{aligned}
$$ -->
- Mass flow rate of water = mass/volume
- 1 gallon of water = 8.33 lb
- 1 gpm = 60 gallons/hour
- Specific heat of water = 1.0 $Btu/lb-^{o}F$

Substitute the above values and we get

Q = (8.33 lb * gpm * 60) * 1.0 * $\Delta$T
  = 499.8 * gpm * $\Delta$T
  $\thickapprox$ 500 * gpm * $\Delta$T




