import styles from './Error.module.css'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className={styles.divError}>
            <button>
                <Link to='/home'>
                    Go Back!
                </Link>
            </button>

        </div>
    )
}

export default Error404