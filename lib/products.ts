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
      fr: "Lagos",
      en: "Lagos"
    },
    description: {
      fr: "Ces lunettes emblématiques allient l'audace des motifs Ankara traditionnels à des touches dorées raffinées. Le tissu wax orange et ocre évoque les couchers de soleil africains, tandis que la monture ronde offre un style intemporel.",
      en: "These iconic glasses combine the boldness of traditional Ankara patterns with refined golden touches. The orange and ochre wax fabric evokes African sunsets, while the round frame offers a timeless style."
    },
    fabric: {
      fr: "Ankara du Nigeria",
      en: "Nigerian Ankara"
    },
    price: 25000,
    images: ["/images/products/ankara-gold.jpg", "/images/products/ankara-gold-2.png"],
    category: "sunglasses",
    material: "Acétate Premium",
    origin: "Togo",
    isBestseller: true
  },
  {
    id: "kente-royal",
    name: {
      fr: "Accra",
      en: "Accra"
    },
    description: {
      fr: "Inspirées du prestigieux tissu Kente ghanéen, ces lunettes sont un hommage à la royauté africaine. Les motifs géométriques verts et dorés symbolisent la prospérité et la sagesse.",
      en: "Inspired by the prestigious Ghanaian Kente fabric, these glasses are a tribute to African royalty. The green and gold geometric patterns symbolize prosperity and wisdom."
    },
    fabric: {
      fr: "Kente du Ghana",
      en: "Ghanaian Kente"
    },
    price: 25000,
    images: ["/images/products/kente-royal.jpg", "/images/products/kente-royal-2.png"],
    category: "sunglasses",
    material: "Acétate Premium",
    origin: "Togo",
    isNew: true
  },
  {
    id: "bogolan-earth",
    name: {
      fr: "Bamako",
      en: "Bamako"
    },
    description: {
      fr: "Le Bogolan, tissu ancestral du Mali, prend vie sur ces montures ovales. Les teintes terracotta et brunes rappellent les terres rouges d'Afrique, créant une pièce authentique et élégante.",
      en: "Bogolan, the ancestral fabric of Mali, comes to life on these oval frames. The terracotta and brown tones recall the red lands of Africa, creating an authentic and elegant piece."
    },
    fabric: {
      fr: "Bogolan du Mali",
      en: "Malian Bogolan"
    },
    price: 25000,
    images: ["/images/products/bogolan-earth.jpg", "/images/products/bogolan-earth-2.png"],
    category: "optical",
    material: "Acétate Premium",
    origin: "Togo"
  },
  {
    id: "kitenge-sunset",
    name: {
      fr: "Nairobi",
      en: "Nairobi"
    },
    description: {
      fr: "Ces lunettes cat-eye capturent l'essence vibrante du Kitenge est-africain. Les motifs floraux aux teintes chaudes créent un accessoire audacieux parfait pour affirmer son style.",
      en: "These cat-eye glasses capture the vibrant essence of East African Kitenge. The floral patterns in warm tones create a bold accessory perfect for expressing your style."
    },
    fabric: {
      fr: "Kitenge de Tanzanie",
      en: "Tanzanian Kitenge"
    },
    price: 25000,
    images: ["/images/products/kitenge-sunset.jpg", "/images/products/kitenge-sunset-2.png"],
    category: "sunglasses",
    material: "Acétate Premium",
    origin: "Togo",
    isNew: true
  },
  {
    id: "wax-indigo",
    name: {
      fr: "Dakar",
      en: "Dakar"
    },
    description: {
      fr: "Le bleu indigo, teinte emblématique de l'Afrique de l'Ouest, sublime ces montures rectangulaires. Un choix raffiné pour ceux qui recherchent l'élégance dans la simplicité.",
      en: "The indigo blue, an iconic shade of West Africa, enhances these rectangular frames. A refined choice for those seeking elegance in simplicity."
    },
    fabric: {
      fr: "Wax Hollandais",
      en: "Dutch Wax"
    },
    price: 25000,
    images: ["/images/products/wax-indigo.jpg", "/images/products/wax-indigo-2.png"],
    category: "optical",
    material: "Acétate Premium",
    origin: "Togo",
    isBestseller: true
  },
  {
    id: "adire-ocean",
    name: {
      fr: "Zanzibar",
      en: "Zanzibar"
    },
    description: {
      fr: "L'Adire, technique de teinture yoruba, inspire ces lunettes rondes aux nuances de bleu profond. Chaque pièce est unique, comme les vagues de l'océan Atlantique.",
      en: "Adire, a Yoruba dyeing technique, inspires these round glasses in deep blue shades. Each piece is unique, like the waves of the Atlantic Ocean."
    },
    fabric: {
      fr: "Adire du Nigeria",
      en: "Nigerian Adire"
    },
    price: 25000,
    images: ["/images/products/adire-ocean.png", "/images/products/adire-ocean-2.png"],
    category: "limited",
    material: "Acétate Premium",
    origin: "Togo"
  },
  {
    id: "sahel-gold",
    name: {
      fr: "Marrakech",
      en: "Marrakech"
    },
    description: {
      fr: "Inspirées des dunes dorées du Sahel, ces lunettes aviateur combinent élégance intemporelle et motifs géométriques traditionnels. Une pièce statement pour les esprits audacieux.",
      en: "Inspired by the golden dunes of the Sahel, these aviator glasses combine timeless elegance with traditional geometric patterns. A statement piece for bold spirits."
    },
    fabric: {
      fr: "Bazin du Sénégal",
      en: "Senegalese Bazin"
    },
    price: 25000,
    images: ["/images/products/sahel-gold.jpg", "/images/products/sahel-gold-2.png"],
    category: "limited",
    material: "Acétate & Métal",
    origin: "Togo",
    isNew: true
  },
  {
    id: "faso-dan-fani",
    name: {
      fr: "Ouagadougou",
      en: "Ouagadougou"
    },
    description: {
      fr: "Le Faso Dan Fani, tissu emblématique du Burkina Faso, orne ces lunettes carrées modernes. Les bandes colorées traditionnelles créent un accessoire distinctif et culturellement riche.",
      en: "Faso Dan Fani, the emblematic fabric of Burkina Faso, adorns these modern square glasses. The traditional colorful stripes create a distinctive and culturally rich accessory."
    },
    fabric: {
      fr: "Faso Dan Fani",
      en: "Faso Dan Fani"
    },
    price: 25000,
    images: ["/images/products/faso-dan-fani.jpg", "/images/products/faso-dan-fani-2.png"],
    category: "optical",
    material: "Acétate Premium",
    origin: "Togo"
  },
  {
    id: "abidjan",
    name: {
      fr: "Abidjan",
      en: "Abidjan"
    },
    description: {
      fr: "Inspirées de l'énergie d'Abidjan, ces lunettes associent une silhouette moderne à un tissu wax vibrant. Un modèle élégant, pensé pour le quotidien comme pour les grandes occasions.",
      en: "Inspired by Abidjan’s energy, these glasses combine a modern silhouette with vibrant wax fabric. An elegant model designed for everyday wear and special occasions."
    },
    fabric: {
      fr: "Wax de Côte d’Ivoire",
      en: "Ivorian Wax"
    },
    price: 25000,
    images: ["/images/products/abidjan.png", "/images/products/abidjan-2.png"],
    category: "sunglasses",
    material: "Acétate Premium",
    origin: "Côte d'Ivoire",
    isNew: true
  },
  {
    id: "dapaong",
    name: {
      fr: "Lomé",
      en: "Lome"
    },
    description: {
      fr: "Une monture inspirée de Lomé, aux lignes sobres et affirmées. Le tissu wax rehaussé de touches vives crée une pièce élégante et facile à porter.",
      en: "A frame inspired by Lomé, with clean and confident lines. Wax fabric with vibrant accents makes it elegant and easy to wear."
    },
    fabric: {
      fr: "Chutes de wax récupérées",
      en: "Upcycled wax scraps"
    },
    price: 25000,
    images: ["/images/products/lome.jpeg", "/images/products/lome-2.png"],
    category: "sunglasses",
    material: "Acétate Premium",
    origin: "Togo",
    isNew: true
  },
  {
    id: "niamey",
    name: {
      fr: "Niamey",
      en: "Niamey"
    },
    description: {
      fr: "Inspirées de Niamey, ces lunettes associent une silhouette légère à un motif wax bleu/jaune très graphique. Un modèle lumineux et moderne.",
      en: "Inspired by Niamey, these glasses combine a light silhouette with a bold blue/yellow wax pattern. A bright, modern model."
    },
    fabric: {
      fr: "Chutes de wax récupérées",
      en: "Upcycled wax scraps"
    },
    price: 25000,
    images: ["/images/products/niamey.jpeg", "/images/products/niamey-2.png"],
    category: "optical",
    material: "Acétate & Métal",
    origin: "Niger",
    isNew: true
  },
  {
    id: "tombouctou",
    name: {
      fr: "Tombouctou",
      en: "Timbuktu"
    },
    description: {
      fr: "Une monture statement inspirée de Tombouctou : couleurs chaudes, motif riche et présence forte. Pensée pour ceux qui aiment se démarquer.",
      en: "A statement frame inspired by Timbuktu: warm colors, rich pattern, strong presence. Made for those who like to stand out."
    },
    fabric: {
      fr: "Chutes de wax récupérées",
      en: "Upcycled wax scraps"
    },
    price: 25000,
    images: ["/images/products/tonbouktou.jpeg", "/images/products/tonbouktou-2.png"],
    category: "limited",
    material: "Acétate Premium",
    origin: "Mali",
    isNew: true
  },
  {
    id: "addis-abeba",
    name: {
      fr: "Addis-Abeba",
      en: "Addis Ababa"
    },
    description: {
      fr: "Inspirée d'Addis-Abeba, cette monture se distingue par son habillage textile gris, noir et ocre. Son design fin et affirmé en fait une pièce élégante, idéale au quotidien comme avec des verres correcteurs.",
      en: "Inspired by Addis Ababa, this frame stands out with its gray, black, and ochre textile wrap. Its refined yet confident design makes it an elegant piece for everyday wear, including with prescription lenses."
    },
    fabric: {
      fr: "Chutes de wax récupérées",
      en: "Upcycled wax scraps"
    },
    price: 25000,
    images: ["/images/products/addis-abeba.png", "/images/products/addis-abeba-2.png"],
    category: "optical",
    material: "Acétate Premium",
    origin: "Ethiopie",
    isNew: true
  },
  {
    id: "casablanca",
    name: {
      fr: "Casablanca",
      en: "Casablanca"
    },
    description: {
      fr: "Inspirée de Casablanca, cette monture rectangulaire bleu profond associe lignes nettes et habillage textile graphique. Une pièce élégante et structurée, pensée pour sublimer le regard au quotidien.",
      en: "Inspired by Casablanca, this deep blue rectangular frame combines clean lines with a graphic textile wrap. An elegant, structured piece designed to elevate everyday style."
    },
    fabric: {
      fr: "Chutes de wax récupérées",
      en: "Upcycled wax scraps"
    },
    price: 25000,
    images: ["/images/products/casablanca.jpeg", "/images/products/casablanca-2.jpeg"],
    category: "optical",
    material: "Acétate Premium",
    origin: "Maroc",
    isNew: true
  },
  {
    id: "alger",
    name: {
      fr: "Alger",
      en: "Algiers"
    },
    description: {
      fr: "Inspirée d'Alger, cette monture aux accents noir, gris et cuivre affirme un style contemporain. Sa silhouette rectangulaire lui donne une présence forte, idéale pour une allure audacieuse.",
      en: "Inspired by Algiers, this frame with black, gray, and copper accents delivers a contemporary look. Its rectangular silhouette gives it strong character, ideal for a bold style."
    },
    fabric: {
      fr: "Chutes de wax récupérées",
      en: "Upcycled wax scraps"
    },
    price: 25000,
    images: ["/images/products/alger.jpeg", "/images/products/alger-2.jpeg"],
    category: "limited",
    material: "Acétate Premium",
    origin: "Algérie",
    isNew: true
  },
  {
    id: "douala",
    name: {
      fr: "Douala",
      en: "Douala"
    },
    description: {
      fr: "Inspirée de Douala, cette monture ronde bleue joue sur des nuances lumineuses et une forme douce. Un modèle expressif, facile à porter, qui mêle modernité et identité textile.",
      en: "Inspired by Douala, this blue round frame plays with luminous shades and a soft shape. An expressive, easy-to-wear model that blends modernity with textile identity."
    },
    fabric: {
      fr: "Chutes de wax récupérées",
      en: "Upcycled wax scraps"
    },
    price: 25000,
    images: ["/images/products/douala.png", "/images/products/douala-2.png"],
    category: "optical",
    material: "Acétate Premium",
    origin: "Cameroun",
    isNew: true
  }
]
