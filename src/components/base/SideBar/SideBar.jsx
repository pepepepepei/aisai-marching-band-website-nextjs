import returnTop from "@/utils/returnTop";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const router = useRouter();
  const navItems = [
    {
      href: "/",
      title: "ホーム",
    },
    {
      href: "/news",
      title: "お知らせ",
    },
    {
      href: "/about",
      title: "概要",
    },
    {
      href: "/join",
      title: "メンバー募集",
    },
    {
      href: "/contact",
      title: "お問い合わせ",
    },
    {
      href: "/privacy",
      title: "当サイトについて",
    },
  ];

  return (
    <aside className={styles.root}>
      <button
        type="button"
        title="一番上に戻る"
        onClick={returnTop}
        className={styles.logo}
      >
        <Image
          src="/apple-touch-icon-180x180.png"
          alt="Aisai Marching Band BLOWINGのロゴ"
          width={80}
          height={80}
        />
        <div className={styles.logoText}>
          <span className={styles.logoAisaimb}>Aisai Marching Band</span>
          <span className={styles.logoBlowing}>BLOWING</span>
        </div>
      </button>

      {/* <button
        type="button"
        title="メニューを開く"
        class="menu-btn"
        aria-controls="menuContent"
        aria-expanded="false"
      >
        <span class="menu-btn-open">MENU</span>
        <span class="menu-btn-close">CLOSE</span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </button> */}

      <nav className={styles.menuContent}>
        <ul className={styles.menuContentList}>
          {navItems.map((item) => {
            return (
              <li key={item.href} className={styles.menuContentListItem}>
                <Link
                  href={item.href}
                  className={
                    router.pathname.startsWith(item.href)
                      ? styles.menuContentListItemLinkCurrent
                      : styles.menuContentListItemLink
                  }
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
