---
date:  08 Dec 2020
id: 'psychrometric-chart-and-related-equations'
title: "Psychrometric chart and related equations"
desc: Plotting and resolving air properties with the help of psychrometric chart and resolving air properties with the help of equations.
imgDesc: 'Image shows the equations for the humidity ratio'
author: 'by Dasa'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

## Resolve with Psychrometric chart

Below are the list of air properties we generally use in air conditioning

For simplicity consider there is no fresh air addition, AHU fan motor heat gain, and infiltration.

Also a typical cooling and dehumidification process is considered in this example.

```
DBT – Dry bulb temperature (°F)
    > It is the thermodynamic temperature of air measured using a thermometer freely exposed to 
    atmosphere and shielded from radiation and moisture
WBT – Wet bulb temperature (°F)
    > It is the thermodynamic temperature of air measured using a thermometer which is covered
    by a wetted cloth.
DP - Dew point temperature
    > Temperature at which the water vapour in the air condense in to water.
    At dew point DBT = WBT = DP
    Temperature at which humidity is 100% and air can not hold further water vapour.
RH – Relative humidity (%)
    > Amount of water vapour per amount of saturated water vapour at a specified temperature 
    (OR) Partial pressure of water vapour per equilibrium vapour pressure of water vapour at 
    a specified temperature.
    (OR) Specific humidity of air per specific humidity of saturated air.
AH - Absolute humidity / humidity ratios / Specific humidity(lb/lb / gr/lb)
    > Pounds of water vapour per pound of air
VP – Vapour pressure / partial pressure of water vapour (psi)
    > It is the pressure at which the air can have maximum water vapour for a given temperature.
SV – Specific volume (ft3/lb)
    > Volume of air per unit mass
SH – Specific enthalpy (Btu/lb)
    > Energy per mass
```
Psychrometric chart is a graphical representation of thermodynamic properties of air. With any two known values we can plot all other values using this chart with minimal approximation.

Below image is the representation of all the above thermodynamic properties plotted in a psychrometric chart.
(Verify that you have a right chart in place with respect to the altitude. Values taken in this example are at sea-level)

![](/img/education/psychrometric-chart-and-related-equations/ph-chart.svg)

Assume the below inlet and outlet air conditions
 - inlet air DBT 75° F & WBT 68° F
 - outlet air DBT 57° F & WBT 56° F

For the above assumed values plotted psychrometric properties are

| Property   | Description                           | Values @ Inlet | Values @ Outlet |
|------------|---------------------------------------|----------------|-----------------|
| HR (OR) AH | Humidity Ratio (OR) Absolute Humidity | 0.013 lb/lb    | 0.009 lb/lb    |
| VP         | Vapour Pressure                       | 0.303 psia      | 0.212 psia      |
| RH         | Relative Humidity                     | 70%          | 94.2%          |
| DP         | Dew Point Temperature                 | 64.8° F        | 55.3° F         |
| SH         | Specific Enthalpy                    | 32.3 Btu/lb    | 23.8 Btu/lb     |
| SV         | Specific Volume                       | 13.7 ft3/lb   | 13.2 ft3/lb    |

## Resolve with thermodynamic equations

The above psychrometric properties can be calculated with the help of thermodynamic equations as stated below.

Assume the known properties are DBT, WBT & altitude(Sea-level)

### Standard pressue & temperature at the given altitude

$p =$ $14.696*(1 - 6.8754 * 10^{-6} * Z)^{5.2559}$
$t = 59-0.00356620 * z$

> Where,
> $p$ - Standard atmospheric pressure at the specified altitude in psia
> $t$ - Standard atmospheric temperature at the specified altitude in °F
> $z$ - altitude in ft

### Rankine temperature °R

$^{o}R = ^{o}F + 459.67$

### Saturated pressure

When the given DBT or WBT is between -148° F to 32° F

$\ln(p_{t}) = \dfrac{C_{1}}{t} + C_{2} + C_{3}*t$ $+$ $C_{4}*t^2 + C_{5}*t^3 + C_{6}*t^4$ $+$ $C_{7}*\ln(t)$

When the given DBT or WBT is between 32° F to 392° F

