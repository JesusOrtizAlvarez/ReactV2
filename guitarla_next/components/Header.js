import Link from "next/link"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.Header}>
        <div className="contenedor"> 
            <div>

            </div>

            <nav>
                <Link href='/'> Inicio </Link>
                <Link href='/nosotros'> Nosotros </Link>
                <Link href='/blog'> Blog </Link>
                <Link href='/tienda'> Tienda </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header