import { EarphonesCard, HeadphonesCard, SpeakersCard } from "../../components/ui/CategoryCard"
import Footer from "../../components/ui/Footer"
import Card from "./components/Card"

const Product = () => {


  return (
    <div className='pt-32 flex flex-col gap-48'>
      <main className="max-w-5xl mx-auto px-8">
        <button className='mb-8' onClick={() => window.history.go(-1)}>Go Back</button>
        <Card />
      </main>
      <section className=" w-full md:flex md:flex-row gap-4 md:w-[90%] max-w-5xl mx-auto ">
        <HeadphonesCard />
        <SpeakersCard />
        <EarphonesCard />
      </section>
      <Footer />
    </div>
  )
}

export default Product