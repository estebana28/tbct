'use client'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Topics from './tabs/topics'
import Levels from './tabs/levels'
import Questions from './tabs/questions'
import { getTopicsData } from '@/utils/api-hooks/topic'
import { getLevelsData } from '@/utils/api-hooks/levels'
import { getQuestionsData } from '@/utils/api-hooks/questions'
import { Suspense, useEffect, useState } from 'react'

export default function TabsPanel() {
  const [topicsData, setTopicsData] = useState([])
  const [levelsData, setLevelsData] = useState([])
  const [questionsData, setQuestionsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const topics = await getTopicsData()
      const levels = await getLevelsData()
      const questions = await getQuestionsData()
      setTopicsData(topics)
      setLevelsData(levels)
      setQuestionsData(questions)
    }
    fetchData()
  }, [])

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
              <Topics topicsData={topicsData} />
            </Suspense>
          </TabPanel>
          <TabPanel>
            <Suspense fallback={<div>Loading...</div>}>
              <Levels levelsData={levelsData} />
            </Suspense>
          </TabPanel>
          <TabPanel>
            <Suspense fallback={<div>Loading...</div>}>
              <Questions questionsData={questionsData} />
            </Suspense>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
