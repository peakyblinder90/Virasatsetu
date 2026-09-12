const heritage = [
  {
    id: 'sanchi-stupa', name: 'Sanchi Stupa', state: 'Madhya Pradesh', city: 'Sanchi', category: 'Monuments',
    description: 'A monumental Buddhist site whose gateways and stupas preserve some of India’s finest early stone reliefs.',
    history: 'The Great Stupa at Sanchi was commissioned in the Mauryan period and expanded in later centuries.',
    significance: 'Its sculpted gateways narrate Buddhist themes through symbols, scenes and stories, making the site important to the history of Indian art and Buddhism.',
    facts: ['The site is associated with Emperor Ashoka.', 'The famous toranas date to later periods than the original stupa.', 'Sanchi is a UNESCO World Heritage Site.'],
    latitude: 23.4793, longitude: 77.7397,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sanchi%20Stupa%20No.1.jpg',
    tags: ['buddhist', 'ashoka', 'stupa', 'unesco', 'madhya pradesh']
  },
  {
    id: 'khajuraho', name: 'Khajuraho Group of Monuments', state: 'Madhya Pradesh', city: 'Khajuraho', category: 'Architecture',
    description: 'A celebrated group of medieval temples known for intricate sculpture, architectural detail and expressive stonework.',
    history: 'Most of the surviving temples were built between the 10th and 12th centuries under the Chandela dynasty.',
    significance: 'Khajuraho demonstrates the sophistication of medieval Indian temple architecture and sculpture.',
    facts: ['The temples belong to Hindu and Jain traditions.', 'The Kandariya Mahadeva Temple is among the best-known monuments here.', 'Khajuraho is a UNESCO World Heritage Site.'],
    latitude: 24.8318, longitude: 79.9199,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho%20Temple.jpg',
    tags: ['chandela', 'temple', 'sculpture', 'unesco']
  },
  {
    id: 'taj-mahal', name: 'Taj Mahal', state: 'Uttar Pradesh', city: 'Agra', category: 'Monuments',
    description: 'A marble mausoleum celebrated for its balanced architecture, pietra dura inlay and riverside setting.',
    history: 'Built in the 17th century during the reign of Mughal emperor Shah Jahan as a mausoleum for Mumtaz Mahal.',
    significance: 'The monument is a major example of Mughal architecture, blending influences from across the Islamic world and South Asia.',
    facts: ['The complex includes a mosque and guest house.', 'Its marble changes appearance with the light.', 'It is a UNESCO World Heritage Site.'],
    latitude: 27.1751, longitude: 78.0421,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taj%20Mahal%2C%20Agra%2C%20India.jpg',
    tags: ['mughal', 'marble', 'agra', 'unesco', 'architecture']
  },
  {
    id: 'madhubani-painting', name: 'Madhubani Painting', state: 'Bihar', city: 'Madhubani', category: 'Traditional Arts',
    description: 'A living painting tradition from the Mithila region, recognised for bold lines, patterned surfaces and storytelling imagery.',
    history: 'The tradition developed in the Mithila region and was historically practiced in domestic and ritual spaces before gaining wider recognition.',
    significance: 'Madhubani painting connects visual storytelling with community practice, ritual life and regional identity.',
    facts: ['Common themes include nature, deities and everyday life.', 'Styles vary across artists and communities.', 'The art is now practiced on paper, cloth and other media as well as walls.'],
    latitude: 26.35, longitude: 86.07,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani%20painting.jpg',
    tags: ['mithila', 'painting', 'bihar', 'folk art', 'craft']
  },
  {
    id: 'blue-pottery-jaipur', name: 'Jaipur Blue Pottery', state: 'Rajasthan', city: 'Jaipur', category: 'Crafts',
    description: 'A distinctive craft known for its blue-and-white surfaces, floral motifs and quartz-based body.',
    history: 'Blue pottery in Jaipur developed through craft networks influenced by Persian and Central Asian traditions and was later shaped by local patronage.',
    significance: 'The craft illustrates how techniques and visual languages travel, adapt and become part of a new regional identity.',
    facts: ['The material traditionally differs from ordinary clay pottery.', 'Floral and geometric motifs are common.', 'Craft training has helped sustain the tradition in Jaipur.'],
    latitude: 26.9124, longitude: 75.7873,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20pottery%20Jaipur.jpg',
    tags: ['jaipur', 'pottery', 'rajasthan', 'craft', 'blue pottery']
  },
  {
    id: 'konark-sun-temple', name: 'Sun Temple, Konark', state: 'Odisha', city: 'Konark', category: 'Architecture',
    description: 'A monumental temple conceived as the chariot of the Sun God, marked by sculptural detail and monumental stone wheels.',
    history: 'The temple was built in the 13th century during the reign of King Narasimhadeva I of the Eastern Ganga dynasty.',
    significance: 'Its architecture combines religious symbolism, astronomy-inspired imagery and extraordinary stone carving.',
    facts: ['The temple is designed as a giant chariot.', 'The complex is famous for its carved wheels.', 'It is a UNESCO World Heritage Site.'],
    latitude: 19.8876, longitude: 86.0945,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Konark%20Sun%20Temple%20Wheel.jpg',
    tags: ['odisha', 'sun temple', 'eastern ganga', 'unesco']
  },
  {
    id: 'hornbill-festival', name: 'Hornbill Festival', state: 'Nagaland', city: 'Kisama', category: 'Festivals',
    description: 'A major cultural festival where Naga communities present music, dance, food, crafts and traditional practices.',
    history: 'The festival was established in 2000 by the Government of Nagaland to showcase and preserve the state’s diverse cultural traditions.',
    significance: 'It creates a public space for cultural exchange while giving visitors an introduction to the diversity of Naga communities.',
    facts: ['It is held at Kisama Heritage Village near Kohima.', 'Multiple Naga tribes participate.', 'Performances and craft demonstrations are central to the event.'],
    latitude: 25.6039, longitude: 94.1046,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hornbill%20Festival%20Nagaland.jpg',
    tags: ['nagaland', 'festival', 'naga', 'kohima', 'living heritage']
  },
  {
    id: 'channapatna-toys', name: 'Channapatna Toys', state: 'Karnataka', city: 'Channapatna', category: 'Crafts',
    description: 'Handcrafted wooden toys known for rounded forms, bright finishes and a distinctive lac-turnery technique.',
    history: 'The craft developed in and around Channapatna with roots in local woodcraft and techniques associated with lacquer finishing.',
    significance: 'The tradition shows how a craft can combine inherited skills with changing designs and markets.',
    facts: ['Local artisans work with soft woods such as hale and ivory wood varieties.', 'Lacquer is used to create the characteristic finish.', 'The craft has evolved beyond toys into home and educational products.'],
    latitude: 12.8698, longitude: 77.2741,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Channapatna%20toys.jpg',
    tags: ['karnataka', 'toys', 'woodcraft', 'channapatna']
  },
  {
    id: 'ajanta-caves', name: 'Ajanta Caves', state: 'Maharashtra', city: 'Aurangabad', category: 'Historical Sites',
    description: 'Rock-cut Buddhist caves with celebrated murals, sculptures and monastic spaces carved into a horseshoe-shaped gorge.',
    history: 'The caves were created in phases, with major activity in the 2nd century BCE and again around the 5th century CE.',
    significance: 'Ajanta preserves an exceptional record of Buddhist art, painting and architecture in ancient India.',
    facts: ['Many caves served as monasteries and prayer halls.', 'The murals include narrative scenes and courtly life.', 'Ajanta is a UNESCO World Heritage Site.'],
    latitude: 20.5519, longitude: 75.7033,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ajanta%20Caves%2C%20India.jpg',
    tags: ['buddhist', 'caves', 'murals', 'maharashtra', 'unesco']
  }
];
export default heritage;
