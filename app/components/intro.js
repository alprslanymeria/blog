import Link from "next/link";
import Image from "next/image";

export default function Intro() {
    return (
        <div className="flex flex-col items-center p-6 space-y-6 md:space-y-12 lg:space-y-16">
            
            <div className="flex flex-col md:flex-row items-center md:justify-around w-full space-y-6 md:space-y-0 md:space-x-8">
                
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 text-[#398C4D]">Hey, It's İdris Alparslan</h1>
                    <p className="text-gray-700 mb-6 text-center md:text-justify">
                        .NET Developer, reader and writer
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link href="https://www.linkedin.com/in/idrisalparslan/" target="_blank" className="text-blue-600 hover:text-blue-800">
                            <i className="lni lni-linkedin text-2xl"></i>
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-blue-600">
                            <i className="lni lni-x text-2xl"></i>
                        </Link>
                        <Link href="https://github.com/alprslanymeria" target="_blank" className="text-pink-500 hover:text-pink-700">
                            <i className="lni lni-github text-2xl"></i>
                        </Link>
                    </div>
                </div>

                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/images/pp.jpg"
                        alt="Profile Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="text-center md:text-left w-full">
                <h1 className="text-2xl font-bold mb-4">Who am I?</h1>
                <p className="text-gray-700 mb-6 text-justify">
                    Merhaba, ben İdris Alparslan, bilgisayar mühendisi ve tutkulu bir teknoloji meraklısıyım. Bu blogda, yazılım dünyasının derinliklerine inerek 
                    sizlerle bilgi ve deneyimlerimi paylaşmayı amaçlıyorum. Ancak, sadece teknoloji ve yazılım konularıyla sınırlı kalmak istemiyorum. 
                    Hayatın farklı alanlarına olan ilgim beni bu blogu daha geniş bir yelpazede tutmaya yönlendirdi. İşte bu yüzden, burada sadece kod 
                    satırları arasında kaybolmayacak, aynı zamanda kitapların büyülü dünyasına, felsefenin derin sorgulamalarına, izlediğim dizi ve filmlerin
                    büyüleyici atmosferlerine de dalacaksınız.
                </p>
            </div>
        </div>
    );
}
