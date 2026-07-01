import shayari from "../data/shayari.json";

export async function getShayari() {

    const random =
        shayari.shayari[
            Math.floor(Math.random() * shayari.shayari.length)
        ];

    return new Response(random, {
        headers: {
            "Content-Type": "text/plain;charset=UTF-8"
        }
    });

}
