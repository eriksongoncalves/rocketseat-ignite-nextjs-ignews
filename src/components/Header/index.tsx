import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="/" className={styles.active}>
            Home
          </a>

          <a href="/posts">Posts</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;