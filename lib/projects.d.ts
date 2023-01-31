export interface Version {
  id: number
  version_name: string
}

export interface Project {
  id: number
  name: string
  description: string
  created_at?: string
  versions: Version[]
}
