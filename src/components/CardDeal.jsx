import { guardian } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The best Community <br className="sm:block hidden" /> Aptos have ever seen
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={guardian} alt="billing" className="w-70% h-70% rounded-lg" />
    </div>
  </section>
);

export default CardDeal;