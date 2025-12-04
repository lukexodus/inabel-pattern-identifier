% Inabel Pattern Knowledge Base (KB)
%
% This database contains various traditional Inabel patterns from the Ilocos region,
% categorized by their visual features and cultural meanings.
%
% Pattern facts: pattern(Name, [Features], Meaning, Icon, PlaceholderPattern, Images, References).

pattern(binakul, 
    [geometric, dizzying, repeating, optical_illusion],
    'Wards off and distracts evil spirits',
    'bi-box',
    'binakul-pattern',
    ['images/binakul-1.png', 'images/binakul-2.jpg', 'images/binakul-3.jpg'],
    []).

pattern(sinan_sabong,
    [floral, stylized_figure],
    'Represents flowers, a common regional motif',
    'bi-flower1',
    'sinan-sabong-pattern',
    ['images/sinan-sabong-1.jpg', 'images/sinan-sabong-2.jpg', 'images/sinan-sabong-3.jpg'],
    []).

pattern(kusikos,
    [spiral, geometric, repeating],
    'Represents whirlpools or strong winds',
    'bi-hurricane',
    'kusikos-pattern',
    ['images/kusikos-1.jpg', 'images/kusikos-2.jpg', 'images/kusikos-3.webp'],
    []).

pattern(inuritan,
    [geometric, linear, striped_pattern],
    'Represents simple geometric lines or stripes',
    'bi-list',
    'inuritan-pattern',
    ['images/inuritan-1.png'],
    []).

pattern(mata_mata,
    [geometric, small_repeating, diamond_shape],
    'Small, diamond-shaped pattern representing rice grains, symbolizing abundance.',
    'bi-diamond',
    'balitok-pattern',
    ['images/mata-mata-1.jpg', 'images/mata-mata-2.jpg', 'images/mata-mata-3.jpg'],
    []).

pattern(sinan_tao,
    [anthropomorphic, stylized_figure, linear_repeat],
    'Represents human figures or ancestors; symbolizes community and lineage protection',
    'bi-person',
    'sinan-tao-pattern',
    ['images/sinan-tao-1.jpg', 'images/sinan-tao-2.jpg', 'images/sinan-tao-3.jpg'],
    []).

pattern(sinan_kabalyo,
    [figurative_animal, stylized_figure, repeating, geometric],
    'Represents the horse (kabalyo), symbolizing travel, movement, or power.',
    'bi-truck',
    'sinan-kabalyo-pattern',
    ['images/sinan-kabalyo-1.jpg', 'images/sinan-kabalyo-2.jpg', 'images/sinan-kabalyo-3.jpg'],
    []).

pattern(binetwagan,
    [geometric, textured_surface, three_dimensional, figured_motifs, thicker_weave],
    'Multi-heddle weaving technique producing three-dimensional patterns with raised surface designs. Creates thick, textured fabrics with geometric shapes and figured motifs.',
    'bi-layers',
    'binetwagan-pattern',
    ['images/binetwagan-1.jpg', 'images/binetwagan-2.jpg'],
    [
        ref('Rags2Riches Partner Artisan Communities', 'https://r2r.ph/pages/rags2riches-partner-artisan-communities'),
        ref('Bahay Ugnayan - Binetwagan (Ilocano)', 'https://www.bahayugnayan.org/functional-items/binetwagan-(ilocano)-(a)'),
        ref('Traditional Filipino Weaving Techniques', 'https://pinasculture.com/traditional-filipino-weaving-techniques/'),
        ref('Wikipedia - Inabel', 'https://en.wikipedia.org/wiki/Inabel')
    ]).

pattern(sinukitan,
    [brocade_effect, intricate_detail, floating_motifs, supplementary_threads, fine_craftsmanship, decorative_focus],
    'Sophisticated discontinuous supplementary weft technique creating brocade-like raised patterns. Represents the highest level of Ilocano weaving mastery, though now considered a threatened art form.',
    'bi-stars',
    'sinukitan-pattern',
    ['images/sinukitan-1.jpg'],
    [
        ref('Wikipedia - Inabel', 'https://en.wikipedia.org/wiki/Inabel'),
        ref('National Museum Bohol - Sinukitan Technique', 'https://www.facebook.com/NMPBohol/posts/1606943599468905/'),
        ref('NCCA - Inabel Weaving Techniques', 'https://www.facebook.com/NCCAOfficial/posts/684382907066315/'),
        ref('Atlantis Press - Inabel Research', 'https://www.atlantis-press.com/article/125968194.pdf')
    ]).

pattern(kundiman,
    [white_base, flower_petals, multi_heddle, delicate_patterns, textured_weave],
    'Plain white multi-heddle woven blanket (tinumbalitian) with delicate flower petal patterns. Holds deep cultural and religious significance, traditionally given as meaningful gifts during baptisms, birthdays, and weddings, and used as sacred liturgical textiles during Lenten season and Holy Week.',
    'bi-flower2',
    'kundiman-pattern',
    ['images/kundiman-1.png'],
    [
        ref('Bahay Ugnayan - Kundiman', 'https://www.bahayugnayan.org/functional-items/kundiman-(a)'),
        ref('Hibla Philippines - Binakol of Northern Philippines', 'https://hiblaphilippines.com/blog/simple-yet-complicated-the-binakol-of-the-northern-philippines/'),
        ref('Barong World - Handwoven Inabel', 'https://barongworld.com/products/handwoven-black-inabel-ilocos-weave-modern-filipiniana-dress-elsie-de01')
    ]).

