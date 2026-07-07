import { getShayari } from "../routes/shayari";
import { getLove } from "../routes/love";
import { getIQ } from "../routes/iq";
import { getShadi } from "../routes/shadi";
import { getRoast } from "../routes/roast";

export default {

    async fetch(request) {

        const url = new URL(request.url);

        if (url.pathname === "/shayari") {

            return getShayari();

        }

        if (url.pathname === "/love") {

            return getLove(request);

        }

        if (url.pathname === "/iq") {

            return getIQ(request);

        }

        if (url.pathname === "/shadi") {

            return getShadi(request);
        }

        if (url.pathname === "/roast") {

            return getRoast(request);

        }

        return new Response("Nightbot API is running!");

    }

};
