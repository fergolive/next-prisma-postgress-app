
async function getPosts(){
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if(!res.ok){
    console.log(res);
    
  }
  return res.json();
}

export default async function Home() {

  const data=await getPosts()
  console.log(data);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
    </main>
  )
}
