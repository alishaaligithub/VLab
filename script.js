let step = 0;

const stepText = document.getElementById("step-text");
const tubeA = document.getElementById("tubeA");
const tubeB = document.getElementById("tubeB");

// Function to hide intro and show lab
function startExperiment() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("lab-container").style.display = "block";
}

// Function to go to next step
function nextStep() {
  step++;
  switch (step) {
    case 1:
      stepText.innerText = "Step 1: Take 1 ml of milk from both Sample A and B.";
      tubeA.src = "images/testtube_milkA.png";
      tubeB.src = "images/testtube_milkB.png";
      break;
    case 2:
      stepText.innerText = "Step 2: Add 1 ml of 1.6% DMAB reagent to both test tubes.";
      break;
    case 3:
      stepText.innerText = "Step 3: Observe the color change in both test tubes.";
      tubeA.src = "images/testtube_milkA_dmab.png"; // Distinct yellow
      tubeB.src = "images/testtube_milkB_dmab.png"; // Light yellow
      break;
    case 4:
      stepText.innerText = "Inference: Sample A contains urea. Sample B does not.";
      break;
    default:
      stepText.innerText = "Experiment complete. Refresh to repeat.";
      break;
  }
}
