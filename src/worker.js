import shayari from "../data/shayari.json";

export default {
  async fetch(request) {

    const url = new URL(request.url);

    if (url.pathname === "/shayari") {

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

    return new Response("Nightbot API is running!");
  }
};
