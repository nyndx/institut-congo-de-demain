import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Home" pathname={location.pathname} />
    <div className="flex items-center justify-center mx-auto font-sans mx-w-none prose min-h-40vh">
      <div>
        <figure>
          <blockquote className="mx-0 text-sm italic sm:text-xl">
            Lorsque nous nous y attendons le moins, la vie nous met au défi de
            tester notre courage et notre volonté de changer ; à un tel moment,
            il est inutile de prétendre que rien ne s'est passé ou de dire que
            nous ne sommes pas encore prêts. Le défi n'attendra pas. La vie ne
            regarde pas en arrière. Une semaine est plus que suffisante pour
            nous permettre de décider si nous acceptons ou non notre destin.
          </blockquote>
          <figcaption className="text-right ">
            <span className="block text-right sm:text-lg">
              &mdash;Paulo Coelho.
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </Layout>
)

export default IndexPage
