export const BASE_URL = 'https://www.srvdetailing.co.uk';

export const PHONE = '+447375759686';
export const PHONE_DISPLAY = '07375 759686';
export const PHONE_INTERNATIONAL = '+44 7375 759686';

export const BUSINESS_NAME = 'SRV Detailing';

export const ADDRESS = {
  streetAddress: 'Globe House, Globe Lane',
  addressLocality: 'Dukinfield',
  addressRegion: 'Greater Manchester',
  postalCode: 'SK16 4RG',
  addressCountry: 'GB',
} as const;

export const GEO = {
  latitude: '53.4746',
  longitude: '-2.0873',
} as const;

export const BUSINESS_INFO = {
  name: BUSINESS_NAME,
  phone: PHONE,
  phoneDisplay: PHONE_DISPLAY,
  url: BASE_URL,
  address: ADDRESS,
  geo: GEO,
  priceRange: '££',
  yearsExperience: 22,
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
} as const;
