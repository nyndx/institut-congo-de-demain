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
              Institut congolais de demain est une organisation à but non
              lucratif et non partisane qui se consacre à la promotion d'idées
              pratiques pour relever les plus grands défis auxquels est
              confrontée la république démocratique du congo.
            </p>
            <p>
              un groupe de réflexion composé des jeunes congolais issus de
              différents milieux professionnels ,éducatifs et de divers secteurs
              de la société à travers le monde. sa mission est de promouvoir et
              de proposer des politiques publiques en matière de réforme
              sociale, d'ordre public, de libre entreprise, de gouvernance
              efficace et de paix.
            </p>
            <p>
              Nous pensons que ces idées, basées sur l'emblème de la RDC
              (justice, Paix et travail), qui est le fondement de notre pays,
              méritent d'être préservées et renouvelées. Nous croyons que les
              solutions les plus efficaces sont en accord avec ces idées et
              peuvent être un moteur de croissance, de développement et de
              stabilité pour notre nation.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Apropos
