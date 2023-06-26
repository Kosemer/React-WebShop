import classes from "./Home.module.css";
import iphone14pro from "../Assets/iphone14pro.jpg";
import ps5ControllerPro from "../Assets/ps5ControllerPro.jpg";
import macBookPro from "../Assets/macBookPro.jpg";
import win95 from "../Assets/win95.jpg";
import processor from "../Assets/processor.png";
import hardDrive from "../Assets/hardDrive.png";
import videoCard from "../Assets/videoCard.png"
import geforce3070 from "../Assets/videoCard.png";
import sapphireRadeon from "../Assets/videoCard.png";
import zotac from "../Assets/videoCard.png";
import msi from "../Assets/videoCard.png";
import motherboard from "../Assets/motherboard.png";
import ram from "../Assets/ram.png";
import cooler from "../Assets/cooler.png";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const navigateClick = (page) => {
    navigate(`/${page}`);
  }

  return (
    <div className={classes.container}>
      <div className={classes.slider}>Slider</div>
      <section className={classes.topicBoxes}>
        <div onClick={() => navigateClick("merevlemezek")}>
          <img src={hardDrive} className={classes.boxesIcon} alt="hardDrive"></img>Merevlemezek
        </div>
        <div onClick={() => navigateClick("processzorok")}>
          <img src={processor} className={classes.boxesIcon} alt="processor"></img>Processzorok
        </div>
        <div onClick={() => navigateClick("videokartyak")}>
          <img src={videoCard} className={classes.boxesIcon} alt="videoCard"></img>Videókártyák
        </div>
        <div onClick={() => navigateClick("alaplapok")}>
          <img src={motherboard} className={classes.boxesIcon} alt="motherboard"></img>Alaplapok
        </div>
        <div onClick={() => navigateClick("memoriak")}>
          <img src={ram} className={classes.boxesIcon} alt="ram"></img>Memóriák
        </div>
        <div onClick={() => navigateClick("merevlemezek")}>
          <img src={cooler} className={classes.boxesIcon} alt="cooler"></img>Hűtés
        </div>
      </section>
      <h2 className={classes.title}>Népszerü termékek</h2>
      <section className={classes.popularProducts}>
        <div className={classes.product}>
          <div className={classes.imageBox}>
          <img src={geforce3070} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
        <div className={classes.product}>
        <div className={classes.imageBox}>
          <img src={sapphireRadeon} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
        <div className={classes.product}>
        <div className={classes.imageBox}>
          <img src={zotac} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
        <div className={classes.product}>
        <div className={classes.imageBox}>
          <img src={msi} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
        <div className={classes.product}>
        <div className={classes.imageBox}>
          <img src={geforce3070} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
        <div className={classes.product}>
        <div className={classes.imageBox}>
          <img src={zotac} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
      </section>
      <h2 className={classes.title}>Új és akciós termékek</h2>
      <section className={classes.popularProducts}>
      <div className={classes.product}>
        <div className={classes.imageBox}>
          <img src={msi} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
        <div className={classes.product}>
        <div className={classes.imageBox}>
          <img src={msi} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
        <div className={classes.product}>
        <div className={classes.imageBox}>
          <img src={msi} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
        <div className={classes.product}>
        <div className={classes.imageBox}>
          <img src={msi} className={classes.productImage}></img>
          </div>
          <section className={classes.description}>
          <p className={classes.productTitle}>
            ASUS TUF Gaming GeForce® RTX™ 3060 Ti videokártya, OC V2, 8 GB
            GDDR6, 256 bites
          </p>
          
          <p className={classes.price}>323 437 Ft</p>
          <button>Kosárba</button>
          </section>
        </div>
      </section>
      <h2 className={classes.title}>Újdonságok</h2>
      <section className={classes.whatsNew}>
        <div>
          <img src={iphone14pro} alt="iphone14pro"></img>
        </div>
        <p className={classes.newTitle}>
          Iphone 14 Pro Max, az interakció új formája és kompromisszumok nélküli
          fotótás.
        </p>
        <div>
          <img src={win95} alt="win95"></img>
        </div>
        <p className={classes.newTitle}>
          A Microsoft bejelentette a Windows legújabb és forradalmi változatát.
        </p>
        <div>
          <img src={macBookPro} alt="macBookPro"></img>
        </div>
        <p className={classes.newTitle}>
          Az Apple bejelentette a legújabb MacBook Pro-t, 70%-al erősebb M2-es
          processzorral.
        </p>
        <div>
          <img src={ps5ControllerPro} alt="ps5ControllerPro"></img>
        </div>
        <p className={classes.newTitle}>
          Megjelent a PlayStation 5 legújabb pro kontrollere. Azoknak, akik
          igazán komolyan veszik a játékot.
        </p>
      </section>
    </div>
  );
};
export default Home;