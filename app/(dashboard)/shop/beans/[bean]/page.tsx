export default async function Beans({ params }: { params: { bean: string } }) {

  const res = await fetch('http://localhost:3000/data.json/')
  // console.log(res)
  const data = await res.json()
 
  return (
    <main>
      {params.bean}
      {data.beans[0].name}
      {data.beans[0].price}
      {data.beans[0].weight}
    </main>
  );
}