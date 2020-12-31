---
date: 14 Mar 2020
id: 'pm25-tl-hyderabad-sanathnagar'
title: "Air Pollution data-Telangana, Sanathnagar, Hyderabad"
desc: A close look at the air pollution data taken from Sanathnagar, which explains PM2.5 levels for different seasons, time, weekday & weekend
imgDesc: Image is a hourly PM2.5 for different seasons
author: 'by theDataTalks'
articleLang: 'en-US'
altLang: false
isHome: false
topic: education
---

<altLang />

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

Telangana has 6 stations for continuous monitoring of air pollution and
all are in Hyderabad. This document talks about PM2.5 (Particulate
matter (PM) that have a diameter of less than 2.5 micrometers) level for
one of the station named Sanathnagar, Hyderabad.

## Conclusions from the below analysis:

The PM2.5 data has 3.3% outliers and the details of outliers are given
in the below analysis. After removing the outliers the PM2.5 level for
Sanathnagar falls under the category of "moderate" in monsoon season &
"unhealthy" in other seasons.

There is not much difference in PM2.5 level for weekend & weekday.

## Data:

Data Source: <https://app.cpcbccr.com/>\
Date downloaded: 07-Jan-2020\
Hourly data taken for this analysis from 31-Mar-2015 to 30-Nov-2019\
Total 40921 records & 13059 records are having "none" reading for PM2.5.
All "none" records removed for this analysis. The complete analysis was
done using R programming.

Below are the categories defined in 2012 EPA (United States
Environmental Protection Agency) PM2.5 standard

Good - 0.0 -- 12.0 µg/m3, 24-hour average\
Moderate - 12.1 -- 35.4 µg/m3, 24-hour average\
Unhealthy for Sensitive Groups - 35.5 -- 55.4 µg/m3, 24-hour average\
Unhealthy - 55.5 -- 150.4 µg/m3, 24-hour average\
Very Unhealthy - 150.5 -- 250.4 µg/m3, 24-hour average\
Hazardous - 250.5 -- 350.4 µg/m3, 24-hour average\
Hazardous - 350.5 -- 500 µg/m3, 24-hour average

## Details of Outliers:

An outlier is any datapoint that lies outside the 1.5 \* inter quartile
range (IQR). IQR is calculated as the distance between the 25th
percentile and 75th percentile values for that variable. We have
identified the outliers using R-command "BoxPlot".

Below are the details of minimum, maximum, mean & median of identified
outliers.

<div class="lowfont">

| Min.  | 1st Qu. | Median | Mean  | 3rd Qu. | Max. |
|-------|---------|--------|-------|---------|------|
| 121.6 | 149.9   | 201.3  | 422.5 | 977.9   | 995  |

</div>

The below box plot & bar chart shows the difference in data with & with
out outliers.

Outliers identified: 880\
Proportion of outliers: 3.3%\
Mean of the outliers: 422.46\
Mean without removing outliers: 57.26\
Mean after we remove outliers: 45.34

<!-- ![](/environment/pm25-tl-hyderabad-sanathnagar_files/figure-markdown/outlier-plots-1.png) -->
![](/img/education/pm25-tl-hyderabad-sanathnagar_files/figure-markdown/outlier-plots-1.png)

## Yearly Mean/Average of Hourly PM2.5 for different Seasons

All the below results were calculated after removing outliers from the
source data. The first table shows the monthly average of PM2.5 & the
second table shows the 24 hours average for each month.

<div class="lowfont">

|              | 1         | 2           | 3        | 4            | 5           | 6       | 7       |
|--------------|-----------|-------------|----------|--------------|-------------|---------|---------|
| month name   | "Jan" | "Feb"  | "Mar"  | "Apr"      | "May"       | "Jun"  | "Jul"  |
| monthly_mean | "69.22"   | "56.09"     | "56.6"   | "44.59"      | "42.53"     | "29.21" | "22.07" |


|              | 8         | 9           | 10       | 11           | 12          |
|--------------|-----------|-------------|----------|--------------|-------------|
| month name   | "Aug"  | "Sep" | "Oct" | "Nov" |  "Dec" |
| monthly_mean | "22.14"   | "36.77"     | "50.36"  | "59.5"       | "64.72"     |


