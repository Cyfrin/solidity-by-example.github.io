import React, { useEffect } from "react"

interface Props {
    title: string
    description: string
}

const SEO: React.FC<Props> = ({ title, description }) => {
    useEffect(() => {
        document.title = title

        const element = document.querySelector("meta[name='description']")
        if (element) {
            element.setAttribute("content", description)
        }
    }, [])

    return null
}

export default SEO
