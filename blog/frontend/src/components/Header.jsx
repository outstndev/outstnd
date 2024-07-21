import '../styles/Header.css';

function Header() {

    return (
    <header className = 'header'>
            <h1>OUTSTNDEV.</h1>
            <nav>
                <ul>
                    <li><a>about us</a></li>
                    <li><a>workspace</a></li>
                    <li><a>contact</a></li>
                </ul> 
            </nav>
    </header>
    );

}

export default Header;