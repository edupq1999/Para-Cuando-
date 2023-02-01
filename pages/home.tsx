import React from 'react'
import Card from '../components/general/Card'
import Interests from '../components/general/Interests'
import Popular from '../components/general/Popular'
import Recents from '../components/general/Recents'
import Suggestions from '../components/general/Suggestions'
import Main from '../components/home/Main'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout
      title='PC | Home'>
        <Main />
        <Popular />
        <Suggestions />
        <Interests />
        <Recents />
    </Layout>
  )
}
