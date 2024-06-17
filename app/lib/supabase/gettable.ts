import { supabase } from "./supabaseClient";

// Bean 테이블의 데이터를 가져오는 함수입니다.
export default async function getBeanTable<T>(tablename: string): Promise<T[]> {
  // supabase 클라이언트를 사용하여 데이터베이스에서 데이터를 가져옵니다.
  const { data, error } = await supabase
    .from(tablename) // 테이블 이름은 string 타입
    .select('*'); // 테이블의 모든 열을 선택합니다.

  // 데이터베이스에서 데이터를 가져오는 동안 오류가 발생하면 예외를 던집니다.
  if (error) {
    throw new Error(error.message);
  }

  // 가져온 데이터를 반환합니다.
  return data as T[];
}
