import * as heroiconsSolid16 from '@heroicons/vue/16/solid';
import * as heroiconsSolid20 from '@heroicons/vue/20/solid';
import * as heroiconsOutline24 from '@heroicons/vue/24/outline';
import * as heroiconsSolid24 from '@heroicons/vue/24/solid';
declare function getHeroicon<T extends keyof typeof heroiconsSolid16>(size: 'solid16', name: keyof typeof heroiconsSolid16): (typeof heroiconsSolid16)[T];
declare function getHeroicon<T extends keyof typeof heroiconsSolid20>(size: 'solid20', name: keyof typeof heroiconsSolid20): (typeof heroiconsSolid20)[T];
declare function getHeroicon<T extends keyof typeof heroiconsSolid24>(size: 'solid24', name: keyof typeof heroiconsSolid24): (typeof heroiconsSolid24)[T];
declare function getHeroicon<T extends keyof typeof heroiconsOutline24>(size: 'outline24', name: keyof typeof heroiconsOutline24): (typeof heroiconsOutline24)[T];
export { getHeroicon };
