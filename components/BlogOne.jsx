"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Page() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full flex flex-col items-center bg-white">
      {/* Hero Section */}
      <div
        className="w-full h-[55vh] md:h-[55vh] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/Professional.png')" }}
      >
        <h1 className="text-4xl md:text-5xl font-[Inter] font-extrabold text-white drop-shadow-lg">
          Lorem Ipsum
        </h1>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[8%_68%_24%] gap-10 mt-10 px-4">
        {/* LEFT SOCIAL ICONS */}
        <div className="bg-white shadow rounded p-2 flex flex-col items-center gap-2 w-fit h-fit">
          {[
            { name: "facebook", src: "/fb.png" },
            { name: "twitter", src: "/x.png" },
            { name: "linkedin", src: "/ln.png" },
            { name: "youtube", src: "/yt.png" },
            { name: "instagram", src: "/ig.png" },
          ].map((s, i) => (
            <a
              key={i}
              href={`https://${s}.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={s.src}
                alt="social"
                width={28}
                height={28}
                className="rounded shadow"
              />
            </a>
          ))}
        </div>

        {/* CENTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white  shadow p-8 md:p-10 flex flex-col gap-6 -mt-35"
        >
          <p className="text-gray-700 leading-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently.
          </p>

          <p className="text-gray-700 leading-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently.
          </p>

          <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/professional.png"
              alt="placeholder"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <p className="text-gray-700 leading-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently.
          </p>

          <button
            className="w-fit text-white px-6 py-2 rounded-lg text-sm transition bg-linear-to-r from-[#4D964F] to-[#193019] border-[0px] border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200"
          >
            CTA
          </button>

          <p className="text-sm text-gray-500">© Lorem Ipsum is simply dummy</p>
        </motion.div>

        {/* RIGHT SIDE BLOG LINKS */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow p-6"
            variants={cardVariants}
          >
            <h3 className="font-semibold text-gray-800 mb-4">More Blogs</h3>
            <div className="flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <motion.a
                  href="#"
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="w-14 h-14 bg-gray-300 rounded overflow-hidden">
                    <Image
                      src="/professional.png"
                      alt="placeholder"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 text-sm">
                      Blog Title {i + 1}
                    </p>
                    <p className="text-xs text-gray-500">Short description</p>
                    <button className="mt-2 text-white bg-[#064E92] text-xs p-2 px-4 flex items-center gap-1 rounded-lg">
                      View
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </motion.a>
              ))}
            </div>
            <button className="w-full text-white mt-4 px-6 py-2 rounded-lg text-sm bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200 flex items-center justify-center gap-4 transition">
              View More
              <ChevronRight size={22} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow p-6"
          >
            <h3 className="font-semibold text-gray-800 mb-4">Quick CTA</h3>
            <button className="w-full text-white mt-4 px-6 py-2 rounded-lg text-sm bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200 flex items-center justify-center" >
              CTA
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