$\ln(p_{t}) = \dfrac{C_{8}}{t} + C_{9}$ $+$ $C_{10}*t + C_{11}*t^2 + C_{12}*t^3$ $+$ $C_{13}*\ln(t)$

> Where,
> $p_{t}$ - Saturated pressure at the given temperature in psia
> t - Given temperature in °R
> C1, C2, ..., C13 are constants and their values are 
    -10214.165, -4.8932428, -0.005376579, 1.92024E-07, 3.55758E-10, -9.03447E-14, 4.1635019
    -10440.397, -11.29465, -0.027022355, 1.28904E-05, -2.47807E-09, 6.5459673
    respectively

### Humidity ratio at saturation

At the given WBT, humidity ratio at saturation is calculated as below

$W_{wbt} = \dfrac{0.621945 * p_{wbt}} {p-p_{wbt}}$

>Where,
>$W_{wbt}$ - Humidity ratio at saturation
>$p_{wbt}$ - Saturated pressure at given WBT in psia
>$p$ - Standard atmospheric pressure at given altitude(sea-level) in psia

### Humidity ratio (AH / HR)

Humidity ratio for the given DBT & WBT

Below freezing 

<!-- $W = \dfrac{(1220-0.04*WBT)*W_{wbt}-0.240*(DBT-WBT)} {1220 + 0.444*DBT-0.48*WBT}$ -->
$W =$ ${$ $(1220-0.04*WBT)$ * $W_{wbt}-0.240*(DBT-WBT)$ $}$ ÷ ${$ $1220 + 0.444*DBT-0.48*WBT$ $}$

Above freezing

<!-- $W = \dfrac{(1093-0.556*WBT)*W_{wbt}-0.240*(DBT-WBT)} {1093 + 0.444*DBT-WBT}$ -->
$W =$ ${$ $(1093-0.556*WBT)$ * $W_{wbt}-0.240*(DBT-WBT)$ $}$ ÷ ${$ $1093 + 0.444*DBT-WBT$ $}$

>Where,
>$W$ - Humidity ratio in lb/lb
>WBT - Wet bulb temperature in °F
>DBT - Dry bulb temperature in °F
>$W_{wbt}$ - Humidity ratio at saturation

### Partial pressure of water vapour (VP)

$p_{w} = \dfrac{p * W} {0.621945 + W}$

>Where,
>$p_{w}$ - Partial pressure of water vapour (VP) in psia
>$W$ - Humidity ratio in lb/lb
>$p$ - Standard atmospheric pressure at given altitude(sea-level) in psia

### Relative humidity (RH)

$\Phi = \dfrac{p_{w}} {p_{ws}}$

>Where,
>$\Phi$ - Relative humidity in %
>$p_{w}$ - Partial pressure of water vapour (VP) in psia
>$p_{ws}$ - Vapour pressure at saturation i.e., saturated pressure at the given DBT

### Dew point temperature (DP)

$\alpha = \ln(p_{w})$

For above 32° F

$t_{dp} = C_{14}$ $+$ $C_{15}*\alpha + C_{16}*\alpha^2$ $+$ $C_{17} * \alpha^3 + C_{18}*p_{w}^{0.1984}$

For below 32° F

$t_{dp} = 90.12 + 26.142 * \alpha + 0.8927 * \alpha^2$

>Where,
>$t_{dp}$ - Dew point temperature in °F
>$p_{w}$ - Partial pressure of water vapour (VP) in psia
>C14, C15, ..., C18 are constants and their values are 
    100.45, 33.193, 2.319, 0.17074, 1.2063
    respectively

### Specific enthalpy (SH)

$h = 0.240$ * DBT$ $+$ $W * (1061 + 0.444 * DBT)$

>Where,
>$h$ - Specific enthalpy (SH) in Btu/hr
>DBT - Dry bulb temperature in °F
>$W$ - Humidity ratio in lb/lb

### Specific volume (SV)

$v =$ $\dfrac{0.370486 * DBT * (1+1.607858*W)} {p}$

>Where,
>$v$ - Specific volume (SV) in $ft^3/lb$
>DBT - Dry bulb temperature in °R
>$W$ - Humidity ratio in lb/lb
>$p$ - Standard atmospheric pressure at given altitude(sea-level) in psia

## Psychrometric properties calculator

<DynamicGlobalComponent componentName="PsychrometricProperties" />