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
          origin: string | null
          user_id: string
          version_id: number
          duration: number | null
          name: string
          created_at: string
          is_template: boolean
          updated_at: string
          id: number
        }
        Insert: {
          origin?: string | null
          user_id: string
          version_id: number
          duration?: number | null
          name: string
          created_at?: string
          is_template?: boolean
          updated_at?: string
          id?: number
        }
        Update: {
          origin?: string | null
          user_id?: string
          version_id?: number
          duration?: number | null
          name?: string
          created_at?: string
          is_template?: boolean
          updated_at?: string
          id?: number
        }
      }
      projects: {
        Row: {
          name: string
          description: string | null
          owner_id: string | null
          created_at: string | null
          id: number
        }
        Insert: {
          name: string
          description?: string | null
          owner_id?: string | null
          created_at?: string | null
          id?: number
        }
        Update: {
          name?: string
          description?: string | null
          owner_id?: string | null
          created_at?: string | null
          id?: number
        }
      }
      results: {
        Row: {
          id: string
          name: string
          suite: string
          feature: string
          status: string | null
          description: string | null
          steps: Json | null
          duration: number | null
          fullname: string | null
          launch_id: number
          parent_suite: string | null
          sub_suite: string | null
          created_at: string
        }
        Insert: {
          id: string
          name: string
          suite: string
          feature: string
          status?: string | null
          description?: string | null
          steps?: Json | null
          duration?: number | null
          fullname?: string | null
          launch_id: number
          parent_suite?: string | null
          sub_suite?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          suite?: string
          feature?: string
          status?: string | null
          description?: string | null
          steps?: Json | null
          duration?: number | null
          fullname?: string | null
          launch_id?: number
          parent_suite?: string | null
          sub_suite?: string | null
          created_at?: string
        }
      }
      versions: {
        Row: {
          version_name: string
          repo: string
          project_id: number
          created_at: string
          secondary_id: string | null
          id: number
        }
        Insert: {
          version_name: string
          repo: string
          project_id: number
          created_at?: string
          secondary_id?: string | null
          id?: number
        }
        Update: {
          version_name?: string
          repo?: string
          project_id?: number
          created_at?: string
          secondary_id?: string | null
          id?: number
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
          id: string
          name: string
          owner: string | null
          created_at: string | null
          updated_at: string | null
          public: boolean | null
        }
        Insert: {
          id: string
          name: string
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          public?: boolean | null
        }
        Update: {
          id?: string
          name?: string
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          public?: boolean | null
        }
      }
      migrations: {
        Row: {
          id: number
          name: string
          hash: string
          executed_at: string | null
        }
        Insert: {
          id: number
          name: string
          hash: string
          executed_at?: string | null
        }
        Update: {
          id?: number
          name?: string
          hash?: string
          executed_at?: string | null
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          name: string | null
          owner: string | null
          metadata: Json | null
          id: string
          created_at: string | null
          updated_at: string | null
          last_accessed_at: string | null
          path_tokens: string[] | null
        }
        Insert: {
          bucket_id?: string | null
          name?: string | null
          owner?: string | null
          metadata?: Json | null
          id?: string
          created_at?: string | null
          updated_at?: string | null
          last_accessed_at?: string | null
          path_tokens?: string[] | null
        }
        Update: {
          bucket_id?: string | null
          name?: string | null
          owner?: string | null
          metadata?: Json | null
          id?: string
          created_at?: string | null
          updated_at?: string | null
          last_accessed_at?: string | null
          path_tokens?: string[] | null
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

