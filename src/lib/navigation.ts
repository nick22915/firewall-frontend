import type { LucideIcon } from 'lucide-react';
import {
  Home, Mail, Terminal, Save, SlidersHorizontal, Info, AlertTriangle, Power, Award,
  Settings, Activity, Network, Server, Shield, Package, FileText,
  Globe, DatabaseZap, Router, Filter, FastForward, Wifi, Briefcase, CalendarClock, Edit3, Route, Fingerprint, WifiOff, Users, Anchor, Rss, RadioTower, BarChart3, ListChecks, LayoutDashboard, ShieldAlert, ShieldCheck, FileWarning, ServerCog, History, Settings2, GitFork, UserCircle, FileClock, MapPin, Lock, KeyRound, CircleHelp, CloudCog
} from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  icon: LucideIcon;
  basePath: string;
  subLinks: NavLink[];
}

// Helper to convert to kebab-case for URLs
const toKebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const navigationItems: NavItem[] = [
  {
    label: 'System',
    icon: Settings,
    basePath: '/system',
    subLinks: [
      { href: '/', label: 'Home', icon: Home },
      { href: '/system/mailService', label: 'Mail Service', icon: Mail },
      { href: '/system/sshaccess', label: 'SSH Access', icon: Terminal },
      { href: '/system/backup', label: 'Backup', icon: Save },
      { href: '/system/guiSettings', label: 'GUI Settings', icon: SlidersHorizontal },
      { href: '/system/systemInformation', label: 'System Information', icon: Info },
      { href: '/system/hardwareVulnerabilities', label: 'Hardware Vulnerabilities', icon: AlertTriangle },
      { href: '/system/shutdown', label: 'Shutdown', icon: Power },
      { href: '/system/credits', label: 'Credits', icon: Award },
    ],
  },
  {
    label: 'Status',
    icon: Activity,
    basePath: '/status',
    subLinks: [
      { href: '/status/systemStatus', label: 'System Status', icon: ServerCog }, // Added a generic dashboard
      { href: '/status/memoryStatus', label: 'Memory Status', icon: ServerCog },
      { href: '/status/servicesStatus', label: 'Services Status', icon: ListChecks },
      { href: '/status/mediaStatus', label: 'Media Status', icon: Wifi },
      { href: '/status/networkExternal', label: 'Network (external)', icon: Wifi },
      { href: '/status/networkInternal', label: 'Network (internal)', icon: Wifi },
      { href: '/status/3', label: 'Network (other)', icon: Wifi },
      { href: '/status/4', label: 'OpenVPN: Roadwarrior Statistics', icon: ShieldCheck },       
      { href: '/status/5', label: 'OpenVPN: Net-to-Net Statistics', icon: ShieldCheck },   
      { href: '/status/hardwareGraphs', label: 'Hardware Graphs', icon: BarChart3 },
      { href: '/status/connections', label: 'Connections', icon: Wifi },
      { href: '/status/8', label: 'Net-Traffic', icon: FileClock },
      { href: '/status/mdstat', label: 'Mdstat', icon: History },     
    ],
  },
  {
    label: 'Network',
    icon: Network,
    basePath: '/network',
    subLinks: [
      { href: '/network/zoneConfiguration', label: 'Zone Configuration', icon: Globe },
      { href: '/network/domainName', label: 'Domain Name System', icon: DatabaseZap }, // Changed from DNS
      { href: '/network/webProxy', label: 'Web Proxy', icon: Router },
      { href: '/network/urlFilter', label: 'URL Filter', icon: Filter },
      { href: '/network/updateAcelerator', label: 'Update Accelerator', icon: FastForward },
      { href: '/network/dhcpServer', label: 'DHCP Server', icon: Wifi },
      { href: '/network/captivePortal', label: 'Captive Portal', icon: Users },
      { href: '/network/connectionScheduler', label: 'Connection Scheduler', icon: CalendarClock },
      { href: '/network/editHost', label: 'Edit Host', icon: Edit3 },
      { href: '/network/dnsForwarding', label: 'DNS Forwarding', icon: GitFork },
      { href: '/network/staticRoutes', label: 'Static Routes', icon: Route },
      { href: '/network/assignAddress', label: 'Assign MAC-Address', icon: Fingerprint },
      { href: '/network/wakeonLan', label: 'Wake on Lan', icon: Power },
    ],
  },
  {
    label: 'Services',
    icon: Server,
    basePath: '/services',
    subLinks: [
      { href: '/services/ipSec', label: 'IPsec', icon: Lock },
      { href: '/services/openVpn', label: 'OpenVPN', icon: ShieldCheck },
      { href: '/services/dynamicDns', label: 'Dynamic DNS', icon: CloudCog },
      { href: '/services/timeServer', label: 'Time Server', icon: FileClock },
      { href: '/services/qoServices', label: 'Quality of Service', icon: Settings2 },
      { href: '/services/extraHd', label: 'ExtraHD', icon: Briefcase }, // Assuming ExtraHD is a service/package
    ],
  },
  {
    label: 'Firewall',
    icon: Shield,
    basePath: '/firewall',
    subLinks: [
      { href: '/firewall/firewallRules', label: 'Firewall Rules', icon: ListChecks },
      { href: '/firewall/firewallGroup', label: 'Firewall Groups', icon: Users },
      { href: '/firewall/firewallOption', label: 'Firewall Options', icon: Settings2 },
      { href: '/firewall/intrusionPrevention', label: 'Intrusion Prevention', icon: ShieldAlert },
      { href: '/firewall/ipAddressBlocklist', label: 'IP Address Blocklist', icon: WifiOff },
      { href: '/firewall/locationBlock', label: 'Location Block', icon: MapPin },
      { href: '/firewall/blueAccess', label: 'Blue Access', icon: KeyRound }, 
      { href: '/firewall/ipTables', label: 'IpTables', icon: FileWarning },
    ],
  },
  {
    label: 'Ipfire',
    icon: Package, 
    basePath: '/ipfire',
    subLinks: [
      { href: '/ipfire/pakfire', label: 'Pakfire', icon: Package },
    ],
  },
  {
    label: 'Logs',
    icon: FileText,
    basePath: '/logs',
    subLinks: [
      { href: '/logs/logSummary', label: 'Log Summary', icon: History },
      { href: '/logs/logSettings', label: 'Log Settings', icon: Settings2 },
      { href: '/logs/proxyLogs', label: 'Proxy Logs', icon: FileText },
      { href: '/logs/proxyReports', label: 'Proxy Reports', icon: BarChart3 },
      { href: '/logs/firewallLogs', label: 'Firewall Logs', icon: FileWarning },
      { href: '/logs/firewallLogsIp', label: 'Fw-loggraphs (IP)', icon: BarChart3 },
      { href: '/logs/firewallLogsPort', label: 'Fw-loggraphs (Port)', icon: BarChart3 },
      { href: '/logs/firewallLogsCountry', label: 'Fw-loggraphs (Country)', icon: BarChart3 },
      { href: '/logs/ipsLogs', label: 'IPS Logs', icon: ShieldAlert },
      { href: '/logs/ipAddressBlockingLogs', label: 'IP Address Blocklist Logs', icon: WifiOff },
      { href: '/logs/openVpnLogs', label: 'OpenVPN: Roadwarrior Connections Logs', icon: FileText },
      { href: '/logs/urlFilterLogs', label: 'URL Filter Logs', icon: Filter },
      { href: '/logs/systemLogs', label: 'System Logs', icon: Info },
    ],
  },
];

// Generate full hrefs for sublinks if not already full paths
export const processedNavigationItems = navigationItems.map(item => ({
  ...item,
  subLinks: item.subLinks.map(subLink => ({
    ...subLink,
    // Ensure hrefs are correctly formatted, assuming they are already root-relative
    // If subLink.href was just 'home', this should prepend item.basePath
    // href: subLink.href.startsWith('/') ? subLink.href : `${item.basePath}/${toKebabCase(subLink.label)}`,
  })),
}));

