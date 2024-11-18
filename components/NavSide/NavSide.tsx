"use client";
import logo from "@/Resources/Images/logo.png";
import nextlogo from "@/Resources/Images/nextjs.png";
import reactlogo from "@/Resources/Images/react.png";
import * as React from "react";
import Image from "next/image";
import "@/components/CSS/Navbar.css";
import { data } from "@/components/data/SidebarList";
import { Check, ChevronRight, ChevronsUpDown } from "lucide-react";
import Index from "@/components//MainSide/Index";
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
} from "@/components/ui/sidebar";
// This is sample data.
interface NavItem {
  title: string;
  url: string;
  isActive?: boolean;
  breadcrumbOne: string;
  breadcrumbTwo?: string | undefined;
  number: number;
}
interface NavItem2 {
  title: string;
  url: string;
  isActive?: boolean;
  breadcrumbOne: string;
  breadcrumbTwo?: string | undefined;
  number: number;
}
export default function Component() {
  const [selectedVersion, setSelectedVersion] = React.useState(
    data.versions[0]
  );
  const [breadcrumbfirst, setBreadcrumbfirst] = React.useState("");
  const [breadcrumbtwo, setBreadcrumbtwo] = React.useState("");
  const [selectedone, setSelectedone] = React.useState("");
  const [number, setNumber] = React.useState(1);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

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
    data.navMain[1].items.forEach((group) =>
      group.items.forEach((i) => {
        i.isActive = false;
      })
    );
    item.isActive = true;
    setNumber(item.number);
    if (item.breadcrumbTwo != "") {
      setBreadcrumbtwo(item.breadcrumbTwo);
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
    data.navMain[1].items.forEach((group) =>
      group.items.forEach((i) => {
        i.isActive = false;
      })
    );
    item.isActive = true;
    setNumber(item.number);
    if (item.breadcrumbTwo != "") {
      setBreadcrumbtwo(item.breadcrumbTwo);
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
    data.navMain[1].items.forEach((group) =>
      group.items.forEach((i) => {
        i.isActive = false;
      })
    );

    setNumber(11);
    // if (item.breadcrumbTwo != "") {
    //   setBreadcrumbtwo(item.breadcrumbTwo);
    // }
    setSelectedone("Creator");
    // setBreadcrumbfirst("creator");
    setSidebarOpen(false);
  }

  return (
    <SidebarProvider className="navbar">
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
                        {item.items
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
                                      {filteredItem.items.map((item) => (
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
                                      ))}
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
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
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
          {/* <a
            className="border-4 ml-auto bg-violet-800 text-white px-4 py-2 rounded-3xl hover:bg-violet-600 transition animated-button relative"
            href="/creator"
          >
            ✨The creator 🙋
          </a> */}
          <button
            className="border-4 ml-auto bg-violet-800 text-white px-4 py-2 rounded-3xl hover:bg-violet-600 transition animated-button relative"
            onClick={(e) => {
              e.preventDefault();
              handleclick3();
            }}
          >
            ✨The Creator🙋
          </button>
        </header>

        {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         main page
        </main> */}
        <Index number={number} />
      </SidebarInset>
    </SidebarProvider>
  );
}
