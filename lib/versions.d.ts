export interface Version {
  id: number
  version_name: string
  repo: string
  project_id: number
  last_launch_id: number
  last_launch_at: string
  is_template_launch: boolean
  launch_count: number
  launch_name: string
  results_number: number
  passed_number: number
  failed_number: number
  skipped_number: number
  undefined_number: number
  created_at?: string
}
