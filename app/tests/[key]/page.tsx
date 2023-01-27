import { supabase } from "@/lib/supabaseClient"

async function getData({ key }: { key: string }) {
  const { data } = await supabase
    .from("versions")
    .select(`id, version_name, projects!inner(id)`)
    .eq("projects.id", key)

  return { versions: data }
}

export default async function Tests({ params }: { params: { key: string } }) {
  const { versions } = await getData({ key: params.key })

  return (
    <div className="p-4">
      {versions?.map((x) => (
        <div key={x.id}>
          <h2 className="text-lg">{x.version_name}</h2>
        </div>
      ))}
    </div>
  )
}
