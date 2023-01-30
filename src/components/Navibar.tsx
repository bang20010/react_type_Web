import React from 'react';
import * as data from './links.json';
import "../css/Navibar.css"

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className='links-container'>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className='link'>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

const Nav: React.FC<{}> = () => {
    return (
        <nav className = 'navbar'>
            <div className='logo-container'>
                <span>수원 맛집 알림</span>
            </div>
            <Links links={links} />
        </nav>
    )
}

export default Nav;