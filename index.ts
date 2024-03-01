import * as heroiconsSolid16 from '@heroicons/vue/16/solid'
import * as heroiconsSolid20 from '@heroicons/vue/20/solid'
import * as heroiconsOutline24 from '@heroicons/vue/24/outline'
import * as heroiconsSolid24 from '@heroicons/vue/24/solid'

function getHeroicon<T extends keyof typeof heroiconsSolid16>(size: 'solid16', name: keyof typeof heroiconsSolid16): (typeof heroiconsSolid16)[T]
function getHeroicon<T extends keyof typeof heroiconsSolid20>(size: 'solid20', name: keyof typeof heroiconsSolid20): (typeof heroiconsSolid20)[T]
function getHeroicon<T extends keyof typeof heroiconsSolid24>(size: 'solid24', name: keyof typeof heroiconsSolid24): (typeof heroiconsSolid24)[T]
function getHeroicon<T extends keyof typeof heroiconsOutline24>(size: 'outline24', name: keyof typeof heroiconsOutline24): (typeof heroiconsOutline24)[T]
function getHeroicon(size: 'solid16' | 'solid20' | 'solid24' | 'outline24', name: string) {
    switch (size) {
        case 'solid16':
            return heroiconsSolid16[name]
        case 'solid20':
            return heroiconsSolid20[name]
        case 'solid24':
            return heroiconsSolid24[name]
        case 'outline24':
            return heroiconsOutline24[name]
    }
}

export { getHeroicon }
