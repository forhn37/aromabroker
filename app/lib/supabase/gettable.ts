import { supabase } from "./supabaseClient";

// 제네릭 타입을 사용하는 함수입니다.
export default async function GetTable<T>(tablename: string): Promise<T[]> {
  // supabase 클라이언트를 사용하여 데이터베이스에서 데이터를 가져옵니다.
  const { data, error } = await supabase
    .from(tablename) // 두 개의 형식 인수를 제공합니다.
    .select('*'); // 테이블의 모든 열을 선택합니다.

  // 데이터베이스에서 데이터를 가져오는 동안 오류가 발생하면 예외를 던집니다.
  if (error) {
    throw new Error(error.message);
  }

  // 가져온 데이터를 반환합니다.
  return data;
}
