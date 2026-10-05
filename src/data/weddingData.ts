import { WeddingEvent, TimelineItem, FamilyMember, GalleryPhoto, WishComment, GiftOption } from '../types';

export const coupleData = {
  brideName: "Heena Parween",
  brideShort: "Heena",
  brideTitle: "Daughter of Mohammed Rafiq & Tehrun nisa",
  brideBio: "A compassionate soul with a deep love for family, kindness, and grace. Heena brings warmth and light into every room she enters.",
  bridePhoto: "/hero-couple.jpg",

  groomName: "Shamshuddin KS(Fayaz)",
  groomShort: "Shamshuddin",
  groomTitle: "Son of Wazeer Pasha & Mubeen Taj",
  groomBio: "A dedicated gentleman whose integrity, faith, and warmth guide every step of his journey.",
  groomPhoto: "/hero-couple.jpg",
  image: "/couple-section.jpg",

  weddingDate: "2026-10-29T17:00:00+05:30",
  dateFormatted: "Thursday, 29 October 2026",
  locationShort: "Koratagere, Tumkur",
  venueName: "Farooqiya Masjid",
  venueAddress: "Koratagere, Tumkur District, Karnataka",

  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahTransliteration: "Bismillahir Rahmanir Raheem",
  bismillahTranslation: "In the name of Allah, the Most Gracious, the Most Merciful",

  islamicGreeting: "Assalamu Alaikum wa Rahmatullahi wa Barakatuh",
  greetingIntro: "All praise is due to Allah, who created us in pairs so that we may find tranquility in one another. With the blessings and prayers of our beloved parents, we joyfully invite you to share in our happiness as we unite in holy matrimony.",

  quranVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
  quranVerseEnglish: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.",
  quranReference: "Surah Ar-Rum [30:21]",

  audioUrl: "/wedding-muhammad-al-muqit.m4a",
  audioTitle: "The Wedding — Muhammad Al Muqit (Nasheed)",
  shareUrl: "https://heena-and-shamshuddin-wedding.invitation/2026",
  whatsappShareText: "Assalamu Alaikum! You are cordially invited to the wedding celebration of Heena & Shamshuddin on Thursday, 29 October 2026. View our digital invitation here: https://heena-and-shamshuddin-wedding.invitation/2026",
};

export const eventsData: WeddingEvent[] = [
  {
    id: "haldi",
    title: "Haldi Ceremony",
    subtitle: "Colors & Traditions",
    date: "Tuesday, 27 October 2026",
    time: "Auspicious Hours",
    location: "Home / Residence",
    address: "Koratagere",
    description: "An auspicious ceremony filled with vibrant turmeric rituals, joy, love, and cherished blessings with family and friends.",
    dressCode: "Yellow / Festive Attire",
    icon: "Sparkles",
    mapsUrl: "https://maps.google.com/?q=Koratagere"
  },
  {
    id: "nikah",
    title: "Mehfil-e-Nikah",
    subtitle: "Sacred Union",
    date: "Thursday, 29 October 2026",
    time: "After Namaz-e-Asar, 5:00 PM onwards",
    location: "Farooqiya Masjid Koratagere",
    address: "Koratagere, Tumkur District",
    description: "The formal Islamic marriage ceremony, uniting our souls in the presence of loved ones and the grace of Allah.",
    dressCode: "Traditional Modest Attire",
    icon: "HeartHandshake",
    mapsUrl: "https://maps.google.com/?q=Farooqiya+Masjid+Koratagere"
  },
  {
    id: "reception",
    title: "Wedding Reception",
    subtitle: "Celebration & Feast",
    date: "Friday, 30 October 2026",
    time: "Lunch 2:30 PM onwards",
    location: "Jamia Shadi Mahal",
    address: "Urdigere Cross, Koratagere, Tumkur (D)",
    description: "Join us for an exquisite luncheon feast and joyous gathering as we celebrate the newlyweds and pray for their happiness.",
    dressCode: "Formal Attire",
    icon: "Sparkles",
    mapsUrl: "https://maps.google.com/?q=Jamia+Shadi+Mahal+Urdigere+Cross+Koratagere+Tumkur"
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "first-meeting",
    year: "First Meeting",
    title: "A Blessed Encounter",
    subtitle: "Guided by Faith",
    description: "Introduced through family blessings and elders, Heena and Shamshuddin discovered an instant connection rooted in shared values, intellectual curiosity, and deep faith.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    icon: "Sparkles"
  },
  {
    id: "engagement",
    year: "The Promise",
    title: "The Promise & Prayer",
    subtitle: "Families United",
    description: "In an intimate and heartfelt gathering with our elders, heartfelt Duas were made, rings were exchanged, and our families officially united in their blessings.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
    icon: "Heart"
  },
  {
    id: "wedding",
    year: "Nikah",
    title: "Our Sacred Union",
    subtitle: "29 October 2026",
    description: "By the grace of Allah, we step into the blessed journey of marriage surrounded by the love, smiles, and warm wishes of our cherished guests.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    icon: "Crown"
  }
];

