export async function POST ({request}) {
    const data = await request.json();
    console.log('Получено', data);

    return new Response(JSON.stringify({ succes: true}),{
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}