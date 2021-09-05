---
date: 19 Apr 2020
id: 'standard-deviation-and-error'
title: "Standard deviation and Standard error"
desc: Introduction to mean, variance, standard deviation and standard error of a population
imgDesc: 'Image'
author: 'by theDataTalks'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

Let,

x1, x2, x3, x4, .... xn are observations of a population and 'n' being the total number of observations, then   

## Population mean

$x' = \mu = {x_1+x_2+x_3+.....+x_n \over n}$

Which is represented as

$\mu = {{\sum_{i=1}^{n} x_n} \over n}$

## Population vairance

$\nu = {{ (x_1-\mu) + (x_2-\mu) + (x_3-\mu) +....+ (x_n-\mu)} \over n}$

Which is represented as

$\nu = {\sum_{i=1}^{n} (x_i -\mu) \over n}^2 =  \sigma^2$

## Population standard deviation

$\sigma = \sqrt{\nu} = \sqrt{\sigma^2}$

Suppose n number of samples were taken from the above population &  x_1, x_2, x_3, ... x_n represents each sample then, 

Mean of each samples: $x_1', x_2', x_3', ... x_n'$

Mean of Sample means:$\mu' = {{\sum_{i=1}^n x_i'} \over n}$

Variance of sample means: $\nu'$ = ${\sigma'}^2$ = ${\sum_{i=1}^{n}(x_i' -\mu')^2 \over (n-1)}$

- Note we have used (n-1) as denominator for sample variance. We will talk about this in later sections.

**Standard deviation of sample means = Standard deviation of Statistics = Standard Error(SE) =** 

$\sigma' = \sqrt{\nu'} = \sqrt{(\sigma')^2}$

## Mean 
Average of a population.

## Variance

The deviation for set of numbers which are spread out from the population mean. It is the expected squared deviation of a random variable from the population mean.

## Standard Deviation

Amount of variability/spread for a population. Higher standard deviation for a population having higher spread.

## Standard Error

The deviation between the sample mean and the population mean is called Standard error. Describes how far the sample mean is from the true population mean.


**When we do not know the properties(mean, variance, etc.,) of true population,** we can estimate them using sample sets.

As described above the Mean of all sample is taken as unbiased population mean estimator. And this is the best we can estimate. 
Since the variance is dependent on mean, 

Variance of samples {$(var(\overline{X_1}) + var(\overline{X_2}) + var(\overline{X_3}) .... var(\overline{X_n}) \over n$ } = True Varience = $\sigma^2$

Let X_1, X_2, X_3, ....... X_n are independent samples from a population, whos expected value is µ and variance σ². Then  

$\overline{X_1}$, $\overline{X_2}$, $\overline{X_3}$, ... $\overline{X_n}$ be the mean of each samples

$$\begin{array}{c}

\text{Mean-of-Sample-means} \overline{X} = {\overline{X_1} + \overline{X_2} + \overline{X_3} .... \overline{X_n} \over n} \\\\
\text{Variance-of-all-Sample-Means } = var(\overline{X})   \\\\
= var \left( \overline{X_1} + \overline{X_2} + \overline{X_3} .... \overline{X_n} \over n \right)  \\\\
= {1 \over n^2} var(\overline{X_1} + \overline{X_2} + \overline{X_3} .... \overline{X_n})   \\\\
= {1 \over n^2} (var(\overline{X_1}) + var(\overline{X_2}) + var(\overline{X_3}) .... var(\overline{X_n}))  \\\\
= {1 \over n^2} (n \sigma^2)  \\\\
= {\sigma^2 \over n}  \\\\

\end{array}$$

Standard deviation of all Sample Means = Standard deviation of Statistics = Standard Error(SE)

$SE = \sqrt{(\sigma)^2 \over n} = {\sigma \over \sqrt{n}}$

<style>

</style>