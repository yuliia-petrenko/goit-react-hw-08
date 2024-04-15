import { TailSpin } from "react-loader-spinner";
import css from './Loader.module.css'

const Loader = () => {
    return (
      <div className={css.loaderWrap}>
        <TailSpin
           visible={true}
           height="80"
           width="80"
           color="#0f78b9"
           ariaLabel="tail-spin-loading"
           radius="1"
           wrapperStyle={{}}
           wrapperClass=""
          
        />
      </div>
    );
}

export default Loader
