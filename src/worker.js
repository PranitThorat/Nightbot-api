import { getShayari } from "../routes/shayari";
import { getLove } from "../routes/love";

export default {

    async fetch(request) {

        const url = new URL(request.url);

        if (url.pathname === "/shayari") {

            return getShayari();

        }

        if (url.pathname === "/love") {

            return getLove(request);

        }

        return new Response("Nightbot API is running!");

    }

};
