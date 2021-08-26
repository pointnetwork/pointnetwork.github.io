---
id: build-testing-guide
title: Point Network Testing Guide
sidebar_label: Testing Guide
slug: ../build-testing-guide
---

Point Network needs to test all levels of the application. This potentially means:

* **Unit Testing** of functions and methods using [Jest](https://jestjs.io/) in the Node and [Point SDK](https://github.com/pointnetwork/pointsdk).
* **Use Factories** for creating data in different schemas and contexts using [Factory Girl](https://github.com/simonexmachina/factory-girl).
* **Integration Testing** of different components / modules and services.
* **Browser / Front End integration testing** using [Nightwatch JS](https://nightwatchjs.org/). This can be another form of integration testing for the example applications which ultimately test that the node is working properly for application functionality.
* **Smart Contract Tests** using [Truffle Testing Framework](https://www.trufflesuite.com/docs/truffle/testing/testing-your-contracts) and [Open Zeppelin Testing Framework](https://docs.openzeppelin.com/learn/writing-automated-tests).
* **Load testing** using [artillery.io](artillery.io).
* **Database testing** making use of test seed data and using a [database cleaner](https://www.npmjs.com/package/database-cleaner) to reset the database between tests. Use Factory Girl for creating contextual based data for each test.