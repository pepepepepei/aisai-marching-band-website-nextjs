import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SideBar.module.scss";

export default function SideBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  const handleMenuClose = () => {
    setOpenMenu(false);
  };

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
      <Link href="/" className={styles.logo}>
        <Image
          src="/apple-touch-icon-180x180.png"
          alt="Aisai Marching Band BLOWINGのロゴ"
          width={80}
          height={80}
          className={styles.logoImg}
        />
        <div className={styles.logoText}>
          <span className={styles.logoAisaimb}>Aisai Marching Band</span>
          <span className={styles.logoBlowing}>BLOWING</span>
        </div>
      </Link>

      <button
        type="button"
        title={`メニューを${openMenu ? "閉じる" : "開く"}`}
        className={[styles.menuBtn, openMenu ? styles.open : ""].join(" ")}
        aria-controls="menuContent"
        aria-expanded={openMenu}
        onClick={handleMenuOpen}
      >
        <span className={styles.menuBtnText}>{openMenu ? "CLOSE" : "MENU"}</span>
        <span
          className={[styles.menuBtnHamburgerLine, openMenu ? styles.open : ""].join(" ")}
        ></span>
      </button>

      <nav id="menuContent" className={[styles.menuContent, openMenu ? styles.open : ""].join(" ")}>
        <ul className={styles.menuContentList}>
          {navItems.map((item) => {
            return (
              <li key={item.href} className={styles.menuContentListItem}>
                <Link
                  onClick={handleMenuClose}
                  href={item.href}
                  className={[
                    styles.menuContentListItemLink,
                    (
                      item.href === "/"
                        ? router.pathname === item.href
                        : router.pathname.startsWith(item.href)
                    )
                      ? styles.current
                      : "",
                  ].join(" ")}
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
