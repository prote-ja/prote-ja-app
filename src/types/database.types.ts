export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      alert_settings: {
        Row: {
          created_at: string
          fall_detection: Database["public"]["Enums"]["alert_types"][]
          half_battery: Database["public"]["Enums"]["alert_types"][]
          id: string
          low_battery: Database["public"]["Enums"]["alert_types"][]
          low_battery_percentage: number
          out_of_bounds: Database["public"]["Enums"]["alert_types"][]
          updated_at: string
        }
        Insert: {
          created_at?: string
          fall_detection?: Database["public"]["Enums"]["alert_types"][]
          half_battery?: Database["public"]["Enums"]["alert_types"][]
          id: string
          low_battery?: Database["public"]["Enums"]["alert_types"][]
          low_battery_percentage?: number
          out_of_bounds?: Database["public"]["Enums"]["alert_types"][]
          updated_at?: string
        }
        Update: {
          created_at?: string
          fall_detection?: Database["public"]["Enums"]["alert_types"][]
          half_battery?: Database["public"]["Enums"]["alert_types"][]
          id?: string
          low_battery?: Database["public"]["Enums"]["alert_types"][]
          low_battery_percentage?: number
          out_of_bounds?: Database["public"]["Enums"]["alert_types"][]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "alert_settings_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      alerts: {
        Row: {
          created_at: string
          data: Json | null
          device: string
          id: number
          type: string
        }
        Insert: {
          created_at?: string
          data?: Json | null
          device: string
          id?: number
          type: string
        }
        Update: {
          created_at?: string
          data?: Json | null
          device?: string
          id?: number
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "alerts_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alerts_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alerts_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
        ]
      }
      devices: {
        Row: {
          hash: string
          hash_alg: Database["public"]["Enums"]["hashing_algorithms"]
          id: string
          owner: string | null
          type: Database["public"]["Enums"]["device_types"]
        }
        Insert: {
          hash: string
          hash_alg?: Database["public"]["Enums"]["hashing_algorithms"]
          id: string
          owner?: string | null
          type: Database["public"]["Enums"]["device_types"]
        }
        Update: {
          hash?: string
          hash_alg?: Database["public"]["Enums"]["hashing_algorithms"]
          id?: string
          owner?: string | null
          type?: Database["public"]["Enums"]["device_types"]
        }
        Relationships: [
          {
            foreignKeyName: "devices_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      pings: {
        Row: {
          data: Json | null
          id: string
          timestamp: string
        }
        Insert: {
          data?: Json | null
          id: string
          timestamp: string
        }
        Update: {
          data?: Json | null
          id?: string
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "wearable_pings_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearable_pings_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearable_pings_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
        ]
      }
      totems: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id: string
          name?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "totems_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "totems_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "totems_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
        ]
      }
      tracked_devices: {
        Row: {
          created_at: string
          device: string
          id: number
          user: string
        }
        Insert: {
          created_at?: string
          device: string
          id?: number
          user: string
        }
        Update: {
          created_at?: string
          device?: string
          id?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "tracked_devices_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracked_devices_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracked_devices_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracked_devices_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tracking_permissions: {
        Row: {
          created_at: string
          device: string
          id: number
          permission: Database["public"]["Enums"]["tracker_permition"]
        }
        Insert: {
          created_at?: string
          device: string
          id?: number
          permission?: Database["public"]["Enums"]["tracker_permition"]
        }
        Update: {
          created_at?: string
          device?: string
          id?: number
          permission?: Database["public"]["Enums"]["tracker_permition"]
        }
        Relationships: [
          {
            foreignKeyName: "tracking_permissions_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracking_permissions_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracking_permissions_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracking_permissions_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "permissions_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracking_permissions_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "tracked_devices"
            referencedColumns: ["id"]
          },
        ]
      }
      user_role: {
        Row: {
          id: string
          type: Database["public"]["Enums"]["profile_type"]
        }
        Insert: {
          id: string
          type?: Database["public"]["Enums"]["profile_type"]
        }
        Update: {
          id?: string
          type?: Database["public"]["Enums"]["profile_type"]
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          fcm_token: string | null
          first_login: boolean
          id: string
          name: string
          phone: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          fcm_token?: string | null
          first_login?: boolean
          id: string
          name: string
          phone?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          fcm_token?: string | null
          first_login?: boolean
          id?: string
          name?: string
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey1"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "user_role"
            referencedColumns: ["id"]
          },
        ]
      }
      wearables: {
        Row: {
          avatar_url: string | null
          birthday: string | null
          created_at: string
          id: string
          name: string
          other_info: string | null
          out_of_bounds_delay: number
          refresh_delay: number
          status: Database["public"]["Enums"]["wearable_status"]
        }
        Insert: {
          avatar_url?: string | null
          birthday?: string | null
          created_at?: string
          id: string
          name?: string
          other_info?: string | null
          out_of_bounds_delay?: number
          refresh_delay?: number
          status?: Database["public"]["Enums"]["wearable_status"]
        }
        Update: {
          avatar_url?: string | null
          birthday?: string | null
          created_at?: string
          id?: string
          name?: string
          other_info?: string | null
          out_of_bounds_delay?: number
          refresh_delay?: number
          status?: Database["public"]["Enums"]["wearable_status"]
        }
        Relationships: [
          {
            foreignKeyName: "wearables_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearables_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearables_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      devices_view: {
        Row: {
          id: string | null
          owner: string | null
          type: Database["public"]["Enums"]["device_types"] | null
        }
        Insert: {
          id?: string | null
          owner?: string | null
          type?: Database["public"]["Enums"]["device_types"] | null
        }
        Update: {
          id?: string | null
          owner?: string | null
          type?: Database["public"]["Enums"]["device_types"] | null
        }
        Relationships: [
          {
            foreignKeyName: "devices_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      hot_pings: {
        Row: {
          data: Json | null
          id: string | null
          timestamp: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wearable_pings_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearable_pings_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearable_pings_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
        ]
      }
      last_pings: {
        Row: {
          data: Json | null
          id: string | null
          timestamp: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wearable_pings_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearable_pings_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearable_pings_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions_view: {
        Row: {
          created_at: string | null
          device: string | null
          id: number | null
          permission: Database["public"]["Enums"]["tracker_permition"] | null
          user: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tracked_devices_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracked_devices_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracked_devices_device_fkey"
            columns: ["device"]
            isOneToOne: false
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracked_devices_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      stale_devices: {
        Row: {
          hash: string | null
          hash_alg: Database["public"]["Enums"]["hashing_algorithms"] | null
          id: string | null
          owner: string | null
          type: Database["public"]["Enums"]["device_types"] | null
        }
        Relationships: [
          {
            foreignKeyName: "devices_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      totems_view: {
        Row: {
          created_at: string | null
          data: Json | null
          id: string | null
          name: string | null
          owner: string | null
          timestamp: string | null
        }
        Relationships: [
          {
            foreignKeyName: "devices_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "totems_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "totems_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "totems_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
        ]
      }
      wearables_view: {
        Row: {
          avatar_url: string | null
          birthday: string | null
          created_at: string | null
          data: Json | null
          id: string | null
          name: string | null
          other_info: string | null
          out_of_bounds_delay: number | null
          owner: string | null
          refresh_delay: number | null
          status: Database["public"]["Enums"]["wearable_status"] | null
          timestamp: string | null
        }
        Relationships: [
          {
            foreignKeyName: "devices_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearables_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearables_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearables_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "stale_devices"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      can_edit_wearable_or_totem: {
        Args: {
          device_id: string
        }
        Returns: boolean
      }
      can_view_wearable_or_totem: {
        Args: {
          device_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      alert_types:
        | "messenger"
        | "sms"
        | "email"
        | "push_notification"
        | "in_app"
      device_types: "wearable" | "totem"
      hashing_algorithms: "argon2" | "bcrypt"
      profile_type: "user" | "wearable" | "totem"
      tracker_permition: "editor" | "viewer" | "pending" | "blocked"
      wearable_status: "active" | "inactive" | "out_of_range"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
