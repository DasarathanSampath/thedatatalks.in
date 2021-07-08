---
date: 17 Feb 2019
title: Chilled water flows measurement using Orifice plate, Balancing valves, Manometers & Pitot tubes.
id: 'chilled-water-flow-measurement'
desc: This article explains various methods of chilled water flow measurement viz, Using Balancing Vale/Orifice plate & Manometers, Using Balancing Vale & Manometers, Using a simple Pitot tube, Using Pitot tube with Piezometer & Using Pitot static tubes & DP Manometer. 
imgDesc: 'Pitot static tube with U-tube manometer'
articleLang: 'en-US'
author: 'by Dasa'
altLang: false
isHome: false
---

<altLang />

# {{ $frontmatter.title }}

## Using Orifice plate & Manometers

Best suitable for liquid flow measurements.

Manufacturers:
| Electronic Manometers | Orifice plate |
|-----------------------|---------------|
| Camdronic             | Dwyer         |
| Poddymeter            | Honeywell     |
| Testo                 |               |

We can easily measure the water flow rate when we have an orifice plate on the chilled water pipeline.

When we install an orifice plate on the system, the pressure drop across the orifice can be 50% of differential pressure. Therefore, it is advisable to install the orifice plate on a by-pass line with shut-off valves.

Installation of the Orifice plate requires some set of criteria and have mentioned a few below.

Refer manufacturer datasheet for more information.

> Install the orifice plate on a horizontal line. Refer manufacturer data for minimum pipe lengths upstream and downstream.

> For the liquid line, install the orifice plate so that the differential ports are at the bottom of the water pipe to avoid air.

> For the gas line, install the orifice plate so that the differential ports are at the top of the gas pipe to avoid solid particles.


![](@assets/images/education/chilled-water-flow-measurement/orifice-plate.png)

Please refer to ISO 5167 for the measurement of flow using an Orifice plate.

Using any one of the methods mentioned at the bottom of this article, measure the differential pressure between the high-pressure port & the low-pressure port.

Calculate the volume flow rate across the orifice using the below equation.

**For Water**

$Q_{v} = \dfrac{C}{1- {\beta}^4}*\epsilon*\dfrac{\pi}{4} d^4* \sqrt{\dfrac{2 \Delta P}{\rho}}$

> Refer manufacturer data for 
> $K = \dfrac{C}{1- {\beta}^4}*\epsilon$
> Co-efficient “K” usually falls between 0.6 ~ 0.9

The above equation can be written as

$Q_{v} = K *\dfrac{\pi}{4} d^4* \sqrt{\dfrac{2 \Delta P}{\rho}}$

> where,
> $d$ - Diameter of Orifice plate
> $\Delta P$ - Differential pressure
> $\rho$ - Density of Water

## Using Balancing Vale & Manometers:

Best suitable for liquid flow measurements.

Manufacturers:
| Valves                        |
|-------------------------------|
| Belimo, Crane                 |
| FlowCon, Danfoss              |
| Honeywell, Johnson Controls   |
| Preso, Schneider, and Siemens |

We can easily measure the water flow rate when we have a balancing valve with flow measuring test ports on the chilled water pipeline.

Installation of Orifice plate/Balancing valve requires below criteria as below, and refer manufacturer datasheet for more information.

> Refer manufacturer datasheet for installation instruction & the Kvs value of balancing valves. 

Using any one of the methods mentioned at the bottom of this article, measure the differential pressure between the high-pressure port & the low-pressure port.
Calculate the volume flow rate using the below equation.

**For Water**

Calculate the volume flow rate across the balancing valve using the below equation.

$Q = KV_{s} * \Delta P$

>Where,
> $KV_{s}$ - Amount of flow at fully opened condition across a regulating valve (Refer manufacturer data)
> $\Delta P$ - Differential pressure

## Using a simple Pitot tube

Best suitable for liquid flow measurement on an open stream(example: River).

A pitot tube is a tube that is large enough for the capillary effect to be negligible.

![](@assets/images/education/chilled-water-flow-measurement/pitot-tube.png)

**For Water**

Calculate the flow velocity using the below equation.

$V = \sqrt{2gh}$

>Where,
>$g$ - Gravitational force
>$h$ - Head on pitot tube

## Using Pitot tube with Piezometer

Best suitable for liquid flow.

The pressure sensed by the pitot tube is only the stagnation pressure.  
For a closed pipeline, it is mandatory to measure the static pressure.  
Measure the static pressure on the walls of the pipe with the help of a Piezometer.

Piezometer is widely used in the groundwater system. We can not use Piezometer for gas or vacuum. The pressure should be reasonably low; otherwise, we need a long vertical pipe.

![](@assets/images/education/chilled-water-flow-measurement/pitot-tube-piezometer.png)

**For Water**

Calculate the flow velocity using the below equation.

$V = \sqrt{\dfrac{2 \Delta P} {\rho}}$

> Where,
> $\Delta P$ - Differential pressure
> $\rho$ - Density of Water


## Using Pitot static tubes & DP Manometer

Best suitable for liquid & gas flow measurement.

Manufacturers:
| Pitot tubes |
|-------------|
| Extech      |
| Dwyer       |

We can measure the statice pressure and stagnation using a single instrument called Pitot Static Tube. 

The single tube with a dual wall having holes on one shell for upstream and holes on another shell for downstream. The upstream holes will sense high pressure(Stagnation pressure), and the downstream holes will sense low pressure (static pressure).

Install the pitot static tube in which the high-pressure port is pointing to the upstream. And the pitot tube should be perpendicular to the flow direction.

We shall install the pitot static tube on a straight horizontal pipeline which should have below minimum lengths on the upstream and downstream. The rule of thumb is

> 10-15 times pipe diameter for upstream
> 5 times pipe diameter for downstream

Refer manufacturer datasheet for exact values.

![](@assets/images/education/chilled-water-flow-measurement/pitot-static-tube-manometer.png)

Using any one of the methods mentioned at the bottom of this article, measure the differential pressure between the high-pressure port & the low-pressure port.


**For Water**

Calculate the flow velocity using the below equation.

$V = C * \sqrt{\dfrac{2 \Delta P} {\rho}}$

> Where,
> $\Delta P$ - Differential pressure
> $\rho$ - Density of Water
> $C$- is a correction factor considered for friction, static to dynamic conversion loss, geometrical loss. The manufacture calculates this value from calibration tests. Refer manufacturer datasheet for this value.

## Differential Pressures:

We can use the below types of equipment to calculate the differential pressure,

-- Differential pressure gauges 
-- U-tube manometers 
-- Electronic differential pressure manometers 

| Differential pressure gauges | Electronic differential pressure manometers | U-tube manometers |
|------------------------------|---------------------------------------------|----------------------------------|
| Testo                        | Fieldpiece                                  | Honeywell                        |
| Magnehelic/Capsuhelic        | Camdronic                                   | RS components                    |
|                              | Extech                                      | FlowTech                         |
|                              | Testo                                       |                                  |


<style>
   
</style>