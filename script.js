const agents =["Ghost", "Shadow", "Viper", "Nova"];
const locations =["Mars Base", "Tokyo Sector", "Arctic Section", "Mpon Colony"];
const weapons =["Laser Refile", "Plasma Cannon", "EMP Device", "Nano Blade"];
const objectives =["Rescue Scientists", "Hack Mainframe", "Recover Artifact","Destroy Drone Factory"];
const risks =["Low", "Medium", "High", "Extreme"];

let agentIndex = -1;
let locationIndex = -1;
let weaponIndex = -1;
let objectiveIndex = -1;
let riskIndex = -1;

function cycleOption(array, index){
    return (index + 1) % array.length;
}

document.getElementById("agentBtn").addEventListener("click", function(){
    agentIndex = cycleOption(agents, agentIndex);
    document.getElementById("agentDisplay").textContent = agents[agentIndex];
}
);

document.getElementById("locationBtn").addEventListener("click", function(){
    locationIndex = cycleOption(locations, locationIndex);
    document.getElementById("locationDisplay").textContent = locations[locationIndex];
}
);

document.getElementById("weaponBtn").addEventListener("click", function(){
    weaponIndex = cycleOption(weapons, weaponIndex);
    document.getElementById("weaponDisplay").textContent = weapons[weaponIndex];
}
);

document.getElementById("objectiveBtn").addEventListener("click", function(){
    objectiveIndex = cycleOption(objectives, objectiveIndex);
    document.getElementById("objectiveDisplay").textContent = objectives[objectiveIndex];
}
);

document.getElementById("riskBtn").addEventListener("click", function(){
    riskIndex = cycleOption(risks, riskIndex);
    document.getElementById("riskDisplay").textContent = risks[riskIndex];
}
);

function generateMission(){
    if(agentIndex === -1||
       locationIndex === -1||
       weaponIndex === -1||
       objectiveIndex === -1||
       riskIndex === -1) {
        document.getElementById("output").innerHTML =
        "<h3>Please select all mission components first.</h3>";
        return;
     }

    let missions = `
         <h2>MISSION BRIEFING</h2>
          <p><strong>Agent:</strong> ${agents[agentIndex]}</p>
          <p><strong>Location:</strong> ${locations[locationIndex]}</p>
          <p><strong>Weapon:</strong> ${weapons[weaponIndex]}</p>
          <p><strong>Objective:</strong> ${objectives[objectiveIndex]}</p>
          <p><strong>Risk:</strong> ${risks[riskIndex]}</p>
          <hr>
          <p>
          Agent ${agents[agentIndex]}, your mission is to
          ${objectives[objectiveIndex]} at
          ${locations[locationIndex]} using
          ${weapons[weaponIndex]}.
          Threat level is ${risks[riskIndex]}.
          Good luck.
          </p>

    `;

    document.getElementById("output").innerHTML = missions;
    }

function randomMission(){

    agentIndex = Math.floor(Math.random() * agents.length);
    locationIndex = Math.floor(Math.random() * locations.length);
    weaponIndex = Math.floor(Math.random() * weapons.length);
    objectiveIndex = Math.floor(Math.random() * objectives.length);
    riskIndex = Math.floor(Math.random() * risks.length);

    document.getElementById("agentDisplay").textContent = agents[agentIndex];
    document.getElementById("locationDisplay").textContent = locations[locationIndex];
    document.getElementById("weaponDisplay").textContent = weapons[weaponIndex];
    document.getElementById("objectiveDisplay").textContent = objectives[objectiveIndex];
    document.getElementById("riskDisplay").textContent = risks[riskIndex];
    
    generateMission();

}
function resetMission (){
    agentIndex = -1;
    locationIndex = -1;
    weaponIndex = -1;
    objectiveIndex = -1;
    riskIndex = -1;

      document.getElementById("agentDisplay").textContent =  "Not Selected";
      document.getElementById("locationDisplay").textContent =  "Not Selected";
      document.getElementById("weaponDisplay").textContent =  "Not Selected";
      document.getElementById("objectiveDisplay").textContent =  "Not Selected";
      document.getElementById("riskDisplay").textContent =  "Not Selected";

      document.getElementById("output").innerHTML = "";
document.getElementById("launchBtn").addEventListener("click", generateMission);
document.getElementById("randomBtn").addEventListener("click", randomMission);
document.getElementById("resetBtn").addEventListener("click", resetMission);
}
