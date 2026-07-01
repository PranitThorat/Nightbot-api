export async function getLove(request) {

    const url = new URL(request.url);

    const user1 =
    url.searchParams.get("u1") || "Someone";

const user2 =
    url.searchParams.get("u2") || "Someone";



// Developer Easter Egg
const developerNames = [

    "@pranitthorat4776",
    "pranitthorat4776",
    "@pranitthorat",
    "pranitthorat",
    "@pranit",
    "pranit"

];

if (
    developerNames.includes(
        user1.toLowerCase().trim()
    )
) {

    return new Response(

`⚡ AURA OVERFLOW | 👤 ${user1} ❤️ ${user2} | 💖 Love: ∞% | 🌌 Love Calculator crashed while measuring your aura.`,

{
headers:{
"Content-Type":"text/plain;charset=UTF-8"
}
});

}



// Random Love Percentage
const percentage =
    Math.floor(Math.random() * 101);



    // Header
const headers = [

"💕 Love Scanner",
"💘 Cupid Meter",
"❤️ Heart Analyzer",
"💖 Romance Detector",
"💞 Soulmate Scanner",
"💌 Love Calculator",
"🌹 Dil Connection Test",
"🥰 Relationship Meter",
"💍 Compatibility Scanner",
"💝 Cupid AI",
"❤️ True Love Detector",
"💓 Heart Sync Meter",
"💖 Romance Analyzer",
"💕 Dil Se Calculator",
"🌸 Love Chemistry",
"💘 Heart Match Scanner",
"❤️ Couple Analyzer",
"💞 Destiny Meter",
"💝 Love Radar",
"🌹 Heartbeat Scanner",
"💘 Ishq Meter",
"💕 Mohabbat Analyzer",
"❤️ Pyaar Scanner",
"💖 Dil Ki Report",
"💞 Love Match Engine"

];



    // Status
const status = [

"💕 Hearts Connected",
"💘 Cupid Approved",
"💞 Butterflies Activated",
"🌹 Romance Loading",
"❤️ Dil Connected",
"💖 Spark Detected",
"🥰 Cute Couple Energy",
"💍 Wedding Bells Nearby",
"💓 Heartbeat Increased",
"🌸 Love Is Blooming",
"💌 Feelings Delivered",
"😍 Eye Contact Successful",
"🤭 Blushing Detected",
"💞 Destiny Working",
"❤️ Dil Pighal Gaya",
"💘 Crush Alert",
"🌹 Filmy Vibes Activated",
"🌸 Nazar Na Lage",
"💖 Green Flags Everywhere",
"💕 Chemistry Matched",
"🎵 Romantic BGM Playing",
"💝 Couple Goals",
"✨ Love Story Loading",
"🌈 Happy Ending Possible",
"💑 Perfect Match Energy"

];


// Rare Events
const rareEvents = [

{
title:"👑 DESTINY APPROVED",
message:"💍 Pandit Ji ne muhurat bhi nikal diya!",
footer:"❤️ Love Meter Overflow"
},

{
title:"💘 CUPID OVERLOAD",
message:"🏹 Cupid ke arrows khatam ho gaye!",
footer:"💕 Romance Level: MAX"
},

{
title:"🌌 MULTIVERSE MATCH",
message:"♾️ Har universe mein tum dono saath ho.",
footer:"💞 Destiny Confirmed"
},

{
title:"💖 TRUE LOVE DETECTED",
message:"❤️ Dil ne permanent connection bana liya.",
footer:"💍 Forever Starts Today"
},

{
title:"💥 LOVE METER CRASH",
message:"💘 Itna pyaar calculate hi nahi ho paya.",
footer:"⚠️ System Overflow"
},

{
title:"🌹 FILMY ENDING",
message:"🎬 Karan Johar bhi emotional ho gaya.",
footer:"❤️ Blockbuster Couple"
},

{
title:"💒 SHAADI CONFIRMED",
message:"👰 Dulha aur Dulhan ready hain!",
footer:"🎊 Band Baaja Loading"
},

{
title:"✨ COSMIC CONNECTION",
message:"🌠 Sitare bhi tum dono ke favour mein hain.",
footer:"💖 Written In The Stars"
},

{
title:"💝 LEGENDARY MATCH",
message:"👰 Rab Ne Bana Di Jodi... literally!",
footer:"👑 Perfect Forever"
},

{
title:"💞 INFINITE LOVE",
message:"♾️ Love Percentage exceeded 100%.",
footer:"❤️ Calculator Gave Up"
}

];



    let verdicts = [];



    if (percentage <= 10) {

    verdicts = [

        "💔 Bhagwan bhi mana kar rahe hain.",
        "🌹 Yeh pyaar sirf sapno mein hi possible hai.",
        "🚫 Cupid ne request reject kar di.",
        "🙈 Nazar bhi mat milana.",
        "📵 Seen bhi nahi milega.",
        "😂 Crush ne naam bhi nahi suna hoga.",
        "💸 Itna investment bhi recover nahi hoga.",
        "🌚 Friendzone bhi door ki baat hai.",
        "🥀 Dil tootne ki full guarantee.",
        "😌 Ek tarfa pyaar unlimited.",
        "😶 Dil ne bhi bola 'Next Please'.",
        "📴 Love Network Not Found.",
        "💀 Isse achha BGMI squad bana lo.",
        "😊 Pyaar se pehle pehchaan toh ho.",
        "🙃 Dil ki request pending hi reh gayi."

    ];

}

    else if (percentage <= 20) {

    verdicts = [

        "🙃 Sirf dosti tak hi theek hai.",
        "🤝 Best Friend Material.",
        "📚 Love story se zyada notes exchange honge.",
        "😅 Hope pe duniya kayam hai.",
        "👀 Crush ko abhi pata bhi nahi.",
        "☕ Pehle chai pe mil lo.",
        "😂 Abhi proposal mat dena.",
        "💬 Conversation start karo pehle.",
        "💔 Dil ko samjhana padega.",
        "🙃 Romance battery low.",
        "🙈 Smile toh mil sakti hai.",
        "📱 Reply aaya toh party dena.",
        "😅 Friendzone ke gate par khade ho.",
        "🌥️ Mausam badal sakta hai... feelings bhi.",
        "🧸 Pyaar se pehle dosti zaroori hai."

    ];

}

    else if (percentage <= 30) {

    verdicts = [

        "😅 One-sided lag raha hai.",
        "🌹 Hope abhi bhi zinda hai.",
        "💬 Daily 'Hi' se shuruaat karo.",
        "😊 Thodi aur baatein ho jaaye.",
        "📱 Reply aane ke chances hain.",
        "🤭 Smile exchange ho sakti hai.",
        "☕ Ek coffee date toh banti hai.",
        "🌸 Story abhi shuru hui hai.",
        "🥰 Dil dheere dheere pighal raha hai.",
        "🎵 Bollywood background music missing hai.",
        "💌 Cupid abhi soch raha hai.",
        "💝 Nazar mili toh baat ban sakti hai.",
        "✨ Pyaar loading... Please wait.",
        "📖 Love story ka trailer shuru hua hai.",
        "💖 Thodi mehnat aur... magic ho sakta hai."

    ];

}

    else if (percentage <= 40) {

    verdicts = [

        "🙂 Thoda effort aur chahiye.",
        "🌹 Dil ka connection ban raha hai.",
        "😊 Smile ka reply toh pakka milega.",
        "💬 Late night chats shuru ho sakti hain.",
        "☕ Coffee date ka chance hai.",
        "😊 Nazar milte hi scene badal sakta hai.",
        "💖 Feelings slowly develop ho rahi hain.",
        "🤭 Crush ko shayad hint mil gaya hai.",
        "🌸 Story interesting hone lagi hai.",
        "💌 Cupid ne request pending rakhi hai.",
        "✨ Abhi give up mat karna.",
        "📱 Good Morning texts coming soon.",
        "💕 Dil thoda soft ho raha hai.",
        "🏹 Chemistry improve ho rahi hai.",
        "🎵 Bollywood interval tak pahunch gaya."

    ];

}

    else if (percentage <= 50) {

    verdicts = [

        "🤝 Chances hain... bas timing sahi honi chahiye.",
        "😊 Chemistry toh dikh rahi hai.",
        "🌸 Dil ko thodi umeed mil gayi.",
        "💬 Conversation interesting ho rahi hai.",
        "💖 Shayad Cupid ne tum dono ko notice kar liya.",
        "☕ Ek coffee date sab badal sakti hai.",
        "🥰 Smile dekhte hi dil pighal sakta hai.",
        "🌹 Story ab achhi direction mein ja rahi hai.",
        "💕 Vibes kaafi positive lag rahi hain.",
        "💞 Thoda aur effort... baat ban sakti hai.",
        "📱 Reply speed improve ho rahi hai.",
        "😌 Dil ab ignore nahi kar pa raha.",
        "💘 Crush meter slowly increase ho raha hai.",
        "🎵 Romantic playlist ready rakho.",
        "✨ Love story ka first chapter likha ja chuka hai."

    ];

}

    else if (percentage <= 60) {

    verdicts = [

        "😊 Good chemistry!",
        "💞 Dil ki frequency match ho rahi hai.",
        "🌹 Cupid ne halka sa smile kiya hai.",
        "🥰 Cute couple ban sakte ho.",
        "💖 Dil ko green signal mil raha hai.",
        "🤭 Nazaron hi nazaron mein baat ho rahi hai.",
        "💬 Daily chats ki aadat pad sakti hai.",
        "💕 Spark clearly dikh raha hai.",
        "☕ Coffee date almost confirmed.",
        "🌸 Love story kaafi promising lag rahi hai.",
        "💕 Dil ko ye connection pasand aa gaya.",
        "💌 Romance mode activated.",
        "✨ Vibes ekdum match ho rahi hain.",
        "🎵 Bollywood wali feeling aa rahi hai.",
        "💘 Shayad destiny bhi tumhare side hai."

    ];

}

    else if (percentage <= 70) {

    verdicts = [

        "❤️ Dil garden garden ho gaya.",
        "🥰 Cute couple vibes aa rahi hain.",
        "💞 Rab ki planning kuch aur hi lag rahi hai.",
        "🌹 Nazar na lage is jodi ko.",
        "💕 Dil se connection ho gaya.",
        "💘 Made for each other lag rahe ho.",
        "💘 Cupid ne green signal de diya.",
        "🌸 Relationship status loading...",
        "😊 Smile dekhte hi dil khush ho gaya.",
        "💌 Love story ab interesting ho gayi hai.",
        "🎵 Romantic background music automatically bajne laga.",
        "✨ Dil ne quietly 'Yes' bol diya.",
        "🌈 Is jodi pe toh filmy song banta hai.",
        "💖 Hearts are syncing perfectly.",
        "🌈 Lagta hai destiny tum dono ko mila hi degi."

    ];

}

    else if (percentage <= 80) {

    verdicts = [

        "😍 Perfect Couple Material!",
        "💞 Rab ne tum dono ko milane ki planning kar li hai.",
        "🌹 Nazar utarwa lena, jodi kamaal ki hai.",
        "💕 Dil se dil ka connection pakka lag raha hai.",
        "🥰 Tum dono ek saath best lagoge.",
        "💘 Cupid ne full support de diya.",
        "👑 Relationship officially recommended.",
        "💖 Matching hearts detected.",
        "🌸 Yeh story happy ending deserve karti hai.",
        "💌 Pyaar wali playlist on kar do.",
        "🎵 Bollywood ko nayi love story mil gayi.",
        "✨ Ek dusre ke liye hi bane lagte ho.",
        "💕 Is jodi ko kisi ki nazar na lage.",
        "❤️ Dil ne bina soche 'Yes' bol diya.",
        "💑 Couple Goals officially unlocked."

    ];

}

    else if (percentage <= 90) {

    verdicts = [

        "💍 Shaadi ki tayari shuru karo!",
        "👰 Dulha-Dulhan vibes aa rahi hain.",
        "🎊 Rishta almost pakka lag raha hai.",
        "💖 Family ko khushkhabri dene ka time aa gaya.",
        "🌹 Yeh jodi kamaal ki lagegi.",
        "💐 Nazar utarwa lena dono ki.",
        "💒 Mandap bas sajna baaki hai.",
        "💝 Perfect match mil gaya.",
        "❤️ Dil ne permanent address choose kar liya.",
        "💞 Forever wali feeling aa rahi hai.",
        "📸 Pre-wedding shoot ki location dekh lo.",
        "🎂 Anniversary dates yaad rakhna bas.",
        "💑 Couple goals ka level cross kar diya.",
        "💐 Pandit ji bhi ready baithe hain.",
        "✨ Ab sirf 'Haan' bolna baaki hai."

    ];

}

    else {

    verdicts = [

        "👑 Rab Ne Bana Di Jodi ❤️",
        "♾️ Soulmates officially detected!",
        "💍 Pandit ji muhurat nikal rahe hain.",
        "💖 Dil ne permanent booking kar li.",
        "🌍 Universe ne is jodi ko approve kar diya.",
        "💕 Janmo janam ka connection lag raha hai.",
        "💘 Cupid ne full marks de diye.",
        "💞 Made for each other — no doubts!",
        "❤️ Bollywood ko nayi blockbuster love story mil gayi.",
        "🌹 Is jodi ko kisi ki nazar na lage.",
        "👩‍❤️‍👨 Dil se dil ka perfect connection.",
        "💒 Wedding bells are ringing already!",
        "✨ Love level: Legendary.",
        "💝 Happy ending already confirmed.",
        "🎊 Congratulations! True Love Found."

    ];

}



    const header =
        headers[
            Math.floor(Math.random() * headers.length)
        ];



    const systemStatus =
        status[
            Math.floor(Math.random() * status.length)
        ];



    const verdict =
        verdicts[
            Math.floor(Math.random() * verdicts.length)
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
`${rare.title} | 👤 ${user1} ❤️ ${user2} | ${rare.message} | ${rare.footer}`;

        return new Response(message, {
            headers: {
                "Content-Type": "text/plain;charset=UTF-8"
            }
        });

    }



    const message =
`${header} | 👤 ${user1} ❤️ ${user2} | 💖 Love: ${percentage}% | ${verdict} | 💘 ${systemStatus}`;

    return new Response(message, {
        headers: {
            "Content-Type":"text/plain;charset=UTF-8"
        }
    });

}
