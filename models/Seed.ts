import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { checkbox, integer, text } from "@keystone-6/core/fields";

export const Seed = list({
  access: allowAll,
  fields: {
    name: text({
      ui: {
        description: 'Common name of plant'
      },
      validation: { isRequired: true }
    }),
    species: text({
      ui: {
        description: 'Binomial latin name of plant if available or important'
      }
    }),
    plantType: text({
      ui: {
        description: 'I.E. "pepper" or "cabbage"'
      },
      validation: { isRequired: true }
    }),
    companyName: text({
      validation: { isRequired: true }
    }),
    link: text(),
    packedForSeason: text({
      ui: {
        description: 'The year it was packed for'
      }
    }),
    daysToEmerge: text({
      ui: {
        description: 'It can be a number or range of numbers'
      }
    }),
    plantingDepth: text({
      ui: {
        description: 'Try to include a unit like " or cm'
      }
    }),
    seedSpacing: text({
      ui: {
        description: 'In inches please!'
      }
    }),
    rowSpacing: text({
      ui: {
        description: 'Also in inches!'
      }
    }),
    daysToMaturity: text(),
    weeksAfterLastFrostToStartIndoors: text(),
    weeksBeforeFirstFrostToStartIndoors: text(),
    weeksAfterLastFrostToSowOutdoors: text(),
    weeksBeforeFirstFrostToSowOutdoors: text(),
    startIndoors: checkbox(),
    directSow: checkbox(),
    isHeirloom: checkbox(),
    isOpenPollenated: checkbox(),
  }
})