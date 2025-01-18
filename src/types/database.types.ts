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
      totems: {
        Row: {
          created_at: string
          id: string
          mac: string
          name: string | null
          owner: string | null
        }
        Insert: {
          created_at?: string
          id: string
          mac: string
          name?: string | null
          owner?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          mac?: string
          name?: string | null
          owner?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "totems_mac_fkey"
            columns: ["mac"]
            isOneToOne: true
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "totems_mac_fkey"
            columns: ["mac"]
            isOneToOne: true
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "totems_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "user_role"
            referencedColumns: ["id"]
          },
        ]
      }
      tracked_devices: {
        Row: {
          created_at: string
          device: string
          id: number
          permission: number
          user: string
        }
        Insert: {
          created_at?: string
          device: string
          id?: number
          permission: number
          user: string
        }
        Update: {
          created_at?: string
          device?: string
          id?: number
          permission?: number
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
            foreignKeyName: "tracked_wearables_permission_fkey"
            columns: ["permission"]
            isOneToOne: false
            referencedRelation: "tracking_permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracked_wearables_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_role"
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
          first_login: boolean
          id: string
          name: string
          phone: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          first_login?: boolean
          id: string
          name: string
          phone?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          first_login?: boolean
          id?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      wearable_alerts: {
        Row: {
          created_at: string
          data: string | null
          id: number
          type: string
          wearable: string
        }
        Insert: {
          created_at?: string
          data?: string | null
          id?: number
          type: string
          wearable: string
        }
        Update: {
          created_at?: string
          data?: string | null
          id?: number
          type?: string
          wearable?: string
        }
        Relationships: [
          {
            foreignKeyName: "wearable_alerts_wearable_fkey"
            columns: ["wearable"]
            isOneToOne: false
            referencedRelation: "wearables"
            referencedColumns: ["id"]
          },
        ]
      }
      wearable_pings: {
        Row: {
          battery: number
          created_at: string
          id: number
          pedometer: number
          totem: string
          wearable: string
        }
        Insert: {
          battery?: number
          created_at?: string
          id?: number
          pedometer?: number
          totem: string
          wearable: string
        }
        Update: {
          battery?: number
          created_at?: string
          id?: number
          pedometer?: number
          totem?: string
          wearable?: string
        }
        Relationships: [
          {
            foreignKeyName: "wearable_pings_totem_fkey"
            columns: ["totem"]
            isOneToOne: false
            referencedRelation: "totems"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearable_pings_wearable_fkey"
            columns: ["wearable"]
            isOneToOne: false
            referencedRelation: "wearables"
            referencedColumns: ["id"]
          },
        ]
      }
      wearables: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          mac: string
          name: string | null
          out_of_bounds_delay: number
          owner: string | null
          refresh_delay: number
          status: Database["public"]["Enums"]["wearable_status"] | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          mac: string
          name?: string | null
          out_of_bounds_delay?: number
          owner?: string | null
          refresh_delay?: number
          status?: Database["public"]["Enums"]["wearable_status"] | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          mac?: string
          name?: string | null
          out_of_bounds_delay?: number
          owner?: string | null
          refresh_delay?: number
          status?: Database["public"]["Enums"]["wearable_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "wearables_mac_fkey"
            columns: ["mac"]
            isOneToOne: true
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearables_mac_fkey"
            columns: ["mac"]
            isOneToOne: true
            referencedRelation: "devices_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wearables_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "user_role"
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
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      alert_types:
        | "messenger"
        | "sms"
        | "email"
        | "push_notification"
        | "in_app"
      device_types: "wearable" | "totem"
      hashing_algorithms: "argon2"
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
