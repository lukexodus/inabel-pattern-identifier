/**
 * Inabel Pattern Knowledge Base - JavaScript Implementation
 * Advanced Version with:
 * - Weighted features for better discrimination
 * - Confidence scoring instead of binary elimination
 * - Fuzzy matching for partial matches
 * - Information gain-based question ordering
 * - "I'm not sure" option for uncertain responses
 */

// ========================================
// CONFIGURATION
// ========================================

const CONFIG = {
    // Confidence threshold (0.0 - 1.0) - patterns above this are considered matches
    // Lower = more lenient, Higher = more strict
    CONFIDENCE_THRESHOLD: 0.70,  // 70% confidence required
    
    // Maximum questions to ask before showing result
    MAX_QUESTIONS: 15,
    
    // Penalty multiplier for "no" answers (relative to "yes" bonus)
    NO_ANSWER_PENALTY: 0.7,
    
    // Bonus multiplier for "unsure" answers
    UNSURE_ANSWER_BONUS: 0.2,
};

// ========================================
// PATTERN DATABASE
// ========================================
const patterns = [
    {
        name: 'binakul',
        features: ['geometric', 'dizzying', 'repeating', 'optical_illusion'],
        meaning: 'Wards off and distracts evil spirits',
        icon: 'bi-box',
        placeholderPattern: 'binakul-pattern',
        images: [
            'images/binakul-1.png',
            'images/binakul-2.jpg',
            'images/binakul-3.jpg'
        ]
    },
    {
        name: 'sinan_sabong',
        features: ['floral', 'stylized_figure'],
        meaning: 'Represents flowers, a common regional motif',
        icon: 'bi-flower1',
        placeholderPattern: 'sinan-sabong-pattern',
        images: [
            'images/sinan-sabong-1.jpg',
            'images/sinan-sabong-2.jpg',
            'images/sinan-sabong-3.jpg'
        ]
    },
    {
        name: 'kusikos',
        features: ['spiral', 'geometric', 'repeating'],
        meaning: 'Represents whirlpools or strong winds',
        icon: 'bi-hurricane',
        placeholderPattern: 'kusikos-pattern',
        images: [
            'images/kusikos-1.jpg',
            'images/kusikos-2.jpg',
            'images/kusikos-3.webp'
        ]
    },
    {
        name: 'inuritan',
        features: ['geometric', 'linear', 'striped_pattern'],
        meaning: 'Represents simple geometric lines or stripes',
        icon: 'bi-list',
        placeholderPattern: 'inuritan-pattern',
        images: [
            'images/inuritan-1.png'
        ]
    },
    {
        name: 'mata_mata',
        features: ['geometric', 'small_repeating', 'diamond_shape'],
        meaning: 'Small, diamond-shaped pattern representing rice grains, symbolizing abundance.',
        icon: 'bi-diamond',
        placeholderPattern: 'balitok-pattern',
        images: [
            'images/mata-mata-1.jpg',
            'images/mata-mata-2.jpg',
            'images/mata-mata-3.jpg'
        ]
    },
    {
        name: 'sinan_tao',
        features: ['anthropomorphic', 'stylized_figure', 'linear_repeat'],
        meaning: 'Represents human figures or ancestors; symbolizes community and lineage protection',
        icon: 'bi-person',
        placeholderPattern: 'sinan-tao-pattern',
        images: [
            'images/sinan-tao-1.jpg',
            'images/sinan-tao-2.jpg',
            'images/sinan-tao-3.jpg'
        ]
    },
    {
        name: 'sinan_kabalyo',
        features: ['figurative_animal', 'stylized_figure', 'repeating', 'geometric'],
        meaning: 'Represents the horse (kabalyo), symbolizing travel, movement, or power.',
        icon: 'bi-truck',
        placeholderPattern: 'sinan-kabalyo-pattern',
        images: [
            'images/sinan-kabalyo-1.jpg',
            'images/sinan-kabalyo-2.jpg',
            'images/sinan-kabalyo-3.jpg'
        ]
    },
    {
        name: 'binetwagan',
        features: ['geometric', 'textured_surface', 'three_dimensional', 'figured_motifs', 'thicker_weave'],
        meaning: 'Multi-heddle weaving technique producing three-dimensional patterns with raised surface designs. Creates thick, textured fabrics with geometric shapes and figured motifs.',
        icon: 'bi-layers',
        placeholderPattern: 'binetwagan-pattern',
        images: [
            'images/binetwagan-1.jpg',
            'images/binetwagan-2.jpg',
            'images/binetwagan-3.jpg'
        ],
        references: [
            { text: 'Rags2Riches Partner Artisan Communities', url: 'https://r2r.ph/pages/rags2riches-partner-artisan-communities' },
            { text: 'Bahay Ugnayan - Binetwagan (Ilocano)', url: 'https://www.bahayugnayan.org/functional-items/binetwagan-(ilocano)-(a)' },
            { text: 'Traditional Filipino Weaving Techniques', url: 'https://pinasculture.com/traditional-filipino-weaving-techniques/' },
            { text: 'Wikipedia - Inabel', url: 'https://en.wikipedia.org/wiki/Inabel' }
        ]
    },
    {
        name: 'sinukitan',
        features: ['brocade_effect', 'intricate_detail', 'floating_motifs', 'supplementary_threads', 'fine_craftsmanship', 'decorative_focus'],
        meaning: 'Sophisticated discontinuous supplementary weft technique creating brocade-like raised patterns. Represents the highest level of Ilocano weaving mastery, though now considered a threatened art form.',
        icon: 'bi-stars',
        placeholderPattern: 'sinukitan-pattern',
        images: [
            'images/sinukitan-1.jpg',
            'images/sinukitan-2.jpg',
            'images/sinukitan-3.jpg'
        ],
        references: [
            { text: 'Wikipedia - Inabel', url: 'https://en.wikipedia.org/wiki/Inabel' },
            { text: 'National Museum Bohol - Sinukitan Technique', url: 'https://www.facebook.com/NMPBohol/posts/1606943599468905/' },
            { text: 'NCCA - Inabel Weaving Techniques', url: 'https://www.facebook.com/NCCAOfficial/posts/684382907066315/' },
            { text: 'Atlantis Press - Inabel Research', url: 'https://www.atlantis-press.com/article/125968194.pdf' }
        ]
    },
    {
        name: 'kundiman',
        features: ['white_base', 'flower_petals', 'multi_heddle', 'delicate_patterns', 'textured_weave'],
        meaning: 'Plain white multi-heddle woven blanket (tinumbalitian) with delicate flower petal patterns. Holds deep cultural and religious significance, traditionally given as meaningful gifts during baptisms, birthdays, and weddings, and used as sacred liturgical textiles during Lenten season and Holy Week.',
        icon: 'bi-flower2',
        placeholderPattern: 'kundiman-pattern',
        images: [
            'images/kundiman-1.jpg',
            'images/kundiman-2.jpg',
            'images/kundiman-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Kundiman', url: 'https://www.bahayugnayan.org/functional-items/kundiman-(a)' },
            { text: 'Hibla Philippines - Binakol of Northern Philippines', url: 'https://hiblaphilippines.com/blog/simple-yet-complicated-the-binakol-of-the-northern-philippines/' },
            { text: 'Barong World - Handwoven Inabel', url: 'https://barongworld.com/products/handwoven-black-inabel-ilocos-weave-modern-filipiniana-dress-elsie-de01' }
        ]
    },
    {
        name: 'dinapat',
        features: ['full_coverage', 'brocade_effect', 'figured_motifs', 'stars_diamonds'],
        meaning: 'Means "full" or "total" - seamless design where motifs continuously occupy the entire fabric surface without spaces. Uses brocade weaving with continuous supplementary weft technique, creating embroidery-like patterns that float across the cloth. Features flora, leaves, human figures, animals, stars, and diamond motifs including Diamante Ti Reyna (Queen\'s Diamonds).',
        icon: 'bi-grid-fill',
        placeholderPattern: 'dinapat-pattern',
        images: [
            'images/dinapat-1.jpg',
            'images/dinapat-2.jpg',
            'images/dinapat-3.jpg'
        ],
        references: [
            { text: 'National Museum Ilocos - Dinapat', url: 'https://www.facebook.com/NMPIlocos/photos/843360242809559/' },
            { text: 'CORE Academic Papers - Inabel Study', url: 'https://core.ac.uk/download/pdf/335033269.pdf' },
            { text: 'Bahay Ugnayan - Dinapat', url: 'https://www.bahayugnayan.org/functional-items/dinapat-(b)' },
            { text: 'Math in Philippine Art - Diamante Ti Reyna', url: 'https://mathinphilippineart.wordpress.com/patterns-by-region-2/patterns-by-region/tingguians/dinapat-diamante-ti-reyna/' },
            { text: 'Wikipedia - Inabel', url: 'https://en.wikipedia.org/wiki/Inabel' }
        ]
    },
    {
        name: 'banderado',
        features: ['striped_pattern', 'minimal_colors', 'white_base', 'plain_weave', 'simple_aesthetic'],
        meaning: 'Means "banded" - features plain striped designs with one to three color bands on white background, reflecting the sensibility and simplicity of northern Ilocano culture. Also called kantarinis or tinartaros, these striped blankets are popular among fisherfolk and rice cultivators, traditionally brought out during festive events and harvest celebrations.',
        icon: 'bi-justify',
        placeholderPattern: 'banderado-pattern',
        images: [
            'images/banderado-1.jpg',
            'images/banderado-2.jpg',
            'images/banderado-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Kantarinis (Banderado)', url: 'https://www.bahayugnayan.org/functional-items/kantarinis-(banderado)' },
            { text: 'Kultura Filipino - Woven Wonders', url: 'https://www.kulturafilipino.com/blogs/news/woven-wonders-1' },
            { text: 'Narra Studio - Inabel of Ilocos', url: 'https://narrastudio.com/blogs/journal/the-inabel-of-ilocos-woven-cloth-for-everyday' },
            { text: 'STII DOST - Inabel Weaving', url: 'https://www.stii.dost.gov.ph/1808-inabel-the-timeless-art-of-weaving-stories-in-threads' },
            { text: 'Wikipedia - Inabel', url: 'https://en.wikipedia.org/wiki/Inabel' }
        ]
    },
    {
        name: 'kinkinelleng',
        features: ['geometric', 'grid_pattern', 'repeating', 'optical_illusion', 'minimal_colors', 'landscape_inspired'],
        meaning: 'Means "parcels of farmlands" - a binakol pattern featuring geometric design resembling agricultural land divided into plots or fields. Created using binakol technique with two heddles, producing optical illusion effects through precise arrangement of straight lines. Reflects the deep connection between Ilocano weavers and their agricultural landscape.',
        icon: 'bi-grid-3x3-gap',
        placeholderPattern: 'kinkinelleng-pattern',
        images: [
            'images/kinkinelleng-1.jpg',
            'images/kinkinelleng-2.jpg',
            'images/kinkinelleng-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Binakol (Kinkinelleng) B', url: 'https://www.bahayugnayan.org/functional-items/binakol-(kinkinelleng)-(b)' },
            { text: 'Bahay Ugnayan - Binakol (Kinkinelleng) A', url: 'https://www.bahayugnayan.org/functional-items/binakol-(kinkinelleng)-(a)' },
            { text: 'Hibla Philippines - Binakol of Northern Philippines', url: 'https://hiblaphilippines.com/blog/simple-yet-complicated-the-binakol-of-the-northern-philippines/' },
            { text: 'Wikipedia - Inabel', url: 'https://en.wikipedia.org/wiki/Inabel' },
            { text: 'Wikipedia - Binakael', url: 'https://en.wikipedia.org/wiki/Binakael' }
        ]
    },
    {
        name: 'gikgik',
        features: ['two_headed_bird', 'brocade_effect', 'supplementary_threads', 'symmetrical', 'figured_motifs'],
        meaning: 'Depicts a two-headed, two-legged bird from Ilocos and Cordillera folklore. Created using pinilian/sinukitan brocade weaving with supplementary weft insertion to create raised decorative motifs. Represents nature-inspired symbolism rooted in local mythology. Associated with weavers from Nagbacalan, Paoay in Ilocos Norte.',
        icon: 'bi-piggy-bank',
        placeholderPattern: 'gikgik-pattern',
        images: [
            'images/gikgik-1.jpg',
            'images/gikgik-2.jpg',
            'images/gikgik-3.jpg'
        ],
        references: [
            { text: 'Museo Ilocos Norte - Sina-Gikgik Design', url: 'https://www.facebook.com/MuseoIlocosNorte/photos/2071899466235157/' },
            { text: 'Tribune - Charito Cariaga and the Call of the Loom', url: 'https://tribune.net.ph/2023/09/12/charito-cariaga-and-the-call-of-the-loom' },
            { text: 'National Museum Ilocos - Gikgik and Nature Motifs', url: 'https://www.facebook.com/NMPIlocos/posts/874611356351114/' },
            { text: 'National Museum Bohol - Sinukitan Technique', url: 'https://www.facebook.com/NMPBohol/posts/1606943599468905/' },
            { text: 'Visit Ilocos Norte - Abel Iloko', url: 'http://visitilocosnorte.blogspot.com/2007/11/abel-iloko.html' }
        ]
    },
    {
        name: 'pabo',
        features: ['peacock_motif', 'ornate_tail', 'brocade_effect', 'supplementary_threads', 'figured_motifs', 'decorative_focus'],
        meaning: 'Depicts a peacock (pabo) design with elaborate tail feathers. Created using inkaot/insukit (inlaid) technique, a variation of continuous supplementary weft weaving. Represents nature-inspired beauty and ornamentation. Weavers use design sticks (serpit or pili) to select specific warp yarns for creating the decorative peacock motif.',
        icon: 'bi-stars',
        placeholderPattern: 'pabo-pattern',
        images: [
            'images/pabo-1.jpg',
            'images/pabo-2.jpg',
            'images/pabo-3.jpg'
        ],
        references: [
            { text: 'Balay ni Atong - Pabo or Peacock Design', url: 'https://www.facebook.com/balayniatong/posts/2137721289823892/' },
            { text: 'Hibla Philippines Blog', url: 'https://hiblaphilippines.com/author/bjeg2000/' },
            { text: 'Wikipedia - Inabel', url: 'https://en.wikipedia.org/wiki/Inabel' },
            { text: 'Bahay Ugnayan - Pinilian Techniques', url: 'https://www.bahayugnayan.org/functional-items/pinilian-(sinan-misammi)' },
            { text: 'Art Post Asia - Inabel Philippine Textile', url: 'https://artpostasia.com/products/inabel-philippine-textile-from-ilocos-region' }
        ]
    },
    {
        name: 'sinan_bulong',
        features: ['palm_leaf', 'fern_like', 'full_coverage', 'organic_shapes', 'figured_motifs'],
        meaning: 'Depicts palm leaf or fern-like designs (sinan-pakko). Created using dinapat technique where decorative patterns densely cover the entire fabric surface. Represents nature-inspired motifs drawn from tropical vegetation and plant life familiar to Ilocano weavers. Demonstrates the diversity of traditional inabel artistry alongside kinurkuros and pinilian techniques.',
        icon: 'bi-tree',
        placeholderPattern: 'sinan-bulong-pattern',
        images: [
            'images/sinan-bulong-1.jpg',
            'images/sinan-bulong-2.jpg',
            'images/sinan-bulong-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Dinapat (Sinan-Bulong/Sinan-Pakko)', url: 'https://www.bahayugnayan.org/functional-items/dinapat-(sinan-bulong%2Fsinan-pakko)' },
            { text: 'Redondo Reports - Ilocos Norte Heritage Products', url: 'https://redondoreports.wordpress.com/2014/10/17/ilocos-norte-targets-to-be-a-go-to-destination-for-heritage-products/' },
            { text: 'Tour Ilocos Norte - Inabel Techniques', url: 'https://www.facebook.com/TourIlocosNorte/posts/479890807502489/' },
            { text: 'Wikipedia - Inabel', url: 'https://en.wikipedia.org/wiki/Inabel' },
            { text: 'Narra Studio - Inabel of Ilocos', url: 'https://narrastudio.com/blogs/journal/the-inabel-of-ilocos-woven-cloth-for-everyday' }
        ]
    },
    {
        name: 'kinarkarayan_ken_sinan_ugsa',
        features: ['zigzag_river', 'water_motif', 'figurative_animal', 'brocade_effect', 'supplementary_threads', 'figured_motifs', 'repeating'],
        meaning: 'Kinarkarayan means "river patterns" depicting zigzag designs representing flowing rivers and volcanic water formations from Northern Philippines topography. Sinan-ugsa means "deer-like" featuring deer motifs. Both created using pinilian brocade technique with pre-selected warp threads. Reflects the deep connection between Ilocano and Itneg weavers and their natural environment, depicting local fauna and geographical features.',
        icon: 'bi-water',
        placeholderPattern: 'kinarkarayan-pattern',
        images: [
            'images/kinarkarayan-1.jpg',
            'images/kinarkarayan-2.jpg',
            'images/kinarkarayan-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Pinilian (Kinarkarayan ken Sinan-Tokak) A', url: 'https://www.bahayugnayan.org/functional-items/pinilian-(kinarkarayan-ken-sinan-tokak)-(a)' },
            { text: 'Bahay Ugnayan - Pinilian (Kinarkarayan ken Sinan-Tokak) B', url: 'https://www.bahayugnayan.org/functional-items/pinilian-(kinarkarayan-ken-sinan-tokak)-(b)' },
            { text: 'Elle Karayan - Volcanic Rivers Pattern', url: 'https://www.facebook.com/ellekarayan/posts/1263312719143351/' },
            { text: 'Barong Warehouse - Abra Weaving Tradition', url: 'https://barongwarehouse.ph/blogs/barong-bridges/textile-art-and-the-abra-weaving-tradition-christy-mabute' },
            { text: 'Wikipedia - Inabel', url: 'https://en.wikipedia.org/wiki/Inabel' }
        ]
    },
    {
        name: 'kinarkarayan_ken_sinan_tokak',
        features: ['zigzag_river', 'water_motif', 'figurative_animal', 'full_coverage', 'brocade_effect', 'supplementary_threads', 'figured_motifs', 'repeating'],
        meaning: 'Kinarkarayan depicts zigzag river patterns while sinan-tokak means "frog-like" showing geometric frogs and riverine creatures (turtles, crabs). Created using pinilian brocade technique in indigo, red, and turquoise blue on white. Classified as dinapat with full surface coverage. Reflects topography and fauna near riverine areas where Itneg, Tinguian, and Ilocano communities weave. Frogs are considered auspicious creatures with ritual significance.',
        icon: 'bi-water',
        placeholderPattern: 'kinarkarayan-tokak-pattern',
        images: [
            'images/kinarkarayan-tokak-1.jpg',
            'images/kinarkarayan-tokak-2.jpg',
            'images/kinarkarayan-tokak-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Pinilian (Kinarkarayan ken Sinan-Tokak) A', url: 'https://www.bahayugnayan.org/functional-items/pinilian-(kinarkarayan-ken-sinan-tokak)-(a)' },
            { text: 'Bahay Ugnayan - Pinilian (Kinarkarayan ken Sinan-Tokak) B', url: 'https://www.bahayugnayan.org/functional-items/pinilian-(kinarkarayan-ken-sinan-tokak)-(b)' },
            { text: 'Flickr - Inabel Textiles', url: 'https://www.flickr.com/photos/elmer_ng_pateros/1487066581' },
            { text: 'Barong World - Ilocos Weaving Traditions', url: 'https://barongworld.com/blogs/barong-world-blogs/exploring-the-rich-tapestry-of-inabel-a-deep-dive-into-ilocos-weaving-traditions' },
            { text: 'Bahay Ugnayan', url: 'https://bahayugnayan.gov.ph' }
        ]
    },
    {
        name: 'kinarkarayan_ken_dyamante_ti_reyna',
        features: ['diamond_shape', 'zigzag_river', 'water_motif', 'symmetrical', 'full_coverage', 'small_repeating', 'geometric', 'intricate_detail', 'brocade_effect'],
        meaning: 'Kinarkarayan represents geometric river forms while dyamante ti reyna means "diamond of the queens" - small triangles and diamonds arranged to resemble multi-faceted gemstone surfaces. Created using dinapat style brocade weave with full surface coverage. Exhibits reflective symmetry with mirrored upper/lower and left/right parts. Represents technical mastery and is one of the most intricate takes on traditional diamond patterns. Commonly used in blankets, expressing weavers\' proximity to large riverine structures.',
        icon: 'bi-gem',
        placeholderPattern: 'dyamante-reyna-pattern',
        images: [
            'images/dyamante-reyna-1.jpg',
            'images/dyamante-reyna-2.jpg',
            'images/dyamante-reyna-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Dinapat (Kinarkarayan ken Dyamante Ti Reyna)', url: 'https://www.bahayugnayan.org/functional-items/dinapat-(kinarkarayan-ken-dyamante-ti-reyna)' },
            { text: 'Math in Philippine Art - Diamante Ti Reyna', url: 'https://mathinphilippineart.wordpress.com/patterns-by-region-2/patterns-by-region/tingguians/dinapat-diamante-ti-reyna/' },
            { text: 'Agyaman - Diamante Ti Reyna', url: 'https://www.facebook.com/agyamanpiecesofhome/posts/135616658326363/' },
            { text: 'Terno Shop - Red Inabel Terno', url: 'https://ternoshop.com/products/red_inabelterno' },
            { text: 'Hand Woven Beauty - Diamante Ti Reyna Dress', url: 'https://www.facebook.com/HandWovenBeauty/posts/716300657183080/' }
        ]
    },
    {
        name: 'sinan_paddak_ti_pusa',
        features: ['geometric', 'symmetrical', 'repeating', 'optical_illusion', 'minimal_colors'],
        meaning: 'Means "cat\'s paw print" - a binakol pattern beginning with four small cross-like boxes at the center, framed by elongated rectangles. Larger squares surround the central cross echoing cat paw pads, creating a geometric representation of a feline footprint. Created using binakol weaving technique with graduated rectangles varying in size and orientation. One of the less common binakol motifs but culturally significant among Abra, Tinguian, Itneg, and Ilocano weaving communities.',
        icon: 'bi-pentagon',
        placeholderPattern: 'paddak-pusa-pattern',
        images: [
            'images/paddak-pusa-1.jpg',
            'images/paddak-pusa-2.jpg',
            'images/paddak-pusa-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Binakol (Sinan-Paddak Ti Pusa)', url: 'https://www.bahayugnayan.org/functional-items/binakol-(sinan-paddak-ti-pusa)' },
            { text: 'Barong Warehouse - Abra Weaving Tradition', url: 'https://barongwarehouse.ph/blogs/barong-bridges/textile-art-and-the-abra-weaving-tradition-christy-mabute' },
            { text: 'Hibla Philippines - Binakol of Northern Philippines', url: 'https://hiblaphilippines.com/blog/simple-yet-complicated-the-binakol-of-the-northern-philippines/' },
            { text: 'Rags2Riches - Partner Communities', url: 'https://r2r.ph/pages/rags2riches-partner-artisan-communities' },
            { text: 'Bahay Ugnayan - Binakol Variations', url: 'https://www.bahayugnayan.org/functional-items/binakol-(kusikus,-sinan-paddak-ti-pusa-&-kinurkuros)' }
        ]
    },
    {
        name: 'kinurkuros',
        features: ['geometric', 'repeating', 'plain_weave', 'simple_aesthetic', 'minimal_colors'],
        meaning: 'Features plaid or checkered designs created using plain weave (liniston) technique. Represents one of the simpler inabel weaving styles, making it practical for everyday use. The term also refers to cross patterns appearing in some binakol variants. Showcases the versatility of traditional Ilocano weaving through straightforward checkered designs, demonstrating how weavers create both intricate optical patterns and practical plaid textiles using traditional methods.',
        icon: 'bi-grid',
        placeholderPattern: 'kinurkuros-pattern',
        images: [
            'images/kinurkuros-1.jpg',
            'images/kinurkuros-2.jpg',
            'images/kinurkuros-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Kinurkuros', url: 'https://www.bahayugnayan.org/functional-items/kinurkuros' },
            { text: 'Bahay Ugnayan - Binakol Variations', url: 'https://www.bahayugnayan.org/functional-items/binakol-(kusikus,-sinan-paddak-ti-pusa-&-kinurkuros)' },
            { text: 'Narra Studio - Inabel of Ilocos', url: 'https://narrastudio.com/blogs/journal/the-inabel-of-ilocos-woven-cloth-for-everyday' },
            { text: 'STII DOST - Inabel Weaving', url: 'https://www.stii.dost.gov.ph/1808-inabel-the-timeless-art-of-weaving-stories-in-threads' },
            { text: 'Barong World - Inabel Traditions', url: 'https://barongworld.com/blogs/barong-world-blogs/exploring-the-rich-tapestry-of-inabel-a-deep-dive-into-ilocos-weaving-traditions' }
        ]
    },
    {
        name: 'rinitrit_concha_concha',
        features: ['geometric', 'repeating', 'optical_illusion', 'minimal_colors', 'grid_pattern'],
        meaning: 'Means "tattered capiz window design" - inspired by traditional Filipino capiz shell windows. Features geometric designs resembling capiz (windowpane oyster shells) arranged in window frames. Typically woven as three-paneled textile using double-toned basket weave with capiz window-inspired designs set against plaid background. Uses two-colored weft yarns (commonly black/white, green/white, blue/white, or red/white) creating alternating negative and positive geometric squares and rectangles producing optical illusion effects. Panels traditionally joined using decorative embroidery stitching like kuko-palay (fingernails and rice stalks) or sinan-ramay (finger-like) joinery.',
        icon: 'bi-window',
        placeholderPattern: 'rinitrit-concha-pattern',
        images: [
            'images/rinitrit-concha-1.jpg',
            'images/rinitrit-concha-2.jpg',
            'images/rinitrit-concha-3.jpg'
        ],
        references: [
            { text: 'Bahay Ugnayan - Binakol (Rinitrit Concha-Concha)', url: 'https://www.bahayugnayan.org/functional-items/binakol-(rinitrit-concha-concha)-(a)' },
            { text: 'Narra Studio - Inabel of Ilocos', url: 'https://narrastudio.com/blogs/journal/the-inabel-of-ilocos-woven-cloth-for-everyday' },
            { text: 'Alia Onabay - Inabel Weaving of Ilocos', url: 'https://aliaonabay.wordpress.com/2020/12/04/the-inabel-weaving-of-ilocos/' },
            { text: 'Barong World - Inabel Traditions', url: 'https://barongworld.com/blogs/barong-world-blogs/exploring-the-rich-tapestry-of-inabel-a-deep-dive-into-ilocos-weaving-traditions' },
            { text: 'Wikipedia - Inabel', url: 'https://en.wikipedia.org/wiki/Inabel' }
        ]
    },
];

