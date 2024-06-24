import NewPost from '@/app/ui/newpost';
import { searchParams } from '../../../shop/beans/[bean]/page';
export interface NoticePostSearchPrams {
  searchParams : TableNameType
}

export interface TableNameType {
  tablename : string;
}
export default function NewPostPage({searchParams} : NoticePostSearchPrams) {
  console.log(searchParams)
  return <NewPost tablename={searchParams.tablename} />;
}
