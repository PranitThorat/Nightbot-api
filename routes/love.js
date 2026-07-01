export async function getLove(request) {

    const url = new URL(request.url);

    const user1 = url.searchParams.get("u1") || "Someone";
    const user2 = url.searchParams.get("u2") || "Someone";

    const percentage = Math.floor(Math.random() * 101);

    let verdict = "";

    if (percentage <= 10)
        verdict = "💔 Bhagwan bhi mana kar rahe hain.";

    else if (percentage <= 20)
        verdict = "🙃 Sirf dosti tak hi theek hai.";

    else if (percentage <= 30)
        verdict = "😅 One sided lag raha hai.";

    else if (percentage <= 40)
        verdict = "🙂 Thoda effort aur chahiye.";

    else if (percentage <= 50)
        verdict = "🤝 Chances hain, try maaro.";

    else if (percentage <= 60)
        verdict = "😊 Good chemistry!";

    else if (percentage <= 70)
        verdict = "❤️ Dil garden garden ho gaya.";

    else if (percentage <= 80)
        verdict = "😍 Perfect Couple Material!";

    else if (percentage <= 90)
        verdict = "💍 Shaadi ki tayari shuru karo!";

    else
        verdict = "👑 Rab Ne Bana Di Jodi ❤️";

    return new Response(

`❤️ LOVE CALCULATOR ❤️

${user1} ❤️ ${user2}

Love Percentage : ${percentage}%

${verdict}`,

{
headers:{
"Content-Type":"text/plain;charset=UTF-8"
}
});

}
