import { supabase } from "./supabaseClient";

// Bean 테이블의 데이터를 가져오는 함수입니다.
export default async function GetTable<T>(
  tablename: string,
  standard?: string,
  value?: string | number
): Promise<T[]> {
  // supabase 클라이언트를 사용하여 데이터베이스에서 데이터를 가져옵니다.
  // supabase 클라이언트를 사용하여 데이터베이스에서 데이터를 가져옵니다.
  let query = supabase.from(tablename).select("*");

  // standard와 value가 제공되었을 때만 조건을 추가합니다.
  if (standard && value !== undefined) {
    query = query.eq(standard, value);
  }

  const { data, error } = await query;

  // 데이터베이스에서 데이터를 가져오는 동안 오류가 발생하면 예외를 던집니다.
  if (error) {
    throw new Error(error.message);
  }

  // 가져온 데이터를 반환합니다.
  return data as T[];
}
