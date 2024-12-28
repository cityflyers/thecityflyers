import {
  Home,
  Building2,
  Plane,
  Hotel,
  Palmtree,
  Car,
  Calendar,
  Stamp,
  Shield,
  AlertCircle,
  Newspaper,
  FileText,
  Tag,
} from "lucide-react";

export const LANGUAGES = [
  { code: "US", name: "English", native: "English" },
  { code: "ES", name: "Español", native: "Español" },
  { code: "FR", name: "Français", native: "Français" },
  { code: "DE", name: "Deutsch", native: "Deutsch" },
  { code: "IT", name: "Italiano", native: "Italiano" },
  { code: "PT", name: "Português", native: "Português" },
];

export const NOTIFICATIONS = [
  {
    id: "1",
    title: "Special Offer",
    message: "30% off on international flights!",
    time: "5 mins ago",
  },
  {
    id: "2",
    title: "Booking Confirmed",
    message: "Your hotel booking has been confirmed",
    time: "1 hour ago",
  },
  {
    id: "3",
    title: "Price Alert",
    message: "Prices dropped for your saved flight",
    time: "2 hours ago",
  },
];

export const NAVIGATION = [
  { title: "Home", icon: Home, href: "/" },
  { title: "Services", icon: Building2, href: "/services" },
  { title: "Flights", icon: Plane, href: "/flights" },
  { title: "Hotels", icon: Hotel, href: "/hotels" },
  { title: "Holidays", icon: Palmtree, href: "/holidays" },
  { title: "Cars", icon: Car, href: "/cars" },
  { title: "Calendar", icon: Calendar, href: "/calendar" },
  { title: "Visa", icon: Stamp, href: "/visa" },
  { title: "Insurance", icon: Shield, href: "/insurance" },
  { title: "Alerts", icon: AlertCircle, href: "/alerts" },
  { title: "News", icon: Newspaper, href: "/news" },
  { title: "Guides", icon: FileText, href: "/guides" },
  { title: "Offers", icon: Tag, href: "/offers" },
];
