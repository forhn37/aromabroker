// pages/index.js

'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/app/lib/supabase'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('aromabrokertable')
        .select('*')

      if (error) console.log('Error fetching data:', error)
      else setData(data)
    console.log(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Supabase Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
