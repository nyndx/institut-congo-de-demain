import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="max-w-2xl mt-16  mx-auto space-y-8">
      <h1 className=" text-4xl italic ">
        <em>
          "Lorsque nous nous y attendons le moins, la vie nous met au défi de
          tester notre courage et notre volonté de changer ; à un tel moment, il
          est inutile de prétendre que rien ne s'est passé ou de dire que nous
          ne sommes pas encore prêts. Le défi n'attendra pas. La vie ne regarde
          pas en arrière. Une semaine est plus que suffisante pour nous
          permettre de décider si nous acceptons ou non notre destin".
        </em>
      </h1>
      <h2 className="text-right text-lg">- Paulo Coelho.</h2>
    </div>
  </Layout>
)

export default IndexPage
