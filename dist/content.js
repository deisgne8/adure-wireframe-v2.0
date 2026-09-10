// Public, editable content. Source/approval decisions live in ../content-approvals.json.
export const site = {
  name: 'Abu Dhabi United Real Estate',
  email: 'Inquiries@adu-re.com',
  cities: ['Abu Dhabi', 'Dubai', 'Al Ain'],
  year: '2026',
  links: {find:'#discover', sell:'#contact', manage:'#management', enquiry:'#contact'},
  proof: {units:'3,000+', team:'200+', cities:'3'},
};

export const journeys = {
  buy: {image:'architecture-courtyard',alt:'Landscaped walkway beside curved residential buildings',body:'Find a place that fits your life and investment ambitions.',cta:'Explore buying',href:'#discover'},
  sell: {image:'architecture-waterfront',alt:'Waterfront apartments in warm evening light',body:'Bring your property to market with clarity, confidence and care.',cta:'Start selling',href:'#contact'},
  rent: {image:'architecture-terraces',alt:'Sunlit terraces overlooking an open residential courtyard',body:'Discover a space that works for the way you live.',cta:'Explore renting',href:'#discover'},
  manage: {image:'architecture-palms',alt:'Sunlight through palms beside a carefully maintained facade',body:'Put your property in expert hands, with lasting value in view.',cta:'Explore management',href:'#management'},
};

export const management = [
  {id:'leasing',title:'Leasing & Operations',image:'architecture-palms',alt:'Palm-lined facade in the supplied portfolio',body:'Connect the right tenants with the right spaces, supported by considered pricing, responsive relationships and coordinated day-to-day operations.',examples:['Tenant relationships','Lease renewals','Occupancy planning'],outcome:'A property that stays connected.'},
  {id:'facility',title:'Facility Management',image:'architecture-windows',alt:'Rhythmic windows and sunshades on a residential facade',body:'Protect the everyday experience through planned maintenance, attentive service and reliable systems that keep your property working at its best.',examples:['Planned maintenance','Asset inspections','Customer support'],outcome:'Every detail, working together.'},
  {id:'financial',title:'Financial & Legal Management',image:'architecture-facade',alt:'Precisely arranged balconies and windows on a modern building',body:'Make informed decisions with transparent financial reporting, disciplined collections and dedicated legal coordination that protect your interests throughout the property lifecycle.',examples:['Owner reporting','Financial oversight','Legal coordination'],outcome:'Clarity behind every decision.'},
];

// Fictional collection metadata solely exercises this homepage's search UI.
// Images are supplied portfolio photography, not evidence of a listing in these locations.
export const collections = [
  {id:'waterfront',name:'Waterfront living',location:'Abu Dhabi',type:'Apartment',beds:[1,2,3],buy:['1m-3m','3m-plus'],rent:['100k-200k','200k-plus'],image:'architecture-waterfront',alt:'Evening light on curved balconies beside the sea'},
  {id:'city',name:'City connections',location:'Dubai',type:'Apartment',beds:[1,2],buy:['under-1m','1m-3m'],rent:['under-100k','100k-200k'],image:'architecture-city',alt:'A modern building with shaded windows on an urban street'},
  {id:'space',name:'Room to grow',location:'Al Ain',type:'Villa',beds:[3,4,5],buy:['1m-3m','3m-plus'],rent:['100k-200k','200k-plus'],image:'architecture-community',alt:'Low-rise homes and greenery under an evening sky'},
];
export const budgets = {
  buy: [['any','Any budget'],['under-1m','Below AED 1m'],['1m-3m','AED 1m–3m'],['3m-plus','AED 3m+']],
  rent: [['any','Any budget'],['under-100k','Below AED 100k / yr'],['100k-200k','AED 100k–200k / yr'],['200k-plus','AED 200k+ / yr']],
};
export function matchCollections(filters) {
  return collections.filter(item =>
    (filters.location==='any'||item.location===filters.location) &&
    (filters.type==='any'||item.type===filters.type) &&
    (filters.beds==='any'||(filters.beds==='4-plus'?item.beds.some(n=>n>=4):item.beds.includes(Number(filters.beds)))) &&
    (filters.budget==='any'||item[filters.intent].includes(filters.budget))
  );
}
export const portfolio = [
  {id:'waterfront',caption:'Waterfront rhythm',detail:'Architecture shaped by its surroundings.',image:'architecture-waterfront',alt:'Curved waterfront balconies warmed by the evening sun'},
  {id:'curves',caption:'A different perspective',detail:'Sculptural forms, seen from the ground.',image:'architecture-curves',alt:'Curved residential building with layered white terraces'},
  {id:'facade',caption:'Order in the detail',detail:'A closer look at the building fabric.',image:'architecture-facade',width:1333,height:723,alt:'Repeating windows and balconies create a geometric facade'},
  {id:'courtyard',caption:'Space to connect',detail:'Landscape and architecture in conversation.',image:'architecture-courtyard',alt:'A landscaped pedestrian route through a residential development'},
  {id:'horizon',caption:'An open outlook',detail:'A view beyond the everyday.',image:'architecture-horizon',alt:'A glimpse of the sea between two residential buildings'},
];
export const transition = [
  {title:'Review',week:'Week 1',body:'Review documents, establish your priorities and prepare the property for inspection.',gain:'A clear starting point, with responsibilities understood from the beginning.',evidence:['Property records','Lease documentation','Handover audit'],next:'Inspect'},
  {title:'Inspect',week:'Week 2',body:'Inspect the asset, connect with tenants and prepare a coordinated takeover.',gain:'Visibility into the property’s condition and the needs of its tenants.',evidence:['Asset inspection','Tenant communication','Condition review'],next:'Takeover'},
  {title:'Takeover',week:'Week 3',body:'Coordinate operations and establish reporting, ready for a managed daily routine.',gain:'An organised handover and a clear line of sight into operations.',evidence:['Operational handover','Reporting setup','Service coordination'],next:'Manage'},
  {title:'Manage',week:'Week 4+',body:'Manage daily performance, report clearly and turn insight into ongoing improvement.',gain:'Ongoing oversight that keeps your property and its performance in view.',evidence:['Owner reporting','Performance monitoring','Ongoing management'],next:null},
];
// Add only logos with explicit website-use approval.
export const clients = [];
