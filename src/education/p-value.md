---
date:  26 Apr 2020
id: 'p-value'
title: "p-value"
desc: p-value the amount of unusual sample values
imgDesc: 'A simple paint image represents the p-value statistics'
author: 'by theDataTalks'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

## Definition:

The p-value denotes the amount of unusual sample values we get from a population. It defines how extreme the test statistics is in the direction of alternative hypothesis. Also it defines the consistancy of a test statistics.

Let α be the significance level, then (1-α) is the confidence level.  
Assume α = 5% i.e., 95% (1-α) confidence level

Let H<sub>0</sub> be the null hypothesis.

If the calculated p-value is less than α i.e., 5%, then H<sub>0</sub> will be rejected.   
i.e., 5% of the time we would reject null hypothesis H<sub>0</sub> wrongly.  
i.e., 5% of the time we erroneously conclude that the coin is unfair.  
This leads to 5% Type-I error (fail to accept H<sub>0</sub> when it is true)  
i.e., 95% of the time we accept H<sub>0</sub> correctly  
i.e., 95% of the time we correctly conclude that the coin is indeed fair.  


Suppose we get p-value just above 5%, then H<sub>0</sub> is accepted and observed data is a rare event.

Please read this page for [p-values & binomial trials](https://thedatatalks.in/education/bernoulli-distribution-binomial-trials).

<style>
</style>