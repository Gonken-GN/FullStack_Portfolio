import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'

import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import testimonials from './schemas/testimonials'
import abouts from './schemas/abouts'
import brands from './schemas/brands'
import contact from './schemas/contact'
import experiences from './schemas/experiences'
import skills from './schemas/skills'
import workExperience from './schemas/workExperience'
import works from './schemas/works'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'navy-jackal',

  projectId: '6xavzm61',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: [works, testimonials, brands, abouts, skills, workExperience, experiences, contact],
  },
})

