import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronRight,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

// Menu items with optional submenu
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    submenu: [
      { title: "Unread", url: "#inbox/unread" },
      { title: "Starred", url: "#inbox/starred" },
    ],
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    submenu: [
      { title: "Profile", url: "#settings/profile" },
      { title: "Preferences", url: "#settings/preferences" },
    ],
  },
]

export function SideBar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon size={16} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>

                  {item.submenu && (
                    <SidebarMenuSub>
                      {item.submenu.map((subitem) => (
                        <SidebarMenuSubItem key={subitem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subitem.url} className="pl-6">
                              {subitem.title}
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
