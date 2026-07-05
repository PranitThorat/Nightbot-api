import { random } from "../utils/random";
import { shadiData } from "../data/shadiData";

function pick(array) {

    return random(array);

}

function normalize(name) {

    return name
        .toLowerCase()
        .replace(/@/g, "")
        .trim();

}

function isAlias(name, aliases) {

    return aliases.includes(normalize(name));

}

function response(text) {

    return new Response(text, {

        headers: {

            "Content-Type": "text/plain;charset=UTF-8"

        }

    });

}

export async function getShadi(request) {

    const url = new URL(request.url);

    const user1 = (url.searchParams.get("u1") || "").trim();

    const user2 = (url.searchParams.get("u2") || "").trim();

    if (!user1 && !user2) {

        return response(

`💍 SHAADI SIMULATOR

Usage:

!shadi Name

or

!shadi Name1 Name2`

        );

    }

    let person1 = user1;
    let person2 = user2 || "Someone";

        const p1 = normalize(person1);
    const p2 = normalize(person2);

    // -----------------------------
    // Self Marriage
    // -----------------------------

    if (p1 === p2) {

        const self = shadiData.easterEggs.selfMarriage;

        return response(

`${self.title}

👤 ${person1} ❤️ ${person2}

📍 ${pick(shadiData.venues)}

${pick(shadiData.scenarios.chaos.vehicles)}

${self.incident}

${self.ending}`

        );

    }

    // -----------------------------
    // Nightbot Easter Egg
    // -----------------------------

    if (

        isAlias(person1, shadiData.easterEggs.nightbot.aliases) ||
        isAlias(person2, shadiData.easterEggs.nightbot.aliases)

    ) {

        const egg = shadiData.easterEggs.nightbot;

        return response(

`${egg.title}

🤖 ${person1} ❤️ ${person2}

📍 ${pick(shadiData.venues)}

${egg.incident}

${egg.ending}`

        );

    }

    // -----------------------------
    // Developer Easter Egg
    // -----------------------------

    if (

        isAlias(person1, shadiData.easterEggs.developer.aliases) ||
        isAlias(person2, shadiData.easterEggs.developer.aliases)

    ) {

        const egg = shadiData.easterEggs.developer;

        return response(

`${egg.title}

⚡ ${person1} ❤️ ${person2}

📍 ${pick(shadiData.venues)}

${pick(shadiData.scenarios.legendary.vehicles)}

${egg.incident}

${egg.ending}`

        );

    }

    // -----------------------------
    // Stream Queen Easter Egg
    // -----------------------------

    if (

        isAlias(person1, shadiData.easterEggs.amora.aliases) ||
        isAlias(person2, shadiData.easterEggs.amora.aliases)

    ) {

        const egg = shadiData.easterEggs.amora;

        return response(

`${egg.title}

💜 ${person1} ❤️ ${person2}

📍 ${pick(shadiData.venues)}

${pick(shadiData.scenarios.legendary.guests)}

${egg.incident}

${egg.ending}`

        );

    }

        // -----------------------------
    // Special Couples
    // -----------------------------

    const specialKey = [p1, p2].sort().join("|");

    if (shadiData.specialCouples[specialKey]) {

        const special = shadiData.specialCouples[specialKey];

        const specialScenario =
    shadiData.scenarios[special.scenario];

    return response(

`${special.title}

👰 ${person1} ❤️ ${person2}

📍 ${pick(shadiData.venues)} | ${pick(specialScenario.vehicles)}

${pick(specialScenario.guests)}

${special.incident}

${special.ending}`

);

    }

    // -----------------------------
    // Scenario Selection
    // -----------------------------

    const roll = Math.random() * 100;

    let scenario;

    if (roll < 1) {

        scenario = "legendary";

    } else if (roll < 11) {

        scenario = "failed";

    } else if (roll < 36) {

        scenario = "chaos";

    } else {

        scenario = "happy";

    }

    const data = shadiData.scenarios[scenario];

        // -----------------------------
    // Title Selection
    // -----------------------------

    let title = pick(data.titles);

    if (Math.random() < 0.03) {

        title = pick(shadiData.breakingTitles);

    }

    // -----------------------------
    // Random Core Picks
    // -----------------------------

    const venue = pick(shadiData.venues);

    const vehicle = pick(data.vehicles);

    const incident = pick(data.incidents);

    const ending = pick(data.endings);

    // -----------------------------
    // Random Extra Category
    // -----------------------------

    const extras = [

        pick(data.guests),
        pick(data.food),
        pick(data.dj),
        pick(data.photographer),
        pick(data.gifts),
        pick(data.relatives),
        pick(data.pandit),
        pick(data.social)

    ];

    const extra = pick(extras);

        // -----------------------------
    // Final Output
    // -----------------------------

    return response(

`${title}

👰 ${person1} ❤️ ${person2}

📍 ${venue} | ${vehicle}

${extra}

${incident}

${ending}`

    );

}