export async function getIQ(request) {

    const url = new URL(request.url);

    const user =
        url.searchParams.get("u1") || "Unknown";



    // Random IQ
    const iq =
        Math.floor(Math.random() * 171);



    // Header
    const headers = [

    ];



    // Status
    const status = [

    ];



    // Rare Events
    const rareEvents = [

    ];



    let rank = "";
    let verdicts = [];



    // Category Logic will come here



    const header =
        headers[
            Math.floor(Math.random()*headers.length)
        ];



    const systemStatus =
        status[
            Math.floor(Math.random()*status.length)
        ];



    let verdict =
        verdicts[
            Math.floor(Math.random()*verdicts.length)
        ];



    // Rare Event Logic will come here



    const message =

`${header} | 👤 ${user} | 🧠 IQ: ${iq} | ${rank} | ${verdict} | ${systemStatus}`;



    return new Response(message,{
        headers:{
            "Content-Type":"text/plain;charset=UTF-8"
        }
    });

}
