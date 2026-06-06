export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Andi Pratama",
    role: "Project Manager",
    company: "PT. Maju Bersama",
    content:
      "Reliable, detail-oriented, and able to translate business needs into a functional digital system. The dashboard he built for our team saved us hours every week on reporting.",
    avatar: "AP",
    rating: 5,
  },
  {
    id: "t2",
    name: "Siti Rahayu",
    role: "Head of Administration",
    company: "Kankemenag Kabupaten",
    content:
      "He understood our workflow quickly and digitized our entire certificate process. The system is intuitive, and our staff adapted to it within days. Highly recommended.",
    avatar: "SR",
    rating: 5,
  },
  {
    id: "t3",
    name: "Budi Santoso",
    role: "Business Owner",
    company: "Usaha Mandiri",
    content:
      "What I appreciated most was his ability to communicate technical concepts in plain language. He didn't just build a system — he helped me understand how to use it to grow my business.",
    avatar: "BS",
    rating: 5,
  },
  {
    id: "t4",
    name: "Dewi Kusuma",
    role: "HR Manager",
    company: "Perusahaan Nusantara",
    content:
      "Professional approach, clean code, and excellent documentation. He delivered exactly what we needed — a practical internal tool that the whole team can use without extensive training.",
    avatar: "DK",
    rating: 5,
  },
];
