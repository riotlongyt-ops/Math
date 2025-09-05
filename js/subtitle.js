<script>
function getRandomGreeting() {
  var greetings = [
    // 🎮 + ➗ Funny math + gaming combo lines
    "Math teacher: 'This will be on the test' — like a Dark Souls boss warning.",
    "Find x. *circles it* — achievement unlocked!",
    "Parallel lines are like players in different lobbies… never meeting.",
    "Algebra? More like Alge-brah, power-up unlocked 💪",
    "You died… to dividing by zero.",
    "Every math test is just a hidden side quest.",
    "sin(90°) = 1 but you = player one ❤️",
    "Word problems are the final boss of math.",
    "Calculator battery low = hardcore mode activated.",
    "Geometry Dash but it’s actually geometry homework.",
    "Math teacher: 'It’s easy' — proceeds to summon 12 Greek letters.",
    "Bruh moment = lagging in math class.",
    "Square root of -1? i… don’t know.",
    "Loading… PEMDAS.exe",
    "Your GPA has left the server.",
    "Error 404: correct answer not found.",
    "Math class = turn-based strategy with extra suffering.",
    "Speedrunning long division any% glitchless.",
    "Achievement unlocked: 'Show your work.'",
    "Math + Games DLC pack: Free stress included!",
    "Every equation is just a puzzle with bad graphics.",
    "Math homework be like: side quests that don’t give XP.",
    "Final boss music starts when the teacher says 'pop quiz'.",
    "Press F to pay respects to your grade.",
    "Lag detected: teacher already 3 steps ahead in solving.",
    "Divide by zero to unlock secret ending.",
    "Geometry teacher: 'Trust the process' — like Elden Ring tutorial.",
    "Algebra class is just Among Us with numbers.",
    "Math class patch notes: nerfed calculators, buffed homework.",
    "Math boss fight unlocked: fractions + decimals combo attack.",
    "Critical hit: minus 20 IQ from word problems.",
    "The floor is lava but it’s actually trigonometry.",
    "Checkpoint reached: midterm exam.",
    "Loading screen tip: remember to carry the one.",
    "Unlockable skin: 'Mathlete Edition'",
    "Error: too much math, not enough respawns.",
    "Protractor = pay-to-win item in Geometry.",
    "Teacher used 'pop quiz'… it’s super effective!",
    "Math homework: the real open-world grind."
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
</script>
