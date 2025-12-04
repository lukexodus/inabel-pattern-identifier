/**
 * Inabel Pattern Knowledge Base - JavaScript Implementation
 * Translated from Prolog (inabel.ai.pl)
 */

// Pattern database - translated from Prolog facts
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

// Application state
class InabelIdentifier {
    constructor() {
        this.currentPatternIndex = 0;
        this.currentFeatureIndex = 0;
        this.userResponses = {};
        this.candidatePatterns = [...patterns];
        this.currentQuestions = [];
        this.questionCount = 0;
        this.totalQuestions = 0;

        this.initializeElements();
        this.bindEvents();
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
        this.restartBtn = document.getElementById('restart-btn');

        // Content elements
        this.questionText = document.getElementById('question-text');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.resultBox = document.getElementById('result-box');
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startIdentification());
        this.yesBtn.addEventListener('click', () => this.handleAnswer(true));
        this.noBtn.addEventListener('click', () => this.handleAnswer(false));
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
        this.currentPatternIndex = 0;
        this.currentFeatureIndex = 0;
        this.userResponses = {};
        this.candidatePatterns = [...patterns];
        this.questionCount = 0;

        // Collect all unique features for questions
        this.collectUniqueFeatures();

        this.showScreen(this.questionScreen);
        this.askNextQuestion();
    }

    collectUniqueFeatures() {
        // Get all unique features from all patterns
        const allFeatures = new Set();
        patterns.forEach(pattern => {
            pattern.features.forEach(f => allFeatures.add(f));
        });
        this.currentQuestions = Array.from(allFeatures);
        this.totalQuestions = this.currentQuestions.length;
    }

    askNextQuestion() {
        // Check if we can already determine the pattern
        const match = this.findMatchingPattern();
        if (match) {
            this.showResult(match);
            return;
        }

        // Check if all candidates eliminated
        if (this.candidatePatterns.length === 0) {
            this.showNotFound();
            return;
        }

        // Find next relevant question
        const nextFeature = this.findNextRelevantFeature();

        if (!nextFeature) {
            // No more questions, show best match or not found
            if (this.candidatePatterns.length > 0) {
                this.showResult(this.candidatePatterns[0]);
            } else {
                this.showNotFound();
            }
            return;
        }

        this.currentFeature = nextFeature;
        this.questionCount++;

        // Update UI
        this.questionText.textContent = featureQuestions[nextFeature];
        this.updateProgress();
    }

    findNextRelevantFeature() {
        // Find a feature that can help distinguish between remaining candidates
        for (const feature of this.currentQuestions) {
            if (this.userResponses[feature] === undefined) {
                // Check if this feature is relevant to any remaining candidate
                const relevant = this.candidatePatterns.some(p => p.features.includes(feature));
                if (relevant) {
                    return feature;
                }
            }
        }
        return null;
    }

    handleAnswer(isYes) {
        this.userResponses[this.currentFeature] = isYes;

        // Filter candidates based on answer
        if (isYes) {
            // Keep only patterns that have this feature
            this.candidatePatterns = this.candidatePatterns.filter(p =>
                p.features.includes(this.currentFeature)
            );
        } else {
            // Remove patterns that require this feature (only if it's essential)
            // For "no" answers, we're more lenient - pattern can still match if other features match
        }

        this.askNextQuestion();
    }

    findMatchingPattern() {
        // Check if exactly one candidate remains and all its features match user responses
        if (this.candidatePatterns.length === 1) {
            const pattern = this.candidatePatterns[0];
            const allFeaturesMatch = pattern.features.every(f =>
                this.userResponses[f] === true || this.userResponses[f] === undefined
            );
            if (allFeaturesMatch) {
                return pattern;
            }
        }

        // Check for a perfect match
        for (const pattern of this.candidatePatterns) {
            const allMatch = pattern.features.every(f => this.userResponses[f] === true);
            if (allMatch) {
                return pattern;
            }
        }

        return null;
    }

    updateProgress() {
        const answeredCount = Object.keys(this.userResponses).length;
        const percentage = Math.min((answeredCount / this.totalQuestions) * 100, 100);
        this.progressFill.style.width = `${percentage}%`;
        this.progressText.textContent = `Question ${this.questionCount}`;
    }

    showResult(pattern) {
        this.showScreen(this.resultScreen);

        const displayName = pattern.name.replace(/_/g, ' ').replace(/-/g, ' ');

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

        this.resultBox.className = 'result-box woven-card success';
        this.resultBox.innerHTML = `
            <div class="result-header success">
                <i class="bi bi-check-circle-fill"></i>
                <span class="result-title">Pattern Identified!</span>
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
                    ${pattern.features.map(f => `
                        <span class="feature-tag">
                            <i class="bi bi-check2"></i>
                            ${f.replace(/_/g, ' ')}
                        </span>
                    `).join('')}
                </div>
            </div>
            
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

        this.resultBox.className = 'result-box woven-card not-found';
        this.resultBox.innerHTML = `
            <div class="result-header not-found">
                <i class="bi bi-question-circle-fill"></i>
                <span class="result-title">Pattern Not Found</span>
            </div>
            
            <div class="not-found-content">
                <p>
                    <i class="bi bi-exclamation-triangle"></i>
                    Sorry, I could not identify the pattern based on your responses.
                </p>
                <p>The pattern might be a variation or not in the database.</p>
                
                <div class="suggestion">
                    <i class="bi bi-lightbulb-fill"></i>
                    <span>Try again with different observations, or the pattern may be a unique regional variation not yet documented.</span>
                </div>
            </div>
            
            <!-- Show all patterns as reference -->
            <div class="pattern-gallery" style="margin-top: 25px;">
                <div class="gallery-title">
                    <i class="bi bi-collection"></i>
                    <span>Known Patterns in Database</span>
                </div>
                <div class="gallery-grid">
                    ${patterns.slice(0, 6).map(p => `
                        <div class="gallery-item">
                            <div class="pattern-placeholder">
                                <i class="bi ${p.icon}"></i>
                            </div>
                            <span class="placeholder-label">${p.name.replace(/_/g, ' ').replace(/-/g, ' ')}</span>
                        </div>
                    `).join('')}
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
