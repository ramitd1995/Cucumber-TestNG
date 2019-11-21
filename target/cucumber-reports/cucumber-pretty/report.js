$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("apple_feature.feature");
formatter.feature({
  "line": 1,
  "name": "Apple Airpods",
  "description": "",
  "id": "apple-airpods",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Apple Airpods scenario tests",
  "description": "",
  "id": "apple-airpods;apple-airpods-scenario-tests",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Use only Scenario in the above line if you are not using Examples below"
    },
    {
      "line": 7,
      "value": "#Scenario Outline is used with Examples"
    }
  ],
  "line": 9,
  "name": "user is already on apple website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "direct to ipad",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "title is iPad - Apple",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "direct to ipad air",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "search for \"\u003cairpod\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "title is AirPods - Apple",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "print welcome to the airpods official webpage",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 17,
      "value": "#In Examples the first row should have the variable name defined in above cucumber annotations"
    },
    {
      "line": 18,
      "value": "#This test would run two times with different test data defined in Examples"
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "apple-airpods;apple-airpods-scenario-tests;",
  "rows": [
    {
      "cells": [
        "airpod"
      ],
      "line": 21,
      "id": "apple-airpods;apple-airpods-scenario-tests;;1"
    },
    {
      "cells": [
        "airpo"
      ],
      "line": 22,
      "id": "apple-airpods;apple-airpods-scenario-tests;;2"
    },
    {
      "cells": [
        "AIRPO"
      ],
      "line": 23,
      "id": "apple-airpods;apple-airpods-scenario-tests;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3813416567,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Apple Airpods scenario tests",
  "description": "",
  "id": "apple-airpods;apple-airpods-scenario-tests;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Use only Scenario in the above line if you are not using Examples below"
    },
    {
      "line": 7,
      "value": "#Scenario Outline is used with Examples"
    }
  ],
  "line": 9,
  "name": "user is already on apple website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "direct to ipad",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "title is iPad - Apple",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "direct to ipad air",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "search for \"airpo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "title is AirPods - Apple",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "print welcome to the airpods official webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "AppleStepDefinitions.user_is_already_on_apple_website()"
});
formatter.result({
  "duration": 2473596301,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.direct_to_ipad()"
});
formatter.result({
  "duration": 1575412451,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.title_is_iPad_Apple()"
});
formatter.result({
  "duration": 47687797,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.direct_to_ipad_air()"
});
formatter.result({
  "duration": 1064185856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "airpo",
      "offset": 12
    }
  ],
  "location": "AppleStepDefinitions.search_for_airpods_by_keyword(String)"
});
formatter.result({
  "duration": 3501621448,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.title_is_AirPods_Apple()"
});
formatter.result({
  "duration": 7278366,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.print_message()"
});
formatter.result({
  "duration": 45996,
  "status": "passed"
});
formatter.after({
  "duration": 654968900,
  "status": "passed"
});
formatter.before({
  "duration": 2636287749,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Apple Airpods scenario tests",
  "description": "",
  "id": "apple-airpods;apple-airpods-scenario-tests;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Use only Scenario in the above line if you are not using Examples below"
    },
    {
      "line": 7,
      "value": "#Scenario Outline is used with Examples"
    }
  ],
  "line": 9,
  "name": "user is already on apple website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "direct to ipad",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "title is iPad - Apple",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "direct to ipad air",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "search for \"AIRPO\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "title is AirPods - Apple",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "print welcome to the airpods official webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "AppleStepDefinitions.user_is_already_on_apple_website()"
});
formatter.result({
  "duration": 2761670492,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.direct_to_ipad()"
});
formatter.result({
  "duration": 2485439658,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.title_is_iPad_Apple()"
});
formatter.result({
  "duration": 12356914,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.direct_to_ipad_air()"
});
formatter.result({
  "duration": 1411769916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AIRPO",
      "offset": 12
    }
  ],
  "location": "AppleStepDefinitions.search_for_airpods_by_keyword(String)"
});
formatter.result({
  "duration": 3169226278,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.title_is_AirPods_Apple()"
});
formatter.result({
  "duration": 8101349,
  "status": "passed"
});
formatter.match({
  "location": "AppleStepDefinitions.print_message()"
});
formatter.result({
  "duration": 37253,
  "status": "passed"
});
formatter.after({
  "duration": 624421204,
  "status": "passed"
});
});