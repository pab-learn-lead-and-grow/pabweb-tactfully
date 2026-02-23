"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CounsellingForm from "@/components/Radhya/CounsellingForm";

export default function KnowledgeCorner() {
  const [universitieslist, setUniversitiesList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchUniversities = async () => {
      const { data } = await supabase
        .from("universitieslist")
        .select("*")
        .order("name");

      setUniversitiesList(data || []);
    };

    fetchUniversities();
  }, []);

  return (
    <section className="py-12 lg:py-24 mt-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#3C087E] mb-4">
        Knowledge Corner
      </h2>

      <p className="text-sm md:text-base text-center text-black max-w-4xl mx-auto justify-center mb-12">
        Stay updated with the latest industry insights and trends. Stay updated with the latest industry insights and trends. Stay updated with the latest industry insights and trends. Stay updated with the latest industry insights and trends. Stay updated with the latest industry insights and trends. Stay updated with the latest industry insights and trends.Stay updated with the latest industry insights and trends. 
    </p>

        {/* List */}
        <div className="mt-10 space-y-2">
          {universitieslist.map((uni, index) => (
            <div
              key={uni.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm px-4 py-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-6">
                <span className="text-black font-medium text-xs sm:text-base w-6">
                  {index + 1}
                </span>
                <span className="font-medium text-xs sm:text-base text-black">
                  {uni.name}
                </span>
              </div>

               <button
                onClick={() => setShowForm(true)}
                className="bg-[#FFD66C] shrink-0 hover:bg-yellow-600 text-black text-xs sm:text-base font-medium px-2 lg:px-6 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        {showForm && (
          <CounsellingForm onClose={() => setShowForm(false)} />
        )}

      </div>
    </section>
  );
}