|    | Day | 1     | 2     | 3     | 4     | 5     | 6     | 7     | 8     | 9     | 10    | 11    | 12    |
|----|-----|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|
| 1  | 1   | 63.3  | 63.36 | 53.34 | 45.13 | 46.55 | 40    | 23.26 | 15.07 | 29.96 | 52.88 | 40.03 | 61.3  |
| 2  | 2   | 71.79 | 64.72 | 49.87 | 48.56 | 43.39 | 45.05 | 27.73 | 15.48 | 34.34 | 33.52 | 40.38 | 60.18 |
| 3  | 3   | 73.95 | 57.48 | 48.81 | 54.36 | 37.59 | 40.38 | 29.16 | 14.12 | 27.9  | 37.53 | 38.09 | 67.03 |
| 4  | 4   | 79.06 | 50.08 | 58.49 | 49.07 | 37.62 | 37.24 | 26.28 | 16.33 | 35.67 | 42.85 | 47.72 | 70.44 |
| 5  | 5   | 79.08 | 59.57 | 59.1  | 43.69 | 39.36 | 39.89 | 22.41 | 15.86 | 29.59 | 46.7  | 45.72 | 67.03 |
| 6  | 6   | 79.42 | 64.83 | 54.19 | 50.64 | 43.28 | 38.87 | 24.77 | 17.79 | 33.01 | 51.08 | 51.74 | 69.16 |
| 7  | 7   | 73.35 | 64.93 | 55.94 | 41.51 | 40.68 | 36.75 | 25.82 | 17.6  | 28.68 | 57.06 | 56.43 | 76.79 |
| 8  | 8   | 75.8  | 64.07 | 58.33 | 35.46 | 43.26 | 32.56 | 22.93 | 18.82 | 26.53 | 58.9  | 56.75 | 76.15 |
| 9  | 9   | 73.75 | 62.78 | 59.68 | 42.6  | 51.1  | 29.12 | 21.78 | 19.06 | 31.22 | 60.66 | 60.19 | 68.2  |
| 10 | 10  | 72.5  | 58.9  | 60.54 | 39.05 | 44.42 | 27.69 | 20.56 | 17.24 | 33.52 | 53.93 | 60.57 | 59.42 |
| 11 | 11  | 74.67 | 63.1  | 55.97 | 39.7  | 51.78 | 24.71 | 21.74 | 19.68 | 34.32 | 50.67 | 54.57 | 56.39 |
| 12 | 12  | 78.62 | 64.67 | 51.67 | 39.78 | 43.78 | 24.23 | 23.36 | 16.42 | 35.2  | 53.37 | 64.88 | 65.11 |
| 13 | 13  | 75.29 | 60.55 | 51.29 | 40.24 | 44.58 | 25.96 | 20.22 | 23.12 | 32.97 | 51.31 | 64.16 | 62.06 |
| 14 | 14  | 70.76 | 60.27 | 55.55 | 45.67 | 40.34 | 25.97 | 25.56 | 24.06 | 33.85 | 55.89 | 63.95 | 57.3  |
| 15 | 15  | 68.16 | 44.68 | 51.33 | 43.7  | 36.97 | 28.32 | 23.76 | 23.12 | 39.9  | 58.83 | 64.65 | 60.81 |
| 16 | 16  | 65.39 | 47.27 | 53.2  | 43.69 | 41.88 | 30.86 | 25.31 | 21.4  | 41.04 | 56.05 | 61.18 | 65.17 |
| 17 | 17  | 65.19 | 48.91 | 47.9  | 45.23 | 40.19 | 29.87 | 23.28 | 24.04 | 29.66 | 44.88 | 44.68 | 59.63 |
| 18 | 18  | 63.64 | 56.83 | 46.14 | 53.34 | 41.92 | 24.92 | 21.37 | 27.57 | 33.05 | 44.45 | 42.68 | 51.29 |
| 19 | 19  | 64.35 | 52.52 | 49.27 | 44.88 | 47.71 | 26.2  | 19.45 | 23.25 | 36.48 | 44.93 | 51.03 | 45.62 |
| 20 | 20  | 72.81 | 47.4  | 59.65 | 42.8  | 44.16 | 24.25 | 18.39 | 25.44 | 41.96 | 53.96 | 57.39 | 48.39 |
| 21 | 21  | 66.9  | 49.69 | 55.28 | 43.27 | 48.1  | 26.83 | 21.34 | 20.62 | 41.13 | 46.55 | 60.84 | 57.9  |
| 22 | 22  | 57.76 | 54.56 | 55.66 | 42.18 | 43.77 | 27.21 | 18.09 | 22.2  | 39.47 | 63.84 | 66.58 | 65.19 |
| 23 | 23  | 66.91 | 60.8  | 58.19 | 45.21 | 44.67 | 23.57 | 17.06 | 30.08 | 37.04 | 57.78 | 68.8  | 64.94 |
| 24 | 24  | 69.8  | 48.31 | 65.25 | 41.32 | 40.07 | 22.67 | 16.75 | 31.61 | 36.39 | 51.83 | 70.56 | 73.5  |
| 25 | 25  | 58.93 | 51.28 | 68.16 | 42.58 | 41.89 | 22.65 | 18.91 | 30.6  | 36.67 | 50.74 | 77.5  | 76.71 |
| 26 | 26  | 49.72 | 54.04 | 60.56 | 49.9  | 38.34 | 25.13 | 19.28 | 22.33 | 44.8  | 49.05 | 81.05 | 80.31 |
| 27 | 27  | 47.95 | 50.93 | 63.19 | 49.14 | 40.78 | 25.64 | 16.85 | 30.25 | 42.07 | 53.49 | 80.2  | 74.77 |
| 28 | 28  | 75.26 | 50.91 | 61.78 | 45.71 | 39.38 | 25.95 | 22.94 | 29.74 | 49.29 | 53.74 | 81.91 | 69.78 |
| 29 | 29  | 65.93 | 37.64 | 66.85 | 47.18 | 43.19 | 25.88 | 22.23 | 25.9  | 50.81 | 45.61 | 70.01 | 68.36 |
| 30 | 30  | 60.8  | NA    | 60.43 | 46.19 | 39.71 | 24.44 | 15.09 | 23.42 | 61.86 | 47.34 | 63.03 | 68.44 |
| 31 | 31  | 62.49 | NA    | 52.81 | NA    | 40.29 | NA    | 15.79 | 27.97 | NA    | 43.27 | NA    | 64.86 |

