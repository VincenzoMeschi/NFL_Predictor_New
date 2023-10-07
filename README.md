# NFL_Predictor_New
## What is it?
Using data from https://www.pro-football-reference.com/ to predict NFL winners based on four factors:
FIVE FACTORS
Explosiveness

Current Ways to Measure:
* Yards per play
* PPP
* PPP+

Efficiency

Current Ways to Measure:
* Success Rate
* Third-down conversions

Field Position

Current Ways to Measure:
* Average starting field position
* FPA

Finishing Drives

Current Ways to Measure:
* Points per Trip inside the 40
* Red zone scoring
* Red zone S&P+

Turnovers

Current Ways to Measure:
* Turnover margin
* Adj. Turnover margin
* Turnovers luck

- see (https://www.footballstudyhall.com/2014/1/24/5337968/college-football-five-factors) for more info

## How is a winner determined?
#### Overview
Each team's statistics in each category will be caluculated as an average across X amount of games. Each category will then be individually compared to their opponant on the current week. 
Whichever team wins the category will then win an associated internal point value that is predetermined. This allows each category to be weighted. 
Whichever team has more points after adding all internal point values across all categories will be the predicted winner.
#### Confidence Slider
There is also a *confidence* slider which allows for only a select amount of confident picks to be shown, rather than the enitre slate.
This works by setting a threshold for the difference of the loosing team's internal point total from the winning team's internal point total. This will then filter results to only show "confident" predictions.

## Tech Used
This is a Node.js project using Axios and Cheerio to web scrape
