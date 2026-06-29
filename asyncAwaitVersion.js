"use strict";

const timeToMowYard = 2000;
const timeToWeedEat = 1500;
const timeToTrimHedges = 1000;
const timeToCollectWood = 2500;
const timeToWaterGarden = 500;

function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve(name);
        }, timeToMowYard);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                console.log(`${name} finished using the weed eater.`);
                resolve(name);
            } else {
                console.log(`${name} fell asleep after weedeating.`);
                reject("Weed eating failed");
            }
        }, timeToWeedEat);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.6) {
                console.log(`${name} finished trimming the hedges.`);
                resolve(name);
            } else {
                console.log(`${name} fell asleep after trimming the hedges.`);
                reject("Trimming failed");
            }
        }, timeToTrimHedges);
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.4) {
                console.log(`${name} finished collecting wood.`);
                resolve(name);
            } else {
                console.log(`${name} fell asleep after collecting wood.`);
                reject("Collect wood failed");
            }
        }, timeToCollectWood);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                console.log(`${name} finished watering the garden.`);
                resolve(name);
            } else {
                console.log(`${name} fell asleep after watering the garden.`);
                reject("Water garden failed");
            }
        }, timeToWaterGarden);
    });
}

// Async/Await flow
async function doSummerChores(name) {
    try {
        await mowYard(name);
        await weedEat(name);
        await trimHedges(name);
        await collectWood(name);
        await waterGarden(name);

        console.log("Completed all summer chores!");
    } catch (err) {
        console.log("Chores stopped early:", err);
    }
}

doSummerChores("Devin");