pattern(dinapat,
    [full_coverage, brocade_effect, figured_motifs, stars_diamonds],
    'Means "full" or "total" - seamless design where motifs continuously occupy the entire fabric surface without spaces. Uses brocade weaving with continuous supplementary weft technique, creating embroidery-like patterns that float across the cloth. Features flora, leaves, human figures, animals, stars, and diamond motifs including Diamante Ti Reyna (Queen\'s Diamonds).',
    'bi-grid-fill',
    'dinapat-pattern',
    ['images/dinapat-1.png'],
    [
        ref('National Museum Ilocos - Dinapat', 'https://www.facebook.com/NMPIlocos/photos/843360242809559/'),
        ref('CORE Academic Papers - Inabel Study', 'https://core.ac.uk/download/pdf/335033269.pdf'),
        ref('Bahay Ugnayan - Dinapat', 'https://www.bahayugnayan.org/functional-items/dinapat-(b)'),
        ref('Math in Philippine Art - Diamante Ti Reyna', 'https://mathinphilippineart.wordpress.com/patterns-by-region-2/patterns-by-region/tingguians/dinapat-diamante-ti-reyna/'),
        ref('Wikipedia - Inabel', 'https://en.wikipedia.org/wiki/Inabel')
    ]).

pattern(banderado,
    [striped_pattern, minimal_colors, white_base, plain_weave, simple_aesthetic],
    'Means "banded" - features plain striped designs with one to three color bands on white background, reflecting the sensibility and simplicity of northern Ilocano culture. Also called kantarinis or tinartaros, these striped blankets are popular among fisherfolk and rice cultivators, traditionally brought out during festive events and harvest celebrations.',
    'bi-justify',
    'banderado-pattern',
    ['images/banderado-1.png'],
    [
        ref('Bahay Ugnayan - Kantarinis (Banderado)', 'https://www.bahayugnayan.org/functional-items/kantarinis-(banderado)'),
        ref('Kultura Filipino - Woven Wonders', 'https://www.kulturafilipino.com/blogs/news/woven-wonders-1'),
        ref('Narra Studio - Inabel of Ilocos', 'https://narrastudio.com/blogs/journal/the-inabel-of-ilocos-woven-cloth-for-everyday'),
        ref('STII DOST - Inabel Weaving', 'https://www.stii.dost.gov.ph/1808-inabel-the-timeless-art-of-weaving-stories-in-threads'),
        ref('Wikipedia - Inabel', 'https://en.wikipedia.org/wiki/Inabel')
    ]).

pattern(kinkinelleng,
    [geometric, grid_pattern, repeating, optical_illusion, minimal_colors, landscape_inspired],
    'Means "parcels of farmlands" - a binakol pattern featuring geometric design resembling agricultural land divided into plots or fields. Created using binakol technique with two heddles, producing optical illusion effects through precise arrangement of straight lines. Reflects the deep connection between Ilocano weavers and their agricultural landscape.',
    'bi-grid-3x3-gap',
    'kinkinelleng-pattern',
    ['images/kinkinelleng-1.png'],
    [
        ref('Bahay Ugnayan - Binakol (Kinkinelleng) B', 'https://www.bahayugnayan.org/functional-items/binakol-(kinkinelleng)-(b)'),
        ref('Bahay Ugnayan - Binakol (Kinkinelleng) A', 'https://www.bahayugnayan.org/functional-items/binakol-(kinkinelleng)-(a)'),
        ref('Hibla Philippines - Binakol of Northern Philippines', 'https://hiblaphilippines.com/blog/simple-yet-complicated-the-binakol-of-the-northern-philippines/'),
        ref('Wikipedia - Inabel', 'https://en.wikipedia.org/wiki/Inabel'),
        ref('Wikipedia - Binakael', 'https://en.wikipedia.org/wiki/Binakael')
    ]).

pattern(gikgik,
    [two_headed_bird, brocade_effect, supplementary_threads, symmetrical, figured_motifs],
    'Depicts a two-headed, two-legged bird from Ilocos and Cordillera folklore. Created using pinilian/sinukitan brocade weaving with supplementary weft insertion to create raised decorative motifs. Represents nature-inspired symbolism rooted in local mythology. Associated with weavers from Nagbacalan, Paoay in Ilocos Norte.',
    'bi-piggy-bank',
    'gikgik-pattern',
    ['images/gikgik-1.png'],
    [
        ref('Museo Ilocos Norte - Sina-Gikgik Design', 'https://www.facebook.com/MuseoIlocosNorte/photos/2071899466235157/'),
        ref('Tribune - Charito Cariaga and the Call of the Loom', 'https://tribune.net.ph/2023/09/12/charito-cariaga-and-the-call-of-the-loom'),
        ref('National Museum Ilocos - Gikgik and Nature Motifs', 'https://www.facebook.com/NMPIlocos/posts/874611356351114/'),
        ref('National Museum Bohol - Sinukitan Technique', 'https://www.facebook.com/NMPBohol/posts/1606943599468905/'),
        ref('Visit Ilocos Norte - Abel Iloko', 'http://visitilocosnorte.blogspot.com/2007/11/abel-iloko.html')
    ]).

