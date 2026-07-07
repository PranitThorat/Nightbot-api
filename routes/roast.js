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

    const user1 =
        (url.searchParams.get("u1") || "").trim();

    const user2 =
        (url.searchParams.get("u2") || "").trim();

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
    // Roast Probability
    // -----------------------------

    const roll = Math.random() * 100;

    const reverseRoast = roll < 10;

        // -----------------------------
    // Roast Selection
    // -----------------------------

    const roast = reverseRoast

        ? pick(roastData.reverseRoasts)

        : pick(roastData.normalRoasts);

            // -----------------------------
    // Final Output
    // -----------------------------

    if (reverseRoast) {

        return response(

`${target} ko chhod...

${caller} tu khud ${roast}`

        );

    }

    return response(

`${target}...

${roast}`

    );

}
