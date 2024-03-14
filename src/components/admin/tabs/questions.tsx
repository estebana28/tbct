import AdminTable from '@/ui/tables/adminTable'

export default function Questions({ questionsData }: any) {
  const headers = ['idTag', 'question', 'levels', 'choices', 'answer', 'status']
  return (
    <div>
      <AdminTable headers={headers} data={questionsData} />
    </div>
  )
}
