const storyImage = document.getElementById("storyImage");
const storyText = document.getElementById("story");
const choices = document.getElementById("choices");

let passwordKnown = false;
let jackpotAttempts = 0;

// Define four fixed combinations (one is a win)
const jackpotCombinations = [
    ["🏺", "🏺", "🏺"], // WINNING COMBO
    ["🦂", "☀️", "🔥"], // Losing combo 1
    ["🐫", "🐪", "🦅"], // Losing combo 2
    ["🐍", "🐍", "⚱️"]  // Losing combo 3
];

// Image mapping for each scenario
const imageMap = {
    boulders: "assets/images/boulders.webp",
    bridge: "assets/images/bridge.webp",
    buried: "assets/images/buried.webp",
    curse: "assets/images/curse.webp",
    east: "assets/images/east.webp",
    escaped: "assets/images/escaped.webp",
    fountain: "assets/images/password.webp",
    gas_explosion: "assets/images/gas.webp",
    jackpot: "assets/images/jackpot.webp",
    ladder: "assets/images/ladder.webp",
    sarcophagus: "assets/images/sarcophagus.webp",
    search: "assets/images/lighter.webp",
    tomb: "assets/images/tomb.webp",
    torch: "assets/images/torch.webp",
    tunnel: "assets/images/tunnels.webp"
};

