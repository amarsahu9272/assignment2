import reactLogo from './reactLogo.png'

function Header() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="React-Logo" width={60} height={60} />
            </nav>
        </header>
    )
}

export default Header