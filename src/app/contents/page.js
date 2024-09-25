import Link from 'next/link'
import { FacebookIcon, InstagramIcon } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left content section (70% width on large screens) */}
          <div className="lg:w-[70%] p-6">
            <h1 className="text-3xl font-bold mb-6">당뇨에 좋은 음식은?</h1>
            
            {/* First content section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">추천 음식</h2>
              <ol className="space-y-6">
                <li>
                  <h3 className="text-xl font-medium">1. 현미, 보리, 귀리 등 곡류</h3>
                  <div className="flex flex-col md:flex-row items-start mt-2">
                    <img src="/placeholder.svg?height=200&width=300" alt="Grains" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4" />
                    <p className="flex-1">곡류에 많이 들어있는 식이섬유는 소화 과정에서 천천히 분해되어 혈당 상승을 완화시키고 혈당 조절을 도와요. 현미, 보리와 같은 곡물은 GI가 낮기 때문에 GI가 높은 백미, 밀가루 음식보다 느리게 분해되어 혈당 조절에 효과적이에요.</p>
                  </div>
                </li>
                <li>
                  <h3 className="text-xl font-medium">2. 생선</h3>
                  <div className="flex flex-col md:flex-row items-start mt-2">
                    <img src="/placeholder.svg?height=200&width=300" alt="Fish" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4" />
                    <p className="flex-1">단백질은 혈당 상승을 완만하게 하여 혈당 조절에 도움을 주기 때문에, 단백질이 풍부한 음식을 섭취하는 게 좋아요. 지방이 많은 육류보다는 지방이 적은 생선이나 닭가슴살로 단백질을 보충해 주는 걸 추천해요.</p>
                  </div>
                </li>
              </ol>
            </section>
            
            {/* Second content section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">피해야 할 음식</h2>
              <ol className="space-y-4">
                <li>1. 당도가 높은 음식</li>
                <li>2. 가공식품</li>
                <li>3. 과도한 포화지방 주는 음식</li>
                <li>4. 알코올</li>
              </ol>
              <p className="mt-4">혈당 과다이 많이 들어간 음료수나 주스는 반드시 피해주세요. 음료수에는 과당, 포도당, 설탕, 액상 과당 등의 단순당이 함겨있는 경우가 많아요. 특히 과일 주스로 섭취할 경우 빠르게 흡수되며 급격하게 혈당 상승 수 있으니 주의해야 해요.</p>
            </section>
          </div>
          
          {/* Right product section (30% width on large screens) */}
          <div className="lg:w-[30%] bg-gray-50 p-6">
            <div className="sticky top-6">
              <img src="/placeholder.svg?height=300&width=300" alt="Product" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">현대농산 수입 귀리 100g (3kg×2봉), 2개</h3>
              <p className="text-2xl font-bold text-red-600 mb-4">23,300원</p>
              <Link href="#" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                구매하기
              </Link>
            </div>
          </div>
        </div>
        
        {/* Social media sharing buttons */}
        <div className="bg-gray-200 p-4 flex justify-center space-x-4">
          <button className="bg-yellow-400 text-white p-2 rounded-full">
            <span className="sr-only">Share on KakaoTalk</span>
            K
          </button>
          <button className="bg-pink-600 text-white p-2 rounded-full">
            <InstagramIcon className="w-6 h-6" />
            <span className="sr-only">Share on Instagram</span>
          </button>
          <button className="bg-blue-600 text-white p-2 rounded-full">
            <FacebookIcon className="w-6 h-6" />
            <span className="sr-only">Share on Facebook</span>
          </button>
        </div>
      </div>
    </div>
  )
}