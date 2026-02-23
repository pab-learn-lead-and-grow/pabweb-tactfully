
import HelpSection from "@/components/UniversityResponse/HelpSection";
import UniversityResponseTime from "@/components/UniversityResponse/UniversityResponseTime";
export const metadata = {
  title: "About Radhya Education | Online Education Partner",
  description:
    "About Radhya Education – your trusted education partner helping students choose the right online degrees with expert counselling and university support",
  keywords: [
    "About Radhya",
    "Radhya Education",
    "education consultancy India",
    "online education partner",
    "career counselling platform",
    "university admission guidance",
    "Radhya education services",
  ],
};
export default function about(){
    return(
       <>
        <UniversityResponseTime />
       <HelpSection />
</>
    );
}