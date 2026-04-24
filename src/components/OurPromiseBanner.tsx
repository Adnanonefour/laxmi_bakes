import { Truck, Sparkles, Gift, Utensils } from "lucide-react";

const OurPromiseBanner = () => {
  return (
    <div className="bg-secondary/50 border border-primary/10 rounded-3xl p-8 md:p-12 mb-8 shadow-sm backdrop-blur-sm w-full">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-12 text-center italic w-full">
  Our Promise
</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-10 text-center">
        {/* Promise 1 */}
        <div className="flex flex-col items-center gap-4">
          <Truck className="w-10 h-10 text-primary" strokeWidth={1} />
          <div>
            <h3 className="text-sm font-extrabold text-primary tracking-wide uppercase mb-1">ON-TIME DELIVERY</h3>
            <p className="text-xs text-primary/80 font-medium">Flexible slot of choices</p>
          </div>
        </div>
        
        {/* Promise 2 */}
        <div className="flex flex-col items-center gap-4">
          <Sparkles className="w-10 h-10 text-primary" strokeWidth={1} />
          <div>
            <h3 className="text-sm font-extrabold text-primary tracking-wide uppercase mb-1">Customization</h3>
            <p className="text-xs text-primary/80 font-medium">For every occasion</p>
          </div>
        </div>
        
        {/* Promise 3 */}
        <div className="flex flex-col items-center gap-4">
          <Gift className="w-10 h-10 text-primary" strokeWidth={1} />
          <div>
            <h3 className="text-sm font-extrabold text-primary tracking-wide uppercase mb-1">500+ ORDERS</h3>
            <p className="text-xs text-primary/80 font-medium">Delivered across states</p>
          </div>
        </div>
        
        {/* Promise 4 */}
        <div className="flex flex-col items-center gap-4">
          <Utensils className="w-10 h-10 text-primary" strokeWidth={1} />
          <div>
            <h3 className="text-sm font-extrabold text-primary tracking-wide uppercase mb-1">BAKED FRESH</h3>
            <p className="text-xs text-primary/80 font-medium">Made only when you order</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center flex-col items-center gap-2">
        <button className="px-8 py-2.5 bg-white hover:bg-gray-50 text-xs font-black uppercase tracking-widest text-[#df0111] rounded-full shadow-sm shadow-primary/10 transition-all hover:shadow-md cursor-pointer border border-primary/5">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default OurPromiseBanner;
