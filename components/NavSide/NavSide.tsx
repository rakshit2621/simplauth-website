"use client";
import logo from "@/Resources/Images/logo.png";
// import nextlogo from "@/Resources/Images/nextjs.png";
// import reactlogo from "@/Resources/Images/react.png";
import * as React from "react";
import Image from "next/image";
import "@/components/CSS/Navbar.css";
import { data } from "@/components/data/SidebarList";
import { Check, ChevronRight, ChevronsUpDown } from "lucide-react";
import Index from "@/components/MainSide/Index";
import {
  Breadcrumb,
  BreadcrumbItem,
  // BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  // SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  // useSidebar,
} from "@/components/ui/sidebar";
// This is sample data.
interface NavItem {
  title: string;
  url: string;
  isActive?: boolean;
  breadcrumbOne: string;
  breadcrumbTwo?: string | undefined;
  number?: number;
}
interface NavItem2 {
  title: string;
  url: string;
  isActive?: boolean;
  breadcrumbOne: string;
  breadcrumbTwo?: string | undefined;
  number: number;
  items?: [];
}

export default function Component() {
  const [selectedVersion, setSelectedVersion] = React.useState(
    data.versions[0]
  );
  const [breadcrumbfirst, setBreadcrumbfirst] = React.useState("");
  const [breadcrumbtwo, setBreadcrumbtwo] = React.useState("");
  const [selectedone, setSelectedone] = React.useState("");
  const [number, setNumber] = React.useState(1);
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  // const { open, setOpen } = useSidebar();
  React.useEffect(() => {
    setBreadcrumbfirst(data.navMain[0].title);
    setSelectedone(data.navMain[0].items[0].title);
    data.navMain[0].items[0].isActive = true;
  }, []);

  function handleclick(item: NavItem) {
    console.log("clicked", item.title);
    data.navMain.forEach((group) =>
      group.items.forEach((i) => {
        i.isActive = false;
      })
    );
    data.navMain[1]?.items?.forEach((group) => {
      // Use a type guard to check if 'group' has 'items'
      if ("items" in group && Array.isArray(group.items)) {
        group.items.forEach((i) => {
          i.isActive = false;
        });
      }
    });

    item.isActive = true;
    setNumber(item.number || 0);
    if (item.breadcrumbTwo != "") {
      setBreadcrumbtwo(item.breadcrumbTwo ?? "");
    }
    setSelectedone(item.title);
    setBreadcrumbfirst(item.breadcrumbOne);
    setSidebarOpen(false);
  }

  function handleclick2(item: NavItem2) {
    console.log("clicked", item.title);
    data.navMain.forEach((group) =>
      group.items.forEach((i) => {
        i.isActive = false;
      })
    );
    data.navMain[1]?.items?.forEach((group) => {
      if ("items" in group && Array.isArray(group.items)) {
        group.items.forEach((i) => {
          i.isActive = false;
        });
      }
    });
    item.isActive = true;
    setNumber(item.number);
    if (item.breadcrumbTwo != "") {
      setBreadcrumbtwo(item.breadcrumbTwo ?? "");
    }
    setSelectedone(item.title);
    setBreadcrumbfirst(item.breadcrumbOne);
    setSidebarOpen(false);
  }

  function handleclick3() {
    console.log("clicked creator");
    data.navMain.forEach((group) =>
      group.items.forEach((i) => {
        i.isActive = false;
      })
    );
    data.navMain[1]?.items?.forEach((group) => {
      if ("items" in group && Array.isArray(group.items)) {
        group.items.forEach((i) => {
          i.isActive = false;
        });
      }
    });

    setNumber(11);
    setSelectedone("Creator");
    setSidebarOpen(false);
  }

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <SidebarProvider>
        {/* I want to ignore the next line open as it is throwing error so can */}
        {/* open={sidebarOpen} onOpenChange={setSidebarOpen} */}
        {/* ts-ignore */}
        {/* // eslint-disable-next-line react/no-unknown-property */}
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <Image
                        src={logo}
                        className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                        alt="logo"
                      ></Image>
                      <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold text-md">
                          Simplauth Documentation
                        </span>
                        <span className="">v{selectedVersion}</span>
                      </div>
                      <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width]"
                    align="start"
                  >
                    {data.versions.map((version) => (
                      <DropdownMenuItem
                        key={version}
                        onSelect={() => setSelectedVersion(version)}
                      >
                        v{version}{" "}
                        {version === selectedVersion && (
                          <Check className="ml-auto" />
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <hr />
          <SidebarContent className="gap-0">
            {/* I created a collapsible SidebarGroup for each parent. */}
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                title={item.title}
                defaultOpen
                className="group/collapsible"
              >
                <SidebarGroup>
                  <SidebarGroupLabel
                    asChild
                    className="group/label font-semibold text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <CollapsibleTrigger>
                      {item.title}{" "}
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenu>
                          {item.items &&
                            Array.isArray(item.items) &&
                            item.items
                              .filter(
                                (subItem) =>
                                  subItem.breadcrumbOne === "Getting Started"
                              )
                              .map((filteredItem) => (
                                <SidebarMenuItem key={filteredItem.title}>
                                  <SidebarMenuButton
                                    asChild
                                    isActive={filteredItem.isActive}
                                  >
                                    <a
                                      href={filteredItem.url}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleclick(filteredItem);
                                      }}
                                    >
                                      {filteredItem.title}
                                    </a>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              ))}
                          {item.items
                            .filter(
                              (subItem) =>
                                subItem.breadcrumbOne ===
                                "Building Your Application"
                            )
                            .map((filteredItem) => (
                              //here i want to create a new collapsible for each item
                              //i want to render nextlogo and reactlogo infront of the title
                              <Collapsible
                                key={filteredItem.title}
                                title={filteredItem.title}
                                defaultOpen
                                className="group/collapsible"
                              >
                                <SidebarGroup>
                                  <SidebarGroupLabel
                                    asChild
                                    className="group/label font-semibold text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                  >
                                    <CollapsibleTrigger>
                                      {/* <Image
                                      src={nextlogo}
                                      className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                                      alt="logo"
                                    /> */}
                                      {filteredItem.title}{" "}
                                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                    </CollapsibleTrigger>
                                  </SidebarGroupLabel>
                                  <CollapsibleContent>
                                    <SidebarGroupContent>
                                      <SidebarMenu>
                                        {filteredItem?.items?.map(
                                          (item: NavItem2) => (
                                            <SidebarMenuItem key={item.title}>
                                              <SidebarMenuButton
                                                asChild
                                                isActive={item.isActive}
                                              >
                                                <a
                                                  href={item.url}
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    handleclick2(item);
                                                  }}
                                                >
                                                  {item.title}
                                                </a>
                                              </SidebarMenuButton>
                                            </SidebarMenuItem>
                                          )
                                        )}
                                      </SidebarMenu>
                                    </SidebarGroupContent>
                                  </CollapsibleContent>
                                </SidebarGroup>
                              </Collapsible>
                            ))}
                        </SidebarMenu>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            ))}
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header className="navbar flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" onClick={toggleSidebar} />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  {/* <BreadcrumbLink href="#">{breadcrumbfirst}</BreadcrumbLink> */}
                  <BreadcrumbItem>{breadcrumbfirst}</BreadcrumbItem>
                </BreadcrumbItem>
                {breadcrumbtwo ? (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{breadcrumbtwo}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : null}
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{selectedone}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            {/* <button
            className="border-4 ml-auto bg-gradient-to-r from-violet-800 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-violet-700 hover:to-purple-500 hover:shadow-xl hover:translate-y-1 focus:outline-none relative"
            onClick={(e) => {
              e.preventDefault();
              handleclick3();
            }}
          >
            ✨The Creator🙋
          </button> */}

            <button
              className="border-4 ml-auto bg-gradient-to-r from-violet-800 to-purple-600 text-white px-4 py-2 rounded-3xl hover:bg-violet-600 transition animated-button relative"
              onClick={(e) => {
                e.preventDefault();
                handleclick3();
              }}
            >
              ✨The Creator🙋
            </button>
          </header>

          <Index number={number} />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
