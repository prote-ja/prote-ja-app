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
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      totems: {
        Row: {
          created_at: string
          id: string
          mac: string
          name: string
          owner: string
        }
        Insert: {
          created_at?: string
          id?: string
          mac: string
          name?: string
          owner?: string
        }
        Update: {
          created_at?: string
          id?: string
          mac?: string
          name?: string
          owner?: string
        }
        Relationships: [
          {
            foreignKeyName: "totems_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tracked_wearables: {
        Row: {
          created_at: string
          disconected_alert: Database["public"]["Enums"]["alert_types"][]
          fall_detected_alert: Database["public"]["Enums"]["alert_types"][]
          half_battery_alert: Database["public"]["Enums"]["alert_types"][]
          id: number
          low_battery_alert: Database["public"]["Enums"]["alert_types"][]
          out_of_bounds_alert: Database["public"]["Enums"]["alert_types"][]
          user: string
          wearable: string
        }
        Insert: {
          created_at?: string
          disconected_alert: Database["public"]["Enums"]["alert_types"][]
          fall_detected_alert: Database["public"]["Enums"]["alert_types"][]
          half_battery_alert: Database["public"]["Enums"]["alert_types"][]
          id?: number
          low_battery_alert: Database["public"]["Enums"]["alert_types"][]
          out_of_bounds_alert: Database["public"]["Enums"]["alert_types"][]
          user: string
          wearable: string
        }
        Update: {
          created_at?: string
          disconected_alert?: Database["public"]["Enums"]["alert_types"][]
          fall_detected_alert?: Database["public"]["Enums"]["alert_types"][]
          half_battery_alert?: Database["public"]["Enums"]["alert_types"][]
          id?: number
          low_battery_alert?: Database["public"]["Enums"]["alert_types"][]
          out_of_bounds_alert?: Database["public"]["Enums"]["alert_types"][]
          user?: string
          wearable?: string
        }
        Relationships: [
          {
            foreignKeyName: "tracked_wearables_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracked_wearables_wearable_fkey"
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
          created_at: string
          id: string
          out_of_bounds_delay: number
          owner: string
          refresh_delay: number
          status: Database["public"]["Enums"]["wearable_status"]
        }
        Insert: {
          created_at?: string
          id?: string
          out_of_bounds_delay?: number
          owner?: string
          refresh_delay?: number
          status?: Database["public"]["Enums"]["wearable_status"]
        }
        Update: {
          created_at?: string
          id?: string
          out_of_bounds_delay?: number
          owner?: string
          refresh_delay?: number
          status?: Database["public"]["Enums"]["wearable_status"]
        }
        Relationships: [
          {
            foreignKeyName: "wearables_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
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
