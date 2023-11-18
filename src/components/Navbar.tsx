import Layout from "src/components/Layout";
import Link from "next/link";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log({ session }, status);
  return (
    <>
      <div className="inner">
        <div className="navbar">
          <Link href="/">
            <div className="navbar__logo">my stock blog</div>
          </Link>

          <div className="navbar__list">
            <Link href="/admin/new" className="navbar__list--item">
              글쓰기
            </Link>
            <Link href="/posts" className="navbar__list--item">
              게시글
            </Link>
            <Link href="/user/profile" className="navbar__list--item">
              프로필
            </Link>
            {session?.user ? (
              <div onClick={() => signOut()} className="navbar__list--item">
                로그아웃
              </div>
            ) : (
              <div onClick={() => signIn()} className="navbar__list--item">
                로그인
              </div>
            )}
          </div>
          {/* mobile button */}
          <div
            role="presentation"
            className="navbar__button"
            onClick={() => setIsOpen((val) => !val)}
          >
            {isOpen ? <AiOutlineClose /> : <BiMenu />}
          </div>
        </div>
        {/* mobile navbar */}
        {isOpen && (
          <div className="navbar--mobile">
            <div className="navbar__list--mobile">
              <Link href="/posts/new" className="navbar__list--item--mobile">
                글쓰기
              </Link>
              <Link href="/posts" className="navbar__list--item--mobile">
                게시글
              </Link>
              <Link href="/user/profile" className="navbar__list--item--mobile">
                프로필
              </Link>
              {session?.user ? (
                <div onClick={() => signOut()} className="navbar__list--item">
                  로그아웃
                </div>
              ) : (
                <div onClick={() => signIn()} className="navbar__list--item">
                  로그인
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