pattern(pabo,
    [peacock_motif, ornate_tail, brocade_effect, supplementary_threads, figured_motifs, decorative_focus],
    'Depicts a peacock (pabo) design with elaborate tail feathers. Created using inkaot/insukit (inlaid) technique, a variation of continuous supplementary weft weaving. Represents nature-inspired beauty and ornamentation. Weavers use design sticks (serpit or pili) to select specific warp yarns for creating the decorative peacock motif.',
    'bi-stars',
    'pabo-pattern',
    ['images/pabo-1.png'],
    [
        ref('Balay ni Atong - Pabo or Peacock Design', 'https://www.facebook.com/balayniatong/posts/2137721289823892/'),
        ref('Hibla Philippines Blog', 'https://hiblaphilippines.com/author/bjeg2000/'),
        ref('Wikipedia - Inabel', 'https://en.wikipedia.org/wiki/Inabel'),
        ref('Bahay Ugnayan - Pinilian Techniques', 'https://www.bahayugnayan.org/functional-items/pinilian-(sinan-misammi)'),
        ref('Art Post Asia - Inabel Philippine Textile', 'https://artpostasia.com/products/inabel-philippine-textile-from-ilocos-region')
    ]).

pattern(sinan_bulong,
    [palm_leaf, fern_like, full_coverage, organic_shapes, figured_motifs],
    'Depicts palm leaf or fern-like designs (sinan-pakko). Created using dinapat technique where decorative patterns densely cover the entire fabric surface. Represents nature-inspired motifs drawn from tropical vegetation and plant life familiar to Ilocano weavers. Demonstrates the diversity of traditional inabel artistry alongside kinurkuros and pinilian techniques.',
    'bi-tree',
    'sinan-bulong-pattern',
    ['images/sinan-bulong-1.png'],
    [
        ref('Bahay Ugnayan - Dinapat (Sinan-Bulong/Sinan-Pakko)', 'https://www.bahayugnayan.org/functional-items/dinapat-(sinan-bulong%2Fsinan-pakko)'),
        ref('Redondo Reports - Ilocos Norte Heritage Products', 'https://redondoreports.wordpress.com/2014/10/17/ilocos-norte-targets-to-be-a-go-to-destination-for-heritage-products/'),
        ref('Tour Ilocos Norte - Inabel Techniques', 'https://www.facebook.com/TourIlocosNorte/posts/479890807502489/'),
        ref('Wikipedia - Inabel', 'https://en.wikipedia.org/wiki/Inabel'),
        ref('Narra Studio - Inabel of Ilocos', 'https://narrastudio.com/blogs/journal/the-inabel-of-ilocos-woven-cloth-for-everyday')
    ]).

pattern(kinarkarayan_ken_sinan_ugsa,
    [zigzag_river, water_motif, figurative_animal, brocade_effect, supplementary_threads, figured_motifs, repeating],
    'Kinarkarayan means "river patterns" depicting zigzag designs representing flowing rivers and volcanic water formations from Northern Philippines topography. Sinan-ugsa means "deer-like" featuring deer motifs. Both created using pinilian brocade technique with pre-selected warp threads. Reflects the deep connection between Ilocano and Itneg weavers and their natural environment, depicting local fauna and geographical features.',
    'bi-water',
    'kinarkarayan-pattern',
    ['images/kinarkarayan-ken-sinan-ugsa-1.png'],
    [
        ref('Bahay Ugnayan - Pinilian (Kinarkarayan ken Sinan-Tokak) A', 'https://www.bahayugnayan.org/functional-items/pinilian-(kinarkarayan-ken-sinan-tokak)-(a)'),
        ref('Bahay Ugnayan - Pinilian (Kinarkarayan ken Sinan-Tokak) B', 'https://www.bahayugnayan.org/functional-items/pinilian-(kinarkarayan-ken-sinan-tokak)-(b)'),
        ref('Elle Karayan - Volcanic Rivers Pattern', 'https://www.facebook.com/ellekarayan/posts/1263312719143351/'),
        ref('Barong Warehouse - Abra Weaving Tradition', 'https://barongwarehouse.ph/blogs/barong-bridges/textile-art-and-the-abra-weaving-tradition-christy-mabute'),
        ref('Wikipedia - Inabel', 'https://en.wikipedia.org/wiki/Inabel')
    ]).

