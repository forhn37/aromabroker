import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium">CS CENTER</h3>
            <p className="text-2xl  mt-2">042-485-1164</p>
            <p className="mt-2">상담시간 : 10:00 - 18:00</p>
            <p>SUNDAY OFF</p>
          </div>
          <div>
            <h3 className="text-lg ">BANK ACCOUNT</h3>
            <p className="text-2xl  mt-2">833-910016-10705</p>
            <p>하나은행 아로마브로커</p>
          </div>
          <div className='border-t border-gray-200 text-sm '>
            <h3 className="text-lg mt-3 mb-2 ">COMPANY INFO</h3>
            <p>상호 : 아로마브로커</p>
            <p>대표자 : 김민성</p>
            <p>전화 : 042-485-1164</p>
            <p>정보관리책임자 : 임하나</p>
            <p>사업자등록번호 : 176-06-01711
              <Link href='http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1760601711' target="_blank" rel="noopener noreferrer">
                [사업자정보확인]
              </Link>
            </p>
            <p>통신판매업신고 : 2020-대전서구-1561</p>
            <p>주소 : 35225 대전 서구 월평로 2 101호</p>
            <p>문의 및 제안 : aromabroker@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-200 flex justify-center mt-4 pt-4">
          <Link href='/informationprocessing'>
            <span className="text-sm">개인정보처리방침</span>
          </Link>
          <Link href='/termsofuse'>
            <span className="text-sm ml-2">이용약관</span>
          </Link>
        </div>
        <div className="mt-4 border-t border-gray-200 pt-4 text-center">
          <p className="text-sm">Copyright © 아로마브로커 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
