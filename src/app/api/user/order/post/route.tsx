export async function POST(req: Request) {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY!,
    //   },
    //   body: JSON.stringify({ time: new Date().toISOString() }),
    // })

    
    await new Promise(r => setTimeout(r, 2500));
   
    const data = {err:0,msg:'Complete'};
   
    return Response.json({data})
  }