// ========================================
// FEATURE QUESTIONS
// ========================================

// Feature questions - consolidated to remove redundancy
const featureQuestions = {
    // General Features
    geometric: 'Does the pattern have geometric (abstract) shapes?',
    repeating: 'Does the pattern repeat throughout the fabric?',
    small_repeating: 'Are the repeating elements small in scale?',
    linear: 'Are the lines mostly straight and parallel?',
    linear_repeat: 'Does the pattern consist of a continuous repetition of elements along a single line or axis?',

    // Visual Effects
    dizzying: 'Does it create a dizzying or disorienting effect?',
    optical_illusion: 'Does it create an optical illusion effect? (e.g., 3D cube-like effect)',
    three_dimensional: 'Do the patterns appear three-dimensional or embossed?',
    
    // Texture & Construction
    textured_surface: 'Does the fabric have a raised or textured surface?',
    thicker_weave: 'Is the weave notably thick and tight?',
    textured_weave: 'Does it have a textured surface from the weaving technique?',

    // Brocade & Embroidery Effects
    brocade_effect: 'Does the pattern have a brocade or embroidered appearance with raised decorative elements?',
    floating_motifs: 'Do design elements appear to "float" on the fabric surface?',
    supplementary_threads: 'Are there extra decorative threads beyond the base weave?',
    intricate_detail: 'Does the design show very intricate and detailed work?',
    fine_craftsmanship: 'Does it display exceptional weaving skill and precision?',
    decorative_focus: 'Is the emphasis on decorative rather than structural patterns?',

    // Coverage & Density
    full_coverage: 'Does the pattern densely cover the entire fabric surface with minimal blank spaces?',

    // Color & Base
    white_base: 'Is the base color predominantly white or cream?',
    minimal_colors: 'Are only one to three colors used in the design?',

    // Stripes & Bands
    striped_pattern: 'Does the design feature parallel stripes or bands?',

    // Geometric Patterns
    grid_pattern: 'Does the pattern show grid-like, box-like, or tessellated arrangements?',
    landscape_inspired: 'Does it appear inspired by land formations or natural landscapes?',

    // Bird Motifs
    two_headed_bird: 'Does the design feature a two-headed bird motif?',
    symmetrical: 'Is the design symmetrical with mirrored elements?',
    peacock_motif: 'Does the design feature a peacock or bird with elaborate tail feathers?',
    ornate_tail: 'Are there fan-like or elaborate tail feather patterns?',

    // Plant Motifs
    palm_leaf: 'Does the pattern feature palm leaf or frond shapes?',
    fern_like: 'Are there fern-like or feathery plant motifs?',
    organic_shapes: 'Are there organic, natural curved forms?',

    // Water Motifs
    zigzag_river: 'Does the pattern feature zigzag or flowing river-like designs?',
    water_motif: 'Are there water or river patterns present?',

    // Simplicity & Style
    simple_aesthetic: 'Is the overall design simple and uncluttered?',
    plain_weave: 'Is it created using basic plain weave technique (simple over-under)?',

    // Shapes & Patterns
    floral: 'Does the pattern contain floral or actual flower designs?',
    flower_petals: 'Are flower petal motifs present in the design?',
    spiral: 'Does the pattern contain spiral or swirl shapes?',
    diamond_shape: 'Are diamond shapes a key component of the design?',
    delicate_patterns: 'Are the patterns delicate and refined rather than bold?',
    stars_diamonds: 'Are star or diamond shapes present in the motifs?',

    // Figurative Elements
    figured_motifs: 'Does it feature representational motifs like human figures, animals, plants, or objects?',
    anthropomorphic: 'Does the pattern feature human figures or stylized people?',
    stylized_figure: 'Does the pattern contain highly stylized figures (human, animal, or object)?',
    figurative_animal: 'Does the pattern primarily depict an animal figure (like a deer, frog, horse, or bird)?',

    // Weaving Technique
    multi_heddle: 'Does it appear to have multiple layers or complex interlacing (not simple over-under)?',
};