pattern(kinarkarayan_ken_sinan_tokak,
    [zigzag_river, water_motif, figurative_animal, full_coverage, brocade_effect, supplementary_threads, figured_motifs, repeating],
    'Kinarkarayan depicts zigzag river patterns while sinan-tokak means "frog-like" showing geometric frogs and riverine creatures (turtles, crabs). Created using pinilian brocade technique in indigo, red, and turquoise blue on white. Classified as dinapat with full surface coverage. Reflects topography and fauna near riverine areas where Itneg, Tinguian, and Ilocano communities weave. Frogs are considered auspicious creatures with ritual significance.',
    'bi-water',
    'kinarkarayan-tokak-pattern',
    ['images/kinarkarayan-ken-sinan-tokak-1.png'],
    [
        ref('Bahay Ugnayan - Pinilian (Kinarkarayan ken Sinan-Tokak) A', 'https://www.bahayugnayan.org/functional-items/pinilian-(kinarkarayan-ken-sinan-tokak)-(a)'),
        ref('Bahay Ugnayan - Pinilian (Kinarkarayan ken Sinan-Tokak) B', 'https://www.bahayugnayan.org/functional-items/pinilian-(kinarkarayan-ken-sinan-tokak)-(b)'),
        ref('Flickr - Inabel Textiles', 'https://www.flickr.com/photos/elmer_ng_pateros/1487066581'),
        ref('Barong World - Ilocos Weaving Traditions', 'https://barongworld.com/blogs/barong-world-blogs/exploring-the-rich-tapestry-of-inabel-a-deep-dive-into-ilocos-weaving-traditions'),
        ref('Bahay Ugnayan', 'https://bahayugnayan.gov.ph')
    ]).

pattern(kinarkarayan_ken_dyamante_ti_reyna,
    [diamond_shape, zigzag_river, water_motif, symmetrical, full_coverage, small_repeating, geometric, intricate_detail, brocade_effect],
    'Kinarkarayan represents geometric river forms while dyamante ti reyna means "diamond of the queens" - small triangles and diamonds arranged to resemble multi-faceted gemstone surfaces. Created using dinapat style brocade weave with full surface coverage. Exhibits reflective symmetry with mirrored upper/lower and left/right parts. Represents technical mastery and is one of the most intricate takes on traditional diamond patterns. Commonly used in blankets, expressing weavers\' proximity to large riverine structures.',
    'bi-gem',
    'dyamante-reyna-pattern',
    ['images/kinarkarayan-ken-dyamante-ti-ryena-1.png'],
    [
        ref('Bahay Ugnayan - Dinapat (Kinarkarayan ken Dyamante Ti Reyna)', 'https://www.bahayugnayan.org/functional-items/dinapat-(kinarkarayan-ken-dyamante-ti-reyna)'),
        ref('Math in Philippine Art - Diamante Ti Reyna', 'https://mathinphilippineart.wordpress.com/patterns-by-region-2/patterns-by-region/tingguians/dinapat-diamante-ti-reyna/'),
        ref('Agyaman - Diamante Ti Reyna', 'https://www.facebook.com/agyamanpiecesofhome/posts/135616658326363/'),
        ref('Terno Shop - Red Inabel Terno', 'https://ternoshop.com/products/red_inabelterno'),
        ref('Hand Woven Beauty - Diamante Ti Reyna Dress', 'https://www.facebook.com/HandWovenBeauty/posts/716300657183080/')
    ]).

pattern(sinan_paddak_ti_pusa,
    [geometric, symmetrical, repeating, optical_illusion, minimal_colors],
    'Means "cat\'s paw print" - a binakol pattern beginning with four small cross-like boxes at the center, framed by elongated rectangles. Larger squares surround the central cross echoing cat paw pads, creating a geometric representation of a feline footprint. Created using binakol weaving technique with graduated rectangles varying in size and orientation. One of the less common binakol motifs but culturally significant among Abra, Tinguian, Itneg, and Ilocano weaving communities.',
    'bi-pentagon',
    'paddak-pusa-pattern',
    ['images/sinan-paddak-ti-pusa-1.png'],
    [
        ref('Bahay Ugnayan - Binakol (Sinan-Paddak Ti Pusa)', 'https://www.bahayugnayan.org/functional-items/binakol-(sinan-paddak-ti-pusa)'),
        ref('Barong Warehouse - Abra Weaving Tradition', 'https://barongwarehouse.ph/blogs/barong-bridges/textile-art-and-the-abra-weaving-tradition-christy-mabute'),
        ref('Hibla Philippines - Binakol of Northern Philippines', 'https://hiblaphilippines.com/blog/simple-yet-complicated-the-binakol-of-the-northern-philippines/'),
        ref('Rags2Riches - Partner Communities', 'https://r2r.ph/pages/rags2riches-partner-artisan-communities'),
        ref('Bahay Ugnayan - Binakol Variations', 'https://www.bahayugnayan.org/functional-items/binakol-(kusikus,-sinan-paddak-ti-pusa-&-kinurkuros)')
    ]).

