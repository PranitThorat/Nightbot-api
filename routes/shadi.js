export async function getShadi(request) {

    const url = new URL(request.url);

    const user1 =
        url.searchParams.get("u1") || "";

    const user2 =
        url.searchParams.get("u2") || "";



    return new Response(

`💍 SHAADI SIMULATOR

🚧 Under Construction`,

        {
            headers: {
                "Content-Type": "text/plain;charset=UTF-8"
            }
        }

    );

}
