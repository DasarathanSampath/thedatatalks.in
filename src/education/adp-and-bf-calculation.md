---
date:  08 Dec 2020
id: 'adp-and-bf-calculation'
title: "ADP & BF calculation"
desc: Formulae for the apparatus dew point temperature and by-pass factor. 
imgDesc: 'Image shows the derivations for iterating ADP value from cooling load calculations'
author: 'by Dasa'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

## ADP - Apparatus dew point temperature

Effective surface temperature of a heat exchanger coil is called ADP.

### Calculate ADP using psychrometric chart

When we know the psychrometric conditions of inlet & outlet air, we can use the psychrometric chart to define ADP.

Locate the inlet & outlet points in the chart and draw a line through it which represents the SHF. Extend the line and locate ADP at the intersection on saturation line. We may need to use protractor and set square to draw this line and find ADP.

![](/img/education/adp-and-bf-calculation/adp-chart.svg)

### Calculate ADP using cooling load calculations

When we know the room sensible load & room latent load from building heat/cooling load calculations, we can find the ADP by reverse calculation.

We have to iterate the room sensible heat factor to solve ADP.

$ERSH = 1.08 * cfm * (T_{rm} - T_{adp}) * (1-BF)$
$ERLH = 4842 * CFM * (W_{rm} - W_{adp}) * (1-BF)$
$ERSHF = \dfrac {(1.08 * cfm * (T_{rm} - T_{adp}) * (1-BF))} {(1.08 * cfm * (T_{rm} - T_{adp}) * (1-BF)) + (4842 * CFM * (W_{rm} - W_{adp}) * (1-BF))}$

$= \dfrac {(1.08 * cfm * (T_{rm} - T_{adp}))} {(1.08 * cfm * (T_{rm} - T_{adp})) + (4842 * cfm * (W_{rm} - W_{adp}))}$

>Where,
>ERSH - Room sensible heat
>ERLH - Room latent heat
>ERSHF - Effective room sensible heat factor
>cfm - Air flow rate in ft³/minute
>$T_{rm}$ - Room dry bulb temperature in °F
>$T_{apd}$ - (ADP) Apparatus dew point temperature in °F
>$W_{rm}$ - Humidity ratio at room dry bulb temperature
>$W_{adp}$ - Humidity ratio at apparatus dew point temperature

<DynamicGlobalComponent componentName="AdpCalculation" />

### Calculate ADP using mass transfer equations

The surface temperature of a heat exchanger coil can be found using the below heat and mass transfer equations 

$Q	= U * A * LMTD$

$LMTD = \dfrac {\Delta T1 - \Delta T2} {\ln(\dfrac{\Delta T1}{\Delta T2})}$

## BF - By-pass factor

Ideally the air leaving temperature should be equal to the surface temperature of the coil.  But it is never possible since few amounts of air through the coil never touch the surface and pass through it. This process is defined as by-pass factor.

$BF = \dfrac {Tdbt_{outlet} - ADP} {Tdbt_{inlet} - ADP}$

>Where,
>ADP - Apparatus dew point temperature in °F
>$Tdbt_{outlet}$ - Dry bulb temperature leaving coil in °F
>$Tdbt_{inlet}$ - Dry bulb temperature entering coil in °F

<DynamicGlobalComponent componentName="ByPassFactor" />
