import Link from "next/link";

export default function Profile() {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">test@test.com</div>
          <div className="profile__name">김유저</div>
        </div>
      </div>
      <Link href="/" className="profile__logout">
        로그아웃
      </Link>
    </div>
  );
}
