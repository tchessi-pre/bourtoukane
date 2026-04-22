export type ProductCategory = 'sunglasses' | 'optical' | 'limited'

export type Product = {
  id: string
  name: {
    fr: string
    en: string
  }
  description: {
    fr: string
    en: string
  }
  fabric: {
    fr: string
    en: string
  }
  price: number
  images: string[]
  category: ProductCategory
  material: string
  origin: string
  isNew?: boolean
  isBestseller?: boolean
}

export const products: Product[] = [
  {
    id: "ankara-gold",
    name: {
      fr: "Ankara Or",
      en: "Ankara Gold"
    },
    description: {
      fr: "Ces lunettes emblématiques allient l'audace des motifs Ankara traditionnels à des touches dorées raffinées. Le tissu wax orange et ocre évoque les couchers de soleil africains, tandis que la monture ronde offre un style intemporel.",
      en: "These iconic glasses combine the boldness of traditional Ankara patterns with refined golden touches. The orange and ochre wax fabric evokes African sunsets, while the round frame offers a timeless style."
    },
    fabric: {
      fr: "Ankara du Nigeria",
      en: "Nigerian Ankara"
    },
    price: 89000,
    images: ["/images/products/ankara-gold.jpg", "/images/products/ankara-gold-2.jpg"],
    category: "sunglasses",
    material: "Acétate Premium",
    origin: "Côte d'Ivoire",
    isBestseller: true
  },
  {
    id: "kente-royal",
    name: {
      fr: "Kente Royal",
      en: "Kente Royal"
    },
    description: {
      fr: "Inspirées du prestigieux tissu Kente ghanéen, ces lunettes sont un hommage à la royauté africaine. Les motifs géométriques verts et dorés symbolisent la prospérité et la sagesse.",
      en: "Inspired by the prestigious Ghanaian Kente fabric, these glasses are a tribute to African royalty. The green and gold geometric patterns symbolize prosperity and wisdom."
    },
    fabric: {
      fr: "Kente du Ghana",
      en: "Ghanaian Kente"
    },
    price: 95000,
    images: ["/images/products/kente-royal.jpg", "/images/products/kente-royal-2.jpg"],
    category: "sunglasses",
    material: "Acétate Premium",
    origin: "Côte d'Ivoire",
    isNew: true
  },
  {
    id: "bogolan-earth",
    name: {
      fr: "Bogolan Terre",
      en: "Bogolan Earth"
    },
    description: {
      fr: "Le Bogolan, tissu ancestral du Mali, prend vie sur ces montures ovales. Les teintes terracotta et brunes rappellent les terres rouges d'Afrique, créant une pièce authentique et élégante.",
      en: "Bogolan, the ancestral fabric of Mali, comes to life on these oval frames. The terracotta and brown tones recall the red lands of Africa, creating an authentic and elegant piece."
    },
    fabric: {
      fr: "Bogolan du Mali",
      en: "Malian Bogolan"
    },
    price: 85000,
    images: ["/images/products/bogolan-earth.jpg", "/images/products/bogolan-earth-2.jpg"],
    category: "optical",
    material: "Acétate Premium",
    origin: "Côte d'Ivoire"
  },
  {
    id: "kitenge-sunset",
    name: {
      fr: "Kitenge Coucher de Soleil",
      en: "Kitenge Sunset"
    },
    description: {
      fr: "Ces lunettes cat-eye capturent l'essence vibrante du Kitenge est-africain. Les motifs floraux aux teintes chaudes créent un accessoire audacieux parfait pour affirmer son style.",
      en: "These cat-eye glasses capture the vibrant essence of East African Kitenge. The floral patterns in warm tones create a bold accessory perfect for expressing your style."
    },
    fabric: {
      fr: "Kitenge de Tanzanie",
      en: "Tanzanian Kitenge"
    },
    price: 92000,
    images: ["/images/products/kitenge-sunset.jpg", "/images/products/kitenge-sunset-2.jpg"],
    category: "sunglasses",
    material: "Acétate Premium",
    origin: "Côte d'Ivoire",
    isNew: true
  },
  {
    id: "wax-indigo",
    name: {
      fr: "Wax Indigo",
      en: "Wax Indigo"
    },
    description: {
      fr: "Le bleu indigo, teinte emblématique de l'Afrique de l'Ouest, sublime ces montures rectangulaires. Un choix raffiné pour ceux qui recherchent l'élégance dans la simplicité.",
      en: "The indigo blue, an iconic shade of West Africa, enhances these rectangular frames. A refined choice for those seeking elegance in simplicity."
    },
    fabric: {
      fr: "Wax Hollandais",
      en: "Dutch Wax"
    },
    price: 78000,
    images: ["/images/products/wax-indigo.jpg", "/images/products/wax-indigo-2.jpg"],
    category: "optical",
    material: "Acétate Premium",
    origin: "Côte d'Ivoire",
    isBestseller: true
  },
  {
    id: "adire-ocean",
    name: {
      fr: "Adire Océan",
      en: "Adire Ocean"
    },
    description: {
      fr: "L'Adire, technique de teinture yoruba, inspire ces lunettes rondes aux nuances de bleu profond. Chaque pièce est unique, comme les vagues de l'océan Atlantique.",
      en: "Adire, a Yoruba dyeing technique, inspires these round glasses in deep blue shades. Each piece is unique, like the waves of the Atlantic Ocean."
    },
    fabric: {
      fr: "Adire du Nigeria",
      en: "Nigerian Adire"
    },
    price: 88000,
    images: ["/images/products/adire-ocean.jpg", "/images/products/adire-ocean-2.jpg"],
    category: "limited",
    material: "Acétate Premium",
    origin: "Côte d'Ivoire"
  },
  {
    id: "sahel-gold",
    name: {
      fr: "Sahel Doré",
      en: "Sahel Gold"
    },
    description: {
      fr: "Inspirées des dunes dorées du Sahel, ces lunettes aviateur combinent élégance intemporelle et motifs géométriques traditionnels. Une pièce statement pour les esprits audacieux.",
      en: "Inspired by the golden dunes of the Sahel, these aviator glasses combine timeless elegance with traditional geometric patterns. A statement piece for bold spirits."
    },
    fabric: {
      fr: "Bazin du Sénégal",
      en: "Senegalese Bazin"
    },
    price: 98000,
    images: ["/images/products/sahel-gold.jpg", "/images/products/sahel-gold-2.jpg"],
    category: "limited",
    material: "Acétate & Métal",
    origin: "Côte d'Ivoire",
    isNew: true
  },
  {
    id: "faso-dan-fani",
    name: {
      fr: "Faso Dan Fani",
      en: "Faso Dan Fani"
    },
    description: {
      fr: "Le Faso Dan Fani, tissu emblématique du Burkina Faso, orne ces lunettes carrées modernes. Les bandes colorées traditionnelles créent un accessoire distinctif et culturellement riche.",
      en: "Faso Dan Fani, the emblematic fabric of Burkina Faso, adorns these modern square glasses. The traditional colorful stripes create a distinctive and culturally rich accessory."
    },
    fabric: {
      fr: "Faso Dan Fani",
      en: "Faso Dan Fani"
    },
    price: 82000,
    images: ["/images/products/faso-dan-fani.jpg", "/images/products/faso-dan-fani-2.jpg"],
    category: "optical",
    material: "Acétate Premium",
    origin: "Côte d'Ivoire"
  }
]
