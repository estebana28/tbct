import AdminTable from '@/ui/tables/adminTable'
import AddNewItem from '../addNewItem'

export default function Topics({ topicsData }: any) {
  const headers = ['idTag', 'name', 'description', 'questionsQty', 'status']

  return (
    <div>
      <div className="flex justify-end">
        <AddNewItem panel={'topics'} fields={headers} />
      </div>
      <AdminTable headers={headers} data={topicsData.topics} />
    </div>
  )
}
