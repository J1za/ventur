import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';




const Nav = () => {
    const router = useRouter();


    const nav: { label: string, url: string }[] = [
        { label: 'SaaS blueprint', url: '/services' },
        { label: 'Blog', url: '/blog' },
        { label: 'Dispatches', url: '/join' },
    ];

    return (
        <ul className={styles.nav__list}>
            {nav.map((navItem, idx) => {
                const navClasses = [styles.nav__item];
                if (router.pathname === navItem.url) navClasses.push(styles.nav__item_active);

                return (
                    <li className={navClasses.join(" ")} key={idx}>
                        <Link href={navItem.url}>
                            {navItem.label}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Nav