pattern(kinurkuros,
    [geometric, repeating, plain_weave, simple_aesthetic, minimal_colors],
    'Features plaid or checkered designs created using plain weave (liniston) technique. Represents one of the simpler inabel weaving styles, making it practical for everyday use. The term also refers to cross patterns appearing in some binakol variants. Showcases the versatility of traditional Ilocano weaving through straightforward checkered designs, demonstrating how weavers create both intricate optical patterns and practical plaid textiles using traditional methods.',
    'bi-grid',
    'kinurkuros-pattern',
    ['images/kinurkuros-1.png'],
    [
        ref('Bahay Ugnayan - Kinurkuros', 'https://www.bahayugnayan.org/functional-items/kinurkuros'),
        ref('Bahay Ugnayan - Binakol Variations', 'https://www.bahayugnayan.org/functional-items/binakol-(kusikus,-sinan-paddak-ti-pusa-&-kinurkuros)'),
        ref('Narra Studio - Inabel of Ilocos', 'https://narrastudio.com/blogs/journal/the-inabel-of-ilocos-woven-cloth-for-everyday'),
        ref('STII DOST - Inabel Weaving', 'https://www.stii.dost.gov.ph/1808-inabel-the-timeless-art-of-weaving-stories-in-threads'),
        ref('Barong World - Inabel Traditions', 'https://barongworld.com/blogs/barong-world-blogs/exploring-the-rich-tapestry-of-inabel-a-deep-dive-into-ilocos-weaving-traditions')
    ]).

pattern(rinitrit_concha_concha,
    [geometric, repeating, optical_illusion, minimal_colors, grid_pattern],
    'Means "tattered capiz window design" - inspired by traditional Filipino capiz shell windows. Features geometric designs resembling capiz (windowpane oyster shells) arranged in window frames. Typically woven as three-paneled textile using double-toned basket weave with capiz window-inspired designs set against plaid background. Uses two-colored weft yarns (commonly black/white, green/white, blue/white, or red/white) creating alternating negative and positive geometric squares and rectangles producing optical illusion effects. Panels traditionally joined using decorative embroidery stitching like kuko-palay (fingernails and rice stalks) or sinan-ramay (finger-like) joinery.',
    'bi-window',
    'rinitrit-concha-pattern',
    ['images/rinitrit-concha-concha-1.png'],
    [
        ref('Bahay Ugnayan - Binakol (Rinitrit Concha-Concha)', 'https://www.bahayugnayan.org/functional-items/binakol-(rinitrit-concha-concha)-(a)'),
        ref('Narra Studio - Inabel of Ilocos', 'https://narrastudio.com/blogs/journal/the-inabel-of-ilocos-woven-cloth-for-everyday'),
        ref('Alia Onabay - Inabel Weaving of Ilocos', 'https://aliaonabay.wordpress.com/2020/12/04/the-inabel-weaving-of-ilocos/'),
        ref('Barong World - Inabel Traditions', 'https://barongworld.com/blogs/barong-world-blogs/exploring-the-rich-tapestry-of-inabel-a-deep-dive-into-ilocos-weaving-traditions'),
        ref('Wikipedia - Inabel', 'https://en.wikipedia.org/wiki/Inabel')
    ]).


% Feature Question Definitions
feature_question(geometric, 'Does the pattern have geometric (abstract) shapes?').
feature_question(repeating, 'Does the pattern repeat throughout the fabric?').
feature_question(small_repeating, 'Are the repeating elements small in scale?').
feature_question(linear, 'Are the lines mostly straight and parallel?').
feature_question(linear_repeat, 'Does the pattern consist of a continuous repetition of elements along a single line or axis?').
feature_question(dizzying, 'Does it create a dizzying or disorienting effect?').
feature_question(optical_illusion, 'Does it create an optical illusion effect? (e.g., 3D cube-like effect)').
feature_question(three_dimensional, 'Do the patterns appear three-dimensional or embossed?').
feature_question(textured_surface, 'Does the fabric have a raised or textured surface?').
feature_question(thicker_weave, 'Is the weave notably thick and tight?').
feature_question(textured_weave, 'Does it have a textured surface from the weaving technique?').
feature_question(brocade_effect, 'Does the pattern have a brocade or embroidered appearance with raised decorative elements?').
feature_question(floating_motifs, 'Do design elements appear to "float" on the fabric surface?').
feature_question(supplementary_threads, 'Are there extra decorative threads beyond the base weave?').
feature_question(intricate_detail, 'Does the design show very intricate and detailed work?').
feature_question(fine_craftsmanship, 'Does it display exceptional weaving skill and precision?').
feature_question(decorative_focus, 'Is the emphasis on decorative rather than structural patterns?').
feature_question(full_coverage, 'Does the pattern densely cover the entire fabric surface with minimal blank spaces?').
feature_question(white_base, 'Is the base color predominantly white or cream?').
feature_question(minimal_colors, 'Are only one to three colors used in the design?').
feature_question(striped_pattern, 'Does the design feature parallel stripes or bands?').
feature_question(grid_pattern, 'Does the pattern show grid-like, box-like, or tessellated arrangements?').
feature_question(landscape_inspired, 'Does it appear inspired by land formations or natural landscapes?').
feature_question(two_headed_bird, 'Does the design feature a two-headed bird motif?').
feature_question(symmetrical, 'Is the design symmetrical with mirrored elements?').
feature_question(peacock_motif, 'Does the design feature a peacock or bird with elaborate tail feathers?').
feature_question(ornate_tail, 'Are there fan-like or elaborate tail feather patterns?').
feature_question(palm_leaf, 'Does the pattern feature palm leaf or frond shapes?').
feature_question(fern_like, 'Are there fern-like or feathery plant motifs?').
feature_question(organic_shapes, 'Are there organic, natural curved forms?').
feature_question(zigzag_river, 'Does the pattern feature zigzag or flowing river-like designs?').
feature_question(water_motif, 'Are there water or river patterns present?').
feature_question(simple_aesthetic, 'Is the overall design simple and uncluttered?').
feature_question(plain_weave, 'Is it created using basic plain weave technique (simple over-under)?').
feature_question(floral, 'Does the pattern contain floral or actual flower designs?').
feature_question(flower_petals, 'Are flower petal motifs present in the design?').
feature_question(spiral, 'Does the pattern contain spiral or swirl shapes?').
feature_question(diamond_shape, 'Are diamond shapes a key component of the design?').
feature_question(delicate_patterns, 'Are the patterns delicate and refined rather than bold?').
feature_question(stars_diamonds, 'Are star or diamond shapes present in the motifs?').
feature_question(figured_motifs, 'Does it feature representational motifs like human figures, animals, plants, or objects?').
feature_question(anthropomorphic, 'Does the pattern feature human figures or stylized people?').
feature_question(stylized_figure, 'Does the pattern contain highly stylized figures (human, animal, or object)?').
feature_question(figurative_animal, 'Does the pattern primarily depict an animal figure (like a deer, frog, horse, or bird)?').
feature_question(multi_heddle, 'Does it appear to have multiple layers or complex interlacing (not simple over-under)?').


