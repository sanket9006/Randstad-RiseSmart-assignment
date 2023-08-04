import React from 'react';
import { FaBars } from 'react-icons/fa'; // Importing the Font Awesome Bars icon

export default function ButtonAppBar({ text, setText }) {
    return (
        <div style={{ flexGrow: 1 }}>
            <div style={{ backgroundColor: '#1976D2', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaBars style={{ fontSize: '24px', marginRight: '10px', color: 'white' }} />
                        <h2 style={{ margin: 0, color: 'white' }}>randstad risesmart</h2>
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                        style={{ backgroundColor: 'white', padding: '4px', borderRadius: '5px', border: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
}