export const galleryData: GalleryPhoto[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", alt: "Elegant Floral Mandap & Decor", category: "Decor" },
  { id: "g2", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", alt: "Golden Wedding Ring Details", category: "Details" },
  { id: "g3", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", alt: "Serene Garden Pathway", category: "Venue" },
  { id: "g4", src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", alt: "Traditional Calligraphy & Cards", category: "Tradition" },
  { id: "g5", src: "https://images.unsplash.com/photo-1519225336804-91fe1f2c2e07?q=80&w=800&auto=format&fit=crop", alt: "Sunset Over Royal Palace", category: "Venue" },
  { id: "g6", src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop", alt: "Golden Lanterns & Table Setting", category: "Decor" }
];

export const familyData: FamilyMember[] = [
  // Bride Side
  {
    id: "fb-1",
    name: "Mohammed Rafiq & Tehrun nisa",
    relation: "Parents of the Bride",
    role: "Beloved Father & Mother",
    side: "bride",
    blessing: "May Allah fill your home with tranquility, barakah, and unshakeable affection every single day of your lives."
  },
  {
    id: "fb-2",
    name: "Family & Relatives",
    relation: "Family of the Bride",
    role: "Loving Family",
    side: "bride",
    blessing: "So proud of our dear Heena. May your journey with Shamshuddin be filled with laughter, success, and divine favor."
  },
  // Groom Side
  {
    id: "fg-1",
    name: "Wazeer Pasha & Mubeen Taj",
    relation: "Parents of the Groom",
    role: "Beloved Father & Mother",
    side: "groom",
    blessing: "Heena & Shamshuddin, may Allah bless you both and bring you together in all that is good and righteous."
  },
  {
    id: "fg-2",
    name: "Family & Relatives",
    relation: "Family of the Groom",
    role: "Loving Family",
    side: "groom",
    blessing: "Welcome to our family, Heena! We pray for your eternal happiness and peace in this world and the hereafter."
  }
];

export const initialWishesData: WishComment[] = [
  {
    id: "w1",
    name: "Sheikh Abdullah & Family",
    relation: "Close Family Friend",
    message: "MashaAllah TabarakAllah! Dearest Heena and Shamshuddin, may Allah bless your sacred union with infinite barakah, love, and understanding. Can't wait for October 29th! 🤲🕌✨",
    timestamp: "2 hours ago",
    likes: 24
  },
  {
    id: "w2",
    name: "Dr. Bilal & Mariam Al-Khatib",
    relation: "Uncle & Aunt",
    message: "Heartiest congratulations to our beloved niece and nephew! May your home always be a sanctuary of peace, kindness, and gratitude. ❤️🌹",
    timestamp: "5 hours ago",
    likes: 18
  },
  {
    id: "w3",
    name: "Family Friends",
    relation: "Childhood Friends",
    message: "Barakallahu lakuma wa baraka alaikuma wa jama'a baynakuma fi khair! Wishing the most wonderful couple a lifetime of pure bliss! 🥂💐",
    timestamp: "Yesterday",
    likes: 31
  }
];

export const giftOptionsData: GiftOption[] = [
  {
    id: "bank-1",
    title: "Direct Bank Transfer",
    type: "bank",
    accountName: "Heena Parween & Shamshuddin KS",
    accountNumber: "98765432101234",
    ifsc: "SBIN0001234",
    bankName: "State Bank of India"
  },
  {
    id: "upi-1",
    title: "Instant UPI Transfer",
    type: "upi",
    accountName: "Heena & Shamshuddin Wedding Fund",
    upiId: "shamshuddin.fayaz@upi"
  },
  {
    id: "qr-1",
    title: "Scan QR Code",
    type: "qr",
    accountName: "Heena & Shamshuddin Gift Registry",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=shamshuddin.fayaz@upi&pn=Heena%20and%20Shamshuddin%20Wedding&cu=INR"
  }
];
