import ProductCard from "../Components/ProductCard/ProductCard";
import Footer from "./Footer";
import Subscribe from "./Subscribe";

const products = [
  {
    name: "Midnight Muse Bodycon",
    price: 499,
    image:
      "https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747380323/ocr2jta7ezwll9ufwqad.png",
  },
  {
    name: "Blush Bloom Bodycon",
    price: 899,
    image:
      "https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747379789/twf5o2qex89xz5az6ydl.jpg",
  },
  {
    name: "Noir Nights Mini Bodycon",
    price: 499,
    image:
      "https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747379711/fuwn10zvb1iw6meqb4ib.png",
  },
  {
    name: "Pastel Muse Bodycon",
    price: 899,
    image:
      "https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747379441/t6hk79wco5tdbqa4ve3k.png",
  },
  {
    name: "Pastel Muse Bodycon",
    price: 899,
    image:
      "https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747379441/t6hk79wco5tdbqa4ve3k.png",
  },
  {
    name: "Midnight Muse Bodycon",
    price: 499,
    image:
      "https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747380323/ocr2jta7ezwll9ufwqad.png",
  },
  {
    name: "Blush Bloom Bodycon",
    price: 899,
    image:
      "https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747379789/twf5o2qex89xz5az6ydl.jpg",
  },
  {
    name: "Noir Nights Mini Bodycon",
    price: 499,
    image:
      "https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747379711/fuwn10zvb1iw6meqb4ib.png",
  },
  {
    name: "Noir Nights Mini Bodycon",
    price: 499,
    image:
      "https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747379711/fuwn10zvb1iw6meqb4ib.png",
  },
];

