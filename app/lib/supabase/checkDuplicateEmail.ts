import { supabaseAdmin } from "./supabaseAdmin";

export const checkDuplicateEmail = async (email : string) => {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();
  
  if (error) {
    console.error('Error fetching users:', error);
    return false;
  }
  
  const isDuplicate = data.users.some(user => user.email === email);
  return isDuplicate;
};