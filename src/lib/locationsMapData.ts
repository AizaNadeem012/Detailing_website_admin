export interface LocationMapEntry {
  /** Area slug as used in the URL path (e.g. 'city-centre', 'didsbury') */
  slug: string;
  name: string;
  region: 'manchester' | 'stockport';
  mapEmbedUrl: string;
}

/**
 * Google Maps embed URLs for all served locations.
 * Manchester area slugs match /manchester/areas/[area].
 * Stockport area slugs match /stockport/areas/[area].
 * Hub entries ('manchester', 'stockport') are for the top-level region pages.
 */
export const locationsMapData: LocationMapEntry[] = [
  // ── Manchester hub ──────────────────────────────────────────────────────────
  {
    slug: 'manchester',
    name: 'Manchester',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75993.22202938075!2d-2.2234628499999998!3d53.472245449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!5e0!3m2!1sen!2s!4v1771783650843!5m2!1sen!2s',
  },

  // ── Manchester areas ─────────────────────────────────────────────────────────
  {
    slug: 'city-centre',
    name: 'Manchester City Centre',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151986.118181911!2d-2.388271290309619!3d53.47233644547979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!5e0!3m2!1sen!2s!4v1771783750556!5m2!1sen!2s',
  },
  {
    slug: 'didsbury',
    name: 'Didsbury',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9512.390262919113!2d-2.242731886263875!3d53.41308124666716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb25e64b5ca75%3A0x6fdb3fb871f94cf1!2sDidsbury%2C%20Manchester%2C%20UK!5e0!3m2!1sen!2s!4v1771783815548!5m2!1sen!2s',
  },
  {
    slug: 'chorlton',
    name: 'Chorlton',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19012.541772391123!2d-2.299810829489497!3d53.44043704137739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bad87e9f80d69%3A0xead1c26661410661!2sChorlton-cum-Hardy%2C%20Manchester%2C%20UK!5e0!3m2!1sen!2s!4v1771783840354!5m2!1sen!2s',
  },
  {
    slug: 'salford',
    name: 'Salford',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37979.20133090877!2d-2.3293101348930256!3d53.491688431780005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae0dfe455711%3A0x6df4febf58f5d816!2sSalford%2C%20UK!5e0!3m2!1sen!2s!4v1771783882090!5m2!1sen!2s',
  },
  {
    slug: 'trafford',
    name: 'Trafford',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76088.5790773533!2d-2.448139870904745!3d53.418973450981476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bab879b99092b%3A0x40cf99eed6d3430!2sTrafford%2C%20UK!5e0!3m2!1sen!2s!4v1771783905713!5m2!1sen!2s',
  },
  {
    slug: 'sale',
    name: 'Sale',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38042.6392032858!2d-2.3606195362100806!3d53.420818011746796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bab7ffec440d1%3A0x24be9c8c42b76580!2sSale%2C%20UK!5e0!3m2!1sen!2s!4v1771783932010!5m2!1sen!2s',
  },
  {
    slug: 'altrincham',
    name: 'Altrincham',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19034.137782376944!2d-2.38405912971256!3d53.3921595695108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a52c64fb162a3%3A0x658e6a972f3186bb!2sAltrincham%2C%20UK!5e0!3m2!1sen!2s!4v1771783954186!5m2!1sen!2s',
  },
  {
    slug: 'oldham',
    name: 'Oldham',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75878.6255815785!2d-2.1760783121024927!3d53.536217204035744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb0aa67777af1%3A0x18b3b8d9a96b3258!2sOldham%2C%20UK!5e0!3m2!1sen!2s!4v1771783976882!5m2!1sen!2s',
  },
  {
    slug: 'rochdale',
    name: 'Rochdale',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75720.38639375588!2d-2.274146805467731!3d53.6244652181936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb88ceb3db3ab%3A0x9a885edb20da6527!2sRochdale%2C%20UK!5e0!3m2!1sen!2s!4v1771783998830!5m2!1sen!2s',
  },
  {
    slug: 'bury',
    name: 'Bury',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75759.86807318345!2d-2.3808341071232135!3d53.602456164540136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba2d7be45c869%3A0x5ecbd6be7ddd28b4!2sBury%2C%20UK!5e0!3m2!1sen!2s!4v1771784032274!5m2!1sen!2s',
  },
  {
    slug: 'bolton',
    name: 'Bolton',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75782.38415086454!2d-2.5367195580672472!3d53.58990179097781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0629dc3b1c93%3A0xcaa40cfafe557822!2sBolton%2C%20UK!5e0!3m2!1sen!2s!4v1771784052363!5m2!1sen!2s',
  },
  {
    slug: 'wigan',
    name: 'Wigan',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75876.6183299337!2d-2.7337898120182844!3d53.53733725167684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b04345517a4d3%3A0x5702a66b03f2d953!2sWigan%2C%20UK!5e0!3m2!1sen!2s!4v1771784075705!5m2!1sen!2s',
  },
  {
    slug: 'tameside',
    name: 'Tameside',
    region: 'manchester',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75981.5630354119!2d-2.148925866418201!3d53.4787563250574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb61836fca3bf%3A0x40cf99eed6d33d0!2sBorough%20of%20Tameside%2C%20UK!5e0!3m2!1sen!2s!4v1771784095449!5m2!1sen!2s',
  },

  // ── Stockport hub ─────────────────────────────────────────────────────────────
  {
    slug: 'stockport',
    name: 'Stockport',
    region: 'stockport',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76091.05708121698!2d-2.2314628210086087!3d53.417588603898594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a3515ca33c427%3A0xf418f67b823efe48!2sStockport%2C%20UK!5e0!3m2!1sen!2s!4v1771784129104!5m2!1sen!2s',
  },

  // ── Stockport areas ───────────────────────────────────────────────────────────
  {
    slug: 'bramhall',
    name: 'Bramhall',
    region: 'stockport',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38090.96123268684!2d-2.2043987372132907!3d53.366790772685114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4b55fd04519d%3A0xf4af73011359be8!2sBramhall%2C%20Stockport%2C%20UK!5e0!3m2!1sen!2s!4v1771784153730!5m2!1sen!2s',
  },
  {
    slug: 'cheadle',
    name: 'Cheadle',
    region: 'stockport',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19036.077596955867!2d-2.2276044797326353!3d53.38782167203802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4cb5adc29405%3A0xa0cf9a1721bf9a0!2sCheadle%2C%20UK!5e0!3m2!1sen!2s!4v1771784174730!5m2!1sen!2s',
  },
  {
    slug: 'marple',
    name: 'Marple',
    region: 'stockport',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38071.26700411155!2d-2.1039231368044478!3d53.38881479784624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4aab202ad8e3%3A0x265e8d265bd1c909!2sMarple%2C%20UK!5e0!3m2!1sen!2s!4v1771784194402!5m2!1sen!2s',
  },
  {
    slug: 'hazel-grove',
    name: 'Hazel Grove',
    region: 'stockport',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38083.955929118354!2d-2.1559866370678242!3d53.37462551384943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb4cd0779b649%3A0x6cfe9585a77b65ff!2sHazel%20Grove%2C%20Stockport%2C%20UK!5e0!3m2!1sen!2s!4v1771784215258!5m2!1sen!2s',
  },
  {
    slug: 'heaton-moor',
    name: 'Heaton Moor',
    region: 'stockport',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4755.662322733692!2d-2.1927777547253515!3d53.4178456333727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3a2ebe82f51%3A0x504222a08aeb5867!2sHeaton%20Moor%2C%20Stockport%2C%20UK!5e0!3m2!1sen!2s!4v1771784234059!5m2!1sen!2s',
  },
  {
    slug: 'edgeley',
    name: 'Edgeley',
    region: 'stockport',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9515.112893698648!2d-2.1810952362780087!3d53.400907000270784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb36c3411f8a1%3A0xe90ee6f83faef729!2sEdgeley%2C%20Stockport%2C%20UK!5e0!3m2!1sen!2s!4v1771784253438!5m2!1sen!2s',
  },
  {
    slug: 'reddish',
    name: 'Reddish',
    region: 'stockport',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9506.897547029355!2d-2.1703724862356557!3d53.437636089397024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3f33bc8dedf%3A0xca98f4410f00f28f!2sReddish%2C%20Stockport%2C%20UK!5e0!3m2!1sen!2s!4v1771784273875!5m2!1sen!2s',
  },
];

/** Look up a location's map embed URL by its slug. */
export function getMapEmbedUrl(slug: string): string | undefined {
  return locationsMapData.find((loc) => loc.slug === slug)?.mapEmbedUrl;
}
