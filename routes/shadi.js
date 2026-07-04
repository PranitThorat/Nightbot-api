export async function getShadi(request) {

    const url = new URL(request.url);

    const user1 =
    (url.searchParams.get("u1") || "").trim();

    const user2 =
    (url.searchParams.get("u2") || "").trim();



    let person1 = "";
let person2 = "";



if (!user1 && !user2) {

    return new Response(

`💍 SHAADI SIMULATOR

Usage:
!shadi Name
or
!shadi Name1 Name2`,

        {
            headers: {
                "Content-Type":"text/plain;charset=UTF-8"
            }
        }

    );

}



if (user1 && user2) {

    person1 = user1;
    person2 = user2;

}

else {

    person1 = user1;
    person2 = "Someone";

}



return new Response(

`💍 SHAADI SIMULATOR

👰 ${person1} ❤️ ${person2}

🚧 Under Construction`,

    {
        headers: {
            "Content-Type":"text/plain;charset=UTF-8"
        }
    }

);

        {
            headers: {
                "Content-Type": "text/plain;charset=UTF-8"
            }
        }

    );

}
