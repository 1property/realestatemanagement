import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://erabbaphqueanoddsoqh.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyYWJiYXBocXVlYW5vZGRzb3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NDQ5MTMsImV4cCI6MjA1OTQyMDkxM30._o0s404jR_FrJcEEC-7kQIuV-9T2leBe1QfUhXpcmG4";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const buyerListingTable = "buyer_listing";
const userTable = "user"
const propertyTable = "property"

export { supabase, buyerListingTable, userTable, propertyTable };