% =====================================================================
% IDENTIFICATION ENGINE - Mirrors app.js logic
% =====================================================================

% Main API predicate for web interface
% identify_pattern_api(+Responses, -Result)
% Responses is a list of [Feature, Answer] pairs
% Result is pattern(Name, Features, Meaning, Icon, Placeholder, Images, References) or not_found
identify_pattern_api(Responses, Result) :-
    findall(Pattern, pattern(Pattern, _, _, _, _, _, _), AllPatternNames),
    filter_patterns_by_responses(AllPatternNames, Responses, Candidates),
    (   Candidates = [PatternName]
    ->  pattern(PatternName, Features, Meaning, Icon, Placeholder, Images, References),
        Result = pattern(PatternName, Features, Meaning, Icon, Placeholder, Images, References)
    ;   Candidates = []
    ->  Result = not_found
    ;   % Multiple candidates remain - find best match
        find_best_match(Candidates, Responses, Result)
    ).

% Filter patterns based on user responses
filter_patterns_by_responses([], _, []).
filter_patterns_by_responses([PatternName|Rest], Responses, Filtered) :-
    pattern(PatternName, Features, _, _, _, _, _),
    check_pattern_matches(Features, Responses),
    !,
    filter_patterns_by_responses(Rest, Responses, RestFiltered),
    Filtered = [PatternName|RestFiltered].
filter_patterns_by_responses([_|Rest], Responses, Filtered) :-
    filter_patterns_by_responses(Rest, Responses, Filtered).

% Check if a pattern matches the user responses
% A pattern matches if all YES responses are in its features
% NO responses can be ignored (lenient matching)
check_pattern_matches(Features, Responses) :-
    % All YES features must be in pattern
    \+ (member([Feature, yes], Responses), \+ member(Feature, Features)),
    % All NO features must NOT be in pattern
    \+ (member([Feature, no], Responses), member(Feature, Features)).

% Find best match when multiple candidates remain
find_best_match([Best|_], _, Result) :-
    pattern(Best, Features, Meaning, Icon, Placeholder, Images, References),
    Result = pattern(Best, Features, Meaning, Icon, Placeholder, Images, References).

% Get all unique features from all patterns (for generating questions)
get_all_features(AllFeatures) :-
    findall(Features, pattern(_, Features, _, _, _, _, _), FeatureLists),
    flatten(FeatureLists, FlatList),
    list_to_set(FlatList, AllFeatures).

% Get next relevant question based on current responses and candidates
get_next_question(Responses, Candidates, NextFeature) :-
    get_all_features(AllFeatures),
    get_answered_features(Responses, AnsweredFeatures),
    member(NextFeature, AllFeatures),
    \+ member(NextFeature, AnsweredFeatures),
    feature_is_relevant(NextFeature, Candidates),
    !.

get_answered_features([], []).
get_answered_features([[Feature, _]|Rest], [Feature|RestFeatures]) :-
    get_answered_features(Rest, RestFeatures).

% Check if a feature is relevant to any candidate pattern
feature_is_relevant(Feature, Candidates) :-
    member(CandidateName, Candidates),
    pattern(CandidateName, Features, _, _, _, _, _),
    member(Feature, Features),
    !.


% =====================================================================
% INTERACTIVE CLI MODE - For direct Prolog usage
% =====================================================================

% Main entry point - starts the identification process
start :-
    write('Welcome to the Inabel Pattern Identification System!'), nl,
    write('This will help you identify traditional Ilocano textile patterns.'), nl, nl,
    identify_pattern_interactive.
% main_json_loop/0
% Continually read JSON commands from stdin, handle them, and write JSON
% responses to stdout, until a {"cmd": "stop"} is received.

    % Read a line from stdin; if EOF, just succeed and let Prolog halt.
