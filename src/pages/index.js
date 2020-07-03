import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mx-auto mt-8 space-y-8 font-sans md:px-6 md:mt-16 prose">
      <figure>
        <blockquote>
          <p className="text-xl italic sm:text-2xl md:text-3xl">
            <em>
              "Lorsque nous nous y attendons le moins, la vie nous met au défi
              de tester notre courage et notre volonté de changer ; à un tel
              moment, il est inutile de prétendre que rien ne s'est passé ou de
              dire que nous ne sommes pas encore prêts. Le défi n'attendra pas.
              La vie ne regarde pas en arrière. Une semaine est plus que
              suffisante pour nous permettre de décider si nous acceptons ou non
              notre destin".
            </em>
          </p>
        </blockquote>
        <figcaption className="mr-8 text-right">
          <span className="block text-lg text-right">&mdash;Paulo Coelho.</span>
        </figcaption>
      </figure>
    </div>
  </Layout>
)

export default IndexPage
