---
date:  07 Jul 2021
id: 'hvac-duct-air-pressure-loss'
title: "HVAC duct air pressure loss"
desc: HVAC duct air pressure loss using Darcy Weisbach equation and Colebrook equation or Moody’s chart. 
imgDesc: 'Image shows the representation of a typical HVAC duct'
author: 'by Dasa'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>


This document describes the method of calculating ventilation air or conditioned air pressure loss across a rectangular duct with the help of the Darcy Weisbach equation and Colebrook equation or Moody’s chart.

Let us assume a straight duct of 12” Height x 18” Width x 100” Length, through which 2000 cfm of air is passing. Refer to the below image for details.

![](@assets/images/education/hvac-duct-air-pressure-loss/img1.png)

We can define the below values from the details given in the above image

|     Description                    |     Symbol    |     Formula      |     Value    |     Unit    |
|------------------------------------|---------------|------------------|--------------|-------------|
|     Corss   sectionArea of duct    |     a         |     $W * H$      |     216      |     in2     |
|     Perimeter of   duct            |     P         |     $2 * (W+H)$  |     60       |     in      |
|     Length of the   duct           |     l         |     --           |     100      |     in      |
|     Airflow rate                   |     q         |     --           |     2000     |     cfm     |


Find below assumed air constants

|     Description                           |     Symbol    |     Formula    |     Value      |     Unit        |
|-------------------------------------------|---------------|----------------|----------------|-----------------|
|     Absolute   Viscoity of air @ 80° F    |     µ         |     --         |     0.04462    |     lb/ft-hr    |
|     Density of air                        |     ρ         |     --         |     0.00237    |     slug/ft3    |
|     Density of air                        |     ρ         |     --         |     0.0751     |     lb/ft3    |

Find below assumed material constants

|     Description                                 |     Symbol    |     Formula    |     Value       |     Unit    |
|-------------------------------------------------|---------------|----------------|-----------------|-------------|
|     Absolute   roughness of Galvanized steel    |     ε         |     --         |     0.0036    |     in      |

Find below calculated values

|     Description             |     Symbol    |     Formula            |     Value    |     Unit    |
|-----------------------------|---------------|------------------------|--------------|-------------|
|     Duct air   Velocity     |     v         |     $= \dfrac {q} {a}$ |     1333     |     fpm     |
|     Wetted perimeter        |     $p_w$     |     = Duct perimeter   |     60       |     in      |
|     Hydraulic   diameter    |     $d_h$     |     $= \dfrac{4 * a} {p_w}$ |     14.40    |     in      |


## Renoyld number (Re):

$R_e = \dfrac{d_h * v * \rho} {\mu}$  

$=\dfrac{(14.4/12) * (1333*60) * 0.0751} {0.04462}$

$= 161578$

## Friction loss co-efficient (Lambda):

If,

$R_e$ < 2300 then the flow is Laminar
$R_e$ > 2300 and $R_e$ < 4000 then the flow is transient
$R_e$ > 4000 then the flow is Turbulent

For Laminar flow

Friction loss co-efficient
$\lambda = \dfrac {64} {R_e}$

For Turbulent flow

We have to use Moody's chart or Colebrooke equation.

### Moody's chart:

$\lambda$ is a function of $R_e$ and $\dfrac {\epsilon} {d_h}$

$\lambda = f (R_e, \dfrac {\epsilon} {d_h})$

$\dfrac {\epsilon} {d_h} = \dfrac{0.0036} {14.4} = 0.00025$

From Moody's chart you can find the below value

$\lambda = 0.0144$ @ {$R_e = 161578$ and $\dfrac {\epsilon} {d_h} = 0.00025$}

### Colebrooke equation:

$\dfrac{1} {\sqrt{\lambda}}= -2 * \log(\dfrac{2.51} {R_e * \sqrt{\lambda}}  +  \dfrac{k}{dh * 3.72})$

Slove the above equation by trial and error method (iterate) using different values for λ.

Resolved λ = 0.0179


## Pressure loss using Darcy Weisbach equation:

$\Delta P = \lambda * \dfrac{l}{d_h} * \dfrac{\rho*v^2}{2}$

$= 0.0179 * \dfrac{100}{14.4} * \dfrac{0.00237*1333^2}{2}$

$= 0.0727 \dfrac {lb_f}{ft^2}$

$= 0.014$ $inch$ $of$ $H_2 O$


<DynamicGlobalComponent componentName="HvacDuctAirPressureLoss" />
