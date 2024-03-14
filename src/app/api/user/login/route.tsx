export async function POST(req: Request) {

    let err=1;
    const login_info = await req.json();
    console.log(login_info);
    
    await new Promise(r => setTimeout(r, 3000));
    
    if(login_info.acc=='acc123' && login_info.pass=='123456')
        err=0;

    const data = {err:err,acc_info:{fullname:'Tài Nguyễn',id:1}};
   
    if(err==1) return Response.json({data:{err:1}});
    else 
    return Response.json({data})
   
  }