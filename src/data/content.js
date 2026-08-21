export const CONTACT = {
  whatsappNumber: "97123456789", // Ras Al Khaimah number, no +, no spaces
  phone: "+971 7 234 5678",
  email: "hello@alfanan.com",
  address: "Al Fanan Saloon, Al Nakheel, Ras Al Khaimah, UAE",
  mapEmbed:
    "https://www.google.com/maps?q=Ras%20Al%20Khaimah%20UAE&output=embed",
  mapsLink: "https://maps.google.com/?q=Ras+Al+Khaimah+UAE",
};

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsappNumber}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Visit Us", href: "#location" },
  { label: "Book", href: "#contact" },
];

export const SERVICES = [
  {
    title: "Classic Haircut",
    price: "AED 80",
    duration: "45 min",
    description:
      "Our signature scissor-and-clipper cut, finished with a hot towel and styling. Tailored to your face shape and lifestyle.",
  },
  {
    title: "Beard Trim & Shape",
    price: "AED 60",
    duration: "30 min",
    description:
      "Precision beard sculpting with straight razor detailing. Includes oil treatment to keep your beard fresh and healthy.",
  },
  {
    title: "Hot Towel Shave",
    price: "AED 90",
    duration: "40 min",
    description:
      "The classic barbershop experience. Warm towels, pre-shave oil and a straight-razor finish that leaves skin smooth.",
  },
  {
    title: "Kids Cut",
    price: "AED 50",
    duration: "30 min",
    description:
      "Patient, friendly cuts for the little gentlemen. Toys, treats and a barber chair sized just for them.",
  },
  {
    title: "Hair Coloring",
    price: "AED 180",
    duration: "75 min",
    description:
      "Full coverage or highlights using premium ammonia-free colour for a natural, long-lasting result.",
  },
  {
    title: "Styling & Grooming",
    price: "AED 40",
    duration: "20 min",
    description:
      "Wash, blow-dry and style for any occasion. Products recommended and styled per your hair type.",
  },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
    alt: "Classic barbershop interior",
    tall: true,
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Man getting a fade haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    alt: "Barber at work",
  },
  {
    src: "https://images.unsplash.com/photo-1672642150228-3fcd5826ec26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D",
    alt: "Beard trim with straight razor",
    tall: true,
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661493935776-a76a3e33dddf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D",
    alt: "Barber tools and scissors",
  },
  {
    src: "https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D",
    alt: "Precision clipper work",
  },
  {
    src: "https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmVyc2hvcCUyMGhhaXJ8ZW58MHx8MHx8fDA%3D",
    alt: "Precision clipper work",
  },
  {
    src: "https://images.unsplash.com/photo-1718364673885-efc964e1b2cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyYmVyc2hvcCUyMGhhaXIlMjBkdWJhaXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Precision clipper work",
  },
  {
    src: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmVyc2hvcCUyMGJlYXJkfGVufDB8fDB8fHww",
    alt: "Precision clipper work",
  },
];

export const TESTIMONIALS = [
  {
    name: "Omar Al Farsi",
    role: "Business Owner",
    rating: 5,
    photo: "https://i.pravatar.cc/150?img=12",
    quote:
      "Best fades in Dubai, hands down. Al Fanan Saloon takes his time and the hot towel finish is pure luxury. I won't cut anywhere else.",
  },
  {
    name: "James Whitfield",
    role: "Architect",
    rating: 5,
    photo: "https://i.pravatar.cc/150?img=15",
    quote:
      "Booked a hot towel shave for my brother's wedding — immaculate. The attention to detail and hospitality were world class.",
  },
  {
    name: "Khalid Rahman",
    role: "Fitness Coach",
    rating: 5,
    photo: "https://i.pravatar.cc/150?img=11",
    quote:
      "I've tried every barber on Ras Al Khaimah. This place is different — premium feel, sharp cuts and consistent quality.",
  },
  {
    name: "Marco Deluca",
    role: "Restaurateur",
    rating: 4,
    photo: "https://i.pravatar.cc/150?img=33",
    quote:
      "Great vibe, great music, even better beard trim. Walked in a stranger, walked out a regular. Worth the trip every time.",
  },
];

export const STATS = [
  { value: 7, suffix: "+", label: "Years of Experience", icon: "award" },
  { value: 10, suffix: "K", label: "Happy Clients", icon: "users" },
  { value: 2, suffix: "", label: "Master Barbers", icon: "scissors" },
  { value: 4.9, suffix: "★", label: "Average Rating", icon: "star" },
];

export const OPENING_HOURS = [
  { day: "Monday", hours: "1:00 PM – 11:00 PM" },
   { day: "Tuesdays", hours: "1:00 PM – 11:00 PM" },
    { day: "Wednesday", hours: "1:00 PM – 11:00 PM" },
    { day: "Thursday", hours: "1:00 PM – 11:00 PM" },
    { day: "Friday", hours: "Off" },
  { day: "Saturday", hours: "10:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 11:00 PM" },
];