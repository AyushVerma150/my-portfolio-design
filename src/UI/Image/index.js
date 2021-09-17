import TextAnimation from "../../Components/TextAnimation";
import styles from "./Image.module.css";
const ImageComponent = () => {
  return (
    <div className={`text-center bg-image ${styles.intro_example}`}>
      <div
        className="mask h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}>
        <div class="d-flex justify-content-center align-items-center p-3">
          <div class="text-white p-5">
            <h1 class="mb-4">
              Our Technical Stack Includes <TextAnimation />
            </h1>
            <h5 className="mb-4">Best & free guide of responsive web design</h5>
            <a
              class="btn btn-outline-light btn-lg m-2"
              href="https://www.youtube.com/watch?v=c9B4TPnak1A"
              role="button"
              rel="nofollow"
              target="_blank">
              Start tutorial
            </a>
            <a
              style={{
                backgroundColor: "#0ff",
              }}
              class="btn btn-lg m-2"
              href="https://mdbootstrap.com/docs/standard/"
              target="_blank"
              role="button">
              Download MDB UI KIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
