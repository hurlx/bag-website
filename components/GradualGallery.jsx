import AnimatedTitle from "./AnimatedTitle";

export default function GradualGallery() {
  return (
  <div className="mt-24 select-none"> 
     <h1 dir="rtl" className="mb-10 font-bold">
                <AnimatedTitle
                  title={`كل قطعة... حكايةُ ذوق`}
                  isArabic
                />
              </h1>
    <div className="flex justify-center gap-6 px-6 py-16 sel bg-[#faebf2]">
     
      {/* Image 1 */}
      <div className="w-[400px] h-[550px] translate-y-6">
        <img
          src="/images/1.jpg"
          alt="Bag side view"
          className="w-full h-full object-cover rounded-xl shadow-lg"
          draggable="false"
        />
      </div>

      {/* Image 2 */}
      <div className="sm:hidden md:block max-sm:hidden w-[400px] h-[550px]">
        <img
          src="/images/1.jpg"
          alt="Bag front view"
          className="w-full h-full object-cover rounded-xl shadow-lg"
          draggable="false"
        />
      </div>

      {/* Image 3 */}
      <div className="max-sm:hidden w-[400px] h-[550px] -translate-y-6">
        <img
          src="/images/1.jpg"
          alt="Bag open view"
          className="w-full h-full object-cover rounded-xl shadow-lg"
          draggable="false"
        />
      </div>
    </div>
    </div>
  );
}
