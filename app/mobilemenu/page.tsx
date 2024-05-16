import Link from "next/link";

export default function Mobilemenu() {

const homepage = '/'


  return (
    <main>
      <p>
        <Link href={homepage}>이전으로 이동</Link>
      </p>
      <div>
        <h1>새로운 메뉴입니다.</h1>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
        <li>메뉴4</li>
        <li>메뉴5</li>
        <li>메뉴6</li>
      </div>
    </main>
  );
}