function Home() {
  return (
    <div className="p-6 ">
      <div className="flex flex-col sm:flex-row border border-gray-400">
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className=" font-medium text-sm md:text-base">
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              ThinKart Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>
        <img
          className="w-full sm:w-1/2"
          src="https://chlothzy.shop/assets/hero_img-uMuzwHEB.png"
          alt=""
        />
      </div>

      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <div className="inline-flex gap-2 items-center mb-3">
            <p className="text-gray-500">
              LATEST{" "}
              <span className="text-gray-700 font-medium">COLLECTIONS</span>
            </p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
          </div>
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Chlothzy’s latest collection is where elegance meets trend. Fashion
            that speaks your style.
          </p>
        </div>
        <div className="mx-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {products.map((p, i) => (
              <ProductCard key={i} id={4} product={p} />
            ))}
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <div className="inline-flex gap-2 items-center mb-3">
            <p className="text-gray-500">
              BEST <span className="text-gray-700 font-medium">SELLERS</span>
            </p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
          </div>
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Our best seller — loved by many, styled by all. Elevate your look
            with timeless charm.
          </p>
        </div>
        <div className="mx-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {products.map((p, i) => (
              <ProductCard key={i} id={4} product={p} />
            ))}
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR1SURBVHgB7ZzrbdswFIVPgQ7QDXI3aDYIN2g6gbRBsoHUCdIN3E4QdAJlg6QT2J0g2SDlhaVaNUTy8iGKMvQB94dhiyIPD5+iBWxsbGxsbGyk4QPKgHRc6/ik42ri+zcdf3Qc+njDwiwlnOrjBifBfHjp45eOJxQg5JywQK2OVx3vieNRR4ULQ+nokF6sqdjjKCBhxSjkE8wk4Krg/uo7lhFsSkDCClA4Zja2wK99OinS4mhRMPcIE2in4w7HEfbKkDa7mAeXLzoedDwH3IuvIRSGj2gsFhf+BnGQjhp+riyu6SrIBGvgP2eTwJXQYaXi2TI+l2Dn1JA5kCuRUAgK07V7jfw0WJnzxq7jfiyHy0zcwr1K4QFjyTz+Q+HUNEuA4G66D8gA145y/KZCWRDc4t1iZnhF0GF9EOzicZOercnS6EYK64MHqUWa7LjjX6PrGNdEXSExKsdNMjE2wHkkN0SX4yaZINinKcnmnYSM1s5Egwx93Q4ZrZ0JHkFNrks2wu5h71AJ64SdNVtLUnCv+XaIh2uYkAZpH6UwY5kauIWLtTZfy2tGdjYhjhbHPFXC33cwlykK29A9jgZhDKIN6cSI157lSSKezRhXiED6DDTEdeeixYjXGvLlEk/BXCaJ8JO4ligxrjOJFiJe68hX5ciH6brgaYmCn3BS17lE8xGvFaTTONIw5eURgdSAl3CSTEpFk4jXJsgPs7PcO4gG8gJKXOcrmk28VnCdRDTmAQUIx1FNpBUq2pR4reD3UtFc5TTyEWE8Wb5TOn6OPrNoHdwT0wPMzZL6NPhY1x3stDq+nV1Llt/bvgvCVBM+FpY6rYJsizvEaSoivSCayAR9RBsghIvXWPLSBaQXvHq4syTqmnaEiDZA8BevceRHeabn27L+o7YkauuvYkQbIMjFc4k20EEu2jsitsxsKwdboW8FmarghuAWTyoaoyAXjSN4AhyzHKkRJ9oAwSyej2gDHeTCuUZvK6ZMPwuurREn2gBN5CNENEZBLtwNIrDtkkrWpTXiRBsgnMQLFW3AZIaQ8hmpEW/lGmmORRAim09PjRkHhgHbQ43oxBfEtc+YooKsHarCOmlgF46QAIUZLb0Q2VqSzdoK68TkugoJsVl7j0JONXoy5bo9EmOzNkeWU40zcG6IpG4bcB2Rmv1U4wyMDZHcbWNsi/eijsB7MEzyZ3HbgILddVxrhHVBSHOMw4ltGVaieC1kT9+y0MEt3hJ/DBnDYvzAqRspYuQnyBbLLZaBkG5HJTkEmXgd8jbdFtNTp2Jcx3BzlIjHscO8Aiqk3TGeHYLfw5WUArKDeCejE967KNcxBP8nUzwnZAco+EE47qmxWL6v4kiyXcSkfGEL1yQLcY8wXmB+kw3h2C0Qwhxz0PG1v0ex1Ej3EoIUsfTfP70g2I/554g94v/3vxiE/AKyYBUuBMJRQC7UXIJ1OL5e42LhwqUSkcVqEHlCPISUo2oI1318xul1aOd/Fnnr49DH8Aq037jw159tbGxsbGxsbFj4C7XOZoyRzeTiAAAAAElFTkSuQmCC"
            class="w-12 m-auto mb-5"
            alt=""
          />
          <p class=" font-semibold">Easy Exchange Policy</p>
          <p class=" text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div>
          <img
            src="data:image/png;base64,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"
            class="w-12 m-auto mb-5"
            alt=""
          />
          <p class=" font-semibold">7 Days Return Policy</p>
          <p class=" text-gray-400">We provide 7 days free return policy</p>
        </div>
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN7SURBVHgB7ZyLkdowEIb/u6EAOkCpIHSAOjg6wB1AKrBTAUkF0MElFUAquKQCu4MkFXBabM2Axys/JGSJ45vZ8+D3/pJW8sq+J9yeqTKpbKZsXtn0wjT/lBXV8ndlf6pllJCjmbKDspOl/VW2U7ZCBFCpruHG8TZBBAKDnM9Q3uDJowUjhlSWw6/zwYhBpf+KcZ2/tBwWMeMJ/ZHor36h7Igy0hfV8j/KnkAzq86pe5N5tezDN2Vfa+d1zgb9gliK0rmhkCAvKEXvUysEbkTW8SYOyhZwj0ApRo6RhMg6XvgWztcR6FYznAqRdbjgFtejPx8ItNcKJ0JkCKP0OUj4LdrvcXABSXhQ2REp2uNUbwTMVS0kATRtQmzQkx3iEkDTJsS864kSxCmAxiTEoetJTM1ggTggZwc3i8RwcIp4EOCfamm9sbfgakGO+DAN8dkCTQwHrRAnXLNgC/UNlsEkQCT4gpX1nQXurxZouNrwWt8xxf3EgjqU9+wUILmmsEb8kKNcTyEvd+KaQucRVuDs0OzfVu8gcb9NQZOg2UdqAXgGPwqMduangSOzXtAfEmHe88AYKdCcfKVQMHsGP4S8p5pAFMz6+QT8UyGlr+vqkTA/EW4toQJdoazdorZNGI5hewaT5QhrEEWOcD1Am52HAScL22J8qNSpUIb6kAJ2IpDtMB4C9hPB6TPsSTAgf+cAagIHOEj1uxCBoCrle96BhBdwwMSwTdZ+f0LprGjYV0fl7/CHKTDvlf3Ade+WVNYI11aaIGdDyDtItET7BlI4igmk7Bdmm8+Hrc/M+iMG1MYhMeHIrPcZE7hrHTEAV4Exah4i4CHCmYcIeIhw5iECHiKcIRG4d/5kz/U3fXew47UkeEzb2BkaGh7XByX0O0fYw+ZVw/6tk7NrtGeQZLVf3vPit8SUR9hV97xEe8bpLMIU9okJEkfALyns7vlKBGIDuxONMV1napqDRCD2A08yZp6Rnlyt02v1k24RjwAaJ4nWOgm6vS67RDgIWKTcTd87LFA6qpMl+ms1Slv9QpgIlL0CfR6gu/cC5aTREs1jhQQfCK52L/BBEOCbg+8s+Whw32ud30+YIEwk3FRTKmXTt1R7BEoG+wFQVxMIEAF/AqQIFAk/ArwhYExv0rmyAyLoEWwf5jijZ4zGB70hX8j6gCL6C9xQoOX/MLwDomnC/jzse2YAAAAASUVORK5CYII="
            class="w-12 m-auto mb-5"
            alt=""
          />
          <p class=" font-semibold">Best customer support</p>
          <p class=" text-gray-400">we provide 24/7 customer support</p>
        </div>
      </div>


      <Subscribe />
    </div>
  );
}
export default Home;
