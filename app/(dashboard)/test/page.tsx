// // pages/index.js
// import { supabase } from '@/app/lib/supabase/supabaseClient'

// export default async function Home() {

//       const { data, error } = await supabase
//         .from('aromabrokertable')
//         .select()

//       console.log(data)
    




//   return (
//     <div>
//       <h1>Supabase Data</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>
//             <div>
//               {item.name}
//             </div>
//             <div>
//               {item.weight}
//             </div>
//             <div>
//               {item.price}
//             </div>
//             </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
