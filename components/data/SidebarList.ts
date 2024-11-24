export const data: {
  versions: string[];
  navMain: {
    title: string;
    url: string;
    items: {
      title: string;
      url: string;
      isActive: boolean;
      breadcrumbOne: string;
      breadcrumbTwo?: string;
      number?: number;
      items?: {
        title: string;
        url: string;
        isActive: boolean;
        breadcrumbOne: string;
        breadcrumbTwo?: string | undefined;
        number: number;
      }[];
    }[];
  }[];
} = {
  versions: ["1.0.1"],
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
          isActive: false,
          breadcrumbOne: "Getting Started",
          number: 1,
        },
        {
          title: "Project Structure",
          url: "#",
          isActive: false,
          breadcrumbOne: "Getting Started",
          number: 2,
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: `NextJs`,
          url: "#",
          isActive: false,
          breadcrumbOne: "Building Your Application",
          breadcrumbTwo: "NextJs",
          items: [
            {
              title: "Email Signup",
              url: "#",
              isActive: false,
              breadcrumbOne: "Building Your Application",
              breadcrumbTwo: "NextJs",
              number: 3,
            },
            {
              title: "Email Login",
              url: "#",
              isActive: false,
              breadcrumbOne: "Building Your Application",
              breadcrumbTwo: "NextJs",
              number: 4,
            },
            {
              title: "Username + Email Signup",
              url: "#",
              isActive: false,
              breadcrumbOne: "Building Your Application",
              breadcrumbTwo: "NextJs",
              number: 5,
            },
            {
              title: "Username + Email Login",
              url: "#",
              isActive: false,
              breadcrumbOne: "Building Your Application",
              breadcrumbTwo: "NextJs",
              number: 6,
            },
            {
              title: "Email + OTP Signin Verification",
              url: "#",
              isActive: false,
              breadcrumbOne: "Building Your Application",
              breadcrumbTwo: "NextJs",
              number: 7,
            },
            {
              title: "New Password creation",
              url: "#",
              isActive: false,
              breadcrumbOne: "Building Your Application",
              breadcrumbTwo: "NextJs",
              number: 8,
            },
            {
              title: "Google OAuth",
              url: "#",
              isActive: false,
              breadcrumbOne: "Building Your Application",
              breadcrumbTwo: "NextJs",
              number: 9,
            },
            {
              title: "Github OAuth",
              url: "#",
              isActive: false,
              breadcrumbOne: "Building Your Application",
              breadcrumbTwo: "NextJs",
              number: 10,
            },
          ],
        },
      ],
    },
  ],
};
