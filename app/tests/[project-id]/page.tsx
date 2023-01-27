import { supabase } from "@/lib/supabaseClient"

async function getData() {
  const { data } = await supabase.from("versions").select("*")

  return { versions: data }
}

export default async function Tests() {
  const { versions } = await getData()

  return (
    <main>
      {versions?.map((x) => (
        <div key={x.id}>{x.version_name}</div>
      ))}
    </main>
  )
}
