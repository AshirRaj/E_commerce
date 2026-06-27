// Product Database - 100+ Products with Working Images
const products = [
    // Electronics (25 products)
    { id: 1, name: "iPhone 15 Pro Max", category: "electronics", price: 11199.99, originalPrice: 11299.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=280&h=250&fit=crop", rating: 4.8, reviews: 1250, badge: "new", description: "Latest iPhone with titanium design and A17 Pro chip" },
    { id: 2, name: "Samsung Galaxy S24 Ultra", category: "electronics", price: 11099.99, originalPrice: 11199.99, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=280&h=250&fit=crop", rating: 4.7, reviews: 980, badge: "sale", description: "Premium Android phone with S Pen and AI features" },
    { id: 3, name: "MacBook Pro 16-inch", category: "electronics", price: 12499.99, originalPrice: 12699.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=280&h=250&fit=crop", rating: 4.9, reviews: 750, badge: "sale", description: "Powerful laptop with M3 Pro chip for professionals" },
    { id: 4, name: "Dell XPS 13", category: "electronics", price: 11299.99, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=280&h=250&fit=crop", rating: 4.6, reviews: 650, description: "Ultra-portable laptop with stunning display" },
    { id: 5, name: "iPad Pro 12.9-inch", category: "electronics", price: 11099.99, originalPrice: 11199.99, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=280&h=250&fit=crop", rating: 4.8, reviews: 890, badge: "sale", description: "Professional tablet with M2 chip and Liquid Retina display" },
    { id: 6, name: "Sony WH-1000XM5", category: "electronics", price: 1399.99, originalPrice: 1449.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=280&h=250&fit=crop", rating: 4.7, reviews: 1100, badge: "sale", description: "Industry-leading noise canceling headphones" },
    { id: 7, name: "AirPods Pro 2nd Gen", category: "electronics", price: 11249.99, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=280&h=250&fit=crop", rating: 4.6, reviews: 2100, description: "Wireless earbuds with active noise cancellation" },
    { id: 8, name: "Samsung 55\" QLED TV", category: "electronics", price: 81199.99, originalPrice: 91099.99, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=280&h=250&fit=crop", rating: 4.5, reviews: 450, badge: "sale", description: "4K Smart TV with Quantum Dot technology" },
    { id: 9, name: "Nintendo Switch OLED", category: "electronics", price: 31549.99, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=280&h=250&fit=crop", rating: 4.8, reviews: 1800, description: "Portable gaming console with vibrant OLED screen" },
    { id: 10, name: "PlayStation 5", category: "electronics", price: 11499.99, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=280&h=250&fit=crop", rating: 4.9, reviews: 3200, description: "Next-gen gaming console with ultra-fast SSD" },
    { id: 11, name: "Canon EOS R6 Mark II", category: "electronics", price: 12499.99, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=280&h=250&fit=crop", rating: 4.7, reviews: 320, description: "Professional mirrorless camera for photography" },
    { id: 12, name: "GoPro Hero 12", category: "electronics", price: 11399.99, originalPrice: 14449.99, image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=280&h=250&fit=crop", rating: 4.6, reviews: 780, badge: "sale", description: "Action camera with 5.3K video recording" },
    { id: 13, name: "Apple Watch Series 9", category: "electronics", price: 39999.99, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=280&h=250&fit=crop", rating: 4.8, reviews: 1500, description: "Advanced smartwatch with health monitoring" },
    { id: 14, name: "Fitbit Charge 6", category: "electronics", price: 15889.99, originalPrice: 17099.99, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=280&h=250&fit=crop", rating: 4.4, reviews: 920, badge: "sale", description: "Fitness tracker with GPS and heart rate monitoring" },
    { id: 15, name: "Kindle Paperwhite", category: "electronics", price: 13952.99, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=250&fit=crop", rating: 4.6, reviews: 2800, description: "Waterproof e-reader with adjustable warm light" },
    { id: 16, name: "Echo Dot 5th Gen", category: "electronics", price: 1149.99, originalPrice: 1159.99, image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=280&h=250&fit=crop", rating: 4.5, reviews: 5600, badge: "sale", description: "Smart speaker with Alexa voice assistant" },
    { id: 17, name: "Ring Video Doorbell", category: "electronics", price: 1199.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=280&h=250&fit=crop", rating: 4.3, reviews: 1200, description: "Smart doorbell with HD video and motion detection" },
    { id: 18, name: "Nest Thermostat", category: "electronics", price: 2129.99, originalPrice: 2149.99, image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=280&h=250&fit=crop", rating: 4.4, reviews: 890, badge: "sale", description: "Smart thermostat that learns your schedule" },
    { id: 19, name: "Logitech MX Master 3S", category: "electronics", price: 3199.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=280&h=250&fit=crop", rating: 4.7, reviews: 1450, description: "Advanced wireless mouse for productivity" },
    { id: 20, name: "Mechanical Gaming Keyboard", category: "electronics", price: 3149.99, originalPrice: 3179.99, image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=280&h=250&fit=crop", rating: 4.6, reviews: 680, badge: "sale", description: "RGB backlit mechanical keyboard for gaming" },
    { id: 21, name: "Webcam 4K Pro", category: "electronics", price: 5199.99, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=280&h=250&fit=crop", rating: 4.5, reviews: 420, description: "Ultra HD webcam for streaming and video calls" },
    { id: 22, name: "Portable SSD 1TB", category: "electronics", price: 5129.99, originalPrice: 5159.99, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=280&h=250&fit=crop", rating: 4.8, reviews: 750, badge: "sale", description: "Fast external storage for professionals" },
    { id: 23, name: "Wireless Charging Pad", category: "electronics", price: 939.99, image: "https://roboticsbiz.com/wp-content/uploads/2019/04/mBot-STEM-Educational-Robot-Kit-for-Kids.jpg", rating: 4.3, reviews: 1100, description: "Fast wireless charger for smartphones" },
    { id: 24, name: "Bluetooth Speaker", category: "electronics", price: 979.99, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=280&h=250&fit=crop", rating: 4.4, reviews: 890, badge: "sale", description: "Portable speaker with 360-degree sound" },
    { id: 25, name: "VR Headset", category: "electronics", price: 1299.99, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=280&h=250&fit=crop", rating: 4.5, reviews: 560, description: "Immersive virtual reality gaming headset" },

    // Fashion (25 products)
    { id: 26, name: "Designer Leather Jacket", category: "fashion", price: 3299.99, originalPrice: 3399.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=280&h=250&fit=crop", rating: 4.6, reviews: 340, badge: "sale", description: "Premium genuine leather jacket with modern cut" },
    { id: 27, name: "Cashmere Sweater", category: "fashion", price: 2189.99, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=280&h=250&fit=crop", rating: 4.7, reviews: 280, description: "Luxurious cashmere sweater in multiple colors" },
    { id: 28, name: "Denim Jeans Premium", category: "fashion", price: 1189.99, originalPrice: 1219.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=280&h=250&fit=crop", rating: 4.5, reviews: 650, badge: "sale", description: "High-quality denim with perfect fit" },
    { id: 29, name: "Silk Blouse", category: "fashion", price: 729.99, image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=280&h=250&fit=crop", rating: 4.4, reviews: 420, description: "Elegant silk blouse for professional wear" },
    { id: 30, name: "Wool Coat", category: "fashion", price: 249.99, originalPrice: 299.99, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=280&h=250&fit=crop", rating: 4.8, reviews: 190, badge: "sale", description: "Warm wool coat for winter season" },
    { id: 31, name: "Running Shoes", category: "fashion", price: 2129.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=280&h=250&fit=crop", rating: 4.6, reviews: 1200, description: "Comfortable running shoes with advanced cushioning" },
    { id: 32, name: "Dress Shoes", category: "fashion", price: 2179.99, originalPrice: 2219.99, image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=280&h=250&fit=crop", rating: 4.5, reviews: 380, badge: "sale", description: "Classic leather dress shoes for formal occasions" },
    { id: 33, name: "Summer Dress", category: "fashion", price: 1179.99, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=280&h=250&fit=crop", rating: 4.3, reviews: 520, description: "Light and breezy summer dress in floral print" },
    { id: 34, name: "Business Suit", category: "fashion", price: 3299.99, originalPrice: 3499.99, image: "https://th.bing.com/th/id/OIP.NEtEP7PzUUh1gtWgYiK0qwAAAA?cb=iwc2&w=474&h=842&rs=1&pid=ImgDetMain", rating: 4.7, reviews: 150, badge: "sale", description: "Professional business suit with tailored fit" },
    { id: 35, name: "Casual T-Shirt", category: "fashion", price: 2104.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=280&h=250&fit=crop", rating: 4.2, reviews: 890, description: "Comfortable cotton t-shirt in various colors" },
    { id: 36, name: "Designer Handbag", category: "fashion", price: 1199.99, originalPrice: 1249.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=280&h=250&fit=crop", rating: 4.6, reviews: 310, badge: "sale", description: "Stylish handbag with premium materials" },
    { id: 37, name: "Luxury Watch", category: "fashion", price: 599.99, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=280&h=250&fit=crop", rating: 4.8, reviews: 220, description: "Swiss-made luxury watch with leather strap" },
    { id: 38, name: "Sunglasses", category: "fashion", price: 149.99, originalPrice: 179.99, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=280&h=250&fit=crop", rating: 4.4, reviews: 680, badge: "sale", description: "Designer sunglasses with UV protection" },
    { id: 39, name: "Scarf Collection", category: "fashion", price: 49.99, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=280&h=250&fit=crop", rating: 4.3, reviews: 450, description: "Elegant scarves in silk and wool materials" },
    { id: 40, name: "Belt Leather", category: "fashion", price: 69.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=280&h=250&fit=crop", rating: 4.5, reviews: 320, badge: "sale", description: "Genuine leather belt with classic buckle" },
    { id: 41, name: "Sneakers Limited Edition", category: "fashion", price: 179.99, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=280&h=250&fit=crop", rating: 4.7, reviews: 890, badge: "new", description: "Limited edition sneakers with unique design" },
    { id: 42, name: "Evening Gown", category: "fashion", price: 999.99, originalPrice: 899.99, image: "https://images.unsplash.com/photo-1566479179817-c0b8b8b5b8b8?w=280&h=250&fit=crop", rating: 4.6, reviews: 120, badge: "sale", description: "Elegant evening gown for special occasions" },
    { id: 43, name: "Polo Shirt", category: "fashion", price: 598.99, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=280&h=250&fit=crop", rating: 4.4, reviews: 560, description: "Classic polo shirt in premium cotton" },
    { id: 44, name: "Yoga Pants", category: "fashion", price: 749.99, originalPrice: 769.99, image: "https://images.unsplash.com/photo-1506629905607-c7b0b5e8e8e8?w=280&h=250&fit=crop", rating: 4.5, reviews: 780, badge: "sale", description: "Comfortable yoga pants with moisture-wicking fabric" },
    { id: 45, name: "Winter Boots", category: "fashion", price: 1149.99, image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=280&h=250&fit=crop", rating: 4.6, reviews: 340, description: "Waterproof winter boots with thermal insulation" },
    { id: 46, name: "Cardigan Sweater", category: "fashion", price: 899.99, originalPrice: 919.99, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=280&h=250&fit=crop", rating: 4.3, reviews: 290, badge: "sale", description: "Cozy cardigan sweater for layering" },
    { id: 47, name: "Formal Shirt", category: "fashion", price: 729.99, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=280&h=250&fit=crop", rating: 4.5, reviews: 420, description: "Crisp formal shirt for business wear" },
    { id: 48, name: "Backpack Designer", category: "fashion", price: 529.99, originalPrice: 779.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=280&h=250&fit=crop", rating: 4.4, reviews: 380, badge: "sale", description: "Stylish backpack with laptop compartment" },
    { id: 49, name: "Jewelry Set", category: "fashion", price: 1399.99, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=280&h=250&fit=crop", rating: 4.7, reviews: 250, description: "Elegant jewelry set with necklace and earrings" },
    { id: 50, name: "Athletic Shorts", category: "fashion", price: 434.99, originalPrice: 744.99, image: "https://th.bing.com/th/id/OIP.jx0WKg-i28XOI4ORaPMECQHaHa?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.2, reviews: 670, badge: "sale", description: "Lightweight athletic shorts for workouts" },

    // Home & Garden (20 products)
    { id: 51, name: "Coffee Maker Deluxe", category: "home", price: 1199.99, originalPrice: 1249.99, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=280&h=250&fit=crop", rating: 4.6, reviews: 890, badge: "sale", description: "Premium coffee maker with programmable features" },
    { id: 52, name: "Air Purifier HEPA", category: "home", price: 2299.99, image: "https://i5.walmartimages.com/asr/60eb9e3f-5d5d-4306-bdc1-91ab7729a09d.8b95fc2d3f2ee96ea70df58ae9ae9178.jpeg", rating: 4.7, reviews: 650, description: "Advanced air purifier with HEPA filtration" },
    { id: 53, name: "Robot Vacuum", category: "home", price: 1399.99, originalPrice: 1499.99, image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5901/5901380_sd.jpg", rating: 4.5, reviews: 1200, badge: "sale", description: "Smart robot vacuum with mapping technology" },
    { id: 54, name: "Bedding Set Luxury", category: "home", price: 2149.99, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=280&h=250&fit=crop", rating: 4.8, reviews: 420, description: "Luxury bedding set in Egyptian cotton" },
    { id: 55, name: "Kitchen Knife Set", category: "home", price: 1129.99, originalPrice: 1169.99, image: "https://th.bing.com/th/id/OIP.JM9vU3nXG1v9FSBPR5jYJwHaHa?cb=iwc2&w=1600&h=1600&rs=1&pid=ImgDetMain", rating: 4.6, reviews: 340, badge: "sale", description: "Professional kitchen knife set with block" },
    { id: 56, name: "Dining Table Set", category: "home", price: 5799.99, originalPrice: 5999.99, image: "https://th.bing.com/th/id/OIP.SOZPRMcqEC0ivos5MU-mrAHaHa?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.4, reviews: 180, badge: "sale", description: "Modern dining table set for 6 people" },
    { id: 57, name: "Garden Tool Set", category: "home", price: 2089.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=280&h=250&fit=crop", rating: 4.3, reviews: 290, description: "Complete garden tool set for landscaping" },
    { id: 58, name: "Throw Pillows Set", category: "home", price: 349.99, originalPrice: 469.99, image: "https://th.bing.com/th/id/OIP.yCYiw05peGHeTUq4MCqHwwHaHa?cb=iwc2&rs=1&pid=ImgDetMain?w=280&h=250&fit=crop", rating: 4.2, reviews: 560, badge: "sale", description: "Decorative throw pillows in various patterns" },
    { id: 59, name: "Floor Lamp Modern", category: "home", price: 1179.99, image: "https://assets.wfcdn.com/im/54394806/compr-r85/1888/188836862/deliylah-59-tripod-floor-lamp-with-shelf-mid-century-style-modern-standing-lamp.jpg", rating: 4.5, reviews: 230, description: "Modern floor lamp with adjustable brightness" },
    { id: 60, name: "Cookware Set Stainless", category: "home", price: 1249.99, originalPrice: 1319.99, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=280&h=250&fit=crop", rating: 4.7, reviews: 450, badge: "sale", description: "Professional stainless steel cookware set" },
    { id: 61, name: "Area Rug Persian", category: "home", price: 1299.99, image: "https://th.bing.com/th?id=OPAC.UfWOXioLA2%2f%2fXg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1?w=280&h=250&fit=crop", rating: 4.6, reviews: 190, description: "Handwoven Persian-style area rug" },
    { id: 62, name: "Curtains Blackout", category: "home", price: 479.99, originalPrice: 599.99, image: "https://i5.walmartimages.com/seo/Deconovo-Blackout-Curtains-Rod-Pocket-Curtain-Panels-Thermal-Insulated-Curtains-for-Dining-Room-52-W-x-54-L-inch-2-Panels_78a00af6-84f0-448a-918d-acf742dbddea.46a9987c758aed1b664de055fe087029.jpeg", rating: 4.4, reviews: 380, badge: "sale", description: "Blackout curtains for better sleep" },
    { id: 63, name: "Storage Ottoman", category: "home", price: 589.99, image: "https://i5.walmartimages.com/asr/21206240-1812-4794-a100-271e13ac8b1d_1.69182419098511440e2e19d864cf036c.jpeg?w=280&h=250&fit=crop", rating: 4.3, reviews: 270, description: "Multi-functional storage ottoman" },
    { id: 64, name: "Wall Art Canvas", category: "home", price: 1129.99, originalPrice: 1159.99, image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=280&h=250&fit=crop", rating: 4.5, reviews: 320, badge: "sale", description: "Modern canvas wall art collection" },
    { id: 65, name: "Humidifier Ultrasonic", category: "home", price: 869.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=280&h=250&fit=crop", rating: 4.4, reviews: 680, description: "Ultrasonic humidifier with essential oil diffuser" },
    { id: 66, name: "Bookshelf Wooden", category: "home", price: 1199.99, originalPrice: 1249.99, image: "https://th.bing.com/th/id/OIP.sPHcsKAp9AvEiN31iRtsBQHaHa?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.6, reviews: 150, badge: "sale", description: "Solid wood bookshelf with 5 shelves" },
    { id: 67, name: "Mirror Decorative", category: "home", price: 1119.99, image: "https://th.bing.com/th/id/OIP.jGD7PZt-y8PRW-R-nWIKLAHaHa?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.3, reviews: 210, description: "Decorative mirror with ornate frame" },
    { id: 68, name: "Candle Set Aromatherapy", category: "home", price: 319.99, originalPrice: 504.99, image: "https://m.media-amazon.com/images/I/81se+LRvhlL._AC_SL1010_.jpg", rating: 4.5, reviews: 490, badge: "sale", description: "Aromatherapy candle set with natural scents" },
    { id: 69, name: "Planter Set Indoor", category: "home", price: 459.99, image: "https://th.bing.com/th/id/OIP.VFY80iX7Xo5uIe0bom8ZSQHaHa?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.2, reviews: 340, description: "Ceramic planter set for indoor plants" },
    { id: 70, name: "Desk Organizer", category: "home", price: 354.99, originalPrice: 44.99, image: "https://i5.walmartimages.com/asr/acf1c66e-1d62-46a6-a4c8-8904f73acd29_1.3d30e5d28fe269a34fbc28e3d512a0d8.jpeg", rating: 4.4, reviews: 280, badge: "sale", description: "Bamboo desk organizer with multiple compartments" },

    // Sports & Fitness (15 products)
    { id: 71, name: "Treadmill Professional", category: "sports", price: 1299.99, originalPrice: 1599.99, image: "https://ubench.co.za/wp-content/uploads/2023/09/03787-TREADMILL-PROFESSIONAL-8600T-PHOTO-001-1.jpg", rating: 4.6, reviews: 320, badge: "sale", description: "Professional treadmill with incline features" },
    { id: 72, name: "Dumbbells Adjustable", category: "sports", price: 299.99, image: "https://th.bing.com/th/id/OIP.v548rY8Q-4D3vbN_E9kqBgHaHo?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.7, reviews: 580, description: "Adjustable dumbbells for home workouts" },
    { id: 73, name: "Yoga Mat Premium", category: "sports", price: 49.99, originalPrice: 69.99, image: "https://www.protekgr.com/wp-content/uploads/2015/02/0.25-Purpul.jpg", rating: 4.5, reviews: 890, badge: "sale", description: "Non-slip yoga mat with alignment guides" },
    { id: 74, name: "Exercise Bike", category: "sports", price: 599.99, originalPrice: 749.99, image: "https://th.bing.com/th/id/R.4fe21049ffedeafc546eef106ee62ebe?rik=nSxJp2OqWW0DhQ&riu=http%3a%2f%2fc.shld.net%2frpx%2fi%2fs%2fi%2fspin%2f10007506%2fprod_1904100212%3f%3fhei%3d64%26wid%3d64%26qlt%3d50&ehk=5bULOMbJHELUv3DcMV9vQ7HOw%2f15Cz99NF5RyX9X0wU%3d&risl=&pid=ImgRaw&r=0", rating: 4.4, reviews: 420, badge: "sale", description: "Stationary exercise bike with digital display" },
    { id: 75, name: "Resistance Bands Set", category: "sports", price: 29.99, image: "https://i5.walmartimages.com/asr/f74443e7-723f-4aa0-acfb-52001c4ad6c9_1.3f62695f59b58d4cefb5b897b14e72a7.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff", rating: 4.3, reviews: 670, description: "Complete resistance bands set for strength training" },
    { id: 76, name: "Basketball", category: "sports", price: 39.99, originalPrice: 49.99, image: "https://agingoutreachservices.com/wp-content/uploads/2020/06/basketball-1024x744-1.jpg", rating: 4.6, reviews: 340, badge: "sale", description: "Official size basketball for indoor/outdoor play" },
    { id: 77, name: "Tennis Racket Pro", category: "sports", price: 179.99, image: "https://cdn.sweatband.com/head_graphene_extreme_rev_pro_tennis_racket_head_graphene_extreme_rev_pro_tennis_racket_2000x2000.jpg", rating: 4.7, reviews: 230, description: "Professional tennis racket with carbon fiber frame" },
    { id: 78, name: "Golf Club Set", category: "sports", price: 799.99, originalPrice: 999.99, image: "https://m.media-amazon.com/images/I/71dJ543qYJL._AC_SL1500_.jpg", rating: 4.5, reviews: 150, badge: "sale", description: "Complete golf club set for beginners" },
    { id: 79, name: "Swimming Goggles", category: "sports", price: 24.99, image: "https://i5.walmartimages.com/asr/6b01918b-b013-4a96-acf3-7f52eb005370_1.85438d100fbaf8e832dfa6d828d4e3b0.jpeg", rating: 4.4, reviews: 520, description: "Anti-fog swimming goggles with UV protection" },
    { id: 80, name: "Protein Powder", category: "sports", price: 49.99, originalPrice: 59.99, image: "https://th.bing.com/th/id/OIP.tALWY_t2bRY6kBipr1uZkQHaHa?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.6, reviews: 780, badge: "sale", description: "Whey protein powder for muscle building" },
    { id: 81, name: "Water Bottle Insulated", category: "sports", price: 29.99, image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/BottlesNew12/WBTLVEAMPBS1/WBTLVEAMPBS1_LS_1.jpg?tr=w-1200", rating: 4.5, reviews: 1100, description: "Insulated water bottle keeps drinks cold for 24 hours" },
    { id: 82, name: "Foam Roller", category: "sports", price: 39.99, originalPrice: 49.99, image: "https://thorpesphysiotherapy.com/wp-content/uploads/2020/05/foam-roller-back-stretch.jpg", rating: 4.3, reviews: 450, badge: "sale", description: "High-density foam roller for muscle recovery" },
    { id: 83, name: "Jump Rope Speed", category: "sports", price: 19.99, image: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_SL1500_.jpg", rating: 4.2, reviews: 380, description: "Speed jump rope for cardio workouts" },
    { id: 84, name: "Kettlebell Set", category: "sports", price: 149.99, originalPrice: 189.99, image: "https://th.bing.com/th/id/OIP.x5Om6unIrGfzeamStWzEVAAAAA?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.6, reviews: 290, badge: "sale", description: "Cast iron kettlebell set for functional training" },
    { id: 85, name: "Fitness Tracker Band", category: "sports", price: 79.99, image: "https://th.bing.com/th/id/OIP.R6FupRfwXfROVUWKw6AttwAAAA?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.4, reviews: 650, description: "Fitness tracker with heart rate monitoring" },

    // Books & Media (10 products)
    { id: 86, name: "Bestseller", category: "books", price: 829.99, originalPrice: 839.99, image: "https://i.pinimg.com/originals/5e/71/e1/5e71e125cc032be9098f004710c9ac1d.jpg", rating: 4.7, reviews: 1200, badge: "sale", description: "Collection of bestselling novels from top authors" },
    { id: 87, name: "Cookbook Gourmet", category: "books", price: 734.99, image: "https://th.bing.com/th/id/OIP.rHBZ8XT_uls_x3OKvEnXEAHaKR?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.6, reviews: 450, description: "Gourmet cookbook with 200+ recipes" },
    { id: 88, name: "Self-Help Guide", category: "books", price: 619.99, originalPrice: 624.99, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669678481i/63883750.jpg", rating: 4.5, reviews: 890, badge: "sale", description: "Motivational self-help guide for personal growth" },
    { id: 89, name: "Art History Book", category: "books", price: 749.99, image: "https://pup-assets.imgix.net/onix/images/9780691204765.jpg?w=640&auto=format", rating: 4.8, reviews: 230, description: "Comprehensive art history with beautiful illustrations" },
    { id: 90, name: "Science Encyclopedia", category: "books", price: 559.99, originalPrice: 579.99, image: "https://th.bing.com/th/id/OIP.EBJEFXScgjp3ke86rrMjXwHaJc?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.6, reviews: 180, badge: "sale", description: "Complete science encyclopedia for students" },
    { id: 91, name: "Photography Guide", category: "books", price: 639.99, image: "https://imgv2-2-f.scribdassets.com/img/word_document/300102297/original/0e12ae3ad7/1627254581?v=1p", rating: 4.5, reviews: 320, description: "Professional photography techniques and tips" },
    { id: 92, name: "Children's Book Set", category: "books", price: 424.99, originalPrice: 434.99, image: "https://cdn.shopify.com/s/files/1/0064/5342/8271/products/HMPG10-paul-galdone-2-1200.jpg?v=1556605409", rating: 4.7, reviews: 670, badge: "sale", description: "Educational children's book set for ages 5-10" },
    { id: 93, name: "Travel Guide Europe", category: "books", price: 29.99, image: "https://i.pinimg.com/originals/f8/12/9b/f8129b244254b5ccf7846098209bfdab.jpg", rating: 4.4, reviews: 280, description: "Comprehensive travel guide to European destinations" },
    { id: 94, name: "Business Strategy Book", category: "books", price: 344.99, originalPrice: 354.99, image: "https://imgv2-2-f.scribdassets.com/img/word_document/375130856/original/0eef5b5d34/1592315147?v=1", rating: 4.6, reviews: 190, badge: "sale", description: "Modern business strategy and leadership guide" },
    { id: 95, name: "Music Theory Handbook", category: "books", price: 534.99, image: "https://th.bing.com/th/id/OIP.sEl50HU1Y4ZBgS1OQz4EfwHaKB?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.5, reviews: 150, description: "Complete music theory handbook for musicians" },

    // Beauty & Health (10 products)
    { id: 96, name: "Skincare Set Premium", category: "beauty", price: 1089.99, originalPrice: 1119.99, image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=280&h=250&fit=crop", rating: 4.7, reviews: 560, badge: "sale", description: "Complete skincare routine with natural ingredients" },
    { id: 97, name: "Hair Dryer Professional", category: "beauty", price: 1499.99, image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=280&h=250&fit=crop", rating: 4.6, reviews: 380, description: "Professional hair dryer with ionic technology" },
    { id: 98, name: "Makeup Palette", category: "beauty", price:300, originalPrice: 379.99, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=280&h=250&fit=crop", rating: 4.5, reviews: 720, badge: "sale", description: "Professional makeup palette with 48 colors" },
    { id: 99, name: "Electric Toothbrush", category: "beauty", price: 579.99, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=280&h=250&fit=crop", rating: 4.8, reviews: 890, description: "Sonic electric toothbrush with multiple modes" },
    { id: 100, name: "Perfume Collection", category: "beauty", price: 1129.99, originalPrice: 159.99, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=280&h=250&fit=crop", rating: 4.4, reviews: 340, badge: "sale", description: "Luxury perfume collection with 3 fragrances" },

    // Automotive (5 products)
    { id: 101, name: "Car Phone Mount", category: "automotive", price: 214.99, originalPrice: 234.99, image: "https://th.bing.com/th/id/OIP.p32eeFsf_KM3eDGkfyFFbwHaHa?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.3, reviews: 450, badge: "sale", description: "Universal car phone mount with wireless charging" },
    { id: 102, name: "Dash Camera 4K", category: "automotive", price: 1199.99, image: "https://m.media-amazon.com/images/I/71YN4WywV6L._AC_SL1500_.jpg", rating: 4.6, reviews: 320, description: "4K dash camera with night vision and GPS" },
    { id: 103, name: "Car Vacuum Cleaner", category: "automotive", price: 549.99, originalPrice: 609.99, image: "https://i5.walmartimages.com/asr/c402c1d4-e8c2-4a51-8ea8-4bd401bc82e6.4c68c01d18b0fb97df46760e5af67677.png", rating: 4.4, reviews: 280, badge: "sale", description: "Portable car vacuum cleaner with powerful suction" },
    { id: 104, name: "Tire Pressure Monitor", category: "automotive", price: 209.99, image: "https://thebattery.cc/electb/p_GS377273501_2.jpg", rating: 4.5, reviews: 190, description: "Wireless tire pressure monitoring system" },
    { id: 105, name: "Car Air Freshener Set", category: "automotive", price: 319.99, originalPrice: 24.99, image: "https://th.bing.com/th/id/OIP.-yqEeHh2zovoxNzhZHIyGAHaHa?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.2, reviews: 380, badge: "sale", description: "Long-lasting car air freshener in multiple scents" },

    // Toys & Games (5 products)
    { id: 106, name: "LEGO Architecture Set", category: "toys", price: 700.99, originalPrice: 899.99, image: "https://blog.firestartoys.com/wp-content/uploads/2020/01/917XmTojqgL._AC_SL1500_.jpg", rating: 4.8, reviews: 420, badge: "sale", description: "LEGO Architecture landmark building set" },
    { id: 107, name: "Board Game Collection", category: "toys", price: 300.99, image: "https://th.bing.com/th/id/OIP.k7OhUGP1ISPwe65RLIY4_QHaEc?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.6, reviews: 340, description: "Classic board game collection for family fun" },
    { id: 108, name: "Remote Control Drone", category: "toys", price: 1499.99, originalPrice: 1559.99, image: "https://th.bing.com/th/id/OIP.YipNyYBkH89ACqbsLouABAHaHA?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.5, reviews: 280, badge: "sale", description: "HD camera drone with GPS and auto-return" },
    { id: 109, name: "Educational Robot Kit", category: "toys", price: 4000.99, image: "https://th.bing.com/th/id/OIP.ZGIl3NWpVbjUBNk_JmAjMAHaEK?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.7, reviews: 190, description: "STEM robot kit for kids to learn programming" },
    { id: 110, name: "Puzzle 1000 Pieces", category: "toys", price: 1899.99, originalPrice: 1924.99, image: "https://th.bing.com/th/id/OIP.7QuTUINp_BBw1DlA1rZYzAHaHa?cb=iwc2&rs=1&pid=ImgDetMain", rating: 4.4, reviews: 560, badge: "sale", description: "Beautiful landscape puzzle with 1000 pieces" }
];

// Application State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentCategory = 'all';
let currentPage = 1;
let productsPerPage = 12;
let filteredProducts = [...products];
let currentView = 'grid';
let currentSlide = 0;

// DOM Elements
const elements = {
    // Navigation
    navLinks: document.querySelectorAll('.nav-link'),
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    navMenu: document.querySelector('.nav-menu'),
    
    // Search
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    
    // Cart
    cartBtn: document.getElementById('cartBtn'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartClose: document.getElementById('cartClose'),
    cartCount: document.getElementById('cartCount'),
    cartTotal: document.getElementById('cartTotal'),
    cartItems: document.getElementById('cartItems'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartShipping: document.getElementById('cartShipping'),
    cartTax: document.getElementById('cartTax'),
    cartFinalTotal: document.getElementById('cartFinalTotal'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    
    // Products
    productsGrid: document.getElementById('productsGrid'),
    sectionTitle: document.getElementById('sectionTitle'),
    sortSelect: document.getElementById('sortSelect'),
    viewBtns: document.querySelectorAll('.view-btn'),
    pagination: document.getElementById('pagination'),
    
    // Filters
    minPrice: document.getElementById('minPrice'),
    maxPrice: document.getElementById('maxPrice'),
    minPriceValue: document.getElementById('minPriceValue'),
    maxPriceValue: document.getElementById('maxPriceValue'),
    clearFilters: document.getElementById('clearFilters'),
    
    // Modals
    checkoutModal: document.getElementById('checkoutModal'),
    checkoutClose: document.getElementById('checkoutClose'),
    orderModal: document.getElementById('orderModal'),
    continueShoppingBtn: document.getElementById('continueShoppingBtn'),
    placeOrderBtn: document.getElementById('placeOrderBtn'),
    
    // Other
    overlay: document.getElementById('overlay'),
    loading: document.getElementById('loading'),
    toastContainer: document.getElementById('toastContainer'),
    categoryCards: document.querySelectorAll('.category-card'),
    wishlistBtn: document.getElementById('wishlistBtn'),
    wishlistCount: document.getElementById('wishlistCount')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    startHeroSlider();
});

function initializeApp() {
    showLoading();
    setTimeout(() => {
        renderProducts();
        updateCartUI();
        updateWishlistUI();
        hideLoading();
    }, 1000);
}

function setupEventListeners() {
    // Navigation
    elements.navLinks.forEach(link => {
        link.addEventListener('click', handleCategoryClick);
    });
    
    elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Search
    elements.searchInput.addEventListener('input', handleSearch);
    elements.searchBtn.addEventListener('click', handleSearch);
    elements.searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Cart
    elements.cartBtn.addEventListener('click', toggleCart);
    elements.cartClose.addEventListener('click', closeCart);
    elements.checkoutBtn.addEventListener('click', openCheckout);
    
    // Products
    elements.sortSelect.addEventListener('change', handleSort);
    elements.viewBtns.forEach(btn => {
        btn.addEventListener('click', handleViewChange);
    });
    
    // Filters
    elements.minPrice.addEventListener('input', updatePriceDisplay);
    elements.maxPrice.addEventListener('input', updatePriceDisplay);
    elements.minPrice.addEventListener('change', applyFilters);
    elements.maxPrice.addEventListener('change', applyFilters);
    elements.clearFilters.addEventListener('click', clearAllFilters);
    
    // Category cards
    elements.categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Modals
    elements.checkoutClose.addEventListener('click', closeCheckout);
    elements.continueShoppingBtn.addEventListener('click', closeOrderModal);
    elements.placeOrderBtn.addEventListener('click', placeOrder);
    
    // Overlay
    elements.overlay.addEventListener('click', closeAllModals);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
    
    // Hero slider controls
    document.querySelector('.hero-prev').addEventListener('click', prevSlide);
    document.querySelector('.hero-next').addEventListener('click', nextSlide);
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
}

// Hero Slider Functions
function startHeroSlider() {
    setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
}

function nextSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Navigation Functions
function handleCategoryClick(e) {
    e.preventDefault();
    const category = e.target.dataset.category;
    filterByCategory(category);
}

function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1;
    
    // Update active nav link
    elements.navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Update section title
    const categoryNames = {
        all: 'All Products',
        electronics: 'Electronics',
        fashion: 'Fashion',
        home: 'Home & Garden',
        sports: 'Sports & Fitness',
        books: 'Books & Media',
        beauty: 'Beauty & Health',
        automotive: 'Automotive',
        toys: 'Toys & Games'
    };
    elements.sectionTitle.textContent = categoryNames[category];
    
    applyFilters();
    scrollToProducts();
}

function toggleMobileMenu() {
    elements.navMenu.classList.toggle('open');
}

function scrollToProducts() {
    document.querySelector('.products-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Search Functions
function handleSearch() {
    const searchTerm = elements.searchInput.value.toLowerCase().trim();
    currentPage = 1;
    applyFilters(searchTerm);
}

// Product Functions
function renderProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    elements.productsGrid.innerHTML = '';
    elements.productsGrid.className = `products-grid ${currentView}-view`;
    
    if (productsToShow.length === 0) {
        elements.productsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #7f8c8d;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; color: #bdc3c7;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
        `;
        elements.pagination.innerHTML = '';
        return;
    }
    
    productsToShow.forEach((product, index) => {
        const productCard = createProductCard(product);
        elements.productsGrid.appendChild(productCard);
        
        // Add staggered animation
        setTimeout(() => {
            productCard.style.opacity = '1';
            productCard.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    renderPagination();
}

function createProductCard(product) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge}</div>` : ''}
            ${discount > 0 ? `<div class="product-badge sale">${discount}% OFF</div>` : ''}
            <button class="wishlist-btn-product ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                ${discount > 0 ? `<span class="discount">${discount}% OFF</span>` : ''}
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
                <button class="quick-view-btn" onclick="quickView(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function handleSort() {
    const sortBy = elements.sortSelect.value;
    
    switch (sortBy) {
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    currentPage = 1;
    renderProducts();
}

function handleViewChange(e) {
    const view = e.target.dataset.view;
    currentView = view;
    
    elements.viewBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    renderProducts();
}

function applyFilters(searchTerm = '') {
    const minPrice = parseFloat(elements.minPrice.value);
    const maxPrice = parseFloat(elements.maxPrice.value);
    const ratingFilters = Array.from(document.querySelectorAll('.rating-filters input:checked')).map(cb => parseInt(cb.value));
    
    filteredProducts = products.filter(product => {
        // Category filter
        const categoryMatch = currentCategory === 'all' || product.category === currentCategory;
        
        // Price filter
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        
        // Rating filter
        const ratingMatch = ratingFilters.length === 0 || ratingFilters.some(rating => product.rating >= rating);
        
        // Search filter
        const searchMatch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);
        
        return categoryMatch && priceMatch && ratingMatch && searchMatch;
    });
    
    currentPage = 1;
    renderProducts();
}

function updatePriceDisplay() {
    elements.minPriceValue.textContent = `$${elements.minPrice.value}`;
    elements.maxPriceValue.textContent = `$${elements.maxPrice.value}`;
}

function clearAllFilters() {
    elements.minPrice.value = 0;
    elements.maxPrice.value = 5000;
    updatePriceDisplay();
    
    document.querySelectorAll('.rating-filters input').forEach(cb => cb.checked = false);
    elements.searchInput.value = '';
    
    applyFilters();
}

function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (totalPages <= 1) {
        elements.pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i> Previous
        </button>
    `;
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        paginationHTML += `<button onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span>...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span>...</span>`;
        }
        paginationHTML += `<button onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    paginationHTML += `
        <button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            Next <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    elements.pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    renderProducts();
    scrollToProducts();
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    saveCart();
    showToast(`${product.name} added to cart!`, 'success');
    animateCartButton();
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        const product = cart[index];
        cart.splice(index, 1);
        updateCartUI();
        saveCart();
        showToast(`${product.name} removed from cart!`, 'error');
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
            saveCart();
        }
    }
}

function updateCartUI() {
    // Update cart count and total in header
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    elements.cartCount.textContent = totalItems;
    elements.cartTotal.textContent = `$${subtotal.toFixed(2)}`;
    
    // Update cart sidebar
    if (cart.length === 0) {
        elements.cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
    } else {
        elements.cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update cart summary
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    elements.cartShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    elements.cartTax.textContent = `$${tax.toFixed(2)}`;
    elements.cartFinalTotal.textContent = `$${total.toFixed(2)}`;
}

function toggleCart() {
    elements.cartSidebar.classList.toggle('open');
    elements.overlay.classList.toggle('active');
    document.body.style.overflow = elements.cartSidebar.classList.contains('open') ? 'hidden' : 'auto';
}

function closeCart() {
    elements.cartSidebar.classList.remove('open');
    elements.overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function animateCartButton() {
    elements.cartBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        elements.cartBtn.style.transform = 'scale(1)';
    }, 200);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Wishlist Functions
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showToast(`${product.name} removed from wishlist!`, 'warning');
    } else {
        wishlist.push(product);
        showToast(`${product.name} added to wishlist!`, 'success');
    }
    
    updateWishlistUI();
    saveWishlist();
    
    // Update wishlist button in product card
    const wishlistBtn = document.querySelector(`[onclick="toggleWishlist(${productId})"]`);
    if (wishlistBtn) {
        wishlistBtn.classList.toggle('active');
    }
}

function updateWishlistUI() {
    elements.wishlistCount.textContent = wishlist.length;
    elements.wishlistCount.style.display = wishlist.length > 0 ? 'flex' : 'none';
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Checkout Functions
function openCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    elements.checkoutModal.classList.add('open');
    elements.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateCheckoutReview();
}

function closeCheckout() {
    elements.checkoutModal.classList.remove('open');
    elements.overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextStep(step) {
    // Validate current step
    if (!validateCurrentStep()) {
        return;
    }
    
    // Update step indicators
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-step="${step}"]`).classList.add('active');
    
    // Update step content
    document.querySelectorAll('.checkout-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
    
    if (step === 3) {
        updateCheckoutReview();
    }
}

function prevStep(step) {
    // Update step indicators
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-step="${step}"]`).classList.add('active');
    
    // Update step content
    document.querySelectorAll('.checkout-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
}

function validateCurrentStep() {
    const activeStep = document.querySelector('.checkout-step.active');
    const inputs = activeStep.querySelectorAll('input[required]');
    
    for (let input of inputs) {
        if (!input.value.trim()) {
            input.focus();
            showToast('Please fill in all required fields', 'error');
            return false;
        }
    }
    
    return true;
}

function updateCheckoutReview() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    // Update review items
    document.getElementById('reviewItems').innerHTML = cart.map(item => `
        <div class="review-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    // Update review summary
    document.getElementById('reviewSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('reviewShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('reviewTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('reviewTotal').textContent = `$${total.toFixed(2)}`;
}

function placeOrder() {
    showLoading();
    
    // Simulate order processing
    setTimeout(() => {
        hideLoading();
        
        // Generate order number
        const orderNumber = '#ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        document.getElementById('orderNumber').textContent = orderNumber;
        
        // Clear cart
        cart = [];
        updateCartUI();
        saveCart();
        
        // Show order confirmation
        closeCheckout();
        elements.orderModal.classList.add('open');
        elements.overlay.classList.add('active');
        
        showToast('Order placed successfully!', 'success');
    }, 2000);
}

function closeOrderModal() {
    elements.orderModal.classList.remove('open');
    elements.overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Utility Functions
function closeAllModals() {
    closeCart();
    closeCheckout();
    closeOrderModal();
}

function showLoading() {
    elements.loading.classList.add('active');
}

function hideLoading() {
    elements.loading.classList.remove('active');
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'check' : type === 'error' ? 'times' : 'exclamation-triangle';
    toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        ${message}
    `;
    
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (elements.toastContainer.contains(toast)) {
                elements.toastContainer.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

function quickView(productId) {
    const product = products.find(p => p.id === productId);
    showToast(`Quick view for ${product.name} - Feature coming soon!`, 'warning');
}

// Initialize price display
updatePriceDisplay();