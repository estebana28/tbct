import AdminTable from '@/ui/tables/adminTable'

export default function Levels({ levelsData }: any) {
  const headers = ['Name', 'Color', 'Number', 'Status']
  return (
    <div>
      <AdminTable headers={headers} data={levelsData} />
    </div>
  )
}
