import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Topics from './tabs/topics'
import Levels from './tabs/levels'
import Questions from './tabs/questions'
import { getTopicsData } from '@/utils/api-hooks/topic'
import { getLevelsData } from '@/utils/api-hooks/levels'
import { getQuestionsData } from '@/utils/api-hooks/questions'
import { Suspense } from 'react'

export default async function TabsPanel() {
  const topicsData = await getTopicsData()
  const levelsData = await getLevelsData()
  const questionsData = await getQuestionsData()

  return (
    <div className="mx-6 bg-slate-400 rounded-xl border-slate-700">
      <Tabs isFitted variant="enclosed" className="font-bold">
        <TabList mb="1em">
          <Tab>Topics</Tab>
          <Tab>Levels</Tab>
          <Tab>Questions</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Suspense fallback={<div>Loading...</div>}>
              <Topics topicsData={topicsData.topics} />
            </Suspense>
          </TabPanel>
          <TabPanel>
            <Suspense fallback={<div>Loading...</div>}>
              <Levels levelsData={levelsData.levels} />
            </Suspense>
          </TabPanel>
          <TabPanel>
            <Suspense fallback={<div>Loading...</div>}>
              <Questions questionsData={questionsData.questions} />
            </Suspense>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
