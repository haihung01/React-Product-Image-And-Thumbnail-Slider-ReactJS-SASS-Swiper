import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import ProductImagesSlider from "./components/product-imges-slider"
import { productImgges } from "./assets" 


export default function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '500px',
        backgroundColor: '#fff',
        padding: '20px'
      }}>
       <ProductImagesSlider images={productImgges} />
      </div>

    </div>
  )
}
