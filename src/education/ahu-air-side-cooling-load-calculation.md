---
date:  08 Dec 2020
id: 'ahu-air-side-cooling-load-calculation'
title: "AHU air side cooling load calculation"
desc: Formulae for the Sensible load, latent load & total load calculation and its derivations. 
imgDesc: 'Image shows the derivations for the air side cooling load calculation'
author: 'by Dasa'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

<DynamicGlobalComponent componentName="AhuAirSideLoad" />

## Sensible cooling/heat load

The simple equation which we use for calculating sensible load is

$Q_{s} = 1.08 * CFM * \Delta T$

The above equation is derived from 

$Q_{s} = m * C_{p} * \Delta T$

>Where,
>$Q_{s}$ - Sensible load
>m - Mass flow rate of air
>$C_{p}$ - Specific heat of air
>$\Delta T$ - Temperature difference

To get the sensible load in Btu/hr by entering the air flow rate in cfm (cubic feet per minute), the other variables should have the below specified units.

>mass flow rate in lb/ft3-hr,
>Specific heat in Btu/lb-°F,
>Temperature difference in °F

<!-- $$
\begin{aligned}
Mass\enspace flow\enspace rate\enspace of\enspace air &= mass/volume  \\
Density\enspace of\enspace air\enspace &= 0.075\enspace lb/ft^{3}\enspace at\enspace atmospheric\enspace pressure\enspace and\enspace 70^{o} F\\
1\enspace cfm &= 60\enspace ft^3/hour\\
Specific\enspace heat\enspace of\enspace air &= 0.24\enspace Btu/lb-^{o}F
\end{aligned}
$$ -->

- Mass flow rate of air = mass/volume
- Density of air = 0.075 $lb/ft^{3}$ at atmospheric pressure and $70^{o} F$
- 1 cfm = 60 $ft^3/hour$
- Specific heat of air = 0.24 $Btu/lb-^{o}F$

Substitute the above values and we get

$$
\begin{aligned}
Q_{s} &= (0.075 * cfm * 60) * 0.24 * \Delta T \\
 &= 1.08 * cfm * \Delta T
\end{aligned}
$$

## Latent cooling/heat load

The simple equation which we use for calculating latent load is

$Q_{l} = 0.69 * CFM * \Delta W$

The above equation is derived from 

$Q_{l} = m * L * \Delta W$

>Where,
>$Q_{l}$ - Latent load
>m - Mass flow rate of air
>L - Latent heat of water
>$\Delta W$ - Difference in humidity ratio

To get the sensible load in Btu/hr by entering the air flow rate in cfm (cubic feet per minute), the other variables should have the below specified units.

>mass flow rate in lb/ft3-hr,
>Latent heat of water in Btu/lb

<!-- $$
\begin{aligned}
Latent\enspace heat\enspace of\enspace water\enspace vapour &= 1094\enspace Btu/lb\enspace at\enspace atmospheric\enspace pressure\enspace and\enspace 75^{o} F\\
Latent\enspace heat\enspace of\enspace condensed\enspace water &= 18\enspace Btu/lb\enspace at\enspace atmospheric\enspace pressure\enspace and\enspace 75^{o} F\\
Latent\enspace heat\enspace of\enspace vapourizing\enspace water &= 1094-18 = 1076\enspace Btu/lb\enspace at\enspace atmospheric\enspace pressure\enspace and\enspace 75^{o} F\\
Density\enspace of\enspace air\enspace &= 0.075\enspace lb/ft^{3} at\enspace atmospheric\enspace pressure\enspace and\enspace 70^{o} F\\
1\enspace cfm &= 60\enspace ft^3/hour\\
Specific\enspace heat\enspace of\enspace air &= 0.24\enspace Btu/lb-^{o}F
\end{aligned}
$$ -->

- Latent heat of water vapour = 1094 Btu/lb at atmospheric pressure and $75^{o} F$
- Latent heat of condensed water = 18 Btu/lb at atmospheric pressure and $75^{o} F$
- Latent heat of vapourizing water = 1094-18 = 1076 Btu/lb at atmospheric pressure and $75^{o} F$
- Density of air = 0.075 $lb/ft^{3}$ at atmospheric pressure and $70^{o} F$
- 1 cfm = 60 $ft^3/hour$
- Specific heat of air = 0.24 $Btu/lb-^{o}F$


Substitute the above values and we get

$$
\begin{aligned}
Q_{l} &= (0.075 * cfm * 60) * 1076 * \Delta W \\
 &= 4842 * cfm * \Delta W
\end{aligned}
$$

>Where,
>>$\Delta W$ is in lb/lb

$$
\begin{aligned}
Q_{l} &= 4842 * cfm * \Delta W / 7000 \\
&= 0.69 * cfm * \Delta W
\end{aligned}
$$

>Where,
>>$\Delta W$ is in gr/lb

## Total cooling/heat load

Total load can be calculated by adding above two values viz., sensible load and latent load.

$Q_{t} = Q_{l} + Q_{s}$

OR we can calculate using below equation

$Q_{t} = m * \Delta H$

>Where,
>$Q_{t}$ - Total load
>m - Mass flow rate of air
>$\Delta H$ - Difference in Specific Enthalpy

$$
\begin{aligned}
Q_{t} &= 0.075 * cfm * 60 * \Delta H \\
&= 4.5 * cfm * \Delta H
\end{aligned}
$$

>Where,
>$Q_{t}$ - Total load in Btu/hr
>$\Delta H$ - Difference in Specific Enthalpy in Btu/lb

## Sensible Heat Factor (SHF)

Sensible heat factor can be calculated using below equation

$SHF = \dfrac {Q_{s}} {Q_{s} + Q_{l}}$