</div>

## Season classification:

-   Mar, Apr & May - Summer
-   Jun, Jul, Aug, Sep & Oct - Monsoon
-   Nov, Dec, Jan & Feb - Winter

The below plot gird shows the year-wise details of hourly PM2.5 levels
for different seasons.The blue line across each plot indicates Smoothed
conditional means.

From the below data, it is very clear that the pollution levels are less
in Monsoon compared to other seasons.

<!-- ![](/environment/pm25-tl-hyderabad-sanathnagar_files/figure-markdown/MeanofHourly-1.png) -->
![](/img/education/pm25-tl-hyderabad-sanathnagar_files/figure-markdown/MeanofHourly-1.png)


## Mean/Average of Hourly PM2.5 for Weekdays & Weekends

The below plot grid shows the hourly PM2.5 levels for weekdays and
weekends. The blue line across each plot indicates Smoothed conditional
means.

The below plot shows that, there is not much difference in PM2.5 levels
for weekdays & weekends.

<!-- ![](/environment/pm25-tl-hyderabad-sanathnagar_files/figure-markdown/MeanofWeekdaytype-1.png) -->
![](/img/education/pm25-tl-hyderabad-sanathnagar_files/figure-markdown/MeanofWeekdaytype-1.png)

The data file in \*.CSV format can be downloaded from [Sanathnagar-Air Pollution Data](https://thedatatalks.in/datas/environment/TL_Sanathnagar_Hyderabad.csv)

<style>

</style>