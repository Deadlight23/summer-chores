"use strict";

const timeToMowYard = 2000;
const timeToWeedEat = 1500;
const timeToTrimHedges = 1000;
const timeToCollectWood = 2500;
const timeToWaterGarden = 500;

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback(name);
    }, timeToMowYard);
}

function weedEat(name, callback) {
    setTimeout(() => {
        if (Math.random() < 0.2) {
            console.log(`${name} finished using the weed eater.`);
            callback(name);
        } else {
            console.log(`${name} fell asleep after weedeating.`);
        }
    }, timeToWeedEat);
}

function trimHedges(name, callback) {
    setTimeout(() => {
        if (Math.random() < 0.4) {
            console.log(`${name} finished trimming the hedges.`);
            callback(name);
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`);
        }
    }, timeToTrimHedges);
}

function collectWood(name, callback) {
    setTimeout(() => {
        if (Math.random() < 0.6) {
            console.log(`${name} finished collecting wood.`);
            callback(name);
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
        }
    }, timeToCollectWood);
}

function waterGarden(name, callback) {
    setTimeout(() => {
        if (Math.random() < 0.8) {
            console.log(`${name} finished watering the garden.`);
            callback(name);
        } else {
            console.log(`${name} fell asleep after watering the garden.`);
        }
    }, timeToWaterGarden);
}

function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log("Completed all summer chores!");
                    });
                });
            });
        });
    });
}

doSummerChores("Devin");