function choosePath(choice) {
    document.getElementById("story").style.opacity = "1";

setTimeout(function () {
  document.getElementById("story").style.opacity = "1";
  storyImage.src = imageMap[choice] || imageMap.default;
}, 1000);

        // YOU CHECK YOUR POCKETS AND FIND A LIGHTER //
        if (choice === "search") {
            storyText.innerHTML = "Your fingers fumble  <br> through dust-caked surfaces <br> until they grip cold metal.  <br> <br>  Your hand trembles as it closes  <br> around a familiar shape -  <br> your battered old lighter. <br> <br>   Perhaps a welcome light in the darkness?  <br> It could banish this suffocating darkness…  <br> <br>  or expose something  <br> you would rather not see.  <br>  The air hangs heavy with silence ...";
            choices.innerHTML = `
                <button onclick="choosePath('gas_explosion')">Light the lighter</button>
                <button onclick="choosePath('sarcophagus')">Leave the lighter and push the stone enclosure above you</button>
            `;
        }

        // YOU LIGHT UP THE LIGHTER AND EXPLODE //
        else if (choice === "gas_explosion") {
            storyText.innerHTML = "You strike the lighter with a hopeful click, <br> craving a sliver of light  <br> to pierce the tomb’s endless dark. <br>  <br> However, you failed to notice  <br> the bitter scent that lingered in the air <br> an ancient gas, sealed for centuries, waiting... <br>  <br> The moment a spark flickers into life,  <br> golden light dances across carved warnings. <br> Suddenly, the enclosed space is filled with intense flame  <br> and everything erupts. <br> <br> Fire surges through the chamber like a vengeful spirit,  <br> devouring stone, cloth, and flesh.  <br>  <br> The silence returns just as quickly ... <br>";
            choices.innerHTML = `<button onclick="choosePath('restart')">Reincarnate</button>`;
        }

        // YOU DECIDE TO IGNORE THE LIGHTER AND PUSH THE LID //
        else if (choice === "sarcophagus") {
            storyText.innerHTML = "As you are about to flick your lighter, <br> you notice an odd gas smell.  <br> Perhaps leaving the lighter is safer. <br>  <br> You push against the heavy stone lid above you.  <br> As it begins to shift, you realise you are in a sarcophagus. <br>";
            choices.innerHTML = `<button onclick="choosePath('tomb')">Break free</button>`;
        }

        // FOUNTAIN OR TORCH? //
        if (choice === "tomb") {
            storyText.innerHTML = "You awaken to darkness, the air thick with ancient dust.<br> The stone lid of your sarcophagus groans as you push it open.<br>A faint glow illuminates the chamber—a fountain whispers secrets in shimmering hieroglyphs,<br> while a lone torch flickers, casting eerie shadows on the walls.";
            choices.innerHTML = `
 <button onclick="choosePath('fountain')">Look at the Fountain</button>
 <button onclick="choosePath('torch')">Follow the Torch</button>
            `;
        }

        if (choice === "fountain") {
            storyText.innerHTML = "The fountain’s surface ripples as if whispering forgotten secrets.<br>Inscribed in worn hieroglyphs, one word emerges:<br><br> <strong>OZZYMANDIAS</strong><br><br> A strange energy hums beneath your feet.<br> Before you can decipher more, the chamber shifts<br>—sand swirls, time rewinds—<br>and you find yourself back where you began. You now decide to follow the torch-lit path, its flickering glow beckoning you deeper into the pyramid’s heart.";
            passwordKnown = true;
            choices.innerHTML = `
                <button onclick="choosePath('torch')">Follow the Torch</button>
            `;
        }
        else if (choice === "torch") {
            storyText.innerHTML = "The tunnel narrows, the air thick with dust and mystery.<br> At the end stands an ancient stone door, etched with worn hieroglyphs.<br> A faint glow pulses beneath its surface.<br> As you step closer, a deep voice echoes:<br><br>“Password?”<br><br> Be warned!<br> Entering the wrong password <br>or not knowing the password<br> will invoke a curse  ... ";

            if (passwordKnown) {
                choices.innerHTML = `
                    <input id="passwordInput" type="text" placeholder="Enter Password">
                    <button onclick="checkPassword()">Submit</button>
                `;
            } else {
                choices.innerHTML = `<button onclick="choosePath('curse')">Face the Curse</button>`;
            }
        }
        else if (choice === "curse") {
            storyText.innerHTML = "A chilling wind howls through the chamber <br>as darkness swirls around you.<br><br> The ancient door trembles but does not yield.<br> Your answer was wrong.<br><br> Shadows coil like serpents <br>consuming the light.<br><br> A whisper echoes, final, and unrelenting. <br><br> The curse claims your soul,<br> sealing your fate <br>in eternal oblivion.";
            choices.innerHTML = `<button onclick="choosePath('restart')">Reincarnate</button>`;
        }
        else if (choice === "restart") {
            location.reload();
        }
        else if (choice === "tunnel") {
            storyText.innerHTML = "The ground beneath you trembles, <br>sending dust cascading from the ancient stone ceiling. <br><br> Two tunnels stand before you—<br>one yawning wide with eerie silence, <br>the other vibrating with an ominous rumble. <br><br> The choice is yours,<br> but time is slipping away… <br><br> Choose wisely.";
            choices.innerHTML = `
                <button onclick="choosePath('boulders')">Western Tunnel</button>
                <button onclick="choosePath('east')">Eastern Tunnel</button>

            `;
        }
        else if (choice === "boulders") {
            storyText.innerHTML = "The ground trembles violently, <br>sending dust plumes into the air. <br><br> A deafening roar fills the tunnel as massive boulders break loose from the crumbling ceiling. <br><br> You scramble for cover, <br>but it is too late—<br>the stones slam down,<br> sealing your fate <br><br> in eternal darkness.";
            choices.innerHTML = `<button onclick="choosePath('restart')">Reincarnate</button>`;
        }

        else if (choice === "east") {
            storyText.innerHTML = "After walking for a while down the eastern tunnel <br> you approach an opening <br> to a colossal echoing stone chamber <br>  <br> Another door directly opposite now faces you. <br> To reach the door,  <br> you must first cross a precarious looking rope bridge. <br> <br>  Near you hangs a rickety ladder  <br> leading up into the darkness ...";
            choices.innerHTML = `
<button onclick="choosePath('bridge')"> Cross the Bridge and Head to the door</button>
<button onclick="choosePath('ladder')">Climb the ladder</button>`;
        }

        // BRIDGE //
        if (choice === "bridge") {
            storyText.innerHTML = "You feel that crossing the bridge is safer. <br> You bravely set out across the bridge  <br> and all is going well...  <br> until you reach half way  <br>  <br> and hear a load <br> - SNAP -  <br>  <br> You fall deep <br> and crash onto the hard stone floor of a pit. <br> Your bones break <br>  and you are unable to move. <br>  <br> In your despair,  <br> you find yourself surrounded  <br> by vengeful venomous hungry cobras. <br>  <br> Death awaits you. <br>";
            choices.innerHTML = `<button onclick="choosePath('restart')">Reincarnate</button>`;
        }

        // LADDER //
        else if (choice === "ladder") {
            storyText.innerHTML = "You feel that climbing the ladder is safer. <br> You bravely begin to climb the ladder  <br> and all is going well...  <br> until as you reach the top, <br> you hear a loud <br> - SNAP -  <br>  <br> The ancient ladder is rotten. <br> Several rungs break as you climb <br> but you manage to make it to the top  <br> and find a hatch.";
            choices.innerHTML = `
<button onclick="choosePath('jackpot')"> Keep going </button>
<button onclick="choosePath('bridge')"> Climb down the ladder and take the bridge</button>`;
        }

        else if (choice === "jackpot") {
            choices.innerHTML = ""; // Clears tunnel buttons

            storyText.innerHTML = `
        <p>You enter upon a chamber <br> where on the wall you see  <br> an ancient device.  <br>  <br> Glowing symbols flicker. <br> You see a lever to pull,  <br> which will spin the wheels. <br>  <br> But your fate rests in the alignment.  <br> A perfect alignment grants freedom;  <br> failure will bury you in eternal sand. <br>  <br> Once you pull the lever,  <br> the mechanism will whir to life ... <br>  <br></p>
        <div id="jackpot-machine">
            <div class="slot" id="slot1">🔲</div>
            <div class="slot" id="slot2">🔲</div>
            <div class="slot" id="slot3">🔲</div>
        </div>
        <button onclick="playJackpot()">Pull the lever</button>
    `;
        }
    }

