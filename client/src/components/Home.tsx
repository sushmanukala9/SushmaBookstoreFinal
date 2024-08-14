import '../assets/css/First.css';
import {Link} from "react-router-dom";

function Home() {
    return (

        <div className="Welcome-page">
            <div className="Welcome-message">
                <h2>Welcome Readers!</h2>
                <hr className="line" />
                <br />
                <h3>
                    Discover a World of Words at Book Fair – Your Reading Destination
                </h3>
                <h4>
                    Step into a world where the written word takes flight. At BookFair, we
                    believe in the transformative power of stories. Get ready to embark on
                    incredible journeys, meet unforgettable characters, and let your
                    imagination soar.
                </h4>
                <br />
                <br />
                <Link to="/categories/Classics"><button className="shop_button">SHOP NOW!</button></Link>
            </div>
            <div>
                <img className="hero-image" src={require('../assets/images/Rectangle 2.png')} alt="books" />
            </div>
        </div>
    )
}

export default Home;
