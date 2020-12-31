---
date: 22 Apr 2020
id: 'compound-interest'
title: Compound interest
desc: 'Calculator and details for compound interest'
imgDesc: 'No Image'
author: 'by theDatatalks'
articleLang: 'en-US'
altLang: true
isHome: false
topic: economics
headA1: Compound interest for one time deposit
headA2: 'Calculator'
headA3: One time deposit(currency)(p)
headA4: Period(Years)(t)
headA5: Yearly Interest(%)(i)
headA6: Compounding Period(n)
headA7: Total Invested(A)
headA8: Interest Receivable(B)
headA9: Total Receivable(A+B)
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

<DynamicGlobalComponent componentName="CompoundInterestCalculator" />

For detailed explanation, please refer [Reinvestment Deposit Scheme](https://thedatatalks.in/economics/reinvestment-deposit-scheme)

The total interest receivable from compounding is calculated from the below formula

[ (1+(i<span>&#247;</span>n))<sup>t*n</sup>-1 ] * p

where,

- i - Rate of Interest(%)  
- n - Number of times compounded in a year(period)  

    - Quarterly has 4 times compounding in a year, 
        we have to compound the interest for every 3 months  
    - HalfYearly has 2 times compounding in a year, 
        we have to compound the interest for every 6 months  
    - Monthly has 12 times compounding in a year, 
        we have to compound the interest for every 12 months   
    - Yearly has 1 time compounding in a year, 
        we have to compound the interest for every 1 month

- t - Total number of periods(years)  
- p - One time invested amount(currency)  

<style>   

</style>