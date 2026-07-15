import { random } from "../utils/random";
import { roastData } from "../data/roastData";

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

export async function getRoast(request) {

    const url = new URL(request.url);

    const user1 = (url.searchParams.get("u1") || "").trim();
    const user2 = (url.searchParams.get("u2") || "").trim();

    if (!user1) {
        return response(
`☠️ ROAST MACHINE

Usage:

!roast Name`
        );
    }

    const caller = user1;
    const target = user2 || user1;

    // -----------------------------
    // Amora Protection
    // -----------------------------

    if (
        isAlias(caller, roastData.amora.aliases) ||
        isAlias(target, roastData.amora.aliases)
    ) {

        return response(
`${roastData.amora.title}

${roastData.amora.message}`
        );

    }

    // -----------------------------
    // Reverse Roast Probability
    // -----------------------------

    const REVERSE_ROAST_CHANCE = 10;

    const reverseRoast =
        Math.random() * 100 < REVERSE_ROAST_CHANCE;

    // -----------------------------
    // Roast Selection
    // -----------------------------

    const roastPool = reverseRoast
        ? roastData.reverseRoasts
        : roastData.normalRoasts;

    const roast = pick(roastPool);

    // -----------------------------
    // Reverse Wrappers
    // -----------------------------

    const reverseWrappers = [

`${target} ko chhod...

Pehle tu.`,

`${target} baad me...

Ab tera number hai.`,

`Target hold pe hai...

Tu idhar aa.`,

`Galat aadmi confidence leke aa gaya...

Pehle tera hisaab.`,

`${target} wait karega...

Scene ab tere saath hai.`,

`Request accept hui...

Candidate change ho gaya.`,

`Target pending...

Caller confirmed.`,

`System ne reconsider kar liya...

Ab tu.`,

`Queue reverse direction me chal padi...

Pehle tu.`,

`Target bach gaya...

Tu nahi.`

    ];

    // -----------------------------
    // Final Output
    // -----------------------------

    if (reverseRoast) {

        return response(
`${pick(reverseWrappers)}

${roast}`
        );

    }

    return response(
`${target}...

${roast}`
    );

}