function checkPassword() {
    let userPassword = document.getElementById("passwordInput").value.trim();

    if (userPassword.toLowerCase() === "]") {
        choosePath("tunnel"); // Proceed if correct
    } else {
        storyText.innerHTML = "💀 <br>The chamber trembles as ancient mechanisms groan to life.<br> A hiss fills the air—sand spills from unseen vents, <br>rushing like a tidal wave. <br>You claw at the walls, <br>but the golden grains rise, engulfing you. <br><br> Breath fades,<br> time slows… <br><br> the desert claims <br><br> another lost soul.";
        storyImage.src = imageMap.buried; // Send player to sand death scene if password is incorrect
        choices.innerHTML = `<button onclick="choosePath('restart')">Reincarnate</button>`;
    }
}

function playJackpot() {
    let slot1 = document.getElementById("slot1");
    let slot2 = document.getElementById("slot2");
    let slot3 = document.getElementById("slot3");

    let randomCombo = jackpotCombinations[Math.floor(Math.random() * jackpotCombinations.length)];

    slot1.style.transform = "scale(1.2)";
    slot2.style.transform = "scale(1.2)";
    slot3.style.transform = "scale(1.2)";

setTimeout(function () {
  slot1.style.transform = "scale(1)";
  slot2.style.transform = "scale(1)";
  slot3.style.transform = "scale(1)";

  slot1.textContent = randomCombo[0];
  slot2.textContent = randomCombo[1];
  slot3.textContent = randomCombo[2];
}, 1000);

        if (randomCombo[0] === "🏺" && randomCombo[1] === "🏺" && randomCombo[2] === "🏺") {
            storyText.innerHTML = "🏺🏺🏺  <br> The reels halt into place  <br> with a resounding click,  <br> glowing with ancient magic. <br> <br> A deep rumble shakes the chamber <br> as a stone door grinds open,  <br> revealing golden light beyond.  <br> <br> You step forward,  <br> the scent of fresh air filling your lungs.  <br> <br> As you step into the open air,  <br> the warmth of the desert sun  <br> embraces you.  <br> <br> You turn back,  <br> expecting to see  <br> the towering structure that held you captive <br> but the pyramid is gone.  <br> <br> Where once stood stone  <br> and ancient carvings,  <br> there is only endless sand  <br> shifting under the breeze.  <br> <br> A mirage,  <br> a mystery lost to time.  <br> <br> In the far distance,  <br> beyond the shimmering heat,  <br> a vast sea stretches toward the horizon,  <br> its waves glinting under the golden sky ... <br>  <br>";

            storyImage.src = imageMap.escaped; // Update to escape image
            choices.innerHTML = `<button onclick="choosePath('restart')">Play Again</button>`;
        } else {
            jackpotAttempts = jackpotAttempts + 1;
            if (jackpotAttempts >= 3) {
                storyText.innerHTML = "💀 <br><br> The chamber trembles<br> as ancient mechanisms groan to life. <br><br> A hiss fills the air—<br>sand spills from unseen vents, <br>rushing like a tidal wave. <br><br> You claw at the walls, <br>but the golden grains rise, <br>engulfing you. <br><br> Breath fades, <br>time slows… <br>the desert claims <br><br> another lost soul.";

                storyImage.src = imageMap.buried; // Update to buried image upon failure
                choices.innerHTML = `<button onclick="choosePath('restart')">Reincarnate</button>`;
            } else {
                choices.innerHTML = `<button onclick="playJackpot()">Try Again (${jackpotAttempts}/3)</button>`;
            }
        }
}

// Expose functions to the global scope for inline HTML event handlers
window.checkPassword = checkPassword;
window.playJackpot = playJackpot;