export async function getIQ(request) {

    const url = new URL(request.url);

    const user =
        url.searchParams.get("u1") || "Unknown";



    // Random IQ
    const iq =
        Math.floor(Math.random() * 166) + 5;



    // Header
    const headers = [
        "🧠 IQ Scan",
        "🤖 AI Brain Scanner",
        "📡 Neural Analysis",
        "🧪 Intelligence Test",
        "🧬 DNA Brain Scan",
        "⚡ Brain Meter",
        "🔬 Cognitive Report",
        "💻 Supercomputer Scan",
        "🛰 Quantum Brain Scan",
        "🚀 IQ Analyzer",
        "📖 Knowledge Detector",
        "🧩 Intelligence Scanner",
        "🧠 Brain Status Report",
        "🛸 Alien Intelligence Scan",
        "🎯 IQ Detection",
        "🔎 Brain Investigation",
        "🧠 Mental Capacity Test",
        "⚙ Neural Engine",
        "🔋 Brain Power Meter",
        "🧠 Mind Analyzer",
        "🛰 Neural Scanner",
        "⚛ Quantum IQ Test",
        "🧠 Mind Inspection",
        "🔍 Intelligence Analyzer",
        "📊 Brain Report",
        "🤯 Mental Examination",
        "🧪 Genius Detector",
        "🖥 CPU Brain Scan",
        "🎓 Knowledge Meter",
        "🌌 Universal Brain Scan",
        "🧬 Cognitive Inspection",
        "💡 Brain Power Analysis",
        "🧠 Intelligence Report",
        "🚨 IQ Detection System",
        "🔮 Future Brain Analyzer",
        "⚡ Hyper Intelligence Test",
        "🛸 Cosmic Brain Scanner",
        "📈 Mental Performance Check",
        "🔬 Advanced Brain Report",
        "🤖 AI Cognitive Analysis"

    ];



    // Status
    const status = [

        "✅ Brain Stable",
        "⚡ Brain Overclocked",
        "💤 Sleep Mode",
        "☕ Coffee Required",
        "🔥 CPU Running at 240 FPS",
        "📶 Brain Connected",
        "⚠ Overthinking Detected",
        "🧊 Brain Frozen",
        "🤯 Memory Overflow",
        "🔋 Energy Full",
        "😴 Needs Recharge",
        "🛠 System Optimized",
        "🚨 High Processing Speed",
        "🌐 Internet Connected",
        "📚 Learning Mode",
        "🎮 Gamer Mode Activated",
        "🤖 AI Assistance Enabled",
        "🚀 Turbo Thinking",
        "🧩 Puzzle Solving Mode",
        "🎯 Target Locked",
        "⚙ Neural Network Stable",
        "🛠 Optimizing Brain Cells",
        "🚀 Hyper Mode Enabled",
        "💾 Memory Cache Cleared",
        "📡 Satellite Brain Link Active",
        "🌡 CPU Temperature Normal",
        "⚠ Brain Under Maintenance",
        "🎯 Maximum Concentration",
        "🧩 Solving Life Problems",
        "💻 Running Latest Brain Update",
        "📚 Knowledge Database Updated",
        "🔋 Unlimited Brain Battery",
        "🌟 Thinking Beyond Limits",
        "🎮 Ultra Gamer Focus",
        "⚡ Processing Thoughts",
        "🤖 Machine Learning Enabled",
        "🔬 Scientific Thinking Mode",
        "🧠 Maximum Brain Capacity",
        "☄ Cosmic Intelligence Active",
        "🛰 Neural Signal Strong"

    ];



    // Rare Events
const rareEvents = [

{
title:"🚨 SYSTEM FAILURE",
message:"IQ Meter Exploded 💥",
footer:"Reason: Intelligence exceeded hardware limits"
},

{
title:"👽 ALIEN REPORT",
message:"Alien DNA Confirmed",
footer:"Area 51 has been notified"
},

{
title:"🤖 AI WARNING",
message:"Human Verification Failed",
footer:"Please prove you are not a robot"
},

{
title:"📁 CLASSIFIED FILE",
message:"Government Wants Your Brain",
footer:"Top Secret Clearance Required"
},

{
title:"🛸 AREA 51 ALERT",
message:"Location Requested Immediately",
footer:"Scanner forced to reboot"
},

{
title:"⚠ MATRIX ERROR",
message:"Reality Glitched During Scan",
footer:"Reality became unstable"
},

{
title:"💀 SYSTEM CRASH",
message:"Brain.exe Stopped Responding",
footer:"Scanner forced to reboot"
},

{
title:"👑 LEGENDARY DETECTION",
message:"Intelligence Beyond Human Limits",
footer:"Human intelligence threshold exceeded"
},

{
title:"🚀 NASA REPORT",
message:"Recruitment Process Started",
footer:"Mission briefing scheduled"
},

{
title:"🧬 UNKNOWN SPECIES",
message:"Earth Database Has No Match",
footer:"Unknown lifeform registered"
},

{
title:"⚡ POWER SURGE",
message:"Scanner Could Not Handle Intelligence",
footer:"Power levels exceeded maximum capacity"
},

{
title:"🌌 MULTIVERSE ALERT",
message:"Another Universe Requested This Brain",
footer:"Multiverse connection established"
}

];



    let rank = "";
    let verdicts = [];

    // Category Logic

     if(iq<=10){

rank="🥔 Potato";

verdicts=[

"Even calculator gave up.",
"Brain.exe stopped working.",
"Google couldn't find your IQ.",
"Loading brain... 1%",
"NPC detected.",
"Even potato is smarter.",
"Bluetooth brain disconnected.",
"404 IQ Not Found.",
"System boot failed.",
"Thinking sold separately.",
"WiFi has more intelligence.",
"Your shadow answered before you.",
"The scanner requested a refund.",
"Brain found on vacation.",
"Google Maps couldn't locate your brain.",
"Even ChatGPT is speechless.",
"Congratulations! You confused Artificial Intelligence.",
"Calculator started crying.",
"Keyboard has more processing power.",
"CPU usage: 1%",
"Mission Failed Successfully.",
"Even Windows isn't this slow.",
"Your brain entered Power Saving Mode.",
"Thinking... Please wait forever.",
"Error: Common Sense Missing."

];

}

else if(iq<=20){

rank="🪨 Stone Brain";

verdicts=[

"Stone has more emotions.",
"Still buffering...",
"Trying hard is appreciated.",
"Calculator requested retirement.",
"Windows XP is faster.",
"Searching for common sense...",
"Even turtle laughed.",
"Too much lag.",
"Brain on airplane mode.",
"Gravity is doing all the work.",
"Even loading screens finish earlier.",
"Your brain joined the audience.",
"Google Translate couldn't translate your thoughts.",
"You lost an argument with a mirror.",
"NPCs are teaching you life lessons.",
"Brain update available since 2014.",
"Your calculator filed a complaint.",
"Even lag has less delay.",
"Exam papers fear you... for the wrong reason.",
"Your WiFi has better decision making.",
"Thinking requires premium subscription.",
"You blinked and forgot why.",
"Your brain is still on the home screen.",
"Even the scanner looks disappointed.",
"Achievement Unlocked: Professional Confusion."

];

}

else if(iq<=35){

rank="🤡 Certified Clown";

verdicts=[

"Born to entertain, not calculate.",
"Even memes have higher IQ.",
"Circus is hiring.",
"Clown license approved.",
"Google searched YOU.",
"Professional confusion creator.",
"Comedy level unlocked.",
"Brain replaced with balloons.",
"Certified chat entertainer.",
"Your teammates muted you before the match started.",
"Even bots reported your gameplay.",
"Achievement Unlocked: CEO of Confusion.",
"Your brain took a tea break.",
"You lost hide and seek with yourself.",
"Your reflection facepalmed.",
"The loading screen finished before your thoughts.",
"You accidentally roasted yourself.",
"NPCs started giving YOU tutorials.",
"Your luck also unfollowed you.",
"The scanner laughed before giving this result.",
"You unlocked Unlimited Clown Pass.",
"Your keyboard wants a smarter owner.",
"Even YouTube skipped your thoughts.",
"Mission Passed: Maximum Comedy.",
"Brain sold separately."

];

}

else if(iq<=50){

rank="🐒 Monkey Mode";

verdicts=[

"Bananas increase intelligence.",
"Evolution paused halfway.",
"Swinging through life successfully.",
"Monkey approves this result.",
"Even monkeys are judging.",
"Banana detected as WiFi.",
"Tree climbing unlocked.",
"Jungle CEO.",
"King of monkey business.",
"Nature's favourite.",
"You rushed without a helmet again.",
"Marked enemies... then attacked a tree.",
"Even monkeys called you too energetic.",
"You jumped before checking the bridge.",
"Your brain pressed Auto Jump.",
"Mission: Random Chaos Completed.",
"Accidentally threw grenade at yourself.",
"Running faster than your own thoughts.",
"You opened YouTube and forgot why.",
"Clicked 'Accept' without reading anything.",
"Started dancing during a gunfight.",
"Your brain runs on bananas and confidence.",
"Professional Button Masher.",
"Chaos follows wherever you go.",
"Achievement Unlocked: Certified Monkey Business."

];

}

else if(iq<=65){

rank="😴 Sleepy Brain";

verdicts=[

"Needs 14 hours of sleep",
"Coffee is still loading",
"Brain taking a power nap",
"Wake up first, think later",
"Dreaming while the scan is running",
"Sleep Mode Activated",
"Thinking postponed until tomorrow",
"Alarm ignored successfully",
"Pillow has more influence than logic",
"Brain still hasn't left the bed",
"You yawned during the IQ test",
"Monday mornings fear you",
"Even caffeine gave up",
"Your snooze button deserves a promotion",
"Brain connecting... maybe tomorrow",
"Professional nap consultant",
"You sleep faster than your internet",
"The scanner almost fell asleep",
"Dreams have better ideas than reality",
"Low battery, please recharge",
"Thinking service is temporarily unavailable",
"Achievement Unlocked: Sleep Champion",
"Your pillow is your best friend",
"Productivity not found",
"Even the moon said 'Good Night'"

];

}

else if(iq<=80){

rank="📚 Homework Survivor";

verdicts=[

"Passed by copying perfectly",
"Assignment submitted at 11:59 PM",
"Teacher is still suspicious",
"Exam Hall Survivor",
"Google's favourite student",
"Ctrl + C Champion",
"Homework completed through divine intervention",
"'Kal se padhunga' is still your motto",
"Attendance carried your entire semester",
"Your answer sheet deserved an Oscar",
"Calculator worked harder than you",
"Even your notebook is surprised",
"Question paper looked familiar... somehow",
"Group project? You were the silent member",
"You revised only the important questions... none of them came",
"Examiner deserves a bravery award",
"Your pen knew more than you",
"You studied everything except what was asked",
"Your brain went AFK during the exam",
"Roll Number remembered, answers forgotten",
"The last bench misses you",
"Your lucky guess carried the entire paper",
"Books opened... motivation closed",
"Education survived because of you",
"Mission Complete: Degree Somehow Acquired"

];

}

else if(iq<=95){

rank="🙂 Average Human";

verdicts=[

"Balanced like perfectly cooked Maggi",
"Nothing extraordinary... yet",
"Normal human detected",
"Society accepts you",
"Decent thinking installed",
"Factory settings restored",
"Brain functioning correctly",
"You're doing alright",
"Safe Mode Disabled",
"Common Sense Detected",
"Your parents are finally proud",
"Brain passed all basic tests",
"Certified functional human",
"At least you read the instructions",
"Your decisions usually make sense",
"Google approves your searches",
"You unlocked Basic Intelligence",
"Your teammates trust you... sometimes",
"Brain software updated successfully",
"No critical bugs detected",
"You survived adulthood",
"Scanner found no major issues",
"Your brain has a valid warranty",
"Respectable amount of intelligence",
"System Running Normally"

];

}

else if(iq<=110){

rank="😎 Smart";

verdicts=[

"Neighbours are secretly jealous",
"Teacher's favourite student",
"Google respects your search history",
"Brain running smoother than Windows",
"Rubik's Cube fears your hands",
"Good decisions unlocked",
"Quite impressive",
"Smartness successfully detected",
"High potential identified",
"Confidence level upgraded",
"Scanner recommends showing off a little",
"Your calculator follows your instructions",
"Even AI nodded with approval",
"Your WiFi speed increased out of respect",
"Brain running at 120 FPS",
"Achievement Unlocked: Smart Cookie",
"Even your mistakes are well planned",
"People actually listen to your advice",
"Knowledge database updated successfully",
"CPU temperature remains perfectly stable",
"Problem-solving module activated",
"Your overthinking finally became useful",
"System predicts a bright future",
"Critical thinking successfully installed",
"Certified Above Average"

];

}

else if(iq<=130){

rank="🔥 Brainiac";

verdicts=[

"Calculator asks YOU for help",
"Brain running at 240 FPS",
"Google started taking notes",
"Your WiFi became faster out of respect",
"Brain equipped with RGB lighting",
"Science officially approves you",
"Knowledge storage almost full",
"Professor Mode Activated",
"Dangerously intelligent",
"Big Brain Energy detected",
"Even Einstein requested a rematch",
"ChatGPT verified your answer twice",
"You explain things better than YouTube tutorials",
"Your search history teaches Google",
"Your ideas require software updates to understand",
"The scanner had to upgrade itself",
"People ask you before asking Google",
"NASA bookmarked your profile",
"Your overthinking solved three problems at once",
"Achievement Unlocked: Walking Encyclopedia",
"Your calculator requested retirement",
"The scanner saluted your intelligence",
"Your brain has unlimited premium access",
"Thinking speed exceeds system limits",
"Certified Problem Destroyer"

];

}

else if(iq<=150){

rank="🧠 Genius";

verdicts=[

"NASA wants your resume",
"Einstein requested a rematch",
"ChatGPT became your student",
"You debug reality itself",
"The universe seems impressed",
"Physics started following your rules",
"Professor++ Mode Activated",
"Walking encyclopedia detected",
"Mind-blowing intelligence confirmed",
"Certified Genius",
"Google searched your name",
"Scientists are requesting an interview",
"You solve Rubik's Cubes for fun",
"Your calculator requested a software update",
"The scanner upgraded itself after meeting you",
"You explain quantum physics with memes",
"Even AI couldn't predict your answers",
"Oxford accidentally offered you a job",
"Your thoughts require subtitles",
"Every answer somehow becomes correct",
"Books read themselves around you",
"You unlocked Unlimited Knowledge DLC",
"The scanner asked for your autograph",
"Even your mistakes sound intelligent",
"Achievement Unlocked: Brain Beyond Limits"

];

}

else if(iq<=165){

rank="👽 Alien Brain";

verdicts=[

"Area 51 is requesting your location",
"Aliens approved your intelligence",
"Earth is no longer qualified to judge you",
"Intergalactic IQ confirmed",
"Galaxy-level intelligence detected",
"Mars invited you for a lecture",
"Humanity is still trying to understand you",
"Alien technology found inside your brain",
"Brain manufactured outside the Milky Way",
"The scanner started speaking in alien language",
"Your thoughts reached another galaxy",
"Saturn requested free tuition",
"The Moon subscribed to your channel",
"Scientists marked you as 'Explain Later'",
"Even UFOs slowed down to scan you",
"Gravity stopped working around your brain",
"The Milky Way applauded your result",
"Your IQ exceeded Earth's atmosphere",
"Black holes became curious",
"The scanner discovered a new lifeform",
"Even time couldn't keep up with your thinking",
"Universe.exe stopped responding",
"Achievement Unlocked: Extraterrestrial Genius",
"Planet Earth is just your hometown",
"The cosmos salutes your intelligence"

];

}

else{

rank="☢ Universe Hacker";

verdicts=[

"You hacked the simulation",
"Reality.exe has stopped responding",
"Developer Mode Enabled",
"God requested a software update",
"The universe asked you for help",
"Multiverse successfully unlocked",
"Impossible IQ detected",
"Cheat Codes Activated",
"Brain exceeds all known limits",
"Error: IQ Overflow",
"The scanner refused to continue",
"You found the source code of reality",
"ChatGPT asked YOU a question",
"The Matrix reported suspicious activity",
"Even time couldn't process your thoughts",
"Physics rage-quit the server",
"Your brain reached Infinity FPS",
"Google returned 'No Results Found'",
"The Big Bang wants a rematch",
"Achievement Unlocked: Reality Hacker",
"The scanner started updating itself",
"The universe crashed while calculating",
"Your IQ broke JavaScript",
"Simulation Admin privileges granted",
"System Message: Please stop thinking"

];

}

    



    const header =
        headers[
            Math.floor(Math.random()*headers.length)
        ];



    const systemStatus =
        status[
            Math.floor(Math.random()*status.length)
        ];



    let verdict =
        verdicts[
            Math.floor(Math.random()*verdicts.length)
        ];



    // Rare Event Logic 
const rareChance =
    Math.floor(Math.random() * 100);

if (rareChance === 0) {

    const rare =
        rareEvents[
            Math.floor(Math.random() * rareEvents.length)
        ];

const message =
`${rare.title} | 👤 ${user} | ${rare.message} | ${rare.footer}`;

    return new Response(message,{
        headers:{
            "Content-Type":"text/plain;charset=UTF-8"
        }
    });

}
