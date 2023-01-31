export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName: string
          query: string
          variables: Json
          extensions: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      launches: {
        Row: {
          created_at: string
          duration: number | null
          id: number
          is_template: boolean
          name: string
          origin: string | null
          updated_at: string
          user_id: string
          version_id: number
        }
        Insert: {
          created_at?: string
          duration?: number | null
          id?: number
          is_template?: boolean
          name: string
          origin?: string | null
          updated_at?: string
          user_id: string
          version_id: number
        }
        Update: {
          created_at?: string
          duration?: number | null
          id?: number
          is_template?: boolean
          name?: string
          origin?: string | null
          updated_at?: string
          user_id?: string
          version_id?: number
        }
      }
      projects: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          key: string | null
          name: string
          owner_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          key?: string | null
          name: string
          owner_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          key?: string | null
          name?: string
          owner_id?: string | null
        }
      }
      results: {
        Row: {
          created_at: string
          description: string | null
          duration: number | null
          feature: string
          fullname: string | null
          id: string
          labels: Json | null
          launch_id: number
          name: string
          parent_suite: string | null
          status: string | null
          steps: Json | null
          sub_suite: string | null
          suite: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration?: number | null
          feature: string
          fullname?: string | null
          id: string
          labels?: Json | null
          launch_id: number
          name: string
          parent_suite?: string | null
          status?: string | null
          steps?: Json | null
          sub_suite?: string | null
          suite: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration?: number | null
          feature?: string
          fullname?: string | null
          id?: string
          labels?: Json | null
          launch_id?: number
          name?: string
          parent_suite?: string | null
          status?: string | null
          steps?: Json | null
          sub_suite?: string | null
          suite?: string
        }
      }
      versions: {
        Row: {
          created_at: string
          id: number
          project_id: number
          repo: string
          secondary_id: string | null
          version_name: string
        }
        Insert: {
          created_at?: string
          id?: number
          project_id: number
          repo: string
          secondary_id?: string | null
          version_name: string
        }
        Update: {
          created_at?: string
          id?: number
          project_id?: number
          repo?: string
          secondary_id?: string | null
          version_name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      features: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      results: {
        Args: { version: number }
        Returns: Json
      }
      template: {
        Args: { version: number }
        Returns: Json
      }
      version: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          created_at: string | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      extension: {
        Args: { name: string }
        Returns: string
      }
      filename: {
        Args: { name: string }
        Returns: string
      }
      foldername: {
        Args: { name: string }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: { size: number; bucket_id: string }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits: number
          levels: number
          offsets: number
          search: string
          sortcolumn: string
          sortorder: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
