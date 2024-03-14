import AdminNavbar from '@/components/admin/navbar'
import TabsPanel from '@/components/admin/tabsPanel'

export default function AdminPage() {
  return (
    <div className="h-full bg-slate-300">
      <AdminNavbar />
      <div className="pt-28">
        <TabsPanel />
      </div>
    </div>
  )
}
