const agents =["Ghost", "Shadow", "Viper", "Nova"];
const locations =["Mars Base", "Tokyo Sector", "Arctic Section", "Mpon Colony"];
const weapons =["Laser Refile", "Plasma Cannon", "EMP Device", "Nano Blade"];
const objectives =["Rescue Scientists", "Hack Mainframe", "Recover Artifact","Destroy Drone Factory"];
const agents =["Low", "Medium", "High", "Extreme"];

let agentsIndex = -1;
let locationIndex = -1;
let weaponIndex = -1;
let objectiveIndex = -1;
let riskIndex = -1;

function cycleOption(array, index){
    return (index + 1) % array.lenth;
}

document.getElementById("agentBtn").addEventListener("click"), function(){
    agentIndex = cycleOption(agents, agentIndex);
    document.getElementById("agentDisplay").textContent = agents[agentIndex];
}

document.getElementById("locationBtn").addEventListener("click"), function(){
    locationIndex = cycleOption(locations, locationIndex);
    document.getElementById("locationDisplay").textContent = locations[locationIndex];
}

document.getElementById("weaponBtn").addEventListener("click"), function(){
    weaponIndex = cycleOption(weapons, weaponIndex);
    document.getElementById("weaponDisplay").textContent = weapons[weaponIndex];
}

document.getElementById("objectiveBtn").addEventListener("click"), function(){
    objectiveIndex = cycleOption(objectives, objectiveIndex);
    document.getElementById("objectiveDisplay").textContent = objectives[objectiveIndex];
}

document.getElementById("riskBtn").addEventListener("click"), function(){
    riskIndex = cycleOption(risks, riskIndex);
    document.getElementById("riskDisplay").textContent = risks[riskIndex];
}

