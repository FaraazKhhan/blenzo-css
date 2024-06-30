import React, { PropsWithChildren } from 'react'
import Sidebar from './Sidebar'

export function DocsLayout({ children }: PropsWithChildren) {
    return (
        <main className="main height-100vh min-height-700 max-height-800">
            <div className="container max-width-1100 flex">
                <Sidebar />
                {children}
            </div>
        </main>
    )
}