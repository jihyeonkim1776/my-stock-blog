import Layout from "src/components/Layout";
import Link from "next/link";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="inner">
        <div className="navbar">
          <Link href="/">
            <div className="navbar__logo">my stock blog</div>
          </Link>

          <div className="navbar__list">
            <Link href="/posts/new" className="navbar__list--item">
              글쓰기
            </Link>
            <Link href="/posts" className="navbar__list--item">
              게시글
            </Link>
            <Link href="/profile" className="navbar__list--item">
              프로필
            </Link>
            <Link href="/login" className="navbar__list--item">
              로그인
            </Link>
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
              <Link href="/profile" className="navbar__list--item--mobile">
                프로필
              </Link>
              <Link href="/login" className="navbar__list--item--mobile">
                로그인
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