identify_pattern_interactive :-
    write('Let me ask you some questions about the pattern you see.'), nl, nl,
    collect_responses([], Responses),
    identify_pattern_api(Responses, Result),
    display_result(Result).

% Collect responses interactively
collect_responses(CurrentResponses, FinalResponses) :-
    % Get all pattern names as candidates
    findall(Name, pattern(Name, _, _, _, _, _, _), AllPatterns),
    filter_patterns_by_responses(AllPatterns, CurrentResponses, Candidates),
    
    % Check if we can determine the pattern
    (   Candidates = [_]
    ->  FinalResponses = CurrentResponses
    ;   Candidates = []
    ->  FinalResponses = CurrentResponses
    ;   % Ask next question
        get_next_question(CurrentResponses, Candidates, NextFeature),
        !,
    feature_question(NextFeature, Question),
    ask_yes_no(Question, Answer),
    append(CurrentResponses, [[NextFeature, Answer]], NewResponses),
    collect_responses(NewResponses, FinalResponses)
    ;   % No more relevant questions
        FinalResponses = CurrentResponses
    ).

% Display the result
display_result(not_found) :-
    nl,
    write('=========================================='), nl,
    write('Pattern Not Found'), nl,
    write('=========================================='), nl,
    write('Sorry, I could not identify the pattern based on your responses.'), nl,
    write('The pattern might be a variation or not in my database.'), nl, nl.

display_result(pattern(Name, Features, Meaning, Icon, _, Images, _)) :-
    nl,
    write('=========================================='), nl,
    write('Pattern Identified: '), write(Name), nl,
    write('=========================================='), nl,
    nl,
    write('Features:'), nl,
    display_features(Features),
    nl,
    write('Cultural Significance:'), nl,
    write('  '), write(Meaning), nl,
    nl,
    write('Icon: '), write(Icon), nl,
    write('Sample Images:'), nl,
    display_images(Images),
    nl,
    write('=========================================='), nl,
    write('Thank you for using the Inabel identification system!'), nl.

display_features([]).
display_features([Feature|Rest]) :-
    write('  - '), write(Feature), nl,
    display_features(Rest).

display_images([]).
display_images([Image|Rest]) :-
    write('  - '), write(Image), nl,
    display_images(Rest).


% =====================================================================
% UTILITY PREDICATES
% =====================================================================

% Generic yes/no question handler
ask_yes_no(Question, Answer) :-
    write(Question), write(' (y/n): '),
    flush_output(user_output),
    read_line_to_string(user_input, Input),
    string_lower(Input, LowerInput),
    (   (LowerInput = "y" ; LowerInput = "yes")
    ->  Answer = yes
    ;   (LowerInput = "n" ; LowerInput = "no")
    ->  Answer = no
    ;   write('Please answer with y or n.'), nl,
        ask_yes_no(Question, Answer)
    ).

% Flatten a list of lists
flatten([], []).
flatten([[]|Rest], Flat) :-
    !, flatten(Rest, Flat).
flatten([[H|T]|Rest], Flat) :-
    !, flatten([H, T|Rest], Flat).
flatten([H|T], [H|FlatT]) :-
    flatten(T, FlatT).

% Convert list to set (remove duplicates)
list_to_set([], []).
list_to_set([H|T], Set) :-
    member(H, T),
    !, list_to_set(T, Set).
list_to_set([H|T], [H|SetT]) :-
    list_to_set(T, SetT).


% =====================================================================
% QUERY HELPERS - For backend integration
% =====================================================================

% Get pattern by name
get_pattern_by_name(Name, Pattern) :-
    pattern(Name, Features, Meaning, Icon, Placeholder, Images, References),
    Pattern = pattern(Name, Features, Meaning, Icon, Placeholder, Images, References).

% Get all pattern names
get_all_pattern_names(Names) :-
    findall(Name, pattern(Name, _, _, _, _, _, _), Names).

% Get feature question text
get_feature_question(Feature, Question) :-
    feature_question(Feature, Question).

% =====================================================================
% JSON BRIDGE FOR PYTHON SUBPROCESS
% =====================================================================

:- use_module(library(http/json)).
:- use_module(library(readutil)).  % for read_line_to_string/2

% main_json_loop/0
% Continually read JSON commands from stdin, handle them, and write JSON
% responses to stdout, until a {"cmd": "stop"} is received.
main_json_loop :-
    % Read one line from stdin as a string
    (   read_line_to_string(user_input, Line)
    ->  (   Line == end_of_file
        ->  true
        ;   % Try to parse JSON from the line
            (   catch(atom_json_dict(Line, Dict, []), _, fail)
            ->  handle_json_command(Dict, Response),
                json_write_dict(current_output, Response, []),
                nl,
                flush_output(current_output),
                (   _{cmd:"stop"} :< Dict
                ->  true
                ;   main_json_loop
                )
            ;   % If JSON parse fails, send an error and continue.
                json_write_dict(current_output,
                                _{status:"error", error:"invalid_json"}, []),
                nl,
                flush_output(current_output),
                main_json_loop
            )
        )
    ;   true  % EOF / no input, just exit
    ).

