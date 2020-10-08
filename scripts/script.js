/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

const Scene = require('Scene');
const Random = require('Random');
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');



function getRandom()
{
   //1->Rock
   //2->Paper
   //3->Scissors
   return Math.floor((Math.random() * 3) + 1);
}

function showRock()
{

}

function showPaper()
{
    
}

function showScissors()
{
    
}

function showDefault()
{

}

(async function() {

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const [directionalLight] = await Promise.all([
//   Scene.root.findFirst('directionalLight0')
// ]);

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');

// Enables async/await in JS [part 2]
    

//Find the handTracker
    
    
    
    const k = getRandom();
    Diagnostics.log('In handtracker');
    Diagnostics.log(k);

    
      
  


//We can use the properties as objects



})();
