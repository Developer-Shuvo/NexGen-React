import { motion } from "framer-motion";

const Benifits = () => {
  return (
    <div id="benefits" className="mx-auto w-full max-w-[1500px] px-4 md:px-10">
      {/* --------------- Benefits Section ---------------- */}
      <section className="md:mt-[100px] mt-[50px]">
        {/* Head Line */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="items-center justify-center text-center md:text-lg "
        >
          <h3 className="text-[#5E44E6] md:text-xl text-lg font-bold">
            Benefits
          </h3>
          <h1 className="mt-4 text-lg md:text-5xl font-bold text-white leading-tight">
            Why it’s worth growing with Nexgen
          </h1>
        </motion.div>

        {/* ---------- Card part ------------ */}

        {/* 1 st Card row */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="items-center justify-center gap-6 md:flex"
        >
          {/* card-1 */}
          <div className="mt-[22px] flex justify-center">
            <div className="bg-slate-800 h-[180px] w-[240px] md:h-[318px] md:w-[417px] rounded-lg border-[0.4px] border-stone-400 p-6 md:p-8">
              <h3 className="mt-4 md:mt-20 text-sm md:text-2xl font-bold text-green-400">
                HTML & CSS
              </h3>
              <p className="mt-2 md:mt-4 text-xs md:text-base text-stone-200">
                Building the foundation of every website. Clean, semantic, and
                fully responsive layouts.
              </p>
            </div>
          </div>

          {/* card-2 */}
          <div className="mt-[22px] flex justify-center">
            <div className="bg-slate-800 h-[180px] w-[240px] md:h-[318px] md:w-[417px] rounded-lg border-[0.4px] border-stone-400 p-6 md:p-8">
              <h3 className="mt-4 md:mt-20 text-sm md:text-2xl font-bold text-blue-400">
                JavaScript
              </h3>
              <p className="mt-2 md:mt-4 text-xs md:text-base text-stone-200">
                Adding life to static pages. Interactive elements, animations,
                and dynamic UI.
              </p>
            </div>
          </div>

          {/* card-3 */}
          <div className="mt-[22px] flex justify-center ">
            <div className="bg-slate-800 h-[180px] w-[240px] md:h-[318px] md:w-[417px] rounded-lg border-[0.4px] border-stone-400 p-6 md:p-8">
              <h3 className="mt-4 md:mt-20 text-sm md:text-2xl font-bold text-pink-400">
                React.js
              </h3>
              <p className="mt-2 md:mt-4 text-xs md:text-base text-stone-200">
                Component-based architecture for scalable apps. Fast rendering
                with Virtual DOM.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2 nd card row */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="items-center justify-center gap-6 md:flex"
        >
          {/* card-4 */}
          <div className="mt-[20px] flex justify-center">
            <div className="bg-slate-800 h-[180px] w-[240px] md:h-[280px] md:w-[417px] rounded-lg border-[0.4px] border-stone-400 p-5 md:p-8">
              <h3 className="mt-4 md:mt-14 text-sm md:text-2xl font-bold text-yellow-400">
                Tailwind CSS
              </h3>
              <p className="mt-2 text-xs md:text-base text-stone-200">
                Utility-first CSS framework. Rapid styling with responsive
                design built-in.
              </p>
            </div>
          </div>

          {/* card-5 */}
          <div className="mt-[20px] flex justify-center">
            <div className="bg-slate-800 h-[180px] w-[240px] md:h-[280px] md:w-[417px] rounded-lg border-[0.4px] border-stone-400 p-5 md:p-8">
              <h3 className="mt-4 md:mt-14 text-sm md:text-2xl font-bold text-red-400">
                Next.js
              </h3>
              <p className="mt-2 text-xs md:text-base text-stone-200">
                Full-stack React framework. SEO-friendly, fast, and server-side
                rendering.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Benifits;
