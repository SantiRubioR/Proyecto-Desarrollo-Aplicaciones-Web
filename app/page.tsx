"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import Home from "@/components/pages/home"
import Recipes from "@/components/pages/recipes"
import Community from "@/components/pages/community"
import Education from "@/components/pages/education"
import Games from "@/components/pages/games"
import Alerts from "@/components/pages/alerts"

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />
      case "recipes":
        return <Recipes />
      case "community":
        return <Community />
      case "education":
        return <Education />
      case "games":
        return <Games />
      case "alerts":
        return <Alerts />
      default:
        return <Home />
    }
  }

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  )
}
