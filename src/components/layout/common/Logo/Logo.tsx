import { FC } from 'react';
import styles from './Logo.module.scss';
import Link from 'next/link';

interface LogoProps {
    color?: 'white';
    size?: 'small';
    descriptor?: boolean;
    openMenu?: boolean;
}

const Logo: FC<LogoProps> = ({ openMenu, size, descriptor, color }) => {
    const classes = [styles.logo];
    let descriptorComponent = null;
    if (size === 'small') classes.push(styles.logo_small);
    if (openMenu === false) classes.push(styles.logo_openMenu);
    if (descriptor) descriptorComponent = (
        <div className={styles.logo__descriptor}>
            SaaS Products studio
        </div>
    );

    if (color === 'white') classes.push(styles.logo_white);

    return (
        <Link href="/">
            <a className={classes.join(' ')}>
                <div className={styles.logo__text}>
                    <span className={styles.logo__part_thin}>the</span><span className={styles.logo__part_bold}>ventur</span>
                </div>
                {descriptorComponent}
            </a>
        </Link>

    );
};

export default Logo;