% Dispatch from JSON command dict to the appropriate Prolog predicates.

handle_json_command(_{cmd:"get_all_pattern_names"}, Response) :-
    get_all_pattern_names(Names),
    Response = _{status:"ok", names:Names}.

handle_json_command(_{cmd:"get_all_features"}, Response) :-
    get_all_features(Features),
    Response = _{status:"ok", features:Features}.

handle_json_command(_{cmd:"get_feature_question", feature:FeatureInput}, Response) :-
    % Convert string to atom if necessary
    (   atom(FeatureInput)
    ->  Feature = FeatureInput
    ;   atom_string(Feature, FeatureInput)
    ),
    (   get_feature_question(Feature, Question)
    ->  Response = _{status:"ok", question:Question}
    ;   Response = _{status:"not_found"}
    ).

handle_json_command(_{cmd:"get_all_feature_questions"}, Response) :-
    get_all_features(Features),
    findall(Feature-Question,
            ( member(Feature, Features),
              get_feature_question(Feature, Question)
            ),
            Pairs),
    dict_create(FeaturesDict, features, Pairs),
    Response = _{status:"ok", features:FeaturesDict}.

handle_json_command(_{cmd:"identify_pattern", responses:JsonResponses}, Response) :-
    % JsonResponses is a list of dicts: _{feature:F, answer:A}
    % Convert strings to atoms
    findall([F, A],
            ( member(R, JsonResponses),
              FeatureStr = R.feature,
              AnswerStr = R.answer,
              (atom(FeatureStr) -> F = FeatureStr ; atom_string(F, FeatureStr)),
              (atom(AnswerStr) -> A = AnswerStr ; atom_string(A, AnswerStr))
            ),
            Responses),
    (   identify_pattern_api(Responses, Result),
        Result \= not_found
    ->  % Result is pattern(Name, Features, Meaning, Icon, Placeholder, Images, Refs)
        Result = pattern(Name, Features, Meaning, Icon, Placeholder, Images, Refs),
        convert_references(Refs, RefsJson),
        Response = _{ status:"found",
                       pattern:_{ name:Name,
                                  features:Features,
                                  meaning:Meaning,
                                  icon:Icon,
                                  placeholderPattern:Placeholder,
                                  images:Images,
                                  references:RefsJson
                                }
                    }
    ;   Response = _{status:"not_found"}
    ).

handle_json_command(_{cmd:"get_next_question",
                      responses:JsonResponses,
                      candidates:CandidatesInput}, Response) :-
    % Convert strings to atoms
    findall([F, A],
            ( member(R, JsonResponses),
              FeatureStr = R.feature,
              AnswerStr = R.answer,
              (atom(FeatureStr) -> F = FeatureStr ; atom_string(F, FeatureStr)),
              (atom(AnswerStr) -> A = AnswerStr ; atom_string(A, AnswerStr))
            ),
            Responses),
    findall(C,
            ( member(CandStr, CandidatesInput),
              (atom(CandStr) -> C = CandStr ; atom_string(C, CandStr))
            ),
            Candidates),
    (   get_next_question(Responses, Candidates, NextFeature)
    ->  Response = _{status:"ok", feature:NextFeature}
    ;   Response = _{status:"none"}
    ).

handle_json_command(_{cmd:"filter_patterns", responses:JsonResponses}, Response) :-
    get_all_pattern_names(All),
    % Convert strings to atoms
    findall([F, A],
            ( member(R, JsonResponses),
              FeatureStr = R.feature,
              AnswerStr = R.answer,
              (atom(FeatureStr) -> F = FeatureStr ; atom_string(F, FeatureStr)),
              (atom(AnswerStr) -> A = AnswerStr ; atom_string(A, AnswerStr))
            ),
            Responses),
    filter_patterns_by_responses(All, Responses, Candidates),
    Response = _{status:"ok", candidates:Candidates}.

handle_json_command(_{cmd:"get_pattern_by_name", name:NameInput}, Response) :-
    % Convert string to atom if necessary
    (   atom(NameInput)
    ->  Name = NameInput
    ;   atom_string(Name, NameInput)
    ),
    (   get_pattern_by_name(Name, pattern(Nm, Features, Meaning, Icon, Placeholder, Images, Refs))
    ->  convert_references(Refs, RefsJson),
        Response = _{ status:"found",
                       pattern:_{ name:Nm,
                                  features:Features,
                                  meaning:Meaning,
                                  icon:Icon,
                                  placeholderPattern:Placeholder,
                                  images:Images,
                                  references:RefsJson
                                }
                    }
    ;   Response = _{status:"not_found"}
    ).

handle_json_command(_{cmd:"stop"}, _{status:"stopping"}) :- !.

% Fallback for unknown commands
handle_json_command(Dict, _{status:"error", error:"unknown_command", received:Dict}).

% Convert Prolog reference terms to JSON-friendly dicts.
% Your facts use ref('Text', 'URL').

convert_references([], []).
convert_references([ref(Text, Url)|Rest], [_{text:Text, url:Url}|RestJson]) :-
    !,
    convert_references(Rest, RestJson).
convert_references([_|Rest], RestJson) :-
    convert_references(Rest, RestJson).
