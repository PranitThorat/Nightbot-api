import { random } from "../utils/random";
import { roastData } from "../data/roastData";

function pick(array) {
    return random(array);
}

function normalize(name) {
    return name
        .toLowerCase()
        .replace(/@/g, "")
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9]/g, "")
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
    // Amora Easter Egg
    // -----------------------------

    if (
        isAlias(caller, roastData.amora.aliases) ||
        isAlias(target, roastData.amora.aliases)
    ) {

        return response(

`💖 Amora

${pick(roastData.amora.messages)}`

        );

    }

    // -----------------------------
    // Reverse Roast Chance
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

    let roast = pick(roastPool);

    if (reverseRoast) {
       roast = roast
        .replaceAll("{target}", caller)
        .replaceAll("{victim}", caller)
        .replaceAll("{caller}", caller)
        .replaceAll("{roaster}", caller)
        .replaceAll("{original}", target)
        .replaceAll("{requested}", target);
    }
    // -----------------------------
    // Normal Roast Icons
    // -----------------------------

    const normalIcons = [

        "🎯",
        "🔥",
        "😂",
        "☠️",
        "⚡",
        "📍",
        "🚨",
        "👀",
        "💀",
        "🎭"

    ];

    // -----------------------------
    // Reverse Roast Headers
    // -----------------------------

    const reverseHeaders = [

`🎯 ${target} ❌
🔥 ${caller} ✅`,

`⚠️ Candidate Changed

❌ ${target}
✅ ${caller}`,

`🔄 UNO Reverse

❌ ${target}
✅ ${caller}`,

`🚨 Wrong Target

❌ ${target}
✅ ${caller}`,

`🎭 Plot Twist

❌ ${target}
✅ ${caller}`,

`☠️ Better Victim Found

❌ ${target}
✅ ${caller}`,

`📌 System Redirect

❌ ${target}
✅ ${caller}`,

`🎯 Priority Updated

❌ ${target}
✅ ${caller}`,

`⚡ Target Swapped

❌ ${target}
✅ ${caller}`,

`🚫 Access Denied

❌ ${target}
✅ ${caller}`,

`📢 Public Notice

❌ ${target}
✅ ${caller}`,

`🎬 Scene Changed

❌ ${target}
✅ ${caller}`

    ];

    // -----------------------------
    // Reverse Roast Output
    // -----------------------------

    if (reverseRoast) {

        return response(

`${pick(reverseHeaders)}

${roast}`

        );

    }

    // -----------------------------
    // Normal Roast Output
    // -----------------------------

    return response(

`${pick(normalIcons)} ${target}

${roast}`

    );

}
