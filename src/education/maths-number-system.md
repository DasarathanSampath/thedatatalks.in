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

The test below has 118 basic questions in the number system, including real numbers, rational numbers, irrational numbers, integers, fractions, and decimals.

Each test has maximum of 25 questions.

No login is required to attend this test.
No test and user data is recorded or tracked here. 

For any errors & improvements, please write to us.

## Number Tree

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


## Properties of Numbers

### Closure

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Operation</th>
            <th>Symbol</th>
            <th colspan=3>Natural Numbers</th>
            <th colspan=3>Whole Numbers</th>
            <th colspan=3>Integers</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=5>Closure (A Sense of Conclusion)</td>
        </tr>
        <tr>
            <td>Addition</td>
            <td>a+b = c</td>
            <td>If a & b are Natural numbers. c is also a Natural numbers</td>
            <td>Closure</td>
            <td>2+3 = 5</td>
            <td>If a & b are Whole numbers. c is also a Whole numbers</td>
            <td>Closure</td>
            <td>"2+3 = 5<br>
            0+3 = 3"</td>
            <td>If a & b are Integers. c is also a Integer.</td>
            <td>Closure</td>
            <td>2+3 = 5 <br> 0+3 = 3</td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td>a-b = c</td>
            <td>"If a & b are Natural numbers.<br>
            c can be Natural numer or an Integers"</td>
            <td>Not Closure</td>
            <td>2-3 = -1</td>
            <td>"If a & b are Whole numbers.<br>
            c can be a Whole numer or an Integer"</td>
            <td>Not Closure</td>
            <td>"2-3 = -1<br>
            3-3 = 0<br>
            4-0 =  4"</td>
            <td>"If a & b are Integers.<br>
            c is also a Integer."</td>
            <td>Closure</td>
            <td>"2-3 = -1<br>
            3-3 = 0<br>
            4-0 =  4<br>
            -2-3 = -5"</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td>axb = c</td>
            <td>"If a & b are Natural numbers.<br>
            c is also a Natural numbers"</td>
            <td>Closure</td>
            <td>2x3 = 6</td>
            <td>"If a & b are Whole numbers.<br>
            c is also a Whole numbers"</td>
            <td>Closure</td>
            <td>"2x3 = 6<br>
            0x3 = 0"</td>
            <td>"If a & b are Integers.<br>
            c is also an Integer."</td>
            <td>Closure</td>
            <td>"2x3 = 6<br>
            0x3 = 0<br>
            -2x-3 = 6<br>
            -2x3 = -6"</td>
        </tr>
        <tr>
            <td>Division</td>
            <td>a/b = c</td>
            <td>"If a & b are Natural numbers.<br>
            c can be a Fraction"</td>
            <td>Not Closure</td>
            <td>2÷3 = 2/3</td>
            <td>"If a & b are Whole numbers.<br>
            c can be a Whole number, Fraction or Not defined"</td>
            <td>Not Closure</td>
            <td>"2÷3 = 2/3<br>
            0÷2 = 0<br>
            3÷0 =  Not defined"</td>
            <td>"If a & b are Integers.<br>
            c can be a Integer, Fraction, Rational Number or Not defined"</td>
            <td>Not Closure</td>
            <td>"2÷3 = 2/3<br>
            -2÷3 = - (2/3)<br>
            0÷2 = 0<br>
            3÷0 =  Not defined"</td>
        </tr>
    </tbody>
</table>


### Commutative
<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Operation</th>
            <th>Symbol</th>
            <th>Result</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=5>Commutative (A relation to an exchange)</td>
        </tr>
        <tr>
            <td>Addition</td>
            <td> a+b = b+a</td>
            <td>Commutative</td>
            <td>2+3 = 3+2 = 5  <br/>    0+2 = 2+0 = 2</td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td> a-b ≠ b-a</td>
            <td>Not Commutative</td>
            <td>2-3 ≠ 3-2   <br/>   2-0 ≠ 0-2</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td> axb = bxa</td>
            <td>Commutative</td>
            <td>2x3 = 3x2 = 6      <br/> 0x2 = 2x0 = 0</td>
        </tr>
        <tr>
            <td>Division</td>
            <td> a/b ≠ b/a</td>
            <td>Not Commutative</td>
            <td>2÷3 ≠ 3/2 </td>
        </tr>
    </tbody>
</table>

### Associative

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Operation</th>
            <th>Symbol</th>
            <th>Result</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=5>Associative (A co-operative link between numbers)</td>
        </tr>
        <tr>
            <td>Addition</td>
            <td>(a+b)+c = a+(b+c)</td>
            <td>Associative</td>
            <td>(2+3)+5 = 2+(3+5)  <br/>
            => 5+5 = 2+8  <br/>
            => 10 = 10"</td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td>(a-b)-c ≠ a-(b-c)</td>
            <td>Not Associative</td>
            <td>(8-5)-2 = 8-(5-2) <br/>
            => 3-2 = 8-3<br/>
            => 1 ≠ 5"</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td>(axb)xc = ax(bxc)</td>
            <td>Associative</td>
            <td>(2x3)x5 = 2x(3x5) <br/>
            => 6x5 = 2x15<br/>
            => 30 = 30"</td>
        </tr>
        <tr>
            <td>Division</td>
            <td>(a/b)/c = a/(b/c)</td>
            <td>Not Associative</td>
            <td>(16÷4)÷2 = 16÷(4÷2)<br/>
            => 4÷2 = 16÷2<br/>
            => 2 ≠ 8"</td>
        </tr>
    </tbody>
</table>

### Distributive

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Operation</th>
            <th>Symbol</th>
            <th>Result</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=5>Distributive (The action of sharing)</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td>ax(b+c) = (axb)+(axc)</td>
            <td>Distributive</td>
            <td>2x(3+5) = (2x3)+(2x5) <br> 
            => 6 + 10<br>
            => 16</td>
        </tr>
    </tbody>
</table>

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