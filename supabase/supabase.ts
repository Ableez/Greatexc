import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ftvcjzssypkbusefniti.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0dmNqenNzeXBrYnVzZWZuaXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3NDc0NjUsImV4cCI6MjAxMzMyMzQ2NX0.Opser8GH6oXpSnn81RRN5zq7bz-AHXIQ6zqLNGfzl90";

export const supabase = createClient(supabaseUrl, supabaseKey);
