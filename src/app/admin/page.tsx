import AdminNavbar from '@/components/admin/navbar'
import TabsPanel from '@/components/admin/tabsPanel'
import { getTopicsData } from '@/utils/api-hooks/topic'

export default async function AdminPage() {
  return (
    <div className="h-full bg-slate-300">
      <AdminNavbar />
      <div className="pt-28">
        <TabsPanel />
      </div>
    </div>
  )
}
