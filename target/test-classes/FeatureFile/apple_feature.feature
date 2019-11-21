Feature: Apple Airpods

@SmokeTest
Scenario Outline: Apple Airpods scenario tests

#Use only Scenario in the above line if you are not using Examples below
#Scenario Outline is used with Examples

Given user is already on apple website
Then direct to ipad
When title is iPad - Apple
Then direct to ipad air
Then search for "<airpod>"
When title is AirPods - Apple
Then print welcome to the airpods official webpage

#In Examples the first row should have the variable name defined in above cucumber annotations
#This test would run two times with different test data defined in Examples

Examples:
	| airpod   | 
	| airpo    |
	|	AIRPO		 |
