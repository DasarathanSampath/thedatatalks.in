---
date:  08 Dec 2020
id: 'maths-number-system'
title: "Maths Number System"
desc: Basic aptitude questions in Real numbers, rational numbers, irrational numbers, integers, fractions, decimals, whole numbers, and natural numbers.  
imgDesc: ''
author: 'by Dasa'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

The test below has 110 basic questions in the number system, including real numbers, rational numbers, irrational numbers, integers, fractions, and decimals.

Each test has maximum of 25 questions.

No login is required to attend this test.
No test and user data is recorded or tracked here. 

For any errors & improvements, please write to us.
<div class="scrollHorizontal">
<div class="mermaidContainer">
<mermaid>
    flowchart TB
        A[Real Numbers: <br> All numbers on number line] ---> D["Rational Numbers <br> Can be represented <br> as integers, <br> fractions, &decimals"]
        A --> E["IrRational Numbers <br> Decimals neither repeating <br> nor terminating. <br> Can be represented <br> only in decimals. <br> √3=1.732050... & Pi(∏)=3.14159..."]
        D --> F[Integers]
        D ----> G[Fractions]
        D --> H[Decimals]
        D --> HD["Negative <br>Fractions <br> ...-3/4,-1/2,-1/4"]
        F ---> I[Whole <br>Numbers]
        F --> J["Negative <br>Numbers <br> ...,-3,-2,-1"]
        G ---> K[Proper <br>Fractions <br> Part of Whole <br> 0/1, 1/4, 1/2,...]
        G --> L[Improper <br>Fractions <br> Whole + Part of Whole <br> 1/1, 5/4, 5/2,...]
        G ---> M[Mixed <br>Fractions <br> 1 1/2, 2 3/8, 3 1/8,...]
        H --> N[Repeating <br>Decimals <br> 1.666..., <br>1.333..., <br>1.121212...,...]
        H ---> O[Terminating <br>Decimals <br> 1.1, 1.01, 1.5,...]
        I --> P[Natural <br>Numbers <br> 1,2,...]
        I --> Q[Zero <br> 0]
        B[NotReal Numbers] --> C["Imaginary Numbers <br> √(-4) & 3+4i"]
</mermaid>
</div>
</div>

<DynamicGlobalComponent componentName="NumberSystem" />

<style>
.scrollHorizontal {
    width:100%;
    height:auto;
    overflow-x:auto;
}
.mermaidContainer {
    min-width:800px;
}
</style>