// ========================================
// FEATURE WEIGHTS
// ========================================

// Feature weights - higher means more distinctive/important
const featureWeights = {
    // Highly distinctive features
    dizzying: 5.0,
    optical_illusion: 4.5,
    two_headed_bird: 5.0,
    peacock_motif: 5.0,
    white_base: 3.0,
    three_dimensional: 4.0,
    
    // Moderately distinctive features
    brocade_effect: 3.5,
    textured_surface: 3.5,
    full_coverage: 3.5,
    zigzag_river: 4.0,
    palm_leaf: 4.0,
    fern_like: 4.0,
    ornate_tail: 4.5,
    
    // Common but useful features
    geometric: 2.0,
    repeating: 2.0,
    symmetrical: 2.5,
    figured_motifs: 3.0,
    supplementary_threads: 3.0,
    diamond_shape: 3.0,
    spiral: 3.5,
    floral: 3.5,
    
    // Less distinctive features
    striped_pattern: 2.5,
    minimal_colors: 2.0,
    simple_aesthetic: 2.0,
    plain_weave: 2.5,
    linear: 2.0,
    
    // Default weight
    default: 2.0
};

// ========================================
// INABEL IDENTIFIER CLASS
// ========================================

// Application state
class InabelIdentifier {
    constructor() {
        this.currentPatternIndex = 0;
        this.currentFeatureIndex = 0;
        this.userResponses = {}; // stores: true, false, or 'unsure'
        this.patternScores = {}; // stores confidence scores for each pattern
        this.currentQuestions = [];
        this.questionCount = 0;
        this.maxQuestions = CONFIG.MAX_QUESTIONS;
        this.confidenceThreshold = CONFIG.CONFIDENCE_THRESHOLD;
        
        this.initializeElements();
        this.bindEvents();
        this.initializePatternScores();
    }

    initializeElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.questionScreen = document.getElementById('question-screen');
        this.resultScreen = document.getElementById('result-screen');

        // Buttons
        this.startBtn = document.getElementById('start-btn');
        this.yesBtn = document.getElementById('yes-btn');
        this.noBtn = document.getElementById('no-btn');
        this.unsureBtn = document.getElementById('unsure-btn');
        this.restartBtn = document.getElementById('restart-btn');

        // Content elements
        this.questionText = document.getElementById('question-text');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.resultBox = document.getElementById('result-box');
    }
    
    initializePatternScores() {
        // Initialize all patterns with neutral score (0.5 = 50% confidence)
        patterns.forEach(pattern => {
            this.patternScores[pattern.name] = 0.5;
        });
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startIdentification());
        this.yesBtn.addEventListener('click', () => this.handleAnswer(true));
        this.noBtn.addEventListener('click', () => this.handleAnswer(false));
        this.unsureBtn.addEventListener('click', () => this.handleAnswer('unsure'));
        this.restartBtn.addEventListener('click', () => this.restart());
    }

    showScreen(screen) {
        // Hide all screens
        this.welcomeScreen.classList.remove('active');
        this.questionScreen.classList.remove('active');
        this.resultScreen.classList.remove('active');

        // Show target screen
        screen.classList.add('active');
    }

    startIdentification() {
        // Reset state
        this.userResponses = {};
        this.questionCount = 0;
        this.askedFeatures = new Set();
        
        // Initialize pattern scores
        this.initializePatternScores();

        // Collect all unique features and sort by information gain
        this.collectAndSortFeatures();

        this.showScreen(this.questionScreen);
        this.askNextQuestion();
    }
    
    collectAndSortFeatures() {
        // Get all unique features from all patterns
        const allFeatures = new Set();
        patterns.forEach(pattern => {
            pattern.features.forEach(f => allFeatures.add(f));
        });
        
        // Sort features by information gain (most discriminating first)
        this.currentQuestions = Array.from(allFeatures).sort((a, b) => {
            const gainA = this.calculateInformationGain(a);
            const gainB = this.calculateInformationGain(b);
            return gainB - gainA; // Higher gain first
        });
    }
    
    calculateInformationGain(feature) {
        // Calculate how well this feature discriminates between patterns
        const weight = featureWeights[feature] || featureWeights.default;
        
        // Count how many patterns have this feature
        let hasFeature = 0;
        let noFeature = 0;
        
        patterns.forEach(pattern => {
            if (pattern.features.includes(feature)) {
                hasFeature++;
            } else {
                noFeature++;
            }
        });
        
        // Features that split patterns more evenly have higher information gain
        // Features that are very rare or very common have lower gain
        const total = patterns.length;
        const ratio = Math.min(hasFeature, noFeature) / total;
        
        // Combine with feature weight
        return ratio * weight;
    }

    askNextQuestion() {
        // Update pattern scores based on current responses
        this.updatePatternScores();
        
        // Check if we have a confident match
        const topMatch = this.getTopMatch();
        if (topMatch.confidence >= this.confidenceThreshold || this.questionCount >= this.maxQuestions) {
            this.showResult(topMatch);
            return;
        }

        // Find next most informative question
        const nextFeature = this.findMostInformativeFeature();

        if (!nextFeature) {
            // No more questions, show best match
            this.showResult(topMatch);
            return;
        }

        this.currentFeature = nextFeature;
        this.askedFeatures.add(nextFeature);
        this.questionCount++;

        // Update UI
        this.questionText.textContent = featureQuestions[nextFeature];
        this.updateProgress();
    }
    
    findMostInformativeFeature() {
        // Find the feature that will best discriminate between current top candidates
        let bestFeature = null;
        let bestScore = -1;
        
        for (const feature of this.currentQuestions) {
            if (this.askedFeatures.has(feature)) continue;
            
            // Calculate how much this question would help
            const score = this.calculateFeatureDiscriminationScore(feature);
            
            if (score > bestScore) {
                bestScore = score;
                bestFeature = feature;
            }
        }
        
        return bestFeature;
    }
    
    calculateFeatureDiscriminationScore(feature) {
        // Get current top candidates (patterns with score > 0.3)
        const topCandidates = patterns.filter(p => this.patternScores[p.name] > 0.3);
        
        if (topCandidates.length <= 1) return 0;
        
        // Count how many top candidates have vs don't have this feature
        let hasCount = 0;
        let noCount = 0;
        
        topCandidates.forEach(pattern => {
            if (pattern.features.includes(feature)) {
                hasCount++;
            } else {
                noCount++;
            }
        });
        
        // Best questions split candidates roughly evenly
        const balance = Math.min(hasCount, noCount) / topCandidates.length;
        const weight = featureWeights[feature] || featureWeights.default;
        
        return balance * weight;
    }
    
    updatePatternScores() {
        patterns.forEach(pattern => {
            let score = 0;
            let totalWeight = 0;
            
            pattern.features.forEach(feature => {
                const weight = featureWeights[feature] || featureWeights.default;
                const userResponse = this.userResponses[feature];
                
                if (userResponse === true) {
                    // User confirmed this feature - boost score
                    score += weight;
                } else if (userResponse === false) {
                    // User denied this feature - penalize score
                    score -= weight * CONFIG.NO_ANSWER_PENALTY;
                } else if (userResponse === 'unsure') {
                    // User unsure - mild boost (pattern is still possible)
                    score += weight * CONFIG.UNSURE_ANSWER_BONUS;
                }
                
                totalWeight += weight;
            });
            
            // Also consider unanswered features (patterns with more matching features score higher)
            let answeredCount = 0;
            pattern.features.forEach(feature => {
                if (this.userResponses[feature] !== undefined) {
                    answeredCount++;
                }
            });
            
            // Normalize score to 0-1 range
            if (totalWeight > 0) {
                // Convert to confidence percentage
                const normalizedScore = (score + totalWeight) / (2 * totalWeight);
                this.patternScores[pattern.name] = Math.max(0, Math.min(1, normalizedScore));
            }
        });
    }
    
    getTopMatch() {
        // Get the pattern with highest confidence score
        let topPattern = null;
        let topScore = -1;
        
        patterns.forEach(pattern => {
            const score = this.patternScores[pattern.name];
            if (score > topScore) {
                topScore = score;
                topPattern = pattern;
            }
        });
        
        return {
            pattern: topPattern,
            confidence: topScore
        };
    }
    
    getTopMatches(count = 3) {
        // Get top N matches sorted by confidence
        return patterns
            .map(pattern => ({
                pattern: pattern,
                confidence: this.patternScores[pattern.name]
            }))
            .sort((a, b) => b.confidence - a.confidence)
            .slice(0, count);
    }

    handleAnswer(answer) {
        this.userResponses[this.currentFeature] = answer;
        this.askNextQuestion();
    }

    updateProgress() {
        const percentage = Math.min((this.questionCount / this.maxQuestions) * 100, 100);
        this.progressFill.style.width = `${percentage}%`;
        this.progressText.innerHTML = `<i class="bi bi-chat-dots"></i> Question ${this.questionCount} of ${this.maxQuestions}`;
    }
    
    showResult(matchData) {
        this.showScreen(this.resultScreen);
        
        const pattern = matchData.pattern;
        const confidence = matchData.confidence;
        const topMatches = this.getTopMatches(3);

        const displayName = pattern.name.replace(/_/g, ' ').replace(/-/g, ' ');
        const confidencePercent = Math.round(confidence * 100);
        
        // Determine confidence level
        let confidenceClass = 'high';
        let confidenceIcon = 'bi-check-circle-fill';
        let confidenceLabel = 'High Confidence';
        
        if (confidence < 0.5) {
            confidenceClass = 'low';
            confidenceIcon = 'bi-question-circle-fill';
            confidenceLabel = 'Low Confidence';
        } else if (confidence < 0.7) {
            confidenceClass = 'medium';
            confidenceIcon = 'bi-dash-circle-fill';
            confidenceLabel = 'Medium Confidence';
        }

        // Generate gallery items
        const galleryItems = pattern.images.map((imgSrc, index) => `
            <div class="gallery-item">
                <img 
                    src="${imgSrc}" 
                    alt="${displayName} sample ${index + 1}"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                >
                <div class="pattern-placeholder ${pattern.placeholderPattern}" style="display: none;">
                    <i class="bi ${pattern.icon}"></i>
                </div>
                <span class="placeholder-label">Sample ${index + 1}</span>
            </div>
        `).join('');

        // Generate references section if available
        const referencesSection = pattern.references ? `
            <details class="references-section">
                <summary class="references-header">
                    <i class="bi bi-book"></i>
                    <span>References & Sources</span>
                    <i class="bi bi-chevron-down toggle-icon"></i>
                </summary>
                <div class="references-content">
                    <ul class="references-list">
                        ${pattern.references.map((ref, index) => `
                            <li class="reference-item">
                                <span class="reference-number">[${index + 1}]</span>
                                <a href="${ref.url}" target="_blank" rel="noopener noreferrer">
                                    ${ref.text}
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </details>
        ` : '';
        
        // Show alternative matches if confidence is not very high
        const alternativeMatches = confidence < 0.8 ? `
            <div class="alternative-matches">
                <div class="alternatives-header">
                    <i class="bi bi-list-check"></i>
                    <span>Other Possible Matches</span>
                </div>
                <div class="alternatives-list">
                    ${topMatches.slice(1).map(match => {
                        const altName = match.pattern.name.replace(/_/g, ' ').replace(/-/g, ' ');
                        const altPercent = Math.round(match.confidence * 100);
                        return `
                            <div class="alternative-item">
                                <div class="alternative-info">
                                    <i class="bi ${match.pattern.icon}"></i>
                                    <span class="alternative-name">${altName}</span>
                                </div>
                                <div class="alternative-confidence">
                                    <div class="confidence-bar-small">
                                        <div class="confidence-fill-small" style="width: ${altPercent}%"></div>
                                    </div>
                                    <span class="confidence-percent-small">${altPercent}%</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        ` : '';

        this.resultBox.className = `result-box woven-card success confidence-${confidenceClass}`;
        this.resultBox.innerHTML = `
            <div class="result-header success">
                <i class="${confidenceIcon}"></i>
                <span class="result-title">Pattern Identified!</span>
            </div>
            
            <div class="confidence-display">
                <div class="confidence-label">${confidenceLabel}</div>
                <div class="confidence-bar-large">
                    <div class="confidence-fill-large confidence-${confidenceClass}" style="width: ${confidencePercent}%"></div>
                </div>
                <div class="confidence-percent">${confidencePercent}% Match</div>
            </div>
            
            <div class="pattern-name">${displayName}</div>
            
            <!-- Pattern Image Gallery -->
            <div class="pattern-gallery">
                <div class="gallery-title">
                    <i class="bi bi-images"></i>
                    <span>Pattern Examples</span>
                </div>
                <div class="gallery-grid">
                    ${galleryItems}
                </div>
            </div>
            
            <!-- Features Section -->
            <div class="features-section">
                <div class="features-label">
                    <i class="bi bi-tag-fill"></i>
                    <span>Pattern Features</span>
                </div>
                <div class="features-list">
                    ${pattern.features.map(f => {
                        const userAnswer = this.userResponses[f];
                        let icon = 'bi-check2';
                        let tagClass = 'feature-tag';
                        
                        if (userAnswer === true) {
                            icon = 'bi-check-circle-fill';
                            tagClass = 'feature-tag confirmed';
                        } else if (userAnswer === false) {
                            icon = 'bi-question-circle';
                            tagClass = 'feature-tag unconfirmed';
                        } else if (userAnswer === 'unsure') {
                            icon = 'bi-dash-circle';
                            tagClass = 'feature-tag partial';
                        }
                        
                        return `
                            <span class="${tagClass}">
                                <i class="bi ${icon}"></i>
                                ${f.replace(/_/g, ' ')}
                            </span>
                        `;
                    }).join('')}
                </div>
            </div>
            
            ${alternativeMatches}
            
            <!-- Cultural Meaning Section -->
            <div class="meaning-section">
                <div class="meaning-label">
                    <i class="bi bi-bookmark-star-fill"></i>
                    <span>Cultural Significance</span>
                </div>
                <p class="meaning-text">${pattern.meaning}</p>
            </div>
            
            <!-- References Section -->
            ${referencesSection}
        `;
    }

    showNotFound() {
        this.showScreen(this.resultScreen);
        
        const topMatches = this.getTopMatches(3);

        this.resultBox.className = 'result-box woven-card not-found';
        this.resultBox.innerHTML = `
            <div class="result-header not-found">
                <i class="bi bi-question-circle-fill"></i>
                <span class="result-title">Pattern Not Found</span>
            </div>
            
            <div class="not-found-content">
                <p>
                    <i class="bi bi-exclamation-triangle"></i>
                    Sorry, I could not identify the pattern with high confidence based on your responses.
                </p>
                <p>However, here are the closest matches:</p>
                
                <div class="alternative-matches">
                    <div class="alternatives-list">
                        ${topMatches.map(match => {
                            const altName = match.pattern.name.replace(/_/g, ' ').replace(/-/g, ' ');
                            const altPercent = Math.round(match.confidence * 100);
                            return `
                                <div class="alternative-item">
                                    <div class="alternative-info">
                                        <i class="bi ${match.pattern.icon}"></i>
                                        <span class="alternative-name">${altName}</span>
                                    </div>
                                    <div class="alternative-confidence">
                                        <div class="confidence-bar-small">
                                            <div class="confidence-fill-small" style="width: ${altPercent}%"></div>
                                        </div>
                                        <span class="confidence-percent-small">${altPercent}%</span>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="suggestion">
                    <i class="bi bi-lightbulb-fill"></i>
                    <span>Try again with different observations, or the pattern may be a unique regional variation not yet documented.</span>
                </div>
            </div>
        `;
    }

    restart() {
        this.showScreen(this.welcomeScreen);
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new InabelIdentifier();
});
