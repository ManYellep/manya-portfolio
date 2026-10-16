import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '../components/site-shell';
export const metadata: Metadata = {title:{default:'Manya Yellepeddy — Curious by nature. Creative by choice.',template:'%s | Manya Yellepeddy'},description:'Computer science student at UIUC, researcher, builder, and classical dancer. Explore the many sides of Manya Yellepeddy.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>}
