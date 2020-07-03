import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Apropos = () => {
  return (
    <Layout>
      <SEO title="A propos"></SEO>
      <section className="mt-8 md:mt-10">
        <div className="space-y-10">
          <h1 className="leading-9 tracking-tight text-gray-600 sm:leading-10 md:leading-14">
            Ce que nous sommes
          </h1>
          <div className="mt-6 space-y-6 text-lg md:text-xl">
            <p>
              L'institut congolais de demain est un centre de réflexion non
              partisan, à but non lucratif, qui se consacre à la promotion
              d'idées pratiques pour relever les plus grands défis auxquels est
              confrontée la république démocratique du congo.
            </p>
            <p>
              Il a pour mission de promouvoir et d'élaborer des politiques
              publiques fondées sur les idées de réforme sociale, de libre
              marché, de gouvernement limité, de valeurs congolaises
              conservatrices et de paix ,Nous pensons fermement qu'un
              gouvernement efficace peut gagner la confiance de la population et
              etre un moteur , d'innovation, de croissance , de développement et
              de stabilité
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Apropos
